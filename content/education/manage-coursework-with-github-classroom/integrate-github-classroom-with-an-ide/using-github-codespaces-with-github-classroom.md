---
title: Using GitHub Codespaces with GitHub Classroom
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: 'You can use {% data variables.product.prodname_github_codespaces %} as the preferred editor in your assignments to give students access to a browser-based Visual Studio Code environment with one-click setup.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
---
## About {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} is an instant, cloud-based development environment that uses a container to provide you with common languages, tools, and utilities for development. {% data variables.product.prodname_github_codespaces %} is also configurable, allowing you to create a customized development environment that is the same for all users of your project. For more information, see "[AUTOTITLE](/codespaces/overview)."

Once {% data variables.product.prodname_github_codespaces %} is enabled in an organization or enterprise, users can create a codespace from any branch or commit in an organization or enterprise repository and begin developing using cloud-based compute resources. You can connect to a codespace from the browser or locally using Visual Studio Code.

{% data reusables.codespaces.links-to-get-started %}

Setting {% data variables.product.prodname_github_codespaces %} as the preferred editor for an assignment in GitHub Classroom assignments, is beneficial for both students and teachers. {% data variables.product.prodname_github_codespaces %} is a good option for students using loaned devices or without access to a local IDE setup, since each codespace is cloud-based and requires no local setup. Students can launch a codespace for an assignment repository in Visual Studio Code directly in their browser, and begin developing right away without needing any further configuration.

For assignments with complex setup environments, teachers can customize the dev container configuration for a repository's codespaces. This ensures that when a student creates a codespace, it automatically opens with the development environment configured by the teacher. For more information on dev containers, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

{% note %}

**Note**: Individual codespaces are automatically deleted if they are stopped and left unused for a prolonged period. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)."

{% endnote %}

{% data reusables.education.student-codespaces-benefit %}

{% note %}

**Note:** {% data reusables.education.note-on-student-codespaces-usage %}

{% endnote %}

## About the {% data variables.product.prodname_codespaces %} Education benefit for verified teachers

The {% data variables.product.prodname_codespaces %} Education benefit gives verified teachers a free monthly allowance of {% data variables.product.prodname_github_codespaces %} hours to use in {% data variables.product.prodname_classroom %}. The free allowance is estimated to be enough for a class of 50 with 5 assignments per month, on a 2 core machine with 1 codespace stored per student.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

To become a verified teacher, you need to be approved for an educator or teacher benefit. For more information, see "[AUTOTITLE](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher)."

After you have confirmation that you are a verified teacher, visit [{% data variables.product.prodname_global_campus %} for Teachers](https://education.github.com/globalcampus/teacher) to upgrade the organization to GitHub Team. For more information, see [GitHub's products](/get-started/learning-about-github/githubs-plans#github-team).

If you are eligible for the {% data variables.product.prodname_codespaces %} Education benefit, when you enable {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_classroom %} for your organization, GitHub automatically adds a Codespace policy to restrict machine types for all codespaces in the organization to 2 core machines. This helps you make the most of the free {% data variables.product.prodname_github_codespaces %} usage. However, you can change or remove these policies in your organization settings. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

When the {% data variables.product.prodname_codespaces %} Education benefit moves out of beta, if your organization exceeds their free allowance for {% data variables.product.prodname_github_codespaces %} usage, your organization will be billed for additional usage. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

## Enabling {% data variables.product.prodname_codespaces %} for your organization

{% data variables.product.prodname_github_codespaces %} is available to use with {% data variables.product.prodname_classroom %} for organizations that use {% data variables.product.prodname_team %}. If you are eligible for the {% data variables.product.prodname_codespaces %} Education benefit, you must enable {% data variables.product.prodname_github_codespaces %} through {% data variables.product.prodname_classroom %}, instead of enabling it directly in your organization settings. Otherwise, your organization will be billed directly for all usage of {% data variables.product.prodname_github_codespaces %}.

### Enabling Codespaces for an organization when creating a new classroom

{% data reusables.classroom.sign-into-github-classroom %}
1. On the right side of the page, click **New classroom**.
1. In the list of organizations, click the organization you'd like to use for your classroom. Organizations that are eligible for {% data variables.product.prodname_github_codespaces %} will have a note showing that they are eligible. Optionally, you can create a new organization. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."
1. In the "Name your classroom" page, under "{% data variables.product.prodname_codespaces %} in your Classroom", click **Enable**. Note that this will enable {% data variables.product.prodname_github_codespaces %} for all repositories and users in the organization.
1. When you are ready to create the new classroom, click **Create classroom**.

### Enabling Codespaces for an organization via an existing classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Under "{% data variables.product.prodname_github_codespaces %}", click **Enable**. This will enable {% data variables.product.prodname_github_codespaces %} for all repositories and users in the organization. A new Codespace policy is also added to restrict machine types for all codespaces in the organization to 2 core machines.

You can use the same methods as above to disable {% data variables.product.prodname_github_codespaces %} for your organization as well. Note that this will disable {% data variables.product.prodname_github_codespaces %} for all users and repositories in the organization.

## Configuring an assignment to use {% data variables.product.prodname_codespaces %}

To make {% data variables.product.prodname_github_codespaces %} available to students for an assignment, you can choose {% data variables.product.prodname_github_codespaces %} as the supported editor for the assignment. When creating a new assignment, in the "Add your starter code and choose your optional online IDE" page, under "Add a supported editor", select **{% data variables.product.prodname_github_codespaces %}** from the dropdown menu.

If you use a template repository for an assignment, you can define a dev container in the repository to customize the tools and runtimes available to students when they launch a codespace to work on the assignment. If you do not define a dev container, {% data variables.product.prodname_github_codespaces %} will use a default configuration, which contains many of the common tools that your students might need for development. For more information on defining a dev container, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration)."

## Launching an assignment using {% data variables.product.prodname_github_codespaces %}

When a student opens an assignment, the repository's README file includes their teacher's recommendation of the IDE they should use for the work.

Students can launch a new or existing codespace by clicking the **Open in GitHub Codespace** button in the README, or by clicking the **{% octicon "code" aria-hidden="true" %} Code** button on the main page of the assignment repository, then selecting the **Codespaces** tab. From the **Codespaces** tab you can select an existing codespace or create a new one. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

![Screenshot of the assignment repository. The "Code" dropdown menu to launch a new codespace is expanded.](/assets/images/help/classroom/student-launch-new-codespace.png)

Teachers can view each student's codespace for an assignment in the assignment overview page. You can click on the Codespaces icon on the right side of each student row to launch the codespace.

![Screenshot of the assignment overview. The Codespaces icon is outlined in dark orange.](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

When you connect to a codespace through a browser, auto-save is enabled automatically. If you want to save changes to the repository, you will need to commit the changes and push them to a remote branch. If you leave your codespace running without interaction for 30 minutes by default, the codespace will timeout and stop running. Your data will be preserved from the last time you made a change. For more information on the lifecycle of a codespace, see "[AUTOTITLE](/codespaces/getting-started/the-codespace-lifecycle)."
