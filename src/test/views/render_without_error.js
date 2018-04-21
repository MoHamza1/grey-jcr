var pug = require('pug');
var merge = require('merge');
var prettydate = require('pretty-date');
var path = require('path');

var chai = require("chai");
var expect = chai.expect;


var locals = {
    user: {},
    prettydate: prettydate
};

describe('mcr views', function() {
    it('renders without errors', function(done) {
        function renderView() {
            pug.renderFile(path.join(__dirname, '../../views/mcr/index.pug'), merge(locals, {}));
        }
        expect(renderView).to.not.throw();
        done();
    });
});

describe('facilities views', function() {
    it('renders without errors', function(done) {
        function renderView() {
            pug.renderFile(path.join(__dirname, '../../views/facilities/index.pug'), merge(locals, {}));
        }
        expect(renderView).to.not.throw();
        done();
    });
});

describe('sportsandsocs views', function() {
    xit('renders without errors', function(done) {
        function renderView() {
            pug.renderFile(path.join(__dirname, '../../views/sportsandsocs/index.pug'), merge(locals, {}));
        }
        expect(renderView).to.not.throw();
        done();
    });
});

describe('other views', function() {
    xit('renders without errors', function(done) {
        pug.renderFile(path.join(__dirname, '../../views/promo.pug'), merge(locals, {}));
        pug.renderFile(path.join(__dirname, '../../views/menu.pug'), merge(locals, {}));
        pug.renderFile(path.join(__dirname, '../../views/login.pug'), merge(locals, {}));
        pug.renderFile(path.join(__dirname, '../../views/header.pug'), merge(locals, {}));
        pug.renderFile(path.join(__dirname, '../../views/footer.pug'), merge(locals, {}));
        pug.renderFile(path.join(__dirname, '../../views/error.pug'), merge(locals, {error: {}}));
        pug.renderFile(path.join(__dirname, '../../views/error.pug'), merge(locals, {
            blogs: [],
            events: []
        }));
    });
});
