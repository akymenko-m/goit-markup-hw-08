const portfolioFilter = document.querySelector('.portfolio__filter');
const portfolioItem = document.querySelectorAll('.portfolio__card-item');

portfolioFilter.addEventListener('click', selectFilter);

let selectedFilter = document.querySelector('button[data-type="all"]');

function selectFilter(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (selectedFilter !== event.target) {
    selectedFilter.classList.toggle('current');
    event.target.classList.toggle('current');

    selectedFilter = event.target;
  }

  switch (selectedFilter.dataset.type) {
    case 'website':
      portfolioItem.forEach(el => {
        if (el.attributes['data-type'].value !== 'website') {
          el.classList.add('is-hidden');
        } else {
          el.classList.remove('is-hidden');
        }
      });
      break;

    case 'app':
      portfolioItem.forEach(el => {
        if (el.attributes['data-type'].value !== 'app') {
          el.classList.add('is-hidden');
        } else {
          el.classList.remove('is-hidden');
        }
      });
      break;

    case 'design':
      portfolioItem.forEach(el => {
        if (el.attributes['data-type'].value !== 'design') {
          el.classList.add('is-hidden');
        } else {
          el.classList.remove('is-hidden');
        }
      });
      break;

    case 'marketing':
      portfolioItem.forEach(el => {
        if (el.attributes['data-type'].value !== 'marketing') {
          el.classList.add('is-hidden');
        } else {
          el.classList.remove('is-hidden');
        }
      });
      break;

    default:
      portfolioItem.forEach(el => el.classList.remove('is-hidden'));
  }
}
