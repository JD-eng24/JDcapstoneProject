import { browser } from '@wdio/globals'

export default class Base {

    async defaultURL(){
        await browser.url('https://www.homedepot.com/')
    }
}
