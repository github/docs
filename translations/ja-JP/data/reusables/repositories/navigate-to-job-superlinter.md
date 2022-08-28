{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. [**Jobs**] または視覚化グラフで、表示するジョブをクリックします。 ![Lint コードベースジョブ](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% elsif currentVersion ver_gt "enterprise-server@2.22" %}
1. 左のサイドバーで、表示させたいジョブをクリックしてください。 ![Lint コードベースジョブ](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% else %}
1. 左のサイドバーで、表示させたいジョブをクリックしてください。 ![ワークフロージョブを選択](/assets/images/help/repository/workflow-job.png)
{% endif %}
