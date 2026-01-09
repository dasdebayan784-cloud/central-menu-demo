fetch("menu.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("menu");
    data.menu.forEach(item => {
      list.innerHTML += `<li>${item.name} - ${item.price}</li>`;
    });
  });
