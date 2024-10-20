import fs from 'fs/promises';
import generateKey from './generateKey';
import crypto from 'crypto';
import path from 'path';
import { logAction, logError } from '../logger';

async function encryptFile(filePath: string, password: string) {
  const key = generateKey(password);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  try {
    const fileData = await fs.readFile(filePath);
    const encryptedData = Buffer.concat([
      iv,
      cipher.update(fileData),
      cipher.final(),
    ]);

    const encryptedFilePath = path.join(
      path.dirname(filePath),
      `${path.basename(
        filePath,
        path.extname(filePath)
      )}_encrypted${path.extname(filePath)}`
    );

    await fs.writeFile(encryptedFilePath, encryptedData);
    logAction(
      `File '${filePath}' berhasil dienkripsi menjadi '${encryptedFilePath}'`
    );
  } catch (error: Error | any) {
    logError(`Error ketika mengenkripsi file: ${error.message}`);
  }
}

export default encryptFile;
