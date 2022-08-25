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
shortTitle: Habilitar la protección de subida
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## Acerca de la protección contra subidas para los secretos

Has ahora, el {% data variables.product.prodname_secret_scanning_GHAS %} verifica secretos _después_ de una subida y alerta a los usuarios sobre los secretos expuestos. {% data reusables.secret-scanning.push-protection-overview %}

Si un contribuyente omite un bloque de protección de subida para un secreto, {% data variables.product.prodname_dotcom %}:
- genera una alerta.
- crea una alerta en la pestaña de "Seguridad" del repositorio.
- agrega un evento de omisión en la bitácora de auditoría.{% ifversion secret-scanning-push-protection-email %}
- envía una alerta por correo electrónico a los propietarios de la organización, administradores de seguridad y administradores de repositorio con un enlace al secreto relacionado y con la razón por la cual se permitió.{% endif %}

Para obtener información sobre los proveedores de servicios y secretos compatibles para la protección contra subida, consulta la sección "[patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)".

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

## Utilizar el escaneo de secretos como protección contra subida desde la línea de comandos

{% data reusables.secret-scanning.push-protection-command-line-choice %}

Se mostrarán hasta cinco secretos detectados a la vez en la línea de comandos. Si ya se detectó un secreto en particular en el repositorio y la alerta ya existe, {% data variables.product.prodname_dotcom %} no lo bloqueará.

![Captura de pantalla que muestra que una subida está bloqueada cuando un usuario intenta subir un secreto a un repositorio](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obtener más información sobre los secretos bloqueados de remediación, consulta la sección "[Subir una rama que se bloqueó por una protección contra subida](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)".

Si confirmas que un secreto es real y que pretendes corregirlo después, debes intentar remediarlo tan pronto como sea posible. Por ejemplo, podrías revocar el secreto y eliminarlo del historial de confirmaciones del repositorio. Los secretos reales que se expusieron deben revocarse para evitar un acceso no autorizado. Podrías considerar rotar el secreto primero antes de revocarlo. Para obtener más información, consulta la sección "[Eliminar datos confidenciales de un repositorio](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

### Permitir que se suba un secreto bloqueado

Si {% data variables.product.prodname_dotcom %} bloquea un secreto que piensas se puede subir con seguridad, puedes permitirlo y especificar la razón por la cual se debería de permitir.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Visita la URL que devolvió {% data variables.product.prodname_dotcom %} cuando se bloqueó tu subida. ![Captura de pantalla que muestra un formulario con opciones para desbloquear la subida de un secreto](/assets/images/help/repository/secret-scanning-unblock-form.png)
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Haz clic en **Permitirme subir este secreto**.
2. Vuelve a intentar la subida en la línea de comandos al cabo de tres horas. Si no has realizado una subida a cabo de tres horas, necesitarás repetir este proceso.

{% ifversion secret-scanning-push-protection-web-ui %}
## Utilizar el escaneo de secretos como una protección de subida desde la IU web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} solo mostrará un secreto detectado a la vez en la IU web. Si ya se detectó un secreto en particular en el repositorio y la alerta ya existe, {% data variables.product.prodname_dotcom %} no lo bloqueará.

Puedes eliminar el secreto del archivo utilizando la IU web. Una vez que elimines el secreto, el letrero en la parte superior de la página cambiará y te dirá que ahora puedes confirmar tus cambios.

  ![Captura de pantalla que muestra la confirmación en la Iu web después de que se corrigió un secreto](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Saltar la protección contra subidas para un secreto

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obtener más información sobre los secretos de remediación bloqueados, consulta la sección "[Subir una rama que se bloqueó por una protección contra subida](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)".

Si confirmas que un secreto es real y que pretendes corregirlo después, debes intentar remediarlo tan pronto como sea posible. Para obtener más información, consulta la sección "[Eliminar datos confidenciales de un repositorio](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

Si {% data variables.product.prodname_dotcom %} bloquea un secreto que piensas se puede subir con seguridad, puedes permitirlo y especificar la razón por la cual se debería de permitir.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

Si confirmas que un secreto es real y que pretendes corregirlo después, debes intentar remediarlo tan pronto como sea posible.

1. En el letrero que aparece en la parte superior de la página cuando {% data variables.product.prodname_dotcom %} bloqueó tu confirmación, haz clic en **Saltar protección**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Captura de pantalla que muestra un formulario con opciones para desbloquear la subida de un secreto](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Haz clic en **Permitir secreto**.

{% endif %}
