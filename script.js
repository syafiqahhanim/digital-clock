function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).pasStart(2, '0');
  const seconds = String(now.getSeconds()).pasStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updareTime();
