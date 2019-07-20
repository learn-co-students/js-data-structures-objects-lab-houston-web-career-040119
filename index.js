// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({},driver,{[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  return Object.assign(driver,{[key]:value})
}

function deleteFromDriverByKey(driver,key){
  let newArray = Object.assign({},driver)
  delete newArray[key]
  return newArray
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}
