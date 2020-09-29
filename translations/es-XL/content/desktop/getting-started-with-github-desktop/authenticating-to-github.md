---
title: Autenticar a GitHub
intro: 'Conecta tu cuenta de {% data variables.product.product_name %} a {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
versions:
  free-pro-team: '*'
---

Antes de realizar la autenticación, {% data reusables.desktop.get-an-account %}

{% mac %}

### Autenticarse en {% data variables.product.prodname_dotcom %} utilizando el buscador

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
4. A la derecha de "{% data variables.product.prodname_dotcom %}", da clic en **Iniciar sesión**. ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-github.png)
5. En el panel de inicio de sesión, haz clic en **Sign in using your browser** (Iniciar sesión usando el navegador). ![Inicio de sesión mediante el enlace de su navegador](/assets/images/help/desktop/mac-sign-in-browser.png)
{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.retrieve-2fa-in-browser %}
{% data reusables.desktop.enter-2fa-in-browser %}
9. Luego de que {% data variables.product.prodname_dotcom %} autentica tu cuenta, vuelve a {% data variables.product.prodname_desktop %}.

### Autenticarse en {% data variables.product.prodname_dotcom %} utilizando tu nombre de usuario y contraseña

{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
5. Para agregar una cuenta a GitHub Enterprise, escribe tus credenciales debajo de "Enterprise server address" (Dirección de servidor empresarial) y luego haz clic en **Continue** (Continuar). ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button-enterprise.png)
6. Para agregar una cuenta GitHub, escribe tus credenciales de GitHub.com y haz clic en **Sign in** (Iniciar sesión). ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button.png)
{% data reusables.desktop.retrieve-2fa %}
{% data reusables.desktop.return-to-desktop %} Si se solicita, escribe tu código 2FA y luego haz clic en **Sign in** (Iniciar sesión). ![La indicación del código 2FA](/assets/images/help/desktop/mac-2fa-code-prompt.png)

{% endmac %}

{% windows %}

### Autenticarse en {% data variables.product.prodname_dotcom %} utilizando el buscador

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
4. A la derecha de "GitHub.com", da clic en **Iniciar sesión**. ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-github.png)
5. En el panel de inicio de sesión, haz clic en **Sign in using your browser** (Iniciar sesión usando el navegador). ![Inicio de sesión mediante el enlace de su navegador](/assets/images/help/desktop/windows-sign-in-browser.png)
{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.retrieve-2fa-in-browser %}
{% data reusables.desktop.enter-2fa-in-browser %}
9. Luego de que {% data variables.product.prodname_dotcom %} autentica tu cuenta, vuelve a {% data variables.product.prodname_desktop %}.

### Autenticarse en {% data variables.product.prodname_dotcom %} utilizando tu nombre de usuario y contraseña


{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
5. Para agregar una cuenta a GitHub Enterprise, escribe tus credenciales debajo de "Enterprise server address" (Dirección de servidor empresarial) y luego haz clic en **Continue** (Continuar). ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button-enterprise.png)
6. Para agregar una cuenta GitHub, escribe tus credenciales de GitHub.com y haz clic en **Sign in** (Iniciar sesión). ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button.png)
{% data reusables.desktop.retrieve-2fa %}
{% data reusables.desktop.return-to-desktop %} Si se solicita, escribe tu código 2FA y luego haz clic en **Sign in** (Iniciar sesión). ![La indicación del código 2FA](/assets/images/help/desktop/windows-2fa-code-prompt.png)

{% endwindows %}
