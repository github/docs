---Build-agent version 1.0.84087-bb1f3d6a (2021-09-03T12:32:56+0000)
System information:
 Server Version: 20.10.7
 Storage Driver: overlay2
  Backing Filesystem: xfs
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Kernel Version: 4.15.0-1106-aws
 Operating System: Ubuntu 18.04.5 LTS
 OSType: linux
 Architecture: x86_64

Starting container circleci/welcome-config-image:0.2.1
circleci/welcome-config-image:0.2.1:
  using image circleci/welcome-config-image@sha256:c6040d4817fb7bc397d1695a1d20afe871d6b8448169031cedd25006df906df1
  pull stats: Image was already available so the image was not pulled
  time to create container: 87ms
Warning: No authentication provided, using CircleCI credentials for pulls from Docker Hub.
  image is cached as circleci/welcome-config-image:0.2.1, but refreshing...
0.2.1: Pulling from circleci/welcome-config-image
Digest: sha256:c6040d4817fb7bc397d1695a1d20afe871d6b8448169031cedd25006df906df1
Status: Image is up to date for circleci/welcome-config-image:0.2.1
Time to upload agent and config: 736.244278ms
Time to start containers: 980.702157ms
title: Reverting a commit
intro: You can revert a specific commit to remove its changes from your branch.
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
---
When you revert to a previous commit, the revert is also a commit. The original commit also remains in the repository's history.

{% tip %}

**Tip:** When you revert multiple commits, it's best to revert in order from newest to oldest. If you revert commits in a different order, you may see merge conflicts.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![The Revert option above the diff view](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![The Revert option above the diff view](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
