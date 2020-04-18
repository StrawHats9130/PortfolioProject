
//Logic For Sunset Hills
$("#bntSun").on("click", function () {

    let myArray = [];
    myArray.push(Number($("#bld1").val()));
    myArray.push(Number($("#bld2").val()));
    myArray.push(Number($("#bld3").val()));
    myArray.push(Number($("#bld4").val()));
    myArray.push(Number($("#bld5").val()));
    myArray.push(Number($("#bld6").val()));

    '<span class = "Fizz"> ${index + 1} </span>'
    var errorMsg = "";
    var valid = true;

    for (let index = 0; index < myArray.length; index++) {
        if (isNaN(myArray[index])) {
            var value = $(`#bld${index + 1}`).val();
            errorMsg += `Your input in height  <span class = "SunsetError"> ${index + 1} of ${value} </span> is bad and needs to be fixed <br>`;
            $(`#bld${index + 1}`).val("");
            valid = false;
        }
    }

    if (!valid) {
        Swal.fire({
            icon: 'error',
            title: 'Input Validation failed',
            html: errorMsg
        })
        return
    }

    var errorMsg = "";
    for (var index = 0; index < myArray.length; index++) {
        if (isNaN(myArray[index])) {
            var value = $(`#bld${index + 1}`).val();
            errorMsg += `Your input in position ${index + 1} "${value}" is bad and needs to be fixed \n\r`;
            $(`#bld${index + 1}`).val("");
        }
    }
    if (errorMsg !== "") {
        alert(errorMsg);
        return
    }

    let tallest = myArray[0];
    let happy = " <span class = 'happy'> YEAH SUN! </span> " ;
    let sad =  "<span class='sad'>Boo no sun </span>";
    let newArray = [];

    newArray.push(happy);

    for (var index = 1; index < myArray.length; index++) {

        if (myArray[index] > tallest) {
            tallest = myArray[index];
            newArray.push(happy);
        }
        else {
            newArray.push(sad);
        }
    };

    $("#result1").html(newArray[0])
    $("#result2").html(newArray[1])
    $("#result3").html(newArray[2])
    $("#result4").html(newArray[3])
    $("#result5").html(newArray[4])
    $("#result6").html(newArray[5])

});


$("#btnClearHills").on("click", function () {
    $(".clearSun").val("");
    $(".hillsOutput").text("");
});

$("#SunsetCode").hide();


$("#btnShowHills").on("click", function () {
    $("#SunsetCode").toggle();
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});