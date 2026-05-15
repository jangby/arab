import { Chapter, SentenceTask } from './types';

export const allSentences: SentenceTask[] = [
  { arabic: ["أَنَا", "تَعْبٌ"], indonesian: "Saya capek" },
  { arabic: ["هُوَ", "تَعْبٌ"], indonesian: "Dia capek" },
  { arabic: ["هُوَ", "مَشْغُوْلٌ"], indonesian: "Dia sibuk" },
  { arabic: ["هِيَ", "عَالِمَةٌ", "وَصَابِرَةٌ"], indonesian: "Dia berilmu dan sabar" },
  { arabic: ["أَنْتَ", "جَمِيْلٌ", "جِدًّا"], indonesian: "Kamu ganteng sekali" },
  { arabic: ["أَنْتِ", "نَشِيْطَةٌ", "جِدًّا"], indonesian: "Kamu rajin sekali" },
  { arabic: ["نَحْنُ", "عَالِمُوْنَ"], indonesian: "Kami orang-orang berilmu" },
  { arabic: ["الْبَيْتُ", "كَبِيْرٌ"], indonesian: "Rumah itu besar" },
  { arabic: ["الْعِلْمُ", "نُوْرٌ"], indonesian: "Ilmu adalah cahaya" },
  { arabic: ["الْجَبَلُ", "عَلِيٌّ"], indonesian: "Gunung itu tinggi" },
  { arabic: ["الْقَرْيَةُ", "مَشْهُوْرَةٌ"], indonesian: "Desa itu terkenal" },
  { arabic: ["الْمَسْجِدُ", "نَظِيْفٌ"], indonesian: "Masjid itu bersih" },
  { arabic: ["الْبَحْرُ", "وَاسِعٌ", "وَطَوِيْلٌ"], indonesian: "Laut itu luas dan panjang" },
  { arabic: ["هَذَا", "مُدَرِّسٌ"], indonesian: "Ini guru" },
  { arabic: ["هَذِهِ", "مِسْطَرَةٌ"], indonesian: "Ini penggaris" },
  { arabic: ["هَذَانِ", "بَيْتَانِ"], indonesian: "Ini dua rumah" },
  { arabic: ["هَؤُلَاءِ", "مُسْلِمُوْنَ"], indonesian: "Ini orang-orang muslim" },
  { arabic: ["ذَلِكَ", "مُسْلِمٌ"], indonesian: "Itu seorang muslim" },
  { arabic: ["أُولَئِكَ", "رِجَالٌ"], indonesian: "Itu laki-laki" },
  { arabic: ["تِلْكَ", "سَبُّوْرَةٌ"], indonesian: "Itu papan tulis" },
  { arabic: ["ذَلِكَ", "مُوَظَّفٌ"], indonesian: "Itu pegawai" },
  { arabic: ["هُوَ", "جَلَسَ", "فِي", "الْبَيْتِ"], indonesian: "Dia duduk di rumah" },
  { arabic: ["هِيَ", "جَلَسَتْ", "فِي", "الْبَيْتِ"], indonesian: "Dia duduk di rumah (pr)" },
  { arabic: ["أَنَا", "ذَهَبْتُ", "إِلَى", "جَاكَرْتَا"], indonesian: "Saya pergi ke Jakarta" },
  { arabic: ["أَنْتَ", "خَرَجْتَ", "مِنَ", "الْمَعْهَدِ"], indonesian: "Kamu keluar dari pesantren" },
  { arabic: ["هُوَ", "يَجْلِسُ", "فِي", "الْمَسْجِدِ"], indonesian: "Dia sedang duduk di masjid" },
  { arabic: ["هِيَ", "تَجْلِسُ", "فِي", "الْمَسْجِدِ"], indonesian: "Dia sedang duduk di masjid (pr)" },
  { arabic: ["أَنَا", "أَجْلِسُ", "فِي", "الْمَسْجِدِ"], indonesian: "Saya sedang duduk di masjid" },
  { arabic: ["أَنْتُمْ", "تَضْحَكُوْنَ", "فِي", "هَذَا", "الْمَكَانِ"], indonesian: "Kalian tertawa di tempat ini" },
  { arabic: ["نَحْنُ", "نَجْلِسُ", "فِي", "الْمَسْجِدِ"], indonesian: "Kami sedang duduk di masjid" },
  { arabic: ["أَنَا", "مَشْغُوْلٌ", "وَهُوَ", "مَشْغُوْلٌ"], indonesian: "Saya sibuk dan dia sibuk" },
  { arabic: ["أَنَا", "أَتَعَلَّمُ", "الْعَرَبِيَّةَ"], indonesian: "Saya belajar Bahasa Arab" },
  { arabic: ["هُوَ", "يَتَعَلَّمُ", "الْعَرَبِيَّةَ"], indonesian: "Dia belajar Bahasa Arab" },
  { arabic: ["لَدَيَّ", "كِتَابٌ", "جَدِيْدٌ"], indonesian: "Saya punya buku baru" },
  { arabic: ["هُوَ", "لَدَيْهِ", "كِتَابٌ", "جَدِيْدٌ"], indonesian: "Dia punya buku baru" },
  { arabic: ["أَنَا", "أَسْكُنُ", "فِي", "الرِّيْفِ"], indonesian: "Saya tinggal di desa" },
  { arabic: ["هُوَ", "يَسْكُنُ", "فِي", "الرِّيْفِ"], indonesian: "Dia tinggal di desa" },
  { arabic: ["سَوْفَ", "أَرَاكَ", "غَدًا"], indonesian: "Saya akan melihatmu besok" },
  { arabic: ["أَنَا", "أَسْتَطِيْعُ", "أَنْ", "أَفْهَمَكَ"], indonesian: "Saya bisa memahamimu" },
  { arabic: ["يَجِبُ", "أَنْ", "أَكْتُبَ", "رِسَالَةً"], indonesian: "Harus menulis surat" },
  { arabic: ["يُمْكِنُ", "أَنَا", "أَنْ", "أَحْضُرَ"], indonesian: "Mungkin saya akan datang" },
  { arabic: ["هُوَ", "قَامَ", "بِعَمَلٍ", "كَثِيْرٍ"], indonesian: "Dia melakukan banyak pekerjaan" },
  { arabic: ["أَنَا", "لَعِبْتُ", "كُرَةَ", "الْقَدَمِ"], indonesian: "Saya bermain sepak bola" },
  { arabic: ["اشْتَرَيْتُ", "سَيَّارَةً", "جَدِيْدَةً"], indonesian: "Saya membeli mobil baru" },
  { arabic: ["هُوَ", "ذَهَبَ", "إِلَى", "السِّيْنَمَا"], indonesian: "Dia pergi ke bioskop" },
  { arabic: ["الطَّقْسُ", "رَطْبٌ", "الْيَوْمَ"], indonesian: "Cuaca lembap hari ini" },
  { arabic: ["هَذَا", "الِاخْتِبَارُ", "سَهْلٌ"], indonesian: "Ujian ini mudah" },
  { arabic: ["هَذَا", "كِتَابٌ", "غَالٍ"], indonesian: "Ini buku mahal" },
  { arabic: ["الطَّائِرَةُ", "تَطِيْرُ", "فَوْقَ", "الْقَرْيَةِ"], indonesian: "Pesawat terbang di atas desa" },
  { arabic: ["الْوَلَدُ", "يَقْفِزُ", "مِنَ", "الشَّجَرَةِ"], indonesian: "Anak itu melompat dari pohon" },
];

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "BAB 1: Dhomir & Mufrodat Dasar",
    description: "Belajar kata ganti orang dan kosakata umum (Sifat, Benda, Kerja).",
    pronouns: [
      { arabic: "هُوَ", indonesian: "Dia (Laki-laki)" },
      { arabic: "هُمَا", indonesian: "Mereka Berdua" },
      { arabic: "هُمْ", indonesian: "Mereka (Laki-laki)" },
      { arabic: "هِيَ", indonesian: "Dia (Perempuan)" },
      { arabic: "أَنْتَ", indonesian: "Kamu (Laki-laki)" },
      { arabic: "أَنْتِ", indonesian: "Kamu (Perempuan)" },
      { arabic: "أَنَا", indonesian: "Saya" },
      { arabic: "نَحْنُ", indonesian: "Kami/Kita" },
    ],
    mufrodat: [
      { arabic: "تَعْبٌ", indonesian: "Capek", type: "sifat" },
      { arabic: "مَرِيْضٌ", indonesian: "Sakit", type: "sifat" },
      { arabic: "فَرِحٌ", indonesian: "Gembira", type: "sifat" },
      { arabic: "مَشْغُوْلٌ", indonesian: "Sibuk", type: "sifat" },
      { arabic: "فَخُوْرٌ", indonesian: "Bangga", type: "sifat" },
      { arabic: "أُسْتَاذٌ", indonesian: "Guru", type: "benda" },
      { arabic: "طَبِيْبٌ", indonesian: "Dokter", type: "benda" },
      { arabic: "فَلَّاحٌ", indonesian: "Petani", type: "benda" },
      { arabic: "تَجَّارٌ", indonesian: "Pedagang", type: "benda" },
      { arabic: "جَلَسَ", indonesian: "Duduk", type: "kerja" },
      { arabic: "ذَهَبَ", indonesian: "Pergi", type: "kerja" },
      { arabic: "قَامَ", indonesian: "Berdiri", type: "kerja" },
      { arabic: "نَظَرَ", indonesian: "Melihat", type: "kerja" },
      { arabic: "كَتَبَ", indonesian: "Menulis", type: "kerja" },
    ]
  },
  {
    id: 2,
    title: "BAB 2: Alam & Aktivitas Berpikir",
    description: "Kosakata tentang langit, matahari, dan kata kerja kognitif.",
    mufrodat: [
      { arabic: "هَامٌّ", indonesian: "Penting", type: "sifat" },
      { arabic: "مُتَرَدِّدٌ", indonesian: "Bingung", type: "sifat" },
      { arabic: "خَفِيْفٌ", indonesian: "Ringan", type: "sifat" },
      { arabic: "ثَقِيْلٌ", indonesian: "Berat", type: "sifat" },
      { arabic: "خَوْفٌ", indonesian: "Takut", type: "sifat" },
      { arabic: "سَمَاءٌ", indonesian: "Langit", type: "benda" },
      { arabic: "شَمْسٌ", indonesian: "Matahari", type: "benda" },
      { arabic: "قَمَرٌ", indonesian: "Bulan", type: "benda" },
      { arabic: "نَجْمٌ", indonesian: "Bintang", type: "benda" },
      { arabic: "سَحَابٌ", indonesian: "Awan", type: "benda" },
      { arabic: "قَالَ", indonesian: "Berkata", type: "kerja" },
      { arabic: "سَمِعَ", indonesian: "Mendengar", type: "kerja" },
      { arabic: "سَكَتَ", indonesian: "Diam", type: "kerja" },
      { arabic: "ذَكَرَ", indonesian: "Mengingat", type: "kerja" },
      { arabic: "تَفَكَّرَ", indonesian: "Berpikir", type: "kerja" },
    ]
  },
  {
    id: 3,
    title: "BAB 3: Rasa & Tanaman",
    description: "Belajar kosakata tentang rasa makanan dan anatomi tumbuhan.",
    mufrodat: [
      { arabic: "حُلْوٌ", indonesian: "Manis", type: "sifat" },
      { arabic: "مُرٌّ", indonesian: "Pahit", type: "sifat" },
      { arabic: "مَالِحٌ", indonesian: "Asin", type: "sifat" },
      { arabic: "حَمِضٌ", indonesian: "Asam", type: "sifat" },
      { arabic: "عَذْبٌ", indonesian: "Tawar", type: "sifat" },
      { arabic: "شَجَرَةٌ", indonesian: "Pohon", type: "benda" },
      { arabic: "وَرَقٌ", indonesian: "Daun", type: "benda" },
      { arabic: "غُصْنٌ", indonesian: "Dahan", type: "benda" },
      { arabic: "زَهْرَةٌ", indonesian: "Bunga", type: "benda" },
      { arabic: "ثَمَرَةٌ", indonesian: "Buah", type: "benda" },
      { arabic: "نَسِيَ", indonesian: "Lupa", type: "kerja" },
      { arabic: "حَفِظَ", indonesian: "Menghafal", type: "kerja" },
      { arabic: "فَهِمَ", indonesian: "Mengerti", type: "kerja" },
      { arabic: "قَرَأَ", indonesian: "Membaca", type: "kerja" },
      { arabic: "تَخَيَّلَ", indonesian: "Melamun", type: "kerja" },
    ]
  },
  {
    id: 4,
    title: "BAB 4: Mubtada' & Khobar",
    description: "Memahami struktur kalimat dasar (Nominal Sentence).",
    mufrodat: [
      { arabic: "قَلَمٌ", indonesian: "Pena", type: "benda" },
      { arabic: "كِتَابٌ", indonesian: "Buku", type: "benda" },
      { arabic: "طَوِيْلٌ", indonesian: "Panjang", type: "sifat" },
      { arabic: "قَصِيْرٌ", indonesian: "Pendek", type: "sifat" },
    ],
    sentences: [
      { arabic: ["الْكِتَابُ", "نَافِعٌ"], indonesian: "Buku itu bermanfaat" },
      { arabic: ["الْمَدْرَسَةُ", "كَبِيْرَةٌ"], indonesian: "Sekolah itu besar" },
      { arabic: ["أَنَا", "طَالِبٌ"], indonesian: "Saya seorang siswa" },
    ],
    materials: [
      {
        title: "Konsep Dasar Mubtada' dan Khobar",
        content: "Kalimat dalam bahasa Arab yang diawali dengan Isim disebut Jumlah Ismiyah. Struktur utamanya adalah Mubtada' dan Khobar.\n\n1. Mubtada' (Subjek):\n- Harus berupa Isim yang di-Rofa'-kan (biasanya dhommah).\n- Terletak di awal kalimat.\n- Harus bersifat MA'RIFAT (Diberi Alif Lam 'AL' atau nama orang).\n\n2. Khobar (Predikat):\n- Isim yang menyempurnakan makna Mubtada'.\n- Harus di-Rofa'-kan juga.\n- Biasanya bersifat NAKIRAH (Tanwin, tanpa AL).\n\nContoh: الْبَيْتُ نَظِيْفٌ (Rumah itu bersih)."
      },
      {
        title: "Kaidah Persesuaian (Mutabaqoh)",
        content: "Mubtada' dan Khobar HARUS sesuai dalam dua hal:\n\nA. Jenis (Gender):\n- Jika Mubtada' Mudzakkar (Laki-laki), maka Khobar harus Mudzakkar.\n- Jika Mubtada' Muannats (Perempuan), maka Khobar harus Muannats (biasanya ada Ta' Marbuthoh ة).\nContoh: زَيْدٌ قَائِمٌ (Zaid berdiri) VS هِنْدٌ قَائِمَةٌ (Hindun berdiri).\n\nB. Bilangan (Number):\n- Tunggal (Mufrod) -> Khobar Tunggal.\n- Dua (Tasniyah) -> Khobar Dua.\n- Jamak -> Khobar Jamak.\n\nPengecualian: Jika Mubtada' berupa Jamak Lighoiril 'Aqil (Benda mati/hewan), maka Khobarnya dihukumi Muannats Mufrod (Perempuan tunggal). \nContoh: الْكُتُبُ جَدِيْدَةٌ (Buku-buku itu baru)."
      }
    ]
  },
  {
    id: 5,
    title: "BAB 5: Amil Nawasikh",
    description: "Mengenal 'pengganggu' yang mengubah hukum Mubtada' & Khobar.",
    mufrodat: [
      { arabic: "كَانَ", indonesian: "Adalah (Dulu)", type: "huruf" },
      { arabic: "إِنَّ", indonesian: "Sesungguhnya", type: "huruf" },
      { arabic: "لَيْسَ", indonesian: "Bukan", type: "huruf" },
    ],
    sentences: [
      { arabic: ["كَانَ", "الْوَلَدُ", "نَائِمًا"], indonesian: "Anak itu (tadi/dulu) tidur" },
      { arabic: ["إِنَّ", "اللهَ", "عَلِيْمٌ"], indonesian: "Sesungguhnya Allah Maha Mengetahui" },
      { arabic: ["لَيْسَ", "الْفَقْرُ", "عَيْبًا"], indonesian: "Kemiskinan bukanlah aib" },
    ],
    materials: [
      {
        title: "Amil Nawasikh: Perubah Hukum Dasar",
        content: "Dalam kondisi normal, Mubtada' dan Khobar keduanya Rofa'. Namun, ada kata-ukuran (Amil) yang masuk dan mengubah harakat mereka. Dua yang paling utama adalah KAANA dan INNA."
      },
      {
        title: "1. Kaana wa Akhwatuha (Saudara-saudara Kaana)",
        content: "Fungsi: تَرْفَعُ الاِسْمَ وَتَنْصِبُ الْخَبَرَ (Merofakan Isim dan Menashobkan Khobar).\n\n- Isim (Subjek) tetap berharakat Dhommah.\n- Khobar (Predikat) berubah menjadi Fathah.\n\nContoh:\nNormal: زَيْدٌ مَرِيْضٌ (Zaid sakit).\nKemasukan Kaana: كَانَ زَيْدٌ مَرِيْضًا (Dulu Zaid sakit).\n\nAnggota Penting:\n- كَانَ (Keterangan waktu lampau)\n- صَارَ (Menjadi)\n- لَيْسَ (Bukan/Tidak)\n- مَازَالَ (Senantiasa)"
      },
      {
        title: "2. Inna wa Akhwatuha (Saudara-saudara Inna)",
        content: "Fungsi: تَنْصِبُ الاِسْمَ وَتَرْفَعُ الْخَبَرَ (Menashobkan Isim dan Merofakan Khobar).\n\n- Isim (Subjek) berubah menjadi Fathah.\n- Khobar (Predikat) tetap berharakat Dhommah.\n\nContoh:\nNormal: اللهُ غَفُوْرٌ (Allah Maha Pengampun).\nKemasukan Inna: إِنَّ اللهَ غَفُوْرٌ (Sesungguhnya Allah Maha Pengampun).\n\nAnggota Penting:\n- إِنَّ (Sesungguhnya)\n- لَعَلَّ (Semoga/Harapannya)\n- لَيْتَ (Seandainya - untuk hal mustahil)\n- لَكِنَّ (Akan tetapi)"
      }
    ]
  },
  {
    id: 6,
    title: "BAB 6: Fi'il & Fa'il (Verbal Sentence)",
    description: "Belajar kalimat yang diawali dengan kata kerja.",
    mufrodat: [
      { arabic: "ذَهَبَ", indonesian: "Pergi", type: "kerja" },
      { arabic: "أَكَلَ", indonesian: "Makan", type: "kerja" },
      { arabic: "شَرِبَ", indonesian: "Minum", type: "kerja" },
      { arabic: "الْوَلَدُ", indonesian: "Anak", type: "benda" },
    ],
    sentences: [
      { arabic: ["ذَهَبَ", "الْمُدَرِّسُ", "إِلَى", "الْفَصْلِ"], indonesian: "Guru itu pergi ke kelas" },
      { arabic: ["أَكَلَ", "مُحَمَّدٌ", "تُفَّاحَةً"], indonesian: "Muhammad makan apel" },
      { arabic: ["يَجْلِسُ", "الطَّالِبُ", "عَلَى", "الْكُرْسِيِّ"], indonesian: "Siswa itu duduk di atas kursi" },
    ],
    materials: [
      {
        title: "Jumlah Fi'liyah (Kalimat Verbal)",
        content: "Setiap kalimat yang dimulai dengan Fi'il (Kata Kerja) disebut Jumlah Fi'liyah. Komponen wajibnya adalah Fi'il dan Fa'il.\n\n1. Fi'il (Kata Kerja):\n- Madhi (Lampau): Terikat waktu yang sudah lewat.\n- Mudhori' (Sekarang/Akan): Terikat waktu yang sedang atau akan terjadi.\n- Amr (Perintah): Tuntutan untuk melakukan sesuatu."
      },
      {
        title: "Fa'il: Sang Pelaku",
        content: "Fa'il adalah Isim yang terletak setelah Fi'il dan berfungsi sebagai pelaku perbuatan.\n\nKaidah Fa'il:\n1. Harus Rofa' (Dhommah).\n2. Terletak sesudah Fi'il (Tidak boleh mendahului).\n3. Persesuaian Jenis: Jika Fa'il Muannats, maka Fi'il harus ditambahi tanda Muannats (Ta' mati untuk Madhi, Ta' di depan untuk Mudhori').\nContoh: ذَهَبَ زَيْدٌ (Zaid pergi) VS ذَهَبَتْ هِنْدٌ (Hindun pergi).\n\nCatatan Penting: Meskipun Fa'il-nya Jamak (banyak), Fi'il di awal kalimat tetap dalam bentuk tunggal (Mufrod).\nContoh: قَامَ الرِّجَالُ (Laki-laki itu berdiri). 'Qooma' tetap Mufrod walaupun 'Ar-Rijaalu' Jamak."
      },
      {
        title: "Maf'ul Bih (Objek)",
        content: "Seringkali kalimat membutuhkan objek (Maf'ul Bih). Maf'ul Bih harus dibaca NASHOB (Fathah).\n\nContoh: شَرِبَ الْوَلَدُ اللَّبَنَ (Anak itu minum susu). 'Al-Labana' adalah Maf'ul Bih maka harakatnya Fathah."
      }
    ]
  },
  {
    id: 7,
    title: "BAB 7: Amil Jazm & Nashob",
    description: "Amil yang mengubah harakat akhir pada Fi'il Mudhori'.",
    mufrodat: [
      { arabic: "لَمْ", indonesian: "Tidak (Lampau)", type: "huruf" },
      { arabic: "لَنْ", indonesian: "Tidak akan", type: "huruf" },
      { arabic: "أَنْ", indonesian: "Bahwa", type: "huruf" },
    ],
    sentences: [
      { arabic: ["أُرِيْدُ", "أَنْ", "أَذْهَبَ"], indonesian: "Saya ingin pergi" },
      { arabic: ["لَمْ", "يَكْتُبْ", "زَيْدٌ", "الدَّرْسَ"], indonesian: "Zaid tidak menulis pelajaran" },
      { arabic: ["لَنْ", "تَنَالُوا", "الْبِرَّ"], indonesian: "Kalian tidak akan mencapai kebajikan" },
    ],
    materials: [
      {
        title: "Status Fi'il Mudhori'",
        content: "Fi'il Mudhori' secara dasar adalah Marfu' (Dhommah). Namun status ini bisa berubah jika dimasuki Amil (Kata Pendahulu):\n- MANSUB (Fathah)\n- MAJZUM (Sukun/Hilang hurufnya)"
      },
      {
        title: "Amil Nashob (Pemicu Fathah)",
        content: "Huruf-huruf ini membuat akhir fi'il menjadi fathah:\n1. أَنْ (Bahwa): Sering terletak di antara dua kata kerja.\n2. لَنْ (Tidak akan): Menafikan masa depan.\n3. كَيْ (Supaya).\n4. لِـ (Untuk).\n\nContoh: لَنْ أَكْذِبَ (Aku tidak akan berbohong)."
      },
      {
        title: "Amil Jazm (Pemicu Sukun)",
        content: "Huruf-huruf ini membuat akhir fi'il menjadi sukun:\n1. لَمْ (Tidak): Mengubah makna mudhori menjadi lampau.\n2. لَا (Larangan): JANGAN!\n3. لِـ (Perintah): Hendaknya.\n\nContoh: لَمْ يَلِدْ وَلَمْ يُولَدْ (Dia tidak beranak dan tidak diperanakkan)."
      }
    ]
  }
];
