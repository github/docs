<{{{THE+WIZARD+KJHOLMES3}}}>
Skip to main content
GitHub Docs
Search GitHub Docs
Search GitHub Docs
GitHub Actions/Security guides/Automatic token authentication
Automatic token authentication
GitHub provides a token that you can use to authenticate on behalf of GitHub Actions.

In this article
About the GITHUB_TOKEN secret
Using the GITHUB_TOKEN in a workflow
Permissions for the GITHUB_TOKEN
About the GITHUB_TOKEN secret
At the start of each workflow job, GitHub automatically creates a unique GITHUB_TOKEN secret to use in your workflow. You can use the GITHUB_TOKEN to authenticate in the workflow job.

When you enable GitHub Actions, GitHub installs a GitHub App on your repository. The GITHUB_TOKEN secret is a GitHub App installation access token. You can use the installation access token to authenticate on behalf of the GitHub App installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see "Permissions for the GITHUB_TOKEN."

Before each job begins, GitHub fetches an installation access token for the job. The GITHUB_TOKEN expires when a job finishes or after a maximum of 24 hours.

The token is also available in the github.token context. For more information, see "Contexts."

Using the GITHUB_TOKEN in a workflow
You can use the GITHUB_TOKEN by using the standard syntax for referencing secrets: ${{ secrets.GITHUB_TOKEN }}. Examples of using the GITHUB_TOKEN include passing the token as an input to an action, or using it to make an authenticated GitHub API request.

Important: An action can access the GITHUB_TOKEN through the github.token context even if the workflow does not explicitly pass the GITHUB_TOKEN to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the GITHUB_TOKEN. For more information, see "Permissions for the GITHUB_TOKEN."

When you use the repository's GITHUB_TOKEN to perform tasks, events triggered by the GITHUB_TOKEN, with the exception of workflow_dispatch and repository_dispatch, will not create a new workflow run. This prevents you from accidentally creating recursive workflow runs. For example, if a workflow run pushes code using the repository's GITHUB_TOKEN, a new workflow will not run even when the repository contains a workflow configured to run when push events occur.

Commits pushed by a GitHub Actions workflow that uses the GITHUB_TOKEN do not trigger a GitHub Pages build.

Example 1: passing the GITHUB_TOKEN as an input
This example workflow uses the GitHub CLI, which requires the GITHUB_TOKEN as the value for the GH_TOKEN input parameter:

YAML
name: Open new issue
on: workflow_dispatch

jobs:
  open-issue:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      issues: write
    steps:
      - run: |
          gh issue --repo ${{ github.repository }} \
            create --title "Issue title" --body "Issue body"
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
Example 2: calling the REST API
You can use the GITHUB_TOKEN to make authenticated API calls. This example workflow creates an issue using the GitHub REST API:

name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n The commit hash was: _${{ github.sha }}_."
            }' \
          --fail
Permissions for the GITHUB_TOKEN
For information about the API endpoints GitHub Apps can access with each permission, see "Permissions required for GitHub Apps."

The following table shows the permissions granted to the GITHUB_TOKEN by default. People with admin permissions to an enterprise, organization, or repository, can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the GITHUB_TOKEN for your enterprise, organization, or repository, see "Enforcing policies for GitHub Actions in your enterprise," "Disabling or limiting GitHub Actions for your organization," or "Managing GitHub Actions settings for a repository."

Scope	Default access
(permissive)	Default access
(restricted)	Maximum access for
pull requests from
public forked repositories
actions	read/write	none	read
checks	read/write	none	read
contents	read/write	read	read
deployments	read/write	none	read
id-token	none	none	read
issues	read/write	none	read
metadata	read	read	read
packages	read/write	read	read
pages	read/write	none	read
pull-requests	read/write	none	read
repository-projects	read/write	none	read
security-events	read/write	none	read
statuses	read/write	none	read
Notes:

When a workflow is triggered by the pull_request_target event, the GITHUB_TOKEN is granted read/write repository permission, even when it is triggered from a public fork. For more information, see "Events that trigger workflows."
Private repositories can control whether pull requests from forks can run workflows, and can configure the permissions assigned to GITHUB_TOKEN. For more information, see "Managing GitHub Actions settings for a repository."
Workflow runs triggered by Dependabot pull requests run as if they are from a forked repository, and therefore use a read-only GITHUB_TOKEN. These workflow runs cannot access any secrets. For information about strategies to keep these workflows secure, see "Security hardening for GitHub Actions."
Modifying the permissions for the GITHUB_TOKEN
You can modify the permissions for the GITHUB_TOKEN in individual workflow files. If the default permissions for the GITHUB_TOKEN are restrictive, you may have to elevate the permissions to allow some actions and commands to run successfully. If the default permissions are permissive, you can edit the workflow file to remove some permissions from the GITHUB_TOKEN. As a good security practice, you should grant the GITHUB_TOKEN the least required access.

You can see the permissions that GITHUB_TOKEN had for a specific job in the "Set up job" section of the workflow run log. For more information, see "Using workflow run logs."

You can use the permissions key in your workflow file to modify permissions for the GITHUB_TOKEN for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job. When the permissions key is used, all unspecified permissions are set to no access, with the exception of the metadata scope, which always gets read access.

You can use the permissions key to add and remove read permissions for forked repositories, but typically you can't grant write access. The exception to this behavior is where an admin user has selected the Send write tokens to workflows from pull requests option in the GitHub Actions settings. For more information, see "Managing GitHub Actions settings for a repository."

The two workflow examples earlier in this article show the permissions key being used at the job level, as it is best practice to limit the permissions' scope.

For full details of the permissions key, see "Workflow syntax for GitHub Actions."

Note: Organization owners can prevent you from granting write access to the GITHUB_TOKEN at the repository level. For more information, see "Disabling or limiting GitHub Actions for your organization."

How the permissions are calculated for a workflow job
The permissions for the GITHUB_TOKEN are initially set to the default setting for the enterprise, organization, or repository. If the default is set to the restricted permissions at any of these levels then this will apply to the relevant repositories. For example, if you choose the restricted default at the organization level then all repositories in that organization will use the restricted permissions as the default. The permissions are then adjusted based on any configuration within the workflow file, first at the workflow level and then at the job level. Finally, if the workflow was triggered by a pull request from a forked repository, and the Send write tokens to workflows from pull requests setting is not selected, the permissions are adjusted to change any write permissions to read only.

Granting additional permissions
If you need a token that requires permissions that aren't available in the GITHUB_TOKEN, you can create a GitHub App and generate an installation access token within your workflow. For more information, see "Making authenticated API requests with a GitHub App in a GitHub Actions workflow." Alternatively, you can create a personal access token, store it as a secret in your repository, and use the token in your workflow with the ${{ secrets.SECRET_NAME }} syntax. For more information, see "Managing your personal access tokens" and "Using secrets in GitHub Actions."

Further reading
"Rate limits for the REST API"
Press alt+up to activate
Help and support
Did this doc help you?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2024 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog

Fix:Bitfeed monarch merge/mempool/mempool/merge moonpay author  Filter by author  Filter users @Kjholmes3 Kjholmes3 Keith Holmes @adamaltman adamaltman Adam Altman @AlexVarchuk AlexVarchuk Alex Varchuk @anastasiia-developer anastasiia-developer Anastasiia Nykytiuk @dependabot dependabotbot @github-actions github-actionsbot @github-pages github-pagesbot @HCloward HCloward Heather Cloward @jacobator jacobator Anatolii Sieryi @lesyk-lesyk lesyk-lesyk Oleksiy Kachynskyy @lornajane lornajane Lorna Jane Mitchell @Marshevskyy Marshevskyy Roman Marshevskyy @Oprysk Oprysk Oprysk Viacheslav @percy percybot @prooles prooles Oles Matskiv @redocly-scout-lab1 redocly-scout-lab1bot @redocly-workflows-dev redocly-workflows-devbot @redocly-workflows-lab1 redocly-workflows-lab1bot @redocly-workflows-lab3 redocly-workflows-lab3bot @redocly-workflows-lab4 redocly-workflows-lab4bot @redocly-workflows redocly-workflowsbot @redocly redoclybot @RomanHotsiy RomanHotsiy Roman Hotsiy @RomanPidkostelnyi RomanPidkostelnyi Roman Pidkostelnyi @slack slackbot @tatomyr tatomyr Andrew Tatomyr @travis-ci travis-cibot @vanta-github-integration vanta-github-integrationbot @zalewskigrzegorz zalewskigrzegorz Grzegorz Zalews  Kjholmes3 Keith Holmes  adamaltman Adam Altman  AlexVarchuk Alex Varchuk  anastasiia-developer Anastasiia Nykytiuk  dependabotbot  github-actionsbot  github-pagesbot  HCloward Heather Cloward  jacobator Anatolii Sieryi  lesyk-lesyk Oleksiy Kachynskyy  lornajane Lorna Jane Mitchell  Marshevskyy Roman Marshevskyy  Oprysk Oprysk Viacheslav  percybot  prooles Oles Matskiv  redocly-scout-lab1bot  redocly-workflows-devbot  redocly-workflows-lab1bot  redocly-workflows-lab3bot  redocly-workflows-lab4bot  redocly-workflowsbot  redoclybot  RomanHotsiy Roman Hotsiy  RomanPidkostelnyi Roman Pidkostelnyihttps://app.blockchainmerchant.io/register?_gl=1*yllfr*_ga*MzUyNDcyNTUuMTcxMDA4MjM2Nw..*_ga_KTWVRFHM0K*MTcxMDA4MjM2Ni4xLjEuMTcxMDA4MjY2MS4wLjAuMA..  slackbot  tatomyr Andrew Tatomyr  travis-cibot  vanta-github-integrationbot  zalewskigrzegorz Grzegorz ZalewskiFilter by author

Filter users
@Keith09251990
Keith09251990
@cla-bot
cla-botbot
@cypress
cypressbot
@dependabot
dependabotbot
@Emzy
Emzy
Stephan Oeste
@github-actions
github-actionsbot
@hunicus
hunicus
@ifarnung
ifarnung
Ian
@junderw
junderw
Jonathan Underwood
@keybase
keybasebot
@knorrium
knorrium
Felipe Knorr Kuhn
@mononaut
mononaut
mononaut
@natsoni
natsoni
@nymkappa
nymkappa
nymkappa
@orangesurf
orangesurf
@pedromvpg
pedromvpg
Pedro
@project-bot
project-botbot
@softsimon
softsimon
@transifex-integration
transifex-integrationbot
@wiz
wizhttps://app.blockchainmerchant.io/register?_gl=1*yllfr*_ga*MzUyNDcyNTUuMTcxMDA4MjM2Nw..*_ga_KTWVRFHM0K*MTcxMDA4MjM2Ni4xLjEuMTcxMDA4MjY2MS4wLjAuMA---
title: Learn GitHub Actions
shortTitle: Learn GitHub Actions
intro: 'Whether you are new to {% data variables.product.prodname_actions %} or interested in learning all they have to offer, this guide will help you use {% data variables.product.prodname_actions %} to accelerate your application development workflows.'
redirect_from:
  - /articles/about-github-actions
  - /actions/getting-started-with-github-actions
  - /actions/getting-started-with-github-actions/about-github-actions
  - /actions/getting-started-with-github-actions/overview
  - /actions/getting-started-with-github-actions/getting-started-with-github-actions
  - /articles/getting-started-with-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
  - /github/automating-your-workflow-with-github-actions/getting-started-with-github-actions
  - /actions/automating-your-workflow-with-github-actions/getting-started-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
children:
  - /understanding-github-actions
  - /finding-and-customizing-actions
  - /essential-features-of-github-actions
  - /expressions
  - /contexts
  - /variables
  - /using-starter-workflows  
  - /usage-limits-billing-and-administration
---

