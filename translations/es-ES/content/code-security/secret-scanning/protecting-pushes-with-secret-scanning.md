---
title: Proteger las subidas con el escaneo de secretos
intro: 'Puedes utilizar el {% data variables.product.prodname_secret_scanning %} para prevenir que los secretos compatibles se suban a tu organización o repositorio si habilitas la protección contra subidas.'
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
shortTitle: Protección contra subidas
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## Acerca de la protección contra subidas para los secretos

Has ahora, el {% data variables.product.prodname_secret_scanning_GHAS %} verifica secretos _después_ de una subida y alerta a los usuarios sobre los secretos expuestos. {% data reusables.secret-scanning.push-protection-overview %}

If a contributor bypasses a push protection block for a secret, {% data variables.product.prodname_dotcom %}:
- generates an alert.
- creates an alert in the "Security" tab of the repository.
- adds the bypass event to the audit log.{% ifversion secret-scanning-push-protection-email %}
- sends an email alert to organization owners, security managers, and repository administrators, with a link to the related secret and the reason why it was allowed.{% endif %}

El {% data variables.product.prodname_secret_scanning_caps %} como protección contra subidas actualmente escanea los repositorios para encontrar secretos que hayan emitido los siguientes proveedores de servicios.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

## Habilitar el {% data variables.product.prodname_secret_scanning %} como una protección contra subidas

Para que puedas utilizar el {% data variables.product.prodname_secret_scanning %} como protección contra subidas, el repositorio u organización necesita tener habilitados tanto la {% data variables.product.prodname_GH_advanced_security %} como el {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta las secciones "[Administrar los ajustes de seguridad y análisis de tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)", "[Administrar los ajustes de seguridad y análisis de tu repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" y "[Acerca de la {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".

Los propietarios de las organizaciones, administradores de seguridad y administradores de repositorio pueden habilitar la protección de subida para {% data variables.product.prodname_secret_scanning %} a través de la IU y de la API. Para obtener más información, consulta la sección "[Repositorios](/rest/reference/repos#update-a-repository)" y expande la sección de "Propiedades del objeto `security_and_analysis`" en la documentación de la API de REST.

### Habilitar el {% data variables.product.prodname_secret_scanning %} como protección contra subida para una organización

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Habilitar el {% data variables.product.prodname_secret_scanning %} como protección de subida para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}


## Utilizar el {% data variables.product.prodname_secret_scanning %} como protección de subida desde la línea de comandos

Cuando intentas subir un secreto compatible a un repositorio u organización con {% data variables.product.prodname_secret_scanning %} como una protección contra subida habilitada, {% data variables.product.prodname_dotcom %} bloqueará la subida. Puedes eliminar el secreto desde tu confirmación o seguir una URL proporcionada para permitir la subida.

Se mostrarán hasta cinco secretos detectados a la vez en la línea de comandos. Si ya se detectó un secreto en particular en el repositorio y la alerta ya existe, {% data variables.product.prodname_dotcom %} no lo bloqueará.

![Captura de pantalla que muestra que una subida está bloqueada cuando un usuario intenta subir un secreto a un repositorio](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

Si necesitas eliminar el secreto de tu última confirmación (es decir, `HEAD`) en la rama que se está subiendo y cualquier confirmación anterior que lo contenga, puedes eliminarlo de `HEAD` y luego combinar las confirmaciones que haya entre ellos cuando la confirmación se introdujo y la primera versión de `HEAD` para la cual se eliminó el secreto.

{% note %}

**Notas**:

* Si tu configuración de git es compatible con las subidas a ramas múltiples y no solo a la rama predeterminada, tu subida podría bloquearse debido a que se están subiendo refs imprevistos y adicionales. Para obtener más información, consulta las [opciones de `push.default`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) en los documentos de Git.
* Si el {% data variables.product.prodname_secret_scanning %} excede el tiempo cuando se hace una subida, {% data variables.product.prodname_dotcom %} aún ejecutará el escaneo después de dicha subida.

{% endnote %}

### Permitir que se suba un secreto bloqueado

Si {% data variables.product.prodname_dotcom %} bloquea un secreto que piensas se puede subir con seguridad, puedes permitirlo y especificar la razón por la cual se debería de permitir.

Si confirmas que un secreto es real y que pretendes corregirlo después, debes intentar remediarlo tan pronto como sea posible. Por ejemplo, podrías revocar el secreto y eliminarlo del historial de confirmaciones del repositorio. Para obtener más información, consulta la sección "[Eliminar datos confidenciales de un repositorio](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Visita la URL que devolvió {% data variables.product.prodname_dotcom %} cuando se bloqueó tu subida. ![Captura de pantalla que muestra un formulario con opciones para desbloquear la subida de un secreto](/assets/images/help/repository/secret-scanning-unblock-form.png)
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Haz clic en **Permitirme subir este secreto**.
2. Vuelve a intentar la subida en la línea de comandos al cabo de tres horas. Si no has realizado una subida a cabo de tres horas, necesitarás repetir este proceso.

{% ifversion secret-scanning-push-protection-web-ui %}
## Utilizar el escaneo de secretos como una protección de subida desde la IU web

Cuando utilizas la IU web para intentar confirmar un secreto compatible en un repositorio u organización con el escaneo de secretos como protección contra subidas habilitada, {% data variables.product.prodname_dotcom %} la bloqueará. Puedes ver un letrero en la parte superior de la página con información sobre la ubicación del secreto y este también se subrayará en el archivo para que lo puedas encontrar con facilidad.

  ![Captura de pantalla que muestra una confirmación bloqueada en la IU web debido a la protección contra subidas del escaneo de secretos](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)

{% data variables.product.prodname_dotcom %} solo mostrará un secreto detectado a la vez en la IU web. Si ya se detectó un secreto en particular en el repositorio y la alerta ya existe, {% data variables.product.prodname_dotcom %} no lo bloqueará.

Puedes eliminar el secreto del archivo utilizando la IU web. Una vez que elimines el secreto, el letrero en la parte superior de la página cambiará y te dirá que ahora puedes confirmar tus cambios.

  ![Captura de pantalla que muestra la confirmación en la Iu web después de que se corrigió un secreto](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Saltar la protección contra subidas para un secreto

Si {% data variables.product.prodname_dotcom %} bloquea un secreto que piensas se puede subir con seguridad, puedes permitirlo y especificar la razón por la cual se debería de permitir. Si confirmas que un secreto es real y que pretendes corregirlo después, debes intentar remediarlo tan pronto como sea posible.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

Si confirmas que un secreto es real y que pretendes corregirlo después, debes intentar remediarlo tan pronto como sea posible.

1. En el letrero que aparece en la parte superior de la página cuando {% data variables.product.prodname_dotcom %} bloqueó tu confirmación, haz clic en **Saltar protección**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Captura de pantalla que muestra un formulario con opciones para desbloquear la subida de un secreto](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Haz clic en **Permitir secreto**.

{% endif %}
