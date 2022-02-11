var i = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var txt = 'We made this project for our Company the ZLI. ';
var txt2 = 'The project idea started when Leon found the thecocktailDB ';
var txt3 = "and he then came up with the idea to turn it into a website where you can search for drinks or get recommended a drink. After the idea was presented Luke and Kian joined the project and wanted to help make it happen. The group then started to plan how they are going to turn the idea into a real thing. After a short planing phase Kian quickly took the lead of the group and started to distribute the many tasks that were needed to do. After the group has done the planing they started by creating the design on how the website should look at the end. After they decided on how it should look like they started on creating the website. But just after a short time there was problem. The problem was the API since they were strugling to include it into the project while displaying the right data they wanted. But after some help they had the problem solved and they started to do the search a drink ";
var txt4 = "function. After creating the search function they had the idea to create a function which would recommend you a drink to try. They quickly started on creating the Recommend me a drink ";
var txt5 = "function. While Kian and Leon were working on the recommend function Luke started to improve the design of the Homepage  ";
var txt6 = "by including pictures of drinks. While including the pictures the was still the problem of them being formatted wrong. But soon after they found the problem and fixed the formating of the images. Luke continued on finishing the search function while Leon made the recommend function and Kian was doing some small changes of the standard design of the Homepage. Leon then came up with the idea of creating this Page where he wrote about this Project. We hope that you like our little Project \"The Web-Bar\". Written by: Leon.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
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
    document.getElementById("demo").innerHTML = "We made this project for our Company the <a href='https://www.zli.ch'>ZLI</a>. The project idea started when Leon found the <a href='https://www.thecocktaildb.com/'>thecocktailDB</a> ";
    setTimeout(typeWriter3, 200);
  }
}
function typeWriter3() {
  if (c < txt3.length) {
    document.getElementById("demo").innerHTML += txt3.charAt(c);
    c++;
    setTimeout(typeWriter3, speed);
  } else {
    document.getElementById("demo").innerHTML = "We made this project for our Company the <a href='https://www.zli.ch'>ZLI</a>. The project idea started when Leon found the <a href='https://www.thecocktaildb.com/'>thecocktailDB</a> and he then came up with the idea to turn it into a website where you can search for drinks or get recommended a drink. After the idea was presented Luke and Kian joined the project and wanted to help make it happen. The group then started to plan how they are going to turn the idea into a real thing. After a short planing phase Kian quickly took the lead of the group and started to distribute the many tasks that were needed to do. After the group has done the planing they started by creating the design on how the website should look at the end. After they decided on how it should look like they started on creating the website. But just after a short time there was problem. The problem was the API since they were strugling to include it into the project while displaying the right data they wanted. But after some help they had the problem solved and they started to do the <a href='./../search/Search.html'>search a drink</a> ";
    setTimeout(typeWriter4, 200);
  }
}
function typeWriter4() {
  if (d < txt4.length) {
    document.getElementById("demo").innerHTML += txt4.charAt(d);
    d++;
    setTimeout(typeWriter4, speed);
  } else {
    document.getElementById("demo").innerHTML = "We made this project for our Company the <a href='https://www.zli.ch'>ZLI</a>. The project idea started when Leon found the <a href='https://www.thecocktaildb.com/'>thecocktailDB</a> and he then came up with the idea to turn it into a website where you can search for drinks or get recommended a drink. After the idea was presented Luke and Kian joined the project and wanted to help make it happen. The group then started to plan how they are going to turn the idea into a real thing. After a short planing phase Kian quickly took the lead of the group and started to distribute the many tasks that were needed to do. After the group has done the planing they started by creating the design on how the website should look at the end. After they decided on how it should look like they started on creating the website. But just after a short time there was problem. The problem was the API since they were strugling to include it into the project while displaying the right data they wanted. But after some help they had the problem solved and they started to do the <a href='./../search/Search.html'>search a drink</a> function. After creating the search function they had the idea to create a function which would recommend you a drink to try. They quickly started on creating the <a href='./../recommended-drink/recommended-drink.html'>Recommend me a drink</a> ";
    setTimeout(typeWriter5, 200);
  }
}
function typeWriter5() {
  if (e < txt5.length) {
    document.getElementById("demo").innerHTML += txt5.charAt(e);
    e++;
    setTimeout(typeWriter5, speed);
  } else {
    document.getElementById("demo").innerHTML = "We made this project for our Company the <a href='https://www.zli.ch'>ZLI</a>. The project idea started when Leon found the <a href='https://www.thecocktaildb.com/'>thecocktailDB</a> and he then came up with the idea to turn it into a website where you can search for drinks or get recommended a drink. After the idea was presented Luke and Kian joined the project and wanted to help make it happen. The group then started to plan how they are going to turn the idea into a real thing. After a short planing phase Kian quickly took the lead of the group and started to distribute the many tasks that were needed to do. After the group has done the planing they started by creating the design on how the website should look at the end. After they decided on how it should look like they started on creating the website. But just after a short time there was problem. The problem was the API since they were strugling to include it into the project while displaying the right data they wanted. But after some help they had the problem solved and they started to do the <a href='./../search/Search.html'>search a drink</a> function. After creating the search function they had the idea to create a function which would recommend you a drink to try. They quickly started on creating the <a href='./../recommended-drink/recommended-drink.html'>Recommend me a drink</a> function. While Kian and Leon were working on the recommend function Luke started to improve the design of the <a href='./../index.html'>Homepage</a> ";
    setTimeout(typeWriter6, 200);
  }
}
function typeWriter6() {
  if (f < txt6.length) {
    document.getElementById("demo").innerHTML += txt6.charAt(f);
    f++;
    setTimeout(typeWriter6, speed);
  } else {
  }
}
let nana = "";
let q = 12;
text = "Back to Page";
function backWriter() {
  if (q != -1) {
    document.getElementById("back").innerHTML = text.charAt(q) + nana;
    q--;
    nana = document.getElementById("back").innerHTML = text.charAt(q) + nana;
    setTimeout(backWriter, 200);
  } else {
    document.getElementById("back").innerHTML = "<button><a href='./../index.html'>Back to Page</a></button>"
  }
}

typeWriter();
setTimeout(backWriter, 500)
