建议仅将自托管运行器用于私有仓库。 这是因为，通过创建在工作流程中执行代码的拉取请求，仓库的复刻可能会在您的自托管运行器上运行危险代码。

{%- ifversion fpt or ghec  %}
To help mitigate this risk for public repositories, you can require approvals for workflow runs from first-time contributors. 更多信息请参阅“[批准公共复刻中的工作流程运行](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)”。
{%- endif %}