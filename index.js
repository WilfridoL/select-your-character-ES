// contenido de los personajes de las card
const card = {
  0:{
    coun:'España',
    race:'Humano',
    skill1:'Trueque y Arqueria',
    skill2:'Creacion de alimentos de mayor regeneracion de vida',
    gen:{
      man:{
        img:'img/humano1.webp',
        name:'Jose Almaheda'
      },
      woman:{
        img:'img/humano2.webp',
        name:'Alisia Hernandez'
      }
    }
  },
  1:{
    coun:'Rusia',
    race:'Hombre Lobo',
    skill1:'Aumento de daño cuerpo a cuerpo de forma progresiva y Sangrado',
    skill2:'Sentidos Agudos',
    gen:{
      man:{
        img:'img/lobo1.webp',
        name:'Dmitri Ivanov'
      },
      woman:{
        img:'img/lobo2.webp',
        name:'Ingrid Olsen'
      }
    }
  },
  2:{
    coun:'Rumania',
    race:'Vampiro',
    skill1:'Fuerza y Velocidad Sobrehumana',
    skill2:'Control de las Sombras',
    gen:{
      man:{
        img:'img/vampiro1.webp',
        name:'Vlad The Impaler',
      },
      woman:{
        img:'img/vampiro2.webp',
        name:'Axel The Impaler',
      }
    }
  },
  3:{
    coun:'Estados Unidos',
    race:'Zombies',
    skill1:'Mordisco Infeccioso y Extremidades desprendibles',
    skill2:'Regeneracion Lenta',
    gen:{
      man:{
        img:'img/zombie1.webp',
        name:'John Smith',
      },
      woman:{
        img:'img/zombie2.webp',
        name:'Emily Johnson',
      }
    }
  }
}
// variables del DOM
const containerCard = document.querySelector('.container-card');
const selectedCard = document.querySelector('.card-selected');
const back = document.getElementById('back');
const img = document.getElementById('img');
const imgW = document.getElementById('imgW');
const nombre = document.getElementById('name');
const nombreW = document.getElementById('nameW');
const pais = document.getElementById('coun');
const raza = document.getElementById('race');
const skillPrincipal = document.getElementById('skill1');
const skillSecundaria = document.getElementById('skill2');

// seleccion de personaje
function menu(e) {
  containerCard.classList.add('active');
  selectedCard.classList.add('active');
  nombre.innerText = `${" " + card[e].gen.man.name}`;
  nombreW.innerText = `${" " + card[e].gen.woman.name}`;
  nombreW.style.display = 'none';
  img.src = card[e].gen.man.img;
  imgW.src = card[e].gen.woman.img;
  imgW.style.display = 'none';
  pais.innerText = `${" " + card[e].coun}`;
  raza.innerText = `${" " + card[e].race}`;
  skillPrincipal.innerText = `${" " + card[e].skill1}`;
  skillSecundaria.innerText = `${" " + card[e].skill2}`;
}

// regresar a menu principal
back.addEventListener('click', () => {
  containerCard.classList.remove('active');
  selectedCard.classList.remove('active');
  selectedGen('man');
})

// cambiar genero del personaje
function selectedGen(x) {
  if(x === 'woman'){
    console.log(x);
    nombre.style.display = 'none';
    img.style.display = 'none';
    nombreW.style.display = 'inline';
    imgW.style.display = 'inline';
  }else{
    console.log(x);
    nombre.style.display = 'inline';
    img.style.display = 'inline';
    nombreW.style.display = 'none';
    imgW.style.display = 'none';
  }
}
