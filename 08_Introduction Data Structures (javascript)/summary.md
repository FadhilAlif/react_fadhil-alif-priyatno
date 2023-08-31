<h1>SUMMARY INTRODUCTION DATA STRUCTURES JS</h1>

<b>Data</b> adalah cakupan luas merujuk ke semua tipe informasi yang tersimpan dalam memori komputer (string, number, boolean, dll.)<br>
<b>Data Structure</b> adalah format untuk mengatur, mengelola, menyimpan data dan mengorganisir kumpulan data/value/elemen yang ada di dalam memori komputer.

<h3>Basic Data Structures</h3>
- Array : Array merupakan suatu variabel serbaguna yang dapat menyimpan banyak data, di JS index array secara default adalah bilangan bulat yang diawali dengan 0 (nol).<br>
- Set :  objek yang berisikan nilai-nilai yang bersifat unik, artinya dalam objek tersebut hanya ada satu nilai saja

<h3>Operasi Data Structure</h3>
<b>ARRAY</b><br>
- READ<br>
Melihat nilai apa yang terkandung dalam index tertentu di dalam array, Operasi yang efisien, dan Jenis operasi tercepat karena hanya membutuhkan 1 step saja.<br>
- SEARCH<br>
Mencari ada atau tidaknya nilai di dalam array, Merupakan kebalikan dari <b>READ</b>, Saat melakukan searching pada array komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu, dan Komputer tidak bisa langsung tahu niali yang terkandung pada setiap memori begitu saja<br>
- INSERTION<br>
Efisiensi insertuion tergantung dimana kita memasukan valuenya, jika dimasukan di akhir maka hanya membutuhkan satu steps, jika ditengah perlu menggeser data yang sudah ada di array sehingga perlu steps tambahan<br>
- DELETION<br>
Operasi untuk menghilangkan value pada suatu index, Membutuhkan jumlah N steps untuk array yang mengandung data N<br>

<b>SET</b><br>
- READ<br>
Menggunakan forEach<br>
- SEARCH<br>
Menggunakan method has<br>
- DELETION
Menggunakan method delete<br>


