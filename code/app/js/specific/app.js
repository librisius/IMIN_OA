(function($) {

	$(document).ready(function() {

		(function() {

			if ( $('.c-accordion').length ) {

				$('.c-accordion').each( function( index, el ) {

					var $this				= $( this ),
						$item				= $this.find( '.c-accordion__item' ),
						$bind				= $this.find( '.c-accordion__bind' ),
						className			= $(this).data( 'c-accordion-class' );

					classActive( $item.eq(2) );

					$bind.click( function( event ) {

						classActive( $( this ).closest( $item ) );
					});

					function classActive( $element ) {

						if ( !$element.hasClass( className ) ) {

							$element.addClass( className ).siblings().removeClass( className );

						} else {

							$element.removeClass( className );
						}
					}
				});
			}
		})();
	});

	$(window).load(function() {

		(function() {

			if ( $('.c-block').length ) {
			}
		})();
	});

})(jQuery);