

let loanSlider = document.getElementById('loanrange');
let paymentYearSlider = document.getElementById('yearrange');

const euro = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',

});

setUpSlider();

function setUpSlider() {

    if (loanSlider == null) {
        console.log("Loan Slider Not Found!!");
        return;
    }
    if (paymentYearSlider == null) {
        console.log("Year Slider Not Found!!");
        return;
    }
    loanSliderUpdate();
    yearSliderUpdate();
    loanSlider.addEventListener('input', loanSliderUpdate);
    paymentYearSlider.addEventListener('input', yearSliderUpdate);

}

function loanSliderUpdate() {
    const min = +loanSlider.min || 0;
    const max = +loanSlider.max || 100;
    var updatedVal = (loanSlider.value - min) / (max - min);
    loanSlider.style.setProperty('--ratio', updatedVal);// dynamic set of --ratio based on update
    document.getElementById('selectedVal').innerHTML = euro.format(loanSlider.value);

}
function yearSliderUpdate() {
    const min = +paymentYearSlider.min || 0;
    const max = +paymentYearSlider.max || 100;
    var updatedVal = (paymentYearSlider.value - min) / (max - min);
    paymentYearSlider.style.setProperty('--ratio', updatedVal);// dynamic set of --ratio based on update
    if(paymentYearSlider.value==1)
    {
    document.getElementById('selectedYearVal').innerHTML =paymentYearSlider.value+" year";    
    }
    else
    {
    document.getElementById('selectedYearVal').innerHTML =paymentYearSlider.value+" years";
    }

}

