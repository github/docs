---
title: 'Отправка ветви, заблокированной защитой от отправки'
intro: 'Функция защиты от отправки {% data variables.product.prodname_secret_scanning %} превентивно защищает вас от утечки секретов в репозиториях. Вы можете разрешить заблокированные отправки и после удаления обнаруженного секрета отправить изменения в рабочую ветвь из командной строки или пользовательского веб-интерфейса.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
ms.openlocfilehash: 0d702637d55b7c04d71e7834c6d34743cc5f68b5
ms.sourcegitcommit: 6bc8b888e02cc31ec01464186ed4530889cf2408
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101617'
---
## О защите от отправки для {% data variables.product.prodname_secret_scanning %}

Функция защиты от отправки {% data variables.product.prodname_secret_scanning %} помогает предотвратить утечки секретных данных за счет проверки на наличие секретов перед отправкой изменений в репозиторий. {% data reusables.secret-scanning.push-protection-overview %} Сведения о секретах и поставщиках услуг, поддерживаемых функцией защиты от отправки, см. в разделе [{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection).

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**Совет.** Если {% data variables.product.prodname_dotcom %} блокирует секрет, который, как вы считаете, можно безопасно отправить, вы можете разрешить секрет и указать причину, по которой следует разрешить отправку. Дополнительные сведения об обходе защиты от отправки секретов см. в разделах [Как разрешить отправку заблокированного секрета](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed) и [Обход защиты отправки секрета](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret), касающихся командной строки и веб-интерфейса соответственно. 

{% endtip %}

{% ifversion push-protection-custom-link-orgs %} 

Администраторы могут предоставить настраиваемую ссылку для включения в сообщение от {% data variables.product.product_name %} при блокировке вашей отправки. Эта ссылка может содержать ресурсы и рекомендации, относящиеся к вашей организации и ее политикам.
{% endif %}

## Как разрешить заблокированную отправку в командной строке

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

Если заблокированный секрет был внесен последней фиксацией в вашей ветви, следуйте приведенным ниже инструкциям.

1. Удалите секрет из кода.
1. Зафиксируйте изменения с помощью `git commit --amend`.
1. Отправьте изменения с помощью команды `git push`.

Вы также можете удалить секрет, если он отображается в более ранней фиксации в журнале Git.

1. Чтобы узнать, какая фиксация, появившаяся в ошибке отправки, была первой в журнале, используйте команду `git log`.
1. Запустите интерактивное перемещение изменений из одной ветви в другую с помощью команды `git rebase -i <commit-id>~1`. <commit-id> — это идентификатор фиксации из шага 1.
1. Определите фиксацию, которую нужно редактировать, изменив `pick` на `edit` в первой строке текста, который отображается в редакторе.
1. Удалите секрет из кода.
1. Зафиксируйте изменения с помощью команды `git commit --amend`.
1. Выполните команду `git rebase --continue`, чтобы завершить перемещение изменений из одной ветви в другую.

## Как разрешить заблокированную фиксацию в пользовательском веб-интерфейсе

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

Чтобы разрешить заблокированную фиксацию в веб-интерфейсе, необходимо удалить секрет из файла. Также можно воспользоваться раскрывающимся списком **Обход защиты**, чтобы разрешить секрет. Дополнительные сведения об обходе защиты от отправки в пользовательском веб-интерфейсе см. в разделе [Защита отправок с помощью сканирования секретов](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret).

Если вы убедились, что секрет реальный, необходимо удалить его из файла. После удаления секрета баннер в верхней части страницы изменится — на нем будет информация о том, что теперь можно зафиксировать изменения.
