function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


 const el = document.querySelector('.texto')
 const el2 = document.querySelector('.subtexto')
 const text = `Seja bem vindo a Barbearia ElegAn'S!`
 const subTexto = "Mais do que um corte, uma experiência de confiança!"

 const interval = 30

 function showText(el, text, interval){
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

function orderFunc(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Espero isso aqui!")
            resolve()
        }, 1000)
    })
}


async function segunda() {
    showText(el,text,interval)
    
    await orderFunc()

    showText(el2,subTexto,interval)
}

segunda()

