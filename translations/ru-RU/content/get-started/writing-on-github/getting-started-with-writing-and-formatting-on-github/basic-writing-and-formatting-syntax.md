---
title: Базовый синтаксис записи и форматирования
intro: Создавайте расширенное форматирование текста и кода в GitHub с помощью простого синтаксиса.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
ms.openlocfilehash: e8df0930f675834c120bbe187924f9696142e09f
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169251'
---
## Заголовки

Чтобы создать заголовок, добавьте от одного до шести символов <kbd>#</kbd> перед его текстом. Количество символов <kbd>#</kbd> определяет размер заголовка.

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![Отрисованные заголовки H1, H2 и H6](/assets/images/help/writing/headings-rendered.png)

При использовании двух или более заголовков GitHub автоматически создает оглавление, к которому можно получить доступ, щелкнув значок {% octicon "list-unordered" aria-label="The unordered list icon" %} в заголовке файла. В оглавлении приводится каждый заголовок. Щелкнув по нему, можно перейти к соответствующему разделу. 

![Снимок экрана с выделенным значком оглавления](/assets/images/help/repository/headings_toc.png)

## Выделение текста

Текст в полях комментариев и файлах `.md` можно выделять полужирным шрифтом, курсивом, зачеркиванием, а также подстрочным или надстрочным шрифтом.  

| Стиль | Синтаксис | Сочетания клавиш | Пример | Выходные данные |
| --- | --- | --- | --- | --- |
| Полужирный шрифт | `** **` или `__ __`| <kbd>COMMAND</kbd>+<kbd>B</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>B</kbd> (Windows и Linux) | `**This is bold text**` | **Это полужирный текст** |
| Курсив | `* *` или `_ _`     | <kbd>COMMAND</kbd>+<kbd>I</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>I</kbd> (Windows и Linux) | `*This text is italicized*` | *Этот курсивный текст* |
| Зачеркнутый | `~~ ~~` | | `~~This was mistaken text~~` | ~~Это был неправильный текст~~ |
| Полужирный и вложенный курсив | `** **` и `_ _` | | `**This text is _extremely_ important**` | **Этот текст _очень_ важен** |
| Весь полужирный и курсивный | `*** **_` | | `_*_All this text is important_*_` | _ *_Весь этот текст важен_** |
| Подстрочный | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | <sub>Это подстрочный текст</sub> |
| Надстрочный | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | <sup>Это надстрочный текст</sup> |

## Текст в кавычках

Цитировать текст можно с помощью <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

![Отрисованная текстовая цитата](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Совет**. Текст из беседы можно автоматически цитировать в комментарии. Для этого выделите текст и введите <kbd>R</kbd>. Чтобы процитировать весь комментарий, щелкните значок {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} и выберите пункт **Цитировать в ответе**. Дополнительные сведения о сочетаниях клавиш см. в разделе [Сочетания клавиш](/articles/keyboard-shortcuts/).

{% endtip %}

## Цитирование кода

Вы можете выделить код или команду в предложении с помощью одинарных грависов. Текст, заключенный в обратные кавычки, не форматируется. Кроме того, вы можете использовать сочетание клавиш <kbd>COMMAND</kbd>+<kbd>E</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>E</kbd> (Windows/Linux) для вставки обратных кавычек для блока кода в строке Markdown.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Отрисованный блок кода в строке](/assets/images/help/writing/inline-code-rendered.png)

Чтобы выделить код или текст в отдельный блок, используйте тройные грависы.

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![Отрисованный блок кода](/assets/images/help/writing/code-block-rendered.png)

Дополнительные сведения см. в разделе [Создание и выделение блоков кода](/articles/creating-and-highlighting-code-blocks).

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Поддерживаемые цветовые модели

В сообщениях о проблемах, запросах на вытягивание и обсуждениях можно вызывать цвета в предложении, используя обратные кавычки. Поддерживаемая цветовая модель, заключенная в обратные кавычки, будет отображать визуализацию цвета.

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![Отображение поддерживаемой цветовой модели.](/assets/images/help/writing/supported-color-models-rendered.png)

Ниже указаны поддерживаемые сейчас цветовые модели.

| Цвет | Синтаксис | Пример | Выходные данные |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Отображение поддерживаемой цветовой модели в формате HEX.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Отображение поддерживаемой цветовой модели в формате RGB.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Отображение поддерживаемой цветовой модели в формате HSL.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**Примечания.**

- Поддерживаемая цветовая модель не может содержать начальные или конечные пробелы между обратными кавычками.
- Визуализация цвета поддерживается только в сообщениях о проблемах, запросах на вытягивание и обсуждениях.

{% endnote %}

## Ссылки

Чтобы создать встроенную ссылку, заключите ее текст в квадратные скобки `[ ]`, а затем заключите URL-адрес в обычные скобки `( )`. Чтобы создать ссылку, можно также использовать сочетание клавиш <kbd>K</kbd>+. {<kbd></kbd> % ifversion fpt or ghae > 3.3 or ghes > 3.3 or ghec %} Если выбран текст, вы можете вставить URL-адрес из буфера обмена, чтобы автоматически создать ссылку из выделенного фрагмента. {% endif %}

{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %} Вы также можете создать гиперссылку Markdown, выделив текст и используя сочетание клавиш <kbd>Command</kbd>+<kbd>V</kbd>. Если вы хотите заменить текст ссылкой, используйте сочетание клавиш <kbd>COMMAND</kbd>+<kbd>SHIFT</kbd>+<kbd>V</kbd>.{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![Отрисованная ссылка](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Совет**. {% data variables.product.product_name %} автоматически создает ссылки при вводе допустимых URL-адресов в комментариях. Дополнительные сведения см. в разделе [Автоссылки и URL-адреса](/articles/autolinked-references-and-urls).

{% endtip %}

## Ссылки на разделы

{% data reusables.repositories.section-links %}

## Относительные ссылки

{% data reusables.repositories.relative-links %}

## Изображения

Вы можете включить изображение, добавив <kbd>!</kbd> и заключив замещающий текст в `[ ]`. Затем заключите ссылку на изображение в круглые скобки `()`.

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![Отрисованное изображение](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} поддерживает внедрение изображений в проблемы, запросы на вытягивание{% ifversion fpt or ghec %}, обсуждения{% endif %}, комментарии и файлы `.md`. Вы можете отобразить изображение из репозитория, добавить ссылку на изображение в Интернете или отправить изображение. Дополнительные сведения см. в разделе [Отправка ресурсов](#uploading-assets).

{% tip %}

**Совет**. Чтобы отобразить изображение из репозитория, используйте относительную ссылку, а не абсолютную.

{% endtip %}

Ниже приведены некоторые примеры использования относительных ссылок для отображения изображений.

| Контекст | Относительная ссылка |
| ------ | -------- |
| В файле `.md` в той же ветви | `/assets/images/electrocat.png` |
| В файле `.md` в другой ветви | `/../main/assets/images/electrocat.png` |
| В проблемах, запросах на вытягивание и комментариях репозитория | `../blob/main/assets/images/electrocat.png?raw=true` |
| В файле `.md` в другом репозитории | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| В проблемах, запросах на вытягивание и комментариях другого репозитория | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Примечание**. Последние две относительные ссылки в приведенной выше таблице будут работать для изображений в частном репозитории, только если у читателя есть по крайней мере доступ на чтение к частному репозиторию, содержащему эти изображения.

{% endnote %}

Дополнительные сведения см. в разделе [Относительные ссылки](#relative-links).

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
### Указание темы, в которой отображается изображение

Вы можете указать тему, для которой отображается изображение, в Markdown с помощью HTML-элемента `<picture>` в сочетании с функцией мультимедиа `prefers-color-scheme`. Имеется два цветовых режима: светлый и темный, поэтому доступны два варианта. Эти варианты можно использовать для отображения изображений, оптимизированных для темных или светлых фонов. Особенно полезно это в случае с прозрачными изображениями в формате PNG.

Например, с помощью следующего кода отображается изображение солнца для светлых тем и луны для темных тем:

{% data reusables.getting-started.picture-element-example %}

Старый метод указания изображений на основе темы с помощью фрагмента, добавленного к URL-адресу (`#gh-dark-mode-only` или `#gh-light-mode-only`), объявлен нерекомендуемым и будет заменен новым методом, который описан выше.
{% endif %}

## Списки

Вы можете создать неупорядоченный список, предваряя одну или несколько строк текста с <kbd>-</kbd>помощью , <kbd>*</kbd>или <kbd>+</kbd>.

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
```

![Отрисованный неупорядоченный список](/assets/images/help/writing/unordered-list-rendered.png)

Чтобы упорядочить список, поставьте перед каждой строкой номер.

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Отрисованный упорядоченный список](/assets/images/help/writing/ordered-list-rendered.png)

### Вложенные списки

Чтобы создать вложенный список, добавьте отступы для одного или нескольких элементов списка под другим элементом.

Чтобы создать вложенный список с помощью веб-редактора {% data variables.product.product_name %} или текстового редактора, использующего однопространствовый шрифт, например [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), можно визуально выровнять список. Вводите пробелы перед элементом вложенного списка, пока символ маркера списка (<kbd>-</kbd> или <kbd>*</kbd>) не окажется непосредственно под первым символом текста в элементе над ним.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

**Примечание**. В веб-редакторе можно добавить или убрать отступы для одной или нескольких строк текста, сначала выделив нужные строки, а затем нажав клавиши <kbd>TAB</kbd> или <kbd>SHIFT</kbd>+<kbd>TAB</kbd> соответственно.

{% endtip %}

![Вложенный список с выделенным выравниванием](/assets/images/help/writing/nested-list-alignment.png)

![Список с двумя уровнями вложения элементов](/assets/images/help/writing/nested-list-example-1.png)

Чтобы создать вложенный список в редакторе комментариев на {% data variables.product.product_name %}, в котором не используется моноширинный шрифт, можно подсчитать количество символов перед содержимым элемента списка непосредственно над вложенным списком. Затем введите такое же число пробелов перед элементом вложенного списка.

В этом примере можно добавить элемент вложенного списка под элементом `100. First list item` списка, отступив от начала строки не менее чем на пять пробелов, так как перед текстом `First list item` пять символов (`100. `).

```markdown
100. First list item
     - First nested list item
```

![Список с элементом вложенного списка](/assets/images/help/writing/nested-list-example-3.png)   

Таким же образом можно создавать несколько уровней вложения списков. Например, так как в элементе первого вложенного списка перед содержимым `First nested list item` семь символов (`␣␣␣␣␣-␣`), в строке элемента второго вложенного списка необходимо отступить от начала на семь пробелов.

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![Список с двумя уровнями вложения элементов](/assets/images/help/writing/nested-list-example-2.png)    

Дополнительные примеры см. в [спецификации GitHub Flavored Markdown](https://github.github.com/gfm/#example-265).

## Списки задач

{% data reusables.repositories.task-list-markdown %}

Если описание элемента списка задач начинается с круглой скобки, необходимо экранировать ее с помощью символа <kbd>\\</kbd>:

`- [ ] \(Optional) Open a followup issue`

Дополнительные сведения см. в разделе [Сведения о списках задач](/articles/about-task-lists).

## Упоминание людей и команд

Вы можете упомянуть пользователя или [команду](/articles/setting-up-teams/) на {% data variables.product.product_name %}, введя <kbd>@</kbd> перед их именем. Пользователь или команда получит уведомление, которое привлечет их внимание к беседе. Пользователи также получают уведомления, когда вы изменяете комментарий, упоминая имя пользователя или команды. Дополнительные сведения об уведомлениях см. в статье "[Сведения об уведомлениях](/github/managing-subscriptions-and-notifications-on-github/about-notifications)".

{% note %}

**Примечание.** Пользователь будет получать уведомления об упоминании, только если он имеет доступ на чтение к репозиторию и, если репозиторий принадлежит организации, пользователь является членом организации.

{% endnote %}

`@github/support What do you think about these updates?`

![Отрисованное @mention](/assets/images/help/writing/mention-rendered.png)

Когда вы упоминаете родительскую команду, члены дочерних команд также получают уведомления, что упрощает взаимодействие с несколькими группами людей. Дополнительные сведения см. в статье "[Сведения о командах](/articles/about-teams)".

При вводе символа <kbd>@</kbd> отображается список людей или команд, участвующих в проекте. Список фильтруется по мере ввода, поэтому после того, как вы найдете имя нужного человека или команды, можно выбрать его с помощью клавиш со стрелками и нажать клавишу TAB или ВВОД, чтобы завершить имя. Для команд введите @organization/team-name, и все члены этой команды будут подписаны на беседу.

Результаты автозавершения ограничены участниками репозитория и любыми другими участниками беседы.

## Ссылка на проблемы и запросы на вытягивание

Вы можете получить список предлагаемых проблем и запросов на вытягивание в репозитории, введя <kbd>#</kbd>. Введите номер или заголовок проблемы либо запроса на вытягивание, чтобы отфильтровать список, а затем нажмите клавишу TAB или ВВОД, чтобы завершить выделенный результат.

Дополнительные сведения см. в разделе [Автоссылки и URL-адреса](/articles/autolinked-references-and-urls).

## Ссылка на внешние ресурсы

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## Вложения содержимого

Некоторые {% data variables.product.prodname_github_apps %} предоставляют сведения в {% data variables.product.product_name %} для URL-адресов, которые ссылаются на зарегистрированные домены. {% data variables.product.product_name %} отображает сведения, предоставленные приложением по URL-адресу, в тексте проблемы или запроса на вытягивание либо в комментарии к ним.

![Вложение содержимого](/assets/images/github-apps/content_reference_attachment.png)

Для просмотра вложений содержимого требуется {% data variables.product.prodname_github_app %}, которое использует интерфейс API вложений содержимого, установленный в репозитории.{% ifversion fpt or ghec %} Дополнительные сведения см. в разделах [Установка приложения в личной учетной записи](/articles/installing-an-app-in-your-personal-account) и [Установка приложения в организации](/articles/installing-an-app-in-your-organization).{% endif %}

Вложения содержимого не отображаются для URL-адресов, входящих в ссылку Markdown.

Дополнительные сведения о создании {% data variables.product.prodname_github_app %}, использующего вложения содержимого, см. в разделе [Использование вложений содержимого](/apps/using-content-attachments).{% endif %}

## Отправка ресурсов

Вы можете отправлять такие ресурсы, как изображения, путем перетаскивания, выбора в обозревателе файлов или вставки. Вы можете отправлять ресурсы в проблемы, запросы на вытягивание, комментарии и файлы `.md` в репозитории.

## Использование эмодзи

Вы можете добавить эмодзи в текст, введя `:EMOJICODE:`.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Отрисованный эмодзи](/assets/images/help/writing/emoji-rendered.png)

При вводе <kbd>:</kbd> отображается список предлагаемых эмодзи. Список фильтруется по мере ввода, поэтому после того, как вы найдете нужный эмодзи, нажмите клавишу **TAB** или **ВВОД**, чтобы завершить выделенный результат.

Полный список доступных эмодзи и их кодов см. в [этой памятке](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

## Абзацы

Чтобы создать абзац, оставьте пустую строку между строками текста.

## Примечания

Вы можете добавлять в содержимое сноски с помощью квадратных скобок, используя следующий синтаксис:

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

Сноски отрисовываются следующим образом:

![Отрисованная сноска](/assets/images/site/rendered-footnote.png)

{% tip %}

**Примечание**. Позиция сноски в Markdown не влияет на то, где сноска будет отрисовываться. Вы можете написать текст сноски сразу после ссылки на нее, и сноска по-прежнему будет отображаться в нижней части документа Markdown.

Сноски на вики-сайтах не поддерживаются.

{% endtip %}

## Скрытие содержимого с помощью комментариев

Вы можете сообщить {% data variables.product.product_name %}, что необходимо скрыть содержимое в отрисованном файле Markdown, поместив это содержимое в комментарий HTML.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Игнорирование форматирования Markdown

Вы можете сообщить {% data variables.product.product_name %}, что необходимо игнорировать (или экранировать) форматирование Markdown, используя символ <kbd>\\</kbd> перед символом Markdown.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![Отрисованный экранированный символ](/assets/images/help/writing/escaped-character-rendered.png)

Дополнительные сведения см. в статье [Синтаксис Markdown](https://daringfireball.net/projects/markdown/syntax#backslash) на сайте Daring Fireball.

## Отключение отрисовки Markdown

{% data reusables.repositories.disabling-markdown-rendering %}

## Дополнительные материалы

- [Спецификация {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- [Сведения о написании и форматировании текста на GitHub](/articles/about-writing-and-formatting-on-github)
- [Работа с расширенным форматированием](/articles/working-with-advanced-formatting)
- "[Краткое руководство по записи в {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
