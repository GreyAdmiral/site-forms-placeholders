# site-forms-placeholders

> Plugin activating the dynamics of the placeholders in the specified form (block).

## Install

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/site-forms-placeholders@1.2.4/dist/site-forms-placeholders.min.js"></script>
```

or

```html
<script src="https://unpkg.com/site-forms-placeholders@1.2.4/dist/site-forms-placeholders.min.js"></script>
```

#### Import

Run the command in the console

```shell
npm i site-forms-placeholders
```

Perform the import

```javascript
const siteFormsPlaceholders = require('site-forms-placeholders');
```

or

```javascript
import siteFormsPlaceholders from 'site-forms-placeholders';
```

## Option (selector)

Type: `string`<br>
Default: `undefined`<br>

Selector of forms or blocks within which the dynamics of playerholders should be activated. if the attribute is not specified or left empty, the playerholder dynamics will be applied to all forms on the page.

## Usage

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/site-forms-placeholders@1.2.4/dist/site-forms-placeholders.min.js"></script>

...

<script>
   siteFormsPlaceholders();
</script>
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/site-forms-placeholders@1.2.4/dist/site-forms-placeholders.min.js"></script>

...

<script>
   siteFormsPlaceholders('your-selector');
</script>
```

#### Import

```javascript
const siteFormsPlaceholders = require('site-forms-placeholders');

siteFormsPlaceholders('your-selector');
```

or

```javascript
const siteFormsPlaceholders = require('site-forms-placeholders');

siteFormsPlaceholders();
```

## Note

You can not indicate the selector if the forms (blocks) has an attribute data-placeholder-form

#### Example:

```html
<form action="#" id="my-form">
   ...
   <input placeholder="The text of the placeholder 1" />
   ...
   <input placeholder="The text of the placeholder 2" />
   ...
   <input placeholder="The text of the placeholder 3" />
   ...
   <textarea placeholder="The text of the placeholder for textarea"></textarea>
   ...
</form>
```
