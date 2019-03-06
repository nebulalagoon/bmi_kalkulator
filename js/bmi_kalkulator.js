//funkcija za racunanje bmi-ja
const bmi = (m,v) => {
  return m/(v*v); 
 }


//callback funkcija
function racun() {

 const d = document.querySelector('body'); //micanje starog rezultata
 const r = d.querySelector('.rezultat');

while (r) {
       d.removeChild(r);
   };

 let masaInput = document.querySelector('#masa_inp').value;
 let visinaInput = document.querySelector('#visina_inp').value/100;
 let dobInput = document.querySelector('#dob_inp').value;

 if ((masaInput <= 0) || (visinaInput <= 0)) {
   const pog = document.createElement('section'); //dodavanje greške
   pog.textContent = 'Molim unesite valjane podatke.';
   pog.className = 'rezultat';
   pog.id = 'greska';
   document.body.appendChild(pog);
 } else if (dobInput < 18) {
  const upozorenje = document.createElement('section');
  upozorenje.textContent = 'BMI nije prikladan alat za ocjenjivanje uhranjenosti djece i adolescenata mlađih od 18 godina.';
  upozorenje.className = 'rezultat';
  upozorenje.id = 'upozorenje';
  document.body.appendChild(upozorenje);
 } else {
   let c = bmi(masaInput, visinaInput);
   const rez = document.createElement('section'); //dodavanje novog elementa
   rez.textContent = 'Vaš BMI iznosi '+ c.toFixed(1) +'.';
   rez.className = 'rezultat';
   document.body.appendChild(rez);
 }

};


//gumb - event listener
document.querySelector('#gumb').addEventListener('click', racun, false); 