---
title: Acerca de los repositorios
intro: Un repositorio contiene todos los archivos de tu proyecto y el historial de revisiones de cada uno de ellos. Puedes debatir y administrar el trabajo de tu proyecto dentro del repositorio.
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 95e4033aa41f7920b5447554773dc61a181f5861
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163509'
---
## Acerca de los repositorios

Puedes ser propietario de repositorios individualmente o puedes compartir la propiedad de los repositorios con otras personas en una organización.

Puedes restringir quién tiene acceso a un repositorio seleccionando la visibilidad del mismo. Para más información, vea "[Acerca de la visibilidad del repositorio](#about-repository-visibility)".

Para los repositorios que son propiedad de un usuario, les puedes dar a otras personas acceso de colaborador para que puedan colaborar en tu proyecto. Si un repositorio es propiedad de una organización, les puedes dar a los miembros de la organización permisos de acceso para colaborar en tu repositorio. Para obtener más información, consulta "[Niveles de permisos para un repositorio de cuentas personales](/articles/permission-levels-for-a-user-account-repository/)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% ifversion fpt or ghec %} Gracias a {% data variables.product.prodname_free_team %} para cuentas personales y organizaciones, puedes trabajar con colaboradores ilimitados en repositorios públicos ilimitados con un conjunto completo de características, o en repositorios privados ilimitados con un conjunto limitado de características. Para obtener herramientas avanzadas para repositorios privados, puedes mejorar tu plan a {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, o {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %} {% else %} Cada persona y organización pueden ser propietarios de repositorios ilimitados e invitar a una cantidad ilimitada de colaboradores a todos los repositorios.
{% endif %}

Puedes utilizar repositorios para administrar tu trabajo y colaborar con otros.
- Puedes utilizar propuestas para recolectar la retroalimentación de los usuarios, reportar errores de software y organizar las tareas que te gustaría realizar. Para obtener más información, vea "[Acerca de las incidencias](/github/managing-your-work-on-github/about-issues)".{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- Puedes utilizar las solicitudes de cambios para proponer cambios a un repositorio. Para más información, vea "[Acerca de las solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".
- Puedes utilizar tableros de proyecto para organizar y priorizar tus propuestas y solicitudes de cambios. Para más información, vea "[Acerca de los paneles de proyecto](/github/managing-your-work-on-github/about-project-boards)".

{% data reusables.repositories.repo-size-limit %}

Para obtener información sobre cómo usar repositorios de forma más eficaz, consulta "[Procedimientos recomendados para repositorios](/repositories/creating-and-managing-repositories/best-practices-for-repositories)".

## Acerca de la visibilidad de un repositorio

Puede restringir quién tiene acceso a un repositorio eligiendo la visibilidad de este: {% ifversion ghes or ghec %}público, interno o privado{% elsif ghae %}privado o interno{% else %} público o privado{% endif %}.

{% ifversion fpt or ghec or ghes %}

Cuando creas un repositorio, puedes elegir si lo quieres hacer público o privado.{% ifversion ghec or ghes %} Si estás creando el repositorio en una organización{% ifversion ghec %} que le pertenezca a una cuenta empresarial{% endif %}, también puedes elegir hacerlo interno.{% endif %}{% endif %}{% ifversion fpt %} Los repositorios en las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y le pertenecen a una cuenta empresarial también pueden crearse con visibilidad interna. Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

Cuando creas un repositorio que pertenece a tu cuenta personal, este siempre será privado. Cuando creas un repositorio que le pertenece a una organización, puedes elegir hacerlo privado o interno.

{% endif %}

{%- ifversion fpt or ghec %}
- Los repositorios públicos son accesibles para todos los usuarios de Internet.
- Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados.
{%- elsif ghes %}
- Si {% data variables.location.product_location %} no está en modo privado o detrás de un firewall, cualquiera en Internet podrá acceder a los repositorios públicos. De lo contrario, los repositorios públicos estarán disponibles para cualquiera que utilice {% data variables.location.product_location %}, incluidos los colaboradores externos.
- Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados.
{%- elsif ghae %}
- Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados.
{%- endif %} {%- ifversion ghec or ghes or ghae %}
- Todos los miembros de la empresa pueden acceder a los repositorios internos. Para más información, vea "[Acerca de los repositorios internos](#about-internal-repositories)".
{%- endif %}

Los propietarios de la organización siempre tiene acceso a todos los repositorios creados en la misma. Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Las personas con permisos de administrador para un repositorio pueden cambiar la visibilidad de los repositorios existentes. Para obtener más información, consulte "[Configuración de la visibilidad de un repositorio](/github/administering-a-repository/setting-repository-visibility)".

{% ifversion ghes or ghec or ghae %}
## Acerca de los repositorios internos

{% data reusables.repositories.about-internal-repos %} Para obtener más información acerca de InnerSource, vea las notas del producto de {% data variables.product.prodname_dotcom %}"[Introducción a InnerSource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% ifversion ghec %} {% note %}

**Nota**: Solo puedes crear repositorios internos si usas {% data variables.product.prodname_ghe_cloud %} con una cuenta de empresa. Una cuenta de empresa es un tipo independiente de cuenta que permite un punto central de administración para varias organizaciones. Para obtener más información, consulta "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

{% endnote %} {% endif %}

Todos los miembros de las empresas tienen permiso de lectura para los repositorios internos, pero las personas {% ifversion fpt or ghec %}externas a la empresa{% else %}que no sean miembros de ninguna organización{% endif %}, incluyendo los colaboradores externos en los repositorios organizacionales, no pueden verlos. Para obtener más información, vea "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% ifversion ghes %} {% note %}

**Nota**: Un usuario debe formar parte de una organización para ser un miembro de la empresa y tener acceso a los repositorios internos. Si un usuario de {% data variables.location.product_location %} no es un miembro de alguna organización, no tendrá acceso a los repositorios internos.

{% endnote %} {% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}A menos que la empresa use {% data variables.product.prodname_emus %}, los miembros {% else %}Members{% endif %} de la empresa pueden bifurcar cualquier repositorio interno que pertenezca a una organización de la empresa. El repositorio bifurcado pertenecerá a la cuenta personal del miembro y la visibilidad de la bifurcación será privada. Si se elimina a un usuario de todas las organizaciones que pertenezcan a la empresa, las bifurcaciones de dicho usuario para los repositorios internos se eliminarán automáticamente.

{% ifversion ghec %} {% note %}

**Nota**: Los {% data variables.enterprise.prodname_managed_users_caps %} no pueden bifurcar repositorios internos. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)".

{% endnote %} {% endif %} {% endif %}

## Límites para visualizar contenido y diferencias en un repositorio

Determinados tipos de recursos pueden ser bastante grandes y requerir mucho procesamiento en {% data variables.product.product_name %}. Por este motivo, se establecen límites para asegurar que las solicitudes se realicen en una cantidad de tiempo razonable.

La mayoría de los límites que aparecen a continuación afectan tanto {% data variables.product.product_name %} como la API.

### Límites de texto

Los archivos de texto de más de **512 KB** siempre se muestran como texto sin formato. El código no es de sintaxis resaltada, y los archivos de prosa no se convierten a HTML (como Markdown, AsciiDoc, *etc.* ).

Los archivos de texto de más de **5 MB** solo están disponibles mediante sus direcciones URL sin procesar, que se sirven mediante `{% data variables.product.raw_github_com %}`; por ejemplo, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Haga clic en el botón **Raw**(Sin formato) para obtener la dirección URL sin procesar de un archivo.

### Límites de diferencias

Como las diferencias se pueden volver muy grandes, imponemos los siguientes límites en las diferencias para las confirmaciones, las solicitudes de extracción y las vistas comparadas:

- En una solicitud de incorporación de cambios, ninguna diferencia total puede superar las *20 000 líneas que puede cargar* o *1 MB* de datos de la diferencia sin procesar.
- Ninguna diferencia de archivo único puede superar las *20 000 líneas que puede cargar* o *500 KB* de datos de la diferencia sin procesar. Para un único archivo se cargan automáticamente *cuatrocientas líneas* y *20 KB*.
- La cantidad máxima de archivos en una diferencia única se limita a *300*.
- La cantidad máxima de archivos representables (como imágenes, PDF y archivos GeoJSON) en una diferencia única está limitada a *25*.

Se pueden mostrar algunas partes de una diferencia limitada, pero no se muestra nada que supere el límite.

### Límites de listas de confirmaciones

Las páginas de vistas de comparación y solicitudes de incorporación de cambios muestran una lista de confirmaciones entre las revisiones `base` y `head`. Estas listas están limitadas a **250** confirmaciones. Si superan ese límite, una nota indica que existen más confirmaciones (pero no se muestran).

## Información adicional

- "[Acerca de las bifurcaciones](/github/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Colaboración con incidencias y solicitudes de incorporación de cambios](/categories/collaborating-with-issues-and-pull-requests)"
- "[Administración del trabajo en {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/)"
- "[Administración de un repositorio](/categories/administering-a-repository)"
- "[Visualización de datos del repositorio con gráficos](/categories/visualizing-repository-data-with-graphs/)"
- "[Acerca de las wikis](/communities/documenting-your-project-with-wikis/about-wikis)"
- "[Glosario de {% data variables.product.prodname_dotcom %}](/articles/github-glossary)"
