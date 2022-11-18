---
title: Фиксация и проверка изменений в проекте
intro: '{% data variables.product.prodname_desktop %} отслеживает все изменения всех файлов в процессе их редактирования. Вы можете решить, как сгруппировать изменения для создания значимых фиксаций.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  fpt: '*'
shortTitle: Commit & review changes
ms.openlocfilehash: ecc12722a7d0eebeedc13878972d138ca894db5a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117555'
---
## Сведения о фиксациях

{% data reusables.commits.about-commits %} Вы также можете добавить соавтора для фиксаций, над которыми вы работаете совместно с другими пользователями.

{% data reusables.desktop.update-email-address %} Дополнительные сведения см. в статье [Настройка Git для GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop).

## Выбор ветви и внесение изменений

1. [Создайте новую ветвь](/desktop/guides/contributing-to-projects/managing-branches) или выберите существующую ветвь, щелкнув {% octicon "git-branch" aria-label="The branch icon" %} **Текущая ветвь** на панели инструментов и выбрав ветвь из списка.

  ![Раскрывающееся меню для переключения текущей ветви](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.make-changes %}

## Выбор способа отображения различий

Вы можете изменить способ отображения различий в {% data variables.product.prodname_desktop %} в соответствии с потребностями проверки.

Чтобы изменить способ просмотра различий, в правом верхнем углу представления различий щелкните {% octicon "gear" aria-label="The Gear icon" %}.
- Чтобы изменить способ отображения всего различия, в разделе "Отображение различия" выберите **Объединенное** или **Разделенное**. В объединенном представлении изменения отображаются линейно, в то время как в разделенном представлении старое содержимое отображается слева, новое — справа.
- Чтобы скрыть изменения пробелов и сосредоточиться на более существенных изменениях, выберите **Скрыть изменения пробелов**.

![Меню параметров инструмента сравнения](/assets/images/help/desktop/diff-selection.png)

Если вам нужно увидеть больше файла, чем {% data variables.product.prodname_desktop %} отображает по умолчанию, можно развернуть инструмент сравнения.
- Чтобы увидеть следующие несколько строк выше или ниже выделенных изменений, щелкните стрелку над или под номерами строк.
- Чтобы просмотреть весь файл, щелкните правой кнопкой мыши представление различий и выберите пункт **Развернуть весь файл**.

![Развертывание представления различий](/assets/images/help/desktop/expand-diff-view.png)

## Выбор изменений для включения в фиксацию

При внесении изменений в файлы в текстовом редакторе и их локальном сохранении вы также увидите изменения в {% data variables.product.prodname_desktop %}.

* Красный значок {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} указывает на удаленные файлы.
* Желтый значок {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} указывает на измененные файлы.
* Зеленый значок {% octicon "diff-added" aria-label="The diff added icon color-green" %} указывает на добавленные файлы.
* Чтобы получить доступ к спрятанным изменениям, нажмите кнопку **Спрятанные изменения**.

  ![Параметр "Спрятанные изменения"](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![Установите флажок для фиксации всех измененных файлов](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![Установите флажки рядом с файлами, которые нужно зафиксировать](/assets/images/help/desktop/commit-some.png)

### Создание частичной фиксации

Если один файл содержит несколько изменений, но вы хотите включить некоторые из этих изменений в фиксацию, можно создать частичную фиксацию. Остальные изменения останутся неизменными, чтобы можно было внести дополнительные изменения и фиксации. Это позволяет выполнять отдельные значимые фиксации, такие как сохранение изменений разрывов строк в фиксации отдельно от изменений кода или текста.

Чтобы исключить измененные строки из фиксации, щелкните одну или несколько измененных строк, чтобы синий цвет исчез. Строки, которые по-прежнему выделены синим цветом, будут включены в фиксацию.

  ![Невыбранные строки в файле](/assets/images/help/desktop/partial-commit.png)

## Отмена изменений
Если у вас есть незафиксированные изменения, которые вы не хотите сохранить, можно отменить изменения. Это приведет к удалению изменений из файлов на компьютере. Вы можете отменить все незафиксированные изменения в одном или нескольких файлах или удалить определенные строки, добавленные вами.

Отмененные изменения сохраняются в устаревшем файле в корзине. Вы можете восстановить отмененные изменения до очистки корзины.

### Отмена изменений в одном или нескольких файлах

{% data reusables.desktop.select-discard-files %} {% data reusables.desktop.click-discard-files %}

  ![Пункт отмены изменений в контекстном меню](/assets/images/help/desktop/discard-changes-mac.png) {% data reusables.desktop.confirm-discard-files %}

  ![Кнопка "Отменить изменения" в диалоговом окне подтверждения](/assets/images/help/desktop/discard-changes-confirm-mac.png)

### Отмена изменений в одной или нескольких строках
Можно отменить одну или несколько измененных строк, которые не были зафиксированы.

{% note %}

**Примечание:** удаление отдельных строк отключено в группе изменений, добавляющих и удаляющих строки.

{% endnote %}

Чтобы отменить одну добавленную строку, в списке измененных строк щелкните правой кнопкой мыши строку, которую нужно отменить, и выберите **Отменить добавленную строку**.

  ![Отмена одной строки в диалоговом окне подтверждения](/assets/images/help/desktop/discard-single-line.png)

Чтобы отменить группу измененных строк, щелкните правой кнопкой мыши вертикальную полосу справа от номеров тех строк, которые нужно отменить, а затем выберите **Отменить добавленные строки**.

  ![Отмена группы добавленных строк в диалоговом окне подтверждения](/assets/images/help/desktop/discard-multiple-lines.png)


## Написание сообщения о фиксации и отправка изменений

Когда вы выберете все изменения, которые нужно включить в фиксацию, напишите сообщение о фиксации и отправьте изменения. Если вы совместно работали над фиксацией с другими пользователями, вы также можете атрибутировать фиксацию нескольким авторам.

{% note %}

**Примечание:** {% data reusables.desktop.tags-push-with-commits %} Дополнительные сведения см. в статье [Управление тегами](/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags).

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Поле сообщения о фиксации](/assets/images/help/desktop/commit-message.png)
1. При необходимости, чтобы атрибутировать фиксацию другому автору, щелкните значок добавления соавторов и введите имена пользователей, которые вы хотите включить.

  ![Добавление соавтора в сообщение о фиксации](/assets/images/help/desktop/add-co-author-commit.png) {% data reusables.desktop.commit-button %}

  ![Кнопка "Зафиксировать"](/assets/images/help/desktop/commit-button.png)
4. Если ветвь, которую вы пытаетесь зафиксировать, защищена, Desktop предупредит вас.
    - Чтобы переместить изменения, щелкните **переключатель ветвей**.
    - Чтобы зафиксировать изменения в защищенной ветви, нажмите кнопку **Зафиксировать в _название_ветви_**.

  Дополнительные сведения о защищенных ветвях см. в статье [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches).

  ![Предупреждение о защищенной ветви](/assets/images/help/desktop/protected-branch-warning.png) {% data reusables.desktop.push-origin %}

6. Если у вас есть запрос на вытягивание, основанный на работающей ветви, {% data variables.product.prodname_desktop %} отобразит состояние проверок, выполненных для запроса на вытягивание. Дополнительные сведения о проверках приведены в статье [Просмотр и повторная проверка в GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop).

 ![Отображение проверки рядом с именем ветви](/assets/images/help/desktop/checks-dialog.png)

 Если запрос на вытягивание не был создан для текущей ветви, {% data variables.product.prodname_desktop %} предоставит вам возможность создать ее. Дополнительные сведения см. в статье [Создание проблемы или запроса на вытягивание](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request).

 ![Создание запроса на включение изменений](/assets/images/help/desktop/mac-create-pull-request.png)
