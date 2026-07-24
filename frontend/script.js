// =====================================
// FM STORE-STYLES
// Frontend Script
// =====================================

// Google Apps Script Web App URL
const WEB_APP_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

// Store Locations
const STORE_LOCATIONS = [
  {
    name: "FM STORE-STYLES",
    address: "Eturnagaram",
    phone: "8463949455"
  },
  {
    name: "FM STORE-STYLES",
    address: "Mulugu",
    phone: "8463949455"
  }
];

// Helpers
const $ = (id) => document.getElementById(id);

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  $(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goBack() {
  history.back();
}
