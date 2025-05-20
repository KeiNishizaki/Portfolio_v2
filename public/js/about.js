//var txt1 = "Close";
//var txt2 = "About";

//function ChangeTxt(txt){
//	document.getElementById("btnAbout").innerHTML=txt;
	// id名(btnabout)の文字を引数(txt))に変える
//}

function clickBtn1(txt){
	var elements = document.getElementById("about");
	var elements2 = document.getElementById("btnClose");

	if(elements.style.display=="block"){
		// noneで非表示
		elements.style.display ="none";
		elements2.style.display ="none";

		//closeをaboutに
		//ChangeTxt(txt2)
		//css変更して"about"を上に持ってくる
		//btnAbout.style.top = "28px";

	}else{
		// blockで表示
		elements.style.display ="block";
		elements2.style.display ="block";
		//aboutをcloseに
		//ChangeTxt(txt1);
		//css変更して"close"を下に持ってくる
		//btnAbout.style.top = "350px";
	}
}