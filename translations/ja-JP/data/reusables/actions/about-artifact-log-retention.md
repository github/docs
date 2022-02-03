デフォルトでは、ワークフローによって生成された成果物とログファイルは、90日間保持された後自動的に削除されます。 この保持の期間は、リポジトリの種類によって調整できます。

{%- ifversion fpt or ghec or ghes %}
- パブリックリポジトリの場合: この保持時間を1日から90日の間で変更できます。
{%- endif %}

- For private{% ifversion ghec or ghes or ghae %} and internal{% endif %} repositories: you can change this retention period to anywhere between 1 day or 400 days.

保持期間をカスタマイズした場合、適用されるのは新しい成果物とログファイルに対してであり、既存のオブジェクトにさかのぼっては適用されません。 管理されたリポジトリ及びOrganizationについては、最大の保持期間は管理するOrganizationあるいはEnterpriseによって設定された上限を超えることはできません。
