import { $ } from '@wdio/globals';
import Base from './returnLink.js';

class cartPage extends Base {
    
    get addTocart() {
        return $('//button[contains(text(), "Add to Cart")]');
    }

    get saveAndcontinue() {
        return $('//button[contains(text(), "Save & Keep")]');
    }

    get cartIcon() {
        return $('//a[@data-testid="header-cart-icon"]');
    }

    get checkout() {
        return $('//button[@data-automation-id="checkoutButton"]');
    }

    get iFrame() {
        return $('//iframe[@class="thd-drawer_frame thd-drawer_frame__default-screen"]');
    }

    async cartTest() {
    
            await this.addTocart.waitForDisplayed({ timeout: 30000 });
            await this.addTocart.click();
            await browser.switchFrame(this.iFrame);

            await this.saveAndcontinue.waitForDisplayed({ timeout: 10000 });
            await this.saveAndcontinue.waitForEnabled();
            await this.saveAndcontinue.click();

            await browser.switchToParentFrame();

            if (cartPage) {
                await this.cartIcon.waitForDisplayed({ timeout: 5000});
                await this.cartIcon.waitForClickable({ timeout: 10000 });
                await this.cartIcon.click();
            if (cartPage) {
                await this.checkout.click();
            } else {
                console.error('Checkout button was not clickable.');
            }
         
            console.error('An error occurred during the cart test:', error);
        };
    }
}

export default new cartPage();
