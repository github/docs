---
title: Solución de problemas para verificaciones de estado requeridas
intro: Puedes verificar si hay errores comunes y resolver problemas con las verificaciones de estado requeridas.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Si tienes una verificación y un estado con el mismo nombre y seleccionas dicho nombre como una verificación de estado requerida, tanto la verificación como el estado se requerirán. Para obtener más información, consulta las "[Verificaciones](/rest/reference/checks)".

Después de que habilitas la verificación de estado requerida, tu rama podría tener que actualizarse con la rama base antes de que se pueda fusionar. Esto garantiza que tu rama ha sido probada con el último código desde la rama base. Si tu rama no está actualizada, necesitarás fusionar la rama base en tu rama. Para obtener más información, consulta"[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

{% note %}

**Nota:** También puedes actualizar tu rama con la rama base utilizando Git rebase. Para obtener más información, consulta [Accerca del rebase de Git](/github/getting-started-with-github/about-git-rebase)."

{% endnote %}

No podrás subir cambios locales a una rama protegida hasta que se hayan aprobado todas las verificaciones de estado requeridas. En su lugar, recibirás un mensaje de error similar al siguiente.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Nota:** Las solicitudes de extracción que están actualizadas y aprobaron las verificaciones de estado requeridas pueden fusionarse localmente y subirse a la rama protegida. Esto se puede hacer sin las verificaciones de estado ejecutándose en la propia confirmación de fusión.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Algunas veces, los resultados de las verificaciones de estado para la confirmación de la prueba de fusión y de la confirmación principal entrarán en conflicto. Si la confirmación de fusión de prueba tiene un estado, ésta pasará. De otra manera, el estado de la confirmación principal deberá pasar antes de que puedas fusionar la rama. Para obtener más información sobre las confirmaciones de fusiones de prueba, consulta la sección "[Extracciones](/rest/reference/pulls#get-a-pull-request)".

![Ramas con conflictos en las confirmaciones de fusión](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}
