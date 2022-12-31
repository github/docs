---
title: Löschen und Wiederherstellen eines Pakets
intro: Hier erfährst du wie du ein Paket löschen oder wiederherstellen kannst.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
ms.openlocfilehash: 4491e7cd25fbec2a19abb06c552ba0e0d3ac7b24
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147704987'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Unterstützung für das Löschen und Wiederherstellen von Paketen unter {% data variables.product.prodname_dotcom %}

Wenn du über den erforderlichen Zugriff verfügst, kannst du unter {% data variables.product.prodname_dotcom %} Folgendes löschen:
- ein gesamtes privates Paket
- ein gesamtes öffentliches Paket, wenn eine Version des Pakets nicht mehr als 5.000 Downloads aufweist
- eine bestimmte Version eines privaten Pakets
- eine bestimmte Version eines öffentlichen Pakets, wenn die Paketversion nicht mehr als 5.000 Downloads aufweist

{% note %}

**Hinweis:**
- Du kannst ein öffentliches Paket nicht löschen, wenn eine Version des Pakets mehr als 5.000 Downloads aufweist. Wende dich in diesem Szenario an den [Support von GitHub](https://support.github.com/contact?tags=docs-packages), um weitere Unterstützung zu erhalten.
- Beachte beim Löschen öffentlicher Pakete, dass du möglicherweise Projekte unterbrichst, die von deinem Paket abhängen.

{% endnote %}

Unter {% data variables.product.prodname_dotcom %} kannst du auch ein gesamtes Paket oder eine gesamte Paketversion wiederherstellen, wenn Folgendes zutrifft:
- Du stellst das Paket innerhalb von 30 Tagen nach dem Löschen wieder her.
- Derselbe Paketnamespace ist weiterhin verfügbar und wird nicht für ein neues Paket verwendet.

{% ifversion fpt or ghec or ghes %}
## Paket-API-Unterstützung

{% ifversion fpt or ghec %}

Du kannst die REST-API verwenden, um deine Pakete zu verwalten. Weitere Informationen findest du unter [{% data variables.product.prodname_registry %}-API](/rest/reference/packages).

{% endif %}

Bei Paketen, die ihre Berechtigungen und ihren Zugriff von Repositorys erben, kannst du GraphQL verwenden, um eine bestimmte Paketversion zu löschen.{% data reusables.package_registry.no-graphql-to-delete-packages %} Weitere Informationen zur GraphQL-Unterstützung findest du unter [Löschen einer Version eines repositorybezogenen Pakets mit GraphQL](#deleting-a-version-of-a-repository-scoped-package-with-graphql).

{% endif %}

## Erforderliche Berechtigungen zum Löschen oder Wiederherstellen eines Pakets

Bei Paketen, die ihre Zugriffsberechtigungen von Repositorys erben, kannst du ein Paket löschen, wenn du über Administratorberechtigungen für das Repository verfügst.

Die folgenden {% data variables.product.prodname_registry %}-Registrierungen verwenden **nur** repositorybezogene Berechtigungen:

  {% ifversion not fpt or ghec %}- Docker-Images auf `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`{% endif %} {% ifversion packages-npm-v2 %}{% else %}- npm{% endif %}
  - RubyGems-Registrierung
  - Apache Maven-Registrierung
  - NuGet-Registrierung

{% ifversion packages-npm-v2 %}Für {% data variables.product.prodname_ghcr_and_npm_registry %} kannst du auswählen, dass Pakete für einen Benutzer oder eine Organisation zulässig oder mit einem Repository verknüpft sind.{% endif %}

{% ifversion fpt or ghec %}

Um ein Paket zu löschen, das unabhängig von einem Repository über granulare Berechtigungen verfügt, wie z. B. Containerimages, die unter `https://ghcr.io/OWNER/PACKAGE-NAME` oder `https://npm.pkg.github.com/OWNER/PACKAGE-NAME` gespeichert sind, musst du über Administratorrechte für das Paket verfügen. Weitere Informationen findest du unter [Informationen zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages).

{% endif %}

## Löschen einer Paketversion

### Löschen einer Version eines repositorybezogenen Pakets unter {% data variables.product.prodname_dotcom %}

Zum Löschen einer Version eines repositorybezogenen Pakets musst du Administratorberechtigungen für das Repository besitzen, das das Paket besitzt. Weitere Informationen findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. Klicke auf der linken Seite auf **Versionen verwalten**.
5. Klicke rechts neben der zu löschenden Version auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, und wähle **Version löschen** aus.
  ![Schaltfläche „Paketversion löschen“](/assets/images/help/package-registry/delete-container-package-version.png)
6. Gib zum Bestätigen der Löschung den Paketnamen ein, und klicke auf **Ich verstehe die Folgen, diese Version löschen**.
  ![Schaltfläche zum Bestätigen des Löschens von Paketen](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### Löschen einer Version eines repositorybezogenen Pakets mit GraphQL

Bei Paketen, die ihre Berechtigungen und den Zugriff von Repositorys erben, kannst du die GraphQL verwenden, um eine bestimmte Paketversion zu löschen.

{% data reusables.package_registry.no-graphql-to-delete-packages %}{% ifversion fpt or ghec %} Du kannst jedoch die REST-API verwenden. Weitere Informationen findest du unter [{% data variables.product.prodname_registry %}-API](/rest/reference/packages).{% endif %}

Verwende die `deletePackageVersion`-Mutation in der GraphQL-API. Du musst ein Token mit den Bereichen `read:packages`, `delete:packages` und `repo` verwenden. Weitere Informationen zu Token findest du unter [Informationen zu {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages).

Im folgenden Beispiel wird veranschaulicht, wie eine Paketversion mithilfe einer `packageVersionId` von `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg` gelöscht wird.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Zum Finden aller privaten Pakete, die du unter {% data variables.product.prodname_registry %} veröffentlicht hast, zusammen mit den Versions-IDs für die Pakete, kannst du die `packages`-Verbindung über das `repository`-Objekt verwenden. Du benötigst ein Token mit den Bereichen `read:packages` und `repo`. Weitere Informationen findest du in der [`packages`](/graphql/reference/objects#repository)-Verbindung oder der [`PackageOwner`](/graphql/reference/interfaces#packageowner)-Schnittstelle.

Weitere Informationen zur `deletePackageVersion`-Mutation findest du unter [`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion).

Du kannst ein gesamtes Paket nicht direkt mithilfe von GraphQL löschen, aber wenn du jede Version eines Pakets löschst, wird das Paket nicht mehr auf {% data variables.product.product_name %} angezeigt.

{% endif %}

{% ifversion fpt or ghec %}
### Löschen einer Version eines benutzerbezogenen Pakets unter {% data variables.product.prodname_dotcom %}

Wenn du eine bestimmte Version eines benutzerbezogenen Pakets unter {% data variables.product.prodname_dotcom %} löschen möchtest, z. B. für ein Docker-Image unter `ghcr.io`, führe die folgenden Schritte aus. Informationen zum Löschen eines gesamten Pakets findest du unter [Löschen eines gesamten benutzerbezogenen Pakets unter {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github).

Informationen zum Überprüfen, wer eine Paketversion löschen kann, findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. Klicke auf der linken Seite auf **Versionen verwalten**.
5. Klicke rechts neben der zu löschenden Version auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, und wähle **Version löschen** aus.
  ![Schaltfläche „Paketversion löschen“](/assets/images/help/package-registry/delete-container-package-version.png)
6. Gib zum Bestätigen der Löschung den Paketnamen ein, und klicke auf **Ich verstehe die Folgen, diese Version löschen**.
  ![Schaltfläche zum Bestätigen des Löschens von Paketen](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Löschen einer Version eines organisationsbezogenen Pakets unter {% data variables.product.prodname_dotcom %}

Wenn du eine bestimmte Version eines organisationsbezogenen Pakets unter {% data variables.product.prodname_dotcom %} löschen möchtest, z. B. für ein Docker-Image unter `ghcr.io`, führe die folgenden Schritte aus.
Informationen zum Löschen eines gesamten Pakets findest du unter [Löschen eines gesamten organisationsbezogenen Pakets unter {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github).

Informationen zum Überprüfen, wer eine Paketversion löschen kann, findest du unter [Erforderliche Berechtigungen zum Löschen oder Wiederherstellen eines Pakets](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. Klicke auf der linken Seite auf **Versionen verwalten**.
5. Klicke rechts neben der zu löschenden Version auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, und wähle **Version löschen** aus.
  ![Schaltfläche „Paketversion löschen“](/assets/images/help/package-registry/delete-container-package-version.png)
6. Gib zum Bestätigen der Löschung den Paketnamen ein, und klicke auf **Ich verstehe die Folgen, diese Version löschen**.
  ![Schaltfläche zum Bestätigen des Löschens von Paketversionen](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## Löschen eines gesamten Pakets

### Löschen eines gesamten repositorybezogenen Pakets unter {% data variables.product.prodname_dotcom %}

Zum Löschen eines gesamten repositorybezogenen Pakets musst du Administratorberechtigungen für das Repository besitzen, das das Paket besitzt. Weitere Informationen findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. Klicke unter „Gefahrenzone“ auf **Dieses Paket löschen**.
5. Lies zur Bestätigung die entsprechende Meldung, gib deinen Paketnamen ein, und klicke auf **Ich verstehe die Folgen, dieses Paket löschen.**
  ![Schaltfläche zum Bestätigen des Löschens von Paketen](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec %}
### Löschen eines gesamten benutzerbezogenen Pakets unter {% data variables.product.prodname_dotcom %}

Informationen zum Überprüfen, wer ein Paket löschen kann, findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. Klicke auf der linken Seite auf **Optionen**.
  ![Menüoption „Optionen“](/assets/images/help/package-registry/options-for-container-settings.png)
6. Klicke unter „Gefahrenzone“ auf **Dieses Paket löschen**.
  ![Schaltfläche „Paketversion löschen“](/assets/images/help/package-registry/delete-container-package-button.png)
6. Gib zum Bestätigen der Löschung den Paketnamen ein, und klicke auf **Ich verstehe die Folgen, dieses Paket löschen**.
  ![Schaltfläche zum Bestätigen des Löschens von Paketversionen](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Löschen eines gesamten organisationsbezogenen Pakets unter {% data variables.product.prodname_dotcom %}

Informationen zum Überprüfen, wer ein Paket löschen kann, findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. Klicke auf der linken Seite auf **Optionen**.
  ![Menüoption „Optionen“](/assets/images/help/package-registry/options-for-container-settings.png)
6. Klicke unter „Gefahrenzone“ auf **Dieses Paket löschen**.
  ![Schaltfläche „Paket löschen“](/assets/images/help/package-registry/delete-container-package-button.png)
6. Gib zum Bestätigen der Löschung den Paketnamen ein, und klicke auf **Ich verstehe die Folgen, dieses Paket löschen**.
  ![Schaltfläche zum Bestätigen des Löschens von Paketen](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## Wiederherstellen von Paketen

Du kannst ein gelöschtes Paket oder eine Version wiederherstellen, wenn Folgendes zutrifft:
- Du stellst das Paket innerhalb von 30 Tagen nach dem Löschen wieder her.
- Derselbe Paketnamespace und die Version sind weiterhin verfügbar und werden nicht für ein neues Paket verwendet.

Wenn du z. B. ein gelöschtes RubyGems-Paket mit dem Namen `octo-package` hast, das sich auf das Repository `octo-repo-owner/octo-repo` bezog, kannst du das Paket nur wiederherstellen, wenn der Paketnamespace `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` noch verfügbar ist und noch nicht mehr als 30 Tage vergangen sind.

{% ifversion fpt or ghec %} Zum Wiederherstellen eines gelöschten Pakets musst du auch eine der folgenden Berechtigungsanforderungen erfüllen:
  - Für repositorybezogene Pakete: Du verfügst über Administratorberechtigungen für das Repository, in dem sich das gelöschte Paket befindet.{% ifversion fpt or ghec %}
  - Für benutzerkontobezogene Pakete: Das gelöschte Paket befindet sich in deinem persönlichen Konto.
  - Für organisationsbezogene Pakete: Du verfügst über Administratorberechtigungen für das gelöschte Paket in der Organisation, die das Paket besitzt.{% endif %} {% endif %}

{% ifversion ghae or ghes %} Zum Löschen eines Pakets musst du auch über Administratorberechtigungen für das Repository verfügen, das das gelöschte Paket besitzt.
{% endif %}

Weitere Informationen findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

Sobald das Paket wiederhergestellt wurde, verwendet das Paket denselben Namespace, den es zuvor verwendet hat. Wenn derselbe Paketnamespace nicht verfügbar ist, kannst du dein Paket nicht wiederherstellen. In diesem Szenario musst du zum Wiederherstellen des gelöschten Pakets zuerst das neue Paket löschen, das den Namespace des gelöschten Pakets verwendet.

### Wiederherstellen eines Pakets in einer Organisation

 Du kannst ein gelöschtes Paket über deine Organisationskontoeinstellungen wiederherstellen, solange sich das Paket in einem Repository befand, das der Organisation gehörte,{% ifversion fpt or ghec %} oder granulare Berechtigungen hatte und sich auf dein Organisationskonto bezog{% endif %}.

Informationen zum Überprüfen, wer ein Paket in einer Organisation wiederherstellen kann, findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. Klicke auf der linken Seite auf **Pakete**.
4. Klicke unter „Gelöschte Pakete“ neben dem Paket, das du wiederherstellen möchtest, auf **Wiederherstellen**.
  ![Schaltfläche „Wiederherstellen“](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Gib zum Bestätigen den Paketnamen ein, und klicke auf **Ich verstehe die Folgen, dieses Paket wiederherstellen**.
  ![Schaltfläche zum Bestätigen der Paketwiederherstellung](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### Wiederherstellen eines benutzerkontobezogenen Pakets

Du kannst ein gelöschtes Paket über die Einstellungen deines persönlichen Kontos wiederherstellen, wenn sich das Paket in einem deiner Repositorys befand oder auf dein persönliches Konto bezogen war. Weitere Informationen findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

{% data reusables.user-settings.access_settings %}
2. Klicke auf der linken Seite auf **Pakete**.
4. Klicke unter „Gelöschte Pakete“ neben dem Paket, das du wiederherstellen möchtest, auf **Wiederherstellen**.
  ![Schaltfläche „Wiederherstellen“](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. Gib zum Bestätigen den Paketnamen ein, und klicke auf **Ich verstehe die Folgen, dieses Paket wiederherstellen**.
  ![Schaltfläche zum Bestätigen der Paketwiederherstellung](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### Wiederherstellen einer Paketversion

Du kannst eine Paketversion von der Startseite deines Pakets wiederherstellen. Informationen zum Überprüfen, wer ein Paket wiederherstellen kann, findest du unter [Erforderliche Berechtigungen](#required-permissions-to-delete-or-restore-a-package).

1. Navigiere zur Startseite deines Pakets.
2. Klicke auf der rechten Seite auf **Paketeinstellungen**.
2. Klicke auf der linken Seite auf **Versionen verwalten**.
3. Verwende oben rechts das Dropdownmenü „Versionen“, und wähle **Gelöscht** aus.
  ![Dropdownmenü „Versionen“ mit der Option „Gelöscht“](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. Klicke neben der gelöschten Paketversion, die du wiederherstellen möchtest, auf **Wiederherstellen**.
  ![Option „Wiederherstellen“ neben einer gelöschten Paketversion](/assets/images/help/package-registry/restore-package-version.png)
5. Klicke zur Bestätigung auf **Ich verstehe die Folgen, diese Version wiederherstellen.**
  ![Bestätigen der Wiederherstellung der Paketversion](/assets/images/help/package-registry/confirm-package-version-restoration.png)
