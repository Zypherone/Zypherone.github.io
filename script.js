// Build a touch/click event for the save items
function touchAndClickEvent(evt, type) {

  evt.preventDefault();


  $('.slide').removeClass('active');
  $($(this).attr('href')).addClass('active');

  if (type !== 'touch') {

    $('.slide-holder')[0].scrollTo({
      top: 0,
      left: $($(this).attr('href')).get(0).offsetLeft,
      behavior: 'smooth'
    })

  }

  // Update the history button
  window.history.pushState(null, null, $(this).attr('href'));
}

// Build the next/prev buttons for each slide
$.each($('.slide'), function(key, value) {

  const elm = {
    prev: $(value.previousElementSibling).attr('id'),
    next: $(value.nextElementSibling).attr('id')
  };

  const button = {
    prev: `<div class="slide-button slide-prev"><a data-type="slide" href="#${elm.prev}"><i class="icon chevron left"><i></a></div>`,
    next: `<div class="slide-button slide-next"><a data-type="slide" href="#${elm.next}"><i class="icon chevron right"><i></a></div>`
  };

  // Ensure we don't add them where no slide exist for either prev or next.
  if (elm.prev !== undefined) {
    $(value).prepend(button.prev);
  }
  if  (elm.next !== undefined) {
    $(value).append(button.next);
  }
})

// Apply even delegation for clik and touch events, including swiping.
$(document).on('click', 'a[data-type="slide"]', touchAndClickEvent);
$(document).on('touchstart', 'a[data-type="slide"]', touchAndClickEvent);

$(document).on('touchstart', '.slide', startTouch);
$(document).on('touchmove', '.slide', moveTouch);


// Lets ensure we only trigger for those with # URLs
if (location.hash) {
  $('a[data-type="slide"][href="' + location.hash + '"]').trigger('click');
}

// Lets pre and culculate touch movement for swipe left/right.
var initialX = null;
var initialY = null;
 
// Let grab the initial touch value
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 

// Lets determind whether its a valid swipe.
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  const currentX = e.touches[0].clientX;
  const currentY = e.touches[0].clientY;
 
  const diffX = initialX - currentX;
  const diffY = initialY - currentY;

  if(initialX !== 0 && initialX !== currentX) {
    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally

      const touchDirection = (diffX > 0) ? 'next' : 'prev';

      const elmId = $($(e)[0].currentTarget).attr('id');

      $(`#${elmId} .slide-${touchDirection} a`).trigger('click', 'touch');
    } 
  }
  initialX = null;
  initialY = null;

  
  e.preventDefault();
};

// Build the form checks.

$('form').on('submit', function(e) {
  e.preventDefault();

  $('.msg').addClass('active');
  $('.msg .msg-waiting').addClass('active');

  $('form input').attr('disabled', 'disabled');
  $('form textarea').attr('disabled', 'disabled');
  
  Email.send({
    SecureToken : "a39c81ab-036d-4443-a7bd-bf78b70e4cde",
    To : 'danutuckersaunders@email.com',
    From :  e.currentTarget[1].value,
    Subject : "CONTACT | Name: " + e.currentTarget[0].value + " - " + e.currentTarget[2].value,
    Body : "From: " + e.currentTarget[0].value + "<br /><br /><br />" + e.currentTarget[3].value
  }).then(
    message => {
      $('.msg .msg-waiting').removeClass('active');
      $('.msg .msg-success').addClass('active');
      $('form').get(0).reset();

      setTimeout(function() {
        $('.msg').removeClass('active');
        $('.msg .msg-success').removeClass('active');

        $('form input').removeAttr('disabled');
        $('form textarea').removeAttr('disabled');
        
      }, 2000);
    }
  );
  
});