const playButton = document.getElementById('playButton');
const message = document.getElementById('message');
const specialSuprise = document.getElementById('specialMessage');
specialSuprise.style.display = 'none';

let agnisong = new Audio("agnisong.mp3");

function playMusic() {
    agnisong.play();

}

playButton.addEventListener('click', function() {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if(randomNumber >=90){
        message.textContent = 'Happy Birthday Agni!';
        message.classList.add('animate');
        specialSuprise.style.display = 'block';


    }  else {
        message.textContent = 'Error?? Try Again!';
        message.classList.add('animate');
        specialSuprise.style.display = 'none';
    }
    
    console.log(randomNumber);
    
});

specialMessage.addEventListener('click', function() {
    alert('Surprise! You found the AGNI SPECIAL SONG CUZ I COULDNT FIND THE ORGINAL');
    playMusic();
});

message.addEventListener('animationend', function() {
        message.classList.remove('animate');
    });
