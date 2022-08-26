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

{% ifversion push-protection-custom-link-orgs %}

Organization admins can provide a custom link that will be displayed when a push is blocked. This custom link can contain organization-specific resources and advice, such as directions on using a recommended secrets vault or who to contact for questions relating to the blocked secret.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

![Screenshot showing that a push is blocked when a user attempts to push a secret to a repository](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Screenshot showing that a push is blocked when a user attempts to push a secret to a repository](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[Pushing a branch blocked by push protection](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)."

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For example, you might revoke the secret and remove the secret from the repository's commit history. Real secrets that have been exposed must be revoked to avoid unauthorized access. You might consider first rotating the secret before revoking it. For more information, see "[Removing sensitive data from a repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

### Permitir que se suba un secreto bloqueado

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Visita la URL que devolvió {% data variables.product.prodname_dotcom %} cuando se bloqueó tu subida. ![Captura de pantalla que muestra un formulario con opciones para desbloquear la subida de un secreto](/assets/images/help/repository/secret-scanning-unblock-form.png)
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Haz clic en **Permitirme subir este secreto**.
2. Vuelve a intentar la subida en la línea de comandos al cabo de tres horas. Si no has realizado una subida a cabo de tres horas, necesitarás repetir este proceso.

{% ifversion secret-scanning-push-protection-web-ui %}
## Utilizar el escaneo de secretos como una protección de subida desde la IU web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} will only display one detected secret at a time in the web UI. Si ya se detectó un secreto en particular en el repositorio y la alerta ya existe, {% data variables.product.prodname_dotcom %} no lo bloqueará.

{% ifversion push-protection-custom-link-orgs %}

Organization admins can provide a custom link that will be displayed when a push is blocked. This custom link can contain resources and advice specific to your organization. For example, the custom link can point to a README file with information about the organization's secret vault, which teams and individuals to escalate questions to, or the organization's approved policy for working with secrets and rewriting commit history.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

{% endif %}

You can remove the secret from the file using the web UI. Una vez que elimines el secreto, el letrero en la parte superior de la página cambiará y te dirá que ahora puedes confirmar tus cambios.

  ![Screenshot showing commit in web ui allowed after secret fixed](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Saltar la protección contra subidas para un secreto

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[Pushing a branch blocked by push protection](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)."

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For more information, see "[Removing sensitive data from a repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible.

1. En el letrero que aparece en la parte superior de la página cuando {% data variables.product.prodname_dotcom %} bloqueó tu confirmación, haz clic en **Saltar protección**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Captura de pantalla que muestra un formulario con opciones para desbloquear la subida de un secreto](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Haz clic en **Permitir secreto**.

{% endif %}
