---
title: 'Аналитические сведения для {% data variables.product.prodname_projects_v2 %}'
intro: 'Вы можете просматривать и настраивать диаграммы, созданные на основе данных проекта.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 809d8492bb1ec7c8cd4eb051b1eaefb00d29097e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158576'
---
{% ifversion fpt %}

{% note %}

**Примечание:** Исторические диаграммы в настоящее время доступны в виде предварительной версии функций для организаций, использующих {% data variables.product.prodname_team %}, и предоставляются в общедоступной версии для организаций, использующих {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

{% endif %}

 Вы можете использовать аналитические сведения для {% data variables.product.prodname_projects_v2 %}, чтобы просматривать аналитику и настраивать диаграммы, в которых используются элементы, добавленные в проект как исходные данные. Фильтры можно применять к диаграмме по умолчанию, а также создавать собственные диаграммы. При создании диаграммы вы устанавливаете фильтры, тип диаграммы и отображаемые сведения. Диаграмма будет доступна всем, кто может просматривать проект. Можно создать два типа диаграмм: текущие диаграммы и исторические диаграммы.

 Аналитика отслеживает элементы, которые вы заархивировали или удалили.

 ### Сведения о текущих диаграммах

Вы можете создавать диаграммы с данными за текущий период для визуализации элементов проекта. Например, можно создать диаграммы, чтобы показать, сколько элементов назначено каждому отдельному лицу или сколько проблем назначается каждой предстоящей итерации.

Вы также можете использовать фильтры для управления данными, используемыми для построения диаграммы. Например, можно создать диаграмму, показывающую, сколько невыполненной работы у вас осталось, но ограничить эти результаты определенными метками или уполномоченными. Дополнительные сведения см. в статье [Фильтрация проектов](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

 ![Снимок экрана, показывающий гистограмму с накоплением и типы элементов для каждой итерации](/assets/images/help/issues/column-chart-example.png)

Дополнительные сведения см. в разделе [Создание диаграмм](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts).

 ### Сведения об исторических диаграммах

 Диаграммы с данными за прошлые периоды позволяют просматривать тенденции и ход выполнения проекта. Вы можете просмотреть количество элементов, сгруппированных по состоянию и другим полям, с течением времени
 
 На диаграмме объема выполненных работ по умолчанию отображается состояние элемента с течением времени, что позволяет визуализировать ход выполнения и точечные шаблоны с течением времени. 

![Снимок экрана, показывающий пример диаграммы объема выполненных работ по умолчанию для текущей итерации](/assets/images/help/issues/burnup-example.png)

 Чтобы создать историческую диаграмму, задайте для оси X диаграммы значение Время. Дополнительные сведения см. в разделе [Создание диаграмм](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts) и [Настройка диаграмм](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts).

## Дополнительные материалы

- [Сведения о {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [Отключение аналитических сведений для {% data variables.product.prodname_projects_v2 %} в организации](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)
