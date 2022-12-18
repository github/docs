---
title: Informationen zu Verbindungen mit GitHub
intro: '{% data variables.product.prodname_desktop %} verwendet HTTPS zum sicheren Austauschen von Daten mit {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/about-connections-to-github
versions:
  fpt: '*'
shortTitle: About connections
ms.openlocfilehash: 94f1e7db78504a115b233f17485f1b12299a1e11
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105288'
---
{% data variables.product.prodname_desktop %} stellt eine Verbindung mit {% data variables.product.prodname_dotcom %} her, wenn du Daten von Remoterepositorys pullst, Daten an Remoterepositorys pushst sowie Remoterepositorys klonst oder kopierst. Um von {% data variables.product.prodname_desktop %} eine Verbindung mit {% data variables.product.prodname_dotcom %} herzustellen, musst du dein Konto authentifizieren. Weitere Informationen findest du unter [Authentifizieren auf {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github).

Nach der Authentifizierung bei {% data variables.product.prodname_dotcom %} kann mit {% data variables.product.prodname_desktop %} eine Verbindung mit Remoterepositorys hergestellt werden. {% data variables.product.prodname_desktop %} speichert die Anmeldeinformationen (Benutzername und Kennwort oder persönliches Zugriffstoken) zwischen. Diese Anmeldeinformationen werden bei jeder Verbindung zum Remoterepository für die Authentifizierung verwendet.

{% data variables.product.prodname_desktop %} stellt die Verbindung mit {% data variables.product.prodname_dotcom %} über HTTPS her. Bei Verwendung von {% data variables.product.prodname_desktop %} für den Zugriff auf Repositorys, die mit SSH geklont wurden, treten möglicherweise Fehler auf. Um eine Verbindung mit einem Repository herzustellen, das mithilfe von SSH geklont wurde, müssen die URLs der Remoterepositorys geändert werden. Weitere Informationen findest du unter [Verwalten von Remoterepositorys](/github/getting-started-with-github/managing-remote-repositories).

## Weitere Informationsquellen
- [Repositories von GitHub Desktop klonen und per „Fork“ kopieren](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)
