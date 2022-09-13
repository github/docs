---
ms.openlocfilehash: 873bdafd14b68ef0b8f2a99429a7f9966decc537
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080539"
---
En la tabla siguiente se resume si el ámbito de dependencia es compatible con varios ecosistemas y manifiestos; es decir, si {% data variables.product.prodname_dependabot %} puede identificar si se usa una dependencia para el desarrollo o la producción.

| **Lenguaje** | **Ecosistema** | **Archivo de manifiesto** | **Ámbito de dependencia admitido** |
|:---|:---:|:---:|:---|
| Go | Módulos de Go | go.mod | No, el valor predeterminado es runtime. |
| Go | Módulos de Go | go.sum | No, el valor predeterminado es runtime. |
| Java | Maven | pom.xml | ✔ `test` se asigna al desarrollo; de lo contrario, el ámbito tiene como valor predeterminado runtime. |
| JavaScript | npm | package.json | ✔ |
| JavaScript | npm | package-lock.json | ✔ |
| JavaScript |  yarn v1 | yarn.lock | No, el valor predeterminado es runtime. |
| PHP | Composer | composer.json | ✔ |
| PHP | Composer | composer.lock | ✔ |
| Python | Poetry | poetry.lock | ✔ |
| Python | Poetry | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ El ámbito es el desarrollo si el nombre de archivo contiene `test` o `dev`; de lo contrario, es runtime. |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile |   ✔ |
| Ruby | RubyGems | Gemfile.lock    | No, el valor predeterminado es runtime. |
| Rust | Cargo |  Cargo.toml | ✔ |
| Rust | Cargo | Cargo.lock | No, el valor predeterminado es runtime. |
| YAML | Acciones de GitHub | - | No, el valor predeterminado es runtime. |
| .NET (C#, F#, VB, etc.) | NuGet | .csproj/.vbproj .vcxproj/.fsproj | No, el valor predeterminado es runtime. |
| .NET | NuGet | packages.config | No, el valor predeterminado es runtime. |
| .NET | NuGet | .nuspec | ✔ Cuando la etiqueta != runtime |
