function addItem() {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        arrData = [+$("#q1").val(), +$("#q2").val(), +$("#q3").val(), +$("#q4").val(), +$("#q5").val(),
        +$("#q6").val(), +$("#q7").val(), +$("#q8").val(), +$("#q9").val(), +$("#q10").val()]
        console.log(arrData);
        const friendData = {
            fullName: $("#name"),
            foto: $("#foto"),
            scores: arrData
        }
        $.ajax("api/friends", {
            type: "POST",
            data: friendData
        }).then(function (result) {
            console.log(`friend data sent ${friendData}`);
            location.reload();
        });
    });
}
