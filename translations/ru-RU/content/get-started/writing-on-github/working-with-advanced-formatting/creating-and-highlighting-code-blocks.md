---
title: Создание и выделение блоков кода
intro: Предоставляйте общий доступ к примерам кода с изолированными блоками кода и включайте выделения синтаксиса.
redirect_from:
  - /articles/creating-and-highlighting-code-blocks
  - /github/writing-on-github/creating-and-highlighting-code-blocks
  - /github/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Create code blocks
ms.openlocfilehash: ba0b49795df16fbafc77ef43c6fef58684162709
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882420'
---
## Огороженные блоки кода

Чтобы создать блок кода с ограждением, можно поместить блок кода между тремя обратными штрихами <code>\`\`\`</code>. Рекомендуется оставлять пустую строку до блока кода и после него для удобства чтения.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Отрисованный блок кода с ограждением](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Совет.** Чтобы сохранить форматирование в списке, поставьте восемь пробелов в качестве отступа для блока кода без ограждения.

{% endtip %}

Чтобы показать три обратных штриха в блоке кода с ограждением, заключите их в четыре обратных штриха.


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![Отрисованный код с ограждением с блоком из обратных штрихов](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Выделение синтаксиса

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Чтобы включить выделение синтаксических конструкций в блоке кода с ограждением можно добавить необязательный идентификатор языка.

Например, так можно задать выделение синтаксических конструкций Ruby:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

![Отрисованный блок кода с выделением синтаксических конструкций Ruby](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

Мы используем библиотеку [Linguist](https://github.com/github/linguist) для определения языка и выбора [сторонних грамматик](https://github.com/github/linguist/blob/master/vendor/README.md) для выделения синтаксических конструкций. Ознакомиться со списком допустимых ключевых слов можно в [YAML-файле языков](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

{% ifversion mermaid %}
## Создание схем

С помощью блоков кода также можно создавать схемы в Markdown. GitHub поддерживает синтаксис Mermaid, GeoJSON, TopoJSON и ASCII STL. Дополнительные сведения см. в разделе [Создание схем](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams).

{% endif %}
## Дополнительные материалы

- [Спецификация {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- [Базовый синтаксис записи и форматирования](/articles/basic-writing-and-formatting-syntax)
