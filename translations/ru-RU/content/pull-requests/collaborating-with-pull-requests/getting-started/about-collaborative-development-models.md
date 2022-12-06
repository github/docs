---
title: Сведения о моделях совместной разработки
intro: 'Способ применения запросов на вытягивание зависит от типа модели разработки, используемой в проекте. Можно использовать модель создания вилок и вытягивания или модель общего репозитория.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
ms.openlocfilehash: 2a054071dc801ac035f3925e81895200c0a7375d
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '146139187'
---
## Модель создания вилок и вытягивания

В такой модели любой пользователь может разветвить существующий репозиторий и отправить изменения в свою личную вилку. Для отправки изменений в принадлежащую пользователю вилку не требуются разрешения на исходный репозиторий. Извлекать изменения в исходный репозиторий может координатор проекта. Если открыть запрос на вытягивание, в котором предлагаются изменения из принадлежащей вам вилки, в ветви в исходном (вышестоящем) репозитории, вы можете разрешить любому пользователю с доступом на отправку к вышестоящему репозиторию вносить изменения в ваш запрос на вытягивание.  Эта модель популярна в проектах с открытым кодом, так как она позволяет новым участникам без лишних сложностей влиться в проект и дает возможность пользователям работать независимо без предварительной координации.

{% tip %}

**Совет.** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

{% endtip %}

## Модель общего репозитория

В модели общего репозитория участники совместной работы получают доступ на отправку к одному общему репозиторию, а при необходимости внесения изменений создаются тематические ветки. В этой модели эффективно применяются запросы на вытягивание, поскольку они позволяют инициировать проверку кода и общее обсуждение набора изменений, прежде чем изменения будут объединены в основную ветвь разработки. Эта модель преобладает в небольших командах и организациях, ведущих совместную работу над частными проектами.

## Дополнительные материалы

- [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Создание запроса на вытягивание из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [Разрешение изменений в ветви запроса на вытягивание, созданной из вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
