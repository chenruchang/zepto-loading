(function ($) {

  var Loading = function (element) {
    this.element = $(element);
    this.hide();
  };

  Loading.prototype = {
    constructor: Loading,
    show: function () {
      var event = $.Event('loading:show');
      this.element.trigger(event);
      this.element.show();

    },
    hide: function () {
      var event = $.Event('loading:hide');
      this.element.trigger(event);
      this.element.hide();
    }
  };

  function Plugin() {
    return this.each(function () {
      var element = $(this);
      var data = element.data('zepto.loading');
      if (!data) {
        element.data('zepto.loading', new Loading(this));
      }
    });
  }

  $.fn.loading = Plugin;

})(window.Zepto);

