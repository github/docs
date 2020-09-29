---
title: Configurar ramas protegidas y verificaciones de estado requeridas
intro: 'Puedes habilitar ramas protegidas para restringir la manipulación de ramas, así como implementar verificaciones de estado requeridas antes de que una rama se fusione con una solicitud de extracción o antes de que las confirmaciones en una rama local se puedan subir a la rama remota protegida.'
redirect_from:
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

Cualquier usuario con permisos de administración puede habilitar restricciones de ramas.

### Habilitar una rama protegida para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Da clic en **Create** (Crear).

### Tipos de verificaciones de estado requeridas

| Tipo de verificación de estado requerida | Parámetro                                                                                                                                           | Requisitos de fusión                                                          | Consideraciones                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estricta**                             | La casilla **Require branches to be up-to-date before merging** (Las ramas deben estar actualizadas antes de la fusión) está marcada.               | La rama **debe** estar actualizada con la rama de base antes de la fusión.    | Este es el comportamiento predeterminado para las verificaciones de estado requeridas. Se pueden requerir más construcciones, ya que deberás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción con la rama de base protegida.                  |
| **Flexible**                             | La casilla **Require branches to be up-to-date before merging** (Las ramas deben estar actualizadas antes de la fusión) **no** está marcada.        | La rama **no debe** estar actualizada con la rama de base antes de la fusión. | Tendrás menos construcciones requeridas, ya que no necesitarás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción. Las verificaciones de estado pueden fallar después de que fusiones tu rama si hay cambios incompatibles con la rama de base. |
| **Inhabilitada**                         | La casilla **Require status checks to pass before merging** (Se deben superar las verificaciones de estado antes de la fusión) **no** está marcada. | La rama no tiene restricciones de fusión.                                     | Si las verificaciones de estado requeridas no están habilitadas, los colaboradores pueden fusionar la rama en cualquier momento, independientemente de si está actualizada con la rama de base. Esto aumenta la posibilidad de cambios incompatibles.                                                   |

### Habilitar verificaciones de estado requeridas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Selecciona **Requerir verificaciones de estado requeridas antes de la fusión**. ![Opción Verificaciones de estado requeridas](/assets/images/help/repository/required-status-checks.png)
6. De la lista de verificaciones de estado disponibles, selecciona las que quieras que se requieran. ![Lista de verificaciones de estado disponibles](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
8. También puedes quitar la marca de selección de **Requerir que las ramas estén actualizadas antes de la fusión**. Al seleccionar esta opción, te aseguras de que la rama se pruebe con el código más reciente en la rama base. ![Casilla de verificación de estado estricta o poco estricta](/assets/images/help/repository/protecting-branch-loose-status-new.png)
9. Opcionalmente, selecciona {% if currentVersion ver_gt "enterprise-server@2.18" %}**Restringir quién puede subir a las ramas correspondientes**{% else %}**Restringir quién puede subir a esta rama**{% endif %}. ![Branch restriction checkbox]{% if currentVersion ver_gt "enterprise-server@2.18" %}(/assets/images/help/repository/restrict-branch.png){% else %}(/assets/images/help/repository/restrict-branch-push.png){% endif %}
10. Busca y selecciona las personas {% if currentVersion ver_gt "enterprise-server@2.18" %},{% else %} o{% endif %} equipos{% if currentVersion ver_gt "enterprise-server@2.18" %}, o aplicaciones{% endif %} que tendrán permiso de subir a la rama protegida. ![Búsqueda de restricciones de rama](/assets/images/help/repository/restrict-branch-search.png)
11. Da clic en **Create** (Crear).

{% data reusables.repositories.required-status-merge-tip %}
