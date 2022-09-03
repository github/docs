{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. **New runner group（新規ランナーグループ）**をクリックしてください。
{%- elsif ghes < 3.4 or ghae %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. **Add new（新規追加）**ドロップダウンを使い、**New group（新規グループ）**を選択してください。
{%- endif %}
1. "Group name（グループ名）"の下で、ランナーグループの名前を入力してください。
