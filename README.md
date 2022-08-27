DEPOSIT TICKET
+# They are provided by a third-party and are governed by
+# separate terms of service, privacy policy, and support
+# documentation.
+
+# This workflow will install deno then run daily across eslint and Test.
+# For more information see: https://github.com/denoland/setup-deno
+
+name: Deno
+
+on:
+  push:
+    branches: ["mainbranch"]
+  pull_request:
+    branches: ["trunk"]
+
+permissions:
+  contents: read
+
+jobs:
+  test:
+    runs-on: ubuntu-latest
+
+    steps:
+      - name: Setup repo
+        uses: actions/checkout@v3
+
+      - name: Setup Deno
+        # uses: denoland/setup-deno@v1
+        uses: denoland/setup-deno@004814556e37c54a2f6e31384c9e18e983317366
+        with:
+          deno-version: v1.x
+
+      # Uncomment this step to verify the use of 'deno fmt' on each commit.
+      # - name: Verify formatting
+      #   run: deno fmt --check
+
+      - name: Run linter
+        run: deno lint
+
+      - name: Run tests
+        run: deno.xml
+        bundle-with : slate.yml
Run::/: Runs: Test
Test: tests'@ci
+    This workflow uses actions that are not certified by GitHub.
+They are provided by a third-party and are governed by
+separate terms of service, privacy policy, and support
+documentation.
+💁 The OpenShift Starter workflow will:
+- Checkout your repository
+- Perform a container image build
+- Push the built image to the GitHub Container Registry (GHCR)
+- Log in to your OpenShift cluster
+- Create an OpenShift app from the image and expose it to the internet
+ℹ️ Configure your repository and the workflow with the following steps:
+1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
+2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
+- https://github.com/redhat-actions/oc-login#readme
+- https://docs.github.com/en/actions/reference/encrypted-secrets
+- https://cli.github.com/manual/gh_secret_set
+3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
+4. (Optional) Edit the build-image step to build your project.
+The default build type is by using a Dockerfile at the root of the repository,
+but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
+5. Commit and push the workflow file to your default branch to trigger a workflow run.
+👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.
+name: OpenShift
+
+env:
+
+🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
+See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
+To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
+OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
+OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}
+
+🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
+OPENSHIFT_NAMESPACE: ""
+
+🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
+APP_NAME: ""
+
+🖊️ EDIT with the port your application should be accessible on.
+If the container image exposes exactly one port, this can be left blank.
+Refer to the 'port' input of https://github.com/linux32_86/fedoraOS.deb.rpdm.tar.gz.zip.unzipped/Zarchive/Ringtones'@moejojojojo/repositories/usr/bin/bash/'@action.js/pkg.yml/package.json/pkg.js
+APP_PORT: ""
+
+🖊️ EDIT to change the image registry settings.
+Registries such as GHCR, Quay.io, and Docker Hub are supported.
+IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
+IMAGE_REGISTRY_USER: ${{ github.actor }}
+IMAGE_REGISTRY_PASSWORD: ${{ github.token }}
+
+🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
+IMAGE_TAGS: ""
+
+on:
+
+https://docs.github.com/en/actions/reference/events-that-trigger-workflows
+workflow_dispatch:
+push:
+# Edit to the branch(es) you want to build and deploy on each push.
+branches: [ "paradice" ]
+
+jobs:
+
+🖊️ EDIT if you want to run vulnerability check on your project before deploying
+the application. Please uncomment the below CRDA scan job and configure to run it in
+your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
+TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
+For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows
+crda-scan:
+uses: ./.github/workflows/crda.yml
+secrets:
+CRDA_KEY: ${{ secrets.CRDA_KEY }}
+# SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }} # Either use SNYK_TOKEN or CRDA_KEY
+
+openshift-ci-cd:
+# 🖊️ Uncomment this if you are using CRDA scan step above
+# needs: crda-scan
+name: Build and deploy to OpenShift
+runs-on: ubuntu-20.04
+environment: production
+
+outputs:
+  ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
+  SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
+
+steps:
+- name: Check for required secrets
+  uses: actions/github-script@v6
+  with:
+    script: |
+      const secrets = {
+        OPENSHIFT_SERVER: `${{ secrets.OPENSHIFT_SERVER }}`,
+        OPENSHIFT_TOKEN: `${{ secrets.OPENSHIFT_TOKEN }}`,
+      };
+      const GHCR = "ghcr.io";
+      if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
+        core.info(`Image registry is ${GHCR} - no registry password required`);
+      }
+      else {
+        core.info("A registry password is required");
+        secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
+      }
+      const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
+        if (value.length === 0) {
+          core.error(`Secret "${name}" is not set`);
+          return true;
+        }
+        core.info(`✔️ Secret "${name}" is set`);
+        return false;
+      });
+      if (missingSecrets.length > 0) {
+        core.setFailed(`❌ At least one required secret is not set in the repository. \n` +
+          "You can add it using:\n" +
+          "GitHub UI: https://docs[.github](https://github.com/zakwarlord7/zakwarlord7/tree/c76344d06ee3aca71db749f20dea92a785d5d77a/.github).com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
+          "GitHub CLI: https://cli.github.com/manual/gh_secret_set \n" +
+          "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
+      }
+      else {
+        core.info(`✅ All the required secrets are set`);
+      }
+- name: Check out repository
+  uses: actions/checkout@v3
+
+- name: Determine app name
+  if: env.APP_NAME == ''
+  run: |
+    echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV
+- name: Determine image tags
+  if: env.IMAGE_TAGS == ''
+  run: |
+    echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV
+# https://github.com/redhat-actions/buildah-build#readme
+- name: Build from Dockerfile
+  id: build-image
+  uses: redhat-actions/buildah-build@v2
+  with:
+    image: ${{ env.APP_NAME }}
+    tags: ${{ env.IMAGE_TAGS }}
+
+    # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
+    # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
+    # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
+    dockerfiles: |
+      ./Dockerfile
+# https://github.com/redhat-actions/push-to-registry#readme
+- name: Push to registry
+  id: push-image
+  uses: redhat-actions/push-to-registry@v2
+  with:
+    image: ${{ steps.build-image.outputs.image }}
+    tags: ${{ steps.build-image.outputs.tags }}
+    registry: ${{ env.IMAGE_REGISTRY }}
+    username: ${{ env.IMAGE_REGISTRY_USER }}
+    password: ${{ env.IMAGE_REGISTRY_PASSWORD }}
+
+# The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}
+
+- name: Install oc
+  uses: redhat-actions/openshift-tools-installer@v1
+  with:
+    oc: 4
+
+# https://github.com/redhat-actions/oc-login#readme
+- name: Log in to OpenShift
+  uses: redhat-actions/oc-login@v1
+  with:
+    openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
+    openshift_token: ${{ env.OPENSHIFT_TOKEN }}
+    insecure_skip_tls_verify: true
+    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
+
+# This step should create a deployment, service, and route to run your app and expose it to the internet.
+# https://github.com/redhat-actions/oc-new-app#readme
+- name: Create and expose app
+  id: deploy-and-expose
+  uses: redhat-actions/oc-new-app@v1
+  with:
+    app_name: ${{ env.APP_NAME }}
+    image: ${{ steps.push-image.outputs.registry-path }}
+    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
+    port: ${{ env.APP_PORT }}
+
+- name: Print application URL
+  env:
+    ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
+    SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
+  run: |
+    [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
+    echo
+    echo "======================== Your application is available at: ========================"
+    echo ${{{{[' '"((c)(r)).[12753750.[00]m]BITORE_34173.1337'"'' }}
+    echo "===================================================================================
+    'equire':'' 'test''
+    Return:'' 'Run ''
+    ---branches: mainbranch
 title: Creating a repository from a template
 intro: You can generate a new repository with the same directory structure and files as an existing repository.
 redirect_from:
@@ -6,10 +246,10 @@ redirect_from:
   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
 versions:
-  fpt: '*'
-  ghes: '*'
-  ghae: '*'
-  ghec: '*'
+  ghec: 'OPTIONAL'
+  ghcr: 'OPTIONAL'
+  'gchr': 'OPTIONAL'
+  'require': 'test'
 topics:
   - Repositories
 shortTitle: Create from a template
[branch]
(label)
owner/repo


Prompts

? Yes/No Prompt [y/N]

? Short text prompt (Auto fill)

? Long text prompt [(e) to launch vim, enter to skip] 

? Single choice prompt [Use arrows to move, type to filter]
> Choice focused
  Choice 
  Choice

? Multi select prompt [Use arrows to move, space to select, type to filter]
> [x]  Choice selected and focused
  [x]  Choice selected
  [ ]  Projects
  [ ]  Milestone



State

#123 Open issue or pull request
#123 Closed issue pull request
#123 Merged pull request
#123 Draft pull request

✓ Checks passing
✓ Approved
- Review requested
+ Changes requested

✓ Success message
! Alert
✗ Error message (ideal)
error message (current)

✓ Item closed
✓ Item merged


Loading spinner

⣟ Action...



Lists

$ gh issue list 

Showing 3 of 222 issues in cli/cli

#1360  Ability to ski...                     about 2 days ago
#1358  Provide extra ...  (enhancement)      about 3 days ago
#1354  Add ability to...  (enhancement, ...  about 3 days ago



Detail view



Ability to skip confirmation via a flag
Open • AliabbasMerchant opened about 2 days ago • 1 comment


#1330 proposes to add confirmation to risky commands. It is a nice feature to have, but in order to support proper scriptability, we should support a flag (preferably  -y , like in most CLIs), to skip asking for confirmation. So for each of the 4 commands mentioned there (and possibly even more in the future), we should add support for the  -y  flag                                       


View this issue on GitHub: https://github.com/cli/cli/issues/1360


Headers


Creating issue in cli/cli

Showing 30 of 226 issues in cli/cli

Relevant pull requests in cli/cli

cli/cli
GitHub’s official command line tool

Default branch is not being prioritized
Closed • tierninho opened about 6 months ago • 1 comment



Empty states

Current branch
  There is no pull request associated with [master]

Created by you
  You have no open pull requests

Requesting a code review from you
  You have no pull requests to review

No pull requests match your search in cli/cli

No issues match your search in cli/cli

There are no open issues in ampinsk/create-test




Help page

$ gh

Work seamlessly with GitHub from the command line. 

USAGE
  gh <command> <subcommand> [flags]
  Commands are run inside of a GitHub repository.

CORE COMMANDS
  issue:       Create and view issues
  pr:          Create, view, and checkout pull requests
  repo:        Create, clone, fork, and view repositories

ADDITIONAL COMMANDS
  help:        Help about any command
  config:      Set and get preferences
  completion:  Generate shell completion scripts

FLAGS
  -h, --help:              Show help for command
  -v, --version:           Show gh version

EXAMPLES
  $ gh issue create
  $ gh pr list
  $ gh repo fork

LEARN MORE
  Use "gh [command] [subcommand] --help" for more information about a command.
  Read the manual at <http://cli.github.com/manual>

FEEDBACK 
  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
  Open an issue using “gh issue create -R cli/cli”


From ID:44c295b9-ce08-424f-b6a5-b0f009ad802c
# <
# https://pnc.com//# docs
# The open-source repo for docs.github.com
# CI: 
# Name :
# DEPOSIT TICKET:
# Federal 941 Deposit Report
# ADP
# Report Range 5/4/2022 - 6/4/2022									
# 88-1303491	State ID: 00037305581	SSN: 633-44-1725	00000						
# Employee Number: 3
# Description	Amount							5/4/2022 - 6/4/2022	
# Payment :
 - =T.DIST("Display All)", "ZACHRY T WOOD":,'
 //POST/NPRT--request\\
# 1. Social Security (Employee + Employer)			26662						
# 2. Medicare (Employee + Employer)			861193422444					Hourly	
# 3. Federal Income Tax			8385561229657			
# Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late '' 'payment, previous overpayment, penalty and others.
# Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.									
Employer Customized Report
ADP
Report Range5/4/2022 - 6/4/2022	88-1656496	state ID: 633441725	Ssn :XXXXX1725	State: 	All	Local ID: 00037305581		2267700	
EIN:									
Customized Report		Amount						Employee Payment Report
ADP	
Employee Number: 3
Description									
Wages, Tips and Other Compensation		22662983361014		Report Range:		2022-05-04 - 2022-06-04		Tips	
Taxable SS Wages		215014		ZACHRY T WOOD				5105000	
Taxable SS Tips		00000		5222 BRADFORD DR DALLAS TX 75235-8313					
Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT	
Advanced EIC Payment		00000		3361014					
Federal Income Tax Withheld		8385561229657		Bonus		00000		00000	
Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2	
Employee Medicare Tax Withheld		532580113436		Total		00000		00000	
State Income Tax Withheld		00000		22662983361014					
Local Income Tax Withheld
Customized Employer Tax Report		00000		Deduction Summary					
Description		Amount		Health Insurance					
Employer SS Tax
Employer Medicare Tax		13331		00000					
Federal Unemployment Tax		328613309009		Tax Summary					
State Unemployment Tax		00442		Federal Tax	00007			Total Tax	
Customized Deduction Report		00840		$8,385,561,229,657@3,330.90		Local Tax			
Health Insurance						00000			
401K		00000		Advanced EIC Payment			8918141356423		
		00000		00000				Total	
						401K			
						00000		00000	
									
ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050	
									
									
SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.									
The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.									
									
The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763				
									
									
									
									
3/6/2022 at 6:37 PM									
				Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	
									
GOOGL_income-statement_Quarterly_As_Originally_Reported				24934000000	25539000000	37497000000	31211000000	30818000000	
				24934000000	25539000000	21890000000	19289000000	22677000000	
Cash Flow from Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000	
Net Cash Flow from Continuing Operating Activities, Indirect				20642000000	18936000000	18525000000	17930000000	15227000000	
Cash Generated from Operating Activities				6517000000	3797000000	4236000000	2592000000	5748000000	
Income/Loss before Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000	
Total Adjustments for Non-Cash Items				3439000000	3304000000	2945000000	2753000000	3725000000	
Depreciation, Amortization and Depletion, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000	
Depreciation and Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000	
Depreciation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000	
Amortization, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000	
Stock-Based Compensation, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000	
Taxes, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000	
Investment Income/Loss, Non-Cash Adjustment				-14000000	64000000	-8000000	-255000000	392000000	
Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2225000000	2806000000	-871000000	-1233000000	1702000000	
Other Non-Cash Items				-5819000000	-2409000000	-3661000000	2794000000	-5445000000	
Changes in Operating Capital				-5819000000	-2409000000	-3661000000	2794000000	-5445000000	
Change in Trade and Other Receivables				-399000000	-1255000000	-199000000	7000000	-738000000	
Change in Trade/Accounts Receivable				6994000000	3157000000	4074000000	-4956000000	6938000000	
Change in Other Current Assets				1157000000	238000000	-130000000	-982000000	963000000	
Change in Payables and Accrued Expenses				1157000000	238000000	-130000000	-982000000	963000000	
Change in Trade and Other Payables				5837000000	2919000000	4204000000	-3974000000	5975000000	
Change in Trade/Accounts Payable				368000000	272000000	-3000000	137000000	207000000	
Change in Accrued Expenses				-3369000000	3041000000	-1082000000	785000000	740000000	
Change in Deferred Assets/Liabilities									
Change in Other Operating Capital									
				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000	
Change in Prepayments and Deposits				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000	
Cash Flow from Investing Activities									
Cash Flow from Continuing Investing Activities				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000	
				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000	
Purchase/Sale and Disposal of Property, Plant and Equipment, Net									
Purchase of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000	
Sale and Disposal of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000	
Purchase/Sale of Business, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000	
Purchase/Acquisition of Business				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000	
Purchase/Sale of Investments, Net									
Purchase of Investments				36512000000	31793000000	21656000000	39267000000	35580000000	
				100000000	388000000	23000000	30000000	-57000000	
Sale of Investments									
Other Investing Cash Flow					-15254000000				
Purchase/Sale of Other Non-Current Assets, Net				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000	
Sales of Other Non-Current Assets				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000	
Cash Flow from Financing Activities				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000	
Cash Flow from Continuing Financing Activities				13473000000		-12796000000	-11395000000	-7904000000	
Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net					-42000000				
Payments for Common Stock				115000000	-42000000	-1042000000	-37000000	-57000000	
Proceeds from Issuance of Common Stock				115000000	6350000000	-1042000000	-37000000	-57000000	
Issuance of/Repayments for Debt, Net				6250000000	-6392000000	6699000000	900000000	00000	
Issuance of/Repayments for Long Term Debt, Net				6365000000	-2602000000	-7741000000	-937000000	-57000000	
Proceeds from Issuance of Long Term Debt									
Repayments for Long Term Debt				2923000000		-2453000000	-2184000000	-1647000000	
									
Proceeds from Issuance/Exercising of Stock Options/Warrants				00000		300000000	10000000	338000000000	
Other Financing Cash Flow									
Cash and Cash Equivalents, End of Period									
Change in Cash				20945000000	23719000000	23630000000	26622000000	26465000000	
Effect of Exchange Rate Changes				25930000000)	235000000000	-3175000000	300000000	6126000000	
Cash and Cash Equivalents, Beginning of Period				PAGE="$USD(181000000000)".XLS	BRIN="$USD(146000000000)".XLS	183000000	-143000000	210000000	
Cash Flow Supplemental Section				23719000000000		26622000000000	26465000000000	20129000000000	
Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000	
Income Tax Paid, Supplemental				13412000000	157000000				
ZACHRY T WOOD								-4990000000	
Cash and Cash Equivalents, Beginning of Period									
Department of the Treasury									
Internal Revenue Service									
					Q4 2020			Q4  2019	
Calendar Year									
Due: 04/18/2022									
					Dec. 31, 2020			Dec. 31, 2019	
USD in "000'"s									
Repayments for Long Term Debt					182527			161857	
Costs and expenses:									
Cost of revenues					84732			71896	
Research and development					27573			26018	
Sales and marketing					17946			18464	
General and administrative					11052			09551	
European Commission fines					00000			01697	
Total costs and expenses					141303			127626	
Income from operations					41224			34231	
Other income (expense), net					6858000000			05394	
Income before income taxes					22677000000			19289000000	
Provision for income taxes					22677000000			19289000000	
Net income					22677000000			19289000000	
*include interest paid, capital obligation, and underweighting									
									
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)									
									
									
									
									
									
									
									
									
									
									
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)									
*include interest paid, capital obligation, and underweighting									
									
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)									
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)									
									
									
									
									
									
									
									
		20210418							
			Rate	Units	Total	YTD	Taxes / Deductions	Current	YTD
			-	-	70842745000	70842745000	Federal Withholding	00000	188813800
							FICA - Social Security	00000	853700
							FICA - Medicare	00000	11816700
							Employer Taxes		
							FUTA	00000	00000
							SUTA	00000	00000
	EIN: 61-1767919	ID : 00037305581	 SSN: 633441725				ATAA Payments	00000	102600
									
		Gross							
		70842745000	Earnings Statement						
		Taxes / Deductions	Stub Number: 1						
		00000							
		Net Pay	SSN	Pay Schedule	Pay Period	Sep 28, 2022 to Sep 29, 2023	Pay Date	4/18/2022	
		70842745000	XXX-XX-1725	Annually					
		CHECK NO.							
		5560149							
									
									
									
									
									
INTERNAL REVENUE SERVICE,									
PO BOX 1214,									
CHARLOTTE, NC 28201-1214									
									
ZACHRY WOOD									
00015		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
Form 1040 (2021)		76033000000	20642000000	18936000000					
Reported Normalized and Operating Income/Expense Supplemental Section									
Total Revenue as Reported, Supplemental		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000
Total Operating Profit/Loss as Reported, Supplemental		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000
Reported Effective Tax Rate		00000	00000	00000	00000	00000		00000	00000
Reported Normalized Income									
Reported Normalized Operating Profit									
Other Adjustments to Net Income Available to Common Stockholders									
Discontinued Operations									
Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010
Basic EPS from Continuing Operations		00114	00031	00028	00028	00027	00022	00017	00010
Basic EPS from Discontinued Operations									
Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010
Diluted EPS from Continuing Operations		00112	00031	00028	00027	00026	00022	00016	00010
Diluted EPS from Discontinued Operations									
Basic Weighted Average Shares Outstanding		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000
Diluted Weighted Average Shares Outstanding		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000
Reported Normalized Diluted EPS									
Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010
Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010
Basic WASO		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000
Diluted WASO		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000
Fiscal year end September 28th., 2022. | USD									
									
For Paperwork Reduction Act Notice, see the seperate Instructions.			This Product Cantains Sensitive Tax Payer Data						
									
					Request Date : 07-29-2022				
					Response Date : 07-29-2022				
					Tracking Number : 102393399156				
					Customer File Number : 132624428				
									
important information			Wage and Income Transcript						
					SSN Provided : XXX-XX-1725				
					Tax Periood Requested :  December, 2020				
									
									
									
									
			Form W-2 Wage and Tax Statement						
Employer : 									
  Employer Identification Number (EIN) :XXXXX4661									
INTU									
2700 C									
Quarterly Report on Form 10-Q, as filed with the Commission on									
Employee :									
  Employee's Social Security Number :XXX-XX-1725									
  ZACH T WOOD									
  5222 B									
on Form 8-K, as filed with the Commission on January 18, 2019).									
Submission Type :					Original document				
Wages, Tips and Other Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5105000.00					510500000				
Federal Income Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1881380.00					188813800				
Social Security Wages : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137700.00					13770000				
Social Security Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 					853700				
Medicare Wages and Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . 					510500000				
Medicare Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					118166700				
Social Security Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 					00000				
Allocated Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
Dependent Care Benefits : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
Deffered Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
Code "Q" Nontaxable Combat Pay : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . .					00000				
Code "W" Employer Contributions tp a Health Savings Account : . . . . . . . . . . . . . . . . . . . . . . . . . . 					00000				
Code "Y" Defferels under a section 409A nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . .  					00000				
Code "Z" Income under section 409A on a nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . .					00000				
Code "R" Employer's Contribution to MSA : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'					00000				
Code "S" Employer's Cotribution to Simple Account : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
Code "T" Expenses Incurred for Qualified Adoptions : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
Code "V" Income from exercise of non-statutory stock options : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
Code "AA" Designated Roth Contributions under a Section  401 (k)  Plan : . . . . . . . . . . . . . . . . . . . .					00000				
Code "BB" Designated Roth Contributions under a Section 403 (b) Plan : . . . . . . . . . . . . . . . . . . . . .					00000				
Code "DD" Cost of Employer-Sponsored Health Coverage : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .									
Code "EE" Designated ROTH Contributions Under a Governmental Section 457 (b) Plan : . . . . . . . . . . . . . . . . . . . . .									
Code "FF" Permitted benefits under a qualified small employer health reimbursment arrangement : . . . . . . . . . 					00000				
Code "GG" Income from Qualified Equity Grants Under Section 83 (i) : . . . . . . . . . . . . . . . . . . . . . . $0.00									
Code "HH" Aggregate Defferals Under section 83(i) Elections as of the Close of the Calendar Year : . . . . . . . 					00000				
Third Party Sick Pay Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					Unanswered				
Retirement Plan Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Unanswered								For the period 04/13/2022 to 04/29/2022
ZACHRY TYLER WOOD
Primary account number: 47-2041-6547 Page 2 of 3	
Statutory Employee : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Not Statutory Employee								Reference number	
W2 Submission Type : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Original								22116905560149	
W2 WHC SSN Validation Code : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Correct SSN								Reference number	
								22116905560149	
								Reference number	
								22116905560149	
				Transaction description				on your next statement as a single line item entitled Service
Waived - New Customer Period	
4/27/2022		Form 1099-G		Returned Item Fee (nsf)					
Detail of Services Used During Current Period									
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,									
Description						Volume	Amount		
Account Maintenance Charge						70846743866	00000	        	
Total For Services Used This Peiiod						00000	00000		
Total Service (harge						00
	00000		
Reviewing Your Statement				('PNCBANK					
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if:
you have any questions regarding your account(s); your name or address is incorrect;
• you have any questions regarding interest paid to an interest-bearing account.									
Balancing Your Account
Update Your Account Register									
Certified Copy of Resolutionsl
Authorizations For Accounts And Loans					@PNCBANK				
(Corporations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other Organizations)								step 2: Add together checks and other deductions listed in your account register but not on your statement.	
PNC Bank, National Association ("Bank")						Taxpayer I.D. Number (TIN)			C'eck
Deduction Descretio•
(iv)
(v)			account or benefit, or in payment of the individual obligations of, any individual obligations of any such persons to the Bank without regard to the disposition or purpose of same as allowed by applicable law.			D pNCBANK			

Copy A For The PNC Financial Services Group, Inc. All rights reserved.
ID:44c295b9-ce08-424f-b6a5-b0f009ad802c ::NOTE























-----

Components

Syntax
From ee3eafeb6238c785dfde82542eb9576da9437c52 Mon Sep 17 00:00:00 2001
From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
Date: Sat, 27 Aug 2022 06:57:59 -0500
Subject: [PATCH] Update creating-a-repository-from-a-template.md

---
 .../creating-a-repository-from-a-template.md  | 250 +++++++++++++++++-
 1 file changed, 245 insertions(+), 5 deletions(-)

diff --git a/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md b/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
index 9bdef7e4d67..bf5ff61a826 100644
--- a/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
+++ b/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
@@ -1,4 +1,244 @@
----
+
+
+# This workflow uses actions that are not certified by GitHub.
+# They are provided by a third-party and are governed by
+# separate terms of service, privacy policy, and support
+# documentation.
+
+# This workflow will install Deno then run Deno lint and test.
+# For more information see: https://github.com/denoland/setup-deno
+
+name: Deno
+
+on:
+  push:
+    branches: ["main"]
+  pull_request:
+    branches: ["main"]
+
+permissions:
+  contents: read
+
+jobs:
+  test:
+    runs-on: ubuntu-latest
+
+    steps:
+      - name: Setup repo
+        uses: actions/checkout@v3
+
+      - name: Setup Deno
+        # uses: denoland/setup-deno@v1
+        uses: denoland/setup-deno@004814556e37c54a2f6e31384c9e18e983317366
+        with:
+          deno'@v'-'"neizthelm/frost'$'@V8.02.10"'
+
+      # Uncomment this step to verify the use of 'deno fmt' on each commit.
+      # - name: Verify formatting
+      #   run: deno fmt --check
+
+      - name: rendeerer
+        run: deno.xml
+
+      - name: Run tests
+        run: Rust.yml
+        bundle-with : rake.i
+        
+    'Run: Runs test'@Travis.'@checks
+    This workflow uses actions that are not certified by GitHub.
+They are provided by a third-party and are governed by
+separate terms of service, privacy policy, and support
+documentation.
+💁 The OpenShift Starter workflow will:
+- Checkout your repository
+- Perform a container image build
+- Push the built image to the GitHub Container Registry (GHCR)
+- Log in to your OpenShift cluster
+- Create an OpenShift app from the image and expose it to the internet
+ℹ️ Configure your repository and the workflow with the following steps:
+1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
+2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
+- https://github.com/redhat-actions/oc-login#readme
+- https://docs.github.com/en/actions/reference/encrypted-secrets
+- https://cli.github.com/manual/gh_secret_set
+3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
+4. (Optional) Edit the build-image step to build your project.
+The default build type is by using a Dockerfile at the root of the repository,
+but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
+5. Commit and push the workflow file to your default branch to trigger a workflow run.
+👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.
+name: OpenShift
+
+env:
+
+🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
+See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
+To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
+OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
+OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}
+
+🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
+OPENSHIFT_NAMESPACE: ""
+
+🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
+APP_NAME: ""
+
+🖊️ EDIT with the port your application should be accessible on.
+If the container image exposes exactly one port, this can be left blank.
+Refer to the 'port' input of https://github.com/redhat-actions/oc-new-app
+APP_PORT: ""
+
+🖊️ EDIT to change the image registry settings.
+Registries such as GHCR, Quay.io, and Docker Hub are supported.
+IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
+IMAGE_REGISTRY_USER: ${{ github.actor }}
+IMAGE_REGISTRY_PASSWORD: ${{ github.token }}
+
+🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
+IMAGE_TAGS: ""
+
+on:
+
+https://docs.github.com/en/actions/reference/events-that-trigger-workflows
+workflow_dispatch:
+push:
+# Edit to the branch(es) you want to build and deploy on each push.
+branches:''\
  '-'' '['' 'paradice'' ']'
+
+jobs:
+
+🖊️ EDIT if you want to run vulnerability check on your project before deploying
+the application. Please uncomment the below CRDA scan job and configure to run it in
+your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
+TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
+For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows
+crda-scan:
+uses: ./.github/workflows/crda.yml
+secrets:
+CRDA_KEY: ${{ secrets.CRDA_KEY }}
+# SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }} # Either use SNYK_TOKEN or CRDA_KEY
+
+openshift-ci-cd:
+# 🖊️ Uncomment this if you are using CRDA scan step above
+# needs: crda-scan
+name: Build and deploy to OpenShift
+runs-on: ubuntu-20.04
+environment: production
+
+outputs:
+  ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
+  SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
+
+steps:
+- name: Check for required secrets
+  uses: actions/github-script@v6
+  with:
+    script: |
+      const secrets = {
+        OPENSHIFT_SERVER: `${{ secrets.OPENSHIFT_SERVER }}`,
+        OPENSHIFT_TOKEN: `${{ secrets.OPENSHIFT_TOKEN }}`,
+      };
+      const GHCR = "ghcr.io";
+      if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
+        core.info(`Image registry is ${GHCR} - no registry password required`);
+      }
+      else {
+        core.info("A registry password is required");
+        secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
+      }
+      const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
+        if (value.length === 0) {
+          core.error(`Secret "${name}" is not set`);
+          return true;
+        }
+        core.info(`✔️ Secret "${name}" is set`);
+        return false;
+      });
+      if (missingSecrets.length > 0) {
+        core.setFailed(`❌ At least one required secret is not set in the repository. \n` +
+          "You can add it using:\n" +
+          "GitHub UI: https://docs[.github](https://github.com/zakwarlord7/zakwarlord7/tree/c76344d06ee3aca71db749f20dea92a785d5d77a/.github).com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
+          "GitHub CLI: https://cli.github.com/manual/gh_secret_set \n" +
+          "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
+      }
+      else {
+        core.info(`✅ All the required secrets are set`);
+      }
+- name: Check out repository
+  uses: actions/checkout@v3
+
+- name: Determine app name
+  if: env.APP_NAME == ''
+  run: |
+    echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV
+- name: Determine image tags
+  if: env.IMAGE_TAGS == ''
+  run: |
+    echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV
+# https://github.com/redhat-actions/buildah-build#readme
+- name: Build from Dockerfile
+  id: build-image
+  uses: redhat-actions/buildah-build@v2
+  with:
+    image: ${{ env.APP_NAME }}
+    tags: ${{ env.IMAGE_TAGS }}
+
+    # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
+    # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
+    # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
+    dockerfiles: |
+      ./Dockerfile
+# https://github.com/redhat-actions/push-to-registry#readme
+- name: Push to registry
+  id: push-image
+  uses: redhat-actions/push-to-registry@v2
+  with:
+    image: ${{ steps.build-image.outputs.image }}
+    tags: ${{ steps.build-image.outputs.tags }}
+    registry: ${{ env.IMAGE_REGISTRY }}
+    username: ${{ env.IMAGE_REGISTRY_USER }}
+    password: ${{ env.IMAGE_REGISTRY_PASSWORD }}
+
+# The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}
+
+- name: Install oc
+  uses: redhat-actions/openshift-tools-installer@v1
+  with:
+    oc: 4
+
+# https://github.com/redhat-actions/oc-login#readme
+- name: Log in to OpenShift
+  uses: redhat-actions/oc-login@v1
+  with:
+    openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
+    openshift_token: ${{ env.OPENSHIFT_TOKEN }}
+    insecure_skip_tls_verify: true
+    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
+
+# This step should create a deployment, service, and route to run your app and expose it to the internet.
+# https://github.com/redhat-actions/oc-new-app#readme
+- name: Create and expose app
+  id: deploy-and-expose
+  uses: redhat-actions/oc-new-app@v1
+  with:
+    app_name: ${{ env.APP_NAME }}
+    image: ${{ steps.push-image.outputs.registry-path }}
+    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
+    port: ${{ env.APP_PORT }}
+
+- name: Print application URL
+  env:
+    ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
+    SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
+  run: |
+    [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
+    echo
+    echo "======================== Your application is available at: ========================"
+    echo ${{{{[' '"((c)(r)).[12753750].[00]m]BITORE_34173.1337'"'' }}
+    echo "===================================================================================
+    'equire':'' 'test''
+    Return:'' 'Run ''
+    ---branches: mainbranch
 title: Creating a repository from a template
 intro: You can generate a new repository with the same directory structure and files as an existing repository.
 redirect_from:
@@ -6,10 +246,10 @@ redirect_from:
   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
 versions:
-  fpt: '*'
-  ghes: '*'
-  ghae: '*'
-  ghec: '*'
+  ghec: 'OPTIONAL'
+  ghcr: 'OPTIONAL'
+  'gchr': 'OPTIONAL'
+  'require': 'test'
 topics:
   - Repositories
 shortTitle: Create from a template
[branch]
(label)
owner/repo


Prompts

? Yes/No Prompt [y/N]

? Short text prompt (Auto fill)

? Long text prompt [(e) to launch vim, enter to skip] 

? Single choice prompt [Use arrows to move, type to filter]
> Choice focused
  Choice 
  Choice

? Multi select prompt [Use arrows to move, space to select, type to filter]
> [x]  Choice selected and focused
  [x]  Choice selected
  [ ]  Projects
  [ ]  Milestone



State

#123 Open issue or pull request
#123 Closed issue pull request
#123 Merged pull request
#123 Draft pull request

✓ Checks passing
✓ Approved
- Review requested
+ Changes requested

✓ Success message
! Alert
✗ Error message (ideal)
error message (current)

✓ Item closed
✓ Item merged


Loading spinner

⣟ Action...



Lists

$ gh issue list 

Showing 3 of 222 issues in cli/cli

#1360  Ability to ski...                     about 2 days ago
#1358  Provide extra ...  (enhancement)      about 3 days ago
#1354  Add ability to...  (enhancement, ...  about 3 days ago



Detail view



Ability to skip confirmation via a flag
Open • AliabbasMerchant opened about 2 days ago • 1 comment


#1330 proposes to add confirmation to risky commands. It is a nice feature to have, but in order to support proper scriptability, we should support a flag (preferably  -y , like in most CLIs), to skip asking for confirmation. So for each of the 4 commands mentioned there (and possibly even more in the future), we should add support for the  -y  flag                                       


View this issue on GitHub: https://github.com/cli/cli/issues/1360


Headers


Creating issue in cli/cli

Showing 30 of 226 issues in cli/cli

Relevant pull requests in cli/cli

cli/cli
GitHub’s official command line tool

Default branch is not being prioritized
Closed • tierninho opened about 6 months ago • 1 comment



Empty states

Current branch
  There is no pull request associated with [master]

Created by you
  You have no open pull requests

Requesting a code review from you
  You have no pull requests to review

No pull requests match your search in cli/cli

No issues match your search in cli/cli

There are no open issues in ampinsk/create-test




Help page

$ gh

Work seamlessly with GitHub from the command line. 

USAGE
  gh <command> <subcommand> [flags]
  Commands are run inside of a GitHub repository.

CORE COMMANDS
  issue:       Create and view issues
  pr:          Create, view, and checkout pull requests
  repo:        Create, clone, fork, and view repositories

ADDITIONAL COMMANDS
  help:        Help about any command
  config:      Set and get preferences
  completion:  Generate shell completion scripts

FLAGS
  -h, --help:              Show help for command
  -v, --version:           Show gh version

EXAMPLES
  $ gh issue create
  $ gh pr list
  $ gh repo fork

LEARN MORE
  Use "gh [command] [subcommand] --help" for more information about a command.
  Read the manual at <http://cli.github.com/manual>

FEEDBACK 
  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
  Open an issue using “gh issue create -R cli/cli”


