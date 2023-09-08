# SUMMARY REACT FUNDAMENTAL

## JSX

JSX adalah singkatan dari JavaScript XML yang merupakan ekstensi pada JS
JSX digunakan karena dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI (_Separation od Technology -> Separation od Concerns_)

## Komponen React

Komponen React adalah bagian kode yang dapat digunakan kembali, yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI

SOLID (Single Responsibility Principle) : Sebuah modul harus bertanggung jawab kepada satu, dan hanya satu, aktor.

## React PROPS

- Merupakan singkatan dari Properties, membuat kita dapat memberikan argumen/data pada component.
- Props membantu membuat component lebih dinamis.
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah

## React Lifecycle

React Lifecycle merupakan sederetan event yang terjadi dari awal komponen muncul hingga komponen itu menghilang dari aplikasi kita.

Siklus Komponen React dibagi menjadi tiga :

- Mounting
- Updating
- Unmounting

Tiap Siklus tersebut secara umum dibagi menjadi tiga **Phase** :

- Render Pashe : Fungsi harus pure no side effect
- Pre-Commit Phase : Dapat membaca DOM
- Commit Phase : Dapat melakukan pengolahan DOM dan Side effect

## Render Bersyarat

Kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi anda.

- Menggunakan IF
- Inline IF dengan operator &&
- Inline IF - ELSE dengan ternary conditional operator
- Mencegah komponen untuk rendering

## Struktur Direktori

Pada React tidak memiliki pendapat tentang bagaimana cara memasukan file ke folder

Beberapa Cara Umum :

- Pengelompokan berdasarkan fitur
- Pengelompokan jenis file
