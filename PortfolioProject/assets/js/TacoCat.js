
$("#btnTacoCat").on("click", function () {

    let word = String($("#txtTacoCat").val()).toLowerCase();
    var revWord = "";

    for (var loop = word.length - 1; loop >= 0; loop--) {
        revWord += word[loop];
    }

    $("#tcOutput").text(`The reverse of ${word} is ${revWord}. `);
    if (word === revWord)
        $("#tcOutput").append(`Therefore ${word} is a Palidrome`);
    else
        $("#tcOutput").append(`Therefore ${word} is not a Palidrome`);
});

$("#btnTacoCatClear").on("click", function () {

    $(".clearMe").val("");
    $("#tcOutput").text("");
});

$("#TacoCatCode").hide();

$("#btnShowTacoCat").on("click", function () {
    //CHECK THIS OUT...
    //Here I am using the built in toggle function to switch my div from visible to hidden
    $("#TacoCatCode").toggle();

    //CHECK THIS OUT...
    //Here I am using a ternary operator to determine what the button text should be
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});

