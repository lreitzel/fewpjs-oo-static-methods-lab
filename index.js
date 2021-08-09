class Formatter {

  static capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize (string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize (string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let answer = []
    let arr = string.split(" ")
    for (let i = 0; i < arr.length; i++) {
      if (i == 0) {
        answer.push(this.capitalize(arr[i]))
      } else {
        if (exceptions.includes(arr[i])) {
          answer.push(arr[i])
        } else {
          answer.push(this.capitalize(arr[i]))
        }
      }
    }
    return answer.join(" ")
  }
}