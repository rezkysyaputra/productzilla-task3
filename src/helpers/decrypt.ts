import fs from 'fs/promises';
import generateKey from './generateKey';
import crypto from 'crypto';
import path from 'path';
import { logAction, logError } from '../logger';

async function decryptFile(filePath: string, password: string) {
  const key = generateKey(password);

  try {
    const fileData = await fs.readFile(filePath);
    const iv = fileData.subarray(0, 16);
    const encryptedData = fileData.subarray(16);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    const decryptedData = Buffer.concat([
      decipher.update(encryptedData),
      decipher.final(),
    ]);
    const decryptedFilePath = path.join(
      path.dirname(filePath),
      `${path
        .basename(filePath, path.extname(filePath))
        .replace('_encrypted', '')}${path.extname(filePath)}`
    );

    await fs.writeFile(decryptedFilePath, decryptedData);
    logAction(
      `File '${filePath}' berhasil didekripsi menjadi '${decryptedFilePath}'`
    );
  } catch (error: Error | any) {
    logError(`Error ketika mendekripsi file: ${error.message}`);
  }
}

export default decryptFile;
