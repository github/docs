---
title: Zugriffsberechtigungen für Wikis ändern
intro: 'Standardmäßig können nur Projektmitarbeiter für das Repository das Wiki eines {% ifversion fpt or ghec or ghes %}öffentlichen{% endif %} Repositorys bearbeiten Aber du kannst jedem mit einem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} erlauben, dein Wiki zu bearbeiten.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Change access permissions
ms.openlocfilehash: 51a9ec690f0bdad1be302592091565b65e5f9b9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145090336'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Hebe unter „Features“ die Auswahl von **Restrict edits to collaborators only** (Bearbeitungen auf Mitarbeiter begrenzen) auf.
   ![Wiki-Bearbeitung einschränken](/assets/images/help/wiki/wiki_restrict_editing.png)

## Weiterführende Themen

- [Wikis deaktivieren](/communities/documenting-your-project-with-wikis/disabling-wikis)
