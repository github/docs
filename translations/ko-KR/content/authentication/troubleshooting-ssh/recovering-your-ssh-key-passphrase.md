---
title: SSH 키 암호 복구
intro: SSH 키 암호를 분실한 경우 사용하는 운영 체제에 따라 SSH 키 암호를 복구하거나 새 SSH 키 암호를 생성해야 할 수 있습니다.
redirect_from:
  - /articles/how-do-i-recover-my-passphrase
  - /articles/how-do-i-recover-my-ssh-key-passphrase
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/troubleshooting-ssh/recovering-your-ssh-key-passphrase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Recover SSH key passphrase
ms.openlocfilehash: 5dc07e4da3405f505e8f142e3224505266361552
ms.sourcegitcommit: 3ce69524dc95bb450204ba2b8e82ee69af3af833
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101672'
---
{% mac %}

[macOS 키 집합을 사용하여 SSH 암호를 구성](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain)한 경우 암호를 복구할 수 있습니다.

1. Finder에서 **키 집합 액세스** 앱을 검색합니다.
   ![Spotlight 검색 창](/assets/images/help/setup/keychain-access.png)
2. 키 집합 액세스에서 **SSH** 를 검색합니다.
3. SSH 키 항목을 두 번 클릭하여 새 대화 상자를 엽니다.
4. 왼쪽 아래에서 **암호 표시** 를 선택합니다.
   ![키 집합 액세스 대화 상자](/assets/images/help/setup/keychain_show_password_dialog.png)
5. 관리자 암호를 입력하라는 메시지가 표시됩니다. “키 집합 액세스” 대화 상자에 암호를 입력합니다.
6. 암호가 표시됩니다.

{% endmac %}

{% windows %}

SSH 키 암호를 분실한 경우 복구할 방법이 없습니다. 대신 {% 데이터 variables.product.pat_generic %}를 사용할 수 있도록 [새 SSH 키페어를 생성](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) 하거나 [HTTPS 복제로 전환](/github/getting-started-with-github/about-remote-repositories#cloning-with-https-urls) 해야 합니다.

{% endwindows %}

{% linux %}

SSH 키 암호를 분실한 경우 복구할 방법이 없습니다. 대신 {% 데이터 variables.product.pat_generic %}를 사용할 수 있도록 [새 SSH 키페어를 생성](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) 하거나 [HTTPS 복제로 전환](/github/getting-started-with-github/about-remote-repositories#cloning-with-https-urls) 해야 합니다.

{% endlinux %}
