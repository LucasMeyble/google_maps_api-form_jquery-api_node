$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var birthday = $("#birthday").val();
    var address = $("#address").val();

    // Validação dos dados
    if (name === "" || email === "" || phone === "" || birthday === "" || address === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Validação do formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    // // Validação do formato da data de nascimento
    var birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthdayRegex.test(birthday)) {
      alert("Por favor, insira uma data de nascimento válida no formato AAAA-MM-DD.");
      return;
    }

    var data = {
      name: name,
      email: email,
      phone: phone,
      birthday: birthday,
      address: address
    };

    $.ajax({
      url: "http://localhost:3000/cadastro",
      method: "POST",
      contentType: 'application/json',
      cache: false,
      dataType: 'json',
      data: JSON.stringify(data),
      success: function (response) {
        alert("Dados enviados com sucesso!");
        $("form")[0].reset();
      },
      error: function (xhr, status, error) {
        console.error(error);
        alert("Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
      }
    });
  });
});