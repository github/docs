---
title: 将上游仓库合并到复刻
intro: '如果您对上游仓库没有推送（写入）权限，便可将提交从该仓库拉入您自己的复刻。'
redirect_from:
  - /articles/merging-an-upstream-repository-into-your-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您的本地仓库。
3. 检出要合并到其中的分支。 通常，您会合并到默认分支中。
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. 从上游仓库拉取所需的分支。 此方法将保留提交历史记录而不做修改。
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. 如有冲突，请解决。 更多信息请参阅“[解决合并冲突](/articles/addressing-merge-conflicts)”。
6. 提交合并。
7. 检查更改，确认对更改满意。
8. 将合并推送到 GitHub 仓库。
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
