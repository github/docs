---
title: 配置 TLS
intro: '您可以在 {% data variables.product.product_location %} 上配置传输层安全 (TLS)，以便使用由可信证书颁发机构签名的证书。'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration/
  - /enterprise/admin/guides/installation/about-tls/
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
versions:
  enterprise-server: '*'
---

### 关于传输层安全

当 {% data variables.product.prodname_ghe_server %} 首次启动时，会启用 TLS（替代了 SSL）并通过自签名证书进行配置。 由于自签名证书不受 Web 浏览器和 Git 客户端的信任，因此这些客户端将报告证书警告，直至您禁用 TLS 或上传由 Let's Encrypt 等可信颁发机构签名的证书。

{% data variables.product.prodname_ghe_server %} 设备将在 SSL 启用时发送 HTTP 严格传输安全标头。 禁用 TLS 会导致用户无法访问设备，因为用户的浏览器将不允许协议降级为 HTTP。 更多信息请参阅 Wikipedia 上的“[HTTP 严格传输安全 (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)”。

{% data reusables.enterprise_installation.terminating-tls %}

要允许用户使用 FIDO U2F 进行双重身份验证，您必须为实例启用 TLS。 更多信息请参阅“[配置双重身份验证](/articles/configuring-two-factor-authentication)”。

### 基本要求

要在生产中使用 TLS，您必须具有由可信证书颁发机构签名的未加密 PEM 格式的证书。

您的证书还需要为“[启用子域隔离](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)”中列出的子域配置使用者可选名称，如果证书已由中间证书颁发机构签名，将需要包含完整的证书链。 更多信息请参阅 Wikipedia 上的“[使用者可选名称](http://en.wikipedia.org/wiki/SubjectAltName)”。

您可以使用 `ghe-ssl-generate-csr` 命令为实例生成证书签名请求 (CSR)。 更多信息请参阅“[命令行实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)”。

### 上传自定义 TLS 证书

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
4. 在“TLS Protocol support”下，选择您想要允许的协议。 ![包含用于选择 TLS 协议的选项的单选按钮](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. 在“Certificate”下，单击 **Choose File**，选择要安装的 TLS 证书或证书链（PEM 格式）。 此文件通常采用 *.pem*、*.crt* 或 *.cer* 扩展名。 ![用于查找 TLS 证书文件的按钮](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. 在“Unencrypted key”下，单击 **Choose File**，选择要安装的 TLS 密钥（PEM 格式）。 此文件通常采用 *.key* 扩展名。 ![用于查找 TLS 密钥文件的按钮](/assets/images/enterprise/management-console/install-tls-key.png)

  {% warning %}

  **警告**：您的 TLS 密钥不得包含密码。 更多信息请参阅“[将密码从密钥文件中移除](/enterprise/{{ currentVersion }}/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)”。

  {% endwarning %}
{% data reusables.enterprise_management_console.save-settings %}

### 关于 Let's Encrypt 支持

Let's Encrypt 是公共证书颁发机构，他们使用 ACME 协议颁发受浏览器信任的免费、自动化 TLS 证书。 您可以在设备上自动获取并续订 Let's Encrypt 证书，无需手动维护。

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

在您启用通过 Let's Encrypt 自动进行 TLS 证书管理后，{% data variables.product.product_location %} 将与 Let's Encrypt 服务器通信，以获取证书。 要续订证书，Let's Encrypt 服务器必须通过入站 HTTP 请求验证已配置域名的控制。

您还可以在 {% data variables.product.product_location %} 上使用 `ghe-ssl-acme` 命令行实用程序自动生成 Let's Encrypt 证书。 更多信息请参阅“[命令行实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-ssl-acme)”。

### 使用 Let's Encrypt 配置 TLS

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
5. 选择 **Enable automation of TLS certificate management using Let's Encrypt**。 ![启用 Let's Encrypt 复选框](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% data reusables.enterprise_management_console.privacy %}
7. 单击 **Request TLS certificate**。 ![Request TLS Certificate 按钮](/assets/images/enterprise/management-console/request-tls-button.png)
8. 单击 **Save configuration**。
