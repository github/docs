---
title: 重命名仓库
intro: 如果您是组织所有者或拥有仓库的管理员权限，则可以重命名仓库。
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: e56e8ca634ca1bfec3c587fe8fb606ab73ac72d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129368'
---
重命名仓库时，除项目网站 URL 外，所有现有信息将自动重定向到新名称，包括：

* 问题
* Wiki
* 星标
* 关注者

有关项目站点的详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

除了重定向 Web 流量之外，所有针对先前位置的 `git clone`、`git fetch` 或 `git push` 操作都将继续跟在新位置上的方式一样运行。 不过，为了减少混淆，我们强烈建议将任何现有的本地克隆更新为指向新仓库 URL。 可以通过在命令行上使用 `git remote` 完成此操作：

```shell
$ git remote set-url origin <em>new_url</em>
```

有关详细信息，请参阅“[管理远程存储库](/github/getting-started-with-github/managing-remote-repositories)”。

{% ifversion fpt or ghec %}

如果计划重命名具有 {% data variables.product.prodname_pages %} 网站的仓库，建议对网站使用自定义域。 这可确保重命名仓库不会影响网站的 URL。 有关详细信息，请参阅“[关于自定义域和 {% data variables.product.prodname_pages %} 站点](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)”。 

{% endif %}

{% note %}

注意：{% data variables.product.prodname_dotcom %} 不会将调用重定向到由重命名存储库托管的操作。 使用该操作的任何工作流都将失败并出现错误 `repository not found`。 而是创建一个新存储库并使用新名称执行操作，并将旧存储库存档。 有关详细信息，请参阅“[归档存储库](/repositories/archiving-a-github-repository/archiving-repositories)”。

{% endnote %}

{% warning %}

警告：如果将来在你的帐户下创建新存储库，请不要重复使用重命名存储库的原始名称。 否则到重命名的仓库的重定向将会中断。

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“存储库名称”标题下，键入存储库的新名称。
   ![存储库重命名](/assets/images/help/repository/repository-name-change.png)
4. 单击“重命名”。 大功告成！
