---
title: Re-running a workflow
intro: You can re-run an instance of a workflow. Re-running a workflow uses the same `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) of the original event that triggered the workflow run.
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

{{ site.data.reusables.repositories.permissions-statement-read }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
{{ site.data.reusables.repositories.navigate-to-workflow }}
{{ site.data.reusables.repositories.view-run }}
1. In the upper-right corner of the workflow, use the **Re-run jobs** drop-down menu, and select **Re-run all jobs**.
  ![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png)
