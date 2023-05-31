var btnSignups = document.querySelector('.signup button').addEventListener('click', function () {
    console.log('signup clicked');
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    fetch('http://localhost:3000/users/signup', {
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
            feedback.textContent = "Signup success";
            feedback.classList.remove('hidden');

            let token = json.data.token;
            localStorage.setItem('token', token);
            window.location.href = "app.html";
          
        
        }
        else {
            let feedback = document.querySelector('.alert');
            feedback.textContent = "Signup failed";
            feedback.classList.remove('hidden');
        }
    });

});

