---
title: 请求个人帐户数据的存档
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user_settings.export-data %}'
versions:
  free-pro-team: '*'
---

{% data variables.product.product_name %} 存储您个人帐户活动的仓库和个人资料元数据。 您可以通过 {% data variables.product.prodname_dotcom_the_website %} 上的设置或使用用户迁移 API 导出个人帐户的数据。

有关可供导出的数据 {% data variables.product.product_name %} 存储的更多信息，请参阅“[下载用户迁移存档](/rest/reference/migrations#download-a-user-migration-archive)”和“[关于 {% data variables.product.product_name %} 对数据的使用](/articles/about-github-s-use-of-your-data)”。

当您通过 {% data variables.product.prodname_dotcom_the_website %} 上的设置请求导出个人数据时，{% data variables.product.product_name %} 会将您的个人数据打包到 `tar.gz` 文件中，并向您的主电子邮件地址发送含有下载链接的电子邮件。

默认情况下，下载链接会在七天后过期。 在下载链接过期之前的任何时候，您都可以从用户设置中禁用该链接。 更多信息请参阅“[删除对个人帐户数据存档的访问权限](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)”。

如果您的操作系统无法本机解压缩 `tar.gz` 文件，则可以使用第三方工具解压缩存档的文件。 更多信息请参阅 Opensource.com 上的“[如何解压缩 tar.gz 文件](https://opensource.com/article/17/7/how-unzip-targz-file)”。

生成的 `tar.gz` 文件在您开始数据导出时反映存储的数据。

### 下载个人帐户数据的存档

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. 在“Export account data（导出帐户数据）”下，单击 **Start export（开始导出）**或 **New export（新导出）**。 ![开始个人数据导出按钮突出显示](/assets/images/help/repository/export-personal-data.png) ![新个人数据导出按钮突出显示](/assets/images/help/repository/new-export.png)
4. 导出准备好供下载后，{% data variables.product.product_name %} 将发送下载链接到您的主电子邮件地址。
5. 单击电子邮件中的下载链接并在提示时重新输入密码。
6. 您将被重定向到可以下载的 `tar.gz` 文件。

### 删除个人帐户数据存档的访问权限

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. 要在其过期之前禁用发送到您电子邮件的下载链接，请在“Export account data（导出帐户数据）”下，找到您想要禁用的数据导出下载，然后单击 **Delete（删除）**。 ![删除个人数据导出包按钮突出显示](/assets/images/help/repository/delete-export-personal-account-data.png)
