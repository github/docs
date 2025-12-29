---
title: Workflow artifacts
intro: 'Learn about storing and sharing data as artifacts of {% data variables.product.prodname_actions %} workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Workflows
---

## About workflow artifacts

An artifact is a file or collection of files produced during a workflow run. Artifacts allow you to persist data after a job has completed, and share that data with another job in the same workflow. For example, you can use artifacts to save your build and test output after a workflow run has ended.

{% data variables.product.github %} provides two actions that you can use to upload and download build artifacts, {% ifversion fpt or ghec %}[upload-artifact](https://github.com/actions/upload-artifact) and [download-artifact](https://github.com/actions/download-artifact){% else %} `upload-artifact` and `download-artifact` on {% data variables.product.prodname_ghe_server %}{% endif %}.

Common artifacts include:

* Log files and core dumps
* Test results, failures, and screenshots
* Binary or compressed files
* Stress test performance output and code coverage results

{% data reusables.actions.comparing-artifacts-caching %}

For more information on dependency caching, see [AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching).

{% ifversion artifact-attestations %}

## Generating artifact attestations for builds

{% data reusables.actions.about-artifact-attestations %}

You can access attestations after a build run, underneath the list of the artifacts the build produced.

For more information, see [AUTOTITLE](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds).

{% endif %}

{% data reusables.actions.artifacts.artifacts-from-deleted-workflow-runs %}
