---
title: 在 CI 系统中安装 CodeQL CLI
shortTitle: Install CodeQL CLI
intro: '您可以安装 {% data variables.product.prodname_codeql_cli %} 并用它在第三方持续集成系统中执行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
ms.openlocfilehash: 3d7c7dc3451b844b33fe0b14fd07f9a18ec81b10
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884540'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于将 {% data variables.product.prodname_codeql_cli %} 用于 {% data variables.product.prodname_code_scanning %}

可以使用 {% data variables.product.prodname_codeql_cli %} 在第三方持续集成 (CI) 系统中处理的代码上运行 {% data variables.product.prodname_code_scanning %}。 {% data reusables.code-scanning.about-code-scanning %} 有关信息，请参阅“[关于使用 {% data variables.product.prodname_codeql %} 进行 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)”。 有关运行 {% data variables.product.prodname_codeql %} 分析的建议规范（RAM、CPU 核心和磁盘），请参阅“[用于运行 {% data variables.product.prodname_codeql %} 的建议硬件资源](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)”。

{% data reusables.code-scanning.what-is-codeql-cli %}

您也可以使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_name %} 中运行 {% data variables.product.prodname_code_scanning %}。 有关使用操作进行 {% data variables.product.prodname_code_scanning %} 的信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。 有关 CI 系统选项的概述，请参阅“[关于 CI 系统中的 CodeQL {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)”。

{% data reusables.code-scanning.licensing-note %}

## 下载 {% data variables.product.prodname_codeql_cli %}

应从 https://github.com/github/codeql-action/releases 下载 {% data variables.product.prodname_codeql %} 包。 该捆绑包中包含：

- {% data variables.product.prodname_codeql_cli %} 产品
- 来自 https://github.com/github/codeql 的查询和库的兼容版本
- 捆绑包中包含的所有查询的预编译版本

{% ifversion ghes or ghae %}

{% note %} 对于 {% data variables.product.product_name %}{% ifversion ghes %} {{ allVersions[currentVersion].currentRelease }},{% endif %}，我们建议使用 {% data variables.product.prodname_codeql_cli %} 版本 {% data variables.product.codeql_cli_ghes_recommended_version %}。
{% endnote %}

{% endif %}

您应该始终使用 {% data variables.product.prodname_codeql %} 包，因为这样可以确保兼容性，并且比单独下载 {% data variables.product.prodname_codeql_cli %} 和检出 {% data variables.product.prodname_codeql %} 查询提供更好的性能。 如果只在一个特定平台上运行 CLI，请下载相应的 `codeql-bundle-PLATFORM.tar.gz` 文件。 此外，也可以下载包含所有受支持平台的 CLI 的 `codeql-bundle.tar.gz`。

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## 在 CI 系统中设置 {% data variables.product.prodname_codeql_cli %}

您需要将 {% data variables.product.prodname_codeql_cli %} 包的全部内容提供给要运行 CodeQL {% data variables.product.prodname_code_scanning %} 分析的每个 CI 服务器。 例如，您可以配置每台服务器从中央内部位置复制包并提取它。 或者，您可以使用 REST API 直接从 {% data variables.product.prodname_dotcom %} 获取包，以确保您从查询的最新改进中受益。 {% data variables.product.prodname_codeql_cli %} 的更新每 2-3 周发布一次。 例如：

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

提取 {% data variables.product.prodname_codeql_cli %} 包后，可以在服务器上运行 `codeql` 可执行文件：

- 通过执行 `/<extraction-root>/codeql/codeql`，其中 `<extraction-root>` 是要在其中提取 {% data variables.product.prodname_codeql_cli %} 包的文件夹。
- 通过将 `/<extraction-root>/codeql` 添加到 `PATH`，这样就可以像 `codeql` 一样运行可执行文件。

## 测试 {% data variables.product.prodname_codeql_cli %} 设置

提取 {% data variables.product.prodname_codeql_cli %} 包后，您可以运行以下命令来验证是否正确设置了 CLI 以创建和分析数据库。

- `codeql resolve qlpacks` 如果 `/<extraction-root>/codeql` 位于 `PATH`。
- 否则为 `/<extraction-root>/codeql/codeql resolve qlpacks`。

从成功的输出提取：
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

您应该检查输出是否包含预期的语言，以及 qlpack 文件的目录位置是否正确。 位置应在提取的 {% data variables.product.prodname_codeql_cli %} 包内，如上图所示为 `<extraction root>`，除非使用的是 `github/codeql` 的签出。 如果 {% data variables.product.prodname_codeql_cli %} 找不到预期语言的 qlpacks，请检查您是否下载了 {% data variables.product.prodname_codeql %} 捆绑包，而不是 {% data variables.product.prodname_codeql_cli %} 的独立副本。

## 使用 {% data variables.product.product_name %} 生成用于身份验证的令牌

每个 CI 服务器都需要 {% data variables.product.prodname_github_app %} 或用于 {% data variables.product.prodname_codeql_cli %} 的个人访问令牌，才能将结果上传到 {% data variables.product.product_name %}。 必须使用具有 `security_events` 写入权限的访问令牌或 {% data variables.product.prodname_github_app %}。 如果CI 服务器已使用具有此作用域的令牌从 {% data variables.product.product_name %} 检出仓库， 您可以允许 {% data variables.product.prodname_codeql_cli %} 使用相同的令牌。 否则，应创建具有 `security_events` 写入权限的新令牌，然后将其添加到 CI 系统的机密存储中。 有关信息，请参阅“[生成 {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)”和“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

## 后续步骤

您现在可以配置 CI 系统运行 {% data variables.product.prodname_codeql %} 分析、生成结果并上传到 {% data variables.product.product_name %}，在那里结果将匹配分支或拉取请求并显示为 {% data variables.product.prodname_code_scanning %} 警报。 有关详细信息，请参阅“[在 CI 系统中配置 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)”。
