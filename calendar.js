// Получаем текущую дату
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth(); // Месяц в диапазоне 0-11
let selectedDayElement = null; // Для хранения выбранного дня

// Дни недели
const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// Функция для отображения заголовка и дней месяца
function renderCalendar(year, month) {
    const monthNames = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    // Устанавливаем заголовок
    const calendarTitle = document.getElementById('calendarTitle');
    calendarTitle.textContent = `${monthNames[month]} ${year}`;

    // Очищаем предыдущие данные
    const calendarWeekdays = document.getElementById('calendarWeekdays');
    const calendarDays = document.getElementById('calendarDays');
    calendarWeekdays.innerHTML = '';
    calendarDays.innerHTML = '';

    // Генерируем заголовки дней недели
    weekdays.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'p-2 font-semibold text-white text-left';
        dayElement.textContent = day;
        calendarWeekdays.appendChild(dayElement);
    });

    // Получаем количество дней в месяце
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Определяем первый день недели месяца
    let firstDayOfMonth = new Date(year, month, 1).getDay();
    firstDayOfMonth = (firstDayOfMonth === 0) ? 7 : firstDayOfMonth; // Перемещаем воскресенье на конец недели

    // Добавляем пустые элементы до начала месяца (для выравнивания календаря)
    for (let i = 1; i < firstDayOfMonth; i++) {
        const emptyElement = document.createElement('div');
        calendarDays.appendChild(emptyElement);
    }

    // Добавляем числа дней месяца
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'text-white rounded-full p-2 border border-gray-300 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center cursor-pointer';
        dayElement.textContent = i;

        // Определяем день недели для текущего дня
        const currentDayOfWeek = new Date(year, month, i).getDay();

        // Устанавливаем стили для субботы и воскресенья
        if (currentDayOfWeek === 0 || currentDayOfWeek === 6) { // 0 - Воскресенье, 6 - Суббота
            dayElement.classList.remove('text-white'); // Убираем белый текст
            dayElement.classList.add('text-error'); // Оставляем белый текст для контраста на красном фоне
        }

        // Добавляем событие для выбора дня
        dayElement.addEventListener('click', () => {
            // Проверяем, является ли выбранный день выходным
            if (currentDayOfWeek === 0 || currentDayOfWeek === 6) {
                return; // Если это выходной, выходим из функции
            }

            const selectedDate = new Date(year, month, i);
            const formattedDate = selectedDate.toLocaleDateString(); // Форматируем дату
            document.getElementById('selectedDate').value = formattedDate; // Заполняем поле выбранной даты

            // Убираем выделение с предыдущего выбранного дня
            if (selectedDayElement) {
                selectedDayElement.classList.remove('bg-accent');
            }

            // Применяем стили к текущему выбранному дню
            dayElement.classList.add('bg-accent', 'text-white');
            selectedDayElement = dayElement; // Обновляем текущий выбранный элемент
        });

        calendarDays.appendChild(dayElement);
    }
}

// Функции для переключения месяцев
function prevMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear -= 1;
    } else {
        currentMonth -= 1;
    }
    renderCalendar(currentYear, currentMonth);
}

function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear += 1;
    } else {
        currentMonth += 1;
    }
    renderCalendar(currentYear, currentMonth);
}

// Навешиваем события на кнопки
document.getElementById('prevMonth').addEventListener('click', prevMonth);
document.getElementById('nextMonth').addEventListener('click', nextMonth);

// Первоначальная отрисовка календаря
renderCalendar(currentYear, currentMonth);
