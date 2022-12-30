---
title: 推送受推送保护阻止的分支
intro: '{% data variables.product.prodname_secret_scanning %} 的推送保护功能会主动保护你免遭存储库中泄露的机密的侵害。 可以解析阻止的推送，在删除检测到的机密后，可以从命令行或 Web UI 将更改推送到工作分支。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
ms.openlocfilehash: debabaab43bae680f43cdbe2bd6be6826b5748de
ms.sourcegitcommit: 96af28d597b411664d9bfd106dfa1e6b90788f7a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/16/2022
ms.locfileid: '147578702'
---
## <a name="about-push-protection-for--data-variablesproductprodname_secret_scanning-"></a>关于 {% data variables.product.prodname_secret_scanning %} 的推送保护

{% data variables.product.prodname_secret_scanning %} 的推送保护功能有助于通过在将更改推送到存储库之前扫描有无机密来避免安全漏洞。 {% data reusables.secret-scanning.push-protection-overview %} 有关推送保护支持的机密和服务提供商的信息，请参阅“[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)”。

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**提示** 如果 {% data variables.product.prodname_dotcom %} 阻止了一个你认为可以安全推送的机密，则可以允许该机密并指定允许的原因。 有关绕过对机密的推送保护的详细信息，请分别参阅命令行和 Web UI 的“[允许推送被阻止的机密](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)”和“[绕过机密的推送保护](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)”。 

{% endtip %}

## <a name="resolving-a-blocked-push-on-the-command-line"></a>解析命令行上的阻止推送

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

如果分支上的最新提交引入了阻止的机密，可以遵循以下指南进行操作。

1. 从代码中删除机密。
1. 使用 `git commit --amend` 提交更改。
1. 使用 `git push` 推送更改。

如果机密出现在 Git 历史记录的早期提交中，还可以将其删除。

1. 使用 `git log` 确定推送错误中呈现的哪个提交首次出现在历史记录中。
1. 使用 `git rebase -i <commit-id>~1` 启动交互式变基。 <commit-id> 是步骤 1 中提交的 ID。
1. 通过将编辑器中显示的文本的第一行上的 `pick` 更改为 `edit` 来确定要编辑的提交。
1. 从代码中删除机密。
1. 使用 `git commit --amend` 提交更改。
1. 运行 `git rebase --continue` 以完成变基。

## <a name="resolving-a-blocked-commit-in-the-web-ui"></a>在 Web UI 中解析阻止的提交

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

若要解决 Web UI 中被阻止的提交，需要从文件中删除机密，或使用“绕过保护”下拉列表允许机密。 有关绕过 Web UI 中的推送保护的详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)”。

如果确认机密是真实的，则需要将机密从文件中删除。 删除机密后，页面顶部的横幅将发生更改，并告知你现在可以提交更改。
