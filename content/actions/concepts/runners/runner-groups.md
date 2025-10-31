---
title: Runner groups
intro: 'Learn about what a runner group is, and how to use them to control access to runners at the organization{% ifversion ghec or ghes %} and/or enterprise levels{% else %} level.{% endif %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /actions/concepts/runners/about-runner-groups
---

## About runner groups

{% data reusables.actions.about-runner-groups %}

## Next steps

{% ifversion fpt or ghec %}To learn how to use runner groups to control access to larger runners, see [AUTOTITLE](/actions/how-tos/using-larger-runners/controlling-access-to-larger-runners).{% endif %}

For information on how to route jobs to runners in a specific group, see [AUTOTITLE](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group).
