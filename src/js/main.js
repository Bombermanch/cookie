let input = document.getElementById("input");
let btn = document.getElementById("send");
let btnSave = document.querySelector(".save");
let btnCancel = document.querySelector(".cancel");
let checkbox = document.querySelectorAll(".checkbox");
if (getCookie('city')){
	let modal = confirm(`Ваш город ${getCookie("city")}?`)
	input.value = getCookie("city");
	if (modal == false){
		deleteCookie("city");
		input.value = "";
	}

}




btn.addEventListener("click", () => {
	setCookie("city", `${input.value[0].toUpperCase() + input.value.slice(1).toLowerCase()}`, {})
})


for(let i = 0; i < checkbox.length; i++){
	btnCancel.addEventListener("click", () => {
		deleteCookie("disabled");
		deleteCookie("checked" + i)
		checkbox[i].removeAttribute("disabled");


	})
	btnSave.addEventListener("click", function () {
		setCookie("disabled", true);
		checkbox[i].setAttribute("disabled", getCookie("disabled"));

		
	})

	checkbox[i].addEventListener("change", function(){


		if (this.checked){
			setCookie("checked" + i, true, {})

			
			

		}else{
			deleteCookie("checked" + i)

			
		}
		
	})
	if(getCookie("checked" + i)){
		checkbox[i].setAttribute("checked", `${getCookie("checked" + i)}`)
		
			checkbox[i].setAttribute("disabled", getCookie("disabled"))

		
	}


	
}




function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}


function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}




