(function($){

	$.fn.modal = function(options){

		// BEGIN: plagin options

		options = $.extend({
			mainClass: 'c-modal'
		}, options);

		// END: plagin options

		var wFlagBox,
			hFlagBox,

			$block				= this,
			$body				= $('body'),

			mainClass			= options.mainClass,

			$activeClass		= mainClass + '_active',
			$activeBodyClass	= $block.data(mainClass + '-active-class') || '_modal_active',

			$box 				= $block.find('.' + mainClass + '__box'),
			$boxWrap			= $block.find('.' + mainClass + '__box-wrapper'),
			$inner	 			= $block.find('.' + mainClass + '__inner'),
			$boxOverlay			= $block.find('.' + mainClass + '__overlay'),
			$boxClose			= $block.find('.' + mainClass + '__close'),
			$boxCloseNoAnchor	= $('.' + mainClass + '__close_noanchor'),
			$boxBind 			= $('.' + mainClass + '__bind'),

			boxzIndex			= options.boxzIndex;

		$box.each(function(){

			var $thisBox = $(this);

			wFlagBox = true;
			hFlagBox = true;

			$boxClose
				.add( $boxCloseNoAnchor )
				.add( $boxBind );
		});

		$boxCloseNoAnchor.click(function() {

			var index 			= $(this).data(mainClass + '-number')
				$thisBoxWrap	= $block.filter('[data-' + mainClass + '-number="' + index + '"]');

			closeBox($thisBoxWrap);
		});

		$boxClose.click(function() {
			
			closeBox( $(this).closest( $block ) );
		});
		
		$boxBind.click(function() {

			var index 			= $(this).data(mainClass + '-number'),
				$thisBoxWrap	= $block.filter('[data-' + mainClass + '-number="' + index + '"]'),
				$thisBox		= $thisBoxWrap.find('.' + mainClass + '__box'),
				attribut		= $thisBoxWrap.attr('data-attribut');

			if (attribut) {

				$body.attr('data-attribut', attribut);
			}

			$body.addClass( $activeBodyClass );
			$thisBoxWrap.addClass( $activeClass );

		});

		function closeBox($this) {

			var index 			= $this.data(mainClass + '-number'),
				$thisBoxWrap	= $block.filter('[data-' + mainClass + '-number="' + index + '"]');

			$thisBoxWrap.removeClass( $activeClass );
			$body.removeAttr('data-attribut');
			$body.removeClass( $activeBodyClass );
		}
	}
	
})(jQuery);