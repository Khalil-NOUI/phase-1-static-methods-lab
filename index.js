class Formatter {

  static capitalize (toCap) {
    return (toCap[0].toUpperCase() + toCap.slice(1))
  }

  static sanitize(toSan) {
    return (toSan.replace(/[^A-Za-z0-9-' ]+/g, ''))
  }

  static titleize(toTit) {

    const words = toTit.split(" ")
    console.log(words)
   
    let wrdArr = [];
    wrdArr.push(words[0].charAt(0).toUpperCase() + words[0].slice(1))
   
    for (let i=1; i <= words.length - 1; i++) {
      
      const unWanted = ["a", "an", "but", "the", "of", "and", "for", "at", "by", "from"];
      
      if (!unWanted.includes(words[i])) {
        wrdArr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
      } else {
        wrdArr.push(words[i])
      }
  }

  let result = wrdArr.join(" ")
  return result
  }

}
