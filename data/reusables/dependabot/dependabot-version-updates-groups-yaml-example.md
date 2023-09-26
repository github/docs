```yaml
# `dependabot.yml` file using the `dependency-type` option to group updates
# in conjunction with `patterns` and `exclude-patterns`.

groups:
  production-dependencies:
    dependency-type: "production"
  development-dependencies:
    dependency-type: "development"
    exclude-patterns:
    - "rubocop*"
  rubocop:
    patterns:
    - "rubocop*"
```

```yaml
# `dependabot.yml` file with customized bundler configuration
# In this example, the name of the group is `dev-dependencies`, and
# only the `patterns` and `exclude-patterns` options are used.
version: 2
updates:
  # Keep bundler dependencies up to date
  - package-ecosystem: "bundler"
    directory: "/"
    schedule:
      interval: "weekly"
    # Create a group of dependencies to be updated together in one pull request
    groups:
       # Specify a name for the group, which will be used in pull request titles
       # and branch names
       dev-dependencies:
          # Define patterns to include dependencies in the group (based on
          # dependency name)
          patterns:
            - "rubocop" # A single dependency name
            - "rspec*"  # A wildcard string that matches multiple dependency names
            - "*"       # A wildcard that matches all dependencies in the package
                        # ecosystem. Note: using "*" may open a large pull request
          # Define patterns to exclude dependencies from the group (based on
          # dependency name)
          exclude-patterns:
            - "gc_ruboconfig"
            - "gocardless-*"
```

```yaml
# `dependabot.yml` file using the `update-types` option to group updates.
# Any packages matching the pattern @angular* where the highest resolvable
# version is minor or patch will be grouped together.
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      angular:
        patterns:
        - "@angular*"
        update-types:
        - "minor"
        - "patch"
```

```yaml
# `dependabot.yml` file using the `update-types` option to group updates
# in conjunction with an `ignore` condition.
# If you do not want updates to `major` versions of `@angular*` packages, you can specify an `ignore` condition
groups:
  angular:
    patterns:
    - "@angular*"
    update-types:
    - "minor"
    - "patch"
ignore:
  - dependency-name: "@angular*"
    update-types: ["version-update:semver-major"]
```
