---
title: 设置存储库可见性
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
shortTitle: Repository visibility
ms.openlocfilehash: 2ccdafed8e9efe2bf352033d8fa632147f6bb32b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332019'
---
## 关于仓库可见性更改

组织所有者可以限制只有组织所有者才能更改仓库可见性。 有关详细信息，请参阅“[限制组织中的存储库可见性更改](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)”。

{% ifversion ghec %}

{% data variables.product.prodname_emu_enterprise %} 的成员只能将其个人帐户拥有的存储库的可见性设置为私有，并且其企业组织中的存储库只能是私有的或内部的。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。

{% endif %}

我们建议在您更改仓库可见性之前审查以下注意事项。

{% ifversion ghes or ghae %}

{% warning %}

警告：更改大型存储库或存储库网络的可见性可能会影响数据完整性。 可见性变化也可能对复刻产生意外影响。 {% data variables.product.company_short %} 建议在更改仓库网络的可见性之前遵循以下建议。

- 等待一段时间，让 {% data variables.product.product_location %} 上的活动减少。

- 在继续操作之前，请联系{% ifversion ghes %}站点管理员{% elsif ghae %}企业所有者{% endif %}。 {% ifversion ghes %}站点管理员{% elsif ghae %}企业所有者{% endif %}可以联系 {% data variables.contact.contact_ent_support %} 以获取进一步的指导。

{% endwarning %}

{% endif %}

### 将仓库设为私有
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} 将分离公共存储库的公共分支并将其放入新的网络中。 公共分支无法设为专用。{% endif %} {%- ifversion ghes or ghec or ghae %}
* 如果您将仓库的可见性从内部更改为私有， {% data variables.product.prodname_dotcom %} 将删除属于任何没有新私有仓库访问权限的用户的复刻。 {% ifversion fpt or ghes or ghec %}任何分支的可见性也将更改为专用。{% elsif ghae %}如果内部存储库具有任何分支，则分支的可见性已是专用的。{% endif %}有关详细信息，请参阅“[删除存储库或更改其可见性时，分支会发生什么情况？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)”
{%- endif %}

{%- ifversion fpt %}
* 如果对个人帐户或组织使用 {% data variables.product.prodname_free_user %}，有些功能在你将可见性更改为私有后不可用于存储库。 任何已发布的 {% data variables.product.prodname_pages %} 站点都将自动取消发布。 如果您将自定义域添加到 {% data variables.product.prodname_pages %} 站点，应在将仓库设为私有之前删除或更新 DNS 记录，以避免域接管的风险。 有关详细信息，请参阅“[{% data variables.product.company_short %} 的产品](/get-started/learning-about-github/githubs-products) 和 [管理 {% data variables.product.prodname_pages %} 站点的自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。
{%- endif %}

{%- ifversion fpt or ghec %}
* {% data variables.product.prodname_dotcom %} 不再在 {% data variables.product.prodname_archive %} 中包含该仓库。 有关详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上存档内容和数据](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)”。
* {% data variables.product.prodname_GH_advanced_security %} 功能，例如 {% data variables.product.prodname_code_scanning %}，将停止工作{% ifversion ghec %}，除非拥有仓库的组织具有 {% data variables.product.prodname_advanced_security %} 许可证和充分的备用席位{% endif %}。 {% data reusables.advanced-security.more-info-ghas %} {%- endif %}

{%- ifversion ghes %}
* 匿名 Git 读取权限不再可用。 有关详细信息，请参阅“[为存储库启用匿名 Git 读取访问](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)”。
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### 将仓库设为内部

* 仓库的任何复刻都将保留在仓库网络中， {% data variables.product.product_name %} 维护根仓库与复刻之间的关系。 有关详细信息，请参阅“[删除存储库或更改其可见性时，分支会发生什么情况？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)”

{% endif %}

{% ifversion fpt or ghes or ghec %}

### 将仓库设为公共

* {% data variables.product.product_name %} 将会分离私有复刻并将它们变成独立的私有仓库。 有关详细信息，请参阅“[删除存储库或更改其可见性时，分支会发生什么情况？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)”{% ifversion fpt or ghec %}
* 如果在创建开源项目时将专用存储库转换为公共存储库，请参阅[开源代码指南](http://opensource.guide)以获得有用的提示和指导。 还可以利用 [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) 免费学习管理开源项目的课程。 您的仓库设为公共后，您还可以查看仓库的社区资料以了解项目是否符合支持贡献者的最佳做法。 有关详细信息，请参阅“[查看社区配置文件](/articles/viewing-your-community-profile)”。
* 仓库将自动获得对 {% data variables.product.prodname_GH_advanced_security %} 功能的使用权限。

有关提高存储库安全性的信息，请参阅“[保护存储库](/code-security/getting-started/securing-your-repository)”。{% endif %}

{% endif %}

## 更改仓库的可见性

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“危险区域”下的“更改存储库可见性”右侧，单击“更改可见性”。
   ![“更改可见性”按钮](/assets/images/help/repository/repo-change-vis.png)
4. 选择可见性。
{% ifversion fpt or ghec %} ![存储库可见性选项的对话框](/assets/images/help/repository/repo-change-select.png){% else %} ![存储库可见性选项的对话框](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. 要验证您是否正在更改正确仓库的可见性，请键入您想要更改其可见性的仓库名称。
6. 单击“我了解，更改存储库可见性”。
{% ifversion fpt or ghec %} ![确认更改存储库可见性按钮](/assets/images/help/repository/repo-change-confirm.png){% else %} ![确认更改存储库可见性按钮](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## 延伸阅读
- “[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”
