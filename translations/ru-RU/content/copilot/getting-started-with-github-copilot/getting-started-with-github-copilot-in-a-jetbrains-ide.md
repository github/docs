---
title: Начало работы с GitHub Copilot в интегрированной среде разработки JetBrains
shortTitle: JetBrains IDE
intro: 'Узнайте, как установить {% data variables.product.prodname_copilot %} в интегрированной среде разработки JetBrains и начать видеть предложения при написании комментариев и кода.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: f5b90fb18645b69f86e9e45e08ba47e534678ae4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192788'
---
{% data reusables.copilot.copilot-cta-button %}

## Сведения о {% data variables.product.prodname_copilot %} и интегрированной среде разработки JetBrains

{% data reusables.copilot.procedural-intro %}

Если вы используете интегрированную среду разработки JetBrains, вы можете просматривать и включать предложения из {% data variables.product.prodname_copilot %} непосредственно в редакторе. В этом руководстве описано, как использовать {% data variables.product.prodname_copilot %} в интегрированной среде разработки JetBrains для macOS, Windows или Linux.

## Предварительные требования

{% data reusables.copilot.subscription-prerequisite %}

{% data reusables.copilot.jetbrains-ides %}

## Установка расширения {% data variables.product.prodname_copilot %} в интегрированной среде разработки JetBrains

Чтобы настроить {% data variables.product.prodname_copilot %} в интегрированной среде разработки JetBrains, установите расширение {% data variables.product.prodname_copilot %}. Следующая процедура поможет вам установить подключаемый модуль {% data variables.product.prodname_copilot %} в IntelliJ IDEA. Шаги по установке подключаемого модуля в другой поддерживаемой интегрированной среде разработки могут отличаться.

1. В интегрированной среде разработки JetBrains в меню **Файл** для Windows или под именем интегрированной среды разработки для Mac (например, **PyCharm** или **IntelliJ**) щелкните **Параметры** для Windows или **Настройки** для Mac.
2. В левом меню диалогового окна **Параметры/Настройки** щелкните **"Подключаемые модули**.
3. В верхней части диалогового окна **Параметры/Настройки** щелкните **Marketplace**. В строке поиска введите **{% data variables.product.prodname_copilot %}** и нажмите кнопку **Установить**.
   ![Снимок экрана: поиск на Marketplace](/assets/images/help/copilot/jetbrains-marketplace.png)
1. После установки {% data variables.product.prodname_copilot %} нажмите кнопку **Перезапустить интегрированную среду разработки**.
1. После перезапуска интегрированной среды разработки JetBrains щелкните меню **Сервис**. Щелкните **{% data variables.product.prodname_copilot %}** , а затем нажмите **Вход в {% data variables.product.prodname_dotcom %}** . 
    ![Снимок экрана: меню инструментов JetBrains](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. В диалоговом окне "Вход в {% data variables.product.prodname_dotcom %}" нажмите кнопку **Копировать и открыть**, чтобы скопировать код устройства и открыть окно активации устройства.
    ![Снимок экрана: "Копировать и открыть" для кода устройства](/assets/images/help/copilot/device-code-copy-and-open.png)
1. Окно активации устройства откроется в браузере. Вставьте код устройства и нажмите кнопку **Продолжить**.

   - Чтобы вставить код в Windows или Linux, нажмите <kbd>CTRL</kbd>+<kbd>V</kbd>.
   - Чтобы вставить код в macOS, нажмите <kbd>COMMAND</kbd>+<kbd>V</kbd>.
1. {% data variables.product.prodname_dotcom %} запросит необходимые разрешения для {% data variables.product.prodname_copilot %}. Чтобы одобрить эти разрешения, щелкните **Авторизовать подключаемый модуль {% data variables.product.prodname_copilot %}** .
1. После утверждения разрешений интегрированная среда разработки JetBrains отобразит подтверждение. Чтобы начать использование {% data variables.product.prodname_copilot %}, щелкните **OK**.
   ![Снимок экрана: подтверждение разрешений интегрированной среды разработки JetBrains](/assets/images/help/copilot/jetbrains-ide-confirmation.png)
   

## Просмотр первого предложения

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Следующие примеры приводятся на Java, но будут работать аналогичным образом и для других языков.

{% data reusables.copilot.create-java-file %}
1. В файле Java создайте класс, введя `class Test`.
   {% data variables.product.prodname_copilot %} автоматически предложит текст класса, выделенный серым цветом, как показано ниже. Точное предложение может отличаться.
   ![Снимок экрана: предложение текста класса Java](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}
1. Чтобы {% data variables.product.prodname_copilot %} мог предложить текст функции, введите следующую строку под скобкой функции `main`. Точное предложение может отличаться.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Снимок экрана: предложение текста функции Java](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} попытается сопоставить контекст и стиль кода. Вы всегда можете изменить предлагаемый код.

## Просмотр альтернативных предложений

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. Чтобы {% data variables.product.prodname_copilot %} отобразил предложение, введите следующую строку в файле Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %} {% data reusables.copilot.see-alternative-suggestions %}

   | OS | Смотреть следующее предложение | Смотреть предыдущее предложение |
   | :- | :- | :- |
   | macOS | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>ALT</kbd>+<kbd>]</kbd> | <kbd>ALT</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>ALT</kbd>+<kbd>]</kbd> | <kbd>ALT</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## Просмотр нескольких предложений на новой вкладке

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. Чтобы {% data variables.product.prodname_copilot %} отобразил предложение, введите следующую строку в файле Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Откройте новую вкладку с несколькими дополнительными предложениями.
    - В macOS нажмите клавиши <kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>A</kbd>, а затем нажмите **Открыть GitHub Copilot** или нажмите клавиши <kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>\</kbd>, чтобы сразу открыть новую вкладку.
    - В Windows или Linux нажмите <kbd>CTRL</kbd>+<kbd>ВВОД</kbd>, а затем нажмите кнопку **Открыть GitHub Copilot**.
  ![Снимок экрана: диалоговое окно для открытия Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. Чтобы принять предложение, над предложением нажмите кнопку **Принять решение**. Чтобы отклонить все предложения, закройте вкладку.

## Создание предложений кода из комментариев

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. Чтобы {% data variables.product.prodname_copilot %} предложил реализацию функции в файле Java, введите следующие строки.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Снимок экрана: предложение текста функции Java](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Включение и отключение {% data variables.product.prodname_copilot %}

Вы можете включить или отключить {% data variables.product.prodname_copilot %} для всех языков или для отдельных языков. Значок состояния {% data variables.product.prodname_copilot %} на нижней панели окна интегрированной среды разработки JetBrains указывает, включен или отключен параметр {% data variables.product.prodname_copilot %}. Если этот параметр включен, значок выделен. Если он отключен, значок неактивен.

1. Чтобы включить или отключить {% data variables.product.prodname_copilot %}, щелкните значок состояния на нижней панели окна JetBrains.
   ![Снимок экрана: значок состояния в IntelliJ IDEA](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Если вы отключаете {% data variables.product.prodname_copilot %}, появится запрос, следует ли отключить их глобально или для языка файла, который вы редактируете.

   - Чтобы отключить предложения от {% data variables.product.prodname_copilot %} глобально, нажмите кнопку **Отключить завершение**.
   - Чтобы отключить предложения от {% data variables.product.prodname_copilot %} для указанного языка, нажмите кнопку **Отключить завершение для _ЯЗЫК_**.
   ![Снимок экрана: отключить {% data variables.product.prodname_copilot %} глобально или для текущего языка](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Дополнительные сведения

- [Веб-сайт {% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [Сведения о {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
