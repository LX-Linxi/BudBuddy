const guides = require('../data/guide/guide.js')

/**
 * 根据月龄获取成长指南
 */
function getGuideByMonth(month) {
    const targetMonth = Number(month)
    
    return guides.find(function (guide) {
    return guide.month === targetMonth
  }) || null
}

/**
 * 获取所有可用月龄
 */
function getAvailableMonths() {
  return guides
    .map(function (guide) {
      return guide.month
    })
    .sort(function (a, b) {
      return a - b
    })
}

/**
 * 获取最小月龄
 */
function getMinMonth() {
  const months = getAvailableMonths()

  if (months.length === 0) {
    return 0
  }

  return months[0]
}

/**
 * 获取最大月龄
 */
function getMaxMonth() {
  const months = getAvailableMonths()

  if (months.length === 0) {
    return 0
  }

  return months[months.length - 1]
}

module.exports = {
  getGuideByMonth: getGuideByMonth,
  getAvailableMonths: getAvailableMonths,
  getMinMonth: getMinMonth,
  getMaxMonth: getMaxMonth
}