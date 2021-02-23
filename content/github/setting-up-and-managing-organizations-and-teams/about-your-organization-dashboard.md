---⁴
title: About your organization dashboard
intro: 'As an organization member, you can visit your organization''s dashboard throughout the day to stay updated on recent activity and keep track of issues and pull requests you''re working on or following in the organization.'
redirect_from:
  - /articles/about-your-organization-dashboard
versions:
  free-pro-team: '*'
  enterprise-server: *GitHub Docs

GitHub Actions  Quickstart for GitHub Actions
Quickstart for GitHub Actions
Add a GitHub Actions workflow to an existing repository in 5 minutes or less.

In this article
Introduction
'#'##Run::Creating your first workflow
Viewing your workflow results
More workflow templates
Next steps
Introduction
You only need an existing GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that lints multiple coding languages using the GitHub Super-Linter action. The workflow uses Super-Linter to validate your source code every time a new commit is pushed to your repository.

Creating your first workflow
From your repository on GitHub, create a new file in the .github/workflows directory named superlinter.yml. For more information, see "Creating new files."

Copy the following YAML contents into the superlinter.yml file. Note: If your default branch is not main, update the value of DEFAULT_BRANCH to match your repository's default branch name.

YAML
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
To run your workflow, scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.

Commit workflow file
Committing the workflow file in your repository triggers the push event and runs your workflow.

Viewing your workflow results
On GitHub, navigate to the main page of the repository.

Under your repository name, click Actions.

Actions tab in the main repository navigation
In the left sidebar, click the workflow you want to see.

Workflow list in left sidebar
From the list of workflow runs, click the name of the run you want to see.

Name of workflow run
Under Jobs or in the visualization graph, click the Lint code base job.

Lint code base job
Any failed steps are automatically expanded to display the results.

Super linter workflow results
More workflow templates
GitHub provides preconfigured workflow templates that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI templates that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use workflow templates as a starting place to build your custom workflow or use them as-is.

You can browse the full list of workflow templates in the actions/starter-workflows repository.

Next steps
The super-linter workflow you just added runs any time code is pushed to your repository to help you spot errors and inconsistencies in your code. But, this is only the beginning of what you can do with GitHub Actions. Your repository can contain multiple workflows that trigger different jobs based on different events. GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:

"Learn GitHub Actions" for an in-depth tutorial
"Guides" for specific uses cases and examples
github/super-linter for more details about configuring the Super-Linter action
Did this doc help you?
Privacy policy

 

Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Or, learn how to contribute.

Still need help?
 
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
Developer API
Training
About*
  github-ae: '*'
---

### Accessing your organization dashboard

{% data reusables.dashboard.access-org-dashboard %}

### Finding your recent activity

In the "Recent activity" section of your news feed, you can quickly find and follow up with recently updated issues and pull requests in your organization.

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Finding repositories in your organization

In the left sidebar of your dashboard, you can access your organization's top repositories you're active in.

![List of repositories you're most active in from your organization](/assets/images/help/dashboard/repositories-from-organization-dashboard.png)

### Staying updated with activity from the organization

In the "All activity" section of your news feed, you can view updates from other teams and repositories in your organization.

The "All activity" section shows all recent activity in the organization, including activity in repositories you're not subscribed to and of people you're not following. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}"[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Watching and unwatching repositories](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories){% endif %}" and "[Following people](/articles/following-people)."

For instance, the organization news feed shows updates when someone in the organization:
 - Creates a new branch.
 - Comments on an issue or pull request.
 - Submits a pull request review comment.
 - Forks a repository.
 - Creates a wiki page.
 - Pushes commits.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
 - Creates a public repository.{% endif %}

###:Build::Return::'#' Further information

- "[About your personal dashboard](/articles/about-your-personal-dashboard)"
