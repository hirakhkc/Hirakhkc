(function () {
  const ACTIVATED_KEY = 'hirak_paid_activation_v4';
  const FREE_USED_KEY = 'hirak_demo_prediction_used_v1';
  function nativeActivated(){try{return !!(window.AndroidLicense&&window.AndroidLicense.isActivated())}catch(_){return false}}
  function isActivated(){return nativeActivated()||localStorage.getItem(ACTIVATED_KEY)==='yes'}
  function rememberActivation(){try{if(window.AndroidLicense)window.AndroidLicense.setActivated()}catch(_){}localStorage.setItem(ACTIVATED_KEY,'yes')}
  function installMonth(){const m=Number(window.KUNDALI_INSTALL_MONTH);return Number.isInteger(m)&&m>=1&&m<=12?m:new Date().getMonth()+1}
  function expectedPassword(){const d=new Date(),yyyy=d.getFullYear(),mm=String(d.getMonth()+1).padStart(2,'0');return `Jgrmg${yyyy}${mm}@#$%&&`}
  function showMessage(message,error){const box=document.getElementById('activationMessage');if(!box)return;box.textContent=message;box.classList.toggle('error',!!error)}
  function setEdition(paid){document.querySelectorAll('.paid-badge,.footer-paid').forEach(b=>{b.textContent=paid?'PAID VERSION':'DEMO VERSION';b.classList.toggle('demo-badge',!paid)});const old=document.getElementById('activationBar');if(old)old.remove();if(!paid){const oldBar=document.getElementById('activationBar');if(oldBar)oldBar.remove()}}
  function createActivationBar(){
    if(document.getElementById('activationBar'))return;const header=document.querySelector('.topbar');if(!header)return;
    const bar=document.createElement('section');bar.id='activationBar';bar.className='activation-bar';
    bar.innerHTML=`<div class="activation-copy"><b>DEMO VERSION · Your first complete horoscope is free</b><span>To prepare another prediction, pay <strong>₹999</strong> to UPI <strong>hirakhkc@upi</strong>.</span><span>Send payment proof through WhatsApp: <strong>9830431246</strong></span><span>Phone: <strong>9830961246</strong> · Email: <strong>hirakhkc@gmail.com</strong></span><span>After receiving the password, enter it below to unlock the Paid Version.</span></div><div class="activation-entry"><input id="activationPassword" type="password" autocomplete="off" spellcheck="false" placeholder="Enter paid-version password"><button id="activateApp" type="button">Unlock Paid Version</button></div><small id="activationMessage">The password is required only after the free first prediction.</small>`;
    header.insertAdjacentElement('afterend',bar);
    document.getElementById('activateApp').onclick=()=>{const entered=document.getElementById('activationPassword').value.trim();if(entered!==expectedPassword()){showMessage('Incorrect password. Check the year-month password or WhatsApp 9830431246 with payment proof.',true);return}rememberActivation();window.HIRAK_ACTIVATED=true;setEdition(true)};
    document.getElementById('activationPassword').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();document.getElementById('activateApp').click()}};
  }
  function requestPaidVersion(){if(isActivated())return true;createActivationBar();showMessage('To create a new prediction, pay ₹999 to hirakhkc@upi, send proof to WhatsApp 9830431246, then enter the password above.',true);const bar=document.getElementById('activationBar'),input=document.getElementById('activationPassword');if(bar)bar.scrollIntoView({behavior:'smooth',block:'start'});if(input)setTimeout(()=>input.focus(),350);return false}
  window.HirakLicense={isPaid:isActivated,requestPaidVersion,authorizeGeneration:function(){if(isActivated())return true;if(localStorage.getItem(FREE_USED_KEY)!=='yes'){localStorage.setItem(FREE_USED_KEY,'yes');showMessage('Your one free horoscope has now been used. Activate before creating another report.',false);return true}return requestPaidVersion()}};
  document.addEventListener('DOMContentLoaded',()=>{window.HIRAK_ACTIVATED=isActivated();setEdition(window.HIRAK_ACTIVATED)});
})();
