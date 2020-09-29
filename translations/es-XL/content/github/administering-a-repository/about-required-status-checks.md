---
title: Acerca de las verificaciones de estado requeridas
intro: Las verificaciones de estado requeridas garantizan que todas las pruebas de integración continua (CI) requeridas sean aprobadas antes de que los colaboradores puedan realizar cambios en una rama protegida.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de las verificaciones de estado requeridas

Si has implementado protecciones de rama en tu repositorio, puedes configurar las revisiones de estado requeridas. Si has implementado protecciones de rama en tu repositorio, puedes configurar las revisiones de estado requeridas. Para obtener más información, consulta "[Configurar ramas protegidas](/articles/configuring-protected-branches/)" y "[Activar verificaciones de estado requeridas](/articles/enabling-required-status-checks)". Para obtener más información, consulta "[Acerca de las verificaciones de estado ](/github/administering-a-repository/enabling-required-status-checks)".

Una vez activadas las verificaciones de estado requeridas, todas las verificaciones de estado requeridas deber ser aprobadas antes de que se puedan fusionar las ramas en la rama protegida. Una vez que hayan pasado todas las verificaciones de estado requeridas, cualquier confirmación deberá ya sea subirse en otra rama y después fusionarse, o subirse directo a la rama protegida.

![Fusionar una rama protegida ](/assets/images/help/repository/req-status-check-all-passed.png)

{% tip %}

**Nota:** Cualquier persona o integración con permisos de escritura en un repositorio puede establecer el estado de cualquier comprobación de estado en el repositorio. {% data variables.product.product_name %} no verifica que el autor de una comprobación está autorizado para crear un determinado nombre o modificar un estado existente. Antes de fusionar una solicitud de extracción, deberás verificar que se esté esperando al autor de cada estado, los cuales se encuentran listados en la caja de fusión.

{% endtip %}

Los administradores de un repositorio pueden fusionar una rama protegida incluso si las verificaciones de estado requeridas han fallado o están pendientes. Le puedes solicitar a los administradores que estén sujetos a las verificaciones de estado requeridas. Para obtener más información, consulta "[Habilitar las verificaciones de estado requeridas](/github/administering-a-repository/enabling-required-status-checks)."

![Fusión del administrador de la rama protegida](/assets/images/help/repository/req-status-check-admin-merge.png)

Los administradores también pueden fusionar una rama protegida incluso si la rama está desactualizada con la rama base.

### Configuración de las verificaciones de estado requeridas

Puedes configurar las verificaciones para que sean laxas o estrictas, dependiendo de lo que quieras que tu rama tenga actualizado con respecto a la rama base antes de la fusión. Para obtener más información, consulta "[Tipos de verificación de estado requerido](/github/administering-a-repository/types-of-required-status-checks)."

### Solución de problemas para verificaciones de estado requeridas

Si tienes una revisión y un estado con el mismo nombre y seleccionas el nombre como una verificación de estado requerida, tanto la revisión como el estado se requerirán. Para obtener más información, consulta las "[Verificaciones](/v3/checks/)".

Una vez que has configurado las verificaciones de estado requeridas, tu rama debe estar actualizada con la rama base antes de fusionarse. Esto garantiza que tu rama ha sido probada con el último código desde la rama base. Si tu rama no está actualizada, necesitarás fusionar la rama base en tu rama.

{% note %}

**Nota:** También puedes actualizar tu rama con la rama base utilizando Git rebase. Para obtener más información, consulta [Accerca del rebase de Git](/github/using-git/about-git-rebase)."

{% endnote %}

![Rama desactualizada](/assets/images/help/repository/req-status-check-out-of-date.png)

No podrás subir cambios locales a una rama protegida hasta que se hayan aprobado todas las verificaciones de estado requeridas. En su lugar, recibirás un mensaje de error similar al siguiente:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Nota:** Las solicitudes de extracción que están actualizadas y aprobaron las verificaciones de estado requeridas pueden ser fusionadas localmente y subidas a la rama protegida. Esto se puede hacer sin las verificaciones de estado ejecutándose en la propia confirmación de fusión.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Algunas veces, los resultados de las verificaciones de estado para la confirmación de la prueba de fusión y de la confirmación principal entrarán en conflicto. Si la confirmación de la prueba de fusion tiene un estado, deberá pasar. De otra manera, el estado de la confirmación principal deberá pasar antes de que puedas fusionar la rama. Para obtener más información acerca de cómo hacer una prueba de fusión de las confirmaciones, consulta la sección "[Solicitudes de extracción](/v3/pulls/#response-1)."

![Ramas con conflictos en las confirmaciones de fusión](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

### Leer más

- "[Acerca de las verificaciones de estado](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
