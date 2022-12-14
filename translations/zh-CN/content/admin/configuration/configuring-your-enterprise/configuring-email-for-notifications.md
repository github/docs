---
title: 配置电子邮件通知
intro: '为了让用户轻松地快速响应 {% data variables.product.product_name %} 上的活动，您可以配置 {% data variables.product.product_location %} 对议题、拉取请求和提交注释发送电子邮件通知。'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration
  - /enterprise/admin/articles/configuring-email
  - /enterprise/admin/articles/troubleshooting-email
  - /enterprise/admin/articles/email-configuration-and-troubleshooting
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
shortTitle: Configure email notifications
ms.openlocfilehash: d50e5dce6c5bdb6acd28f36172b9e8f9c5c09993
ms.sourcegitcommit: 6a266bff4d8c9ee928560c3af45eddd7fb4f3a0c
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/26/2022
ms.locfileid: '147410153'
---
{% ifversion ghae %} 企业所有者可以配置以电子邮件发送通知。
{% endif %}
## <a name="configuring-smtp-for-your-enterprise"></a>为企业配置 SMTP

{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.email-settings %}
4. 选择“启用电子邮件”。 这将同时启用出站和入站电子邮件，不过，要想入站电子邮件正常运行，还需要按照下文“[配置 DNS 和防火墙设置以允许传入的电子邮件](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)”所述配置 DNS 设置。
![启用出站电子邮件](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. 键入 SMTP 服务器的设置。
      - 在“服务器地址”字段中，输入 SMTP 服务器的地址。
      - 在“端口”字段中，输入 SMTP 服务器用于发送电子邮件的端口。
      - 在“域”字段中，输入 SMTP 服务器将随 HELO 响应（如有）发送的域名。
      - 在“身份验证”下拉菜单中选择 SMTP 服务器使用的加密类型。
      - 在“无回复电子邮件地址”字段中，输入要在所有通知电子邮件的“发件人”和“收件人”字段中使用的电子邮件地址。      
6. 如果想放弃发送到无回复电子邮件地址的所有传入电子邮件，请选中“放弃发送到无回复电子邮件地址的电子邮件”。
![用于丢弃发送到无回复电子邮件地址的电子邮件的复选框](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. 在“支持”下，选择用于向用户提供附加支持的链接类型。
    - **电子邮件**：内部电子邮件地址。
    - **URL**：内部支持站点的链接。 必须包含 `http://` 或 `https://`。
  ![支持电子邮件或 URL](/assets/images/enterprise/management-console/support-email-url.png)
8. [测试电子邮件传递](#testing-email-delivery)。
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.email-tab %}
2. 选择“启用电子邮件”。
  ![用于电子邮件设置配置的“启用”复选框](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. 键入电子邮件服务器的设置。
    - 在“服务器地址”字段中，输入 SMTP 服务器的地址。
    - 在“端口”字段中，输入 SMTP 服务器用于发送电子邮件的端口。
    - 在“域”字段中，输入 SMTP 服务器将随 HELO 响应（如有）发送的域名。
    - 在“身份验证”下拉菜单中选择 SMTP 服务器使用的加密类型。
    - 在“无回复电子邮件地址”字段中，输入要在所有通知电子邮件的“发件人”和“收件人”字段中使用的电子邮件地址。
4. 如果想放弃发送到无回复电子邮件地址的所有传入电子邮件，请选中“放弃发送到无回复电子邮件地址的电子邮件”。
  ![用于电子邮件设置配置的“放弃”复选框](/assets/images/enterprise/configuration/ae-discard-email.png)
5. 单击“测试电子邮件设置”。
  ![用于邮件设置配置的“测试邮件设置”按钮](/assets/images/enterprise/configuration/ae-test-email.png)
6. 在“发送测试电子邮件到”下，请输入测试电子邮件要发送到的电子邮件地址，然后单击“发送测试电子邮件”。
  ![用于邮件设置配置的“发送测试电子邮件”按钮](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. 单击“ **保存**”。
  ![用于企业支持联系人配置的“保存”按钮](/assets/images/enterprise/configuration/ae-save.png) {% endif %}

{% ifversion ghes %}
## <a name="testing-email-delivery"></a>测试电子邮件递送

1. 在“电子邮件”部分的顶部，单击“测试电子邮件设置” 。
![测试电子邮件设置](/assets/images/enterprise/management-console/test-email.png)
2. 在“发送电子邮件到”字段中，输入用于接收测试电子邮件的地址。
![测试电子邮件地址](/assets/images/enterprise/management-console/test-email-address.png)
3. 单击“发送测试电子邮件”。
![发送测试电子邮件](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  提示：如果在发送测试电子邮件时发生 SMTP 错误（例如即时递送失败或传出邮件配置错误），将在“测试电子邮件设置”对话框中看到这些错误。

  {% endtip %}

4. 如果测试电子邮件失败，请[排查电子邮件设置问题](#troubleshooting-email-delivery)。
5. 当测试电子邮件成功后，在页面的底部单击“保存设置”。
![“保存设置”按钮](/assets/images/enterprise/management-console/save-settings.png) {% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% ifversion require-tls-for-smtp %}
## <a name="enforcing-tls-for-smtp-connections"></a>对 SMTP 连接强制实施 TLS

可以对所有传入的 SMTP 连接强制实施 TLS 加密，这有助于满足 ISO-27017 认证要求。

{% data reusables.enterprise_site_admin_settings.email-settings %}
1. 在“身份验证”下，选择“强制实施 TLS 身份验证(建议)”。

   ![“强制实施 TLS 身份验证(建议)”复选框的屏幕截图](/assets/images/enterprise/configuration/enforce-tls-for-smtp-checkbox.png){% data reusables.enterprise_management_console.save-settings %} {% endif %}

## <a name="configuring-dns-and-firewall-settings-to-allow-incoming-emails"></a>配置 DNS 和防火墙设置以允许传入的电子邮件

如果您希望允许通知的电子邮件回复，则必须配置 DNS 设置。

1. 确保您的 SMTP 服务器可以访问实例上的端口 25。
2. 创建指向 `reply.[hostname]` 的 A 记录。 根据 DNS 提供商和实例主机配置，可以创建指向 `*.[hostname]` 的单个 A 记录。
3. 创建一个指向 `reply.[hostname]` 的 MX 记录，以便发送到该域的电子邮件可以路由到实例。
4. 创建一个将 `noreply.[hostname]` 指向 `[hostname]` 的 MX 记录，以便对通知电子邮件中 `cc` 地址的回复可以路由到实例。 有关详细信息，请参阅 {% ifversion ghes %}“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}”[关于电子邮件通知](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}。”

## <a name="troubleshooting-email-delivery"></a>排查电子邮件递送问题

### <a name="create-a-support-bundle"></a>创建支持包

如果无法根据显示的错误消息确定什么地方出错，可以下载包含邮件服务器与 {% data variables.product.prodname_ghe_server %} 之间的整个 SMTP 对话的[支持包](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)。 在下载并提取支持捆绑包后，请检查 enterprise-manage-logs/unicorn.log 中的条目，查看整个 SMTP 对话日志和任何相关错误。

该独角兽日志应以类似于下面所示的方式显示事务：

```shell
This is a test email generated from https://10.0.0.68/setup/settings
Connection opened: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Ready to start TLS\r\n"
TLS connection started
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Username and Password not accepted. Learn more at\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

此日志显示该设备：

* 打开与 SMTP 服务器的连接 (`Connection opened: smtp.yourdomain.com:587`)。
* 成功连接并选择使用 TLS (`TLS connection started`)。
* 执行 `login` 身份验证类型 (`<- "AUTH LOGIN\r\n"`)。
* SMTP 服务器拒绝无效身份验证 (`-> "535-5.7.1 Username and Password not accepted.`)。

### <a name="check--data-variablesproductproduct_location--logs"></a>检查 {% data variables.product.product_location %} 日志

如果需要验证入站电子邮件是否正常运行，可以在实例上检查两个日志文件：验证 /var/log/mail.log 和 /var/log/mail-replies/metroplex.log 。

/var/log/mail.log 可以验证消息是否送达服务器。 下面是一个成功电子邮件回复的示例：

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

请注意，客户端先连接，然后队列变成活动状态。 接着，消息递送，客户端从队列中移除，会话断开连接。

/var/log/mail-replies/metroplex.log 可以显示入站电子邮件是否正在处理，以便作为回复添加到问题和拉取请求中。 下面是一个成功消息的示例：

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

你将注意到，`metroplex` 会捕获并处理入站消息，然后将文件移动到 `/data/user/incoming-mail/success`。{% endif %}

### <a name="verify-your-dns-settings"></a>验证 DNS 设置

为了正确处理入站电子邮件，您必须配置有效的 A 记录（或 CNAME）和 MX 记录。 有关详细信息，请参阅“[配置 DNS 和防火墙设置，以允许传入电子邮件](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)”。

### <a name="check-firewall-or-aws-security-group-settings"></a>检查防火墙或 AWS 安全组设置

如果 {% data variables.product.product_location %} 位于防火墙后或者正在通过 AWS 安全组提供，请确保端口 25 对将电子邮件发送到 `reply@reply.[hostname]` 的所有邮件服务器开放。

### <a name="contact-support"></a>联系支持人员
{% ifversion ghes %}如果仍然无法解决问题，请联系 {% data variables.contact.contact_ent_support %}。 请在电子邮件中附上 `http(s)://[hostname]/setup/diagnostics` 的输出文件，便于我们助你排查问题。
{% elsif ghae %} 可以联系 {% data variables.contact.github_support %} 寻求帮助，以配置通过 SMTP 服务器发送通知的电子邮件。 有关详细信息，请参阅“[从 {% data variables.contact.github_support %} 获取帮助](/admin/enterprise-support/receiving-help-from-github-support)”。
{% endif %}
