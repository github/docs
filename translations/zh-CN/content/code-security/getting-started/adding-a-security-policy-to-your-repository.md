---
title: 将安全策略添加到存储库
intro: 您可以为仓库添加安全政策，说明如何报告项目中的安全漏洞。
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
ms.openlocfilehash: f081d6e6bd99f604e7e86bc094f76de9041adf4b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084382'
---
## 关于安全政策

要向人们提供报告项目中安全漏洞的说明，{% ifversion fpt or ghes or ghec %}可以将 _SECURITY.md_ 文件添加到存储库的根目录、`docs` 或 `.github` 文件夹。{% else %}可以将 _SECURITY.md_ 文件添加到存储库的根目录或 `docs` 文件夹。{% endif %}当有人在你的存储库中创建问题时，他们将会看到一个指向你的项目的安全策略的链接。

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
你可以为组织或个人帐户创建默认的安全政策。 有关详细信息，请参阅[创建默认社区运行状况文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)。
{% endif %}

{% tip %}

提示：为帮助人们查找安全策略，可以从存储库中的其他位置（如 README 文件）链接到 SECURITY.md 文件。 有关详细信息，请参阅“[关于 README](/articles/about-readmes)”。

{% endtip %}

{% ifversion fpt or ghec %} 当有人报告项目中的安全漏洞后，可以使用 {% data variables.product.prodname_security_advisories %} 披露、修复和发布关于该漏洞的信息。 有关 {% data variables.product.prodname_dotcom %} 中报告和披露漏洞的过程的详细信息，请参阅“[关于安全漏洞的协调披露](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)”。 有关 {% data variables.product.prodname_security_advisories %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)”。

{% data reusables.repositories.github-security-lab %} {% endif %} {% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
通过创建明确的安全报告说明，用户可以轻松地使用您喜欢的通信通道报告仓库中发现的任何安全漏洞。
{% endif %}

## 将安全策略添加到存储库

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
3. 在左边栏中，单击“安全策略”。
  ![“安全策略”选项卡](/assets/images/help/security/security-policy-tab.png)
4. 单击“开始设置”。
  ![“开始设置”按钮](/assets/images/help/security/start-setup-security-policy-button.png)
5. 在新的 SECURITY.md 文件中，添加关于项目受支持版本以及如何报告漏洞的信息。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 延伸阅读

- [保护存储库](/code-security/getting-started/securing-your-repository){% ifversion not ghae %}
- [设置项目的健康贡献](/communities/setting-up-your-project-for-healthy-contributions){% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
