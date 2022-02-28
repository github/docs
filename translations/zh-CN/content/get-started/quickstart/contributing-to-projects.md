---
title: 参与项目
intro: Learn how to contribute to a project through forking.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
---

## About forking

After using GitHub by yourself for a while, you may find yourself wanting to contribute to someone else’s project. Or maybe you’d like to use someone’s project as the starting point for your own. This process is known as forking.

Creating a "fork" is producing a personal copy of someone else's project. Forks act as a sort of bridge between the original repository and your personal copy. You can submit pull requests to help make other people's projects better by offering your changes up to the original project. Forking is at the core of social coding at GitHub. 更多信息请参阅“[复刻仓库](/get-started/quickstart/fork-a-repo)”。

## 复刻仓库

This tutorial uses [the Spoon-Knife project](https://github.com/octocat/Spoon-Knife), a test repository that's hosted on {% data variables.product.prodname_dotcom_the_website %} that lets you test the fork and pull request workflow.

1. Navigate to the `Spoon-Knife` project at https://github.com/octocat/Spoon-Knife.
2. Click **Fork**. ![复刻按钮](/assets/images/help/repository/fork_button.jpg)
1. {% data variables.product.product_name %} will take you to your copy (your fork) of the Spoon-Knife repository.

## Cloning a fork

You've successfully forked the Spoon-Knife repository, but so far, it only exists on {% data variables.product.product_name %}. To be able to work on the project, you will need to clone it to your computer.

You can clone your fork with the command line, {% data variables.product.prodname_cli %}, or {% data variables.product.prodname_desktop %}.

{% webui %}

1. 在 {% data variables.product.product_name %} 上，导航到 Spoon-Knife 仓库的**复刻**。
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. 键入 `git clone`，然后粘贴先前复制的 URL。 它将如下所示，使用您的 {% data variables.product.product_name %} 用户名替换 `YOUR-USERNAME`：
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. 按 **Enter** 键。 将创建您的本地克隆。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要创建复刻的克隆，请使用 `--clone` 标记。

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## Making and pushing changes

Go ahead and make a few changes to the project using your favorite text editor, like [Atom](https://atom.io). You could, for example, change the text in `index.html` to add your GitHub username.

When you're ready to submit your changes, stage and commit your changes. `git add .` tells Git that you want to include all of your changes in the next commit. `git commit` takes a snapshot of those changes.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

For more information about how to stage and commit changes in {% data variables.product.prodname_desktop %}, see "[Committing and reviewing changes to your project](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)."

{% enddesktop %}

When you stage and commit files, you essentially tell Git, "Okay, take a snapshot of my changes!" You can continue to make more changes, and take more commit snapshots.

Right now, your changes only exist locally. When you're ready to push your changes up to {% data variables.product.product_name %}, push your changes to the remote.

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

For more information about how to push changes in {% data variables.product.prodname_desktop %}, see "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)."

{% enddesktop %}

## Making a pull request

At last, you're ready to propose changes into the main project! This is the final step in producing a fork of someone else's project, and arguably the most important. If you've made a change that you feel would benefit the community as a whole, you should definitely consider contributing back.

To do so, head on over to the repository on {% data variables.product.product_name %} where your project lives. For this example, it would be at `https://www.github.com/<your_username>/Spoon-Knife`. You'll see a banner indicating that your branch is one commit ahead of `octocat:main`. Click **Contribute** and then **Open a pull request**.

{% data variables.product.product_name %} will bring you to a page that shows the differences between your fork and the `octocat/Spoon-Knife` repository. 单击 **Create pull request（创建拉取请求）**。

{% data variables.product.product_name %} will bring you to a page where you can enter a title and a description of your changes. It's important to provide as much useful information and a rationale for why you're making this pull request in the first place. The project owner needs to be able to determine whether your change is as useful to everyone as you think it is. Finally, click **Create pull request**.

## Managing feedback

Pull Requests are an area for discussion. In this case, the Octocat is very busy, and probably won't merge your changes. For other projects, don't be offended if the project owner rejects your pull request, or asks for more information on why it's been made. It may even be that the project owner chooses not to merge your pull request, and that's totally okay. Your copy will exist in infamy on the Internet. And who knows--maybe someone you've never met will find your changes much more valuable than the original project.

## Finding projects

You've successfully forked and contributed back to a repository. Go forth, and contribute some more!{% ifversion fpt %} For more information, see "[Finding ways to contribute to open source on GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}
