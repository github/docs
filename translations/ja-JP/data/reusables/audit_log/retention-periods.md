Audit logにはEnterpriseに影響するアクティビティによってトリガーされたイベントがリストされ{% ifversion not ghec %}ます。 {% data variables.product.product_name %}のAudit logは{% ifversion audit-data-retention-tab %}Enterpriseのオーナーが異なる保持期間を設定しないかぎり 無期限に保持されます。詳しい情報については「[EntepriseでのAudit logの設定](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)」を参照してください。{% else %}無期限に保持されます。{% endif %}{% else %}、その期間は当月と最大過去6ヶ月です。 Audit logは、7日分のGitイベントを保持します。{% endif %}

{% data reusables.audit_log.only-three-months-displayed %}
