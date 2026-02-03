{% rowheaders %}

| Query name | Category | Severity |
| --- | --- | --- |
| [Access to unsupported JDK-internal API](https://codeql.github.com/codeql-query-help/java/java-jdk-internal-api-access/) | Maintainability | Recommendation |
| [Boxed variable is never null](https://codeql.github.com/codeql-query-help/java/java-non-null-boxed-variable/) | Maintainability | Warning |
| [Cast from abstract to concrete collection](https://codeql.github.com/codeql-query-help/java/java-abstract-to-concrete-cast/) | Maintainability | Warning |
| [Class has same name as super class](https://codeql.github.com/codeql-query-help/java/java-class-name-matches-super-class/) | Maintainability | Recommendation |
| [Confusing method names because of capitalization](https://codeql.github.com/codeql-query-help/java/java-confusing-method-name/) | Maintainability | Recommendation |
| [Confusing overloading of methods](https://codeql.github.com/codeql-query-help/java/java-confusing-method-signature/) | Maintainability | Recommendation |
| [Constant interface anti-pattern](https://codeql.github.com/codeql-query-help/java/java-constants-only-interface/) | Maintainability | Recommendation |
| [Container contents are never accessed](https://codeql.github.com/codeql-query-help/java/java-unused-container/) | Maintainability | Error |
| [Inefficient empty string test](https://codeql.github.com/codeql-query-help/java/java-inefficient-empty-string-test/) | Maintainability | Recommendation |
| [Inefficient String constructor](https://codeql.github.com/codeql-query-help/java/java-inefficient-string-constructor/) | Maintainability | Recommendation |
| [Inner class could be static](https://codeql.github.com/codeql-query-help/java/java-non-static-nested-class/) | Maintainability | Recommendation |
| [Interface cannot be implemented](https://codeql.github.com/codeql-query-help/java/java-unimplementable-interface/) | Maintainability | Warning |
| [Javadoc has impossible 'throws' tag](https://codeql.github.com/codeql-query-help/java/java-inconsistent-javadoc-throws/) | Maintainability | Recommendation |
| [Misleading indentation](https://codeql.github.com/codeql-query-help/java/java-misleading-indentation/) | Maintainability | Warning |
| [Missing Override annotation](https://codeql.github.com/codeql-query-help/java/java-missing-override-annotation/) | Maintainability | Recommendation |
| [Missing space in string literal](https://codeql.github.com/codeql-query-help/java/java-missing-space-in-concatenation/) | Maintainability | Recommendation |
| [Mocking all public methods of a class may indicate the unit test is testing too much](https://codeql.github.com/codeql-query-help/java/java-excessive-public-method-mocking/) | Maintainability | Recommendation |
| [Non-case label in switch statement](https://codeql.github.com/codeql-query-help/java/java-label-in-switch/) | Maintainability | Recommendation |
| [Non-explicit control and whitespace characters](https://codeql.github.com/codeql-query-help/java/java-non-explicit-control-and-whitespace-chars-in-literals/) | Maintainability | Warning |
| [Possible confusion of local and field](https://codeql.github.com/codeql-query-help/java/java-local-shadows-field/) | Maintainability | Recommendation |
| [Spurious Javadoc @param tags](https://codeql.github.com/codeql-query-help/java/java-unknown-javadoc-parameter/) | Maintainability | Recommendation |
| [Subtle call to inherited method](https://codeql.github.com/codeql-query-help/java/java-subtle-inherited-call/) | Maintainability | Warning |
| [Underscore used as identifier](https://codeql.github.com/codeql-query-help/java/java-underscore-identifier/) | Maintainability | Recommendation |
| [Unread local variable](https://codeql.github.com/codeql-query-help/java/java-local-variable-is-never-read/) | Maintainability | Recommendation |
| [Unused classes and interfaces](https://codeql.github.com/codeql-query-help/java/java-unused-reference-type/) | Maintainability | Recommendation |
| [Unused format argument](https://codeql.github.com/codeql-query-help/java/java-unused-format-argument/) | Maintainability | Warning |
| [Unused label](https://codeql.github.com/codeql-query-help/java/java-unused-label/) | Maintainability | Recommendation |
| [Use of VisibleForTesting in production code](https://codeql.github.com/codeql-query-help/java/java-visible-for-testing-abuse/) | Maintainability | Warning |
| [Useless null check](https://codeql.github.com/codeql-query-help/java/java-useless-null-check/) | Maintainability | Warning |
| [Useless parameter](https://codeql.github.com/codeql-query-help/java/java-unused-parameter/) | Maintainability | Recommendation |
| [Useless toString on String](https://codeql.github.com/codeql-query-help/java/java-useless-tostring-call/) | Maintainability | Recommendation |
| [Useless type test](https://codeql.github.com/codeql-query-help/java/java-useless-type-test/) | Maintainability | Warning |
| [Array index out of bounds](https://codeql.github.com/codeql-query-help/java/java-index-out-of-bounds/) | Reliability | Error |
| [Character passed to StringBuffer or StringBuilder constructor](https://codeql.github.com/codeql-query-help/java/java-string-buffer-char-init/) | Reliability | Error |
| [Comparison of identical values](https://codeql.github.com/codeql-query-help/java/java-comparison-of-identical-expressions/) | Reliability | Error |
| [Constant loop condition](https://codeql.github.com/codeql-query-help/java/java-constant-loop-condition/) | Reliability | Warning |
| [Container contents are never initialized](https://codeql.github.com/codeql-query-help/java/java-empty-container/) | Reliability | Error |
| [Container size compared to zero](https://codeql.github.com/codeql-query-help/java/java-test-for-negative-container-size/) | Reliability | Warning |
| [Continue statement that does not continue](https://codeql.github.com/codeql-query-help/java/java-continue-in-false-loop/) | Reliability | Warning |
| [Contradictory type checks](https://codeql.github.com/codeql-query-help/java/java-contradictory-type-checks/) | Reliability | Error |
| [Dereferenced expression may be null](https://codeql.github.com/codeql-query-help/java/java-dereferenced-expr-may-be-null/) | Reliability | Warning |
| [Dereferenced variable is always null](https://codeql.github.com/codeql-query-help/java/java-dereferenced-value-is-always-null/) | Reliability | Error |
| [Dereferenced variable may be null](https://codeql.github.com/codeql-query-help/java/java-dereferenced-value-may-be-null/) | Reliability | Warning |
| [Direct call to a run() method](https://codeql.github.com/codeql-query-help/java/java-call-to-thread-run/) | Reliability | Recommendation |
| [Do not call `finalize()`](https://codeql.github.com/codeql-query-help/java/java-do-not-call-finalize/) | Reliability | Error |
| [Double-checked locking is not thread-safe](https://codeql.github.com/codeql-query-help/java/java-unsafe-double-checked-locking/) | Reliability | Error |
| [Equals method does not inspect argument type](https://codeql.github.com/codeql-query-help/java/java-unchecked-cast-in-equals/) | Reliability | Error |
| [Equals on incomparable types](https://codeql.github.com/codeql-query-help/java/java-equals-on-unrelated-types/) | Reliability | Error |
| [Equals or hashCode on arrays](https://codeql.github.com/codeql-query-help/java/java-equals-on-arrays/) | Reliability | Error |
| [Escaping](https://codeql.github.com/codeql-query-help/java/java-escaping/) | Reliability | Warning |
| [Exposing internal representation](https://codeql.github.com/codeql-query-help/java/java-internal-representation-exposure/) | Reliability | Recommendation |
| [Expression always evaluates to the same value](https://codeql.github.com/codeql-query-help/java/java-evaluation-to-constant/) | Reliability | Warning |
| [Hashed value without hashCode definition](https://codeql.github.com/codeql-query-help/java/java-hashing-without-hashcode/) | Reliability | Error |
| [Ignored error status of call](https://codeql.github.com/codeql-query-help/java/java-ignored-error-status-of-call/) | Reliability | Recommendation |
| [Ignored serialization member of record class](https://codeql.github.com/codeql-query-help/java/java-ignored-serialization-member-of-record-class/) | Reliability | Warning |
| [Implicit conversion from array to string](https://codeql.github.com/codeql-query-help/java/java-print-array/) | Reliability | Recommendation |
| [Inconsistent equals and hashCode](https://codeql.github.com/codeql-query-help/java/java-inconsistent-equals-and-hashcode/) | Reliability | Error |
| [Inconsistent synchronization of getter and setter](https://codeql.github.com/codeql-query-help/java/java-unsynchronized-getter/) | Reliability | Error |
| [Inefficient output stream](https://codeql.github.com/codeql-query-help/java/java-inefficient-output-stream/) | Reliability | Warning |
| [Inefficient primitive constructor](https://codeql.github.com/codeql-query-help/java/java-inefficient-boxed-constructor/) | Reliability | Recommendation |
| [Inefficient use of key set iterator](https://codeql.github.com/codeql-query-help/java/java-inefficient-key-set-iterator/) | Reliability | Recommendation |
| [Iterable wrapping an iterator](https://codeql.github.com/codeql-query-help/java/java-iterable-wraps-iterator/) | Reliability | Warning |
| [Iterator implementing Iterable](https://codeql.github.com/codeql-query-help/java/java-iterator-implements-iterable/) | Reliability | Warning |
| [Left shift by more than the type width](https://codeql.github.com/codeql-query-help/java/java-lshift-larger-than-type-width/) | Reliability | Warning |
| [Missing `@Nested` annotation on JUnit 5 inner test class](https://codeql.github.com/codeql-query-help/java/java-junit5-missing-nested-annotation/) | Reliability | Warning |
| [Missing catch of NumberFormatException](https://codeql.github.com/codeql-query-help/java/java-uncaught-number-format-exception/) | Reliability | Recommendation |
| [Missing format argument](https://codeql.github.com/codeql-query-help/java/java-missing-format-argument/) | Reliability | Error |
| [Non-final method invocation in constructor](https://codeql.github.com/codeql-query-help/java/java-non-final-call-in-constructor/) | Reliability | Error |
| [Non-synchronized override of synchronized method](https://codeql.github.com/codeql-query-help/java/java-non-sync-override/) | Reliability | Warning |
| [Not thread-safe](https://codeql.github.com/codeql-query-help/java/java-not-threadsafe/) | Reliability | Warning |
| [Potential database resource leak](https://codeql.github.com/codeql-query-help/java/java-database-resource-leak/) | Reliability | Warning |
| [Potential input resource leak](https://codeql.github.com/codeql-query-help/java/java-input-resource-leak/) | Reliability | Warning |
| [Potential output resource leak](https://codeql.github.com/codeql-query-help/java/java-output-resource-leak/) | Reliability | Warning |
| [Race condition in double-checked locking object initialization](https://codeql.github.com/codeql-query-help/java/java-unsafe-double-checked-locking-init-order/) | Reliability | Warning |
| [Reference equality test of boxed types](https://codeql.github.com/codeql-query-help/java/java-reference-equality-of-boxed-types/) | Reliability | Error |
| [Result of multiplication cast to wider type](https://codeql.github.com/codeql-query-help/java/java-integer-multiplication-cast-to-long/) | Reliability | Warning |
| [Safe publication](https://codeql.github.com/codeql-query-help/java/java-safe-publication/) | Reliability | Warning |
| [Self assignment](https://codeql.github.com/codeql-query-help/java/java-redundant-assignment/) | Reliability | Error |
| [Suspicious date format](https://codeql.github.com/codeql-query-help/java/java-suspicious-date-format/) | Reliability | Warning |
| [Synchronization on boxed types or strings](https://codeql.github.com/codeql-query-help/java/java-sync-on-boxed-types/) | Reliability | Error |
| [Type mismatch on container access](https://codeql.github.com/codeql-query-help/java/java-type-mismatch-access/) | Reliability | Error |
| [Type mismatch on container modification](https://codeql.github.com/codeql-query-help/java/java-type-mismatch-modification/) | Reliability | Error |
| [Unreachable catch clause](https://codeql.github.com/codeql-query-help/java/java-unreachable-catch-clause/) | Reliability | Warning |
| [Use of `String#replaceAll` with a first argument which is not a regular expression](https://codeql.github.com/codeql-query-help/java/java-string-replace-all-with-non-regex/) | Reliability | Recommendation |
| [Use of default toString()](https://codeql.github.com/codeql-query-help/java/java-call-to-object-tostring/) | Reliability | Recommendation |
| [Useless comparison test](https://codeql.github.com/codeql-query-help/java/java-constant-comparison/) | Reliability | Warning |
| [Whitespace contradicts operator precedence](https://codeql.github.com/codeql-query-help/java/java-whitespace-contradicts-precedence/) | Reliability | Warning |
| [Wrong NaN comparison](https://codeql.github.com/codeql-query-help/java/java-comparison-with-nan/) | Reliability | Error |
| [Zero threads set for `java.util.concurrent.ScheduledThreadPoolExecutor`](https://codeql.github.com/codeql-query-help/java/java-java-util-concurrent-scheduledthreadpoolexecutor/) | Reliability | Recommendation |

{% endrowheaders %}
