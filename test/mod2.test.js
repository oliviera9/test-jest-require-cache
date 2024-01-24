describe('mod2', () => {
    it('should check 1', () => {
        const { g } = require('../src/mod2')
        expect(g(2)).toEqual(12)
    })

    it('should check 2', () => {
        const mod1 = require('../src/mod1')
        jest.spyOn(mod1, 'f').mockImplementation(_n => _n * 4)
        const { g } = require('../src/mod2')
        expect(g(2)).toEqual(24)
    })

    it('should check 3', () => {
        const mod1 = require('../src/mod1')
        jest.spyOn(mod1, 'f').mockImplementation(_n => _n * 5)
        const { g } = require('../src/mod2')
        expect(g(2)).toEqual(30)
    })
})
