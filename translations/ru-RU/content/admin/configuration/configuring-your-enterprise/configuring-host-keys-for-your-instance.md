---
title: Настройка ключей узла для экземпляра
shortTitle: Configure host keys
intro: 'Вы можете повысить безопасность {% data variables.location.product_location %}, настроив алгоритмы, используемые экземпляром для создания и объявления ключей узла для входящих подключений SSH.'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 6454568e63b15fc947994ab39aef9baad9d5c146
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107112'
---
## Сведения о ключах узла для экземпляра

Серверы, принимающие подключения SSH, объявляют один или несколько ключей узла криптографии для безопасной идентификации сервера для клиентов SSH. Чтобы подтвердить удостоверение сервера во время инициализации подключения, клиенты должны хранить и верифицировать ключ узла. Дополнительные сведения см. в разделе [Ключ узла SSH — Что, почему и как](https://ssh.com/academy/ssh/host-key) на веб-сайте SSH Academy.

{% data reusables.enterprise.about-ssh-ports %}

По умолчанию {% data variables.location.product_location %} создает и объявляет ключи узла с помощью смены ключей узла в стиле OpenSSH. Чтобы повысить уровень безопасности SSH в вашей среде, можно включить дополнительные алгоритмы для создания ключей узла.

{% note %}

**Примечание.** Если включить дополнительные алгоритмы ключей узла, клиенты, которые не используют OpenSSH для подключений SSH, могут видеть предупреждения во время подключения, или подключение завершается сбоем. Некоторые реализации SSH могут игнорировать неподдерживаемые алгоритмы и выполнять откат к другому алгоритму. Если клиент не поддерживает откат, подключение завершится ошибкой. Например, библиотека SSH для Go не поддерживает откат к другому алгоритму.

{% endnote %}

## Управление ключом узла Ed25519

Чтобы повысить безопасность клиентов, подключающихся к {% data variables.location.product_location %}, можно включить создание и объявление ключа узла Ed25519. Ed25519 невосприимчив к некоторым атакам, которые нацелены на старые алгоритмы подписи, без ущерба для скорости. Старые клиенты SSH могут не поддерживать Ed25519. По умолчанию экземпляры {% data variables.product.product_name %} не создают и не объявляют ключ узла Ed25519. Дополнительные сведения см. на [веб-сайте Ed25519](https://ed25519.cr.yp.to).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Чтобы включить создание и объявление ключа узла Ed25519, введите следующую команду.

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. При необходимости введите следующую команду, чтобы отключить создание и объявление ключа узла Ed25519.

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
