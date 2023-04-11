const chineseChars = require('./chinese-chars-full');

const BASE_CHARS = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_\abcdefghijklmnopqrstuvwxyz{|}~¥®·—…、。《》「」【】〔〕〜`;
const PUNCTUATION = `（），｜≤≥！：；？‘’“”`;
//字符 ≤ 和 ≥ 无法显，通过glyph手动添加
module.exports = `/.notdef\u0001` + BASE_CHARS + PUNCTUATION + chineseChars;
