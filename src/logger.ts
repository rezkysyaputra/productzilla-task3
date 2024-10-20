import fs from 'fs/promises';
import path from 'path';

function getFormattedDate() {
  const now = new Date();
  return `${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}_${
    now.getMonth() + 1
  }_${now.getDate()}_${now.getFullYear()}`;
}

async function logMessage(message: string) {
  const logFilePath = path.join(
    __dirname,
    '..',
    'logs',
    `${getFormattedDate()}.log`
  );
  const logMessage = `[${new Date().toLocaleString()}] ${message}\n`;

  try {
    await fs.appendFile(logFilePath, logMessage);
  } catch (error: Error | any) {
    console.error(`Failed to write log: ${error.message}`);
  }
}

export function logAction(actionMessage: string) {
  console.log(actionMessage);
  logMessage(actionMessage);
}

export function logError(errorMessage: string) {
  console.error(errorMessage);
  logMessage(errorMessage);
}
