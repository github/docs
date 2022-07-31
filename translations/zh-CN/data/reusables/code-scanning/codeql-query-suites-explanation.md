以下查询套件内置于 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，可供使用。

{% data reusables.code-scanning.codeql-query-suites %}

指定查询套件时，{% data variables.product.prodname_codeql %} 分析引擎将运行默认查询集以及在其他查询套件中定义的任何额外查询。 {% ifversion codeql-ml-queries %}The `security-extended` and `security-and-quality` 查询套件包含实验性查询。 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %} 警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)。”{% endif %}。
