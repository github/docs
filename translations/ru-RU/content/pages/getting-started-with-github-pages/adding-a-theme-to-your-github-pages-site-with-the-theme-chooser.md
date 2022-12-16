---
title: Добавление темы на сайт GitHub Pages с помощью средства выбора темы
intro: Вы можете добавить тему на сайт {% data variables.product.prodname_pages %}, чтобы настроить его внешний вид.
redirect_from:
- /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
- /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Pages
shortTitle: Add theme to a Pages site
permissions: People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.
ms.openlocfilehash: b38ce81802b5137f49fef076ffdc5a16392a446d
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/27/2022
ms.locfileid: "147428369"
---
## <a name="about-the-theme-chooser"></a>Сведения о средстве выбора темы

{% ifversion pages-custom-workflow %}

{% note %}

**Примечание.** Средство выбора темы Jekyll не поддерживается для сайтов {% data variables.product.prodname_pages %}, которые публикуются с помощью пользовательского рабочего процесса {% data variables.product.prodname_actions %}. Если вы создаете сайт с помощью Jekyll и используете пользовательский рабочий процесс {% data variables.product.prodname_actions %} для публикации сайта, можно добавить тему посредством изменения файла `_config.yml`. Дополнительные сведения см. в статье "[Добавление темы на сайт GitHub Pages с помощью Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)".

{% endnote %}

{% endif %}

Средство выбора тем добавляет в репозиторий тему Jekyll. Дополнительные сведения о теме Jekyll см. в статье [Сведения о {% data variables.product.prodname_pages %} и Jekyll](/articles/about-github-pages-and-jekyll).

Принцип работы средства выбора темы зависит от того, является ли репозиторий общедоступным или частным.
  - Если {% data variables.product.prodname_pages %} для репозитория уже включен, средство выбора темы добавит вашу тему в текущий источник публикации.
  - Если репозиторий является общедоступным, а {% data variables.product.prodname_pages %} для вашего репозитория отключен, средство выбора темы позволит включить {% data variables.product.prodname_pages %} и настроить ветвь по умолчанию в качестве источника публикации.
  - Если репозиторий является частным, {% data variables.product.prodname_pages %} для репозитория отключен, необходимо включить {% data variables.product.prodname_pages %}, настроив источник публикации, прежде чем использовать средство выбора темы.

Дополнительные сведения об источниках публикации см. в разделе [Сведения о {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites).

Если вы уже добавили тему Jekyll в репозиторий вручную, эти файлы могут применяться даже после использования средства выбора темы. Чтобы избежать конфликтов, удалите все папки и файлы темы вручную, прежде чем использовать средство выбора темы. Дополнительные сведения см. в статье [Добавление темы на сайт {% data variables.product.prodname_pages %} с помощью Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).

## <a name="adding-a-theme-with-the-theme-chooser"></a>Добавление темы с помощью средства выбора темы

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. В {% data variables.product.prodname_pages %} нажмите **Выбрать тему** или **Изменить тему**.
  ![Кнопка выбора темы](/assets/images/help/pages/choose-a-theme.png)
4. В верхней части страницы выберите тему и нажмите **Выбрать тему**.
  ![Варианты тем и кнопка "Выбрать тему"](/assets/images/help/pages/select-theme.png)
5. Возможно, вам будет предложено внести изменения в файл *README.md* для вашего сайта.
   - Чтобы изменить файл позже, нажмите **Отмена**.
   ![Ссылка на отмену при редактировании файла](/assets/images/help/pages/cancel-edit.png)
   - Чтобы изменить файл сразу, см. раздел [Редактирование файлов](/repositories/working-with-files/managing-files/editing-files).

Выбранная тема будет автоматически применена к файлам Markdown в вашем репозитории. Чтобы применить тему к HTML-файлам в репозитории, необходимо добавить в каждый файл введение YAML с описанием макета. Дополнительные сведения см. в разделе [Введение](https://jekyllrb.com/docs/front-matter/) на сайте Jekyll.

## <a name="further-reading"></a>Дополнительные материалы

- [Темы](https://jekyllrb.com/docs/themes/) на сайте Jekyll
