---
title: Personalisieren deines Profils
intro: 'Du kannst Informationen zu deiner Person für andere {% data variables.product.product_name %}-Benutzer*innen bereitstellen, indem du ein Profilbild einrichtest und eine Biografie zum Profil hinzufügst.'
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
ms.openlocfilehash: c12fccd91144428fe9aad2f01d2c0b0941fdd4d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681053'
---
## Dein Profilbild ändern

Mit deinem Profilbild kannst du überall auf {% data variables.product.product_name %} in Pull Requests, Kommentaren, Beiträge-Seiten und Diagrammen leichter identifiziert werden.

Wenn du ein Konto anlegst, stellt {% data variables.product.product_name %} dir ein zufällig generiertes „Identicon“ bereit. [Dein Identicon](https://github.com/blog/1586-identicons) wird aus einem Hash deiner Benutzer-ID generiert, sodass es keine Möglichkeit gibt, dessen Farbe oder Muster zu kontrollieren. Du kannst das Identicon durch ein Bild ersetzen, das Dich repräsentiert.

{% note %}

**Hinweis{% ifversion ghec %}e{% endif %}**: {% ifversion ghec %}

* {% endif %}Dein Profilbild sollte eine PNG-, JPG- oder GIF-Datei sein, die kleiner als 1 MB und 3000 × 3000 Pixel ist. Für eine optimale Darstellung empfehlen wir eine Bildgröße von etwa 500 x 500 Pixeln.
{% ifversion ghec %}* Gravatar-Profilbilder werden von {% data variables.product.prodname_emus %} nicht unterstützt.{% endif %}

{% endnote %}

### Ein Profilbild einrichten

{% data reusables.user-settings.access_settings %}
2. Klicke unter **Profilbild** auf {% octicon "pencil" aria-label="The edit icon" %} **Bearbeiten**.
![Profilbild bearbeiten](/assets/images/help/profile/edit-profile-photo.png)
3. Klicke auf **Foto hochladen...** .{% ifversion not ghae %} ![Profilbild hochladen](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}
3. Schneide das Bild zu. Wenn du fertig bist, klicke auf **Neues Profilbild festlegen**.
    ![Hochgeladenes Foto zuschneiden](/assets/images/help/profile/avatar_crop_and_save.png)

### Dein Profilbild auf das Identicon zurücksetzen

{% data reusables.user-settings.access_settings %}
2. Klicke unter **Profilbild** auf {% octicon "pencil" aria-label="The edit icon" %} **Bearbeiten**.
![Profilbild bearbeiten](/assets/images/help/profile/edit-profile-photo.png)
3. Klicke auf **Foto entfernen**, um dein Identicon wiederherzustellen. {% ifversion not ghae %}Wenn deine E-Mail-Adresse einem [Gravatar](https://en.gravatar.com/) zugeordnet ist, kannst du dein Identicon nicht wiederherstellen. Klicke stattdessen auf **Gravatar wiederherstellen**.
![Profilbild aktualisieren](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}

## Deinen Profilnamen ändern

Du kannst den Namen, der in deinem Profil angezeigt wird, ändern. Dieser Name kann auch neben Kommentaren angezeigt werden, die du in privaten Repositorys im Besitz einer Organisation hinterlässt. Weitere Informationen findest du unter [Verwalten der Anzeige von Mitgliedsnamen in deiner Organisation](/articles/managing-the-display-of-member-names-in-your-organization).

{% ifversion fpt or ghec %} {% note %}

**Hinweis:** Wenn du Mitglied eines {% data variables.product.prodname_emu_enterprise %}, bist, müssen Änderungen am Profilnamen über deinen Identitätsanbieter statt über {% data variables.product.prodname_dotcom_the_website %} vorgenommen werden. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %}
2. Gib unter „Name“ den Namen ein, der in deinem Profil angezeigt werden soll.
  ![Feld „Name“ in den Profileinstellungen](/assets/images/help/profile/name-field.png)

## Eine Biografie zu deinem Profil hinzufügen

Füge eine Biografie zu deinem Profil hinzu, um anderen {% data variables.product.product_name %}-Benutzern Informationen zu deiner Person bereitzustellen. Mithilfe von [@mentions](/articles/basic-writing-and-formatting-syntax) und Emojis kannst du angeben, wo du derzeit arbeitest oder zuvor gearbeitet hast, welcher Arbeit du nachgehst, oder sogar, welchen Kaffee du magst.

{% ifversion fpt or ghes or ghec %}

Eine README ist die beliebtere Methode, ausführlichere Informationen über sich selbst im Profil zu teilen. Weitere Informationen findest du unter [Verwalten der README für dein Profil](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme).

{% endif %}

{% note %}

**Hinweis:** Wenn du die Aktivitätsübersicht für dein Profil aktiviert hast und in deiner Bio eine Organisation mit @mention erwähnst, bei der du Mitglied bist, wird diese Organisation in der Aktivitätsübersicht an erster Stelle aufgeführt. Weitere Informationen findest du unter [Anzeigen einer Aktivitätsübersicht auf deinem Profil](/articles/showing-an-overview-of-your-activity-on-your-profile).

{% endnote %}

{% data reusables.user-settings.access_settings %}
2. Füge unter **Bio** den Inhalt hinzu, der auf deinem Profil angezeigt werden soll. Das Feld für die Biografie ist auf 160 Zeichen begrenzt.
    ![Biografie im Profil aktualisieren](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Tipp:** Wenn du eine Organisation mit @mention erwähnst, werden nur die Namen der Organisationen automatisch vervollständigt, bei denen du Mitglied bist. Du kannst dennoch Organisationen mit @mention erwähnen, bei denen du kein Mitglied bist, z. B. einen ehemaligen Auftraggeber. Die automatische Vervollständigung funktioniert in diesem Fall jedoch nicht.

  {% endtip %}

3. Klicke auf **Profil aktualisieren**.
    ![Schaltfläche „Profil aktualisieren“](/assets/images/help/profile/update-profile-button.png)

## Einen Status festlegen

Du kannst einen Status festlegen, um Informationen zu deiner aktuellen Verfügbarkeit auf {% data variables.product.product_name %} anzuzeigen. An folgenden Stellen wird dein Status angezeigt:
- auf deiner {% data variables.product.product_name %}-Profilseite.
- wenn Benutzer auf {% data variables.product.product_name %} mit dem Mauszeiger über deinen Benutzernamen oder deinen Avatar fahren.
- auf der Teamseite eines Teams, bei dem du Mitglied bist. Weitere Informationen findest du unter [Informationen zu Teams](/articles/about-teams/#team-pages).
- auf dem Organisations-Dashboard einer Organisation, bei der du Mitglied bist. Weitere Informationen findest du unter [Informationen zum Dashboard deiner Organisation](/articles/about-your-organization-dashboard/).

Wenn du deinen Status festlegst, kannst du andere Benutzer auch darüber informieren, dass du auf {% data variables.product.product_name %} nur begrenzt verfügbar bist.

![Mit @ erwähnter Benutzername mit Anmerkung „beschäftigt“](/assets/images/help/profile/username-with-limited-availability-text.png)

![Neben Benutzernamen des angeforderten Reviewers wird „beschäftigt“ angezeigt](/assets/images/help/profile/request-a-review-limited-availability-status.png)

Wenn du die Option „Beschäftigt“ auswählst, wird ein entsprechender Hinweis neben deinem Benutzernamen angezeigt, wenn andere Benutzer*innen dich mit @mention erwähnen, dir ein Issue oder einen Pull Request zuweisen oder einen Pull-Request-Review von dir anfordern. Du wirst außerdem von der automatischen Zuweisung von Reviews für Pull Requests ausgeschlossen, die einem Team zugewiesen sind, dem du angehörst. Weitere Informationen findest du unter [Verwalten von Code-Review-Einstellungen für dein Team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team).

1. Klicke in der oberen rechten Ecke von {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_name %}{% endif %} auf dein Profilfoto, und klicke dann auf **Status festlegen**. Wenn du bereits einen Status festgelegt hast, klicke auf diesen.
  ![Schaltfläche im Profil zum Festlegen des Status](/assets/images/help/profile/set-status-on-profile.png)
2. Um benutzerdefinierten Text zu deinem Status hinzuzufügen, klicke in das Textfeld und gib dort eine Statusmeldung ein.
  ![Feld zum Eingeben einer Statusmeldung](/assets/images/help/profile/type-a-status-message.png)
3. Um einen Emoji-Status festzulegen, klicke optional auf das Smiley-Symbol und wähle einen Emoji aus der Liste aus.
  ![Schaltfläche zum Auswählen eines Emojistatus](/assets/images/help/profile/select-emoji-status.png)
4. Wenn du angeben möchtest, dass du nur eingeschränkt verfügbar bist, wähle optional „Busy“ (Beschäftigt) aus.
  ![In den Optionen zum Bearbeiten des Status ausgewählte Option „Beschäftigt“](/assets/images/help/profile/limited-availability-status.png)
5. Verwende das Dropdownmenü **Status löschen**, und wähle aus, wann dein Status ablaufen soll. Wenn du kein Ablaufdatum für den Status auswählst, bleibt dein Status bestehen, bis du ihn löschst oder bearbeitest.
  ![Dropdownmenü zum Auswählen des Ablaufzeitpunkts für den Status](/assets/images/help/profile/status-expiration.png)
6. Klicke im Dropdownmenü auf die Organisation, für die dein Status sichtbar sein soll. Wenn du keine Organisation auswählst, ist dein Status öffentlich sichtbar.
  ![Dropdownmenü zum Auswählen der Benutzer*innen, für die der Status sichtbar ist](/assets/images/help/profile/status-visibility.png)
7. Klicke auf **Status festlegen**.
  ![Schaltfläche zum Festlegen des Status](/assets/images/help/profile/set-status-button.png)

{% ifversion fpt or ghec %}
## Anzeigen von Badges auf deinem Profil

Wenn du an bestimmten Programmen teilnimmst, zeigt {% data variables.product.prodname_dotcom %} automatisch einen auf deinem Profil an.

| Badge | Programm | BESCHREIBUNG |
| --- | --- | --- |
| {% octicon "cpu" aria-label="The Developer Program icon" %} | **Developer Program Member** | Wenn du ein registriertes Mitglied des Entwicklerprogramms von {% data variables.product.prodname_dotcom %} bist und eine App mit der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API entwickeln, wird deinem Profil der Badge „Developer Program Member“ hinzugefügt. Weitere Informationen zum Entwicklerprogramm von {% data variables.product.prodname_dotcom %} findest du unter [GitHub-Entwickler](/program/). |
| {% octicon "star-fill" aria-label="The star icon" %} | **Pro** | Wenn du {% data variables.product.prodname_pro %} verwendest, wird deinem Profil ein PRO-Badge hinzugefügt. Weitere Informationen zu {% data variables.product.prodname_pro %} findest du unter [Produkte von {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products#github-pro). |
| {% octicon "lock" aria-label="The lock icon" %} | **Security Bug Bounty Hunter** | Wenn du bei der Suche nach Sicherheitsrisiken mitgeholfen hast, wird deinem Profil der Badge „Security Bug Bounty Hunter“ hinzugefügt. Weitere Informationen zum Sicherheitsprogramm von {% data variables.product.prodname_dotcom %} findest du unter [Sicherheit mit {% data variables.product.prodname_dotcom %}](https://bounty.github.com/). |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %} | **{% data variables.product.prodname_dotcom %} Campus Expert** | Wenn du an {% data variables.product.prodname_campus_program %} teilnimmst, wird deinem Profil der Badge „{% data variables.product.prodname_dotcom %} Campus Expert“ hinzugefügt. Weitere Informationen zum Campus Experts-Programm findest du unter [Campus Experts](https://education.github.com/experts). |
| {% octicon "shield" aria-label="The shield icon" %} | **Sicherheitsempfehlungsbadge** | Wenn eine Sicherheitsempfehlung, die du an die [{% data variables.product.prodname_dotcom %}-Empfehlungsdatenbank](https://github.com/advisories) übermittelst, akzeptiert wird, erhältst du in deinem Profil einen Sicherheitsempfehlungsbadge. Weitere Informationen zu {% data variables.product.prodname_dotcom %}-Sicherheitsempfehlungen findest du unter [{% data variables.product.prodname_dotcom %}-Sicherheitsempfehlungen](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories). |
| {% octicon "check" aria-label="The check icon" %} | **Beantwortete Diskussionen** | Wenn deine Antwort auf eine Diskussion als Antwort gekennzeichnet ist, erhältst du in deinem Profil einen Badge für eine beantwortete Diskussion. Weitere Informationen zu {% data variables.product.prodname_dotcom %} Discussions findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions). |

{% endif %}

{% ifversion fpt or ghec %}

## Erzielen von Erfolgen

Erfolge honorieren bestimmte Ereignisse und Aktionen auf {% data variables.product.prodname_dotcom %}. Sie werden als kleine Badges angezeigt, die auf der Seitenleiste deines Profils aufgeführt sind. Wenn du auf einen Erfolg klickst oder darauf zeigst, wird eine detaillierte Ansicht angezeigt, die in Form einer kurzen Beschreibung und über Links zum Beitragsereignis angibt, wie der Erfolg erzielt wurde. Die Ereignislinks sind nur für Benutzer*innen sichtbar, die Zugriff auf die Repositorys oder Organisationen haben, in denen das Ereignis stattfindet. Für Benutzer*innen ohne Zugriffsberechtigungen werden Ereignislinks als nicht zugänglich angezeigt.

Informationen dazu, wie du verhindern kannst, dass private Beiträge zu den Erfolgen hinzugezählt werden, oder wie du Erfolge vollständig deaktivieren kannst, findest du unter [Anzeigen privater Beiträge und Erfolge auf deinem Profil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).

{% note %}

**Hinweis:** Dieses Feature befindet sich derzeit in der Betaversion und wird ggf. noch geändert.

{% endnote %}

{% endif %}

## Liste der qualifizierenden Repositorys für den Erfolg „Mars 2020 Helicopter Contributor“

Wenn du Commits im Commitverlauf für das aufgeführte Tag eines oder mehrerer der folgenden Repositorys erstellt hast, wird deinem Profil der Erfolg „Mars 2020 Helicopter Contributor“ hinzugefügt. Der erstellte Commit kann dir nur zugeschrieben werden, wenn er mit einer bestätigten E-Mail-Adresse erfolgt ist, die deinem Konto zu dem Zeitpunkt zugeordnet war, als {% data variables.product.prodname_dotcom %} die zulässigen Beiträge bestimmt hat. Du kannst Ersteller*in oder [Mitersteller*in](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) des Commits sein. Zukünftige Änderungen an bestätigten E-Mail-Adressen haben keine Auswirkungen auf den Badge. Die Liste basiert auf Informationen, die wir vom Jet Propulsion Laboratory der NASA erhalten haben.

| {% data variables.product.prodname_dotcom %} Repository | Version | Tag |
|---|---|---|
| [torvalds/linux](https://github.com/torvalds/linux) | 3.4 | [Version 3.4](https://github.com/torvalds/linux/releases/tag/v3.4) |
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
| [pyserial/pyserial](https://github.com/pyserial/pyserial) | 3,5 | [v3.5](https://github.com/pyserial/pyserial/releases/tag/v3.5) |
| [dateutil/dateutil](https://github.com/dateutil/dateutil) | 2.8.1 | [2.8.1](https://github.com/dateutil/dateutil/releases/tag/2.8.1) |
| [yaml/pyyaml ](https://github.com/yaml/pyyaml) | 5.4.1 | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1) |
| [psf/requests](https://github.com/psf/requests) | 2.25.1 | [v2.25.1](https://github.com/psf/requests/releases/tag/v2.25.1) |
| [boto/s3transfer](https://github.com/boto/s3transfer) | 0.3.4 | [0.3.4](https://github.com/boto/s3transfer/releases/tag/0.3.4) |
| [enthought/scimath](https://github.com/enthought/scimath) | 4.2.0 | [4.2.0](https://github.com/enthought/scimath/releases/tag/4.2.0) |
| [scipy/scipy](https://github.com/scipy/scipy) | 1.6.1 | [1\.6.1](https://github.com/scipy/scipy/releases/tag/v1.6.1) |
| [benjaminp/six](https://github.com/benjaminp/six) | 1.15.0 | [1.15.0](https://github.com/benjaminp/six/releases/tag/1.15.0) |
| [enthought/traits](https://github.com/enthought/traits) | 6.2.0 | [6.2.0](https://github.com/enthought/traits/releases/tag/6.2.0) |
| [urllib3/urllib3](https://github.com/urllib3/urllib3) | 1.26.3 | [1.26.3](https://github.com/urllib3/urllib3/releases/tag/1.26.3) |
| [python-attrs/attrs](https://github.com/python-attrs/attrs) | 19.3.0 | [19.3.0](https://github.com/python-attrs/attrs/releases/tag/19.3.0) |
| [CheetahTemplate3/cheetah3](https://github.com/CheetahTemplate3/cheetah3/) | 3.2.4 | [3.2.4](https://github.com/CheetahTemplate3/cheetah3/releases/tag/3.2.4) |
| [pallets/click](https://github.com/pallets/click) | 7.0 | [7.0](https://github.com/pallets/click/releases/tag/7.0) |
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
| [dmnfarrell/tkintertable](https://github.com/dmnfarrell/tkintertable) | 1.2 | [v1.2](https://github.com/dmnfarrell/tkintertable/releases/tag/v1.2) |
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
| [locationtech/spatial4j](https://github.com/locationtech/spatial4j) | 0.7 | [spatial4j-0.7](https://github.com/locationtech/spatial4j/releases/tag/spatial4j-0.7) |
| [locationtech/jts](https://github.com/locationtech/jts) | 1.15.0 | [jts-1.15.0](https://github.com/locationtech/jts/releases/tag/jts-1.15.0) |
| [apache/logging-log4j2](https://github.com/apache/logging-log4j2) | 2.11 | [log4j-2.11.0](https://github.com/apache/logging-log4j2/releases/tag/log4j-2.11.0) |

## Weiterführende Themen

- [Informationen zu deinem Profil](/articles/about-your-profile)
