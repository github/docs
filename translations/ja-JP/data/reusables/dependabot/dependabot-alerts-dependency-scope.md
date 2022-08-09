以下の表は、依存関係のスコープが様々なエコシステム及びマニフェストでサポートされているか、すなわち{% data variables.product.prodname_dependabot %}が依存関係が開発もしくは実働で利用されているかを特定できるかをまとめたものです。

| **言語**            |   **エコシステム**   |            **マニフェストファイル**            | **依存関係スコープがサポートされているか**                              |
|:----------------- |:--------------:|:------------------------------------:|:---------------------------------------------------- |
| Go                |    Goモジュール     |                go.mod                | いいえ。デフォルトはランタイム                                      |
| Go                |    Goモジュール     |                go.sum                | いいえ。デフォルトはランタイム                                      |
| Java              |     Maven      |               pom.xml                | ✔ `test`は開発にマップされ、そうでなければスコープはデフォルトでランタイム            |
| JavaScript        |      npm       |             package.json             | ✔                                                    |
| JavaScript        |      npm       |          package-lock.json           | ✔                                                    |
| JavaScript        |    yarn v1     |              yarn.lock               | いいえ。デフォルトはランタイム                                      |
| PHP               |    Composer    |            composer.json             | ✔                                                    |
| PHP               |    Composer    |            composer.lock             | ✔                                                    |
| Python            |     Poetry     |             poetry.lock              | ✔                                                    |
| Python            |     Poetry     |            pyproject.toml            | ✔                                                    |
| Python            |      pip       |           requirements.txt           | ✔ スコープは、ファイル名に`test`あるいは`dev`が含まれていれば開発、そうでなければランタイム |
| Python            |      pip       |             pipfile.lock             | ✔                                                    |
| Python            |      pip       |               pipfile                | ✔                                                    |
| Ruby              |    RubyGems    |               Gemfile                | ✔                                                    |
| Ruby              |    RubyGems    |             Gemfile.lock             | いいえ。デフォルトはランタイム                                      |
| Rust              |     Cargo      |              Cargo.toml              | ✔                                                    |
| Rust              |     Cargo      |              Cargo.lock              | いいえ。デフォルトはランタイム                                      |
| YAML              | GitHub Actions |                  -                   | いいえ。デフォルトはランタイム                                      |
| .NET (C#、F#、VBなど) |     NuGet      | .csproj / .vbproj .vcxproj / .fsproj | いいえ。デフォルトはランタイム                                      |
| .NET              |     NuGet      |           packages.config            | いいえ。デフォルトはランタイム                                      |
| .NET              |     NuGet      |               .nuspec                | ✔ tag != runtimeの場合                                  |
