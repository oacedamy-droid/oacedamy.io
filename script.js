fetch('sections/classes.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('classes').innerHTML = data;
  });
