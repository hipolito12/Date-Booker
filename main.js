var chk1 = document.getElementById("chk1");
var chk2 = document.getElementById("chk2");
var chk3 = document.getElementById("chk3");
var ubicacion = document.getElementById("select-ciudad");
var dinero = document.getElementById("input_dinero");
var button = document.getElementById("button");
var option;
function verificaCampos() {
    if ((chk1.checked == false || chk2.checked == false && chk3.checked == false) && dinero.value != "") {
        alerta = document.getElementById("alert");
        alerta.style.display = "block";
        setTimeout(() => {
            alerta.style.display = "none";
        }, 3000);

    }
    for(var i = 0; i < dinero.value.length; i++) {
        if(dinero.value[i] == "$") {
            dinero.value = dinero.value.replace("$", " ");
        }
    }
   


    if(isNaN(dinero.value)) {

        alerta = document.getElementById("alert");
        alerta.style.display = "block";
        alerta.innerHTML = "El campo de dinero debe ser un numero";
        setTimeout(() => {
            alerta.style.display = "none";
        }, 3000);

    }
}
button.addEventListener("click", (e) => {
    verificaCampos()
    e.preventDefault();
    if (chk1.checked) {
        option = chk1.value;
    }
    else if (chk2.checked) {
        option = chk2.value;
    }
    else if (chk3.checked) {
        option = chk3.value;
    }
    let monay = dinero.value;
    let location = ubicacion.options[ubicacion.selectedIndex].text;
    let data = 
    {
        "option": option,
        "money": monay,
        "location": location
    }
    localStorage.setItem("Userdata", JSON.stringify(data));
    window.location.href = "./DatePreferences.html";

})