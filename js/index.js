function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


 const el = document.querySelector('.texto')
 const text = `Seja bem vindo a Barbearia ElegAn'S!`
 const interval = 30

 function showText(el, texto, interval){
    const char = text.split("").reverse();

    const type = setInterval(() => {

        if(!char.length){
            return clearInterval(type);
        }

        const next = char.pop();

        console.log(next)
        el.innerHTML += next;

    },interval)

    console.log(char)
 }

 showText(el,text,interval)