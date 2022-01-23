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

{% ifversion fpt or ghes or ghae or ghec %}

## Buscar repositorios en {% data variables.product.prodname_dotcom_the_website %} desde tu ambiente de empresa privada

Si tuilizas {% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}{% else %}{% data variables.product.product_name %}{% endif %} y eres miembro de una organización de {% data variables.product.prodname_dotcom_the_website %} que utiliza {% data variables.product.prodname_ghe_cloud %}, un propietario de empresa de tu ambiente de {% data variables.product.prodname_enterprise %} puede habilitar {% data variables.product.prodname_github_connect %} para que puedas buscar en ambos ambientes al mismo tiempo{% ifversion ghes or ghae %} desde {% data variables.product.product_name %}{% endif %}. Para obtener más información, consulta lo siguiente.

{% ifversion fpt or ghes or ghec %}

- "[Habilitar la {% data variables.product.prodname_unified_search %} en tu empresa]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" en la documentación de {% data variables.product.prodname_ghe_server %}{% endif %}
- "[Habilitar la {% data variables.product.prodname_unified_search %} para tu empresa](/github-ae@latest/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" en la documentación de {% data variables.product.prodname_ghe_managed %}

{% ifversion ghes or ghae %}

Para limitar tu búsqueda por entorno, puedes usar una opción de filtro en {% data variables.search.advanced_url %} o puedes usar el prefijo de búsqueda `environment:`. Para solo buscar contenido en {% data variables.product.product_name %}, usa la sintaxis de búsqueda `environment:local`. Para solo buscar contenido en {% data variables.product.prodname_dotcom_the_website %}, usa la sintaxis de búsqueda `environment:github`.

Tu propietario de empresa en {% data variables.product.product_name %} puede habilitar la {% data variables.product.prodname_unified_search %} para todos los repositorios públicos y privados o únicamente los privados en la organización conectada de {% data variables.product.prodname_ghe_cloud %}.

Cuando buscas en {% data variables.product.product_name %}, solo puedes buscar en los repositorios privados de la organización conectada de {% data variables.product.prodname_dotcom_the_website %} a los cuales tengas acceso. Los propietarios de empresa de {% data variables.product.product_name %} y los propietarios de organizaciones en {% data variables.product.prodname_dotcom_the_website %} no pueden buscar en los repositorios privados que pertenezcan a tu cuenta de {% data variables.product.prodname_dotcom_the_website %}. Para buscar los repositorios privados aplicables, debes habilitar la búsqueda en repositorios privados para tus cuentas personales de {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Habilitar la búsqueda de repositorios en {% data variables.product.prodname_dotcom_the_website %} desde tu ambiente empresarial privado](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)".

{% endif %}

{% endif %}

## Leer más

- "[Entender la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Búsqueda en GitHub](/articles/searching-on-github)"
