{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Haz clic en **Grupo de ejecución nuevo**.
{%- elsif ghes < 3.4 or ghae %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Utiliza el menú desplegable **Agregar nuevo** y selecciona **Grupo nuevo**.
{%- endif %}
1. Debajo de "Nombre de grupo", escribe un nombre para tu grupo de ejecutores.
