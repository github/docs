---
title: 기존 SSH 키 확인
intro: SSH 키를 생성하기 전에 기존 SSH 키가 있는지 확인할 수 있습니다.
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
ms.openlocfilehash: 1869bdc1960e90ab8deef1608d36f8fa439d1c47
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097757'
---
## SSH 키 정보

SSH를 사용하여 {% ifversion fpt 또는 ghec 또는 ghes %}{% 데이터 variables.location.product_location %}{% elsif ghae %}{% 데이터 variables.product.product_name %}{% endif %}의 리포지토리에서 Git 작업을 수행할 수 있습니다. 자세한 내용은 “[ SSH 정보](/authentication/connecting-to-github-with-ssh/about-ssh)”를 참조하세요.

기존 SSH 키가 있는 경우 이 키를 사용하여 SSH를 통해 Git 작업을 인증할 수 있습니다.

## 기존 SSH 키 확인

새 SSH 키를 생성하기 전에 로컬 머신에서 기존 키를 확인해야 합니다.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 기존 SSH 키가 있는지 확인하려면 `ls -al ~/.ssh`를 입력합니다.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. 디렉터리 목록을 확인하여 이미 퍼블릭 SSH 키가 있는지 확인합니다. 기본적으로 {% data variables.product.product_name %}에 대해 지원되는 퍼블릭 키의 {% ifversion ghae %}파일 이름은 *id_rsa.pub* 입니다.{% data variables.product.product_name %}에 대해 지원되는 퍼블릭 키의 {% else %}파일 이름은 다음 중 하나입니다.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **팁**: *~/.ssh* 가 존재하지 않는다는 오류가 표시되는 경우 기본 위치에 기존 SSH 키 쌍은 존재하지 않습니다. 다음 단계에서 새 SSH 키 쌍을 만들 수 있습니다.

  {% endtip %}

4. 새 SSH 키를 생성하거나 기존 키를 업로드합니다.
    - 지원되는 퍼블릭 및 프라이빗 키 쌍이 없거나 사용 가능한 키를 사용하지 않으려면 새 SSH 키를 생성합니다.
    - {% data variables.product.product_name %}에 연결하는 데 사용하려는 기존 퍼블릭 및 프라이빗 키 쌍(예: *id_rsa.pub* 및 *id_rsa*)이 나열된 경우 ssh-agent에 키를 추가할 수 있습니다.

      새 SSH 키를 생성하거나 ssh-agent에 기존 키를 추가하는 방법에 대한 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”를 참조하세요.
