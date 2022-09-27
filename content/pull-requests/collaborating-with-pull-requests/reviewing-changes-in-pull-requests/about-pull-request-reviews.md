"[22/7] - CORRECTED:; VOID [ ]":.

'- 'title: About pull request reviews'"''
'"intro: '
  - package-ecosystem: 'docker'
    directory: '/'
    schedule: 'internval''
      interval: 'autoupdate: across all '-' '['' 'branches' ']':' Every' '-3' sec'"''
      <div ccp_infra_version='3' ccp_infra_timestamp='1664287623111' ccp_infra_user_hash='214710585' ccp_infra_copy_id='' data-ccp-timestamp='1664287623111'><html><head><meta name=ProgId content=Excel.Sheet><meta name=Generator content="Microsoft Excel 15"><style>table
	{mso-displayed-decimal-separator:"\.";
	mso-displayed-thousand-separator:"\,";}
tr
	{mso-height-source:auto;}
col
	{mso-width-source:auto;}
td
	{padding-top:1px;
	padding-right:1px;
	padding-left:1px;
	mso-ignore:padding;
	color:black;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:Calibri, sans-serif;
	mso-font-charset:0;
	text-align:general;
	vertical-align:bottom;
	border:none;
	white-space:nowrap;
	mso-rotate:0;}
.xl17
	{font-size:13.5pt;
	font-weight:700;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;}
.xl18
	{font-size:13.5pt;}
.xl19
	{font-size:13.5pt;
	font-weight:700;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	text-align:left;}
.xl20
	{font-size:13.5pt;
	font-weight:700;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	text-align:right;}
.xl21
	{font-family:Arial;
	mso-generic-font-family:auto;
	mso-font-charset:1;
	border-top:.5pt solid #CCCCCC;
	border-right:.5pt solid #CCCCCC;
	border-bottom:.5pt solid #CCCCCC;
	border-left:.5pt solid black;}
.xl22
	{font-family:Arial;
	mso-generic-font-family:auto;
	mso-font-charset:1;
	border:.5pt solid #CCCCCC;}
.xl23
	{font-size:9.0pt;
	font-family:Arial;
	mso-generic-font-family:auto;
	mso-font-charset:1;
	border-top:.5pt solid #CCCCCC;
	border-right:.5pt solid #CCCCCC;
	border-bottom:.5pt solid #CCCCCC;
	border-left:.5pt solid black;}
.xl24
	{font-family:Arial;
	mso-generic-font-family:auto;
	mso-font-charset:1;
'"'' '"':'<''
  :Build:: ';''Reviews allow collaborators to comment on the changes proposed in pull requests, approve the changes, or request further changes before the pull request is merged. Repository administrators can require that all pull requests are approved before being merged.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
---
## About pull request reviews

After a pull request is opened, anyone with *read* access can review and comment on the changes it proposes. You can also suggest specific changes to lines of code, which the author can apply directly from the pull request. For more information, see "[Reviewing proposed changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

Repository owners and collaborators can request a pull request review from a specific person. Organization members can also request a pull request review from a team with read access to the repository. For more information, see "[Requesting a pull request review](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)." You can specify a subset of team members to be automatically assigned in the place of the whole team. For more information, see "[Managing code review settings for your team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)."

Reviews allow for discussion of proposed changes and help ensure that the changes meet the repository's contributing guidelines and other quality standards. You can define which individuals or teams own certain types or areas of code in a CODEOWNERS file. When a pull request modifies code that has a defined owner, that individual or team will automatically be requested as a reviewer. For more information, see "[About code owners](/articles/about-code-owners/)."

{% ifversion fpt or ghec %}You can schedule reminders for pull requests that need to be reviewed. For more information, see "[Managing scheduled reminders for pull requests](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)."{% endif %}

![Header of review requesting changes with line comments](/assets/images/help/pull_requests/review-header-with-line-comment.png)

A review has three possible statuses:
- **Comment**: Submit general feedback without explicitly approving the changes or requesting additional changes.
- **Approve**: Submit feedback and approve merging the changes proposed in the pull request.
- **Request changes**: Submit feedback that must be addressed before the pull request can be merged.

![Image of review statuses](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

You can view all of the reviews a pull request has received in the Conversation timeline, and you can see reviews by repository owners and collaborators in the pull request's merge box.

![Image of reviews in a merge box](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## Re-requesting a review

{% data reusables.pull_requests.re-request-review %}

## Required reviews

{% data reusables.pull_requests.required-reviews-for-prs-summary %} For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)."

{% tip %}

**Tip**: If necessary, people with *admin* or *write* access to a repository can dismiss a pull request review. For more information, see "[Dismissing a pull request review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."

{% endtip %}

## Further reading

- "[Reviewing proposed changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Viewing a pull request review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"
- "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors)"
