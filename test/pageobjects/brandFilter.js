import { $ } from '@wdio/globals';
import Base from './returnLink.js';
import { expect } from '@wdio/globals';

class brandPage extends Base {
    get filtersButton() {
        return $(`//button[@class="view-all-button"]`);
    }

    get dropDown() {
        return $('//h2[@class="dimension__label" and @data-group="Brand"]');
    }

    get checkBox() {
        return $('//a[@href="/b/LG/N-5yc1vZ8qk/Ntk-elasticplus/Ntt-Fridge?NCNI-5"]');
    }

    get searchFilter() {
        return $('//input[@type="text" and @placeholder="Search" and contains(@class, "dimension__filter dimension__filter--align dimension__filter--margin-small")]');
    }

    get viewResults() {
        return $('//button[@class="drawer__fixed-width-button bttn bttn--primary"]');
    }

    async viewFilters(branding) {
        await this.filtersButton.waitForDisplayed();
        await this.filtersButton.click();

        await this.dropDown.waitForClickable({ timeout: 3000 });
        await this.dropDown.click();


        await this.checkBox.waitForClickable();
        await this.checkBox.click();

        await this.searchFilter.setValue(branding);
        const searchFilterElement = await this.searchFilter;  
        await expect(searchFilterElement).toBeDisplayed();

        await this.viewResults.waitForClickable({ timeout: 5000 });
        await this.viewResults.click();
    }
};

export default new brandPage();