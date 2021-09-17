//1 . forEach
// ôn lại : object prototype , for in , hasOwnProperty
// có lọc qua array trống

Array.prototype.forEach2 = function (Callback){
   for( var index in this ){
      /* cách kiểm tra
       console.log(index ,this.hasOwnProperty(index)); */
       if (this.hasOwnProperty(index)){
          Callback(this[index] , index , this );
       }
   }
}
var courses = [
    'Javascript',
    'PHP',
    'RUBY',
    'PYTHON'
];
courses.forEach2(function (course ,index ,array){
   console.log( course , index , array);
});