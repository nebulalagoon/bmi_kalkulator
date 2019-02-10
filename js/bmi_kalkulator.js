function bmi() {

   var d=document.querySelector('body');
   var r=d.querySelector('#rezultat');

    if (r!==null)
        d.removeChild(r);
  
  var m=document.querySelector('#masa_inp').value;
  var v=document.querySelector('#visina_inp').value/100;

    var c=m/(v*v);
    var rez=document.createElement('section');
    rez.textContent='Vaš BMI iznosi '+ c.toFixed(1) +'.';
    rez.id='rezultat';
    document.body.append(rez);
}

document.querySelector('#gumb').addEventListener('click', bmi, false);