"use strict";!function(_){_.fn.modal=function(a){a=_.extend({mainClass:"c-modal"},a);var n=this,d=_("body"),r=a.mainClass,e=r+"_active",s=n.data(r+"-active-class")||"_modal_active",t=n.find("."+r+"__box"),i=(n.find("."+r+"__box-wrapper"),n.find("."+r+"__inner"),n.find("."+r+"__overlay"),n.find("."+r+"__close")),o=_("."+r+"__close_noanchor"),c=_("."+r+"__bind");a.boxzIndex;function l(a){var t=a.data(r+"-number");n.filter("[data-"+r+'-number="'+t+'"]').removeClass(e),d.removeAttr("data-attribut"),d.removeClass(s)}t.each(function(){_(this);!0,i.add(o).add(c)}),o.click(function(){var a=_(this).data(r+"-number");$thisBoxWrap=n.filter("[data-"+r+'-number="'+a+'"]'),l($thisBoxWrap)}),i.click(function(){l(_(this).closest(n))}),c.click(function(){var a=_(this).data(r+"-number"),t=n.filter("[data-"+r+'-number="'+a+'"]'),i=(t.find("."+r+"__box"),t.attr("data-attribut"));i&&d.attr("data-attribut",i),d.addClass(s),t.addClass(e)})}}(jQuery);