(function () {
  emailjs.init("Mot406pJg1UHnmSfo");
})();

document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_bjt7aga", "template_zymblza", this)
    .then(() => {
      const modalBootstrap = new bootstrap.Modal(document.getElementById('idModalSucessoFormulario'));
      modalBootstrap.show();
      //alert("Mensagem enviada com sucesso!");
      this.reset();
    }, (err) => {
      alert("Erro ao enviar: " + JSON.stringify(err));
    });
});