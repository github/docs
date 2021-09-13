---
title: Managing workflow runs
shortTitle: Managing workflow runs
intro: 'You can re-run or cancel a workflow, {% ifversion fpt or ghes > 3.0 or ghae %}review deployments, {% endif %}view billable job execution minutes, and download artifacts.'
redirect_from:
  - /actions/configuring-and-managing-workflows/managing-a-workflow-run
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/configuring-and-managing-workflows/configuring-and-managing-workflow-files-and-runs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
children:
  - /manually-running-a-workflow
  - /re-running-a-workflow
  - /canceling-a-workflow
  - /approving-workflow-runs-from-public-forks
  - /reviewing-deployments
  - /disabling-and-enabling-a-workflow
  - /deleting-a-workflow-run
  - /downloading-workflow-artifacts
  - /removing-workflow-artifacts
---
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% ifversion fpt or ghes > 3.0 or ghae %}{% endif %}
