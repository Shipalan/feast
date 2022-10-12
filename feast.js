function feast(beast, dish) {

    let beastLetters = [beast[0], beast.charAt(beast.length -1)]
    console.log(beastLetters, 'Beast lettter')
  
    let dishLetters = [dish[0], dish.charAt(dish.length -1)]
    console.log(dishLetters, 'dish lettter')
  
  
  if (beastLetters[0] === dishLetters[0]){
    if (beastLetters[1] === dishLetters[1]){
      return true
    } else {
      return false
    }
  } else {
    return false
  }
  
  }
  
  console.log(feast("great blue heron", "garlic naan"))
  console.log(feast("chickadee", "chocolate cake"))
  console.log(feast("brown bear", "bear claw"))