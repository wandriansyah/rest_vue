<template>
    <div class="container mt-5">
      <h2>Data Buku | <a href="/add_buku">Add</a></h2> 

      <hr>
      <p><a href="/anggota">Data Anggota</a> | <a href="/peminjaman">Data Peminjaman</a></p>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kode</th>
            <th>Kategori</th>
            <th>Judul</th>
            <th>Pengarang</th>
            <th>Penerbit</th>
            <th>Tahun</th>
            <th>Tanggal Input</th>
            <th>Harga</th>
            <th>File Cover</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id.id">
            <td>{{ book.id.id }}</td>
            <td>{{ book.kode }}</td>
            <td>{{ book.kode_kategori }}</td>
            <td>{{ book.judul }}</td>
            <td>{{ book.pengarang }}</td>
            <td>{{ book.penerbit }}</td>
            <td>{{ book.tahun }}</td>
            <td>{{ book.tanggal_input }}</td>
            <td>{{ book.harga }}</td>
            <td>{{ book.file_cover }}</td>
            <td><a href="">Edit</a> |  <a href="" @click="deleteData(book.id.id)">Hapus {{ book.id.id }}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        books: []
      };
    },
    mounted() {
      this.fetchBooks();
    },
    methods: {
      fetchBooks() {
        axios.get('https://api.yoo.my.id/wandri/rest_api.php')
          .then(response => {
            //console.log(response);
            this.books = response.data.Hasil;
          })
          .catch(error => {
            console.error(error);
          });
      },
  
  //   deleteData(bookId) {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   };
  
  //   const formData = new URLSearchParams();
  //   formData.append('id', bookId);
  
  //   axios
  //     .delete('http://localhost/buku/rest_api.php', { data: formData }, config)
  //     .then(response => {
  //       console.log(response.data);
  //       // Remove the deleted book from the books array
  //       this.books = this.books.filter(book => book.id !== bookId);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  deleteData(bookId) {
    const formData = new URLSearchParams();
    formData.append('id', bookId);
  
    axios
      .delete('https://api.yoo.my.id/wandri/rest_api.php', { data: formData })
      .then(response => {
        console.log(response.data);
        // Remove the deleted book from the books array
        this.books = this.books.filter(book => book.id !== bookId);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  
  
    }
  };
  </script>
  