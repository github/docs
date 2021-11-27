{% ifversion fpt or ghes or ghec %}
1. 失敗したステップは自動的に展開され、結果が表示されます。
   {% ifversion fpt or ghes > 3.0 or ghec %}
   ![Super linterワークフローの結果](/assets/images/help/repository/super-linter-workflow-results-updated-2.png){% else %}
![Super linter workflow results](/assets/images/help/repository/super-linter-workflow-results-updated.png)
{% endif %}
{% else %}
1. **Run Super-Linter**ステップを展開して、結果を表示してください。 ![Super linterワークフローの結果](/assets/images/help/repository/super-linter-workflow-results.png)
{% endif %}
