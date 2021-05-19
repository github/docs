---
title: Configurar un servidor proxy web fuera de banda
intro: 'Un servidor proxy proporciona otro nivel de seguridad para {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server/
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
---

Cuando se habilita un servidor proxy para {% data variables.product.product_location %}, primero {% data variables.product.prodname_ghe_server %} envía mensajes fuera de banda a través del servidor proxy, a menos que el host de destino se agregue como una exclusión de servidor proxy HTTP. Los tipos de mensajes fuera de banda incluyen webhooks salientes, carga de paquetes y extracción de avatares heredados. La URL del servidor proxy es el protocolo, dominio o dirección IP más el número de puerto, por ejemplo `http://127.0.0.1:8123`.

{% note %}

**Nota:**  Para conectarte a {% data variables.product.product_location %} para {% data variables.product.prodname_dotcom_the_website %}, tu configuración proxy debe permitir la conectividad a `github.com` y a `api.github.com`. Para obtener más información, consulta "[Conectarse a {% data variables.product.prodname_ghe_server %} para {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)."

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. En **Servidor proxy HTTP**, escribe la URL de tu servidor proxy. ![Campo para escribir la URL del servidor proxy HTTP](/assets/images/enterprise/management-console/http-proxy-field.png)

5. De manera opcional, en **Exclusión de servidor proxy HTTP**, escribe cualquier host que no exija acceso proxy, separando los hosts con comas. Para excluir a todos los hosts en un dominio de que requieran acceso por proxy, puedes utilizar `.` como un prefijo de comodín.  Por ejemplo: `.octo-org.tentacle` ![Campo para escribir cualquier Exclusión de Proxy HTTP](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
