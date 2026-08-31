'use strict';
// API del homebanking: saldos, movimientos y transferencias
const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true, servicio: 'homebanking-api' }));

module.exports = app;
if (require.main === module) app.listen(process.env.PORT || 8080);
