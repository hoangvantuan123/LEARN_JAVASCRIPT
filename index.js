/*
function myFunction(){
    document.getElementById('demo5').style.color ='red';
}
const cars= ['saab ','volovo' , 'BMW' ] ;
cars[0] = 'toyota';

cars.push('audi');
console.log (cars);
*/

//Bài về Callback
//VD1
/* Array.prototype.map2 = function(callback){
    var output = [] ;
    var arrayLength = this.length
    for( var i = 0 ; i< arrayLength; ++i){
        var result = callback(this[i], i );
        output.push(result);
    }
    return output ;
}
var courses = [
    'javascript ',
     'PHP' ,
     'ruby'
    ];

 var htmls = courses.map2(function(course ){
    return `<h2> ${course}</h2>`
});
console.log(htmls.join('')); */

/*
 var htmls = myNames.map(function(myName){
   return `<h2> ${myName}</h2>`
});
console.log (htmls.join(''));*/



// Giải bài tập
// forEach , find , filter ,some , every , reduce
 // 1 . forEach
 // ôn lại : object prototype , for in , hasOwnProperty
