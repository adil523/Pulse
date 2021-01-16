$(document).ready(function () {
    $('.carousel_inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/right.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
            }
        }]
    });
    $('ul.catalog_item ').on('click', 'li:not(.catalog_link_active)', function() {
        $(this)
          .addClass('catalog_link_active').siblings().removeClass('catalog_link_active')
          .closest('div.container').find('div.catalog_tabs').removeClass('catalog_tabs_active').eq($(this).index()).addClass('catalog_tabs_active');
      });
      $('.content_details').each(function(i) {
          $(this).on('click', function(e){
              e.preventDefault();
              $('.content_wrapper_item').eq(i).toggleClass('content_wrapper_item_active'),
              $('.content_wrapper_list').eq(i).toggleClass('content_wrapper_list_active');
          })
      })
      
      $('.catalog_back').each(function(i) {
        $(this).on('click', function(e){
            e.preventDefault();
            $('.content_wrapper_item').eq(i).toggleClass('content_wrapper_item_active'),
            $('.content_wrapper_list').eq(i).toggleClass('content_wrapper_list_active');
        })
    });

    //modal

    $('[data-modal=consulting]').on('click', function() {
        $('.overlay, #consulting').fadeIn('slow');
    });
    $('.modal_close').on('click', function() {
        $('.overlay, #order, #consulting, #thanks').fadeOut('slow');
    });
  

    $('.content_btn').each(function(i){
        $(this).on('click', function(){
            $('#order .modal_descr').text($('.content_subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    //mask
    $("input[name=tel]").mask("+7 (999) 999-99-99");

    //validate

    $('#consulting_form').validate();
    $('#consulting form').validate({
        rules:{
            name: "required",
            minlength: 5,
            tel: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Введите свое имя",
                minlength: "At least {0} characters required!"},
            tel: "Введите свой номер",
            email: {
              required: "Введите Вашу почту",
              email: "Ваш почта не соответсвуюет"
            }
          }
    });
    // $('#order form').validate();
});