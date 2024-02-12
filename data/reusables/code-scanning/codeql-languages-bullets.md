<!-- If you update the list of supported languages for CodeQL, update docs-internal/content/get-started/learning-about-github/github-language-support.md to reflect the changes. -->
- C/C++
- C#
- Go
- Java{% ifversion codeql-kotlin-beta %}/Kotlin{% endif %}
- JavaScript/TypeScript
- Python
- Ruby
{% ifversion codeql-swift-beta %}- Swift{% endif %}

{% note %}

**Notes**:

{% ifversion ghes < 3.8 or ghae < 3.8 %}
- {% data variables.product.prodname_codeql %} analysis for Ruby is currently in beta. During the beta, analysis of Ruby will be less comprehensive than {% data variables.product.prodname_codeql %} analysis of other languages.{% endif %}{% ifversion codeql-swift-beta %}
- {% data variables.product.prodname_codeql %} analysis for Swift is currently in beta. During the beta, analysis of Swift will be less comprehensive than {% data variables.product.prodname_codeql %} analysis of other languages. Additionally, Swift 5.8 is not yet supported.{% endif %}
{% ifversion codeql-kotlin-beta %}
- {% data variables.product.prodname_codeql %} analysis for Kotlin is currently in beta. During the beta, analysis of Kotlin will be less comprehensive than {% data variables.product.prodname_codeql %} analysis of other languages.
- Use {% ifversion codeql-language-identifiers-311 %}`java-kotlin`{% else %}`java`{% endif %} to analyze code written in Java, Kotlin or both.{% endif %}
- Use {% ifversion codeql-language-identifiers-311 %}`javascript-typescript`{% else %}`javascript`{% endif %} to analyze code written in JavaScript, TypeScript or both.

{% endnote %}

For more information, see the documentation on the {% data variables.product.prodname_codeql %} website: "[Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)."
