// Implenta acesso para a tela de login
function acessar(){
    let LoginEmail = document.getElementById('loginEmail').value;
    let LoginSenha = document.getElementById('loginSenha').value;

   // Implementa estrutura que testa se todos os campos foram preenchidos
    if(!LoginEmail || !LoginSenha){
        alert("Favor preencher todos os campos");
    } else {
        window.location.href = "cadastro.html";
    }

}
