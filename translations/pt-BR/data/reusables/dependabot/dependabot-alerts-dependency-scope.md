---
ms.openlocfilehash: 873bdafd14b68ef0b8f2a99429a7f9966decc537
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147079454"
---
A tabela a seguir resume se há suporte para escopo de dependência em vários ecossistemas e manifestos, ou seja, se o {% data variables.product.prodname_dependabot %} pode identificar se uma dependência é usada para desenvolvimento ou produção.

| **Linguagem** | **Ecossistema** | **Arquivo de manifesto** | **Escopo de dependência com suporte** |
|:---|:---:|:---:|:---|
| Go | Módulos Go | go.mod | Não. O padrão é runtime |
| Go | Módulos Go | go.sum | Não. O padrão é runtime |
| Java | Maven | pom.xml | ✔ `test` é mapeado para desenvolvimento, caso contrário o padrão do escopo é runtime |
| JavaScript | npm | package.json | ✔ |
| JavaScript | npm | package-lock.json | ✔ |
| JavaScript |  yarn v1 | yarn.lock | Não. O padrão é runtime |
| PHP | Compositor | composer.json | ✔ |
| PHP | Compositor | composer.lock | ✔ |
| Python | Poetry | poetry.lock | ✔ |
| Python | Poetry | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ O escopo é desenvolvimento quando o nome do arquivo contém `test` ou `dev`. Caso contrário, é runtime |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile |   ✔ |
| Ruby | RubyGems | Gemfile.lock    | Não. O padrão é runtime |
| Rust | Cargo |  Cargo.toml | ✔ |
| Rust | Cargo | Cargo.lock | Não. O padrão é runtime |
| YAML | GitHub Actions | - | Não. O padrão é runtime |
| .NET (C#, F#, VB etc.) | NuGet | .csproj/.vbproj .vcxproj/.fsproj | Não. O padrão é runtime |
| .NET | NuGet | packages.config | Não. O padrão é runtime |
| .NET | NuGet | .nuspec | ✔ Quando a marca != runtime |
