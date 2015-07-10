// JavaScript Document


//------Print Tradeshow functions
function mShiftShow(){
	var mShiftShow = document.getElementById("abtMshift");
	var zagShow = document.getElementById("abtZag");
	

	
	mShiftShow.style.display="block";
	zagShow.style.display="none";
	
}

function zagShow(){
	var mShiftShow = document.getElementById("abtMshift");
	var zagShow = document.getElementById("abtZag");
	
	zagShow.style.display="block";
	mShiftShow.style.display="none";
	
}

// Hide Tradeshow details

function mShiftHide(){
	var mShiftHide = document.getElementById("abtMshift");
	var zagHide = document.getElementById("abtZag");
	

	
	mShiftHide.style.display="none";
	zagHide.style.display="none";
	
}

function zagHide(){
	var mShiftHide = document.getElementById("abtMshift");
	var zagHide = document.getElementById("abtZag");
	
	zagHide.style.display="none";
	mShiftHide.style.display="none";
	
}


//------Print Logo functions

function RTShow(){
	var RTShow = document.getElementById("abtRT");
	var BBShow = document.getElementById("abtBB");
	

	
	RTShow.style.display="block";
	BBShow.style.display="none";
	
}

function BBShow(){
	var RTShow = document.getElementById("abtRT");
	var BBShow = document.getElementById("abtBB");
	

	
	RTShow.style.display="none";
	BBShow.style.display="block";
	
}

// Hide Logos

function RTHide(){
	var RTShow = document.getElementById("abtRT");
	var BBShow = document.getElementById("abtBB");
	

	
	RTShow.style.display="none";
	BBShow.style.display="none";
	
}

function BBHide(){
	var RTShow = document.getElementById("abtRT");
	var BBShow = document.getElementById("abtBB");
	

	
	RTShow.style.display="none";
	BBShow.style.display="none";
	
}

//------Print Misc functions

function MLPShow(){
	var MLPShow = document.getElementById("abtMLP");
	var SSShow = document.getElementById("abtSS");
	

	
	MLPShow.style.display="block";
	SSShow.style.display="none";
	
}

function SSShow(){
	var MLPShow = document.getElementById("abtMLP");
	var SSShow = document.getElementById("abtSS");
	

	
	MLPShow.style.display="none";
	SSShow.style.display="block";
	
}

// Hide Misc

function MLPHide(){
	var MLPShow = document.getElementById("abtMLP");
	var SSShow = document.getElementById("abtSS");
	

	
	MLPShow.style.display="none";
	SSShow.style.display="none";
	
}

function SSHide(){
	var MLPShow = document.getElementById("abtMLP");
	var SSShow = document.getElementById("abtSS");
	

	
	MLPShow.style.display="none";
	SSShow.style.display="none";
	
}


// Show Packaging



function tapeMeasureShow(){
	var tapeMeasureShow = document.getElementById("abtTapeMeasure");
	var swivelShow = document.getElementById("abtSwivel");
	var sureStikShow = document.getElementById("abtSureStik");
	

	tapeMeasureShow.style.display="block";
	swivelShow.style.display="none";
	sureStikShow.style.display="none";
	
}

function swivelShow(){
	var tapeMeasureShow = document.getElementById("abtTapeMeasure");
	var swivelShow = document.getElementById("abtSwivel");
	var sureStikShow = document.getElementById("abtSureStik");
	

	tapeMeasureShow.style.display="none";
	swivelShow.style.display="block";
	sureStikShow.style.display="none";
	
}

function sureStikShow(){
	var tapeMeasureShow = document.getElementById("abtTapeMeasure");
	var swivelShow = document.getElementById("abtSwivel");
	var sureStikShow = document.getElementById("abtSureStik");
	

	tapeMeasureShow.style.display="none";
	swivelShow.style.display="none";
	sureStikShow.style.display="block";
	
}

// Hide packaging

function tapeMeasureHide(){
	var tapeMeasureShow = document.getElementById("abtTapeMeasure");
	var swivelShow = document.getElementById("abtSwivel");
	var sureStikShow = document.getElementById("abtSureStik");
	

	tapeMeasureShow.style.display="none";
	swivelShow.style.display="none";
	sureStikShow.style.display="none";
	
}

function swivelHide(){
	var tapeMeasureShow = document.getElementById("abtTapeMeasure");
	var swivelShow = document.getElementById("abtSwivel");
	var sureStikShow = document.getElementById("abtSureStik");
	

	tapeMeasureShow.style.display="none";
	swivelShow.style.display="none";
	sureStikShow.style.display="none";
	
}

function sureStikHide(){
	var tapeMeasureShow = document.getElementById("abtTapeMeasure");
	var swivelShow = document.getElementById("abtSwivel");
	var sureStikShow = document.getElementById("abtSureStik");
	

	tapeMeasureShow.style.display="none";
	swivelShow.style.display="none";
	sureStikShow.style.display="none";
	
}


// Try to make functions work later
function divShow(x){
	
	var id = x;
	var showDiv = document.getElementById(id);	
	showDiv.style.display="block";	
}

function divHide(x){
	var hideDiv = document.getElementById("x");	
	hideDiv.style.display="none";	
}