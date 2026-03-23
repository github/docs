---
title: Multi-ecosystem updates
intro: Multi-ecosystem updates combine dependency updates across multiple package ecosystems into a single pull request, reducing review overhead and simplifying your update workflow.
contentType: concepts
versions:
  feature: dependabot-multi-ecosystem-support
shortTitle: Multi-ecosystem updates
---

## What are multi-ecosystem updates?

Multi-ecosystem updates allow {% data variables.product.prodname_dependabot %} to group dependency updates across different package ecosystems such as npm, Docker, Python, and Terraform into a single pull request per group.

Instead of receiving separate pull requests for each ecosystem, you receive one consolidated pull request containing all updates for the ecosystems in that group.

## How multi-ecosystem updates work

When you configure a multi-ecosystem group:

1. You define the group with a schedule in the `multi-ecosystem-groups` section of your `dependabot.yml` file.
1. You assign individual package ecosystems to the group using the `multi-ecosystem-group` key.
1. You specify which dependencies to include using the `patterns` key for each ecosystem.
1. {% data variables.product.prodname_dependabot %} checks for updates according to the group's schedule.
1. A single pull request is created containing updates from all ecosystems in the group.
1. The PR uses the group identifier in both the branch name and title.

## When to use multi-ecosystem updates

Multi-ecosystem updates are particularly useful for:

* **Infrastructure projects** that use multiple technologies (Docker, Terraform, Python scripts)
* **Full-stack applications** with frontend and backend dependencies that should be updated together
* **Cross-platform libraries** that need synchronized protocol versions across languages
* **Monorepos** with services in different languages that share versioning

## Multi-ecosystem versus single-ecosystem groups

{% data variables.product.prodname_dependabot %} supports two types of grouping:

**Multi-ecosystem groups:**
* Span multiple `package-ecosystem` entries in your `dependabot.yml` file
* Require the `patterns` key to specify which dependencies to include
* Have their own schedule defined in the `multi-ecosystem-groups` section
* Use the `multi-ecosystem-group` key to assign ecosystems to a group

**Single-ecosystem groups:**
* Work within one package ecosystem
* Use the `groups` key within an `updates` entry
* Inherit the schedule from the parent `updates` entry
* Better for organizing dependencies within a single package manager

Use multi-ecosystem groups when you want to combine updates across different package managers. Use single-ecosystem groups when you want to organize dependencies within a single package manager (for example, grouping all AWS-related npm packages together).

### Configuration merging behavior

Some configuration options can be set at both the group level and ecosystem level. {% data variables.product.prodname_dependabot %} combines these values differently depending on the option:

**Additive options** (values are merged):
* `assignees` - All assignees from both levels are assigned to the pull request
* `labels` - All labels from both levels are applied to the pull request

For example, if you assign `@platform-team` at the group level and `@docker-admin` at the Docker ecosystem level, the resulting pull request will be assigned to both `@platform-team` and `@docker-admin`.

**Group-only options** (can only be set at group level):
* `milestone`
* `commit-message`
* `target-branch`
* `pull-request-branch-name`

Attempting to set these options at the ecosystem level will cause a configuration error.

For a complete reference of all available configuration options and their behavior, see [AUTOTITLE](/code-security/reference/supply-chain-security/dependabot-options-reference#multi-ecosystem-groups).

## Use cases

### Infrastructure projects

Infrastructure code often uses multiple technologies—Docker containers, Terraform for cloud resources, and Python scripts for automation. Grouping these updates together simplifies review and deployment coordination.

**Why group these together:** Infrastructure changes often need to be deployed together. Having separate PRs for each technology creates coordination overhead and makes it harder to track what needs to be deployed as a unit.

**Example scenario:** You have Docker images for your services, Terraform modules for AWS resources, and Python scripts for automation tasks. A single weekly "infrastructure" pull request contains updates for all three, making it easier to review and deploy infrastructure changes together.

### Full-stack applications

Web applications with frontend and backend components benefit from updating dependencies together to ensure compatibility and streamline testing.

**Why group these together:** Frontend and backend often depend on each other. Updating them together ensures you can test the full application stack in one go, rather than merging frontend changes and then discovering backend incompatibilities later.

**Example scenario:** Your React frontend and Rails backend are updated daily in a single "app-dependencies" pull request, allowing you to test the complete application together before merging.

### Cross-platform libraries

Libraries or services that use the same protocols across different languages (like gRPC and Protocol Buffers) need to keep library versions synchronized across all implementations.

**Why group these together:** Protocol libraries need to stay compatible across different language implementations. Updating them together prevents version mismatches that could cause communication failures between services.

**Example scenario:** Your Node.js and Ruby services both use gRPC. A single pull request updates both `@grpc/grpc-js` (npm) and `grpc` (bundler) together, ensuring protocol compatibility.

### Monorepos with multiple services

Large repositories containing multiple services in different languages benefit from grouping updates by team responsibility or deployment cadence.

**Why group these together:** Different teams own different parts of the monorepo, and updates should be routed to the appropriate reviewers. Or services are deployed together and need coordinated updates.

**Example scenario:** Your monorepo has a Python API service, a Go worker service, and a Node.js frontend. You create separate groups for "backend-services" (Python + Go) and "frontend" (Node.js), each with different schedules and assignees.

## Example: Complex multi-group configuration

This example shows how a complex project might use multiple groups with different update strategies:

```yaml copy
version: 2

multi-ecosystem-groups:
  # Infrastructure updates - weekly, tracked in milestone
  infrastructure:
    schedule:
      interval: "weekly"
    assignees: ["@platform-team"]
    labels: ["infrastructure", "dependencies"]
    milestone: 10

  # Application code updates - daily, with development team
  full-stack:
    schedule:
      interval: "daily"
    assignees: ["@full-stack-team"]
    labels: ["full-stack"]

updates:
  # Docker images - infrastructure group with additional docker expertise
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis", "postgres"]
    assignees: ["@docker-admin"]      # Adds to @platform-team
    labels: ["docker"]                 # Adds to infrastructure, dependencies
    multi-ecosystem-group: "infrastructure"

  # Terraform - infrastructure group
  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws", "terraform-*"]
    multi-ecosystem-group: "infrastructure"

  # Frontend - full-stack group with frontend focus
  - package-ecosystem: "npm"
    directory: "/frontend"
    patterns: ["react", "lodash", "@types/*"]
    labels: ["frontend"]               # Adds to full-stack
    multi-ecosystem-group: "full-stack"

  # Backend - full-stack group with backend specialist
  - package-ecosystem: "bundler"
    directory: "/backend"
    patterns: ["rails", "pg", "sidekiq"]
    assignees: ["@backend-dev"]        # Adds to @full-stack-team
    multi-ecosystem-group: "full-stack"
```

## Next steps

* [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-multi-ecosystem-updates)