---
title: Отправка зависимостей
intro: 'API отправки зависимостей можно использовать для отправки зависимостей для проектов, например зависимостей, разрешенных при сборке или компиляции проекта.'
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 72ffb8376c33972ab02c0a5fb48504b92fef3cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080738'
---
## Сведения об API отправки зависимостей

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

Зависимости отправляются в API отправки зависимостей в виде моментального снимка. Моментальный снимок — это набор зависимостей, связанных с SHA фиксации и другими метаданными, которые отражают текущее состояние репозитория для фиксации.  Вы можете применить предварительно подготовленные действия или создать собственные, чтобы отправлять зависимости в требуемом формате в API отправки зависимостей при каждой компиляции проекта. Дополнительные сведения см. в статье [Использование API отправки зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

Вы можете отправить в API отправки зависимостей несколько наборов зависимостей, которые нужно включить в граф зависимостей. Этот API использует свойство `job.correlator` и категорию `detector.name` моментального снимка, чтобы всегда отображать последние отправки для каждого рабочего процесса. Само свойство `correlator` является основным полем, которое будет использоваться для различения независимых отправок. Например, в качестве `correlator` можно использовать простое сочетание двух переменных, доступных в выполнениях действий: `<GITHUB_WORKFLOW> <GITHUB_JOB>`.
