---
title: Acerca de los propietarios del código
intro: Puedes usar un archivo CODEOWNERS para definir individuos o equipos que sean responsables del código en un repositorio.
redirect_from:
  - /articles/about-codeowners/
  - /articles/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Las personas con permisos administrativos o de propietario pueden configurar un archivo CODEOWNERS en un repositorio.

Las personas que elijas como propietarios del código deben tener permisos de escritura para el repositorio. Cuando el propietario del código es un equipo, ese equipo debe tener permisos de escritura, incluso si todos los miembros individuales del equipo ya tienen permisos de escritura, a través de la membresía de la organización o a través de la membresía de otro equipo.

### Acerca de los propietarios del código

Cuando alguien abre una solicitud de extracción que modifica el código que pertenece a alguien, automáticamente se les solicita una revisión a los propietarios del mismo. Lo que no se solicita automáticamente a estos propietarios es la revisión de los borradores de solicitudes de extracción. Para obtener más información acerca de las solicitudes de extracción en borrador "[Acerca de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)". Se notificará automáticamente a los dueños del código cuando marques un borrador de solicitud de extracción como listo para revisión. Si conviertes una solicitud de extracción en borrador, las personas que ya estén suscritas a las notificaciones no se darán de baja automáticamente. Para obtener más información, consulta la sección "[Cambiar el estado de una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)".

Cuando alguien con permisos administrativos o de propietario ha activado las revisiones requeridas, opcionalmente, también pueden solicitar aprobación de un propietario del código antes de que el autor pueda fusionar una solicitud de extracción en el repositorio. Para obtener más información, consulta la sección "[Habilitar revisiones requeridas para solicitudes de extracción](/github/administering-a-repository/enabling-required-reviews-for-pull-requests)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Si un equipo habilitó las tareas de revisión de código, las aprobaciones individuales no satisfarán el requisito de aprobación del propietario del código en una rama protegida. Para obtener más información, consulta la sección "[Administrar una tarea de revisión de código para tu equipo](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
Si un archivo tiene un propietario del código, puedes ver quién es éste antes de que abras una solicitud de extracción. In the repository, you can browse to the file and hover over
{% octicon "shield-lock" aria-label="The edit icon" %}.

![Dueño del código de un archivo en un repositorio](/assets/images/help/repository/code-owner-for-a-file.png)
{% endif %}

### Ubicación del archivo CODEOWNERS

Para usar un archivo CODEOWNERS, crea un archivo nuevo llamado `CODEOWNERS` en la raíz, `docs/`, o en el directorio `.github/` del repositorio, en la rama en la que quieras agregar los propietarios del código.

Cada archivo CODEOWNERS asigna los propietarios del código para una única rama en el repositorio. Por lo tanto, puedes asignar propietarios diferentes para el código en ramas diferentes, tal como `@octo-org/codeowners-team` para una base de código en la rama predeterminada y `@octocat` para un sitio de {% data variables.product.prodname_pages %} en la rama de `gh-pages`.

Para que los propietarios del código reciban las solicitudes de revisión, el archivo CODEOWNERS debe estar en la rama base de la solicitud de extracción. Por ejemplo, si asignas `@octocat` como el propietario del código para los archivos *.js* en la rama `gh-pages` de tu repositorio, `@octocat` recibirá las solicitudes de revisión cuando una solicitud de extracción con cambios en los archivos *.js* se abra entre la rama de encabezado y `gh-pages`.

### Sintáxis de CODEOWNERS

Un archivo CODEOWNERS usa un patrón que sigue las mismas reglas usadas en los archivos [gitignore](https://git-scm.com/docs/gitignore#_pattern_format). El patrón es seguido por uno o más nombres de usuarios o nombres de equipos de {% data variables.product.prodname_dotcom %} usando el formato estándar `@username` o `@org/team-name`. También puedes hacer referencia a un usuario mediante una dirección de correo electrónico que haya sido agregada a su cuenta de {% data variables.product.product_name %}, por ejemplo `user@example.com`.

Si cualquier línea de tu archivo de CODEOWNERS contiene una sintaxi inválida, el archivo no se detectará y no se utilizará para solicitar revisiones. Las sintaxis inválidas contemplan a los comentarios dentro de las líneas y a los nombres de usuario o equipo que no existen en {% data variables.product.product_name %}.
#### Ejemplo de un archivo CODEOWNERS
```
# Este es un comentario.
# Cada línea es el patrón de un archivo seguido por uno o más propietarios.

# Estos propietarios serán los propietarios predeterminados para todo en # el repositorio. A menos que una coincidencia posterior tenga prioridad, se le solicitará # revisión a # @global-owner1 y @global-owner2 cuando alguien abra una solicitud de extracción.
*       @global-owner1 @global-owner2

# El orden es importante; el último patrón en coincidir tiene la mayor
# prioridad. Cuando alguien abre una solicitud de extracción que solo
# modifica archivos JS, solo se le solicitará una revisión a @js-owner y no al/los # propietario(s) general(es).
*.js    @js-owner

# Si prefieres, también puedes usar direcciones de correo electrónico. Serán
# usadas para buscar usuarios como hacemos para los 
# correos electrónicos del autor de la confirmación.
*.go docs@example.com

# En este ejemplo, @doctocat posee cualquier archivo en el 
# directorio build/logs en la raíz del repositorio y cualquiera de sus
# subdirectorios.
/build/logs/ @doctocat

# El patrón `docs/*` coincidirá con archivos como
# `docs/getting-started.md` pero no con otros archivos anidados como
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# En este ejemplo, @octocat posee cualquier archivo en el directorio de las apps
# en cualquier lugar en tu repositorio.
apps/ @octocat

# En este ejemplo, @doctocat posee cualquier archivo en el 
# directorio `/docs` en la raíz de tu repositorio.
/docs/ @doctocat
```

### Leer más

- "[Crear archivos nuevos](/articles/creating-new-files)"
- "[Invitar colaboradores a un repositorio personal](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Administrar el acceso de un individuo al repositorio de una organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Administrar el acceso del equipo al repositorio de una organización](/articles/managing-team-access-to-an-organization-repository)"
- "[Ver la revisión de una solicitud de extracción](/articles/viewing-a-pull-request-review)"
