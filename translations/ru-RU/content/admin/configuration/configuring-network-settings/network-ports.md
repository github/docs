---
title: Сетевые порты
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 'Выборочно откройте сетевые порты с учетом сетевых служб, которые необходимо предоставить администраторам, конечным пользователям и службе поддержки по электронной почте.'
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 048b27ed44cea11057c781ae3043078a825f8d1a
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160659'
---
## Административные порты

Некоторые административные порты необходимы для настройки {% data variables.location.product_location %} и выполнения определенных функций. Административные порты не требуются для использования основного приложения конечными пользователями.

| Порт | Служба | Описание |
|---|---|---|
| 8443 | HTTPS | Безопасный {% data variables.enterprise.management_console %} на основе Интернета. Требуется для базовой установки и конфигурации. |
| 8080 | HTTP | Обычный текст на основе Интернета {% data variables.enterprise.management_console %}. Не требуется, если TLS не отключен вручную. |
| 122 | SSH | Доступ к оболочке для {% data variables.location.product_location %}. Требуется для открытия входящих подключений между всеми узлами в конфигурации высокого уровня доступности. Порт SSH по умолчанию (22) выделен для Git и сетевого трафика приложения SSH. |
| 1194/UDP | VPN | Безопасный туннель сети репликации в конфигурации высокого уровня доступности. Должен быть открытым для связи между всеми узлами в конфигурации.|
| 123/UDP| NTP | Требуется для операции протокола времени. |
| 161/UDP | SNMP | Требуется для работы протокола мониторинга сети. |

## Порты приложений для конечных пользователей

Порты приложений предоставляют конечным пользователям доступ к веб-приложениям и Git.

| Порт | Служба | Описание |
|---|---|---|
| 443 | HTTPS | Доступ к веб-приложению и Git по протоколу HTTPS. |
| 80 | HTTP | Доступ к веб-приложению. Все запросы перенаправляются на порт HTTPS, если настроен TLS. |
| 22 | SSH | Доступ к Git через SSH. Поддерживает операции клонирования, получения и отправки в общедоступные и частные репозитории. |
| 9418 | Git | Порт протокола Git поддерживает операции клонирования и получения в общедоступные репозитории с незашифрованным взаимодействием по сети. {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## Порты электронной почты

Порты электронной почты должны быть доступны напрямую или через ретранслятор для поддержки входящей электронной почты для конечных пользователей.

| Порт | Служба | Описание |
|---|---|---|
| 25 | SMTP | Поддержка SMTP с шифрованием (STARTTLS). |

## Порты {% data variables.product.prodname_actions %}

Порты {% data variables.product.prodname_actions %} должны быть доступны для локальных средств выполнения тестов для подключения к {% data variables.location.product_location %}. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server)."

| Порт | Служба | Описание |
|---|---|---|
| 443 | HTTPS | Локальные средства выполнения тестов подключаются к {% data variables.location.product_location %} для получения назначений заданий и скачивания новых версий приложения средства выполнения. Требуется, если настроен TLS.
| 80 | HTTP | Локальные средства выполнения тестов подключаются к {% data variables.location.product_location %} для получения назначений заданий и скачивания новых версий приложения средства выполнения. Требуется, если TLS не настроен.

Если включить автоматический доступ к действиям {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_actions %} всегда будет сначала искать действие в {% data variables.location.product_location %} через эти порты, прежде чем проверять {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в статье "[Включение автоматического доступа к действиям {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect)".

## Порты {% data variables.product.prodname_github_connect %}

Если вы включите {% data variables.product.prodname_github_connect %}, подключение между {% data variables.product.product_name %} и {% data variables.product.prodname_dotcom_the_website %} использует протокол HTTPS через порты 443 или 80, и требуется протокол TLS. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

## Дополнительные материалы

- [Настройка TLS](/admin/configuration/configuring-network-settings/configuring-tls)
