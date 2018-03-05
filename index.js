'use strict';
const {Builder, By, until} = require('selenium-webdriver');

let TeapotTools = class TeapotTools {
    constructor(){
        this.driver = new Builder().forBrowser('firefox').build();
        this.driver.get('https://google.com/teapot');
        this.driver.wait(until.titleIs(`Error 418 (I’m a teapot)!?`));
        this.driver.wait(until.elementLocated({ id: 'teabot' }));
        this.teapot = this.driver.findElement({ id: 'teabot' });
    }

    rotate(degrees){
        return this.driver.executeScript(`arguments[0].setAttribute('style', 'transform: rotate(${degrees}deg);')`, this.teapot);
    }

    pour(){
        return this.driver.executeScript(`arguments[0].setAttribute('class', 'tip pour')`, this.teapot);
    }
    
    unpour(){
        return this.driver.executeScript(`arguments[0].setAttribute('class', '')`, this.teapot);
    }
}

module.exports = TeapotTools;