---
title: Начало работы с GitHub Copilot в Visual Studio
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Узнайте, как установить {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vs %} и начать видеть предложения при написании комментариев и кода.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 65384a5cafae1c739b52847d1a826c0138e91fd9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193020'
---
{% data reusables.copilot.copilot-cta-button %}

## Сведения о {% data variables.product.prodname_copilot %} and Visual Studio

{% data reusables.copilot.procedural-intro %}

Если вы используете {% data variables.product.prodname_vs %}, вы можете просматривать и включать предложения из {% data variables.product.prodname_copilot %} непосредственно в редакторе. В этом руководстве описано, как использовать {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vs %} для Windows.

## Предварительные требования

{% data reusables.copilot.subscription-prerequisite %}

- Чтобы использовать {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vs %}, необходимо установить {% data variables.product.prodname_vs %} 2022 17.2 или более поздней версии. Дополнительные сведения см. в [документации по интегрированной среде разработки Visual Studio](https://visualstudio.microsoft.com/vs/).

{% note %}

**Примечание.** {% data variables.product.prodname_copilot %} в настоящее время недоступен для использования с Visual Studio для Mac.

{% endnote %}

## Установка расширения {% data variables.product.prodname_vs %}

Чтобы использовать {% data variables.product.prodname_copilot %}, сначала установите {% data variables.product.prodname_vs %}.
1. На панели инструментов Visual Studio щелкните **Расширения**, а затем — **Управление расширениями**.
   ![Снимок экрана: панель инструментов Visual Studio](/assets/images/help/copilot/visual-studio-toolbar.png)
1. В окне "Управление расширениями" щелкните **Visual Studio Marketplace**, найдите расширение {% data variables.product.prodname_copilot %}, а затем нажмите кнопку **Скачать**.
   ![Снимок экрана: расширение Copilot GitHub для Visual Studio с выделенной кнопкой загрузки](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Закройте окно "Управление расширениями", а затем закройте и повторно запустите {% data variables.product.prodname_vs %}.
1. При необходимости, чтобы убедиться, что {% data variables.product.prodname_copilot %} установлен и включен, вернитесь в раздел **Управление расширениями**, нажмите кнопку **Установлено**, чтобы просмотреть установленные расширения, а затем щелкните **{% data variables.product.prodname_copilot %}** , чтобы просмотреть сведения о состоянии.
  ![Снимок экрана: установленные расширения в Visual Studio с выделенным элементом GitHub Copilot](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Откройте или создайте проект в {% data variables.product.prodname_vs %}. 
1. В диалоговом окне "Microsoft {% data variables.product.prodname_vs %}" скопируйте код активации устройства, нажав кнопку **ОК**.
   ![Снимок экрана: диалоговое окно Microsoft {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-auth-dialogue.png)
1. Окно активации устройства откроется в браузере. Вставьте код устройства и нажмите кнопку **Продолжить**.

   - Чтобы вставить код в Windows или Linux, нажмите <kbd>CTRL</kbd>+<kbd>V</kbd>.
   - Чтобы вставить код в macOS, нажмите <kbd>COMMAND</kbd>+<kbd>V</kbd>.
1. {% data variables.product.prodname_dotcom %} запросит необходимые разрешения для {% data variables.product.prodname_copilot %}. Чтобы одобрить эти разрешения, щелкните **Авторизовать подключаемый модуль {% data variables.product.prodname_copilot %}** .
1. Когда вы одобрите разрешения, {% data variables.product.prodname_vs %} отобразит подтверждение.
   ![Снимок экрана: подтверждение разрешений для {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-confirmation.png)

## Просмотр первого предложения

{% data reusables.copilot.code-examples-limitations %} {% data reusables.copilot.supported-languages %} Приведенные ниже примеры используются на языке C#, но другие языки будут работать аналогичным образом.

{% data reusables.copilot.create-c-file %}
1. В файле C# введите следующую сигнатуру функции. {% data variables.product.prodname_copilot %} автоматически предложит весь текст функции, выделенный серым цветом, как показано ниже. Точное предложение может отличаться.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Снимок экрана: первое предложение Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png) {% data reusables.copilot.accept-suggestion %}
 
## Просмотр альтернативных предложений
{% data reusables.copilot.alternative-suggestions %} {% data reusables.copilot.create-c-file %}
1. В файле C# введите следующую сигнатуру функции. {% data variables.product.prodname_copilot %} покажет предложение.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. Если доступны альтернативные предложения, вы можете увидеть эти альтернативы, нажав клавиши <kbd>ALT</kbd>+<kbd>]</kbd> (или <kbd>ALT</kbd>+<kbd>[</kbd>).
1. Кроме того, можно навести указатель мыши на предложение, чтобы просмотреть палитру команд {% data variables.product.prodname_copilot %} для выбора предложений.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Создание предложений кода из комментариев

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. В файле C# введите следующий комментарий. {% data variables.product.prodname_copilot %} предложит реализацию функции.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## Дополнительные сведения

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
