"use strict";!function(t){t(document).ready(function(){t(".c-accordion").length&&t(".c-accordion").each(function(c,n){var o=t(this),i=o.find(".c-accordion__item"),a=o.find(".c-accordion__bind"),s=t(this).data("c-accordion-class");function d(c){c.hasClass(s)?c.removeClass(s):c.addClass(s).siblings().removeClass(s)}d(i.eq(0)),a.click(function(c){d(t(this).closest(i))})}),t(".c-modal").length&&t(".c-modal").modal()})}(jQuery);