{% ifversion codeql-language-identifiers-311 %}

| Language | Identifier | Optional alternative identifiers (if any)
|------------------|------------------- | ---------------
| C/C++ | `c-cpp` | `c` or `cpp` |
| C# | `csharp` |
| Go | `go` |
| Java/Kotlin | `java-kotlin` | `java` or `kotlin` |
| JavaScript/TypeScript | `javascript-typescript` | `javascript` or `typescript` |
| Python | `python` |
| Ruby | `ruby`
| Swift | `swift`

{% note %}

**Note:** If you specify one of the alternative identifiers, this is equivalent to using the standard language identifier. For example, specifying `javascript` instead of `javascript-typescript` will not exclude analysis of TypeScript code. You can do this in an advanced setup workflow with the `--paths-ignore` option. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-directories-to-scan)."

{% endnote %}

{% else %}

| Language | Identifier
|------------------|-------------------
| C/C++ | `cpp`
| C# | `csharp`
| Go | `go`
| Java/Kotlin | `java`
| JavaScript/TypeScript | `javascript`
| Python | `python`
| Ruby | `ruby`
| Swift | `swift`

{% endif %}
