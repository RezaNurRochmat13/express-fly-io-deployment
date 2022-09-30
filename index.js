const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000

app.get("/", (request, response) => {
    response.json({message: "Service up"});
});

app.listen(PORT, () => {
    console.info(`Server running at ${PORT}`);
});