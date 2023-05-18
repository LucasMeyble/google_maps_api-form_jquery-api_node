$(document).ready(function () {
  
  var behavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  }
  options = {
    onKeyPress: function (val, e, field, options) {
      field.mask(behavior.apply({}, arguments), options);
    }
  };
  $('#phone').mask(behavior, options);

  $("form").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val().replace(/[^\d]+/g,'');
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

    // Validação do formato da data de nascimento
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
        alert(response.message);
        $("form")[0].reset();
      },
      error: function (xhr, status, error) {
        console.error(error);
        alert("Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
      }
    });
  });
});