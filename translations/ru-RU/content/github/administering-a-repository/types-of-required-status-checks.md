---
title: Types of required status checks
intro: You can set up required status checks to either be "loose" or "strict." The type of required status check you choose determines whether your branch is required to be up to date with the base branch before merging.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/types-of-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

| Type of required status check | Setting                                                                               | Merge requirements                                                                 | Considerations                                                                                                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Strict**                    | The **Require branches to be up-to-date before merging** checkbox is checked.         | The branch **must** be up to date with the base branch before merging.             | This is the default behavior for required status checks. More builds may be required, as you'll need to bring the head branch up to date after other collaborators merge pull requests to the protected base branch.                               |
| **Loose**                     | The **Require branches to be up-to-date before merging** checkbox is **not** checked. | The branch **does not** have to be up to date with the base branch before merging. | You'll have fewer required builds, as you won't need to bring the head branch up to date after other collaborators merge pull requests. Status checks may fail after you merge your branch if there are incompatible changes with the base branch. |
| **Disabled**                  | The **Require status checks to pass before merging** checkbox is **not** checked.     | The branch has no merge restrictions.                                              | If required status checks aren't enabled, collaborators can merge the branch at any time, regardless of whether it is up to date with the base branch. This increases the possibility of incompatible changes.                                     |

### Дополнительная литература

- "[About required status checks](/articles/about-required-status-checks)"
- "[Enabling required status checks](/articles/enabling-required-status-checks)"
