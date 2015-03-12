$(document).ready(function(){

	document.getElementById("sec1").style.visibility = "visible";
		
	$(".alias").focus();
});

function loadXMLDoc()
{
	var flag = false;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	{
	  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    	document.getElementById("sec1").innerHTML=xmlhttp.responseText;
	    }
	}

	xmlhttp.open("GET","http://bootcamp.aws.af.cm/welcome/" +
	document.getElementById("txt_1").value,true)

	

	xmlhttp.send();

	$('#txt_1').focus();

	$('#sec1').style.fontSize=200;
}