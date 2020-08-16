import * as services from '../services'
import axios from 'axios'

jest.mock('axios', () => ({
    get: jest.fn()
}))

const mockBasket = [
    {
        currency:'GBP',
        currencyUnit:'£',
        id:'testId1',
        img:'/static/media/soup.63bfac97.png',
        item:'Soup',
        price:'0.50',
        unit:'tin',
    },
    {
        currency:'GBP',
        currencyUnit:'£',
        id:'testId2',
        img:'/static/media/bread.e94db65d.png',
        item:'Bread',
        price:'0.61',
        unit:'loaf',
    }
]

const MockUpdatedBasket = [
    {
        currency:'USD',
        currencyUnit:'$',
        id:'testId1',
        img:'/static/media/soup.63bfac97.png',
        item:'Soup',
        price:'0.35',
        unit:'tin',
    },
    {
        currency:'USD',
        currencyUnit:'$',
        id:'testId2',
        img:'/static/media/bread.e94db65d.png',
        item:'Bread',
        price:'0.43',
        unit:'loaf',
    }
]

const mockBasketItem = {
    currency:'USD',
    currencyUnit:'$',
    id:'testId',
    img:'/static/media/soup.63bfac97.png',
    item:'Soup',
    price:'0.55',
    unit:'tin',
}
const MockUpdatedBasketItem = {
    currency:'GBP',
    currencyUnit:'£',
    id:'testId',
    img:'/static/media/soup.63bfac97.png',
    item:'Soup',
    price:'0.39',
    unit:'tin',
}

const MockExchangeRate = 0.7

describe('callCurrencyConverter', () => {
    test('should call axios', async () => {
        axios.get.mockImplementation(() => ({
            data: {
                quotes: {
                    USDGBP: 0.7
                }
            }
        }))
        services.callCurrencyConverter('USD', 'EUR')

        expect(axios.get).toBeCalled()
    })
})

describe('convertBasketItems', () => {
    describe('if the basket has items in it and is an Array', () => {
        test('it should return an updated price of the basket Items', () => {

            const results = services.convertBasketItems(mockBasket, MockExchangeRate, 'USD')

            expect(results).toMatchObject(MockUpdatedBasket)
        })
    })

    describe('if it is a new item being added to an already converted basket', () => {
        test('it should return an updated price of the basket Item', () => {

            const results = services.convertBasketItems(mockBasketItem, MockExchangeRate, 'GBP')

            expect(results).toMatchObject(MockUpdatedBasketItem)
        })
    })
})

describe('convertBasket', () => {
    test('should call callCurrecnyConverter', async () => {
        services.convertBasket(mockBasket, 'USD', 'GBP')

        const url = 'http://api.currencylayer.com/live?access_key=677e4889458696246c0e21b77d8e513c&source=USD&currencies=GBP&format=1'
        axios.get.mockImplementation(() => ({
            data: {
                quotes: {
                    USDGBP: 0.7
                }
            }
        }))

        expect(axios.get).toBeCalledWith(url)
    })
})