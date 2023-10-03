The table below summarizes whether dependency scope is supported for various ecosystems and manifests, that is, whether {% data variables.product.prodname_dependabot %} can identify if a dependency is used for development or production.

| **Language** | **Ecosystem** | **Manifest file** | **Dependency scope supported** |
|:---|:---:|:---:|:---|
{%- ifversion dependency-graph-dart-support %}
| Dart | pub | pubspec.yaml |  {% octicon "check" aria-label="Supported" %} |
| Dart | pub | pubspec.lock |  {% octicon "check" aria-label="Supported" %} |
{%- endif %}
| Go | Go modules | go.mod | No, defaults to runtime |
{%- ifversion ghes < 3.9 or ghae < 3.9 %}
| Go | Go modules | go.sum | No, defaults to runtime |
{%- endif %}
| Java | Maven | pom.xml | {% octicon "check" aria-label="Supported" %} `test` maps to development, else scope defaults to runtime |
| JavaScript | npm | package.json | {% octicon "check" aria-label="Supported" %} |
| JavaScript | npm | package-lock.json | {% octicon "check" aria-label="Supported" %} |
{%- ifversion dependabot-dependency-graph-pnpm %}
| JavaScript | npm | pnpm-lock.yaml | {% octicon "check" aria-label="Supported" %} |
{%- endif %}
| JavaScript |	yarn v1 | yarn.lock | No, defaults to runtime |
| PHP | Composer | composer.json | {% octicon "check" aria-label="Supported" %} |
| PHP | Composer | composer.lock | {% octicon "check" aria-label="Supported" %} |
| Python | Poetry | poetry.lock | {% octicon "check" aria-label="Supported" %} |
| Python | Poetry | pyproject.toml | {% octicon "check" aria-label="Supported" %} |
| Python | pip | requirements.txt | {% octicon "check" aria-label="Supported" %} Scope is development if the filename contains `test` or `dev`, else it is runtime |
| Python | pip | pipfile.lock | {% octicon "check" aria-label="Supported" %} |
| Python | pip | pipfile | {% octicon "check" aria-label="Supported" %} |
| Ruby | RubyGems | Gemfile |	{% octicon "check" aria-label="Supported" %} |
| Ruby | RubyGems | Gemfile.lock	| No, defaults to runtime |
| Rust | Cargo | Cargo.toml | {% octicon "check" aria-label="Supported" %} |
| Rust | Cargo | Cargo.lock | No, defaults to runtime |
| YAML | GitHub Actions | - | No, defaults to runtime |
| .NET (C#, F#, VB, etc.) | NuGet | .csproj / .vbproj .vcxproj / .fsproj | No, defaults to runtime |
| .NET | NuGet | packages.config | No, defaults to runtime |
| .NET | NuGet | .nuspec | {% octicon "check" aria-label="Supported" %} When the tag != runtime |
