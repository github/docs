---
title: 设置仓库可见性
intro: 您可选择能够查看仓库的人员。
redirect_from:
  - /articles/making-a-private-repository-public/
  - /articles/making-a-public-repository-private/
  - /articles/converting-a-public-repo-to-a-private-repo/
  - /articles/setting-repository-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### 关于仓库可见性更改

组织所有者可以限制只有组织所有者才能更改仓库可见性。 更多信息请参阅“[限制组织的仓库可见性更改](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)”。

我们建议在您更改仓库可见性之前审查以下注意事项。

#### 将仓库设为私有
{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
* {% data variables.product.product_name %} 将会分离公共仓库的公共复刻并将其放入新的网络中。 公共复刻无法设为私有。{% endif %}
* 如果您将仓库的可见性从内部更改为私有， {% data variables.product.prodname_dotcom %} 将删除属于任何没有新私有仓库访问权限的用户的复刻。 {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}任何复刻的可见性也将更改为私有。{% elsif currentVersion == "github-ae@latest" %}如果内部仓库有任何复刻，则复刻的可见性已经是私有的。{% endif %}更多信息请参阅“[删除仓库或更改其可见性时，复刻会发生什么变化？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)”{% if currentVersion == "free proteam@latest" %}
* 如果对用户帐户或组织使用 {% data variables.product.prodname_free_user %}，有些功能在您将可见性更改为私有后不可用于仓库。 {% data reusables.gated-features.more-info %}{% endif %}
* 任何已发布的 {% data variables.product.prodname_pages %} 站点将自动取消发布。{% if currentVersion == "free-pro-team@latest" %} 如果将自定义域添加到 {% data variables.product.prodname_pages %} 站点，应先删除或更新 DNS 记录后再将仓库设为私有，以避免域接管的风险。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 站点的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_dotcom %} 不再在 {% data variables.product.prodname_archive %} 中包含该仓库。 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上存档内容和数据](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)”。{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_GH_advanced_security %} 功能，例如 {% data variables.product.prodname_code_scanning %}，将停止工作，除非拥有仓库的组织具有 {% data variables.product.prodname_advanced_security %} 许可证和充分的备用席位。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% if enterpriseServerVersions contains currentVersion %}
* 匿名 Git 读取权限不再可用。 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### 将仓库设为内部

{% note %}

**注：**{% data reusables.gated-features.internal-repos %}

{% endnote %}

* 仓库的任何复刻都将保留在仓库网络中， {% data variables.product.product_name %} 维护根仓库与复刻之间的关系。 更多信息请参阅“[删除仓库或更改其可见性时，复刻会发生什么变化？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)”

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### 将仓库设为公共

* {% data variables.product.product_name %} 将会分离私有复刻并将它们变成独立的私有仓库。 更多信息请参阅“[删除仓库或更改其可见性时，复刻会发生什么变化？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)”{% if currentVersion == "free-pro-team@latest" %}
* 如果在创建开源项目时将私有仓库转换为公共仓库，请参阅[开放源码指南](http://opensource.guide)以了解有用的提示和指南。 您还可以通过 [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) 免费学习管理开源项目的课程。 您的仓库设为公共后，您还可以查看仓库的社区资料以了解项目是否符合支持贡献者的最佳做法。 更多信息请参阅“[查看您的社区资料](/articles/viewing-your-community-profile)”。
* 仓库将自动获得对 {% data variables.product.prodname_GH_advanced_security %} 功能的使用权限。

有关改善仓库安全性的信息，请参阅“[关于保护仓库](/github/administering-a-repository/about-securing-your-repository)”。{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### 更改仓库的可见性

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Danger Zone（危险区域）”下的“Change repository visibility（更改仓库可见性）”右侧，单击 **Change visibility（更改可见性）**。 ![更改可见性按钮](/assets/images/help/repository/repo-change-vis.png)
4. 选择可见性。
{% if currentVersion == "free-pro-team@latest" %}
   ![仓库可见性选项对话框](/assets/images/help/repository/repo-change-select.png){% else %}
![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. 要验证您是否正在更改正确仓库的可见性，请键入您想要更改其可见性的仓库名称。
6. 单击 **I understand, change repository visibility（我了解，更改仓库可见性）**。
{% if currentVersion == "free-pro-team@latest" %}
   ![确认更改仓库可见性按钮](/assets/images/help/repository/repo-change-confirm.png){% else %}
![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}

### 将仓库设为私有

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Danger Zone（危险区域）”下“Make this repository private（将此仓库设为私有）”旁边，单击 **Make private（设为私有）**。 ![设为私有按钮](/assets/images/help/repository/repo-makeprivate.png)
4. 阅读关于将仓库设为私有的警告。 ![警告弹出窗口](/assets/images/help/repository/repo-privateconfirm.png)
5. 输入您要设为私有的仓库的名称，例如 `accountname/reponame`。
6. 单击 **I understand, make this repository private（我已了解，请将此仓库设为私有）**。

### 将仓库设为公共

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Danger Zone（危险区域）”下“Make this repository public（将此仓库设为公共）”旁边，单击 **Make public（设为公共）**。 ![设为公共按钮](/assets/images/help/repository/repo-makepublic.png)
4. 阅读关于将仓库设为公共的警告。 ![含有将私有仓库设为公共相关信息的弹出窗口](/assets/images/help/repository/repo-publicconfirm.png)
5. 输入您要设为公共的仓库的名称，例如 `accountname/reponame`。
6. 单击 **I understand, make this repository public（我已了解，请将此仓库设为公共）**。

{% if currentVersion ver_gt "enterprise-server@2.19" %}
### 将仓库设为内部

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Danger Zone（危险区域）”下“Make this repository internal（将此仓库设为内部）”旁边，单击 **Make internal（设为内部）**。 ![设为内部按钮](/assets/images/help/repository/repo-makeinternal.png)
4. 阅读关于将仓库设为内部的警告。 ![警告弹出窗口](/assets/images/help/repository/repo-internalconfirm.png)
5. 输入您要设为内部的仓库的名称，例如 `accountname/reponame`。
6. 单击 **I understand, make this repository internal（我已了解，请将此仓库设为内部）**。
{% endif %}

{% endif %}

### 延伸阅读
- "[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
