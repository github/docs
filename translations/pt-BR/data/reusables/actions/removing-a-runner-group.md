Runners are automatically returned to the default group when their group is removed.

{% ifversion ghes or ghae or ghec %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. Na lista de grupos, à direita do grupo que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Para remover o grupo, clique em **Remover grupo**.
3. Revise os avisos de confirmação e, em seguida, clique em **Remover este grupo de executores**. Any runners still in this group will be automatically moved to the default group, where they will inherit the access permissions assigned to that group.

{% endif %}