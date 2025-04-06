#### Example 1

The `dependabot.yml` file configuration uses `patterns` and `dependency-type` options to include specific dependencies in the group, and `exclude-patterns` to exclude a dependency (or multiple dependencies) from the group.{% ifversion dependabot-grouped-security-updates-config %} The grouping rule defaults to applying to version updates only, since the `applies-to` key is absent.{% endif %}

```yaml
# `dependabot.yml` file using the `dependency-type` option to group updates
# in conjunction with `patterns` and `exclude-patterns`.
{% ifversion dependabot-grouped-security-updates-config %}# Grouping rules default to applying to version updates only, since
# the `applies-to` key is absent.{%- endif %}

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

#### Example 2

A `dependabot.yml` file with a customized Bundler configuration, which has been modified to create a group of dependencies. The configuration specifies `patterns` (strings of characters) that match with the name of a dependency (or multiple dependencies) in order to include the dependencies in the group.{% ifversion dependabot-grouped-security-updates-config %} The grouping rule applies to version updates only, since `applies-to: version-updates` is used.{% endif %}

```yaml
# `dependabot.yml` file with customized Bundler configuration
# In this example, the name of the group is `dev-dependencies`, and
# only the `patterns` and `exclude-patterns` options are used.
{% ifversion dependabot-grouped-security-updates-config %}# Grouping rules apply to version updates only.{%- endif %}

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
       dev-dependencies:
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

#### Example 3

The `dependabot.yml` file is configured so that any packages matching the pattern `@angular*` where the highest resolvable version is `minor` or `patch` will be grouped together. {% data variables.product.prodname_dependabot %} will create a separate pull request for any package that doesn't match the pattern, or that doesn't update to a `minor` or `patch` version.{% ifversion dependabot-grouped-security-updates-config %} The grouping rule applies to version updates only, since `applies-to: version-updates` is used.{% endif %}

```yaml
# `dependabot.yml` file using the `update-types` option to group updates.
# Any packages matching the pattern @angular* where the highest resolvable
# version is minor or patch will be grouped together.
{% ifversion dependabot-grouped-security-updates-config %}# Grouping rules apply to version updates only.{%- endif %}

version: 2
updates:
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
        - "patch"
```

#### Example 4

The `dependabot.yml` file uses an `ignore` condition to exclude updates to `major` versions of `@angular*` packages.{% ifversion dependabot-grouped-security-updates-config %} Two grouping rules are specified, one for version updates and one for security updates.{% endif %}

```yaml
# `dependabot.yml` file using the `update-types` option to group updates
# in conjunction with an `ignore` condition. If you do not want updates
# to `major` versions of `@angular*` packages, you can specify an `ignore` condition.
{% ifversion dependabot-grouped-security-updates-config %}# Grouping rules for both version updates and security updates are specified.{%- endif %}

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
