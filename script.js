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

  window.history.pushState(null, null, $(this).attr('href'));
}

$.each($('.slide'), function(key, value) {

  const elm = {
    prev: $(value.previousElementSibling).attr('id'),
    next: $(value.nextElementSibling).attr('id')
  };

  const button = {
    prev: `<div class="slide-button slide-prev"><a data-type="slide" href="#${elm.prev}"><i class="icon chevron left"><i></a></div>`,
    next: `<div class="slide-button slide-next"><a data-type="slide" href="#${elm.next}"><i class="icon chevron right"><i></a></div>`
  };

  if (elm.prev !== undefined) {
    $(value).prepend(button.prev);
  }
  if  (elm.next !== undefined) {
    $(value).append(button.next);
  }
})

$(document).on('click', 'a[data-type="slide"]', touchAndClickEvent);
$(document).on('touchstart', 'a[data-type="slide"]', touchAndClickEvent);

$(document).on('touchstart', '.slide', startTouch);
$(document).on('touchmove', '.slide', moveTouch);


if (location.hash) {
  console.log(location.hash);
  $('a[data-type="slide"][href="' + location.hash + '"]').trigger('click');
}

var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
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

$('form').on('submit', function(e) {
  e.preventDefault();

  //console.log();

  //console.log(e);

  
  Email.send({
    SecureToken : "a39c81ab-036d-4443-a7bd-bf78b70e4cde",
    To : 'danutuckersaunders@email.com',
    From :  e.currentTarget[1].value,
    Subject : "CONTACT | Name: " + e.currentTarget[0].value + " - " + e.currentTarget[2].value,
    Body : "From: " + e.currentTarget[0].value + "\n" + e.currentTarget[3].value
  }).then(
    message => {
      $('.msg').addClass('msg-sent');

      setTimeout(function() {
        $('.msg').removeClass('msg-sent');
      }, 2000);
    }
  );
  
});

/*
let touchStartX = 0,
    touchEndY   = 0;

    /*
$(document).on('touchstart', '.slide', function(evt) {
  touchStartX = evt.changedTouches[0].screenX;
  touchStartY = evt.changedTouches[0].screenY;
});

$(document).on('touchend', '.slide', function(evt) {

  //console.log(touchStart,   evt.changedTouches[0].screenX);
  const touchEndX = evt.changedTouches[0].screenX;
  const touchEndY = evt.changedTouches[0].screenY;

    console.log('X', touchStartX, touchEndX);
    console.log('Y',touchStartY, touchEndY);

  if (touchStartX !== 0 && touchStartX !== touchEndX) {
    
    const touchDirection = touchStartX < touchEndX ? 'prev' : 'next';

    const elmId = $($(evt)[0].currentTarget).attr('id');

    $(`#${elmId} .slide-${touchDirection} a`).trigger('click', 'touch');

    
  }

  //touchStart = 0;
});

$('form').on('submit', function() {
  console.log(this);
});

/*


*/