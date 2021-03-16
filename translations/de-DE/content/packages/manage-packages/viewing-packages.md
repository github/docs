---
title: Pakete anzeigen
intro: 'Du kannst Details zu Paketen sehen, die in einem Repository veröffentlicht wurden, und die Ergebnisse nach Organisation oder Benutzer einschränken.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
permissions: Alle Personen mit Leseberechtigung in einem Repository können die Pakete des Repository einsehen.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Pakete eines Repository einsehen

Pakete müssen auf der Repository-Ebene installiert werden, aber Du kannst alle Pakete in einer Organisation einsehen sowie alle Pakete, die Du veröffentlicht hast. {% data reusables.package_registry.package-page-info %}

### Pakete eines Repository einsehen

Du kannst alle Pakete in einem Repository sehen und nach einem bestimmten Paket im Repository suchen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Pakete einer Organisation einsehen

Du kannst alle Pakete einsehen, die in einer Organisation installiert sind, und nach einem bestimmten Paket suchen, das in den Repositorys einer Organisation installiert ist.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Klicken Sie unter dem Namen Ihrer Organisation auf
{% octicon "package" aria-label="The package icon" %} **Packages**.
{% data reusables.package_registry.navigate-to-packages %}

### Deine Pakete einsehen

Du kannst alle Pakete einsehen, die Du installiert hast, und in allen Organisationen und Repositorys nach einem bestimmten Paket suchen, das Du installiert hast.

{% data reusables.profile.access_profile %}
2. Klicke oben auf der Profilseite in der Hauptnavigation auf **Packages** (Pakete). ![Registerkarte „Projects“ (Projekte)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Weiterführende Informationen

- "[Suche nach Paketen](/github/searching-for-information-on-github/searching-for-packages)"
