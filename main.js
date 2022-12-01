/*No llegue a completar lo de Local Storage, lo estoy repasando nuevamente. Pero todo 
lo demás tiene mucho esfuerzo. Espero las correcciones y la resolución para ver si me sale con el repaso que estoy haciendo.
Saludos :) */

const pizzaInput = document.getElementById('pizza-Input')
const btn = document.getElementById('btn').addEventListener('click', mostrarpromo)
const h2 = document.getElementById('h2')
const h3 = document.getElementById('h3')
const title = document.getElementById('title')
const formElement = document.getElementById('form')
const div = document.getElementById('img_id')
const img = document.getElementById('imgimg');
const p = document.getElementById('pDeHeader');



function cambioColor(){
    title.style.color= "blue";

}
title.style.color= "blue";

function alertaPrueba (saludo){
    console.log('Hola Sr./Sra:'+ (saludo))
       
   /* alert("AH!");
    return;*/

}

//let usuario = prompt('Ingrese su Nombre de uusuario')
//alertaPrueba(usuario);

function saludarUsuario(){
  p.textContent = 'Hola Amig@!' + ' ' + `${usuario}`;
    
}
//saludarUsuario();



function mostrarpromo(e){
    e.preventDefault();
    const ID = document.querySelector('#pizza-Input').value; 
    const IdNumber = parseInt (document.querySelector('#pizza-Input').value);
    
    pizzas.forEach(pizza => {
        if (IdNumber === pizza.id){
            h2.textContent = `${pizza.nombre}`; 
            h3.textContent = `$${pizza.precio} ARS`;
            //console.log(`${IdNumber}`+'y'+`${pizza.id}`)
                                    
        } else if (ID=== '' || ID === '0') 
        {h2.textContent = 'Error #1 en la selección'; 
        h3.textContent = 'Ningún valor ingresado';
        img.setAttribute('src','assets/fray_png.png');
    
    }
else if (ID > pizza.id) 
       {h2.textContent = 'Error #2 en la selección'; 
        h3.textContent = 'Ingrese un valor entre 1 y 6';
        img.setAttribute('src','assets/simboloDePregunta2.jpg');
        
    }
    })
    fotos.forEach(element => {
        if (IdNumber === element.id){
         img.setAttribute('src',`${element.url}`); 
             
        }
    })
    
   
}


const pizzas = [
    {
        id:1,
        nombre: "Muzzarella",
        ingredientes:["Muzzarella","Tomates","Aceitunas"],
        precio: 590
    },
    {
        id:2,
        nombre:"Pizza Especial",
        ingredientes:["Muzzarella","Jamón","Aceitunas","Morrón Rojo"],
        precio: 900
    },
    {
        id:3,
        nombre:"Pizza Cuatro Quesos",
        ingredientes:["Muzzarella","Queso Azul", "Queso Parmesano", "Queso Provolone","Aceitunas"],
        precio: 1200

    },{
        id:4,
        nombre: "Pizza de Cebolla",
        ingredientes:["Muzzarella","Cebolla","Aceitunas"],
        precio: 1100
    },
    {
        id:5,
        nombre:"Pizza Calabresa",
        ingredientes:["Muzzarella","Salame","Aceitunas"],
        precio: 1300
    },
    {
        id:6,
        nombre:"Pizza Monstruo",
        ingredientes:["Muzzarella", "Jamón", "Cheddar", "Papas Fritas", "Morrón Rojo", "Cebolla de verdeo", "Aceitunas"],
        precio: 1800

    }
   
]

const fotos = [
    {
        id:0,
        url: "assets/fray_png.png"
    },
    {
        id:1,
        url:"assets/pizza_1.jpg"
    },
    {
        id:2,
        url:"assets/pizza_2.jpg"
    },
    {
        id:3,
        url:"assets/pizza_3.jpg"
    },
    {
        id:4,
        url:"assets/pizza_4.jpg"
    },
    {
        id:5,
        url:"assets/pizza_5.jpg"
    },
    {
        id:6,
        url:"assets/pizza_6.jpg"
    }
]

