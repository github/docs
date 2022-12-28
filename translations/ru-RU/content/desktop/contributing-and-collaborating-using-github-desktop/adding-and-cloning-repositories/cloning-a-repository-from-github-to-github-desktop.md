---
title: Клонирование репозитория из GitHub в GitHub Desktop
intro: 'Также можно использовать {% data variables.product.prodname_dotcom %} для клонирования удаленных репозиториев в {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop
versions:
  fpt: '*'
shortTitle: Clone a GitHub repo
ms.openlocfilehash: dbdd1c6b3275ef0e3920f2d8850b64a914da148b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099255'
---
{% tip %}

**Совет**. Вы также можете использовать {% data variables.product.prodname_desktop %} для клонирования репозиториев, существующих в {% data variables.product.prodname_dotcom %}.  Дополнительные сведения см. в разделе [Клонирование репозитория из {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/).

{% endtip %}

{% mac %}

1. Войдите в {% данных variables.location.product_location %} и {% данных variables.product.prodname_desktop %} перед началом клонирования.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Нажмите кнопку **Choose...** (Выбрать) и, используя окно средства поиска, перейдите по локальному пути, куда нужно клонировать репозиторий.
![Кнопка выбора на вкладке URL-адреса](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **Примечание**. Если репозиторий настроен для использования LFS, вам будет предложено инициализировать {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Щелкните **Клонировать**.
![Кнопка клонирования на вкладке URL-адреса](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. Войдите в {% данных variables.location.product_location %} и {% данных variables.product.prodname_desktop %} перед началом клонирования.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Нажмите кнопку **Выбрать...** и, используя проводник, перейдите по локальному пути, куда нужно клонировать репозиторий.
![Кнопка «Выбрать».](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **Примечание**. Если репозиторий настроен для использования LFS, вам будет предложено инициализировать {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Щелкните **Клонировать**.
![Кнопка клонирования](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
