---
ms.openlocfilehash: fe25bdae61de1f19af6cb1e9103df41c40f60510
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/18/2022
ms.locfileid: "148172722"
---
A tabela a seguir resume se há suporte para escopo de dependência em vários ecossistemas e manifestos, ou seja, se o {% data variables.product.prodname_dependabot %} pode identificar se uma dependência é usada para desenvolvimento ou produção.

| **Língua** | **Ecossistema** | **Arquivo de manifesto** | **Escopo de dependência com suporte** | |:---|:---:|:---:|:---| {% ifversion dependency-graph-dart-support %} | | de dardos pub | pubspec.yaml |  ✔ | | | de dardos pub | pubspec.lock |  ✔ | {% endif %} | Ir | Módulos go | go.mod | Não, o padrão é executar | | Ir | Módulos go | go.sum | Não, o padrão é executar | | Java | Maven | pom.xml | ✔ `test` mapeia para o desenvolvimento, caso contrário, o escopo usa como padrão o runtime | | | JavaScript npm | | package.json ✔ | | | JavaScript npm | | package-lock.json ✔ | | | JavaScript  yarn v1 | yarn.lock | Não, o padrão é executar | | | PHP Compositor | composer.json | ✔ | | | PHP Compositor | composer.lock | ✔ | | Python | | de poesia poetry.lock | ✔ | | Python | | de poesia | pyproject.toml ✔ | | Python | pip | requirements.txt | ✔ Escopo será desenvolvimento se o nome de arquivo contiver `test` ou `dev`, caso contrário, será runtime | | Python | pip | | pipfile.lock ✔ | | Python | pip | | pipfile ✔ | | Ruby | RubyGems | | gemfile   ✔ | | Ruby | RubyGems | | Gemfile.lock Não, o padrão é executar | | Rust | | de carga | Cargo.toml ✔ | | Rust | | de carga | cargo.lock Não, o padrão é executar | | | YAML GitHub Actions | - | Não, o padrão é executar | | .NET (C#, F#, VB etc.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | Não, o padrão é executar | | | .NET | do NuGet packages.config | Não, o padrão é executar | | | .NET NuGet | .nuspec | ✔ Quando a marca != runtime |
