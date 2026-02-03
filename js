# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.13.0".

# Verify npm version:
npm -v # Should print "11.6.2".

https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh
"Skip to content

TipFor an advanced search, use our 
Search cheat sheet
GitHub’s search supports a variety of different operations. Here’s a quick cheat sheet for some of the common searches.

For more information, visit our search help section.

Basic search
This search	Finds repositories with…
cat stars:>100	Find cat repositories with greater than 100 stars.
user:defunkt	Get all repositories from the user defunkt.
tom location:"San Francisco, CA"	Find all tom users in "San Francisco, CA".
join extension:coffee	Find all instances of join in code with coffee extension.
NOT cat	Excludes all results containing cat.
Repository search
Repository search looks through the projects you have access to on GitHub. You can also filter the results:

This search	Finds repositories with…
cat stars:>100	Find cat repositories with greater than 100 stars.
user:defunkt	Get all repositories from the user defunkt.
pugs pushed:>2013-01-28	Pugs repositories pushed to since Jan 28, 2013.
node.js forks:<200	Find all node.js repositories with less than 200 forks.
jquery size:1024..4089	Find jquery repositories between the sizes 1024 and 4089 kB.
gitx fork:true	Repository search includes forks of gitx.
gitx fork:only	Repository search returns only forks of gitx.
Code search
Code search looks through the files hosted on GitHub. You can also filter the results:

This search	Finds repositories with…
install repo:charles/privaterepo	Find all instances of install in code from the repository charles/privaterepo.
shogun user:heroku	Find references to shogun from all public heroku repositories.
join extension:coffee	Find all instances of join in code with coffee extension.
system size:>1000	Find all instances of system in code of file size greater than 1000kbs.
examples path:/docs/	Find all examples in the path /docs/.
replace fork:true	Search replace in the source code of forks.
Issue search
Issue search looks through issues and pull requests on GitHub. You can also filter the results:

This search	Finds issues…
encoding user:heroku	Encoding issues across the Heroku organization.
cat is:open	Find cat issues that are open.
strange comments:>42	Issues with more than 42 comments.
hard label:bug	Hard issues labeled as a bug.
author:mojombo	All issues authored by mojombo.
mentions:tpope	All issues mentioning tpope.
assignee:rtomayko	All issues assigned to rtomayko.
exception created:>2012-12-31	Created since the beginning of 2013.
exception updated:<2013-01-01	Last updated before 2013.
User search
User search finds users with an account on GitHub. You can also filter the results:

This search	Finds repositories with…
fullname:"Linus Torvalds"	Find users with the full name "Linus Torvalds".
tom location:"San Francisco, CA"	Find all tom users in "San Francisco, CA".
chris followers:100..200	Find all chris users with followers between 100 and 200.
ryan repos:>10	Find all ryan users with more than 10 repositories.

GitHub, Inc. © 2026
Terms
Privacy
Security
Status
Docs
Contact
"

# Configurar el acceso al servidor MCP para tu organización o empresa

You can configure an MCP registry URL and access control policy to determine which MCP servers developers can discover and use in supported IDEs with GitHub Copilot.

<!-- TRANSLATION_FALLBACK prop=markdown type=ParseError line=3 col=59 msg="tag 'variables' not found" -->
> \[!NOTE]
> The MCP registry URL and allowlist are in public preview and subject to change.

## Prerequisites

Before you can fully configure MCP server access for your company, you need to create an MCP registry. See [Configure an MCP registry for your organization or enterprise](/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry).

## Configuring the MCP allowlist policy for an enterprise

To ensure uniform access, you can set and maintain your MCP registry URL and allowlist policy at the enterprise level. Otherwise, if your teams have different needs, you should configure separate policies for each organization.

1. In the top-right corner of GitHub, click your profile picture.

2. Depending on your environment, click **Enterprise**, or click **Enterprises** then click the enterprise you want to view.

3. At the top of the page, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-label="copilot" role="img"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> AI controls**.

4. In the sidebar, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-mcp" aria-label="mcp" role="img"><path d="M5.52 1.12a3.578 3.578 0 0 1 6.078 2.98 3.578 3.578 0 0 1 2.982 6.08l-3.292 3.293a.252.252 0 0 0 0 .354l.843.843a.749.749 0 1 1-1.06 1.06l-.844-.843a1.75 1.75 0 0 1 0-2.474L13.52 9.12a2.08 2.08 0 0 0 0-2.94 2.08 2.08 0 0 0-2.94 0L7.731 9.03A.75.75 0 0 1 6.67 7.97l2.85-2.85a2.08 2.08 0 0 0 0-2.94 2.08 2.08 0 0 0-2.94 0l-4.799 4.8A.75.75 0 0 1 .72 5.92Z"></path><path d="M7.52 3.12a.749.749 0 1 1 1.06 1.06L5.731 7.03A2.079 2.079 0 0 0 8.67 9.97l2.85-2.85a.749.749 0 1 1 1.06 1.06l-2.849 2.85A3.578 3.578 0 0 1 4.67 5.97Z"></path></svg> **MCP**.

5. Ensure **MCP servers in Copilot** is set to **Enabled everywhere**.

6. In the **MCP Registry URL** section, enter the URL of your registry, then click **Save**.

   > \[!NOTE]
   > If you set up your MCP registry using Azure API Center, enter the base URL for your API Center. Including route suffixes like `/v0.1/servers` will cause the registry to error out.

7. In the **Restrict MCP access to registry servers** section, select the dropdown menu, then click one of the following options:

   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

   Your chosen policy will immediately apply to developers in your enterprise.

## Configuring the MCP allowlist policy for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-organization" aria-label="organization" role="img"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg> Organizations**.

2. Next to the organization, click **Settings**.

3. In the sidebar, under "Code, planning, and automation", click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copilot" aria-label="copilot" role="img"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg> Copilot**, then click **Policies**.

4. In the "Features" section, ensure **MCP servers in Copilot** is set to **Enabled**.

5. In the **MCP Registry URL (optional)** field, enter the URL of your registry, then click **Save**.

   > \[!NOTE]
   > If you set up your MCP registry using Azure API Center, enter the base URL for your API Center. Including route suffixes like `/v0.1/servers` will cause the registry to error out.

6. In the **Restrict MCP access to registry servers** section, select the dropdown menu, then click one of the following options:

   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

   Your chosen policy will immediately apply to developers in your organization.

## Next steps

For detailed information on MCP allowlist enforcement and limitations, see [MCP allowlist enforcement](/en/copilot/reference/mcp-allowlist-enforcement).