(function () {
  // Google Play paid listing: purchase is handled by Google Play before download.
  window.KUNDALI_GOOGLE_PLAY_PAID = false;
  const key = 'jyotish_chakra_install_month';
  let month = Number(localStorage.getItem(key));
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    month = new Date().getMonth() + 1;
    localStorage.setItem(key, String(month));
  }
  window.KUNDALI_INSTALL_MONTH = month;
  if (window.AndroidPrint && typeof window.AndroidPrint.printReport === 'function') {
    window.print = function () { window.AndroidPrint.printReport(); };
  }
})();
