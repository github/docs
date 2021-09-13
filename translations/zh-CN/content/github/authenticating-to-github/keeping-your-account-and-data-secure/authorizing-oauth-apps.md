---
title: 授权 OAuth 应用程序
intro: '您可以将 {% data variables.product.product_name %} 身份连接到使用 OAuth 的第三方应用程序。 在授权 {% data variables.product.prodname_oauth_app %} 时，应确保您信任应用程序，查阅开发者是谁，并查阅应用程序要访问的信息类型。'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

当 {% data variables.product.prodname_oauth_app %} 要通过您的 {% data variables.product.product_name %} 帐户识别您时，您会看到一个页面，其中包含应用程序开发者信息，以及申请的特定数据列表。

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**提示：**您必须[验证电子邮件地址](/articles/verifying-your-email-address)，然后才可授权 {% data variables.product.prodname_oauth_app %}。

{% endtip %}

{% endif %}

### {% data variables.product.prodname_oauth_app %} 访问

{% data variables.product.prodname_oauth_app %} 可以*读取*或*写入*您的 {% data variables.product.product_name %} 数据。

- **读取权限**仅允许应用程序*查看*您的数据。
- **写入权限**允许应用程序*更改*您的数据。

{% tip %}

**提示：**{% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

#### 关于 OAuth 范围

*范围*是 {% data variables.product.prodname_oauth_app %} 可以申请访问公共及非公共数据的权限组。

当您想使用集成了 {% data variables.product.product_name %} 的 {% data variables.product.prodname_oauth_app %} 时，该应用程序可让您了解需要的数据访问权限类型。 如果您授予应用程序访问权限，则应用程序将能代您执行操作，例如读取或修改数据。 例如，如果您要使用申请 `user:email` 范围的应用程序，则该应用程序对您的私有电子邮件地址具有只读权限。 更多信息请参阅“[关于 {% data variables.product.prodname_oauth_app %} 的范围](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)”。

{% tip %}

**注：**目前，您无法将源代码访问范围设为只读。

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

#### 申请的数据类型

{% data variables.product.prodname_oauth_app %} 可以申请多种类型的数据。

| 数据类型   | 描述                                                                                              |
| ------ | ----------------------------------------------------------------------------------------------- |
| 提交状态   | 您可以授权应用程序报告您的提交状态。 提交状态访问权限允许应用程序确定对特定提交的构建是否成功。 应用程序无法访问您的代码，但可以读取和写入特定提交的状态信息。                |
| 部署     | 部署状态访问权限允许应用程序根据公共和私有仓库的特定提交确定部署是否成功。 应用程序无法访问您的代码。                                             |
| Gist   | [Gist](https://gist.github.com) 访问权限允许应用程序读取或写入公共和机密 Gist。                                      |
| 挂钩     | [Web 挂钩](/webhooks)访问权限允许应用程序读取或写入您管理的仓库中的挂钩配置。                                                 |
| 通知     | 通知访问权限允许应用程序读取您的 {% data variables.product.product_name %} 通知，如议题和拉取请求的评论。 但应用程序仍然无法访问仓库中的任何内容。 |
| 组织和团队  | 组织和团队访问权限允许应用程序访问并管理组织和团队成员资格。                                                                  |
| 个人用户数据 | 用户数据包括您的用户个人资料中的信息，例如您的姓名、电子邮件地址和地点。                                                            |
| 仓库     | 仓库信息包括贡献者的姓名、您创建的分支以及仓库中的实际文件。 应用程序可以申请访问用户级别的公共或私有仓库。                                          |
| 仓库删除   | 应用程序可以申请删除您管理的仓库，但无法访问您的代码。                                                                     |

### 申请更新的权限

当 {% data variables.product.prodname_oauth_app %} 申请新的访问权限时，将会通知其当前权限与新权限之间的差异。

{% if currentVersion == "free-pro-team@latest" %}

### {% data variables.product.prodname_oauth_app %} 和组织

当您授权 {% data variables.product.prodname_oauth_app %} 访问您的个人用户帐户时，您还会看到该授权对您所在的每个组织的影响。

- **对于*具有* {% data variables.product.prodname_oauth_app %} 访问限制的组织，您可以申请组织管理员批准应用程序用于该组织。** 如果组织不批准应用程序，则应用程序只能访问组织的公共资源。 如果您是组织管理员，便可自己[批准应用程序](/articles/approving-oauth-apps-for-your-organization)。

- **对于*没有* {% data variables.product.prodname_oauth_app %} 访问限制的组织，应用程序将自动获得访问组织资源的授权。** 因此，在批准 {% data variables.product.prodname_oauth_app %} 访问您的个人帐户资源以及任何组织资源时应谨慎。

如果您属于任何实施 SAML 单点登录的组织，则在每次授权 {% data variables.product.prodname_oauth_app %} 时每个组织都必须有一个活动的 SAML 会话。

### 延伸阅读

- "[关于 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/about-oauth-app-access-restrictions)"
- "[{% data variables.product.prodname_marketplace %} support](/articles/github-marketplace-support)"

{% endif %}
