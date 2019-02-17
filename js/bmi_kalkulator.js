const bmi = (m,v) => {
   return m/(v*v); 
  }

function racun() {

  const d = document.querySelector('body'); //micanje starog rezultata
  const r = d.querySelector('.rezultat');

 if (r) {
        d.removeChild(r);
    };

  let masaInput = document.querySelector('#masa_inp').value;
  let visinaInput = document.querySelector('#visina_inp').value/100;


  if ((masaInput <= 0) || (visinaInput <= 0)) {
    const pog = document.createElement('section'); //dodavanje greške
    pog.textContent = 'Molim unesite valjane podatke.';
    pog.className = 'rezultat';
    pog.id = 'greska';
    document.body.append(pog);
  } else {
    let c = bmi(masaInput, visinaInput);
    const rez = document.createElement('section'); //dodavanje novog elementa
    rez.textContent = 'Vaš BMI iznosi '+ c.toFixed(1) +'.';
    rez.className = 'rezultat';
    document.body.append(rez);
  }
};

document.querySelector('#gumb').addEventListener('click', racun, false);



