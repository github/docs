---
title: Managing a branch protection rule
intro: 'You can create a branch protection rule to enforce certain workflows for one or more branches, such as requiring an approving review or passing status checks for all pull requests merged into the protected branch.'
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
permissions: People with admin permissions to a repository can manage branch protection rules.
---

### About branch protection rules

{% data reusables.repositories.branch-rules-example %}

You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. Ya que {% data variables.product.company_short %} utiliza el indicador `File::FNM_PATHNAME` para la sintaxis `File.fnmatch` el comodín no empata con los separadores de directorio (`/`). Por ejemplo, `qa/*` empatará con todas las ramas que comiencen con `qa/` y contengan una sola diagonal. You can include multiple slashes with `qa/**/*`, and you can extend the `qa` string with `qa**/**/*` to make the rule more inclusive. Para más información sobre las opciones de sintaxis para las reglas de la rama, consulta la [documentación fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Si un repositorio tiene varias reglas de rama protegida que afectan las mismas ramas, las reglas que incluyen el nombre de una rama específica tienen la mayor prioridad. Si hay más de una regla de rama protegida que hace referencia al mismo nombre de rama específico, entonces la regla de rama creada primera tendrá la prioridad más alta.

Las reglas de rama protegida que mencionen un caracter especial, como `*`, `?` o `]`, se aplican en el orden que fueron creadas, así que las reglas más antiguas con estos caracteres tienen la prioridad más alta.

Para crear una excepción a una regla de rama existente, puedes crear una nueva regla de protección de rama que sea una prioridad superior, como una regla de rama para un nombre de rama específico.

For more information about each of each of the available branch protection settings, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

### Creating a branch protection rule

When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. Optionally, enable required pull request reviews.
   - Under "Protect matching branches", select **Require pull request reviews before merging**. ![Casilla de verificación Restricción de revisión de solicitud de extracción](/assets/images/help/repository/PR-reviews-required.png)
   - Click the **Required approving reviews** drop-down menu, then select the number of approving reviews you'd like to require on the branch. ![Menú desplegable para seleccionar el número de aprobaciones de revisión requeridas](/assets/images/help/repository/number-of-required-review-approvals.png)
   - Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select **Dismiss stale pull request approvals when new commits are pushed**. ![Casilla de verificación Descartar aprobaciones de solicitudes de extracción en espera cuando se suben nuevas confirmaciones](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select **Require review from Code Owners**. Para obtener más información, consulta "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)." ![Requerir revisión de los propietarios del código](/assets/images/help/repository/PR-review-required-code-owner.png)
   - Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews**. Then, search for and select the people or teams who are allowed to dismiss pull request reviews. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)". ![Restringir quién puede descartar la casilla de verificación de revisiones de solicitudes de extracción](/assets/images/help/repository/PR-review-required-dismissals.png)
1. Optionally, enable required status checks.
   - Selecciona **Requerir verificaciones de estado requeridas antes de la fusión**. ![Opción Verificaciones de estado requeridas](/assets/images/help/repository/required-status-checks.png)
   - Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select **Require branches to be up to date before merging**. ![Casilla de verificación de estado estricta o poco estricta](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Selecciona las verificaciones que quieres requerir de la lista de verificaciones de estado disponibles. ![Lista de verificaciones de estado disponibles](/assets/images/help/repository/required-statuses-list.png)
1. Optionally, select **Require signed commits**. ![Opción Requerir confirmaciones firmadas](/assets/images/help/repository/require-signed-commits.png)
1. Optionally, select **Require linear history**. ![Opción para requerir historial linear](/assets/images/help/repository/required-linear-history.png)
1. También puedes seleccionar **Incluir administradores**. ![Casilla de verificación Incluir administradores](/assets/images/help/repository/include-admins-protected-branches.png)
1. Optionally,{% if currentVersion == "free-pro-team@latest" %} if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %},{% endif %} enable branch restrictions.
   - Select **Restrict who can push to matching branches**. ![Casilla de verificación para restricción de rama](/assets/images/help/repository/restrict-branch.png)
   - Busca y selecciona las personas, equipos, o apps que tendrán permiso para subir información a la rama protegida. ![Búsqueda de restricciones de rama](/assets/images/help/repository/restrict-branch-search.png)
1. Optionally, under "Rules applied to everyone including administrators", select **Allow force pushes**. ![Permitir la opción de subida de información forzada](/assets/images/help/repository/allow-force-pushes.png)
1. Optionally, select **Allow deletions**. ![Opción para habilitar las eliminaciones de ramas](/assets/images/help/repository/allow-branch-deletions.png)
1. Da clic en **Crear**.

### Editing a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to edit, click **Edit**. ![Botón editar](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Make your desired changes to the branch protection rule.
1. Haz clic en **Guardar cambios**. ![Botón Editar mensaje](/assets/images/help/repository/save-branch-protection-rule.png)

### Deleting a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to delete, click **Delete**. ![Botón de borrar](/assets/images/help/repository/delete-branch-protection-rule.png)
