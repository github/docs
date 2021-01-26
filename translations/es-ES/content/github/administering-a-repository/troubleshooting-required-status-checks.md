---
title: Solución de problemas para verificaciones de estado requeridas
intro: 'You can check for common errors and resolve issues with required status checks.'
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

If you have a check and a status with the same name, and you select that name as a required status check, both the check and the status are required. Para obtener más información, consulta las "[Verificaciones](/rest/reference/checks)".

After you enable required status checks, your branch may need to be up-to-date with the base branch before merging. Esto garantiza que tu rama ha sido probada con el último código desde la rama base. Si tu rama no está actualizada, necesitarás fusionar la rama base en tu rama. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

{% note %}

**Nota:** También puedes actualizar tu rama con la rama base utilizando Git rebase. Para obtener más información, consulta [Accerca del rebase de Git](/github/using-git/about-git-rebase)."

{% endnote %}

No podrás subir cambios locales a una rama protegida hasta que se hayan aprobado todas las verificaciones de estado requeridas. En su lugar, recibirás un mensaje de error similar al siguiente.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Note:** Pull requests that are up-to-date and pass required status checks can be merged locally and pushed to the protected branch. Esto se puede hacer sin las verificaciones de estado ejecutándose en la propia confirmación de fusión.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Algunas veces, los resultados de las verificaciones de estado para la confirmación de la prueba de fusión y de la confirmación principal entrarán en conflicto. If the test merge commit has a status, the test merge commit must pass. De otra manera, el estado de la confirmación principal deberá pasar antes de que puedas fusionar la rama. For more information about test merge commits, see "[Pulls](/rest/reference/pulls#get-a-pull-request)."

![Ramas con conflictos en las confirmaciones de fusión](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}
