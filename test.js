'use strict';

const should = require('chai').should(),
      moment = require('moment');
const feriados = require('./index');

describe('Tests based on 2018', function() {
    it('Should tell whether a given date is a business day', function() {
        feriados.isBusiness(new Date(2018, 2, 28)).should.equal(true);
        feriados.isBusiness(new Date(2018, 2, 29)).should.equal(false);
        feriados.isBusiness(new Date(2018, 2, 30)).should.equal(false);
        feriados.isBusiness(new Date(2018, 2, 31)).should.equal(false);
        feriados.isBusiness(new Date(2018, 3, 1)).should.equal(false);
        feriados.isBusiness(new Date(2018, 3, 2)).should.equal(false);
        feriados.isBusiness(new Date(2018, 3, 3)).should.equal(true);
    });

    it('Given a date should return the next business day', function() {
        moment(feriados.getNextBusiness(new Date(2018, 2, 28)))
            .isSame('2018-03-28', 'day')
            .should.equal(true);
        moment(feriados.getNextBusiness(new Date(2018, 2, 29)))
            .isSame('2018-04-03', 'day')
            .should.equal(true);
        moment(feriados.getNextBusiness(new Date(2018, 2, 30)))
            .isSame('2018-04-03', 'day')
            .should.equal(true);
        moment(feriados.getNextBusiness(new Date(2018, 2, 31)))
            .isSame('2018-04-03', 'day')
            .should.equal(true);
        moment(feriados.getNextBusiness(new Date(2018, 3, 1)))
            .isSame('2018-04-03', 'day')
            .should.equal(true);
        moment(feriados.getNextBusiness(moment('2018-04-02')))
            .isSame('2018-04-03', 'day')
            .should.equal(true);
        moment(feriados.getNextBusiness(new Date(2018, 3, 3)))
            .isSame('2018-04-03', 'day')
            .should.equal(true);
    });
});
