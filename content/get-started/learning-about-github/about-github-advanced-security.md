#:##BEGIN
bitore.sig#1
Item statusClosed
mowjoejoejoejoe opened 3 hours ago
Description

mowjoejoejoejoe
1 minute ago (edited)
#:##BEGIN
GLOW47
#!/Users/Bin/Bash ENVIROMENT.RUNETIME
install: setup**/ecex*/dl/install/installer/WIZARD'@https://www.java.sun/.org
#Test :tests'@(truffle-G--Unit-truffleruby.yml
lollipop: versionings'@v'-'"-9.1.17.0, lowest":,(https://github.com/translation/rails/actions/runs/4112669745/jobs/7097875177#logs)
succeeded on Feb 7 in 2m 13s
Search logs
2s
Current runner version: '2.301.1'
Operating System
Runner Image
Runner Image Provisioner
GITHUB_TOKEN Permissions
Secret source: Actions
Prepare workflow directory
Prepare all required actions
Getting action download info
Download action repository 'actions/checkout@v2' (SHA:dc323e67f16fb5f7663d20ff7941f27f5809e9b6)
Download action repository 'ruby/setup-ruby@v1' (SHA:8df78e55761745aad83acaf3ff12976382356e6d)
Download action repository 'paambaati/codeclimate-action@v3.0.0' (SHA:84cea27117a473d605400ca3a97fcef7e433e2d6)
Complete job name: test (jruby-9.1.17.0, lowest)
1s
Run actions/checkout@v2
Syncing repository: translation/rails
Getting Git version info
Temporarily overriding HOME='/home/runner/work/_temp/b227b610-e493-41c1-9063-33db7b0f020a' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/rails/rails
Deleting the contents of '/home/runner/work/rails/rails'
Initializing the repository
Disabling automatic garbage collection
Setting up auth
Fetching the repository
Determining the checkout info
Checking out the ref
/usr/bin/git log -1 --format='%H'
'79a96b384ab2548cffbdc68a24cb94caba7e3e42'
0s
Run echo "BUNDLER_VERSION=1.17.3" >> $GITHUB_ENV
41s
Run ruby/setup-ruby@v1
Modifying PATH
Downloading Ruby
Extracting Ruby
Print Ruby version
Installing Bundler
bundle install
0s
Run ruby --version
jruby 9.1.17.0 (2.3.3) 2018-04-20 d8b1ff9 OpenJDK 64-Bit Server VM 11.0.18+10 on 11.0.18+10 +jit [linux-x86_64]
1m 27s
Run bundle exec rspec
Coverage may be inaccurate; set the "--debug" command line option, or do JRUBY_OPTS="--debug" or set the "debug.fullTrace=true" option in your .jrubyrc
/home/runner/work/rails/rails/vendor/bundle/jruby/2.3.0/gems/simplecov-0.12.0/lib/simplecov.rb:48: warning: tracing (e.g. set_trace_func) will not capture all events without --debug flag
/home/runner/work/rails/rails/vendor/bundle/jruby/2.3.0/gems/activesupport-4.1.0/lib/active_support/values/time_zone.rb:285: warning: circular argument reference - now
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by org.jruby.ext.zlib.RubyZlib to field java.util.zip.CRC32.crc
WARNING: Please consider reporting this to the maintainers of org.jruby.ext.zlib.RubyZlib
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
..................................................................................................................................

Finished in 1 minute 21.16 seconds (files took 2.06 seconds to load)
130 examples, 0 failures
Coverage report generated for RSpec to /home/runner/work/rails/rails/coverage. 0 / 1893 LOC (0.0%) covered.
0s
0s
#Orphan: children cleanings processes
/usr/bin/git version
git version 2.39.1
Temporarily overriding HOME='/home/runner/work/_temp/a24ccad1-098c-4ff9-94da-6b1461793173' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/rails/rails
/usr/bin/git config --local --name-only --get-regexp core.sshCommand
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
/usr/bin/git config --local --name-only --get-regexp http.https://github.com/.extraheader
http.https://github.com/.extraheader
/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http.https://github.com/.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"

Comments
Add new comment
Markdown input: edit mode selected.
Leave a comment
Properties
Assignees

Add assignees…
Labels

Add labels…
Milestone

Add milestone…
Status

Done
Linked pull requests
No linked pull requests
Repository
None yet
Open in new tab
Copy link
Copy link in project
Archive
Delete from project

#  Welcome to GitHub docs contributing guide
Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on docs.github.com ✨.

Read our Code of Conduct to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents icon  on the top left corner of this document to get to a specific section of this guide quickly.

New contributor guide
To get an overview of the project, read the README. Here are some resources to help you get started with open source contributions:

Finding ways to contribute to open source on GitHub
Set up Git
GitHub flow
Collaborating with pull requests
Getting started
To navigate our codebase with confidence, see the introduction to working in the docs repository 🎊. For more information on how we write our markdown files, see the GitHub Markdown reference.

Check to see what types of contributions we accept before making changes. Some of them don't even require writing a single line of code ✨.

Issues
Create a new issue
If you spot a problem with the docs, search if an issue already exists. If a related issue doesn't exist, you can open a new issue using a relevant issue form.

Solve an issue
Scan through our existing issues to find one that interests you. You can narrow down the search using labels as filters. See Labels for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

Make Changes
Make changes in the UI
Click Make a contribution at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the .md file where you can make your changes and create a pull request for a review.



Make changes in a codespace
For more information about using a codespace for working on GitHub documentation, see "Working in a codespace."

Make changes locally
Fork the repository.
Using GitHub Desktop:

Getting started with GitHub Desktop will guide you through setting up Desktop.
Once Desktop is set up, you can use it to fork the repo!
Using the command line:

Fork the repo so that you can make your changes without affecting the original project until you're ready to merge them.
Install or update to Node.js, at the version specified in .node-version. For more information, see the development guide.

Create a working branch and start with your changes!

Commit your update
Commit the changes once you are happy with them. Don't forget to self-review to speed up the review process⚡.

Pull Request
When you're finished with the changes, create a pull request, also known as a PR.

Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
Don't forget to link PR to issue if you are solving one.
Enable the checkbox to allow maintainer edits so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
We may ask for changes to be made before a PR can be merged, either using suggested changes or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
As you update your PR and apply changes, mark each conversation as resolved.
If you run into any merge issues, checkout this git tutorial to help you resolve merge conflicts and other issues.
Your PR is merged!
Congratulations 🎉🎉 The GitHub team thanks you ✨.
Once your PR is merged, your contributions will be publicly visible on the GitHub docs.
Now that you are part of the GitHub docs community, see how else you can contribute to the docs.
Windows
This site can be developed on Windows, however a few potential gotchas need to be kept in mind:
Regular Expressions: Windows uses \r\n for line endings, while Unix-based systems use \n. Therefore, when working on Regular Expressions, use \r?\n instead of \n in order to support both environments. The Node.js os.EOL property can be used to get an OS-specific end-of-line marker.
Paths: Windows systems use \ for the path separator, which would be returned by path.join and others. You could use path.posix, path.posix.join etc and the slash module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write scripts in JavaScript instead of Bash.
Filename too long error: There is a 260 character limit for a filename when Git is compiled with msys. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
Update Git configuration: git config --system core.longpaths true
Consider using a different Git client on Windows
title: About GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} makes extra security features available to customers under an {% data variables.product.prodname_advanced_security %} license.{% ifversion fpt or ghec %} These features are also enabled for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
---
## About {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} has many features that help you improve and maintain the quality of your code. Some of these are included in all plans{% ifversion not ghae %}, such as dependency graph and {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Other security features require a {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} license to run on repositories apart from public repositories on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes %}For information about buying a license for {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghec %}For information about buying a license for {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security)."{% elsif ghae %}There is no charge for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_managed %} during the beta release.{% elsif fpt %}To purchase a {% data variables.product.prodname_GH_advanced_security %} license, you must be using {% data variables.product.prodname_enterprise %}. For information about upgrading to {% data variables.product.prodname_enterprise %} with {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)" and "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}

## About {% data variables.product.prodname_advanced_security %} features

A {% data variables.product.prodname_GH_advanced_security %} license provides the following additional features:

- **{% data variables.product.prodname_code_scanning_capc %}** - Search for potential security vulnerabilities and coding errors in your code. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)."

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detect secrets, for example keys and tokens, that have been checked into {% ifversion fpt %} private repositories{% else %} the repository{% endif %}. {% ifversion fpt%}{% data variables.secret-scanning.user_alerts_caps %} and {% data variables.secret-scanning.partner_alerts %} are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}{% ifversion secret-scanning-push-protection %} If push protection is enabled, also detects secrets when they are pushed to your repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)" and "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."{% else %} For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)."{% endif %}

- **Dependency review** - Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **Security overview** - Review the security configuration and alerts for an organization and identify the repositories at greatest risk. For more information, see "[AUTOTITLE](/code-security/security-overview/about-the-security-overview)."
{% endif %}

{% ifversion fpt or ghec %}
The table below summarizes the availability of {% data variables.product.prodname_GH_advanced_security %} features for public and private repositories.

|                   | Public repository           | Private repository without {% data variables.product.prodname_advanced_security %} | Private repository with {% data variables.product.prodname_advanced_security %} |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| Code scanning     | Yes                         | No                                           | Yes                                        |
| Secret scanning   | Yes  | No                                           | Yes                                       |
| Dependency review | Yes                         | No                                           | Yes                                       |
{% endif %}

For information about {% data variables.product.prodname_advanced_security %} features that are in development, see "[{% data variables.product.prodname_dotcom %} public roadmap](https://github.com/github/roadmap)." For an overview of all security features, see "[AUTOTITLE](/code-security/getting-started/github-security-features)."

{% ifversion fpt or ghec %}
{% data variables.product.prodname_GH_advanced_security %} features are enabled for all public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable these features for private and internal repositories. {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}
## Deploying GitHub Advanced Security in your enterprise

To learn about what you need to know to plan your {% data variables.product.prodname_GH_advanced_security %} deployment at a high level and to review the rollout phases we recommended, see "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale)."

{% endif %}

{% ifversion not fpt %}
## Enabling {% data variables.product.prodname_advanced_security %} features

{%- ifversion ghes %}
The site administrator must enable {% data variables.product.prodname_advanced_security %} for {% data variables.location.product_location %} before you can use these features. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise).

Once your system is set up, you can enable and disable these features at the organization or repository level.

{%- elsif ghec %}
For public repositories these features are permanently on and can only be disabled if you change the visibility of the project so that the code is no longer public.

For other repositories, once you have a license for your enterprise account, you can enable and disable these features at the organization or repository level.

{%- elsif ghae %}
You can enable and disable these features at the organization or repository level.
{%- endif %}
For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)" and "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

{% ifversion ghec or ghes %}
If you have an enterprise account, license use for the entire enterprise is shown on your enterprise license page. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## About starter workflows for {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %}
{% data reusables.advanced-security.starter-workflow-overview %}

For more information on starter workflows, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#configuring-code-scanning-using-starter-workflows)" and "[AUTOTITLE](/actions/using-workflows/using-starter-workflows)."

{% endif %}

{% ifversion ghec or ghes or ghae %}
## Further reading

- "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)"

{% endif %}
{% endif %}
