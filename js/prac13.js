$(document).ready(function(){
    alert("Empezando con jquery's");
    $("#cambio").text("Se sustituye");
    $("#btnoperaciones").click(function(){
        switch($("#operaciones").val()){
        case '+':
            var num1 =parseInt($("#num1").val(),10);
            var num2 =parseInt($("#num2").val(),10);
            var resul = num1 + num2;
            $("#resultado").text(resul);
                break;
        case '-':
            var num1 =parseInt($("#num1").val(),10);
            var num2 =parseInt($("#num2").val(),10);
            var resul = num1 - num2;
            $("#resultado").text(resul);
            break;
        case '*':      
            var num1 =parseInt($("#num1").val(),10);
            var num2 =parseInt($("#num2").val(),10);
            var resul = num1 * num2;
            $("#resultado").text(resul);
                break;
        case'/':
            var num1 =parseInt($("#num1").val(),10);
            var num2 =parseInt($("#num2").val(),10);
            var resul = num1 / num2;
            $("#resultado").text(resul);
                break;
        }
    });
    $("#Mostrar").click(function(){
        $("#dinamico").show();
    });
    $("#Mostrar").hover(function(){
        $("#Mostrar").css('cursor', 'pointer');
    });
    $("#ocultar").click(function(){
        $("#dinamico").hide();
    });
    $("#ocultar").hover(function(){
        $("#ocultar").css('cursor', 'crosshair');
    });
    $("#cssborde").click(function(){
        $("#dinamico").css("background-color","magenta");
        $("#dinamico").css("border","2px  double yellow");
    });
    $("#cssborde").hover(function(){
        $("#cssborde").css('cursor', 'not-allowed');
    });
});