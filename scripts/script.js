/* Month Year and card-sections-inputs ajustments*/

let i;

for(i = 1; i < 13; i++){
    if(i < 10){
        $("#infoMonth").append("<option>0" + i + "</option>");
    }   
    else{
        $("#infoMonth").append("<option>" + i + "</option>");
    }
}


for(i = 24; i < 31; i++){
    $("#infoYear").append("<option>" + i + "</option>");
}


$(".card-section").on("input", (event) =>{
    let item = event.target;
    console.log(item);
    if(item.value.length == 4){
        item.nextElementSibling.focus();
    }

})

/* End of Month Year and card-sections-inputs ajustments*/


/*inputs section*/

$("#infoName").on("input", () => {
    let text = $("#infoName").val().toUpperCase();
    $("#cardName").text(text);
    if($("#cardName").text() == ""){
        $("#cardName").text("JANE APPLESEED");
    }
})

$("#infoNumber1").on("input", () => {
    let text = $("#infoNumber1").val();
    $("#section1Card").text(text);
    if($("#section1Card").text() == ""){
        $("#section1Card").text("0000");
    }
})
$("#infoNumber2").on("input", () => {
    let text = $("#infoNumber2").val();
    $("#section2Card").text(text);
    if($("#section2Card").text() == ""){
        $("#section2Card").text("0000");
    }
})
$("#infoNumber3").on("input", () => {
    let text = $("#infoNumber3").val();
    $("#section3Card").text(text);
    if($("#section3Card").text() == ""){
        $("#section3Card").text("0000");
    }
})
$("#infoNumber4").on("input", () => {
    let text = $("#infoNumber4").val();
    $("#section4Card").text(text);
    if($("#section4Card").text() == ""){
        $("#section4Card").text("0000");
    }
})

$("#cvc").on("input", () => {
    let text = $("#cvc").val();
    $("#securityNumber").text(text);
    if($("#securityNumber").text() == ""){
        $("#securityNumber").text("000");
    }
})

$("#infoMonth").on("input", () => {
    let text = $("#infoMonth").val();
    $("#cardMonth").text(text);
})

$("#infoYear").on("input", () => {
    let text = $("#infoYear").val();
    $("#cardYear").text(text);
})

/*End of inputs section*/


/*Validation Section*/
 
$("#confirm").click(() => {
    let errors = 0;
    let sectionsNotOk = 0;

    if($("#infoName").val() == ""){
        $("#holderInvalidLength").css("display", "none");
        $("#holderError").css("display", "block");
        $("#infoName").css("border-color", "red").animate({marginLeft: "10px", rotate: "1deg"}, 100).animate({marginLeft: "-10px", rotate: "-1deg"}, 100).animate({marginLeft: "0px", rotate: "0deg"}, 100);
        errors++;
    }
    else if($("#infoName").val().length < 8){
        $("#holderError").css("display", "none");
        $("#holderInvalidLength").css("display", "block");
        $("#infoName").css("border-color", "red").animate({marginLeft: "10px", rotate: "1deg"}, 100).animate({marginLeft: "-10px", rotate: "-1deg"}, 100).animate({marginLeft: "0px", rotate: "0deg"}, 100);
        errors++;
    }
    else{
        $("#holderInvalidLength").css("display", "none");
        $("#holderError").css("display", "none");
        $("#infoName").css("border-color", "black");
    }

    let cardSections = Array.from($(".card-section"));
    for(var cardSection of cardSections){
        if(cardSection.value == ""){
            sectionsNotOk++;
        }
        else if(cardSection.value.length < 4){
            sectionsNotOk++;
        }
    }

    if(sectionsNotOk != 0){
        $("#empty-error").css("display", "block");
        $(".card-section").css("border-color", "red").animate({rotate: "1deg"}, 100).animate({rotate: "-1deg"}, 100).animate({rotate: "0deg"}, 100);
        errors++;
    }
    else{
        $("#empty-error").css("display", "none");
        $(".card-section").css("border-color", "black");
    }


    if($("#cvc").val() == ""){
        $("#cvcInvalidForm").css("display", "none");
        $("#cvcError").css("display", "block");
        $("#cvc").css("border-color", "red").animate({rotate: "1deg"}, 100).animate({rotate: "-1deg"}, 100).animate({rotate: "0deg"}, 100);
        errors++;
    }
    else if($("#cvc").val().length < 3){
        $("#cvcError").css("display", "none");
        $("#cvcInvalidForm").css("display", "block");
        $("#cvc").css("border-color", "red").animate({rotate: "1deg"}, 100).animate({rotate: "-1deg"}, 100).animate({rotate: "0deg"}, 100);
        errors++;
    }
    else{
        $("#cvcInvalidForm").css("display", "none");
        $("#cvcError").css("display", "none");
        $("#cvc").css("border-color", "black");
    }


    if(errors == 0){
        $("#containerInfos").css("display", "none");
        $("#processing").css("display", "flex");
        setTimeout(() => {
            $("#processing").css("display", "none");
            $("#completeSection").css("display", "flex");
        }, 2000)
    }
})

/*End of Validation Section*/

/*AddNewCard button(continue) configuration*/

$("#continue").click(() => {

    console.log($("#infoName").val());
    console.log($("#cardName").text());    
    console.log($("#section1Card").text());
    console.log($("#section2Card").text());
    console.log($("#section3Card").text());
    console.log($("#section4Card").text());  
    console.log($("#cvc").val());
    console.log($("#infoMonth").val());
    console.log($("#infoYear").val());
    
    $("#infoName").val("");
    $("#cardName").text("JANE APPLESEED")

    let cardSections = Array.from($(".card-section"));
    for(var cardSection of cardSections){
        cardSection.value = "";
    }
    $("#section1Card").text("0000");
    $("#section2Card").text("0000");
    $("#section3Card").text("0000");
    $("#section4Card").text("0000");

    $("#cvc").val("");
    $("#securityNumber").text("000");

    $("#infoMonth").val("01");
    $("#infoYear").val("24");
    $("#cardMonth").text("01");
    $("#cardYear").text("24");

    $("#completeSection").css("display", "none");
    $("#containerInfos").css("display", "flex");
    
})
