{% ifversion fpt or ghes > 3.1 or ghae-next %}
If the {% data variables.product.prodname_codeql_cli %} is unsuitable for use in your CI system, the {% data variables.product.prodname_codeql_runner %} is available as an alternative. Typically, this is needed if the CI system would need to orchestrate compiler invocations as well as running {% data variables.product.prodname_codeql %} analysis. For more information, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system)."
{% endif %}

{% ifversion ghes = 3.1 %}
You will need to use the {% data variables.product.prodname_codeql_runner %} if you need to:
- Set up the CI system to orchestrate compiler invocations as well as running {% data variables.product.prodname_codeql %} analysis.
- Analyze more than one language in a repository.
{% endif %}
