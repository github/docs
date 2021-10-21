{% ifversion fpt or ghes > 2.22 or ghae %} 默认情况下，{% data variables.product.product_name %} 会将构建日志和构件存储 90 天，此保留期可以自定义。 更多信息请参阅“[使用限制、计费和管理](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)”。{% endif %}
{% ifversion ghes = 2.22 %} {% data variables.product.product_name %} 存储 90 天的完整构建日志和构件。{% endif %}
