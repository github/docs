---
title: Настройка автоматического удаления codespace
shortTitle: Configure automatic deletion
intro: "Неактивные codespace автоматически удаляются. Вы можете выбрать срок хранения остановленных codespace не более 30\_дней."
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5414d2223f490638f27475840a25883e9c353e77
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160111'
---
По умолчанию {% data variables.product.prodname_github_codespaces %} автоматически удаляются после остановки и остаются неактивными в течение 30 дней.

Тем не менее, так как {% data variables.product.prodname_github_codespaces %} взимает плату за хранение, вы можете сократить срок хранения, изменив период по умолчанию в личных параметрах для {% data variables.product.prodname_github_codespaces %}. Дополнительные сведения о стоимости хранения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

{% note %}

**Примечание.** Даже если вы задали период хранения codespace, рекомендуется сразу удалять codespace. Дополнительные сведения см. в разделе [Удаление codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).

{% endnote %}

Автоматическое удаление происходит независимо от того, содержит ли codespace неотправленные изменения. Чтобы предотвратить автоматическое удаление codespace, просто снова откройте его. Период хранения сбрасывается при каждом подключении к codespace, а обратный отсчет хранения перезапускается при остановке codespace.

Если репозиторий принадлежит организации, администратор организации может задать период хранения для всей организации. Если этот период меньше периода хранения по умолчанию, указанного в личных параметрах, к codespace в этом репозитории будет применяться период хранения, заданный для организации. Дополнительные сведения см. в разделе [Ограничение периода хранения для codespace](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

Каждое codespace имеет собственный период хранения. Таким образом, у вас могут быть codespace с разными периодами аренды. Например, если:
* Вы создали codespace, изменили период хранения по умолчанию, а затем создали другое codespace.
* Вы создали codespace с помощью {% data variables.product.prodname_cli %} и указали другой период хранения.
* Вы создали codespace из репозитория, принадлежащего организации, где уже настроен период хранения.

{% note %}

**Примечание**. Период хранения указан в днях. День представляет собой 24-часовой период, начиная с момента остановки codespace.

{% endnote %}

{% webui %}

## Настройка периода хранения по умолчанию для ваших codespace

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Период хранения по умолчанию" введите количество дней, в течение которых необходимо по умолчанию хранить codespace после его остановки. 

   ![Выбор периода хранения](/assets/images/help/codespaces/setting-default-retention.png)

   Вы можете задать период хранения по умолчанию в днях: от `0` до `30`. 

   {% warning %}

   **Предупреждение.** Если установить период `0`, codespace будут удаляться сразу после остановки или когда закончится время ожидания из-за отсутствия активности. Дополнительные сведения см. в разделе [Настройка времени ожидания для {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces).

   {% endwarning %}
 
1. Выберите команду **Сохранить**.

При создании codespace с помощью {% data variables.product.prodname_cli %} вы можете переопределить это значение по умолчанию. Если вы создаете codespace в организации, где указан более короткий период хранения, значение организации будет иметь приоритет над вашими настройками.

Если вы задали период хранения более одного дня, вы получите уведомление по электронной почте за один день до удаления. 

## Проверка оставшегося времени до автоматического удаления

Вы можете проверить, будет ли codespace автоматически удалено в ближайшее время. 

Если неактивное codespace приближается к концу периода хранения, это отображается в списке codespace на {% data variables.product.prodname_dotcom %} по адресу [https://github.com/codespaces](https://github.com/codespaces).

![Сообщение о скором удалении в списке codespace на {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## Задание периода хранения для codespace

Чтобы задать период хранения для codespace при создании codespace, используйте флаг `--retention-period` с подкомандой `codespace create`. Укажите период в днях. Период должен находиться в диапазоне от 0 до 30 дней.

```shell
gh codespace create --retention-period DAYS
```

Если вы не указываете период хранения при создании codespace, будет использоваться либо период хранения по умолчанию, либо период хранения организации, в зависимости от того, какое значение меньше. Сведения о настройке периода хранения по умолчанию см. на вкладке "Веб-браузер" на этой странице. 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## Установка периода хранения

Вы можете задать период хранения по умолчанию в веб-браузере на {% data variables.product.prodname_dotcom_the_website %}. Кроме того, если вы используете {% data variables.product.prodname_cli %} для создания codespace, можно задать период хранения для этого конкретного codespace. Дополнительные сведения см. на соответствующей вкладке.

## Проверка того, будут ли codespace автоматически удалены в ближайшее время

В классическом приложении {% data variables.product.prodname_vscode %} можно проверить, будет ли codespace автоматически удалено в ближайшее время.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Выберите **{% data variables.product.prodname_github_codespaces %}** в раскрывающемся меню в правом верхнем углу удаленного обозревателя, если он еще не выбран.
1. В разделе "GITHUB CODESPACES" наведите указатель мыши на интересующее вас codespace. Появится всплывающее окно с информацией о codespace.

   Если приближается конец периода хранения codespace, вы увидите строку с сообщением о том, когда codespace будет удалено.

   ![Сведения о codespace, отображающие время до удаления](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
