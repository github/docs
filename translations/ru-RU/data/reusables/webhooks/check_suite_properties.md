---
ms.openlocfilehash: 67fd6cd7e895b7e121c0972702473305fc560b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147116196"
---
Ключ | Тип | Описание
----|------|-------------
`action`|`string` | выполненные операции; Возможны следующие варианты:<ul><li>`completed` — все выполнения проверок в наборе проверок завершены.</li><li>`requested` — происходит при отправке нового кода в репозиторий приложения. При получении события действия `requested` вам потребуется [создать новое выполнение проверки](/rest/reference/checks#create-a-check-run).</li><li>`rerequested` — происходит, когда кто-то запрашивает повторное выполнение всего набора проверок из пользовательского интерфейса запроса на вытягивание. При получении события действия `rerequested` вам потребуется [создать новое выполнение проверки](/rest/reference/checks#create-a-check-run). Дополнительные сведения о пользовательском интерфейсе GitHub см. в статье "[Сведения о проверках состояния](/articles/about-status-checks#checks)".</li></ul>
`check_suite`|`object` | [check_suite](/rest/reference/checks#suites).
`check_suite[head_branch]`|`string` | Имя главной ветви, в которой находятся изменения.
`check_suite[head_sha]`|`string` | SHA последней фиксации для этого набора проверок.
`check_suite[status]`|`string` | Сводные данные о состоянии всех выполнений проверок, входящих в набор проверок. Может иметь значение `queued`, `requested`, `in_progress` или `completed`.
`check_suite[conclusion]`|`string`| Сводные данные о заключении всех выполнений проверок, входящих в набор проверок. Это может быть `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` или `stale`. Это значение будет равно `null` до тех пор, пока выполнение проверки не будет иметь значение `completed`.
`check_suite[url]`|`string` | URL-адрес, указывающий на ресурс API набора проверки.
`check_suite[pull_requests]`|`array`| Массив запросов на вытягивание, которые соответствуют этому набору проверок. Запрос на вытягивание соответствует набору проверок, если их `head_branch` совпадает.<br/><br/>**Примечание**.<ul><li>`head_sha` набора проверок может отличаться от `sha` запроса на вытягивание, если последующие отправки выполняются в запрос на вытягивание.</li><li>Если `head_branch` набора проверок находится в разветвленном репозитория, он будет равен`null`, а массив `pull_requests` будет пустым.</li></ul>
