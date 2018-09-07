/*
 * Copyright (C) 2012 PrimeBox
 * 
 * This work is licensed under the Creative Commons
 * Attribution 3.0 Unported License. To view a copy
 * of this license, visit
 * http://creativecommons.org/licenses/by/3.0/.
 * 
 * Documentation available at:
 * http://www.primebox.co.uk/projects/cookie-bar/
 * 
 * When using this software you use it at your own risk. We hold
 * no responsibility for any damage caused by using this plugin
 * or the documentation provided.
 */
 
(function($){
  'use strict';

	$.cookieBar = function(options,val) {
	
		if(options=='cookies') {
			var doReturn = 'cookies';
		} else if(options=='set') {
			var doReturn = 'set';
		} else {
			var doReturn = false;
		}
		
		
		<?php 
		
			$cookie_message = ACF_GF('cookiebar_notice', 'option');
			$accept_button = ACF_GF('cookiebar_accept_btn', 'option');
			$accept_label = ACF_GF('cookiebar_btn_text', 'option');
			$policy_button = ACF_GF('cookiebar_policy_btn', 'option');
			$policy_label = ACF_GF('cookiebar_policy_btn_text', 'option');
			$policy_url = ACF_GF('cookiebar_policy_btn_link', 'option');
			$accept_button = ACF_GF('cookiebar_accept', 'option');
			$accept_scroll = ACF_GF('cookiebar_scroll', 'option')
		
		?>
		
		
		
		var defaults = {
			// Message displayed on bar
			message: '<span><?php if( $cookie_message ) { echo esc_html( $cookie_message ); } else { echo esc_html__( 'This website uses cookies to ensure you get the best experience on our website.', 'hannah-cd' ); } ?></span>', 
			
			// Set to true to show accept/enable button
			acceptButton: <?php if ( ! $accept_button ) { echo 'true'; } else { echo 'false'; } ?>, 
			
			// Text on accept/enable button
			acceptText: '<?php if( $accept_label ) { echo esc_html( $accept_label ); } else { echo esc_html__( 'I understand', 'hannah-cd' ); } ?>', 
			
			// Function to run after accept
			acceptFunction: function(cookieValue){if(cookieValue!='enabled' && cookieValue!='accepted') window.location = window.location.href;}, 
			
			// Set to true to show decline/disable button
			declineButton: false, 
			
			// Text on decline/disable button
			declineText: 'Disable Cookies', 
			
			// Function to run after decline
			declineFunction: function(cookieValue){if(cookieValue=='enabled' || cookieValue=='accepted') window.location = window.location.href;},	
			
			// Set to true to show Privacy Policy button
			policyButton: <?php if ( ! $policy_button ) { echo 'true'; } else { echo 'false'; } ?>, 
			
			// Text on Privacy Policy button
			policyText: '<?php if( $policy_label ) { echo esc_html( $policy_label ); } else { echo esc_html__( 'Privacy Policy', 'hannah-cd' ); } ?>', 
			
			// URL of Privacy Policy
			policyURL: '<?php echo esc_url( $policy_url ); ?>',
			
			// Set to true for cookies to be accepted automatically. Banner still shows
			autoEnable: true, 
			
			// Set to true to silently accept cookies when visitor moves to another page
			acceptOnContinue: <?php if ( $accept_button ) { echo 'true'; } else { echo 'false'; } ?>, 
			
			// Set to true to accept cookies when visitor scrolls X pixels up or down
			acceptOnScroll: <?php if ( $accept_scroll ) { echo 'true'; } else { echo 'false'; } ?>, 
			
			// Set to true to accept cookies when visitor clicks anywhere on the page
			acceptAnyClick: false, 
			
			// Number of days for cookieBar cookie to be stored for
			expireDays: 365, 
			
			// Renew the cookie upon revisit to website
			renewOnVisit: false, 
			
			// Force cookieBar to show regardless of user cookie preference
			forceShow: false, 
			
			// Options: slide, fade, hide
			effect: 'slide', 
			
			// Element to append/prepend cookieBar to. Remember "." for class or "#" for id.
			element: 'body', 
			
			// Set to true for cookieBar HTML to be placed at base of website. Actual position may change according to CSS
			append: false, 
			
			// Set to true to add the class "fixed" to the cookie bar. Default CSS should fix the position
			fixed: false, 
			
			// Force CSS when fixed, so bar appears at bottom of website
			bottom: false, 
			
			// Can be set in CSS, although some may prefer to set here
			zindex: '', 
			
			// Location of privacy policy
			domain: String(window.location.hostname), 
			
			// Where visitor has come from
			referrer: String(document.referrer) 
		};
		
		var options = $.extend(defaults,options);
		
		//Sets expiration date for cookie
		var expireDate = new Date();
		expireDate.setTime(expireDate.getTime()+(options.expireDays*86400000));
		expireDate = expireDate.toGMTString();
		
		var cookieEntry = 'cb-enabled={value}; expires='+expireDate+'; path=/';
		
		//Retrieves current cookie preference
		var i,cookieValue='',aCookie,aCookies=document.cookie.split('; ');
		for (i=0;i<aCookies.length;i++){
			aCookie = aCookies[i].split('=');
			if(aCookie[0]=='cb-enabled'){
    			cookieValue = aCookie[1];
			}
		}
		//Sets up default cookie preference if not already set
		if(cookieValue=='' && doReturn!='cookies' && options.autoEnable){
			cookieValue = 'enabled';
			document.cookie = cookieEntry.replace('{value}','enabled');
		}else if((cookieValue=='accepted' || cookieValue=='declined') && doReturn!='cookies' && options.renewOnVisit){
			document.cookie = cookieEntry.replace('{value}',cookieValue);
		}
		if(options.acceptOnContinue){
			if(options.referrer.indexOf(options.domain)>=0 && String(window.location.href).indexOf(options.policyURL)==-1 && doReturn!='cookies' && doReturn!='set' && cookieValue!='accepted' && cookieValue!='declined'){
				doReturn = 'set';
				val = 'accepted';
			}
		}
		if(doReturn=='cookies'){
			//Returns true if cookies are enabled, false otherwise
			if(cookieValue=='enabled' || cookieValue=='accepted'){
				return true;
			}else{
				return false;
			}
		}else if(doReturn=='set' && (val=='accepted' || val=='declined')){
			//Sets value of cookie to 'accepted' or 'declined'
			document.cookie = cookieEntry.replace('{value}',val);
			if(val=='accepted'){
				return true;
			}else{
				return false;
			}
		}else{
			//Sets up enable/accept button if required
			var message = options.message.replace('{policy_url}',options.policyURL);
			
			if(options.acceptButton){
				var acceptButton = '<a href="" class="cb-enable">'+options.acceptText+'</a>';
			}else{
				var acceptButton = '';
			}
			//Sets up disable/decline button if required
			if(options.declineButton){
				var declineButton = '<a href="" class="cb-disable">'+options.declineText+'</a>';
			}else{
				var declineButton = '';
			}
			//Sets up privacy policy button if required
			if(options.policyButton){
				var policyButton = '<a href="'+options.policyURL+'" class="cb-policy">'+options.policyText+'</a>';
			}else{
				var policyButton = '';
			}
			//Whether to add "fixed" class to cookie bar
			if(options.fixed){
				if(options.bottom){
					var fixed = ' class="fixed bottom"';
				}else{
					var fixed = ' class="fixed"';
				}
			}else{
				var fixed = '';
			}
			if(options.zindex!=''){
				var zindex = ' style="z-index:'+options.zindex+';"';
			}else{
				var zindex = '';
			}
			
			//Displays the cookie bar if arguments met
			if(options.forceShow || cookieValue=='enabled' || cookieValue==''){
				if(options.append){
					$(options.element).append('<div id="cookie-bar"'+fixed+zindex+'><p>'+message+acceptButton+declineButton+policyButton+'</p></div>');
				}else{
					$(options.element).prepend('<div id="cookie-bar"'+fixed+zindex+'><p>'+message+acceptButton+declineButton+policyButton+'</p></div>');
				}
			}
			
			var removeBar = function(func){
				if(options.acceptOnScroll) $(document).off('scroll');
				if(typeof(func)==='function') func(cookieValue);
				if(options.effect=='slide'){
					$('#cookie-bar').slideUp(300,function(){$('#cookie-bar').remove();});
				}else if(options.effect=='fade'){
					$('#cookie-bar').fadeOut(300,function(){$('#cookie-bar').remove();});
				}else{
					$('#cookie-bar').hide(0,function(){$('#cookie-bar').remove();});
				}
				$(document).unbind('click',anyClick);
			};
			var cookieAccept = function(){
				document.cookie = cookieEntry.replace('{value}','accepted');
				removeBar(options.acceptFunction);
			};
			var cookieDecline = function(){
				var deleteDate = new Date();
				deleteDate.setTime(deleteDate.getTime()-(864000000));
				deleteDate = deleteDate.toGMTString();
				aCookies=document.cookie.split('; ');
				for (i=0;i<aCookies.length;i++){
					aCookie = aCookies[i].split('=');
					if(aCookie[0].indexOf('_')>=0){
						document.cookie = aCookie[0]+'=0; expires='+deleteDate+'; domain='+options.domain.replace('www','')+'; path=/';
					}else{
						document.cookie = aCookie[0]+'=0; expires='+deleteDate+'; path=/';
					}
				}
				document.cookie = cookieEntry.replace('{value}','declined');
				removeBar(options.declineFunction);
			};
			var anyClick = function(e){
				if(!$(e.target).hasClass('cb-policy')) cookieAccept();
			};
			
			$('#cookie-bar .cb-enable').click(function(){cookieAccept();return false;});
			$('#cookie-bar .cb-disable').click(function(){cookieDecline();return false;});
			if(options.acceptOnScroll){
				var scrollStart = $(document).scrollTop(),scrollNew,scrollDiff;
				$(document).on('scroll',function(){
					scrollNew = $(document).scrollTop();
					if(scrollNew>scrollStart){
						scrollDiff = scrollNew - scrollStart;
					}else{
						scrollDiff = scrollStart - scrollNew;
					}
					if(scrollDiff>=Math.round(options.acceptOnScroll)) cookieAccept();
				});
			}
			if(options.acceptAnyClick){
				$(document).bind('click',anyClick);
			}
		}
	};
	
	$.cookieBar({
		<?php if ( $accept_scroll ) { ?>
			acceptOnScroll: 200
		<?php } ?>
	});
	
})(jQuery);

