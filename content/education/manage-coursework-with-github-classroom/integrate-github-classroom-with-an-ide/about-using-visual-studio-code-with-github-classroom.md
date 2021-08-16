---
title: About using Visual Studio Code with GitHub Classroom
shortTitle: About using Visual Studio Code
intro: 'You can configure Visual Studio Code as the preferred editor for assignments in {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---
## About Visual Studio Code

Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. With the [GitHub Classroom extension for Visual Studio Code](https://aka.ms/classroom-vscode-ext), students can easily browse, edit, submit, collaborate, and test their Classroom Assignments. For more information about IDEs and {% data variables.product.prodname_classroom %}, see "[Integrate {% data variables.product.prodname_classroom %} with an IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)."

### Your student's editor of choice 
The GitHub Classroom integration with Visual Studio Code provides students with an extension pack which contains:

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

The student can push their commits to the latest version of remote, by clicking the **sync changes** button, displayed when hovering over the "Active Assignment" line. This abstracts away source control with Git, allowing instructors to teach Git at their own pace.
Synching changes also triggers "Tests" to run if a teacher has configured autograding for their assignment.

The "Group" node under "Active Assignment" will show members of a group, if the assignment is a group project. It will also show the admin members of the repository who can help when a student is stuck. To collaborate on the project, a student can start a Live Share session with anyone in the group node, and they will immediately share the entire context of the repository with them. You can learn more about Live Share and collaborating with it [here](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Once a student is done with the assignment, they can also navigate to see other Assignments and Classrooms. These can be found under the GitHub tab.
