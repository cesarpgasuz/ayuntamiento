
		  $('#menu-movil').on('click', function(){
			$('.menu-links').toggleClass('visible');
			$('#closeH').css('display', 'block');
			$('#menu-movil').css('opacity', '0');
			
		})

		  
		  
		/*  
		$('.sombra').on('click', function(){
			$('.navegacion .menu-nav').removeClass('visibles');
			$('body').removeClass('scroll');
			$('.sombra').removeClass('visible-som');
		})
*/
		$('#closeH').on('click', function(){
			$('.menu-links').removeClass('visible');
			$('#closeH').css('display', 'none');
			$('#menu-movil').css('opacity', '1');

			/*$('body').removeClass('scroll');
			$('.sombra').removeClass('visible-som');*/
		})
		  

		$('#openHorarioEscritorio').on('click', function(){
			$('.horario').toggleClass('open-horario_escritorio');
			
		})

		$('#closeHorarioEscritorio').on('click', function(){
			$('.horario').removeClass('open-horario_escritorio');
			
		})


		$('#openHorarioMovil').on('click', function(){
			$('.horario').toggleClass('open-horario_movil');
			
		})

		$('#closeHorarioMovil').on('click', function(){
			$('.horario').removeClass('open-horario_movil');
			
		})


		


		







