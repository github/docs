---
title: Управление правилом защиты ветвей
intro: 'Вы можете создать правило защиты ветвей, чтобы принудительно применять определенные рабочие процессы для одной или нескольких ветвей, например, запрашивать проверку с целью утверждения или передавать проверки состояния для всех запросов на вытягивание, объединенных в защищенную ветвь.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Branch protection rule
ms.openlocfilehash: 31539b135754d92086aefbe82858b59b6bb56d7b
ms.sourcegitcommit: 56bb42b36f77ece7c9845a350d3764807de00eac
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101310'
---
## Сведения о правилах защиты ветвей

{% data reusables.repositories.branch-rules-example %}

Вы можете создать правило для всех текущих и будущих ветвей в репозитории, используя синтаксис с подстановочным знаком `*`. Так как в {% data variables.product.company_short %} используется флаг `File::FNM_PATHNAME` для синтаксиса `File.fnmatch`, подстановочный знак не соответствует разделителям каталогов (`/`). Например, `qa/*` будет соответствовать всем ветвям, начинающимся с `qa/` и содержащим одну косую черту. Вы можете включить несколько косых черт, используя синтаксис `qa/**/*`, и расширить строку `qa` в виде `qa**/**/*`, чтобы сделать правило менее строгим. Дополнительные сведения о параметрах синтаксиса для правил в отношении ветвей см. в [документации по fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Если в репозитории настроено несколько правил защиты ветвей, относящихся к одним и тем же ветвям, наивысший приоритет имеют правила, в которых указано определенное имя ветви. Если определенное имя ветви указано в нескольких правилах защиты ветвей, то наивысший приоритет будет иметь правило, созданное первым.

Правила защиты ветвей, в которых используется специальный символ, например `*`, `?` или `]`, применяются в порядке их создания, поэтому более старые правила с этими символами имеют более высокий приоритет.

Чтобы создать исключение из существующего правила защиты ветвей, можно создать новое правило с более высоким приоритетом, например правило для определенного имени ветви.

Дополнительные сведения о всех доступных параметрах защиты ветвей см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches).

## Создание правила защиты ветвей

При создании правила защиты ветвей не обязательно, чтобы указанная ветвь уже существовала в репозитории.

{% данных reusables.repositories.navigate-to-repo %} {% данных reusables.repositories.sidebar-settings %} {% данных reusables.repositories.repository-branches %} {% данных reusables.repositories.add-branch-protection-rules %} {% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %}
1. При необходимости включите требуемые запросы на вытягивание.
   - В разделе "Защита соответствующих ветвей" выберите **Требовать запрос на вытягивание перед слиянием**.
     ![Флажок обязательной проверки запроса на вытягивание](/assets/images/help/repository/PR-reviews-required-updated.png)
   - Чтобы затребовать утверждения перед слиянием запроса на вытягивание, выберите параметр **Требовать утверждения**, откройте раскрывающееся меню **Требуемое количество утверждений перед слиянием**, а затем выберите количество утверждений, требуемое для ветви.
     ![Раскрывающееся меню для выбора требуемого количества утверждений](/assets/images/help/repository/number-of-required-review-approvals-updated.png) {% else %}
1. При необходимости включите обязательные проверки запросов на вытягивание.
   - В разделе "Защита соответствующих ветвей" выберите **Требовать проверки запросов на вытягивание перед слиянием**.
     ![Флажок обязательной проверки запроса на вытягивание](/assets/images/help/repository/PR-reviews-required.png)
   - В раскрывающемся меню **Требуемое количество утверждений** выберите количество утверждений, которое требуется для ветви. 
     ![Раскрывающееся меню для выбора требуемого количества утверждений](/assets/images/help/repository/number-of-required-review-approvals.png) {% endif %}
   - При необходимости, чтобы пропустить утверждение запроса на вытягивание при отправке фиксации с изменением кода в ветвь, выберите параметр **Пропускать устаревшие утверждения запросов на вытягивание при отправке новых фиксаций**.
     ![Флажок "Пропускать устаревшие утверждения запросов на вытягивание при отправке новых фиксаций"](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Если необходимо требовать проверку владельцем кода в случае, если запрос на вытягивание влияет на код с назначенным владельцем, выберите параметр **Требовать проверку владельцами кода**. Дополнительные сведения см. в разделе [Сведения о владельцах кода](/github/creating-cloning-and-archiving-repositories/about-code-owners).
     ![Требовать проверку от владельцев](/assets/images/help/repository/PR-review-required-code-owner.png) кода {% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %}
   - При необходимости, чтобы разрешить определенным субъектам отправлять код в ветвь, не создавая запросы на вытягивание, когда это требуется, выберите **Разрешить определенным субъектам пропускать создание запросов на вытягивание**. Затем найдите и выберите субъекты, которым необходимо разрешить пропускать создание запроса на вытягивание.
     ![Флажок для разрешения определенным субъектам обходить требования запроса на вытягивание]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %} {% endif %}
   - Если репозиторий является частью организации, при необходимости выберите параметр **Ограничить возможность пропуска проверок запросов на вытягивание**. Затем найдите и выберите субъекты, которым разрешено закрывать проверки запросов на вытягивание. Дополнительные сведения см. в разделе [Пропуск проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).
     ! [Ограничение того, кто может отклонить отзывы о запросе на вытягивание] {% ifversion integration-branch-protection-exceptions %} (/assets/images/help/repository/PR-review-required-dismissals-with-apps.png) {% else %} (/assets/images/help/repository/PR-review-required-dismissals.png) {% endif %} {% ifversion last-pusher-require-approval %}
   - При необходимости, чтобы требовать от кого-либо, кроме последнего пользователя, отправить в ветвь утверждение запроса на вытягивание перед слиянием, выберите **"Требовать утверждение от другого пользователя, кроме последнего push-запроса**". Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-pull-request-reviews-before-merging).
     ![Требовать проверку от кого-либо, кроме последнего push-сервера](/assets/images/help/repository/last-pusher-review-required.png) {% endif %}
1. При необходимости включите обязательные проверки состояния. Дополнительные сведения см. в разделе [Сведения о проверках состояния](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).
   - Выберите параметр **Требовать прохождения проверок состояния перед слиянием**.
     ![Параметр обязательных проверок состояния](/assets/images/help/repository/required-status-checks.png)
   - Чтобы запросы на вытягивание обязательно тестировались с использованием последнего кода в защищенной ветви, выберите параметр **Требовать актуальности ветвей перед слиянием**.
     ![Флажок обязательного или необязательного состояния](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Найдите проверки состояния и выберите нужные.
     ![Интерфейс поиска доступных проверок состояния со списком обязательных проверок](/assets/images/help/repository/required-statuses-list.png)
1. При необходимости выберите параметр **Требовать устранения разногласий перед слиянием**.
  ![Параметр "Требовать устранения разногласий перед слиянием"](/assets/images/help/repository/require-conversation-resolution.png)
1. При необходимости выберите параметр **Требовать подписания фиксаций**.
  ![Параметр "Требовать подписания фиксаций"](/assets/images/help/repository/require-signed-commits.png)
1. При необходимости выберите параметр **Требовать линейной истории**.
  ![Параметр "Требовать линейной истории"](/assets/images/help/repository/required-linear-history.png) {%- ifversion fpt or ghec %}
1. Если необходимо объединять запросы на вытягивание с помощью очереди слияния, выберите параметр **Требовать использования очереди слияния**. {% data reusables.pull_requests.merge-queue-references %} ![Параметр "Требовать использования очереди слияния"](/assets/images/help/repository/require-merge-queue.png) {% tip %}

  **Совет**. Функция очереди слияния запросов на вытягивание в настоящее время доступна в ограниченной общедоступной бета-версии и может быть изменена. Владельцы организаций могут запросить ранний доступ к бета-версии, добавившись в [список ожидания](https://github.com/features/merge-queue/signup).

  {% endtip %} {%- endif %} {%- ifversion required-deployments %}
1. Если необходимо выбрать среды, в которых изменения должны быть успешно развернуты перед слиянием, выберите параметр **Требовать успешного развертывания перед слиянием**, а затем выберите среды.
   ![Требовать успешный вариант](/assets/images/help/repository/require-successful-deployment.png) развертывания {%- endif %} {% ifversion lock-branch %}
1. При необходимости выберите **"Заблокировать ветвь", чтобы сделать ветвь** доступной только для чтения.
![Снимок экрана: флажок для блокировки ветви](/assets/images/help/repository/lock-branch.png) 
   -  При необходимости, чтобы разрешить синхронизацию вилок, выберите **"Разрешить синхронизацию вилок**".
![Снимок экрана: флажок, позволяющий синхронизировать](/assets/images/help/repository/lock-branch-forksync.png) вилки {%- endif %}
1. При необходимости выберите {% ifversion bypass-branch-protections %}**Не разрешать обход указанных выше параметров**.
![Флажок "Не разрешать обход указанных выше параметров"](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png){% else %}**Применить указанные выше правила к администраторам**.
![Флажок "Применить указанные выше правила к администраторам"](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. При необходимости{% ifversion fpt or ghec %}, если репозиторий принадлежит организации, использующей {% data variables.product.prodname_team %} или {% data variables.product.prodname_ghe_cloud %},{% endif %} включите ограничения для ветвей.
   - Выберите параметр **Ограничить пользователей, которые могут выполнять отправку в соответствующие ветви**.
     ![Флажок для ограничения ветви](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - При необходимости, чтобы также ограничить создание соответствующих ветвей, выберите **Ограничить отправки, создающие соответствующие ветви**.
     ![Флажок для ограничения создания ветви](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - Найдите и выберите пользователей, команды или приложения, которым будет разрешено выполнять отправку в защищенную ветвь или создать соответствующую ветвь.
     ![Поиск ограничений для ветви]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. При необходимости в разделе "Правила, применяемые ко всем, включая администраторов" выберите параметр **Разрешить принудительную отправку**.
  ![Разрешить принудительной отправки параметр](/assets/images/help/repository/allow-force-pushes.png) {% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} Затем выберите, кто может принудительно отправить в ветвь.
    - Выберите вариант **Все**, чтобы разрешить всем, у кого есть по крайней мере разрешения на запись в репозиторий, включая администраторов, выполнять принудительную отправку в ветвь.
    - Выберите **Указать, кто может выполнять принудительную отправку**, чтобы разрешить выполнять принудительную отправку в ветвь только определенным субъектам. Затем найдите и выберите эти субъекты.
      ![Снимок экрана: параметры для указания пользователей, которые могут выполнять принудительную отправку]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %} {% endif %}

    Дополнительные сведения о принудительной отправке см. в разделе [Разрешение принудительной отправки](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes).
1. При необходимости выберите параметр **Разрешить удаление**.
  ![Параметр для разрешения удаления ветвей](/assets/images/help/repository/allow-branch-deletions.png)
1. Нажмите кнопку **Создать**.

## Изменение правила защиты ветвей

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. Справа от правила защиты ветвей, которое нужно изменить, щелкните **Изменить**.
  ![Кнопка "Изменить"](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Внесите необходимые изменения в правило защиты ветвей.
1. Нажмите кнопку **Сохранить изменения**.
  ![Кнопка "Сохранить изменения"](/assets/images/help/repository/save-branch-protection-rule.png)

## Удаление правила защиты ветвей

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. Справа от правила защиты ветвей, которое нужно удалить, щелкните **Удалить**.
    ![Кнопка "Удалить"](/assets/images/help/repository/delete-branch-protection-rule.png)
