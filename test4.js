
let currentDate = new Date();
let selectedDate = null;

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const calendarBody = document.getElementById("calendarBody");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    monthYear.textContent = `${getMonthName(month)} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarBody.innerHTML = '';

    let day = 1;
    for (let row = 0; row < 6; row++) {
        const tr = document.createElement("tr");
        for (let col = 0; col < 7; col++) {
            const td = document.createElement("td");

            if (row === 0 && col < firstDay) {
                td.textContent = '';
            } else if (day <= daysInMonth) {
                td.textContent = day;
                td.onclick = () => selectDate(day);
                day++;
            }

            tr.appendChild(td);
        }
        calendarBody.appendChild(tr);
    }


    prevMonthBtn.onclick = () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    };

    nextMonthBtn.onclick = () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    };
}

function getMonthName(month) {
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return months[month];
}
function selectDate(day) {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    selectedDate = new Date(year, month, day);
    document.getElementById("selectedDate").textContent = selectedDate.toLocaleDateString('pt-BR');
    document.getElementById("appointmentForm").style.display = 'block';
}

renderCalendar();

