## Pyright Configuration

Pyright offers flexible configuration options specified in a JSON-formatted text configuration. By default, the file is called “pyrightconfig.json” and is located within the root directory of your project. Multi-root workspaces (“Add Folder to Workspace…”) are supported, and each workspace root can have its own “pyrightconfig.json” file. For a sample pyrightconfig.json file, see [below](configuration.md#sample-config-file).

Pyright settings can also be specified in a `[tool.pyright]` section of a “pyproject.toml” file. A “pyrightconfig.json” file always takes precedent over “pyproject.toml” if both are present. For a sample pyproject.toml file, see [below](configuration.md#sample-pyprojecttoml-file).

Relative paths specified within the config file are relative to the config file’s location. Paths with shell variables (including `~`) are not supported. Paths within a the config file should generally be relative paths so the config file can be shared by other developers who contribute to the project.

## Main Configuration Options

**include** [array of paths, optional]: Paths of directories or files that should be included. If no paths are specified, pyright defaults to the directory that contains the config file. Paths may contain wildcard characters ** (a directory or multiple levels of directories), * (a sequence of zero or more characters), or ? (a single character). If no include paths are specified, the root path for the workspace is assumed.

**exclude** [array of paths, optional]: Paths of directories or files that should not be included. These override the includes directories, allowing specific subdirectories to be ignored. Note that files in the exclude paths may still be included in the analysis if they are referenced (imported) by source files that are not excluded. Paths may contain wildcard characters ** (a directory or multiple levels of directories), * (a sequence of zero or more characters), or ? (a single character). If no exclude paths are specified, Pyright automatically excludes the following: `**/node_modules`, `**/__pycache__`, `**/.*` and any virtual environment directories.

**ignore** [array of paths, optional]: Paths of directories or files whose diagnostic output (errors and warnings) should be suppressed even if they are an included file or within the transitive closure of an included file. Paths may contain wildcard characters ** (a directory or multiple levels of directories), * (a sequence of zero or more characters), or ? (a single character).

**strict** [array of paths, optional]: Paths of directories or files that should use “strict” analysis if they are included. This is the same as manually adding a “# pyright: strict” comment. In strict mode, most type-checking rules are enabled. Refer to [this table](configuration.md#diagnostic-rule-defaults) for details about which rules are enabled in strict mode. Paths may contain wildcard characters ** (a directory or multiple levels of directories), * (a sequence of zero or more characters), or ? (a single character).

**defineConstant** [map of constants to values (boolean or string), optional]: Set of identifiers that should be assumed to contain a constant value wherever used within this program. For example, `{ "DEBUG": true }` indicates that pyright should assume that the identifier `DEBUG` will always be equal to `True`. If this identifier is used within a conditional expression (such as `if not DEBUG:`) pyright will use the indicated value to determine whether the guarded block is reachable or not. Member expressions that reference one of these constants (e.g. `my_module.DEBUG`) are also supported.

**typeshedPath** [path, optional]: Path to a directory that contains typeshed type stub files. Pyright ships with a bundled copy of typeshed type stubs. If you want to use a different version of typeshed stubs, you can clone the [typeshed github repo](https://github.com/python/typeshed) to a local directory and reference the location with this path. This option is useful if you’re actively contributing updates to typeshed.

**stubPath** [path, optional]: Path to a directory that contains custom type stubs. Each package's type stub file(s) are expected to be in its own subdirectory. The default value of this setting is "./typings". (typingsPath is now deprecated)

**venvPath** [path, optional]: Path to a directory containing one or more subdirectories, each of which contains a virtual environment. When used in conjunction with a **venv** setting (see below), pyright will search for imports in the virtual environment’s site-packages directory rather than the paths specified by the default Python interpreter. If you are working on a project with other developers, it is best not to specify this setting in the config file, since this path will typically differ for each developer. Instead, it can be specified on the command line or in a per-user setting. For more details, refer to the [import resolution](import-resolution.md#configuring-your-python-environment) documentation.

**venv** [string, optional]: Used in conjunction with the venvPath, specifies the virtual environment to use. For more details, refer to the [import resolution](import-resolution.md#configuring-your-python-environment) documentation.

**verboseOutput** [boolean]: Specifies whether output logs should be verbose. This is useful when diagnosing certain problems like import resolution issues.

**extraPaths** [array of strings, optional]: Additional search paths that will be used when searching for modules imported by files.

**pythonVersion** [string, optional]: Specifies the version of Python that will be used to execute the source code. The version should be specified as a string in the format "M.m" where M is the major version and m is the minor (e.g. `"3.0"` or `"3.6"`). If a version is provided, pyright will generate errors if the source code makes use of language features that are not supported in that version. It will also tailor its use of type stub files, which conditionalizes type definitions based on the version. If no version is specified, pyright will use the version of the current python interpreter, if one is present.

**pythonPlatform** [string, optional]: Specifies the target platform that will be used to execute the source code. Should be one of `"Windows"`, `"Darwin"`, `"Linux"`, or `"All"`. If specified, pyright will tailor its use of type stub files, which conditionalize type definitions based on the platform. If no platform is specified, pyright will use the current platform.

**executionEnvironments** [array of objects, optional]: Specifies a list of execution environments (see [below](configuration.md#execution-environment-options)). Execution environments are searched from start to finish by comparing the path of a source file with the root path specified in the execution environment.

**typeCheckingMode** ["off", "basic", "strict"]: Specifies the default rule set to use. Some rules can be overridden using additional configuration flags documented below. The default value for this setting is "basic". If set to "off", all type-checking rules are disabled, but Python syntax and semantic errors are still reported.

**useLibraryCodeForTypes** [boolean]: Determines whether pyright reads, parses and analyzes library code to extract type information in the absence of type stub files. Type information will typically be incomplete. We recommend using type stubs where possible. The default value for this option is true.


## Type Check Diagnostics Settings
The following settings control pyright’s diagnostic output (warnings or errors). Unless otherwise specified, each diagnostic setting can specify a boolean value (`false` indicating that no error is generated and `true` indicating that an error is generated). Alternatively, a string value of `"none"`, `"warning"`, `"information"`, or `"error"` can be used to specify the diagnostic level.

<a name="strictListInference"></a> **strictListInference** [boolean]: When inferring the type of a list, use strict type assumptions. For example, the expression `[1, 'a', 3.4]` could be inferred to be of type `list[Any]` or `list[int | str | float]`. If this setting is true, it will use the latter (stricter) type. The default value for this setting is `false`.

<a name="strictDictionaryInference"></a> **strictDictionaryInference** [boolean]: When inferring the type of a dictionary’s keys and values, use strict type assumptions. For example, the expression `{'a': 1, 'b': 'a'}` could be inferred to be of type `dict[str, Any]` or `dict[str, int | str]`. If this setting is true, it will use the latter (stricter) type. The default value for this setting is `false`.

<a name="strictSetInference"></a> **strictSetInference** [boolean]: When inferring the type of a set, use strict type assumptions. For example, the expression `{1, 'a', 3.4}` could be inferred to be of type `set[Any]` or `set[int | str | float]`. If this setting is true, it will use the latter (stricter) type. The default value for this setting is `false`.

<a name="analyzeUnannotatedFunctions"></a> **analyzeUnannotatedFunctions** [boolean]: Analyze and report errors for functions and methods that have no type annotations for input parameters or return types. The default value for this setting is `true`.

<a name="strictParameterNoneValue"></a> **strictParameterNoneValue** [boolean]: PEP 484 indicates that when a function parameter is assigned a default value of None, its type should implicitly be Optional even if the explicit type is not. When enabled, this rule requires that parameter type annotations use Optional explicitly in this case. The default value for this setting is `true`.

<a name="enableTypeIgnoreComments"></a> **enableTypeIgnoreComments** [boolean]: PEP 484 defines support for "# type: ignore" comments. This switch enables or disables support for these comments. The default value for this setting is `true`. This does not affect "# pyright: ignore" comments.

<a name="deprecateTypingAliases"></a> **deprecateTypingAliases** [boolean]: PEP 585 indicates that aliases to types in standard collections that were introduced solely to support generics are deprecated as of Python 3.9. This switch controls whether these are treated as deprecated. This applies only when pythonVersion is 3.9 or newer. The default value for this setting is `false` but may be switched to `true` in the future.

<a name="enableExperimentalFeatures"></a> **enableExperimentalFeatures** [boolean]: Enables a set of experimental (mostly undocumented) features that correspond to proposed or exploratory changes to the Python typing standard. These features will likely change or be removed, so they should not be used except for experimentation purposes. The default value for this setting is `false`.

<a name="disableBytesTypePromotions"></a> **disableBytesTypePromotions** [boolean]: Disables legacy behavior where `bytearray` and `memoryview` are considered subtypes of `bytes`. [PEP 688](https://peps.python.org/pep-0688/#no-special-meaning-for-bytes) deprecates this behavior, but this switch is provided to restore the older behavior. The default value for this setting is `false`.

<a name="reportGeneralTypeIssues"></a> **reportGeneralTypeIssues** [boolean or string, optional]: Generate or suppress diagnostics for general type inconsistencies, unsupported operations, argument/parameter mismatches, etc. This covers all of the basic type-checking rules not covered by other rules. It does not include syntax errors. The default value for this setting is `"error"`.

<a name="reportPropertyTypeMismatch"></a> **reportPropertyTypeMismatch** [boolean or string, optional]: Generate or suppress diagnostics for properties where the type of the value passed to the setter is not assignable to the value returned by the getter. Such mismatches violate the intended use of properties, which are meant to act like variables. The default value for this setting is `"none"`.

<a name="reportFunctionMemberAccess"></a> **reportFunctionMemberAccess** [boolean or string, optional]: Generate or suppress diagnostics for non-standard member accesses for functions. The default value for this setting is `"none"`.

<a name="reportMissingImports"></a> **reportMissingImports** [boolean or string, optional]: Generate or suppress diagnostics for imports that have no corresponding imported python file or type stub file. The default value for this setting is `"error"`.

<a name="reportMissingModuleSource"></a> **reportMissingModuleSource** [boolean or string, optional]: Generate or suppress diagnostics for imports that have no corresponding source file. This happens when a type stub is found, but the module source file was not found, indicating that the code may fail at runtime when using this execution environment. Type checking will be done using the type stub. The default value for this setting is `"warning"`.

<a name="reportMissingTypeStubs"></a> **reportMissingTypeStubs** [boolean or string, optional]: Generate or suppress diagnostics for imports that have no corresponding type stub file (either a typeshed file or a custom type stub). The type checker requires type stubs to do its best job at analysis. The default value for this setting is `"none"`. Note that there is a corresponding quick fix for this diagnostics that let you generate custom type stub to improve editing experiences.

<a name="reportImportCycles"></a> **reportImportCycles** [boolean or string, optional]: Generate or suppress diagnostics for cyclical import chains. These are not errors in Python, but they do slow down type analysis and often hint at architectural layering issues. Generally, they should be avoided. The default value for this setting is `"none"`. Note that there are import cycles in the typeshed stdlib typestub files that are ignored by this setting.

<a name="reportUnusedImport"></a> **reportUnusedImport** [boolean or string, optional]: Generate or suppress diagnostics for an imported symbol that is not referenced within that file. The default value for this setting is `"none"`.

<a name="reportUnusedClass"></a> **reportUnusedClass** [boolean or string, optional]: Generate or suppress diagnostics for a class with a private name (starting with an underscore) that is not accessed. The default value for this setting is `"none"`.

<a name="reportUnusedFunction"></a> **reportUnusedFunction** [boolean or string, optional]: Generate or suppress diagnostics for a function or method with a private name (starting with an underscore) that is not accessed. The default value for this setting is `"none"`.

<a name="reportUnusedVariable"></a> **reportUnusedVariable** [boolean or string, optional]: Generate or suppress diagnostics for a variable that is not accessed. The default value for this setting is `"none"`. Variables whose names begin with an underscore are exempt from this check.

<a name="reportDuplicateImport"></a> **reportDuplicateImport** [boolean or string, optional]: Generate or suppress diagnostics for an imported symbol or module that is imported more than once. The default value for this setting is `"none"`.

<a name="reportWildcardImportFromLibrary"></a> **reportWildcardImportFromLibrary** [boolean or string, optional]: Generate or suppress diagnostics for a wildcard import from an external library. The use of this language feature is highly discouraged and can result in bugs when the library is updated. The default value for this setting is `"warning"`.

<a name="reportOptionalSubscript"></a> **reportOptionalSubscript** [boolean or string, optional]: Generate or suppress diagnostics for an attempt to subscript (index) a variable with an Optional type. The default value for this setting is `"error"`.

<a name="reportOptionalMemberAccess"></a> **reportOptionalMemberAccess** [boolean or string, optional]: Generate or suppress diagnostics for an attempt to access a member of a variable with an Optional type. The default value for this setting is `"error"`.

<a name="reportOptionalCall"></a> **reportOptionalCall** [boolean or string, optional]: Generate or suppress diagnostics for an attempt to call a variable with an Optional type. The default value for this setting is `"error"`.

<a name="reportOptionalIterable"></a> **reportOptionalIterable** [boolean or string, optional]: Generate or suppress diagnostics for an attempt to use an Optional type as an iterable value (e.g. within a `for` statement). The default value for this setting is `"error"`.

<a name="reportOptionalContextManager"></a> **reportOptionalContextManager** [boolean or string, optional]: Generate or suppress diagnostics for an attempt to use an Optional type as a context manager (as a parameter to a `with` statement). The default value for this setting is `"error"`.

<a name="reportOptionalOperand"></a> **reportOptionalOperand** [boolean or string, optional]: Generate or suppress diagnostics for an attempt to use an Optional type as an operand to a binary or unary operator (like `+`, `==`, `or`, `not`). The default value for this setting is `"error"`.

<a name="reportTypedDictNotRequiredAccess"></a> **reportTypedDictNotRequiredAccess** [boolean or string, optional]: Generate or suppress diagnostics for an attempt to access a non-required field within a TypedDict without first checking whether it is present. The default value for this setting is `"error"`.

<a name="reportUntypedFunctionDecorator"></a> **reportUntypedFunctionDecorator** [boolean or string, optional]: Generate or suppress diagnostics for function decorators that have no type annotations. These obscure the function type, defeating many type analysis features. The default value for this setting is `"none"`.

<a name="reportUntypedClassDecorator"></a> **reportUntypedClassDecorator** [boolean or string, optional]: Generate or suppress diagnostics for class decorators that have no type annotations. These obscure the class type, defeating many type analysis features. The default value for this setting is `"none"`.

<a name="reportUntypedBaseClass"></a> **reportUntypedBaseClass** [boolean or string, optional]: Generate or suppress diagnostics for base classes whose type cannot be determined statically. These obscure the class type, defeating many type analysis features. The default value for this setting is `"none"`.

<a name="reportUntypedNamedTuple"></a> **reportUntypedNamedTuple** [boolean or string, optional]: Generate or suppress diagnostics when “namedtuple” is used rather than “NamedTuple”. The former contains no type information, whereas the latter does. The default value for this setting is `"none"`.

<a name="reportPrivateUsage"></a> **reportPrivateUsage** [boolean or string, optional]: Generate or suppress diagnostics for incorrect usage of private or protected variables or functions. Protected class members begin with a single underscore (“_”) and can be accessed only by subclasses. Private class members begin with a double underscore but do not end in a double underscore and can be accessed only within the declaring class. Variables and functions declared outside of a class are considered private if their names start with either a single or double underscore, and they cannot be accessed outside of the declaring module. The default value for this setting is `"none"`.

<a name="reportTypeCommentUsage"></a> **reportTypeCommentUsage** [boolean or string, optional]: Prior to Python 3.5, the grammar did not support type annotations, so types needed to be specified using “type comments”. Python 3.5 eliminated the need for function type comments, and Python 3.6 eliminated the need for variable type comments. Future versions of Python will likely deprecate all support for type comments. If enabled, this check will flag any type comment usage unless it is required for compatibility with the specified language version. The default value for this setting is `"none"`.

<a name="reportPrivateImportUsage"></a> **reportPrivateImportUsage** [boolean or string, optional]: Generate or suppress diagnostics for use of a symbol from a "py.typed" module that is not meant to be exported from that module. The default value for this setting is `"error"`.

<a name="reportConstantRedefinition"></a> **reportConstantRedefinition** [boolean or string, optional]: Generate or suppress diagnostics for attempts to redefine variables whose names are all-caps with underscores and numerals. The default value for this setting is `"none"`.

<a name="reportDeprecated"></a> **reportDeprecated** [boolean or string, optional]: Generate or suppress diagnostics for use of a class or function that has been marked as deprecated. The default value for this setting is `"none"`.

<a name="reportIncompatibleMethodOverride"></a> **reportIncompatibleMethodOverride** [boolean or string, optional]: Generate or suppress diagnostics for methods that override a method of the same name in a base class in an incompatible manner (wrong number of parameters, incompatible parameter types, or incompatible return type). The default value for this setting is `"none"`.

<a name="reportIncompatibleVariableOverride"></a> **reportIncompatibleVariableOverride** [boolean or string, optional]: Generate or suppress diagnostics for class variable declarations that override a symbol of the same name in a base class with a type that is incompatible with the base class symbol type. The default value for this setting is `"none"`.

<a name="reportInconsistentConstructor"></a> **reportInconsistentConstructor** [boolean or string, optional]: Generate or suppress diagnostics when an `__init__` method signature is inconsistent with a `__new__` signature. The default value for this setting is `"none"`.

<a name="reportOverlappingOverload"></a> **reportOverlappingOverload** [boolean or string, optional]: Generate or suppress diagnostics for function overloads that overlap in signature and obscure each other or have incompatible return types. The default value for this setting is `"none"`.

<a name="reportMissingSuperCall"></a> **reportMissingSuperCall** [boolean or string, optional]: Generate or suppress diagnostics for `__init__`, `__init_subclass__`, `__enter__` and `__exit__` methods in a subclass that fail to call through to the same-named method on a base class. The default value for this setting is `"none"`.

<a name="reportUninitializedInstanceVariable"></a> **reportUninitializedInstanceVariable** [boolean or string, optional]: Generate or suppress diagnostics for instance variables within a class that are not initialized or declared within the class body or the `__init__` method. The default value for this setting is `"none"`.

<a name="reportInvalidStringEscapeSequence"></a> **reportInvalidStringEscapeSequence** [boolean or string, optional]: Generate or suppress diagnostics for invalid escape sequences used within string literals. The Python specification indicates that such sequences will generate a syntax error in future versions. The default value for this setting is `"warning"`.

<a name="reportUnknownParameterType"></a> **reportUnknownParameterType** [boolean or string, optional]: Generate or suppress diagnostics for input or return parameters for functions or methods that have an unknown type. The default value for this setting is `"none"`.

<a name="reportUnknownArgumentType"></a> **reportUnknownArgumentType** [boolean or string, optional]: Generate or suppress diagnostics for call arguments for functions or methods that have an unknown type. The default value for this setting is `"none"`.

<a name="reportUnknownLambdaType"></a> **reportUnknownLambdaType** [boolean or string, optional]: Generate or suppress diagnostics for input or return parameters for lambdas that have an unknown type. The default value for this setting is `"none"`.

<a name="reportUnknownVariableType"></a> **reportUnknownVariableType** [boolean or string, optional]: Generate or suppress diagnostics for variables that have an unknown type. The default value for this setting is `"none"`.

<a name="reportUnknownMemberType"></a> **reportUnknownMemberType** [boolean or string, optional]: Generate or suppress diagnostics for class or instance variables that have an unknown type. The default value for this setting is `"none"`.

<a name="reportMissingParameterType"></a> **reportMissingParameterType** [boolean or string, optional]: Generate or suppress diagnostics for input parameters for functions or methods that are missing a type annotation. The `self` and `cls` parameters used within methods are exempt from this check. The default value for this setting is `"none"`.

<a name="reportMissingTypeArgument"></a> **reportMissingTypeArgument** [boolean or string, optional]: Generate or suppress diagnostics when a generic class is used without providing explicit or implicit type arguments. The default value for this setting is `"none"`.

<a name="reportInvalidTypeVarUse"></a> **reportInvalidTypeVarUse** [boolean or string, optional]: Generate or suppress diagnostics when a TypeVar is used inappropriately (e.g. if a TypeVar appears only once) within a generic function signature. The default value for this setting is `"warning"`.

<a name="reportCallInDefaultInitializer"></a> **reportCallInDefaultInitializer** [boolean or string, optional]: Generate or suppress diagnostics for function calls, list expressions, set expressions, or dictionary expressions within a default value initialization expression. Such calls can mask expensive operations that are performed at module initialization time. The default value for this setting is `"none"`.

<a name="reportUnnecessaryIsInstance"></a> **reportUnnecessaryIsInstance** [boolean or string, optional]: Generate or suppress diagnostics for `isinstance` or `issubclass` calls where the result is statically determined to be always true. Such calls are often indicative of a programming error. The default value for this setting is `"none"`.

<a name="reportUnnecessaryCast"></a> **reportUnnecessaryCast** [boolean or string, optional]: Generate or suppress diagnostics for `cast` calls that are statically determined to be unnecessary. Such calls are sometimes indicative of a programming error. The default value for this setting is `"none"`.

<a name="reportUnnecessaryComparison"></a> **reportUnnecessaryComparison** [boolean or string, optional]: Generate or suppress diagnostics for `==` or `!=` comparisons or other conditional expressions that are statically determined to always evaluate to False or True. Such comparisons are sometimes indicative of a programming error. The default value for this setting is `"none"`.

<a name="reportUnnecessaryContains"></a> **reportUnnecessaryContains** [boolean or string, optional]: Generate or suppress diagnostics for `in` operations that are statically determined to always evaluate to False or True. Such operations are sometimes indicative of a programming error. The default value for this setting is `"none"`.

<a name="reportAssertAlwaysTrue"></a> **reportAssertAlwaysTrue** [boolean or string, optional]: Generate or suppress diagnostics for `assert` statement that will provably always assert. This can be indicative of a programming error. The default value for this setting is `"warning"`.

<a name="reportSelfClsParameterName"></a> **reportSelfClsParameterName** [boolean or string, optional]: Generate or suppress diagnostics for a missing or misnamed “self” parameter in instance methods and “cls” parameter in class methods. Instance methods in metaclasses (classes that derive from “type”) are allowed to use “cls” for instance methods. The default value for this setting is `"warning"`.

<a name="reportImplicitStringConcatenation"></a> **reportImplicitStringConcatenation** [boolean or string, optional]: Generate or suppress diagnostics for two or more string literals that follow each other, indicating an implicit concatenation. This is considered a bad practice and often masks bugs such as missing commas. The default value for this setting is `"none"`.

<a name="reportUndefinedVariable"></a> **reportUndefinedVariable** [boolean or string, optional]: Generate or suppress diagnostics for undefined variables. The default value for this setting is `"error"`.

<a name="reportUnboundVariable"></a> **reportUnboundVariable** [boolean or string, optional]: Generate or suppress diagnostics for unbound and possibly unbound variables. The default value for this setting is `"error"`.

<a name="reportInvalidStubStatement"></a> **reportInvalidStubStatement** [boolean or string, optional]: Generate or suppress diagnostics for statements that are syntactically correct but have no purpose within a type stub file. The default value for this setting is `"none"`.

<a name="reportIncompleteStub"></a> **reportIncompleteStub** [boolean or string, optional]: Generate or suppress diagnostics for a module-level `__getattr__` call in a type stub file, indicating that it is incomplete. The default value for this setting is `"none"`.

<a name="reportUnsupportedDunderAll"></a> **reportUnsupportedDunderAll** [boolean or string, optional]: Generate or suppress diagnostics for statements that define or manipulate `__all__` in a way that is not allowed by a static type checker, thus rendering the contents of `__all__` to be unknown or incorrect. Also reports names within the `__all__` list that are not present in the module namespace. The default value for this setting is `"warning"`.

<a name="reportUnusedCallResult"></a> **reportUnusedCallResult** [boolean or string, optional]: Generate or suppress diagnostics for call statements whose return value is not used in any way and is not None. The default value for this setting is `"none"`.

<a name="reportUnusedCoroutine"></a> **reportUnusedCoroutine** [boolean or string, optional]: Generate or suppress diagnostics for call statements whose return value is not used in any way and is a Coroutine. This identifies a common error where an `await` keyword is mistakenly omitted. The default value for this setting is `"error"`.

<a name="reportUnusedExpression"></a> **reportUnusedExpression** [boolean or string, optional]: Generate or suppress diagnostics for simple expressions whose results are not used in any way. The default value for this setting is `"none"`.

<a name="reportUnnecessaryTypeIgnoreComment"></a> **reportUnnecessaryTypeIgnoreComment** [boolean or string, optional]: Generate or suppress diagnostics for a `# type: ignore` or `# pyright: ignore` comment that would have no effect if removed. The default value for this setting is `"none"`.

<a name="reportMatchNotExhaustive"></a> **reportMatchNotExhaustive** [boolean or string, optional]: Generate or suppress diagnostics for a `match` statement that does not provide cases that exhaustively match against all potential types of the target expression. The default value for this setting is `"none"`.

<a name="reportImplicitOverride"></a> **reportImplicitOverride** [boolean or string, optional]: Generate or suppress diagnostics for overridden methods in a class that are missing an explicit `@override` decorator. The default value for this setting is `"none"`.

<a name="reportShadowedImports"></a> **reportShadowedImports** [boolean or string, optional]: Generate or suppress diagnostics for files that are overriding a module in the stdlib. The default value for this setting is `"none"`.

## Execution Environment Options
Pyright allows multiple “execution environments” to be defined for different portions of your source tree. For example, a subtree may be designed to run with different import search paths or a different version of the python interpreter than the rest of the source base.

The following settings can be specified for each execution environment.

**root** [string, required]: Root path for the code that will execute within this execution environment.

**extraPaths** [array of strings, optional]: Additional search paths (in addition to the root path) that will be used when searching for modules imported by files within this execution environment. If specified, this overrides the default extraPaths setting when resolving imports for files within this execution environment. Note that each file’s execution environment mapping is independent, so if file A is in one execution environment and imports a second file B within a second execution environment, any imports from B will use the extraPaths in the second execution environment.

**pythonVersion** [string, optional]: The version of Python used for this execution environment. If not specified, the global `pythonVersion` setting is used instead.

**pythonPlatform** [string, optional]: Specifies the target platform that will be used for this execution environment. If not specified, the global `pythonPlatform` setting is used instead.


## Sample Config File
The following is an example of a pyright config file:
```json
{
  "include": [
    "src"
  ],
  
  "exclude": [
    "**/node_modules",
    "**/__pycache__",
    "src/experimental",
    "src/typestubs"
  ],

  "ignore": [
    "src/oldstuff"
  ],

  "defineConstant": {
    "DEBUG": true
  },

  "stubPath": "src/stubs",

  "reportMissingImports": true,
  "reportMissingTypeStubs": false,

  "pythonVersion": "3.6",
  "pythonPlatform": "Linux",

  "executionEnvironments": [
    {
      "root": "src/web",
      "pythonVersion": "3.5",
      "pythonPlatform": "Windows",
      "extraPaths": [
        "src/service_libs"
      ]
    },
    {
      "root": "src/sdk",
      "pythonVersion": "3.0",
      "extraPaths": [
        "src/backend"
      ]
    },
    {
      "root": "src/tests",
      "extraPaths": [
        "src/tests/e2e",
        "src/sdk"
      ]
    },
    {
      "root": "src"
    }
  ]
}
```

## Sample pyproject.toml File
```toml
[tool.pyright]
include = ["src"]
exclude = ["**/node_modules",
    "**/__pycache__",
    "src/experimental",
    "src/typestubs"
]
ignore = ["src/oldstuff"]
defineConstant = { DEBUG = true }
stubPath = "src/stubs"

reportMissingImports = true
reportMissingTypeStubs = false

pythonVersion = "3.6"
pythonPlatform = "Linux"

executionEnvironments = [
  { root = "src/web", pythonVersion = "3.5", pythonPlatform = "Windows", extraPaths = [ "src/service_libs" ] },
  { root = "src/sdk", pythonVersion = "3.0", extraPaths = [ "src/backend" ] },
  { root = "src/tests", extraPaths = ["src/tests/e2e", "src/sdk" ]},
  { root = "src" }
]
```

## Diagnostic Rule Defaults

Each diagnostic rule has a default severity level that is dictated by the specified type checking mode. The default for each rule can be overridden in the configuration file or settings. In strict type checking mode, overrides may only increase the severity level (e.g. from `"warning"` to `"error"`).

The following table lists the default severity levels for each diagnostic rule within each type checking mode (`"off"`, `"basic"` and `"strict"`).

| Diagnostic Rule                           | Off        | Basic      | Strict     |
| :---------------------------------------- | :--------- | :--------- | :--------- |
| analyzeUnannotatedFunctions               | true       | true       | true       |
| strictParameterNoneValue                  | true       | true       | true       |
| enableTypeIgnoreComments                  | true       | true       | true       |
| disableBytesTypePromotions                | false      | false      | true       |
| strictListInference                       | false      | false      | true       |
| strictDictionaryInference                 | false      | false      | true       |
| strictSetInference                        | false      | false      | true       |
| deprecateTypingAliases                    | false      | false      | false      |
| enableExperimentalFeatures                | false      | false      | false      |
| reportMissingModuleSource                 | "warning"  | "warning"  | "warning"  |
| reportMissingImports                      | "warning"  | "error"    | "error"    |
| reportUndefinedVariable                   | "warning"  | "error"    | "error"    |
| reportAssertAlwaysTrue                    | "none"     | "warning"  | "error"    |
| reportInvalidStringEscapeSequence         | "none"     | "warning"  | "error"    |
| reportInvalidTypeVarUse                   | "none"     | "warning"  | "error"    |
| reportMissingTypeStubs                    | "none"     | "warning"  | "error"    |
| reportSelfClsParameterName                | "none"     | "warning"  | "error"    |
| reportUnsupportedDunderAll                | "none"     | "warning"  | "error"    |
| reportUnusedExpression                    | "none"     | "warning"  | "error"    |
| reportWildcardImportFromLibrary           | "none"     | "warning"  | "error"    |
| reportGeneralTypeIssues                   | "none"     | "error"    | "error"    |
| reportOptionalSubscript                   | "none"     | "error"    | "error"    |
| reportOptionalMemberAccess                | "none"     | "error"    | "error"    |
| reportOptionalCall                        | "none"     | "error"    | "error"    |
| reportOptionalIterable                    | "none"     | "error"    | "error"    |
| reportOptionalContextManager              | "none"     | "error"    | "error"    |
| reportOptionalOperand                     | "none"     | "error"    | "error"    |
| reportTypedDictNotRequiredAccess          | "none"     | "error"    | "error"    |
| reportPrivateImportUsage                  | "none"     | "error"    | "error"    |
| reportUnboundVariable                     | "none"     | "error"    | "error"    |
| reportUnusedCoroutine                     | "none"     | "error"    | "error"    |
| reportConstantRedefinition                | "none"     | "none"     | "error"    |
| reportDeprecated                          | "none"     | "none"     | "error"    |
| reportDuplicateImport                     | "none"     | "none"     | "error"    |
| reportFunctionMemberAccess                | "none"     | "none"     | "error"    |
| reportIncompatibleMethodOverride          | "none"     | "none"     | "error"    |
| reportIncompatibleVariableOverride        | "none"     | "none"     | "error"    |
| reportIncompleteStub                      | "none"     | "none"     | "error"    |
| reportInconsistentConstructor             | "none"     | "none"     | "error"    |
| reportInvalidStubStatement                | "none"     | "none"     | "error"    |
| reportMatchNotExhaustive                  | "none"     | "none"     | "error"    |
| reportMissingParameterType                | "none"     | "none"     | "error"    |
| reportMissingTypeArgument                 | "none"     | "none"     | "error"    |
| reportOverlappingOverload                 | "none"     | "none"     | "error"    |
| reportPrivateUsage                        | "none"     | "none"     | "error"    |
| reportTypeCommentUsage                    | "none"     | "none"     | "error"    |
| reportUnknownArgumentType                 | "none"     | "none"     | "error"    |
| reportUnknownLambdaType                   | "none"     | "none"     | "error"    |
| reportUnknownMemberType                   | "none"     | "none"     | "error"    |
| reportUnknownParameterType                | "none"     | "none"     | "error"    |
| reportUnknownVariableType                 | "none"     | "none"     | "error"    |
| reportUnnecessaryCast                     | "none"     | "none"     | "error"    |
| reportUnnecessaryComparison               | "none"     | "none"     | "error"    |
| reportUnnecessaryContains                 | "none"     | "none"     | "error"    |
| reportUnnecessaryIsInstance               | "none"     | "none"     | "error"    |
| reportUnusedClass                         | "none"     | "none"     | "error"    |
| reportUnusedImport                        | "none"     | "none"     | "error"    |
| reportUnusedFunction                      | "none"     | "none"     | "error"    |
| reportUnusedVariable                      | "none"     | "none"     | "error"    |
| reportUntypedBaseClass                    | "none"     | "none"     | "error"    |
| reportUntypedClassDecorator               | "none"     | "none"     | "error"    |
| reportUntypedFunctionDecorator            | "none"     | "none"     | "error"    |
| reportUntypedNamedTuple                   | "none"     | "none"     | "error"    |
| reportCallInDefaultInitializer            | "none"     | "none"     | "none"     |
| reportImplicitOverride                    | "none"     | "none"     | "none"     |
| reportImplicitStringConcatenation         | "none"     | "none"     | "none"     |
| reportImportCycles                        | "none"     | "none"     | "none"     |
| reportMissingSuperCall                    | "none"     | "none"     | "none"     |
| reportPropertyTypeMismatch                | "none"     | "none"     | "none"     |
| reportShadowedImports                     | "none"     | "none"     | "none"     |
| reportUninitializedInstanceVariable       | "none"     | "none"     | "none"     |
| reportUnnecessaryTypeIgnoreComment        | "none"     | "none"     | "none"     |
| reportUnusedCallResult                    | "none"     | "none"     | "none"     |
