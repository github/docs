{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. Em **Trabalhos** ou no gráfico de visualização, clique no trabalho que você deseja ver. ![Lint do trabalho do código-base](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% elsif currentVersion ver_gt "enterprise-server@2.22" %}
1. Na barra lateral esquerda, clique no trabalho que você deseja ver. ![Lint do trabalho do código-base](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% else %}
1. Na barra lateral esquerda, clique no trabalho que você deseja ver. ![Selecione um trabalho do fluxo de trabalho](/assets/images/help/repository/workflow-job.png)
{% endif %}
