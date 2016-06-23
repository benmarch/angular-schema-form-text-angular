angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/textAngular/text-angular.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div\n    text-angular=\"form.tinymceOptions\"\n    ng-model=\"$$value$$\"\n    style=\"background-color: white\"\n    schema-validate=\"form\"\n  ></div>\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");}]);
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
