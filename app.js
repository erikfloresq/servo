import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import index from './routes/index';
import graphql from './routes/graphql';
import pushNotification from './routes/pushNotification';
import fcm from './routes/fcm';
import { notFound, errorHandler } from './functions/app';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/graphql', graphql);
app.use('/pushNotification', pushNotification);
app.use('/fcm', fcm);

// catch 404
app.use(notFound);

// forward to error handler
app.use(errorHandler);

export default app;
