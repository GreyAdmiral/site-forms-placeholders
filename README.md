# site-forms-placeholders

> Plugin activating the dynamics of the placeholders in the specified form (block).

## Install

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/site-forms-placeholders@1.1.5/dist/phone-mask-native.min.js"></script>
```

or

```html
<script src="https://unpkg.com/site-forms-placeholders@1.1.5/dist/phone-mask-native.min.js"></script>
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
Default: `[data-placeholder-form]`<br>

A selector of forms or a blocks inside of which must be activated by the dynamics of the playercholders.

## Usage

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/site-forms-placeholders@1.1.5/dist/phone-mask-native.min.js"></script>

...

<script>
   siteFormsPlaceholders();
</script>
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/site-forms-placeholders@1.1.5/dist/phone-mask-native.min.js"></script>

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
<form action="#" data-placeholder-form>
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
