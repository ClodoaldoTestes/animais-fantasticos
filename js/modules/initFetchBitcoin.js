function initFetchBitcoin(){
	fetch('https://www.blockchain.com/ticker')
		.then(response => response.json())
		.then(bitcoin => {
			const bitcoinPreco = document.querySelector('.bitcoin-preco');
			bitcoinPreco.textContent = (1000 / bitcoin.BRL.sell).toFixed(4);
		})
		.catch(err => {
			console.log(`Erro encontrado ${err}`);
		});
}	


export default initFetchBitcoin;