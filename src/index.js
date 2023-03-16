const { spawn } = require('child_process');
const characters = require('./characters');

const execCommand = (command, args) =>
  new Promise((resove, reject) => {
    let output = '';

    const subProcess = spawn(command, args);

    subProcess.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    subProcess.on('exit', function (code) {
      if (code === 0) {
        resove(output);
      } else {
        reject(new Error(`exited code ${code}`));
      }
    });

    subProcess.on('error', function (err) {
      reject(err);
    });
  });

const slimFont = async () => {
  try {
    const INPUT_FONT = 'SourceHanSansSC-Medium.ttf';
    await execCommand('java', [
      '-jar',
      'sfnttool.jar',
      '-s',
      characters,
      INPUT_FONT,
      'output.ttf',
    ]);
  } catch (error) {
    console.log('error', error);
  }
};

slimFont();
