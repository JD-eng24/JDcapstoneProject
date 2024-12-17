import { $ } from '@wdio/globals'

export default class Base {

    async defaultURL(){
        await $.url('https://www.homedepot.com/')
    }
};
