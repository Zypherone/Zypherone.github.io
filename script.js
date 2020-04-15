$(document).on('click', 'a[data-type="slide"]', function(evt) {
  evt.preventDefault();

  //console.log($($(this).attr('href')).get(0).offsetLeft);

  

  $('.slide-holder')[0].scrollTo({
    top: 0,
    left: $($(this).attr('href')).get(0).offsetLeft,
    behavior: 'smooth'
  })

  //.delay('1000', function() {
    //window.location.hash = $(this).attr('href');
    window.history.pushState(null, null, $(this).attr('href'));
  //})

  
  //$('.slide-holder')[0].scrollTo($($(this).attr('href')));
});

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