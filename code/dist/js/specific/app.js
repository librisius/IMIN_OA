"use strict";!function(d){d(document).ready(function(){d(".c-accordion").length&&d(".c-accordion").each(function(c,n){var i=d(this),o=i.find(".c-accordion__item"),s=i.find(".c-accordion__bind"),a=d(this).data("c-accordion-class");function t(c){c.hasClass(a)?c.removeClass(a):c.addClass(a).siblings().removeClass(a)}t(o.eq(2)),s.click(function(c){t(d(this).closest(o))})})}),d(window).load(function(){d(".c-block").length})}(jQuery);