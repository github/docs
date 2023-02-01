<!-- If you update the list of supported languages for CodeQL, update docs-internal/content/get-started/learning-about-github/github-language-support.md to reflect the changes. -->
- C/C++
- C#
- Go
- Java{% ifversion codeql-kotlin-beta %}/Kotlin{% endif %}
- JavaScript/TypeScript
- Python{% ifversion fpt or ghes > 3.3 or ghec or ghae > 3.3 %}
- Ruby{% endif %}

{% note %}

{% ifversion fpt or ghec or ghae or ghes > 3.3 %}
**Notes**:

{% ifversion ghes < 3.8 or ghae < 3.8 %}
- {% data variables.product.prodname_codeql %} analysis for Ruby is currently in beta. During the beta, analysis of Ruby will be less comprehensive than {% data variables.product.prodname_codeql %} analysis of other languages.{% endif %}{% ifversion codeql-kotlin-beta %}
- {% data variables.product.prodname_codeql %} analysis for Kotlin is currently in beta. During the beta, analysis of Kotlin will be less comprehensive than {% data variables.product.prodname_codeql %} analysis of other languages.
- Use `java` to analyze code written in Java, Kotlin or both.{% endif %}
- Use `javascript` to analyze code written in JavaScript, TypeScript or both.

{% else %}
**Note**: Use `javascript` to analyze code written in JavaScript, TypeScript or both.
{% endif %}

{% endnote %}

For more information, see the documentation on the {% data variables.product.prodname_codeql %} website: "[Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)."
