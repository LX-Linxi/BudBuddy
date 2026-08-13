const baby = {
    id: "baby_001",
    nickname: "小芽",
    birthday: "2025-11-28",
    avatar: "",
    gender: ""
  }
  
  function getBaby() {
    return baby
  }
  
  function calculateAge(birthday) {
    const birthDate = new Date(birthday)
    const today = new Date()
  
    let months =
      (today.getFullYear() - birthDate.getFullYear()) * 12 +
      (today.getMonth() - birthDate.getMonth())
  
    let days = today.getDate() - birthDate.getDate()
  
    if (days < 0) {
      months = months - 1
  
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      )
  
      days = previousMonth.getDate() + days
    }
  
    if (months < 0) {
      months = 0
      days = 0
    }
  
    const birthTime = new Date(
      birthDate.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    ).getTime()
  
    const todayTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    ).getTime()
  
    const growthDays = Math.floor(
      (todayTime - birthTime) /
      (1000 * 60 * 60 * 24)
    )
  
    return {
      months: months,
      days: days,
      growthDays: growthDays
    }
  }
  
  function getBabyAge() {
    return calculateAge(baby.birthday)
  }
  
  module.exports = {
    getBaby: getBaby,
    calculateAge: calculateAge,
    getBabyAge: getBabyAge
  }