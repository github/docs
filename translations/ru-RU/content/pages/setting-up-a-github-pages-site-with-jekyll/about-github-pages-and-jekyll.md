---
title: Сведения о GitHub Pages и Jekyll
intro: "Jekyll\_— это генератор статических сайтов со встроенной поддержкой {% data variables.product.prodname_pages %}."
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages
  - /articles/search-engine-optimization-for-github-pages
  - /articles/repository-metadata-on-github-pages
  - /articles/atom-rss-feeds-for-github-pages
  - /articles/redirects-on-github-pages
  - /articles/emoji-on-github-pages
  - /articles/mentions-on-github-pages
  - /articles/using-jekyll-plugins-with-github-pages
  - /articles/adding-jekyll-plugins-to-a-github-pages-site
  - /articles/about-github-pages-and-jekyll
  - /github/working-with-github-pages/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: GitHub Pages & Jekyll
ms.openlocfilehash: 15551d849842c0b8866c0820c4a42397f412d6ea
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: '145140257'
---
## <a name="about-jekyll"></a>Сведения о Jekyll

Jekyll — это генератор статических сайтов со встроенной поддержкой {% data variables.product.prodname_pages %} и упрощенным процессом сборки. Jekyll принимает файлы Markdown и HTML и создает полный статический веб-сайт на основе вашего выбора макетов. Jekyll поддерживает Markdown и Liquid, язык шаблонов, который загружает динамическое содержимое на вашем сайте. Дополнительные сведения см. в разделе [Jekyll](https://jekyllrb.com/).

Jekyll для Windows официально не поддерживается. Дополнительные сведения см. в разделе [Jekyll в Windows](http://jekyllrb.com/docs/windows/#installation) в документации по Jekyll.

Рекомендуется использовать Jekyll с {% data variables.product.prodname_pages %}. При желании вы можете использовать другие генераторы статических сайтов или настроить собственный процесс сборки локально или на другом сервере. Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators).

## <a name="configuring-jekyll-in-your--data-variablesproductprodname_pages--site"></a>Настройка Jekyll на вашем сайте {% data variables.product.prodname_pages %}

Вы можете настроить большинство параметров Jekyll, таких как тема и подключаемые модули сайта, изменив файл *_config.yml*. Дополнительные сведения см. в разделе [Настройка](https://jekyllrb.com/docs/configuration/) в документации по Jekyll.

Некоторые параметры конфигурации для сайтов {% data variables.product.prodname_pages %} изменять нельзя.

```yaml
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

По умолчанию Jekyll не создает файлы или папки, которые:
- находятся в папке с именем `/node_modules` или `/vendor`;
- начинаются с `_`, `.` или `#`;
- заканчиваются на `~`;
- исключены параметром `exclude` в файле конфигурации.

Если вы хотите, чтобы Jekyll обрабатывал какой-либо из этих файлов, можно использовать параметр `include` в файле конфигурации.

## <a name="front-matter"></a>Титульный лист

{% data reusables.pages.about-front-matter %}

Вы можете добавить `site.github` в публикацию или на страницу, чтобы добавить на ваш сайт любые метаданные ссылок на репозитории. Дополнительные сведения см. в разделе [Использование `site.github`](https://jekyll.github.io/github-metadata/site.github/) в документации по метаданным Jekyll.

## <a name="themes"></a>Темы

{% data reusables.pages.add-jekyll-theme %} Дополнительные сведения см. в разделе [Темы](https://jekyllrb.com/docs/themes/) в документации по Jekyll.

{% ifversion fpt or ghec %} Вы можете добавить поддерживаемую тему на свой сайт в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделах [Поддерживаемые темы](https://pages.github.com/themes/) на сайте {% data variables.product.prodname_pages %} и [Добавление темы на сайт {% data variables.product.prodname_pages %} с помощью инструмента выбора темы](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser).

Чтобы использовать любую другую тему Jekyll с открытым кодом, размещенную в {% data variables.product.prodname_dotcom %}, вы можете добавить ее вручную.{% else %} Вы можете добавить тему на ваш сайт вручную.{% endif %} Дополнительные сведения см. в разделе{% ifversion fpt or ghec %} [Темы, размещенные в {% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) и{% else %} [Поддерживаемые темы](https://pages.github.com/themes/) на сайте {% data variables.product.prodname_pages %} и{% endif %} [Добавление темы на ваш сайт {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).

Вы можете переопределять любые значения по умолчанию вашей темы, изменяя ее файлы. Дополнительные сведения см. в документации по теме и в разделе [Переопределение значений по умолчанию темы](https://jekyllrb.com/docs/themes/#overriding-theme-defaults) документации по Jekyll.

## <a name="plugins"></a>Подключаемые модули

Для расширения функциональных возможностей Jekyll на вашем сайте вы можете скачать или создать подключаемые модули Jekyll. Например, подключаемый модуль [jemoji](https://github.com/jekyll/jemoji) позволяет использовать эмодзи {% data variables.product.prodname_dotcom %} на любой странице сайта так же, как вы это делали бы в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Подключаемые модули](https://jekyllrb.com/docs/plugins/) в документации по Jekyll.

{% data variables.product.prodname_pages %} использует подключаемые модули, которые включены по умолчанию и не могут быть отключены:
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

Вы можете включить дополнительные подключаемые модули, добавив зависимость подключаемого модуля в параметр `plugins` в файле *_config.yml*. Дополнительные сведения см. в разделе [Настройка](https://jekyllrb.com/docs/configuration/) в документации по Jekyll. 

Список поддерживаемых подключаемых модулей см. в разделе [Версии зависимостей](https://pages.github.com/versions/) на сайте {% data variables.product.prodname_pages %}.  Сведения об использовании для определенного подключаемого модуля см. в документации этого подключаемого модуля.

{% tip %}

**Совет.** Чтобы всегда использовать последнюю версию всех подключаемых модулей, поддерживайте своевременное обновление зависимости {% data variables.product.prodname_pages %}. Дополнительные сведения см. в разделах [Тестирование сайта GitHub Pages локально с помощью Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem) и [Версии зависимостей](https://pages.github.com/versions/) на сайте {% data variables.product.prodname_pages %}.

{% endtip %}

{% data variables.product.prodname_pages %} не может создавать сайты с помощью неподдерживаемых подключаемых модулей. Если вы хотите использовать неподдерживаемые подключаемые модули, создайте сайт локально, а затем отправьте статические файлы сайта в {% data variables.product.product_name %}.

## <a name="syntax-highlighting"></a>Выделение синтаксиса

Чтобы вам было удобнее читать сайт, фрагменты кода на сайтах {% data variables.product.prodname_pages %} выделяются так же, как они выделяются в {% data variables.product.product_name %}. Дополнительные сведения о выделении синтаксиса в {% data variables.product.product_name %} см. в разделе [Создание и выделение блоков кода](/articles/creating-and-highlighting-code-blocks).

По умолчанию блоки кода на сайте будут выделяться Jekyll. Jekyll использует средство выделения [Rouge](https://github.com/jneen/rouge), совместимое с [Pygments](http://pygments.org/). Средство Pygments устарело и не поддерживается в Jekyll 4. Если в файле *_config.yml* вы укажете Pygments, вместо него будет использоваться Rouge. Jekyll не может использовать какое-либо другое средство выделения синтаксиса, и если вы укажете в файле *_config.yml* другое средство выделения синтаксиса, то во время сборки страницы получите предупреждение. Дополнительные сведения см. в разделе [Сведения об ошибках сборки Jekyll для сайтов {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites).

Если вы хотите использовать другое средство выделения, например `highlight.js`, необходимо отключить выделение синтаксиса Jekyll, обновив файл *_config.yml* вашего проекта.

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

Если тема не содержит каскадные таблицы стилей для выделения синтаксиса, можно создать каскадные таблицы стилей выделения синтаксиса {% data variables.product.prodname_dotcom %} и добавить их в файл проекта `style.css`.

```shell
$ rougify style github > style.css
```

## <a name="building-your-site-locally"></a>Локальное создание сайта

{% data reusables.pages.test-locally %}
