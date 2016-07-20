angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/textAngular/text-angular.html","<div class=\"form-group col-md-12\" ng-class=\"(form.htmlClass || \'\').split(\' \').concat([{\'has-error\': hasError()}])\">\n    <label class=\"control-label\" ng-class=\"(form.labelHtmlClass || \'\').split(\' \')\" ng-show=\"showTitle()\">{{form.title}}</label>\n    <div ng-if=\"!form.readonly\" ng-class=\"(form.fieldHtmlClass || \'\').split(\' \')\">\n        <div text-angular=\"form.taOptions\"\n             ng-model=\"$$value$$\"\n             style=\"background-color: white\"\n             schema-validate=\"form\"\n             ></div>\n    </div>\n    <div ng-if=\"form.readonly\" ng-bind-html=\"$$value$$\" ng-class=\"(form.fieldHtmlClass || \'\').split(\' \')\"></div>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");}]);
angular.module('schemaForm-textAngular', ['schemaForm', 'textAngular']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var wysiwyg = function(name, schema, options) {
    if (schema.type === 'string' && schema.format == 'html') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'wysiwyg';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.string.unshift(wysiwyg);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'wysiwyg',
    'directives/decorators/bootstrap/textAngular/text-angular.html');
    schemaFormDecoratorsProvider.createDirective('wysiwyg',
    'directives/decorators/bootstrap/textAngular/text-angular.html');
  }]);
