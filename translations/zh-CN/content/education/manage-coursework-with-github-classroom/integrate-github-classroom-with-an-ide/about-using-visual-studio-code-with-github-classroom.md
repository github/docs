---
title: 关于将 Visual Studio Code 与 GitHub Classroom 配合使用
shortTitle: 关于使用 Visual Studio Code
intro: '您可以将 Visual Studio Code 配置为 {% data variables.product.prodname_classroom %} 中任务的首选编辑器。'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---

## 关于 Visual Studio Code

Visual Studio Code 是一个轻量级但功能强大的源代码编辑器，可在桌面上运行，适用于 Windows、macOS 和 Linux。 借助 [Visual Studio Code 的 GitHub Classroom 扩展](https://aka.ms/classroom-vscode-ext)，学生可以轻松浏览、编辑、提交、协作和测试他们的课堂作业。 有关 IDE 和 {% data variables.product.prodname_classroom %} 的更多信息，请参阅“[集成 {% data variables.product.prodname_classroom %} 与 IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)”。

### 您学生的首选编辑器
GitHub Classroom 与 Visual Studio Code 的集成为学生提供了一个扩展包，其中包含：

1. [GitHub Classroom Extension](https://aka.ms/classroom-vscode-ext) with custom abstractions that make it easy for students to navigate getting started.
2. [Visual Studio Live Share Extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) integrating into a student view for easy access to teaching assistants and classmates for help and collaboration.
3. [GitHub Pull Request Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) allowing students to see feedback from their instructors within the editor.

### How to launch the assignment in Visual Studio Code
When creating an assignment, Visual Studio Code can be added as the preferred editor for an assignment. For more details, see "[Integrate {% data variables.product.prodname_classroom %} with an IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)."

This will include an "Open in Visual Studio Code" badge in all student repositories. This badge handles installing Visual Studio Code, the Classroom extension pack, and opening to the active assignment with one click.

{% note %}

**Note:** The student must have Git installed on their computer to push code from Visual Studio Code to their repository. This is not automatically installed when clicking the **Open in Visual Studio Code** button. The student can download Git from [here](https://git-scm.com/downloads).

{% endnote %}

### How to use GitHub Classroom extension pack
The GitHub Classroom extension has two major components: the 'Classrooms' view and the 'Active Assignment' view.

When the student launches the extension for the first time, they are automatically navigated to the Explorer tab in Visual Studio Code, where they can see the "Active Assignment" view alongside the tree-view of files in the repository.

![GitHub Classroom Active Assignment View](/assets/images/help/classroom/vs-code-active-assignment.png)

The student can push their commits to the latest version of remote, by clicking the **sync changes** button, displayed when hovering over the "Active Assignment" line. This abstracts away source control with Git, allowing instructors to teach Git at their own pace. Synching changes also triggers "Tests" to run if a teacher has configured autograding for their assignment.

The "Group" node under "Active Assignment" will show members of a group, if the assignment is a group project. It will also show the admin members of the repository who can help when a student is stuck. To collaborate on the project, a student can start a Live Share session with anyone in the group node, and they will immediately share the entire context of the repository with them. You can learn more about Live Share and collaborating with it [here](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Once a student is done with the assignment, they can also navigate to see other Assignments and Classrooms. These can be found under the GitHub tab.
