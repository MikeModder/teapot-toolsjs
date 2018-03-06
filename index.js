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
    */
    constructor(){
        this.driver = new Builder().forBrowser('firefox').build();
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
}

module.exports = TeapotTools;