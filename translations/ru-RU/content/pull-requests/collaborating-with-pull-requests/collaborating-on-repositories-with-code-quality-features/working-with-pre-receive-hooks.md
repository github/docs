---
title: Работа с перехватчиками предварительного получения
intro: '*Перехватчики предварительного получения* применяют правила для вкладов, прежде чем фиксации можно будет отправить в репозиторий.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
  - /articles/working-with-pre-receive-hooks
  - /github/collaborating-with-issues-and-pull-requests/working-with-pre-receive-hooks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
versions:
  ghes: '*'
shortTitle: Pre-receive hooks
ms.openlocfilehash: 6ca26aed9e9d92abfb6d742f7f4ca968c442b447
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332595'
---
Перехватчики предварительного получения выполняют тесты для отправляемого в репозиторий кода, чтобы обеспечить соответствие вкладов политике репозитория или организации. Если содержимое фиксации успешно проходит тесты, отправка принимается в репозиторий. Если содержимое фиксации не проходит тесты, отправка не принимается.

Если отправка не принята, появится сообщение об ошибке, соответствующее перехватчику предварительного получения, для которого произошел сбой.

```shell
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 916 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: always_reject.sh: failed with exit status 1
remote: error: rejecting all pushes
To https://54.204.174.51/hodor/nope.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://54.204.174.51/hodor/nope.git'
```

![Сообщение об ошибке для перехватчика предварительного получения, для которого произошел сбой](/assets/images/help/pull_requests/pre-receive-hook-failed-error.png)

Администратор сайта {% data variables.product.product_name %} может создавать и удалять перехватчики предварительного получения для организации или репозитория, а также разрешить администраторам организации или репозитория включать или отключать такие перехватчики. Дополнительные сведения см. в разделе [Принудительное применение политики с использованием перехватчиков предварительного получения](/enterprise/admin/guides/developer-workflow/using-pre-receive-hooks-to-enforce-policy).
