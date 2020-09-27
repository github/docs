---
title: 向 GitHub 验证
intro: '将您的 {{ site.data.variables.product.product_name }} 帐户连接至 {{ site.data.variables.product.prodname_desktop }}。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
versions:
  free-pro-team: '*'
---

在进行身份验证之前，{{ site.data.reusables.desktop.get-an-account }}

{% mac %}

### 使用浏览器向 {{ site.data.variables.product.prodname_dotcom }} 验证

{{ site.data.reusables.desktop.mac-select-desktop-menu }}
{{ site.data.reusables.desktop.mac-select-accounts }}
4. 在“{{ site.data.variables.product.prodname_dotcom }}”右边单击 **Sign In（登录）**。 ![GitHub 的登录按钮](/assets/images/help/desktop/mac-sign-in-github.png)
5. 在 Sign in（登录）窗格中，单击 **Sign in using your browser（使用浏览器登录）**。 ![使用浏览器链接登录](/assets/images/help/desktop/mac-sign-in-browser.png)
{{ site.data.reusables.desktop.authenticate-in-browser }}
{{ site.data.reusables.desktop.retrieve-2fa-in-browser }}
{{ site.data.reusables.desktop.enter-2fa-in-browser }}
9. 在 {{ site.data.variables.product.prodname_dotcom }} 验证帐户后，返回到 {{ site.data.variables.product.prodname_desktop }}。

### 使用您的用户名和密码向 {{ site.data.variables.product.prodname_dotcom }} 验证

{{ site.data.reusables.user_settings.password-authentication-deprecation-desktop }}

{{ site.data.reusables.desktop.mac-select-desktop-menu }}
{{ site.data.reusables.desktop.mac-select-accounts }}
{{ site.data.reusables.desktop.choose-product-authenticate }}
5. 要添加 GitHub Enterprise 帐户，请在“Enterprise server address（企业服务器地址）”下键入您的凭据，然后单击 **Continue（继续）**。 ![GitHub Enterprise 的登录按钮](/assets/images/help/desktop/mac-sign-in-button-enterprise.png)
6. 要添加 GitHub 帐户，请键入 GitHub.com 凭据，然后单击 **Sign in（登录）**。 ![GitHub 的登录按钮](/assets/images/help/desktop/mac-sign-in-button.png)
{{ site.data.reusables.desktop.retrieve-2fa }}
{{ site.data.reusables.desktop.return-to-desktop }} 在提示时，输入您的 2FA 代码，然后单击 **Sign in（登录）**。 ![2FA 代码提示](/assets/images/help/desktop/mac-2fa-code-prompt.png)

{% endmac %}

{% windows %}

### 使用浏览器向 {{ site.data.variables.product.prodname_dotcom }} 验证

{{ site.data.reusables.desktop.windows-choose-options }}
{{ site.data.reusables.desktop.windows-select-accounts }}
4. 在 "GitHub.com" 右边单击 **Sign in（登录）**。 ![GitHub 的登录按钮](/assets/images/help/desktop/windows-sign-in-github.png)
5. 在 Sign in（登录）窗格中，单击 **Sign in using your browser（使用浏览器登录）**。 ![使用浏览器链接登录](/assets/images/help/desktop/windows-sign-in-browser.png)
{{ site.data.reusables.desktop.authenticate-in-browser }}
{{ site.data.reusables.desktop.retrieve-2fa-in-browser }}
{{ site.data.reusables.desktop.enter-2fa-in-browser }}
9. 在 {{ site.data.variables.product.prodname_dotcom }} 验证帐户后，返回到 {{ site.data.variables.product.prodname_desktop }}。

### 使用您的用户名和密码向 {{ site.data.variables.product.prodname_dotcom }} 验证


{{ site.data.reusables.user_settings.password-authentication-deprecation-desktop }}

{{ site.data.reusables.desktop.windows-choose-options }}
{{ site.data.reusables.desktop.windows-select-accounts }}
{{ site.data.reusables.desktop.choose-product-authenticate }}
5. 要添加 GitHub Enterprise 帐户，请在“Enterprise server address（企业服务器地址）”下键入您的凭据，然后单击 **Continue（继续）**。 ![GitHub Enterprise 的登录按钮](/assets/images/help/desktop/windows-sign-in-button-enterprise.png)
6. 要添加 GitHub 帐户，请键入 GitHub.com 凭据，然后单击 **Sign in（登录）**。 ![GitHub 的登录按钮](/assets/images/help/desktop/windows-sign-in-button.png)
{{ site.data.reusables.desktop.retrieve-2fa }}
{{ site.data.reusables.desktop.return-to-desktop }} 在提示时，输入您的 2FA 代码，然后单击 **Sign in（登录）**。 ![2FA 代码提示](/assets/images/help/desktop/windows-2fa-code-prompt.png)

{% endwindows %}
