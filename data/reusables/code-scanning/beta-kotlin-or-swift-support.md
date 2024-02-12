{% ifversion codeql-swift-beta and codeql-kotlin-beta %}
   {% note %}

   **Note:** {% data variables.product.prodname_codeql %} analysis for Kotlin and Swift is currently in beta. During the beta, analysis of Kotlin and Swift code, and the accompanying documentation, will not be as comprehensive as for other languages. Additionally, Swift 5.8 is not yet supported.

   {% endnote %}
{% elsif codeql-swift-beta %}
   {% note %}

   **Note:** {% data variables.product.prodname_codeql %} analysis for Swift is currently in beta. During the beta, analysis of Swift code, and the accompanying documentation, will not be as comprehensive as for other languages. Additionally, Swift 5.8 is not yet supported.

   {% endnote %}
{% elsif codeql-kotlin-beta %}
   {% note %}

   **Note:** {% data variables.product.prodname_codeql %} analysis for Kotlin is currently in beta. During the beta, analysis of Kotlin code, and the accompanying documentation, will not be as comprehensive as for other languages.

   {% endnote %}
{% endif %}
