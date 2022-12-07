---
ms.openlocfilehash: fe25bdae61de1f19af6cb1e9103df41c40f60510
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/18/2022
ms.locfileid: "148172727"
---
아래 표에서는 다양한 에코시스템 및 매니페스트에 대해 종속성 범위가 지원되는지, 즉 {% data variables.product.prodname_dependabot %}이 개발 또는 프로덕션에 종속성이 사용되는지 확인할 수 있는지 여부를 요약합니다.

| **언어** |  **생태계** |  **매니페스트 파일** |  **종속성 범위 지원** | |:---|:---:|:---:|:---| {% ifversion dependency-graph-dart-support %} | 다트 | pub | pubspec.yaml |  ✔ | | 다트 | pub | pubspec.lock |  ✔ | {% endif %} | | 이동 모듈 | 이동 go.mod | 아니요, 기본적으로 런타임 | | | 이동 모듈 | 이동 go.sum | 아니요, 기본적으로 런타임 | | Java | Maven | pom.xml | ✔ `test` 은 개발에 매핑하고, 그렇지 않으면 범위 기본값을 런타임 | | JavaScript | npm | package.json | ✔ | | JavaScript | npm | package-lock.json | ✔ | | JavaScript |  yarn v1 | yarn.lock | 아니요, 기본적으로 런타임 | | PHP | 작곡가 | composer.json | ✔ | | PHP | 작곡가 | composer.lock | ✔ | | Python | 시 | poetry.lock | ✔ | | Python | 시 | pyproject.toml | ✔ | | Python | pip | requirements.txt | ✔ 범위는 파일 이름에 또는 `dev`가 포함된 `test` 경우 개발이고, 그렇지 않으면 런타임 | | Python | pip | pipfile.lock | ✔ | | Python | pip | pipfile | ✔ | | Ruby | RubyGems | Gemfile |   ✔ | | Ruby | RubyGems | Gemfile.lock | 아니요, 기본적으로 런타임 | | Rust | 화물 | Cargo.toml | ✔ | | Rust | 화물 | Cargo.lock | 아니요, 기본적으로 런타임 | | YAML | GitHub Actions | - | 아니요, 기본적으로 런타임 | | .NET(C#, F#, VB 등) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | 아니요, 기본적으로 런타임 | | .NET | NuGet | packages.config | 아니요, 기본적으로 런타임 | | .NET | NuGet | .nuspec | ✔ != 런타임 태그가 |
