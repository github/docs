---
title: Упорядочение сведений с помощью свернутых разделов
intro: 'Можно упростить разметку Markdown, создав свернутый раздел с тегом `<details>`.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
ms.openlocfilehash: 1a1f0669ce401946f4a7a08dd1fd41893078e3d0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '146273101'
---
## Создание свернутого раздела

Можно временно скрыть разделы Markdown, создав свернутый раздел, который читатель может развернуть. Например, если вы хотите включить технические сведения в комментарий к проблеме, которые могут быть нерелевантными или интересными каждому читателю, эти сведения можно поместить в свернутый раздел.

Все Markdown в блоке `<details>` будут свернуты, пока читатель не щелкнет {% octicon "triangle-right" aria-label="The right triange icon" %} для разворачивания сведений. В блоке `<details>` используйте тег `<summary>`, чтобы создать метку справа от {% octicon "triangle-right" aria-label="The right triange icon" %}.

````markdown
<details><summary>CLICK ME</summary>
<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>
</details>
````

Markdown будет свернут по умолчанию.

![Отображение в свернутом состоянии](/assets/images/help/writing/collapsed-section-view.png)

После нажатия читателем {% octicon "triangle-right" aria-label="The right triange icon" %} сведения будут развернуты.

![Отображение в открытом состоянии](/assets/images/help/writing/open-collapsed-section.png)

## Дополнительные материалы

- [Спецификация {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- [Базовый синтаксис записи и форматирования](/articles/basic-writing-and-formatting-syntax)
