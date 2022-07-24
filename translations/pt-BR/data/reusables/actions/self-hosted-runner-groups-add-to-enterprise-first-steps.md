{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Clique em **Novo grupo de executores**.
{%- elsif ghes < 3.4 or ghae %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Use o menu suspenso **Adicionar novo** e selecione **Novo grupo**.
{%- endif %}
1. Em "Nome do Grupo, digite um nome para o grupo do seu executor.
