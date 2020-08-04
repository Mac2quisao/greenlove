$(function(){
		
	/*
		SANDPIPER BIRDWATCH : Y- Responsive Desktop/Mobile Api
		
		a. Usage: Sandpiper is used to create responsive div heights. 
		
		b. Class Naming Convention:
		
			sandpiper_row = added to row divs to request for responsiveness including header row. Note that for smaller screen sizes this should have a suffix of "-sm". 
			
			unsandpiper_row = removes reponsiveness of div height. Used for contents that overflows the div height.
			
			sandpiper_row-sm = used for divs that retains responsive height even in mobile or small screen browsers.
			
		c. Requirements:
			- Head viewport should be set.
			- Use % scaling on width.
		
	*/
	
	
	
	
	function sandpiper_birdwatch(){

	var row_Y_classes = {
		wholeY: {
			class: ".dynamic-y", 
			altClass: "sandpiper_row", 
			value: 1 },
			
		halfY: {
			class: ".dynamic-y-half", 
			altClass: "sandpiper_row_half", 
			value: 0.5 }
		
	}

	// Prevent from displaying contents

	var not_y_class ="body";
	$(not_y_class).outerHeight(0);

	var window_height = 0; // Reset height of window.
	var actual_screen_y = screen.height;
	var padding_y = 200;
	var window_height = $(window).height();

	
	for(i in row_Y_classes){

		var row_y_class = row_Y_classes[i].class;
		var altClass = row_Y_classes[i].altClass;
		var valueClass = row_Y_classes[i].value;


	$(row_y_class).addClass(altClass);

	if($(window).width()>1300){
		
		// Reset height of rows.
		$(row_y_class).outerHeight(0); 
		$(row_y_class).css("overflow", "hidden");
		$(row_y_class).css("margin", 0);

		var window_height = $(window).height();

		$(row_y_class).each(function(){

		// Allow Zoom to maintain ratio of screen elements.
		if($(window).width()>1366){ 
			$(this).css("max-height",actual_screen_y*valueClass); 
			$(this).css("overflow", "");
		}

			// 1. Check if row has responsive layout by class name sandpiper_row.
			if($(this).hasClass(altClass)){
				var max_y_elem = parseFloat($(this).css("max-height"));
				
				
				if(max_y_elem<window_height&&max_y_elem!='none'){
					// Adjust height of each row
					$(this).outerHeight(max_y_elem);
					$(this).find('.wp-block-column').outerHeight("");
					
				}
				
				else{
					// Adjust height of each row
					$(this).outerHeight(window_height);
					$(this).find('.wp-block-column').outerHeight("");
				} // else
					
				
			}
			
		}) // endeach .row
		
	}// endif wide screen
		
		
		// 3. Tablet height responsiveness
		if($(window).width()<1366){
			
		
		$(row_y_class).outerHeight(0)
		$(row_y_class).css("overflow", "hidden");
		
		var window_height_sm = ($(window).height() + padding_y)*valueClass;
		
		$(row_y_class).each(function(){
		
			// 1. Check if row has responsive layout by class name sandpiper_row.
			if($(this).hasClass(altClass)){
				var max_y_elem = parseFloat($(this).css("max-height"));
				
				if(max_y_elem<window_height&&max_y_elem!='none'){
					// Adjust height of each row
					$(this).outerHeight(max_y_elem);
					$(this).find('.wp-block-column').outerHeight("");
				}
				
				else{
					// Adjust height of each row

					$(this).outerHeight(window_height_sm);
					$(this).find('.wp-block-column').outerHeight("");

				} // else
					
				$(row_y_class).css("overflow", "");
			}
		});
		
		} // endif tablet



		// 4. Mobile height responsiveness
		if($(window).width()<769){
			
		
		$(row_y_class).outerHeight(0);
		$(row_y_class).css("overflow", "");


		
		var window_height_sm = ($(window).height() + padding_y)*valueClass;
		
		$(row_y_class).each(function(){


			var children_count = ($(this).children().length>0) ? $(this).children().length : 1 ;
		
			// 1. Check if row has responsive layout by class name sandpiper_row.
			if($(this).hasClass(altClass)){
				var max_y_elem = parseFloat($(this).css("max-height"));
				
				if(max_y_elem<window_height&&max_y_elem!='none'){
					// Adjust height of each row
					$(this).outerHeight(max_y_elem);
					$(this).find('.wp-block-column').outerHeight(window_height_sm);


				}
				
				else{
					// Adjust height of each row

					$(this).outerHeight(window_height_sm);
			
					$(this).find('.wp-block-column').outerHeight(window_height_sm);
				} // else
					
				$(row_y_class).css("overflow", "");
			}
		});
		
		} // endif Mobile

	} // end for

		// Prevents the height of none dynamic to affect auto height of section.
			$(not_y_class).outerHeight(''); // resets


	}// end height_responsive function
	
	

	// I. Onload of Page  
	
	sandpiper_birdwatch();
	

	//II. On Resize  

	$(window).resize(function(){
	    

        var scroll_pos_y = $(window).scrollTop();
		
			sandpiper_birdwatch();
		
		
		// Retain Last Scroll Position after adjustment.
		
		$(window).scrollTop(scroll_pos_y);
		
	}) // end resize
	
	})// end onload