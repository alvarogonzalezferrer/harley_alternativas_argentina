function appendSelectOption(selectMenuId, optionName, optionValue){
	var selectMenu = xoopsGetElementById(selectMenuId);
	var newoption = new Option(optionName, optionValue);
	newoption.selected = true;
	selectMenu.options[selectMenu.options.length] = newoption;
}

function showImgSelected(imgId, selectId, imgDir, extra, xoopsUrl) {
	if (xoopsUrl == null) {
		xoopsUrl = "./";
	}
	imgDom = xoopsGetElementById(imgId);
	selectDom = xoopsGetElementById(selectId);
	if (selectDom.options[selectDom.selectedIndex].value != "") {
		imgDom.src = xoopsUrl + "/"+ imgDir + "/" + selectDom.options[selectDom.selectedIndex].value + extra;
	} else {
        imgDom.src = xoopsUrl + "/images/blank.gif";
	}
}

function imageResize(img, maxWidth){
	if(img.width > maxWidth && maxWidth > 0) img.width = maxWidth;
}

/* Who is the original author of the scripts? let's find out later on */
function CaricaFoto(img){
	foto1= new Image();
	foto1.src=(img);
	Controlla(img);
}

function Controlla(img){
	if((foto1.width!=0)&&(foto1.height!=0)){
 		viewFoto(img);
	}else{
		funzione="Controlla('\"+img+\"')";
		intervallo=setTimeout(funzione,20);
	}
}

function viewFoto(img){
	largh=foto1.width;
	altez=foto1.height;
	stringa="width="+largh+",height="+altez;
	finestra=window.open('','',stringa);
	finestra.document.write ("<html><body leftmargin=0 topmargin=0>");
	finestra.document.write ("<a href='javascript:this.close()'><img border=0 src=");
	finestra.document.write (img);
	finestra.document.write ("></a></body></html>");
	finestra.document.close();
	return false;
}
