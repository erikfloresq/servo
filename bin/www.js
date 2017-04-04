#!/usr/bin/env node

/**
 * Module dependencies.
 */
import http from 'http';
import app from '../app';
import { normalizePort, onError, onListening } from '../functions/www';

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
