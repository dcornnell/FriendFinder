$("#survey-submit").on("click", function() {
    event.preventDefault()
    let newUser = {};
    newUser.name = $('input[name=name').val();
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

        //sets to default if there are no values
        $('#name').text("");
        $("#friend-img").attr('src', "")
        $("#about").text("??????")
            //sets to incoming data
        $('#name').text(data.name);
        $("#friend-img").attr('src', data.photo)
        $("#about").text(data.description)
        $('#friendModal').modal('show');
        $('#survey').trigger("reset");
    })
})