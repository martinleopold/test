import * as fs from 'fs';
import pkg from 'terminal-kit';
import LanguageDetect from 'languagedetect';
var lastValidLanguage = '';

const { terminal, TextTable } = pkg;
const term = pkg.terminal;
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
var currentLanguage;
const lngDetector = new LanguageDetect();


export function detectDataLanguage(data) {
  currentLanguage = lngDetector.detect(data, 1)[0] ? lngDetector.detect(data, 1)[0][0] : '';
  if (currentLanguage !== '') {
    lastValidLanguage = currentLanguage;
  }
  return currentLanguage !== '' ? currentLanguage : lastValidLanguage;
}
export function checkBlacklist(mblacklist, text) {
  let checkBlacklist = false;
  for (let i = 0; i < mblacklist.length; i++) {
    if (text.includes(mblacklist[i])) {
      checkBlacklist = true;
    }
  }
  return checkBlacklist;
}

export function getCurrentDate() {
  let dateObject = new Date();
  return (monthNames[dateObject.getMonth()] + ", " + dateObject.getDate()) + " " + dateObject.getFullYear() + " " + dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds() + ", " + dateObject.getMilliseconds();
}
export function checkCountryCode(countryCode) {
  if (countryCode[1]) {
    if (countryCode[1].includes('%')) {
      countryCode = countryCode[1].split('%')[0];
    } else {
      countryCode = countryCode[1].split('/')[0];
    }
    return true;
  }
}
export function writeToJsonFile(mData, mfile) {
  const file = fs.readFileSync(mfile);
  var json = JSON.parse(file.toString());
  json.push(mData);
  fs.writeFileSync(mfile, JSON.stringify(json));
  // console.log("write to file");
}
export function readJsonFile() {
  const file = fs.readFileSync('names.json');
  var json = JSON.parse(file.toString());
  var mydata = JSON.parse(file.toString());
}

export function writeLatestToTerminal(mydata) {
  const file = fs.readFileSync('names.json');
  var mydata = JSON.parse(file.toString());
  // term.fullscreen(true);
  term.table([
    ['name', 'countrycode', 'date', 'language'],
    [mydata[mydata.length - 1] ? mydata[mydata.length - 1][0].name : '', mydata[mydata.length - 1] ? mydata[mydata.length - 1][0].countrycode : '', mydata[mydata.length - 1] ? mydata[mydata.length - 1][0].date : '', mydata[mydata.length - 1] ? mydata[mydata.length - 1][0].language : ''],// mydata[mydata.length - 5][0].countrycode, mydata[mydata.length - 9][0].date],
    [mydata[mydata.length - 2] ? mydata[mydata.length - 2][0].name : '', mydata[mydata.length - 2] ? mydata[mydata.length - 2][0].countrycode : '', mydata[mydata.length - 2] ? mydata[mydata.length - 2][0].date : '', mydata[mydata.length - 2] ? mydata[mydata.length - 2][0].language : ''],// mydata[mydata.length - 5][0].countrycode, mydata[mydata.length - 9][0].date],
    [mydata[mydata.length - 3] ? mydata[mydata.length - 3][0].name : '', mydata[mydata.length - 3] ? mydata[mydata.length - 3][0].countrycode : '', mydata[mydata.length - 3] ? mydata[mydata.length - 3][0].date : '', mydata[mydata.length - 3] ? mydata[mydata.length - 3][0].language : ''],// mydata[mydata.length - 5][0].countrycode, mydata[mydata.length - 9][0].date],
    [mydata[mydata.length - 4] ? mydata[mydata.length - 4][0].name : '', mydata[mydata.length - 4] ? mydata[mydata.length - 4][0].countrycode : '', mydata[mydata.length - 4] ? mydata[mydata.length - 4][0].date : '', mydata[mydata.length - 4] ? mydata[mydata.length - 4][0].language : ''],// mydata[mydata.length - 5][0].countrycode, mydata[mydata.length - 9][0].date]
    [mydata[mydata.length - 5] ? mydata[mydata.length - 5][0].name : '', mydata[mydata.length - 5] ? mydata[mydata.length - 5][0].countrycode : '', mydata[mydata.length - 5] ? mydata[mydata.length - 5][0].date : '', mydata[mydata.length - 5] ? mydata[mydata.length - 5][0].language : ''],
    [mydata[mydata.length - 6] ? mydata[mydata.length - 6][0].name : '', mydata[mydata.length - 6] ? mydata[mydata.length - 6][0].countrycode : '', mydata[mydata.length - 6] ? mydata[mydata.length - 6][0].date : '', mydata[mydata.length - 6] ? mydata[mydata.length - 6][0].language : ''],
    [mydata[mydata.length - 7] ? mydata[mydata.length - 7][0].name : '', mydata[mydata.length - 7] ? mydata[mydata.length - 7][0].countrycode : '', mydata[mydata.length - 7] ? mydata[mydata.length - 7][0].date : '', mydata[mydata.length - 7] ? mydata[mydata.length - 7][0].language : ''],
    [mydata[mydata.length - 8] ? mydata[mydata.length - 8][0].name : '', mydata[mydata.length - 8] ? mydata[mydata.length - 8][0].countrycode : '', mydata[mydata.length - 8] ? mydata[mydata.length - 8][0].date : '', mydata[mydata.length - 8] ? mydata[mydata.length - 8][0].language : ''],
    [mydata[mydata.length - 9] ? mydata[mydata.length - 9][0].name : '', mydata[mydata.length - 9] ? mydata[mydata.length - 9][0].countrycode : '', mydata[mydata.length - 9] ? mydata[mydata.length - 9][0].date : '', mydata[mydata.length - 9] ? mydata[mydata.length - 9][0].language : ''],
    [mydata[mydata.length - 10] ? mydata[mydata.length - 10][0].name : '', mydata[mydata.length - 10] ? mydata[mydata.length - 10][0].countrycode : '', mydata[mydata.length - 10] ? mydata[mydata.length - 10][0].date : '', mydata[mydata.length - 10] ? mydata[mydata.length - 10][0].language : ''],
    [mydata[mydata.length - 11] ? mydata[mydata.length - 11][0].name : '', mydata[mydata.length - 11] ? mydata[mydata.length - 11][0].countrycode : '', mydata[mydata.length - 11] ? mydata[mydata.length - 11][0].date : '', mydata[mydata.length - 11] ? mydata[mydata.length - 11][0].language : ''],

  ], {
    hasBorder: true,
    fullscreen: true,
    contentHasMarkup: true,
    borderAttr: { color: 'white' },
    textAttr: { bgColor: 'default' },
    firstRowTextAttr: { bgColor: 'yellow' },
    width: 130,

  }
  );
}

export function clearDataBases(databases) {
  for (let i = 0; i < databases.length; i++) {
    databases[i].clear();
  }
}