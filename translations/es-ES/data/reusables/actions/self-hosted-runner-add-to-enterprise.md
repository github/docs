{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% ifversion actions-hosted-runners %}1. Click **New runner**, then click **New self-hosted runner**.{% else %}1. Click **New runner**.{% endif %}
{% data reusables.actions.self-hosted-runner-configure %}
{%- elsif ghae or ghes < 3.4 %}
Para agregar un ejecutor auto-hospedado a una empresa, debes ser el propietario de la misma.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Da clic en **Agregar nuevo** y luego en **Ejecutor nuevo**.
{% data reusables.actions.self-hosted-runner-configure %}
{%- endif %}
