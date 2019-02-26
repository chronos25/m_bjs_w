
		var select= document.querySelector('select');
		var para = document.querySelector('p');

		select.addEventListener('change',setweather);
		function setweather(){
			var choice = select.value;

			if(choice=='sunny')
			{
				para.textContent =" It's Sunny !!";
			}
			else if(choice=="rainy")
			{
				para.textContent=" Rainy !! Feels good ";
			}
			else if(choice == "snowing")
			{
				para.textContent=" Snowing ! Yeah ";
			}
			else if(choice =="overcast")
			{
				para.textContent =" It's not Raining ";
			}
			else{
				para.textContent=" ** ";
			}
		}
