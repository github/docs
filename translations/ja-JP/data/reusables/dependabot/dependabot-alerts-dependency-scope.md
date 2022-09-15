---
ms.openlocfilehash: 873bdafd14b68ef0b8f2a99429a7f9966decc537
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080089"
---
次の表は、依存関係スコープがさまざまなエコシステムとマニフェストでサポートされているかどうか、つまり、{% data variables.product.prodname_dependabot %} で依存関係が開発または生産に使われていることを識別できるかどうかまとめたものです。

| **Language** | **エコシステム** | **マニフェスト ファイル:** | **依存関係スコープがサポートされている** |
|:---|:---:|:---:|:---|
| Go | Go モジュール | go.mod | いいえ、既定値はランタイムです |
| Go | Go モジュール | go.sum | いいえ、既定値はランタイムです |
| Java | Maven | pom.xml | ✔ `test` は開発にマップされ、それ以外の場合、スコープの既定値はランタイムになります |
| JavaScript | npm | package.json | ✔ |
| JavaScript | npm | package-lock.json | ✔ |
| JavaScript |  yarn v1 | yarn.lock | いいえ、既定値はランタイムです |
| PHP | Composer | composer.json | ✔ |
| PHP | Composer | composer.lock | ✔ |
| Python | Poetry | poetry.lock | ✔ |
| Python | Poetry | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ スコープは、ファイル名に `test` か `dev` が含まれている場合は開発で、それ以外の場合はランタイムです |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile |   ✔ |
| Ruby | RubyGems | Gemfile.lock    | いいえ、既定値はランタイムです |
| Rust | Cargo |  Cargo.toml | ✔ |
| Rust | Cargo | Cargo.lock | いいえ、既定値はランタイムです |
| YAML | GitHub のアクション | - | いいえ、既定値はランタイムです |
| .NET (C#、F#、VB など) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | いいえ、既定値はランタイムです |
| .NET | NuGet | packages.config | いいえ、既定値はランタイムです |
| .NET | NuGet | .nuspec | ✔ タグ != ランタイムの場合 |
