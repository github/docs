---
ms.openlocfilehash: 873bdafd14b68ef0b8f2a99429a7f9966decc537
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079580"
---
下表总结了各种生态系统和清单是否支持依赖项范围，即 {% data variables.product.prodname_dependabot %} 是否可以识别依赖项用于开发还是生产。

| **语言** | **生态系统** | **清单文件** | **支持依赖项范围** |
|:---|:---:|:---:|:---|
| Go | Go 模块 | go.mod | 否，默认为运行时 |
| Go | Go 模块 | go.sum | 否，默认为运行时 |
| Java | Maven | pom.xml | ✔ `test` 映射到开发，否则范围默认为运行时 |
| Javascript | npm | package.json | ✔ |
| Javascript | npm | package-lock.json | ✔ |
| JavaScript |  yarn v1 | yarn.lock | 否，默认为运行时 |
| PHP | 编辑器 | composer.json | ✔ |
| PHP | 编辑器 | composer.lock | ✔ |
| Python | 诗歌 | poetry.lock | ✔ |
| Python | 诗歌 | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ 如果文件名包含 `test` 或 `dev`，范围则为开发，否则为运行时 |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile  |   ✔ |
| Ruby | RubyGems | Gemfile.lock    | 否，默认为运行时 |
| Rust | Cargo |  Cargo.toml | ✔ |
| Rust | Cargo | Cargo.lock | 否，默认为运行时 |
| YAML | GitHub 操作 | - | 否，默认为运行时 |
| .NET（C#、F# 和 VB 等） | NuGet | .csproj / .vbproj .vcxproj / .fsproj | 否，默认为运行时 |
| .NET | NuGet | packages.config | 否，默认为运行时 |
| .NET | NuGet | .nuspec | ✔ 当标记 != runtime 时 |
