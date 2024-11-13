// fungsi soal 1
function lazyCatererSequence(n) {
    const arrayHasil = [];
    for (let i = 0; i < n; i++) {
        arrayHasil.push(((i * (i + 1)) / 2) + 1)
    }

    return arrayHasil.join('-');
}
const soal1 = document.querySelector("#soal-1");
const soal2 = document.querySelector("#soal-2");
const soal3 = document.querySelector("#soal-3");

// Hasil soal 1
const soal1p1 = document.createElement("p");
soal1p1.textContent = `Hasil untuk n = 7 adalah = ${lazyCatererSequence(7)}`;
const soal1p2 = document.createElement("p");
soal1p2.textContent = `Hasil untuk n = 20 adalah = ${lazyCatererSequence(20)}`;

soal1.appendChild(soal1p1);
soal1.appendChild(soal1p2);
