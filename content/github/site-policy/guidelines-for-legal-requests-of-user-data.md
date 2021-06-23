---
title: Guidelines for Legal Requests of User Data
redirect_from:
  - /law-enforcement-guidelines/
  - /articles/guidelines-for-legal-requests-of-user-data
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

Are you a law enforcement officer conducting an investigation that may involve user content hosted on GitHub?
Or maybe you're a privacy-conscious person who would like to know what information we share with law enforcement and under what circumstances.
Either way, you're on the right page.

In these guidelines, we provide a little background about what GitHub is, the types of data we have, and the conditions under which we will disclose private user information.
Before we get into the details, however, here are a few important details you may want to know:

- We will [**notify affected users**](#we-will-notify-any-affected-account-owners) about any requests for their account information, unless prohibited from doing so by law or court order.
- We will not disclose **location-tracking data**, such as IP address logs, without a [valid court order or search warrant](#with-a-court-order-or-a-search-warrant).
- We will not disclose any **private user content**, including the contents of private repositories, without a valid [search warrant](#only-with-a-search-warrant).

## About these guidelines

Our users trust us with their software projects and code—often some of their most valuable business or personal assets.
Maintaining that trust is essential to us, which means keeping user data safe, secure, and private.

While the overwhelming majority of our users use GitHub's services to create new businesses, build new technologies, and for the general betterment of humankind, we recognize that with millions of users spread all over the world, there are bound to be a few bad apples in the bunch.
In those cases, we want to help law enforcement serve their legitimate interest in protecting the public.

By providing guidelines for law enforcement personnel, we hope to strike a balance between the often competing interests of user privacy and justice.
We hope these guidelines will help to set expectations on both sides, as well as to add transparency to GitHub's internal processes.
Our users should know that we value their private information and that we do what we can to protect it.
At a minimum, this means only releasing data to third-parties when the appropriate legal requirements have been satisfied.
By the same token, we also hope to educate law enforcement professionals about GitHub's systems so that they can more efficiently tailor their data requests and target just that information needed to conduct their investigation.

## GitHub terminology

Before asking us to disclose data, it may be useful to understand how our system is implemented.
GitHub hosts millions of data repositories using the [Git version control system](https://git-scm.com/video/what-is-version-control).
Repositories on GitHub—which may be public or private—are most commonly used for software development projects, but are also often used to work on content of all kinds.

- [**Users**](/articles/github-glossary#user) —
Users are represented in our system as personal GitHub accounts.
Each user has a personal profile, and can own multiple repositories.
Users can create or be invited to join organizations or to collaborate on another user's repository.

- [**Collaborators**](/articles/github-glossary#collaborator) —
A collaborator is a user with read and write access to a repository who has been invited to contribute by the repository owner.

- [**Organizations**](/articles/github-glossary#organization) —
Organizations are a group of two or more users that typically mirror real-world organizations, such as businesses or projects.
They are administered by users and can contain both repositories and teams of users.

- [**Repositories**](/articles/github-glossary#repository) —
A repository is one of the most basic GitHub elements.
They may be easiest to imagine as a project's folder.
A repository contains all of the project files (including documentation), and stores each file's revision history.
Repositories can have multiple collaborators and, at its administrators' discretion, may be publicly viewable or not.

- [**Pages**](/articles/what-is-github-pages) —
GitHub Pages are public webpages freely hosted by GitHub that users can easily publish through code stored in their repositories.
If a user or organization has a GitHub Page, it can usually be found at a URL such as `https://username.github.io` or they may have the webpage mapped to their own custom domain name.

- [**Gists**](/articles/creating-gists) —
Gists are snippets of source code or other text that users can use to store ideas or share with friends.
Like regular GitHub repositories, Gists are created with Git, so they are automatically versioned, forkable and downloadable.
Gists can either be public or secret (accessible only through a known URL). Public Gists cannot be converted into secret Gists.

## User data on GitHub.com

Here is a non-exhaustive list of the kinds of data we maintain about users and projects on GitHub.

- <a name="public-account-data"></a>
**Public account data** —
There is a variety of information publicly available on GitHub about users and their repositories.
User profiles can be found at a URL such as `https://github.com/username`.
User profiles display information about when the user created their account as well their public activity on GitHub.com and social interactions.
Public user profiles can also include additional information that a user may have chosen to share publicly.
All user public profiles display:
  - Username
  - The repositories that the user has starred
  - The other GitHub users the user follows
  - The users that follow them

  Optionally, a user may also choose to share the following information publicly:
  - Their real name
  - An avatar
  - An affiliated company
  - Their location
  - A public email address
  - Their personal web page
  - Organizations to which the user is a member (*depending on either the organizations' or the users' preferences*)

- <a name="private-account-data"></a>
**Private account data** —
GitHub also collects and maintains certain private information about users as outlined in our [Privacy Policy](/articles/github-privacy-statement).
This may include:
  - Private email addresses
  - Payment details
  - Security access logs
  - Data about interactions with private repositories

  To get a sense of the type of private account information that GitHub collects, you can visit your {% data reusables.user_settings.personal_dashboard %} and browse through the sections in the left-hand menubar.

- <a name="organization-account-data"></a>
**Organization account data** —
Information about organizations, their administrative users and repositories is publicly available on GitHub.
Organization profiles can be found at a URL such as `https://github.com/organization`.
Public organization profiles can also include additional information that the owners have chosen to share publicly.
All organization public profiles display:
  - The organization name
  - The repositories that the owners have starred
  - All GitHub users that are owners of the organization

  Optionally, administrative users may also choose to share the following information publicly:
  - An avatar
  - An affiliated company
  - Their location
  - Direct Members and Teams
  - Collaborators

- <a name="public-repository-data"></a>
**Public repository data** —
GitHub is home to millions of public, open-source software projects.
You can browse almost any public repository (for example, the [Atom Project](https://github.com/atom/atom)) to get a sense for the information that GitHub collects and maintains about repositories.
This can include:

  - The code itself
  - Previous versions of the code
  - Stable release versions of the project
  - Information about collaborators, contributors and repository members
  - Logs of Git operations such as commits, branching, pushing, pulling, forking and cloning
  - Conversations related to Git operations such as comments on pull requests or commits
  - Project documentation such as Issues and Wiki pages
  - Statistics and graphs showing contributions to the project and the network of contributors

- <a name="private-repository-data"></a>
**Private repository data** —
GitHub collects and maintains the same type of data for private repositories that can be seen for public repositories, except only specifically invited users may access private repository data.

- <a name="other-data"></a>
**Other data** —
Additionally, GitHub collects analytics data such as page visits and information occasionally volunteered by our users (such as communications with our support team, survey information and/or site registrations).

## We will notify any affected account owners

It is our policy to notify users about any pending requests regarding their accounts or repositories, unless we are prohibited by law or court order from doing so. Before disclosing user information, we will make a reasonable effort to notify any affected account owner(s) by sending a message to their verified email address providing them with a copy of the subpoena, court order, or warrant so that they can have an opportunity to challenge the legal process if they wish. In (rare) exigent circumstances, we may delay notification if we determine delay is necessary to prevent death or serious harm.

## Disclosure of non-public information

It is our policy to disclose non-public user information in connection with a civil or criminal investigation only with user consent or upon receipt of a valid subpoena, civil investigative demand, court order, search warrant, or other similar valid legal process. In certain exigent circumstances (see below), we also may share limited information but only corresponding to the nature of the circumstances, and would require legal process for anything beyond that.
GitHub reserves the right to object to any requests for non-public information.
Where GitHub agrees to produce non-public information in response to a lawful request, we will conduct a reasonable search for the requested information.
Here are the kinds of information we will agree to produce, depending on the kind of legal process we are served with:

- <a name="with-user-consent"></a>
**With user consent** —
GitHub will provide private account information, if requested, directly to the user (or an owner, in the case of an organization account), or to a designated third party with the user's written consent once GitHub is satisfied that the user has verified his or her identity.

- <a name="with-a-subpoena"></a>
**With a subpoena** —
If served with a valid subpoena, civil investigative demand, or similar legal process issued in connection with an official criminal or civil investigation, we can provide certain non-public account information, which may include:

  - Name(s) associated with the account
  - Email address(es) associated with the account
  - Billing information
  - Registration date and termination date
  - IP address, date, and time at the time of account registration
  - IP address(es) used to access the account at a specified time or event relevant to the investigation

In the case of organization accounts, we can provide the name(s) and email address(es) of the account owner(s) as well as the date and IP address at the time of creation of the organization account. We will not produce information about other members or contributors, if any, to the organization account or any additional information regarding the identified account owner(s) without a follow-up request for those specific users.

Please note that the information available will vary from case to case. Some of the information is optional for users to provide. In other cases, we may not have collected or retained the information.

- <a name="with-a-court-order-or-a-search-warrant"></a>
**With a court order *or* a search warrant** — We will not disclose account access logs unless compelled to do so by either
(i) a court order issued under 18 U.S.C. Section 2703(d), upon a showing of specific and articulable facts showing that there are reasonable grounds to believe that the information sought is relevant and material to an ongoing criminal investigation; or
(ii) a search warrant issued under the procedures described in the Federal Rules of Criminal Procedure or equivalent state warrant procedures, upon a showing of probable cause.
In addition to the non-public user account information listed above, we can provide account access logs in response to a court order or search warrant, which may include:

  - Any logs which would reveal a user's movements over a period of time
  - Account or private repository settings (for example, which users have certain permissions, etc.)
  - User- or IP-specific analytic data such as browsing history
  - Security access logs other than account creation or for a specific time and date

- <a name="only-with-a-search-warrant"></a>
**Only with a search warrant** —
We will not disclose the private contents of any user account unless compelled to do so under a search warrant issued under the procedures described in the Federal Rules of Criminal Procedure or equivalent state warrant procedures upon a showing of probable cause.
In addition to the non-public user account information and account access logs mentioned above, we will also provide private user account contents in response to a search warrant, which may include:

  - Contents of secret Gists
  - Source code or other content in private repositories
  - Contribution and collaboration records for private repositories
  - Communications or documentation (such as Issues or Wikis) in private repositories
  - Any security keys used for authentication or encryption

- <a name="in-exigent-circumstances"></a>
**Under exigent circumstances** —
If we receive a request for information under certain exigent circumstances (where we believe the disclosure is necessary to prevent an emergency involving danger of death or serious physical injury to a person), we may disclose limited information that we determine necessary to enable law enforcement to address the emergency. For any information beyond that, we would require a subpoena, search warrant, or court order, as described above. For example, we will not disclose contents of private repositories without a search warrant. Before disclosing information, we confirm that the request came from a law enforcement agency, an authority sent an official notice summarizing the emergency, and how the information requested will assist in addressing the emergency.

## Cost reimbursement

Under state and federal law, GitHub can seek reimbursement for costs associated with compliance with a valid legal demand, such as a subpoena, court order or search warrant. We only charge to recover some costs, and these reimbursements cover only a portion of the costs we actually incur to comply with legal orders.

While we do not charge in emergency situations or in other exigent circumstances, we seek reimbursement for all other legal requests in accordance with the following schedule, unless otherwise required by law:

- Initial search of up to 25 identifiers: Free
- Production of subscriber information/data for up to 5 accounts: Free
- Production of subscriber information/data for more than 5 accounts: $20 per account
- Secondary searches: $10 per search

## Data preservation

We will take steps to preserve account records for up to 90 days upon formal request from U.S. law enforcement in connection with official criminal investigations, and pending the issuance of a court order or other process.

## Submitting requests

Please serve requests to:

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505
```

Courtesy copies may be emailed to legal@support.github.com.

Please make your requests as specific and narrow as possible, including the following information:

- Full information about authority issuing the request for information
- The name and badge/ID of the responsible agent
- An official email address and contact phone number
- The user, organization, repository name(s) of interest
- The URLs of any pages, gists or files of interest
- The description of the types of records you need

Please allow at least two weeks for us to be able to look into your request.

## Requests from foreign law enforcement

As a United States company based in California, GitHub is not required to provide data to foreign governments in response to legal process issued by foreign authorities.
Foreign law enforcement officials wishing to request information from GitHub should contact the United States Department of Justice Criminal Division's Office of International Affairs.
GitHub will promptly respond to requests that are issued via U.S. court by way of a mutual legal assistance treaty (“MLAT”) or letter rogatory.

## Questions

Do you have other questions, comments or suggestions? Please contact {% data variables.contact.contact_support %}.
