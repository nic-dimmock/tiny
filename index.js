module.exports.tiny = function(string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
  };

module.exports.capital = function(string) {
  return string.toUpperCase();
}