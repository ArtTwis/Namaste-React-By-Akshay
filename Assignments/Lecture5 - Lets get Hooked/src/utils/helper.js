const modifyArrayWithSlash = (arr) => {
  return arr.join(" / ");
};

export const makeFirstCharacterUppercase = (str) => {
  let result = str.map((word) => {
    return word[0].toUpperCase() + word.substr(1);
  });

  result = modifyArrayWithSlash(result);
  return result;
};
