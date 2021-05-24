---
title: 管理仓库的代码扫描警报
shortTitle: 管理警报
intro: 从安全的角度，您可以查看、修复或关闭项目代码中潜在漏洞或错误的警报。
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  enterprise-server: '2.22'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
---
<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}

### 关于 {% data variables.product.prodname_code_scanning %} 中的警报

您可以设置 {% data variables.product.prodname_code_scanning %}，以使用默认 {% data variables.product.prodname_codeql %} 分析、第三方分析或多种类型的分析来检查仓库中的代码。 分析完成后，生成的警报将并排显示在仓库的安全视图中。 第三方工具或自定义查询的结果可能不包括您在 {% data variables.product.company_short %} 的默认 {% data variables.product.prodname_codeql %} 分析所检测的警报中看到的所有属性。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)”。

默认情况下， {% data variables.product.prodname_code_scanning %} 定期在默认分支和拉取请求中分析您的代码。 有关管理拉取请求中的警报的更多信息，请参阅“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### 关于警报详细信息

每个警报都会高亮显示代码的问题以及识别该问题的工具名称。 您可以看到触发警报的代码行以及警报的属性，例如问题的严重程度和性质。 警报还会告知该问题第一次被引入的时间。 对于由 {% data variables.product.prodname_codeql %} 分析确定的警报，您还会看到如何解决问题的信息。

![来自 {% data variables.product.prodname_code_scanning %} 的警报示例](/assets/images/help/repository/code-scanning-alert.png)

如果使用 {% data variables.product.prodname_codeql %} 设置 {% data variables.product.prodname_code_scanning %}，也可以检测代码中的数据流问题。 数据流分析将查找代码中的潜在安全问题，例如：不安全地使用数据、将危险参数传递给函数以及泄漏敏感信息。

当 {% data variables.product.prodname_code_scanning %} 报告数据流警报时，{% data variables.product.prodname_dotcom %} 将显示数据在代码中如何移动。 {% data variables.product.prodname_code_scanning_capc %} 可用于识别泄露敏感信息的代码区域，以及可能成为恶意用户攻击切入点的代码区域。

### 查看仓库的警报

任何对仓库有读取权限的人都可以查看拉取请求上的 {% data variables.product.prodname_code_scanning %} 注释。 更多信息请参阅“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”。

您需要写入权限才能在 **Security（安全）**选项卡上查看仓库所有警报的摘要。 默认情况下，显示默认分支的警报。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. 在 "{% data variables.product.prodname_code_scanning_capc %}" 下，单击要探索的警报。 ![警报摘要](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
1. （可选）如果警报突出显示数据流的问题，请单击 **Show paths（显示路径）**以显示从数据源到使用它的接收者的路径。 ![警报上的"显示路径"链接](/assets/images/help/repository/code-scanning-show-paths.png)
1. 来自 {% data variables.product.prodname_codeql %} 分析的警报包括对问题的描述。 单击 **Show more（显示更多）**以获取有关如何修复代码的指导。 ![警报的详细信息](/assets/images/help/repository/code-scanning-alert-details.png)

### 修复警报

任何对仓库具有写入权限的人都可以通过提交对代码的更正来修复警报。 如果仓库已安排对拉取请求运行 {% data variables.product.prodname_code_scanning %}，则最好通过拉取请求提交您的更正。 这将触发对更改的 {% data variables.product.prodname_code_scanning %} 分析，并测试您的修复是否会带来任何新的问题。 更多信息请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)”和“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”。

如果您有仓库的写入权限，您可以通过查看警报摘要并单击 **Closed（已关闭）**来查看已修复的警报。 更多信息请参阅“[查看仓库的警报](#viewing-the-alerts-for-a-repository)”。 “Closed（已关闭）”列表显示已修复的警报和用户已关闭的警报。

警报只能在一个分支中修复。 您可以在警报摘要上使用“Branch（分支）”下拉菜单检查警报是否是在特定分支中修复的。

![按分支过滤警报](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)

### 关闭警报

关闭警报是解决您认为不需要修复的警报的一种方式。 {% data reusables.code-scanning.close-alert-examples %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
1. 选择 **Close（关闭）**下拉菜单，然后单击关闭警报的原因。    
   ![通过 Close（关闭）下拉菜单选择关闭警报的原因](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

### 延伸阅读

- “[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”
- “[为仓库设置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)”
- "[关于与 {% data variables.product.prodname_code_scanning %} 集成](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
