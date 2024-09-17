{% ifversion projects-v2-workflows-ui-refresh %}

{% data reusables.projects.access-workflows %}
1. Under "Default workflows", click on the workflow that you want to edit.
1. In the top right, click **Edit**.

   ![Screenshot showing a project's menu bar. The "Edit" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-start-editing.png)

1. Select whether the workflow should apply to issues, pull requests, or both.
1. Under "Set value", choose the value that you want to set the status to.
1. To save your changes and enable the workflow, click **Save and turn on workflow**.

{% else %}

{% data reusables.projects.access-workflows %}
1. Under "Default workflows", click on the workflow that you want to edit.
1. Select whether the workflow should apply to issues, pull requests, or both.
1. Next to "Set", choose the value that you want to set the status to.
1. If the workflow is disabled, click the toggle next to "Off" to enable the workflow.

{% endif %}
