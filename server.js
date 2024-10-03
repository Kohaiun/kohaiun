const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Example route to fetch data from Roblox API via proxy
app.get('/api/roblox/:assetId', async (req, res) => {
    const assetId = req.params.assetId;
    try {
        const response = await axios.get(`https://economy.roblox.com/v1/assets/${assetId}/resale-data`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});