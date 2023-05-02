---
title: Using conditions to control job execution
shortTitle: Use conditions to control job execution
intro: Prevent a job from running unless your conditions are met.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

{% note %}

**Note:** A job that is skipped will report its status as "Success". It will not prevent a pull request from merging, even if it is a required check.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

On a skipped job, you should see "This check was skipped."

{% note %}

**Note:** In some parts of the workflow you cannot use environment variables. Instead you can use contexts to access the value of an environment variable. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables#using-the-env-context-to-access-environment-variable-values)."

{% endnote %}
