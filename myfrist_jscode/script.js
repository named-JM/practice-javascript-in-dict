
// const para = document.querySelector('p');

// para.addEventListener('click', updateName);

// function updateName(){
//     const name = prompt('Enter a new name');
//     para.textContent = `Player 1: ${name}`;
// }

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather );

function setWeather(){
    const choice = select.value;

    switch(choice){
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today. Wear Short! Go to the beach, or the park, and get an ice cream/';
            break;
        case 'rainy':
            para.textContent = 'Rain is falling outside; take a rain coat and an umbrealla, and don\'t stay out for too long';
            break;
        case 'snowing':
            para.textContent = 'The snow is coming down - it is freezing! Best to stay in the house with a cup of hot choco, or go build a snowman.';

            break;
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
            break;
        default:
            para.textContent = 'nothing';
            
    }

    // if(choice==='sunny'){
    //     para.textContent = 'It is nice and sunny outside today. Wear Short! Go to the beach, or the park, and get an ice cream/';

    // }else if(choice === 'rainy'){
    //     para.textContent = 'Rain is falling outside; take a rain coat and an umbrealla, and don\'t stay out for too long';

    // }else if(choice === 'snowing'){
    //     para.textContent = 'The snow is coming down - it is freezing! Best to stay in the house with a cup of hot choco, or go build a snowman.';

    // }else if (choice === 'overcast'){
    //     para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';

    // }else {
    //     para.textContent = '';
    // }
}

