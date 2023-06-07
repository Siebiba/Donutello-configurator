var btnSignups = document.querySelector('.signup button').addEventListener('click', function () {
    
    let feedback = document.querySelector('.alert');
            feedback.textContent = "Checking credentials";
            feedback.classList.remove('hidden');
    
    
    console.log('signup clicked');
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    fetch('https://donutello-api.onrender.com/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then(response => response.json()).then(json =>{
        console.log(json);

  
        if (json.status == "success") {

          
            let feedback = document.querySelector('.alert');
            feedback.textContent = "Login success";
            feedback.classList.remove('hidden');

            let token = json.data.token;
            localStorage.setItem('token', token);
            window.location.href = "app.html";
          
        
        }
        else {
            let feedback = document.querySelector('.alert');
            feedback.textContent = "Login failed";
            feedback.classList.remove('hidden');
        }
    });

});

