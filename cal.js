$(function(){
	var currentText = "0";
	var res = 0;
	var num1 = 0;
	var flag = "+";

	function showText(num){
		$("#show").text(parseFloat(num));		//parseInt 轉型為整數，才不會出現C後數值前面多個0的窘境
	}

	function calculate(){
		num1 = parseInt(currentText);
		currentText="0";

		if(flag === "+") res += num1;
		else if(flag === "-") res -= num1;
		else if(flag === "*"){
			if(res === 0) res = 1;
			res = res * num1;
		}else if(flag === "/") res = res / num1;

		showText(res);
	}

	$("#addition").on("click",function(){
		calculate();
		flag = "+";
	});

	$("#subtraction").on("click",function(){
		calculate();
		flag = "-";
	});

	$("#multiplication").on("click",function(){
		calculate();
		flag = "*";
	});

	$("#divide").on("click",function(){
		calculate();
		flag = "/";
	});

	$("#equal").on("click",function(){
		calculate();
		flag = "+";
	});

	$("#clear").on("click",function(){
		currentText = "0";
		res = 0;
		flag = "+";
		showText(currentText);
	});

	$("#btn0").on("click",function(){
		currentText = currentText + "0";
		showText(currentText);
	});

	$("#btn1").on("click",function(){
		currentText = currentText + "1";
		showText(currentText);
	});

	$("#btn2").on("click",function(){
		currentText = currentText + "2";
		showText(currentText);
	});

	$("#btn3").on("click",function(){
		currentText = currentText + "3";
		showText(currentText);
	});

	$("#btn4").on("click",function(){
		currentText = currentText + "4";
		showText(currentText);
	});

	$("#btn5").on("click",function(){
		currentText = currentText + "5";
		showText(currentText);
	});

	$("#btn6").on("click",function(){
		currentText = currentText + "6";
		showText(currentText);
	});

	$("#btn7").on("click",function(){
		currentText = currentText + "7";
		showText(currentText);
	});

	$("#btn8").on("click",function(){
		currentText = currentText + "8";
		showText(currentText);
	});

	$("#btn9").on("click",function(){
		currentText = currentText + "9";
		showText(currentText);
	});
});