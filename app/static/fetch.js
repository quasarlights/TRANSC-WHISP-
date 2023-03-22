const form= document.getElementById('form');
const gif= document.getElementById('gif');

function succesImg(){
    
    gif.src= "../static/images/PNG_transparency_demonstration_1.png";
    
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData= new FormData(form);

    fetch('/transcript', {
        method: 'POST',
        body: formData,
    }).then(response=> response.blob())
    
    .then(blob => {
          const fileUrl = URL.createObjectURL(blob);
          const downloadButton = document.createElement('a');
          downloadButton.href = fileUrl;
          downloadButton.download = 'file.txt';
          downloadButton.innerText = 'Download File';
          downloadButton.addEventListener('click', () => {
            downloadButton.parentNode.removeChild(downloadButton);
            
          });
          document.body.appendChild(downloadButton); // Add the button to the document
            succesImg()
        })
        
        .catch(error => {
          console.error('Error downloading file:', error);
          // Handle the error here
        });
    });
    
    
    
    
    /*then(blob=>{
        const fileUrl= URL.createObjectURL(blob);
        const a= document.createElement('a');
        a.href= fileUrl;
        a.download= 'file.txt';
        a.click();
    })
})
*/