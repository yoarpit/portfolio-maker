window.onload = function() {
    // Load the JSON file
    fetch('parameter.json')
        .then(response => response.json())
        
            
            
            
        .then(data => {
                // Set the name with Typed.js effect
                document.getElementById('nam').textContent = data.name;

    
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
            // skills name?
            document.getElementById('sh').textContent = data.skills[0];
            document.getElementById('ge').textContent = data.skills[1];
            document.getElementById('am').textContent = data.skills[2];
            document.getElementById('su').textContent = data.skills[3];
            document.getElementById('ta').textContent = data.skills[4];
            document.getElementById('le').textContent = data.skills[5];
            document.getElementById('sd').textContent = data.skills[6];
            document.getElementById('em').textContent = data.skills[7];
            // skills summery
            document.getElementById('s1').textContent = data.ssummery[0];
            document.getElementById('s2').textContent = data.ssummery[1];
            document.getElementById('s3').textContent = data.ssummery[2];
            document.getElementById('s4').textContent = data.ssummery[3];
            document.getElementById('s5').textContent = data.ssummery[4];
            document.getElementById('s6').textContent = data.ssummery[5];
            document.getElementById('s7').textContent = data.ssummery[6];
            document.getElementById('s8').textContent = data.ssummery[7];


            const p1img = document.getElementById('p1');
            p1img.src = data.project1[0];
            document.getElementById('p1i').textContent = data.project1[1];
            document.getElementById('p1s').textContent = data.project1[2];
            const github1=data.project1[3];
            document.getElementById("p1g").onclick=function(){
                window.location.href=github1
            };
            const demo1=data.project1[4];
            document.getElementById("p1d").onclick=function(){
                window.location.href=demo1
            };




            
            const p2img = document.getElementById('p2');
            p2img.src = data.project2[0];
            document.getElementById('p2i').textContent = data.project2[1];
            document.getElementById('p2s').textContent = data.project2[2];
            const github2=data.project2[3];
            document.getElementById("p2g").onclick=function(){
                window.location.href=github2
            };
            const demo2=data.project1[4];
            document.getElementById("p2d").onclick=function(){
                window.location.href=demo2
            };

             
            const p3img = document.getElementById('p3');
            p3img.src = data.project3[0];
            document.getElementById('p3i').textContent = data.project3[1];
            document.getElementById('p3s').textContent = data.project3[2];
            const github3=data.project3[3];
            document.getElementById("p3g").onclick=function(){
                window.location.href=github3
            };
            const demo3=data.project3[4];
            document.getElementById("p3d").onclick=function(){
                window.location.href=demo3
            };

               
            const p4img = document.getElementById('p4');
            p4img.src = data.project4[0];
            document.getElementById('p4i').textContent = data.project4[1];
            document.getElementById('p4s').textContent = data.project4[2];
            const github4=data.project4[3];
            document.getElementById("p4g").onclick=function(){
                window.location.href=github3
            };
            const demo4=data.project4[4];
            document.getElementById("p4d").onclick=function(){
                window.location.href=demo4
            };



               
            const p5img = document.getElementById('p5');
            p5img.src = data.project5[0];
            document.getElementById('p5i').textContent = data.project5[1];
            document.getElementById('p5s').textContent = data.project5[2];
            const github5=data.project5[3];
            document.getElementById("p5g").onclick=function(){
                window.location.href=github5
            };
            const demo5=data.project5[4];
            document.getElementById("p5d").onclick=function(){
                window.location.href=demo5
            };



               
            const p6img = document.getElementById('p6');
            p6img.src = data.project6[0];
            document.getElementById('p6i').textContent = data.project6[1];
            document.getElementById('p6s').textContent = data.project6[2];
            const github6=data.project6[3];
            document.getElementById("p6g").onclick=function(){
                window.location.href=github6
            };
            const demo6=data.project6[4];
            document.getElementById("p6d").onclick=function(){
                window.location.href=demo6
            };
            })

            
        .catch(error => {
            console.error('Error loading the JSON data:', error);
        });
    }
                



            (function() {
                emailjs.init("YOUR_USER_ID");
              })();
          
              // Email submission handler
              document.getElementById('email-form').addEventListener('submit', function(event) {
                event.preventDefault();
          
                const formData = new FormData(event.target);
                
                // Send email via EmailJS
                emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                  .then(function(response) {
                    console.log('Success:', response);
                    document.getElementById('status-message').textContent = "Email sent successfully!";
                  }, function(error) {
                    console.log('Failed:', error);
                    document.getElementById('status-message').textContent = "Failed to send email. Please try again.";
                  });
              }); 
            

            
            
        
        


