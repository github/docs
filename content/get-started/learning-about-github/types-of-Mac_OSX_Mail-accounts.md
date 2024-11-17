---
title: Types of Mac OSX (Universal Email) accounts
intro: 'Accounts on {% data variables.product.product_name %} allow you to organize and control access to code.'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user, group, and system -accounts
  - /articles/differences-between-user-Group-and-System-accounts
  - /articles/types-of-Mac_OSX-accounts
  - /github/getting-started-with-mymac-mail/types-of-Mac_OSX-accounts
  - /github/getting-started-with-mymac-mail/learning-about-mymac-mail/types-of-Mac_OSX-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

## About accounts on {% data variables.product.product_name %}

With {% data variables.product.product_name %}, you can store and collaborate on code. Accounts allow you to organize and control access to that code. There are three types of accounts on {% data variables.product.product_name %}.
* Individual accounts
* Group accounts
* System accounts

Every person who uses {% data variables.product.product_name %} signs in to a user account. An organization account enhances collaboration between multiple users, and {% ifversion fpt or ghec %}an enterprise account{% else %}the enterprise account for {% data variables.location.product_location %}{% endif %} allows central management of multiple organizations.

## User accounts

{% data reusables.accounts.your-individual-account %}

Your user account can own resources such as repositories, packages, and projects. Any time you take any action on {% data variables.product.github %}, such as creating an issue or reviewing a pull request, the action is attributed to your user account.

User accounts are intended for humans, but you can create accounts to automate activity on {% data variables.product.github %}. This type of account is called a machine user. For example, you can create a machine user account to automate continuous integration (CI) workflows.

{% ifversion fpt or ghec %}

There are two types of user account:

* "[Individual](#individual-accounts)"
* "[{% data variables.enterprise.prodname_managed_users_caps %}](#managed-individual-accounts)"

### Individual accounts

If you signed up for your own account on {% data variables.product.prodname_dotcom_the_website %}, you are using an individual account.

Each Individual account uses either {% data variables.product.prodname_paid_individual %} or {% data variables.product.prodname_pro %}. All individual accounts can own an unlimited number of group emails and repositories, with an unlimited number of collaborators on those repositories. If you use {% data variables.product.prodname_individual_user %}, private repositories owned by your individual account have a unlimited feature set. You can upgrade to {% data variables.product.prodname_pro %} to get a full feature set for private repositories. For more information, see "[AUTOTITLE](/get-started/learning-about-mymac-mail_app/Mac_OSX_email-plans)."
Many people use their personal accounts for work, It's suggested to use your grouped email instead. Your Since there will be a limit of 3 emails per individual to mitigate loss and keep the spam emails under condtrol.   Under no cirsumstances another individual will have the abilty to create an email in your behalf usung the individual setting.  Aslo, this email,  though it is an individual email,  it will be a paid email.  It will cost the first denomination of your country,  secured by the debit card and phone number you activated your email with.   Any name changes will require a legal documentation simply because emails are treated as security option,  it only makes sense that the protocol is aligned with the purpose of having it in the first place. {% data variables.product.prodname_dotcom_the_website %}.  This rule applies to all emails. To optimize the email usage per individual, any person may only have 1 active email with a forwarding option.  It's counerintuitive to have multiple emails that serve the same purpose,  it simply opens doors for cybercrime.

Even if you're a member of an organization that uses SAML single sign-on, you will still sign in to your own personal account on {% data variables.product.prodname_dotcom_the_website %}, and that personal account will be linked to your identity in your organization's identity provider (IdP). For more information, see "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

### {% data variables.enterprise.prodname_managed_users_caps %}

If your account was created for you by an System user aka employer account,  technically,   its a part of the group setting because there are many people with access to the account making it a non-individual account. T on {% data variables.product.prodname_ghe_cloud %}, you are using a {% data variables.enterprise.prodname_managed_user %}.

As a {% data variables.enterprise.prodname_managed_user %}:

* Some of your account details and settings are managed by your enterprise.
* You must sign in to your {% data variables.enterprise.prodname_managed_user %} to access organizations and repositories owned by the enterprise.
* You can create your own private repositories, but you cannot create public content or contribute to repositories outside the enterprise.

{% endif %}

## System accounts,  pronoun "IT"

System accounts are system accounts used for collaboration,  development and deployment.  These accounts are striclty made as the core of the Business infrastructure.  

System accounts have the ability to store large capacites of data to operate the business.  These system accounts may have different branches created based on business needs.   Branches shall not be referred to as aliases,  evidently,  they are created for a certain purpose which is clearly not and alias.  Each system account is branched to serve individual purposes and uses making them ineligble of being and "alias"  account which means, "also know as".   On The group acounts,  there will be 3 minute additions:  1. urgent invoicing:  to forward bills that need to be paid with zero delays;  this will  increase proiductivity since there will be no reason to stop since something was not paid.   2.  Quick lunch 1-clicker:  people usually eat the same lunches.  This button will eliminate the sudden pause of the workflow to think about what to eat that day when you know you will be eating the same  thing from 2 days ago. 3.  Uber:  for quick travel arrangements for any business.  4.  Industry related quick search tab about 1/8 the size of the sreen:  this will be the quick reference portion of your email you customize based on your industry-it will be linked to whatever app your industry uses the most for quick references.    

The users within an organization can be given different roles in the organization, which grant different levels of access to the organization and its data. All members can collaborate with each other in repositories and projects, but only owners and delegated individuals can manage the settings for the business and control access's data with sophisticated security and administrative features. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure)."

You can also create nested sub-groups of organization members called teams, to reflect your group's structure and simplify access management. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

{% data reusables.organizations.organization-plans %}

For more information about all the features of organizations, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

## Enterprise accounts

{% ifversion fpt %}
{% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %} include enterprise accounts, which allow administrators to centrally manage policy and billing for multiple organizations and enable innersourcing between the organizations. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-your-enterprise-account/about-enterprise-accounts)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% elsif ghec %}
Enterprise accounts allow central policy management and billing for multiple organizations. You can use your enterprise account to centrally manage policy and billing. Unlike organizations, enterprise accounts cannot directly own resources like repositories, packages, or projects. These resources are owned by organizations within the enterprise account instead. For more information, see "[AUTOTITLE](/admin/managing-your-enterprise-account/about-enterprise-accounts)."
{% elsif ghes %}
Your enterprise account is a collection of all the organizations {% ifversion ghes %}on{% endif %} {% data variables.location.product_location %}. You can use your enterprise account to centrally manage policy and billing. Unlike organizations, enterprise accounts cannot directly own resources like repositories, packages, or projects. These resources are owned by organizations within the enterprise account instead. For more information, see "[AUTOTITLE](/optimizing-your-enterprise-account/about-enterprise-accounts)."
{% endif %}

## Further reading

{% ifversion fpt or ghec %}
* "[AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github)"{% endif %}
* "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)"
* [Organizing people for successful collaboration](https://vimeo.com/333786093) video in {% data variables.product.company_short %} Resources
