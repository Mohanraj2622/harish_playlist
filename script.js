document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "A-Love_Blossoms",
    artist: "Harris",
    url: "A-Love-Blossoms-Instrumental.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "A-Square-B-Square",
    artist: "Harris",
    url: "A-Square-B-Square-(Female-Version)-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aagaaya-Neelangalil",
    artist: "Harris",
    url: "Aagaaya-Neelangalil-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aagaya-Suriya",
    artist: "Harris",
    url: "Aagaya-Suriyanai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aakaasam Nee Haddhu",
    artist: "Harris",
    url: "Aakaasam Nee Haddhu Ra.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Aaradi-Kathe",
    artist: "Harris",
    url: "Aaradi-Kathe-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  // 3 list
  {
    title: "Adhaaru-Adhaaru",
    artist: "Harris",
    url: "Adhaaru-Adhaaru.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Adiyae-Kolluthey",
    artist: "Harris",
    url: "Adiyae-Kolluthey-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Akkam-Pakkam",
    artist: "Harris",
    url: "Akkam-Pakkam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Alaikaa-Laikaa",
    artist: "Harris",
    url: "Alaikaa-Laikaa-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  // 4 list
  {
    title: "Alaipayauthey-Kanna",
    artist: "Harris",
    url: "Alaipayuthey-Kanna.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Amara",
    artist: "Harris",
    url: "Amara.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anbe-Anbe",
    artist: "Harris",
    url: "Anbe-Anbe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anbe-En-Anbe",
    artist: "Harris",
    url: "Anbe-En-Anbe-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Andangkaka",
    artist: "Harris",
    url: "Andangkaka.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Annul-Maelae",
    artist: "Harris",
    url: "Annul-Maelae-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  //5 list
  {
    title: "Antartica",
    artist: "Harris",
    url: "Antartica-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Appappa",
    artist: "Harris",
    url: "Appappa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Asku-Laska",
    artist: "Harris",
    url: "Asku-Laska-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ava-Enna-Enna",
    artist: "Harris",
    url: "Ava-Enna-Enna-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Avalum-Naanum",
    artist: "Harris",
    url: "Avalum-Naanum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  // 6 list
  {
    title: "Ayyayo-Nenju",
    artist: "Harris",
    url: "Ayyayo-Nenju.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Azhagiya-Theeye",
    artist: "Harris",
    url: "Azhagiya-Theeye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Bathing-At-Cannes",
    artist: "Harris",
    url: "Bathing-At-Cannes.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaadhal-Yaanai",
    artist: "Harris",
    url: "Kaadhal-Yaanai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaala-Kaala",
    artist: "Harris",
    url: "Kaala-Kaala.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaatuka Kanule",
    artist: "Harris",
    url: "Kaatuka Kanule.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chikku-Bukku",
    artist: "Harris",
    url: "Chikku-Bukku-Chikku-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chillanjiukkiye",
    artist: "Harris",
    url: "Chillanjirukkiye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Damakku-Damakku",
    artist: "Harris",
    url: "Damakku-Damakku-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  // 2 list
  {
    title: "Aararo",
    artist: "Harris",
    url: "Aararo.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aarumuga-Saamy",
    artist: "Harris",
    url: "Aarumuga-Saamy.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aasa Orave",
    artist: "Harris",
    url: "Aasa Orave.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aathagara-Orathil",
    artist: "Harris",
    url: "Aathangara-Orathil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Dama Goli",
    artist: "Harris",
    url: "Damma Goli.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Dhimu Dhimu",
    artist: "Harris",
    url: "Dhimu-Dhimu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Dhinam Dhinamum",
    artist: "Harris",
    url: "Dhinam Dhinamum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ellu Vaya Pookalaye",
    artist: "Harris",
    url: "Ellu-Vaya-Pookalaye-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En-Anbe",
    artist: "Harris",
    url: "En-Anbe-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En Friends-pola",
    artist: "Harris",
    url: "En-Frienda-Pola-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Engeyum-Kaadhal",
    artist: "Harris",
    url: "Engeyum-Kaadhal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Eppo-Nee",
    artist: "Harris",
    url: "Eppo-Nee.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Fear",
    artist: "Harris",
    url: "Fear Song.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Google-Google",
    artist: "Harris",
    url: "Google-Google-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Gutkha Lakkadi",
    artist: "Harris",
    url: "Gutkha-Lakkadi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hasili-Fisilye",
    artist: "Harris",
    url: "Hasili-Fisiliye-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Heartiley-Battery",
    artist: "Harris",
    url: "Heartiley-Battery-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hey Minnale",
    artist: "Harris",
    url: "Hey Minnale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "His Name is John",
    artist: "Harris",
    url: "His Name is John.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "horu Gali",
    artist: "Harris",
    url: "Horu Gali.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En-Vannilave",
    artist: "Harris",
    url: "En-Vennilave.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enakku-Thaan",
    artist: "Harris",
    url: "Enakku-Thaan-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Endhira Logathu",
    artist: "Harris",
    url: "Endhira-Logathu-Sundhariye-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hunter Vantaar",
    artist: "Harris",
    url: "Hunter Vantaar.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Idhu-Naal",
    artist: "Harris",
    url: "Idhu-Naal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Idhuthaanaa",
    artist: "Harris",
    url: "Idhuthaanaa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "InnumEnna-Thozha",
    artist: "Harris",
    url: "Innum-Enna-Thozha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "iru-Vizhi",
    artist: "Harris",
    url: "Iru-Vizhi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Irukkana-Idupu-Irukkana",
    artist: "Harris",
    url: "Irukkana-Idupu-Irukkana-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Iyengaaru-Veetu-Azhage",
    artist: "Harris",
    url: "Iyengaaru-Veetu-Azhage.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "June-Pona",
    artist: "Harris",
    url: "June-Pona.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaadhal-kanmani",
    artist: "Harris",
    url: "Kaadhal-Kanmani-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "kalyaanam-Thaan-Kattikittu",
    artist: "Harris",
    url: "Kalyaanam-Thaan-Kattikittu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kambikara-Vetti",
    artist: "Harris",
    url: "Kambikara-Vetti.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kanave",
    artist: "Harris",
    url: "Kanave.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kanavellam",
    artist: "Harris",
    url: "Kanavellam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannadi-Nilave",
    artist: "Harris",
    url: "Kannadi-Nilave-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "kannazhagu-Rathiname",
    artist: "Harris",
    url: "Kannazhagu-Rathiname-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kanneer-Thuliye",
    artist: "Harris",
    url: "Kanneer-Thuliye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannum-Kannum-Nokia",
    artist: "Harris",
    url: "Kannum-Kannum-Nokia.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannum-Kannum_Plus",
    artist: "Harris",
    url: "Kannum-Kannum-Plus-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Karu-Karu",
    artist: "Harris",
    url: "Karu-Karu-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Karuppu-Nerathazhagi",
    artist: "Harris",
    url: "Karuppu-Nerathazhagi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kathari-Poovazhagi",
    artist: "Harris",
    url: "Kathari-Poovazhagi-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kavan",
    artist: "Harris",
    url: "Kavan-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kummiyadi-Penne",
    artist: "Harris",
    url: "Kummiyadi-Penne-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kutti-pisase",
    artist: "Harris",
    url: "Kutti-Pisase.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kutti-Puli-Kootam",
    artist: "Harris",
    url: "Kutti-Puli-Kootam-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Life-Of-Bachelor",
    artist: "Harris",
    url: "Life-Of-Bachelor-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Lolita",
    artist: "Harris",
    url: "Lolita.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Lubber Pandhu",
    artist: "Harris",
    url: "Lubber Pandhu Theme.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maddy-Maddy",
    artist: "Harris",
    url: "Maddy-Maddy.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Maja-Wedding",
    artist: "Harris",
    url: "Maja-Wedding-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Makkamishi",
    artist: "Harris",
    url: "Makkamishi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Manasilaayo",
    artist: "Harris",
    url: "Manasilaayo.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Manjal-Veiyil",
    artist: "Harris",
    url: "Manjal-Veiyil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mazhai Mazhai",
    artist: "Harris",
    url: "Mazhai Mazhai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mella-Velanjadhu",
    artist: "Harris",
    url: "Mella-Valanjadhu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  // continue for title
  {
    title: "Miss-You-Baby",
    artist: "Harris",
    url: "Miss-You-Baby-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Moongil-Kaadugale",
    artist: "Harris",
    url: "Moongil-Kaadugale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mun-Andhi",
    artist: "Harris",
    url: "Mun-Andhi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mundhinam-Parhene",
    artist: "Harris",
    url: "Mundhinam-Parthene-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "my-Dear-Loveru",
    artist: "Harris",
    url: "My-Dear-Loveru-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "My-Dear-Pondatti",
    artist: "Harris",
    url: "My-Dear-Pondatti-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nalla-Nanban",
    artist: "Harris",
    url: "Nalla-Nanban-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naggai",
    artist: "Harris",
    url: "Nangaai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenjai-Poopol",
    artist: "Harris",
    url: "Nenjai-Poopol.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenjellam-Nindrayee",
    artist: "Harris",
    url: "Nenjellam-Nindrayae-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenjil-Nenjil",
    artist: "Harris",
    url: "Nenjil-Nenjil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenjodu-Nee-(Female)",
    artist: "Harris",
    url: "Nenjodu-Nee-(Female)-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nerupae",
    artist: "Harris",
    url: "Nerupae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Noorandhu-Kathale",
    artist: "Harris",
    url: "Noorandu-Kathale-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh Maname",
    artist: "Harris",
    url: "Oh Maname.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "oh-Balu",
    artist: "Harris",
    url: "Oh-Balu-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Mama-Mama",
    artist: "Harris",
    url: "Oh-Mama-Mama.mp33",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Ringa-Ringa",
    artist: "Harris",
    url: "Oh-Ringa-Ringa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Shanthi-shanthi",
    artist: "Harris",
    url: "Oh-Shanthi-Shanthi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Sukumari",
    artist: "Harris",
    url: "Oh-Sukumari.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Okka Nimisham",
    artist: "Harris",
    url: "Okka Nimisham.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oorellam-Unnai-Kandu",
    artist: "Harris",
    url: "Oorellam-Unnai-Kandu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Maalai",
    artist: "Harris",
    url: "Oru-Maalai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Pachai-Uduthiya-Kaadu",
    artist: "Harris",
    url: "Pachai-Uduthiya-Kaadu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pachigalam-Paravaigalam",
    artist: "Harris",
    url: "Pachigalam-Paravaigalam-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pattha-Muthal",
    artist: "Harris",
    url: "Partha-Muthal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pilla Puli",
    artist: "Harris",
    url: "Pilla Puli.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poi-Varavaa",
    artist: "Harris",
    url: "Poi-Varavaa-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Polladha-Boomi",
    artist: "Harris",
    url: "Polladha-Boomi-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pooppol-poopol",
    artist: "Harris",
    url: "Pooppol-Poopol.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Por Veeran",
    artist: "Harris",
    url: "Por Veeran (Azadi).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poraen Naa Poraen",
    artist: "Harris",
    url: "Poraen Naa Poraen.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Porkkalam",
    artist: "Harris",
    url: "Porkkalam-Tamil-Rap.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "pudichirukku",
    artist: "Harris",
    url: "Pudichirukku.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pullinangal",
    artist: "Harris",
    url: "Pullinangal-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Raajali-Nee-Gaali",
    artist: "Harris",
    url: "Raajali-Nee-Gaali-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Vaanam",
    artist: "Harris",
    url: "Oru-Vaanam-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Vazhi",
    artist: "Harris",
    url: "Oru-Vazhi-Pathai-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Otha-Sollala",
    artist: "Harris",
    url: "Otha-Sollaala.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Othayilae",
    artist: "Harris",
    url: "Othayilae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ragasiyam-",
    artist: "Harris",
    url: "Ragasiyam-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Rahatulla",
    artist: "Harris",
    url: "Rahatulla.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Rangola",
    artist: "Harris",
    url: "Rangola.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Rasaali",
    artist: "Harris",
    url: "Rasaali.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Sakhiyae",
    artist: "Harris",
    url: "Sakhiyae.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Showkali",
    artist: "Harris",
    url: "Showkali.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Silu-Silu",
    artist: "Harris",
    url: "Silu-Silu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sithramaina",
    artist: "Harris",
    url: "Sithramaina Bhoomi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sleeping-Beauty",
    artist: "Harris",
    url: "Sleeping-Beauty-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Suttum-Vizhi",
    artist: "Harris",
    url: "Suttum-Vizhi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "that-Is-Mahalaksmi",
    artist: "Harris",
    url: "That-Is-Mahalakshmi-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "The-Blood-Bath",
    artist: "Harris",
    url: "The-Blood-Bath-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "The-raise-of-Damo",
    artist: "Harris",
    url: "The-Rise-of-Damo.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thee-Illai",
    artist: "Harris",
    url: "Thee-Illai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thiru-Thiru-Ganantha",
    artist: "Harris",
    url: "Thiru-Thiru-Gananatha-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thirunelveli-Alvada",
    artist: "Harris",
    url: "Thirunelveli-Alvada.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thotta-Power",
    artist: "Harris",
    url: "Thotta-Power.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "thalaivane",
    artist: "Harris",
    url: "Thalaivane-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thalavali",
    artist: "Harris",
    url: "Thalavali-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Unakkena-Venum-Sollu",
    artist: "Harris",
    url: "Unakkenna-Venum-Sollu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "unakkul-Naane",
    artist: "Harris",
    url: "Unakkul-Naane-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Unnaale-Unnaale",
    artist: "Harris",
    url: "Unnaale-Unnaale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Uyirey",
    artist: "Harris",
    url: "Uyirey.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaane Vaane",
    artist: "Harris",
    url: "Vaane Vaane.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Vaseegara",
    artist: "Harris",
    url: "Vaseegara.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veeramulla",
    artist: "Harris",
    url: "Veeramulla.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Venmathiye",
    artist: "Harris",
    url: "Venmathiye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veenilave",
    artist: "Harris",
    url: "Vennilave-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaarayo-Varaayo",
    artist: "Harris",
    url: "Vaarayo-Vaarayo-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vandhuttaanda-kaalai",
    artist: "Harris",
    url: "Vandhuttaanda-Kaalai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vennilavu Saaral",
    artist: "Harris",
    url: "Vennilavu Saaral.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veppamaram",
    artist: "Harris",
    url: "Veppamaram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Verenna-Verenna",
    artist: "Harris",
    url: "Verenna-Verenna.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vilaiyaadu-Vilayaadu",
    artist: "Harris",
    url: "Vilaiyaadu-Vilaiyaadu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Yamma-Yamma",
    artist: "Harris",
    url: "Yamma-Yamma.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yathe-yathe",
    artist: "Harris",
    url: "Yathe-Yathe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yeanadi-Yeanadi",
    artist: "Harris",
    url: "Yeanadi-Yeanadi-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yellae-lama",
    artist: "Harris",
    url: "Yellae-Lama.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yen-Minukki",
    artist: "Harris",
    url: "Yen-Minukki-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yendhan-Kan-Mune",
    artist: "Harris",
    url: "Yendhan-Kan-Munne-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yethi-Yethi",
    artist: "Harris",
    url: "Yethi-Yethi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vizhiyil-Un-Vizhiyil",
    artist: "Harris",
    url: "Vizhiyil-Un-Vizhiyil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Warriors-English",
    artist: "Harris",
    url: "Warriors-English-Rap.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "X-Machi",
    artist: "Harris",
    url: "X-Machi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  }
];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "default-cover.jpg"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "cover_harris_1.png",
      "cover_harris-2.png",
      "cover_harris-3.png",
      "cover_harris-4.png"
    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
