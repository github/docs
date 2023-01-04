{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Change the runner group name.

{% elsif ghae < 3.4 or ghes < 3.4 %}
{% data reusables.actions.configure-runner-group %}
1. Change the runner group name.
{% endif %}
