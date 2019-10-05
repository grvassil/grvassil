// ----------------------
// (c) by Sitsanlis Ilias
// ----------------------


function openWin(){
	test=new Array();
	var myWin=window.open("","","width=500,height=900,scrollbars=1");
	var tag = document.myForm.elements[0]
	myWin.document.write("Ονοματεπώνυμο : <b>"+tag.value+"</b><br/>");
	
	//myWin.document.write("<br/><br/><b>Απαντήσεις</b><br/>");
	
	var j=0
	var lastName=""
	
	for(var k=1;k<=document.myForm.elements.length-2;k++){
		test[k] = document.myForm.elements[k];
		var printFlag=false
		
		if (test[k].type=="checkbox") {
			if (lastName!=test[k].name) {
				j++
				myWin.document.write("<u><br/>Απάντηση "+j+"</u><br/>");
			}
			
			if (test[k].checked==true) {
				printFlag=true
			}
		} else if (test[k].type=="radio") {
			if (lastName!=test[k].name) {
				j++
				myWin.document.write("<u><br/>Απάντηση "+j+"</u><br/>");
			}
			if (test[k].checked==true) {
				myWin.document.write(test[k].name+": ");
				printFlag=true
			}	
		} else if ((test[k].type=="textarea" || test[k].type=="text") && test[k].name!="url"){
			if (lastName!=test[k].name ) {
				j++
				myWin.document.write("<u><br/>Απάντηση "+j+"</u><br/>");
			}
			printFlag=true
		}
		
		lastName=test[k].name
		
		if (printFlag==true) {
			if ((test[k].type=="text" || test[k].type=="textarea")) {
				if (test[k].value!="" && test[k].value!=" ") {
					myWin.document.write(test[k].value);
				} else {
					myWin.document.write("-");
				}
			} else {
				myWin.document.write(test[k].value);
			}
			myWin.document.write("<br/>")
		}
	}
	myWin.document.write("<br/>")
	myWin.document.write(" <input value='Εκτύπωση' onclick='window.print()' type='button' />")
	myWin.document.close();
}