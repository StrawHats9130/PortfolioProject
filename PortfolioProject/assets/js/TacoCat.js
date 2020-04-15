
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

