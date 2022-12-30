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
  - /github/administering-a-repository/about-protected-branches
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 8ec8ac1b43eacc64f44cf785f66a370466bbae8b
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111573'
---
## Acerca de las reglas de protección de rama

Puedes requerir ciertos flujos de trabajo o requisitos antes de que un colaborador pueda subir los cambios a una rama en tu repositorio, incluyendo la fusión de una solicitud de cambios en la rama, si creas una regla de protección de rama.

Predeterminadamente, cada regla de protección de rama inhabilita las subidas forzadas en las ramas coincidentes y previene que éstas se borren. Opcionalmente, puedes inhabilitar estas restricciones y habilitar la configuración adicional de protección de ramas.

{% ifversion bypass-branch-protections %} De forma predeterminada, las restricciones de una regla de protección de rama no se aplican a los usuarios con permisos de administrador para el repositorio o roles personalizados con el permiso "omitir protecciones de rama". Opcionalmente, también puedes aplicar las restricciones a administradores y roles con el permiso "omitir protecciones de rama". Para obtener más información, consulta "[Administración de roles de repositorio personalizados para una organización](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% else %} De manera predeterminada, las restricciones de una regla de protección de rama no se aplican a las personas con permisos administrativos en el repositorio. Opcionalmente, también puedes elegir incluir administradores. {% endif %}

{% data reusables.repositories.branch-rules-example %} Para más información sobre los patrones de nombre de rama, vea "[Administración de una regla de protección de rama](/github/administering-a-repository/managing-a-branch-protection-rule)".

{% data reusables.pull_requests.you-can-auto-merge %}

## Acerca de la configuración de protección de rama

Para cada regla de protección de rama, puedes elegir habilitar o inhabilitar la siguiente configuración.
- [Revisiones de solicitudes de incorporación de cambios obligatorias antes de la combinación](#require-pull-request-reviews-before-merging)
- [Requerir verificaciones de estado antes de las fusiones](#require-status-checks-before-merging)
- [Requerir la resolución de conversaciones antes de fusionar](#require-conversation-resolution-before-merging)
- [Confirmaciones firmadas obligatorias](#require-signed-commits)
- [Historial lineal obligatorio](#require-linear-history) {% ifversion fpt or ghec %}
- [Cola de combinación obligatoria](#require-merge-queue) {% endif %} {%- ifversion required-deployments %}
- [Implementaciones correctas obligatorias antes de la combinación](#require-deployments-to-succeed-before-merging) {%- endif %} {%- ifversion lock-branch %}
- [Bloquear rama](#lock-branch) {%- endif %} {% ifversion bypass-branch-protections %}- [No permitir omitir la configuración anterior](#do-not-allow-bypassing-the-above-settings){% else %}- [Incluir administradores](#include-administrators){% endif %}
- [Restricción de quiénes pueden realizar inserciones en ramas coincidentes](#restrict-who-can-push-to-matching-branches)
- [Inserciones forzadas permitidas](#allow-force-pushes)
- [Eliminaciones permitidas](#allow-deletions)

Para más información sobre cómo configurar la protección de ramas, vea "[Administración de una regla de protección de rama](/github/administering-a-repository/managing-a-branch-protection-rule)".

### Requerir revisiones de solicitudes de cambio antes de fusionarlas

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Si habilitas las revisiones requeridas, los colaboradores solo podrán subir los cambios a una rama protegida a través de una solicitud de cambios que se encuentre aprobada por el total de revisores requeridos con permisos de escritura.

Si un usuario con permisos administrativos elige la opción **Solicitar cambios** en una revisión, tendrá que aprobar la solicitud de incorporación de cambios antes de que se pueda combinar. Si un revisor que solicita cambios en una solicitud de cambios no está disponible, cualquiera con permisos de escritura para el repositorio podrá descartar la revisión que está haciendo el bloqueo.

{% data reusables.repositories.review-policy-overlapping-commits %}

Si un colaborador intenta fusionar una solicitud de cambios con revisiones rechazadas o pendientes en la rama protegida, el colaborador recibirá un mensaje de error.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Opcionalmente, puedes elegir descartar las aprobaciones de la solicitud de cambios estancada cuando se suban las confirmaciones. Si cualquiera sube una confirmación que modifique el código de una solicitud de cambios aprobada, la aprobación se descartará y la solicitud de cambios no podrá fusionarse. Esto no aplicará si el colaborador sube confirmaciones que no modifiquen el código, como fusionar la rama base en la rama de la solicitud de cambios. Para obtener información sobre la rama base, vea "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

Opcionalmente, puedes restringir la capacidad para descartar las revisiones de las solicitudes de cambio para que solo puedan hacerlas algunos equipos o personas específicos. Para más información, vea "[Descarte de la revisión de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".

Opcionalmente, puedes elegir el requerir revisiones de los propietarios del código. Si lo haces, el propietario de código deberá aprobar cualquier solicitud de cambios que afecte dicho código antes de que la solicitud de cambios pueda fusionarse en la rama protegida.

{% ifversion last-pusher-require-approval %} Opcionalmente, puedes requerir aprobaciones de alguien que no sea la última persona para insertar en una rama antes de que se pueda combinar una solicitud de incorporación de cambios. Esto garantiza que más de una persona vea las solicitudes de incorporación de cambios en su estado final antes de combinarlas en una rama protegida. Si habilitas esta característica, el usuario más reciente para insertar sus cambios necesitará una aprobación, independientemente de la protección de rama aprobaciones requeridas. A los usuarios que ya han revisado una solicitud de incorporación de cambios se les puede volver a aprobar después de la inserción más reciente para cumplir este requisito.
{% endif %}

### Requerir verificaciones de estado antes de las fusiones

Las verificaciones de estado requeridas garantizan que todas las pruebas de integración continua (CI) requeridas sean aprobadas antes de que los colaboradores puedan realizar cambios en una rama protegida. Para obtener más información, consulta "<a href="/articles/configuring-protected-branches/">Configurar ramas protegidas</a>" y "<a href="/articles/enabling-required-status-checks">Activar verificaciones de estado requeridas</a>". Para más información, vea "[Acerca de las comprobaciones de estado](/github/collaborating-with-issues-and-pull-requests/about-status-checks)".

Antes de que puedas habilitar las comprobaciones de estado requeridas, debes configurar el repositorio para utilizar la API de estado de confirmación. Para obtener más información, consulta "[Estados de confirmación](/rest/commits/statuses)" en la documentación de la API REST.

Después de habilitar las verificaciones de estado requierdas, cualquier verificación de estado deberá pasar antes de que los colaboradores puedan fusionar los cambios en la rama protegida. Una vez que hayan pasado todas las verificaciones de estado requeridas, cualquier confirmación deberá ya sea subirse en otra rama y después fusionarse, o subirse directo a la rama protegida.

Cualquier usuario o integración con permisos de escritura en un repositorio puede configurar el estado de cualquier comprobación de estado en el repositorio{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}, pero en algunos casos, es posible que solo quieras aceptar una comprobación de estado de una instancia concreta de {% data variables.product.prodname_github_app %}. Cuando agregas una verificación de estado requerida, puedes seleccionar una app que haya configurado su verificación recientemente como la fuente esperada de actualizaciones de estado.{% endif %} Si cualquier otra persona o integración configura el estado, no se permitirá la fusión. Si seleccionas "cualquier fuente", aún puedes verificar el autor de cada estado listado en la caja de fusión manualmente.

Puedes configurar las verificaciones de estado requeridas para que sean "laxas" o "estrictas". El tipo de verificación de estado requerida que elijas determina si se requiere que tu rama esté actualizada con la rama base antes de la fusión.

| Tipo de verificación de estado requerida | Configuración | Requisitos de fusión | Consideraciones |
| --- | --- | --- | --- |
| **Strict** | La casilla **Requerir que las ramas estén actualizadas antes de la combinación** está activada. | La rama **debe** estar actualizada con la rama base antes de la combinación. | Este es el comportamiento predeterminado para las verificaciones de estado requeridas. Se pueden requerir más construcciones, ya que deberás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción con la rama de base protegida.|
| **Flexible** | La casilla **Requerir que las ramas estén actualizadas antes de la combinación** **no** está activada. | La rama **no tiene** que estar actualizada con la rama base antes de la combinación. | Tendrás menos construcciones requeridas, ya que no necesitarás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción. Las verificaciones de estado pueden fallar después de que fusiones tu rama si hay cambios incompatibles con la rama de base. |
| **Deshabilitada** | La casilla **Requerir que se superen las comprobaciones de estado antes de la combinación** **no** está activada. | La rama no tiene restricciones de fusión. | Si las verificaciones de estado requeridas no están habilitadas, los colaboradores pueden fusionar la rama en cualquier momento, independientemente de si está actualizada con la rama de base. Esto aumenta la posibilidad de cambios incompatibles.

Para obtener información de solución de problemas, vea "[Solución de problemas de comprobaciones de estado necesarias](/github/administering-a-repository/troubleshooting-required-status-checks)".

### Requerir la resolución de conversaciones antes de fusionar

Requiere que se resuelvan todos los comentarios de la solicitud de cambios antes de qeu se pueda fusionar con una rama protegida. Esto garantiza que todos los comentarios se traten o reconozcan antes de fusionar.

### Requerir confirmaciones firmadas

Al habilitar la firma de confirmación obligatoria en una rama, los colaboradores {% ifversion fpt or ghec %}y bots{% endif %} solo pueden insertar confirmaciones que se hayan firmado y comprobado en la rama. Para más información, vea "[Acerca de la comprobación de firmas de confirmación](/articles/about-commit-signature-verification)".

{% note %}

{% ifversion fpt or ghec %} **Notas:** 

* Si habilitaste el modo vigilante, el cual indica que tus confirmaciones siempre se firmarán, cualquier confirmación que {% data variables.product.prodname_dotcom %} identifique como "Verificada parcialmente" se permitirá en aquellas ramas que requieran confirmaciones firmadas. Para más información sobre el modo de vigilancia, vea "[Representación de los estados de comprobación para todas las confirmaciones](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)".
* Si un colaborador sube una confirmación sin firmar a una rama que requiere firmas de confirmación, este necesitará rebasar dicha confirmación para incluir una firma verificada y luego subir forzadamente la confirmación reescrita a esta.

{% else %} **Nota:** Si un colaborador inserta una confirmación sin firmar en una rama en la que se exigen firmas de confirmación, tendrá que fusionar mediante cambio de base la confirmación para incluir una firma verificada y, después, forzar la inserción de la confirmación reescrita en la rama.
{% endif %}

{% endnote %}

Siempre puedes subir confirmaciones locales a la rama si estas se firmaron y verificaron. {% ifversion fpt or ghec %}También puede combinar confirmaciones firmadas y comprobadas en la rama mediante una solicitud de incorporación de cambios en {% data variables.product.product_name %}. Pero no puede fusionar mediante combinación con "squash" y combinar una solicitud de incorporación de cambios en la rama en {% data variables.product.product_name %} a menos de que sea el creador de esa solicitud.{% else %} Pero no puede combinar solicitudes de incorporación de cambios en la rama en {% data variables.product.product_name %}.{% endif %} Puede {% ifversion fpt or ghec %}fusión mediante combinación con "squash" y {% endif %}combinar las solicitudes de incorporación de cambios localmente. Para más información, vea "[Extracción del repositorio de solicitudes de incorporación de cambios localmente](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)".

{% ifversion fpt or ghec %} Para más información sobre los métodos de combinación, vea "[Acerca de los métodos de combinación en {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)".{% endif %}

### Requerir un historial linear

El requerir un historial de confirmaciones linear previene que los colaboradores suban confirmaciones de fusión a la rama. Esto significa que cualquier solicitud de extracción fusionada con la rama protegida deberá utilizar una fusión combinada o una fusión de rebase. Un historial de confirmaciones estrictamente linear puede ayudar a los equipos a revertir los cambios con mayor facilidad. Para más información sobre los métodos de combinación, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)".

Antes de poder requerir un historial de confirmaciones linear, tu repositorio deberá permitir fusiones combinadas o fusiones de rebase. Para más información, vea "[Configuración de combinaciones de solicitud de incorporación de cambios](/github/administering-a-repository/configuring-pull-request-merges)".

{% ifversion fpt or ghec %}
### Requerir una cola de fusión

{% data reusables.pull_requests.merge-queue-beta %} {% data reusables.pull_requests.merge-queue-overview %}
 
{% data reusables.pull_requests.merge-queue-merging-method %} {% data reusables.pull_requests.merge-queue-references %}

{% endif %}

### Implementaciones correctas obligatorias antes de la combinación

Puede exigir que los cambios se implementen correctamente en entornos específicos antes de poder combinar una rama. Por ejemplo, puede usar esta regla para asegurarse de que los cambios se implementan correctamente en un entorno de ensayo antes de que se combinen en la rama predeterminada.

{% ifversion lock-branch %}
### Bloqueo de una rama

El bloqueo de una rama garantiza que no se pueda realizar ninguna confirmación en ella. De manera predeterminada, un repositorio bifurcado no admite la sincronización desde su repositorio ascendente. Puedes habilitar **Permitir la sincronización de bifurcación** para extraer los cambios del repositorio ascendente, a la vez que impides otras contribuciones a la rama de la bifurcación.
{%  endif %}

{% ifversion bypass-branch-protections %}### No permitir omitir la configuración anterior{% else %}
### Incluir administradores{% endif %}

{% ifversion bypass-branch-protections %} De forma predeterminada, las restricciones de una regla de protección de rama no se aplican a los usuarios con permisos de administrador para el repositorio o roles personalizados con el permiso "omitir protecciones de rama" en un repositorio. 

También puedes habilitar esta configuración para aplicar las restricciones a administradores y roles con el permiso "omitir protecciones de rama".  Para obtener más información, consulta "[Administración de roles de repositorio personalizados para una organización](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% else %} De manera predeterminada, las reglas de rama protegida no se aplican a las personas con permisos administrativos en un repositorio. Puedes habilitar esta configuración para incluir a los administradores en tus reglas de rama protegida.{% endif %}

### Restringir quiénes pueden subir a las ramas coincidentes

{% ifversion fpt or ghec %} Puede habilitar las restricciones de rama si el repositorio es propiedad de una organización en la que se usa {% data variables.product.prodname_team %} o {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

Cuando habilitas las restricciones de rama, solo los usuarios, equipos o apps a los que se les haya dado permisos pueden subir información a la rama protegida. Puedes ver y editar los usuarios, equipos o apps con acceso de escritura a una rama protegida en la configuración de la misma. Cuando se requieren las comprobaciones de estado, aún se prevendrá que las personas, equipos y aplicaciones que tienen permiso de subida a una rama protegida realicen fusiones mediante combinación en caso de que fallen las comprobaciones requeridas. Las personas, equipos y apps que tengan permiso de subida a una rama protegida aún necesitarán crear solicitudes de cambio cuando estas se requieran.

{% ifversion restrict-pushes-create-branch %} Opcionalmente, puedes aplicar las mismas restricciones a la creación de ramas que coincidan con la regla. Por ejemplo, si creas una regla que solo permite que un equipo determinado suba información a cualquier rama que contenga la palabra `release`, solo los miembros de ese equipo podrían crear una nueva rama con la palabra `release`.
{% endif %}

Solo puedes dar acceso de escritura a una rama protegida, o bien conceder permiso para crear una rama coincidente, a usuarios, equipos o {% data variables.product.prodname_github_apps %} instaladas con acceso de escritura a un repositorio. Las personas y aplicaciones con permisos administrativos en un repositorio siempre pueden subir información a una rama protegida{% ifversion restrict-pushes-create-branch %} o crear una rama coincidente{% endif %}.

### Permitir las subidas forzadas

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} De manera predeterminada, {% data variables.product.product_name %} bloquea las inserciones forzadas en todas las ramas protegidas. Cuando habilitas las subidas forzadas a una rama protegida, puedes elegir uno de dos grupos que pueden hacerlas:

1. Permitir que todos los que por lo menos tengan permisos de escritura en el repositorio suban información forzadamente a la rama, incluyendo aquellos con permisos administrativos.
1. Permitir que solo personas o equipos específicos suban información forzadamente a la rama.

Si alguien sube información de forma forzada a una rama, esta subida forzada podría sobrescribir confirmaciones en las que otros colaboradores basaron su trabajo. Las personas pueden tener conflictos de fusión o solicitudes de cambios corruptas.

{% else %} De manera predeterminada, {% data variables.product.product_name %} bloquea las inserciones forzadas en todas las ramas protegidas. Cuando habilitas estas subidas forzadas en una rama protegida, cualquiera que tenga privilegios por lo menos de escritura en ese repositorio puede forzar la subida de información a la rama, incluyendo aquellos con permisos de administrador. Si alguien sube información de forma forzada a una rama, esta subida forzada podría sobrescribir confirmaciones en las que otros colaboradores basaron su trabajo. Las personas pueden tener conflictos de fusión o solicitudes de cambios corruptas.
{% endif %}

Habilitar las subidas forzadas no invalidará ninguna otra regla de protección a la rama. Por ejemplo, si una rama requiere un historial de confirmaciones linear, no puedes forzar la subida de fusión de confirmaciones en esa rama.

{% ifversion ghes or ghae %}No puede habilitar las inserciones forzadas en una rama protegida si un administrador del sitio las ha bloqueado en todas las ramas del repositorio. Para obtener más información, consulta "[Bloqueo de inserciones forzadas en repositorios que pertenecen a una cuenta personal u organización](/enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)".

Si un administrador de sitio ha bloqueado las subidas de información forzadas en la rama predeterminada únicamente, entonces aún puedes habilitarlas en cualquier otra rama protegida.{% endif %}

### Permitir el borrado

Por defecto, no puedes eliminar una rama protegida. Cuando habilitas el borrado de una rama protegida, cualquiera que tenga por lo menos permiso de escritura en el repositorio podrá borrar la rama.
