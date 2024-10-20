import crypto from 'crypto';

const generateKey = (password: string) => {
  return crypto.createHash('sha256').update(password).digest();
};

export default generateKey;
