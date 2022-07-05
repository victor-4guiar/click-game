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
		if(this.espera == false){
			pla.innerHTML = `${plae++}x`;
			this.espera = true;
			ba.play();
			con.appendChild(monika.message);
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
}