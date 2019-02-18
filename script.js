// the chess board



// var result = "";

// for(var i = 0; i < 8; i++) {
//     for(var j = 0; j < 8; j++) {
//         if((i+j) % 2) {
//             result += "□";
//         }else {
//             result += "■";
//         }
//     }
//     result += "\n";
// }
// console.log(result);

// var colors= ["red", "green", "blue","cyan","magenta","yellow","karbon"];

// function DrawTable(nizata) {
//     var ul = document.createElement("ul");
//     for(var i=0; i < nizata.length; i++) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(nizata[i]) );
//         ul.appendChild(li);
//     }
//     return ul;
// }

// document.body.appendChild(DrawTable(colors));

function DrawPyramid(size) {
var pyramid = "";
for (var i = 0; i < size; i++) {
    for(var j = 0; j < i; j++) {
        pyramid += "▩";
    }
    pyramid += "\n";
}
    console.log(pyramid);
}

DrawPyramid(8);