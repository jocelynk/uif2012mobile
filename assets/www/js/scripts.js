/*
* jquery.dropdown.js
* Apply sexy dropdowns on any ul with child ul.
* Depends on: jquery.hoverIntent.js
*/

$.fn.dropdown = function(options) {
var defaults = {};
  var opts = $.extend(defaults, options);

  // Apply on those items with children
  this.each(function() {
    $(this).find('li').each(function() {
      if($(this).find("ul").length > 0) {
        $(this).addClass("hasChildren");
        $(this).find('> a').wrapInner("<span></span>");
      }
    });
  });

  // Apply on all list items
  $(this).find("li").on('hover', function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
};

$(function() {

  // Calling the jquery dropdown
  $('nav').dropdown();
  /*
  * Applicable only to Mobile-nav
  */

  // Checking if the top-right button is visible.
  if ($("nav a.btn-navbar").is(":visible")) {

    // Making the dropdown magically appear onclick/touch.
    var obj = $('nav a.btn-navbar').get(0);
    $('nav a.btn-navbar').on('click', function() {
  // obj.addEventListener('touchstart', function(e) { e.preventDefault();
      $('ul#menu').slideToggle('fast', function() {
        $('ul#menu').css({

        // The height must be fixed for the native-scrolling on iOS
        'height': $(this).height(),

        // But we don't want the height of the nav to exceed the viewport.
        'max-height': $(window).height() + 20
        });
      });

      $(this).toggleClass('active');

    }); // end on.click

    // Making the children appear on click/touch
    console.log($('ul#menu li.hasChildren a'));
    $('ul#menu li.hasChildren a').on('click', function() {
      $(this).parent().children('ul').slideToggle('fast', function() {

          $('ul#menu').css({

          // Resetting the height to auto in order to expand/contract the menu upon interaction.
          'height': 'auto',

          // But we don't want the height of the nav to exceed the viewport.
          'max-height': $(window).height() + 20
          });

        }); // end slideToggle
    }); // end on.click

 } // end visibility check

});