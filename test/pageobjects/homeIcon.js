import { $ } from '@wdio/globals'; 
import Base from './returnLink.js';

class homeDepotHomePage extends Base {
   
     get homeDepoticon() {
        return $('svg[aria-label="The Home Depot Logo"]')
     }
     
     async mainMenu() {
       await this.homeDepoticon.click();
   }
    
 async defaultURL() {
    console.log('Opening URL:', 'https://www.homedepot.com'); 
    await browser.url('https://www.homedepot.com');
    }
};

export default new homeDepotHomePage();