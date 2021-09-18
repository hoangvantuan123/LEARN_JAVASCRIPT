
// id
var demonode = document.getElementById('demo3');
console.log({
    demonode
});


// class
 var textnode =document.getElementsByClassName('text');
 console.log(textnode);


 //Tag
 var textnode =document.getElementsByTagName('p');
 console.log(textnode);

 // CSS Selector

 var textnode = document.querySelector('.text')
console.log(textnode)
// Muốn lấy ra nhiều text giống nhau
var textnode = document.querySelector('.text:nth-child(1)');
var textnode = document.querySelector('.text:nth-child(2)');
//muốn lấy tất cả vd NHư các thẻ a và thẻ li
var textnode = document.querySelectorAll(" .text:nth-child(1) li")
var textnode = document.querySelectorAll(" .text:nth-child(2) li")









///----------------------------------------------------------------------------------------------------------------------


///bài tập
 // B1----------------------------------------------------------------------------------------
 var appElement = document.getElementById("app"),
 firstHeadingElement = document.getElementById("first-heading"),
 appBodyElement = document.getElementById("app-body"),
 secondHeadingElement = document.getElementById("second-heading");



//B2-------------------------------------------------------------------------------
var boxHTMLCollection = document.getElementsByClassName("box"),
 box1Element = document.querySelector(".container .box:nth-child(1)"),
 box2Element = document.querySelector(".container .box:nth-child(2)"),
 allItemElements = document.getElementsByTagName("li"),
 box1ItemElements = document.querySelectorAll(
     ".container .box:nth-child(1) li"
 ),
 box2ItemElements = document.querySelectorAll(
     ".container .box:nth-child(2) li"
 );




//B3------------------------------------------------------------------------------------
/**Yêu cầu
Lấy h1 element và lưu vào biến h1Element
Lấy h2 element và lưu vào biến h2Element
Lấy h3 element và lưu vào biến h3Element */
var h1Element = document.querySelector("h1"),

 h2Element = document.querySelector("section h2"),
 h3Element = document.querySelector("div h3");




//B4--------------------------------------------------------------------------------------
var checkboxNodes = document.querySelectorAll("input"),
 checkbox1Element = document.querySelector(
     'input[type="checkbox"][value="1"]'
 ),
 checkboxCheckedAndNotDisabled = document.querySelector(
     'input[type="checkbox"][checked]:not([disabled])'
 ),
 checkboxDisabledAndNotChecked = document.querySelector(
     'input[type="checkbox"][disabled]:not([checked])'
 ),
 checkboxCheckedAndDisabled = document.querySelector(
     "input[disabled][checked]"
 );





//B5--------------------------------------------------------------------------------------
/**Yêu cầu
Get checkbox input NodeList lưu vào biến checkboxNodes
Get checkbox input element có type="checkbox" value="1" lưu vào biến checkbox1Element
Get checkbox element có attribute checked nhưng không có attribute disabled lưu vào biến checkboxCheckedAndNotDisabled
Get checkbox element có attribute disabled nhưng không có attribute checked lưu vào biến checkboxDisabledAndNotChecked
Get checkbox element có attribute checked và disabled lưu vào biến checkboxCheckedAndDisabled
 */
var checkboxNodes = document.querySelectorAll("input"),
 checkbox1Element = document.querySelector(
     'input[type="checkbox"][value="1"]'
 ),
 checkboxCheckedAndNotDisabled = document.querySelector(
     'input[type="checkbox"][checked]:not([disabled])'
 ),
 checkboxDisabledAndNotChecked = document.querySelector(
     'input[type="checkbox"][disabled]:not([checked])'
 ),
 checkboxCheckedAndDisabled = document.querySelector(
     "input[disabled][checked]"
 );





//B6--------------------------------------------------------------------------------------------------
/**
 * Yêu cầu
Get list elements li là con trực tiếp của ul thứ nhất và lưu vào biến listItems1
Get list elements li là con trực tiếp của ul thứ hai và lưu vào biến listItems2
Get list elements li là con trực tiếp của ul thứ nhất và ul thứ hai sau đó lưu vào biến listItems3
 */
var listItems1 = document.querySelectorAll(".parent > li"),
 listItems2 = document.querySelectorAll(".parent > ul > li"),
 listItems3 = document.querySelectorAll(
     ".parent > li, .parent > ul > li"
 );
