import { $ } from '@wdio/globals'; 
import Base from './returnLink.js';

class homePage extends Base {
   
    get homeLogo() {
        return $('//img[@class="thd-logo"]');
    }
     
     async mainMenu() {
       await this.homeLogo.click();
   }
    
 async defaultURL() {
    await browser.url('https://www.homedepot.com');
    }
};

export default new homePage();