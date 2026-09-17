// Replace your current slider script with this file.

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



function monthlyEstimateUpdate()
{
     const lblestimate = document.getElementById('lblMonthlyEstimate');
     const loanamontslider = document.getElementById('loanrange');
     const loanperiodslider = document.getElementById('yearrange');
//TO DO interest rates  calculation 
const interesRate=5;//5%
//TO DO calculate interest rate
}