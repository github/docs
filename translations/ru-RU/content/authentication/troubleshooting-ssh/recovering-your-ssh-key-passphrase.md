---
title: Восстановление парольной фразы ключа SSH
intro: 'Если вы потеряли парольную фразу для ключа SSH, то в зависимости от используемой операционной системы можно восстановить парольную фразу ключа SSH или создать новую парольную фразу.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101673'
---
{% mac %}

Если вы [настроили парольную фразу SSH с помощью цепочки ключей macOS](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), ее можно восстановить.

1. В Finder найдите приложение **Keychain Access**.
   ![Панель поиска "Интересное"](/assets/images/help/setup/keychain-access.png)
2. В Keychain Access найдите **SSH**.
3. Дважды щелкните запись для ключа SSH, чтобы открыть новое диалоговое окно.
4. В левом нижнем углу выберите **Показать пароль**.
   ![Диалоговое окно Keychain Access](/assets/images/help/setup/keychain_show_password_dialog.png)
5. Будет выведен запрос на ввод административного пароля. Введите его в диалоговое окно Keychain Access.
6. Отобразится пароль.

{% endmac %}

{% windows %}

Если вы потеряете парольную фразу ключа SSH, восстановить ее будет невозможно. Вам потребуется [создать новый SSH keypair](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) или [переключиться на клонирование HTTPS](/github/getting-started-with-github/about-remote-repositories#cloning-with-https-urls) , чтобы вместо этого можно было использовать {% данных variables.product.pat_generic %}.

{% endwindows %}

{% linux %}

Если вы потеряете парольную фразу ключа SSH, восстановить ее будет невозможно. Вам потребуется [создать новый SSH keypair](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) или [переключиться на клонирование HTTPS](/github/getting-started-with-github/about-remote-repositories#cloning-with-https-urls) , чтобы вместо этого можно было использовать {% данных variables.product.pat_generic %}.

{% endlinux %}
