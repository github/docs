---
title: Интеграция GitHub Classroom с интегрированной средой разработки
shortTitle: Integrate with an IDE
intro: 'Вы можете предварительно настроить поддерживаемую интегрированную среду разработки (IDE) для назначений, созданных в {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
ms.openlocfilehash: 25c4c1fba1cb0f082049a461e03bfdf009e208c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110509'
---
## Сведения об интеграции с интегрированной средой разработки

{% data reusables.classroom.about-online-ides %} 

После того как учащийся примет назначение с помощью интегрированной среды разработки, в файле сведений в репозитории назначений учащегося будет доступна кнопка, позволяющая открыть задание в интегрированной среде разработки. Учащийся может начать работу немедленно, и дополнительная настройка при этом не требуется.

## Поддерживаемые интегрированные среды разработки (IDE)

{% data variables.product.prodname_classroom %} поддерживает следующие среды IDE. Вы можете узнать больше о взаимодействии с учащимися для каждой интегрированной среды разработки.

| IDE | Дополнительные сведения |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | [Использование {% data variables.product.prodname_github_codespaces %} с {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom) |
| Microsoft MakeCode Arcade | [Сведения об использовании MakeCode Arcade с {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom) |
| {% data variables.product.prodname_vscode %} | [Расширение {% data variables.product.prodname_classroom %}](http://aka.ms/classroom-vscode-ext) в Visual Studio Marketplace |

Мы знаем, что интеграция облачной интегрированной среды разработки важна для вашего класса и работает над тем, чтобы предложить вам еще больше возможностей. 

## Настройка интегрированной среды разработки для назначения

При создании назначения можно выбрать интегрированную среду разработки, которую вы хотите использовать для назначения. Сведения о создании нового назначения, которое использует интегрированную среду разработки, см. в разделе [Создание отдельного назначения](/education/manage-coursework-with-github-classroom/create-an-individual-assignment) или [Создание назначения группы](/education/manage-coursework-with-github-classroom/create-a-group-assignment).

## Настройка назначения в новой интегрированной среде разработки

При первой настройке назначения с помощью другой интегрированной среды разработки необходимо убедиться, что она настроена правильно.

Если вы не используете {% data variables.product.prodname_codespaces %}, необходимо авторизовать приложение OAuth для интегрированной среды разработки для организации. Для всех репозиториев предоставьте приложению доступ на **чтение** к метаданным, администрированию и коду, а также доступ на **запись** к администрированию и коду. Дополнительные сведения см. в разделе [Авторизация приложений OAuth](/github/authenticating-to-github/authorizing-oauth-apps).

{% data variables.product.prodname_codespaces %} не требуется приложение OAuth, но для организации необходимо включить {% data variables.product.prodname_codespaces %} для настройки назначения с помощью {% data variables.product.prodname_codespaces %}. Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_codespaces %} с {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization).

## Дополнительные материалы

- [О файлах сведений](/github/creating-cloning-and-archiving-repositories/about-readmes)
