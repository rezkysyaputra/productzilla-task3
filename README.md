# Task 3 - MUH. REZKY SYAPUTRA
## Struktur folder:
1. logs: menyimpan catatan log dari enkripsi atau dekripsi file
2. src: menyimpan file logika codingan enkripsi dan deksripsi file
3. helpers: menyimpan fungsi-fungsi yang sudah di pisahkan
   
## Cara menggunakan:
1. Buka terminal bash
2. clone repository: git clone https://github.com/rezkysyaputra/productzilla-task3.git
3. npm install
4. running untuk enkripsi file: ts-node src/index.ts encrypt ./test.txt myPassword
5. running untuk dekripsi file: ts-node src/index.ts decrypt ./test_encrypted.txt myPassword

## Contoh penggunaan
1. Skenario enkripsi file benar dan salah:
* Benar
![Screenshot 2024-10-21 052749](https://github.com/user-attachments/assets/5241e8d3-6f2b-471b-8077-73e11e0222d9)
* Salah
![Screenshot 2024-10-21 053021](https://github.com/user-attachments/assets/bda2417f-29c6-4063-bc53-6a326e722f6a)
2. Skenario dekripsi file benar dan salah:
  * Benar
    ![Screenshot 2024-10-21 053323](https://github.com/user-attachments/assets/395d2084-bda9-40b4-996f-be14977361ad)
  * Salah
    ![Screenshot 2024-10-21 053524](https://github.com/user-attachments/assets/e5bc48b1-a6cf-4f23-bc0a-3550130462f2)
