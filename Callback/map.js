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
