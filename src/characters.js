const chineseChars = require('./chinese-chars');

const BASE_CHARS = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_\abcdefghijklmnopqrstuvwxyz{|}~¥®·—…、。《》「」【】〔〕〜`;
const PUNCTUATION = `（），｜≤≥！：；？‘’“”`;

module.exports = `/.notdef\u0001` + BASE_CHARS + PUNCTUATION + chineseChars;
