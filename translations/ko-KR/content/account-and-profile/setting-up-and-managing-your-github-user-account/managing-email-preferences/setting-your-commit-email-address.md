---
title: 커밋 메일 주소 설정
intro: You can set the email address that is used to author commits on {% data variables.product.product_location %} and on your computer.
redirect_from:
- /articles/keeping-your-email-address-private
- /articles/setting-your-commit-email-address-on-github
- /articles/about-commit-email-addresses
- /articles/git-email-settings
- /articles/setting-your-email-in-git
- /articles/set-your-user-name-email-and-github-token
- /articles/setting-your-commit-email-address-in-git
- /articles/setting-your-commit-email-address
- /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Set commit email address
ms.openlocfilehash: da47c240cc53e18d5f5537f20dd8c1eb2f4127bf
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090071"
---
## <a name="about-commit-email-addresses"></a>커밋 메일 주소 정보

{% data variables.product.prodname_dotcom %}은 커밋 메일 주소를 사용하여 {% data variables.product.product_location %}의 계정과 커밋을 연결합니다. 명령줄에서 푸시하는 커밋과 연결된 메일 주소 및 사용자가 만드는 웹 기반 Git 작업을 선택할 수 있습니다.

웹 기반 Git 작업의 경우 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}에서 커밋 메일 주소를 설정할 수 있습니다. 명령줄에서 푸시하는 커밋의 경우 Git에서 커밋 메일 주소를 설정할 수 있습니다.

{% ifversion fpt or ghec %}커밋 메일 주소 변경 전에 만든 커밋은 이전 메일 주소에 계속 연결됩니다.{% else %}{% data variables.product.product_name %}에서 커밋 메일 주소를 변경한 후 새 메일 주소가 향후 모든 웹 기반 Git 작업에 기본적으로 표시됩니다. 커밋 메일 주소를 변경하기 전에 수행한 모든 커밋은 여전히 이전 메일 주소와 연결됩니다.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**참고**: {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}개인 메일 주소를 비공개로 유지하려면 {% data variables.product.product_name %}의 `no-reply` 메일 주소와 커밋 메일 주소를 사용하면 됩니다. 명령줄에서 푸시하는 커밋에 `noreply` 메일 주소를 사용하려면 Git에서 커밋 메일 주소를 설정할 때 해당 메일 주소를 사용합니다. 웹 기반 Git 작업에 `noreply` 주소를 사용하려면 GitHub에서 커밋 메일 주소를 설정하고 **내 메일 주소를 비공개로 유지** 하도록 선택합니다.

개인 메일 주소를 노출하는 명령줄에서 푸시하는 커밋을 차단하도록 선택할 수도 있습니다. 자세한 내용은 “[개인 메일을 노출하는 명령줄 푸시 차단](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)”을 참조하세요. {% endif %}

커밋이 사용자에게 귀속되고 기여 그래프에 표시되도록 하려면 {% data variables.product.product_location %}{% ifversion fpt or ghec %}의 계정에 연결된 메일 주소 또는 메일 설정에서 제공된 `noreply` 메일 주소를 사용합니다.{% endif %} {% ifversion not ghae %}자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정에 메일 주소 추가](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)”를 클릭하세요.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**참고:** 2017년 7월 18일 이후에 {% data variables.product.product_location %}에서 계정을 만든 경우 {% data variables.product.product_name %}의 `no-reply` 메일 주소는 <code><em>ID+username</em>@users.noreply.github.com</code> 형태의 7자리 ID 번호와 사용자 이름입니다. 2017년 7월 18일 이전에 {% data variables.product.product_location %}에서 계정을 만든 경우 {% data variables.product.product_name %}의 `no-reply` 메일 주소는 <code><em>username</em>@users.noreply.github.com</code>입니다. 메일 설정에서 **메일 주소 비공개로 유지** 를 선택하거나 선택 취소했다가 다시 선택하여 {% data variables.product.product_name %}의 ID 기반 `no-reply` 메일 주소를 가져올 수 있습니다.

{% endnote %}

{% data variables.product.product_name %}의 `noreply` 메일 주소를 사용하여 커밋을 한 다음 [사용자 이름을 변경](/articles/changing-your-github-username)하면 해당 커밋이 {% data variables.product.product_location %}의 사용자 계정과 연결되지 않습니다. 이는 {% data variables.product.product_name %}의 ID 기반 `noreply` 주소를 사용 중인 경우에는 적용되지 않습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 사용자 이름 변경](/articles/changing-your-github-username)”을 참조하세요.{% endif %}

## <a name="setting-your-commit-email-address-on--data-variablesproductprodname_dotcom-"></a>{% data variables.product.prodname_dotcom %}에서 커밋 메일 주소 설정

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## <a name="setting-your-commit-email-address-in-git"></a>Git에서 커밋 메일 주소 설정

`git config` 명령을 사용하여 Git 커밋과 연결할 메일 주소를 변경할 수 있습니다. 설정한 새 메일 주소는 명령줄에서 {% data variables.product.product_location %}으로 푸시하는 이후 커밋에 표시됩니다. 커밋 메일 주소를 변경하기 전에 수행한 모든 커밋은 여전히 이전 메일 주소와 연결됩니다.

### <a name="setting-your-email-address-for-every-repository-on-your-computer"></a>컴퓨터의 모든 리포지토리에 메일 주소 설정

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### <a name="setting-your-email-address-for-a-single-repository"></a>단일 리포지토리에 대한 메일 주소 설정

{% data variables.product.product_name %}은 로컬 Git 구성의 메일 주소 집합을 사용하여 명령줄에서 푸시된 커밋을 {% data variables.product.product_location %}의 계정과 연결합니다.

단일 리포지토리에서 만드는 커밋과 연결된 메일 주소를 변경할 수 있습니다. 이렇게 하면 이 하나의 리포지토리에서 전역 Git 구성 설정이 재정의되지만 다른 리포지토리에는 영향을 주지 않습니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Git 커밋과 연결하는 메일 주소를 구성하려는 로컬 리포지토리로 현재 작업 디렉터리를 변경합니다.
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
