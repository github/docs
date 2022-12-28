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
ms.openlocfilehash: 58ecec218d8f8f0ee3d11afbf65debf7df72e811
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159105'
---
{% ifversion github-code-search %} {% note %}

  **Nota:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %}

- Para hacer una búsqueda global en todo {% data variables.product.product_name %}, escribe lo que estás buscando en el campo de búsqueda en la parte superior de cualquier página y elige "Todo {% data variables.product.prodname_dotcom %}" en el menú de búsqueda desplegable.
- Para buscar dentro de un repositorio o una organización en particular, vaya a la página del repositorio o de la organización, escribe lo que está buscando en el campo de búsqueda de la parte superior de la página y pulse **Enter**.

{% note %}

**Notas:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Los sitios {% data variables.product.prodname_pages %} no se pueden buscar en {% data variables.product.product_name %}. Sin embargo, puedes buscar el contenido fuente si existe en la rama por defecto de un repositorio, usando la búsqueda de código. Para obtener más información, consulte "[Búsqueda de código](/search-github/searching-on-github/searching-code)". Para obtener más información sobre {% data variables.product.prodname_pages %}, consulte ["¿Qué son las páginas de GitHub?](/articles/what-is-github-pages/)"
- Actualmente, nuestra búsqueda no es compatible con las coincidencias exactas.
- Cuando estés buscando dentro de archivos de código, únicamente se devolverán los primeros dos resultados de cada archivo.

{% endnote %}

Después de ejecutar una búsqueda en {% data variables.product.product_name %}, puedes clasificar los resultados o refinarlos más haciendo clic en uno de los idiomas de la barra lateral. Para obtener más información, consulte "[Ordenar resultados de búsqueda](/search-github/getting-started-with-searching-on-github/sorting-search-results)".

La búsqueda de {% data variables.product.product_name %} usa una agrupación ElasticSearch para indexar los proyectos cada vez que se sube un cambio a {% data variables.product.product_name %}. Las propuestas y las solicitudes de extracción son indexadas cuando son creadas o modificadas.

## Tipos de búsquedas en {% data variables.product.prodname_dotcom %}

Puedes buscar la siguiente información a través de todos los repositorios a los que puedes acceder en {% data variables.location.product_location %}.

- [Repositorios](/search-github/searching-on-github/searching-for-repositories)
- [Temas](/search-github/searching-on-github/searching-topics)
- [Incidencias y solicitudes de incorporación de cambios](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Debates](/search-github/searching-on-github/searching-discussions){% endif %}
- [Código](/search-github/searching-on-github/searching-code)
- [Confirmaciones](/search-github/searching-on-github/searching-commits)
- [Usuarios](/search-github/searching-on-github/searching-users)
- [Paquetes](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Buscar usando una interfaz visual

Puedes buscar en {% data variables.product.product_name %} utilizando la {% data variables.search.search_page_url %} o la {% data variables.search.advanced_url %}. {% ifversion command-palette %}Como alternativa, puedes utilizar la búsqueda interactiva en la {% data variables.product.prodname_command_palette %} para buscar tu ubicación actual en la IU, un usuario, repositorio u organización específicos y globalmente en todo {% data variables.product.product_name %} al alcance de tu teclado. Para obtener más información, consulte "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

{% data variables.search.advanced_url %} ofrece una interfaz visual para construir consultas de búsqueda. Puedes filtrar tus búsquedas por diferentes factores, como la cantidad de estrellas o la cantidad de bifurcaciones que tiene un repositorio. A medida que completas los campos de búsqueda de avanzada, tu consulta se construirá automáticamente en la barra de búsqueda superior.

![Búsqueda avanzada](/assets/images/help/search/advanced_search_demo.gif)

## Buscar repositorios en {% data variables.product.prodname_dotcom_the_website %} desde tu ambiente de empresa privada

{% ifversion fpt or ghec %}

Si usas {% data variables.product.prodname_dotcom_the_website %} y {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}, y un propietario de la empresa ha habilitado {% data variables.enterprise.prodname_unified_search %}, puedes buscar en ambos entornos al mismo tiempo desde {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) o la [documentación de {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

Si usas {% data variables.product.prodname_dotcom_the_website %} y {% data variables.product.product_name %}, y un propietario de la empresa ha habilitado {% data variables.enterprise.prodname_unified_search %}, puedes buscar en ambos entornos al mismo tiempo desde {% data variables.product.product_name %}. Para obtener más información sobre cómo los propietarios de empresas pueden habilitar {% data variables.enterprise.prodname_unified_search %}, consulta "[Habilitación de {% data variables.enterprise.prodname_unified_search %} para la empresa](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)".

El propietario de la empresa en {% data variables.product.product_name %} puede habilitar por separado {% data variables.enterprise.prodname_unified_search %} para todos los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %} y para repositorios privados que pertenecen a la organización o empresa en {% data variables.product.prodname_dotcom_the_website %} conectado a {% data variables.product.product_name %} mediante {% data variables.product.prodname_github_connect %}.

Para poder usar {% data variables.enterprise.prodname_unified_search %} para repositorios privados, debes conectar tus cuentas personales en {% data variables.product.prodname_dotcom_the_website %} y {% data variables.product.product_name %}. Para obtener más información, consulte "[Habilitación de la búsqueda de repositorios de {% data variables.product.prodname_dotcom_the_website %} desde su entorno empresarial privado](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)".

Al buscar desde{% data variables.product.product_name %}, solo se incluirán en los resultados de la búsqueda los repositorios privados a los que tengas acceso y que sean propiedad de la cuenta conectada de la organización o empresa. Ni tú ni nadie más podrá buscar repositorios privados propiedad de tu cuenta personal en {% data variables.product.prodname_dotcom_the_website %} desde {% data variables.product.product_name %}.

Para limitar la búsqueda a un entorno, puedes usar una opción de filtro en la {% data variables.search.advanced_url %} o usar el prefijo de búsqueda `environment:`. Para buscar solo contenido en {% data variables.product.product_name %}, use la sintaxis de búsqueda `environment:local`. Para buscar solo contenido en {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.
{% endif %}

## Información adicional

- "[Entender la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Buscar en GitHub](/articles/searching-on-github)"
