// on the submit of the form the results are formated as an object then sent with a post request
$("#survey-submit").on("click", function() {
    event.preventDefault()
    const newUser = {};
    console.log(newUser)
        //if users dont input defaults are provided after the ||
    newUser.name = $('input[name=name]').val() || "????";
    newUser.photo = $('input[name=photo]').val() || "/../img/default.jpg";
    newUser.description = $('#description').val() || "no description given"

    newUser.scores = [$('input[name=q1]:checked').val(),
        $('input[name=q2]:checked').val(),
        $('input[name=q3]:checked').val(),
        $('input[name=q4]:checked').val(),
        $('input[name=q5]:checked').val(),
        $('input[name=q6]:checked').val(),
        $('input[name=q7]:checked').val(),
        $('input[name=q8]:checked').val(),
        $('input[name=q9]:checked').val(),
        $('input[name=q10]:checked').val()
    ];

    $.post("/api/friends", newUser, function(data) {



        //sets the incoming data to dom
        $('#name').text(data.name);
        $("#friend-img").attr('src', data.photo)
        $("#about").text(data.description)
        $('#friendModal').modal('show');
        $('#survey').trigger("reset");
    })
})