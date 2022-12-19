---
title: Устранение неполадок при создании и удалении codespace
intro: 'В этой статье описаны действия по устранению распространенных проблем, которые могут возникнуть при создании или удалении codespace, включая проблемы с хранилищем и конфигурацией.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 4a12c848fa7400ec336f5ad086eb4d2858a431f0
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180822'
---
## Создание codespace

### Нет доступа для создания codespace
{% data variables.product.prodname_github_codespaces %} доступен не для всех репозиториев. Если параметры для создания codespace не отображаются, {% data variables.product.prodname_github_codespaces %} может быть недоступно для этого репозитория. Дополнительные сведения см. в разделе [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#access-to-codespaces).

При условии, что вы используете {% data variables.product.prodname_github_codespaces %} в личной учетной записи или настроили метод оплаты и предельную сумму расходов, вы сможете создавать codespace для общедоступных репозиториев. Однако вы можете создать пространство кода для частного репозитория, только если вы можете отправить изменения в репозиторий или создать вилку репозитория.

Дополнительные сведения о включенном использовании для личных учетных записей и настройке предельной суммы расходов см. в разделах [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) и [Управление предельной суммой расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces).

### Codespace не открывается при создании

Если вы создаете codespace, а он не открывается:

1. Попробуйте перезагрузить страницу, если возникла проблема с кэшированием или отчетами.
2. Перейдите на свою страницу {% data variables.product.prodname_github_codespaces %}: https://github.com/codespaces и проверьте, указан ли там новый codespace. Возможно, процесс успешно создал codespace, но не смог отправить отчет в ваш браузер. Если новый codespace указан в списке, его можно открыть непосредственно с этой страницы.
3. Повторите попытку создания codespace для репозитория, чтобы исключить временный сбой связи.

Если по-прежнему не удается создать codespace для репозитория, в котором доступна {% data variables.product.prodname_github_codespaces %}, {% data reusables.codespaces.contact-support %}

### Сбой при создании Codespace

Если создание codespace завершается сбоем, скорее всего, это может быть вызвано временной проблемой инфраструктуры в облаке, например с подготовкой виртуальной машины для codespace. Менее распространенной причиной сбоя является то, что сборка контейнера занимает больше часа. В этом случае сборка отменяется, и создание codespace завершится ошибкой.

{% note %}

**Примечание:** Пространство кода, которое не было создано, никогда не будет пригодным для использования и должно быть удалено. Дополнительные сведения см. в разделе [Удаление codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).

{% endnote %}

Если вы создаете codespace и создание завершается сбоем:

1. Проверьте [страницу состояния](https://githubstatus.com) {% data variables.product.prodname_dotcom %} на наличие активных инцидентов.
1. Перейдите на [страницу {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces), удалите codespace и создайте новое codespace.
1. Если контейнер создается, просмотрите журналы, которые являются потоковой передачей, и убедитесь, что сборка не зависла. Сборка контейнера, которая занимает больше одного часа, будет отменена, что приведет к сбою создания.

   Один из распространенных сценариев, в котором это может произойти, — если у вас запущен скрипт, который запрашивает ввод данных пользователем и ожидает ответа. В этом случае удалите интерактивный запрос, чтобы сборка выполнялось неинтерактивно.

   {% note %}

   **Примечание**. Чтобы просмотреть журналы во время сборки, выполните указанные ниже действия.
   * В браузере щелкните **Просмотреть журналы.** 

   ![Снимок экрана: пользовательский веб-интерфейс Codespaces с выделенным элементом ссылки "Просмотреть журналы"](/assets/images/help/codespaces/web-ui-view-logs.png)

   * В классическом приложении VS Code щелкните **Сборка codespace** в появившемся разделе "Настройка удаленного подключения". 

   ![Снимок экрана: VS Code с выделенным элементом "Сборка codespace"](/assets/images/help/codespaces/vs-code-building-codespace.png)

    {% endnote %}
2. Если у вас есть контейнер, сборка которых занимает много времени, рассмотрите возможность использования предварительных сборок для ускорения создания codespace. Дополнительные сведения см. в разделе [Настройка предварительных сборок](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

## Удаление codespace

Codespace может быть удалено только с помощью:
* Пользователь, создавший codespace.
* Владелец организации для принадлежащей организации codespace.
* Автоматическое удаление по окончании периода хранения. 

Дополнительные сведения см. в разделах [Удаление codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) и [Настройка автоматического удаления codespace.](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)

## Хранилище контейнеров

При создании codespace он имеет ограниченный объем хранилища, и со временем может потребоваться освободить место. Попробуйте выполнить любую из следующих команд в терминале {% data variables.product.prodname_github_codespaces %}, чтобы освободить место в хранилище.

- Удалите пакеты, которые больше не используются, с помощью `sudo apt autoremove`.
- Очистите кэш apt с помощью `sudo apt clean`.
- Просмотрите 10 самых больших файлов в codespace с помощью `sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Удалите ненужные файлы, такие как артефакты сборки и журналы.

Некоторые более разрушительные варианты:

- Удалите неиспользуемые образы Docker, сети и контейнеры с помощью `docker system prune` (добавьте `-a`, чтобы удалить все образы, и `--volumes`, если хотите удалить все тома).
- Удалите неотслеживаемые файлы из рабочего дерева: `git clean -i`.

## Конфигурация

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```
Просмотрите журналы создания и при необходимости обновите конфигурацию контейнера разработки. Дополнительные сведения см. в статье [Журналы {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs).

Затем можно попробовать перезапустить codespace или перестроить контейнер. Дополнительные сведения о перестроении контейнера см. в разделе [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).
