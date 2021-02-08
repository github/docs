---
title: Administrar una regla de protección de rama
intro: 'Puedes crear una regla de protección de rama para requerir ciertos flujos de trabajo en una o más ramas, tal como requerir una revisión de aprobacion o verificaciones de un estado que pase para todas las solicitudes de cambios que se fusionan en la rama protegida.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: Las personas con permisos administrativos en un repositorio pueden administrar las reglas de protección de rama.
---

### Acerca de las reglas de protección de rama

{% data reusables.repositories.branch-rules-example %}

Puedes crear una regla para todas las ramas actuales y futuras de tu repositorio con la sintaxis de comodín `*`. Ya que {% data variables.product.company_short %} utiliza el indicador `File::FNM_PATHNAME` para la sintaxis `File.fnmatch` el comodín no empata con los separadores de directorio (`/`). Por ejemplo, `qa/*` empatará con todas las ramas que comiencen con `qa/` y contengan una sola diagonal. Puedes incluir varias diagonales con `qa/**/*`, y puedes extender la secuencia de `qa` con `qa**/**/*` para hacer la regla más inclusiva. Para más información sobre las opciones de sintaxis para las reglas de la rama, consulta la [documentación fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Si un repositorio tiene varias reglas de rama protegida que afectan las mismas ramas, las reglas que incluyen el nombre de una rama específica tienen la mayor prioridad. Si hay más de una regla de rama protegida que hace referencia al mismo nombre de rama específico, entonces la regla de rama creada primera tendrá la prioridad más alta.

Las reglas de rama protegida que mencionen un caracter especial, como `*`, `?` o `]`, se aplican en el orden que fueron creadas, así que las reglas más antiguas con estos caracteres tienen la prioridad más alta.

Para crear una excepción a una regla de rama existente, puedes crear una nueva regla de protección de rama que sea una prioridad superior, como una regla de rama para un nombre de rama específico.

Para obtener más información sobre cada uno de los ajustes de protección de rama disponibles, consulta la sección "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".

### Crear una regla de protección de rama

Cuando creas una regla de rama, la rama que especifiques no tendrá que en el repositorio aún.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. Opcionalmente, habilita las revisiones requeridas para las solicitudes de cambios.
   - Debajo de "Proteger las ramas coincidentes", selecciona **Requerir revisiones de solicitudes de cambios antes de fusionar**. ![Casilla de verificación Restricción de revisión de solicitud de extracción](/assets/images/help/repository/PR-reviews-required.png)
   - Da clic en el menú desplegable de **Revisiones de aprobación requeridas** y luego selecciona la cantidad de revisiones de aprobación que te gustaría requerir para la rama. ![Menú desplegable para seleccionar el número de aprobaciones de revisión requeridas](/assets/images/help/repository/number-of-required-review-approvals.png)
   - Opcionalmente, para descartar una revisión de aprobación de la solicitud de cambios cuando una confirmación que modifica el código se sube a la rama, selecciona **Descartar las aprobaciones de solicitudes de cambios estancadas cuando se suban confirmaciones nuevas**. ![Casilla de verificación Descartar aprobaciones de solicitudes de extracción en espera cuando se suben nuevas confirmaciones](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Opcionalmente, para requerir una revisión de un propietario del código cuando la solicitud de cambios afecte al código que tenga un propietario designado, selecciona **Requerir la revisión de los propietarios del código**. Para obtener más información, consulta "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)." ![Requerir revisión de los propietarios del código](/assets/images/help/repository/PR-review-required-code-owner.png)
   - Opcionalmente, si el repositorio es parte de una oranización, selecciona **Restringir quién puede descartar las revisiones de una solicitud de cambios**. Posteriormente, busca y selecciona a las personas o equipos que se les permitirá descartar las revisiones de solicitudes de cambios. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)". ![Restringir quién puede descartar la casilla de verificación de revisiones de solicitudes de extracción](/assets/images/help/repository/PR-review-required-dismissals.png)
1. Opcionalmente, habilita las verificaciones de estado requeridas.
   - Selecciona **Requerir verificaciones de estado requeridas antes de la fusión**. ![Opción Verificaciones de estado requeridas](/assets/images/help/repository/required-status-checks.png)
   - Opcionalmente, para garantizar que las solicitudes de cambios se prueban con el último código en la rama protegida, selecciona **Requerir que las ramas estén actualizadas antes de fusionarlas**. ![Casilla de verificación de estado estricta o poco estricta](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Selecciona las verificaciones que quieres requerir de la lista de verificaciones de estado disponibles. ![Lista de verificaciones de estado disponibles](/assets/images/help/repository/required-statuses-list.png)
1. Opcionalmente, selecciona **Requerir confirmaciones firmadas**. ![Opción Requerir confirmaciones firmadas](/assets/images/help/repository/require-signed-commits.png)
1. Opcionalmente, selecciona **Requerir un historial linear**. ![Opción para requerir historial linear](/assets/images/help/repository/required-linear-history.png)
1. También puedes seleccionar **Incluir administradores**. ![Casilla de verificación Incluir administradores](/assets/images/help/repository/include-admins-protected-branches.png)
1. Opcionalmente,{% if currentVersion == "free-pro-team@latest" %} si tu repositorio pertenece a una organización que utilice {% data variables.product.prodname_team %} o {% data variables.product.prodname_ghe_cloud %},{% endif %} habilita las restricciones de rama.
   - Selecciona **Restringir quién puede subir a las ramas coincidentes**. ![Casilla de verificación para restricción de rama](/assets/images/help/repository/restrict-branch.png)
   - Busca y selecciona las personas, equipos, o apps que tendrán permiso para subir información a la rama protegida. ![Búsqueda de restricciones de rama](/assets/images/help/repository/restrict-branch-search.png)
1. Opcionalmente, debajo de "Reglas que se aplican a todos, incluyendo administradores", selecciona **permitir las subidas forzadas**. ![Permitir la opción de subida de información forzada](/assets/images/help/repository/allow-force-pushes.png)
1. Opcionalmente, selecciona **Permitir los borrados**. ![Opción para habilitar las eliminaciones de ramas](/assets/images/help/repository/allow-branch-deletions.png)
1. Da clic en **Crear**.

### Editar una regla de protección de rama

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. A la derecha de la regla de protección de rama que quieras editar, da clic en **Editar**. ![Botón editar](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Haz los cambios que desees en la regla de protección de rama.
1. Haz clic en **Guardar cambios**. ![Botón Editar mensaje](/assets/images/help/repository/save-branch-protection-rule.png)

### Borrar una regla de protección de rama

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. A la derecha de la regla de protección de rama que quieras borrar, da clic en **Borrar**. ![Botón de borrar](/assets/images/help/repository/delete-branch-protection-rule.png)
