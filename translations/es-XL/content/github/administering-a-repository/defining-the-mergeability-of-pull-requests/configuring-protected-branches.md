---
title: Configurar ramas protegidas
intro: 'Si eres un propietario de repositorio o si tienes permisos de administrador en un repositorio, puedes personalizar las protecciones de la rama en el repositorio y exige determinados flujos de trabajo, como requerir más de una revisión de solicitud de extracción o solicitar la aprobación de determinadas comprobaciones de estado antes de permitir la fusión de una solicitud de extracción.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /github/administering-a-repository/configuring-protected-branches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% data reusables.repositories.branch-rules-example %}

También puedes configurar una protección de rama automática para todas las ramas en tu repositorio con la sintaxis de comodín `*`. Ya que {% data variables.product.prodname_dotcom %} utiliza el indicador `File::FNM_PATHNAME` para la sintaxis `File.fnmatch` el comodín no empata con los separadores de directorio (`/`). Por ejemplo, `qa/*` empatará con todas las ramas que comiencen con `qa/` y contengan una sola diagonal. Puedes incluir múltiples barras oblicuas con `qa/**/a`, y puedes extender la cadena `qa` con `qa**/**/*` para que sea más inclusivo. Para más información sobre las opciones de sintaxis para las reglas de la rama, consulta la [documentación fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Para crear una excepción a una regla de rama existente, puedes crear una nueva regla de protección de rama que sea una prioridad superior, como una regla de rama para un nombre de rama específico. Para obtener más información acerca del orden de prioridad y otras configuraciones para las reglas de ramas protegidas, consulta "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)."

{% note %}

**Nota:** Para crear una regla de rama, la rama que especifiques no debe existir en el repositorio.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Opcionalmente, puedes configurar los parámetros de regla de rama específicos. ![Parámetros de regla de rama protegida](/assets/images/help/branches/branch-rule-settings.png)
7. Para confirmar la regla de protección de la rama, haz clic en **Create** (Crear) o **Save changes** (Guardar cambios).

### Leer más

- "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)"
- "[Acerca de las verificaciones de estado requeridas](/github/administering-a-repository/about-required-status-checks)"
- "[Activar verificaciones de estado requeridas](/github/administering-a-repository/enabling-required-status-checks)"
- "[Acerca de las restricciones de rama](/github/administering-a-repository/about-branch-restrictions)"
- "[Habilitar restricciones de rama](/github/administering-a-repository/enabling-branch-restrictions)"
- "[Acerca de la firma de confirmación requerida](/github/administering-a-repository/about-required-commit-signing)"
