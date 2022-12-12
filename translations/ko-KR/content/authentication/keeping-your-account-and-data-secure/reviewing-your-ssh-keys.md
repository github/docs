---
title: SSH 키 검토
intro: '자격 증명을 안전하게 유지하려면 정기적으로 SSH 키를 감사하고, 키를 배포하고, {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 계정에 액세스하는 권한 있는 애플리케이션을 검토해야 합니다.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe
  - /articles/reviewing-your-ssh-keys
  - /github/authenticating-to-github/reviewing-your-ssh-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 36c7ae3b6227e13f2afae1d50e71469d155ffca8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094131'
---
공격자가 더 이상 리포지토리에 액세스할 수 없도록 권한이 없는(또는 손상되었을 수 있는) SSH 키를 삭제할 수 있습니다. 유효한 기존 SSH 키를 승인할 수도 있습니다.

{% mac %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. SSH 설정 페이지에서 계정과 연결된 SSH 키를 기록해 둡니다. 인식할 수 없거나 오래된 항목의 경우 **삭제** 를 클릭합니다. 유지하려는 유효한 SSH 키가 있는 경우 **승인** 을 클릭합니다.
    ![SSH 키 목록](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **참고:** 실패한 Git 작업으로 인해 SSH 키를 감사하는 경우 [SSH 키 감사 오류](/articles/error-we-re-doing-an-ssh-key-audit)를 발생시킨 확인되지 않은 키가 SSH 키 목록에 강조 표시됩니다.

  {% endtip %}

4. 터미널을 엽니다.

{% data reusables.command_line.start_ssh_agent %}

6. 퍼블릭 키 지문을 찾아서 기록해 둡니다. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %}의 SSH 키는 컴퓨터의 동일한 키와 일치 해야 합니다.

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. SSH 설정 페이지에서 계정과 연결된 SSH 키를 기록해 둡니다. 인식할 수 없거나 오래된 항목의 경우 **삭제** 를 클릭합니다. 유지하려는 유효한 SSH 키가 있는 경우 **승인** 을 클릭합니다.
    ![SSH 키 목록](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **참고:** 실패한 Git 작업으로 인해 SSH 키를 감사하는 경우 [SSH 키 감사 오류](/articles/error-we-re-doing-an-ssh-key-audit)를 발생시킨 확인되지 않은 키가 SSH 키 목록에 강조 표시됩니다.

  {% endtip %}

4. Git Bash를 엽니다. 

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. 퍼블릭 키 지문을 찾아서 기록해 둡니다. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %}의 SSH 키는 컴퓨터의 동일한 키와 일치 해야 합니다.

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. SSH 설정 페이지에서 계정과 연결된 SSH 키를 기록해 둡니다. 인식할 수 없거나 오래된 항목의 경우 **삭제** 를 클릭합니다. 유지하려는 유효한 SSH 키가 있는 경우 **승인** 을 클릭합니다.
    ![SSH 키 목록](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **참고:** 실패한 Git 작업으로 인해 SSH 키를 감사하는 경우 [SSH 키 감사 오류](/articles/error-we-re-doing-an-ssh-key-audit)를 발생시킨 확인되지 않은 키가 SSH 키 목록에 강조 표시됩니다.

  {% endtip %}

4. 터미널을 엽니다.

{% data reusables.command_line.start_ssh_agent %}

6. 퍼블릭 키 지문을 찾아서 기록해 둡니다. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %}의 SSH 키는 컴퓨터의 동일한 키와 일치 해야 합니다.

{% endlinux %}

{% warning %}

**경고**: {% data variables.product.product_name %}에 익숙하지 않은 SSH 키가 표시되는 경우 즉시 삭제하고, 추가 도움이 필요하면 {% data variables.contact.contact_support %}에 문의하세요. 식별되지 않은 퍼블릭 키는 가능한 보안 문제를 나타낼 수 있습니다.

{% endwarning %}
