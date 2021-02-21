const { logger } = require('./logger');

export function code (user) {
  try {
    if (!user) {
      logger.error('err')
      return false
    }
    if (user === 'hi') {
      logger.error('hi')
      return true
    }
    else {
      return false
    }
  } catch (err) {
      console.log(err)
  }
}
