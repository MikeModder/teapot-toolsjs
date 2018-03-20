/**
 Teapot Tools Module.
 * @module teapot-toolsjs
 */

'use strict';
const {Builder, By, until} = require('selenium-webdriver');

/** TeapotTools Module */
class TeapotTools {
    /** 
     * Create a new instance of TeapotTools.
     * @param {String} browser What browser to use. (chrome, firefox, internet explorer, opera).
    */
    constructor(browser){
        const browsers = [
            'chrome',
            'firefox',
            'internet explorer',
            'opera'
        ];
        if(browsers.filter(b => b===browser).length <= 0) throw new Error(`Browser option must be one of: 'chrome', 'firefox', 'internet explorer', or 'opera'!`);
        this.driver = new Builder().forBrowser(browser).build();
        this.browser = browser;
        this.driver.get('https://google.com/teapot');
        this.driver.wait(until.titleIs(`Error 418 (I’m a teapot)!?`));
        this.driver.wait(until.elementLocated({ id: 'teabot' }));
        this.teapot = this.driver.findElement({ id: 'teabot' });
    }

    /** 
    * Rotate the teapot.
    * @param {Number} degrees How many degrees to rotate the teapot.
    * @returns {Promise} any
    */
    rotate(degrees){
        return this.driver.executeScript(`arguments[0].setAttribute('style', 'transform: rotate(${degrees}deg);')`, this.teapot);
    }

    /**
    * Pour the tea from the teapot.
    * @returns {Promise} any
    */
    pour(){
        return this.driver.executeScript(`arguments[0].setAttribute('class', 'tip pour')`, this.teapot);
    }
    
    /**
    * Stop pouring the tea.
    * @returns {Promise} any
    */
    unpour(){
        return this.driver.executeScript(`arguments[0].setAttribute('class', '')`, this.teapot);
    }

    /**
     * Reset the teapot.
     */
    reset(){
        this.driver.executeScript(`arguments[0].setAttribute('style', 'transform: rotate(0deg);')`, this.teapot);
        this.driver.executeScript(`arguments[0].setAttribute('class', '')`, this.teapot);
    }

    /**
     * Closes the active browser.
     * @returns {Promise} any
     */
    close(){
        return this.driver.close();
    }
}

module.exports = TeapotTools;