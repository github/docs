---
ms.openlocfilehash: fe25bdae61de1f19af6cb1e9103df41c40f60510
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/18/2022
ms.locfileid: "148172726"
---
次の表は、依存関係スコープがさまざまなエコシステムとマニフェストでサポートされているかどうか、つまり、{% data variables.product.prodname_dependabot %} で依存関係が開発または生産に使われていることを識別できるかどうかまとめたものです。

| **言語** | **エコシステム** | **マニフェスト ファイル** | **サポートされている依存関係スコープ** | |:---|:---:|:---:|:---|{% ifversion dependency-graph-dart-support %} | Dart | pub | pubspec.yaml |  ✔ | | Dart | pub | pubspec.lock |  ✔ |{% endif %} | Go | Go モジュール | go.mod | いいえ、既定でランタイム | | Go | Go モジュール | go.sum | いいえ、既定でランタイム | | Java | Maven | pom.xml | ✔ `test` は開発にマップし、それ以外のスコープは既定でランタイム | | JavaScript | npm | package.json | ✔ | | JavaScript | npm | package-lock.json | ✔ | | JavaScript |  yarn v1 | yarn.lock | いいえ、既定でランタイム | | PHP | Composer | composer.json | ✔ | | PHP | Composer | composer.lock | ✔ | | Python | Poetry | poetry.lock | ✔ | | Python | Poetry | pyproject.toml | ✔ | | Python | pip | requirements.txt | ✔ スコープは、ファイル名に `test` または `dev` が含まれる場合は開発、それ以外の場合はランタイム | | Python | pip | pipfile.lock | ✔ | | Python | pip | pipfile | ✔ | | Ruby | RubyGems | Gemfile |   ✔ | | Ruby | RubyGems | Gemfile.lock    | いいえ、既定でランタイム | | Rust | Cargo | Cargo.toml | ✔ | | Rust | Cargo | Cargo.lock | いいえ、既定でランタイム | | YAML | GitHub Actions | - | いいえ、既定でランタイム | | .NET (C#、F#、VB など) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | いいえ、既定でランタイム | | .NET | NuGet | packages.config | いいえ、既定でランタイム | | .NET | NuGet | .nuspec | ✔ タグがランタイムではないとき |
