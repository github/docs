{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Cambia el nombre del grupo de ejecutores.

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.configure-runner-group %}
1. Cambia el nombre del grupo de ejecutores.
{% endif %}