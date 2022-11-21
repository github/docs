---
ms.openlocfilehash: 873bdafd14b68ef0b8f2a99429a7f9966decc537
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080088"
---
In der folgenden Tabelle ist zusammengefasst, ob der Abhängigkeitsbereich für verschiedene Ökosysteme und Manifeste unterstützt wird, d.h. ob {% data variables.product.prodname_dependabot %} erkennen kann, ob eine Abhängigkeit für die Entwicklung oder Produktion verwendet wird.

| **Sprache** | **Ökosystem** | **Manifestdatei** | **Unterstützter Abhängigkeitsbereich** |
|:---|:---:|:---:|:---|
| Go | Go-Module | go.mod | Nein, standardmäßig auf „Runtime“ festgelegt |
| Go | Go-Module | go.sum | Nein, standardmäßig auf „Runtime“ festgelegt |
| Java | Maven | pom.xml | ✔ `test` ist „Entwicklung“ zugeordnet, andere Bereichseinstellungen sind standardmäßig auf „Runtime“ festgelegt |
| JavaScript | npm | package.json | ✔ |
| JavaScript | npm | package-lock.json | ✔ |
| JavaScript |  yarn v1 | yarn.lock | Nein, standardmäßig auf „Runtime“ festgelegt |
| PHP | Composer | composer.json | ✔ |
| PHP | Composer | composer.lock | ✔ |
| Python | Poetry | poetry.lock | ✔ |
| Python | Poetry | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ „Bereich“ ist „Entwicklung“, wenn der Dateiname `test` oder `dev` enthält, andernfalls „Runtime“ |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile |   ✔ |
| Ruby | RubyGems | Gemfile.lock    | Nein, standardmäßig auf „Runtime“ festgelegt |
| Rust | Cargo |  Cargo.toml | ✔ |
| Rust | Cargo | Cargo.lock | Nein, standardmäßig auf „Runtime“ festgelegt |
| YAML | GitHub-Aktionen | - | Nein, standardmäßig auf „Runtime“ festgelegt |
| .NET (C#, F#, VB usw.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | Nein, standardmäßig auf „Runtime“ festgelegt |
| .NET | NuGet | packages.config | Nein, standardmäßig auf „Runtime“ festgelegt |
| .NET | NuGet | .nuspec | ✔ Wenn das Tag != runtime |
