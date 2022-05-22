{% ifversion ghes or ghae %}
La conexión entre los ejecutores auto-hospedados y {% data variables.product.product_name %} es a través de {% ifversion ghes %}HTTP (puerto 80) o {% endif %}HTTPS (puerto 443). {% ifversion ghes %}Para garantizar la conectividad por HTTPS, configura el TLS para {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Configurar el TLS](/admin/configuration/configuring-network-settings/configuring-tls)".{% endif %}
{% endif %}
