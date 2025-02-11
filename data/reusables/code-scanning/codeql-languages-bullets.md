<!-- If you update the list of supported languages for CodeQL, update docs-internal/content/get-started/learning-about-github/github-language-support.md to reflect the changes. -->
* C/C++
* C#
* Go
* Java/Kotlin
* JavaScript/TypeScript
* Python
* Ruby
* Swift
{% ifversion code-scanning-actions-language %}* {% data variables.product.prodname_actions %} workflows{% endif %}

> [!NOTE]
>
> * Use {% ifversion codeql-language-identifiers-311 %}`java-kotlin`{% else %}`java`{% endif %} to analyze code written in Java, Kotlin or both.
> * Use {% ifversion codeql-language-identifiers-311 %}`javascript-typescript`{% else %}`javascript`{% endif %} to analyze code written in JavaScript, TypeScript or both.

For more information, see the documentation on the {% data variables.product.prodname_codeql %} website: [Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/).
