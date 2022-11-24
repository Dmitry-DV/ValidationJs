window.onload = function () {

    let input = document.getElementsByClassName('input');

    //Запрет на ввод цифр в поле "Full Name"
    input[0].onkeypress = function () {
        let result = parseInt(event.key);
        if (!isNaN(result)) {
            event.preventDefault();
        }
    };

    //Запрет на ввод точек и запятых в поле "Your username"
    input[1].onkeypress = function () {
        let result = (event.key);
        if (result === "." || result === ",") {
            event.preventDefault();
        }
    };

    //Вывод в консоль - выбран чекбокс или нет
    let checkbox = document.getElementById('checkbox');
    checkbox.onchange = function (e) {
        if (e.target.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    };

    //Валидация по клику на кнопку sign up при регистрации пользователя
    let mainButton = document.getElementsByClassName('main-button')[0];
    let popUp = document.getElementById('pop-up');

    function buttonRegistration() {
        mainButton.removeEventListener('click', buttonComeIn);
        for (let i = 0; i < input.length; i++) {
            //Проверка на заполнение полей
            if (!input[i].value) {
                alert("Заполните поле " + input[i].previousElementSibling.innerHTML + "!");
                return;
            }
            //Проверка пароля
            if (i === 3) {
                let arr = Array.from(input[3].value);
                if (arr.length < 8) {
                    alert("Пароль должен содержать не менее 8 символов!");
                    return;
                }
            }
            //Проверка на схожесть паролей
            if (i === 4) {
                if (input[3].value !== input[4].value) {
                    alert("Пароли не совпадают!");
                    return;
                }
            }
        }
        //Проверка выбран ли чекбокс
        if (!checkbox.checked) {
            alert("Согласитесь с условием!");
            return;
        }

        // Успешная регистрация
        popUp.style.display = 'flex';
        mainButton.addEventListener('click', buttonComeIn);
    }

    mainButton.addEventListener('click', buttonRegistration);

    //Вход в аккаунт после регистрации
    function buttonPopup() {
        mainButton.removeEventListener('click', buttonRegistration);
        popUp.style.display = "none";
        // Чистка полей
        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
        // Удаление и изменения блоков после успешной регистрации
        document.getElementsByClassName('main-title')[0].innerText = 'Log in to the system';
        document.getElementsByClassName('label')[0].remove();
        document.getElementsByClassName('label')[1].remove();
        document.getElementsByClassName('label')[2].remove();
        checkbox.remove();
        document.getElementsByClassName('checkbox-title')[0].remove();
        document.getElementsByClassName('main-account')[0].remove();
        mainButton.innerText = 'Sign In';
        document.getElementsByClassName('main')[0].style.alignItems = "center";
    }

    document.getElementById('pop-up-button').addEventListener('click', buttonPopup);
    document.getElementsByClassName('main-account')[0].addEventListener('click', buttonPopup);

    //Вход в аккаунт при нажатии на "Already have an account"
    function buttonComeIn() {
        mainButton.removeEventListener('click', buttonRegistration);
        for (let i = 0; i < input.length; i++) {
            //Проверка на заполнение полей
            if (!input[i].value) {
                alert("Заполните поле " + input[i].previousElementSibling.innerHTML + "!");
                return;
            }
        }
        // Успешный вход
        alert("Добро пожаловать, " + input[0].value + "!");
        // Очистка полей после входа
        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
    }

    mainButton.addEventListener('click', buttonComeIn);
};

