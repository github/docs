---
title: Сведения о методах слияния в GitHub
intro: 'Вы можете разрешить участникам с принудительным доступом к репозиторию объединить запросы на вытягивание на {% данных variables.location.product_location %} с разными параметрами слияния или применить определенный метод слияния для всех запросов на вытягивание репозитория.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
ms.openlocfilehash: 053a34ba2dd3e2fb948b06b61e65e477328aef3f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099303'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %} Вы можете применить один метод слияния, например фиксация со сжатием или перемещение изменений из одной ветви в другую, включив нужный метод для репозитория.

{% ifversion fpt or ghec %} {% note %}

**Примечание.** При использовании очереди слияния вы больше не можете выбрать метод слияния, так как он управляется очередью. {% data reusables.pull_requests.merge-queue-references %}

{% endnote %} {% endif %}

{% data reusables.pull_requests.default_merge_option %}

Метод слияния по умолчанию создает фиксацию слияния. Вы можете запретить любому пользователю принудительно отправлять фиксации слиянием в защищенную ветвь, применяя журнал линейной фиксации. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-linear-history).

## Сжатие фиксаций слиянием

{% data reusables.pull_requests.squash_and_merge_summary %}

Прежде чем включать сжатие фиксаций, учтите следующие недостатки:
- Вы теряете сведения о том, когда конкретные изменения были внесены первоначально и кто создал сжатые фиксации.
- Если вы продолжите работу с головной ветвью запроса на вытягивание после сжатия и объединения, а затем создадите новый запрос на вытягивание между теми же ветвями, фиксации, которые вы ранее сжали и объединили, будут перечислены в новом запросе на вытягивание. Кроме того, в каждом последующем запросе на вытягивание могут возникать конфликты, которые необходимо будет каждый раз разрешать. Дополнительную информацию см. в разделе [Сведения о слияниях запросов на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch).
- Некоторые команды Git, использующие идентификатор SHA или hash, может быть сложнее использовать, так как идентификатор SHA для исходных фиксаций будет потерян. Например, использование [`git rerere`](https://git-scm.com/docs/git-rerere) может оказаться не столь эффективным.

Дополнительные сведения см. в разделе [Настройка сжатия фиксации для запросов на вытягивание](/articles/configuring-commit-squashing-for-pull-requests).

## Перемещение фиксации из одной ветви в другую и слияние

{% data reusables.pull_requests.rebase_and_merge_summary %}

Перед включением перемещения фиксации из одной ветви в другую, рассмотрите следующие недостатки:
- Участникам репозитория может потребоваться перебазироваться в командной строке, устранить любые конфликты и принудительно отправить изменения в разделную ветвь запроса на вытягивание (или удаленную ветвь), прежде чем они смогут использовать **параметр перебазы и слияния** в {% данных variables.location.product_location %}. Следует проявлять осторожность при отправке с параметром --force, чтобы не перезаписать работу, на основе которой работают другие пользователи. Дополнительные сведения о том, когда параметр **"Перебаза и слияние** " отключен для {% данных variables.location.product_location %}, и рабочий процесс для повторного включения см. в разделе "[Сведения о слиянии запросов на вытягивание](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)".
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

Дополнительные сведения см. в разделе [Настройка перемещения фиксации в другую ветвь для запросов на вытягивание](/articles/configuring-commit-rebasing-for-pull-requests).
