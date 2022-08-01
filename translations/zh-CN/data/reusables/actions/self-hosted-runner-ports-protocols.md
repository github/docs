{% ifversion ghes or ghae %}
自托管运行器与 {% data variables.product.product_name %} 之间的连接通过{% ifversion ghes %}HTTP（端口 80）或 {% endif %}HTTPS（端口 443）。 {% ifversion ghes %}要确保通过 HTTPS 的连接，请为 {% data variables.product.product_location %} 配置 TLS。 更多信息请参阅“[配置 TLS](/admin/configuration/configuring-network-settings/configuring-tls)”。{% endif %}
{% endif %}
