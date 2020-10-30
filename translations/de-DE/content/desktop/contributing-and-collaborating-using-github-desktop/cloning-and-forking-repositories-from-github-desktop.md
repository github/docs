---
title: Repositories von GitHub Desktop klonen und per „Fork“ kopieren
intro: 'Du kannst {% data variables.product.prodname_desktop %} verwenden, um Repositorys von {% data variables.product.prodname_dotcom %} zu klonen und per Fork zu kopieren.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### Repositorys klonen
Repositorys auf {% data variables.product.prodname_dotcom %} existieren als Remote-Repositorys.  Du kannst öffentliche Repositorys klonen, die anderen Personen gehören. Du kannst Dein Repository klonen, um eine lokale Kopie auf Deinem Computer zu erstellen, und die beiden Speicherorte synchronisieren.

Darüber hinaus kannst Du ein Repository direkt über {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} klonen. Weitere Informationen findest Du unter „[Ein Repository von {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_desktop %} klonen](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)“.

{% mac %}

{% data reusables.desktop.choose-clone-repository %}
  ![Menüoption zum Klonen in der Mac-App](/assets/images/help/desktop/clone-file-menu-mac.png)
{% data reusables.desktop.cloning-location-tab %}
  ![Standort-Registerkarten im Menü „Clone a repository“ (Repository klonen)](/assets/images/help/desktop/choose-repository-location-mac.png)
{% data reusables.desktop.cloning-repository-list %}  
![Repository-Liste klonen](/assets/images/help/desktop/clone-a-repository-list-mac.png)
4. Klicke auf **Choose...** (Auswählen), und navigiere mithilfe des Finder-Fensters zu einem lokalen Pfad, wo Du das Repository klonen möchtest. ![Die Schaltfläche „choose“ (Auswählen)](/assets/images/help/desktop/clone-choose-button-mac.png)
5. Klicke auf **Clone** (Klonen). ![Die Schaltfläche „clone“ (Klonen)](/assets/images/help/desktop/clone-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.choose-clone-repository %}
  ![Menüoption zum Klonen in der Windows-App](/assets/images/help/desktop/clone-file-menu-windows.png)
{% data reusables.desktop.cloning-location-tab %}
  ![Standort-Registerkarten im Menü „Clone a repository“ (Repository klonen)](/assets/images/help/desktop/choose-repository-location-win.png)
{% data reusables.desktop.cloning-repository-list %}     
![Repository-Liste klonen](/assets/images/help/desktop/clone-a-repository-list-win.png)
4. Klicke auf **Choose...** (Auswählen), und navigiere mithilfe des Windows-Explorers zu einem lokalen Pfad, wohin Du das Repository klonen möchtest. ![Die Schaltfläche „choose“ (Auswählen)](/assets/images/help/desktop/clone-choose-button-win.png)
5. Klicke auf **Clone** (Klonen). ![Die Schaltfläche „clone“ (Klonen)](/assets/images/help/desktop/clone-button-win.png)

{% endwindows %}

### Repositorys per Fork kopieren
Um zu einem Projekt beizutragen, in dem Du keinen Schreibzugriff hast, kannst Du mit {% data variables.product.prodname_desktop %} das Repository per Fork kopieren. Änderungen an Deinem Fork wirken sich nicht auf das ursprüngliche Repository aus. Du kannst per Commit Änderungen in deinen Fork übernehmen und dann in dem ursprünglichen Repository einen Pull-Request mit deinen vorgeschlagenen Änderungen öffnen. Weitere Informationen findest Du unter „[Informationen zu Forks](/github/collaborating-with-issues-and-pull-requests/about-forks)“.

1. Wenn Du ein Repository geklont hast, in dem Du keinen Schreibzugriff hast, und dann versuchst, Änderungen per Commit zu übertragen, warnt {% data variables.product.prodname_desktop %}: „‚You don't have write access to **REPOSITORY**‘ (Du hast keinen Schreibzugriff auf **REPOSITORY**. ‚Click **create a fork**‘ (Klicke **Fork erstellen**).“ ![Einen Fork-Link erstellen](/assets/images/help/desktop/create-a-fork.png)
3. Klicke „**Fork this repository“ (Dieses Repository per Fork kopieren)**. ![Schaltfläche, um dieses Repo per Fork kopieren](/assets/images/help/desktop/fork-this-repo-button.png)
4. Um Deinen Fork auf {% data variables.product.prodname_dotcom %} zu sehen, klickst Du in der oberen rechten Ecke von {% data variables.product.prodname_dotcom %} auf Dein Profilbild und dann auf „**Your Repositories“ (Deine Repositorys)**. ![Link zu Deinen Repositorys](/assets/images/help/profile/your-repositories.png)
