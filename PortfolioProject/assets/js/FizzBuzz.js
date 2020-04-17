


//$("#btnCalc").on("click", function () {});



$("#bntBuzzIt").on("click", function () {

    //ParseInt is better

    //Step 1: Get user input

    var fizz = Number($("#fizz").val());

    var buzz = Number($("#buzz").val());

    DisplayFizzBuzzResults(fizz, buzz);

    //Step 2: Do something with it
    $("#outputTest").html(`Fizz ${fizz} <br>Buzz: ${buzz}`);

});

function FindFizzBuzz(fizz, buzz) {
    //Array.foreach()
    //var fizzBuzz = [];
    let fizzBuzz = "";

    for (i = 1; i <= 100; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            //add FizzBuzz to Array
            // fizzBuzz.push("FizzBuzz");
            fizzBuzz += "FizzBuzz ";
        }
        else if (i % fizz == 0) {
            //add fizz to array
            //fizzBuzz.push("Fizz");
            fizzBuzz += "Fizz ";
        }
        else if (i % buzz == 0) {
            //Add buzz to array
            //fizzBuzz.push("buzz");
            fizzBuzz += "buzz ";
        }
        else if (i % fizz != 0 && i % buzz != 0) {
            //Add "i" to array
            //fizzBuzz.push(toString(i));
            fizzBuzz += i + " ";
        }

    }
    return fizzBuzz;
};

function DisplayFizzBuzzResults(fizz, buzz) {
    // create variable
    let output = "";
    //create variable and pulling value
    // let fizz = document.getElementById("fizz").value;
    //let buzz = document.getElementById("buzz").value;
    // call function to find fizz buzz
    output = FindFizzBuzz(fizz, buzz);
    //print to page
    document.getElementById("output").innerHTML = output;

};

$("#FizzBuzzCode").hide();


$("#btnShowFizzBuzz").on("click", function () {
    $("#FizzBuzzCode").toggle();
    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});

$("#btnClearFizzBuzz").on("click", function () {
    $(".clearMe").val("");
    $("#output").text("");
});