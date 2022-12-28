---
title: Protección de inserciones con análisis de secretos
intro: 'Puedes usar el {% data variables.product.prodname_secret_scanning %} para evitar que los secretos admitidos se inserten en{% ifversion secret-scanning-enterprise-level %}la empresa,{% endif %} la organización{% ifversion secret-scanning-enterprise-level %},{% endif %} o el repositorio, habilitando para ello la protección de inserción.'
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
ms.openlocfilehash: 518013033ac5d87fd8428d1c99d5f633a3bc2e65
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184500'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## Acerca de la protección de inserción para secretos

Hasta ahora, {% data variables.product.prodname_secret_scanning_GHAS %} comprueba si hay secretos _después_ de una inserción y alerta a los usuarios de los secretos expuestos. {% data reusables.secret-scanning.push-protection-overview %}

Si un colaborador omite un bloque de protección de inserción para un secreto, {% data variables.product.prodname_dotcom %}:
- crea una alerta en la pestaña "Seguridad" del repositorio en el estado descrito en la tabla siguiente.
- agrega el evento de omisión al registro de auditoría. {% ifversion secret-scanning-push-protection-email %}
- envía una alerta por correo electrónico a los propietarios de la organización, administradores de seguridad y administradores de repositorios que están viendo el repositorio, con un vínculo al secreto y el motivo por el que se permitió.{% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

Para obtener más información sobre los secretos y proveedores de servicios admitidos para la protección de inserción, consulta "[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)".

## Habilitación de {% data variables.product.prodname_secret_scanning %} como protección de inserción

Para poder usar el {% data variables.product.prodname_secret_scanning %} como protección de inserción, {% ifversion secret-scanning-enterprise-level %}la empresa,{% endif %}la organización{% ifversion secret-scanning-enterprise-level %},{% endif %} o el repositorio debe tener habilitados tanto {% data variables.product.prodname_GH_advanced_security %} como el {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta {% ifversion secret-scanning-enterprise-level %}"[Administración de la configuración de seguridad y análisis de la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise),"{% endif %} "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)", "[Administración de la configuración de seguridad y análisis del repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" y "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".

Los propietarios de la organización, los administradores de seguridad y los administradores del repositorio pueden habilitar la protección de inserción para {% data variables.product.prodname_secret_scanning %} mediante la interfaz de usuario y la API. Para más información, vea "[Repositorios](/rest/reference/repos#update-a-repository)" y expanda la sección "Propiedades del objeto `security_and_analysis`" en la documentación de la API REST.

{% ifversion secret-scanning-enterprise-level %}
### Habilitar el {% data variables.product.prodname_secret_scanning %} como protección de inserción de la empresa
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral de la izquierda, haz clic en **Seguridad y análisis del código**. {% data reusables.advanced-security.secret-scanning-push-protection-enterprise %} {% endif %}

### Habilitación de {% data variables.product.prodname_secret_scanning %} como protección de inserción para una organización

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Habilitación de {% data variables.product.prodname_secret_scanning %} como protección de inserción para un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Uso del examen de secretos como protección de inserción de la línea de comandos

{% data reusables.secret-scanning.push-protection-command-line-choice %}

En la línea de comandos se mostrarán hasta cinco secretos detectados a la vez. Si ya se ha detectado un secreto determinado en el repositorio y ya existe una alerta, {% data variables.product.prodname_dotcom %} no bloqueará ese secreto. 

{% ifversion push-protection-custom-link-orgs %} 

Los administradores de la organización pueden proporcionar un vínculo personalizado que se mostrará cuando se bloquee una inserción. Este vínculo personalizado puede incluir recursos y consejos específicos de la organización, como instrucciones sobre el uso de un almacén de secretos recomendado o con quién ponerse en contacto para formular preguntas relacionadas con el secreto bloqueado.

![Captura de pantalla en la que se muestra que se bloquea una inserción cuando un usuario intenta insertar un secreto en un repositorio](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Captura de pantalla en la que se muestra que se bloquea una inserción cuando un usuario intenta insertar un secreto en un repositorio](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obtener más información sobre cómo corregir secretos bloqueados, consulta "[Inserción de una rama bloqueada por la protección de inserción](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)".

Si confirma que un secreto es real y que pretende corregirlo más adelante, debe intentar corregirlo lo antes posible. Por ejemplo, podría revocar el secreto y quitarlo del historial de confirmaciones del repositorio. Los secretos reales que se han expuesto deben revocarse para evitar el acceso no autorizado. Puedes considerar la posibilidad de rotar primero el secreto antes de revocarlo. Para más información, vea "[Eliminación de datos confidenciales de un repositorio](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghes < 3.6 or ghae < 3.6 %}

{% tip %}

**Sugerencia:** Puedes usar {% data variables.product.prodname_secret_scanning %} como protección contra el envío de cambios desde la interfaz de usuario web y desde la línea de comandos, en {% data variables.product.product_name %}, versión 3.6 o posterior.

{% endtip %}

{% endif %}

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
