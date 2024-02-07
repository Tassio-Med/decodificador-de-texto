function criptografar() {
  let texto = document.querySelector('textarea[name="mensagem"]').value;
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  
  let mensagemCriptografada = document.createElement("div");
  mensagemCriptografada.id = "mensagem-criptografada";
  mensagemCriptografada.innerText = texto;

  let btnCopiar = document.createElement("button");
  btnCopiar.classList.add("default-btn");
  btnCopiar.classList.add("copy-btn");
  btnCopiar.innerText = "Copiar";
  btnCopiar.onclick = function() {
    let textoCopiado = document.getElementById("mensagem-criptografada").innerText;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado para a área de transferência!");
    console.log(textoCopiado)
  };

  let container = document.createElement("div");
  container.id = "mensagem-container";
  container.appendChild(mensagemCriptografada);
  container.appendChild(btnCopiar);

  let noMessage = document.getElementById("no-message");
  noMessage.replaceWith(container);
}


function descriptografar() {
  let textoCriptografado = document.querySelector('textarea[name="mensagem"]').value.trim();

  if (
    textoCriptografado.includes("enter") ||
    textoCriptografado.includes("imes") ||
    textoCriptografado.includes("ai") ||
    textoCriptografado.includes("ober") ||
    textoCriptografado.includes("ufat")
  ) {
    let textoDescriptografado = textoCriptografado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    
    let textarea = document.querySelector('textarea[name="mensagem"]');
    textarea.value = textoDescriptografado;

    let mensagemDescriptografada = document.getElementById("no-message");
    if (!mensagemDescriptografada) {

      mensagemDescriptografada = document.createElement("div");
      mensagemDescriptografada.id = "no-message";
      
      let imageContainer = document.createElement("div");
      imageContainer.id = "image-container";
      let img = document.createElement("img");
      img.src = "./images/garoto-lupa.svg";
      img.alt = "Imagem de um persona com uma lupa";
      img.id = "garoto-lupa";
      imageContainer.appendChild(img);

      let alertMensagem = document.createElement("span");
      alertMensagem.id = "alert-mensagem";
      let h3 = document.createElement("h3");
      h3.innerText = "Nenhuma mensagem encontrada";
      let p = document.createElement("p");
      p.innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
      alertMensagem.appendChild(h3);
      alertMensagem.appendChild(p);

      mensagemDescriptografada.appendChild(imageContainer);
      mensagemDescriptografada.appendChild(alertMensagem);

      let mensagemCriptografada = document.getElementById("mensagem-criptografada");
      mensagemCriptografada.replaceWith(mensagemDescriptografada);
    }

    let btnCopiar = document.querySelector("#mensagem-container button.default-btn");
    if (btnCopiar) {
      btnCopiar.remove();
    }
  }
}
