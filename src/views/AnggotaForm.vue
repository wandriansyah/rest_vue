<template>
    <form @submit.prevent="submitForm" class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="nomor" class="form-label">Nomor:</label>
            <input type="text" id="nomor" v-model="nomor" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="nama" class="form-label">Nama:</label>
            <input type="text" id="nama" v-model="nama" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="jenis_kelamin" class="form-label">Jenis Kelamin:</label>
            <input type="text" id="jenis_kelamin" v-model="jenis_kelamin" class="form-control" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="alamat" class="form-label">Alamat:</label>
            <input type="text" id="alamat" v-model="alamat" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="no_hp" class="form-label">No. HP:</label>
            <input type="text" id="no_hp" v-model="no_hp" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="tanggal_terdaftar" class="form-label">Tanggal Terdaftar:</label>
            <input type="text" id="tanggal_terdaftar" v-model="tanggal_terdaftar" class="form-control" required>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nomor: '',
        nama: '',
        jenis_kelamin: '',
        alamat: '',
        no_hp: '',
        tanggal_terdaftar: ''
      };
    },
    methods: {
      submitForm() {
        const formData = new FormData();
        formData.append('nomor', this.nomor);
        formData.append('nama', this.nama);
        formData.append('jenis_kelamin', this.jenis_kelamin);
        formData.append('alamat', this.alamat);
        formData.append('no_hp', this.no_hp);
        formData.append('tanggal_terdaftar', this.tanggal_terdaftar);
  
        axios.post('https://api.yoo.my.id/wandri/rest_anggota.php', formData)
          .then(response => {
            // Tangani respons
            console.log(response.data); // Contoh: Tampilkan data respons di konsol
  
            // Reset form
            this.resetForm();
  
            this.$router.push('/anggota');
          })
          .catch(error => {
            // Tangani kesalahan
            console.error(error);
          });
      },
      resetForm() {
        this.nomor = '';
        this.nama = '';
        this.jenis_kelamin = '';
        this.alamat = '';
        this.no_hp = '';
        this.tanggal_terdaftar = '';
      }
    }
  };
  </script>
  