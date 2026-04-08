{% rowheaders %}

| Query name | Category | Severity |
| --- | --- | --- |
| [Block code with a single Response.Write()](https://codeql.github.com/codeql-query-help/csharp/cs-asp-response-write/) | Maintainability | Recommendation |
| [Call to obsolete method](https://codeql.github.com/codeql-query-help/csharp/cs-call-to-obsolete-method/) | Maintainability | Warning |
| [Class has same name as super class](https://codeql.github.com/codeql-query-help/csharp/cs-class-name-matches-base-class/) | Maintainability | Recommendation |
| [Class implements ICloneable](https://codeql.github.com/codeql-query-help/csharp/cs-class-implements-icloneable/) | Maintainability | Recommendation |
| [Constant condition](https://codeql.github.com/codeql-query-help/csharp/cs-constant-condition/) | Maintainability | Warning |
| [Container contents are never accessed](https://codeql.github.com/codeql-query-help/csharp/cs-unused-collection/) | Maintainability | Error |
| [Field masks field in super class](https://codeql.github.com/codeql-query-help/csharp/cs-field-masks-base-field/) | Maintainability | Warning |
| [Futile conditional](https://codeql.github.com/codeql-query-help/csharp/cs-useless-if-statement/) | Maintainability | Warning |
| [Local scope variable shadows member](https://codeql.github.com/codeql-query-help/csharp/cs-local-shadows-member/) | Maintainability | Recommendation |
| [Missed 'readonly' opportunity](https://codeql.github.com/codeql-query-help/csharp/cs-missed-readonly-modifier/) | Maintainability | Recommendation |
| [Missed 'using' opportunity](https://codeql.github.com/codeql-query-help/csharp/cs-missed-using-statement/) | Maintainability | Recommendation |
| [Missed opportunity to use All](https://codeql.github.com/codeql-query-help/csharp/cs-linq-missed-all/) | Maintainability | Recommendation |
| [Missed opportunity to use Cast](https://codeql.github.com/codeql-query-help/csharp/cs-linq-missed-cast/) | Maintainability | Recommendation |
| [Missed opportunity to use OfType](https://codeql.github.com/codeql-query-help/csharp/cs-linq-missed-oftype/) | Maintainability | Recommendation |
| [Missed opportunity to use Select](https://codeql.github.com/codeql-query-help/csharp/cs-linq-missed-select/) | Maintainability | Recommendation |
| [Missed opportunity to use Where](https://codeql.github.com/codeql-query-help/csharp/cs-linq-missed-where/) | Maintainability | Recommendation |
| [Missed ternary opportunity](https://codeql.github.com/codeql-query-help/csharp/cs-missed-ternary-operator/) | Maintainability | Recommendation |
| [Nested 'if' statements can be combined](https://codeql.github.com/codeql-query-help/csharp/cs-nested-if-statements/) | Maintainability | Recommendation |
| [Redundant Select](https://codeql.github.com/codeql-query-help/csharp/cs-linq-useless-select/) | Maintainability | Warning |
| [Redundant ToString() call](https://codeql.github.com/codeql-query-help/csharp/cs-useless-tostring-call/) | Maintainability | Recommendation |
| [Static field written by instance method](https://codeql.github.com/codeql-query-help/csharp/cs-static-field-written-by-instance/) | Maintainability | Recommendation |
| [Unnecessarily complex Boolean expression](https://codeql.github.com/codeql-query-help/csharp/cs-simplifiable-boolean-expression/) | Maintainability | Recommendation |
| [Unused label](https://codeql.github.com/codeql-query-help/csharp/cs-unused-label/) | Maintainability | Warning |
| [Useless assignment to local variable](https://codeql.github.com/codeql-query-help/csharp/cs-useless-assignment-to-local/) | Maintainability | Warning |
| [Useless call to GetHashCode()](https://codeql.github.com/codeql-query-help/csharp/cs-useless-gethashcode-call/) | Maintainability | Recommendation |
| [A lock is held during a wait](https://codeql.github.com/codeql-query-help/csharp/cs-locked-wait/) | Reliability | Warning |
| [Call to 'System.IO.Path.Combine' may silently drop its earlier arguments](https://codeql.github.com/codeql-query-help/csharp/cs-path-combine/) | Reliability | Recommendation |
| [Call to GC.Collect()](https://codeql.github.com/codeql-query-help/csharp/cs-call-to-gc/) | Reliability | Warning |
| [Call to ReferenceEquals(...) on value type expressions](https://codeql.github.com/codeql-query-help/csharp/cs-reference-equality-on-valuetypes/) | Reliability | Error |
| [Calls to unmanaged code](https://codeql.github.com/codeql-query-help/csharp/cs-call-to-unmanaged-code/) | Reliability | Recommendation |
| [Cast of 'this' to a type parameter](https://codeql.github.com/codeql-query-help/csharp/cs-cast-of-this-to-type-parameter/) | Reliability | Recommendation |
| [Character passed to StringBuilder constructor](https://codeql.github.com/codeql-query-help/csharp/cs-stringbuilder-initialized-with-character/) | Reliability | Error |
| [Comparison is constant](https://codeql.github.com/codeql-query-help/csharp/cs-constant-comparison/) | Reliability | Warning |
| [Comparison of identical values](https://codeql.github.com/codeql-query-help/csharp/cs-comparison-of-identical-expressions/) | Reliability | Warning |
| [Container contents are never initialized](https://codeql.github.com/codeql-query-help/csharp/cs-empty-collection/) | Reliability | Error |
| [Container size compared to zero](https://codeql.github.com/codeql-query-help/csharp/cs-test-for-negative-container-size/) | Reliability | Warning |
| [Dereferenced variable is always null](https://codeql.github.com/codeql-query-help/csharp/cs-dereferenced-value-is-always-null/) | Reliability | Error |
| [Dereferenced variable may be null](https://codeql.github.com/codeql-query-help/csharp/cs-dereferenced-value-may-be-null/) | Reliability | Warning |
| [Dubious downcast of 'this'](https://codeql.github.com/codeql-query-help/csharp/cs-downcast-of-this/) | Reliability | Warning |
| [Dubious type test of 'this'](https://codeql.github.com/codeql-query-help/csharp/cs-type-test-of-this/) | Reliability | Warning |
| [Empty branch of conditional, or empty loop body](https://codeql.github.com/codeql-query-help/csharp/cs-empty-block/) | Reliability | Warning |
| [Empty lock statement](https://codeql.github.com/codeql-query-help/csharp/cs-empty-lock-statement/) | Reliability | Warning |
| [Equality check on floating point values](https://codeql.github.com/codeql-query-help/csharp/cs-equality-on-floats/) | Reliability | Warning |
| [Equals on collections](https://codeql.github.com/codeql-query-help/csharp/cs-equals-on-arrays/) | Reliability | Recommendation |
| [Equals on incomparable types](https://codeql.github.com/codeql-query-help/csharp/cs-equals-on-unrelated-types/) | Reliability | Error |
| [Exposing internal representation](https://codeql.github.com/codeql-query-help/csharp/cs-expose-implementation/) | Reliability | Recommendation |
| [Futile synchronization on field](https://codeql.github.com/codeql-query-help/csharp/cs-unsafe-sync-on-field/) | Reliability | Error |
| [Generic catch clause](https://codeql.github.com/codeql-query-help/csharp/cs-catch-of-all-exceptions/) | Reliability | Recommendation |
| [Hashed value without GetHashCode definition](https://codeql.github.com/codeql-query-help/csharp/cs-gethashcode-is-not-defined/) | Reliability | Warning |
| [Impossible array cast](https://codeql.github.com/codeql-query-help/csharp/cs-impossible-array-cast/) | Reliability | Error |
| [Inconsistent lock sequence](https://codeql.github.com/codeql-query-help/csharp/cs-inconsistent-lock-sequence/) | Reliability | Error |
| [Inefficient use of ContainsKey](https://codeql.github.com/codeql-query-help/csharp/cs-inefficient-containskey/) | Reliability | Recommendation |
| [Invalid string formatting](https://codeql.github.com/codeql-query-help/csharp/cs-invalid-string-formatting/) | Reliability | Error |
| [Locking the 'this' object in a lock statement](https://codeql.github.com/codeql-query-help/csharp/cs-lock-this/) | Reliability | Warning |
| [Missing Dispose call on local IDisposable](https://codeql.github.com/codeql-query-help/csharp/cs-local-not-disposed/) | Reliability | Warning |
| [Nested loops with same variable](https://codeql.github.com/codeql-query-help/csharp/cs-nested-loops-with-same-variable/) | Reliability | Warning |
| [Null argument to Equals(object)](https://codeql.github.com/codeql-query-help/csharp/cs-null-argument-to-equals/) | Reliability | Warning |
| [Off-by-one comparison against container length](https://codeql.github.com/codeql-query-help/csharp/cs-index-out-of-bounds/) | Reliability | Error |
| [Poor error handling: catch of NullReferenceException](https://codeql.github.com/codeql-query-help/csharp/cs-catch-nullreferenceexception/) | Reliability | Warning |
| [Poor error handling: empty catch block](https://codeql.github.com/codeql-query-help/csharp/cs-empty-catch-block/) | Reliability | Recommendation |
| [Possible loss of precision](https://codeql.github.com/codeql-query-help/csharp/cs-loss-of-precision/) | Reliability | Error |
| [Potentially dangerous use of non-short-circuit logic](https://codeql.github.com/codeql-query-help/csharp/cs-non-short-circuit/) | Reliability | Error |
| [Property value is not used when setting a property](https://codeql.github.com/codeql-query-help/csharp/cs-unused-property-value/) | Reliability | Warning |
| [Recursive call to Equals(object)](https://codeql.github.com/codeql-query-help/csharp/cs-recursive-equals-call/) | Reliability | Error |
| [Rethrowing exception variable](https://codeql.github.com/codeql-query-help/csharp/cs-rethrown-exception-variable/) | Reliability | Warning |
| [Self-assignment](https://codeql.github.com/codeql-query-help/csharp/cs-self-assignment/) | Reliability | Error |
| [String concatenation in loop](https://codeql.github.com/codeql-query-help/csharp/cs-string-concatenation-in-loop/) | Reliability | Recommendation |
| [StringBuilder creation in loop](https://codeql.github.com/codeql-query-help/csharp/cs-stringbuilder-creation-in-loop/) | Reliability | Recommendation |
| [Unchecked cast in Equals method](https://codeql.github.com/codeql-query-help/csharp/cs-unchecked-cast-in-equals/) | Reliability | Warning |
| [Unmanaged code](https://codeql.github.com/codeql-query-help/csharp/cs-unmanaged-code/) | Reliability | Recommendation |
| [Use of default ToString()](https://codeql.github.com/codeql-query-help/csharp/cs-call-to-object-tostring/) | Reliability | Warning |

{% endrowheaders %}
