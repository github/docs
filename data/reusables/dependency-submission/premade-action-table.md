Ecosystem | Action |
--- | --- |
Go | [Go Dependency Submission](https://github.com/marketplace/actions/go-dependency-submission) | {% octicon "check" aria-label="Maintained by {% data variables.product.prodname_dotcom %} |
Gradle | [Gradle Dependency Submission](https://github.com/marketplace/actions/build-with-gradle#the-dependency-submission-action) |
Maven | [Maven Dependency Tree Dependency Submission](https://github.com/marketplace/actions/maven-dependency-tree-dependency-submission) |
Mill | [Mill Dependency Submission](https://github.com/marketplace/actions/mill-dependency-submission) |
Mix (Elixir) | [Mix Dependency Submission](https://github.com/marketplace/actions/mix-dependency-submission) |
Scala | [Sbt Dependency Submission](https://github.com/marketplace/actions/sbt-dependency-submission) |
NuGet and others | [Component Detection dependency submission action](https://github.com/marketplace/actions/component-detection-dependency-submission-action) |

> [!NOTE]
> For the Component Detection dependency submission action, other supported ecosystems include Vcpkg, Conan, Conda, Crates, as well as NuGet.

For example, the following [Go Dependency Submission](https://github.com/actions/go-dependency-submission) workflow calculates the dependencies for a Go build-target (a Go file with a `main` function) and submits the list to the {% data variables.dependency-submission-api.name %}.

```yaml
name: Go Dependency Submission
on:
  push:
    branches:
      - main

# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Environment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}

      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"

      - name: Run snapshot action
        uses: actions/go-dependency-submission@v2
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go
```
