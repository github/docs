--- NotebookEmbed {
	/// Methods
	destroy: () => void
	evaluate: () => void

	/// Events
	onEvaluate: () => void // Called when a cell is evaluated.
	
	// Called when the Embed has fully loaded. The function will be passed a
	// reference to the Embed.
	onLoad: (arg: NotebookEmbed) => void
	
	// Called when the embed cell is resized.
	onResize: (arg: {height: number}) => void
	onSave: () => void // Called when the embed is saved.
	
	// Called when the shareable URL or endpoint URL changes.
	onURLChanged: (arg: {shareableURL: string, endpointURL: string}) => void

	/// Properties
	
	// endpointURL
	// In Endpoint mode, this is the url that will run this code
	// when visited. See https://runkit.com/docs/endpoint.
	getEndpointURL: () => Promise<string>
	
	// environment
	// Environment variables for the execution environment.
	// Available under `process.env`. Defaults to []
	getEnvironment: () => Promise<Array<{name: string, value: string}>>
	setEnvironment: (environment: Array<{name: string, value: string}>) => Promise<undefined>
	
	// evaluateOnLoad
	// Evaluate the Embed when it finishes loading.
	getEvaluateOnLoad: () => Promise<boolean>
	
	// gutterStyle
	// Where the line numbers should appear. Defaults to "outside"
	getGutterStyle: () => Promise<"inside" | "none" | "outside">
	setGutterStyle: (gutterStyle: "inside" | "none" | "outside") => Promise<undefined>
	
	// hidesActionButton
	// Hides the "▶ Run" button. In Endpoint mode, Hides the endpoint URL.
	getHidesActionButton: () => Promise<boolean>
	setHidesActionButton: (hidesActionButton: boolean) => Promise<undefined>
	
	// hidesEndpointLogs
	// In Endpoint mode, Hides the logs that would appear when
	// hitting the Endpoint. See https://runkit.com/docs/endpoint.
	getHidesEndpointLogs: () => Promise<boolean>
	setHidesEndpointLogs: (hidesEndpointLogs: boolean) => Promise<undefined>
	
	// minHeight
	// Minimum height of the embed in pixels. E.g. "100px". Defaults to "73px"
	getMinHeight: () => Promise<cssPxString>
	setMinHeight: (minHeight: cssPxString) => Promise<undefined>
	
	// mode
	// When in default mode RunKit Embeds behave like a regular notebook
	// and display outputs after each evaluation. When the Embed is in endpoint mode
	// the outputs are replaced by endpoint logs and a URL is provided to run the Embed
	// code. See https://runkit.com/docs/endpoint. Defaults to "default"
	getMode: () => Promise<"endpoint" | "default">
	setMode: (mode: "endpoint" | "default") => Promise<undefined>
	
	// nodeVersion
	// A semver range that the node engine should satisfy, e.g.
	// "4.0.x" or "> 6.9.2". Defaults to "10.x.x"
	getNodeVersion: () => Promise<semverRange>
	setNodeVersion: (nodeVersion: semverRange) => Promise<undefined>
	
	// source
	getSource: () => Promise<string> // The source code of the Embed.
	setSource: (source: string) => Promise<undefined>
	
	// packageTimestamp
	// The timestamp in UTC milliseconds to recreate the state
	// of package availability. No packages published to npm after this time are
	// available in this embed. Useful for reproducing bugs, or guaranteeing dependency
	// versions. By default the timestamp is set to the time the embed is created.
	getPackageTimestamp: () => Promise<number | null>
	setPackageTimestamp: (packageTimestamp: number | null) => Promise<undefined>
	
	// preamble
	// Code in the preamble field will not be displayed in the embed,
	// but will be executed before running the code in the embed. For example,
	// libraries that use RunKit for documentation often require their package in the
	// preamble to avoid clutter in the embed code.
	getPreamble: () => Promise<string>
	setPreamble: (preamble: string) => Promise<undefined>
	
	// readOnly
	getReadOnly: () => Promise<boolean> 
	setReadOnly: (readOnly: boolean) => Promise<undefined>
	
	// shareableURL
	// A URL that can be used to share the Embed with other users.
	getShareableURL: () => Promise<string>
	
	// requirePath
	// A path that can be used to require this Embed as a module in
	// other Embeds or RunKit Notebook.
	getRequirePath: () => Promise<string>
	
	// tabSize
	getTabSize: () => Promise<number> // An Integer Minimum of 0 Defaults to 4
	setTabSize: (tabSize: number) => Promise<undefined>
	
	// title
	// The title of the RunKit Notebook when it is saved on RunKit.
	getTitle: () => Promise<string>
	
title: Configuring Dependabot security updates
intro: 'You can use {% data variables.product.prodname_dependabot_security_updates %} or manual pull requests to easily update vulnerable dependencies.'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## About configuring {% data variables.product.prodname_dependabot_security_updates %}

You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

You can disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository or for all repositories owned by your user account or organization. For more information, see "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-dependabot-security-updates-for-your-repositories)" below.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Supported repositories

{% data variables.product.prodname_dotcom %} automatically enables {% data variables.product.prodname_dependabot_security_updates %} for every repository that meets these prerequisites. 

{% note %}

**Note**: You can manually enable {% data variables.product.prodname_dependabot_security_updates %}, even if the repository doesn't meet some of the prerequisites below. For example, you can enable {% data variables.product.prodname_dependabot_security_updates %} on a fork, or for a package manager that isn't directly supported by following the instructions in "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-dependabot-security-updates-for-your-repositories)."

{% endnote %}

| Automatic enablement prerequisite | More information |
| ----------------- | ----------------------- |
| Repository is not a fork | "[About forks](/github/collaborating-with-issues-and-pull-requests/about-forks)" |
| Repository is not archived | "[Archiving repositories](/github/creating-cloning-and-archiving-repositories/archiving-repositories)" |{% ifversion fpt or ghec %}
| Repository is public, or repository is private and you have enabled read-only analysis by {% data variables.product.prodname_dotcom %}, dependency graph, and vulnerability alerts in the repository's settings | "[Managing data use settings for your private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)." |{% endif %}
| Repository contains dependency manifest file from a package ecosystem that {% data variables.product.prodname_dotcom %} supports | "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)" |
| {% data variables.product.prodname_dependabot_security_updates %} are not disabled for the repository | "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repository](#managing-dependabot-security-updates-for-your-repositories)" |

If security updates are not enabled for your repository and you don't know why, first try enabling them using the instructions given in the procedural sections below. If security updates are still not working, you can contact {% data variables.contact.contact_support %}.

## Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories

You can enable or disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository (see below).

You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." 

{% data variables.product.prodname_dependabot_security_updates %} require specific repository settings. For more information, see "[Supported repositories](#supported-repositories)."

### Enabling or disabling {% data variables.product.prodname_dependabot_security_updates %} for an individual repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. Under "Configure security and analysis features", to the right of "{% data variables.product.prodname_dependabot %} security updates", click **Enable** or **Disable**.
  {% ifversion fpt or ghec %}!["Configure security and analysis features" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-button.png){% else %}!["Configure security and analysis features" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}


## Further reading

- "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% ifversion fpt or ghec %}
- "[Managing data use settings for your private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"{% endif %}
- "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
