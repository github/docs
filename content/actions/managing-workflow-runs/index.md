---
title: Managing workflow runs
shortTitle: Managing workflow runs
intro: 'You can view the status and results of each step in your workflow, cancel a pending workflow, {% ifversion fpt or ghes > 3.0 or ghae %}review deployments, {% endif %}view billable job execution minutes, debug and re-run a failed workflow, search and download logs, and download artifacts.'
redirect_from:
  - /actions/configuring-and-managing-workflows/managing-a-workflow-run
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/configuring-and-managing-workflows/configuring-and-managing-workflow-files-and-runs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
children:
  - /using-the-visualization-graph
  - /viewing-workflow-run-history
  - /using-workflow-run-logs
  - /manually-running-a-workflow
  - /re-running-a-workflow
  - /canceling-a-workflow
  - /approving-workflow-runs-from-public-forks
  - /reviewing-deployments
  - /disabling-and-enabling-a-workflow
  - /deleting-a-workflow-run
  - /viewing-job-execution-time
  - /downloading-workflow-artifacts
  - /removing-workflow-artifacts
  - /enabling-debug-logging
  - /adding-a-workflow-status-badge
---
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% ifversion fpt or ghes > 3.0 or ghae %}{% endif %}
