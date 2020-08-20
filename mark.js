/*function check()
{
	var name=document.myform.st_name.value;
	if(!(name='' && name >='A' && name<='Z' || name>='a' && name<='z'))
		document.getElementById=("s_name").innerHTML="plaese enter Alphabates"
		document.getElementById("s_name").style.color ="red";
				return false;
}*/
	function check()
{
	var nm=document.myform.name.value;
	var rn=document.myform.ron.value;
	var su=document.myform.sub.value;
	var num= document.myform.number.value;
	var om=document.myform.marks.value;
	
    var  mandatory_val=om;
	if(nm==null || nm=='' ) {
		  document.getElementById("txt1").innerHTML ="**name not should be blank";
		  document.getElementById("txt1").style.color ="red";
		    return false;  
	}
	 if(!( nm>='A' && nm<='Z' || nm>='a' && nm<='z'))
	
	{
		document.getElementById("txt1").innerHTML ="**please enter alphabates";
		document.getElementById("txt1").style.color ="red";
				return false;
	}
	if((nm.length < 2) || (nm.length > 20))
	{
		document.getElementById("txt1").innerHTML ="**name lenght must be between 2 and 20";
		  document.getElementById("txt1").style.color ="red";
		    return false; 
	}
	if(rn==''){

		document.getElementById("txt2").innerHTML ="**please enter roll no";
		document.getElementById("txt2").style.color ="red";
				return false;
	}

	 if(!( rn>='A' && rn<='Z' || rn<=0 && rn>9))
	{
		document.getElementById("txt2").innerHTML ="**roll number must Capital alpha and number";
		document.getElementById("txt2").style.color ="red";
				return false;
	}
		
		if(su=='')
	{
		document.getElementById("txt3").innerHTML ="**subject not be blank";
		document.getElementById("txt3").style.color ="red";
				return false;
	}
	if(!( su>='A' && su<='Z' || su>='a' && su<='z')){
		document.getElementById("txt3").innerHTML ="**please enter only alphabates";
		document.getElementById("txt3").style.color ="red";
				return false;
	}
	if(om==''){
		document.getElementById("txt4").innerHTML="**obtained mark should not be blank";
		document.getElementById("txt4").style.color="red";
		return false;
	}

	//if(!(om.toString().length < 0) || (om.toString().length >= 50) ){
		if(om > num){

			
		document.getElementById("txt4").innerHTML ="** please enter number between 0 to 50";
		document.getElementById("txt4").style.color="red";
		return false;
		}

		 var x = document.getElementById("no").selectedIndex;
  var d=document.getElementsByTagName("option")[x].value;
 // alert(d);
  if(om =='')
   {
  //  console.log(d);console.log(om);
    document.getElementById("txt4").innerHTML="**obtained mark should not be blank";
    document.getElementById("txt4").style.color="red";
    return false;
   } 
   if(om > d)
  {
    //console.log("obtainme "+om);
    //console.log(d);
     document.getElementById("txt4").innerHTML="**obtained marks is greter than out marks";
         document.getElementById("txt4").style.color="red";
    //alert("obtained marks is greter than out marks");
      return false;
    }

	
	/*if(!(om.length < 0) ||  (om.length >= 100 )){
		document.getElementById("txt4").innerHTML ="** please enter number between 0 to 100";
		document.getElementById("txt4").style.color="red";
		return false;
	}*/
	}

	function grade(){

		var x = document.getElementById("no").value;
		if( x < 35)
			{
				document.getElementById("grade").innerHTML ="fail";
				document.getElementById("grade").style.color ="red";

			}
		if((x > 35 && x < 60) || (x> 60 && x < 75))

		{
			document.getElementById("grade").innerHTML ="pass, first class";
				document.getElementById("grade").style.color ="green";
		}
		if(x > 75)

		{
			document.getElementById("grade").innerHTML ="pass, distinction";
				document.getElementById("grade").style.color ="green";
		}
	}



		
	


