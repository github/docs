
| Language | Identifier | Optional alternative identifiers (if any)
|------------------|------------------- | ---------------
| C/C++ | `c-cpp` | `c` or `cpp` |
| C# | `csharp` |
| {% ifversion code-scanning-actions-language %} |
{% data variables.product.prodname_actions %} workflows | `actions`
| {% endif %}
| Go | `go` |
| Java/Kotlin | `java-kotlin` | `java` or `kotlin` |
| JavaScript/TypeScript | `javascript-typescript` | `javascript` or `typescript` |
| Python | `python` |
| Ruby | `ruby` |
| {% ifversion codeql-rust-available %} |
Rust | `rust`
| {% else ifversion codeql-rust-public-preview %}
| Rust (public preview) | `rust` |
| {% endif %}
| Swift | `swift` |
