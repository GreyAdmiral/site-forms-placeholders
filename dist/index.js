'use strict';

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
      form.addEventListener('focusin', focusInHandler);
      form.addEventListener('focusout', focusOutHandler);
   }

   /**
    * @param {Event} e
    */
   function focusInHandler(e) {
      e.stopPropagation();
      const target = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (e.target);

      if (target && target.hasAttribute('placeholder')) {
         [placeholder = EMPTY_PLACEHOLDER, target.placeholder = EMPTY_PLACEHOLDER] = [target.placeholder, placeholder];
      }
   }

   /**
    * @param {Event} e
    */
   function focusOutHandler(e) {
      e.stopPropagation();
      const target = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (e.target);

      if (target && target.hasAttribute('placeholder')) {
         [target.placeholder = EMPTY_PLACEHOLDER, placeholder = EMPTY_PLACEHOLDER] = [placeholder, target.placeholder];
      }
   }
}

module.exports = main;
