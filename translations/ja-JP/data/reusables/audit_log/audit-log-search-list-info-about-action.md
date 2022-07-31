それぞれのAudit logのエントリ名は、`action`オブジェクトもしくはカテゴリ修飾子のあとに操作タイプを続けて構成されます。 たとえば、`repo.create`というエントリは`repo`カテゴリの`create`操作を参照しています。

各 Audit log エントリには、次のようなイベントに関する適切な情報が表示されます:

- アクションが実行された{% ifversion ghec or ghes or ghae %}Enterpriseもしくは{% endif %}Organization
- アクションを実行したユーザ（アクター）
- アクションで影響を受けたユーザ
- アクションの対象となったリポジトリ
- 実行されたアクション
- アクションが実行された国
- アクションが発生した日時
{%- ifversion enterprise-audit-log-ip-addresses %}
- オプションで、アクションを実行したユーザ（アクター）のソースIPアドレス
{%- endif %}
