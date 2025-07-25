const express = require('express');
const bodyParser = require('body-parser');
const promotionsRoutes = require('./routes/promotions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/promotion', promotionsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});