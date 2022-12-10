---
title: Schnellstartanleitung für GitHub Packages
intro: 'Veröffentlichen auf {% data variables.product.prodname_registry %} mit {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: 887c4ee6c5e6b3e2c391c2d5754cfcb2787e4b86
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181255'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Leitfaden erstellst du einen {% data variables.product.prodname_actions %}-Workflow, um deinen Code zu testen und dann in {% data variables.product.prodname_registry %} zu veröffentlichen.

## Veröffentlichen deines Pakets

1. Erstelle ein neues Repository für {% data variables.product.prodname_dotcom %}, indem du `.gitignore` für Node hinzufügst. Weitere Informationen findest du unter [Erstellen eines neuen Repositorys](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository).
2. Klonen Sie das Repository auf Ihren lokalen Computer.
    ```shell
    $ git clone https://{% ifversion ghes or ghae %}YOUR-HOSTNAME{% else %}github.com{% endif %}/YOUR-USERNAME/YOUR-REPOSITORY.git
    $ cd YOUR-REPOSITORY
    ```
3. Erstelle eine `index.js` Datei, und füge eine einfache Benachrichtigung hinzu, um „Hallo Welt!“ zu sagen.
    {% raw %}
    ```javascript{:copy}
    console.log("Hello, World!");
    ```
    {% endraw %}
4. Initialisiere ein npm-Paket mit `npm init`. Gib dein Paket im Paketinitialisierungs-Assistenten mit dem Namen _`@YOUR-USERNAME/YOUR-REPOSITORY`_ ein, und lege das Testskript auf `exit 0` fest. Dadurch wird eine `package.json`-Datei mit Informationen zu deinem Paket generiert.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: @YOUR-USERNAME/YOUR-REPOSITORY
      ...
      test command: exit 0
      ...    
    ```
    {% endraw %}
5. Führe `npm install` aus, um die `package-lock.json`-Datei zu generieren. Committe deine Änderungen und pushe sie dann in {% data variables.product.prodname_dotcom %}.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. Erstelle das Verzeichnis `.github/workflows`. Erstelle in diesem Verzeichnis eine Datei namens `release-package.yml`.
7. Kopiere den folgenden YAML-Inhalt in die `release-package.yml`-Datei{% ifversion ghes or ghae %}, wobei du `YOUR-HOSTNAME` durch den Namen deines Unternehmens{% endif %} ersetzt.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 16
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          packages: write
          contents: read
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 16
              registry-url: {% ifversion ghes or ghae %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. Teile NPM mit, in welchem Bereich und welcher Registrierung Pakete mit einer der folgenden Methoden veröffentlicht werden sollen:
   - Füge eine NPM-Konfigurationsdatei für das Repository hinzu, indem du eine `.npmrc`-Datei im Stammverzeichnis mit folgendem Inhalt erstellst: {% raw %}
      ```shell
      @YOUR-USERNAME:registry=https://npm.pkg.github.com
      ```
      {% endraw %}
   - Bearbeite die `package.json`-Datei, und gib den `publishConfig`-Schlüssel an: {% raw %}
      ```shell
      "publishConfig": {
        "@<em>YOUR-USERNAME</em>:registry": "https://npm.pkg.github.com"
      }
      ```
      {% endraw %}
9. Committe deine Änderungen und pushe sie in {% data variables.product.prodname_dotcom %}.
    ```shell
    $ git add .github/workflows/release-package.yml
    # Also add the file you created or edited in the previous step.
    $ git add .npmrc or package.json
    $ git commit -m "workflow to publish package"
    $ git push
    ```
10.  Der von dir erstellte Workflow wird ausgeführt, wenn ein neues Release im Repository erstellt wird. Wenn die Tests bestanden werden, wird das Paket in {% data variables.product.prodname_registry %}veröffentlicht.
    
    Um dies zu testen, navigiere zur Registerkarte **Code** in deinem Repository, und erstelle ein neues Release. Weitere Informationen findest du unter „[Verwalten von Releases in einem Repository](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)“.

## Anzeigen eines veröffentlichten Pakets

Du kannst alle Pakete anzeigen, die du veröffentlicht hast.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Installieren eines veröffentlichten Pakets

Nachdem du das Paket veröffentlicht hast, solltest du es als projektübergreifende Abhängigkeit verwenden. Weitere Informationen findest du unter „[Arbeiten mit der npm-Registrierung](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)“.

## Nächste Schritte

Der Basisworkflow, den du gerade hinzugefügt hast, wird jedes Mal ausgeführt, wenn ein neues Release in deinem Repository erstellt wird. Dies ist jedoch längst nicht alles, was du mit {% data variables.product.prodname_registry %} tun kannst. Du kannst dein Paket mit einem einzelnen Workflow in mehreren Registrierungen veröffentlichen, den Workflow auslösen, um ihn bei verschiedenen Ereignissen wie einer zusammengeführten Pullanforderung auszuführen, Container verwalten usw.

Durch Kombination von {% data variables.product.prodname_registry %} und {% data variables.product.prodname_actions %} kannst du nahezu jeden Aspekt deiner Anwendungsentwicklungsprozesse automatisieren. Wollen Sie loslegen? Hier sind einige hilfreiche Ressourcen zum Ausführen der nächsten Schritte mit {% data variables.product.prodname_registry %} und {% data variables.product.prodname_actions %}:

- „[Informationen zu {% data variables.product.prodname_registry %}](/packages/learn-github-packages)“ – ausführliches Tutorial zu GitHub Packages
- „[Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions)“ – ausführliches Tutorial zu GitHub Actions
- „[Arbeiten mit einer {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)“ – spezifische Anwendungsfälle und Beispiele
