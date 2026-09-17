let loginForm = document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        let username =
            document.getElementById("username").value.trim();


        let password =
            document.getElementById("password").value.trim();


        let error =
            document.getElementById("error");



        if (username === "" || password === "") {

            error.textContent =
                "Please enter username and password.";

            return;

        }

        if (username === "admin" && password === "1234") {

            window.location.href = "success.html";

        }

        else {

            error.textContent =
                "Invalid username or password.";

        }

    });

}

let loginTime =
    document.getElementById("loginTime");


if (loginTime) {

    let now = new Date();

    loginTime.textContent =
        now.toLocaleString();

}

let greetingElement =
    document.getElementById("greeting");


if (greetingElement) {

    let currentHour =
        new Date().getHours();


    let greeting;


    if (currentHour < 12) {

        greeting = "Good Morning";

    }

    else if (currentHour < 17) {

        greeting = "Good Afternoon";

    }

    else if (currentHour < 21) {

        greeting = "Good Evening";

    }

    else {

        greeting = "Good Night";

    }


    greetingElement.textContent =
        greeting;

}

let timerElement =
    document.getElementById("timer");


if (timerElement) {

    let time = 30;

    let countdown;

    function resetTimer() {

        time = 30;

        timerElement.textContent = time;


        clearInterval(countdown);


        countdown = setInterval(function() {

            time--;

            timerElement.textContent = time;

            if (time <= 0) {

                clearInterval(countdown);

                window.location.href = "index.html";

            }

        }, 1000);

    }


    resetTimer();


    document.addEventListener("mousemove", function() {

        resetTimer();

    });


    document.addEventListener("keydown", function() {

        resetTimer();

    });

    document.addEventListener("click", function() {

        resetTimer();

    });

    document.addEventListener("scroll", function() {

        resetTimer();

    });

    document.addEventListener("drag", function() {

        resetTimer();

    });

    document.addEventListener("keyup", function() {

        resetTimer();

    });

}