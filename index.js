let pla = document.getElementById('placar');
let plae = 1;
Number(plae.value)
let ba = new Audio('baa.ogg');
let con = document.getElementById('conjunto');

let monika = {
	name: 'Monika',
	espera: false,
	message: document.createElement('p'),
	sprite: document.getElementById('sprite'),
	add(){
		monika.sprite.classList.remove('plube2');
		if(this.espera == false){
			pla.innerHTML = `${plae++}x`;
			pla.classList.add('ayaluz');
			this.espera = true;
			ba.play();
			monika.message.setAttribute('id', 'granba');
			con.appendChild(monika.message);
			monika.sprite.classList.add('plube');
			monika.message.innerHTML = '<strong>Baa!!</strong>';
			monika.sprite.src = 'monika_1.png';
			setTimeout(reabilitar,1*1000);
		}
	}
};

function reabilitar(){
	monika.espera = false;
	monika.sprite.src = 'monika_0.png';
	monika.message.innerHTML = '';
	monika.sprite.classList.remove('plube');
	monika.sprite.classList.add('plube2');
	pla.classList.remove('ayaluz');
}