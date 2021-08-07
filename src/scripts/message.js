function show () {
  const mess = document.createElement ('button');
  mess.className = 'message-small';
  mess.innerText = 'Проверьте e-mail!';
  let place = document.querySelectorAll ('.smallform');

  for (let i = 0; i < place.length; i++) {
    place[i].appendChild (mess.cloneNode (true));
  }

  setTimeout (hide, 5000);

  function hide () {
    for (let i = 0; i < document.querySelectorAll ('.message-small').length; i++) {
      document.querySelectorAll ('.message-small')[i].style.visibility = 'hidden';
      //     document.getElementsByClassName('message-small')[i].remove();
    }
  }
}

export default show;
