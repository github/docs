{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
Se o {% data variables.product.prodname_codeql_cli %} não for adequado para uso no seu sistema CI, o {% data variables.product.prodname_codeql_runner %} estará disponível como alternativa. Normalmente, isso é necessário se o sistema de CI tiver de orquestrar as chamadas do compilador, bem como executar a análise de {% data variables.product.prodname_codeql %}. Para obter mais informações, consulte "[Executar o {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system)".
{% endif %}

{% ifversion ghes = 3.1 %}
Você precisará usar {% data variables.product.prodname_codeql_runner %} se precisar:
- Configurar o sistema de CI para orquestrar as invocações do compilador, bem como executar a análise de {% data variables.product.prodname_codeql %}.
- Analisar mais de uma linguagem em um repositório.
{% endif %}
