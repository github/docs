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
---

## Acerca de los repositorios

Puedes ser propietario de repositorios individualmente o puedes compartir la propiedad de los repositorios con otras personas en una organización.

Puedes restringir quién tiene acceso a un repositorio seleccionando la visibilidad del mismo. Para obtener más información, consulta la sección "[Acerca de la visibilidad de un repositorio](#about-repository-visibility)".

Para los repositorios que son propiedad de un usuario, les puedes dar a otras personas acceso de colaborador para que puedan colaborar en tu proyecto. Si un repositorio es propiedad de una organización, les puedes dar a los miembros de la organización permisos de acceso para colaborar en tu repositorio. Para obtener más información, consulta las secciones "[Niveles de permiso para un repositorio de una cuenta personal](/articles/permission-levels-for-a-user-account-repository/)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% ifversion fpt or ghec %}
Con {% data variables.product.prodname_free_team %} para las cuentas personales y organizaciones, puedes trabajar con colaboradores ilimitados en repositorios públicos ilimitados con un conjunto de características completo o con repositorios privados ilimitados con un conjunto de características limitado. Para obtener herramientas avanzadas para repositorios privados, puedes mejorar tu plan a {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, o {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}
{% else %}
Cada persona y organización puede tener repositorios ilimitados e invitar a un número ilimitado de colaboradores a todos ellos.
{% endif %}

Puedes utilizar repositorios para administrar tu trabajo y colaborar con otros.
- Puedes utilizar propuestas para recolectar la retroalimentación de los usuarios, reportar errores de software y organizar las tareas que te gustaría realizar. Para obtener más información, consulta la sección "[Acerca de las propuestas](/github/managing-your-work-on-github/about-issues)".{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- Puedes utilizar las solicitudes de cambios para proponer cambios a un repositorio. Para obtener más información, consulta "[Acerca de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."
- Puedes utilizar tableros de proyecto para organizar y priorizar tus propuestas y solicitudes de cambios. Para obtener más información, consulta "[Acerca de los tableros de proyectos](/github/managing-your-work-on-github/about-project-boards)."

{% data reusables.repositories.repo-size-limit %}

## Acerca de la visibilidad de un repositorio

Puedes restringir quién tiene acceso a un repositorio si eliges la visibilidad del mismo: {% ifversion ghes or ghec %} pública, interna, o privada{% elsif ghae %}privada o interna{% else %} pública o privada{% endif %}.

{% ifversion fpt or ghec or ghes %}

Cuando creas un repositorio, puedes elegir si lo quieres hacer público o privado.{% ifversion ghec or ghes %} Si estás creando el repositorio en una organización{% ifversion ghec %} que le pertenezca a una cuenta empresarial{% endif %}, también puedes elegir hacerlo interno.{% endif %}{% endif %}{% ifversion fpt %} Los repositorios en las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y le pertenecen a una cuenta empresarial también pueden crearse con visibilidad interna. Para obtener más información, consulta [la documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

Cuando crees un repositorio que le pertenezca a tu cuenta personal, este siempre será privado. Cuando creas un repositorio que le pertenece a una organización, puedes elegir hacerlo privado o interno.

{% endif %}

{%- ifversion fpt or ghec %}
- Cualquiera en la internet puede acceder a los repositorios públicos.
- Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados.
{%- elsif ghes %}
- Si {% data variables.product.product_location %} no está en modo privado o detrás de un cortafuegos, cualquiera en la internet podrá acceder a los repositorios públicos. De lo contrario, los repositorios públicos estarán disponibles para cualquiera que utilice {% data variables.product.product_location %}, incluyendo a los colaboradores externos.
- Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados.
{%- elsif ghae %}
- Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
- Todos los miembros de la empresa pueden acceder a los repositorios internos. Para obtener más información, consulta la sección "[Acerca de los repositorios internos](#about-internal-repositories)".
{%- endif %}

Los propietarios de la organización siempre tiene acceso a todos los repositorios creados en la misma. Para obtener más información, consulta la sección "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Las personas con permisos de administrador para un repositorio pueden cambiar la visibilidad de los repositorios existentes. Para obtener más información, consulta la sección "[Configurar la visibilidad de los repositorios](/github/administering-a-repository/setting-repository-visibility)".

{% ifversion ghes or ghec or ghae %}
## Acerca de los repositorios internos

{% data reusables.repositories.about-internal-repos %}Para obtener más información sobre innersource, consulta la documentación técnica de {% data variables.product.prodname_dotcom %} "Introducción a innersource".

Todos los miembros de las empresas tienen permiso de lectura para los repositorios internos, pero las personas {% ifversion fpt or ghec %}externas a la empresa{% else %}que no sean miembros de ninguna organización{% endif %}, incluyendo los colaboradores externos en los repositorios organizacionales, no pueden verlos. Para obtener más información, consulta las secciones "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" y "[Acerca de los roles de repositorio en una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% ifversion ghes %}
{% note %}

**Nota:** Un usuario debe ser parte de una organización para ser un miembro de la empresa y tener acceso a los repositorios internos. Si un usuario de {% data variables.product.product_location %} no es un miembro de alguna organización, este no tendrá acceso a los repositorios internos.

{% endnote %}
{% endif %}

{% data reusables.repositories.internal-repo-default %}

Cualquier miembro de la empresa puede bifurcar cualquier repositorio interno que pertenezca a una organización de esta. El repositorio bifurcado le pertenecerá a la cuenta personal del miembro y la visibilidad de la bifurcación será privada. Si se elimina a un usuario de todas las organizaciones que pertenezcan a la empresa, las bifurcaciones de dicho usuario para los repositorios internos se eliminarán automáticamente.
{% endif %}

## Límites para ver contenido y diferencias en un repositorio

Determinados tipos de recursos pueden ser bastante grandes y requerir mucho procesamiento en {% data variables.product.product_name %}. Por este motivo, se establecen límites para asegurar que las solicitudes se realicen en una cantidad de tiempo razonable.

La mayoría de los límites que aparecen a continuación afectan tanto {% data variables.product.product_name %} como la API.

### Límites de texto

Los archivos de texto de más de **512 KB** siempre se mostrarán como texto simple. El código no es de sintaxis resaltada, y los archivos de prosa no se convierten a HTML (como Markdown, AsciiDoc, *etc.*).

Los archivos de texto de más de **5 MB** están disponibles solo a través de sus URL originales, que se ofrecen a través de `{% data variables.product.raw_github_com %}`; por ejemplo, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Haz clic en el botón **Raw** (Original) para obtener la URL original de un archivo.

### Límites de diferencias

Como las diferencias se pueden volver muy grandes, imponemos los siguientes límites en las diferencias para las confirmaciones, las solicitudes de extracción y las vistas comparadas:

- En una solicitud de cambios, ningún diff total podrá exceder las *20,000 líneas que puedes cargar* o *1 MB* de datos de diff sin procesar.
- El diff de un archivo único no puede superar las *20.000 líneas que puedes cargar* o *500 KB* de datos de la diferencia original. *Cuatrocientas líneas* y *20 KB* se cargan de forma automática para un archivo único.
- La cantidad máxima de archivos en diff único se limita a *300*.
- La cantidad máxima de archivos de representación (como PDF y archivos GeoJSON) en una diferencia única está limitada a *25*.

Se pueden mostrar algunas partes de una diferencia limitada, pero no se muestra nada que supere el límite.

### Límites de listas de confirmaciones

Las páginas de vista comparada y de solicitudes de extracción muestran una lista de confirmaciones entre las revisiones de `base` y de `encabezado`. Estas listas están limitadas a **250** confirmaciones. Si superan ese límite, una nota indica que existen más confirmaciones (pero no se muestran).

## Leer más

- "[Crear un repositorio nuevo](/articles/creating-a-new-repository)"
- "[Acerca de las bifurcaciones](/github/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Colaborar con propuestas y solicitudes de extracción](/categories/collaborating-with-issues-and-pull-requests)"
- "[Administrar tu trabajo en {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/)"
- "[Administrar un repositorio](/categories/administering-a-repository)"
- "[Visualizar datos del repositorio con gráficos](/categories/visualizing-repository-data-with-graphs/)"
- "[Acerca de los wikis](/communities/documenting-your-project-with-wikis/about-wikis)"
- "[Glosario de {% data variables.product.prodname_dotcom %}](/articles/github-glossary)"
