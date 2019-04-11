$(document).ready(function () {

	$.ajax({
		url: "http://10.0.0.98:3000/countries/argentina", success: function (data) {
			$('.country-title').append(data.country_name);
			for (i=0; i< `${data.images}`.length; i++) {
				$('.images-container').html(`
				<img class="country-image" src="${data.images[i]}" alt=""></img>
				`)
			};
			$('.country-info-text-languaje').html(`${data.national_language}`);
			$('.country-info-text-currency').html(`${data.national_currency}`);
			$('.country-info-text-population').html(`${data.national_population}`);
			$('.country-info-text-time').html(`${data.national_time}`);
		}
	});





});

