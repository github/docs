---
title: 'Ошибка: неизвестный тип ключа'
intro: 'Эта ошибка означает, что используемый тип ключа SSH не был распознан или не поддерживается клиентом SSH. '
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
ms.openlocfilehash: 83bf8714255a4d8f028beb73fd5c8fbcdbb0ef52
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065901'
---
## Сведения об ошибке `unknown key type`

При создании нового ключа SSH может возникнуть ошибка `unknown key type`, если указанный тип ключа не поддерживается клиентом SSH.{% mac %}Чтобы решить эту проблему в macOS, можно обновить клиент SSH или установить новый.

## Предварительные требования

Должен быть установлен Homebrew. Дополнительные сведения см. в [руководстве по установке](https://docs.brew.sh/Installation) в документации по Homebrew.

## Решение проблемы

{% warning %}

**Предупреждение.** При установке OpenSSH компьютер не сможет получить парольную фразу, хранящуюся в цепочке ключей Apple. Вам потребуется ввести парольную фразу или взаимодействовать с ключом безопасности оборудования при каждой проверке подлинности с помощью SSH для {% data variables.product.prodname_dotcom %} или другой веб-службы.

При удалении OpenSSH парольные фразы, хранящиеся в цепочке ключей, снова станут доступны для извлечения. Можно удалить OpenSSH, введя команду `brew uninstall openssh` в терминале.

{% endwarning %}

1. Откройте терминал.
2. Введите команду `brew install openssh`.
3. Закройте и снова запустите терминал.
4. Повторите процедуру, чтобы еще раз создать новый ключ SSH. Дополнительные сведения см. в разделе [Создание нового ключа SSH и его добавление в агент SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key).

{% endmac %}{% linux %}Для решения этой проблемы в Linux используйте диспетчер пакетов для дистрибутива Linux, чтобы установить новую версию OpenSSH или скомпилировать новую версию из источника. Установка другой версии OpenSSH может повлиять на возможность проверки подлинности других приложений через SSH. Дополнительные сведения см. в документации по дистрибутиву.{% endlinux %}
