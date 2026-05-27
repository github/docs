{% rowheaders %}

| Query name | Category | Severity |
| --- | --- | --- |
| ['import *' may pollute namespace](https://codeql.github.com/codeql-query-help/python/py-polluting-import/) | Maintainability | Recommendation |
| [Backspace escape in regular expression](https://codeql.github.com/codeql-query-help/python/py-regex-backspace-escape/) | Maintainability | Recommendation |
| [Commented-out code](https://codeql.github.com/codeql-query-help/python/py-commented-out-code/) | Maintainability | Recommendation |
| [Comparison of constants](https://codeql.github.com/codeql-query-help/python/py-comparison-of-constants/) | Maintainability | Warning |
| [Comparison of identical values](https://codeql.github.com/codeql-query-help/python/py-comparison-of-identical-expressions/) | Maintainability | Warning |
| [Constant in conditional expression or statement](https://codeql.github.com/codeql-query-help/python/py-constant-conditional-expression/) | Maintainability | Warning |
| [Duplicate key in dict literal](https://codeql.github.com/codeql-query-help/python/py-duplicate-key-dict-literal/) | Maintainability | Warning |
| [Duplication in regular expression character class](https://codeql.github.com/codeql-query-help/python/py-regex-duplicate-in-character-class/) | Maintainability | Warning |
| [First parameter of a class method is not named 'cls'](https://codeql.github.com/codeql-query-help/python/py-not-named-cls/) | Maintainability | Recommendation |
| [First parameter of a method is not named 'self'](https://codeql.github.com/codeql-query-help/python/py-not-named-self/) | Maintainability | Recommendation |
| [Implicit string concatenation in a list](https://codeql.github.com/codeql-query-help/python/py-implicit-string-concatenation-in-list/) | Maintainability | Warning |
| [Imprecise assert](https://codeql.github.com/codeql-query-help/python/py-imprecise-assert/) | Maintainability | Recommendation |
| [Module imports itself](https://codeql.github.com/codeql-query-help/python/py-import-own-module/) | Maintainability | Recommendation |
| [Module is imported more than once](https://codeql.github.com/codeql-query-help/python/py-repeated-import/) | Maintainability | Recommendation |
| [Module is imported with 'import' and 'import from'](https://codeql.github.com/codeql-query-help/python/py-import-and-import-from/) | Maintainability | Recommendation |
| [Nested loops with same variable](https://codeql.github.com/codeql-query-help/python/py-nested-loops-with-same-variable/) | Maintainability | Recommendation |
| [Overly complex `__del__` method](https://codeql.github.com/codeql-query-help/python/py-overly-complex-delete/) | Maintainability | Recommendation |
| [Redundant comparison](https://codeql.github.com/codeql-query-help/python/py-redundant-comparison/) | Maintainability | Warning |
| [Should use a 'with' statement](https://codeql.github.com/codeql-query-help/python/py-should-use-with/) | Maintainability | Recommendation |
| [Statement has no effect](https://codeql.github.com/codeql-query-help/python/py-ineffectual-statement/) | Maintainability | Recommendation |
| [Unnecessary 'else' clause in loop](https://codeql.github.com/codeql-query-help/python/py-redundant-else/) | Maintainability | Warning |
| [Unnecessary lambda](https://codeql.github.com/codeql-query-help/python/py-unnecessary-lambda/) | Maintainability | Recommendation |
| [Unnecessary pass](https://codeql.github.com/codeql-query-help/python/py-unnecessary-pass/) | Maintainability | Warning |
| [Unreachable code](https://codeql.github.com/codeql-query-help/python/py-unreachable-statement/) | Maintainability | Warning |
| [Unused argument in a formatting call](https://codeql.github.com/codeql-query-help/python/py-str-format-surplus-argument/) | Maintainability | Warning |
| [Unused global variable](https://codeql.github.com/codeql-query-help/python/py-unused-global-variable/) | Maintainability | Recommendation |
| [Unused import](https://codeql.github.com/codeql-query-help/python/py-unused-import/) | Maintainability | Recommendation |
| [Unused local variable](https://codeql.github.com/codeql-query-help/python/py-unused-local-variable/) | Maintainability | Recommendation |
| [Unused named argument in formatting call](https://codeql.github.com/codeql-query-help/python/py-str-format-surplus-named-argument/) | Maintainability | Warning |
| [Use of 'global' at module level](https://codeql.github.com/codeql-query-help/python/py-redundant-global-declaration/) | Maintainability | Warning |
| [Use of the return value of a procedure](https://codeql.github.com/codeql-query-help/python/py-procedure-return-value-used/) | Maintainability | Warning |
| [Variable defined multiple times](https://codeql.github.com/codeql-query-help/python/py-multiple-definition/) | Maintainability | Warning |
| [`__del__` is called explicitly](https://codeql.github.com/codeql-query-help/python/py-explicit-call-to-delete/) | Reliability | Warning |
| [`__eq__` not overridden when adding attributes](https://codeql.github.com/codeql-query-help/python/py-missing-equals/) | Reliability | Warning |
| [`__init__` method calls overridden method](https://codeql.github.com/codeql-query-help/python/py-init-calls-subclass/) | Reliability | Warning |
| [`__init__` method is a generator](https://codeql.github.com/codeql-query-help/python/py-init-method-is-generator/) | Reliability | Error |
| [`__init__` method returns a value](https://codeql.github.com/codeql-query-help/python/py-explicit-return-in-init/) | Reliability | Error |
| [`__iter__` method returns a non-iterator](https://codeql.github.com/codeql-query-help/python/py-iter-returns-non-iterator/) | Reliability | Error |
| [An assert statement has a side-effect](https://codeql.github.com/codeql-query-help/python/py-side-effect-in-assert/) | Reliability | Error |
| [Asserting a tuple](https://codeql.github.com/codeql-query-help/python/py-asserts-tuple/) | Reliability | Error |
| [Comparison using is when operands support `__eq__`](https://codeql.github.com/codeql-query-help/python/py-comparison-using-is/) | Reliability | Warning |
| [Conflicting attributes in base classes](https://codeql.github.com/codeql-query-help/python/py-conflicting-attributes/) | Reliability | Warning |
| [Empty except](https://codeql.github.com/codeql-query-help/python/py-empty-except/) | Reliability | Recommendation |
| [Encoding error](https://codeql.github.com/codeql-query-help/python/py-encoding-error/) | Reliability | Error |
| [Except block handles 'BaseException'](https://codeql.github.com/codeql-query-help/python/py-catch-base-exception/) | Reliability | Recommendation |
| [Explicit export is not defined](https://codeql.github.com/codeql-query-help/python/py-undefined-export/) | Reliability | Error |
| [Explicit returns mixed with implicit (fall through) returns](https://codeql.github.com/codeql-query-help/python/py-mixed-returns/) | Reliability | Recommendation |
| [File is not always closed](https://codeql.github.com/codeql-query-help/python/py-file-not-closed/) | Reliability | Warning |
| [First argument to super() is not enclosing class](https://codeql.github.com/codeql-query-help/python/py-super-not-enclosing-class/) | Reliability | Error |
| [Formatted object is not a mapping](https://codeql.github.com/codeql-query-help/python/py-percent-format-not-mapping/) | Reliability | Error |
| [Formatting string mixes implicitly and explicitly numbered fields](https://codeql.github.com/codeql-query-help/python/py-str-format-mixed-fields/) | Reliability | Error |
| [Illegal raise](https://codeql.github.com/codeql-query-help/python/py-illegal-raise/) | Reliability | Error |
| [Incomplete ordering](https://codeql.github.com/codeql-query-help/python/py-incomplete-ordering/) | Reliability | Warning |
| [Inconsistent equality and hashing](https://codeql.github.com/codeql-query-help/python/py-equals-hash-mismatch/) | Reliability | Warning |
| [Inconsistent equality and inequality](https://codeql.github.com/codeql-query-help/python/py-inconsistent-equality/) | Reliability | Warning |
| [Inconsistent method resolution order](https://codeql.github.com/codeql-query-help/python/py-inconsistent-mro/) | Reliability | Error |
| [Iterable can be either a string or a sequence](https://codeql.github.com/codeql-query-help/python/py-iteration-string-and-sequence/) | Reliability | Error |
| [Iterator does not return self from `__iter__` method](https://codeql.github.com/codeql-query-help/python/py-iter-returns-non-self/) | Reliability | Error |
| [Loop variable capture](https://codeql.github.com/codeql-query-help/python/py-loop-variable-capture/) | Reliability | Error |
| [Maybe missing 'self' in comparison](https://codeql.github.com/codeql-query-help/python/py-comparison-missing-self/) | Reliability | Warning |
| [Membership test with a non-container](https://codeql.github.com/codeql-query-help/python/py-member-test-non-container/) | Reliability | Error |
| [Mismatch between signature and use of an overridden method](https://codeql.github.com/codeql-query-help/python/py-inheritance-incorrect-overridden-signature/) | Reliability | Recommendation |
| [Mismatch between signature and use of an overriding method](https://codeql.github.com/codeql-query-help/python/py-inheritance-incorrect-overriding-signature/) | Reliability | Error |
| [Mismatch in multiple assignment](https://codeql.github.com/codeql-query-help/python/py-mismatched-multiple-assignment/) | Reliability | Error |
| [Missing call to superclass `__del__` during object destruction](https://codeql.github.com/codeql-query-help/python/py-missing-call-to-delete/) | Reliability | Error |
| [Missing call to superclass `__init__` during object initialization](https://codeql.github.com/codeql-query-help/python/py-missing-call-to-init/) | Reliability | Error |
| [Missing named arguments in formatting call](https://codeql.github.com/codeql-query-help/python/py-str-format-missing-named-argument/) | Reliability | Error |
| [Missing part of special group in regular expression](https://codeql.github.com/codeql-query-help/python/py-regex-incomplete-special-group/) | Reliability | Warning |
| [Modification of dictionary returned by locals()](https://codeql.github.com/codeql-query-help/python/py-modification-of-locals/) | Reliability | Warning |
| [Modification of parameter with default](https://codeql.github.com/codeql-query-help/python/py-modification-of-default-value/) | Reliability | Error |
| [Multiple calls to `__del__` during object destruction](https://codeql.github.com/codeql-query-help/python/py-multiple-calls-to-delete/) | Reliability | Warning |
| [Multiple calls to `__init__` during object initialization](https://codeql.github.com/codeql-query-help/python/py-multiple-calls-to-init/) | Reliability | Warning |
| [Mutation of descriptor in `__get__` or `__set__` method](https://codeql.github.com/codeql-query-help/python/py-mutable-descriptor/) | Reliability | Error |
| [Nested loops with same variable reused after inner loop body](https://codeql.github.com/codeql-query-help/python/py-nested-loops-with-same-variable-reused/) | Reliability | Error |
| [Non-callable called](https://codeql.github.com/codeql-query-help/python/py-call-to-non-callable/) | Reliability | Error |
| [Non-exception in 'except' clause](https://codeql.github.com/codeql-query-help/python/py-useless-except/) | Reliability | Error |
| [Non-iterable used in for loop](https://codeql.github.com/codeql-query-help/python/py-non-iterable-in-for-loop/) | Reliability | Error |
| [Non-standard exception raised in special method](https://codeql.github.com/codeql-query-help/python/py-unexpected-raise-in-special-method/) | Reliability | Recommendation |
| [Raising `NotImplemented`](https://codeql.github.com/codeql-query-help/python/py-raise-not-implemented/) | Reliability | Warning |
| [Redundant assignment](https://codeql.github.com/codeql-query-help/python/py-redundant-assignment/) | Reliability | Error |
| [Returning tuples with varying lengths](https://codeql.github.com/codeql-query-help/python/py-mixed-tuple-returns/) | Reliability | Recommendation |
| [Signature mismatch in overriding method](https://codeql.github.com/codeql-query-help/python/py-inheritance-signature-mismatch/) | Reliability | Warning |
| [Special method has incorrect signature](https://codeql.github.com/codeql-query-help/python/py-special-method-wrong-signature/) | Reliability | Error |
| [Superclass attribute shadows subclass method](https://codeql.github.com/codeql-query-help/python/py-attribute-shadows-method/) | Reliability | Error |
| [Suspicious unused loop iteration variable](https://codeql.github.com/codeql-query-help/python/py-unused-loop-variable/) | Reliability | Error |
| [Syntax error](https://codeql.github.com/codeql-query-help/python/py-syntax-error/) | Reliability | Error |
| [Testing equality to None](https://codeql.github.com/codeql-query-help/python/py-test-equals-none/) | Reliability | Recommendation |
| [Too few arguments in formatting call](https://codeql.github.com/codeql-query-help/python/py-str-format-missing-argument/) | Reliability | Error |
| [Unhashable object hashed](https://codeql.github.com/codeql-query-help/python/py-hash-unhashable-value/) | Reliability | Error |
| [Unmatchable caret in regular expression](https://codeql.github.com/codeql-query-help/python/py-regex-unmatchable-caret/) | Reliability | Error |
| [Unmatchable dollar in regular expression](https://codeql.github.com/codeql-query-help/python/py-regex-unmatchable-dollar/) | Reliability | Error |
| [Unreachable `except` block](https://codeql.github.com/codeql-query-help/python/py-unreachable-except/) | Reliability | Error |
| [Unsupported format character](https://codeql.github.com/codeql-query-help/python/py-percent-format-unsupported-character/) | Reliability | Error |
| [Unused exception object](https://codeql.github.com/codeql-query-help/python/py-unused-exception-object/) | Reliability | Error |
| [Use of a print statement at module level](https://codeql.github.com/codeql-query-help/python/py-print-during-import/) | Reliability | Recommendation |
| [Use of exit() or quit()](https://codeql.github.com/codeql-query-help/python/py-use-of-exit-or-quit/) | Reliability | Warning |
| [Wrong name for an argument in a call](https://codeql.github.com/codeql-query-help/python/py-call-wrong-named-argument/) | Reliability | Error |
| [Wrong name for an argument in a class instantiation](https://codeql.github.com/codeql-query-help/python/py-call-wrong-named-class-argument/) | Reliability | Error |
| [Wrong number of arguments for format](https://codeql.github.com/codeql-query-help/python/py-percent-format-wrong-arguments/) | Reliability | Error |
| [Wrong number of arguments in a call](https://codeql.github.com/codeql-query-help/python/py-call-wrong-arguments/) | Reliability | Error |
| [Wrong number of arguments in a class instantiation](https://codeql.github.com/codeql-query-help/python/py-call-wrong-number-class-arguments/) | Reliability | Error |

{% endrowheaders %}
