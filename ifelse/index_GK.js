var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change',setanswer);

function setanswer(){ 
	var ch=select.value;
	if(ch=='0')
	{
		para.textContent="New Delhi is the capital of India";
	}
	else if(ch=="1")
	{
		para.textContent="India has 29 state's."
	}
	else if(ch=="2")
	{
		para.textContent="India has 7 state's";
	}
	else if(ch=="3")
	{
		para.textContent="Mr. Narender Modi is PM of India.(2014-2019)";
	}
	else if(ch=="4")
	{
		para.textContent="Mr. RamNath Kovind is president of India";
	}
	else if(ch=="5")
	{
		para.textContent="Indian Army is world IV th strongest army in World";
	}
	else
	{
		para.textContent=" </> ";
	}
	// body...
};