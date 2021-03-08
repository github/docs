在运行安全性或版本更新时，有些生态系统必须能够解决来自其来源的所有依赖项，以验证版本更新是否成功。 如果清单或锁定文件包含任何私有依赖项，{% data variables.product.prodname_dependabot %} 必须能够访问这些依赖项所在的位置。 组织所有者可以授予 {% data variables.product.prodname_dependabot %} 访问包含同一个组织内项目依赖项的私有仓库. 更多信息请参阅“[管理组织的安全和分析设置](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-repositories)”。

目前，{% data variables.product.prodname_dependabot %} 版本更新不支持包含私人注册表中依赖项的清单或锁定文件，或者私有 {% data variables.product.prodname_dotcom %} 仓库中属于不同于依赖项目的组织。 
