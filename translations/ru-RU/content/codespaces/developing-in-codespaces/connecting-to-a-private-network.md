---
title: Подключение к частной сети
intro: 'Вы можете подключить {% data variables.product.prodname_github_codespaces %} к ресурсам в частной сети, включая реестры пакетов, серверы лицензий и локальные базы данных.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 92b8f2b9ea438a4cc799aec1969ff6773f90c298
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159925'
---
## Сведения о сети пространства codespace

По умолчанию пространства codespace кода имеют доступ ко всем ресурсам в общедоступном Интернете, включая диспетчеры пакетов, серверы лицензирования, базы данных и API облачной платформы, но у них нет доступа к ресурсам в частных сетях.

## Подключение к ресурсам в частной сети

В настоящее время существует два метода доступа к ресурсам в частной сети в {% data variables.product.prodname_github_codespaces %}.
- Использование расширения {% data variables.product.prodname_cli %} для настройки локального компьютера в качестве шлюза для удаленных ресурсов.
- Использование VPN. 

### Использование расширения GitHub CLI для доступа к удаленным ресурсам

{% note %}

**Примечание.** Расширение {% data variables.product.prodname_cli %} сейчас предоставляется в бета-версии и подлежит изменениям. 

{% endnote %}

Расширение {% data variables.product.prodname_cli %} позволяет создать мост между codespace и вашим локальным компьютером, чтобы разрешить codespace обращаться к любому удаленному ресурсу, доступному с вашего компьютера. Codespace использует локальный компьютер в качестве сетевого шлюза для получения доступа к этим ресурсам. Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_cli %} для получения доступа к удаленным ресурсам](https://github.com/github/gh-net#codespaces-network-bridge).

   
   

### Использование VPN для доступа к ресурсам в частной сети

В качестве альтернативы расширению {% data variables.product.prodname_cli %} вы можете использовать VPN для получения доступа к ресурсам за частной сетью из codespace.

Для доступа к ресурсам в частной сети мы рекомендуем использовать такие средства VPN, как [OpenVPN](https://openvpn.net/). Дополнительные сведения см. в разделе [Использование клиента OpenVPN из {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces-contrib/codespaces-openvpn).

Существует также ряд сторонних решений, которые, хотя и не были явно одобрены {% data variables.product.prodname_dotcom %}, предоставили примеры интеграции с {% data variables.product.prodname_github_codespaces %}.

К таким сторонним решениям относятся следующие:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Добавление в список разрешений частных ресурсов для пространств codespace

Хотя {% data variables.product.prodname_dotcom %} публикует диапазоны IP-адресов для нескольких продуктов в своем Meta API, IP-адреса пространств codespace динамически назначаются, то есть не гарантируется, что у пространства codespace будет один и то же IP-адрес в течение дня. Мы настоятельно не рекомендуем пользователям включать весь диапазон IP-адресов, поскольку это обеспечит чрезмерно широкий доступ ко всем пространствам codespace (включая пользователей, не связанных с вашими пространствами codespace).

Дополнительные сведения о Meta API см. в разделе [Meta](/rest/reference/meta).

## Ограничение доступа к общедоступному Интернету

В настоящее время нет способа ограничить доступ к пространствам codespace из общедоступного Интернета или ограничить доступ пользователей, прошедших проверку подлинности, к переадресованному порту.

Дополнительные сведения о защите codespace см. в разделе [Безопасность в {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces).
