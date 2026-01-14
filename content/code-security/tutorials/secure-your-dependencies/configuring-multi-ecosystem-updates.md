---
title: Configuring multi-ecosystem updates for Dependabot
intro: Learn how to configure {% data variables.product.prodname_dependabot %} to group updates across different ecosystems so that you receive a single, consolidated pull request per group instead of one pull request for each ecosystem.
permissions: '{% data reusables.permissions.dependabot-yml-configure %}'
allowTitleToDifferFromFilename: true
contentType: tutorials
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.19'
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure multi-ecosystem updates
redirect_from:
  - /code-security/dependabot/working-with-dependabot/configuring-multi-ecosystem-updates
---

## About multi-ecosystem updates

Multi-ecosystem updates allow you to create groups that span multiple package ecosystems and get a single {% data variables.product.prodname_dependabot %} pull request with updates across all supported ecosystems.  This approach helps reduce the number of {% data variables.product.prodname_dependabot %} pull requests you receive and streamlines your dependency update workflow.

Multi-ecosystem updates are particularly useful for:

* **Infrastructure projects** that use multiple technologies (Docker, Terraform, Python scripts).
* **Full-stack applications** with frontend and backend dependencies that should be updated together.
* **Cross-platform libraries** that need synchronized protocol versions across languages.

## Getting Started

You should follow these instructions to set up your first multi-ecosystem group.

### 1. Add `multi-ecosystem-groups` to your `.github/dependabot.yml` file

Start by defining a group with a schedule in the top-level `multi-ecosystem-groups` section:

```yaml copy
version: 2

multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"

updates:
  # Your existing package ecosystems will go here
```

### 2. Assign ecosystems to groups with patterns

1. Add the `multi-ecosystem-group` key.
1. Add `patterns` to your package ecosystem configurations.

```yaml copy
version: 2

multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"

updates:
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis", "postgres"]
    multi-ecosystem-group: "infrastructure"

  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws", "terraform-*"]
    multi-ecosystem-group: "infrastructure"
```

> [!IMPORTANT]
> The `patterns` key is required when using `multi-ecosystem-group`. You can specify dependency patterns to include only certain dependencies in the group, or use `["*"]` to include all dependencies.

### 3. Commit and watch for consolidated pull requests

Once you commit the changes to your `dependabot.yml` file, {% data variables.product.prodname_dependabot %} will:

* Check for updates according to the group's schedule
* Check for updates according to the group's schedule.
* Create a single pull request containing updates for all the ecosystems specified in the group.
* Use the group identifier in the branch name and the pull request title.

### 4. Customize with additional keys (optional)

Add [`assignees`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#assignees--), [`labels`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#labels--), and other settings to your groups:

```yaml copy
multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"
    assignees: ["@platform-team"]
    labels: ["infrastructure", "dependencies"]

updates:
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis", "postgres"]
    multi-ecosystem-group: "infrastructure"

  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws", "terraform-*"]
    multi-ecosystem-group: "infrastructure"
```

## Multi-ecosystem specific configuration

Multi-ecosystem updates use a two-level configuration structure to provide flexibility and control over how updates are grouped and managed:

* **Group-level** (`multi-ecosystem-groups`): This is where you define the overall group behavior, scheduling, and shared settings that apply to all package ecosystems in the group.
* **Ecosystem-level** (`updates`): Configure individual package managers within the group, including which dependencies to include and ecosystem-specific settings.

This structure allows you to set consistent policies at the group level while maintaining fine-grained control over individual package ecosystems.

### `multi-ecosystem-groups`

Define groups that span multiple package ecosystems. Each group requires:

* **Group identifier**: Used in branch names and pull request titles.
* **Schedule**: How often to check for updates. See [schedule](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#schedule-) for all available options.

### `multi-ecosystem-group`

Assign a package ecosystem to a multi-ecosystem group. Requires the `patterns` key to specify which dependencies to include.

For more information about `patterns`, see [`patterns` and `exclude-patterns`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#patterns-and-exclude-patterns-groups).

### Additional configuration options

All standard {% data variables.product.prodname_dependabot %} configuration options can be used with multi-ecosystem groups. See [`package-ecosystem`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#package-ecosystem-), [`directory`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#directories-or-directory--), [`allow`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#allow--), [`ignore`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#ignore--), [`cooldown`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#cooldown-), and [`registries`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#registries--) in [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference).

## Key configuration

When using multi-ecosystem groups, keys are configured at two levels. Here's a complete breakdown of which keys can be used where:

### Group-level (`multi-ecosystem-groups`)

The following table shows the configuration keys available at the group level, along with their behavior types. For more information, see [Configuration behavior](#configuration-behavior).

| Key              | Required | Behavior |
|---------------------|:--------:|:----------------|
| [`schedule`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#schedule-) |{% octicon "check" aria-label="Required" %}| Not applicable |
| [`labels`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#labels--) |{% octicon "x" aria-label="Not required" %}| Additive |
| [`milestone`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#milestone--)         | {% octicon "x" aria-label="Not required" %} | Group-only |
| [`assignees`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#assignees--) |{% octicon "x" aria-label="Not required" %} |Additive |
| [`target-branch`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#target-branch-) |{% octicon "x" aria-label="Not required" %} |Group-only |
| [`commit-message`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#commit-message--) |{% octicon "x" aria-label="Not required" %} |Group-only |
| [`pull-request-branch-name`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#pull-request-branch-nameseparator--) |{% octicon "x" aria-label="Not required" %} |Group-only |

### Ecosystem-level (`updates`)

The following table shows the configuration keys available at the ecosystem level, along with their behavior types. For more information, see [Configuration behavior](#configuration-behavior).

| Key              | Required | Behavior |
|---------------------|:--------:|:----------------|
| [`package-ecosystem`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#package-ecosystem-) |{% octicon "check" aria-label="Required" %}| Not applicable |
| [`directory` / `directories`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#directories-or-directory--) |{% octicon "check" aria-label="Required" %}| Not applicable |
| [`patterns`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#patterns-and-exclude-patterns-groups) |{% octicon "check" aria-label="Required" %}| Not applicable |
| [`allow`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#allow--) |{% octicon "x" aria-label="Not required" %}| Not applicable |
| [`ignore`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#ignore--) |{% octicon "x" aria-label="Not required" %}| Not applicable |
| [`registries`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#registries--) |{% octicon "x" aria-label="Not required" %}| Not applicable |
| [`vendor`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#vendor--) |{% octicon "x" aria-label="Not required" %}| Not applicable |
| [`versioning-strategy`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#versioning-strategy--) |{% octicon "x" aria-label="Not required" %}| Not applicable |
| [`update-types`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#update-types-groups) |{% octicon "x" aria-label="Not required" %}| Not applicable |
| [`cooldown`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#cooldown-) |{% octicon "x" aria-label="Not required" %}| Not applicable |
| [`labels`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#labels--)        | {% octicon "x" aria-label="Not required" %} | Additive |
| [`assignees`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#assignees--) |{% octicon "x" aria-label="Not required" %} |Additive |

### Configuration behavior

#### Additive keys

Additive keys merge values from both the group level and individual ecosystem level rather than one overriding the other. This allows you to set consistent team-wide configurations at the group level while adding specific ecosystem expertise at the individual level.

* `assignees` - All assignees from both group and ecosystem levels are assigned
* `labels` - All labels from both group and ecosystem levels are applied

This table shows how {% data variables.product.prodname_dependabot %} combines values from both group and ecosystem levels for Docker pull requests in the example below:

| Option   | Group-level value                          | Ecosystem-level value         | Result                                |
|-----------|------------------------------------- |-------------------------|--------------------------------------------------------------|
| `assignees` | `@platform-team`, `@security-lead`   | `@docker-admin`         | `@platform-team`, `@security-lead`, `@docker-admin`           |
| `labels`    | `infrastructure`, `dependencies`     | `docker`, `containers`  | `infrastructure`, `dependencies`, `docker`, `containers`      |

```yaml copy
multi-ecosystem-groups:
  infrastructure:
    assignees: ["@platform-team", "@security-lead"]
    labels: ["infrastructure", "dependencies"]

updates:
  - package-ecosystem: "docker"
    assignees: ["@docker-admin"]
    labels: ["docker", "containers"]
    multi-ecosystem-group: "infrastructure"
```

#### Group-only keys

* `milestone` - Integer milestone number
* `commit-message` - Commit message templates
* `target-branch` - Target branch for pull requests
* `pull-request-branch-name` - Branch naming configuration

> [!WARNING]
> If you attempt to set group-only keys at the ecosystem level (in `updates` entries), {% data variables.product.prodname_dependabot %} will throw a configuration error and fail to process your `dependabot.yml` file. These keys must only be specified in the `multi-ecosystem-groups` section.

**Example:**

This table shows how {% data variables.product.prodname_dependabot %} combines values from both group and ecosystem levels for Docker pull requests in the example below:

| Option   | Group-level value         | Ecosystem-level value         | Result         |
|-----------|---------------------|-------------------------|----------------------------------------|
| `assignees` | `@platform-team`    | `@docker-admin`         | `@platform-team`, `@docker-admin`      |
| `labels`    | `infrastructure`    | `docker`, `containers`  | `infrastructure`, `docker`, `containers`|

```yaml copy
multi-ecosystem-groups:
  infrastructure:
    assignees: ["@platform-team"]
    labels: ["infrastructure"]

updates:
  - package-ecosystem: "docker"
    assignees: ["@docker-admin"]
    labels: ["docker", "containers"]
    multi-ecosystem-group: "infrastructure"
```

## Use cases and examples

Multi-ecosystem updates are particularly useful for projects that use multiple package managers and want to coordinate updates across them. Here are common scenarios:

### Infrastructure projects

**Scenario**: Your infrastructure code uses multiple technologies - Docker containers, Terraform for cloud resources, and Python scripts for automation. You want all infrastructure-related updates grouped together for easier review and deployment coordination.

**Why group these together**: Infrastructure changes often need to be deployed together, and having separate PRs for each technology creates coordination overhead.

```yaml copy
multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"  # Weekly updates to avoid disruption

updates:
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis", "postgres"]
    multi-ecosystem-group: "infrastructure"
  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws", "terraform-*"]
    multi-ecosystem-group: "infrastructure"
  - package-ecosystem: "pip"
    directory: "/"
    patterns: ["boto3", "requests", "pyyaml"]
    multi-ecosystem-group: "infrastructure"
```

**Result**: One weekly pull request containing updates for Docker images, Terraform providers, and Python dependencies used in infrastructure automation.

### Full-stack applications

**Scenario**: You have a web application with a React frontend and Rails backend. You want frontend and backend dependencies updated together to ensure compatibility and streamline testing.

**Why group these together**: Frontend and backend often depend on each other, and updating them together ensures you can test the full application stack in one go.

```yaml copy
multi-ecosystem-groups:
  app-dependencies:
    schedule:
      interval: "daily"  # More frequent updates for application code

updates:
  - package-ecosystem: "npm"
    directory: "/frontend"
    patterns: ["react", "lodash", "@types/*"]  # Core frontend libraries and TypeScript types
    multi-ecosystem-group: "app-dependencies"
  - package-ecosystem: "bundler"
    directory: "/backend"
    patterns: ["rails", "pg", "sidekiq"]  # Core backend framework and database
    multi-ecosystem-group: "app-dependencies"
```

**Result**: Daily PRs containing both frontend JavaScript/TypeScript updates and backend Ruby gem updates, allowing you to test the complete application together.

### Cross-platform libraries

**Scenario**: You're building a library or service that uses the same protocols across different languages (like gRPC and Protocol Buffers). You want to keep the library versions synchronized across all implementations.

**Why group these together**: Protocol libraries need to stay compatible across different language implementations, so updating them together prevents version mismatches.

```yaml copy
multi-ecosystem-groups:
  grpc-and-protobuf:
    schedule:
      interval: "daily"

updates:
  - package-ecosystem: "bundler"
    directory: "/grpc-proto-test/"
    patterns: ["grpc", "google-protobuf"]
    multi-ecosystem-group: "grpc-and-protobuf"
  - package-ecosystem: "npm"
    directory: "/grpc-proto-test/"
    patterns: ["@grpc/grpc-js", "google-protobuf"]
    multi-ecosystem-group: "grpc-and-protobuf"
```

**Result**: Daily PRs ensuring that Ruby and Node.js gRPC libraries stay synchronized, preventing protocol compatibility issues.

## Advanced configuration example

This comprehensive example shows how a complex project might use multiple groups with different update strategies and key merging:

```yaml copy
version: 2

multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"
    assignees: ["@platform-team"]           # assign platform team
    labels: ["infrastructure", "dependencies"]
    milestone: 10                           # Track in milestone
    commit-message:
      prefix: "infra"
      include: "scope"

  # Application code updates - daily, with development team
  full-stack:
    schedule:
      interval: "daily"
    assignees: ["@full-stack-team"]         # assign to full-stack team
    labels: ["full-stack"]

updates:
  # Docker images - infrastructure group with additional docker expertise
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis", "postgres"]
    assignees: ["@docker-admin"]            # adds to @platform-team (additive)
    labels: ["docker"]                      # adds to infrastructure, dependencies (additive)
    multi-ecosystem-group: "infrastructure"

  # Terraform - infrastructure group with terraform specialists
  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws", "terraform-*"]
    multi-ecosystem-group: "infrastructure"

  # Frontend - full-stack group with frontend focus
  - package-ecosystem: "npm"
    directory: "/frontend"
    patterns: ["react", "lodash", "@types/*"]
    labels: ["frontend"]                    # adds to full-stack (additive)
    multi-ecosystem-group: "full-stack"

  # Backend - full-stack group with backend specialist
  - package-ecosystem: "bundler"
    directory: "/backend"
    patterns: ["rails", "pg", "sidekiq"]
    assignees: ["@backend-dev"]             # adds to @full-stack-team (additive)
    multi-ecosystem-group: "full-stack"
```

### How this configuration works

#### Infrastructure PRs

* `schedule: weekly`

| Option| Group-level value | Ecosystem-level value | Result |
|---------|------------|-----------------|--------|
| `assignees` | `@platform-team` | `@docker-admin` (Docker), `@terraform-experts` (Terraform) | All combined |
| `labels` | `infrastructure`, `dependencies` | `docker` (Docker) | All combined |
| `schedule` | `weekly` | None | Weekly updates |
| `milestone` | `10` | None | Tracked in milestone 10 |

#### Full-stack PRs

* `schedule: daily`

| Option | Group-level value | Ecosystem-level value | Result |
|---------|------------|-----------------|--------|
| `assignees` | `@full-stack-team` | `@backend-dev` (Backend) | All combined |
| `labels` | `full-stack` | `frontend` (Frontend) | All combined |
| `schedule` | `daily` | None | More frequent updates |

This approach ensures that the right people are involved for each type of update while maintaining consistent policies across related technologies.

## Best practices

* **Group related dependencies**: Only group ecosystems that logically belong together.
* **Use descriptive identifiers**: Choose group names that clearly indicate the group's purpose.

### Further reading

* [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference)
