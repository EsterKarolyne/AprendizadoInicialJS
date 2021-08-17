var agora = new Date()
var hora = agora.getHours()
console.log(`são ${hora} horas`)
if (hora < 12){
    console.log(`está de manhâ`)
} else if (hora <=18) {
        console.log(`está de tarde`)
} else {
    console.log(`boa noite`)
}