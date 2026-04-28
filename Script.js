document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Email validation
    if (!email.endsWith("@uppolice.gov.in")) {
        message.style.color = "red";
        message.textContent = "Email must end with @uppolice.gov.in";
        return;
    }

    // Dummy API call
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            message.style.color = "green";
            message.textContent = "Login Successful!";
            document.getElementById("loginForm").reset();
        })
        .catch(error => {
            message.style.color = "red";
            message.textContent = "Something went wrong!";
        });
});