import * as helpers from './index'

const MockCategoryArray = [

]
describe('generateUID', () => {
    test('should return two unique IDs', () => {
        const Id1 = helpers.generateUID()
        const Id2 = helpers.generateUID()

        expect(Id1).not.toEqual(Id2)
    })
})