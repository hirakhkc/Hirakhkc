(function () {
  const ACTIVATED_KEY = 'hirak_paid_activation_v4';
  const FREE_USED_KEY = 'hirak_demo_prediction_used_v1';
  function nativeActivated(){try{return !!(window.AndroidLicense&&window.AndroidLicense.isActivated())}catch(_){return false}}
  function isActivated(){return nativeActivated()||localStorage.getItem(ACTIVATED_KEY)==='yes'}
  function rememberActivation(){try{if(window.AndroidLicense)window.AndroidLicense.setActivated()}catch(_){}localStorage.setItem(ACTIVATED_KEY,'yes')}
  function installMonth(){const m=Number(window.KUNDALI_INSTALL_MONTH);return Number.isInteger(m)&&m>=1&&m<=12?m:new Date().getMonth()+1}
  function expectedPassword(){const m=installMonth();return `Jgrmg${67+m}@#$%${String(m).padStart(4,'0')}000`}
  function showMessage(message,error){const box=document.getElementById('activationMessage');if(!box)return;box.textContent=message;box.classList.toggle('error',!!error)}
  function setEdition(paid){document.querySelectorAll('.paid-badge,.footer-paid').forEach(b=>{b.textContent=paid?'PAID VERSION':'DEMO VERSION';b.classList.toggle('demo-badge',!paid)});const old=document.getElementById('activationBar');if(old)old.remove();if(!paid)createActivationBar()}
  function createActivationBar(){
    if(document.getElementById('activationBar'))return;const header=document.querySelector('.topbar');if(!header)return;
    const bar=document.createElement('section');bar.id='activationBar';bar.className='activation-bar';
    bar.innerHTML=`<div class="activation-copy"><b>DEMO VERSION · One complete horoscope is free</b><span>To unlock unlimited reports, pay ₹999 to <strong>hirakhkc@upi</strong> and send proof on WhatsApp <strong>9830961246</strong>.</span></div><div class="activation-entry"><input id="activationPassword" type="password" autocomplete="off" spellcheck="false" placeholder="Enter activation password"><button id="activateApp" type="button">Activate Paid Version</button></div><small id="activationMessage">The password is required only when you want to create the second horoscope.</small>`;
    header.insertAdjacentElement('afterend',bar);
    document.getElementById('activateApp').onclick=()=>{const entered=document.getElementById('activationPassword').value.trim();if(entered!==expectedPassword()){showMessage('Incorrect password. Check the installation-month password or WhatsApp 9830961246.',true);return}rememberActivation();window.HIRAK_ACTIVATED=true;setEdition(true)};
    document.getElementById('activationPassword').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();document.getElementById('activateApp').click()}};
  }
  window.HirakLicense={isPaid:isActivated,authorizeGeneration:function(){if(isActivated())return true;if(localStorage.getItem(FREE_USED_KEY)!=='yes'){localStorage.setItem(FREE_USED_KEY,'yes');showMessage('Your one free horoscope has now been used. Activate before creating another report.',false);return true}showMessage('Demo limit reached. Enter the activation password above to create the second horoscope.',true);const input=document.getElementById('activationPassword');if(input){input.scrollIntoView({behavior:'smooth',block:'center'});input.focus()}return false}};
  document.addEventListener('DOMContentLoaded',()=>{window.HIRAK_ACTIVATED=isActivated();setEdition(window.HIRAK_ACTIVATED)});
})();
