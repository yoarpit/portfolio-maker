window.onload = function() {
    // Load the JSON file
    fetch('parameter.json')
        .then(response => response.json())
        
            
            
            
        .then(data => {
                // Set the name with Typed.js effect
                document.getElementById('name').textContent = data.name;

    
                // Set profession with Typed.js effect
                new Typed('#profession', {
                    strings: data.profession,  
                    typeSpeed: 80,  
                    backSpeed: 40,  
                    backDelay: 1000,  
                    startDelay: 1500,  
                    showCursor: false,  
                    loop: false,  


                });

            const profileImage = document.getElementById('profileImage');
            profileImage.src = data.profileimage;

            const secondimg = document.getElementById('secondimage');
            secondimg.src = data.secondimage;

            document.getElementById('summery').textContent = data.summery;
            
    

            })
                
            

            
            
        
        

        .catch(error => {
            console.error('Error loading the JSON data:', error);
        });
};


