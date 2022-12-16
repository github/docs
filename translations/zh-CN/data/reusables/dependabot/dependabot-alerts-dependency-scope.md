---
ms.openlocfilehash: fe25bdae61de1f19af6cb1e9103df41c40f60510
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/18/2022
ms.locfileid: "148172723"
---
下表总结了各种生态系统和清单是否支持依赖项范围，即 {% data variables.product.prodname_dependabot %} 是否可以识别依赖项用于开发还是生产。

| 语言 | 生态系统 | 清单文件 | 支持的依赖项范围 | |:---|:---:|:---:|:---|{% ifversion dependency-graph-dart-support %} | Dart | pub | pubspec.yaml |  ✔ | | Dart | pub | pubspec.lock |  ✔ |{% endif %} | Go | Go 模块 | go.mod | 否，默认为运行时 | | Go | Go 模块 | go.sum | 否，默认为运行时 | | Java | Maven | pom.xml | ✔ `test` 映射到开发，否则范围默认为运行时 | | JavaScript | npm | package.json | ✔ | | JavaScript | npm | package-lock.json | ✔ | | JavaScript |  yarn v1 | yarn.lock | 否，默认为运行时 | | PHP | Composer | composer.json | ✔ | | PHP | Composer | composer.lock | ✔ | | Python | Poetry | poetry.lock | ✔ | | Python | Poetry | pyproject.toml | ✔ | | Python | pip | requirements.txt | ✔ 如果文件名包含 `test` 或 `dev`，范围则为开发，否则为运行时 | | Python | pip | pipfile.lock | ✔ | | Python | pip | pipfile | ✔ | | Ruby | RubyGems | Gemfile |   ✔ | | Ruby | RubyGems | Gemfile.lock    | 否，默认为运行时 | | Rust | Cargo | Cargo.toml | ✔ | | Rust | Cargo | Cargo.lock | 否，默认为运行时 | | YAML | GitHub Actions | - | 否，默认为运行时 | | .NET (C#, F#, VB, etc.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | 否，默认为运行时 | | .NET | NuGet | packages.config | 否，默认为运行时 | | .NET | NuGet | .nuspec | ✔ 当标记 != 运行时时 |
