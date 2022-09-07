If you don't specify a runner group during the registration process, your new runners are automatically assigned to the default group, and can then be moved to another group.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. En la lista de "Ejecutores", haz clic en aquél que quieras configurar.
2. Selecciona el menú desplegable de **Grupo de ejecutores**.
3. En "Mover el ejecutor al grupo", elige un grupo destino para el ejecutor.
{% elsif ghae or ghes < 3.4 %}
1. En la sección {% ifversion ghes or ghae %}"Grupos de ejecutores"{% endif %} de la página de ajustes, ubica el grupo actual del ejecutor que quieras mover y expande la lista de miembros del grupo. ![Ver los miembros de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Selecciona la casilla junto al ejecutor auto-hospedado y da clic en **Mover a grupo** para ver los destinos disponibles. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Para mover el ejecutor, da clic en el grupo de destino. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}