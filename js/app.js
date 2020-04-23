const correctAnswers = ['A', 'A', 'A', 'A','A','A','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const heading = document.querySelector('.container');
let output = 0;

const alertUser = () => {
    const popup = document.querySelector('.popup-wrapper');
    const close = document.querySelector('.popup-close');
    popup.style.display = 'block';

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if(e.target.className === 'popup-wrapper'){
            popup.style.display = 'none';
        }
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let index = 0;
    if(form.age.value === 'A' || form.age.value === 'C'){
        score += 30;
    } 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value];
    flag = true;
    userAnswers.forEach(answer => {
        if(answer == ''){
            flag = false;
        }
    })
    if(flag){
        userAnswers.forEach(answer => {
            if (answer === correctAnswers[index]){
            score += 10;
            index++;
            }
        });

        heading.classList.add('d-none');
        result.classList.remove('d-none'); 
        const error = document.querySelector('.error');
        if(error !== null){
            error.classList.add('d-none');
        }
        scrollTo(0,0);
        const timer = setInterval(() => {
            if(output === score){
                result.querySelector('span').textContent = `${output}%`;
                clearInterval(timer);
            }
            else{
                result.querySelector('span').textContent = `${output}%`;
                output++;
            }
        },30)
        setTimeout(() => {
            if(form.q3.value === 'A' && form.q6.value === 'A'){
                alertUser();
            }
            else if(form.q4.value === 'A' && form.q6.value === 'A'){
                alertUser();
            }
            else if(form.q3.value === 'A' && form.q4.value === 'A'){
                alertUser();
            }
        },3000)
    }
    else{
        const button = document.getElementById('button');
        button.innerHTML += '<br><p class="error text-danger font-weight-bold font-italic">please answer all questions</p>';
    }
    


});