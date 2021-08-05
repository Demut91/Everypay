const forms = () => {
  const apiurl = 'http://ptsv2.com/t/0rft5-1628159972/post';
  const form = document.querySelectorAll ('form');
  const inputs = document.querySelectorAll ('input', 'textarea');

  const postData = async (url, data) => {
    let res = await fetch (url, {
      method: 'POST',
      body: data,
    });
    return await res.text ();
  };

  const clearInputs = () => {
    inputs.forEach (item => {
      item.value = '';
    });
  };

  form.forEach (item => {
    item.addEventListener ('submit', e => {
      e.preventDefault ();

      const formData = new FormData (item);
      postData (apiurl, formData)
        .then (res => {
          console.log (res);
        })
        .finally (() => {
          clearInputs ();
        });
    });
  });
};

export default forms;
