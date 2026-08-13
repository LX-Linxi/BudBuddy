const guides = require('../data/guide/guide')

console.log('guides:', guides)

function getGuideByMonth(month) {
  console.log('search month:', month)

  return guides.find(function (item) {
    console.log('item month:', item.month)
    return item.month === month
  }) || null
}

function getAllGuides() {
  return guides
}

module.exports = {
  getGuideByMonth: getGuideByMonth,
  getAllGuides: getAllGuides
}