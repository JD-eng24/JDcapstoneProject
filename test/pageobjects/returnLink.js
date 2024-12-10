import { browser } from '@wdio/globals'

export default class Base {

    async defaultURL(){
        await browser.pause(5000)
        await browser.url('https://www.homedepot.com/')
        await browser.pause(3000)
    }
}
