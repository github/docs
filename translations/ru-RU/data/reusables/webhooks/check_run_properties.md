---
ms.openlocfilehash: 32ab126dadd891784d769bd869cf563c6783aedc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067271"
---
Ключ | Тип | Описание
----|------|-------------
`action`|`string` | выполненные операции; Возможные значения: <ul><li> `created` — было создано выполнение проверки.</li><li> `completed` — `status` выполнения проверки имеет значение `completed`.</li><li> `rerequested` — кто-то запросил повторное выполнение проверки из пользовательского интерфейса запроса на вытягивание. Дополнительные сведения о пользовательском интерфейсе GitHub см. в статье "[Сведения о проверках состояния](/articles/about-status-checks#checks)". При получении действия `rerequested`необходимо [создать выполнение проверки](/rest/reference/checks#create-a-check-run). Полезные данные `rerequested` получит только приложение {% data variables.product.prodname_github_app %}, которое кто-то запрашивает для повторного выполнения проверки.</li><li> `requested_action` — кто-то запросил выполнение действия, предоставляемого вашим приложением. Полезные данные `requested_action` получит только приложение {% data variables.product.prodname_github_app %}, которое кто-то запрашивает для выполнения действия. Дополнительные сведения о выполнениях проверок и запрошенных действиях см. в статье "[Выполнения проверок и запрошенные действия](/rest/reference/checks#check-runs-and-requested-actions)".</li></ul>
`check_run`|`object` | [check_run](/rest/reference/checks#get-a-check-run).
`check_run[status]`|`string` | Текущее состояние выполнения проверки. Возможные значения: `queued`, `in_progress` или `completed`.
`check_run[conclusion]`|`string` | Результат завершенного выполнения проверки. Допустимые значения: `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` или `stale` Это значение будет равно `null` до тех пор, пока выполнение проверки не будет иметь значение `completed`.
`check_run[name]`|`string` | Имя выполнения проверки.
`check_run[check_suite][id]`|`integer` | Идентификатор набора проверок, в который входит это выполнение проверки.
`check_run[check_suite][pull_requests]`|`array`| Массив запросов на вытягивание, которые соответствуют этому набору проверок. Запрос на вытягивание соответствует набору проверок, если их `head_branch` совпадает.<br/><br/>**Примечание**.<ul><li>`head_sha` набора проверок может отличаться от `sha` запроса на вытягивание, если последующие отправки выполняются в запрос на вытягивание.</li><li>Если `head_branch` набора проверок находится в разветвленном репозитория, он будет равен`null`, а массив `pull_requests` будет пустым.</li></ul>
`check_run[check_suite][deployment]`|`object`| Развертывание в среду репозитория. Заполняется только в том случае, если выполнение проверки было создано заданием рабочего процесса {% data variables.product.prodname_actions %}, ссылающимся на среду.
`requested_action`|`object` | Действие, запрошенное пользователем.
`requested_action[identifier]`|`string` | Ссылка интегратора на действие, запрошенное пользователем.
