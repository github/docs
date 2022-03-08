---
title: 设置仓库可见性
intro: 您可选择能够查看仓库的人员。
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 仓库可见性
---

## 关于仓库可见性更改

组织所有者可以限制只有组织所有者才能更改仓库可见性。 更多信息请参阅“[限制组织的仓库可见性更改](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)”。

{% ifversion ghec %}

Members of an {% data variables.product.prodname_emu_enterprise %} can only set the visibility of repositories owned by their user account to private, and repositories in their enterprise's organizations can only be private or internal. 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。

{% endif %}

我们建议在您更改仓库可见性之前审查以下注意事项。

{% ifversion ghes or ghae %}

{% warning %}

**警告：** 更改大型仓库或仓库网络的可见性可能会影响数据的完整性。 可见性变化也可能对复刻产生意外影响。 {% data variables.product.company_short %} 建议在更改仓库网络的可见性之前遵循以下建议。

- 等待一段时间，让 {% data variables.product.product_location %} 上的活动减少。

- 在继续操作之前，请联系您的 {% ifversion ghes %}站点管理员{% elsif ghae %}企业所有者{% endif %}。 您的 {% ifversion ghes %}站点管理员{% elsif ghae %}企业所有者{% endif %} 可以联系 {% data variables.contact.contact_ent_support %} 获得进一步指导。

{% endwarning %}

{% endif %}

### 将仓库设为私有
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} 将会分离公共仓库的公共复刻并将其放入新的网络中。 公共复刻无法设为私有。{% endif %}
{%- ifversion ghes or ghec or ghae %}
* 如果您将仓库的可见性从内部更改为私有， {% data variables.product.prodname_dotcom %} 将删除属于任何没有新私有仓库访问权限的用户的复刻。 {% ifversion fpt or ghes or ghec %}任何复刻的可见性也将更改为私有。{% elsif ghae %}如果内部仓库有任何复刻，则复刻的可见性已经是私有的。{% endif %}更多信息请参阅“[删除仓库或更改其可见性时，复刻会发生什么变化？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)”
{%- endif %}

{%- ifversion fpt %}
* 如果对用户帐户或组织使用 {% data variables.product.prodname_free_user %}，有些功能在您将可见性更改为私有后不可用于仓库。 任何已发布的 {% data variables.product.prodname_pages %} 站点都将自动取消发布。 如果您将自定义域添加到 {% data variables.product.prodname_pages %} 站点，应在将仓库设为私有之前删除或更新 DNS 记录，以避免域接管的风险。 For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products) and "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."
{%- endif %}

{%- ifversion fpt or ghec %}
* {% data variables.product.prodname_dotcom %} 不再在 {% data variables.product.prodname_archive %} 中包含该仓库。 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program) 上存档内容和数据”。
* {% data variables.product.prodname_GH_advanced_security %} 功能，例如 {% data variables.product.prodname_code_scanning %}，将停止工作{% ifversion ghec %}，除非拥有仓库的组织具有 {% data variables.product.prodname_advanced_security %} 许可证和充分的备用席位{% endif %}。 {% data reusables.advanced-security.more-info-ghas %}
{%- endif %}

{%- ifversion ghes %}
* 匿名 Git 读取权限不再可用。 更多信息请参阅“[为仓库启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)。”
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### 将仓库设为内部

* 仓库的任何复刻都将保留在仓库网络中， {% data variables.product.product_name %} 维护根仓库与复刻之间的关系。 更多信息请参阅“[删除仓库或更改其可见性时，复刻会发生什么变化？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)”

{% endif %}

{% ifversion fpt or ghes or ghec %}

### 将仓库设为公共

* {% data variables.product.product_name %} 将会分离私有复刻并将它们变成独立的私有仓库。 更多信息请参阅“[删除仓库或更改其可见性时，复刻会发生什么变化？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)”{% ifversion fpt or ghec %}
* 如果在创建开源项目时将私有仓库转换为公共仓库，请参阅[开放源码指南](http://opensource.guide)以了解有用的提示和指南。 您还可以通过 [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) 免费学习管理开源项目的课程。 您的仓库设为公共后，您还可以查看仓库的社区资料以了解项目是否符合支持贡献者的最佳做法。 更多信息请参阅“[查看您的社区资料](/articles/viewing-your-community-profile)”。
* 仓库将自动获得对 {% data variables.product.prodname_GH_advanced_security %} 功能的使用权限。

有关改善仓库安全性的信息，请参阅“[保护仓库](/code-security/getting-started/securing-your-repository)”。{% endif %}

{% endif %}

## 更改仓库的可见性

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Danger Zone（危险区域）”下的“Change repository visibility（更改仓库可见性）”右侧，单击 **Change visibility（更改可见性）**。 ![更改可见性按钮](/assets/images/help/repository/repo-change-vis.png)
4. 选择可见性。
{% ifversion fpt or ghec %}
   ![仓库可见性选项对话框](/assets/images/help/repository/repo-change-select.png){% else %}
![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. 要验证您是否正在更改正确仓库的可见性，请键入您想要更改其可见性的仓库名称。
6. 单击 **I understand, change repository visibility（我了解，更改仓库可见性）**。
{% ifversion fpt or ghec %}
   ![确认更改仓库可见性按钮](/assets/images/help/repository/repo-change-confirm.png){% else %}
![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## 延伸阅读
- "[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
