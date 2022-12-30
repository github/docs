---
title: Начало работы с GitHub Codespaces для машинного обучения
shortTitle: Machine learning
intro: 'Узнайте о работе над проектами машинного обучения с {% data variables.product.prodname_github_codespaces %} и встроенными инструментами.'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 905d5b14bfba5e47d1fdfdd7f0be75b16750652d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158920'
---
## Введение

В этом руководстве описывается машинное обучение с {% data variables.product.prodname_github_codespaces %}. Вы создадите простой классификатор изображений, узнаете о некоторых средствах, предустановленных в {% data variables.product.prodname_github_codespaces %}, настроите среду разработки для NVIDIA CUDA и откроете пространство кода в JupyterLab.

## Создание простого классификатора изображений

Мы будем использовать записную книжку Jupyter для создания простого классификатора изображений. 

Записные книжки Jupyter — это наборы ячеек, которые можно выполнять друг за другом. Используемая записная книжка содержит ряд ячеек, создающих классификатор изображений с помощью [PyTorch](https://pytorch.org/). Каждая ячейка представляет собой разные этапы этого процесса: скачивание набора данных, настройка нейронной сети, обучение модели, а затем тестирование этой модели.

Мы запустим все ячейки последовательно для выполнения всех этапов построения классификатора изображений. Когда мы это делаем, Jupyter сохраняет выходные данные обратно в записную книжку, чтобы можно было изучить результаты.

### Создание codespace

1. Перейдите в репозиторий [шаблонов github/codespaces-jupyter](https://github.com/github/codespaces-jupyter) .
{% data reusables.codespaces.open-template-in-codespace-step %}

Пространство кода для этого шаблона откроется в веб-версии {% data variables.product.prodname_vscode %}.

### Открытие записной книжки классификатора изображений 

Образ контейнера по умолчанию, используемый {% data variables.product.prodname_github_codespaces %}, включает набор библиотек машинного обучения, предварительно установленных в пространстве кода. Например, Numpy, pandas, SciPy, Matplotlib, seaborn, scikit-learn, Keras, PyTorch, Requests и Plotly. Дополнительные сведения об образе по умолчанию см. в разделе [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)и [Репозиторий `devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal).

1. В редакторе {% data variables.product.prodname_vscode_shortname %} закройте все отображаемые вкладки "Начало работы".
1. Откройте файл записной книжки `notebooks/image-classifier.ipynb`.

### Создание классификатора изображений

Записная книжка классификатора изображений содержит весь код, необходимый для скачивания набора данных, обучения нейронной сети и оценки ее производительности.

1. Нажмите кнопку **Выполнить все**, чтобы выполнить все ячейки записной книжки.

   ![Снимок экрана: кнопка "Выполнить все"](/assets/images/help/codespaces/jupyter-run-all.png)

1. Прокрутите вниз, чтобы просмотреть выходные данные каждой ячейки.

   ![Снимок экрана: шаг 3 в редакторе](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## Настройка NVIDIA CUDA для codespace

Для использования GPU codespace требуется установить NVIDIA CUDA. В этом случае можно создать собственную пользовательскую конфигурацию с помощью файла `devcontainer.json` и указать, что необходимо установить CUDA. Дополнительные сведения о пользовательских конфигурациях см. в разделе [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration).

{% note %}

**Примечание.** Полные сведения о скрипте, который выполняется при добавлении компонента `nvidia-cuda`, см. [в репозитории devcontainers/features](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda).

{% endnote %}

1. В codespace откройте `.devcontainer/devcontainer.json` файл в редакторе.
1. Добавьте объект верхнего уровня `features` со следующим содержимым:

   ```json{:copy}
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   Дополнительные сведения об объекте `features` см. в [спецификации контейнеров разработки](https://containers.dev/implementors/features/#devcontainer-json-properties).

   Если вы используете файл `devcontainer.json` из репозитория классификаторов изображений, созданного для этого руководства, файл `devcontainer.json` будет выглядеть следующим образом:

   ```json
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. Сохраните изменения.
{% data reusables.codespaces.rebuild-command %} Контейнер codespace будет перестроен. Операция займет несколько минут. После перестройки codespace автоматически открывается повторно.
1. Опубликуйте изменения в репозитории, чтобы В будущем CUDA устанавливалось в любых новых пространствах кода, создаваемых из этого репозитория. Дополнительные сведения см. в разделе [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-vs-code).

## Открытие codespace в JupyterLab

Вы можете открыть codespace в JupyterLab со страницы "Ваши codespaces" в [github.com/codespaces](https://github.com/codespaces) или с помощью {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе [Открытие существующего пространства кода](/codespaces/developing-in-codespaces/opening-an-existing-codespace).

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}
