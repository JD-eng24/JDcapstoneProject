import { $ } from '@wdio/globals'
import Page from './returnLink.js';

class SecurePage extends Page {
   
    get popAlert () {
        return $('#pop');
    }
}

export default new SecurePage();
