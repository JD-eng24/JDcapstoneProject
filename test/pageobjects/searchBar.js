import { $ } from '@wdio/globals';
import Base from './returnLink.js';
import { expect } from '@wdio/globals';

class homeDepotPage extends Base {
   
    get searchField() {
        return $('#typeahead-search-field-input');
    }

    get searchButton() {
        return $('#typeahead-search-icon-button');  
    }

    async searchResult(result) {
        return $(`//h1[contains(text(), "${result}")]`);
    }

    async productSearch(product) {
        await this.searchField.waitForDisplayed();
        await this.searchField.setValue(product);
        await this.searchButton.click(); 
        const searchResult = await this.searchResult(product);
        await expect(searchResult).toBeDisplayed(); 
    }
    
    async defaultURL() {
        await browser.url('https://www.homedepot.com');
    }
};

export default new homeDepotPage();