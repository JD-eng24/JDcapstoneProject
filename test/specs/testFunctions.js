import homeDepotPage from '../pageobjects/searchBar.js';
import brandPage from '../pageobjects/brandFilter.js';
import cartPage from '../pageobjects/cart.js';
import homePage from '../pageobjects/homeIcon.js';

describe('Home Depot search bar testing', () => {

    it('should perform a product search', async () => {
        await homeDepotPage.defaultURL(); 
        await homeDepotPage.productSearch('Fridge'); 
    });
});

describe('Brand filters testing', () => {
    
    it('should fully test the brand filters section', async () => {
        await brandPage.viewFilters('g');
    });
});

describe('Cart testing', () => {

    it('should fully test the cart buttons', async () => {
        await cartPage.cartTest();
    })
});

describe('Home button testing', () => {

    it('should only have one click to the homepage', async () => {
        await homePage.mainMenu();
    })
});
