$(document).ready(function() {

    $('#getQoute').on('click', function() {
        var randomNum = '';
        var qoute = '';
        var author = '';
        $.ajax({
            url: 'qoutes.json',
            type: 'GET',
            dataType: 'JSON',
            success: function(qoutes) {
                randomNum += Math.floor(Math.random() * qoutes.length);
                author = qoutes[randomNum].quoteAuthor;
                qoute = qoutes[randomNum].quoteText;
                console.log(qoute)

                $('#qoute').text(qoute);
                $('#author').text(author);

            },
            error: function(error) {
                console.log('error')
            }
        })


    })

});