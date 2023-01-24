const sentense = require('./practice2.js');
const os = require('os');
const { writeFile } = require('fs').promises;

const myUsername = os.userInfo().username;
const writeCode = async () => {
  try {
    await writeFile(
      './content/practice.txt',
      `My name is ${myUsername} and ${sentense}`
    );
  } catch (error) {
    console.log(error);
  }
};

writeCode();
