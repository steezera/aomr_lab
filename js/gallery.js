// //파일불러오는건 노드js로 해야하는듯하다.

// var gallery = {
//     gallery:()=>{
//         const fs = require('fs');

//         fs.readdir('gallery', (err, files)=>{
//             console.log(files);

//             for(var i=0;i<files.length;i++){
//                 fs.readFile()
//             }
//         })
//     }
// };

// module.exports = gallery;

var galleryContainer = document.querySelector('.gallery-container');

var imageList = 13;

for(var i=1;i<=imageList;i++){
    galleryContainer.innerHTML += `
        <img src = './gallery/${i}.jpeg' class='gallery-image'>
    `;
}