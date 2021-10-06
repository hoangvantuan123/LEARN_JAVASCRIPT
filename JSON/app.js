//Stringfy : từ Javasript types --> Json
// parse : TỪ JSON -> Javasript types
// thêm ""

// 1 thao tắc từ Parse :
 /* var json ='["javasript" , "PHP"]'; */
var json = ' {"name" :"hoang tuan" ,"age ": 29}';
var object = JSON.parse(json);
console.log (object);


// 2 : thao tác Stringfy