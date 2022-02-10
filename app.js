function pic () {
let zahl = Math.ceil(Math.random() * 8);
let zahlp = Math.ceil(Math.random() * 8);
let imgf = "<img id=imgleft src=./picture/"+ zahl + ".png>";
let imgl = "<img id=imgright src=./picture/"+ zahlp + ".png>";
let giv = document.getElementById('bild');
giv.insertAdjacentHTML("beforeend", imgf);
giv.insertAdjacentHTML("beforeend", imgl);
}
pic();