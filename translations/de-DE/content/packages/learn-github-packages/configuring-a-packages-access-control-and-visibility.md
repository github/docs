---
title: Konfigurieren der Zugriffssteuerung und Sichtbarkeit von Paketen
intro: 'Wähle aus, wer Lese-, Schreib- oder Administratorzugriff auf dein Containerimage hat und welche Sichtbarkeit deine Containerimages auf {% data variables.product.prodname_dotcom %} aufweisen sollen.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Access control & visibility
ms.openlocfilehash: 0988c332a341d379e21e540b74f7ee4dd5a26749
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147704915'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

Für Pakete mit differenzierten Berechtigungen wird ein persönliches Benutzerkonto oder ein Organisationskonto als Gültigkeitsbereich festgelegt. Du kannst die Zugriffssteuerung und Sichtbarkeit eines Pakets getrennt vom Repository ändern, mit dem es verbunden (oder verknüpft) ist.

Derzeit kannst du präzise Berechtigungen nur mit der {% data variables.product.prodname_ghcr_and_npm_registry %} verwenden. Differenzierte Berechtigungen werden in unseren weiteren Paketregistrierungen, wie z. B. der RubyGems-Registrierung, nicht unterstützt.{% ifversion docker-ghcr-enterprise-migration %} Weitere Informationen zur Migration zur {% data variables.product.prodname_container_registry %} findest du unter [Migration zur {% data variables.product.prodname_container_registry %} von der Docker-Registry](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry).{% endif %}

Weitere Informationen zu Berechtigungen für repositorybezogene Pakete, zu paketbezogenen Bereichen für PATs oder zur Verwaltung von Berechtigungen für deine Aktionsworkflows findest du unter [About permissions for GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages) („Informationen zu Berechtigungen für GitHub Packages“).

## Sichtbarkeit und Zugriffsberechtigungen für Containerimages

{% data reusables.package_registry.visibility-and-access-permissions %}

## Konfigurieren des Zugriffs auf Containerimages für dein persönliches Konto

Wenn du über Administratorberechtigungen für ein Containerimage im Besitz eines persönlichen Kontos verfügst, kannst du anderen Benutzern Lese-, Schreib- oder Administratorrollen zuweisen. Weitere Informationen zu diesen Berechtigungsrollen findest du unter [Visibility and access permissions for container images](#visibility-and-access-permissions-for-container-images) („Sichtbarkeit und Zugriffsberechtigungen für Containerimages“).

Wenn dein Paket privat oder intern und im Besitz einer Organisation ist, kannst du den Zugriff nur anderen Mitgliedern oder Teams der Organisation gewähren.

{% data reusables.package_registry.package-settings-option %}
1. Klicke auf der Seite mit den Paketeinstellungen auf **Teams oder Personen einladen**, und gib den Namen, den Benutzernamen oder die E-Mail-Adresse der Person ein, der du Zugriff gewähren möchtest. Teams kann kein Zugriff auf ein Containerimage im Besitz eines persönlichen Kontos gewährt werden.
  ![Einladungsschaltfläche für den Containerzugriff](/assets/images/help/package-registry/container-access-invite.png)
1. Verwende neben dem Benutzer- oder Teamnamen das Dropdownmenü „Rolle“, um die gewünschte Berechtigungsstufe auszuwählen.
  ![Optionen für den Containerzugriff](/assets/images/help/package-registry/container-access-control-options.png)

Die ausgewählten Benutzer*innen erhalten automatisch Zugriff und müssen nicht zuerst eine Einladung annehmen.

## Konfigurieren des Zugriffs auf Containerimages für eine Organisation

Wenn du über Administratorberechtigungen für ein Containerimage verfügst, das sich im Besitz einer Organisation befindet, kannst du anderen Benutzer*innen und Teams Lese-, Schreib- oder Administratorrollen zuweisen. Weitere Informationen zu diesen Berechtigungsrollen findest du unter [Visibility and access permissions for container images](#visibility-and-access-permissions-for-container-images) („Sichtbarkeit und Zugriffsberechtigungen für Containerimages“).

Wenn dein Paket privat oder intern und im Besitz einer Organisation ist, kannst du den Zugriff nur anderen Mitgliedern oder Teams der Organisation gewähren.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. Klicke auf der Seite mit den Paketeinstellungen auf **Teams oder Personen einladen**, und gib den Namen, den Benutzernamen oder die E-Mail-Adresse der Person ein, der du Zugriff gewähren möchtest. Du kannst auch einen Teamnamen aus der Organisation eingeben, um allen Teammitgliedern Zugriff zu gewähren.
  ![Einladungsschaltfläche für den Containerzugriff](/assets/images/help/package-registry/container-access-invite.png)
1. Verwende neben dem Benutzer- oder Teamnamen das Dropdownmenü „Rolle“, um die gewünschte Berechtigungsstufe auszuwählen.
  ![Optionen für den Containerzugriff](/assets/images/help/package-registry/container-access-control-options.png)

Die ausgewählten Benutzer*innen oder Teams erhalten automatisch Zugriff und müssen nicht zuerst eine Einladung annehmen.

## Erben des Zugriffs auf ein Containerimage aus einem Repository

Zur Vereinfachung der Paketverwaltung mithilfe von {% data variables.product.prodname_actions %}-Workflows kannst du festlegen, dass ein Containerimage standardmäßig die Zugriffsberechtigungen eines Repositorys erbt.

Wenn du die Zugriffsberechtigungen des Repositorys erbst, in dem die Workflows deines Pakets gespeichert sind, kannst du den Zugriff auf dein Paket über die Berechtigungen des Repositorys anpassen.

Nachdem ein Repository synchronisiert wurde, kannst du nicht mehr auf die differenzierten Zugriffseinstellungen des Pakets zugreifen. Wenn du die Paketberechtigungen über die differenzierten Paketzugriffseinstellungen anpassen möchtest, musst du zuerst das synchronisierte Repository entfernen.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
2. Wähle unter „Repositoryquelle“ die Option **Inherit access from repository (recommended)**(„Zugriff vom Repository erben (empfohlen)“) aus.
  ![Kontrollkästchen zum Erben der Zugriffsberechtigungen vom Repository](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

## Sicherstellen des Workflowzugriffs auf dein Paket

Wenn du sicherstellen möchtest, dass ein {% data variables.product.prodname_actions %}-Workflow auf dein Paket zugreifen kann, musst du dem Repository, in dem der Workflow gespeichert ist, expliziten Zugriff gewähren.

Das angegebene Repository muss nicht das Repository sein, in dem sich der Quellcode für das Paket befindet. Du kannst mehreren Repositorys Workflowzugriff auf ein Paket erteilen.

{% note %}

**Hinweis:** Der Vorgang zum Synchronisieren deines Containerimages mit einem Repository über das Menü für den **Actions-Zugriff** unterscheidet sich von dem Vorgang, bei dem dein Container mit einem Repository verbunden wird. Weitere Informationen zum Verknüpfen eines Repositorys mit deinem Container findest du unter [Connecting a repository to a package](/packages/learn-github-packages/connecting-a-repository-to-a-package) („Verbinden eines Repositorys mit einem Paket“).

{% endnote %}

### {% data variables.product.prodname_actions %}-Zugriff für Containerimages, die sich im Besitz eines Benutzerkontos befinden 

{% data reusables.package_registry.package-settings-option %}
1. Klicke auf der linken Randleiste auf **Actions-Zugriff**.
  ![Die Option „Actions-Zugriff“ im Menü auf der linken Seite](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Wenn du sicherstellen möchtest, dass dein Workflow Zugriff auf dein Containerpaket hat, musst du das Repository dort hinzufügen, wo der Workflow gespeichert ist. Klicke auf **Repository hinzufügen**, und suche nach dem Repository, das hinzugefügt werden soll.
   ![Schaltfläche „Repository hinzufügen“](/assets/images/help/package-registry/add-repository-button.png)
3. Wähle über das Dropdownmenü „Rolle“ die Standardzugriffsebene aus, die du dem Repository für dein Containerimage zuweisen möchtest.
  ![Berechtigungszugriffsstufen für Repositorys](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Wenn du zusätzliche Anpassungen am Zugriff auf dein Containerimage vornehmen möchtest, findest du unter [Configuring access to container images for your personal account](#configuring-access-to-container-images-for-your-personal-account) („Konfigurieren des Zugriffs auf Containerimages für dein persönliches Konto“) weitere Informationen.

### {% data variables.product.prodname_actions %}-Zugriff für Containerimages, die sich im Besitz einer Organisation befinden 

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. Klicke auf der linken Randleiste auf **Actions-Zugriff**.
  ![Die Option „Actions-Zugriff“ im Menü auf der linken Seite](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Klicke auf **Repository hinzufügen**, und suche nach dem Repository, das hinzugefügt werden soll.
   ![Schaltfläche „Repository hinzufügen“](/assets/images/help/package-registry/add-repository-button.png)
3. Wähle über das Dropdownmenü „Rolle“ die Standardzugriffsebene aus, die du Repositorymitgliedern für dein Containerimage zuweisen möchtest. Externe Projektmitarbeiter werden nicht einbezogen.
  ![Berechtigungszugriffsstufen für Repositorys](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Wenn du zusätzliche Anpassungen am Zugriff auf dein Containerimage vornehmen möchtest, findest du unter [Configuring access to container images for an organization](#configuring-access-to-container-images-for-an-organization) („Konfigurieren des Zugriffs auf Containerimages für eine Organisation“) weitere Informationen.

{% ifversion fpt or ghec %}
## Sicherstellen des {% data variables.product.prodname_codespaces %}-Zugriffs auf dein Paket

Standardmäßig kann ein Codespace nahtlos auf bestimmte Pakete in der {% data variables.product.prodname_ghcr_and_npm_registry %} zugreifen, z. B. auf solche, die im selben Repository veröffentlicht wurden, wenn die Option **Zugriff erben** ausgewählt ist. Weitere Informationen darüber, welcher Zugriff automatisch konfiguriert wird, findest du unter [Zulassen, dass dein Codespace auf eine private Imageregistrierung zugreifen kann](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry#accessing-images-stored-in-container-registry-and-npm-registry).

Anderenfalls musst du Zugriff auf das Repository gewähren, in dem der Codespace gestartet wird, um sicherzustellen, dass ein Codespace Zugriff auf dein Paket hat.

Das angegebene Repository muss nicht das Repository sein, in dem sich der Quellcode für das Paket befindet. Du kannst Codespaces in mehreren Repositorys Zugriff auf ein Paket gewähren.

Nachdem du das Paket ausgewählt hast, das für Codespaces in einem Repository freigegeben werden soll, kannst du diesem Repository Zugriff gewähren.

1. Klicke auf der rechten Randleiste auf **Paketeinstellungen**.

   ![Die Option „Paketeinstellungen“ im Menü auf der rechten Seite](/assets/images/help/package-registry/package-settings.png)
   
2. Klicke unter „Codespaces-Zugriff verwalten“ auf **Repository hinzufügen**.

   ![Schaltfläche „Repository hinzufügen“](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

3. Suche nach dem Repository, das du hinzufügen möchtest.

   ![Schaltfläche „Repository hinzufügen“](/assets/images/help/package-registry/manage-codespaces-access-search.png)
   
4. Wiederhole diese Schritte für alle weiteren Repositorys, denen du Zugriff gewähren möchtest.

5. Wenn die Codespaces für ein Repository keinen Zugriff mehr auf ein Image benötigen, kannst du den Zugriff entfernen.

   ![Schaltfläche „Repository entfernen“](/assets/images/help/package-registry/manage-codespaces-access-item.png)

{% endif %}
## Konfigurieren der Sichtbarkeit von Containerimages für dein persönliches Konto

Bei der erstmaligen Veröffentlichung eines Pakets ist die Standardsichtbarkeit auf privat festgelegt, und das Paket ist nur für dich sichtbar. Du kannst den Zugriff eines privaten oder öffentlichen Containerimages ändern, indem du die Zugriffseinstellungen anpasst.

Auf ein öffentliches Paket kann anonym ohne Authentifizierung zugegriffen werden. Sobald du ein Paket als öffentlich festlegst, kann es nicht in ein privates Paket zurückgeändert werden.

{% data reusables.package_registry.package-settings-option %}
5. Wähle unter „Gefahrenzone“ eine Einstellung für die Sichtbarkeit aus:
    - Klicke auf **Als öffentlich festlegen**, wenn das Containerimage für sämtliche Benutzer*innen sichtbar sein soll.
    {% warning %}

    **Warnung:** Sobald du ein Paket als öffentlich festlegst, kann es nicht in ein privates Paket zurückgeändert werden.

    {% endwarning %}
    - Wenn du das Containerimage für eine benutzerdefinierte Auswahl von Personen sichtbar machen möchtest, klicke auf **Als privat festlegen**.
  ![Optionen für die Containersichtbarkeit](/assets/images/help/package-registry/container-visibility-option.png)

## Sichtbarkeit der Containererstellung für Organisationsmitglieder

Du kannst die Sichtbarkeit von Containern auswählen, die Organisationsmitglieder standardmäßig veröffentlichen können.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Klicke links auf **Pakete**.
6. Wähle unter „Containererstellung“ aus, ob das Erstellen von öffentlichen, privaten oder internen Containerimages möglich sein soll.
    - Wenn Organisationsmitglieder öffentliche Containerimages erstellen können sollen, klicke auf **Öffentlich**.
    - Wenn Organisationsmitglieder private Containerimages erstellen können sollen, die ausschließlich für andere Organisationsmitglieder sichtbar sind, klicke auf **Privat**. Du kannst die Sichtbarkeit privater Containerimages zusätzlich anpassen.
    - Wenn Organisationsmitglieder interne Containerimages erstellen können sollen, die für alle Organisationsmitglieder sichtbar sind, klicke auf **Intern**. Gehört die Organisation zu einem Unternehmen, sind die Containerimages für alle Unternehmensmitglieder sichtbar.
    ![Sichtbarkeitsoptionen für Containerimages, die von Organisationsmitgliedern veröffentlicht wurden](/assets/images/help/package-registry/container-creation-org-settings.png)

## Konfigurieren der Sichtbarkeit von Containerimages für eine Organisation

Bei der erstmaligen Veröffentlichung eines Pakets ist die Standardsichtbarkeit auf privat festgelegt, und das Paket ist nur für dich sichtbar. Du kannst Benutzer*innen oder Teams über die Zugriffseinstellungen unterschiedliche Zugriffsrollen für dein Containerimage zuweisen.

Auf ein öffentliches Paket kann anonym ohne Authentifizierung zugegriffen werden. Sobald du ein Paket als öffentlich festlegst, kann es nicht in ein privates Paket zurückgeändert werden.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. Wähle unter „Gefahrenzone“ eine Einstellung für die Sichtbarkeit aus:
    - Klicke auf **Als öffentlich festlegen**, wenn das Containerimage für sämtliche Benutzer*innen sichtbar sein soll.
    {% warning %}

    **Warnung:** Sobald du ein Paket als öffentlich festlegst, kann es nicht in ein privates Paket zurückgeändert werden.

    {% endwarning %}
    - Wenn du das Containerimage für eine benutzerdefinierte Auswahl von Personen sichtbar machen möchtest, klicke auf **Als privat festlegen**.
  ![Optionen für die Containersichtbarkeit](/assets/images/help/package-registry/container-visibility-option.png)
