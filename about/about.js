var i = 0;
var b = 0;
var c = 0;
var txt = 'We made this project for our Company the ZLI. The project idea started when Leon found the *thecocktailDB* and he then came up with the idea to turn it into a website where you can search for drinks or get recommended a drink. After the idea was presented Luke and Kian joined the project and wanted to help make it happen. The group then started to plan how they are going to turn the idea into a real thing. After a short planing phase Kian quickly took the lead of the group and started to distribute the many tasks that were needed to do. After the group has done the planing they started by creating the design on how the website should look at the end. After they decided on how it should look like they started on creating the website. But just after a short time there was problem. The problem was the API since they were strugling to include it into the project while displaying the right data they wanted. But after some help they had the problem solved and they started to do the *search a drink* function. After creating the search function they had the idea to create a function which would recommend you a drink to try. They quickly started on creating the *Recommend me a drink* function. While Kian and Leon were working on the recommend function Luke started to improve the design of the *Homepage* by including pictures of drinks. While including the pictures the was still the problem of them being formatted wrong. But soon after they found the problem and fixed the formating of the images. Luke continued on finishing the search function while Leon made the recommend function and Kian was doing some small changes of the standard design of the Homepage. Leon then came up with the idea of creating this Page where he wrote about this Project. We hope that you like our little Project "The Web-Bar". Written by: Leon. ';
var txt2 = 'The project idea started when Leon found the thecocktailDB';
var txt3 = "";
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(500);
  document.getElementById("demo").innerHTML = "We made this project for our Company the <a href='https://www.zli.ch'>ZLI</a>. ";
  setTimeout(typeWriter2, 200)
  }
} 
function typeWriter2() {
  if (b < txt2.length) {
    document.getElementById("demo").innerHTML += txt2.charAt(b);
    b++;
    setTimeout(typeWriter2, speed);
  } else {
  document.getElementById("demo").innerHTML = "We made this project for our Company the <a href='https://www.zli.ch'>ZLI</a>. The project idea started when Leon found the <a href='https://www.thecocktaildb.com/'>thecocktailDB</a>";
  setTimeout(typeWriter3, 200);
  }
}
function typeWriter3() {
  if (c < txt3.length) {
    document.getElementById("demo").innerHTML += txt3.charAt(c);
    c++;
    setTimeout(typeWriter3, speed);
  } else {
  }
}
typeWriter();



//let result = txt.link("https://www.w3schools.com");
//document.getElementById("demo").innerHTML = result;

/*var i = 0;
var linkIndex = 0;
var texts = ['Zli']
links = ['https://www.zli.ch']
var speed = 100;    
function typeWriter() {
    if(i==0) {
       document.getElementById("demo").innerHTML += `<a href="${links[linkIndex]}" id="link${linkIndex}"></a>`
    }
    if (i < links[linkIndex].length) {
        document.getElementById(`link${linkIndex}`).innerHTML += texts[linkIndex].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }else if(linkIndex < links.length-1){
        linkIndex += 1;
        i = 0;
        setTimeout(typeWriter, speed);
    }
}
jQuery(document).ready(function() {
        setTimeout(typeWriter, 700);
});
typeWriter();
*/
