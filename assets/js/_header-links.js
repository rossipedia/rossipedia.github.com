(function($) {

  $('h1,h2,h3,h4,h5').filter('[id]').on('click', function() {
    location.hash = '#' + this.id;
  });

})(window.jQuery);
