const puppeteer = require('puppeteer');
const constants = require('../constants');

function PageController() {

}

//
// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     await page.screenshot({path: 'example.png'});
//
//     await browser.close();
// })();

PageController.prototype.login = async function(accountId, iamUserName, password) {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(constants.AWS_CONSOLE_LOGIN_URL);

    await page.waitForSelector('#resolving_input');
    await page.focus('#resolving_input');
    page.keyboard.type('China');

    await page.screenshot({path: 'example.png'});

    await browser.close();

};

module.exports = new PageController();
