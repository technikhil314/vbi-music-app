module.exports = {
  "**/*.js": (filenames) => {
    let concatedFileNames = filenames
      .map((filename) => `"${filename}"`)
      .join(" ");
    return [
      `prettier --write ${concatedFileNames}`,
      `eslint --fix ${concatedFileNames}`,
    ];
  },
};
