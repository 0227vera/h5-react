exports.notEmpty = name => {
  return v => {
    if (!v || v.trim === "") {
      return `${name} is required`;
    }
    return true;
  };
};
