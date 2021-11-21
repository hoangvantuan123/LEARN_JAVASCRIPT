// Backend -> API -> Fetch -> Json / XML
// JSON.parse -> Javascript types
// render ra giao diện với HTML


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


