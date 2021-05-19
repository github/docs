---
title: Pakete anzeigen
intro: 'Du kannst Details zu Paketen sehen, die in einem Repository veröffentlicht wurden, und die Ergebnisse nach Organisation oder Benutzer einschränken.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Pakete eines Repository einsehen

Your ability to view a package depends on several factors. By default, you can view all packages you have published.

{% data reusables.package_registry.repo-scoped-and-granular-permissions-packages %}

{% data reusables.package_registry.package-page-info %}

### Pakete eines Repository einsehen

You can find and view a package located in a particular repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Pakete einer Organisation einsehen

You can find and view a package located in the repositories of an organization you belong to.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Klicke unter Deinem Organisationsnamen auf {% octicon "package" aria-label="The package icon" %} **Packages** (Pakete).
{% data reusables.package_registry.navigate-to-packages %}

### Deine Pakete einsehen

You can find and view any package you've published across all organizations and repositories.

{% data reusables.profile.access_profile %}
2. Klicke oben auf der Profilseite in der Hauptnavigation auf **Packages** (Pakete). ![Registerkarte „Projects“ (Projekte)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Weiterführende Informationen

- "[Suche nach Paketen](/github/searching-for-information-on-github/searching-for-packages)"
