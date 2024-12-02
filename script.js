document.addEventListener("DOMContentLoaded", function() {
  // Mensagem de boas-vindas ao usuário
  console.log("Página carregada com sucesso!");

  // Adiciona um evento de clique nos botões
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      alert("Você será redirecionado para a Shopee. Aproveite a compra!");
    });
  });
});
