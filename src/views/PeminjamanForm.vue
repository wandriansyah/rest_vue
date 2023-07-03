<template>
    <form @submit.prevent="submitForm" class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="tanggal_peminjaman" class="form-label">Tanggal Peminjaman:</label>
            <input type="date" id="tanggal_peminjaman" v-model="tanggal_peminjaman" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="nomor_anggota" class="form-label">Nomor Anggota:</label>
            <input type="text" id="nomor_anggota" v-model="nomor_anggota" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="status_peminjaman" class="form-label">Status Peminjaman:</label>
            <input type="text" id="status_peminjaman" v-model="status_peminjaman" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="tanggal_pengembalian" class="form-label">Tanggal Pengembalian:</label>
            <input type="date" id="tanggal_pengembalian" v-model="tanggal_pengembalian" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="durasi_keterlambatan" class="form-label">Durasi Keterlambatan:</label>
            <input type="text" id="durasi_keterlambatan" v-model="durasi_keterlambatan" class="form-control" required>
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
        tanggal_peminjaman: '',
        nomor_anggota: '',
        status_peminjaman: '',
        tanggal_pengembalian: '',
        durasi_keterlambatan: '',
      };
    },
    methods: {
      submitForm() {
        const formData = new FormData();
        formData.append('tanggal_peminjaman', this.tanggal_peminjaman);
        formData.append('nomor_anggota', this.nomor_anggota);
        formData.append('status_peminjaman', this.status_peminjaman);
        formData.append('tanggal_pengembalian', this.tanggal_pengembalian);
        formData.append('durasi_keterlambatan', this.durasi_keterlambatan);
  
        axios.post('https://api.yoo.my.id/wandri/rest_peminjaman.php', formData)
          .then(response => {
            // Tangani respons
            console.log(response.data); // Contoh: Tampilkan data respons di konsol
  
            // Reset form
            this.resetForm();
  
            this.$router.push('/peminjaman');
          })
          .catch(error => {
            // Tangani kesalahan
            console.error(error);
          });
      },
      resetForm() {
        this.tanggal_peminjaman = '';
        this.nomor_anggota = '';
        this.status_peminjaman = '';
        this.tanggal_pengembalian = '';
        this.durasi_keterlambatan = '';
      }
    }
  };
  </script>
  