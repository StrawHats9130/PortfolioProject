$("#btnSOAF").on("click", function () {
    let k = Number($("#k").val());

    let myArray = new Array();
    myArray.push(Number($("#soafInput1").val()));
    myArray.push(Number($("#soafInput2").val()));
    myArray.push(Number($("#soafInput3").val()));
    myArray.push(Number($("#soafInput4").val()));
    myArray.push(Number($("#soafInput5").val()));

    //k = 14
    //15 6 8 9 4

    let target = 0;
    let found = false;

    //loop over each item in the array 1 at a time
    for (var index = 0; index < myArray.length; index++) {
        //Determine what number you need to solve for the given K...
        //find k - myArray[index]
        target = k - myArray[index];

        //arr.indexOf(searchElement[, fromIndex])
        //if (myArray.indexOf(target, index + 1) > 0) {
        if (myArray.indexOf(target, index + 1) >= 0) {
            found = true;
            break;
        }
    }

    if (found)
        $("#soafOutput").html(`A K value of ${k} was found in the array`);
    else
        $("#soafOutput").html(`A K value of ${k} was NOT found in the array`);

});

$("#btnClearSOAF").on("click", function () {

    $(".clearMeSOAF").val("");
    $("#soafOutput").text("");
});

$("#hillsCode").hide();

$("#btnShowSOAF").on("click", function () {
    //CHECK THIS OUT...
    //Here I am using the built in toggle function to switch my div from visible to hidden
    $("#hillsCode").toggle();

    //CHECK THIS OUT...
    //Here I am using a ternary operator to determine what the button text should be
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});