$(document).ready(function() {
    $('li.fields:nth-child(n+4)').addClass('hide');

    $('ul').on('click', 'li.title', function() {
        $(this).next().slideDown(200).siblings('li.fields').slideUp(200);
    });

    var Bool = false;
    var firstName = $('#firstName');
    firstName.on('blur', function() {
        if (firstName.val() === '') {
            alert("Please fill the first Name its mandatory");
            Bool = false;
        } else {
            Bool = true;
        }
    })


    var submit = $('#submit');
    submit.on('click', function() {
        if (Bool) {
            alert('You are good to go');
        } else {
            alert("all asteric fields are mandatory to fill");
        }
    })
});