{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. [**New runner**]をクリックしてください。
{% data reusables.actions.self-hosted-runner-configure %}
{%- elsif ghae or ghes < 3.4 %}
セルフホストランナーをEnterpriseに追加するには、Enterpriseのオーナーでなければなりません。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. [**Add new**] をクリックし、[**New runner**] をクリックします。
{% data reusables.actions.self-hosted-runner-configure %}
{%- endif %}
