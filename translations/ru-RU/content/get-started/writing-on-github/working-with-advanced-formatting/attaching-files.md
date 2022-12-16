---
title: Вложение файлов
intro: 'Вы можете передать информацию, вложив различные типы файлов в свои сообщения о проблемах и запросы на вытягивание.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
  - /github/writing-on-github/working-with-advanced-formatting/attaching-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 28ce895a23c83f410d4755ad4036673e5c816155
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160779'
---
{% data reusables.repositories.anyone-can-view-anonymized-url %}

Чтобы вложить файл в беседу о проблеме или запросе на вытягивание, перетащите его в поле комментария. Кроме того, можно щелкнуть панель в нижней части поля комментария, чтобы просмотреть, выбрать и добавить файл с компьютера.

![Выбор вложений с компьютера](/assets/images/help/pull_requests/select-bar.png)

При вложении файла он сразу же отправляется в {% data variables.product.product_name %}, а текстовое поле обновляется для отображения анонимного URL-адреса файла. {% ifversion fpt or ghec %} Дополнительные сведения об анонимных URL-адресах см. в разделе [Сведения об анонимных URL-адресах](/github/authenticating-to-github/about-anonymized-urls).{% endif %}

{% tip %}

**Совет.** Во многих браузерах можно копировать и вставлять изображения непосредственно в поле.

{% endtip %}

Максимальный размер файла:
- 10 МБ для изображений и GIF{% ifversion fpt or ghec %};
- 10 МБ для видео, переданных в репозиторий, принадлежащий пользователю или организации в бесплатном плане GitHub;
- 100 МБ для видео, отправленных в репозиторий, принадлежащий пользователю или организации на платном плане GitHub{% elsif ghes %}
- 100 МБ для видео{% endif %};
- 25 МБ для всех остальных файлов.

Мы поддерживаем такие файлы:

* PNG ( *.png*);
* GIF ( *.gif*);
* JPEG ( *.jpg*) {%- ifversion svg-support %};
* SVG ( *.svg*) {%- endif %};
* файлы журнала ( *.log*);
* документы Microsoft Word ( *.docx*), Powerpoint ( *.pptx*) и Excel ( *.xlsx*);
* текстовые файлы ( *.txt*);
* PDF-файлы ( *.pdf*);
* ZIP (*.zip*, *.gz*, *.tgz*){% ifversion fpt or ghec or ghes %}
* Видео (*.mp4*, *.mov*, *.webm*){% endif %}

{% ifversion fpt or ghec or ghes %} {% примечание %}

**Примечание.** Совместимость видеокодеков зависит от браузера, и может случиться, что видео, которое вы загружаете в один браузер, не будет отображаться в другом. На данный момент рекомендуется использовать h.264 для обеспечения максимальной совместимости.

{% endnote %}{% endif %}

![Анимированные GIF-файлы вложений](/assets/images/help/pull_requests/dragging_images.gif)
