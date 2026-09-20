

const euro = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0          // remove this line if you want cents
});

function setupSlider(sliderId, outputId, format) {
    const slider = document.getElementById(sliderId);
    const output = document.getElementById(outputId);
    const wrap = slider.parentElement;   // the .slider-wrap div

    function update() {
        const min = +slider.min || 0;
        const max = +slider.max || 100;
        // --ratio lives on the wrapper because the track and icon are its pseudo-elements
        wrap.style.setProperty('--ratio', (slider.value - min) / (max - min));
        output.textContent = format(slider.value);

    }

    slider.addEventListener('input', update);
    update();                            // set the initial fill and text on page load
}

function init() {
    setupSlider('loanrange', 'selectedVal', v => euro.format(v));
    setupSlider('yearrange', 'selectedYearVal', v => v + (v == 1 ? ' year' : ' years'));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
}
else {
    init();
}


function interestRateCalculator(year, amount) {
    var finalInterestRate = 0;
    finalInterestRate = year * 1.02;

    if (amount > 400000) // adds more due to amounth
    {
        finalInterestRate += 1.2;
    }
    return finalInterestRate;


}
function setLbl(elementId, val) {
    var targetElement = document.getElementById(elementId);
    targetElement.innerHTML = euro.format(val);
}



function monthlyEstimateUpdate() {
    const lblestimate = document.getElementById('lblMonthlyEstimate');
    const loanamontslider = document.getElementById('loanrange');
    const loanperiodslider = document.getElementById('yearrange');
    setLbl('lblamount', loanamontslider.value);
    var amount = loanamontslider.value;
    var interesRate = interestRateCalculator(loanperiodslider.value, loanamontslider.value);//5%
    document.getElementById('lblinterestrate').innerHTML = interesRate.toFixed(2) + " %";
    const n = loanperiodslider.value * 12;
    const r = interesRate / 100 / 12; // get monthly interest rate.
    const monthly = r === 0
        ? amount / n
        : amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;

    setLbl('lbltotalinterest', (total - amount));
    setLbl('lbltotalpayment', total);
    setLbl('lblmonthlypayment', monthly);
    setLbl('lblMonthlyEstimate', monthly);
    document.getElementById('payment-details').style.display='block';


    // formula from https://en.wikipedia.org/wiki/Amortizing_loan
    //M = P × r × (1 + r)^n / ((1 + r)^n − 1)

}


