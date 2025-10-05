function saveChanges() {
  const siteName = document.getElementById('siteName').value;
  const mainText = document.getElementById('mainText').value;
  const videoLink = document.getElementById('videoLink').value;
  const bgColor = document.getElementById('bgColor').value;

  // تخزين البيانات
  localStorage.setItem('siteName', siteName);
  localStorage.setItem('mainText', mainText);
  localStorage.setItem('videoLink', videoLink);
  localStorage.setItem('bgColor', bgColor);
  
  alert('تم حفظ التعديلات!');
}