import assert from 'assert'
import { code } from '../code.js'

// describe('code', function () {
//   it('should return hi for hi user', () => {
//     assert(code('hi'))
//   })

  it('should return err for no user', () => {
    assert(!code())
  })
})
