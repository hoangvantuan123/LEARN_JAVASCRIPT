// filter
// không lọc qua  array trống



/* Array.prototype.filter2 = function( Callback){
    var output = []
    for( var index in this ){
        if ( this.hasOwnProperty(index)){
          var result =  Callback(this[index], index , this )
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}
 */
/* var courses = [
    {
        name:'Javascript',
        coin : 690
    },
    {
        name:'PHP',
        coin : 860
    },
    {
        name:'Ruby',
        coin : 980
    },
    {
        name:'C++',
        coin : 300
    }
] */
/* var filterCourses = courses.filter2(function(course , index , array){

    return course.coin > 700 ;
})
console.log(filterCourses); */
Array.prototype.filter2 = function ( callback){
    var output = [];
    for (var index in this ){
        if(this.hasOwnProperty(index)){
            var reslut = callback(this[index], index , this );
            if( reslut ){
                output.push(this[index] );
            }
        }

    }
    return output ;
}

var courses = [
    {
        name:'Javascript',
        coin : 690
    },
    {
        name:'PHP',
        coin : 860
    },
    {
        name:'Ruby',
        coin : 980
    },
    {
        name:'C++',
        coin : 300
    }
]
 var filterCourses=  courses.filter2( function ( course , index, array ){
    //console.log( course, index , array );
    return course.coin > 400 ;
})
console.log(filterCourses);