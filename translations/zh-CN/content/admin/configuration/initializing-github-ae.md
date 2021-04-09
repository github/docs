---
title: 初始化 GitHub AE
intro: '要让您的企业准备好使用，您可以完成 {% data variables.product.product_name %} 的初始配置。'
versions:
  github-ae: '*'
---

### 关于初始化

在初始化企业之前，必须购买 {% data variables.product.product_name %}。 更多信息请联系 {% data variables.contact.contact_enterprise_sales %}。

在购买 {% data variables.product.product_name %} 后，我们会要求您提供想要初始化企业的个人的电子邮件地址和用户名。 您在 {% data variables.contact.enterprise_support %} 中的专用技术客户经理将为企业所有者创建一个帐户，并向企业所有者发送一封电子邮件以登录 {% data variables.product.product_name %} 并完成初始化。 确保您提供的信息与 IdP 中的预期企业所有者信息相匹配。 有关企业所有者的更多信息，请参阅“[企业中的角色](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-owner)”。

在初始化期间，企业所有者将命名企业、配置 SAML SSO、为企业中的所有组织创建策略以及为用户配置支持联系人。

### 基本要求

{% note %}

**注**：在开始初始化之前，请将 {% data variables.product.prodname_ghe_managed %} 的初始用户名和密码安全地存储在密码管理器中。 {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

1. 要初始化 {% data variables.product.product_location %}，您必须具有 SAML 身份提供程序 (Idp)。 {% data reusables.saml.ae-uses-saml-sso %} 在初始化过程中将您的 IdP 连接到企业，您应该具有您的 IdP 实体 ID (SSO) URL、发行者 ID URL 和公共签名证书（Base64 编码）。 更多信息请参阅“[关于企业的身份和访问权限管理](/admin/authentication/about-identity-and-access-management-for-your-enterprise)”。

    {% note %}

    **注**：{% data reusables.saml.create-a-machine-user %}

    {% endnote %}

2. {% data reusables.saml.assert-the-administrator-attribute %}

### 登录并命名企业

1. 按照欢迎电子邮件中的说明联系您的企业。
2. 在“Change password（更改密码）”下键入您的凭据，然后单击 **Change password（更改密码）**。
3. 在“What would you like your enterprise account to be named?（您要将企业帐户命名为什么？）”下，键入企业的名称，然后单击 **Save and continue（保存并继续）**。 ![用于命名企业的"Save and continue（保存并继续）"按钮](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

### 将 IdP 连接到企业

要配置 {% data variables.product.product_name %} 的身份验证，您必须提供包含 SAML IdP 详细信息的 {% data variables.product.product_name %}。 {% data variables.product.company_short %} 建议使用 Azure AD 作为您的 IdP。 更多信息请参阅“[使用身份提供程序配置身份验证和预配](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)”。

1. 在“Set up your identity provider（设置身份提供程序）”右侧，单击 **Configure（配置）**。 ![用于 IdP 配置的"Configure（配置）"按钮](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. 在“Sign on URL（登录 URL）”下，复制并粘贴 SAML IdP 的 URL。 ![SAML IDP 登录 URL 的文本字段](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. 在“Issuer（发行机构）”下，复制并粘贴 SAML IdP 的发行机构 URL。 ![SAML IdP 发行机构 URL 的文本字段](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. 在“Public certificate（公共证书）”下，复制并粘贴 SAML IdP 的公共证书。 ![SAML IdP 公共证书的文本字段](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. 单击 **Test SAML configuration（测试 SAML 配置）** 以确保您输入的信息是正确的。 !["Test SAML configuration（测试 SAML 配置）"按钮](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. 单击 **Save（保存）**。 ![用于 IdP 配置的"Save（保存）"按钮](/assets/images/enterprise/configuration/ae-save.png)

### 设置企业策略

配置策略将为企业的仓库和组织管理设置限制。 这些可以在初始化过程后重新配置。

1. 在“Set your enterprise policies（设置企业策略）”右侧，单击 **Configure（配置）**。 ![用于策略配置的"Configure（配置）"按钮](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. 在“Default Repository Permissions（默认仓库权限）”下，使用下拉菜单，并单击企业中仓库的默认权限级别。 如果某人可通过多种途径访问组织（个人访问、通过团队访问或作为组织成员访问），则最高的项目板权限级别将覆盖任何较低的权限级别。 （可选）要允许企业内的组织设置其默认仓库权限，请单击 **No policy（无策略）** ![默认仓库权限选项的下拉菜单](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)
3. 在“Repository creation（仓库创建）”下，选择是否允许会员创建仓库. （可选）要允许企业内的组织设置权限，请单击 **No policy（无策略）** ![用于企业策略配置的"Members can create repositories（成员可以创建仓库）"按钮](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. 在“Repository forking（仓库复刻）”下，选择是否允许私有和内部仓库复刻。 （可选）要允许企业内的组织设置权限，请单击 **No policy（无策略）** ![仓库复刻权限选项的下拉菜单](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)
5. 在“Repository invitations（仓库邀请）”下，选择成员或组织所有者是否可以邀请合作者进入仓库。 （可选）要允许企业内的组织设置权限，请单击 **No policy（无策略）** ![仓库邀请权限选项的下拉菜单](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)
6. 在“Default repository visibility（默认仓库可见性）”下，使用下拉菜单并单击新仓库的默认可见性设置。 ![默认仓库可见性选项的下拉菜单](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. 在“Users can create organizations（用户可以创建组织）”下，使用下拉菜单来启用或禁用企业成员创建组织。 ![组织创建权限选项的下拉菜单](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. 在“Force pushes（强制推送）”下，使用下拉菜单选择是允许还是阻止强制推送。 ![强制推送配置选项的下拉菜单](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. 在“Git SSH access（Git SSH 访问）”下，使用下拉菜单并选择是否为企业中所有仓库启用 Git SSH 访问。 ![Git SSH 访问选项的下拉菜单](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. 单击 **Save（保存）** ![用于企业策略配置的"Save（保存）"按钮](/assets/images/enterprise/configuration/ae-save.png)
11. （可选）要重置所有选项，请单击“Reset to default policies（重置为默认策略）”。 ![重置所有默认策略的链接](/assets/images/enterprise/configuration/ae-reset-default-options.png)

### 设置内部支持联系人

您可以配置用户联系内部支持团队的方法。 这可以在初始化过程后重新配置。

1. 在“Internal support contact（内部支持联系人）”右侧，单击 **Configure（配置）**。 ![用于内部支持联系人配置的"Configure（配置）"按钮](/assets/images/enterprise/configuration/ae-support-configure.png)
2. 在“Internal support contact（内部支持联系人）”下，选择您企业的用户通过网址或电子邮件地址联系支持的方法。 然后，键入支持联系信息。 ![内部支持联系人 URL 的文本字段](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. 单击 **Save（保存）**。 ![用于企业支持联系人配置的"Save（保存）"按钮](/assets/images/enterprise/configuration/ae-save.png)

### 设置电子邮件设置

一旦初始化，您便可在初始化过程后重新配置任何设置。 更多信息请参阅“[配置电子邮件通知](/admin/configuration/configuring-email-for-notifications)”。

1. 在“Configure email settings（配置电子邮件设置）”右侧，单击 **Configure（配置）**。 ![用于电子邮件设置配置的"Configure（配置）"按钮](/assets/images/enterprise/configuration/ae-email-configure.png)
2. 选择 **Enable email**。 这将启用出站和入站电子邮件，但是，为使入站电子邮件运行，您还需要配置 DNS 设置。 更多信息请参阅“[配置 DNS 和防火墙设置以允许传入的电子邮件](/admin/configuration/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails)”。 ![用于电子邮件设置配置的"Enable（启用）"复选框](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. 完成电子邮件服务器设置：
  - 在 **Server address** 字段中，输入您的 SMTP 服务器的地址。
  - 在 **Port** 字段中，输入 SMTP 服务器用于发送电子邮件的端口。
  - 在 **Domain** 字段中，输入您的 SMTP 服务器将随 HELO 响应（如有）发送的域名。
  - 在 **Authentication** 下拉菜单中，选择您的 SMTP 服务器使用的加密类型。
  - 在 **No-reply email address** 字段中，输入要在所有通知电子邮件的 From 和 To 字段中使用的电子邮件地址。

4. 如果您想丢弃发送到无回复电子邮件地址的所有传入电子邮件，请选中 **Discard email addressed to the no-reply email address**。 ![用于电子邮件设置配置的"Discard（放弃）"复选框](/assets/images/enterprise/configuration/ae-discard-email.png)
5. 单击 **Test email settings（测试电子邮件设置）**。 ![用于电子邮件设置配置的"Test email settings（测试电子邮件设置）"按钮](/assets/images/enterprise/configuration/ae-test-email.png)
6. 在“Send test email to（发送测试电子邮件到）”下，请输入测试电子邮件要发送到的电子邮件地址，然后单击 **Send test email（发送测试电子邮件）**。 ![用于电子邮件设置配置的"Send test email（发送测试电子邮件）"按钮](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. 单击 **Save（保存）**。 ![用于企业支持联系人配置的"Save（保存）"按钮](/assets/images/enterprise/configuration/ae-save.png)
