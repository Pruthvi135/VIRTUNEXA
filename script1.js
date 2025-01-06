// script.js
const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('monthYear');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');
const viewMode = document.getElementById('viewMode');

let currentDate = new Date();

function renderCalendar() {
  daysContainer.innerHTML = '';
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
  
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Fill in days
  for (let i = 0; i < firstDay; i++) {
    daysContainer.innerHTML += '<div></div>';
  }
  for (let i = 1; i <= lastDate; i++) {
    daysContainer.innerHTML += `<div>${i}</div>`;
  }
}

function changeMonth(step) {
  currentDate.setMonth(currentDate.getMonth() + step);
  renderCalendar();
}

prevMonth.addEventListener('click', () => changeMonth(-1));
nextMonth.addEventListener('click', () => changeMonth(1));

viewMode.addEventListener('change', () => {
  if (viewMode.value === 'week') {
    // Filter to show only the current week's days
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());
    daysContainer.innerHTML = '';
    for (let i = 0; i < 7; i++) {
      daysContainer.innerHTML += `<div>${weekStart.getDate() + i}</div>`;
    }
  } else {
    // Render full month
    renderCalendar();
  }
});

// Initial render
renderCalendar();
