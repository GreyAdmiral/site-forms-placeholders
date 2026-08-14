// @ts-check

/**
 * @param {string} [selector]
 */
function main (selector) {
   const EMPTY_PLACEHOLDER = '\r';
   const forms = selector ? document.querySelectorAll(selector) : document.forms;
   /** @type {string | undefined} */
   let placeholder;

   for (const form of forms) {
      form.addEventListener('focusin', handler);
      form.addEventListener('focusout', handler);
   }

   /**
    * @param {Event} e
    */
   function handler(e) {
      e.stopPropagation();
      const target = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (e.target);

      if (target && target.hasAttribute('placeholder')) {
         [placeholder = EMPTY_PLACEHOLDER, target.placeholder = EMPTY_PLACEHOLDER] = [target.placeholder, placeholder];
      }
   }
}

export { main as default };
