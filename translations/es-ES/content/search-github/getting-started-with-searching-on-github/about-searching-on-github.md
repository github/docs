---
title: Acerca de la búsqueda en GitHub
intro: 'Nuestra búsqueda integrada cubre los diversos repositorios, usuarios y líneas de código en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/using-the-command-bar
  - /articles/github-search-basics
  - /articles/search-basics
  - /articles/searching-github
  - /articles/advanced-search
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
---

{% data reusables.search.you-can-search-globally %}

- Para hacer una búsqueda global en todo {% data variables.product.product_name %}, escribe lo que estás buscando en el campo de búsqueda en la parte superior de cualquier página y elige "Todo {% data variables.product.prodname_dotcom %}" en el menú de búsqueda desplegable.
- Para buscar dentro de un repositorio o una organización en particular, navega a la página del repositorio o de la organización, escribe lo que estás buscando en el campo de búsqueda en la parte superior de la página y presiona **Aceptar**.

{% note %}

**Notas:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Los sitios {% data variables.product.prodname_pages %} no se pueden buscar en {% data variables.product.product_name %}. Sin embargo, puedes buscar el contenido fuente si existe en la rama por defecto de un repositorio, usando la búsqueda de código. Para obtener más información, consulta "[Código de búsqueda](/search-github/searching-on-github/searching-code)". Para obtener más información acerca de {% data variables.product.prodname_pages %}, consulta "[¿Qué son las Páginas de GitHub?](/articles/what-is-github-pages/)"
- Actualmente, nuestra búsqueda no es compatible con las coincidencias exactas.
- Cuando estés buscando dentro de archivos de código, únicamente se devolverán los primeros dos resultados de cada archivo.

{% endnote %}

Después de ejecutar una búsqueda en {% data variables.product.product_name %}, puedes clasificar los resultados o refinarlos más haciendo clic en uno de los idiomas de la barra lateral. Para obtener más información, consulta "[Clasificar los resultados de búsqueda](/search-github/getting-started-with-searching-on-github/sorting-search-results)".

La búsqueda de {% data variables.product.product_name %} usa una agrupación ElasticSearch para indexar los proyectos cada vez que se sube un cambio a {% data variables.product.product_name %}. Las propuestas y las solicitudes de extracción son indexadas cuando son creadas o modificadas.

## Tipos de búsquedas en {% data variables.product.prodname_dotcom %}

Puedes buscar la siguiente información a través de todos los repositorios a los que puedes acceder en {% data variables.product.product_location %}.

- [Repositorios](/search-github/searching-on-github/searching-for-repositories)
- [Temas](/search-github/searching-on-github/searching-topics)
- [propuestas y solicitudes de cambios](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Debates](/search-github/searching-on-github/searching-discussions){% endif %}
- [Código](/search-github/searching-on-github/searching-code)
- [Confirmaciones](/search-github/searching-on-github/searching-commits)
- [Usuarios](/search-github/searching-on-github/searching-users)
- [Packages](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Buscar usando una interfaz visual

Puedes buscar en {% data variables.product.product_name %} utilizando la {% data variables.search.search_page_url %} o la {% data variables.search.advanced_url %}. {% if command-palette %}Como alternativa, puedes utilizar la búsqueda interactiva en la {% data variables.product.prodname_command_palette %} para buscar tu ubicación actual en la IU, un usuario, repositorio u organización específicos y globalmente en todo {% data variables.product.product_name %} al alcance de tu teclado. Para obtener más información, consulta la sección "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".{% endif %}

{% data variables.search.advanced_url %} ofrece una interfaz visual para construir consultas de búsqueda. Puedes filtrar tus búsquedas por diferentes factores, como la cantidad de estrellas o la cantidad de bifurcaciones que tiene un repositorio. A medida que completas los campos de búsqueda de avanzada, tu consulta se construirá automáticamente en la barra de búsqueda superior.

![Búsqueda avanzada](/assets/images/help/search/advanced_search_demo.gif)

## Buscar repositorios en {% data variables.product.prodname_dotcom_the_website %} desde tu ambiente de empresa privada

{% ifversion fpt or ghec %}

Si utilizas tanto {% data variables.product.prodname_dotcom_the_website %} como {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %} y un propietario de empresa habilitó la {% data variables.product.prodname_unified_search %}, puedes buscar en ambos ambientes al mismo tiempo desde {% data variables.product.prodname_ghe_server %} o desde {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta [la documentación de {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) o [la documentación de {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}, and an enterprise owner has enabled {% data variables.product.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.product_name %}. For more information about how enterprise owners can enable {% data variables.product.prodname_unified_search %}, see "[Enabling {% data variables.product.prodname_unified_search %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)."

Tu propietario de empresa en {% data variables.product.product_name %} puede separar y habilitar la {% data variables.product.prodname_unified_search %} para todos los repositorios públicos {% data variables.product.prodname_dotcom_the_website %} y para los repositorios privados que pertenecen a la organización o empresa de {% data variables.product.prodname_dotcom_the_website %} que está conectada a {% data variables.product.product_name %} mediante {% data variables.product.prodname_github_connect %}.

Before you can use {% data variables.product.prodname_unified_search %} for private repositories, you must connect your personal accounts on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Habilitar la búsqueda de repositorios en {% data variables.product.prodname_dotcom_the_website %} desde tu ambiente empresarial privado](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)".

When you search from {% data variables.product.product_name %}, only private repositories that you have access to and that are owned by the connected organization or enterprise account will be included in search results. Ni tú ni nadie más podrá buscar en los repositorios privados que le pertenezcan a tu cuenta personal de {% data variables.product.prodname_dotcom_the_website %} desde {% data variables.product.product_name %}.

Para limitar tu búsqueda a un solo ambiente, puedes utilizar una opción de filtro en la {% data variables.search.advanced_url %} o puedes utilizar el prefijo de búsqueda `environment:`. Para solo buscar contenido en {% data variables.product.product_name %}, usa la sintaxis de búsqueda `environment:local`. Para solo buscar contenido en {% data variables.product.prodname_dotcom_the_website %}, usa la sintaxis de búsqueda `environment:github`.
{% endif %}

## Leer más

- "[Entender la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Búsqueda en GitHub](/articles/searching-on-github)"
