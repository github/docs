{% ifversion fpt or ghec %}

{% note %}

**Nota:** Este artículo aplica a {% data variables.product.prodname_ghe_cloud %}. Para ver la versión de {% data variables.product.prodname_ghe_managed %} o de {% data variables.product.prodname_ghe_server %}, utiliza el menú desplegable de **{% data ui.pages.article_version %}**.

{% endnote %}

{% endif %}

### URL de las Terminales

Las terminales de la API de REST{% ifversion ghes %}—excepto las terminales de la API de [Consola de Administración](#management-console)—{% endif %} se prefijan con la siguiente URL:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %}
Cuando las terminales incluyen a `{enterprise}`, reemplaza `{enterprise}` con el manejo de tu cuenta empresarial, el cual se incluye en la URL de los ajustes de tu empresa. Por ejemplo, si tu cuenta empresarial se ubica en `https://github.com/enterprises/octo-enterprise`, reemplaza a `{enterprise}` con `octo-enterprise`.
{% endif %}

{% ifversion ghes %}
Las terminales de la API de [Consola de Administración](#management-console) solo llevan un prefijo con un nombre de host:

```shell
http(s)://<em>hostname</em>/
```
{% endif %}
{% ifversion ghae or ghes %}
### Autenticación

Las terminales de la API para tu instalación de {% data variables.product.product_name %} acceptan [los mismos métodos de autenticación](/rest/overview/resources-in-the-rest-api#authentication) que los de la API de GitHub.com. Puedes autenticarte con **[Tokens de OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(los cuales se pueden crear utilizando la [API de autorizciones](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}o con la **[autenticación básica](/rest/overview/resources-in-the-rest-api#basic-authentication)**. {% ifversion ghes %} Los tokens de OAuth deben tener el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) de `site_admin` cuando se utilicen con las terminales específicas de la empresa. {% endif %}

Solo los administradores de sitio autenticados en {% data variables.product.product_name %} pueden acceder a las terminales de la API de administración empresarial{% ifversion ghes %}, con exepción de la API de [Consola de Administración](#management-console), la cual requiere la [contraseña de la Consola de Administración](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Información de la versión

La versión actual de tu empresa se devuelve en el encabezado de respuesta de cada API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0` También puedes leer la versión actual si llamas a la [terminal de meta](/rest/reference/meta/).

{% endif %}