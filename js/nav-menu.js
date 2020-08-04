// III. STICKY BACKGROUND SCROLL: Used for holding the exact postion of body whenever sidebar is called. 
$(document).ready(function(){
	
	// Structural Requirement: Enlosed sidebar with sticky-nav class div. And add sticky-layout class name on div you want to hold position. Add sticky-overflow class name to have a grey cover to hide contents. 
	  
	  var recall_top;
	  var window_x = $(window).width();
	  
	  var stuckPos = function(){
		
		// Show Sticky Nav:
		$(".sticky-nav").toggleClass("sticky-overlay");
		$(".sticky-overlay").animate({left:'0px'},400);  // Show animation on
		
		// 1. Relative Position Reset
		if($(".sticky-layout").hasClass("sticky-body")){
			recall_top = -1*($(".sticky-body").offset().top);
			$(".sticky-layout").data("recall_top",recall_top); // save position to scroll
			$(".sticky-layout").css("top",0); // revert to initial top pos.
			$(".sticky-layout").css("left",0);
			
			$(".sticky-layout").toggleClass("sticky-body"); // toggle class

			
		} // end if
			
		
		else{
			
		
			// 2. Prompt Fixed Position
			 var scrolly_pos=$(window).scrollTop();
			 $(".sticky-layout").data("greet",scrolly_pos);
						
			$(".sticky-layout").toggleClass("sticky-body");
			
			$(".sticky-layout").css("top",-1*scrolly_pos);
			$(".sticky-layout").css("left",0);
			
		} // end else
			
			
		//3. Scroll to data position. 
		$(document).scrollTop($(".sticky-layout").data("recall_top"));
		
		
		if($(".sticky-nav").hasClass("sticky-overlay")){
			$(document).scrollTop(0);
			
		}
		
	} // end
	  $('#sticky-btn').on("click",stuckPos)// end click
	
	// EXIT : when overflow is clicked.
		$('.sticky-overflow').on("click", function(){
		
		// Show Sticky Nav:
		
		$(".sticky-nav").css("left",400);
		$(".sticky-nav").css("height",400);
		$(".sticky-nav").removeClass("sticky-overlay");
		
		
		// 1. Relative Position Reset
		if($(".sticky-layout").hasClass("sticky-body")){
			
			recall_top = -1*($(".sticky-body").offset().top);
			$(".sticky-layout").data("recall_top",recall_top); // save position to scroll
			$(".sticky-layout").css("top",0); // revert to initial top pos.
			$(".sticky-layout").css("left",0);
			$(".sticky-layout").toggleClass("sticky-body"); // toggle class
			
		} // end if
			
		
		else{
			// 2. Prompt Fixed Position
			 var scrolly_pos=$(window).scrollTop();
			 $(".sticky-layout").data("greet",scrolly_pos);
			
			$(".sticky-layout").toggleClass("sticky-body");
			$(".sticky-layout").css("top",-1*scrolly_pos);
			$(".sticky-layout").css("left",0);
			
		} // end else
			
			
		//3. Scroll to data position. 
		$(document).scrollTop($(".sticky-layout").data("recall_top"));
		
		if($(".sticky-nav").hasClass("sticky-overlay")){
		$(document).scrollTop(0);
		}
		
		})// end click
		
		
		}); // end sticky scroll
		
		
		// Toggle Navigation
		$(function(){
			$(".open-menu").click(function(){
					$(this).css("display","none");
					$(".close-menu").css("display","block");
			});
			
			$(".close-menu").click(function(){
					$(this).css("display","none");
					$(".open-menu").css("display","block");
			});
		});
		
		
		// Allow smooth Scrolling Mobile Nav
		$(function(){
			
			$(".nav-mobile nav a").click(function(){
					$(".close-menu").css("display","none");
					$(".open-menu").css("display","block");
			
			// Show Sticky Nav:
			
			// REMOVE FIXED POSITION OF BACKGROUND
			$(".sticky-nav").css("left",400);
			$(".sticky-nav").removeClass("sticky-overlay");
			
			
			// 1. Relative Position Reset
			if($(".sticky-layout").hasClass("sticky-body")){
				
				recall_top = -1*($(".sticky-body").offset().top);
				$(".sticky-layout").data("recall_top",recall_top); // save position to scroll
				$(".sticky-layout").css("top",0); // revert to initial top pos.
				$(".sticky-layout").css("left",0);
				$(".sticky-layout").toggleClass("sticky-body"); // toggle class
				
			} // end if
				
			
			else{
				// 2. Prompt Fixed Position
				 var scrolly_pos=$(window).scrollTop();
				 $(".sticky-layout").data("greet",scrolly_pos);
				
				$(".sticky-layout").toggleClass("sticky-body");
				$(".sticky-layout").css("top",-1*scrolly_pos);
				$(".sticky-layout").css("left",0);
				
			} // end else
				
				
			//3. Scroll to data position. 
			$(document).scrollTop($(".sticky-layout").data("recall_top"));
			
			if($(".sticky-nav").hasClass("sticky-overlay")){
			$(document).scrollTop(0);
			}
			
			});
			
			
			
			// Window Resize - Remove / Reset Mobile Nav.
			
			$(window).resize(function(){
				// Show Sticky Nav:
			
				$(".sticky-nav").css("left",400);
				$(".sticky-nav").css("height",400);
				$(".sticky-nav").removeClass("sticky-overlay");
				
				$(".open-menu").css("display","block");
				$(".close-menu").css("display","none");
			
			
				// 1. Relative Position Reset
				if($(".sticky-layout").hasClass("sticky-body")){
				
				recall_top = -1*($(".sticky-body").offset().top);
				$(".sticky-layout").data("recall_top",recall_top); // save position to scroll
				$(".sticky-layout").css("top",0); // revert to initial top pos.
				$(".sticky-layout").css("left",0);
				$(".sticky-layout").toggleClass("sticky-body"); // toggle class
				
				} // end if
			});
			
			});