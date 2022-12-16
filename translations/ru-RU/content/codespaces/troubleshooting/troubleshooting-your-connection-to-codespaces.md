---
title: Устранение неполадок подключения к Codespaces
intro: Справка по устранению неполадок при подключении к {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Connection
ms.openlocfilehash: c551126781da972ad39c42aea3ac67b121fab301
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145092465"
---
## <a name="503-codespace-service-unavailable"></a>503 — Служба codespace недоступна.

Для codespace настроена остановка через 30 минут бездействия. При попытке взаимодействия с codespace после остановки может появиться сообщение об ошибке `503 service unavailable`. 

- Если кнопка **Пуск** отображается в {% data variables.product.prodname_vscode %} или в окне браузера, нажмите кнопку **Пуск**, чтобы повторно подключиться к codespace.
- Сбросьте codespace, перезагрузив окно. В [палитре команд](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) в {% data variables.product.prodname_vscode %}щелкните **Разработка: перезагрузить окно**.

## <a name="browser-cannot-connect"></a>Браузер не может подключиться

Иногда вы не удается получить доступ к codespace из браузера. В этом случае перейдите по адресу https://github.com/codespaces и попробуйте подключиться к codespace с этой страницы.

  - Если codespace отсутствует на странице, убедитесь, что вы являетесь владельцем среды codespace, к которой пытаетесь подключиться. Вы можете открыть только ту среду codespace, которую создали именно вы. URL-адреса для codespace всегда содержат дескриптор {% data variables.product.company_short %}.
  - Если среда codespace указана, но вы не можете подключиться с этой страницы, проверьте, можно ли подключиться с помощью другого браузера.

Ваша корпоративная сеть может блокировать подключение. Если возможно, проверьте все журналы со сведениям об отклоненных подключениях на устройстве.

Если вы по-прежнему не можете подключиться, {% data reusables.codespaces.contact-support %}.

## <a name="-data-variablesproductprodname_github_codespaces--extension-for--data-variablesproductprodname_vscode--cannot-connect"></a>Расширению {% data variables.product.prodname_github_codespaces %} для {% data variables.product.prodname_vscode %} не удается подключиться

Если вы не можете подключиться к codespace из {% data variables.product.prodname_vscode %} Desktop, выполните следующие действия по устранению неполадок.

1. Убедитесь, что установлена последняя версия расширения {% data variables.product.prodname_github_codespaces %}. Расширение доступно в виде предварительного выпуска, для которого часто выпускаются обновления.
   1. В {% data variables.product.prodname_vscode %}откройте вкладку "Расширения".
   2. Выберите расширение {% data variables.product.prodname_github_codespaces %}, чтобы открыть страницу обзора расширения.
   3. Если доступно обновление, отображается кнопка **Обновить до X.X.X**. Нажмите ее, чтобы выполнить обновление до последней версии.
2. Проверьте, используете ли вы стабильную сборку данных {% variables.product.prodname_vscode %} или выпуск [программы предварительной оценки {%data variables.product.prodname_vscode %}](https://code.visualstudio.com/insiders/) (ночные обновления). Если вы используете выпуск программы предварительной оценки, попробуйте установить [стабильную сборку](https://code.visualstudio.com/).
3. Ваша корпоративная сеть может блокировать подключение. Если возможно, проверьте все журналы со сведениям об отклоненных подключениях на устройстве.

Если вы по-прежнему не можете подключиться, {% data reusables.codespaces.contact-support %}.

### <a name="the-codespace-has-latency-issues"></a>В codespace есть проблемы с задержкой

Если codespace функционирует особенно медленно или имеет проблемы с задержкой, возможно, эта среда была создан в отдаленном регионе. Чтобы устранить эту проблему, можно [вручную задать регион {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
