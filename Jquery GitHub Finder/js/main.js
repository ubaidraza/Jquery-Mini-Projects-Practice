$(document).ready(function() {
    $('#username').on('keyup', function(e) {
        var username = e.target.value;
        $.ajax({
            url: "https://api.github.com/users/" + username,
            client_id: "a9f5bd8ab57b10c02b0e",
            client_secret: "341c180d071843f38f63d37b01ff70db328b1074",
            method: 'GET',
            type: 'GET',
            dataType: 'JSON',
            success: function(user) {

                $('#output').html(`
               <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">${user.name}</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-lg-3">
                        <img src="${user.avatar_url}"
                            alt="Profile Image" class="thumbnail avatar">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block btn-lg">User Profiel</a>
                    </div>
                    <div class="col-lg-9">
                        <div>
                            <span class="label label-warning">Followers : ${user.followers}</span>
                            <span class="label label-primary">Following : ${user.following}</span>
                            <span class="label label-success">Public Repositaries : ${user.public_repos}</span>
                            <span class="label label-danger">Public Gists : ${user.public_gists}</span>
                        </div>
                        </br>
                        </br>
                        <ul class="list-group">
                            <li class="list-group-item">Company :${user.company}</li>
                            <li class="list-group-item">Location :${user.location}</li>
                            <li class="list-group-item">website/blog :${user.blog}</li>
                            <li class="list-group-item">Member Since :${user.created_at}</li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="page-header">Repositaries</h2>
        <div id="repos">
        </div>`)
            }
        }).done(function(repos) {
            $.ajax({
                url: "https://api.github.com/users/" + username + "/repos",
                data: {
                    client_id: "a9f5bd8ab57b10c02b0e",
                    client_secret: "341c180d071843f38f63d37b01ff70db328b1074"
                },
                dataType: "JSON",
                contentType: "JSON",
                success: function(repos) {
                    $.each(repos, function(index, repo) {
                        $('#repos').append(`<div class="well">
                            <div class="row">
                                <div class="col-lg-7">
                                    <p><strong>Name   :</strong> ${repo.name} </p>
                                    <p><strong> Description   :</strong> ${repo.description} </p>
                                </div>
                                <div class="col-lg-3">
                                    <span class="label label-primary">Forks : ${repo.forks_count}</span>
                                    <span class="label label-success">Watcher : ${repo.watchers_count}</span>
                                    <span class="label label-danger">Stars : ${repo.stargazers_count}</span>
                                </div>
                                <div class="col-lg-2">
                                    <a href="${repo.html_url}" target="_blank" class="btn btn-success">Visit Repositary </a>
                                    </div>
                            </div>
                        </div>`)
                    })
                }
            });
        })
    })

});