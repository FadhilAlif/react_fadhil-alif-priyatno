<h1>SUMMARY JAVASCRIPT</h1>

<b>JavaScript</b> adalah bahasa pemrograman yang digunakan untuk berinteraksi dengan halaman website agar lebih dinamis dan interaktif. Java Script merupakan sebuah bahasa pemrograman high-level, Scripting, Untyped, dan Interpreted

<h3>Values</h3>
Declaration : merupakan proses pembuatan variabel untuk menyimpan data<br>
Scoping : menentukan dimana variabel, fungsi, dan objek diatur serta dapat diakses dalam kode kita, yang berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel<br>
Hoisting : membuat beberapa jenis variabel atau function dapat diakses/digunakan dalam kode sebelum dideklarasikan

<h3>Understanding Variable</h3>
Primitive adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman<br>
Contoh :
String, Bool number, bigInt, NULL, Symbol<br>
Objects : unit yang menyimpan properti dan fungsi(method)<br>
Contoh :
Object, Array, Function, Date, Set, Mao, Weak Set, Weak Map<br>
Descrtucturing : Espresi dari JavaScript yang memungkinkan untuk menyalin nilai dari array, atau properti dari objek, ke dalam variabl=el yang berbeda.<br>

<h3>Method</h3>
merupakan sebuah fungsi yang terkait dengan object, membuat programnya sesederhana mungkin sesuai keinginan masing masing.<br>
Concat : Mengabungkan 2 atau lebih array, dan mengembalikan salinan array yg digabungkan<br>
Map : Membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array<br>
Foreach : Memanggil fungsi untuk setiap elemen array<br>
Slice : Memilih bagian dari array, dan mengembalikan array baru<br>
Filter : Membuat array baru dengan setiap elemen dalam array yang lulus seleksi<br>
Reduce : Melakukan operasi pada setiap elemen array menjadi nilai tunggal dari kiri ke kanan

<h3>Control Flow</h3>
Mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita<br>
- Pengulangan : For, While, Do While<br>
- Pengkodisian : If, Else, Switch, Block, Try, Catch, Break, Continue, Throw<br>
Try : Mengeksekusi statement di dalamnya<br>
Catch : Menangkap error yang terjadi pada statement di dalam try<br>
Throw : Melemparkan error sesuai kondisi yang diinginkan<br>
Normal Flow : Pengeksekusian statemen dari atas kebawah atau kiri ke kanan yang dilakukan secara berurutan

<h3>Function</h3>
adalah sebuah objek, karena memiliki properti dan juga method, function dignakan untuk serangkaian komputasi atau prosedur yg dapat digunakan berkali kali<br>
Arrow Function '=>'

<h3>Classes</h3>
Class : suatu prototype dari object yg akan dibuat<br>
Constructor : suatu method di dalam class yang akan terpanggil pertama kali ketika membuat object<br>
Method : sebuah fungsi yg berada di dalam class<br>
Attribute : kumpulan variabel yang membentuk object yang dimiliki oleh suatu class<br>
Extends : digunakan untuk membuat kelas anak dari kelas induk, kelas anak mewarisi semua attribut dan method dari class induk

<h3>Asyn-Await</h3>
Synchronus : mengeksekusi setiap perintah dilakuakan satu per satu sesuai urutan kode yang dituliskan<br>
Asynchronus : hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tapi berdasar waktu proses<br>
Callback : fungsi yang dikirimkan sebagai parameter pada fungsi lain atau yang dieksekusi setelah fungsi lain selesai dijalankan.<br>
Promise : objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronus dimasa mendatang<br>
Asynchronus function : sebuah function yang bekerja secara asyn dan menghasilkan Promise sebagai Return valueny, tetapi cara penulisan codeny menggunakan penulisan synchronus(stdandar)<br>
Await : sebuah keyword yang terdapat asyn function yang bertujuan menghentikan eksekusi sambil menunggu promiseny selesai

<h3>DOM (Document Object Model)</h3>
DOM adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah objek dengan DOM, developer dapat mengubah konten, style, layout, dan interaksi antar komponen.<br>

DOM Selection Method<br>
- getElementsByTagName()
- getElementsByClassName()
- getElementById()
- querySelector()
- querySelectorAll()
