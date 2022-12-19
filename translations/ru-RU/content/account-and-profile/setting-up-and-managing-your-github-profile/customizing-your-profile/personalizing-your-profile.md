---
title: Персонализация профиля
intro: 'Вы можете поделиться информацией о себе с другими пользователями {% data variables.product.product_name %}, установив изображение профиля и добавив биографию в свой профиль.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile
  - /articles/setting-your-profile-picture
  - /articles/how-do-i-set-up-my-profile-picture
  - /articles/gravatar-problems
  - /articles/how-do-i-set-up-my-avatar
  - /articles/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Personalize
ms.openlocfilehash: d77b1cee9da0ba9eeba55f7b16c73cc9b934f1e1
ms.sourcegitcommit: 3ce69524dc95bb450204ba2b8e82ee69af3af833
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101633'
---
## Изменение изображения профиля

Изображение профиля помогает идентифицировать вас на {% data variables.product.product_name %} в запросах на вытягивание, комментариях, на страницах вклада и диаграммах.

При регистрации учетной записи {% data variables.product.product_name %} предоставляет случайным образом сгенерированный "идентикон". [Идентикон](https://github.com/blog/1586-identicons) генерируется из хэша идентификатора пользователя, поэтому повлиять на его цвет или рисунок невозможно. Вы можете заменить идентикон на представляющее вас изображение.

{% note %}

**Примечание{% ifversion ghec %}{% endif %}** . {% ifversion ghec %}

* {% endif %}Изображение вашего профиля должно быть в формате PNG, JPG или GIF, размером не более 1 МБ и не более 3000 на 3000 пикселей. Для оптимальной отрисовки рекомендуется выбирать изображение разрешением не более 500 на 500 пикселей.
{% ifversion ghec %}* Изображения профиля из Gravatar не поддерживаются в {% data variables.product.prodname_emus %}.{% endif %}

{% endnote %}

### Задание изображения профиля

{% data reusables.user-settings.access_settings %}
2. В разделе **Изображение профиля** щелкните {% octicon "pencil" aria-label="The edit icon" %} **Изменить**.
![Изменение изображения профиля](/assets/images/help/profile/edit-profile-photo.png)
3. Щелкните **Добавить фото...** .{% ifversion not ghae %} ![Обновить фото профиля](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}
3. Обрезка рисунка. По завершении нажмите кнопку **Задать новое изображение профиля**.
    ![Обрезка отправляемой фотографии](/assets/images/help/profile/avatar_crop_and_save.png)

### Восстановление идентикона в качестве изображения профиля

{% data reusables.user-settings.access_settings %}
2. В разделе **Изображение профиля** щелкните {% octicon "pencil" aria-label="The edit icon" %} **Изменить**.
![Изменение изображения профиля](/assets/images/help/profile/edit-profile-photo.png)
3. Чтобы вернуться к идентикону, выберите пункт **Удалить фотографию**. {% ifversion not ghae %}Если ваш адрес электронной почты связан с [Gravatar](https://en.gravatar.com/), вы не можете отменить изменения вашего идентикона. Вместо этого выберите пункт **Восстановить Gravatar**.
![Обновить фото профиля](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}

## Изменение имени профиля

Вы можете изменить имя, отображаемое в профиле. Это имя также может отображаться рядом с комментариями, которые вы оставляете в частных репозиториях, принадлежащих организации. Дополнительные сведения см. в разделе [Управление отображением имен участников в организации](/articles/managing-the-display-of-member-names-in-your-organization).

{% ifversion fpt or ghec %} {% note %}

**Примечание:** Если вы являетесь членом {% данных variables.enterprise.prodname_emu_enterprise %}, все изменения в имени профиля должны быть внесены через поставщика удостоверений вместо {% данных variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %}
2. В поле "Имя" введите имя, которое должно отображаться в профиле.
  ![Поле имени в параметрах профиля](/assets/images/help/profile/name-field.png)

## Добавление биографический сведений в профиль

Добавьте в свой профиль биографические сведения, чтобы поделиться ими с другими пользователями {% data variables.product.product_name %}. С помощью [@mentions](/articles/basic-writing-and-formatting-syntax) (упоминаний) и эмодзи вы можете включить сведения о том, где вы работаете в настоящее время или работали ранее, чем вы занимаетесь, или даже о том, какой кофе пьете.

{% ifversion fpt or ghes or ghec %}

Чтобы рассказать о себе в более развернутой форме, можно также использовать файл сведений профиля. Дополнительные сведения см. в разделе [Управление файлом сведений профиля](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme).

{% endif %}

{% note %}

**Примечание**. Если в вашем профиле включен раздел обзора деятельности и вы упоминаете (@mention) организацию, в которой работаете, в биографических сведениях в профиле, эта организация будет отображаться первой в обзоре деятельности. Дополнительные сведения см. в разделе [Отображение общих сведений о ваших действиях в профиле](/articles/showing-an-overview-of-your-activity-on-your-profile).

{% endnote %}

{% data reusables.user-settings.access_settings %}
2. В разделе **Биография** добавьте содержимое, которое должно отображаться в профиле. Длина этого поля ограничена 160 символами.
    ![Обновление биографических сведений в профиле](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Совет**. Когда вы упоминаете (@mention) организацию, в списке автозавершения содержатся только те организации, к которым вы относитесь. Вы по-прежнему можете упоминать (@mention) организации, к которым не относитесь, например, если вы работали в них ранее, но автозавершение для них недоступно.

  {% endtip %}

{% данных reusables.profile.update-profile %}

{% ifversion profile-time-zone %}

## Настройка расположения и часового пояса

Вы можете задать расположение и часовой пояс в профиле, чтобы показать другим пользователям местное время. Ваше расположение и часовой пояс будут видны:
- на странице профиля {% data variables.product.product_name %};
- при наведении указателя мыши на ваше имя пользователя или аватар на {% data variables.product.product_name %};

При просмотре профиля вы увидите свое расположение, местное время и часовой пояс в отношении универсального времени в формате UTC.

  ![Снимок экрана: страница профиля Octocat, подчеркивающая расположение, местное время и поля часового пояса.](/assets/images/help/profile/profile-location-and-time.png)

Когда другие пользователи просматривают свой профиль, они увидят ваше местоположение, местное время и разницу в времени в часах от их собственного местного времени.

  ![Снимок экрана: страница профиля Octocat, подчеркивающая расположение, местное время и относительные поля времени.](/assets/images/help/profile/profile-relative-time.png)

{% data reusables.user-settings.access_settings %}
1. В разделе **"Расположение**" введите расположение, которое вы хотите отобразить в профиле.

  ![Снимок экрана: параметры расположения и местного времени, подчеркивающие поле расположения.](/assets/images/help/profile/location-field.png)

1. При необходимости, чтобы отобразить текущее местное время в профиле, выберите **"Отобразить текущее местное время**".

  ![Снимок экрана: параметры расположения и местного времени, подчеркивающие текущий флажок местного времени.](/assets/images/help/profile/display-local-time-checkbox.png)

   - Выберите раскрывающееся меню **часового пояса** и выберите локальный часовой пояс.

     ![Снимок экрана: параметры расположения и местного времени, подчеркивающие раскрывающееся меню часового пояса.](/assets/images/help/profile/time-zone-dropdown.png)
   
{% данных reusables.profile.update-profile %}

{% endif %}

## Задание состояния

Вы можете задать состояние текущей доступности на {% data variables.product.product_name %}. Состояние будет отображаться в следующих местах:
- на странице профиля {% data variables.product.product_name %};
- при наведении указателя мыши на ваше имя пользователя или аватар на {% data variables.product.product_name %};
- на странице команды, в которую вы входите; Дополнительные сведения см. в статье "[Сведения о командах](/articles/about-teams/#team-pages)".
- на панели мониторинга организации, участником которой вы являетесь. Дополнительные сведения см. в разделе [Сведения о панели мониторинга организации](/articles/about-your-organization-dashboard/).

При задании состояния можно также сообщить другим пользователям, что ваша доступность на {% data variables.product.product_name %} ограничена.

![Примечание "занят" рядом с именем упоминаемого пользователя](/assets/images/help/profile/username-with-limited-availability-text.png)

![Примечание "занят" рядом с именем запрошенного рецензента](/assets/images/help/profile/request-a-review-limited-availability-status.png)

Если вы выбрали вариант "Занят", то когда кто-то упоминает (@mention) ваше имя пользователя, назначает вам проблему или запрос на вытягивание либо запрашивает у вас проверку запроса на вытягивание, рядом с вашим именем пользователя будет примечание о том, что вы заняты. Вам также не будут автоматического назначаться проверки запросов на вытягивание, назначаемые вашим командам. Дополнительные сведения см. в разделе [Управление параметрами проверки кода для вашей команды](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team).

1. В правом верхнем углу {% ifversion fpt или ghec %}{% данных variables.product.prodname_dotcom_the_website %}{% остальных %}{% данных variables.product.product_name %}{% endif %}, щелкните фотографию профиля, а затем нажмите кнопку **"Задать состояние** " или, если у вас уже есть набор состояний, щелкните текущее состояние.
  ![Кнопка в профиле для задания состояния](/assets/images/help/profile/set-status-on-profile.png)
2. Чтобы добавить пользовательский текст состояния, щелкните в текстовом поле и введите сообщение.
  ![Поле для ввода сообщения о состоянии](/assets/images/help/profile/type-a-status-message.png)
3. Если необходимо задать состояние в виде эмодзи, щелкните значок смайлика и выберите эмодзи из списка.
  ![Кнопка для выбора состояния в виде эмодзи](/assets/images/help/profile/select-emoji-status.png)
4. Если необходимо сообщить о том, что ваша доступность ограничена, установите флажок "Занят".
  ![Параметр "Занят", выбранный в области изменения состояния](/assets/images/help/profile/limited-availability-status.png)
5. В раскрывающемся меню **Очистить состояние** выберите срок действия состояния. Если не сделать этого, состояние будет сохраняться до очистки или изменения.
  ![Раскрывающееся меню для выбора срока действия состояния](/assets/images/help/profile/status-expiration.png)
6. В раскрывающемся меню выберите организацию, в которой должно отображаться состояние. Если не сделать этого, состояние будет общедоступным.
  ![Раскрывающееся меню для выбора области действия состояния](/assets/images/help/profile/status-visibility.png)
7. Нажмите кнопку **Задать состояние**.
  ![Кнопка для задания состояния](/assets/images/help/profile/set-status-button.png)

{% ifversion fpt or ghec %}
## Отображение эмблем в профиле

При участии в определенных программах на {% data variables.product.prodname_dotcom %} в профиле автоматически отображается эмблема.

| Значок | Программа | Описание |
| --- | --- | --- |
| {% octicon "cpu" aria-label="The Developer Program icon" %} | **Участник программы для разработчиков** | Если вы являетесь зарегистрированным участником программы {% data variables.product.prodname_dotcom %} для разработчиков и создайте приложение с помощью API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, вы получите эмблему участника программы для разработчиков в вашем профиле. Дополнительные сведения о программе {% data variables.product.prodname_dotcom %} для разработчиков см. на странице [GitHub Developer](/program/). |
| {% octicon "star-fill" aria-label="The star icon" %} | **Pro** | Если вы используете {% data variables.product.prodname_pro %}, то получите эмблему PRO в профиле. Дополнительные сведения о {% data variables.product.prodname_pro %} см. на странице [Продукты {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products#github-pro). |
| {% octicon "lock" aria-label="The lock icon" %} | **Security Bug Bounty Hunter** | Если вы помогали в поиске уязвимостей в системе безопасности, то получите эмблему Security Bug Bounty Hunter в профиле. Дополнительные сведения об этой программе безопасности {% data variables.product.prodname_dotcom %} см. в разделе [Безопасность {% data variables.product.prodname_dotcom %}](https://bounty.github.com/). |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %} | **{% data variables.product.prodname_dotcom %} Campus Expert** | Если вы участвуете в программе {% data variables.product.prodname_campus_program %}, то получите эмблему {% data variables.product.prodname_dotcom %} Campus Expert в профиле. Дополнительные сведения о программе Campus Experts см. на странице [Campus Experts](https://education.github.com/experts). |
| {% octicon "shield" aria-label="The shield icon" %} | **Советы по вопросам безопасности** | Если рекомендация по безопасности, которую вы отправляете в [базу данных рекомендаций {% data variables.product.prodname_dotcom %}](https://github.com/advisories), будет принята, вы получите в своем профиле индикатор событий рекомендации по безопасности. Дополнительные сведения о советах по безопасности {% data variables.product.prodname_dotcom %} см. в разделе [Советы по безопасности {% data variables.product.prodname_dotcom %}](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories). |
| {% octicon "check" aria-label="The check icon" %} | **Ответы на обсуждение** | Если ваш ответ на обсуждение помечен как ответ, вы получите индикатор событий "Ответ на обсуждение" в своем профиле. Дополнительные сведения об обсуждениях {% data variables.product.prodname_dotcom %} см. [в этом разделе](/discussions/collaborating-with-your-community-using-discussions/about-discussions). |

{% endif %}

{% ifversion fpt or ghec %}

## Получение достижений

Достижения отмечают определенные события и действия, которые происходят в {% data variables.product.prodname_dotcom %}. Они будут отображаться в виде небольших индикаторов событий, перечисленных на боковой панели вашего профиля. Если щелкнуть или навести указатель мыши на достижение, отобразится подробное представление с указаниями о том, как было получено достижение, с кратким описанием и ссылками на сопутствующие события. Ссылки на события будут видны только тем пользователям, у которых есть доступ к репозиторию или организации, в которой произошло событие. Ссылки на мероприятия будут недоступны для всех пользователей без доступа.

Сведения о том, как запретить подсчет личных вкладов в ваши достижения или полностью отключить достижения, см. в разделе [Отображение ваших личных вкладов и достижений в вашем профиле](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).

{% note %}

**Примечание.** Сейчас эта функция находится на стадии бета-версии и может быть изменена.

{% endnote %}

{% endif %}

## Список подходящих репозиториев для достижения Mars 2020 Helicopter Contributor

Если вы являетесь автором фиксаций в журнале фиксаций для соответствующего тега одного или нескольких перечисленных ниже репозиториев, вы получите достижение "Участник программы Mars 2020 Helicopter" в вашем профиле. Чтобы фиксация была признана вашей, она должна иметь проверенный адрес электронной почты и должна была быть связана с вашей учетной записью на тот момент, когда на {% data variables.product.prodname_dotcom %} определялась допустимость вкладов. Вы можете быть исходным автором или [одним из соавторов](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) фиксации. Будущие изменения проверенного адреса электронной почты не повлияют на присвоение эмблемы. Этот список построен на основе сведений, полученных из Лаборатории реактивного движения НАСА.

| Репозиторий {% data variables.product.prodname_dotcom %} | Версия | Тег |
|---|---|---|
| [torvalds/linux](https://github.com/torvalds/linux) | 3.4 | [v3.4](https://github.com/torvalds/linux/releases/tag/v3.4) |
| [python/cpython](https://github.com/python/cpython) | 3.9.2 | [v3.9.2](https://github.com/python/cpython/releases/tag/v3.9.2) |
| [boto/boto3](https://github.com/boto/boto3) | 1.17.17 | [1.17.17](https://github.com/boto/boto3/releases/tag/1.17.17) |
| [boto/botocore](https://github.com/boto/botocore) | 1.20.11 | [1.20.11](https://github.com/boto/botocore/releases/tag/1.20.11) |
| [certifi/python-certifi](https://github.com/certifi/python-certifi) | 2020.12.5 | [2020.12.05](https://github.com/certifi/python-certifi/releases/tag/2020.12.05) |
| [chardet/chardet](https://github.com/chardet/chardet) | 4.0.0 | [4.0.0](https://github.com/chardet/chardet/releases/tag/4.0.0) |
| [matplotlib/cycler](https://github.com/matplotlib/cycler) | 0.10.0 | [v0.10.0](https://github.com/matplotlib/cycler/releases/tag/v0.10.0) |
| [elastic/elasticsearch-py](https://github.com/elastic/elasticsearch-py) | 6.8.1 | [6.8.1](https://github.com/elastic/elasticsearch-py/releases/tag/6.8.1) |
| [ianare/exif-py](https://github.com/ianare/exif-py) | 2.3.2 | [2.3.2](https://github.com/ianare/exif-py/releases/tag/2.3.2) |
| [kjd/idna](https://github.com/kjd/idna) | 2.10 | [v2.10](https://github.com/kjd/idna/releases/tag/v2.10) |
| [jmespath/jmespath.py](https://github.com/jmespath/jmespath.py) | 0.10.0 | [0.10.0](https://github.com/jmespath/jmespath.py/releases/tag/0.10.0) |
| [nucleic/kiwi](https://github.com/nucleic/kiwi) | 1.3.1 | [1.3.1](https://github.com/nucleic/kiwi/releases/tag/1.3.1) |
| [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib) | 3.3.4 | [v3.3.4](https://github.com/matplotlib/matplotlib/releases/tag/v3.3.4) |
| [numpy/numpy](https://github.com/numpy/numpy) | 1.20.1 | [v1.20.1](https://github.com/numpy/numpy/releases/tag/v1.20.1) |
| [opencv/opencv-python](https://github.com/opencv/opencv-python) | 4.5.1.48 | [48](https://github.com/opencv/opencv-python/releases/tag/48) |
| [python-pillow/Pillow](https://github.com/python-pillow/Pillow) | 8.1.0 | [8.1.0](https://github.com/python-pillow/Pillow/releases/tag/8.1.0) |
| [pycurl/pycurl](https://github.com/pycurl/pycurl) | 7.43.0.6 | [REL_7_43_0_6](https://github.com/pycurl/pycurl/releases/tag/REL_7_43_0_6) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.7 | [pyparsing_2.4.7](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.7) |
| [pyserial/pyserial](https://github.com/pyserial/pyserial) | 3.5 | [v3.5](https://github.com/pyserial/pyserial/releases/tag/v3.5) |
| [dateutil/dateutil](https://github.com/dateutil/dateutil) | 2.8.1 | [2.8.1](https://github.com/dateutil/dateutil/releases/tag/2.8.1) |
| [yaml/pyyaml ](https://github.com/yaml/pyyaml) | 5.4.1 | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1) |
| [psf/requests](https://github.com/psf/requests) | 2.25.1 | [v2.25.1](https://github.com/psf/requests/releases/tag/v2.25.1) |
| [boto/s3transfer](https://github.com/boto/s3transfer) | 0.3.4 | [0.3.4](https://github.com/boto/s3transfer/releases/tag/0.3.4) |
| [enthought/scimath](https://github.com/enthought/scimath) | 4.2.0 | [4.2.0](https://github.com/enthought/scimath/releases/tag/4.2.0) |
| [scipy/scipy](https://github.com/scipy/scipy) | 1.6.1 | [v1.6.1](https://github.com/scipy/scipy/releases/tag/v1.6.1) |
| [benjaminp/six](https://github.com/benjaminp/six) | 1.15.0 | [1.15.0](https://github.com/benjaminp/six/releases/tag/1.15.0) |
| [enthought/traits](https://github.com/enthought/traits) | 6.2.0 | [6.2.0](https://github.com/enthought/traits/releases/tag/6.2.0) |
| [urllib3/urllib3](https://github.com/urllib3/urllib3) | 1.26.3 | [1.26.3](https://github.com/urllib3/urllib3/releases/tag/1.26.3) |
| [python-attrs/attrs](https://github.com/python-attrs/attrs) | 19.3.0 | [19.3.0](https://github.com/python-attrs/attrs/releases/tag/19.3.0) |
| [CheetahTemplate3/cheetah3](https://github.com/CheetahTemplate3/cheetah3/) | 3.2.4 | [3.2.4](https://github.com/CheetahTemplate3/cheetah3/releases/tag/3.2.4) |
| [pallets/click](https://github.com/pallets/click) | 7,0 | [7.0](https://github.com/pallets/click/releases/tag/7.0) |
| [pallets/flask](https://github.com/pallets/flask) | 1.1.1 | [1.1.1](https://github.com/pallets/flask/releases/tag/1.1.1) |
| [flask-restful/flask-restful](https://github.com/flask-restful/flask-restful) | 0.3.7 | [0.3.7](https://github.com/flask-restful/flask-restful/releases/tag/0.3.7) |
| [pytest-dev/iniconfig](https://github.com/pytest-dev/iniconfig) | 1.0.0 | [v1.0.0](https://github.com/pytest-dev/iniconfig/releases/tag/v1.0.0) |
| [pallets/itsdangerous](https://github.com/pallets/itsdangerous) | 1.1.0 | [1.1.0](https://github.com/pallets/itsdangerous/releases/tag/1.1.0) |
| [pallets/jinja](https://github.com/pallets/jinja) | 2.10.3 | [2.10.3](https://github.com/pallets/jinja/releases/tag/2.10.3) |
| [lxml/lxml](https://github.com/lxml/lxml) | 4.4.1 | [lxml-4.4.1](https://github.com/lxml/lxml/releases/tag/lxml-4.4.1) |
| [Python-Markdown/markdown](https://github.com/Python-Markdown/markdown) | 3.1.1 | [3.1.1](https://github.com/Python-Markdown/markdown/releases/tag/3.1.1) |
| [pallets/markupsafe](https://github.com/pallets/markupsafe) | 1.1.1 | [1.1.1](https://github.com/pallets/markupsafe/releases/tag/1.1.1) |
| [pypa/packaging](https://github.com/pypa/packaging) | 19.2 | [19.2](https://github.com/pypa/packaging/releases/tag/19.2) |
| [pexpect/pexpect](https://github.com/pexpect/pexpect) | 4.7.0 | [4.7.0](https://github.com/pexpect/pexpect/releases/tag/4.7.0) |
| [pytest-dev/pluggy](https://github.com/pytest-dev/pluggy) | 0.13.0 | [0.13.0](https://github.com/pytest-dev/pluggy/releases/tag/0.13.0) |
| [pexpect/ptyprocess](https://github.com/pexpect/ptyprocess) | 0.6.0 | [0.6.0](https://github.com/pexpect/ptyprocess/releases/tag/0.6.0) |
| [pytest-dev/py](https://github.com/pytest-dev/py) | 1.8.0 | [1.8.0](https://github.com/pytest-dev/py/releases/tag/1.8.0) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.5 | [pyparsing_2.4.5](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.5) |
| [pytest-dev/pytest](https://github.com/pytest-dev/pytest) | 5.3.0 | [5.3.0](https://github.com/pytest-dev/pytest/releases/tag/5.3.0) |
| [stub42/pytz](https://github.com/stub42/pytz) | 2019.3 | [release_2019.3](https://github.com/stub42/pytz/releases/tag/release_2019.3) |
| [uiri/toml](https://github.com/uiri/toml) | 0.10.0 | [0.10.0](https://github.com/uiri/toml/releases/tag/0.10.0) |
| [pallets/werkzeug](https://github.com/pallets/werkzeug) | 0.16.0 | [0.16.0](https://github.com/pallets/werkzeug/releases/tag/0.16.0) |
| [dmnfarrell/tkintertable](https://github.com/dmnfarrell/tkintertable) | 1,2 | [v1.2](https://github.com/dmnfarrell/tkintertable/releases/tag/v1.2) |
| [wxWidgets/wxPython-Classic](https://github.com/wxWidgets/wxPython-Classic) | 2.9.1.1 | [wxPy-2.9.1.1](https://github.com/wxWidgets/wxPython-Classic/releases/tag/wxPy-2.9.1.1) |
| [nasa/fprime](https://github.com/nasa/fprime) | 1.3 | [NASA-v1.3](https://github.com/nasa/fprime/releases/tag/NASA-v1.3) |
| [nucleic/cppy](https://github.com/nucleic/cppy) | 1.1.0 | [1.1.0](https://github.com/nucleic/cppy/releases/tag/1.1.0) |
| [opencv/opencv](https://github.com/opencv/opencv) | 4.5.1 | [4.5.1](https://github.com/opencv/opencv/releases/tag/4.5.1) |
| [curl/curl](https://github.com/curl/curl) | 7.72.0 | [curl-7_72_0](https://github.com/curl/curl/releases/tag/curl-7_72_0) |
| [madler/zlib](https://github.com/madler/zlib) | 1.2.11 | [v1.2.11](https://github.com/madler/zlib/releases/tag/v1.2.11) |
| [apache/lucene](https://github.com/apache/lucene) | 7.7.3 | [releases/lucene-solr/7.7.3](https://github.com/apache/lucene/releases/tag/releases%2Flucene-solr%2F7.7.3) |
| [yaml/libyaml](https://github.com/yaml/libyaml) | 0.2.5 | [0.2.5](https://github.com/yaml/libyaml/releases/tag/0.2.5) |
| [elastic/elasticsearch](https://github.com/elastic/elasticsearch) | 6.8.1 | [v6.8.1](https://github.com/elastic/elasticsearch/releases/tag/v6.8.1) |
| [twbs/bootstrap](https://github.com/twbs/bootstrap) | 4.3.1 | [v4.3.1](https://github.com/twbs/bootstrap/releases/tag/v4.3.1) |
| [vuejs/vue](https://github.com/vuejs/vue) | 2.6.10 | [v2.6.10](https://github.com/vuejs/vue/releases/tag/v2.6.10) |
| [carrotsearch/hppc](https://github.com/carrotsearch/hppc) | 0.7.1 | [0.7.1](https://github.com/carrotsearch/hppc/releases/tag/0.7.1) |
| [JodaOrg/joda-time](https://github.com/JodaOrg/joda-time) | 2.10.1 | [v2.10.1](https://github.com/JodaOrg/joda-time/releases/tag/v2.10.1) |
| [tdunning/t-digest](https://github.com/tdunning/t-digest) | 3.2 | [t-digest-3.2](https://github.com/tdunning/t-digest/releases/tag/t-digest-3.2) |
| [HdrHistogram/HdrHistogram](https://github.com/HdrHistogram/HdrHistogram) | 2.1.9 | [HdrHistogram-2.1.9](https://github.com/HdrHistogram/HdrHistogram/releases/tag/HdrHistogram-2.1.9) |
| [locationtech/spatial4j](https://github.com/locationtech/spatial4j) | 0,7 | [spatial4j-0.7](https://github.com/locationtech/spatial4j/releases/tag/spatial4j-0.7) |
| [locationtech/jts](https://github.com/locationtech/jts) | 1.15.0 | [jts-1.15.0](https://github.com/locationtech/jts/releases/tag/jts-1.15.0) |
| [apache/logging-log4j2](https://github.com/apache/logging-log4j2) | 2,11 | [log4j-2.11.0](https://github.com/apache/logging-log4j2/releases/tag/log4j-2.11.0) |

## Дополнительные материалы

- [Сведения о профиле](/articles/about-your-profile)
