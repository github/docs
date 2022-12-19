---
title: Обновление атрибута автора фиксации с помощью GitHub Importer
intro: Во время импорта можно сопоставить фиксации в репозитории с учетной записью GitHub автора фиксации.
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Update author GitHub Importer
ms.openlocfilehash: 900f71e966f8f8f00a4645286b52592abf06ac48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135764'
---
Средство GitHub Importer ищет пользователей GitHub, адреса электронной почты которых соответствуют авторам фиксаций в импортируемом репозитории. Затем вы можете связать фиксацию с автором, используя адрес электронной почты автора или его имя пользователя GitHub.

## Обновление авторов фиксации

1. После импорта репозитория на странице состояния импорта нажмите кнопку **Сопоставить авторов**.
![Кнопка "Сопоставить авторов"](/assets/images/help/importer/match-authors-button.png)
2. Рядом с автором, сведения о котором вы хотите обновить, щелкните **Связать**.
![Список авторов фиксации](/assets/images/help/importer/connect-commit-author.png)
3. Введите адрес электронной почты автора или его имя пользователя GitHub, а затем нажмите клавишу **ВВОД**.

## Связывание фиксаций с пользователем GitHub с общедоступным адресом электронной почты

Если автор фиксации в импортированном репозитории имеет учетную запись GitHub, связанную с адресом электронной почты, который использовался для создания фиксаций, и этот автор не [указал, что его адрес электронной почты является частным](/articles/setting-your-commit-email-address), то GitHub Importer сопоставит адрес электронной почты, связанный с фиксацией, с общедоступным адресом электронной почты, связанным с учетной записью GitHub, и свяжет фиксацию с учетной записью GitHub автора.

## Связывание фиксаций с пользователем GitHub без общедоступного адреса электронной почты

Если автор фиксации в импортированном репозитории не установил общедоступный адрес электронной почты в своем профиле GitHub и [не указал, что адрес электронной почты фиксации является частным](/articles/setting-your-commit-email-address), то GitHub Importer может не сопоставить адрес электронной почты, связанный с фиксацией, с учетной записью GitHub автора.

Автор фиксации может устранить эту проблему, указав, что его адрес электронной почты является частным. После этого фиксации автора будут связываться с `<username>@users.noreply.github.com`, а импортированные фиксации будут связываться с учетной записью GitHub автора.

## Связывание фиксаций с помощью адреса электронной почты

Если адрес электронной почты автора не связан с учетной записью GitHub, он может [добавить его в свою учетную запись](/articles/adding-an-email-address-to-your-github-account) после импорта, и фиксации будут связаны соответствующим образом.

Если у автора нет учетной записи GitHub, GitHub Importer будет связывать фиксации этого автора с адресом электронной почты, который связан с фиксациями.

## Дополнительные материалы

- [О GitHub Importer](/articles/about-github-importer)
- [Импорт репозитория с помощью GitHub Importer](/articles/importing-a-repository-with-github-importer)
- [Добавление адреса электронной почты в учетную запись](/articles/adding-an-email-address-to-your-github-account/)
- [Указание адреса электронной почты для фиксаций](/articles/setting-your-commit-email-address)
