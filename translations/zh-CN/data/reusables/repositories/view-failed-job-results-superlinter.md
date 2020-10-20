{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Any failed steps are automatically expanded to display the results. ![Super linter 工作流程结果](/assets/images/help/repository/super-linter-workflow-results-updated.png)
{% else %}
1. 展开**运行 Super-Linter** 步骤以查看结果。 ![Super linter 工作流程结果](/assets/images/help/repository/super-linter-workflow-results.png)
{% endif %}