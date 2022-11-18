---
ms.openlocfilehash: 873bdafd14b68ef0b8f2a99429a7f9966decc537
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: "147887683"
---
아래 표에서는 다양한 에코시스템 및 매니페스트에 대해 종속성 범위가 지원되는지, 즉 {% data variables.product.prodname_dependabot %}이 개발 또는 프로덕션에 종속성이 사용되는지 확인할 수 있는지 여부를 요약합니다.

| **언어** | **에코시스템** | **매니페스트 파일** | **지원되는 종속성 범위** |
|:---|:---:|:---:|:---|
| Go | Go 모듈 | go.mod | 아니요, 기본값은 런타임입니다. |
| Go | Go 모듈 | go.sum | 아니요, 기본값은 런타임입니다. |
| Java | Maven | pom.xml | ✔ `test`는 개발에 매핑되며, 그렇지 않으면 범위 기본값은 런타임입니다. |
| JavaScript | npm | package.json | ✔ |
| JavaScript | npm | package-lock.json | ✔ |
| JavaScript |  yarn v1 | yarn.lock | 아니요, 기본값은 런타임입니다. |
| PHP | 작성기 | composer.json | ✔ |
| PHP | 작성기 | composer.lock | ✔ |
| Python | Poetry | poetry.lock | ✔ |
| Python | Poetry | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ 파일 이름에 `test` 또는 `dev`가 포함되면 범위는 개발이고 그렇지 않으면 런타임입니다. |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile |   ✔ |
| Ruby | RubyGems | Gemfile.lock    | 아니요, 기본값은 런타임입니다. |
| Rust | Cargo |  Cargo.toml | ✔ |
| Rust | Cargo | Cargo.lock | 아니요, 기본값은 런타임입니다. |
| YAML | GitHub 작업 | - | 아니요, 기본값은 런타임입니다. |
| .NET(C#, F#, VB 등) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | 아니요, 기본값은 런타임입니다. |
| .NET | NuGet | packages.config | 아니요, 기본값은 런타임입니다. |
| .NET | NuGet | .nuspec | ✔ != runtime 태그인 경우 |
