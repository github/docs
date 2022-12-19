---
ms.openlocfilehash: fe25bdae61de1f19af6cb1e9103df41c40f60510
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/18/2022
ms.locfileid: "148172725"
---
In der folgenden Tabelle ist zusammengefasst, ob der Abhängigkeitsbereich für verschiedene Ökosysteme und Manifeste unterstützt wird, d.h. ob {% data variables.product.prodname_dependabot %} erkennen kann, ob eine Abhängigkeit für die Entwicklung oder Produktion verwendet wird.

| **Sprache** | **Ökosystem** | **Manifestdatei** | **Unterstützter Abhängigkeitsbereich** | |:---|:---:|:---:|:---|{% ifversion dependency-graph-dart-support %} | Dart | pub | pubspec.yaml |  ✔ | | Dart | pub | pubspec.lock |  ✔ |{% endif %} | Go | Go-Module | go.mod | Nein, standardmäßig auf „Runtime“ festgelegt | | Go | Go-Module | go.sum | Nein, standardmäßig auf „Runtime“ festgelegt | | Java | Maven | pom.xml | ✔ `test` ist „Entwicklung“ zugeordnet, andere Bereichseinstellungen sind standardmäßig auf „Runtime“ festgelegt | | JavaScript | npm | package.json | ✔ | | JavaScript | npm | package-lock.json | ✔ | | JavaScript |  yarn v1 | yarn.lock | Nein, standardmäßig auf „Runtime“ festgelegt | | PHP | Composer | composer.json | ✔ | | PHP | Composer | composer.lock | ✔ | | Python | Poetry | poetry.lock | ✔ | | Python | Poetry | pyproject.toml | ✔ | | Python | pip | requirements.txt | ✔ „Bereich“ ist „Entwicklung“, wenn der Dateiname `test` oder `dev` enthält, andernfalls „Runtime“. | | Python | pip | pipfile.lock | ✔ | | Python | pip | pipfile | ✔ | | Ruby | RubyGems | Gemfile |   ✔ | | Ruby | RubyGems | Gemfile.lock    | Nein, standardmäßig auf „Runtime“ festgelegt | | Rust | Cargo | Cargo.toml | ✔ | | Rust | Cargo | Cargo.lock | Nein, standardmäßig auf „Runtime“ festgelegt | | YAML | GitHub Actions | - | Nein, standardmäßig auf „Runtime“ festgelegt | | .NET (C#, F#, VB, etc.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | Nein, standardmäßig auf „Runtime“ festgelegt | | .NET | NuGet | packages.config | Nein, standardmäßig auf „Runtime“ festgelegt | | .NET | NuGet | .nuspec | ✔ Bei Tag != runtime |
