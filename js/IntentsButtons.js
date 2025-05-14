function intentsAbrirProjetos(nomeProjeto) {
    var CONFIG_EXIBE_PROJETOS = true;


    const PROJETOS = {
        ECOPONTO: document.getElementById("btn_EcoPonto"),
        ECOPONTOWEB: document.getElementById("btn_EcoPontoWeb"),
        BIKERSEEKER: document.getElementById("btn_BikerSeeker"),
        BRUTOSBURGUER: document.getElementById("btn_BrutosBurguer"),
        EMPREGO: document.getElementById("btn_empreGO"),
        MEUCONDOMINIO: document.getElementById("btn_MeuCondominio")

    }

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


