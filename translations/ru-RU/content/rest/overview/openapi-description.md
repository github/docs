---
title: Описание OpenAPI
intro: 'REST API {% data variables.product.product_name %} полностью описан в документе по OpenAPI 3.0.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 84c81c856da1da67320463fba4b9b52bca88c844
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125043'
---
## Сведения об описаниях OpenAPI

[OpenAPI](https://swagger.io/docs/specification/about/) является стандартной спецификацией для описания REST API. Описания OpenAPI позволяют как людям, так и компьютерам обнаруживать возможности API без необходимости предварительного чтения документации или изучения реализации. {% data variables.product.company_short %} сделал свои REST API общедоступными в виде документа, совместимого с OpenAPI 3.0.

## Получение описания OpenAPI {% data variables.product.company_short %}

Это описание можно найти в репозитории [Описание OpenAPI REST API](https://github.com/github/rest-api-description) с открытым кодом.

Описание предоставляется в двух форматах. Пакетная версия работает в большинстве случаев, так как она включает компоненты OpenAPI для неоднократного использования и удобочитаемости. Если ваши средства не поддерживают встроенные ссылки на компоненты, мы также предоставляем полностью разыменованную версию.

## Использование описания OpenAPI {% data variables.product.company_short %}

Существует множество способов использования описания OpenAPI. Например, можно сделать следующее:

* Создать собственный клиент API.
* Проверять и тестировать интеграцию REST API {% data variables.product.company_short %}.
* Исследовать и взаимодействовать с REST API {% data variables.product.product_name %} с помощью сторонних средств, таких как Insomnia или Postman.

Например, {% data variables.product.company_short %} использует описание OpenAPI REST для создания [справочной документации по REST API](/rest) {% data variables.product.product_name %}.
