---
title: Automatización Git con tokens de OAuth
redirect_from:
  - /articles/git-over-https-using-oauth-token/
  - /articles/git-over-http-using-oauth-token/
  - /articles/git-automation-with-oauth-tokens
intro: 'Puedes utilizar tokens de OAuth para interactuar con {% data variables.product.product_name %} a través de scripts automatizados.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Paso 1: Obtener un token de OAuth

Crea un token de acceso personal en tu página de configuración de la aplicación. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

{% tip %}

{% if currentVersion == "free-pro-team@latest" %}
**Sugerencias:**
- You must verify your email address before you can create a personal access token. Para obtener más información, consulta "[Verificar tu dirección de correo electrónico](/articles/verifying-your-email-address)".
- {% data reusables.user_settings.review_oauth_tokens_tip %}
{% else %}
**Sugerencia:** {% data reusables.user_settings.review_oauth_tokens_tip %}
{% endif %}

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### Paso 2: Clonar un repositorio

{% data reusables.command_line.providing-token-as-password %}

To avoid these prompts, you can use Git password caching. Para obtener más información, consulta la sección "[Almacenar tus credenciales de GitHub en caché dentro de Git](/github/using-git/caching-your-github-credentials-in-git)".

{% warning %}

**Advertencia**: Los tokens tienen acceso de escritura/lectura y deben tratarse como contraseñas. Si ingresas tu token en la URL del clon cuando clonas o agregas un remoto, Git la escribe en tu archivo _.git/config_ como texto plano, lo que representa un riesgo de seguridad.

{% endwarning %}

### Leer más

- "[Autorizar las Apps de OAuth](/v3/oauth/)"
