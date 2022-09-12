---
title: Protección de inserciones con análisis de secretos
intro: 'Puedes usar {% data variables.product.prodname_secret_scanning %} para evitar que los secretos admitidos se inserten en tu organización o repositorio. Para ello, habilita la protección de inserción.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
ms.openlocfilehash: 4c6aefb5614fff741f7c94fe0ca6fd34029e2129
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147683747'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## Acerca de la protección de inserción para secretos

Hasta ahora, {% data variables.product.prodname_secret_scanning_GHAS %} comprueba si hay secretos _después_ de una inserción y alerta a los usuarios de los secretos expuestos. {% data reusables.secret-scanning.push-protection-overview %}

Si un colaborador omite un bloque de protección de inserción para un secreto, {% data variables.product.prodname_dotcom %}:
- genera una alerta.
- crea una alerta en la pestaña "Security" (Seguridad) del repositorio.
- agrega el evento de omisión al registro de auditoría. {% ifversion secret-scanning-push-protection-email %}
- envía una alerta por correo electrónico a los propietarios de la organización, administradores de seguridad y administradores de repositorios, con un vínculo al secreto relacionado y el motivo por el que se permitió. {% endif %}

Para obtener más información sobre los secretos y proveedores de servicios admitidos para la protección de inserción, consulta "[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)".

## Habilitación de {% data variables.product.prodname_secret_scanning %} como protección de inserción

Para poder usar {% data variables.product.prodname_secret_scanning %} como protección de inserción, la organización o el repositorio deben tener habilitados {% data variables.product.prodname_GH_advanced_security %} y {% data variables.product.prodname_secret_scanning %}. Para más información, vea "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)", "[Administración de la configuración de seguridad y análisis para el repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" y "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".

Los propietarios de la organización, los administradores de seguridad y los administradores del repositorio pueden habilitar la protección de inserción para {% data variables.product.prodname_secret_scanning %} mediante la interfaz de usuario y la API. Para más información, vea "[Repositorios](/rest/reference/repos#update-a-repository)" y expanda la sección "Propiedades del objeto `security_and_analysis`" en la documentación de la API REST.

### Habilitación de {% data variables.product.prodname_secret_scanning %} como protección de inserción para una organización

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Habilitación de {% data variables.product.prodname_secret_scanning %} como protección de inserción para un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Uso del examen de secretos como protección de inserción de la línea de comandos

{% data reusables.secret-scanning.push-protection-command-line-choice %}

En la línea de comandos se mostrarán hasta cinco secretos detectados a la vez. Si ya se ha detectado un secreto determinado en el repositorio y ya existe una alerta, {% data variables.product.prodname_dotcom %} no bloqueará ese secreto. 

{% ifversion push-protection-custom-link-orgs %} 

Los administradores de la organización pueden proporcionar un vínculo personalizado que se mostrará cuando se bloquee una inserción. Este vínculo personalizado puede incluir recursos y consejos específicos de la organización, como instrucciones sobre el uso de un almacén de secretos recomendado o con quién ponerse en contacto para formular preguntas relacionadas con el secreto bloqueado.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

![Captura de pantalla en la que se muestra que se bloquea una inserción cuando un usuario intenta insertar un secreto en un repositorio](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Captura de pantalla en la que se muestra que se bloquea una inserción cuando un usuario intenta insertar un secreto en un repositorio](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obtener más información sobre cómo corregir secretos bloqueados, consulta "[Inserción de una rama bloqueada por la protección de inserción](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)".

Si confirma que un secreto es real y que pretende corregirlo más adelante, debe intentar corregirlo lo antes posible. Por ejemplo, podría revocar el secreto y quitarlo del historial de confirmaciones del repositorio. Los secretos reales que se han expuesto deben revocarse para evitar el acceso no autorizado. Puedes considerar la posibilidad de rotar primero el secreto antes de revocarlo. Para más información, vea "[Eliminación de datos confidenciales de un repositorio](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

### Permiso para insertar un secreto bloqueado

Si {% data variables.product.prodname_dotcom %} bloquea un secreto que cree que es seguro insertar, puede permitirlo y especificar el motivo por el que se debe permitir.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Visite la dirección URL devuelta por {% data variables.product.prodname_dotcom %} cuando se bloquee la inserción.
  ![Captura de pantalla que muestra el formulario con opciones para desbloquear la inserción de un secreto](/assets/images/help/repository/secret-scanning-unblock-form.png) {% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Haga clic en **Permitirme insertar este secreto**.
2. Vuelva a intentar la inserción en la línea de comandos en un plazo de tres horas. Si no ha realizado la inserción en un plazo de tres horas, tendrá que repetir este proceso.

{% ifversion secret-scanning-push-protection-web-ui %}
## Uso del examen de secretos como protección de inserción de la interfaz de usuario web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} solo mostrará un secreto detectado a la vez en la interfaz de usuario web. Si ya se ha detectado un secreto determinado en el repositorio y ya existe una alerta, {% data variables.product.prodname_dotcom %} no bloqueará ese secreto.

{% ifversion push-protection-custom-link-orgs %} 

Los administradores de la organización pueden proporcionar un vínculo personalizado que se mostrará cuando se bloquee una inserción. Este vínculo personalizado puede incluir recursos y consejos específicos de tu organización. Por ejemplo, el vínculo personalizado puede apuntar a un archivo Léame con información sobre el almacén de secretos de la organización, a qué equipos y personas se deben escalar las preguntas, o a la directiva aprobada de la organización para trabajar con secretos y reescribir el historial de confirmaciones.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

{% endif %}

Puedes quitar el secreto del archivo mediante la interfaz de usuario web. Una vez quitado el secreto, el banner de la parte superior de la página cambiará e indicará que ahora puedes confirmar los cambios.

  ![Captura de pantalla que muestra que la confirmación está permitida en la interfaz de usuario web después de corregir el secreto](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Omitir la protección de inserción para un secreto

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obtener más información sobre cómo corregir secretos bloqueados, consulta "[Inserción de una rama bloqueada por la protección de inserción](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)". 

Si confirma que un secreto es real y que pretende corregirlo más adelante, debe intentar corregirlo lo antes posible. Para más información, vea "[Eliminación de datos confidenciales de un repositorio](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

Si {% data variables.product.prodname_dotcom %} bloquea un secreto que cree que es seguro insertar, puede permitirlo y especificar el motivo por el que se debe permitir.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

Si confirma que un secreto es real y que pretende corregirlo más adelante, debe intentar corregirlo lo antes posible.

1. En el banner que aparece en la parte superior de la página cuando {% data variables.product.prodname_dotcom %} bloquea la confirmación, haz clic en **Omitir protección**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Captura de pantalla que muestra el formulario con opciones para desbloquear la inserción de un secreto](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Haz clic en **Permitir secreto**.

{% endif %}
