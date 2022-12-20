---
title: Обзор GitHub Codespaces
shortTitle: Overview
intro: 'В этом руководстве вы узнаете больше о {% data variables.product.prodname_github_codespaces %} и о том, как работает это решение и как его можно использовать.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
ms.openlocfilehash: 9d01df3f8dae7ceb788e2dd57b02fb3cc977400d
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164326'
---
## Что такое codespace?

codespace — это среда разработки, размещенная в облаке. Вы можете настроить проект для {% data variables.product.prodname_github_codespaces %} путем фиксации [файлов конфигурации](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) в репозитории (часто называют "конфигурация как код"), что создает повторяемую конфигурацию codespace для всех пользователей проекта.

Каждое пространство кода выполняется на виртуальной машине, размещенной в {% data variables.product.prodname_dotcom %}. Вы можете выбрать тип компьютера, который вы хотите использовать, в зависимости от необходимых ресурсов. Доступны различные типы компьютеров, начиная с 2-ядерных процессоров, 4 ГБ ОЗУ и 32 ГБ хранилища. 

Вы можете подключиться к codespace из браузера, из {% data variables.product.prodname_vscode %}, из приложения шлюза JetBrains или с помощью {% data variables.product.prodname_cli %}.

![Схема работы {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-diagram.png)

## Использование {% data variables.product.prodname_github_codespaces %}

Чтобы начать разработку с использованием облачных вычислительных ресурсов, можно создать codespace из шаблона или из любой ветви или фиксации в репозитории. При создании codespace из шаблона можно начать с пустого шаблона или выбрать шаблон, подходящий для выполняемой работы.

{% data reusables.codespaces.links-to-get-started %}

### Использование codespace, принадлежащих вашей личной учетной записи

Для всех личных учетных записей {% data variables.product.prodname_dotcom_the_website %} предусмотрена ежемесячная квота на бесплатное использование {% data variables.product.prodname_github_codespaces %}, включенная в план "Бесплатный" или "Pro". Вы можете приступить к работе с {% data variables.product.prodname_github_codespaces %} в личной учетной записи без изменения параметров или предоставления сведений об оплате.

Вы можете создать и использовать codespace для любого репозитория, который можно клонировать. Вы также можете использовать шаблон для создания codespace, которые изначально не связаны с репозиторием. Если вы создаете codespace из репозитория, принадлежащего организации, плата за использование codespace будет взиматься либо с организации (если организация настроена для этого), либо за вашу личную учетную запись. Плата за codespace, созданные на основе шаблонов, всегда взимается с вашей личной учетной записи. 

{% data reusables.codespaces.codespaces-continue-by-payment %} 

### Использование принадлежащих организации codespace

Владельцы организации могут включить использование {% data variables.product.prodname_github_codespaces %}, оплачиваемого учетной записью организации или предприятия. Это относится к пространствам кода, созданным из репозиториев, принадлежащих организации. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_github_codespaces %} для организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization). Вы можете установить предельную сумму расходов для использования {% data variables.product.prodname_github_codespaces %} в учетной записи организации или предприятия. Дополнительные сведения см. в разделе [Управление предельными суммами расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).

Если плата за использование codespace будет выставляться организации или предприятию, это отображается при создании codespace. Дополнительные сведения см. в разделе [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository). Codespace, счета за которые выставляются организации или ее родительскому предприятию, принадлежат организации и могут быть удалены ее владельцем. Дополнительные сведения см. в разделе [Удаление codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization). 

### Настройка {% data variables.product.prodname_github_codespaces %}

Чтобы настроить среды выполнения и средства в codespace, можно создать одну или несколько конфигураций контейнеров разработки для репозитория. Добавление конфигураций контейнеров разработки в репозиторий позволяет определиться с выбором различных сред разработки, подходящих для работы пользователей, которая будет выполняться в репозитории. 

Если вы создаете codespace из репозитория без конфигураций контейнера разработки, {% data variables.product.prodname_github_codespaces %} клонирует репозиторий в среду с образом codespace по умолчанию, который включает множество средств, языков и сред выполнения. При создании codespace на основе шаблона можно начать с начальной конфигурации поверх образа по умолчанию. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

Вы можете персонализировать аспекты среды codespace с помощью общедоступного репозитория [файлов точек](https://dotfiles.github.io/tutorials/) . Файлы точек можно использовать для задания псевдонимов и настроек оболочки или для установки личных настроек инструментов, которые вы хотите использовать. Если вы используете {% data variables.product.prodname_github_codespaces %} в браузере или в {% data variables.product.prodname_vscode %}, вы можете использовать [синхронизацию параметров](https://code.visualstudio.com/docs/editor/settings-sync) , чтобы предоставить редактору codespace те же параметры, сочетания клавиш, фрагменты кода и расширения, которые вы настроили в локальной установке {% data variables.product.prodname_vscode %}. 

Дополнительные сведения см. в статье [Настройка codespace](/codespaces/customizing-your-codespace).

## Выставление счетов за {% data variables.product.prodname_codespaces %}

Сведения о ценах, хранении и использовании {% data variables.product.prodname_github_codespaces %} см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} Сведения о том, как владельцы организаций и менеджеры по выставлению счетов могут управлять предельной суммой расходов для {% data variables.product.prodname_github_codespaces %} для организации, см. в разделе [Управление лимитами расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces).
