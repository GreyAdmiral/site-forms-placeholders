// @ts-check

/**
 * @param {string} [selector]
 */
function main (selector) {
   const forms = selector ? document.querySelectorAll(selector) : document.forms;
   let placeholder = '\r';

   for (const form of forms) {
      form.addEventListener('focusin', focusInHandler);
      form.addEventListener('focusout', focusOutHandler);
   }

   /**
    * @param {Event} e
    */
   function focusInHandler(e) {
      e.stopPropagation();
      const target = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (e.target);

      if (target && target.hasAttribute('placeholder') && target.placeholder) {
         [placeholder, target.placeholder] = [target.placeholder, placeholder];
      }
   }

   /**
    * @param {Event} e
    */
   function focusOutHandler(e) {
      e.stopPropagation();
      const target = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (e.target);

      if (target && target.hasAttribute('placeholder') && placeholder) {
         [target.placeholder, placeholder] = [placeholder, target.placeholder];
      }
   }
}

export { main as default };
