
function calculate() {
    let day = parseInt(document.querySelector('.day').value);
    let month = parseInt(document.querySelector('.month').value);
    let year = parseInt(document.querySelector('.year').value);
    let yearEl = document.querySelector('.year');
    let dayEl = document.querySelector('.day');
    let monthEl = document.querySelector('.month');


    if(day > 31) {
        dayEl.classList.add('error');
    } else {
        dayEl.classList.remove('error');
    }

    if(month > 12) {
        monthEl.classList.add('error');
    } else {
        monthEl.classList.remove('error');
    }

    if(year > 2023 || year < 1900) {
        yearEl.classList.add('error');
    } else {
        yearEl.classList.remove('error');
    }
    
    if(day <= 31 && month <= 12 && year <= 2023) {
        display(year, month, day);
    }
   
}

function display(year, month, day) {
    let d = document.querySelector('.d');
    let m = document.querySelector('.m');
    let y = document.querySelector('.y');
   
    let date = new Date();
    let presentYear = date.getFullYear()
    let presentDay = date.getDate()
    let presentMonth = date.getMonth() + 1;

    let resultYear = presentYear - year;
    let resultMonth = presentMonth - month;
    let resultDay = presentDay - day;
    if(presentMonth <= month ) {
        resultYear--;
        resultMonth = resultMonth == 0 ? 0 : 12 + resultMonth;
        
    }

    if(presentDay < day) {
        resultDay = 31 + resultDay;
    }

    if(resultDay == 0) {
        resultMonth++;
    } 
   
    y.innerText = resultYear;
    m.innerText = resultMonth ;
    d.innerText = resultDay;
}