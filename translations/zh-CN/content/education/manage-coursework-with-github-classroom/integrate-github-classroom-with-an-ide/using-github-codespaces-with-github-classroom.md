---
title: Using GitHub Codespaces with GitHub Classroom
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: 'You can use {% data variables.product.prodname_github_codespaces %} as the preferred editor in your assignments to give students access to a browser-based Visual Studio Code environment with one-click setup.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
---
## About {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_github_codespaces %} is an instant, cloud-based development environment that uses a container to provide you with common languages, tools, and utilities for development. {% data variables.product.prodname_codespaces %} is also configurable, allowing you to create a customized development environment that is the same for all users of your project. For more information, see "[{% data variables.product.prodname_github_codespaces %} overview](/codespaces/overview)."

Once {% data variables.product.prodname_codespaces %} is enabled in an organization or enterprise, users can create a codespace from any branch or commit in an organization or enterprise repository and begin developing using cloud-based compute resources. You can connect to a codespace from the browser or locally using Visual Studio Code. {% data reusables.codespaces.links-to-get-started %}

Setting {% data variables.product.prodname_codespaces %} as the preferred editor for an assignment in GitHub Classroom assignments, is beneficial for both students and teachers. {% data variables.product.prodname_codespaces %} is a good option for students using loaned devices or without access to a local IDE setup, since each codespace is cloud-based and requires no local setup. Students can launch a codespace for an assignment repository in Visual Studio Code directly in their browser, and begin developing right away without needing any further configuration.  

For assignments with complex setup environments, teachers can customize the dev container configuration for a repository's codespaces. This ensures that when a student creates a codespace, it automatically opens with the development environment configured by the teacher. For more information on dev containers, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)."

## About the {% data variables.product.prodname_codespaces %} Education benefit for verified teachers

The {% data variables.product.prodname_codespaces %} Education benefit gives verified teachers a free monthly allowance of {% data variables.product.prodname_codespaces %} hours to use in {% data variables.product.prodname_classroom %}. The free allowance is estimated to be enough for a class of 50 with 5 assignments per month, on a 2 core machine with 1 codespace stored per student.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

To become a verified teacher, you need to be approved for an educator or teacher benefit. For more information, see "[Applying for an educator or teacher benefit](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount#applying-for-an-educator-or-researcher-discount)." 

After you have confirmation that you are a verified teacher, visit [{% data variables.product.prodname_global_campus %} for Teachers](https://education.github.com/globalcampus/teacher) to upgrade the organization to GitHub Team. For more information, see [GitHub's products](/get-started/learning-about-github/githubs-products#github-team). 

If you are eligible for the {% data variables.product.prodname_codespaces %} Education benefit, when you enable {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_classroom %} for your organization, GitHub automatically adds a Codespace policy to restrict machine types for all codespaces in the organization to 2 core machines. This helps you make the most of the free {% data variables.product.prodname_codespaces %} usage. However, you can change or remove these policies in your organization settings. For more information, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

When the {% data variables.product.prodname_codespaces %} Education benefit moves out of beta, if your organization exceeds their free allowance for {% data variables.product.prodname_codespaces %} usage, your organization will be billed for additional usage. For more information, see "[About billing for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#about-billing-for-codespaces)."

## Enabling {% data variables.product.prodname_codespaces %} for your organization

{% data variables.product.prodname_codespaces %} is available to use with {% data variables.product.prodname_classroom %} for organizations that use {% data variables.product.prodname_team %}. If you are eligible for the {% data variables.product.prodname_codespaces %} Education benefit, you must enable {% data variables.product.prodname_codespaces %} through {% data variables.product.prodname_classroom %}, instead of enabling it directly in your organization settings. Otherwise, your organization will be billed directly for all usage of {% data variables.product.prodname_codespaces %}.

### Enabling Codespaces for an organization when creating a new classroom
{% data reusables.classroom.sign-into-github-classroom %}
1. Click **New classroom**.
   
  !["New classroom" button](/assets/images/help/classroom/click-new-classroom-button.png)

1. In the list of organizations, click the organization you'd like to use for your classroom. Organizations that are eligible for {% data variables.product.prodname_codespaces %} will have a note showing that they are eligible. Optionally, you can create a new organization. For more information, see "[Creating a new organization from scratch](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

  ![Choose organization for classroom with codespaces eligibility](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. In the "Name your classroom" page, under "{% data variables.product.prodname_codespaces %} in your Classroom", click **Enable**. Note that this will enable {% data variables.product.prodname_codespaces %} for all repositories and users in the organization.

  ![Enable Codespaces for org in "Setup classroom basics" page](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. When you are ready to create the new classroom, click **Create classroom**.

### Enabling Codespaces for an organization via an existing classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Under "{% data variables.product.prodname_github_codespaces %}", click **Enable**. This will enable {% data variables.product.prodname_codespaces %} for all repositories and users in the organization. A new Codespace policy is also added to restrict machine types for all codespaces in the organization to 2 core machines. 
  
  ![Enable Codespaces for org in existing classroom settings](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

You can use the same methods as above to disable {% data variables.product.prodname_codespaces %} for your organization as well. Note that this will disable {% data variables.product.prodname_codespaces %} for all users and repositories in the organization. 

## Configuring an assignment to use {% data variables.product.prodname_codespaces %}
To make {% data variables.product.prodname_codespaces %} available to students for an assignment, you can choose {% data variables.product.prodname_codespaces %} as the supported editor for the assignment. When creating a new assignment, in the "Add your starter code and choose your optional online IDE" page, under "Add a supported editor", select **{% data variables.product.prodname_github_codespaces %}** from the dropdown menu. 

![Select Codespaces as supported editor for assignment](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

If you use a template repository for an assignment, you can define a dev container in the repository to customize the tools and runtimes available to students when they launch a codespace to work on the assignment. If you do not define a dev container, {% data variables.product.prodname_github_codespaces %} will use a default configuration, which contains many of the common tools that your students might need for development. For more information on defining a dev container, see "[Add a dev container configuration to your repository](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)."

## Launching an assignment using {% data variables.product.prodname_codespaces %}

When a student opens an assignment, the repository's README file includes their teacher's recommendation of the IDE they should use for the work.

![Screenshot of the Codespaces note in the README for a student assignment repository](/assets/images/help/classroom/student-codespaces-readme-link.png)

Students can launch a new or existing codespace by clicking the **{% octicon "code" aria-label="The code icon" %} Code** button on the main page of the assignment repository, then selecting the **Codespaces** tab. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)."

![Launch new codespace in assignment repository](/assets/images/help/classroom/student-launch-new-codespace.png)

Teachers can view each student's codespace for an assignment in the assignment overview page. You can click on the Codespaces icon on the right side of each student row to launch the codespace. 

![Teacher assignment overview with student's codespaces](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

When you connect to a codespace through a browser, auto-save is enabled automatically. If you want to save changes to the repository, you will need to commit the changes and push them to a remote branch. If you leave your codespace running without interaction for 30 minutes by default, the codespace will timeout and stop running. Your data will be preserved from the last time you made a change. For more information on the lifecycle of a codespace, see "[Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)."
