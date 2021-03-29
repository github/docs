---
title: Acerca de la búsqueda en GitHub
intro: 'Nuestra búsqueda integrada cubre los diversos repositorios, usuarios y líneas de código en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/using-the-command-bar/
  - /articles/github-search-basics/
  - /articles/search-basics/
  - /articles/searching-github/
  - /articles/advanced-search/
  - /articles/about-searching-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - búsqueda de github
---

{% data reusables.search.you-can-search-globally %}

- Para hacer una búsqueda global en todo {% data variables.product.product_name %}, escribe lo que estás buscando en el campo de búsqueda en la parte superior de cualquier página y elige "Todo {% data variables.product.prodname_dotcom %}" en el menú de búsqueda desplegable.
- Para buscar dentro de un repositorio o una organización en particular, navega a la página del repositorio o de la organización, escribe lo que estás buscando en el campo de búsqueda en la parte superior de la página y presiona **Aceptar**.

{% note %}

**Notas:**

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- {% data reusables.search.required_login %}{% endif %}
- Los sitios {% data variables.product.prodname_pages %} no se pueden buscar en {% data variables.product.product_name %}. Sin embargo, puedes buscar el contenido fuente si existe en la rama por defecto de un repositorio, usando la búsqueda de código. Para obtener más información, consulta "[Código de búsqueda](/articles/searching-code)". Para obtener más información acerca de {% data variables.product.prodname_pages %}, consulta "[¿Qué son las Páginas de GitHub?](/articles/what-is-github-pages/)"
- Actualmente, nuestra búsqueda no es compatible con las coincidencias exactas.
- Cuando estés buscando dentro de archivos de código, únicamente se devolverán los primeros dos resultados de cada archivo.

{% endnote %}

Después de ejecutar una búsqueda en {% data variables.product.product_name %}, puedes clasificar los resultados o refinarlos más haciendo clic en uno de los idiomas de la barra lateral. Para obtener más información, consulta "[Clasificar los resultados de búsqueda](/articles/sorting-search-results)".

La búsqueda de {% data variables.product.product_name %} usa una agrupación ElasticSearch para indexar los proyectos cada vez que se sube un cambio a {% data variables.product.product_name %}. Las propuestas y las solicitudes de extracción son indexadas cuando son creadas o modificadas.

### Tipos de búsquedas en {% data variables.product.prodname_dotcom %}

Puedes buscar la siguiente información a través de todos los repositorios a los que puedes acceder en {% data variables.product.product_location %}.

- [Repositorios](/articles/searching-for-repositories)
- [Temas](/articles/searching-topics)
- [propuestas y solicitudes de cambios](/articles/searching-issues-and-pull-requests){% if currentVersion == "free-pro-team@latest" %}
- [Debates](/github/searching-for-information-on-github/searching-discussions){% endif %}
- [Código](/articles/searching-code)
- [Confirmaciones](/articles/searching-commits)
- [Usuarios](/articles/searching-users){% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest"  or currentVersion ver_gt "enterprise-server@2.21" %}
- [Paquetes](/github/searching-for-information-on-github/searching-for-packages){% endif %}
- [Wikis](/articles/searching-wikis)

### Buscar usando una interfaz visual

Alternativamente, puedes buscar {% data variables.product.product_name %} usando {% data variables.search.search_page_url %} o {% data variables.search.advanced_url %}.

{% data variables.search.advanced_url %} ofrece una interfaz visual para construir consultas de búsqueda. Puedes filtrar tus búsquedas por diferentes factores, como la cantidad de estrellas o la cantidad de bifurcaciones que tiene un repositorio. A medida que completas los campos de búsqueda de avanzada, tu consulta se construirá automáticamente en la barra de búsqueda superior.

![Búsqueda avanzada](/assets/images/help/search/advanced_search_demo.gif)

{% if currentVersion != "github-ae@latest" %}
### Buscar en todo {% data variables.product.prodname_enterprise %} y {% data variables.product.prodname_dotcom_the_website %} simultáneamente

Si usas {% data variables.product.prodname_enterprise %} y eres miembro de una organización de {% data variables.product.prodname_dotcom_the_website %} que usa {% data variables.product.prodname_ghe_cloud %}, tu administrador del sitio {% data variables.product.prodname_enterprise %} puede activar {% data variables.product.prodname_github_connect %} para que puedas buscar en ambos entornos al mismo tiempo. Para obtener más información, consulta "[Activar {% data variables.product.prodname_unified_search %} entre {% data variables.product.prodname_enterprise %} y {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com)".

También solo puedes buscar en ambos entornos desde {% data variables.product.prodname_enterprise %}. Para limitar tu búsqueda por entorno, puedes usar una opción de filtro en {% data variables.search.advanced_url %} o puedes usar el prefijo de búsqueda `environment:`. Para solo buscar contenido en {% data variables.product.prodname_enterprise %}, usa la sintaxis de búsqueda `environment:local`. Para solo buscar contenido en {% data variables.product.prodname_dotcom_the_website %}, usa la sintaxis de búsqueda `environment:github`.

El administrador de tu sitio {% data variables.product.prodname_enterprise %} puede activar {% data variables.product.prodname_unified_search %} para todos los repositorios públicos, todos los repositorios privados o solo ciertos repositorios privados en la organización de {% data variables.product.prodname_ghe_cloud %} conectada.
Si tu administrador de sitio habilita

la {% data variables.product.prodname_unified_search %} en los repositorios privados, solo podrás hacer búsquedas en los repositorios privados para los cuales el administrador haya habilitado la {% data variables.product.prodname_unified_search %} y a los cuales tengas acceso en la organización de {% data variables.product.prodname_dotcom_the_website %} conectada. Los administradores de {% data variables.product.prodname_enterprise %} y los propietarios de la organización en {% data variables.product.prodname_dotcom_the_website %} no pueden buscar en repositorios privados que son propiedad de tu cuenta. Para buscar los repositorios privados aplicables, debes activar la búsqueda de repositorio privado para tus cuentas personales en {% data variables.product.prodname_dotcom_the_website %} y {% data variables.product.prodname_enterprise %}. Para obtener más información, consulta "[Activar la búsqueda de repositorio privado de {% data variables.product.prodname_dotcom_the_website %} en tu cuenta de {% data variables.product.prodname_enterprise %} account](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)".
{% endif %}

### Leer más

- "[Comprender la sintaxis de búsqueda](/articles/understanding-the-search-syntax)"
- "[Búsqueda en GitHub](/articles/searching-on-github)"
