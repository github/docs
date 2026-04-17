---
title: How the dependency graph recognizes dependencies
intro: 'The dependency graph automatically analyzes manifest files. You can submit data for dependencies that cannot be detected automatically.'
product: '{% data reusables.gated-features.dependency-graph %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Dependency graph data
contentType: concepts
category:
  - Secure your dependencies
---

The dependency graph can identify your project's dependencies using the following methods.

| Method | How it works |
| ------ | ------------ |
| **Static analysis** | Parses manifest and lock files in your repository |
| {% ifversion fpt or ghec %} |
| **{% data variables.product.prodname_dependabot %} graph jobs** | Uses a {% data variables.product.prodname_dependabot %} {% data variables.product.prodname_actions %} workflow to generate dependency snapshots |
| {% endif %} |
| {% ifversion maven-transitive-dependencies %} |
| **Automatic submission** | Runs a built-in {% data variables.product.prodname_actions %} workflow to resolve build-time dependencies |
| {% endif %}
| **{% data variables.dependency-submission-api.name_caps %}** | Accepts dependency data you submit programmatically |

Once dependencies are in the graph, you can receive {% data variables.product.prodname_dependabot_alerts %} and {% data variables.product.prodname_dependabot_security_updates %} for any known vulnerabilities.

## Static analysis

When you enable the dependency graph, {% data variables.product.github %} scans your repository for supported manifest files and parses each package's name and version. The graph updates when you change a supported manifest or lock file on your default branch{% ifversion fpt or ghec %}, or when a dependency changes in its own repository{% endif %}.

Static analysis can identify:

* **Direct dependencies** explicitly defined in a manifest or lock file
* **Indirect dependencies**—dependencies of these direct dependencies, also called "transitive dependencies"—but only if they are defined in a manifest or lock file, not if they are resolved at build time

For the most reliable graph, you should use lock files (or their equivalent), because they define exactly which versions of the direct and indirect dependencies you currently use. Lock files also ensure that all contributors to the repository are using the same versions, which will make it easier for you to test and debug code.{% ifversion fpt or ghec %} In addition, indirect dependencies inferred from manifest files (rather than lock files) are excluded from vulnerability checks.{% endif %}

{% ifversion maven-transitive-dependencies %}

## Automatic dependency submission

Some ecosystems resolve indirect dependencies at build time, so static analysis can't see the full dependency tree. When you enable automatic dependency submission for a repository, {% data variables.product.company_short %} automatically identifies the transitive dependencies in the repository for supported ecosystems. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems).

In the background, automatic dependency submission runs a {% data variables.product.prodname_actions %} workflow that generates the complete tree and uploads it using the {% data variables.dependency-submission-api.name %}.{% ifversion fpt or ghec %} Automatic dependency submission runs on {% data variables.product.github %}-hosted runners by default and counts toward your {% data variables.product.prodname_actions %} minutes. Optionally, you can choose to run it on self-hosted runners or {% data variables.actions.hosted_runners %}.{% endif %}

To enable automatic dependency submission, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository).

{% endif %}

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_dependabot %} graph jobs

This method uses a special type of {% data variables.product.prodname_dependabot %} job that builds a dependency snapshot and uploads it to the dependency submission API. This is currently only supported for **Go** dependencies.

This approach is similar to automatic dependency submission, but does not incur charges for {% data variables.product.prodname_actions %} minutes. It can also access organization-wide configurations for private registries you've set up for {% data variables.product.prodname_dependabot %}.

{% endif %}

## The {% data variables.dependency-submission-api.name %}

You can call the {% data variables.dependency-submission-api.name %} in your own script or workflow. This is useful if:

* You need to submit transitive dependencies that cannot be detected from lock files.
* You need to create custom logic or are using an external CI/CD system.

Dependencies are submitted to the {% data variables.dependency-submission-api.name %} in the form of a snapshot. This is a list of dependencies associated with a commit SHA and other metadata, reflecting the current state of your repository.

If you are calling the API in a {% data variables.product.prodname_actions %} workflow, you can use a pre-made action for your ecosystem that automatically gathers the dependencies and submits them to the API. Otherwise, you can write your own action or call the API from an external system.

{% data reusables.dependency-submission.about-dependency-submission %}

For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

## Prioritization

{% data reusables.dependency-graph.deduplication %}
