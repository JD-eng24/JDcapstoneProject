import { browser } from '@wdio/globals';
import homeDepotPage from '../pageobjects/searchBar.js';
import homeDepotHomePage from '../pageobjects/homeIcon.js'

describe('Home Depot search bar testing', () => {

    it('should perform a product search', async () => {
        await homeDepotPage.defaultURL(); 
        await homeDepotPage.productSearch('Fridge'); 
    });
});

