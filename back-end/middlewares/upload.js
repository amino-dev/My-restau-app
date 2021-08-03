// const path = require ('path')
// const multer = require ('multer')

// var storage = multer.diskStorage({
//     destination : function(req, file, cb) {
//         cb(null, "./uploads")
//     },
//     filename : function(req, file, cb) {
//         let ext = path.extname(file.originalname)
//         cb(null, Date.now() + ext)
//     }
// })

// var upload = multer ({
//     storage : storage,
//     fileFilter : function(req, file, callback) {
//         if (
//             file.mimetype == "img/png" ||
//             file.mimetype == "img/jpg"
//         ){
//             callback(null, true)
//         } else {
//             console.log("Only jpg and png files are supported!")
//             callback(null, false)
//         }
//     },
//     limits: {
//         fileSize : 1024 * 1024 * 2
//     }
// })

// module.exports = upload

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

module.exports = upload
