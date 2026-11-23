const planSelect = document.querySelector('#plan');
const contactEmail = ['josealaurencio', 'gmail.com'].join('@');

document.querySelectorAll('[data-plan]').forEach((link) => {
  link.addEventListener('click', () => {
    planSelect.value = link.dataset.plan;
  });
});

document.querySelector('#audit-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const { name, email, website, plan } = form.elements;
  const subject = `Website audit request from ${name.value.trim()}`;
  const body = [
    `Name: ${name.value.trim()}`,
    `Email: ${email.value.trim()}`,
    `Website: ${website.value.trim()}`,
    `Interested in: ${plan.value}`,
  ].join('\n');

  const link = document.createElement('a');
  link.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  link.hidden = true;
  document.body.append(link);
  link.click();
  link.remove();

  form.querySelector('.status').textContent = `Your email app should open with this request. Press send to finish. If it doesn't open, email ${contactEmail}.`;
});
