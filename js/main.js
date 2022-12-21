// const city = document.getElementById("myCity")
// city.addEventListener('change', function handleChange(event) {
//     const cityVal = event.target.value;
//     console.log(cityVal);
// })
$(document).ready(function () {
    $('.submit button').click(function (e) {
        e.preventDefault();
        const countryCode = $('#basic-addon3').text();
        const phone = $('#basic-url').val();
        const number = countryCode + phone
        const gender = $("input[type='radio'][name='gender']:checked").val();
        console.log(number, gender);
    });



})


