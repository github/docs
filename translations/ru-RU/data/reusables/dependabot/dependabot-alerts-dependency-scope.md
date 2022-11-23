---
ms.openlocfilehash: fe25bdae61de1f19af6cb1e9103df41c40f60510
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/18/2022
ms.locfileid: "148172728"
---
В таблице ниже приведены сведения о том, поддерживается ли область зависимости для разных экосистем и манифестов, то есть может ли {% data variables.product.prodname_dependabot %} определить, используется ли зависимость для разработки или рабочей среды.

| **Язык** |  **Экосистемы** |  **Файл** |  манифеста **Область зависимостей, поддерживаемая** | |:---|:---:|:---:|:---| {% ifversion dependency-graph-dart-support %} | Дарт | | паба pubspec.yaml |  ✔ | | Дарт | | паба | pubspec.lock  ✔ | {% endif %} | Перейти | | модулей Go | go.mod Нет, по умолчанию используется среда выполнения | | Перейти | | модулей Go | go.sum Нет, по умолчанию используется среда выполнения | | Java | | Maven pom.xml | ✔ `test` сопоставляется с разработкой, в противном случае область по умолчанию используется для среды выполнения | | | JavaScript | npm | package.json ✔ | | | JavaScript | npm | package-lock.json ✔ | | | JavaScript  | yarn версии 1 | yarn.lock Нет, по умолчанию используется среда выполнения | | php | | Composer | composer.json ✔ | | php | | Composer | composer.lock ✔ | | | Python | поэзии | poetry.lock ✔ | | | Python | поэзии | pyproject.toml ✔ | | | Python | pip requirements.txt | ✔ Область разработки, если имя файла содержит `test` или `dev`, в противном случае это среда выполнения | | | Python | pip | pipfile.lock ✔ | | | Python | pip | pipfile ✔ | | | Ruby | RubyGems | Gemfile   ✔ | | | Ruby | RubyGems | Gemfile.lock Нет, по умолчанию используется среда выполнения | | | Rust Грузовая | | Cargo.toml ✔ | | | Rust Грузовая | | Cargo.lock Нет, по умолчанию используется среда выполнения | | | YAML GitHub Actions | — | Нет, по умолчанию используется среда выполнения | | .NET (C#, F#, VB и т. д.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | Нет, по умолчанию используется среда выполнения | | .NET | | NuGet packages.config | Нет, по умолчанию используется среда выполнения | | .NET | NuGet | .nuspec | ✔ Когда | среда выполнения тега !=
