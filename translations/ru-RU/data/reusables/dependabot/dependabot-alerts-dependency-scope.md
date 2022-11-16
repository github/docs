---
ms.openlocfilehash: 873bdafd14b68ef0b8f2a99429a7f9966decc537
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080538"
---
В таблице ниже приведены сведения о том, поддерживается ли область зависимости для разных экосистем и манифестов, то есть может ли {% data variables.product.prodname_dependabot %} определить, используется ли зависимость для разработки или рабочей среды.

| **Язык** | **Экосистема** | **Файл манифеста** | **Поддержка области зависимости** |
|:---|:---:|:---:|:---|
| Go | Модули Go | go.mod | Нет, по умолчанию предполагается среда выполнения |
| Go | Модули Go | go.sum | Нет, по умолчанию предполагается среда выполнения |
| Java | Maven | pom.xml | ✔ `test` обозначает среду разработки, во всех остальных случаях по умолчанию предполагается среда выполнения |
| JavaScript | npm | package.json | ✔ |
| JavaScript | npm | package-lock.json | ✔ |
| JavaScript |  yarn v1 | yarn.lock | Нет, по умолчанию предполагается среда выполнения |
| PHP | Composer | composer.json | ✔ |
| PHP | Composer | composer.lock | ✔ |
| Python | Poetry | poetry.lock | ✔ |
| Python | Poetry | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ Предполагается область разработки, если имя файла содержит `test` или `dev`, и среда выполнения во всех остальных случаях |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile |   ✔ |
| Ruby | RubyGems | Gemfile.lock    | Нет, по умолчанию предполагается среда выполнения |
| Rust | Грузовой |  Cargo.toml | ✔ |
| Rust | Грузовой | Cargo.lock | Нет, по умолчанию предполагается среда выполнения |
| YAML | Действия GitHub | - | Нет, по умолчанию предполагается среда выполнения |
| .NET (C#, F#, VB и так далее) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | Нет, по умолчанию предполагается среда выполнения |
| .NET | NuGet | packages.config | Нет, по умолчанию предполагается среда выполнения |
| .NET | NuGet | .nuspec | ✔ Когда нет тега "runtime" |
