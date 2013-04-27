$(document).ready(function () {

  $('.recipe > img').on('click', function(){
    var details = $(this).next();
    $.fancybox(details, {
      wrapCSS: 'recipe' 
    });
  });

  $('header nav li a[href=#form]').fancybox();

  $('.button').on('click', function(event) {
    event.preventDefault();
    $.fancybox($('#steps-preview li'), {
      tpl: {
        wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-outer"><div class="fancybox-inner steps"></div></div></div>',
        image    : '<img class="fancybox-image" src="{href}" alt="" />',
        error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },
      loop: false,
      minHeight: 200
    });
  });

  $('.preview-button').on('click', function(event) {
      event.preventDefault();
      $.fancybox($('#steps-preview'), {
        tpl: {
          wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-outer"><div class="fancybox-inner preview"></div></div></div>',
          image    : '<img class="fancybox-image" src="{href}" alt="" />',
          error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
          closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
        },
        autoWidth: false,
      });
  });
 
  $('.help').on('click', function() {
    if(window.outerWidth >= 992) {
      introJs().start();
    }
  });
});





