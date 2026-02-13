Skip to content
dd-trace-js
Repository navigation
Code
Issues
178
 (178)
Releases v5.85.0
5.85.0
Latest
@github-actions github-actions released this 1 hour ago
 v5.85.0
 d079293
[1630815773] - (SEMVER-PATCH) refactor(prisma): Prisma instrumentation rewrite (Bowen Brooks) #7447
[de724d0a73] - (SEMVER-PATCH) chore: update pr template to not show warning in pr (Roch Devost) #7428
[80571e0927] - (SEMVER-PATCH) fix(ts): added filter into ts definition file (Pablo Erhard) #7368
[93f7c4b262] - (SEMVER-PATCH) Upgrade pprof-nodejs to 5.13.3 (Attila Szegedi) #7449
[d86c16b52f] - (SEMVER-PATCH) chore(tests): added varySandbox for bullmq ESM tests (Pablo Erhard) #7448
[c195ee802f] - (SEMVER-PATCH) fix: reduce memory allocation and use transparent instrumentation (Ruben Bridgewater) #7422
[d5e899b9d1] - (SEMVER-PATCH) [test optimization] Fix quarantined tests being skipped rather than ignored in cypress (Juan Antonio Fernández de Alba) #7442
[61ead8491c] - (SEMVER-PATCH) fix: add container id to dogstatsd metrics (Roch Devost) #7435
[c5e98c0a86] - (SEMVER-PATCH) test: fix assertion transform regression (Juan Antonio Fernández de Alba) #7443
[fe7175a117] - (SEMVER-PATCH) refactor(esbuild): extract logging into module (Thomas Watson) #7439
[3c1cd8aefd] - (SEMVER-PATCH) chore(types): fix TypeScript errors in the esbuild package (Thomas Watson) #7438
[33297e0eb0] - (SEMVER-PATCH) chore(lint): run linting on the root of package folders (Thomas Watson) #7437
[4afd74ae7a] - (SEMVER-PATCH) ci: sign commits created by bots (Ruben Bridgewater) #7397
[313fe22142] - (SEMVER-PATCH) fix: fix minor azure-function and mariadb bugs (simon-id) #7007
[da07fea5f8] - (SEMVER-PATCH) chore(tests): added ESM test for light-my-request (Pablo Erhard) #7433
[09945cd21f] - (SEMVER-PATCH) chore(debugger): add name to worker thread (Thomas Watson) #7432
[ff416e6ff1] - (SEMVER-PATCH) chore(deps-dev): bump p-limit from 3.1.0 to 7.2.0 (dependabot[bot]) #7425
[5e2f01325c] - (SEMVER-PATCH) chore(deps): bump the gh-actions-packages group across 4 directories with 3 updates (dependabot[bot]) #7426
[3acebd003e] - (SEMVER-PATCH) chore(deps-dev): bump the dev-minor-and-patch-dependencies group across 1 directory with 4 updates (dependabot[bot]) #7424
[a679e827c0] - (SEMVER-PATCH) chore: update iitm and fix initialize (Ruben Bridgewater) #7387
[76e93d7934] - (SEMVER-PATCH) fix(ws): handle removing untracked event listeners (Crystal Luc-Magloire) #7419
[d308b93ad0] - (SEMVER-PATCH) chore: activate unicorn/no-array-for-each eslint rule (Ruben Bridgewater) #7403
[9ea0f34154] - (SEMVER-PATCH) fix: update vendoring to keep class names and function names (Roch Devost) #7416
[41c8ca6162] - (SEMVER-PATCH) refactor(debugger): add JSDoc types for CDP getProperties (Thomas Watson) #7418
[e19ce95452] - (SEMVER-PATCH) test: added sqlite3 into knex externals and add process.exit patch (Pablo Erhard) #7413
[68206c0dbb] - (SEMVER-PATCH) chore: fix flakiness report, lint scripts, and fix appsec test (Ruben Bridgewater) #7396
[2e337bd1be] - (SEMVER-PATCH) refactor(logging): use printf-style formatting (Thomas Watson) #7409
[627ba54479] - (SEMVER-PATCH) move bun cache to under node_modules (Roch Devost) #7407
[3eb1d7a879] - (SEMVER-PATCH) chore(ci) update one-pipeline (campaigner-prod[bot]) #7411
[60565f1c6e] - (SEMVER-PATCH) Fix: Update Opentelemety Active Functionality (Bowen Brooks) #7319
[d399d0f641] - (SEMVER-MINOR) feat(test-optimization): create final_status tag on test event for jest (Calvin Bayer) #7356
[0b299bca72] - (SEMVER-MINOR) feat(debugger): add support for v2 input endpoint detection (Thomas Watson) #7308
[0ac57880dc] - (SEMVER-PATCH) refactor(config): modernize Config class structure and extract stateless methods (Thomas Watson) #7408
[c80bbc29c0] - (SEMVER-PATCH) chore(deps): bump the test-versions group across 1 directory with 2 updates (dependabot[bot]) #7405
[657b4f922d] - (SEMVER-PATCH) ci: fix coverage reports and prevent detecting fixture files (Ruben Bridgewater) #7391
[d19c433535] - (SEMVER-PATCH) fix(debugger): don't expect probe config to contain capture object (Thomas Watson) #6807
[75b67c268a] - (SEMVER-PATCH) perf: cache serverless environment detection at startup (Thomas Watson) #7404
[4a8a494c6e] - (SEMVER-PATCH) chore: activate comma-dangle eslint rule (Ruben Bridgewater) #7402
[a894629556] - (SEMVER-PATCH) ci: fix added commits breaking CI validation (Ruben Bridgewater) #7393
[1f1a5024a8] - (SEMVER-MINOR) Emit the number of loaded source maps in the profile metadata (Attila Szegedi) #7382
[f8c43343e7] - (SEMVER-PATCH) fix(debugger): apply source maps to probe stack traces (Thomas Watson) #7336
[62d6580053] - (SEMVER-PATCH) perf(tests): cache dd-trace tarball for sandbox creation (Thomas Watson) #7351
[38b60f7e9f] - (SEMVER-PATCH) test(debugger): fix race condition in test helpers (Thomas Watson) #7394
[99aba5a361] - (SEMVER-MINOR) [test optimization][SDTEST-3004] Upload code coverage reports automatically (Juan Antonio Fernández de Alba) #7335
[b42c5f3da3] - (SEMVER-PATCH) fix: maximum attempts on running uppon bun-js (Everton Segur) #7284
[3523cd6828] - (SEMVER-PATCH) ci: fix workflow name conflicts (Ruben Bridgewater) #7388
[c273d49ba1] - (SEMVER-PATCH) ci: debug flakiness report (Ruben Bridgewater) #7380
[905f387f4b] - (SEMVER-PATCH) ci: fix github rate limit (Ruben Bridgewater) #7389
[7d6c9f0e66] - (SEMVER-PATCH) chore(deps-dev): bump the dev-minor-and-patch-dependencies group across 1 directory with 3 updates (dependabot[bot]) #7392
[237283029b] - (SEMVER-PATCH) ci: fix yarn deduping working for any PR (Ruben Bridgewater) #7364
[d0c5b45957] - (SEMVER-PATCH) ci: commit vendored files with octo-sts (Ruben Bridgewater) #7381
[bdb76d3219] - (SEMVER-PATCH) chore(test): Fix iast overhead controller flaky test (Ugaitz Urien) #7384
Assets
2
You reacted
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information
Copied!

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