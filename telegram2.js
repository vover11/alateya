const TELEGRAM_API_TOKEN = '5995370233:AAFpKV1HANwF9ymq2Fk4E3eRYSGGPtA7LPQ'; // замените на свой токен
const TELEGRAM_CHAT_ID = '486479899'; // замените на свой идентификатор чата

let optionWords = '';

function addOptionTextToField(optionWord) {
    const optionWordsField = document.getElementById('optionWords');
    optionWords += optionWord + ' ';
    optionWordsField.value = optionWords;
    optionWordsField.innerHTML += `<span class="optionspan">${optionWord}</span> `;
}

document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;
    const selectedDate = document.getElementById('selectedDate').value; // Получаем выбранную дату

    const text = `Имя: ${name}\nE-mail: ${email}\nТел: ${phone}\nСообщение: ${message}\nВыбранная дата: ${selectedDate}`; // Добавляем дату в текст сообщения

    await sendMessageToTelegram(text);
});

async function sendMessageToTelegram(text) {
    const apiUrl = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text
        })
    });

    if (response.ok) {
        alert('Сообщение отправлено!');
    } else {
        alert('Ошибка! Сообщение не было отправлено.');
    }
}
