const randomStr = length => {
  let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  ALPHABET += "abcdefghijklmnopqrstuvwxyz";
  ALPHABET += "0123456789-_";
  let str = "";
  for (let i = 0; i < length; i += 1) {
    const rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.substring(rand, rand + 1);
  }
  return str;
};

const hashCode = str => {
  const len = 32;
  // 生成1-32的序列数字
  const rule = Array.from(new Array(len)).map((item, index) => index + 1);
  // 先获取前str的前32位
  const result = [...str].slice(0, 32);
  // 取时间戳的位置按照规则插入数组
  rule.forEach((item, index) => {
    if (
      index % 2 === 0 &&
      index / 2 + 1 < new Date().getTime().toString().length
    ) {
      result[index] = str[str.length - (index / 2 + 1)];
    }
  });
  return result.join("");
};

export default () => {
  const str = randomStr(32).replace(/-|_/g, "") + new Date().getTime();
  return hashCode(str);
};
