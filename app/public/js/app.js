const defaultUser = {
    name: "",
    description: "",
    photo: ""
};

$("#survey-submit").on("click", function() {
    event.preventDefault()
    let newUser = defaultUser;
    console.log(newUser)
    newUser.name = $('input[name=name]').val() || "????";
    newUser.photo = $('input[name=photo]').val() || "/../img/default.jpg";

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
    newUser.description = $('#description').val() || "no description given"

    $.post("/api/friends", newUser, function(data) {



        //sets to incoming data
        $('#name').text(data.name);
        $("#friend-img").attr('src', data.photo)
        $("#about").text(data.description)
        $('#friendModal').modal('show');
        $('#survey').trigger("reset");
    })
})