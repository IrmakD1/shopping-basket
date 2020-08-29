import * as factories from './index'

const MockCategoryArray = [

]
describe('generateUID', () => {
    test('should return two unique IDs', () => {
        const Id1 = factories.generateUID()
        const Id2 = factories.generateUID()

        expect(Id1).not.toEqual(Id2)
    })
})