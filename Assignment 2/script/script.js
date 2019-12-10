function check(){
var a,b,c,result;
b=Number(document.getElementById("selec").value);
c=Number(document.getElementById("selec2").value);
a=Number(document.getElementById("a").value);
if(b==c)
{
  alert("You have entered Two Same country: Please try again!!!");
}
else
{
switch (b)
{

 case 1:
 {
  if(b==1 && c==2)
  {
   result=83.70*a;
  }
  else if(b==1 && c==2)
  {
   result=64.94*a;
  }
  else if(b==1 && c==3)
  {
   result=112.11*a;
  }
  else if(b==1 && c==4)
  {
   result=0.85*a;
  }
  else if(b==1 && c==5)
  {
   result=0.85*a;
  }
  break;
 }

 case 2:
 {
  if(b==2 && c==1)
  {
   result=0.01*a;
  }
  else if(b==2 && c==3)
  {
   result=0.78*a;
  }
  else if(b==2 && c==4)
  {
   result=1.34*a;
  }
  else if(b==2 && c==5)
  {
   result=0.01*a;
  }
  break;
 }

 case 3:
 {
  if(b==3 && c==1)
  {
   result=0.02*a;
  }
  else if(b==3 && c==2)
  {
   result=1.29*a;
  }
  else if(b==3 && c==4)
  {
   result=1.73*a;
  }
  else if(b==3 && c==5)
  {
   result=0.01*a;
  }
  break;
 }

 case 4:
 {
  if(b==4 && c==1)
  {
   result=0.01*a;
  }
  else if(b==4 && c==2)
  {
   result=0.75*a;
  }
  else if(b==4 && c==3)
  {
   result=0.58*a;
  } 
  else if(b==4 && c==5)
  {
   result=0.01*a;
  }
  break;
 }

 case 5:
 {
  if(b==5 && c==1)
  {
   result=1.18*a;
  }
  else if(b==5 && c==2)
  {
   result=98.69*a;
  }
  else if(b==5 && c==3)
  {
   result=76.57*a;
  }
  else if(b==5 && c==4)
  {
   result=132.20*a;
  }
  break;
 }


}
}
document.getElementById("answer").value=result;
}


function fortune() {
	 var textArray = ['Courage is the discovery that you may not win, and trying when you know you can lose.',
	 'The greatest barrier to success is the fear of failure.',
	 "If we are growing, we are always going to be out of our comfort zone.",
	 'A leader is one who knows the way, goes the way, and shows the way.',
	 "They can not hurt you unless you let them.","The key to change… is to let go of fear.",
	 "If you wait to do everything until you are sure it is right, you shall probably never do much of anything."]
	var bored =Math.floor(Math.random() * 5);
	document.getElementById('fortune').innerHTML = textArray[bored]
	
}
function quizQuestion() {
	
	var selectedOption1 = document.querySelector('input[name="1"]:checked').value;
	var selectedOption2 = document.querySelector('input[name="2"]:checked').value;
	var selectedOption3 = document.querySelector('input[name="3"]:checked').value;
	var selectedOption4 = document.querySelector('input[name="4"]:checked').value;
	var selectedOption5 = document.querySelector('input[name="5"]:checked').value;
	
	var i = 0
	if (selectedOption1 == 'c') {
		i+=1;
		document.getElementById('ans1').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans1').innerHTML = "INCORRECT: the correct answer is C. Jefferson City"
	}
	
	if (selectedOption2 == 'c') {
		i+=1;
		document.getElementById('ans2').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans2').innerHTML = "INCORRECT: the correct answer is C. 16"
	}
	
	if (selectedOption3 == 'b') {
		i+=1;
		document.getElementById('ans3').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans3').innerHTML = "INCORRECT: the correct answer is B. Neil Armostrong"
	}
	
	if (selectedOption4 == 'a') {
		i+=1;
		document.getElementById('ans4').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans4').innerHTML = "INCORRECT: the correct answer is A. Barry Bonds"
	}
	
	if (selectedOption5 == 'a') {
		i+=1;
		document.getElementById('ans5').innerHTML = "CORRECT"
	}else{
		document.getElementById('ans5').innerHTML = "INCORRECT: the correct answer is A. 1881"
	}
	document.getElementById('result').innerHTML = "You answered "+i+" out of 5 questions correctly ("+(i/5*100)+"%.)"
	
}
