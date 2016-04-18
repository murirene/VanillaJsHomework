
'use strict';

var kraken = require('kraken-js'),
    express = require('express'),
    request = require('supertest');


describe('/', function () {
    var app, mock;

    beforeEach(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: process.cwd()
        }));

        mock = app.listen(1337);

    });


    afterEach(function (done) {
        mock.close(done);
    });

    it('should Render the intial page', function (done) {
        request(mock)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .end(function (err, res) {
                done(err);
            });
    });
});