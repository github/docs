---
ms.openlocfilehash: 873bdafd14b68ef0b8f2a99429a7f9966decc537
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079708"
---
Le tableau ci-dessous résume si l’étendue des dépendances est prise en charge pour divers écosystèmes et manifestes, c’est-à-dire si {% data variables.product.prodname_dependabot %} peut identifier si une dépendance est utilisée pour le développement ou la production.

| **Langage** | **Écosystème** | **Fichier manifeste** | **Étendue de dépendance prise en charge** |
|:---|:---:|:---:|:---|
| Go | Modules Go | go.mod | Non, utilise runtime par défaut |
| Go | Modules Go | go.sum | Non, utilise runtime par défaut |
| Java | Maven | pom.xml | ✔ `test` est mappé au développement, ou au runtime par défaut |
| JavaScript | npm | package.json | ✔ |
| JavaScript | npm | package-lock.json | ✔ |
| JavaScript |  yarn v1 | yarn.lock | Non, utilise runtime par défaut |
| PHP | Composer | composer.json | ✔ |
| PHP | Composer | composer.lock | ✔ |
| Python | Poetry | poetry.lock | ✔ |
| Python | Poetry | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ L’étendue est « développement » si le nom de fichier contient `test` ou `dev`, sinon runtime est utilisé |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile |   ✔ |
| Ruby | RubyGems | Gemfile.lock    | Non, utilise runtime par défaut |
| Rust | Cargo |  Cargo.toml | ✔ |
| Rust | Cargo | Cargo.lock | Non, utilise runtime par défaut |
| YAML | GitHub Actions | - | Non, utilise runtime par défaut |
| .NET (C#, F#, VB, etc.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | Non, utilise runtime par défaut |
| .NET | NuGet | packages.config | Non, utilise runtime par défaut |
| .NET | NuGet | .nuspec | ✔ Si l’étiquette != runtime |
