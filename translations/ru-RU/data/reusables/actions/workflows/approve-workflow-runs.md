---
ms.openlocfilehash: fec57b88af5ef5b7227d88a8c70e5a4b4bb9c769
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163839"
---
Ответственные за обслуживание с доступом на запись к репозиторию могут использовать следующую процедуру для проверки и запуска рабочих процессов при поступлении запросов на вытягивание от участников, которым требуется утверждение.

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. Проверьте предлагаемые изменения в запросе на вытягивание и убедитесь в том, что рабочие процессы можно спокойно выполнить в ветви запроса на вытягивание. Особенного внимания требуют предлагаемые изменения в каталоге `.github/workflows/`, влияющие на файлы рабочего процесса.
1. Если вы уверены, что рабочие процессы можно спокойно выполнить в ветви запроса на вытягивание, вернитесь на вкладку {% octicon "comment-discussion" aria-label="The discussion icon" %} **Беседа** и в разделе "Рабочие процессы, ожидающие утверждения" нажмите кнопку **Утвердить и запустить**.

   ![Утверждение и запуск рабочих процессов](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)