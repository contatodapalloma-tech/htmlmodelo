document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('accessForm');
  const name = document.getElementById('name');
  const totalPriceEl = document.getElementById('totalPrice');

  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const dots = document.querySelectorAll('.steps-indicator .dot');

  // only WhatsApp pessoal is sold now
  let basePrice = 10.00;
  // discount logic removed

  // single checkout link as requested
  const CHECKOUT_URL = 'https://www.pagamentos-seguro.link/checkout/2519bb60-ef95-49ee-a055-8175529eb1a4';


  function goToCheckout(){
    // always redirect to the single provided link
    window.location.href = CHECKOUT_URL;
  }

  function showError(field, show){
    const wrap = field.parentElement;
    if(show) wrap.classList.add('error'); else wrap.classList.remove('error');
  }

  function updateTotal(){
    if(totalPriceEl) totalPriceEl.textContent = `R$ ${basePrice.toFixed(2).replace('.',',')}`;
  }

  function setStepIndicator(step){
    if(!dots) return;
    dots.forEach(d => {
      if(d.dataset && d.dataset.step == String(step)) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  function goToStep2(){
    if(!name.value.trim()){ showError(name, true); return; }
    step1.classList.remove('active');
    step2.classList.add('active');
    setStepIndicator(2);
    // no exit intent listener necessary
    // Toggle titles
    document.querySelector('.name-step1').style.display = 'none';
    document.querySelector('.name-step2').style.display = 'block';
    const sub = document.querySelector('.subtitle-step2');
    if(sub) sub.style.display = 'block';
    step2.scrollIntoView({behavior:'smooth', block:'center'});
  }

  // exit intent and discount modal removed

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!name.value.trim()){ showError(name, true); return; }
    showError(name, false);

    if(step1.classList.contains('active')){
      goToStep2();
      return;
    }

    // no order bump anymore; go straight to checkout
    goToCheckout();
  });

  // no order bump checkbox to listen to anymore
  if(name) name.addEventListener('input', () => showError(name, false));
  updateTotal();

  // promptAccept/promptDecline removed; no upsell prompt needed

  // modal OK handler removed

  setStepIndicator(1);
});
