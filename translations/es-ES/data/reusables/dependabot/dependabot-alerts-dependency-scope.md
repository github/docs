The table below summarizes whether dependency scope is supported for various ecosystems and manifests, that is, whether {% data variables.product.prodname_dependabot %} can identify if a dependency is used for development or production.

| **Lenguaje**            | **Ecosistema** |          **Manifest file**           | **Dependency scope supported**                                                      |
|:----------------------- |:--------------:|:------------------------------------:|:----------------------------------------------------------------------------------- |
| Go                      | Módulos de Go  |                go.mod                | No, defaults to runtime                                                             |
| Go                      | Módulos de Go  |                go.sum                | No, se predetermina al tiempo de ejecución                                          |
| Java                    |     Maven      |               pom.xml                | ✔ `test` maps to development, else scope defaults to runtime                        |
| JavaScript              |      npm       |             package.json             | ✔                                                                                   |
| JavaScript              |      npm       |          package-lock.json           | ✔                                                                                   |
| JavaScript              |    yarn v1     |              yarn.lock               | No, se predetermina al tiempo de ejecución                                          |
| PHP                     |    Composer    |            composer.json             | ✔                                                                                   |
| PHP                     |    Composer    |            composer.lock             | ✔                                                                                   |
| Python                  |     Poetry     |             poetry.lock              | ✔                                                                                   |
| Python                  |     Poetry     |            pyproject.toml            | ✔                                                                                   |
| Python                  |      pip       |           requirements.txt           | ✔ Scope is development if the filename contains `test` or `dev`, else it is runtime |
| Python                  |      pip       |             pipfile.lock             | ✔                                                                                   |
| Python                  |      pip       |               pipfile                | ✔                                                                                   |
| Ruby                    |    RubyGems    |               Gemfile                | ✔                                                                                   |
| Ruby                    |    RubyGems    |             Gemfile.lock             | No, se predetermina al tiempo de ejecución                                          |
| Rust                    |     Cargo      |              Cargo.toml              | ✔                                                                                   |
| Rust                    |     Cargo      |              Cargo.lock              | No, se predetermina al tiempo de ejecución                                          |
| YAML                    | GitHub Actions |                  -                   | No, se predetermina al tiempo de ejecución                                          |
| .NET (C#, F#, VB, etc.) |     NuGet      | .csproj / .vbproj .vcxproj / .fsproj | No, se predetermina al tiempo de ejecución                                          |
| .NET                    |     NuGet      |           packages.config            | No, se predetermina al tiempo de ejecución                                          |
| .NET                    |     NuGet      |               .nuspec                | ✔ When the tag != runtime                                                           |
