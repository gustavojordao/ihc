$(document).ready(function() {
    $("#btn1").click(function(evt) {
        $("#zoome").zoomTo({targetsize:0.75, duration:600});
        $(".background_class").click(function(evt2){
          $(".background_class").zoomTo({targetsize:1, duration:600});
          evt2.stopPropagation();
        });
        evt.stopPropagation();
    });

	function errou(e){
		var element = e.target;
		if(element.tagName == 'SPAN')
			element = element.parentElement;

		element.classList.add('errado');

		document.getElementById("correct_answer").innerHTML = "<span class=\"text_question\">7</span>";

		document.getElementById("frase_mensagem").innerHTML = "Que pena! Você errou.";
		document.getElementById("menu").classList.remove("menu_oculto");
		document.getElementById("menu").classList.add("menu_exibido");

		document.getElementById("item01").removeEventListener('click', e, false);
		document.getElementById("item02").removeEventListener('click', e, false);
		document.getElementById("item03").removeEventListener('click', e, false);
	}

	function acertou(e){
		var element = e.target;
		if(element.tagName == 'SPAN')
			element = element.parentElement;

		element.classList.add('certo');

		document.getElementById("correct_answer").innerHTML = "<span class=\"text_question\">7</span>";

		document.getElementById("frase_mensagem").innerHTML = "Parabéns! Você acertou.";
		document.getElementById("menu").classList.remove("menu_oculto");
		document.getElementById("menu").classList.add("menu_exibido");

		document.getElementById("item01").removeEventListener('click', e, false);
		document.getElementById("item02").removeEventListener('click', e, false);
		document.getElementById("item03").removeEventListener('click', e, false);
	}

	document.getElementById("item01").addEventListener('click', function(e){
		errou(e);
	});

	document.getElementById("item02").addEventListener('click', function(e){
		errou(e);
	});

	document.getElementById("item03").addEventListener('click', function(e){
		acertou(e);
	});

});
