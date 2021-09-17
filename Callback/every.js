// my every
// kiểm tra tất cả các trong mảng và phải thỏa mãn điều kiện của mình đưa ra thì nó đưa ra true còn không sẽ false
// KHông duyệt qua mảng rỗng


Array.prototype.every2 = function (callback){
    var output = true ;
    for(var index in this ){
        if(this.hasOwnProperty(index)){
            var result =callback(this[index] , index , this);
            if( !result){
                output =false ;
                break;
            }
        }
    }
    return output;
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
        isFinite : true,
    },
    {
        name:'Ruby',
        coin : 980,
        isFinite : true,
    },
    {
        name:'C++',
        coin : 300,
        isFinite : true,
    }
];
 var result = courses.every2(function( course , index , array){
    //console.log(course , index , array );
    return course.isFinite ;
});
console.log (result);