window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("button1");
  b.addEventListener("click", click1);
});

function updatePrice() {
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  let radioDiv = document.getElementById("radios");
  if (select.value == "2") {
    radioDiv.style.display = "block";
  } else {
    radioDiv.style.display = "none";
  }
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price *= optionPrice;
      }
    }
  });
  let checkDiv = document.getElementById("checkboxes");
  if (select.value == "3") {
    checkDiv.style.display = "block";
  } else {
    checkDiv.style.display = "none";
  }
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  let prodPrice = document.getElementById("prodPrice");
  let k = document.getElementById("input").value;
  if (k.match(/^[0-9]+$/) != null) {
    prodPrice.innerHTML = price * k + " рублей";
  } else if (k == "0") {
    prodPrice.innerHTML = 0 + " рублей";
  } else {
    prodPrice.innerHTML = "Неверные данные";
    alert("Ошибка!");
  }
}
function getPrices() {
  return {
    prodTypes: [100, 500, 200],
    prodOptions: {
      option1: 1,
      option2: 2,
    },
    prodProperties: {
      prodM: 15,
      prodM2: 30,
      prodM3: 45,
    },
  };
}
window.addEventListener("DOMContentLoaded", function (event) {
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";
  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function (event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });
  let inputs = document.getElementById("input");
  input.addEventListener("change", function (event) {
    let r = event.target;
    console.log(r.value);
    updatePrice();
  });
  updatePrice();
});
