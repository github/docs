---
title: Autenticar a GitHub
intro: 'Conecta tu cuenta de {{ site.data.variables.product.product_name }} a {{ site.data.variables.product.prodname_desktop }}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
versions:
  free-pro-team: '*'
---

Antes de realizar la autenticación, {{ site.data.reusables.desktop.get-an-account }}

{% mac %}

### Autenticarse en {{ site.data.variables.product.prodname_dotcom }} utilizando el buscador

{{ site.data.reusables.desktop.mac-select-desktop-menu }}
{{ site.data.reusables.desktop.mac-select-accounts }}
4. A la derecha de "{{ site.data.variables.product.prodname_dotcom }}", da clic en **Iniciar sesión**. ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-github.png)
5. En el panel de inicio de sesión, haz clic en **Sign in using your browser** (Iniciar sesión usando el navegador). ![Inicio de sesión mediante el enlace de su navegador](/assets/images/help/desktop/mac-sign-in-browser.png)
{{ site.data.reusables.desktop.authenticate-in-browser }}
{{ site.data.reusables.desktop.retrieve-2fa-in-browser }}
{{ site.data.reusables.desktop.enter-2fa-in-browser }}
9. Luego de que {{ site.data.variables.product.prodname_dotcom }} autentica tu cuenta, vuelve a {{ site.data.variables.product.prodname_desktop }}.

### Autenticarse en {{ site.data.variables.product.prodname_dotcom }} utilizando tu nombre de usuario y contraseña

{{ site.data.reusables.user_settings.password-authentication-deprecation-desktop }}

{{ site.data.reusables.desktop.mac-select-desktop-menu }}
{{ site.data.reusables.desktop.mac-select-accounts }}
{{ site.data.reusables.desktop.choose-product-authenticate }}
5. Para agregar una cuenta a GitHub Enterprise, escribe tus credenciales debajo de "Enterprise server address" (Dirección de servidor empresarial) y luego haz clic en **Continue** (Continuar). ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button-enterprise.png)
6. Para agregar una cuenta GitHub, escribe tus credenciales de GitHub.com y haz clic en **Sign in** (Iniciar sesión). ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button.png)
{{ site.data.reusables.desktop.retrieve-2fa }}
{{ site.data.reusables.desktop.return-to-desktop }} Si se solicita, escribe tu código 2FA y luego haz clic en **Sign in** (Iniciar sesión). ![La indicación del código 2FA](/assets/images/help/desktop/mac-2fa-code-prompt.png)

{% endmac %}

{% windows %}

### Autenticarse en {{ site.data.variables.product.prodname_dotcom }} utilizando el buscador

{{ site.data.reusables.desktop.windows-choose-options }}
{{ site.data.reusables.desktop.windows-select-accounts }}
4. A la derecha de "GitHub.com", da clic en **Iniciar sesión**. ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-github.png)
5. En el panel de inicio de sesión, haz clic en **Sign in using your browser** (Iniciar sesión usando el navegador). ![Inicio de sesión mediante el enlace de su navegador](/assets/images/help/desktop/windows-sign-in-browser.png)
{{ site.data.reusables.desktop.authenticate-in-browser }}
{{ site.data.reusables.desktop.retrieve-2fa-in-browser }}
{{ site.data.reusables.desktop.enter-2fa-in-browser }}
9. Luego de que {{ site.data.variables.product.prodname_dotcom }} autentica tu cuenta, vuelve a {{ site.data.variables.product.prodname_desktop }}.

### Autenticarse en {{ site.data.variables.product.prodname_dotcom }} utilizando tu nombre de usuario y contraseña


{{ site.data.reusables.user_settings.password-authentication-deprecation-desktop }}

{{ site.data.reusables.desktop.windows-choose-options }}
{{ site.data.reusables.desktop.windows-select-accounts }}
{{ site.data.reusables.desktop.choose-product-authenticate }}
5. Para agregar una cuenta a GitHub Enterprise, escribe tus credenciales debajo de "Enterprise server address" (Dirección de servidor empresarial) y luego haz clic en **Continue** (Continuar). ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button-enterprise.png)
6. Para agregar una cuenta GitHub, escribe tus credenciales de GitHub.com y haz clic en **Sign in** (Iniciar sesión). ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button.png)
{{ site.data.reusables.desktop.retrieve-2fa }}
{{ site.data.reusables.desktop.return-to-desktop }} Si se solicita, escribe tu código 2FA y luego haz clic en **Sign in** (Iniciar sesión). ![La indicación del código 2FA](/assets/images/help/desktop/windows-2fa-code-prompt.png)

{% endwindows %}
