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
Array.prototype.map2 = function(callback){
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
console.log(htmls.join(''));

/*
 var htmls = myNames.map(function(myName){
   return `<h2> ${myName}</h2>`
});
console.log (htmls.join(''));*/


//Vd 2:
Array.prototype.forEach2= function(callback){
    var output = [];
    var arrylength = this.length ;
    for ( var i = 0 ; i < arrylength ; ++i){
        var ketqua =  callback(this[i] , i);
        output.push(ketqua);
    }
    return output;
}
var myNames = [
    'hoang',
    'van' ,
    'tuan'
] ;
 var htmls = myNames.forEach2(function(myName){
    return `<h3>${myName}</h3>`
});
console.log( htmls.join(''));

/* var htmls = myNames.map(function(myName){
    return `<h3>${myName}</h3>`
});
console.log( htmls.join('')); */




