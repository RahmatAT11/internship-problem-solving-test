//fungsi soal 2
function checkSorted(arr) {
  return arr.every(
    (value, index, array) => index === 0 || value <= array[index - 1]
  );
}

function denseRanking(
  jumlahPemain,
  arrayDaftarSkor,
  jumlahMain,
  arraySkorMain
) {
  let arrayGabungan = null;
  const arrayDaftarPeringkat = [];
  const arrayDaftarPeringkatMain = [];
  let peringkat = 1;

  if (jumlahPemain !== arrayDaftarSkor.length) {
    return;
  }

  if (jumlahMain !== arraySkorMain.length) {
    return;
  }

  if (checkSorted(arrayDaftarSkor)) {
    arrayGabungan = arrayDaftarSkor.concat(arraySkorMain);
    arrayGabungan.sort((a, b) => b - a);
  }

  arraySkorMain.sort((a, b) => b - a);

  let j = 0;
  for (let i = 0; i < arrayGabungan.length; i++) {
    arrayDaftarPeringkat.push(peringkat);

    if (arrayGabungan[i] === arraySkorMain[j]) {
      arrayDaftarPeringkatMain.push(peringkat);
      j++;
    }

    if (
      arrayGabungan[i] > arrayGabungan[i + 1] &&
      i < arrayGabungan.length - 1
    ) {
      peringkat++;
    } else {
      continue;
    }
  }

  return arrayDaftarPeringkatMain.sort((a, b) => b - a).join(" ");
}

const soal2 = document.querySelector("#soal-2");

// Hasil soal 2
const soal2p1 = document.createElement("p");
soal2p1.textContent = `Hasil untuk 7 pemain dengan urutan skor 100 100 50 40 40 20 10 percobaan 4 dengan urutan skor 5 25 50 120 = ${denseRanking(
  7,
  [100, 100, 50, 40, 40, 20, 10],
  4,
  [5, 25, 50, 120]
)}`;
const soal2p2 = document.createElement("p");
soal2p2.textContent = `Hasil untuk 4 pemain dengan urutan skor 100 80 80 70 percobaan 3 dengan urutan skor 60 70 100 = ${denseRanking(
  4,
  [100, 80, 80, 70],
  3,
  [60, 70, 100]
)}`;
const soal2p3 = document.createElement("p");
soal2p3.textContent = `Hasil untuk 5 pemain dengan urutan skor 100 80 80 70 50 percobaan 5 dengan urutan skor 40 50 60 70 100 = ${denseRanking(
  5,
  [100, 80, 80, 70, 50],
  5,
  [40, 50, 60, 70, 100]
)}`;

soal2.appendChild(soal2p1);
soal2.appendChild(soal2p2);
soal2.appendChild(soal2p3);

