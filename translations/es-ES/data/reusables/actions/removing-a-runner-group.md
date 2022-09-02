Runners are automatically returned to the default group when their group is removed.

{% ifversion ghes or ghae or ghec %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. En la lista de grupos, a la derecha del grupo que quieras borrar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Para eliminar el grupo, da clic en **Eliminar grupo**.
3. Revisa el mensaje de confirmación y da clic en **Eliminar este grupo de ejecutores**. Any runners still in this group will be automatically moved to the default group, where they will inherit the access permissions assigned to that group.

{% endif %}