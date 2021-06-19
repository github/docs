{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. Debajo de **Jobs** o en la gráfica de visualización, da clic en el job que quieras ver. ![Limpiar el job de código base](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% elsif currentVersion ver_gt "enterprise-server@2.22" %}
1. En la barra lateral izquierda, da clic en el job que quieres ver. ![Limpiar el job de código base](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% else %}
1. En la barra lateral izquierda, da clic en el job que quieres ver. ![Seleccionar un job de flujo de trabajo](/assets/images/help/repository/workflow-job.png)
{% endif %}
