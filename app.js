function pic () {
let zahl = 1;
let zahlp = 1;
while (zahl === zahlp) {
zahl = Math.ceil(Math.random() * 4);
zahlp = Math.ceil(Math.random() * 4);
}
let imgf = "<a href=./sides/"+ zahl + ".html><img id=imgleft src=./picture/"+ zahl + ".png style=height:30rem;><a>";
let imgl = "<a href=./sides/"+ zahlp + ".html><img id=imgleft src=./picture/"+ zahlp + ".png style=height:30rem;><a>";
let giv = document.getElementById('bild');
let givi = document.getElementById('bild2');
giv.insertAdjacentHTML("beforeend", imgf);
givi.insertAdjacentHTML("beforeend", imgl);
}
pic();
