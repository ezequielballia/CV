document.getElementById('cambiarColorBtn').addEventListener('click', function() {
    cambiarColor();
  });
  let competencias = document.getElementById('competencias');
  competencias.addEventListener('mouseover', function() {
    competencias.style.color = '#FF5733'; 
  });

  competencias.addEventListener('mouseout', function() {
    competencias.style.color = ''; 
  });
  function cambiarColor() {
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');
    let main = document.querySelector('main');

    
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    
    header.style.backgroundColor = randomColor;
    footer.style.backgroundColor = randomColor;
    main.style.backgroundColor = randomColor;
  }
  

  //Formulario
  function validarFormulario() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("subject").value;
    let mensaje = document.getElementById("message").value;
  
    if (nombre == "") {
      alert("Debes ingresar tu nombre");
      return false;
    }
  
    if (email == "") {
      alert("Debes ingresar tu correo electrónico");
      return false;
    }
  
    if (asunto == "") {
      alert("Debes ingresar un asunto");
      return false;
    }
  
    if (mensaje == "") {
      alert("Debes ingresar un mensaje");
      return false;
    }
  
    return true;
  }
