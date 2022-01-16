{% ifversion fpt or ghes > 2.22 or ghae %} デフォルトでは、{% data variables.product.product_name %} はビルドログと成果物を 90 日間保存します。この保持期間はカスタマイズできます。 詳しい情報については、「[使用制限、支払い、および管理](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)」を参照してください。{% endif %}
{% ifversion ghes = 2.22 %} {% data variables.product.product_name %} には、完全なビルドログと成果物が 90 日間保存されます。{% endif %}
