---
title: Устранение проблем с подключениями
intro: 'Если у вас возникли проблемы с подключением к {% data variables.product.prodname_dotcom %}, вы можете устранить неполадки с подключением, а затем используйте средство {% data variables.product.prodname_debug %} для диагностики проблем.'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/using-github/troubleshooting-connectivity-problems
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Connectivity problems
ms.openlocfilehash: 0f3c37070b517b059ca0242fe387492b6266f205
ms.sourcegitcommit: a9d8d12680b6f8d6fc651a23262e4ad85b185040
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101703'
---
Чаще всего проблемы с подключением возникают из-за того, что в настройках брандмауэра, прокси-сервера, корпоративной или другой сети заблокирован {% data variables.product.prodname_dotcom %}.

## Разрешение IP-адресов {% data variables.product.prodname_dotcom %}

Убедитесь, что в настройках сети разрешены IP-адреса {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Сведения об IP-адресах {% data variables.product.prodname_dotcom %}](/articles/about-github-s-ip-addresses).

## Использование сети компании или организации

Если у вас возникли проблемы при работе в сети компании или организации, узнайте у администратора, блокируется ли в сети определенный трафик. Если такая блокировка существует, попросите администратора сети разрешить трафик на {% data variables.product.prodname_dotcom %}.

## Устранение неполадок в работе службы CAPTCHA

Если вы не можете пройти проверку с помощью CAPTCHA:
- Убедитесь, что в браузере включен JavaScript.
- Убедитесь, что ваш браузер поддерживается. Если браузер не поддерживается, обновите его или установите поддерживаемый браузер. Список поддерживаемых браузеров см. [здесь](/articles/supported-browsers).
- Убедитесь, что в настройках сети не заблокирован веб-сайт https://octocaptcha.com/ или https://arkoselabs.com/. Если вы находитесь за корпоративным брандмауэром, попросите ИТ-администратора разрешить эти домены. Чтобы проверить доступ к ним, откройте страницу https://octocaptcha.com/test и убедитесь в наличии текста "Connection successfully made!" (Подключение установлено), а затем откройте страницу https://client-demo.arkoselabs.com/github и убедитесь, что можете загрузить CAPTCHA.
- Убедитесь, что в браузере нет подключаемых модулей или расширений, которые могут мешать работе GitHub. Если они есть, отключите их на время проверки CAPTCHA.

## Переключение между методами клонирования

Переключение с клонирования через SSH на клонирование через HTTPS или наоборот может улучшить подключение. Дополнительные сведения см. в разделе "[Устранение ошибок клонирования](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors)".

Если вы предпочитаете использовать SSH, но порт заблокирован, можно использовать альтернативный порт. Дополнительные сведения см. в разделе "[Использование SSH через порт HTTPS](/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)".

Если при использовании SSH возникает превышение времени ожидания, см. раздел "[Ошибка: недопустимый номер файла](/articles/error-bad-file-number)".

## Решение проблем с низкой скоростью загрузки и периодическим падением скорости подключения

{% data variables.product.prodname_dotcom %} не регулирует пропускную способность для каждого пользователя.

Если скорость вашего подключения снижается только в определенное время суток, скорее всего, это происходит из-за перегрузки сети. Поскольку {% data variables.product.prodname_dotcom %} не может решить проблемы с перегрузкой сети, обратитесь к своему поставщику услуг Интернета.

## Устранение неполадок с помощью {% data variables.product.prodname_debug %}

Если вы выполнили все описанные выше рекомендации по устранению неполадок и по-прежнему испытываете проблемы с подключением, следуйте инструкциям на сайте {% data variables.product.prodname_debug %}, чтобы выполнить тесты и отправить отчеты в службу поддержки {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в статье разделе [{% data variables.product.prodname_debug %}](https://github-debug.com/).
