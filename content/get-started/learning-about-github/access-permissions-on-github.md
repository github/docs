---
**\<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	
	xmlns:georss="http://www.georss.org/georss"
	xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
	>

<channel>
	<title>GitHub Changelog</title>
	<atom:link href="https://github.blog/changelog/feed/" rel="self" type="application/rss+xml" />
	<link>https://github.blog</link>
	<description>Updates, ideas, and inspiration from GitHub to help developers build and design software.</description>
	<lastBuildDate>Wed, 24 Aug 2022 20:06:14 +0000</lastBuildDate>
	<language>en-US</language>
	<sy:updatePeriod>
	hourly	</sy:updatePeriod>
	<sy:updateFrequency>
	1	</sy:updateFrequency>
	<generator>https://wordpress.org/?v=6.0.1</generator>

<image>
	<url>https://github.blog/wp-content/uploads/2019/01/cropped-github-favicon-512.png?fit=32%2C32</url>
	<title>GitHub Changelog</title>
	<link>https://github.blog</link>
	<width>32</width>
	<height>32</height>
</image> 
<site xmlns="com-wordpress:feed-additions:1">153214340</site>	<item>
		<title>GitHub Desktop 3.0.6 Community Contributions</title>
		<link>https://github.blog/changelog/2022-08-24-github-desktop-3-0-6-community-contributions</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Wed, 24 Aug 2022 20:06:14 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-24-github-desktop-3-0-6-community-contributions</guid>

					<description><![CDATA[GitHub Desktop 3.0.6 Community Contributions]]></description>
										<content:encoded><![CDATA[<p>GitHub Desktop 3.0.6 brings a slew of community contributions! As an open source project, we are always so grateful to our contributors who make Desktop better for themselves and others. Additionally, we&#039;ve improved Apple silicon support and recognition of default branch changes.</p>
<p>Adds:</p>
<ul>
<li>Add Warp terminal integration for macOS. Thanks @lhvy!</li>
<li>Add PyCharm Community Edition support on macOS. Thanks @tsvetilian-ty!</li>
<li>Add context menu to the current branch and current repository toolbar. Thanks @uttiya10!<br />
Fixes:</li>
<li>Older versions of Sublime Text and SlickEdit are also recognized as external editors. Thanks @vbwx!</li>
<li>Fix commit shortcut (Ctrl/Cmd + Enter). Thanks @tsvetilian-ty!</li>
<li>Show &#039;Email&#039; label on the preferences form when user is not signed in. Thanks @andymckay!</li>
<li>Fix invalid URL state while the &quot;Clone Repository&quot; modal is open. Thanks @tsvetilian-ty!</li>
<li>Fix commit description with three lines overflowing when it shouldn&#039;t. Thanks @HeCorr!</li>
<li>&#039;Update from default branch` menu item allows quick merge of upstream. Thanks @uttiya10!</li>
<li>Unified diff line gutter context menu items for discard changes no longer enabled when whitespace is hidden.</li>
<li>&#039;Show Whitespace Changes&#039; popover appears as expected on unified diff.</li>
<li>On pull or fetch, make sure the default branch is updated to match the repository settings.</li>
<li>Fix notifications on Windows 10 builds prior to the Creators Update.<br />
Improvements:</p>
<ul>
<li>On Apple silicon devices running unoptimized builds, auto-update on first run to an optimized build.</li>
<li>Add ability to skip staggered release to ensure the latest version is downloaded.</li>
</ul>
</li>
</ul>
<p><a href="https://desktop.github.com">Learn more about GitHub Desktop</a></p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66633</post-id>	</item>
		<item>
		<title>Check whether an IP is permitted within IP allow list</title>
		<link>https://github.blog/changelog/2022-08-24-check-whether-an-ip-is-permitted-within-ip-allow-list</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Wed, 24 Aug 2022 17:01:37 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-24-check-whether-an-ip-is-permitted-within-ip-allow-list</guid>

					<description><![CDATA[Check whether an IP is permitted within IP allow list]]></description>
										<content:encoded><![CDATA[<p>GitHub Enterprise Cloud administrators who have IP allow lists set up for their enterprises, organizations, or GitHub Apps can now check whether an IP address is permitted within the IP allow list.</p>
<p>To learn more, read our &#039;Checking if an IP address is permitted&#039; documentation for <a href="https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#checking-if-an-ip-address-is-permitted">enterprises</a> and <a href="https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#checking-if-an-ip-address-is-permitted">organizations</a>.</p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66607</post-id>	</item>
		<item>
		<title>Secret scanning&#058; Admins can now provide a link to display when a push is blocked</title>
		<link>https://github.blog/changelog/2022-08-24-secret-scanning-admins-can-now-provide-a-link-to-display-when-a-push-is-blocked</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Wed, 24 Aug 2022 17:00:54 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-24-secret-scanning-admins-can-now-provide-a-link-to-display-when-a-push-is-blocked</guid>

					<description><![CDATA[Secret scanning&#058; Admins can now provide a link to display when a push is blocked]]></description>
										<content:encoded><![CDATA[<p>GitHub Advanced Security customers using secret scanning can now specify a custom link that will show in the error message when push protection detects and blocks a potential secret. Admins can use the custom link to provide their developers with a point of reference on best practices with secrets.</p>
<p>Learn more about <a href="https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning">protecting pushes with secret scanning.</a></p>
<p align="center"><img alt="Custom link displayed in a push protection error message" src="https://i0.wp.com/user-images.githubusercontent.com/81782111/186042467-171209d3-ab13-4a02-88d2-498aa15020b3.png?w=600&#038;ssl=1" data-recalc-dims="1"></p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66606</post-id>	</item>
		<item>
		<title>Improved UI for syncing a fork</title>
		<link>https://github.blog/changelog/2022-08-24-improved-ui-for-syncing-a-fork</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Wed, 24 Aug 2022 14:28:24 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-24-improved-ui-for-syncing-a-fork</guid>

					<description><![CDATA[Improved UI for syncing a fork]]></description>
										<content:encoded><![CDATA[<p>We updated the web UI to make keeping forks in sync with their upstream repositories more intuitive. &quot;Fetch upstream&quot; has been renamed to &quot;Sync fork,&quot; which better describes the button&#039;s behavior. If the sync causes a conflict, the web UI prompts users to contribute their changes to the upstream, discard their changes, or resolve the conflict.</p>
<p><img src="https://i0.wp.com/user-images.githubusercontent.com/90000203/186034529-e590fa61-481d-4bfd-859f-e0efa7272b4a.png?ssl=1" alt="Image of sync fork button" data-recalc-dims="1"></p>
<p><a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches">Read more about branches</a>.</p>
<p><a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks">Read more about working with forks</a>.</p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66603</post-id>	</item>
		<item>
		<title>GitHub Actions&#058; Enhancements to OpenID Connect support to enable secure cloud deployments at scale</title>
		<link>https://github.blog/changelog/2022-08-23-github-actions-enhancements-to-openid-connect-support-to-enable-secure-cloud-deployments-at-scale</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Tue, 23 Aug 2022 22:08:20 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-23-github-actions-enhancements-to-openid-connect-support-to-enable-secure-cloud-deployments-at-scale</guid>

					<description><![CDATA[GitHub Actions&#058; Enhancements to OpenID Connect support to enable secure cloud deployments at scale]]></description>
										<content:encoded><![CDATA[<p>OpenID Connect (OIDC) support in GitHub Actions is now enhanced to support secure cloud deployments at scale.</p>
<p>Org &amp; repo admins can use the new <a href="https://docs.github.com/en/rest/actions/oidc">OIDC API support</a> to:</p>
<ul>
<li>enable a standard OIDC configuration across their cloud deployment workflows by customizing the <code>subject</code> claim format.</li>
<li>ensure additional compliance &amp; security for their OIDC based deployments by appending the <code>issuer</code> url with their enterprise slug </li>
<li>configure advanced OIDC policies by using the additional <a href="https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token">OIDC token claims</a> like <code>repository_id</code> and <code>repo_visibility</code>.</li>
</ul>
<p>Learn more about <a href="https://docs.github.com/en/actions/deployment/security-hardening-your-deployments">Security hardening your GitHub Workflows using OpenID Connect</a>.</p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66593</post-id>	</item>
		<item>
		<title>New options for controlling the default commit message when merging a pull request</title>
		<link>https://github.blog/changelog/2022-08-23-new-options-for-controlling-the-default-commit-message-when-merging-a-pull-request</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Tue, 23 Aug 2022 19:59:15 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-23-new-options-for-controlling-the-default-commit-message-when-merging-a-pull-request</guid>

					<description><![CDATA[New options for controlling the default commit message when merging a pull request]]></description>
										<content:encoded><![CDATA[<p>In May we shipped a setting for <a href="https://github.blog/changelog/2022-05-11-default-to-pr-titles-for-squash-merge-commit-messages/">including the pull request title</a> in the default commit message presented to users when squash merging a pull request. We just shipped more options for customizing the default commit message, including using the pull request&#039;s description! You can also now customize the default commit messages for merge commit merges. The goal is more predictable, consistent, and useful commit messages for your pull requests, which translate to a more useful Git commit history.</p>
<h2 id="how-it-works" id="how-it-works" >How it works<a href="#how-it-works" class="heading-link pl-2 text-italic text-bold" aria-label="How it works"></a></h2>
<p>From repository settings, a maintainer or admin can choose the default format for commit messages produced when merging pull requests:<br />
<img alt="image" src="https://i0.wp.com/user-images.githubusercontent.com/2503052/185104685-6fccc041-2379-4c56-969c-6732d10821f6.png?w=790&#038;ssl=1" data-recalc-dims="1"></p>
<p>This selection is used to form a default commit message that gets presented to users on the pull request page when merging a pull request. For example, assume <strong>Default to pull request title and description</strong> is selected and a user clicks to merge a pull request with this description:<br />
<img alt="image" src="https://i0.wp.com/user-images.githubusercontent.com/2503052/185994525-aeebc8fa-81bb-4308-b4cb-1cba038cea39.png?w=638&#038;ssl=1" data-recalc-dims="1"></p>
<p>The default commit message will include the pull request&#039;s title and description:<br />
<img alt="image" src="https://i0.wp.com/user-images.githubusercontent.com/2503052/185994628-01c2c9c4-4664-4829-ba5b-a7135c74dc0b.png?w=629&#038;ssl=1" data-recalc-dims="1"></p>
<p>The user can then accept this commit message or make changes before merging.</p>
<h3 id="options" id="options" >Options<a href="#options" class="heading-link pl-2 text-italic text-bold" aria-label="Options"></a></h3>
<p>For merge commit merging:</p>
<ul>
<li><strong>Default message</strong>: pull request number and head branch on the first line; pull request title on the third line</li>
<li><strong>Pull request title</strong>: pull request title and number on the first line</li>
<li><strong>Pull request title and description</strong>: pull request title and number on the first line; pull request description starting on the third line</li>
</ul>
<p>For squash merging:</p>
<ul>
<li><strong>Default message</strong>: commit title and commit message (if the pull request contains a single commit), or the pull request title and number and list of commits (if the pull request contains multiple commits)</li>
<li><strong>Pull request title</strong>: pull request title and number on the first line</li>
<li><strong>Pull request title and commit details</strong>: pull request title and number on the first line; commit message (if a single commit) or list of commits (if multiple commits)</li>
<li><strong>Pull request title and description</strong>: pull request title and number on the first line; pull request description starting on the third line</li>
</ul>
<h2 id="additional-details" id="additional-details" >Additional details<a href="#additional-details" class="heading-link pl-2 text-italic text-bold" aria-label="Additional details"></a></h2>
<p>If no message is provided when merging a pull request using the REST API or GraphQL mutation, a default commit message will be formed based on the selected message format and merge method.</p>
<p>The default message format can be managed using the <a href="https://docs.github.com/rest/repos/repos#create-an-organization-repository">Create a repository</a> or <a href="https://docs.github.com/rest/repos/repos#update-a-repository">Update a repository</a> REST APIs. See the <code>merge_commit_title</code>, <code>merge_commit_message</code>, and <code>squash_merge_commit_title</code>, <code>squash_merge_commit_message</code> parameters.</p>
<h2 id="feedback" id="feedback" >Feedback<a href="#feedback" class="heading-link pl-2 text-italic text-bold" aria-label="Feedback"></a></h2>
<p>We want to hear from you! Tell us what you think and how we can make it better: <a href="https://github.com/orgs/community/discussions/30439">https://github.com/orgs/community/discussions/30439</a></p>
<h2 id="learn-more" id="learn-more" >Learn more<a href="#learn-more" class="heading-link pl-2 text-italic text-bold" aria-label="Learn more"></a></h2>
<p>Learn more about <a href="https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-merging-for-pull-requests">configuring merge commit merging</a> and <a href="https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests">configuring squash merging</a>.</p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66592</post-id>	</item>
		<item>
		<title>Organization Billing Settings Updates for Codespaces</title>
		<link>https://github.blog/changelog/2022-08-23-organization-billing-settings-updates-for-codespaces</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Tue, 23 Aug 2022 17:35:50 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-23-organization-billing-settings-updates-for-codespaces</guid>

					<description><![CDATA[Organization Billing Settings Updates for Codespaces]]></description>
										<content:encoded><![CDATA[<p>With this update, organization admins can manage billing settings for codespaces that are created for organization controlled repositories. Admins can choose to opt-in to the organization covering the bill for GitHub Codespaces, enable Codespaces access only for select members of the organization, allow for all organization members, or also include outside collaborators. See the screenshot below, and documentation for <a href="https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization">Enabling GitHub Codespaces for your organization</a> for more details.</p>
<p><img src="https://i0.wp.com/user-images.githubusercontent.com/9445180/179117678-573c26ec-d039-47c8-8fba-7d992b84a169.png?ssl=1" alt="Organization Settings Billing UI" data-recalc-dims="1"></p>
<p>Note: The functionality of this interface remains the same. The label was updated to &quot;Billing&quot; where it used to be labeled &quot;User permissions&quot; to increase clarity. There are no changes required to your settings as a result of this update.</p>
<p>Any GitHub user who can clone a repository and has access to Codespaces will be able to create a codespace for it. To manage who can clone a repository in your Organization see <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository">Managing teams and people with access to your repository</a>.</p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66589</post-id>	</item>
		<item>
		<title>SSH commit verification now supported</title>
		<link>https://github.blog/changelog/2022-08-23-ssh-commit-verification-now-supported</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Tue, 23 Aug 2022 16:20:50 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-23-ssh-commit-verification-now-supported</guid>

					<description><![CDATA[SSH commit verification now supported]]></description>
										<content:encoded><![CDATA[<p>GitHub now supports SSH commit verification, so you can sign commits and tags locally using a self-generated SSH public key, which will give others confidence about the origin of a change you have made. If a commit or tag has an SSH signature that is cryptographically verifiable, GitHub makes the commit or tag &quot;Verified&quot; or &quot;Partially Verified.&quot;  </p>
<p><img src="https://i0.wp.com/user-images.githubusercontent.com/4021812/186039068-d0d84d96-873b-44ec-8536-5e3e0ab648a3.png?ssl=1" alt="image-of-verified-commit" data-recalc-dims="1"></p>
<p>If you already use an SSH key to authenticate with GitHub, you can now upload the same or a different key pair&#8217;s public key to use it as a signing key. There is no limit to the number of signing keys you can add to your account.  For more information, visit <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#ssh-commit-verification">SSH Commit Verification</a> in the GitHub documentation.</p>
<p><img src="https://i0.wp.com/user-images.githubusercontent.com/4021812/186039066-03b2d56f-6e15-44ee-a6ef-37bab5d5b47d.png?ssl=1" alt="image-of-ssh-signing-key-ui" data-recalc-dims="1"></p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66588</post-id>	</item>
		<item>
		<title>GitHub Pages&#058; Deprecating the theme picker</title>
		<link>https://github.blog/changelog/2022-08-22-github-pages-deprecating-the-theme-picker</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Tue, 23 Aug 2022 02:12:59 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-22-github-pages-deprecating-the-theme-picker</guid>

					<description><![CDATA[GitHub Pages&#058; Deprecating the theme picker]]></description>
										<content:encoded><![CDATA[<p>Today we are deprecating the theme picker we introduced in <a href="https://github.blog/2012-04-02-instantly-beautiful-project-pages/">2012</a> for GitHub Pages.</p>
<p>While this experience allowed users to preview a theme in the user interface, we are doing this to increase the security of <a href="https://github.com">github.com</a>.</p>
<p>You can of course continue to use any <a href="https://jekyllrb.com/docs/themes/">Jekyll theme</a> you want with Pages, and publish beautiful sites with a <a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll">small configuration change</a>.</p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66584</post-id>	</item>
		<item>
		<title>help.github.com will soon take you to GitHub Support</title>
		<link>https://github.blog/changelog/2022-08-22-help-github-com-will-soon-take-you-to-github-support</link>
		
		<dc:creator><![CDATA[Kevin Duck]]></dc:creator>
		<pubDate>Mon, 22 Aug 2022 20:03:07 +0000</pubDate>
				<guid isPermaLink="false">https://github.blog/changelog/2022-08-22-help-github-com-will-soon-take-you-to-github-support</guid>

					<description><![CDATA[help.github.com will soon take you to GitHub Support]]></description>
										<content:encoded><![CDATA[<p>Starting September 20th, 2022 help.github.com will start redirecting to GitHub&#039;s Support Portal at support.github.com<br />
Users should continue to use docs.github.com to reach GitHub Docs.</p>
<p>Any links starting with &#039;help.github.com/&#039; will continue to work as expected.</p>
]]></content:encoded>
					
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">66573</post-id>	</item>
	</channel>
</rss>**
title: Access permissions on GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'With roles, you can control who has access to your accounts and resources on {% data variables.product.product_name %} and the level of access each person has.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
---

## About access permissions on {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %} 

Roles work differently for different types of accounts. For more information about accounts, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

## Personal accounts

A repository owned by a personal account has two permission levels: the *repository owner* and *collaborators*. For more information, see "[Permission levels for a personal account repository](/articles/permission-levels-for-a-user-account-repository)."

## Organization accounts

Organization members can have *owner*{% ifversion fpt or ghec %}, *billing manager*,{% endif %} or *member* roles. Owners have complete administrative access to your organization{% ifversion fpt or ghec %}, while billing managers can manage billing settings{% endif %}. Member is the default role for everyone else. You can manage access permissions for multiple members at a time with teams. For more information, see:
- "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[About teams](/articles/about-teams)"

## Enterprise accounts

{% ifversion fpt %}
{% data reusables.gated-features.enterprise-accounts %} 

For more information about permissions for enterprise accounts, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %}
*Enterprise owners* have ultimate power over the enterprise account and can take every action in the enterprise account.{% ifversion ghec or ghes %} *Billing managers* can manage your enterprise account's billing settings.{% endif %} Members and outside collaborators of organizations owned by your enterprise account are automatically members of the enterprise account, although they have no access to the enterprise account itself or its settings. For more information, see "[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghec %}
If an enterprise uses {% data variables.product.prodname_emus %}, members are provisioned as new personal accounts on {% data variables.product.prodname_dotcom %} and are fully managed by the identity provider. The {% data variables.product.prodname_managed_users %} have read-only access to repositories that are not a part of their enterprise and cannot interact with users that are not also members of the enterprise. Within the organizations owned by the enterprise, the {% data variables.product.prodname_managed_users %} can be granted the same granular access levels available for regular organizations. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% endif %}
{% endif %}

## Further reading

- "[Types of {% data variables.product.prodname_dotcom %} accounts](/articles/types-of-github-accounts)"
