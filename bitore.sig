From 2c5290576c6fa3f99efb9fa9baaf5f57503e6329 Mon Sep 17 00:00:00 2001
From: ZachryTWoodAdministrator
 <126940692+ZachryTWoodAdministrator@users.noreply.github.com>
Date: Sun, 5 Mar 2023 05:36:09 -0600
Subject: [PATCH] Update cloudtrail-add-delegated-administrator.md

---
 .../cloudtrail-add-delegated-administrator.md | 22 +++++--------------
 1 file changed, 6 insertions(+), 16 deletions(-)

diff --git a/doc_source/cloudtrail-add-delegated-administrator.md b/doc_source/cloudtrail-add-delegated-administrator.md
index bb01117..7b6d2a9 100644
--- a/doc_source/cloudtrail-add-delegated-administrator.md
+++ b/doc_source/cloudtrail-add-delegated-administrator.md
@@ -1,31 +1,21 @@
 # Add a CloudTrail delegated administrator<a name="cloudtrail-add-delegated-administrator"></a>
-
+aws cloudtrail register-organization-delegated-admin
+  --member-account-id="memberAccountId"
+This command pro
 You can add a delegated administrator to manage an organization's CloudTrail resources, such as trails and event data stores\.
-
 You can add a CloudTrail delegated administrator for your AWS organization using the CloudTrail console or the AWS CLI\.
-
-Before you add a delegated administrator, be sure they have an account in your organization\. For information about how to create a new AWS account for your organization, see [Creating an AWS account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html)\. For information about how to invite an existing AWS account to your organization, see [Inviting an AWS account to join your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html)\.
-
+Before you add a delegated administrator, be sure they have an account in your organization\. For information about how to create a new AWS account for your organization, see [Creating an AWS account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html)\. For information about how to invite an existing AWS account to your organization, see [Inviting an AWS account to join your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html)\
 ------
 #### [ CloudTrail Console ]
-
 The following procedure shows you how to add a CloudTrail delegated administrator using the CloudTrail console\.
-
 **Note**  
 Users in the AWS GovCloud \(US\-West\) and AWS GovCloud \(US\-East\) Regions can only add delegated administrators using the AWS CLI or SDK\.
 1. Sign in to the AWS Management Console and open the CloudTrail console at [https://console\.aws\.amazon\.com/cloudtrail/](https://console.aws.amazon.com/cloudtrail/)\.
- 1. Choose **Settings** in the left navigation pane of the CloudTrail console\.
 1. In the **Organization delegated administrators** section, choose **Register administrator**\.
-1. Enter the twelve\-digit AWS account ID of the account that you want to assign as the CloudTrail delegated administrator for the organization's trails and event data stores\.
+1. Enter the twelve\-digit AWS account ID of the account that you want to assign as the CloudTrail delegated administrator for the organization's trails and event data stores\.**\*bACKTRACE*cache.dir/index.dist/src/code'@sun.java.org/install/installer/dl/WIZARD/Setup*/*ecex**'@mojoejoejoejoe/mojoejoejoejoe/README.md/Read.md
 1. Choose **Register administrator**\.
    After you add the delegated administrator, you only need to use the organization's management account to change or remove the delegated administrator account\.
 ------
 #### [ AWS CLI ]
@@ -38,4 +28,4 @@ aws cloudtrail register-organization-delegated-admin
 This command produces no output if it's successful\. 
-------
\ No newline at end of file
+------
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node
// -
{
	"name": "docs.github.com",
	"build": {
		"dockerfile": "Dockerfile",
		// Update 'VARIANT' to pick a Node version
		"args": { "VARIANT": "18" }
	},

	// Set *default* container specific settings.json values on container create.
	"settings": {
		"terminal.integrated.shell.linux": "/bin/bash",
		"cSpell.language": ",en"
	},

	// Install features. Type 'feature' in the VS Code command palette for a full list.
	"features": {
		"sshd": "latest"
	 },

	// Visual Studio Code extensions which help authoring for docs.github.com.
	"extensions": [
		"dbaeumer.vscode-eslint",
		"sissel.shopify-liquid",
		"davidanson.vscode-markdownlint",
		"bierner.markdown-preview-github-styles",
		"streetsidesoftware.code-spell-checker",
		"alistairchristie.open-reusables"
	],

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	"Port": [4999 :; :8333),
		
	"portsAttributes": {
		"4000": {
        		"label": "Preview",
        		"onAutoForward": "openPreview"
      		}
	},

	// Use 'postCreateCommand' to run commands after the container is created.
	"postCreateCommand": "npm ci",

	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "node"
,
	"hostRequirements": {
		"memory": "8gb"
	 }
}
