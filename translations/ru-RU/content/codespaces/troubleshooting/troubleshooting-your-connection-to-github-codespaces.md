---
title: Устранение неполадок подключения к GitHub Codespaces
intro: 'Справка по устранению неполадок при подключении к {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
ms.openlocfilehash: 75632e73b689ed7fe1df95027f6e5170136c7935
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160069'
---
## 503 — Служба codespace недоступна.

Для codespace настроена остановка через 30 минут бездействия. При попытке взаимодействия с codespace после остановки может появиться сообщение об ошибке `503 service unavailable`. 

- Если кнопка **Пуск** отображается в {% data variables.product.prodname_vscode %} или в окне браузера, нажмите кнопку **Пуск**, чтобы повторно подключиться к codespace.
- Сбросьте codespace, перезагрузив окно. В [палитре команд](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) в {% data variables.product.prodname_vscode %} щелкните **Разработка: перезагрузить окно**.

## Браузер не может подключиться

Иногда вы не удается получить доступ к codespace из браузера. В этом случае перейдите по адресу https://github.com/codespaces и попробуйте подключиться к codespace с этой страницы.

  - Если codespace отсутствует на странице, убедитесь, что вы являетесь владельцем среды codespace, к которой пытаетесь подключиться. Вы можете открыть только ту среду codespace, которую создали именно вы. URL-адреса для codespace всегда содержат дескриптор {% data variables.product.company_short %}.
  - Если среда codespace указана, но вы не можете подключиться с этой страницы, проверьте, можно ли подключиться с помощью другого браузера.

Ваша корпоративная сеть может блокировать подключение. Если возможно, проверьте все журналы со сведениям об отклоненных подключениях на устройстве.

Если вы по-прежнему не можете подключиться, {% data reusables.codespaces.contact-support %}.

## Не удается подключиться к codespace в JupyterLab

Чтобы иметь возможность использовать codespace в JupyterLab, необходимо убедиться, что оно установлено в codespace. Образ контейнера по умолчанию, используемый {% data variables.product.prodname_github_codespaces %}, включает JupyterLab, но если вы настроили конфигурацию контейнера разработки, необходимо вручную установить JupyterLab.

Если в codespace используется образ на основе Debian, можно установить JupyterLab в контейнере разработки, добавив компонент в файл с параметром `installJupyterlab` `true`.`python` `devcontainer.json` В противном случае установите его непосредственно в Dockerfile. Инструкции по установке см. в разделе ["Установка](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)" документации по JupyterLab.

Дополнительные сведения о `python` функции см. на странице сведений в [репозитории`devcontainers/features`](https://github.com/devcontainers/features/tree/main/src/python). Дополнительные сведения о файле и Dockerfile см. в разделе [Общие сведения о](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)`devcontainer.json` контейнерах разработки.

Если вы по-прежнему не можете подключиться, {% data reusables.codespaces.contact-support %}.

## Расширению {% data variables.product.prodname_github_codespaces %} для {% data variables.product.prodname_vscode %} не удается подключиться

Если вы не можете подключиться к codespace из {% data variables.product.prodname_vscode %} Desktop, выполните следующие действия по устранению неполадок.

1. Убедитесь, что установлена последняя версия расширения {% data variables.product.prodname_github_codespaces %}. Расширение доступно в виде предварительного выпуска, для которого часто выпускаются обновления.
   1. В {% data variables.product.prodname_vscode %}откройте вкладку "Расширения".
   2. Выберите расширение {% data variables.product.prodname_github_codespaces %}, чтобы открыть страницу обзора расширения.
   3. Если доступно обновление, отображается кнопка **Обновить до X.X.X**. Нажмите ее, чтобы выполнить обновление до последней версии.
2. Проверьте, используете ли вы стабильную сборку данных {% variables.product.prodname_vscode %} или выпуск [программы предварительной оценки {%data variables.product.prodname_vscode %}](https://code.visualstudio.com/insiders/) (ночные обновления). Если вы используете выпуск программы предварительной оценки, попробуйте установить [стабильную сборку](https://code.visualstudio.com/).
3. Ваша корпоративная сеть может блокировать подключение. Если возможно, проверьте все журналы со сведениям об отклоненных подключениях на устройстве.

Если вы по-прежнему не можете подключиться, {% data reusables.codespaces.contact-support %}.

### В codespace есть проблемы с задержкой

Если codespace функционирует особенно медленно или имеет проблемы с задержкой, возможно, эта среда была создан в отдаленном регионе. Чтобы устранить эту проблему, можно [вручную задать регион {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
