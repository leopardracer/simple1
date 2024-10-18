const btcPrice = document.getElementById('btc-price');
const ethPrice = document.getElementById('eth-price');
const basePrice = document.getElementById('base-price');
const statusMessage = document.getElementById('status');

async function fetchPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,base&vs_currencies=usd');
        const data = await response.json();
        
        btcPrice.textContent = $${data.bitcoin.usd};
        ethPrice.textContent = $${data.ethereum.usd};
        basePrice.textContent = $${data.base.usd};
        statusMessage.textContent = 'Prices updated successfully!';
    } catch (error) {
        statusMessage.textContent = 'Failed to fetch prices. Try again later.';
        console.error('Error fetching prices:', error);
    }
}

// Fetch prices every 30 seconds
fetchPrices();
setInterval(fetchPrices, 30000);
