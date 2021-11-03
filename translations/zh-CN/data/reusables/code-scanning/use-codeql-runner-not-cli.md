{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
如果 {% data variables.product.prodname_codeql_cli %} 不适合在您的 CI 系统中使用，{% data variables.product.prodname_codeql_runner %} 可以作为替代。 通常，这在设置 CI 系统以协调编译器调用以及运行 {% data variables.product.prodname_codeql %} 分析时需要。 更多信息请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql_runner %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system)”。
{% endif %}

{% ifversion ghes = 3.1 %}
如果您需要执行以下操作，则需要使用 {% data variables.product.prodname_codeql_runner %}：
- 设置 CI 系统以协调编译器调用以及运行 {% data variables.product.prodname_codeql %} 分析
- 分析仓库中的多种语言。
{% endif %}
