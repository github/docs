{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Any failed steps are automatically expanded to display the results.
   ![Super linter workflow results](/assets/images/help/repository/super-linter-workflow-results-updated.png)
{% else %}
1. Expand the **Run Super-Linter** step to view the results.
   ![Super linter workflow results](/assets/images/help/repository/super-linter-workflow-results.png)
{% endif %}