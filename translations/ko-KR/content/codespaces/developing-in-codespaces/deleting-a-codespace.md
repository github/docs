---
title: codespace 삭제
intro: 더 이상 필요하지 않은 codespace를 삭제할 수 있습니다.
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Delete a codespace
ms.openlocfilehash: 24b53cc0cead2b6b15894ada4c799abc8e1c6e7a
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188258'
---
{% data variables.product.prodname_cli %}를 사용하여 터미널에서, {% data variables.product.prodname_vscode %}에서 또는 웹 브라우저에서 다양한 방법으로 codespace를 삭제할 수 있습니다. 이 문서의 탭을 사용하여 codespace를 삭제하는 각 방법에 대한 지침을 표시합니다.

{% note %}

**참고**: JetBrains 게이트웨이 또는 JetBrains 클라이언트 애플리케이션 내에서 또는 JupyterLab 내에서 codespace를 삭제할 수 없습니다.

{% endnote %}

codespace 저장과 관련된 비용이 있습니다. 따라서 더 이상 필요하지 않은 모든 codespace를 삭제해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”를 참조하세요.

{% data reusables.codespaces.max-number-codespaces %}

## Codespace 삭제

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 삭제할 codespace 오른쪽에 있는 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음, **{% octicon "trash" aria-label="The trash icon" %} 삭제** 를 클릭합니다.

   ![삭제 단추](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

codespace를 삭제하려면 `gh codespace delete` 하위 명령을 사용한 다음, 표시되는 목록에서 codespace를 선택합니다.

```shell
gh codespace delete
```

저장되지 않은 변경 내용이 있는 경우 삭제를 확인하라는 메시지가 표시됩니다. `--force` 플래그를 사용하여 강제로 삭제하면 이 메시지를 표시하지 않을 수 있습니다.

이 명령에 대한 자세한 내용은 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_codespace_delete)를 참조하세요.

{% endcli %}

## codespace 일괄 삭제

{% webui %}

{% data variables.product.prodname_cli %}을 사용하여 단일 명령으로 여러 codespace 또는 모든 codespace를 삭제할 수 있습니다. 자세한 내용은 이 페이지 위쪽의 {% data variables.product.prodname_cli %} 탭을 클릭합니다.

{% endwebui %}

{% vscode %}

{% data variables.product.prodname_cli %}을 사용하여 단일 명령으로 여러 codespace 또는 모든 codespace를 삭제할 수 있습니다. 자세한 내용은 이 페이지 위쪽의 {% data variables.product.prodname_cli %} 탭을 클릭합니다.

{% endvscode %}


{% cli %}

`gh codespace delete` 다음에 다음 플래그 중 하나를 사용하여 단일 명령으로 여러 codespace 또는 모든 codespace를 삭제할 수 있습니다.

`--all` - 모든 codespace를 삭제합니다.

`--repo REPOSITORY` - 해당 리포지토리에 대한 모든 codespace를 삭제합니다. 또는 `--days` 플래그와 함께 사용하여 codespace의 사용 기간을 기준으로 필터링합니다.

`--days NUMBER` - 지정된 일 수보다 오래된 모든 codespace를 삭제합니다. `--repo` 플래그와 함께 사용할 수 있습니다.

기본적으로 저장되지 않은 변경 내용이 포함된 모든 codespace의 삭제를 확인하는 메시지가 표시됩니다. `--force` 플래그를 사용하여 확인을 건너뛸 수 있습니다. 

### 예제

7일보다 더 전에 만든 `octo-org/octo-repo` 리포지토리의 모든 codespace를 삭제합니다.

```
gh codespace delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## 조직의 codespace 삭제

조직 소유자는 {% data variables.product.prodname_cli %}를 사용하여 조직의 모든 codespace를 삭제할 수 있습니다.

{% webui %}

자세한 내용은 이 페이지 위쪽의 {% data variables.product.prodname_cli %} 탭을 클릭합니다.

{% endwebui %}

{% vscode %}

자세한 내용은 이 페이지 위쪽의 {% data variables.product.prodname_cli %} 탭을 클릭합니다.

{% endvscode %}

{% cli %}

1. 다음 명령 중 하나를 입력하여 codespace 목록을 표시합니다.
   * `gh codespace delete --org ORGANIZATION` - 지정된 조직의 현재 codespace를 나열합니다. 
   * `gh codespace delete --org ORGANIZATION --user USER` - 지정된 사용자가 만든 codespace만 나열합니다.
   지정된 조직의 소유자여야 합니다.
1. codespace 목록에서 삭제할 codespace로 이동합니다.
1. 선택한 codespace를 삭제하려면 <kbd>Enter</kbd> 키를 누릅니다.

   codespace에 저장되지 않은 변경 내용이 포함되어 있으면 삭제 확인 메시지가 표시됩니다.

{% endcli %}

REST API를 사용하여 조직의 codespace를 삭제할 수도 있습니다. 자세한 내용은 “[Codespaces 조직](/rest/codespaces/organizations#delete-a-codespace-from-the-organization)”을 참조하세요.

## 추가 정보
- "[codespace 수명 주기](/codespaces/getting-started/the-codespace-lifecycle)"
- "[codespace의 자동 삭제 구성](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)"
