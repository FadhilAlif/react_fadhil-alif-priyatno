# SUMMARY EVENT HANDLING

## React STATE
State digunakan untuk menghandle data di dalam component yang terus berubah dan hanya bisa diakses di dalam component dimana state itu dibuat, sehingga tidak bisa diakses dari component lain.

Sifat State :
- Data yang bisa di,odifikasi menggunakan setState
- Setiap terjadi modifikasi akan merender ulang
- Bersifat Asynchronous
- Dipakai dalam class

## Statefull dan Stateless
**Statefull Component** adalah memiliki STATE. Component ini dibuat dengan CLASS. Kelebihan dari Class Component adalah memiliki Lifecycle.

**Stateless Component** adalah Tidak memiliki STATE hanya PROPS. Umunya component dibuat dengan Function karena codenya yang ringkas.

## Handling Event
**Handling Event** adalah suatu metode untuk menangani sebuah Event/Aksi yang diberikan pengguna kepada suatu Component.

**Event** adalah suatu peristiwa yang dipicu oleh pengguna pada suatu Component, Misalnya tombol Button/Submit yang ditekan.