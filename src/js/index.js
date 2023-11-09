const chipsData = [
    {text: 'Генетика'},
    {text: 'Анатомия человека'},
    {text: 'Вулканы'},
    {text: 'Зимние виды спорта'},
    {text: 'Радуга'},
    {text: 'Индийская культура'},
    {text: 'Пеший туризм'},
    {text: 'Философия'},
    {text: 'Вселенная'},
    {text: 'Здоровые привычки'},
    {text: 'Бабочки'},
    {text: 'Белые медведи'},
    {text: 'Экономика'},
    {text: 'Финансовая грамотность'},
    {text: 'Фотосинтез'},
]

const chipsContainer = document.getElementById('chips-container');
const showMoreButton = document.getElementById('show-more-switch');

for (let data of chipsData) {
    const chips = document.createElement('div');
    chips.className = 'chips';
    chips.textContent = data.text;
    chipsContainer.appendChild(chips);
}

showMoreButton.addEventListener('click', (e) => {
    if (!chipsContainer.className.includes('active')) {
        chipsContainer.classList.add('active');
    } else {
        chipsContainer.classList.remove('active');
    }
});
  

function validateTextarea() {
    const textareaBorder = document.getElementById('textarea-border');
    const label = document.querySelector('.textarea-label');
    const textarea = document.getElementById('textarea');
    const errorMessage = document.getElementById('error-message');
    const characters = document.getElementById('characters');
    const nextButton = document.querySelector('.form__button_next');
    
    const limit = 200;

    characters.textContent = 0 + ' / ' + limit;

    textarea.addEventListener('input', () => {
        
        const textLength = textarea.value.length;
        characters.textContent = textLength + ' / ' + limit;
        nextButton.classList.remove('active');

        if (textLength > limit) {
            label.style.color = '#FF395D';
            textareaBorder.style.borderColor = '#FF395D';
            characters.style.color = '#FF395D';
            errorMessage.style.visibility = 'visible';
        } else {
            label.style.color = '#343434';
            textareaBorder.style.borderColor = '#EAEAEA';
            characters.style.color = '#343434';
            errorMessage.style.visibility = 'hidden';
        }

        if (textLength !== 0 && textLength <= limit) {
            nextButton.classList.add('active');
        } 
    })
}

validateTextarea()