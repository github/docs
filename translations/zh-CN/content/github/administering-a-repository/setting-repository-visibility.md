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
{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
* {% data variables.product.product_name %} 将会分离公共仓库的公共复刻并将其放入新的网络中。 Public forks are not made private.{% endif %}
* If you change a repository's visibility from internal to private, {% data variables.product.prodname_dotcom %} will remove forks that belong to any user without access to the newly private repository. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}The visibility of any forks will also change to private.{% elsif currentVersion == "github-ae@latest" %}If the internal repository has any forks, the visibility of the forks is already private.{% endif %} For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"{% if currentVersion == "free-pro-team@latest" %}
* If you're using {% data variables.product.prodname_free_user %} for user accounts or organizations, some features won't be available in the repository after you change the visibility to private. {% data reusables.gated-features.more-info %}{% endif %}
* Any published {% data variables.product.prodname_pages %} site will be automatically unpublished.{% if currentVersion == "free-pro-team@latest" %} If you added a custom domain to the {% data variables.product.prodname_pages %} site, you should remove or update your DNS records before making the repository private, to avoid the risk of a domain takeover. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_dotcom %} 不再在 {% data variables.product.prodname_archive %} 中包含该仓库。 For more information, see "[About archiving content and data on {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."{% endif %}{% if enterpriseServerVersions contains currentVersion %}
* Anonymous Git read access is no longer available. 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### 将仓库设为内部

{% note %}

**注：**{% data reusables.gated-features.internal-repos %}

{% endnote %}

* Any forks of the repository will remain in the repository network, and {% data variables.product.product_name %} maintains the relationship between the root repository and the fork. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### 将仓库设为公共

* {% data variables.product.product_name %} will detach private forks and turn them into a standalone private repository. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% if currentVersion == "free-pro-team@latest" %}
* If you're converting your private repository to a public repository as part of a move toward creating an open source project, see the [Open Source Guides](http://opensource.guide) for helpful tips and guidelines. You can also take a free course on managing an open source project with [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). 您的仓库设为公共后，您还可以查看仓库的社区资料以了解项目是否符合支持贡献者的最佳做法。 更多信息请参阅“[查看您的社区资料](/articles/viewing-your-community-profile)”。{% endif %}

{% endif %}

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
