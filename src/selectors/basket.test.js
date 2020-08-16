import * as selectors from './basket';

const MockState = {
  basket: {
    basket: [
        {
            currency: "USD",
            currencyUnit: "$",
            id: "w2befn6n7zrjhio2a716k",
            img: "/static/media/soup.63bfac97.png",
            item: "Soup",
            price: 0.65,
            unit: "tin"
        },
        {
            currency: "USD",
            currencyUnit: "$",
            id: "s1h0clu3yuszrlppzwtdvk",
            img: "/static/media/soup.63bfac97.png",
            item: "Soup",
            price: 0.65,
            unit: "tin"
        },
        {
            currency: "USD",
            currencyUnit: "$",
            id: "qotrddhy0xnhjkxmod9e",
            img: "/static/media/bread.e94db65d.png",
            item: "Bread",
            price: 0.8,
            unit: "loaf"
        },
        {
            currency: "USD",
            currencyUnit: "$",
            id: "99ccmikkpg7rl5gz0sauvh",
            img: "/static/media/bread.e94db65d.png",
            item: "Bread",
            price: 0.8,
            unit: "loaf"
        }
    ],
  },
};

const mockBasket = {
    Soup: [
        {
            currency: "USD",
            currencyUnit: "$",
            id: "w2befn6n7zrjhio2a716k",
            img: "/static/media/soup.63bfac97.png",
            item: "Soup",
            price: 0.65,
            unit: "tin"
        },
        {
            currency: "USD",
            currencyUnit: "$",
            id: "s1h0clu3yuszrlppzwtdvk",
            img: "/static/media/soup.63bfac97.png",
            item: "Soup",
            price: 0.65,
            unit: "tin"
        },
    ],
    Bread: [
        {
            currency: "USD",
            currencyUnit: "$",
            id: "qotrddhy0xnhjkxmod9e",
            img: "/static/media/bread.e94db65d.png",
            item: "Bread",
            price: 0.8,
            unit: "loaf"
        },
        {
            currency: "USD",
            currencyUnit: "$",
            id: "99ccmikkpg7rl5gz0sauvh",
            img: "/static/media/bread.e94db65d.png",
            item: "Bread",
            price: 0.8,
            unit: "loaf"
        }
    ]
}

describe('basket selectors', () => {
  describe('getBasketItems', () => {
    test('it should sort the basket state into a series of ordered arrays', () => {
      expect(selectors.getBasketItems(MockState)).toEqual(mockBasket);
    });
  });
  describe('getBasketTotalItems', () => {
    test('it should return the number of items in the basket state', () => {
      expect(selectors.getBasketTotalItems(MockState)).toEqual(4);
    });
  });
  describe('getBasketItems', () => {
    test('it should return the basket state', () => {
      expect(selectors.getItemsList(MockState)).toEqual(MockState.basket.basket);
    });
  });
});

