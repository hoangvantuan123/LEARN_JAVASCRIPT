// Backend -> API -> Fetch -> Json / XML
// JSON.parse -> Javascript types
// render ra giao diện với HTML

/*
var postAPI = 'https://jsonplaceholder.typicode.com/posts';
fetch(postAPI)
    .then(function (response) {
        return response.json();
        // JSON.parse : JSON -> javascript types
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML  = html;
    })

    // dùng để báo lỗi
    .catch(function (error) {
       console.log('co loi ');
    })


 */


var commit = 'https://jsonplaceholder.typicode.com/comments';

fetch(commit)
    .then (function (response) {
        return response.json() ;
    })
    .then(function (comments) {
        var htmls = comments.map(function (comment) {
            return `<li>
                <h2>${comment.name}</h2>
                <p>${comment.email}</p>
            </li>`
        })
        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = html ;
    })
    .catch(function (error) {
        console.log('co loi ');
    })