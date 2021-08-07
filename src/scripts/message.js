function show () {
  const mess = document.createElement ('button');
  mess.className = 'message-small';
  mess.innerText = 'Проверьте e-mail!';
  let place = document.querySelectorAll ('.smallform');

  const bigmess = document.createElement('div')
  bigmess.className = 'message-big'
  bigmess.innerHTML = 'Спасибо! <p>Мы приняли ваш запрос.</p><p>В ближайшее время наш специалист поддержки свяжется с вами.</p>'
  let bigplace = document.querySelector('.footer-form')
  bigplace.appendChild(bigmess)

  for (let i = 0; i < place.length; i++) {
    place[i].appendChild (mess.cloneNode (true));
  }

  setTimeout (hide, 4000);
  

  function hide () {
    for (let i = 0; i < document.querySelectorAll ('.message-small').length; i++) {
      document.querySelectorAll ('.message-small')[i].style.visibility = 'hidden';     
    }
    for (let i = 0; i < document.querySelectorAll ('.message-small').length; i++) {     
      document.getElementsByClassName('message-small')[i].remove();
    }       
    bigplace.removeChild(bigmess)
  }
}

export default show;
