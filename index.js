let pla = document.getElementById('placar');
let plae = 1;
Number(plae.value);
let ba = new Audio('sfx/baa.ogg');
let bra = new Audio('sfx/es.ogg');
let pls = new Audio('sfx/plays.ogg')
let con = document.getElementById('conjunto');

let monika = {
	name: 'Monika',
	espera: false,
	message: document.createElement('p'),
	sprite: document.getElementById('sprite'),
	add(){
		monika.sprite.classList.remove('plube2');
		if(this.espera == false){
			if(plae >= 100){
				this.espera = true;
				pla.innerHTML = `${plae++}x`;
				pla.classList.add('ayaluz2');
				monika.brasil();
			}else{
				if(this.espera == false){
					pla.innerHTML = `${plae++}x`;
					pla.classList.add('ayaluz');
					this.espera = true;
					ba.play();
					monika.message.setAttribute('id', 'granba');
					con.appendChild(monika.message);
					monika.sprite.classList.add('plube');
					monika.message.innerHTML = '<strong>Baa!!</strong>';
					monika.sprite.src = 'images/monika_1.png';
					setTimeout(monika.reabilitar,1*1000);
				}
			}
		}
	}, reabilitar(){
		monika.espera = false;
		monika.sprite.src = 'images/monika_0.png';
		monika.message.innerHTML = '';
		monika.sprite.classList.remove('plube');
		monika.sprite.classList.add('plube2');
		pla.classList.remove('ayaluz');
	}, brasil(){
		bra.play();
		document.body.style.backgroundColor = '#64B058';
		document.getElementById('conjunto').style.backgroundColor = '#40427F';
		document.getElementById('titulo').style.backgroundColor = '#4B963F';
		document.body.style.color = '#DED681';
		document.getElementById('foo').style.color = '#DED681';
		document.getElementById('foo2').style.color = '#DED681';
		monika.sprite.classList.add('plube3');
		monika.sprite.src = 'images/monika_b.jpg';
		document.getElementById('favicon').href = 'images/favicon_1.ico';
		setTimeout(()=>{
			document.getElementById('conjunto').classList.add('sumir2');
			pls.play();
			setTimeout(()=>{
				document.getElementById('conjunto').style.opacity = 0;
			}, 8*1000);
		}, 12*1000);
	}
};