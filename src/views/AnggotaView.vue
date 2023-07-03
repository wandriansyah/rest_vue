<template>
    <div class="container mt-5">
      <h2>Data Anggota | <a href="/add_anggota">Add</a></h2> 
      <hr>
      <p><a href="/">Data Buku</a> | <a href="/peminjaman">Data Peminjaman</a></p>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nomor</th>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>No HP</th>
            <th>Tanggal Terdaftar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id.id">
            <td>{{ book.id.id }}</td>
            <td>{{ book.nomor }}</td>
            <td>{{ book.nama }}</td>
            <td>{{ book.jenis_kelamin }}</td>
            <td>{{ book.alamat }}</td>
            <td>{{ book.no_hp }}</td>
            <td>{{ book.tanggal_terdaftar }}</td>
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
        axios.get('https://api.yoo.my.id/wandri/rest_anggota.php')
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
      .delete('https://api.yoo.my.id/wandri/rest_anggota.php', { data: formData })
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
  