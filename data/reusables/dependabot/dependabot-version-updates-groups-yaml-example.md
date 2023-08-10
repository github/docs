```yaml
# `dependabot.yml` file with customized bundler configuration

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