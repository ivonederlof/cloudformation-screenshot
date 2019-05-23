

const pageController = require("../lib/page.controller");
const constants = require("../constants");
const assert = require('assert');
const expect = require('chai').expect;

require('dotenv').config();


describe('Login to aws', function () {
    
    
    it('should check the env parameters', function () {
        expect(process.env.ACCOUNT_ID).to.be.a("string");
        expect(process.env.USER_NAME).to.be.a("string");
        expect(process.env.PASSWORD).to.be.a("string");
        console.log(process.env.ACCOUNT_ID)
    });

    it('should login to aws with the given parameters', async function () {

        await pageController.login(
            process.env.ACCOUNT_ID,
            process.env.USER_NAME,
            process.env.PASSWORD
        );

        process.env.ACCOUNT_ID.should.be.a("string");

    });
});
