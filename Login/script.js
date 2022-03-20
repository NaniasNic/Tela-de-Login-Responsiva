const login = () => {

    let user = document.querySelector("input[type=text]")
    let botao = document.querySelector("input[type=button]")
    let senha = document.querySelector("input[type=password]")

    botao.addEventListener('click', () => {
        
        let login = {
            'nome':'Admin',
            'pass':'adm123'
        }

        if(user.value == login.nome && senha.value == login.pass){
            alert('usuario autorizado, bem vindo: ' + user.value)
            window.location.href = "teste.html"
        }
        else{
            alert("Senha ou usuario incorreto tente novamente")
        }

    })

}

login();