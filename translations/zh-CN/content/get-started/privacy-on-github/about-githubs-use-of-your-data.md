---
title: 关于 GitHub 使用您的数据
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %} 使用您的仓库数据来将您连接到相关工具、人员、项目和信息。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: GitHub's use of your data
ms.openlocfilehash: f49f90a981b92d2c7d5d34b0fac28ec05adbadd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128868'
---
## 关于 {% data variables.product.product_name %} 使用您的数据

{% data variables.product.product_name %} 汇总元数据并剖析内容模式，以在产品中提交一般化的见解。 它使用公共存储库中的数据，当存储库所有者选择通过启用依赖项关系图与 {% data variables.product.product_name %} 共享数据时，它还会使用私有存储库中的元数据和聚合数据。 如果为专用存储库启用依赖项关系图，则 {% data variables.product.product_name %} 将对该特定专用存储库执行只读分析。

如果为专用存储库启用数据使用，我们将继续将专用数据、源代码或商业秘密视为机密和私密，且符合[服务条款](/free-pro-team@latest/github/site-policy/github-terms-of-service)。 我们了解的信息只来自汇总的数据。 有关详细信息，请参阅“[管理专用存储库的数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)”。

{% data reusables.repositories.about-github-archive-program %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的存档内容和数据](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)”。

{% data reusables.user-settings.export-data %} 有关详细信息，请参阅“[请求个人帐户数据的存档](/articles/requesting-an-archive-of-your-personal-account-s-data)”。

我们将宣布可在 [{% data variables.product.prodname_dotcom %} 博客](https://github.com/blog)上使用元数据或聚合数据的大量新功能。

## 数据如何改进安全建议

例如，在使用您的数据时，我们可能会检测您的公共仓库依赖项中的安全漏洞并提醒您。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。

为检测潜在安全漏洞，{% data variables.product.product_name %} 会扫描依赖项清单文件的内容，以列出项目的依赖项。

{% data variables.product.product_name %} 还会获知您对依赖项清单所做的更改。 例如，如果您在获得安全警报后将有漏洞的依赖项升级到安全版本，其他人也执行同样的操作，{% data variables.product.product_name %} 就会了解如何修补漏洞，并对受影响的仓库推荐类似的补丁。

## 隐私和数据共享

私有仓库数据由电脑扫描，{% data variables.product.product_name %} 员工不能查看。 人眼永远不会看到专用存储库的内容，除非[服务条款](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access)中另有说明。

您的个别人员或仓库数据不会与第三方共享。 我们可能与合作伙伴共享分析后获得的汇总数据。
