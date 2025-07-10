/**
 * 时间进度计算器
 * 显示当前是一年中的第几天、年度进度、当日进度
 */

function updateTimeProgress() {
  const now = new Date();
  const year = now.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const endOfYear = new Date(year + 1, 0, 1);
  const startOfDay = new Date(year, now.getMonth(), now.getDate());
  const endOfDay = new Date(year, now.getMonth(), now.getDate() + 1);

  // 计算是一年中的第几天
  const dayOfYear = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

  // 计算年度进度百分比
  const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear) * 100).toFixed(7);

  // 计算当日进度百分比
  const dayProgress = ((now - startOfDay) / (endOfDay - startOfDay) * 100).toFixed(7);

  // 更新页面元素
  const currentYearElement = document.getElementById('current-year');
  const dayOfYearElement = document.getElementById('day-of-year');
  const yearProgressElement = document.getElementById('year-progress');
  const dayProgressElement = document.getElementById('day-progress');

  if (currentYearElement) currentYearElement.textContent = year;
  if (dayOfYearElement) dayOfYearElement.textContent = dayOfYear;
  if (yearProgressElement) yearProgressElement.textContent = yearProgress;
  if (dayProgressElement) dayProgressElement.textContent = dayProgress;
}

// 页面加载完成后立即更新一次
document.addEventListener('DOMContentLoaded', function() {
  updateTimeProgress();
  
  // 每秒更新一次时间进度
  setInterval(updateTimeProgress, 1000);
});

// 如果页面已经加载完成，立即执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    updateTimeProgress();
    setInterval(updateTimeProgress, 1000);
  });
} else {
  updateTimeProgress();
  setInterval(updateTimeProgress, 1000);
} 