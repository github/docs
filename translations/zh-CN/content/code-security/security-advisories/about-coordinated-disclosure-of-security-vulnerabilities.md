---
title: 关于安全漏洞的协调披露
intro: 漏洞披露是安全报告者与仓库维护者之间的协调工作。
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
type: overview
topics:
  - Security advisories
  - Vulnerabilities
---

### 关于披露行业漏洞

{% data reusables.security-advisory.disclosing-vulnerabilities %}

漏洞的初始报告是私下发布的，并且只有在维护者确认问题后才会公布全部详细信息，最好提供补救或修补程序，有时会延迟，以便有更多的时间安装修补程序。 更多信息请参阅 OWASP Cheat Sheet Series 网站上的“[关于漏洞披露的 OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software)”。

#### 漏洞报告者的最佳实践

私下向维护者报告漏洞是一项良好的做法。 如果可能，作为漏洞报告者，我们建议您避免：
- 公开披露漏洞而不给维护者补救的机会。
- 绕过维护者。
- 在代码的修复版可用之前披露漏洞。
- 在没有公共奖励方案的情况下，报告某个问题时期望得到补偿。

漏洞报告者如果已尝试联系维护者但未收到回复，或与已联系他们但被要求等待很久才能披露，则在一段时间后公开披露漏洞是可以接受的。

我们建议漏洞报告者在报告过程中明确说明其披露政策的条款。 即使漏洞报告者不遵守严格的政策，最好在预期漏洞披露的时间表上对维护者设定明确的期望。 关于披露政策的示例，请在 GitHub Security Lab 网站上查看“[Security Lab 的披露政策](https://securitylab.github.com/advisories#policy)”。

#### 维护者最佳实践

作为维护者，最佳做法是明确说明您想如何和在何处收到关于漏洞的报告。 如果此信息不可明确，但漏洞报告者不知道如何联系您，可能寻求从 git 提交历史记录中提取开发人员电子邮件地址，以尝试找到适当的安全联系人。 这可能导致摩擦、丢失报告或发布未解决的报告。

维护者应及时披露漏洞。 如果您的仓库存在安全漏洞，我们建议您：
- 在响应和披露中，将漏洞视为安全问题，而不是简单的错误。 例如，您需要明确提及问题在发布说明中是一个安全漏洞。
- 即使没有即时的调查资源，也应尽快确认收到漏洞报告。 这传递了这样一个信息：您可以快速响应并采取行动，并为您与漏洞报告者之间的其余互动设定了积极的基调。
- 当您验证报告的影响和真实性时，请让漏洞报告者参与。 漏洞报告者可能已经花时间考虑了各种情景中的漏洞，其中一些情况您自己可能都没有考虑过。
- 以你认为合适的方式解决这个问题，认真考虑漏洞报告者提出的任何关切和建议。 通常，漏洞报告者会了解没有安全研究背景时容易错过的某些角落案例和补救旁路。
- 始终将漏洞的发现归功于漏洞报告者。
- 目标是尽快发布修复。
- 确保您在披露漏洞时让更广泛的生态系统意识到问题及其补救措施。 在项目当前开发分支中修复已识别的安全问题，但提交或后续版本未明确标记为安全修复或发布的情况并不少见。 这可能给下游消费者造成问题。

发布安全漏洞的详细信息不会使维护者看起来很糟糕。 安全漏洞在软件中随处可见。用户会信任那些在其守则中明确制定了安全漏洞披露程序的维护者。

### 关于在 {% data variables.product.prodname_dotcom %} 上报告和披露项目中的漏洞

在 {% data variables.product.prodname_dotcom_the_website %} 上报告和披露项目漏洞的流程如下：

 如果您是要报告漏洞的漏洞报告者（例如安全研究人员），请先检查相关仓库是否有安全策略。 更多信息请参阅“[关于安全策略](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies)”。 如果有的话，请先了解该流程，然后再联系该仓库的安全团队。

 如果没有安全策略，与维护者建立私人通信手段的最有效办法是制造一个要求优先安全联系的问题。 值得注意的是，这个问题将立即公开可见，所以它不应该包括任何有关漏洞的信息。 建立通信后，您可以建议维护者制定安全策略以供将来使用。

{% note %}

**注意**：_仅限 npm_ - 如果我们收到 npm 软件包中有恶意软件的报告，我们试着私下联系您。 如果您不及时解决问题，我们将予以披露。 更多信息请参阅 npm 文档网站上的“[报告 npm 包中的恶意软件](https://docs.npmjs.com/reporting-malware-in-an-npm-package)。

{% endnote %}

 如果您在 {% data variables.product.prodname_dotcom_the_website %} 中发现了安全漏洞，请通过我们协调的披露流程报告该漏洞。 更多信息请参阅 [{% data variables.product.prodname_dotcom %} 安全漏洞奖金](https://bounty.github.com/)网站。

 如果您是维护者， 您可以在管道开始时通过为您的仓库设置安全策略来掌控这一过程，或者以其他方式使安全报告说明清楚可用，例如在项目的 README 文件中。 有关添加安全策略的更多信息，请参阅“[关于安全策略](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies)”。 如果没有安全策略，漏洞报告者可能会尝试向您发送电子邮件或以其他方式私下与您联系。 或者，有人可能会开一个（公共）议题讨论安全问题的细节。

 作为维护者，要在您的代码中披露漏洞，请先在 {% data variables.product.prodname_dotcom %} 中软件包的仓库内创建安全通告。 {% data reusables.security-advisory.security-advisory-overview %} 更多信息请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)”。


 要开始，请参阅“[创建安全通告](/github/managing-security-vulnerabilities/creating-a-security-advisory)”。


