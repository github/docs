{% ifversion fpt or ghec %}

{% note %}

**注：** 本文章适用于 {% data variables.product.prodname_ghe_cloud %}。 要查看 {% data variables.product.prodname_ghe_managed %} 或 {% data variables.product.prodname_ghe_server %} 版本，请使用 **{% data ui.pages.article_version %}** 下拉菜单。

{% endnote %}

{% endif %}

### 端点 URL

REST API 端点{% ifversion ghes %}— [管理控制台](#management-console) API 端点除外—{% endif %} 是以下 URL 的前缀：

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %}
当端点包含 `{enterprise}` 时，将 `{enterprise}` 替换为企业帐户的句柄，该句柄包含在企业设置的 URL 中。 例如，如果您的企业帐户位于 `https://github.com/enterprises/octo-enterprise`，则将 `{enterprise}` 替换为 `octo-enterprises`。
{% endif %}

{% ifversion ghes %}
[管理控制台](#management-console) API 端点是唯一以主机名为前缀的端点：

```shell
http(s)://<em>hostname</em>/
```
{% endif %}
{% ifversion ghae or ghes %}
### 身份验证

{% data variables.product.product_name %} 安装设施的 API 端点接受与 GitHub.com [相同的身份验证方法](/rest/overview/resources-in-the-rest-api#authentication)。 您可以使用 **[OAuth 令牌](/apps/building-integrations/setting-up-and-registering-oauth-apps/)**{% ifversion ghes %}（可使用[授权 API](/rest/reference/oauth-authorizations#create-a-new-authorization) 创建）{% endif %}或**[基本身份验证](/rest/overview/resources-in-the-rest-api#basic-authentication)**来验证自己。 {% ifversion ghes %} OAuth 令牌用于企业特定的端点时必须具有 `site_admin` [OAuth 作用域](/developers/apps/scopes-for-oauth-apps#available-scopes)。{% endif %}

企业管理 API 端点只有经过身份验证的 {% data variables.product.product_name %} 站点管理员可以访问{% ifversion ghes %}，但[管理控制台](#management-console) API 例外，它需要[管理控制台密码](/enterprise/admin/articles/accessing-the-management-console/){% endif %}。

{% endif %}

{% ifversion ghae or ghes %}
### 版本信息

每个 API 的响应标头中都会返回企业的当前版本：`X-GitHub-Enterprise-Version: {{currentVersion}}.0` 您也可以通过调用[元端点](/rest/reference/meta/)来读取当前版本。

{% endif %}