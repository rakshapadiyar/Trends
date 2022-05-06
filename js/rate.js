fetch("https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PL,/USD", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "live-metal-prices.p.rapidapi.com",
		"x-rapidapi-key": "65e095030dmshd395fba227ce82dp1d24a2jsn43261da5aba5"
	}
})

.then(response => response.json())
.then(response => {
	console.log(response);
	console.log(response.rates);
	
	document.getElementById('gold').innerHTML = response.rates.XAU;
	document.getElementById('silver').innerHTML = response.rates.XAG;
	document.getElementById('platinum').innerHTML = response.rates.PL;
})
.catch(err => {
	console.error(err);
});