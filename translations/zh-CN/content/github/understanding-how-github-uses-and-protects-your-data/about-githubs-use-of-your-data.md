---
title: 关于 GitHub 使用您的数据
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %} 使用您的仓库数据来将您连接到相关工具、人员、项目和信息。'
versions:
  free-pro-team: '*'
topics:
  - 政策
  - 法律
---
 
### 关于 {% data variables.product.product_name %} 对数据的使用

{% data variables.product.product_name %} 汇总元数据并剖析内容模式，以在产品中提交一般化的见解。 它使用公共仓库中的数据，当仓库所有者选择与 {% data variables.product.product_name %} 共享数据时还会使用私有仓库中的元数据并汇总数据。 如果选择使用私有仓库的数据，它会对特定私有仓库执行只读分析。

{% data reusables.repositories.about-github-archive-program %} 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上存档内容](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)”。

{% data reusables.user_settings.export-data %} 更多信息请参阅“[请求个人帐户数据的存档](/articles/requesting-an-archive-of-your-personal-account-s-data)”。

如果您选择使用私人仓库的数据，我们将继续按照[服务条款](/articles/github-terms-of-service/)，将您的私人数据、源代码或商业秘密视为机密和私密。 我们了解的信息只来自汇总的数据。 更多信息请参阅“[管理私有仓库的数据使用设置](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)”。

我们会在 [{% data variables.product.prodname_dotcom %} 博客](https://github.com/blog)中宣布使用元数据或汇总数据的重要新功能。

### 数据如何改进安全建议

例如，在使用您的数据时，我们可能会检测您的公共仓库依赖项中的安全漏洞并提醒您。 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。

为检测潜在安全漏洞，{% data variables.product.product_name %} 会扫描依赖项清单文件的内容，以列出项目的依赖项。

{% data variables.product.product_name %} 还会获知您对依赖项清单所做的更改。 例如，如果您在获得安全警报后将有漏洞的依赖项升级到安全版本，其他人也执行同样的操作，{% data variables.product.product_name %} 就会了解如何修补漏洞，并对受影响的仓库推荐类似的补丁。

### 隐私和数据共享

私有仓库数据由电脑扫描，{% data variables.product.product_name %} 员工不能查看。 除了我们[服务条款](/articles/github-terms-of-service/#3-access)中所述的内容之外，绝不会有人查看私有仓库的内容。

您的个别人员或仓库数据不会与第三方共享。 我们可能与合作伙伴共享分析后获得的汇总数据。
