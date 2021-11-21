//Stringfy : từ Javasript types --> Json
// parse : TỪ JSON -> Javasript types
// thêm ""

// 1 thao tắc từ Parse :
 /* var json ='["javasript" , "PHP"]'; */
var json = ' {"name" :"hoang tuan" ,"age ": 29}';
var object = JSON.parse(json);
console.log (object);


// 2 : thao tác Stringfy
/// Bài 2:Promise

/// Bài 3:Promise(pain)

/// BÀi 4 : promise (concept)

var promise = new Promise (
    function (resole, reject) {
          // code logic
          // thành công : resolve ()
          // thất bại : reject ()
    }
);
promise
    .then(function(){

    })
    .catch (function(){
        // dùng để bắt lỗi thằng reject
    })
    .finally(function(){
    })


