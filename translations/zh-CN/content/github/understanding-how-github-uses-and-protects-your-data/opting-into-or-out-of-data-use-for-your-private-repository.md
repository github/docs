---
title: 选择加入或退出私有仓库的数据使用
intro: '为帮助 {% data variables.product.product_name %} 连接到相关的工具、人员、项目和信息，您可以选择加入私有仓库的数据使用。 如已选择加入私有仓库的数据使用，但不再希望 {% data variables.product.product_name %} 使用您的数据，您可以选择退出。'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
---

### About data use for your private repository

选择加入私有仓库的数据使用后，您可以访问依赖项图，从中可以跟踪仓库的依赖项，在 {% data variables.product.product_name %} 检测到漏洞依赖项时接收安全警报。 更多信息请参阅“[关于依赖项漏洞的安全警报](/articles/about-security-alerts-for-vulnerable-dependencies)”。

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

### 选择加入私有仓库的数据使用

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 "Data services"（数据服务）下，选中 **Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository（允许站点执行此仓库的只读分析）**。 ![允许 {% data variables.product.prodname_dotcom %} 对此仓库执行只读分析的复选框](/assets/images/help/repository/private-repo-data-use-opt-in.png)
4. （可选）选中要为其启用数据使用的任何其他服务旁边的复选框。 ![自带复选框的其他服务列表](/assets/images/help/repository/private-repo-data-use-additional-services.png)

### 选择退出私有仓库的数据使用

{% tip %}

**提示：**要选择退出特定服务的数据使用，请取消选中服务旁边的复选框。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 "Data services"（数据服务）下，取消选中 **Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository（允许站点执行此仓库的只读分析）**。 ![禁止 {% data variables.product.prodname_dotcom %} 对此仓库执行只读分析的复选框](/assets/images/help/repository/private-repo-data-use-opt-out.png)

### 延伸阅读

- "[关于 {% data variables.product.prodname_dotcom %} 对数据的使用](/articles/about-github-s-use-of-your-data)"
- "[查看并更新仓库中有漏洞的依赖项](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- "[管理组织仓库中漏洞依赖项的警报](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)"
