---
title: Просмотр и повтор проверок в GitHub Desktop
shortTitle: Viewing and re-running checks
intro: 'Состояние проверок и их повторное выполнение можно просмотреть в {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
ms.openlocfilehash: d763dc4e4b30844b905b4e601df6c9cb500c8094
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068027'
---
## Сведения о проверках в {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} отображает состояние проверок, которые выполнялись в ветвях запроса на вытягивание. Значок проверки рядом с именем ветви отображает *ожидающее, успешное* или *неудачное* состояние проверок. Также можно повторно запустить все, неудачные или отдельные проверки при просмотре состояния проверок в {% data variables.product.prodname_desktop %}. Дополнительную информацию о настройке проверок в репозитории см. в разделе [Сведения о проверках состояния](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

{% data variables.product.prodname_desktop %} также отображает системное уведомление при сбое проверки. Дополнительные сведения о включении уведомлений см. в разделе [Настройка уведомлений в GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop).

## Просмотр и повтор проверки

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %} ![Вкладка "Запросы на вытягивание" в раскрывающемся меню "Текущая ветвь"](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![Список открытых запросов на вытягивание в репозитории](/assets/images/help/desktop/click-pull-request.png)
4. Щелкните номер запроса на вытягивание справа от имени ветви запроса на вытягивание.
  ![Отображение проверки рядом с именем ветви](/assets/images/help/desktop/checks-dialog.png)
5. Чтобы повторно выполнить неудачные проверки, щелкните **Повтор {% octicon "sync" aria-label="The sync icon" %}** и выберите **Повторно выполнить неудачные проверки**.
  ![Кнопка "Повторно выполнить неудачные проверки"](/assets/images/help/desktop/re-run-failed-checks.png)
6. Чтобы повторно выполнить отдельные проверки, наведите курсор на отдельную проверку, которую нужно повторно запустить, и нажмите значок {% octicon "sync" aria-label="The sync icon" %} для повторного запуска проверки.
  ![Кнопка "Повторно выполнить отдельные проверки"](/assets/images/help/desktop/re-run-individual-checks.png)
7. Откроется диалоговое окно подтверждения со сводкой проверок, которые будут выполняться повторно. Нажмите кнопку **Выполнить повторную проверку**, чтобы подтвердить, что вы хотите выполнить повторную проверку.
  ![Диалоговое окно подтверждения повторного выполнения](/assets/images/help/desktop/re-run-confirmation-dialog.png)
