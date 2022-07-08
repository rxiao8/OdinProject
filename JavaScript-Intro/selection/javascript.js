const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', ()=>{
    const choice = select.value;

    switch(choice){
        case "Horse":
        update("black", "white");
        break;
        case "Dog":
        update("blue", "white");
        break;
        case "Whale":
        update("red", "white");
        break;
    }
});

function update(bgColor, textColor) {
    // html.style.backgroundColor = bgColor;
    // html.style.color = textColor;
  }