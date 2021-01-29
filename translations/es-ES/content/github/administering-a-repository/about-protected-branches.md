---
title: Acerca de las ramas protegidas
intro: 'You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About branch protection rules

You can enforce certain workflows or requirements before a collaborator can push changes to a branch in your repository, including merging a pull request into the branch, by creating a branch protection rule.

By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted. You can optionally disable these restrictions and enable additional branch protection settings.

By default, the restrictions of a branch protection rule don't apply to people with admin permissions to the repository. You can optionally choose to include administrators, too.

{% data reusables.repositories.branch-rules-example %} For more information about branch name patterns, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

{% data reusables.pull_requests.you-can-auto-merge %}

### About branch protection settings

For each branch protection rule, you can choose to enable or disable the following settings.
- [Require pull request reviews before merging](#require-pull-request-reviews-before-merging)
- [Require status checks before merging](#require-status-checks-before-merging)
- [Requerir confirmaciones firmadas](#require-signed-commits)
- [Require linear history](#require-linear-history)
- [Include administrators](#include-administrators)
- [Restrict who can push to matching branches](#restrict-who-can-push-to-matching-branches)
- [Allow force pushes](#allow-force-pushes)
- [Allow deletions](#allow-deletions)

#### Require pull request reviews before merging

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers with write permissions.

If a person with admin permissions chooses the **Request changes** option in a review, then that person must approve the pull request before the pull request can be merged. If a reviewer who requests changes on a pull request isn't available, anyone with write permissions for the repository can dismiss the blocking review.

{% data reusables.repositories.review-policy-overlapping-commits %}

If a collaborator attempts to merge a pull request with pending or rejected reviews into the protected branch, the collaborator will receive an error message.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Optionally, you can choose to dismiss stale pull request approvals when commits are pushed. If anyone pushes a commit that modifies code to an approved pull request, the approval will be dismissed, and the pull request cannot be merged. This doesn't apply if the collaborator pushes commits that don't modify code, like merging the base branch into the pull request's branch. Para obtener información acerca de las ramas base, consulta "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)."

Optionally, you can restrict the ability to dismiss pull request reviews to specific people or teams. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/articles/dismissing-a-pull-request-review)".

Optionally, you can choose to require reviews from code owners. If you do, any pull request that affects code with a code owner must be approved by that code owner before the pull request can be merged into the protected branch.

#### Require status checks before merging

Las verificaciones de estado requeridas garantizan que todas las pruebas de integración continua (CI) requeridas sean aprobadas antes de que los colaboradores puedan realizar cambios en una rama protegida. Para obtener más información, consulta "[Configurar ramas protegidas](/articles/configuring-protected-branches/)" y "[Activar verificaciones de estado requeridas](/articles/enabling-required-status-checks)". Para obtener más información, consulta "[Acerca de las verificaciones de estado ](/github/collaborating-with-issues-and-pull-requests/about-status-checks)".

Antes de que puedas habilitar las verificaciones de estado requeridas, debes configurar el repositorio para utilizar la API de estado. For more information, see "[Repositories](/rest/reference/repos#statuses)" in the REST documentation.

After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch. Una vez que hayan pasado todas las verificaciones de estado requeridas, cualquier confirmación deberá ya sea subirse en otra rama y después fusionarse, o subirse directo a la rama protegida.

{% note %}

**Nota:** Cualquier persona o integración con permisos de escritura en un repositorio puede establecer el estado de cualquier comprobación de estado en el repositorio. {% data variables.product.company_short %} no verifica que el autor de una comprobación está autorizado para crear un determinado nombre o modificar un estado existente. Antes de fusionar una solicitud de extracción, deberás verificar que se esté esperando al autor de cada estado, los cuales se encuentran listados en la caja de fusión.

{% endnote %}

Puedes configurar las verificaciones de estado requeridas para que sean "laxas" o "estrictas". The type of required status check you choose determines whether your branch is required to be up-to-date with the base branch before merging.

| Tipo de verificación de estado requerida | Parámetro                                                                                                                                           | Requisitos de fusión                                                          | Consideraciones                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estricta**                             | La casilla **Require branches to be up-to-date before merging** (Las ramas deben estar actualizadas antes de la fusión) está marcada.               | La rama **debe** estar actualizada con la rama de base antes de la fusión.    | Este es el comportamiento predeterminado para las verificaciones de estado requeridas. Se pueden requerir más construcciones, ya que deberás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción con la rama de base protegida.                  |
| **Flexible**                             | La casilla **Require branches to be up-to-date before merging** (Las ramas deben estar actualizadas antes de la fusión) **no** está marcada.        | La rama **no debe** estar actualizada con la rama de base antes de la fusión. | Tendrás menos construcciones requeridas, ya que no necesitarás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción. Las verificaciones de estado pueden fallar después de que fusiones tu rama si hay cambios incompatibles con la rama de base. |
| **Inhabilitada**                         | La casilla **Require status checks to pass before merging** (Se deben superar las verificaciones de estado antes de la fusión) **no** está marcada. | La rama no tiene restricciones de fusión.                                     | Si las verificaciones de estado requeridas no están habilitadas, los colaboradores pueden fusionar la rama en cualquier momento, independientemente de si está actualizada con la rama de base. Esto aumenta la posibilidad de cambios incompatibles.                                                   |

For troubleshooting information, see "[Troubleshooting required status checks](/github/administering-a-repository/troubleshooting-required-status-checks)."

#### Requerir confirmaciones firmadas

Cuando habilitas el requerir el firmado de confirmaciones en una rama, los colaboradores {% if currentVersion == "free-pro-team@latest" %}y bots{% endif %} solo podrán subir a la rama aquellas confirmaciones que se hayan firmado y verificado. Para obtener más información, consulta "[Acerca de la verificación de firmas en las confirmaciones](/articles/about-commit-signature-verification)."

{% note %}

**Note:** If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.

{% endnote %}

Siempre puedes subir confirmaciones locales a la rama si estas se firmaron y verificaron. {% if currentVersion == "free-pro-team@latest" %}También puedes fusionar las confirmaciones firmadas y verificadas en la rama si utilizas una solicitud de cambios en {% data variables.product.product_name %}. Sin embargo, no puedes combinar y fusionar una solicitud de cambios en la rama en {% data variables.product.product_name %} a menos de que seas el autor de la misma.{% else %} Sin embargo, no puedes fusionar una solicitud de cambios en la rama en {% data variables.product.product_name %}.{% endif %} Puedes {% if currentVersion == "free-pro-team@latest" %}combinar y {% endif %} fusionar solicitudes de cambios localmente. Para obtener más información, consulta la sección "[Revisar las solicitudes de extracción localmente](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)".

{% if currentVersion == "free-pro-team@latest" %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

#### Require linear history

Enforcing a linear commit history prevents collaborators from pushing merge commits to the branch. Esto significa que cualquier solicitud de extracción fusionada con la rama protegida deberá utilizar una fusión combinada o una fusión de rebase. A strictly linear commit history can help teams reverse changes more easily. Para obtener más información acerca de los métodos de fusión, consulta "[Acerca de la fusión de solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)."

Antes de poder requerir un historial de confirmaciones linear, tu repositorio deberá permitir fusiones combinadas o fusiones de rebase. Para obtener más información, consulta "[Configurar las fusiones de solicitud de extracción](/github/administering-a-repository/configuring-pull-request-merges)."

#### Include administrators

By default, protected branch rules do not apply to people with admin permissions to a repository. You can enable this setting to include administrators in your protected branch rules.

#### Restrict who can push to matching branches

{% if currentVersion == "free-pro-team@latest" %}
You can enable branch restrictions if your repository is owned by an organization using
{% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

Cuando habilitas las restricciones de rama, solo los usuarios, equipos o apps a los que se les haya dado permisos pueden subir información a la rama protegida. Puedes ver y editar los usuarios, equipos o apps con acceso de escritura a una rama protegida en la configuración de la misma.

Solo puedes dar acceso de escritura a una rama protegida para usuarios, equipos o {% data variables.product.prodname_github_apps %} instaladas con acceso de tipo write a un repositorio. Las personas y apps con permisos administrativos en un repositorio siempre pueden subir información a una rama protegida.

#### Allow force pushes

By default, {% data variables.product.product_name %} blocks force pushes on all protected branches. Cuando habilitas estas subidas forzadas en una rama protegida, cualquiera que tenga privilegios por lo menos de escritura en ese repositorio puede forzar la subida de información a la rama, incluyendo aquellos con permisos de administrador.

Habilitar las subidas forzadas no invalidará ninguna otra regla de protección a la rama. Por ejemplo, si una rama requiere un historial de confirmaciones linear, no puedes forzar la subida de fusión de confirmaciones en esa rama.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}No puedes habilitar las subidas forzadas para una rama protegida si un administrador de sitio las bloqueó en todas las ramas de tu repositorio. Para obtener más información, consulta "[Bloquear las subidas de información forzadas en los repositorios que sean propiedad de una organización o cuenta de usuario](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

Si un administrador de sitio ha bloqueado las subidas de información forzadas en la rama predeterminada únicamente, entonces aún puedes habilitarlas en cualquier otra rama protegida.{% endif %}

#### Allow deletions

Por defecto, no puedes eliminar una rama protegida. When you enable deletion of a protected branch, anyone with at least write permissions to the repository can delete the branch.
