---
title: Autenticar com o GitHub
intro: 'Conecte sua conta {% data variables.product.product_name %} ao {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
versions:
  free-pro-team: '*'
---

Antes de autenticar, {% data reusables.desktop.get-an-account %}

{% mac %}

### Fazer a autenticação no {% data variables.product.prodname_dotcom %} usando o navegador

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
4. À direita de "{% data variables.product.prodname_dotcom %}," clique **Iniciar sessão**. ![Botão Sign In (Entrar) do GitHub](/assets/images/help/desktop/mac-sign-in-github.png)
5. No painel Sign in (Entrar), clique em **Sign in using your browser** (Entrar via navegador). ![Link Sign in using your browser (Entrar via navegador)](/assets/images/help/desktop/mac-sign-in-browser.png)
{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.retrieve-2fa-in-browser %}
{% data reusables.desktop.enter-2fa-in-browser %}
9. Depois que o {% data variables.product.prodname_dotcom %} autenticar sua conta, volte ao {% data variables.product.prodname_desktop %}.

### Fazer a autenticação no {% data variables.product.prodname_dotcom %} usando seu nome de usuário e senha

{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
5. Para adicionar uma conta do GitHub Enterprise, digite suas credenciais em "Enterprise server address" (Endereço do servidor Enterprise) e clique em **Continue** (Continuar). ![Botão Sign In (Entrar) do GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button-enterprise.png)
6. Para adicionar uma conta do GitHub, digite as credenciais do GitHub.com e clique em **Sign in** (Entrar). ![Botão Sign In (Entrar) do GitHub](/assets/images/help/desktop/mac-sign-in-button.png)
{% data reusables.desktop.retrieve-2fa %}
{% data reusables.desktop.return-to-desktop %} No prompt, insira seu código 2FA e clique em **Sign in** (Entrar). ![Solicitação do código 2FA](/assets/images/help/desktop/mac-2fa-code-prompt.png)

{% endmac %}

{% windows %}

### Fazer a autenticação no {% data variables.product.prodname_dotcom %} usando o navegador

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
4. À direita do "GitHub.com", clique **Iniciar sessão**. ![Botão Sign In (Entrar) do GitHub](/assets/images/help/desktop/windows-sign-in-github.png)
5. No painel Sign in (Entrar), clique em **Sign in using your browser** (Entrar via navegador). ![Link Sign in using your browser (Entrar via navegador)](/assets/images/help/desktop/windows-sign-in-browser.png)
{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.retrieve-2fa-in-browser %}
{% data reusables.desktop.enter-2fa-in-browser %}
9. Depois que o {% data variables.product.prodname_dotcom %} autenticar sua conta, volte ao {% data variables.product.prodname_desktop %}.

### Fazer a autenticação no {% data variables.product.prodname_dotcom %} usando seu nome de usuário e senha


{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
5. Para adicionar uma conta do GitHub Enterprise, digite suas credenciais em "Enterprise server address" (Endereço do servidor Enterprise) e clique em **Continue** (Continuar). ![Botão Sign In (Entrar) do GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button-enterprise.png)
6. Para adicionar uma conta do GitHub, digite as credenciais do GitHub.com e clique em **Sign in** (Entrar). ![Botão Sign In (Entrar) do GitHub](/assets/images/help/desktop/windows-sign-in-button.png)
{% data reusables.desktop.retrieve-2fa %}
{% data reusables.desktop.return-to-desktop %} No prompt, insira seu código 2FA e clique em **Sign in** (Entrar). ![Solicitação do código 2FA](/assets/images/help/desktop/windows-2fa-code-prompt.png)

{% endwindows %}
