<template>
  <form @submit.prevent="submitForm" class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="kode" class="form-label">Kode:</label>
          <input type="text" id="kode" v-model="kode" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="kode_kategori" class="form-label">Kode Kategori:</label>
          <input type="text" id="kode_kategori" v-model="kode_kategori" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="judul" class="form-label">Judul:</label>
          <input type="text" id="judul" v-model="judul" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="pengarang" class="form-label">Pengarang:</label>
          <input type="text" id="pengarang" v-model="pengarang" class="form-control" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="penerbit" class="form-label">Penerbit:</label>
          <input type="text" id="penerbit" v-model="penerbit" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="tahun" class="form-label">Tahun:</label>
          <input type="number" id="tahun" v-model="tahun" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="tanggal_input" class="form-label">Tanggal Input:</label>
          <input type="text" id="tanggal_input" v-model="tanggal_input" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="harga" class="form-label">Harga:</label>
          <input type="text" id="harga" v-model="harga" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="file_cover" class="form-label">File Cover:</label>
          <input type="text" id="file_cover" v-model="file_cover" class="form-control" required>
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
      kode: '',
      kode_kategori: '',
      judul: '',
      pengarang: '',
      penerbit: '',
      tahun: '',
      tanggal_input: '',
      harga: '',
      file_cover: ''
    };
  },
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append('kode', this.kode);
      formData.append('kode_kategori', this.kode_kategori);
      formData.append('judul', this.judul);
      formData.append('pengarang', this.pengarang);
      formData.append('penerbit', this.penerbit);
      formData.append('tahun', this.tahun);
      formData.append('tanggal_input', this.tanggal_input);
      formData.append('harga', this.harga);
      formData.append('file_cover', this.file_cover);

      axios.post('http://localhost/buku/rest_api.php', formData)
        .then(response => {
          // Tangani respons
          console.log(response.data); // Contoh: Tampilkan data respons di konsol

          // Reset form
          this.resetForm();
        })
        .catch(error => {
          // Tangani kesalahan
          console.error(error);
        });
    },
    resetForm() {
      this.kode = '';
      this.kode_kategori = '';
      this.judul = '';
      this.pengarang = '';
      this.penerbit = '';
      this.tahun = '';
      this.tanggal_input = '';
      this.harga = '';
      this.file_cover = '';
    }
  }
};
</script>
