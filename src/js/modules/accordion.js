let accordion = () => {

   const btns = document.querySelectorAll('.mobile-links__parent-btn')

   btns.forEach((btn) => {
      btn.addEventListener('click', () => {
         const content = btn.nextElementSibling;

         const stateContent = btn.classList.toggle('active');

         if (stateContent) {
            content.style.maxHeight = content.scrollHeight + 'px';
         } else {
            content.style.maxHeight = '0px';
         }
      })
   })
}

export default accordion;