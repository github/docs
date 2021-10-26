-Skip to content
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
walletlink
/
walletlink
Public
An open protocol that lets users connect their mobile wallets to your DApp

www.walletlink.org/
 View license
 437 stars  179 forks
Code
Issues
27
Pull requests
21
Actions
Projects
Wiki
Security
Insights
This branch is 1 commit ahead, 8 commits behind master.
 #142
Latest commit
@dependabot
dependabot
…
on Aug 11
Git stats
Files
README.md
WalletLink
WalletLink is an open protocol that lets users connect their mobile wallets to your DApp.

With WalletLink, users can use your application in any desktop browser without installing an extension, and the secure tunnel established between your app and the mobile wallet with end-to-end encryption utilizing client-generated keys keeps all user activity private.

For DApp developers to integrate with WalletLink, all you need to do is drop a few lines of code into your application, and WalletLink will take care of the rest. WalletLink is open-source and uses minimal dependencies for maximum security and no code bloat.

Getting Started
Installation
# With Yarn
yarn add walletlink

# With NPM
npm install walletlink
The following instructions are in TypeScript, but the usage is the same in JavaScript, except for the occasional type annotations, for example : string[] or as any.

Upgrading from WalletLink 1.0 to 2.0
For most users, simply update the NPM package, and you should be good to go.

If you were using ethereum.on("accountsChanged"), please remove it and obtain addresses via EIP-1102 callbacks instead. It's removed to improve compatibility with the latest web3.js.

Dark mode theme (darkMode) is now available as an option to WalletLink constructor.

Initializing WalletLink and a WalletLink-powered Web3 object
// TypeScript
import WalletLink from 'walletlink'
import Web3 from 'web3'

const APP_NAME = 'My Awesome App'
const APP_LOGO_URL = 'https://example.com/logo.png'
const ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>'
const CHAIN_ID = 1

// Initialize WalletLink
export const walletLink = new WalletLink({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
  darkMode: false
})

// Initialize a Web3 Provider object
export const ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID)

// Initialize a Web3 object
export const web3 = new Web3(ethereum as any)
Use EIP-1102 to obtain authorization and get Ethereum accounts
Invoking EIP-1102 will show a QR code dialog if the user's mobile wallet is not already connected to your app. The following code should run in response to a user-initiated action such as clicking a button to ensure the pop up is not blocked by the browser.

// Use eth_RequestAccounts
ethereum.send('eth_requestAccounts').then((accounts: string[]) => {
  console.log(`User's address is ${accounts[0]}`)

  // Optionally, have the default account set for web3.js
  web3.eth.defaultAccount = accounts[0]
})

// Alternatively, you can use ethereum.enable()
ethereum.enable().then((accounts: string[]) => {
  console.log(`User's address is ${accounts[0]}`)
  web3.eth.defaultAccount = accounts[0]
})
That's it! Once the authorization is obtained from the user, the Web3 object (web3) and the Web3 Provider (ethereum) are ready to be used as per usual.

Disconnecting / De-establishing a link
To disconnect, call the instance method disconnect() on the WalletLink object, or the instance method close() on the WalletLink Web3 Provider object. This will de-establish the link, and require user to reconnect by scanning QR code again.

walletLink.disconnect()
// is the same as the following:
ethereum.close()
Copyright © 2018-2020 WalletLink.org <https://www.walletlink.org/>
Copyright © 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
Attributions
Eth-json-rpc-filters under the ISC license
Safe-event-emitter under the ISC license
Json-rpc-engine under the ISC license
Eth-rpc-errors under the MIT license
Eth-block-tracker under the MIT license
Releases
 4 tags
Packages
No packages published
Used by 1.4k
@eremitik
@mager
@SengokuHigh
@PharoACM
@tigwyk
@Ectsang
@benmercerdev
@milesz8
+ 1,348
Contributors 9
@petejkim
@hieronymus777
@AndrewGold
@brendanww
@vishnumad
@jakepanitz
@styner32
@johnrjj
@Gilg4mesh
Languages
TypeScript
57.7%
 
Go
21.2%
 
JavaScript
15.6%
 
SCSS
4.6%
 
HTML
0.4%
 
Makefile
0.3%
 
Dockerfile
0.2%
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Copied!-
title: About project boards
intro: 'Project boards on {% data variables.product.product_name %} help you organize and prioritize your work. You can create project boards for specific feature work, comprehensive roadmaps, or even release checklists. With project boards, you have the flexibility to create customized workflows that suit your needs.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects/
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

{% data reusables.projects.project_boards_old %}

Project boards are made up of issues, pull requests, and notes that are categorized as cards in columns of your choosing. You can drag and drop or use keyboard shortcuts to reorder cards within a column, move cards from column to column, and change the order of columns.

Project board cards contain relevant metadata for issues and pull requests, like labels, assignees, the status, and who opened it. {% data reusables.project-management.edit-in-project %}

You can create notes within columns to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_location %}, or to add information related to the project board. You can create a reference card for another project board by adding a link to a note. If the note isn't sufficient for your needs, you can convert it to an issue. For more information on converting project board notes to issues, see "[Adding notes to a project board](/articles/adding-notes-to-a-project-board)."

Types of project boards:

- **User-owned project boards** can contain issues and pull requests from any personal repository.
- **Organization-wide project boards** can contain issues and pull requests from any repository that belongs to an organization.  {% data reusables.project-management.link-repos-to-project-board %} For more information, see "[Linking a repository to a project board](/articles/linking-a-repository-to-a-project-board)."
- **Repository project boards** are scoped to issues and pull requests within a single repository. They can also include notes that reference issues and pull requests in other repositories.

## Creating and viewing project boards

To create a project board for your organization, you must be an organization member. Organization owners and people with project board admin permissions can customize access to the project board.

If an organization-owned project board includes issues or pull requests from a repository that you don't have permission to view, the card will be redacted.  For more information, see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)."

The activity view shows the project board's recent history, such as cards someone created or moved between columns. To access the activity view, click **Menu** and scroll down.

To find specific cards on a project board or view a subset of the cards, you can filter project board cards. For more information, see "[Filtering cards on a project board](/articles/filtering-cards-on-a-project-board)."

To simplify your workflow and keep completed tasks off your project board, you can archive cards. For more information, see "[Archiving cards on a project board](/articles/archiving-cards-on-a-project-board)."

If you've completed all of your project board tasks or no longer need to use your project board, you can close the project board. For more information, see "[Closing a project board](/articles/closing-a-project-board)."

You can also [disable project boards in a repository](/articles/disabling-project-boards-in-a-repository) or [disable project boards in your organization](/articles/disabling-project-boards-in-your-organization), if you prefer to track your work in a different way.

{% data reusables.project-management.project-board-import-with-api %}

## Templates for project boards

You can use templates to quickly set up a new project board. When you use a template to create a project board, your new board will include columns as well as cards with tips for using project boards. You can also choose a template with automation already configured.

| Template | Description |
| --- | --- |
| Basic kanban | Track your tasks with To do, In progress, and Done columns |
| Automated kanban | Cards automatically move between To do, In progress, and Done columns | 
| Automated kanban with review | Cards automatically move between To do, In progress, and Done columns, with additional triggers for pull request review status |
| Bug triage | Triage and prioritize bugs with To do, High priority, Low priority, and Closed columns |

For more information on automation for project boards, see "[About automation for project boards](/articles/about-automation-for-project-boards)."

![Project board with basic kanban template](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Further reading

- "[Creating a project board](/articles/creating-a-project-board)"
- "[Editing a project board](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
- "[Adding issues and pull requests to a project board](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[Keyboard shortcuts](/articles/keyboard-shortcuts/#project-boards)"
