---
ms.openlocfilehash: 50e7f623d6585c8697d0b1c6c827a855df26c571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145107599"
---
1. Erstelle ein neues persönliches Zugriffstoken (PAT) mit den geeigneten Bereichen für die Aufgaben, die du erledigen möchtest. Wenn für deine Organisation SSO notwendig ist, musst du SSO für dein neues Token aktivieren.
  {% warning %}

  **Hinweis:** Wenn du in der Benutzeroberfläche den Bereich `write:packages` für dein persönliches Zugangstoken (PAT) auswählst, wird standardmäßig auch der Bereich `repo` ausgewählt. Der Bereich `repo` bietet unnötigen und weitreichenden Zugriff, den du vor allem für GitHub Actions Workflows vermeiden solltest. Weitere Informationen findest du unter [Sicherheitshärtung für GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access). Als Problemumgehung kannst du mit dieser URL nur den Bereich `write:packages` für dein persönliches Zugriffstoken in der Benutzeroberfläche auswählen: `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`. 

  {% endwarning %}

    - Wähle den Bereich `read:packages` aus, um Containerimages herunterzuladen und die zugehörigen Metadaten zu lesen.
    - Wähle den Bereich `write:packages` aus, um Containerimages herunter- und hochzuladen und die zugehörigen Metadaten zu lesen und zu schreiben.
    - Wähle den Bereich `delete:packages` aus, um Containerimages zu löschen.

  Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens für die Befehlszeile](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

2. Speichere dein persönliches Zugriffstoken. Wir empfehlen, dein persönliches Zugriffstoken als Umgebungsvariable zu speichern.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. Melde dich mit der CLI für deinen Containertyp beim {% data variables.product.prodname_container_registry %}-Dienst unter `{% data reusables.package_registry.container-registry-hostname %}` an.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
