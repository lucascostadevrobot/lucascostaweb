function intentsAbrirProjetos(nomeProjeto) {
    var CONFIG_EXIBE_PROJETOS = true;

    if (CONFIG_EXIBE_PROJETOS) {
        let url = "";
        switch (nomeProjeto) {
            case "ECOPONTO":
                url = window.open('https://github.com/lucascostadevrobot', '_blank');
                url.focus();
                break;
            case "ECOPONTOWEB":
                url = window.open('https://ecoponto.ascenderideias.com.br/', '_blank');
                url.focus();
                break;

            case "BIKERSEEKER":
                url = window.open('https://github.com/lucascostadevrobot/bikeseekerF', '_blank');
                url.focus();
                break;

            case "BRUTOSBURGUER":
                url = window.open('https://brutos-burguer-v1.vercel.app/', '_blank');
                url.focus();
                break;

            case "EMPREGO":
                url = window.open('https://emprego.ascenderideias.com.br/', '_blank');
                url.focus();
                break;
        }
    }

}


function intentAbrirPaginaContato(isConversar) {
    var CONFIG_EXIBIR_PAGINA_CONTATO = true;

    if (CONFIG_EXIBIR_PAGINA_CONTATO) {
        if (isConversar === 'true') {
            let url = window.open('https://www.linkedin.com/in/lucas-costa-2219b5189/', '_blank')
            url.focus();
        }
    } else {
        alert("Não foi possível entrar em contato agora, tente mais tarde.")
    }
}


