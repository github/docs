{% ifversion ghes or ghae %}
A conexão entre runners auto-hospedados e {% data variables.product.product_name %} é por meio de {% ifversion ghes %}HTTP (porta 80) ou {% endif %}HTTPS (porta 443). {% ifversion ghes %}Para garantir conectividade por meio de HTTPS, configure TLS para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Configurando TLS](/admin/configuration/configuring-network-settings/configuring-tls)".{% endif %}
{% endif %}
