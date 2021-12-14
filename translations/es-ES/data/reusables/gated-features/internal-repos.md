{% ifversion fpt %}
Los repositorios internos se encuentran disponibles en
{% data variables.product.prodname_ghe_cloud %} para las organizaciones que pertenezcan a una cuenta empresarial y en {% data variables.product.prodname_ghe_server %} 2.20+. Para obtener más información, consulta las secciones "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) y "[Acerca de las cuentas empresariales](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% else %}
Los repositorios internos se encuentran disponibles en
{% data variables.product.prodname_ghe_cloud %} para organizaciones que pertenezcan a una cuenta empresarial{% ifversion ghae %}, {% data variables.product.prodname_ghe_managed %}m {% endif %} y {% data variables.product.prodname_ghe_server %} 2.20+. Para obtener más información, consulta las secciones "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)" y "[Acerca de las cuentas empresariales](/admin/overview/about-enterprise-accounts)".
{% endif %}
