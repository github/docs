---
title: Acerca de las ramas
intro: Usa una rama para identificar tareas de desarrollo sin afectar otras ramas en el repositorio. Cada repositorio tiene una rama por defecto y puede tener muchas otras ramas. Puedes fusionar una rama en otra rama usando una solicitud de extracción.
redirect_from:
  - /articles/working-with-protected-branches/
  - /articles/about-branches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


### Introducción a las ramas

Las ramas te permiten desarrollar características, corregir errores, o experimentar con seguridad las ideas nuevas en un área contenida de tu repositorio.

Siempre puedes crear una rama a partir de otra rama existente. Habitualmente, puedes crear una rama nueva desde la rama predeterminada de tu repositorio. Podrás entonces trabajar en esta rama nueva aislado de los cambios que otras personas hacen al repositorio. A la rama que creas para construir una característica se le conoce como rama de característica o rama de tema. Para obtener más información, consulta "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository/)".

También puedes usar una rama para publicar un sitio {% data variables.product.prodname_pages %}. Para obtener más información, consulta "[¿Qué son las Páginas de {% data variables.product.prodname_dotcom %}?](/articles/what-is-github-pages)"

Debes tener acceso de escritura para un repositorio para crear una rama, abrir una solicitud de extracción o eliminar y restablecer ramas en una solicitud de extracción.  Para obtener más información, consulta "[Permisos de acceso en {% data variables.product.product_name %}](/articles/access-permissions-on-github)".

### Acerca de la rama predeterminada

{% data reusables.branches.new-repo-default-branch %} La rama predeterminada es la rama que {% data variables.product.prodname_dotcom %} muestra cuando alguien visita tu repositorio. La rama predeterminada es también la rama inicial que Git verifica localmente cuando alguien clona el repositorio. {% data reusables.branches.default-branch-automatically-base-branch %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

Predeterminadamente, el nombre de dicha rama es `master`, pero puedes configurar el nombre a cualquiera que haga más sentido para tu flujo de trabajo. Para obtener más información acerca del nombre de la rama predeterminada, consulta la sección "[Administrar la rama predeterminada para tus repositorios](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)".

{% endif %}

{% data reusables.branches.set-default-branch %}

### Trabajando con las ramas

Una vez que estés satisfecho con tu trabajo, puedes abrir una solicitud de extracción para fusionar los cambios en la rama actual (la rama de *encabezado*) en otra rama (la rama *base*). Para obtener más información, consulta "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)."

Después de que se ha fusionado o cerrado la solicitud de extracción, puedes borrar la rama de encabezado, dado que ésta ya no se requerirá. Debes tener acceso de escritura en el repositorio para borrar las ramas. No puedes borrar ramas que estén directamente asociadas con solicitudes de extracción abiertas. Para obtener más información, consulta la sección "[Borrar y restaurar ramas en una solicitud de extracción](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
Los siguientes diagramas son un ejemplo de esto.

 Aquí alguien creó una rama llamada `feature1` desde la rama `master`, y desde entonces, has creado una rama llamada `feature2` desde `feature1`. Hay solicitudes de extracción abiertas para ambas ramas. Las flechas indican la rama base actual para cada solicitud de extracción. En este punto, `feature1` es la rama base para `feature2`. Si la solicitud de extracción para `feature2` se fusiona ahora, la rama `feature2` se fusionará en `feature1`.

 ![merge-pull-request-button (botón para fusionar solicitud de extracción)](/assets/images/help/branches/pr-retargeting-diagram1.png)

En el siguiente diagrama, alguien fusionó la solicitud de extracción para `feature1` en la rama `master`, u borraron la rama `feature1`. Como resultado, {% data variables.product.prodname_dotcom %} ha redireccionado automáticamente la solicitud de extracción para `feature2` para que su rama base sea ahora `master`.

 ![merge-pull-request-button (botón para fusionar solicitud de extracción)](/assets/images/help/branches/pr-retargeting-diagram2.png)

Ahora cuando fusiones la solicitud de extracción `feature2`, ésta se fusionará con la rama `master`.
{% endif %}

### Trabajar con ramas protegidas

Los administradores de un repositorio pueden activar las protecciones en una rama. Si estás trabajando en una rama que está protegida, no podrás eliminar ni hacer un empuje forzado a la rama. Los administradores de un repositorio además pueden activar varios parámetros de rama protegida para implementar varios flujos de trabajo antes de que se pueda fusionar una rama.

{% note %}

**Nota:** Si eres administrador de un repositorio, puedes fusionar las solicitudes de extracción en ramas con las protecciones de rama activadas incluso si la solicitud de extracción no cumple con los requisitos, a menos que las protecciones de rama hayan sido configuradas con "Incluir administradores".

{% endnote %}

Para ver si tu solicitud de extracción se puede fusionar, mira en la casilla de fusión en la parte inferior de la pestaña **Conversación** de la solicitud de extracción. Para obtener más información, consulta"[Acerca de las ramas protegidas](/articles/about-protected-branches)".

Cuando una rama está protegida:

- No podrás eliminar ni hacer un empuje forzado a la rama.
- Si las verificaciones de estado requeridas están activadas en la rama, no podrás fusionar cambios en la rama hasta que todas las pruebas de integración continua (CI) requeridas estén aprobadas. Para obtener más información, consulta "[Acerca de las verificaciones de estado ](/articles/about-status-checks)".
- Si las revisiones de solicitud de extracción requeridas están activadas en la rama, no podrás fusionar cambios en la rama hasta que se hayan cumplido todos los requisitos en la política de revisión de solicitud de extracción. Para obtener más información, consulta "[Fusionar una solicitud de extracción](/articles/merging-a-pull-request)".
- Si la revisión requerida de un propietario del código está activada en una rama y una solicitud de extracción modifica un código que tiene un propietario, un propietario del código debe aprobar la solicitud de extracción antes de que se pueda fusionar. Para obtener más información, consulta "[Acerca de los propietarios del código](/articles/about-code-owners)."
- Si la firma de confirmación requerida está activada en una rama, no podrás subir ninguna confirmación de cambios a la rama que no esté firmada ni verificada. Para obtener más información, consulta las secciones "[Acerca de la verificación de firma en las confirmaciones](/articles/about-commit-signature-verification)" y "[Acerca de las firmas requeridas para las confirmaciones](/articles/about-required-commit-signing)".{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
- Si utilizas el editor de conflictos de {% data variables.product.prodname_dotcom %} para arreglar los conflictos en una solicitud de extracción que creaste desde una rama protegida, {% data variables.product.prodname_dotcom %} te ayuda a crear una rama alterna para esta solicitud, para que la resolución que quieras dar a los conflictos pueda fusionarse. Para obtener más información, consulta la sección "[Resolver un conflicto de fusión en {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)".{% endif %}

### Leer más

- "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)"
- "[Rama](/articles/github-glossary/#branch)" en el glosario {% data variables.product.prodname_dotcom %}
- "[Ramas en resumen](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" en la documentación de Git
