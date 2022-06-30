The table below summarizes whether dependency scope is supported for various ecosystems and manifests, that is, whether {% data variables.product.prodname_dependabot %} can identify if a dependency is used for development or production.

| **Language** | **Ecosystem** | **Manifest file** | **Dependency scope supported** |
|:---|:---:|:---:|:---|
| Go | Go modules | go.mod | No, defaults to runtime |
| Go | Go modules |	go.sum | No, defaults to runtime |
| Java | Maven | pom.xml | ✔ `test` maps to development, else scope defaults to runtime |
| JavaScript | npm | package.json | ✔ |
| JavaScript | npm | package-lock.json | ✔ |
| JavaScript |	yarn v1 | yarn.lock | No, defaults to runtime |
| PHP | Composer | composer.json | ✔ |
| PHP | Composer | composer.lock | ✔ |
| Python | Poetry | poetry.lock | ✔ |
| Python | Poetry | pyproject.toml | ✔ |
| Python | pip | requirements.txt | ✔ Scope is development if the filename contains `test` or `dev`, else it is runtime |
| Python | pip | pipfile.lock | ✔ |
| Python | pip | pipfile | ✔ |
| Ruby | RubyGems | Gemfile |	✔ |
| Ruby | RubyGems | Gemfile.lock	| No, defaults to runtime |
| Rust | Cargo | Cargo.toml | ✔ |
| Rust | Cargo | Cargo.lock | No, defaults to runtime |
| YAML | GitHub Actions | - | No, defaults to runtime |
| .NET (C#, F#, VB, etc.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | No, defaults to runtime |
| .NET | NuGet | packages.config | No, defaults to runtime |
| .NET | NuGet | .nuspec | ✔ When the tag != runtime |
