# site-color-schemes

> Plugin activating the dynamics of the placeholders in the specified form (block).

## Install

```shell
npm i site-forms-placeholders
```

## Import

```javascript
const placeholder = require("site-forms-placeholders");
```
or

```javascript
import placeholder from 'site-forms-placeholders'
```

## Option (selector)

Type: `string`<br>
Default: `[data-placeholder-form]`<br>

A selector of forms or a blocks inside of which must be activated by the dynamics of the playercholders.

## Usage

```javascript
const placeholder = require("site-forms-placeholders");

placeholder("your-selector");
```

or

```javascript
const placeholder = require("site-forms-placeholders");

placeholder();
```

## Note

You can not indicate the selector if the forms (blocks) has an attribute data-placeholder-form

#### Example:

```html
<form action="#" data-placeholder-form>
	...
	<input placeholder="The text of the placeholder 1">
	...
	<input placeholder="The text of the placeholder 2">
	...
	<input placeholder="The text of the placeholder 3">
	...
	<textarea placeholder="The text of the placeholder for textarea"></textarea>
	...
</form>
```