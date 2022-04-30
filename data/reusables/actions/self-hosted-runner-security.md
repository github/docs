We recommend that you only use self-hosted runners with private repositories. This is because forks of your repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

{%- ifversion fpt or ghec  %}
To help mitigate this risk for public repositories, you can require approvals for workflow runs from first-time contributors. For more information, see "[Approving workflow runs from public forks](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."
{%- endif %}