
const checkSpam = (str) => {
    let lString = str.toLowerCase();
    return lString.includes('viagra') || lString.includes('xxx');
  }

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
