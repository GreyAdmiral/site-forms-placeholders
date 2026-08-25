// @ts-check

/**
 * @param {string} [selector]
 */
export default function (selector) {
   const EMPTY_PLACEHOLDER = '\r';
   const forms = selector ? document.querySelectorAll(selector) : document.forms;
   /** @type {string | undefined} */
   let placeholder;

   for (const form of forms) {
      const sample = form.querySelector(':scope > [placeholder]');

      if (sample) {
         form.addEventListener('focusin', handler);
         form.addEventListener('focusout', handler);
      }
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
