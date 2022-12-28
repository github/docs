---
title: 转让仓库
intro: 您可以将仓库转让给其他用户或组织帐户。
redirect_from:
  - /articles/about-repository-transfers
  - /move-a-repo
  - /moving-a-repo
  - /articles/what-is-transferred-with-a-repository
  - /articles/what-is-transferred-with-a-repo
  - /articles/how-to-transfer-a-repo
  - /articles/how-to-transfer-a-repository
  - /articles/transferring-a-repository-owned-by-your-personal-account
  - /articles/transferring-a-repository-owned-by-your-organization
  - /articles/transferring-a-repository
  - /github/administering-a-repository/transferring-a-repository
  - /github/administering-a-repository/managing-repository-settings/transferring-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f37ebc1492ae26998a596d90734d1d509b8f73c9
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160678'
---
## 关于仓库转让

当你将存储库转移给新所有者时，他们可以立即管理存储库的内容、议题、拉取请求、版本、{% data variables.product.prodname_projects_v1 %} 和设置。

存储库传输的先决条件：
- 当你将你拥有的存储库转让给另一个个人帐户时，新所有者将收到一封确认电子邮件。{% ifversion fpt or ghec %} 确认电子邮件包含接受转让的说明。 如果新所有者在一天之内没有接受转让，则邀请将过期。{% endif %}
- 要将您拥有的仓库转让给一个组织，您必须拥有在目标组织中创建仓库的权限。
- 目标帐户不得具有相同名称的仓库，或位于同一网络中的复刻。
- 仓库原来的所有者将添加为已转让仓库的协作者。 转移的存储库的其他协作者保持不变。{% ifversion ghes < 3.7 or ghae %}
- 无法转移内部仓库。{% endif %}
- 私有复刻无法进行转让。
{%- ifversion ghec %}
- 不能将内部存储库从一个企业帐户拥有的组织转移到另一个企业帐户拥有的组织。
{%- endif %}

{% ifversion fpt or ghec %}如果将专用存储库转移到 {% data variables.product.prodname_free_user %} 用户或组织帐户，该存储库将无法访问受保护的分支和 {% data variables.product.prodname_pages %} 等功能。 {% data reusables.gated-features.more-info %}{% endif %}

### 随仓库一起转让的有哪些内容？

当您转让仓库时，其议题、拉取请求、wiki、星号和查看者也将转让。 如果转让的仓库包含 web 挂钩、服务、密码或部署密钥，它们将在转让完成后保持关联状态。 关于提交的 Git 信息（包括贡献）都将保留。 此外：

- 如果转让的仓库是复刻，则它仍与上游仓库关联。
- 如果转让的仓库有任何复刻，则这些复刻在转让完成后仍与该仓库关联。
- 如果转让的仓库使用 {% data variables.large_files.product_name_long %}，则所有 {% data variables.large_files.product_name_short %} 对象均自动移动。 此转移在后台进行，因此如果您有大量的 {% data variables.large_files.product_name_short %} 对象或者如果 {% data variables.large_files.product_name_short %} 对象本身很大，则进行转移可能需要一些时间。{% ifversion fpt or ghec %}转让使用 {% data variables.large_files.product_name_short %} 的仓库之前，确保接收帐户有足够的数据包用来存储您将移动的 {% data variables.large_files.product_name_short %} 对象。 有关为个人帐户添加存储的详细信息，请参阅“[升级 {% data variables.large_files.product_name_long %}](/articles/upgrading-git-large-file-storage)”。{% endif %}
- 存储库在两个个人帐户之间转让时，议题分配保持不变。 将存储库从个人帐户转让给组织时，分配给组织中该成员的议题保持不变，所有其他议题受理人都将被清除。 只允许组织中的所有者创建新的议题分配。 将存储库从组织转让给个人帐户时，只有分配给存储库所有者的议题保留，所有其他议题受理人都将被清除。
- 如果转让的仓库包含 {% data variables.product.prodname_pages %} 站点，则指向 Web 上 Git 仓库和通过 Git 活动的链接将重定向。 不过，我们不会重定向与仓库关联的 {% data variables.product.prodname_pages %}。
- 指向以前仓库位置的所有链接均自动重定向到新位置。 在转移的存储库上使用 `git clone`、`git fetch` 或 `git push` 时，这些命令将重定向到新的存储库位置或 URL。 不过，为了避免混淆，我们强烈建议将任何现有的本地克隆副本更新为指向新仓库 URL。 可以通过在命令行上使用 `git remote` 完成此操作：

  ```shell
  $ git remote set-url origin NEW_URL
  ```

  {% warning %}

  警告：如果将来在你的帐户下创建新存储库，请不要重复使用转移的存储库的原始名称。 如果这样做，重定向到转移的存储库将不再有效。

  {% endwarning %}

- 将存储库从组织转让给个人帐户时，不会转让存储库的只读协作者。 这是因为协作者不能对个人帐户拥有的存储库具有只读权限。 有关存储库权限级别的详细信息，请参阅“[个人帐户存储库的权限级别](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)”和“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。{% ifversion fpt or ghec %}
- 有权通过赞助层访问存储库的发起人可能会受到影响。 有关详细信息，请参阅“[将存储库添加到赞助层](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier)”。{% endif %}

有关详细信息，请参阅“[管理远程存储库](/github/getting-started-with-github/managing-remote-repositories)”。

### 仓库转让和组织

要将仓库转让给组织，您必须在接收组织中具有仓库创建权限。 如果组织所有者已禁止组织成员创建仓库，则只有组织所有者能够转让仓库出入组织。

将仓库转让给组织后，组织的默认仓库权限设置和默认成员资格权限将应用到转让的仓库。

## 转让您的个人帐户拥有的仓库

你可以将存储库转让给接受存储库转让的任何个人帐户。 在两个个人帐户之间转让存储库时，原来的存储库所有者和协作者将自动添加为新存储库的协作者。

{% ifversion fpt or ghec %}如果您在私有仓库中发布了 {% data variables.product.prodname_pages %} 站点并添加了自定义域，则转让仓库之前，您可能想要删除或更新 DNS 记录以避免域接管风险。 有关详细信息，请参阅“[为 {% data variables.product.prodname_pages %} 站点管理自定义域](/articles/managing-a-custom-domain-for-your-github-pages-site)”。{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}

## 转让您的组织拥有的仓库

如果你具有组织中的所有者权限或组织其中一个存储库的管理员权限，你可以将组织拥有的存储库转让给个人帐户或其他组织。

1. 在拥有存储库的组织中登录你具有管理员或所有者权限的个人帐户。
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}
