import { expect } from 'chai'
import { addOne } from './'

describe('gotta test em all', () => {
  describe('#addOne', () => {
    it('should add 1 to the input', () => {
      expect(addOne(1)).to.equal(2)
      expect(addOne(-1)).to.equal(0)
      expect(addOne(1.4)).to.equal(2.4)
    })
  })
})
