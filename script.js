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

let touchStart = 0;

$(document).on('touchstart', '.slide', function(evt) {
  touchStart = evt.changedTouches[0].screenX;
});

$(document).on('touchend', '.slide', function(evt) {
  if (touchStart !== 0) {
    const touchEnd = evt.changedTouches[0].screenX;
    const touchDirection = touchStart < touchEnd ? 'prev' : 'next';

    const elmId = $($(evt)[0].currentTarget).attr('id');

    $(`#${elmId} .slide-${touchDirection} a`).trigger('click', 'touch');
    
    touchStart = 0;
  }
});

