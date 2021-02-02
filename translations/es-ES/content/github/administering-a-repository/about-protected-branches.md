---
title: Acerca de las ramas protegidas
intro: 'Puedes proteger las ramas importantes si configuras las reglas de protección de rama, las cuales definen si los colaboradores pueden borrar o hacer subidas forzadas a la rama y configura los requisitos para cualquier subida a la rama, tal como que pasen las verificaciones de estado o un historial de confirmaciones linear.'
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

### Acerca de las reglas de protección de rama

Puedes requerir ciertos flujos de trabajo o requisitos antes de que un colaborador pueda subir los cambios a una rama en tu repositorio, incluyendo la fusión de una solicitud de cambios en la rama, si creas una regla de protección de rama.

Predeterminadamente, cada regla de protección de rama inhabilita las subidas forzadas en las ramas coincidentes y previene que éstas se borren. Opcionalmente, puedes inhabilitar estas restricciones y habilitar la configuración adicional de protección de ramas.

Predeterminadamente, las restricciones de una regla de protección de rama no aplicarán a las personas con permisos administrativos en el repositorio. Opcionalmente, también puedes elegir el incluir administradores.

{% data reusables.repositories.branch-rules-example %} Para obtener más información sobre los patrones de nombre de rama, consulta la sección "[Administrar una regla de protección de rama](/github/administering-a-repository/managing-a-branch-protection-rule)".

{% data reusables.pull_requests.you-can-auto-merge %}

### Acerca de la configuración de protección de rama

Para cada regla de protección de rama, puedes elegir habilitar o inhabilitar la siguiente configuración.
- [Requerir revisiones de solicitudes de cambio antes de fusionarlas](#require-pull-request-reviews-before-merging)
- [Requerir verificaciones de estado antes de las fusiones](#require-status-checks-before-merging)
- [Requerir confirmaciones firmadas](#require-signed-commits)
- [Requerir un historial linear](#require-linear-history)
- [Incluir administradores](#include-administrators)
- [Restringir quiénes pueden subir a las ramas coincidentes](#restrict-who-can-push-to-matching-branches)
- [Permitir las subidas forzadas](#allow-force-pushes)
- [Permitir el borrado](#allow-deletions)

#### Requerir revisiones de solicitudes de cambio antes de fusionarlas

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Si habilitas las revisiones requeridas, los colaboradores solo podrán subir los cambios a una rama protegida a través de una solicitud de cambios que se encuentre aprobada por el total de revisores requeridos con permisos de escritura.

Si una persona con permisos administrativos elige la opción **Solicitar cambios** en una revisión, entonces deberá aprobar la solicitud de cambios antes de que se pueda fusionar. Si un revisor que solicita cambios en una solicitud de cambios no está disponible, cualquiera con permisos de escritura para el repositorio podrá descartar la revisión que está haciendo el bloqueo.

{% data reusables.repositories.review-policy-overlapping-commits %}

Si un colaborador intenta fusionar una solicitud de cambios con revisiones rechazadas o pendientes en la rama protegida, el colaborador recibirá un mensaje de error.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Opcionalmente, puedes elegir descartar las aprobaciones de la solicitud de cambios estancada cuando se suban las confirmaciones. Si cualquiera sube una confirmación que modifique el código de una solicitud de cambios aprobada, la aprobación se descartará y la solicitud de cambios no podrá fusionarse. Esto no aplicará si el colaborador sube confirmaciones que no modifiquen el código, como fusionar la rama base en la rama de la solicitud de cambios. Para obtener información acerca de las ramas base, consulta "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)."

Opcionalmente, puedes restringir la capacidad para descartar las revisiones de las solicitudes de cambio para que solo puedan hacerlas algunos equipos o personas específicos. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/articles/dismissing-a-pull-request-review)".

Opcionalmente, puedes elegir el requerir revisiones de los propietarios del código. Si lo haces, el propietario de código deberá aprobar cualquier solicitud de cambios que afecte dicho código antes de que la solicitud de cambios pueda fusionarse en la rama protegida.

#### Requerir verificaciones de estado antes de las fusiones

Las verificaciones de estado requeridas garantizan que todas las pruebas de integración continua (CI) requeridas sean aprobadas antes de que los colaboradores puedan realizar cambios en una rama protegida. Para obtener más información, consulta "[Configurar ramas protegidas](/articles/configuring-protected-branches/)" y "[Activar verificaciones de estado requeridas](/articles/enabling-required-status-checks)". Para obtener más información, consulta "[Acerca de las verificaciones de estado ](/github/collaborating-with-issues-and-pull-requests/about-status-checks)".

Antes de que puedas habilitar las verificaciones de estado requeridas, debes configurar el repositorio para utilizar la API de estado. Para obtener más información, consulta la sección "[Repositorios](/rest/reference/repos#statuses)" en la documentación de REST.

Después de habilitar las verificaciones de estado requierdas, cualquier verificación de estado deberá pasar antes de que los colaboradores puedan fusionar los cambios en la rama protegida. Una vez que hayan pasado todas las verificaciones de estado requeridas, cualquier confirmación deberá ya sea subirse en otra rama y después fusionarse, o subirse directo a la rama protegida.

{% note %}

**Nota:** Cualquier persona o integración con permisos de escritura en un repositorio puede establecer el estado de cualquier comprobación de estado en el repositorio. {% data variables.product.company_short %} no verifica que el autor de una comprobación está autorizado para crear un determinado nombre o modificar un estado existente. Antes de fusionar una solicitud de extracción, deberás verificar que se esté esperando al autor de cada estado, los cuales se encuentran listados en la caja de fusión.

{% endnote %}

Puedes configurar las verificaciones de estado requeridas para que sean "laxas" o "estrictas". El tipo de verificación de estado requerida que elijas determina si se requiere que tu rama esté actualizada con la rama base antes de la fusión.

| Tipo de verificación de estado requerida | Parámetro                                                                                                                                           | Requisitos de fusión                                                          | Consideraciones                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estricta**                             | La casilla **Require branches to be up-to-date before merging** (Las ramas deben estar actualizadas antes de la fusión) está marcada.               | La rama **debe** estar actualizada con la rama de base antes de la fusión.    | Este es el comportamiento predeterminado para las verificaciones de estado requeridas. Se pueden requerir más construcciones, ya que deberás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción con la rama de base protegida.                  |
| **Flexible**                             | La casilla **Require branches to be up-to-date before merging** (Las ramas deben estar actualizadas antes de la fusión) **no** está marcada.        | La rama **no debe** estar actualizada con la rama de base antes de la fusión. | Tendrás menos construcciones requeridas, ya que no necesitarás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción. Las verificaciones de estado pueden fallar después de que fusiones tu rama si hay cambios incompatibles con la rama de base. |
| **Inhabilitada**                         | La casilla **Require status checks to pass before merging** (Se deben superar las verificaciones de estado antes de la fusión) **no** está marcada. | La rama no tiene restricciones de fusión.                                     | Si las verificaciones de estado requeridas no están habilitadas, los colaboradores pueden fusionar la rama en cualquier momento, independientemente de si está actualizada con la rama de base. Esto aumenta la posibilidad de cambios incompatibles.                                                   |

Para obtener información sobre la solución de problemas, consulta la sección "[Solucionar probelmas para las verificaciones de estado requeridas](/github/administering-a-repository/troubleshooting-required-status-checks)".

#### Requerir confirmaciones firmadas

Cuando habilitas el requerir el firmado de confirmaciones en una rama, los colaboradores {% if currentVersion == "free-pro-team@latest" %}y bots{% endif %} solo podrán subir a la rama aquellas confirmaciones que se hayan firmado y verificado. Para obtener más información, consulta "[Acerca de la verificación de firmas en las confirmaciones](/articles/about-commit-signature-verification)."

{% note %}

**Nota:** Si un colaborador sube una confirmación sin firmar a una rama que requiere firmas de confirmación, éste necesitará rebasar la confirmación para incluir una firma verificada y luego subir forzadamente la confirmación re-escrita a la rama.

{% endnote %}

Siempre puedes subir confirmaciones locales a la rama si estas se firmaron y verificaron. {% if currentVersion == "free-pro-team@latest" %}También puedes fusionar las confirmaciones firmadas y verificadas en la rama si utilizas una solicitud de cambios en {% data variables.product.product_name %}. Sin embargo, no puedes combinar y fusionar una solicitud de cambios en la rama en {% data variables.product.product_name %} a menos de que seas el autor de la misma.{% else %} Sin embargo, no puedes fusionar una solicitud de cambios en la rama en {% data variables.product.product_name %}.{% endif %} Puedes {% if currentVersion == "free-pro-team@latest" %}combinar y {% endif %} fusionar solicitudes de cambios localmente. Para obtener más información, consulta la sección "[Revisar las solicitudes de extracción localmente](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)".

{% if currentVersion == "free-pro-team@latest" %} Para obtener más información sobre los métodos de fusión consulta la sección "[Acerca de los métodos de fusión en {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)".{% endif %}

#### Requerir un historial linear

El requerir un historial de confirmaciones linear previene que los colaboradores suban confirmaciones de fusión a la rama. Esto significa que cualquier solicitud de extracción fusionada con la rama protegida deberá utilizar una fusión combinada o una fusión de rebase. Un historial de confirmaciones estrictamente linear puede ayudar a los equipos a revertir los cambios con mayor facilidad. Para obtener más información acerca de los métodos de fusión, consulta "[Acerca de la fusión de solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)."

Antes de poder requerir un historial de confirmaciones linear, tu repositorio deberá permitir fusiones combinadas o fusiones de rebase. Para obtener más información, consulta "[Configurar las fusiones de solicitud de extracción](/github/administering-a-repository/configuring-pull-request-merges)."

#### Incluir administradores

Predeterminadamente, las reglas de rama protegida no aplican a las personas con permisos administrativos en un repositorio. Puedes habilitar esta configuración para incluir a los administradores en tus reglas de rama protegida.

#### Restringir quiénes pueden subir a las ramas coincidentes

{% if currentVersion == "free-pro-team@latest" %}
Puedes habilitar las restricciones de rama si tu repositorio le pertenece a una organización que utilice
{% data variables.product.prodname_team %} o {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

Cuando habilitas las restricciones de rama, solo los usuarios, equipos o apps a los que se les haya dado permisos pueden subir información a la rama protegida. Puedes ver y editar los usuarios, equipos o apps con acceso de escritura a una rama protegida en la configuración de la misma.

Solo puedes dar acceso de escritura a una rama protegida para usuarios, equipos o {% data variables.product.prodname_github_apps %} instaladas con acceso de tipo write a un repositorio. Las personas y apps con permisos administrativos en un repositorio siempre pueden subir información a una rama protegida.

#### Permitir las subidas forzadas

Predeterminadamente, {% data variables.product.product_name %} bloquea las subidas forzadas en todas las ramas protegidas. Cuando habilitas estas subidas forzadas en una rama protegida, cualquiera que tenga privilegios por lo menos de escritura en ese repositorio puede forzar la subida de información a la rama, incluyendo aquellos con permisos de administrador.

Habilitar las subidas forzadas no invalidará ninguna otra regla de protección a la rama. Por ejemplo, si una rama requiere un historial de confirmaciones linear, no puedes forzar la subida de fusión de confirmaciones en esa rama.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}No puedes habilitar las subidas forzadas para una rama protegida si un administrador de sitio las bloqueó en todas las ramas de tu repositorio. Para obtener más información, consulta "[Bloquear las subidas de información forzadas en los repositorios que sean propiedad de una organización o cuenta de usuario](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

Si un administrador de sitio ha bloqueado las subidas de información forzadas en la rama predeterminada únicamente, entonces aún puedes habilitarlas en cualquier otra rama protegida.{% endif %}

#### Permitir el borrado

Por defecto, no puedes eliminar una rama protegida. Cuando habilitas el borrado de una rama protegida, cualquiera que tenga por lo menos permiso de escritura en el repositorio podrá borrar la rama.
