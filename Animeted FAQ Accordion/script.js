const items = document.querySelectorAll(".item");
items.forEach(item => {
  item.querySelector("button").onclick = () => {
    const open = item.classList.contains("active");
    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector("button").setAttribute("aria-expanded", "false");
    });
    if (!open) {
      item.classList.add("active");
      item.querySelector("button").setAttribute("aria-expanded", "true");
    }
  };
});