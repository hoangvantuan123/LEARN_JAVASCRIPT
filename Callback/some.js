// Some()
// trả về true hoặc false
// Không chạy qua array trống
// kiểm tra có tối thiểu một cái đúng sẽ trả về true

Array.prototype.some2 = function (callback){

    for ( var index in this ){
        if ( this.hasOwnProperty(index)){
           var reslut = callback(this[index], index , this )
            return true;
        }
    }
    return false; ;
}
var courses = [
    {
        name:'Javascript',
        coin : 690,
        isFinite : true ,
    },
    {
        name:'PHP',
        coin : 860,
        isFinite : false,
    },
    {
        name:'Ruby',
        coin : 980,
        isFinite : false,
    },
    {
        name:'C++',
        coin : 300,
        isFinite : false,
    }
];
 var result = courses.some2(function ( course , index, array){
    //console.log( course , index , array);
    return  course.isFinite ;

});
console.log(result);