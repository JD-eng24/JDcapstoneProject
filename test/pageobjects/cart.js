import { $ } from '@wdio/globals';
import Base from './returnLink.js';

class cartPage extends Base {
    
    get addTocart() {
        return $('//button[contains(text(), "Add to Cart")]')
    }

    get saveAndcontinue() {
        return $('//button[contains(text(), "Save & Keep")]')
    }

    get cartIcon() {
        return $('//div[@class="sui-mr-3 sui-ml-1px sui-w-6 xl:sui-w-11 sui-flex sui-justify-center"]')
    }

    get checkout() {
        return $('//button[@data-automation-id="checkoutButton"]')
    }
    get iFrame () {
        return $('//iframe[@class="thd-drawer_frame thd-drawer_frame__default-screen"]')
    }

    async cartTest() {
        await this.addTocart.waitForDisplayed();
        await this.addTocart.click();
        await browser.switchFrame(this.iFrame);
        await this.saveAndcontinue.waitForDisplayed({ timeout: 10000 }); 
        await this.saveAndcontinue.waitForEnabled();
        await this.saveAndcontinue.click();
        await browser.switchToParentFrame();
        await this.cartIcon.waitForClickable({ timeout: 5000 });
        await this.cartIcon.click(); 
        await this.checkout.click();

        await this.homeDepoticon.click();
    }
}

export default new cartPage()