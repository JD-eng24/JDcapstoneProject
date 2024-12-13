import { $ } from '@wdio/globals';
import Base from './returnLink.js';

class cartPage extends Base {
    
    get cart() {
        return $('//button[contains(text(), "Add to Cart")]');
    }

    get shop() {
        return $('//button[contains(text(), "Save & Keep")]');
    }

    get cartIcon() {
        return $('//a[@data-testid="header-cart-icon"]');
    }    

    get checkout() {
        return $('div[class="sui-grid sui-pt-6 sui-pb-4"]');
    }

    get iFrame() {
        return $('//iframe[@class="thd-drawer_frame thd-drawer_frame__default-screen"]');
    }
    
    async cartTest() {
            await this.cart.waitForDisplayed();
            await this.cart.click();
            await browser.switchFrame(this.iFrame);
            await this.shop.waitForDisplayed({ timeout: 10000 }); 
            await this.shop.waitForEnabled();
            await this.shop.click();
            await browser.switchToParentFrame();
    
            await this.cartIcon.scrollIntoView();
            const isDisplayed = await this.cartIcon.isDisplayed();
            console.info(`Cart icon displayed: ${isDisplayed}`);
        
            const isClickable = await this.cartIcon.isClickable();
            console.info(`Cart icon clickable: ${isClickable}`);
        
            if (!isClickable) {
                console.info("Trying to force click the cart icon.");
                await browser.execute((cartSelector) => {
                    const cart = document.evaluate(cartSelector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    if (cart) cart.click();
                }, '//p[contains(text(), "Cart")]');
            } else {
                await this.cartIcon.click();
            }
            
            await this.checkout.waitForDisplayed({ timeout: 5000 });
            await this.checkout.click();
        }
    }

        export default new cartPage();