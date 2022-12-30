---
title: Arbeiten mit der RubyGems-Registrierung
intro: 'Du kannst RubyGems so konfigurieren, dass ein Paket in {% data variables.product.prodname_registry %} veröffentlicht wird und Pakete verwendet werden, die in {% data variables.product.prodname_registry %} als Abhängigkeiten in einem Ruby-Projekt mit Bundler gespeichert sind.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: RubyGems registry
ms.openlocfilehash: 514a50358bf8171b3ea8d13b01375306e784e63f
ms.sourcegitcommit: cea091b5171ad05f18b3d35fa063cfea8aea12c4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/17/2022
ms.locfileid: '148172145'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Voraussetzungen

- Du musst über RubyGems 2.4.1 oder höher verfügen. So ermittelst du deine RubyGems-Version:

  ```shell
  $ gem --version
  ```

- Du musst über Bundler 1.6.4 oder höher verfügen. So ermittelst du deine Bundler-Version:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## Bei {% data variables.product.prodname_registry %} authentifizieren

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentifizieren mit einem {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Zum Veröffentlichen und Installieren von Gems kannst du RubyGems oder Bundler für die Authentifizierung bei {% data variables.product.prodname_registry %} mithilfe eines {% data variables.product.pat_generic %} konfigurieren.

Um neue Gems zu veröffentlichen, musst du dich mit RubyGems bei {% data variables.product.prodname_registry %} authentifizieren, indem du dein {% data variables.product.pat_v1 %} in die Datei *~/.gem/credentials* einfügst. Erstelle eine neue Datei *~/.gem/credentials*, falls sie noch nicht vorhanden ist.

Du kannst beispielsweise die Datei *~/.gem/credentials* so erstellen oder bearbeiten, dass sie Folgendes enthält, und dabei *TOKEN* durch dein {% data variables.product.pat_generic %} ersetzen.

```shell
---
:github: Bearer TOKEN
```

Um Gems zu installieren, musst du dich bei {% data variables.product.prodname_registry %} authentifizieren, indem du deine Gem-Quellen so aktualisierst, dass sie `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/` enthalten. Dabei musst du Folgendes ersetzen:
  - `USERNAME` durch deinen {% data variables.product.prodname_dotcom %}-Benutzernamen
  - `TOKEN` durch dein {% data variables.product.pat_v1 %}
  - `OWNER` durch den Namen des Benutzer- oder Organisationskontos, das das Repository besitzt, in dem sich dein Projekt befindet.{% ifversion ghes %}
  - `REGISTRY-URL` durch die URL der RubyGems-Registrierung deiner Instanz Wenn die Unterdomänenisolation für deine Instanz aktiviert ist, verwende `rubygems.HOSTNAME`. Wenn Unterdomänenisolation für deine Instanz deaktiviert ist, verwende `HOSTNAME/_registry/rubygems`. In beiden Fällen musst du *HOSTNAME* durch den Hostnamen deiner {% data variables.product.prodname_ghe_server %}-Instanz ersetzen.
{% elsif ghae %}
  - `REGISTRY-URL` durch die URL der RubyGems-Registrierung deiner Instanz, `rubygems.HOSTNAME` Ersetze *HOSTNAME* durch den Hostnamen von {% data variables.location.product_location %}.
{% endif %}

Wenn dein Paket global verfügbar sein soll, kannst du den folgenden Befehl ausführen, um deine Registrierung als Quelle hinzuzufügen.
```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
```

Um sich mit Bundler zu authentifizieren, musst du Bundler für die Verwendung deines {% data variables.product.pat_v1 %} konfigurieren, indem du *USERNAME* durch deinen {% data variables.product.prodname_dotcom %}-Benutzernamen, *TOKEN* durch dein {% data variables.product.pat_generic %} und *OWNER* durch den Namen des Benutzer- oder Organisationskontos ersetzt, das das Repository besitzt, das dein Projekt enthält.{% ifversion ghes %} Ersetze `REGISTRY-URL` durch die URL der RubyGems-Registrierung deiner Instanz. Wenn die Unterdomänenisolation für deine Instanz aktiviert ist, verwende `rubygems.HOSTNAME`. Wenn Unterdomänenisolation für deine Instanz deaktiviert ist, verwende `HOSTNAME/_registry/rubygems`. In beiden Fällen musst du *HOSTNAME* durch den Hostnamen deiner {% data variables.product.prodname_ghe_server %}-Instanz ersetzen.{% elsif ghae %}Ersetze `REGISTRY-URL` durch die URL der RubyGems-Registrierung deiner Instanz, `rubygems.HOSTNAME`. Ersetze *HOSTNAME* durch den Hostnamen von {% data variables.location.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
```

## Veröffentlichen eines Pakets

{% data reusables.package_registry.default-name %} Wenn du `<GEM NAME>` beispielsweise in der Organisation `octo-org` veröffentlichst, veröffentlicht {% data variables.product.prodname_registry %} das Gem im Repository `octo-org/<GEM NAME>`. Weitere Informationen zum Erstellen von Gems findest du in der RubyGems-Dokumentation unter [Erstellen eigener Gems](http://guides.rubygems.org/make-your-own-gem/).

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Erstelle das Paket aus *gemspec*, um das *GEM*-Paket zu erstellen.
  ```
  gem build <GEM NAME>.gemspec
  ```
3. Veröffentliche ein Paket in {% data variables.product.prodname_registry %}, und ersetze `OWNER` durch den Namen des Benutzer- oder Organisationskontos, das das Repository besitzt, das dein Projekt und `<GEM NAME>` enthält, durch den Namen deines GEM-Pakets.{% ifversion ghes %} Ersetze `REGISTRY-URL` durch die URL der RubyGems-Registrierung deiner Instanz. Wenn die Unterdomänenisolation für deine Instanz aktiviert ist, verwende `rubygems.HOSTNAME`. Wenn Unterdomänenisolation für deine Instanz deaktiviert ist, verwende `HOSTNAME/_registry/rubygems`. In beiden Fällen musst du *HOSTNAME* durch den Hostnamen deiner {% data variables.product.prodname_ghe_server %}-Instanz ersetzen.{% elsif ghae %} Ersetze `REGISTRY-URL` durch die URL der RubyGems-Registrierung deiner Instanz, `rubygems.HOSTNAME`. Ersetze *HOSTNAME* durch den Hostnamen von {% data variables.location.product_location %}.{% endif %}

  ```
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
  <GEM NAME>-0.0.1.gem
  ```

## Veröffentlichen mehrerer Pakete im gleichen Repository

Um mehrere Gems im selben Repository zu veröffentlichen, kannst du die URL zum {% data variables.product.prodname_dotcom %}-Repository in das Feld `github_repo` in `gem.metadata`einfügen. Wenn du dieses Feld einschließt, gleicht {% data variables.product.prodname_dotcom %} das Repository basierend auf diesem Wert anstatt dem Gem-Namen ab.{% ifversion ghes or ghae %} Ersetze *HOSTNAME* durch den Hostnamen von {% data variables.location.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Installieren eines Pakets

Du kannst Gems aus {% data variables.product.prodname_registry %} in etwa so wie Gems von *rubygems.org* verwenden. Du musst dich bei {% data variables.product.prodname_registry %} authentifizieren, indem du dein {% data variables.product.prodname_dotcom %}-Benutzerkonto oder deine -Organisation als Quelle in der Datei *~/.gemrc* oder durch Bearbeitung deiner *Gemfile* mithilfe von Bundler hinzufügst.

{% data reusables.package_registry.authenticate-step %}
1. Für Bundler kannst du dein {% data variables.product.prodname_dotcom %} -Benutzerkonto bzw. deine -Organisation als Quelle zu deiner *Gemfile*-Datei hinzufügen, um Gems aus dieser neuen Quelle abrufen. Du kannst deinem *Gemfile* beispielsweise einen neuen `source`-Block hinzufügen, der {% data variables.product.prodname_registry %} nur für die von dir angegebenen Pakete verwendet. Dazu musst du *GEM NAME* durch das Paket ersetzen, das du aus {% data variables.product.prodname_registry %} installieren möchtest, und *OWNER* durch das Benutzer- oder die Organisationskonto, das das Repository besitzt, das das zu installierende Gem enthält.{% ifversion ghes %} Ersetze `REGISTRY-URL` durch die URL der RubyGems-Registrierung deiner Instanz. Wenn die Unterdomänenisolation für deine Instanz aktiviert ist, verwende `rubygems.HOSTNAME`. Wenn Unterdomänenisolation für deine Instanz deaktiviert ist, verwende `HOSTNAME/_registry/rubygems`. In beiden Fällen musst du *HOSTNAME* durch den Hostnamen deiner {% data variables.product.prodname_ghe_server %}-Instanz ersetzen.{% elsif ghae %} Ersetze `REGISTRY-URL` durch die URL der RubyGems-Registrierung deiner Instanz, `rubygems.HOSTNAME`. Ersetze *HOSTNAME* durch den Hostnamen von {% data variables.location.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. Für Bundler-Versionen, die älter als 1.7.0 sind, musst du eine neue globale Quelle (`source`) hinzufügen. Weitere Informationen zur Verwendung von Bundler findest du in der [Dokumentation zu bundler.io](https://bundler.io/gemfile.html).

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Installiere das Paket:
  ```
  $ gem install <GEM NAME> --version "0.1.1"
  ```

## Weitere Informationsquellen

- [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package)

