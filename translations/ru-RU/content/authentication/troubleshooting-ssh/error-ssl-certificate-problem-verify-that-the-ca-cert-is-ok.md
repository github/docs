---
title: 'Ошибка: проблема с SSL-сертификатом, проверьте правильность указанного ЦС'
intro: 'Эта ошибка означает, что корневой сертификат ЦС устарел. Если корневой сертификат ЦС необходимо обновить, вы не сможете выполнять отправку или извлечение из репозиториев {% data variables.product.product_name %}.'
redirect_from:
  - /articles/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSL certificate problem
ms.openlocfilehash: 26777edf5b312c8f45c5b1fb211b87648778cf13
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088191'
---
Полученная ошибка может выглядеть следующим образом:

```shell
$ git push -u github.main
> fatal: 'github.main' does not appear to be a git repository
> fatal: The remote end hung up unexpectedly

$ git pull -u github
> error: SSL certificate problem, verify that the CA cert is OK. Details:
> error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed while accessing https://github.com/tqisjim/google-oauth.git/info/refs
> fatal: HTTP request failed
```

"ЦС" — это сокращение для "центра сертификации", сторонней группы, ответственной за обработку безопасных подключений по всему Интернету. Они выдают цифровые "сертификаты", которые гарантируют, что подключения между двумя компьютерами (например, компьютером и GitHub.com) являются допустимыми. Без сертификата риск нарушения безопасности при обмене данными между двумя компьютерами возрастает.

Если отображается эта ошибка, то, скорее всего, ваш ЦС устарел и должен быть обновлен. Как правило, при обновлении операционной системы также обновляется и ЦС, в результате чего проблема устраняется.
