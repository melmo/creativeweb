var number = 0;

var display = document.getElementById("display");

function increaseAndShow()
{
	increase();
	if(isDivisableByNumber(number, 7))
	{
		error();
	}
	else
	{
		display.innerHTML = number;
	}
}


function check()
{
	increase();
	if(isDivisableByNumber(number, 7))
	{
		display.innerHTML = "JavaScript";
	}
	else
	{
		error();
	}
}
function increase() 
{
	console.log("Increase");
	number++;	
}

function error() 
{
	display.innerHTML = "Error";
	number = 0;
}

function isDivisableByNumber(toDivide, devisor) 
{
	
	return toDivide % devisor == 0;
}