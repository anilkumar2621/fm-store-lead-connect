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


/*==================================================
 FM STORE-STYLES
 API Configuration
==================================================*/

const API_URL =
"https://script.google.com/macros/s/AKfycbxgXP8_DTZ242ZUaPnOkPBS7wOoXrHJfApwcNSR11wqDpc_jeuYX1Xp5tqAWdrOCmmwGw/exec";

/*==================================================
 Helper Functions
==================================================*/

function showLoading(button){

    if(!button) return;

    button.disabled = true;
    button.dataset.original = button.innerHTML;
    button.innerHTML = "Submitting...";

}

function hideLoading(button){

    if(!button) return;

    button.disabled = false;
    button.innerHTML = button.dataset.original || "Submit";

}

function showSuccess(message){

    alert(message || "Submitted Successfully!");

}

function showError(message){

    alert(message || "Something went wrong.");

}

function isPhoneValid(phone){

    return /^[6-9]\d{9}$/.test(phone);

}

function goBack() {
  history.back();
}
/*==================================================
 Send Lead To Google Apps Script
==================================================*/

async function submitLead(data, button){

    showLoading(button);

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        const result = await response.json();

        hideLoading(button);

        if(result.success){

            showSuccess(
                "Thank you! Your request has been submitted.\nLead ID: " +
                result.leadId
            );

            return true;

        }

        showError(result.error || "Submission failed.");

        return false;

    }catch(error){

        hideLoading(button);

        console.error(error);

        showError(
            "Unable to connect to the server. Please try again."
        );

        return false;

    }

}
