{% ifversion codeql-swift-beta %}
{% note %}

**Notes:**
- {% data variables.product.prodname_codeql %} analysis for Swift is currently in beta. During the beta, analysis of Swift code, and the accompanying documentation, will not be as comprehensive as for other languages. Swift 5.8 is not yet supported.
- Analysis may occasionally freeze, causing jobs to time out. To limit the number of Actions minutes used by jobs that are stuck or timing out, we recommend setting a timeout of four times your normal build time.

{% endnote %}
{% endif %}
