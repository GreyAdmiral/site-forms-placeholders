'use strict';

// @ts-check

/**
 * @param {string} [selector='[data-placeholder-form]']
 */
function main (selector = '[data-placeholder-form]') {
   const forms = document.querySelectorAll(selector);
   let placeholder = '\r';

   for (const form of forms) {
      form.addEventListener('focusin', focusInHandler);
      form.addEventListener('focusout', focusOutHandler);

      /**
       * @param {Event} e
       */
      function focusInHandler(e) {
         e.stopPropagation();
         const target = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (e.target);

         if (target && target.hasAttribute('placeholder')) {
            if (target.placeholder) {
               [placeholder, target.placeholder] = [target.placeholder, placeholder];
            }
         }
      }

      /**
       * @param {Event} e
       */
      function focusOutHandler(e) {
         e.stopPropagation();
         const target = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (e.target);

         if (target && target.hasAttribute('placeholder')) {
            if (placeholder) {
               [target.placeholder, placeholder] = [placeholder, target.placeholder];
            }
         }
      }
   }
}

module.exports = main;
