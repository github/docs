### Example 1: Three version update groups

In this example, the `dependabot.yml` file:
* Creates three groups, called "`production-dependencies`", "`development-dependencies`", and "`rubocop`".
* Uses `patterns` and `dependency-type` to include dependencies in the group.
* Uses `exclude-patterns` to exclude a dependency (or multiple dependencies) from the group.

```yaml
version: 2
updates:
  # Keep bundler dependencies up to date
  - package-ecosystem: "bundler"
    directory: "/"
    schedule:
      interval: "weekly"
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

As a result:
* Version updates are grouped by dependency type.
* Development dependencies matching the pattern `rubocop*` are excluded from the `development-dependencies` group.
* Instead, development dependencies matching `rubocop*` will be included in the `rubocop` group. Due to the ordering, production dependencies matching `rubocop*` will be included in the `production-dependencies` group.{% ifversion dependabot-grouped-security-updates-config %}
* In addition, all groups default to applying to version updates only, since the `applies-to` key is absent.{% endif %}

### Example 2: Grouped updates with excluded dependencies

In this example, the `dependabot.yml` file:
* Creates a group called "`support-dependencies`", as part of a customized Bundler configuration.
* Uses `patterns` that match with the name of a dependency (or multiple dependencies) to include dependencies in the group.
* Uses `exclude-patterns` that match with the name of a dependency (or multiple dependencies) to exclude dependencies from the group. {% ifversion dependabot-grouped-security-updates-config %}
* Applies the grouping to version updates only, since `applies-to: version-updates` is used.{% endif %}

```yaml
version: 2
updates:
  # Keep bundler dependencies up to date
  - package-ecosystem: "bundler"{% ifversion dependabot-updates-multidirectory-support %}
    directories:
      - "/frontend"
      - "/backend"
      - "/admin"{% else %}
    directory: "/"{% endif %}
    schedule:
      interval: "weekly"
    # Create a group of dependencies to be updated together in one pull request
    groups:
      # Specify a name for the group, which will be used in pull request titles
      # and branch names
      support-dependencies:
        # Define patterns to include dependencies in the group (based on
        # dependency name){% ifversion dependabot-grouped-security-updates-config %}
        applies-to: version-updates # Applies the group rule to version updates{%- endif %}
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

As a result:
* The majority of dependencies for bundler are consolidated into the `support-dependencies` group due to the wildcard ("*") pattern, apart from
* Dependencies that match `gc_ruboconfig` and `gocardless-*` are excluded from the group, and {% data variables.product.prodname_dependabot %} continues to raise single pull requests for these dependencies. This can be helpful if updates for these dependencies need to be reviewed with closer scrutiny.
* For `support-dependencies`, {% data variables.product.prodname_dependabot %} will only raise pull requests for version updates.

### Example 3: Individual pull requests for major updates and grouped for minor/patch updates

In this example, the `dependabot.yml` file:
* Creates a group called "`angular`".
* Uses `patterns` that match with the name of a dependency to include dependencies in the group.
* Uses `update-type` to only include `minor` or `patch` updates in the group.{% ifversion dependabot-grouped-security-updates-config %}
* Applies the grouping to version updates only, since `applies-to: version-updates` is used.{% endif %}

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      # Specify a name for the group, which will be used in pull request titles
      # and branch names
      angular:{% ifversion dependabot-grouped-security-updates-config %}
        applies-to: version-updates{%- endif %}
        patterns:
          - "@angular*"
        update-types:
          - "minor"
          - "patch"
```

As a result:
* {% data variables.product.prodname_dependabot %} will create a grouped pull request for all Angular dependencies that have a minor or patch update.
* All major updates will continue to be raised as individual pull requests.

### Example 4: Grouped pull requests for minor/patch updates and no pull requests for major updates

In this example, the `dependabot.yml` file:
* Creates two groups called "`angular`" and "`minor-and-patch`". {% ifversion dependabot-grouped-security-updates-config %}
* Uses `applies-to` so that the first group applies to version updates only, and the second group applies to security updates only.{% endif %}
* Uses `update-type` to only include `minor` or `patch` updates for both groups.
* Uses an `ignore` condition to exclude updates to `major` versions of `@angular*` packages.

```yaml
version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      angular:{% ifversion dependabot-grouped-security-updates-config %}
        applies-to: version-updates{%- endif %}
        patterns:
          - "@angular*"
        update-types:
          - "minor"
          - "patch"{% ifversion dependabot-grouped-security-updates-config %}
      minor-and-patch:
        applies-to: security-updates
        patterns:
          - "@angular*"
        update-types:
          - "patch"
          - "minor"{%- endif %}
    ignore:
      - dependency-name: "@angular*"
        update-types: ["version-update:semver-major"]
```

As a result:
* Minor and patch version updates for Angular dependencies are grouped into a single pull request.
* Minor and patch security updates for Angular dependencies are also grouped together into a single pull request.
* {% data variables.product.prodname_dependabot %} won't automatically open pull requests for major updates for Angular.
