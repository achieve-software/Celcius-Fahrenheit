// 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

let derece = +prompt("celcius derece gir");
function celfah(derece) {
  let fah = (derece * 9) / 5 + 32;
  console.log(fah);
}
celfah(derece);
