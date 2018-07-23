let imagenUrl = '';
$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'examen1', api_key: '249542599466813'}); 

    // Upload button
    let uploadButton = $('#uploadImageBtn');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'examen1', upload_preset: 'lRamses', tags: ['cgal']}, 
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/examen1/image/upload/' + id;    
            imagenUrl = processImage(id);
            console.log(imagenUrl);
            document.querySelector('#txtImagen').src = imagenUrl;
            /*cambiarFoto(imagenUrl);*/
            return imagenUrl;
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}