---
title: GitHubへの認証方法
intro: '{{ site.data.variables.product.product_name }}アカウントを{{ site.data.variables.product.prodname_desktop }}に接続してください。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
versions:
  free-pro-team: '*'
---

認証する前には、{{ site.data.reusables.desktop.get-an-account }}

{% mac %}

### Authenticating to {{ site.data.variables.product.prodname_dotcom }} using the browser

{{ site.data.reusables.desktop.mac-select-desktop-menu }}
{{ site.data.reusables.desktop.mac-select-accounts }}
4. To the right of "{{ site.data.variables.product.prodname_dotcom }}," click **Sign In**. ![GitHubのサインインボタン](/assets/images/help/desktop/mac-sign-in-github.png)
5. サインインペインで、**Sign in using your browser**をクリックします。 ![ブラウザリンク経由でのサインイン](/assets/images/help/desktop/mac-sign-in-browser.png)
{{ site.data.reusables.desktop.authenticate-in-browser }}
{{ site.data.reusables.desktop.retrieve-2fa-in-browser }}
{{ site.data.reusables.desktop.enter-2fa-in-browser }}
9. {{ site.data.variables.product.prodname_dotcom }}にアカウントが認証されたら、{{ site.data.variables.product.prodname_desktop }}に戻ります。

### Authenticating to {{ site.data.variables.product.prodname_dotcom }} using your username and password

{{ site.data.reusables.user_settings.password-authentication-deprecation-desktop }}

{{ site.data.reusables.desktop.mac-select-desktop-menu }}
{{ site.data.reusables.desktop.mac-select-accounts }}
{{ site.data.reusables.desktop.choose-product-authenticate }}
5. GitHub Enterpriseアカウントを追加するには、「Enterprise server address」のところに認証情報を入力して**Continue**をクリックします。 ![GitHub EnterpriseのSign Inボタン](/assets/images/help/desktop/mac-sign-in-button-enterprise.png)
6. GitHubアカウントを追加するには、GitHub.comの認証情報を入力して、**Sign in**をクリックします。 ![GitHubのサインインボタン](/assets/images/help/desktop/mac-sign-in-button.png)
{{ site.data.reusables.desktop.retrieve-2fa }}
{{ site.data.reusables.desktop.return-to-desktop }} プロンプトに 2 要素認証コードを入力して [**Sign in**] をクリックします。 ![2FAコードのプロンプト](/assets/images/help/desktop/mac-2fa-code-prompt.png)

{% endmac %}

{% windows %}

### Authenticating to {{ site.data.variables.product.prodname_dotcom }} using the browser

{{ site.data.reusables.desktop.windows-choose-options }}
{{ site.data.reusables.desktop.windows-select-accounts }}
4. To the right of "GitHub.com," click **Sign in**. ![GitHubのサインインボタン](/assets/images/help/desktop/windows-sign-in-github.png)
5. サインインペインで、**Sign in using your browser**をクリックします。 ![ブラウザリンク経由でのサインイン](/assets/images/help/desktop/windows-sign-in-browser.png)
{{ site.data.reusables.desktop.authenticate-in-browser }}
{{ site.data.reusables.desktop.retrieve-2fa-in-browser }}
{{ site.data.reusables.desktop.enter-2fa-in-browser }}
9. {{ site.data.variables.product.prodname_dotcom }}にアカウントが認証されたら、{{ site.data.variables.product.prodname_desktop }}に戻ります。

### Authenticating to {{ site.data.variables.product.prodname_dotcom }} using your username and password


{{ site.data.reusables.user_settings.password-authentication-deprecation-desktop }}

{{ site.data.reusables.desktop.windows-choose-options }}
{{ site.data.reusables.desktop.windows-select-accounts }}
{{ site.data.reusables.desktop.choose-product-authenticate }}
5. GitHub Enterpriseアカウントを追加するには、「Enterprise server address」のところに認証情報を入力して**Continue**をクリックします。 ![GitHub EnterpriseのSign Inボタン](/assets/images/help/desktop/windows-sign-in-button-enterprise.png)
6. GitHubアカウントを追加するには、GitHub.comの認証情報を入力して、**Sign in**をクリックします。 ![GitHubのサインインボタン](/assets/images/help/desktop/windows-sign-in-button.png)
{{ site.data.reusables.desktop.retrieve-2fa }}
{{ site.data.reusables.desktop.return-to-desktop }} プロンプトに 2 要素認証コードを入力して [**Sign in**] をクリックします。 ![2FAコードのプロンプト](/assets/images/help/desktop/windows-2fa-code-prompt.png)

{% endwindows %}
