---
title: Repository von GitHub in GitHub Desktop klonen
intro: 'Mit {% data variables.product.prodname_dotcom %} kannst du Remote-Repositorys in {% data variables.product.prodname_desktop %} klonen.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop
versions:
  fpt: '*'
shortTitle: Clone a GitHub repo
ms.openlocfilehash: ba4ddcc8c3d95454ab06cac0293162e2fe01fe32
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105379'
---
{% tip %}

**Tipp**: Mit {% data variables.product.prodname_desktop %} kannst du auch Repositorys klonen, die sich in {% data variables.product.prodname_dotcom %} befinden.  Weitere Informationen findest du unter [Klonen eines Repositorys von {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/).

{% endtip %}

{% mac %}

1. Melde Dich bei {% data variables.product.product_location %} und {% data variables.product.prodname_desktop %} an, bevor Du den Klonvorgang startest.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Klicke auf **Auswählen...** und navigiere mithilfe des Finder-Fensters zu einem lokalen Pfad, in dem du das Repository klonen möchtest.
![Die Schaltfläche „Auswählen“ auf der Registerkarte „URL“](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **Hinweis**: Wenn das Repository für die Verwendung von LFS konfiguriert ist, wirst du aufgefordert, {% data variables.large_files.product_name_short %} zu initialisieren.

  {% endnote %}

5. Klicke auf **Klonen**.
![Die Schaltfläche „Klonen“ auf der Registerkarte „URL“](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. Melde Dich bei {% data variables.product.product_location %} und {% data variables.product.prodname_desktop %} an, bevor Du den Klonvorgang startest.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Klicke auf **Auswählen...** und navigiere mithilfe des Windows-Explorers zu einem lokalen Pfad, in dem du das Repository klonen möchtest.
![Die Schaltfläche „Auswählen“](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **Hinweis**: Wenn das Repository für die Verwendung von LFS konfiguriert ist, wirst du aufgefordert, {% data variables.large_files.product_name_short %} zu initialisieren.

  {% endnote %}

5. Klicke auf **Klonen**.
![Die Schaltfläche „Klonen“](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
