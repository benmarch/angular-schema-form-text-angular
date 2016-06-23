TextAngular add-on
=================

This TextAngular add-on uses as the name implies the TextAngular plugin to provide a rich text editor that serves up HTML.

By the way, this was completely ripped off of [Texttalk's Angular Schema Form TinyMCE plugin](https://github.com/Textalk/angular-schema-form-tinymce).

Installation
------------
The editor is an add-on to the Bootstrap decorator. To use it, just include
`bootstrap-ta.min.js` *after* `dist/bootstrap-decorator.min.js`.

Easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install angular-schema-form-text-angular
```

You'll need to load a few additional files to use the editor:

**Be sure to load this projects files after you load angular schema form**

1. Angular
2. The [TextAngular](https://github.com/fraywing/textAngular) source file
3. **Angular Schema Form**
4. The Angular Schema Form TextAngular files (this project)

Example

```HTML
<script src="/bower_components/angular/angular.min.js"></script>
<script src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script src="/bower_components/textAngular/dist/textAngular.js"></script>
<script src="/bower_components/textAngular/dist/textAngularSetup.js"></script>
<script src="/bower_components/angular-schema-form/schema-form.min.js"></script>
<script src="/bower_components/angular-schema-form-text-angular/bootstrap-ta.js"></script>

```

When you create your module, be sure to depend on this project's module as well.

```javascript
angular.module('yourModule', ['schemaForm', 'schemaForm-textAngular']);
```

Usage
-----
The TextAngular add-on adds a new form type, `wysiwyg`, and a new default
mapping.

|  Form Type     |   Becomes    |
|:---------------|:------------:|
|  wysiwyg       |  a TextAngular widget |


| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "html"   |   textangular   |


Options
-------
Please see [TextAngular](https://github.com/fraywing/textAngular) documentation for applying configuration options.
