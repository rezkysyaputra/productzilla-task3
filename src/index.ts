import decryptFile from './helpers/decrypt';
import encryptFile from './helpers/encrypt';
import { logAction } from './logger';

// Command-line interface
const [action, filePath, password] = process.argv.slice(2);

if (!action || !filePath || !password) {
  console.error(
    'Gunakan Format: ts-node index.ts <encrypt|decrypt> <filePath> <password>'
  );
  process.exit(1);
}

if (action === 'encrypt') {
  logAction(`Mulai mengenkripsi file ${filePath}`);
  encryptFile(filePath, password);
} else if (action === 'decrypt') {
  logAction(`Mulai mendekripsi file ${filePath}`);
  decryptFile(filePath, password);
} else {
  console.error('Gunakan encrypt atau decrypt');
  process.exit(1);
}
