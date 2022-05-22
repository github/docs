{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Todas as etapas com falha são automaticamente expandidas para exibir os resultados.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Resultados do fluxo de trabalho do Super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png){% else %}
![Super linter workflow results](/assets/images/help/repository/super-linter-workflow-results-updated.png){% endif %}
{% else %}
1. Expanda a etapa **Executar Super-Linter** para visualizar os resultados. ![Resultados do fluxo de trabalho do Super linter](/assets/images/help/repository/super-linter-workflow-results.png)
{% endif %}