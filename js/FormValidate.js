<script type="text/javascript">

function validateForm() {
	
	var k = document.forms["catcher_form"]["input_uri"].value;
	var l = document.forms["catcher_form"]["input_file_name"].value;
	var m = document.forms["catcher_form"]["input_finish"].value;
	var n = document.forms["catcher_form"]["input_interva"].value;
	var urlregex = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
	var isAlphanumeric = new RegExp("/^[A-Za-z0-9]+$/");
	var isNumeric = new RegExp("/^[0-9]+$/");
	var isDatetime = new RegExp("");
	
    /*  
        To avoid all field is empty
    */
	if ((k==null && l==null && m==null && n==null)|| (k=="" && l=="" && m=="" && n=="")) {
        alert("Field is empty, Please fill it correctly!");
        return false;
    }
	/*  
        validate URI field is an url (API Endpoint URI)    */
	if (urlregex.test(k)){
		return (true);
	}
	else{
		alert("URI Field must be an URI, Please fill it correctly! example: http://esl.ccu.edu.tw");
		return (false);
	
	};
	/*Validate file name field is alphanumeric*/
	if(isAlphanumeric.test(l)){
		return (true);
	}else {
		alert("file name Field must be alphanumeric 0-9 and a-z");
		return (false);
	}
	/*Validate finish field is datetime format*/
	if(isDatetime.test(m)){
		return (true);
	}else{
		alert ("finish Field must be a datetime format")
		return (false);
	}
	/*Validate Interval must be a integer, an numeric*/
	if(isNumeric.test(n)){
		return (true);
	}else{
		alert("Field Interval must be a numeric");
		return(false);
	}
}

</script>