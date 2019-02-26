		var select= document.querySelector('select');
		var para = document.querySelector('p');

		select.addEventListener('change',setweather);
		function setweather(){
			var choice = select.value;
			switch(choice){
				case 'sunny':
					para.textContent =" It's Sunny !!";
					break;
				case 'rainy':
					para.textContent=" Rainy !! Feels good ";
					break;
				case 'snowing':
					para.textContent=" Snowing ! Yeah ";
					break;
				case 'overcast':
					para.textContent =" It's not Raining ";
					break;
				default:
					para.textContent=" Better next time";
			}
