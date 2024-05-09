const btnOan = document.getElementById('btn-oan');
const btnTuTi = document.getElementById('btn-tu-ti');
const resultDiv = document.getElementById('result');

const choices = ['Oẳn', 'Tù Tì']; // Mảng chứa lựa chọn

btnOan.addEventListener('click', playGame);
btnTuTi.addEventListener('click', playGame);

function playGame() {
    const userChoice = this.textContent; // Lựa chọn của người dùng
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Lựa chọn ngẫu nhiên

    const result = compareChoices(userChoice, computerChoice); // So sánh lựa chọn

    resultDiv.textContent = `Bạn chọn ${userChoice}, máy chọn ${computerChoice}. ${result}`;
}

function compareChoices(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Hòa';
    } else if (userChoice === 'Oẳn' && computerChoice === 'Tù Tì') {
        return 'Thắng';
    } else if (userChoice === 'Tù Tì' && computerChoice === 'Oẳn') {
        return 'Thua';
    } else {
        return 'Lỗi';
    }
}