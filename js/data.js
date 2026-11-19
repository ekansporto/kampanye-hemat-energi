/**
 * ENERGIZE — Data & Fakta (Fase 2)
 * File  : js/data.js
 * 
 * Mode Kerja:
 * 1. Saat di-push & di-deploy (HTTP / HTTPS / GitHub Pages / Vercel / Netlify):
 *    Menggunakan fetch('data/data.json') untuk membaca file JSON secara asinkron.
 * 2. Saat dibuka langsung (file:/// double-click di laptop tanpa Live Server):
 *    Otomatis beralih ke data fallback asli, sehingga grafik langsung muncul tanpa error.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     DATA ASLI DARI KUESIONER (Fallback jika dibuka langsung di file:///)
     ============================================================ */
  const DATA_ASLI = 
{
  "meta": {
    "judul": "Hasil Kuesioner Perilaku Hemat Energi Siswa Kelas XI",
    "sumber": "Kuesioner - ENERGI XI (Perilaku) (Responses).xlsx",
    "skala": "Likert 1-4 per pernyataan (1 = paling rendah/jarang, 4 = paling tinggi/sering). Total 10 butir = 10-40.",
    "catatan_privasi": "Data sudah diagregasi; tidak memuat nama, NIS, maupun email responden.",
    "jumlah_butir": 10,
    "jumlah_siswa_terdata": 639,
    "jumlah_responden": 636,
    "persen_partisipasi": 99.4,
    "tanggal_pengisian": {
      "awal": "2026-10-12",
      "akhir": "2026-11-05"
    },
    "pembersihan": {
      "baris_mentah": 731,
      "baris_tidak_valid_dibuang": 1,
      "isian_ganda_dibuang": 94,
      "aturan_isian_ganda": "Jika satu siswa mengisi lebih dari sekali, dipakai isian TERAKHIR.",
      "kolom_score_google_form_diabaikan": true
    },
    "kategori_skor": {
      "aturan": "Berdasarkan rata-rata skor per butir (1.00-4.00)",
      "rentang": {
        "Kurang": "1.00-1.75",
        "Cukup": "1.76-2.50",
        "Baik": "2.51-3.25",
        "Sangat Baik": "3.26-4.00"
      }
    }
  },
  "ringkasan": {
    "rata_rata_skor": 3.36,
    "rata_rata_total": 33.62,
    "kategori": {
      "Sangat Baik": 378,
      "Baik": 234,
      "Cukup": 23,
      "Kurang": 1
    },
    "kategori_persen": {
      "Sangat Baik": 59.4,
      "Baik": 36.8,
      "Cukup": 3.6,
      "Kurang": 0.2
    },
    "persen_sering_rata_rata": 90.79,
    "sorotan": {
      "butir_tertinggi": [
        {
          "kode": "P01",
          "label": "Praktik hemat energi sehari-hari",
          "rata_rata": 3.51
        },
        {
          "kode": "P02",
          "label": "Tindakan nyata di bengkel, lab, kelas, rumah",
          "rata_rata": 3.46
        },
        {
          "kode": "P06",
          "label": "Cabut charger/steker setelah dipakai",
          "rata_rata": 3.45
        }
      ],
      "butir_terendah": [
        {
          "kode": "P04",
          "label": "Batasi penggunaan gawai/laptop",
          "rata_rata": 3.22,
          "persen_jarang": 13.7
        },
        {
          "kode": "P09",
          "label": "Berani menegur/mengajak teman hemat listrik",
          "rata_rata": 3.22,
          "persen_jarang": 13.2
        },
        {
          "kode": "P05",
          "label": "Pilih fasilitas/transportasi hemat energi",
          "rata_rata": 3.3,
          "persen_jarang": 13.4
        }
      ],
      "jurusan_tertinggi": "PMN",
      "jurusan_terendah": "PPLG"
    }
  },
  "sebaran_skor_total": [
    {
      "skor_total": 10,
      "jumlah": 1
    },
    {
      "skor_total": 18,
      "jumlah": 1
    },
    {
      "skor_total": 20,
      "jumlah": 1
    },
    {
      "skor_total": 22,
      "jumlah": 1
    },
    {
      "skor_total": 23,
      "jumlah": 3
    },
    {
      "skor_total": 24,
      "jumlah": 5
    },
    {
      "skor_total": 25,
      "jumlah": 12
    },
    {
      "skor_total": 26,
      "jumlah": 6
    },
    {
      "skor_total": 27,
      "jumlah": 22
    },
    {
      "skor_total": 28,
      "jumlah": 26
    },
    {
      "skor_total": 29,
      "jumlah": 35
    },
    {
      "skor_total": 30,
      "jumlah": 64
    },
    {
      "skor_total": 31,
      "jumlah": 44
    },
    {
      "skor_total": 32,
      "jumlah": 37
    },
    {
      "skor_total": 33,
      "jumlah": 44
    },
    {
      "skor_total": 34,
      "jumlah": 50
    },
    {
      "skor_total": 35,
      "jumlah": 51
    },
    {
      "skor_total": 36,
      "jumlah": 42
    },
    {
      "skor_total": 37,
      "jumlah": 45
    },
    {
      "skor_total": 38,
      "jumlah": 34
    },
    {
      "skor_total": 39,
      "jumlah": 26
    },
    {
      "skor_total": 40,
      "jumlah": 86
    }
  ],
  "per_butir": [
    {
      "id": 1,
      "kode": "P01",
      "label": "Praktik hemat energi sehari-hari",
      "pertanyaan": "Saya secara sadar mempraktikkan tindakan pelestarian energi (seperti menghemat air dan listrik) dalam aktivitas saya sehari-hari.",
      "jumlah_per_skor": {
        "1": 1,
        "2": 8,
        "3": 291,
        "4": 336
      },
      "persen_per_skor": {
        "1": 0.2,
        "2": 1.3,
        "3": 45.8,
        "4": 52.8
      },
      "rata_rata": 3.51,
      "persen_sering": 98.6,
      "persen_jarang": 1.4
    },
    {
      "id": 2,
      "kode": "P02",
      "label": "Tindakan nyata di bengkel, lab, kelas, rumah",
      "pertanyaan": "Saya melakukan tindakan nyata untuk menghemat energi, baik saat berada di bengkel, laboratorium, ruang kelas, maupun di rumah.",
      "jumlah_per_skor": {
        "1": 1,
        "2": 28,
        "3": 287,
        "4": 320
      },
      "persen_per_skor": {
        "1": 0.2,
        "2": 4.4,
        "3": 45.1,
        "4": 50.3
      },
      "rata_rata": 3.46,
      "persen_sering": 95.4,
      "persen_jarang": 4.6
    },
    {
      "id": 3,
      "kode": "P03",
      "label": "Matikan lampu/AC/kipas saat kelas kosong",
      "pertanyaan": "Saya berinisiatif mematikan lampu, AC, atau kipas angin di kelas saat jam istirahat atau saat kelas dalam keadaan kosong.",
      "jumlah_per_skor": {
        "1": 5,
        "2": 55,
        "3": 278,
        "4": 298
      },
      "persen_per_skor": {
        "1": 0.8,
        "2": 8.6,
        "3": 43.7,
        "4": 46.9
      },
      "rata_rata": 3.37,
      "persen_sering": 90.6,
      "persen_jarang": 9.4
    },
    {
      "id": 4,
      "kode": "P04",
      "label": "Batasi penggunaan gawai/laptop",
      "pertanyaan": "Saya membatasi penggunaan gawai (Laptop) atau alat elektronik lainnya untuk hal-hal yang tidak perlu agar tidak membuang energi sia-sia.",
      "jumlah_per_skor": {
        "1": 5,
        "2": 82,
        "3": 315,
        "4": 234
      },
      "persen_per_skor": {
        "1": 0.8,
        "2": 12.9,
        "3": 49.5,
        "4": 36.8
      },
      "rata_rata": 3.22,
      "persen_sering": 86.3,
      "persen_jarang": 13.7
    },
    {
      "id": 5,
      "kode": "P05",
      "label": "Pilih fasilitas/transportasi hemat energi",
      "pertanyaan": "Saya lebih memilih menggunakan fasilitas yang hemat energi (misalnya menggunakan transportasi umum, sepeda, atau jalan kaki jika jaraknya dekat).",
      "jumlah_per_skor": {
        "1": 6,
        "2": 79,
        "3": 268,
        "4": 283
      },
      "persen_per_skor": {
        "1": 0.9,
        "2": 12.4,
        "3": 42.1,
        "4": 44.5
      },
      "rata_rata": 3.3,
      "persen_sering": 86.6,
      "persen_jarang": 13.4
    },
    {
      "id": 6,
      "kode": "P06",
      "label": "Cabut charger/steker setelah dipakai",
      "pertanyaan": "Saya mencabut kabel charger (pengisi daya) atau steker dari stopkontak setelah selesai menggunakan peralatan elektronik.",
      "jumlah_per_skor": {
        "1": 7,
        "2": 44,
        "3": 240,
        "4": 345
      },
      "persen_per_skor": {
        "1": 1.1,
        "2": 6.9,
        "3": 37.7,
        "4": 54.2
      },
      "rata_rata": 3.45,
      "persen_sering": 92.0,
      "persen_jarang": 8.0
    },
    {
      "id": 7,
      "kode": "P07",
      "label": "Manfaatkan cahaya matahari (buka tirai/jendela)",
      "pertanyaan": "Saya membuka tirai dan jendela kelas pada siang hari agar cahaya matahari bisa masuk sehingga lampu kelas dapat dimatikan.",
      "jumlah_per_skor": {
        "1": 9,
        "2": 58,
        "3": 262,
        "4": 307
      },
      "persen_per_skor": {
        "1": 1.4,
        "2": 9.1,
        "3": 41.2,
        "4": 48.3
      },
      "rata_rata": 3.36,
      "persen_sering": 89.5,
      "persen_jarang": 10.5
    },
    {
      "id": 8,
      "kode": "P08",
      "label": "Atur suhu AC/kipas secukupnya",
      "pertanyaan": "Saya mengatur suhu AC di ruangan secukupnya (tidak terlalu dingin) atau menggunakan kipas angin seperlunya demi menjaga kelestarian lingkungan.",
      "jumlah_per_skor": {
        "1": 6,
        "2": 55,
        "3": 310,
        "4": 265
      },
      "persen_per_skor": {
        "1": 0.9,
        "2": 8.6,
        "3": 48.7,
        "4": 41.7
      },
      "rata_rata": 3.31,
      "persen_sering": 90.4,
      "persen_jarang": 9.6
    },
    {
      "id": 9,
      "kode": "P09",
      "label": "Berani menegur/mengajak teman hemat listrik",
      "pertanyaan": "Saya berani menegur atau mengajak teman-teman satu kelas untuk ikut peduli dan menghemat penggunaan listrik di sekolah.",
      "jumlah_per_skor": {
        "1": 11,
        "2": 73,
        "3": 319,
        "4": 233
      },
      "persen_per_skor": {
        "1": 1.7,
        "2": 11.5,
        "3": 50.2,
        "4": 36.6
      },
      "rata_rata": 3.22,
      "persen_sering": 86.8,
      "persen_jarang": 13.2
    },
    {
      "id": 10,
      "kode": "P10",
      "label": "Pastikan peralatan mati sebelum pulang",
      "pertanyaan": "Saya secara rutin memastikan seluruh peralatan sekolah (komputer lab, alat praktik yang menggunakan listrik) sudah dimatikan dengan benar sebelum pulang sekolah.",
      "jumlah_per_skor": {
        "1": 4,
        "2": 49,
        "3": 263,
        "4": 320
      },
      "persen_per_skor": {
        "1": 0.6,
        "2": 7.7,
        "3": 41.4,
        "4": 50.3
      },
      "rata_rata": 3.41,
      "persen_sering": 91.7,
      "persen_jarang": 8.3
    }
  ],
  "per_jurusan": [
    {
      "kode": "PMN",
      "nama": "Pemasaran",
      "jumlah_responden": 72,
      "rata_rata_skor": 3.51,
      "rata_rata_total": 35.08,
      "rata_rata_per_butir": [
        3.54,
        3.64,
        3.57,
        3.46,
        3.39,
        3.51,
        3.51,
        3.47,
        3.38,
        3.61
      ],
      "kategori": {
        "Sangat Baik": 51,
        "Baik": 20,
        "Cukup": 1,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 70.8,
        "Baik": 27.8,
        "Cukup": 1.4,
        "Kurang": 0.0
      }
    },
    {
      "kode": "HTL",
      "nama": "Perhotelan",
      "jumlah_responden": 69,
      "rata_rata_skor": 3.46,
      "rata_rata_total": 34.58,
      "rata_rata_per_butir": [
        3.54,
        3.54,
        3.42,
        3.36,
        3.45,
        3.67,
        3.36,
        3.39,
        3.29,
        3.57
      ],
      "kategori": {
        "Sangat Baik": 45,
        "Baik": 24,
        "Cukup": 0,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 65.2,
        "Baik": 34.8,
        "Cukup": 0.0,
        "Kurang": 0.0
      }
    },
    {
      "kode": "KLN",
      "nama": "Kuliner",
      "jumlah_responden": 71,
      "rata_rata_skor": 3.43,
      "rata_rata_total": 34.3,
      "rata_rata_per_butir": [
        3.61,
        3.41,
        3.42,
        3.39,
        3.48,
        3.37,
        3.41,
        3.39,
        3.32,
        3.49
      ],
      "kategori": {
        "Sangat Baik": 46,
        "Baik": 22,
        "Cukup": 2,
        "Kurang": 1
      },
      "kategori_persen": {
        "Sangat Baik": 64.8,
        "Baik": 31.0,
        "Cukup": 2.8,
        "Kurang": 1.4
      }
    },
    {
      "kode": "TJKT",
      "nama": "Teknik Jaringan Komputer dan Telekomunikasi",
      "jumlah_responden": 104,
      "rata_rata_skor": 3.42,
      "rata_rata_total": 34.24,
      "rata_rata_per_butir": [
        3.6,
        3.52,
        3.4,
        3.22,
        3.39,
        3.49,
        3.4,
        3.36,
        3.27,
        3.59
      ],
      "kategori": {
        "Sangat Baik": 70,
        "Baik": 30,
        "Cukup": 4,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 67.3,
        "Baik": 28.8,
        "Cukup": 3.8,
        "Kurang": 0.0
      }
    },
    {
      "kode": "DKV",
      "nama": "Desain Komunikasi Visual",
      "jumlah_responden": 107,
      "rata_rata_skor": 3.34,
      "rata_rata_total": 33.45,
      "rata_rata_per_butir": [
        3.47,
        3.43,
        3.32,
        3.21,
        3.3,
        3.39,
        3.36,
        3.31,
        3.25,
        3.41
      ],
      "kategori": {
        "Sangat Baik": 62,
        "Baik": 42,
        "Cukup": 3,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 57.9,
        "Baik": 39.3,
        "Cukup": 2.8,
        "Kurang": 0.0
      }
    },
    {
      "kode": "MPLB",
      "nama": "Manajemen Perkantoran dan Layanan Bisnis",
      "jumlah_responden": 37,
      "rata_rata_skor": 3.24,
      "rata_rata_total": 32.35,
      "rata_rata_per_butir": [
        3.32,
        3.38,
        3.32,
        3.03,
        3.05,
        3.24,
        3.3,
        3.24,
        3.22,
        3.24
      ],
      "kategori": {
        "Sangat Baik": 19,
        "Baik": 16,
        "Cukup": 2,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 51.4,
        "Baik": 43.2,
        "Cukup": 5.4,
        "Kurang": 0.0
      }
    },
    {
      "kode": "PPLG",
      "nama": "Pengembangan Perangkat Lunak dan Gim",
      "jumlah_responden": 176,
      "rata_rata_skor": 3.24,
      "rata_rata_total": 32.36,
      "rata_rata_per_butir": [
        3.47,
        3.36,
        3.26,
        3.05,
        3.14,
        3.43,
        3.28,
        3.17,
        3.03,
        3.18
      ],
      "kategori": {
        "Sangat Baik": 85,
        "Baik": 80,
        "Cukup": 11,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 48.3,
        "Baik": 45.5,
        "Cukup": 6.2,
        "Kurang": 0.0
      }
    }
  ],
  "per_rombel": [
    {
      "rombel": "KLN XI-1",
      "jurusan": "KLN",
      "jumlah_responden": 36,
      "rata_rata_skor": 3.55,
      "rata_rata_total": 35.53,
      "rata_rata_per_butir": [
        3.67,
        3.5,
        3.56,
        3.42,
        3.61,
        3.5,
        3.58,
        3.61,
        3.42,
        3.67
      ],
      "kategori": {
        "Sangat Baik": 27,
        "Baik": 8,
        "Cukup": 1,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 75.0,
        "Baik": 22.2,
        "Cukup": 2.8,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "PMN XI-1",
      "jurusan": "PMN",
      "jumlah_responden": 36,
      "rata_rata_skor": 3.54,
      "rata_rata_total": 35.44,
      "rata_rata_per_butir": [
        3.56,
        3.64,
        3.61,
        3.5,
        3.39,
        3.58,
        3.47,
        3.58,
        3.44,
        3.67
      ],
      "kategori": {
        "Sangat Baik": 27,
        "Baik": 9,
        "Cukup": 0,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 75.0,
        "Baik": 25.0,
        "Cukup": 0.0,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "DKV XI-2",
      "jurusan": "DKV",
      "jumlah_responden": 35,
      "rata_rata_skor": 3.51,
      "rata_rata_total": 35.06,
      "rata_rata_per_butir": [
        3.6,
        3.57,
        3.37,
        3.49,
        3.46,
        3.51,
        3.37,
        3.51,
        3.49,
        3.69
      ],
      "kategori": {
        "Sangat Baik": 25,
        "Baik": 10,
        "Cukup": 0,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 71.4,
        "Baik": 28.6,
        "Cukup": 0.0,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "HTL XI-1",
      "jurusan": "HTL",
      "jumlah_responden": 33,
      "rata_rata_skor": 3.51,
      "rata_rata_total": 35.06,
      "rata_rata_per_butir": [
        3.64,
        3.58,
        3.45,
        3.42,
        3.52,
        3.64,
        3.45,
        3.42,
        3.39,
        3.55
      ],
      "kategori": {
        "Sangat Baik": 22,
        "Baik": 11,
        "Cukup": 0,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 66.7,
        "Baik": 33.3,
        "Cukup": 0.0,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "TJKT XI-1",
      "jurusan": "TJKT",
      "jumlah_responden": 35,
      "rata_rata_skor": 3.5,
      "rata_rata_total": 34.97,
      "rata_rata_per_butir": [
        3.74,
        3.57,
        3.63,
        3.2,
        3.51,
        3.46,
        3.46,
        3.4,
        3.31,
        3.69
      ],
      "kategori": {
        "Sangat Baik": 27,
        "Baik": 8,
        "Cukup": 0,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 77.1,
        "Baik": 22.9,
        "Cukup": 0.0,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "PMN XI-2",
      "jurusan": "PMN",
      "jumlah_responden": 36,
      "rata_rata_skor": 3.47,
      "rata_rata_total": 34.72,
      "rata_rata_per_butir": [
        3.53,
        3.64,
        3.53,
        3.42,
        3.39,
        3.44,
        3.56,
        3.36,
        3.31,
        3.56
      ],
      "kategori": {
        "Sangat Baik": 24,
        "Baik": 11,
        "Cukup": 1,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 66.7,
        "Baik": 30.6,
        "Cukup": 2.8,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "PPLG XI-3",
      "jurusan": "PPLG",
      "jumlah_responden": 35,
      "rata_rata_skor": 3.43,
      "rata_rata_total": 34.29,
      "rata_rata_per_butir": [
        3.63,
        3.6,
        3.54,
        3.17,
        3.37,
        3.51,
        3.4,
        3.46,
        3.11,
        3.49
      ],
      "kategori": {
        "Sangat Baik": 22,
        "Baik": 11,
        "Cukup": 2,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 62.9,
        "Baik": 31.4,
        "Cukup": 5.7,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "HTL XI-2",
      "jurusan": "HTL",
      "jumlah_responden": 36,
      "rata_rata_skor": 3.41,
      "rata_rata_total": 34.14,
      "rata_rata_per_butir": [
        3.44,
        3.5,
        3.39,
        3.31,
        3.39,
        3.69,
        3.28,
        3.36,
        3.19,
        3.58
      ],
      "kategori": {
        "Sangat Baik": 23,
        "Baik": 13,
        "Cukup": 0,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 63.9,
        "Baik": 36.1,
        "Cukup": 0.0,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "TJKT XI-3",
      "jurusan": "TJKT",
      "jumlah_responden": 34,
      "rata_rata_skor": 3.41,
      "rata_rata_total": 34.15,
      "rata_rata_per_butir": [
        3.44,
        3.5,
        3.35,
        3.18,
        3.41,
        3.65,
        3.38,
        3.38,
        3.38,
        3.47
      ],
      "kategori": {
        "Sangat Baik": 22,
        "Baik": 11,
        "Cukup": 1,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 64.7,
        "Baik": 32.4,
        "Cukup": 2.9,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "TJKT XI-2",
      "jurusan": "TJKT",
      "jumlah_responden": 35,
      "rata_rata_skor": 3.36,
      "rata_rata_total": 33.6,
      "rata_rata_per_butir": [
        3.6,
        3.49,
        3.23,
        3.29,
        3.26,
        3.37,
        3.37,
        3.29,
        3.11,
        3.6
      ],
      "kategori": {
        "Sangat Baik": 21,
        "Baik": 11,
        "Cukup": 3,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 60.0,
        "Baik": 31.4,
        "Cukup": 8.6,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "DKV XI-3",
      "jurusan": "DKV",
      "jumlah_responden": 36,
      "rata_rata_skor": 3.34,
      "rata_rata_total": 33.39,
      "rata_rata_per_butir": [
        3.47,
        3.47,
        3.47,
        3.19,
        3.25,
        3.36,
        3.31,
        3.36,
        3.14,
        3.36
      ],
      "kategori": {
        "Sangat Baik": 20,
        "Baik": 16,
        "Cukup": 0,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 55.6,
        "Baik": 44.4,
        "Cukup": 0.0,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "PPLG XI-1",
      "jurusan": "PPLG",
      "jumlah_responden": 35,
      "rata_rata_skor": 3.31,
      "rata_rata_total": 33.14,
      "rata_rata_per_butir": [
        3.6,
        3.4,
        3.31,
        3.11,
        3.06,
        3.51,
        3.46,
        3.34,
        3.11,
        3.23
      ],
      "kategori": {
        "Sangat Baik": 19,
        "Baik": 16,
        "Cukup": 0,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 54.3,
        "Baik": 45.7,
        "Cukup": 0.0,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "KLN XI-2",
      "jurusan": "KLN",
      "jumlah_responden": 35,
      "rata_rata_skor": 3.3,
      "rata_rata_total": 33.03,
      "rata_rata_per_butir": [
        3.54,
        3.31,
        3.29,
        3.37,
        3.34,
        3.23,
        3.23,
        3.17,
        3.23,
        3.31
      ],
      "kategori": {
        "Sangat Baik": 19,
        "Baik": 14,
        "Cukup": 1,
        "Kurang": 1
      },
      "kategori_persen": {
        "Sangat Baik": 54.3,
        "Baik": 40.0,
        "Cukup": 2.9,
        "Kurang": 2.9
      }
    },
    {
      "rombel": "MPLB XI-1",
      "jurusan": "MPLB",
      "jumlah_responden": 37,
      "rata_rata_skor": 3.24,
      "rata_rata_total": 32.35,
      "rata_rata_per_butir": [
        3.32,
        3.38,
        3.32,
        3.03,
        3.05,
        3.24,
        3.3,
        3.24,
        3.22,
        3.24
      ],
      "kategori": {
        "Sangat Baik": 19,
        "Baik": 16,
        "Cukup": 2,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 51.4,
        "Baik": 43.2,
        "Cukup": 5.4,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "PPLG XI-4",
      "jurusan": "PPLG",
      "jumlah_responden": 36,
      "rata_rata_skor": 3.21,
      "rata_rata_total": 32.08,
      "rata_rata_per_butir": [
        3.44,
        3.39,
        3.08,
        2.94,
        3.11,
        3.44,
        3.33,
        2.97,
        3.14,
        3.22
      ],
      "kategori": {
        "Sangat Baik": 17,
        "Baik": 18,
        "Cukup": 1,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 47.2,
        "Baik": 50.0,
        "Cukup": 2.8,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "DKV XI-1",
      "jurusan": "DKV",
      "jumlah_responden": 36,
      "rata_rata_skor": 3.19,
      "rata_rata_total": 31.94,
      "rata_rata_per_butir": [
        3.33,
        3.25,
        3.11,
        2.97,
        3.19,
        3.31,
        3.39,
        3.06,
        3.14,
        3.19
      ],
      "kategori": {
        "Sangat Baik": 17,
        "Baik": 16,
        "Cukup": 3,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 47.2,
        "Baik": 44.4,
        "Cukup": 8.3,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "PPLG XI-5",
      "jurusan": "PPLG",
      "jumlah_responden": 35,
      "rata_rata_skor": 3.15,
      "rata_rata_total": 31.54,
      "rata_rata_per_butir": [
        3.34,
        3.43,
        3.26,
        2.97,
        3.11,
        3.31,
        3.14,
        3.06,
        2.83,
        3.09
      ],
      "kategori": {
        "Sangat Baik": 15,
        "Baik": 17,
        "Cukup": 3,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 42.9,
        "Baik": 48.6,
        "Cukup": 8.6,
        "Kurang": 0.0
      }
    },
    {
      "rombel": "PPLG XI-2",
      "jurusan": "PPLG",
      "jumlah_responden": 35,
      "rata_rata_skor": 3.08,
      "rata_rata_total": 30.77,
      "rata_rata_per_butir": [
        3.34,
        3.0,
        3.09,
        3.06,
        3.03,
        3.37,
        3.06,
        3.03,
        2.94,
        2.86
      ],
      "kategori": {
        "Sangat Baik": 12,
        "Baik": 18,
        "Cukup": 5,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 34.3,
        "Baik": 51.4,
        "Cukup": 14.3,
        "Kurang": 0.0
      }
    }
  ],
  "per_rayon": [
    {
      "rayon": "Tajur",
      "jumlah_responden": 83,
      "rata_rata_skor": 3.41,
      "rata_rata_total": 34.07,
      "rata_rata_per_butir": [
        3.54,
        3.54,
        3.43,
        3.28,
        3.36,
        3.39,
        3.34,
        3.4,
        3.28,
        3.52
      ],
      "kategori": {
        "Sangat Baik": 51,
        "Baik": 31,
        "Cukup": 1,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 61.4,
        "Baik": 37.3,
        "Cukup": 1.2,
        "Kurang": 0.0
      }
    },
    {
      "rayon": "Cicurug",
      "jumlah_responden": 178,
      "rata_rata_skor": 3.38,
      "rata_rata_total": 33.85,
      "rata_rata_per_butir": [
        3.54,
        3.46,
        3.35,
        3.23,
        3.37,
        3.49,
        3.35,
        3.36,
        3.25,
        3.44
      ],
      "kategori": {
        "Sangat Baik": 111,
        "Baik": 62,
        "Cukup": 4,
        "Kurang": 1
      },
      "kategori_persen": {
        "Sangat Baik": 62.4,
        "Baik": 34.8,
        "Cukup": 2.2,
        "Kurang": 0.6
      }
    },
    {
      "rayon": "Cibedug",
      "jumlah_responden": 61,
      "rata_rata_skor": 3.37,
      "rata_rata_total": 33.72,
      "rata_rata_per_butir": [
        3.54,
        3.41,
        3.39,
        3.16,
        3.33,
        3.54,
        3.43,
        3.34,
        3.26,
        3.31
      ],
      "kategori": {
        "Sangat Baik": 39,
        "Baik": 18,
        "Cukup": 4,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 63.9,
        "Baik": 29.5,
        "Cukup": 6.6,
        "Kurang": 0.0
      }
    },
    {
      "rayon": "Ciawi",
      "jumlah_responden": 98,
      "rata_rata_skor": 3.34,
      "rata_rata_total": 33.44,
      "rata_rata_per_butir": [
        3.47,
        3.44,
        3.38,
        3.19,
        3.27,
        3.37,
        3.35,
        3.33,
        3.21,
        3.44
      ],
      "kategori": {
        "Sangat Baik": 58,
        "Baik": 34,
        "Cukup": 6,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 59.2,
        "Baik": 34.7,
        "Cukup": 6.1,
        "Kurang": 0.0
      }
    },
    {
      "rayon": "Cisarua",
      "jumlah_responden": 118,
      "rata_rata_skor": 3.34,
      "rata_rata_total": 33.42,
      "rata_rata_per_butir": [
        3.52,
        3.47,
        3.31,
        3.25,
        3.2,
        3.54,
        3.42,
        3.21,
        3.13,
        3.37
      ],
      "kategori": {
        "Sangat Baik": 69,
        "Baik": 45,
        "Cukup": 4,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 58.5,
        "Baik": 38.1,
        "Cukup": 3.4,
        "Kurang": 0.0
      }
    },
    {
      "rayon": "Sukasari",
      "jumlah_responden": 33,
      "rata_rata_skor": 3.33,
      "rata_rata_total": 33.27,
      "rata_rata_per_butir": [
        3.45,
        3.48,
        3.45,
        3.24,
        3.18,
        3.33,
        3.42,
        3.18,
        3.21,
        3.3
      ],
      "kategori": {
        "Sangat Baik": 20,
        "Baik": 11,
        "Cukup": 2,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 60.6,
        "Baik": 33.3,
        "Cukup": 6.1,
        "Kurang": 0.0
      }
    },
    {
      "rayon": "Wikrama",
      "jumlah_responden": 65,
      "rata_rata_skor": 3.31,
      "rata_rata_total": 33.11,
      "rata_rata_per_butir": [
        3.45,
        3.38,
        3.35,
        3.18,
        3.31,
        3.35,
        3.25,
        3.26,
        3.17,
        3.4
      ],
      "kategori": {
        "Sangat Baik": 30,
        "Baik": 33,
        "Cukup": 2,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 46.2,
        "Baik": 50.8,
        "Cukup": 3.1,
        "Kurang": 0.0
      }
    }
  ],
  "per_gaya_belajar": [
    {
      "gaya_belajar": "Visual",
      "jumlah_responden": 289,
      "rata_rata_skor": 3.32,
      "rata_rata_total": 33.21,
      "rata_rata_per_butir": [
        3.49,
        3.42,
        3.31,
        3.18,
        3.27,
        3.42,
        3.31,
        3.28,
        3.19,
        3.36
      ],
      "kategori": {
        "Sangat Baik": 164,
        "Baik": 111,
        "Cukup": 13,
        "Kurang": 1
      },
      "kategori_persen": {
        "Sangat Baik": 56.7,
        "Baik": 38.4,
        "Cukup": 4.5,
        "Kurang": 0.3
      }
    },
    {
      "gaya_belajar": "Auditori",
      "jumlah_responden": 145,
      "rata_rata_skor": 3.39,
      "rata_rata_total": 33.93,
      "rata_rata_per_butir": [
        3.54,
        3.45,
        3.35,
        3.28,
        3.29,
        3.53,
        3.46,
        3.3,
        3.3,
        3.43
      ],
      "kategori": {
        "Sangat Baik": 88,
        "Baik": 54,
        "Cukup": 3,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 60.7,
        "Baik": 37.2,
        "Cukup": 2.1,
        "Kurang": 0.0
      }
    },
    {
      "gaya_belajar": "Kinestetik",
      "jumlah_responden": 201,
      "rata_rata_skor": 3.4,
      "rata_rata_total": 33.95,
      "rata_rata_per_butir": [
        3.52,
        3.52,
        3.46,
        3.24,
        3.36,
        3.45,
        3.36,
        3.36,
        3.2,
        3.48
      ],
      "kategori": {
        "Sangat Baik": 125,
        "Baik": 69,
        "Cukup": 7,
        "Kurang": 0
      },
      "kategori_persen": {
        "Sangat Baik": 62.2,
        "Baik": 34.3,
        "Cukup": 3.5,
        "Kurang": 0.0
      }
    }
  ]
}
;

  /* ============================================================
     KONSTANTA WARNA — Sesuai Brand & Desain ENERGIZE (style.css)
     ============================================================ */
  const C = {
    p900: '#0d2818', p800: '#1b4332', p700: '#2d6a4f',
    p600: '#40916c', p500: '#52b788', p400: '#74c69d',
    p300: '#95d5b2', p100: '#d8f3dc',
    a600: '#d97706', a500: '#f59e0b', a400: '#fbbf24', a300: '#fde68a',
    r400: '#f87171', b400: '#60a5fa', b500: '#3b82f6',
  };

  const KAT_COLOR = {
    'Sangat Baik': { bg: C.p500, border: C.p700 },
    'Baik':        { bg: C.a400, border: C.a600 },
    'Cukup':       { bg: C.b400, border: C.b500 },
    'Kurang':      { bg: C.r400, border: '#ef4444' },
  };

  const FONT = { family: "'Plus Jakarta Sans', 'Poppins', sans-serif" };

  /* ============================================================
     FETCH — Mengambil data/data.json saat di-deploy (HTTP/HTTPS)
     dan langsung gunakan DATA_ASLI jika dibuka lokal (file:///)
     ============================================================ */
  function muatData() {
    // Jika dibuka langsung via double-click di laptop (protokol file://)
    if (window.location.protocol === 'file:') {
      console.info('[ENERGIZE] Berjalan di protokol file://. Menggunakan data lokal langsung.');
      renderAll(DATA_ASLI);
      return;
    }

    // Jika berjalan di server / saat di-deploy ke hosting (GitHub Pages, Netlify, Vercel, dll.)
    fetch('data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} — Gagal membaca data/data.json`);
        }
        return response.json();
      })
      .then(data => {
        console.info('[ENERGIZE] Berhasil membaca data/data.json via fetch().');
        renderAll(data);
      })
      .catch(err => {
        console.warn('[ENERGIZE] Fetch gagal, beralih ke data fallback lokal:', err);
        renderAll(DATA_ASLI);
      });
  }

  // Mulai memuat data
  muatData();

  /* ============================================================
     ORCHESTRATOR UTAMA
     ============================================================ */
  function renderAll(data) {
    sembunyikanLoader();
    renderKartuStat(data);
    renderKartuSorotan(data);
    renderGrafikKategori(data);     // Grafik 1 — Donut
    renderGrafikButir(data);        // Grafik 2 — Bar Horizontal
    renderGrafikJurusan(data);      // Grafik 3 — Bar + Line
    renderGrafikSebaran(data);      // Grafik 4 — Bar Distribusi
    initScrollReveal();
    initNavUI();
  }

  /* ============================================================
     KARTU STATISTIK HERO
     ============================================================ */
  function renderKartuStat(data) {
    const m = data.meta;
    const r = data.ringkasan;

    tulis('stat-responden',   m.jumlah_responden.toLocaleString('id-ID'));
    tulis('stat-partisipasi', m.persen_partisipasi + '%');
    tulis('stat-rata',        r.rata_rata_skor.toFixed(2));
    tulis('stat-sering',      r.persen_sering_rata_rata + '%');
    tulis('stat-periode',     `${formatTanggal(m.tanggal_pengisian.awal)} – ${formatTanggal(m.tanggal_pengisian.akhir)}`);
  }

  /* ============================================================
     KARTU SOROTAN (HIGHLIGHT CARDS)
     ============================================================ */
  function renderKartuSorotan(data) {
    const s = data.ringkasan.sorotan;

    if (s.butir_tertinggi && s.butir_tertinggi[0]) {
      const t = s.butir_tertinggi[0];
      tulis('stat-tertinggi', `${t.kode} — ${t.label} (rata-rata ${t.rata_rata})`);
    }

    if (s.butir_terendah && s.butir_terendah[0]) {
      const r = s.butir_terendah[0];
      tulis('stat-terendah', `${r.kode} — ${r.label} (rata-rata ${r.rata_rata}, ${r.persen_jarang}% jarang)`);
    }

    tulis('stat-jurusan-tinggi', s.jurusan_tertinggi || '—');
    tulis('stat-jurusan-rendah', s.jurusan_terendah  || '—');
  }

  /* ============================================================
     GRAFIK 1 — Distribusi Kategori (Doughnut)
     ============================================================ */
  function renderGrafikKategori(data) {
    const r = data.ringkasan;
    const labels = Object.keys(r.kategori);
    const jumlah = labels.map(k => r.kategori[k]);
    const persen = labels.map(k => r.kategori_persen[k]);

    const ctx = document.getElementById('chartKategori');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data: jumlah,
          backgroundColor: labels.map(k => KAT_COLOR[k]?.bg   || '#ccc'),
          borderColor:      labels.map(k => KAT_COLOR[k]?.border || '#aaa'),
          borderWidth: 2,
          hoverOffset: 12,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { ...FONT, size: 13 },
              color: '#132a13',
              padding: 18,
              usePointStyle: true,
              pointStyleWidth: 12,
            }
          },
          tooltip: {
            callbacks: {
              label: ctx => ` ${labels[ctx.dataIndex]}: ${jumlah[ctx.dataIndex]} siswa (${persen[ctx.dataIndex]}%)`
            },
            bodyFont: FONT, titleFont: FONT,
          }
        }
      }
    });
  }

  /* ============================================================
     GRAFIK 2 — Rata-rata per Butir (Bar Horizontal)
     ============================================================ */
  function renderGrafikButir(data) {
    const butir = data.per_butir;
    if (!butir || butir.length === 0) return;

    const labels       = butir.map(b => `${b.kode}: ${b.label}`);
    const rataRata     = butir.map(b => b.rata_rata);
    const persenSering = butir.map(b => b.persen_sering);

    const warna = rataRata.map(v =>
      v >= 3.26 ? C.p500 :
      v >= 2.51 ? C.a400 :
      v >= 1.76 ? C.b400 : C.r400
    );

    const ctx = document.getElementById('chartButir');
    if (!ctx) return;

    ctx.parentElement.style.height = Math.max(420, butir.length * 46) + 'px';

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Rata-rata Skor (skala 1–4)',
          data: rataRata,
          backgroundColor: warna,
          borderColor: warna,
          borderWidth: 0,
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => [
                ` Rata-rata: ${rataRata[ctx.dataIndex]}`,
                ` Sering/Selalu: ${persenSering[ctx.dataIndex]}%`,
              ]
            },
            bodyFont: FONT, titleFont: FONT,
          }
        },
        scales: {
          x: {
            min: 2.8, max: 4.0,
            ticks: { font: FONT, color: '#4a5d4e', callback: v => v.toFixed(1) },
            grid: { color: 'rgba(45,106,79,0.08)' },
            title: { display: true, text: 'Rata-rata Skor (Skala 1–4)', font: { ...FONT, size: 12, weight: '600' }, color: '#4a5d4e' }
          },
          y: {
            ticks: { font: { ...FONT, size: 11.5 }, color: '#132a13' },
            grid: { display: false }
          }
        }
      }
    });
  }

  /* ============================================================
     GRAFIK 3 — Perbandingan per Jurusan (Bar + Line)
     ============================================================ */
  function renderGrafikJurusan(data) {
    const jurusan = data.per_jurusan;
    if (!jurusan || jurusan.length === 0) return;

    const kode      = jurusan.map(j => j.kode);
    const nama      = jurusan.map(j => j.nama);
    const rataRata  = jurusan.map(j => j.rata_rata_skor);
    const rataTotal = jurusan.map(j => j.rata_rata_total);
    const responden = jurusan.map(j => j.jumlah_responden);

    const maxVal = Math.max(...rataRata);
    const minVal = Math.min(...rataRata);
    const warnaBar = rataRata.map(v =>
      v === maxVal ? C.p600 : v === minVal ? C.a500 : C.p400
    );

    const ctx = document.getElementById('chartJurusan');
    if (!ctx) return;

    new Chart(ctx, {
      data: {
        labels: kode,
        datasets: [
          {
            type: 'bar',
            label: 'Rata-rata Skor (1–4)',
            data: rataRata,
            backgroundColor: warnaBar,
            borderColor: warnaBar,
            borderWidth: 0,
            borderRadius: 7,
            borderSkipped: false,
            yAxisID: 'y',
          },
          {
            type: 'line',
            label: 'Jumlah Responden',
            data: responden,
            borderColor: C.a500,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            pointBackgroundColor: C.a500,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3,
            yAxisID: 'y2',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'top', align: 'start',
            labels: { font: { ...FONT, size: 12 }, color: '#132a13', usePointStyle: true, padding: 16 }
          },
          tooltip: {
            callbacks: {
              title: items => `${kode[items[0].dataIndex]} — ${nama[items[0].dataIndex]}`,
              label: ctx => ctx.datasetIndex === 0
                ? [` Rata-rata skor: ${rataRata[ctx.dataIndex]}`, ` Total skor: ${rataTotal[ctx.dataIndex]}`]
                : ` Responden: ${responden[ctx.dataIndex]} siswa`,
            },
            bodyFont: FONT, titleFont: { ...FONT, weight: '700' },
          }
        },
        scales: {
          y: {
            min: 3.0, max: 3.7,
            ticks: { font: FONT, color: '#4a5d4e', callback: v => v.toFixed(2) },
            grid: { color: 'rgba(45,106,79,0.08)' },
            title: { display: true, text: 'Rata-rata Skor (1–4)', font: { ...FONT, size: 12, weight: '600' }, color: '#4a5d4e' },
            position: 'left',
          },
          y2: {
            min: 0,
            ticks: { font: FONT, color: C.a600 },
            grid: { display: false },
            title: { display: true, text: 'Jumlah Responden', font: { ...FONT, size: 12, weight: '600' }, color: C.a600 },
            position: 'right',
          },
          x: {
            ticks: { font: { ...FONT, size: 12 }, color: '#132a13' },
            grid: { display: false }
          }
        }
      }
    });
  }

  /* ============================================================
     GRAFIK 4 — Sebaran Skor Total (Bar Distribusi)
     ============================================================ */
  function renderGrafikSebaran(data) {
    const sebaran = data.sebaran_skor_total;
    if (!sebaran || sebaran.length === 0) return;

    const labels = sebaran.map(s => s.skor_total);
    const jumlah = sebaran.map(s => s.jumlah);

    const warna = labels.map(skor =>
      skor <= 17 ? C.r400 :
      skor <= 25 ? C.b400 :
      skor <= 32 ? C.a400 : C.p500
    );

    const ctx = document.getElementById('chartSebaran');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Jumlah Siswa',
          data: jumlah,
          backgroundColor: warna,
          borderColor: warna,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: items => `Skor Total: ${items[0].label}`,
              label: ctx => ` Jumlah: ${ctx.raw} siswa`,
              afterLabel: ctx => {
                const s = Number(ctx.label);
                if (s <= 17) return ' Kategori: Kurang';
                if (s <= 25) return ' Kategori: Cukup';
                if (s <= 32) return ' Kategori: Baik';
                return ' Kategori: Sangat Baik';
              }
            },
            bodyFont: FONT, titleFont: FONT,
          }
        },
        scales: {
          x: {
            ticks: { font: { ...FONT, size: 11 }, color: '#4a5d4e' },
            grid: { display: false },
            title: { display: true, text: 'Skor Total (10–40)', font: { ...FONT, size: 12, weight: '600' }, color: '#4a5d4e' }
          },
          y: {
            ticks: { font: FONT, color: '#4a5d4e' },
            grid: { color: 'rgba(45,106,79,0.08)' },
            title: { display: true, text: 'Jumlah Siswa', font: { ...FONT, size: 12, weight: '600' }, color: '#4a5d4e' }
          }
        }
      }
    });
  }

  /* ============================================================
     UI HELPERS
     ============================================================ */
  function tulis(id, teks) {
    const el = document.getElementById(id);
    if (el) el.textContent = teks;
  }

  function formatTanggal(str) {
    if (!str) return '—';
    try {
      return new Date(str).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch { return str; }
  }

  function sembunyikanLoader() {
    const loader = document.getElementById('dataLoader');
    const konten = document.getElementById('dataContent');
    if (loader) loader.style.display = 'none';
    if (konten) { konten.style.display = 'block'; konten.style.visibility = 'visible'; }
  }

  function initScrollReveal() {
    const els = document.querySelectorAll('.fade-in-up');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); o.unobserve(e.target); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      els.forEach(el => obs.observe(el));
    } else {
      els.forEach(el => el.classList.add('revealed'));
    }
  }

  /* ============================================================
     STICKY HEADER + BACK TO TOP + MOBILE MENU + MODAL
     ============================================================ */
  function initNavUI() {
    const header    = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTop');
    const toggle    = document.getElementById('mobileToggle');
    const navMenu   = document.getElementById('navMenu');

    window.addEventListener('scroll', () => {
      const sp = window.scrollY;
      if (header) header.classList.toggle('scrolled', sp > 30);
      if (backToTop) backToTop.classList.toggle('visible', sp > 400);
    });

    if (backToTop) {
      backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    if (toggle && navMenu) {
      toggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        toggle.classList.toggle('active');
        toggle.setAttribute('aria-expanded', open);
      });
      document.addEventListener('click', e => {
        if (!navMenu.contains(e.target) && !toggle.contains(e.target) && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Modal Fase 3
    const modal    = document.getElementById('teaserModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const okBtn    = document.getElementById('modalOkBtn');
    const titleEl  = document.getElementById('modalTitle');
    const descEl   = document.getElementById('modalDesc');
    const badgeEl  = document.getElementById('modalPhaseBadge');

    function bukaModal(fase, judul, deskripsi) {
      if (!modal) return;
      if (badgeEl) badgeEl.textContent = fase;
      if (titleEl) titleEl.textContent = judul;
      if (descEl)  descEl.textContent  = deskripsi;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function tutupModal() {
      if (!modal) return;
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', tutupModal);
    if (okBtn)    okBtn.addEventListener('click', tutupModal);
    if (modal)    modal.addEventListener('click', e => { if (e.target === modal) tutupModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') tutupModal(); });

    document.querySelectorAll('.trigger-aksi').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        bukaModal(
          'Fase 3 • Segera Hadir',
          'Aksi Nyata & Rekomendasi',
          'Fitur interaktif Aksi dan Rekomendasi Hemat Energi akan diluncurkan pada Fase 3. Warga sekolah nantinya dapat berpartisipasi langsung dalam tantangan hemat energi, checklist kelas hijau, dan pledge konservasi.'
        );
      });
    });
  }

}); // END DOMContentLoaded