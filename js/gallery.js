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

        <div class="divider out"><div class="divider in"></div></div>
        <div class='gallery-image-container'>
            <img src = './image/member-photo/${i}.jpeg' class='gallery-image'>
        </div>
    `;
}