# Summary Global State Management | Redux

### Kapan menggunakan Redux

- Banyak state yang perlu ditaruh di banyak tempat
- state pada app sering berubah
- logic mengubah state kompleks
- ukuran code base besar dan dalam projek tim

### Redux Libraies dan Tools

- React-Redux
- Redux toolkit
- Redux DevTools Extension

### 3 Komponen Penting Redux

- Actions
- Reducer
- Store

### Redux Thunk

Thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

### Kenapa Redux Thunk Diperlukan

- Untuk menghandle side effect logic yang kompleks
- Untuk logic async seperti request data

### Menyimpan State ke Storage

Menggunakan redux-persist agar state tidak hilang saat kita atau user melakukan refresh halaman.
