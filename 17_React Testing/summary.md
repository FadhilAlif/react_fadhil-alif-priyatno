# Summary React Testing

## Testing

Testing merupakan proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

## Manfaat testing

- Ketika aplikasi kita mempunyai coverage yang baik, kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita.
- Mengurangi bug pada aplikasi.

## Kategori Testing

- Rendering component tress didalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
- Menjalankan aplikasi secara lengkap di dalam environment peramban (browser) asli, yang biasa dikenal dengan “end-to-end”.

## Rekomendasi Tools Testing

- Jest = merupakan test runner pada javascript yang memungkinkan anda mengakses DOM melalui jsdom.
- React testing library = merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada react tanpa bergantung pada detail implementasinya.

## RTL Basic Testing

Render merupakan fungsi RTL yang akan merender file JSX apapun yang dibutuhkan, baru setelah itu kita bisa mengakses ke komponent react yang akan di test. Debug merupakan fungsi RTL yang digunakan untuk meyakinkan bahwa file JSX sudah terender, debug sendiri merupakan fungsi yang digunakan untuk mengetahui hasil dari fungsi render.

## Kategori Testing :

- LabelText
- PlaceholderText
- AltText
- DisplayValue
