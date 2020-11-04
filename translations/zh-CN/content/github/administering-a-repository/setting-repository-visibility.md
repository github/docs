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
---

### 关于仓库可见性更改

组织所有者可以限制只有组织所有者才能更改仓库可见性。 更多信息请参阅“[限制组织的仓库可见性更改](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)”。

我们建议在您更改仓库可见性之前审查以下注意事项。

#### 将仓库设为私有

   * {% data variables.product.prodname_dotcom %} 将会分离公共仓库的公共复刻并将其放入新的网络中。 公共复刻无法设为私有。 {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}If you change a repository's visibility from internal to private, {% data variables.product.prodname_dotcom %} will remove forks that belong to any user without access to the newly private repository.{% endif %} For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-public-repository-to-a-private-repository)"
   {% if currentVersion == "free-pro-team@latest" %}* 如果对用户帐户或组织使用 {% data variables.product.prodname_free_user %}，有些功能在您将可见性更改为私有后不可用于仓库。 {% data reusables.gated-features.more-info %}
   * 任何已发布的 {% data variables.product.prodname_pages %} 站点都将自动取消发布。 如果您将自定义域添加到 {% data variables.product.prodname_pages %} 站点，应在将仓库设为私有之前删除或更新 DNS 记录，以避免域接管的风险。 更多信息请参阅“[管理 {% data variables.product.prodname_pages %} 网站的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)。
   * {% data variables.product.prodname_dotcom %} 不再在 {% data variables.product.prodname_archive %} 中包含该仓库。 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program) 上存档内容和数据”。{% endif %}
   {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}* Anonymous Git read access is no longer available. 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)”。{% endif %}

#### 将仓库设为公共

   * {% data variables.product.prodname_dotcom %} 将会分离私有复刻并将它们变成独立的私有仓库。 更多信息请参阅“[删除仓库或更改其可见性时，复刻会发生什么变化？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)”
   * 如果您将私有仓库转换为公共仓库作为转向创建开源项目的组成部分， 请参阅[开源指南](http://opensource.guide)以获得有用的提示和指导。{% if currentVersion == "free-pro-team@latest" %}您还可以通过 [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) 参加有关管理开源项目的免费课程。 您的仓库设为公共后，您还可以查看仓库的社区资料以了解项目是否符合支持贡献者的最佳做法。 更多信息请参阅“[查看您的社区资料](/articles/viewing-your-community-profile)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### 更改仓库的可见性

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Danger Zone（危险区域）”下的“Change repository visibility（更改仓库可见性）”右侧，单击 **Change visibility（更改可见性）**。 ![更改可见性按钮](/assets/images/help/repository/repo-change-vis.png)
4. 选择可见性。 ![仓库可见性选项对话框](/assets/images/help/repository/repo-change-select.png)
5. 要验证您是否正在更改正确仓库的可见性，请键入您想要更改其可见性的仓库名称。
6. 单击 **I understand, change repository visibility（我了解，更改仓库可见性）**。 ![确认更改仓库可见性按钮](/assets/images/help/repository/repo-change-confirm.png)

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
