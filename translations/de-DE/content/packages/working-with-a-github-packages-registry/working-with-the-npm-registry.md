---
title: Arbeiten mit der npm-Registrierung
intro: 'Du kannst npm für die Veröffentlichung von Paketen auf {% data variables.product.prodname_registry %} und für die Nutzung von auf {% data variables.product.prodname_registry %} gespeicherten Paketen als Abhängigkeiten in einem NPM-Projekt konfigurieren.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: npm registry
ms.openlocfilehash: 608841099aff8fd75a9a342444060fa9e8c860ce
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164490'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %} {% else %}
## Limits für veröffentlichte npm-Versionen

Wenn du mehr als 1.000 npm-Paketversionen auf {% data variables.product.prodname_registry %} veröffentlichst, treten dabei möglicherweise Leistungsprobleme und Timeouts auf.

Um die Leistung des Diensts zu verbessern, kannst du zukünftig nicht mehr als 1.000 Versionen eines Pakets auf {% data variables.product.prodname_dotcom %} veröffentlichen. Alle Versionen, die vor Erreichen dieses Limits veröffentlicht wurden, sind weiterhin lesbar.

Wenn du dieses Limit erreichst, kannst du Paketversionen löschen oder dich an den Support wenden. Wenn dieses Limit erzwungen wird, wird unserer Dokumentation eine Methode hinzugefügt, mit der diese Begrenzung umgangen werden kann. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package) oder [Support kontaktieren](/packages/learn-github-packages/about-github-packages#contacting-support).
{% endif %}

## Bei {% data variables.product.prodname_registry %} authentifizieren

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %} {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

Du kannst außerdem auswählen, ob du den Paketen unabhängig voneinander Zugriffsrechte für {% data variables.product.prodname_codespaces %} und {% data variables.product.prodname_actions %} erteilen möchtest. Weitere Informationen findest du unter [Sicherstellen des Codespaces-Zugriffs auf dein Paket](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) und [Sicherstellen des Workflowzugriffs auf dein Paket](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).
{% endif %}

### Authentifizieren mit einem {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Du kannst dich bei {% data variables.product.prodname_registry %} mit npm authentifizieren, indem du entweder die benutzerspezifische Datei *~/.npmrc* so bearbeitest, dass dein {% data variables.product.pat_v1 %} enthalten ist, oder indem du dich über die Befehlszeile mit deinem Benutzernamen und deinem {% data variables.product.pat_generic %} bei npm anmeldest.

Wenn du dich authentifizieren möchtest, indem du dein {% data variables.product.pat_v1 %} zu deiner *~/.npmrc*-Datei hinzufügst, bearbeite die *~/.npmrc*-Datei für dein Projekt so, dass sie die folgende Zeile enthält. Ersetze dabei {% ifversion ghes or ghae %}*HOSTNAME* durch den Hostnamen von {% data variables.location.product_location %} und {% endif %}*TOKEN* durch dein {% data variables.product.pat_generic %}. Erstelle eine neue Datei *~/.npmrc*, wenn keine solche Datei vorhanden ist.

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```
{% endif %}

Wenn du dich bei der Anmeldung bei npm authentifizieren möchtest, verwende den Befehl `npm login`, ersetze *USERNAME* durch deinen {% data variables.product.prodname_dotcom %}-Benutzernamen, *TOKEN* durch dein {% data variables.product.pat_v1 %} und *PUBLIC-EMAIL-ADDRESS* durch deine E-Mail-Adresse.

Wenn {% data variables.product.prodname_registry %} nicht deine Standardpaketregistrierung für die Verwendung von npm ist und du den Befehl `npm audit` verwenden möchtest, wird empfohlen, das `--scope`-Flag mit dem Besitzer des Pakets zu verwenden, wenn du dich bei {% data variables.product.prodname_registry %} authentifizierst.

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}

```shell
$ npm login --scope=@OWNER --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:

```shell
$ npm login --scope=@OWNER --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
{% endif %}

## Veröffentlichen eines Pakets

{% note %}

**Hinweis:** Für Paketnamen und Bereiche dürfen nur Kleinbuchstaben verwendet werden.

{% endnote %}

{% ifversion packages-npm-v2 %} Die {% data variables.product.prodname_registry %}-Registrierung speichert npm-Pakete in deiner Organisation oder deinem persönlichen Konto und ermöglicht es dir, ein Paket einem Repository zuzuordnen. Du kannst wählen, ob Berechtigungen von einem Repository geerbt oder präzise Berechtigungen unabhängig von einem Repository festgelegt werden sollen.
{% endif %}

{% data variables.product.prodname_registry %} veröffentlicht standardmäßig ein Paket in dem {% data variables.product.prodname_dotcom %}-Repository, das du im Namensfeld der Datei *package.json* angegeben hast. Beispielsweise würdest du ein Paket namens `@my-org/test` im {% data variables.product.prodname_dotcom %}-Repository `my-org/test` veröffentlichen. Wenn du [npm v8.5.3](https://github.com/npm/cli/releases/tag/v8.5.3) oder höher verwendest, kannst du eine Zusammenfassung für die Paketauflistungsseite hinzufügen, indem du eine *README.md*-Datei in dein Paketverzeichnis einfügst. Weitere Informationen findest du unter [Arbeiten mit package.json](https://docs.npmjs.com/getting-started/using-a-package.json) und [Erstellen von Node.js-Modulen](https://docs.npmjs.com/getting-started/creating-node-modules) in der Dokumentation zu npm.

Du kannst mehrere Pakete in demselben {% data variables.product.prodname_dotcom %}-Repository veröffentlichen, indem du ein `URL`-Feld in der Datei *package.json* einschließt. Weitere Informationen findest du unter [Veröffentlichen mehrerer Pakete im selben Repository](#publishing-multiple-packages-to-the-same-repository).

{% ifversion fpt or ghec %} Wenn ein Paket veröffentlicht wird, wird es nicht automatisch mit einem Repository verknüpft. Du kannst jedoch auswählen, ob du dein veröffentlichtes Paket über die Benutzeroberfläche oder die Befehlszeile einem Repository zuordnen möchtest. Weitere Informationen findest du unter [Verbinden eines Repositorys mit einem Paket](/packages/learn-github-packages/connecting-a-repository-to-a-package).
{% endif %}

Du kannst die Bereichszuordnung für dein Projekt entweder mithilfe einer lokalen *.npmrc*-Datei im Projekt oder mithilfe der `publishConfig`-Option in der Datei *package.json* einrichten. {% data variables.product.prodname_registry %} unterstützt nur bereichsbezogene npm-Pakete. Die Namen bereichsbezogener Pakete weisen das Format `@owner/name` auf. Bereichsbezogene Pakete beginnen immer mit dem Symbol `@`. Möglicherweise musst du den Namen in der Datei *package.json* aktualisieren, um den bereichsbezogenen Namen zu verwenden. Beispiel: `"name": "@codertocat/hello-world-npm"`.

{% ifversion packages-npm-v2 %} Wenn du ein Paket zum ersten Mal veröffentlichst, wird die Sichtbarkeit standardmäßig als privat festgelegt. Wenn ein Paket mit einem Repository verknüpft ist, richtet sich die Sichtbarkeit des Pakets nach der Sichtbarkeit des Repositorys. Um die Sichtbarkeit zu ändern oder Zugriffsberechtigungen festzulegen, solltest du den Artikel [Konfigurieren der Zugriffssteuerung und Sichtbarkeit eines Pakets](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).
{% endif %}

{% data reusables.package_registry.viewing-packages %}

### Veröffentlichen eines Pakets mit einer lokalen *.npmrc*-Datei

Du kannst eine *.npmrc*-Datei verwenden, um die Bereichszuordnung für dein Projekt zu konfigurieren. Verwende in der Datei *.npmrc* die {% data variables.product.prodname_registry %}-URL und den Kontobesitzer, damit {% data variables.product.prodname_registry %} weiß, wohin Paketanforderungen weitergeleitet werden sollen. Durch die Verwendung einer *.npmrc*-Datei wird verhindert, dass andere Entwickler*innen das Paket versehentlich auf npmjs.org anstatt auf {% data variables.product.prodname_registry %} veröffentlichen.

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Überprüfe den Namen deines Pakets in der Datei *package.json* deines Projekts. Das Feld `name` muss den Bereich und den Namen des Pakets enthalten. Wenn dein Paket beispielsweise den Namen „test“ trägt und du es in der {% data variables.product.prodname_dotcom %}-Organisation „My-org“ veröffentlichen möchtest, muss das Feld `name` in der Datei *package.json* `@my-org/test` lauten.
{% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

### Veröffentlichen eines Pakets mithilfe von `publishConfig` in der Datei *package.json*

Du kannst das `publishConfig`-Element in der Datei *package.json* verwenden, um die Registrierung anzugeben, in der das Paket veröffentlicht werden soll. Weitere Informationen findest du unter [publishConfig](https://docs.npmjs.com/files/package.json#publishconfig) in der npm-Dokumentation.

1. Bearbeite die Datei *package.json* für dein Paket, und füge einen `publishConfig`-Eintrag ein.
  {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}
  ```shell
  "publishConfig": {
    "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}"
  },
  ```
  {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:
   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
  ```
  {% endif %} {% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

## Veröffentlichen mehrerer Pakete im gleichen Repository

Wenn du mehrere Pakete im selben Repository veröffentlichen möchtest, kannst du die URL des {% data variables.product.prodname_dotcom %}-Repositorys im Feld `repository` der Datei *package.json* einfügen.

Wenn du sicherstellen möchtest, dass die URL des Repositorys korrekt ist, ersetze „REPOSITORY“ durch den Namen des Repositorys, das das zu veröffentlichende Paket enthält, und „OWNER“ durch den Namen des Benutzer- oder Organisationskontos auf {% data variables.product.prodname_dotcom %}, in dessen Besitz sich das Repository befindet.

{% data variables.product.prodname_registry %} passt das Repository anhand der URL anstelle des Paketnamens an.

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## Installieren eines Pakets

Du kannst Pakete aus {% data variables.product.prodname_registry %} installieren, indem du die Pakete als Abhängigkeiten in der Datei *package.json* für dein Projekt hinzufügst. Weitere Informationen zur Verwendung einer *package.json*-Datei in deinem Projekt findest du unter [Arbeiten mit package.json](https://docs.npmjs.com/getting-started/using-a-package.json) in der Dokumentation zu npm.

Du kannst Pakete standardmäßig aus einer Organisation hinzufügen. Weitere Informationen findest du unter [Installieren von Paketen aus anderen Organisationen](#installing-packages-from-other-organizations).

Du musst außerdem die Datei *.npmrc* zu deinem Projekt hinzufügen, damit alle Anforderungen zum Installieren von Paketen {% ifversion ghae %}an{% else %}{% endif %} {% data variables.product.prodname_registry %} weitergeleitet werden. {% ifversion fpt or ghes or ghec %}Wenn du alle Paketanforderungen über {% data variables.product.prodname_registry %} weiterleitest, kannst du sowohl bereichsbezogene als auch nicht bereichsbezogene Pakete aus *npmjs.org* verwenden. Weitere Informationen findest du unter [npm-scope](https://docs.npmjs.com/misc/scope) in der Dokumentation zu npm.{% endif %}

{% ifversion ghae %} Standardmäßig kannst du nur npm-Pakete verwenden, die in deinem Unternehmen gehostet werden, und du kannst keine nicht bereichsbezogenen Pakete verwenden. Weitere Informationen zur Bereichsdefinition des Pakets findest du unter [npm-scope](https://docs.npmjs.com/misc/scope) in der Dokumentation zu npm. Bei Bedarf kann der Support von {% data variables.product.prodname_dotcom %} ein Upstreamproxy zu npmjs.org aktivieren. Sobald ein Upstreamproxy aktiviert ist, stellt {% data variables.product.prodname_registry %} eine Proxyanforderung an npmjs.org, wenn ein angefordertes Paket in deinem Unternehmen nicht gefunden wird.  
{% endif %}

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Konfiguriere *package.json* in deinem Projekt, um das Paket zu verwenden, das du installierst. Gib den vollständigen Paketnamen an (z. B. `@my-org/server`), um die Paketabhängigkeiten zur Datei *package.json* für {% data variables.product.prodname_registry %} hinzuzufügen. Gib für Pakete aus *npmjs.com* den vollständigen Namen (z. B. `@babel/core` oder `@lodash`) an. Ersetze `<organization_name>/<package_name>` durch deine Paketabhängigkeit.

  ```json
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the <organization_name>/<package_name> package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "<organization_name>/<package_name>": "1.0.0"
    }
  }
  ```
5. Installiere das Paket.

  ```shell
  $ npm install
  ```

### Pakete von anderen Organisationen installieren

Standardmäßig kannst du nur {% data variables.product.prodname_registry %}-Pakete von einer Organisation verwenden. Wenn du Paketanforderungen an mehrere Organisationen und Benutzer*innen weiterleiten möchtest, kannst du der *NPMRC*-Datei zusätzliche Zeilen hinzufügen und {% ifversion ghes or ghae %}*HOSTNAME* durch den Hostnamen von {% data variables.location.product_location %} sowie {% endif %}*OWNER* durch den Namen des Benutzer- bzw. Organisationskontos ersetzen, in dessen Besitz sich das Repository befindet, das dein Projekt enthält.

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}

```shell
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:

```shell
@OWNER:registry=https://HOSTNAME/_registry/npm
@OWNER:registry=https://HOSTNAME/_registry/npm
```
{% endif %}

{% ifversion ghes %}
## Verwenden der offiziellen npm-Registrierung

Mit {% data variables.product.prodname_registry %} kannst du auf die offizielle npm-Registrierung unter `registry.npmjs.com` zugreifen, wenn dein*e {% data variables.product.prodname_ghe_server %}-Administrator*in dieses Feature aktiviert hat. Weitere Informationen findest du unter [Herstellen einer Verbindung mit der offiziellen npm-Registrierung](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}
