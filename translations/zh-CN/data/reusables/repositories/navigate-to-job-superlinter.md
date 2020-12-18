{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. 在 **Jobs（作业）**下或可视化图中，单击您要查看的作业。 ![Lint 代码库作业](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% elsif currentVersion ver_gt "enterprise-server@2.22" %}
1. 在左侧边栏中，单击您要查看的作业。 ![Lint 代码库作业](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% else %}
1. 在左侧边栏中，单击您要查看的作业。 ![选择工作流程作业](/assets/images/help/repository/workflow-job.png)
{% endif %}
