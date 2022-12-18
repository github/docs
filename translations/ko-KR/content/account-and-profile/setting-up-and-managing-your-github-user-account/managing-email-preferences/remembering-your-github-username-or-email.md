---
title: GitHub 사용자 이름 또는 메일 저장
intro: Are you signing in to {% data variables.product.product_location %} for the first time in a while? If so, welcome back! If you can't remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.
redirect_from:
- /articles/oh-noes-i-ve-forgotten-my-username-email
- /articles/oh-noes-i-ve-forgotten-my-username-or-email
- /articles/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Find your username or email
ms.openlocfilehash: 79cb3ba65390e384272540bd32a1ec9e598517f4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090077"
---
{% mac %}

## <a name="-data-variablesproductprodname_desktop--users"></a>{% data variables.product.prodname_desktop %} 사용자

1. **GitHub 데스크톱** 메뉴에서 **기본 설정** 을 클릭합니다.
2. 기본 설정 창에서 다음을 확인합니다.
    - {% data variables.product.product_name %} 사용자 이름을 보려면 **계정** 을 클릭합니다.
    - Git 메일을 보려면 **Git** 을 클릭합니다. 해당 메일이 [기본 {% data variables.product.product_name %} 메일](/articles/changing-your-primary-email-address)로 설정된다는 보장은 없습니다.

{% endmac %}

{% windows %}

## <a name="-data-variablesproductprodname_desktop--users"></a>{% data variables.product.prodname_desktop %} 사용자

1. **파일** 메뉴에서 **옵션** 을 클릭합니다.
2. 옵션 창에서 다음을 확인합니다.
    - {% data variables.product.product_name %} 사용자 이름을 보려면 **계정** 을 클릭합니다.
    - Git 메일을 보려면 **Git** 을 클릭합니다. 해당 메일이 [기본 {% data variables.product.product_name %} 메일](/articles/changing-your-primary-email-address)로 설정된다는 보장은 없습니다.
  
{% endwindows %}

## <a name="finding-your-username-in-your-username-configuration"></a>`user.name` 구성에서 사용자 이름 찾기

설정하는 동안 [Git에서 사용자 이름을 설정](/github/getting-started-with-github/setting-your-username-in-git)했을 수 있습니다. 설정한 경우, 다음 구성 설정의 값을 검토할 수 있습니다.

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## <a name="finding-your-username-in-the-url-of-remote-repositories"></a>원격 리포지토리의 URL에서 사용자 이름 찾기

만들거나 포크한 개인 리포지토리의 로컬 복사본이 있는 경우 원격 리포지토리의 URL을 확인할 수 있습니다.

{% tip %}

**팁**: 이 방법은 원본 리포지토리 또는 다른 사용자 리포지토리의 사용자 고유 포크가 있는 경우에만 사용할 수 있습니다. 다른 사용자의 리포지토리를 복제하는 경우 해당 사용자 이름이 대신 표시됩니다. 마찬가지로, 조직 리포지토리는 원격 URL에 특정 사용자 대신 조직 이름을 표시합니다.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

`https://{% data variables.command_line.backticks %}/` 바로 다음에 사용자 이름이 표시됩니다.

{% ifversion fpt or ghec %}
## <a name="further-reading"></a>추가 참고 자료

- “[메일 주소 확인](/articles/verifying-your-email-address)” {% endif %}
