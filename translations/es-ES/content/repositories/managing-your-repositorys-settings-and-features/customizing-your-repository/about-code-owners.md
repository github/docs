---
title: Acerca de los propietarios de código
intro: Puedes usar un archivo CODEOWNERS para definir individuos o equipos que sean responsables del código en un repositorio.
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 3b6822be6551d43b3af55220ac8f39deec8be1df
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106841'
---
Las personas con permisos administrativos o de propietario pueden configurar un archivo CODEOWNERS en un repositorio.

Las personas que elijas como propietarios del código deben tener permisos de escritura para el repositorio. Cuando el propietario del código es un equipo, ese equipo debe ser visible y tener permisos de escritura, incluso si todos los miembros individuales del equipo ya tienen permisos de escritura, a través de la membresía de la organización o a través de la membresía de otro equipo.

## Acerca de los propietarios de código

Cuando alguien abre una solicitud de extracción que modifica el código que pertenece a alguien, automáticamente se les solicita una revisión a los propietarios del mismo. Lo que no se solicita automáticamente a estos propietarios es la revisión de los borradores de solicitudes de extracción. Para más información sobre el borrador de solicitudes de incorporación de cambios, vea "[Acerca de las solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)". Se notificará automáticamente a los dueños del código cuando marques un borrador de solicitud de extracción como listo para revisión. Si conviertes una solicitud de extracción en borrador, las personas que ya estén suscritas a las notificaciones no se darán de baja automáticamente. Para más información, vea "[Cambio de la fase de una solicitud de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)".

Cuando alguien con permisos administrativos o de propietario ha activado las revisiones requeridas, opcionalmente, también pueden solicitar aprobación de un propietario del código antes de que el autor pueda fusionar una solicitud de extracción en el repositorio. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

Si un archivo tiene un propietario del código, puedes ver quién es éste antes de que abras una solicitud de extracción. Puede buscar el archivo en el repositorio y pasar el puntero por {% octicon "shield-lock" aria-label="The edit icon" %}.

![Dueño del código de un archivo en un repositorio](/assets/images/help/repository/code-owner-for-a-file.png)

## Ubicación del archivo CODEOWNERS

Para usar un archivo CODEOWNERS, cree un nuevo archivo denominado `CODEOWNERS` en el directorio raíz, `docs/`, o `.github/` del repositorio, en la rama donde desea agregar los propietarios del código.

Cada archivo CODEOWNERS asigna los propietarios del código para una única rama en el repositorio. Por lo tanto, puede asignar diferentes propietarios de código para diferentes ramas, como `@octo-org/codeowners-team` para una base de código en la rama predeterminada y `@octocat` para un sitio de {% data variables.product.prodname_pages %} en la rama `gh-pages`.

Para que los propietarios del código reciban las solicitudes de revisión, el archivo CODEOWNERS debe estar en la rama base de la solicitud de extracción. Por ejemplo, si asigna `@octocat` como propietario del código para los archivos *.js* en la rama `gh-pages` del repositorio, `@octocat` recibirá solicitudes de revisión cuando se abra una solicitud de incorporación de cambios con cambios en los archivos *.js* archivos entre la rama principal y `gh-pages`.

## Tamaño de archivo de CODEOWNERS

Los archivos de CODEOWNERS deben ser de menos de 3 MB. Un archivo de CODEOWNERS que sobrepase este límite no se cargará, lo cual significa que la información de los propietarios de código no se mostrará y que no se solicitará que los propietarios de código adecuados revisen los cambios en una solicitud de cambios.

Para reducir el tamaño de tu archivo de CODEOWNERS, considera utilizar patrones de comodín para consolidar varias entradas en una.

## Sintáxis de CODEOWNERS

{% warning %}

**Advertencia:** Hay algunas reglas de sintaxis para los archivos de gitignore que *no funcionan* con los archivos de CODEOWNERS:
- Agregar un carácter de escape a un patrón que comience por `#` utilizando `\` para que se le trate como un patrón y no como un comentario
- Usar `!` para negar un patrón
- Usar `[ ]` para definir un intervalo de caracteres

{% endwarning %}

Un archivo CODEOWNERS usa un patrón que sigue casi todas las mismas reglas que se usan en los archivos [gitignore](https://git-scm.com/docs/gitignore#_pattern_format). El patrón va seguido de uno o varios nombres de usuario o de equipo de {% data variables.product.prodname_dotcom %} con el formato estándar `@username` o `@org/team-name`. Los usuarios y los equipos deben tener acceso explícito de `write` al repositorio aunque los miembros del equipo ya tengan acceso.

{% ifversion fpt or ghec%}En la mayoría de los casos, {% else %}{% endif %} también puedes hacer referencia a un usuario por la dirección de correo electrónico que se ha agregado a su cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, por ejemplo `user@example.com`. {% ifversion fpt or ghec %} No puedes usar una dirección de correo electrónico para hacer referencia a una {% data variables.enterprise.prodname_managed_user %}. Para obtener más información sobre las {% data variables.enterprise.prodname_managed_users %}, consulta "[Acerca de los {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}{% endif %}

Las rutas de CODEOWNERS distinguen entre mayúsculas y minúsculas, ya que {% data variables.product.prodname_dotcom %} utiliza un sistema de archivos que también lo hace. Ya que {% data variables.product.prodname_dotcom %} evalúa a los CODEOWNERS, incluso los sistemas que distinguen entre mayúsculas y minúsculas (por ejemplo, macOS) deben utilizar rutas y archivos que utilicen mayúsculas y minúsculas correctamente en el archivo de CODEOWNERS.

{% ifversion codeowners-errors %} Si alguna línea del archivo CODEOWNERS contiene una sintaxis inválida, dicha línea se omitirá. Cuando navegas al archivo de CODEOWNERS en tu repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, puedes ver todos los errores resaltados. También se puede acceder a una lista de los errores del archivo CODEOWNERS de cualquier repositorio a través de la API. Para obtener más información, consulte "[Repositorios](/rest/reference/repos#list-codeowners-errors)" en la documentación de la API de REST.
{% else %} Si cualquier línea del archivo CODEOWNERS contiene una sintaxis inválida, el archivo no se detectará y no se utilizará para solicitar revisiones.
{% endif %}

### Ejemplo de un archivo CODEOWNERS
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
```

## Protección de rama y de CODEOWNERS
Los propietarios de los repositorios pueden agregar reglas de protección de rama para asegurarse de que los propietarios de los archivos que se modificaron revisen el código que cambió. Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)".

## Información adicional

- "[Creación de archivos](/articles/creating-new-files)"
- "[Invitación a colaboradores a un repositorio personal](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Administración del acceso de un individuo a un repositorio de la organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Administración del acceso de equipo a un repositorio de la organización](/articles/managing-team-access-to-an-organization-repository)"
- "[Ver una revisión de solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"
