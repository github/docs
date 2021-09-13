{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Cualquier paso que falle se expandirá automáticamente para mostrar los resultados.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Resultados del flujo de trabajo de Super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png){% else %}
![Super linter workflow results](/assets/images/help/repository/super-linter-workflow-results-updated.png){% endif %}
{% else %}
1. Expande el paso de **Ejecutar Super-Lnter** para ver los resultados. ![Resultados del flujo de trabajo de Super linter](/assets/images/help/repository/super-linter-workflow-results.png)
{% endif %}