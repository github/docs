| Action | Description |
|------------------|-------------------|
| `remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. |
| `register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)." |
| `runner_group_created` | Triggered when a self-hosted runner group is created. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups)." |
| `runner_group_removed` | Triggered when a self-hosted runner group is removed. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)." |
| `runner_group_runner_removed` | Triggered when the REST API is used to remove a self-hosted runner from a group. |
| `runner_group_runners_added` | Triggered when a self-hosted runner is added to a group. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)." |
| `runner_group_runners_updated` | Triggered when a runner group's list of members is updated. For more information, see "[AUTOTITLE](/rest/actions#set-self-hosted-runners-in-a-group-for-an-organization)." |
| `runner_group_updated` | Triggered when the configuration of a self-hosted runner group is changed. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)." |
| `self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#about-self-hosted-runners)." |
| {% ifversion fpt or ghec %} |
| `self_hosted_runner_online` | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)." |
| `self_hosted_runner_offline` | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)." |
| {% endif %} |
