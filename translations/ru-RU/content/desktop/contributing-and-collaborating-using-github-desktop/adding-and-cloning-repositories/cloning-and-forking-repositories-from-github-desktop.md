---
title: Клонирование и создание ветки для репозиториев из GitHub Desktop
intro: 'Вы также можете использовать {% data variables.product.prodname_desktop %} для клонирования репозиториев и создания в них вилок, существующих в {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  fpt: '*'
shortTitle: Clone & fork from Desktop
ms.openlocfilehash: e4182e56d0418e3aea07c94e0a3657ef8e104ea0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092321'
---
## Сведения о локальных репозиториях
Репозитории на {% data variables.product.prodname_dotcom %} являются удаленными. Можно клонировать или разветвить репозиторий с {% data variables.product.prodname_desktop %} для создания локального репозитория на компьютере.

Можно создать локальную копию любого репозитория на {% data variables.product.product_name %}, к которому у вас есть доступ, путем клонирования репозитория. Если у вас есть репозиторий или права на запись, можно синхронизировать локальное и удаленное расположение. Дополнительные сведения см. в разделе [Синхронизация ветви](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch).

При клонировании репозитория любые изменения, которые вы отправляете в {% data variables.product.product_name %}, повлияют на исходный репозиторий. Чтобы внести изменения, не затрагивая исходный проект, можно создать отдельную копию, разветвив репозиторий. Можно создать запрос на вытягивание, чтобы предложить ответственным включить изменения в вилке в исходный основной репозиторий. Дополнительные сведения см. в статье [Сведения о вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

При попытке использовать {% data variables.product.prodname_desktop %} для клонирования репозитория, к которому у вас нет доступа для записи, {% data variables.product.prodname_desktop %} предложит автоматически создать вилку. Можно использовать свою вилку для внесения вклада в исходный вышестоящий репозиторий или для самостоятельной работы над своим собственным проектом. Все существующие вилки по умолчанию вносят изменения в вышестоящий репозиторий. Можно изменить этот выбор в любое время. Дополнительные сведения см. в разделе [Управление поведением вилки](#managing-fork-behavior).

Можно также клонировать репозиторий напрямую из {% data variables.product.prodname_dotcom %} или {% data variables.product.prodname_enterprise %}. Дополнительные сведения см. в разделе [Клонирование репозитория из {% data variables.product.prodname_dotcom %} в {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/).

## Клонирование репозитория

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

## Создание вилки репозитория
Если клонировать репозиторий, к которому у вас нет доступа для записи, {% data variables.product.prodname_desktop %} создаст вилку. После создания или клонирования вилки {% data variables.product.prodname_desktop %} спросит, как вы планируете использовать вилку.

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %} {% data reusables.desktop.fork-type-prompt %}

## Управление поведением вилки
Вы можете изменить поведение вилки с вышестоящим репозиторием в {% data variables.product.prodname_desktop %}.

{% data reusables.desktop.open-repository-settings %} {% data reusables.desktop.select-fork-behavior %}

## Создание псевдонима для локального репозитория
Можно создать псевдоним для локального репозитория, чтобы различать репозитории с тем же именем в {% data variables.product.prodname_desktop %}. Создание псевдонима не влияет на имя репозитория на {% data variables.product.prodname_dotcom %}. В списке репозиториев псевдонимы отображаются курсивом.

1. В левом верхнем углу {% data variables.product.prodname_desktop %} справа от имени текущего репозитория щелкните {% octicon "triangle-down" aria-label="The triangle-down icon" %}.
2. Щелкните правой кнопкой мыши репозиторий, для которого вы хотите создать псевдоним, а затем щелкните **Создать псевдоним**.
3. Введите псевдоним для репозитория.
4. Щелкните **Создать псевдоним**.

## Дополнительные материалы
- [Сведения об удаленных репозиториях](/github/getting-started-with-github/about-remote-repositories)
