---
ms.openlocfilehash: fe25bdae61de1f19af6cb1e9103df41c40f60510
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/18/2022
ms.locfileid: "148172724"
---
Le tableau ci-dessous résume si l’étendue des dépendances est prise en charge pour divers écosystèmes et manifestes, c’est-à-dire si {% data variables.product.prodname_dependabot %} peut identifier si une dépendance est utilisée pour le développement ou la production.

| **Langage** | **Écosystème** | **Fichier manifeste** | **Étendue de dépendance prise en charge** | |:---|:---:|:---:|:---|{% ifversion dependency-graph-dart-support %} | Dart | pub | pubspec.yaml |  ✔ | | Dart | pub | pubspec.lock |  ✔ |{% endif %} | Go | Modules Go | go.mod | Non, utilise runtime par défaut | | Go | Modules Go | go.sum | Non, utilise runtime par défaut | | Java | Maven | pom.xml | ✔ `test` est mappé au développement, ou au runtime par défaut | | JavaScript | npm | package.json | ✔ | | JavaScript | npm | package-lock.json | ✔ | | JavaScript |  yarn v1 | yarn.lock | Non, utilise runtime par défaut | | PHP | Composer | composer.json | ✔ | | PHP | Composer | composer.lock | ✔ | | Python | Poetry | poetry.lock | ✔ | | Python | Poetry | pyproject.toml | ✔ | | Python | pip | requirements.txt | ✔ L’étendue est « développement » si le nom de fichier contient `test` ou `dev`, sinon runtime est utilisé | | Python | pip | pipfile.lock | ✔ | | Python | pip | pipfile | ✔ | | Ruby | RubyGems | Gemfile |   ✔ | | Ruby | RubyGems | Gemfile.lock    | Non, utilise runtime par défaut | | Rust | Cargo | Cargo.toml | ✔ | | Rust | Cargo | Cargo.lock | Non, utilise runtime par défaut| | YAML | GitHub Actions | - | Non, utilise runtime par défaut | | .NET (C#, F#, VB, etc.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | Non, utilise runtime par défaut | | .NET | NuGet | packages.config | Non, utilise runtime par défaut | | .NET | NuGet | .nuspec | ✔ Si l’étiquette != runtime |
