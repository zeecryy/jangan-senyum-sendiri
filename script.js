function play() {
  const audio = new Audio("Song/beatiful.mp3");
  audio.play();
  audio.loop = true;
}
const swalst = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
});
const swalss = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: true,
});
const swalsy = Swal.mixin({
  confirmButtonText: "Iy",
  allowOutsideClick: false,
});
const swals = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: false,
  timer: 2500,
});
const foto = document.querySelector(".foto2");

var i = 0,
  text;
text = "";
function ketik() {
  if (i < text.length) {
    document.querySelector(".kt1").innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik, 100);
  }
  if (i == text.length) {
    // document.querySelector("blockquote").style.display = "block";
    ketikk();
    document.querySelector(".kt1").innerHTML = text;
  }
}
var u = 0,
  text2;
text2 = "";
function ketikk() {
  if (u < text2.length) {
    document.querySelector(".kt2").innerHTML += text2.charAt(u);
    u++;
    setTimeout(ketikk, 200);
  }
  if (u == text2.length) {
    ketikkk();
    document.querySelector(".kt2").innerHTML = text2;
    fotoPertama();
    fotoKedua();
  }
}
var a = 0,
  text3;
text3 = "";
function ketikkk() {
  if (a < text3.length) {
    document.querySelector(".kt3").innerHTML += text3.charAt(a);
    a++;
    setTimeout(ketikkk, 150);
  }
  if (a == text3.length) {
    document.querySelector(".btn").style = "opacity:1;";
    document.querySelector(".container").style = "animation-name:anime";
  }
}
function showDiv() {
  document.querySelector(".body").style.display = "block";
}
function fotoPertama() {
  document.querySelector(".foto1").style.display = "none";
}
function fotoKedua() {
  const foto2 = document.querySelector(".foto2");
  foto2.style.display = "inline";
}

async function mulai() {
  const { value: nama } = await swalst.fire({
    title: "Isi namanya dulu!",
    input: "text",
    confirmButtonText: "Lanjut",
    confirmButtonColor: "#D7C0AE",
  });
  if (nama && nama.length < 11) {
    pnggl();
    window.nama = nama;
  } else {
    await Swal.fire({
      text: "Isi nama dulu / tbisa lebe dari 10 huruf!",
      confirmButtonColor: "#D7C0AE",
    });
    mulai();
  }
}
async function pnggl() {
  const { value: call } = await swalst.fire({
    title: `Siapa yang kirim?`,
    input: `text`,
    confirmButtonColor: "#D7C0AE",
    confirmButtonText: "Lanjut",
  });
  if (call) {
    window.call = call;
    upload();
  } else {
    await Swal.fire({
      text: "Harus diisi dong!",
      confirmButtonColor: "#D7C0AE",
    });
    pnggl();
  }
}

async function upload() {
  const { value: file } = await Swal.fire({
    confirmButtonColor: "#D7C0AE",
    allowOutsideClick: false,
    inputValidator: true,
    title: "Upload foto imutnya dong!!",
    input: "file",
    inputAttributes: {
      accept: "image/*",
      "aria-label": "Upload your profile picture",
    },
    inputValidator: (result) => {
      return !result && `Harus ada foto`;
    },
  });
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      foto.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  kuis();
}

async function kuis() {
  await swals.fire({
    text: `Hallo ${nama}`,
    imageUrl: "https://c.tenor.com/qVdyIgm8wzYAAAAi/hello.gif",
    imageWidth: 100,
    imageHeight: 110,
  });
  await swals.fire({
    text: `Jangan lupa bahagia hari ini!!`,
    imageUrl: "https://media.tenor.com/buirdxx3fywAAAAj/love-hearts.gif",
    imageWidth: 120,
    imageHeight: 115,
  });

  await swalst.fire({
    text: `Skrg liat ini!`,
    confirmButtonText: "oke",
    confirmButtonColor: "#D69F7F",
    imageUrl: "https://c.tenor.com/t19OWaRdv7oAAAAj/cute-head-pat.gif",
    imageWidth: 100,
    imageHeight: 110,
  });
  play();
  showDiv();
  text = `Coba ${nama} eja kata menu pake bahasa inggris "Me-N-U, hehehehe"`;
  text2 = `Jangan kluar dulu nnti ada foto diatas!, orangnya cakep loh hehehehe`;
  text3 = `Cakep kan? hehe`;
  ketik();
}
mulai();

async function bukaWa() {
  window.location = `https://wa.me/+6281543270363?text=ihhh lucunya ${call}`;
}
