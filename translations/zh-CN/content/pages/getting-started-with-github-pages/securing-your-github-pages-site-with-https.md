---
title: 使用 HTTPS 保护 GitHub Pages 站点
intro: 'HTTPS 增加一层加密，用于防止其他人窥探或篡改您的站点的流量。 您可对 {% data variables.product.prodname_pages %} 站点强制实施 HTTPS，从而将所有 HTTP 请求透明地重定向到 HTTPS。'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  free-pro-team: '*'
topics:
  - 页面
---

拥有仓库管理员权限的人可对 {% data variables.product.prodname_pages %} 站点实施 HTTPS。

### 关于 HTTPS 和 {% data variables.product.prodname_pages %}

所有 {% data variables.product.prodname_pages %} 站点（包括使用自定义域正确配置的站点）均支持 HTTPS 和 HTTPS 强制实施。 有关自定义域的更多信息，请参阅“[关于自定义域和 {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)”以及“[自定义域和 {% data variables.product.prodname_pages %} 疑难解答](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)”。

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

### 对您的 {% data variables.product.prodname_pages %} 站点强制实施 HTTPS

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. 在 "{% data variables.product.prodname_pages %}" 下，选择 **Enforce HTTPS（实施 HTTPS）**。 ![强制实施 HTTPS 复选框](/assets/images/help/pages/enforce-https-checkbox.png)

### 解决具有混合内容的问题

如果您对 {% data variables.product.prodname_pages %} 站点启用了 HTTPS，但站点的 HTML 仍通过 HTTP 引用图像、CSS 或 JavaScript，则您的站点将提供*混合内容*。 提供混合内容可能会降低站点的安全性，并导致在加载资产时出现问题。

要删除站点的混合内容，请在站点的 HTML 中将 `http://` 更改为 `https://`，确保所有资产都通过 HTTPS 提供。

资产通常位于以下位置：
- 如果您的站点使用 Jekyll，则 HTML 文件可能位于 *_layouts* 文件夹中。
- CSS 通常位于 HTML 文件的 `<head>` 部分。
- JavaScript 通常位于 `<head>` 部分或结束 `</body>` 标记之前。
- 图像通常位于 `<body>` 部分。

{% tip %}

**提示：**如果您在站点的源文件中找不到您的资产，请尝试在文本编辑器或 {% data variables.product.product_name %} 上搜索站点源文件中的 `http`。

{% endtip %}

#### HTML 文件中引用的资产示例

|   前端资源类型   |                                                       HTTP                                                       |                                                       HTTPS                                                        |
|:----------:|:----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|
|    CSS     |                      `<link rel="stylesheet" href="http://example.com/css/main.css">`                      |                      `<link rel="stylesheet" href="https://example.com/css/main.css">`                       |
| JavaScript |            `<script type="text/javascript" src="http://example.com/js/main.js"></script>`            |            `<script type="text/javascript" src="https://example.com/js/main.js"></script>`             |
|     图像     | `<A HREF="http://www.somesite.com"><IMG SRC="http://www.example.com/logo.jpg" alt="Logo"></a>` | `<A HREF="https://www.somesite.com"><IMG SRC="https://www.example.com/logo.jpg" alt="Logo"></a>` |  
