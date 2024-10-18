const btcPrice = document.getElementById('btc-price');
const ethPrice = document.getElementById('eth-price');
const solPrice = document.getElementById('sol-price'); // Залишаємо цю змінну
const statusMessage = document.getElementById('status');

async function fetchPrices() {
    try {
        // Використовуємо правильний URL для запиту до API
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd');
        const data = await response.json();
        
        // Перевіримо, чи дані правильно отримані
        console.log(data); // Додамо виведення для дебагу

        // Оновлюємо ціни
        btcPrice.textContent = $${data.bitcoin.usd};
        ethPrice.textContent = $${data.ethereum.usd};
        solPrice.textContent = $${data.solana.usd}; // Відображаємо ціну Solana
        statusMessage.textContent = 'Prices updated successfully!';
    } catch (error) {
        statusMessage.textContent = 'Failed to fetch prices. Try again later.';
        console.error('Error fetching prices:', error);
    }
}

// Fetch prices every 30 seconds
fetchPrices();
setInterval(fetchPrices, 30000);
