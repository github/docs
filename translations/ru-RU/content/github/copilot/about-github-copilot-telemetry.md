---
title: Сведения о телеметрии GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} collects and relies on additional telemetry data beyond what other {% data variables.product.company_short %} products and services collect.'
redirect_from:
- /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
ms.openlocfilehash: ad46b7b2b6626cad0419b1588d64923cca34c0ca
ms.sourcegitcommit: d8653a0ad00d2122cdaaed47f6a4f0c1d0f41845
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/18/2022
ms.locfileid: "145148762"
---
## <a name="what-data-is-collected"></a>Какие данные собираются

Собираемые данные описаны в статье [Условия телеметрии {% data variables.product.prodname_copilot %}](/github/copilot/github-copilot-telemetry-terms). Кроме того, расширение или подключаемый модуль данных {% data variables.product.prodname_copilot %} собирает действия из интегрированной среды разработки (IDE) пользователя, привязанной к метке времени, и метаданные, собранные пакетом телеметрии расширения или подключаемого модуля. При использовании с {% data variables.product.prodname_vscode %}, IntelliJ, NeoVIM или другими средами IDE {% data variables.product.prodname_copilot %} собирает стандартные метаданные, предоставляемые этими средами IDE. 

## <a name="how-the-data-is-used-by--data-variablesproductcompany_short-"></a>Как {% data variables.product.company_short %} использует эти данные

{% data variables.product.company_short %} будет использовать эти данные для:

- Непосредственного улучшение продукта, включая оценку различных стратегий обработки и прогнозирование того, какие предложения будут полезными для пользователей.
- Оценки продукта, например путем измерения положительного влияния на пользователя.
- Улучшения базовых моделей создания кода, например путем предоставления положительных и отрицательных примеров (но всегда так, чтобы закрытый код не использовался в качестве входных данных для предложения кода другим пользователям {% data variables.product.prodname_copilot %}).
- Руководства, тесно связанного с продуктами {% data variables.product.company_short %}.
- Исследования и обнаружения потенциальных злоупотреблений службой {% data variables.product.prodname_copilot %}.
- Другие цели, связанные с улучшением службы {% data variables.product.prodname_copilot %}, включая предоставление общего доступа, описанного в следующем разделе.

## <a name="how-the-data-is-shared"></a>Как предоставить общий доступ к данным

Данные телеметрии безопасно хранятся в системах {% data variables.product.company_short %} с соответствующим шифрованием на месте. Мы знаем, что действия редактирования пользователем, фрагменты исходного кода и URL-адреса репозиториев, а также пути к файлам являются конфиденциальными данными. Поэтому доступ строго контролируется. Доступ к данным можно получить только с помощью (1) именованного персонала (работников и подрядчиков) {% data variables.product.company_short %}, работающих в команде {% data variables.product.prodname_copilot %} или команде по работоспособности платформы {% data variables.product.company_short %}; (2) персонал корпорации Майкрософт (работники и подрядчики), работающие в командах Azure и (или) {% data variables.product.prodname_copilot %}, а также (3) работники OpenAI, работающие над {% data variables.product.prodname_copilot %}.

