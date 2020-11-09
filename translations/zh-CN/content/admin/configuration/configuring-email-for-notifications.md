---
title: 配置电子邮件通知
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration/
  - /enterprise/admin/articles/configuring-email/
  - /enterprise/admin/articles/troubleshooting-email/
  - /enterprise/admin/articles/email-configuration-and-troubleshooting/
  - /enterprise/admin/user-management/configuring-email-for-notifications
intro: 'To make it easy for users to respond quickly to activity on {% data variables.product.product_name %}, you can configure your enterprise to send email notifications on issue, pull request, and commit comments{% if enterpriseServerVersions contains currentVersion %}, as well as additional settings to allow inbound email replies{% endif %}.'
versions:
  enterprise-server: '*'
  github-ae: '*'
---

如果用户关注的仓库或他们参与的拉取请求或问题有活动，或者用户或他们所在的团队在评论中被 @提及，系统将发送通知电子邮件。

{% if currentVersion == "github-ae@latest" %}
Your dedicated technical account manager in
{% data variables.contact.github_support %} can configure email for notifications to be sent through your SMTP server. Make sure you include the following details in your support request.

- Your SMTP server address
- The port your SMTP server uses to send email
- The domain name that your SMTP server will send with a HELO response, if any
- The type of encryption used by your SMTP server
- The no-reply email address to use in the `From` and `To` field for all notifications

For more information about contacting support, see "[About {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)."
{% else %}
### 配置 SMTP

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. 在页面顶部，单击 **Settings**。 ![Settings 选项卡](/assets/images/enterprise/management-console/settings-tab.png)
3. 在左侧边栏中，单击 **Email**。 ![Email 选项卡](/assets/images/enterprise/management-console/email-sidebar.png)
4. 选择 **Enable email**。 这将同时启用出站和入站电子邮件，不过，要想入站电子邮件正常运行，您还需要按照下文“[配置 DNS 和防火墙设置以允许传入的电子邮件](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)”所述配置您的 DNS 设置。 ![启用出站电子邮件](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. 填写电子邮件服务器设置：
    - 在 **Server address** 字段中，输入您的 SMTP 服务器的地址。
    - 在 **Port** 字段中，输入 SMTP 服务器用于发送电子邮件的端口。
    - 在 **Domain** 字段中，输入您的 SMTP 服务器将随 HELO 响应（如有）发送的域名。
    - 在 **Authentication** 下拉菜单中，选择您的 SMTP 服务器使用的加密类型。
    - 在 **No-reply email address** 字段中，输入要在所有通知电子邮件的 From 和 To 字段中使用的电子邮件地址。

    {% note %}

    **注**：如果您在仓库的 **Services** 电子邮件 web 挂钩中选中 **Send from author** 复选框，则该仓库的出站电子邮件将从作者而不是无回复电子邮件地址发送。 更多信息请参阅“[关于推送到仓库的电子邮件通知](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)。”

    {% endnote %}

6. 如果您想丢弃发送到无回复电子邮件地址的所有传入电子邮件，请选中 **Discard email addressed to the no-reply email address**。 ![用于丢弃发送到无回复电子邮件地址的电子邮件的复选框](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. 在 **Support** 下，选择用于向您的用户提供附加支持的链接类型：
    - **Email**：内部电子邮件地址。
    - **URL**：内部支持站点的链接。 您必须包括 `http://` 或 `https://`。 ![支持电子邮件或 URL](/assets/images/enterprise/management-console/support-email-url.png)
8. [测试电子邮件递送](#testing-email-delivery)。

### 配置 DNS 和防火墙设置以允许传入的电子邮件

如果您希望允许通知的电子邮件回复，则必须配置 DNS 设置。

1. 确保您的 SMTP 服务器可以访问实例上的端口 25。
2. 创建一个指向 `reply.[hostname]` 的 A 记录。 根据您的 DNS 提供商和实例主机配置，您可以创建一个指向 `*.[hostname]` 的 A 记录。
3. 创建一个指向 `reply.[hostname]` 的 MX 记录，以便发送到该域的电子邮件可以路由到实例。
4. 创建一个将 `noreply.[hostname]` 指向 `[hostname]` 的 MX 记录，以便对通知电子邮件中 `cc` 地址的回复可以路由到实例。 更多信息请参阅{% if currentVersion ver_gt "enterprise-server@2.20" %}“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}“[关于电子邮件通知](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}。”

借助 DNS 配置，您现在可以测试设置是否能够正常运行。

### 测试电子邮件递送

1. 在 **Email** 部分的顶部，单击 **Test email settings**。 ![测试电子邮件设置](/assets/images/enterprise/management-console/test-email.png)
2. 在 **Send test email to** 字段中，输入用于接收测试电子邮件的地址。 ![测试电子邮件地址](/assets/images/enterprise/management-console/test-email-address.png)
3. 单击 **Send test email**。 ![发送测试电子邮件](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **提示**：如果在发送测试电子邮件时发生 SMTP 错误（例如即时递送失败或传出邮件配置错误），您将在 Test email settings 对话框中看到这些错误。

  {% endtip %}

4. 如果测试电子邮件失败，请[排查电子邮件设置问题](#troubleshooting-email-delivery)。
5. 当测试电子邮件成功后，在页面的底部单击 **Save settings**。 ![Save settings 按钮](/assets/images/enterprise/management-console/save-settings.png)
6. 等待配置运行完毕。![配置实例](/assets/images/enterprise/management-console/configuration-run.png)

### 排查电子邮件递送问题

#### 创建支持包

如果您无法根据显示的错误消息确定什么地方出错，可以下载包含您的邮件服务器与 {% data variables.product.prodname_ghe_server %} 之间的整个 SMTP 对话的[支持包](/enterprise/{{ currentVersion }}/admin/guides/enterprise-support/providing-data-to-github-support)。 在下载并提取支持包后，请检查 *enterprise-manage-logs/unicorn.log* 中的条目，查看整个 SMTP 对话日志和任何相关错误。

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

* 打开了与 SMTP 服务器的连接 (`Connection opened: smtp.yourdomain.com:587`)。
* 成功连接并选择使用 TLS (`TLS connection started`)。
* 执行了 `login` 身份验证类型 (`<- "AUTH LOGIN\r\n"`)。
* SMTP 服务器以无效为原因拒绝了身份验证 (`-> "535-5.7.1 Username and Password not accepted.`)。

#### 检查 {% data variables.product.product_location %} 日志

如果您需要验证入站电子邮件是否正常运行，可以在实例上检查两个日志文件：验证 */var/log/mail.log* 和 */var/log/mail-replies/metroplex.log*。

*/var/log/mail.log* 可以验证消息是否抵达您的服务器。 下面是一个成功电子邮件回复的示例：

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

*/var/log/mail-replies/metroplex.log* 可以显示入站电子邮件是否正在处理，以便作为回复添加到问题和拉取请求中。 下面是一个成功消息的示例：

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

您将注意到，`metroplex` 会缓存、处理入站消息，然后将文件移动到 `/data/user/incoming-mail/success` 中。

#### 验证 DNS 设置

为了正确处理入站电子邮件，您必须配置有效的 A 记录（或 CNAME）和 MX 记录。 更多信息请参阅“[配置 DNS 和防火墙设置以允许传入的电子邮件](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)”。

#### 检查防火墙或 AWS 安全组设置

如果 {% data variables.product.product_location %} 位于防火墙后或者正在通过 AWS 安全组提供，请确保端口 25 对将电子邮件发送到 `reply@reply.[hostname]` 的所有邮件服务器开放。

#### 联系支持
If you're still unable to resolve the problem, contact

{% data variables.contact.contact_ent_support %}. 请在您的电子邮件中附上 `http(s)://[hostname]/setup/diagnostics` 的输出文件，以便帮助我们排查您的问题。
{% endif %}
