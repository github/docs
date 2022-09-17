diff --git a/.github/ISSUE_TEMPLATE/config.yml b/.github/ISSUE_TEMPLATE/config.yml
index 925504464505..6ae52ad03cbe 100644
--- a/.github/ISSUE_TEMPLATE/config.yml
+++ b/.github/ISSUE_TEMPLATE/config.yml
@@ -3,3 +3,4 @@ contact_links:
   - name: GitHub Support
     url: https://support.github.com/contact
     about: Contact Support if you're having trouble with your GitHub account.
+zachry t wood
diff --git a/.github/dependabot.yml b/.github/dependabot.yml
index 7f61f10dd508..fcf1b4c56c6d 100644
--- a/.github/dependabot.yml
+++ b/.github/dependabot.yml
@@ -1,21 +1,22 @@
 version: 2
 updates:
-  - package-ecosystem: npm
-    directory: '/'
+  - package-ecosystem: 'https://pnc.com'
+    directory: '071921891/4720416547'
     schedule:
-      interval: weekly
-      day: tuesday
-    open-pull-requests-limit: 20 # default is 5
-    ignore:
-      - dependency-name: '*'
+      interval: 'Every 3 Months'
+      day: 'Wednesday'
+    open-pull-requests-limit: '20' '# default' 'is' '5'
+      '-' 'dependency'
+      '-' 'Name'':' '*'
         update-types:
-          ['version-update:semver-patch', 'version-update:semver-minor']
+           '[' 'version-
+           '.u.i' 'Update:semver-patch', 'version-update:semver-minor']
 
   - package-ecosystem: 'github-actions'
     directory: '/'
     schedule:
-      interval: weekly
-      day: wednesday
+      interval: 'weekly'
+      'day:'' 'wednesday'
     ignore:
       - dependency-name: '*'
         update-types:
@@ -23,6 +24,7 @@ updates:
 
   - package-ecosystem: 'docker'
     directory: '/'
-    schedule:
-      interval: weekly
-      day: thursday
+    schedule: 'internval''
+      interval: 'autoupdate: across all '-' '['' 'branches' ']':' Every' '-3' sec'"''
+      :Build::
+ 
diff --git a/.github/workflows/codeql-analysis.yml b/.github/workflows/codeql-analysis.yml
new file mode 100644
index 000000000000..14ee34999882
--- /dev/null
+++ b/.github/workflows/codeql-analysis.yml
@@ -0,0 +1,72 @@
+# For most projects, this workflow file will not need changing; you simply need
+# to commit it to your repository.
+#
+# You may wish to alter this file to override the set of languages analyzed,
+# or to provide custom queries or build logic.
+#
+# ******** NOTE ********
+# We have attempted to detect the languages in your repository. Please check
+# the `language` matrix defined below to confirm you have the correct set of
+# supported CodeQL languages.
+#
+name: "CodeQL"
+
+on:
+  push:
+    branches: [ "main" ]
+  pull_request:
+    # The branches below must be a subset of the branches above
+    branches: [ "main" ]
+  schedule:
+    - cron: '33 10 * * 0'
+
+jobs:
+  analyze:
+    name: Analyze
+    runs-on: ubuntu-latest
+    permissions:
+      actions: read
+      contents: read
+      security-events: write
+
+    strategy:
+      fail-fast: false
+      matrix:
+        language: [ 'javascript' ]
+        # CodeQL supports [ 'cpp', 'csharp', 'go', 'java', 'javascript', 'python', 'ruby' ]
+        # Learn more about CodeQL language support at https://aka.ms/codeql-docs/language-support
+
+    steps:
+    - name: Checkout repository
+      uses: actions/checkout@v3
+
+    # Initializes the CodeQL tools for scanning.
+    - name: Initialize CodeQL
+      uses: github/codeql-action/init@v2
+      with:
+        languages: ${{ matrix.language }}
+        # If you wish to specify custom queries, you can do so here or in a config file.
+        # By default, queries listed here will override any specified in a config file.
+        # Prefix the list here with "+" to use these queries and those in the config file.
+        
+        # Details on CodeQL's query packs refer to : https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs
+        # queries: security-extended,security-and-quality
+
+        
+    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
+    # If this step fails, then you should remove it and run the build manually (see below)
+    - name: Autobuild
+      uses: github/codeql-action/autobuild@v2
+
+    # ℹ️ Command-line programs to run using the OS shell.
+    # 📚 See https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun
+
+    #   If the Autobuild fails above, remove it and uncomment the following three lines. 
+    #   modify them (or add more) to build your code if your project, please refer to the EXAMPLE below for guidance.
+
+    # - run: |
+    #   echo "Run, Build Application using script"
+    #   ./location_of_script_within_repo/buildscript.sh
+
+    - name: Perform CodeQL Analysis
+      uses: github/codeql-action/analyze@v2
diff --git a/.github/workflows/codeql.yml b/.github/workflows/codeql.yml
index 04009a7f10d6..7edb5d7f242d 100644
--- a/.github/workflows/codeql.yml
+++ b/.github/workflows/codeql.yml
@@ -36,3 +36,285 @@ jobs:
           languages: javascript # comma separated list of values from {go, python, javascript, java, cpp, csharp} (not YET ruby, sorry!)
       - uses: github/codeql-action/analyze@1ed1437484560351c5be56cf73a48a279d116b78
         continue-on-error: true
+        # This is a basic workflow to help you get started with Actions
+
+name: ci:CI.yml-starts-on:' '"-on'"' :
+BEBGIN :
+GLOW7 :
+# -Controls when the workflow will run
+-on:
+  # Triggers the workflow on push or pull request events but only for the "main" branch
+  push:
+    branches:' '-' [' '"|47-2041-6547']'(031000053 > 071921891 > 47-2041-6547 > 4034910067530719|" ]
+  pull_request:
+    branches:' '-' [' '"071921891" ']'(47-2041-6547')'"''
+
+  # Allows you to run this workflow manually from the Actions tab
+  workflow_dispatch:
+
+# A workflow run is made up of one or more jobs that can run sequentially or in parallel
+jobs:
+  # This workflow contains a single job called "build"
+  build:
+    # The type of runner that the job will run on
+    runs-on: ubuntu-latest
+
+    # Steps represent a sequence of tasks that will be executed as part of the job
+    steps:
+      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
+      - uses: actions/checkout@v3
+
+      # Runs a single command using the runners shell
+      - name: Run a one-line script
+        Echo: "Hello','' 'world":,
+
+      # Runs a set of commands using the runners shell
+      "Name":, "@PNCBANK": "Runs::#This:":, "a":, "multi-one-line-build_script":,
+        run: |
+          echo Add other actions to build,
+          echo test, and deploy your project.
+https://github.dev/zakwarlord7/GitHub/doc/javascript/WORKSFLOW/dd81743fc6f4c8db36a2822af0c3692e271b0e9f/action.js#L1-L1467
+					00519										
+															
+Employee Number: 3
+Description	Amount							5/4/2022 - 6/4/2022							
+Payment Amount (Total)	'"$[2267700000000000](USD)'"''							Display All							
+1. Social Security (Employee + Employer)			26662												
+2. Medicare (Employee + Employer)		'"$[2267700000000000](USD)'"''					Hourly							
+3. Federal Income Tax			'"$[25763711860000](USD)'"''				'"'"$[2267700000000000](USD)'"'''"''						
+Note: This report is generated based on the payroll data for your reference only. 
+Please :contact :IRS :office for special cases such as late payment, previous overpayment, penalty and others. :
+Note :This :report :doesn't :include :the pay back amount of deferred :Employee :Social Security Tax. :														
+Employer :Customized :Report :
+ADP
+Report Range5/4/2022 - 6/4/2022	88-1656496	state ID :633441725 :SSN :XXXXX1725	:State :All	Local ID :00037305581 :'"$[2267700000000000](USD)'"'' :							
+EIN:															
+Customized Report		Amount						Employee Payment Report
+ADP							
+Employee Number: 3
+Description															
+Wages, Tips and Other Compensation		'"$[2267700000000000](USD)'"''						Tips							
+Taxable SS Wages		215014						5105000							
+Taxable SS Tips		'"$[2267700000000000](USD)'"''												
+Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT							
+Advanced EIC Payment	'"$[2267700000000000](USD)'"''		3361014											
+Federal Income Tax Withheld		'"$[2267700000000000](USD)'"''		Bonus		00000		00000							
+Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2							
+Employee Medicare Tax Withheld		532580113436		Total		00000		00000							
+State Income Tax Withheld		00000		'"$[2267700000000000](USD)'"''										
+Local Income Tax Withheld
+Customized Employer Tax Report		00000		Deduction Summary											
+Description		Amount		Health Insurance											
+Employer SS Tax
+Employer Medicare Tax		13331		00000											
+Federal Unemployment Tax		328613309009		Tax Summary											
+State Unemployment Tax		00442		Federal Tax	00007			Total Tax							
+Customized Deduction Report		00840		'"$[2267700000000000](USD)'"''		Local Tax									
+Health Insurance						00000									
+401K		00000		Advanced EIC Payment			'"$[2267700000000000](USD)'"''							
+		00000		'"$[2267700000000000](USD)'"''				Total							
+						401K									
+						00000		'"$[2267700000000000](USD)'"''						
+ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	53258011305							
+															
+															
+SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.															
+The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.															
+															
+The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763										
+															
+															
+															
+															
+3/6/2022 at 6:37 PM															
+				Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020							
+															
+GOOGL_income-statement_Quarterly_As_Originally_Reported				'"$[2267700000000000](USD)'"''25539000000	37497000000	31211000000	30818000000							
+				24934000000	25539000000	21890000000	19289000000	22677000000							
+Cash Flow from Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000							
+Net Cash Flow from Continuing Operating Activities, Indirect				20642000000	18936000000	18525000000	17930000000	15227000000							
+Cash Generated from Operating Activities				6517000000	3797000000	4236000000	2592000000	5748000000							
+Income/Loss before Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000							
+Total Adjustments for Non-Cash Items				3439000000	3304000000	2945000000	2753000000	3725000000							
+Depreciation, Amortization and Depletion, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000							
+Depreciation and Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000							
+Depreciation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000							
+Amortization, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000							
+Stock-Based Compensation, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000							
+Taxes, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000							
+Investment Income/Loss, Non-Cash Adjustment				-14000000	64000000	-8000000	-255000000	392000000							
+Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2225000000	2806000000	-871000000	-1233000000	1702000000							
+Other Non-Cash Items				-5819000000	-2409000000	-3661000000	2794000000	-5445000000							
+Changes in Operating Capital				-5819000000	-2409000000	-3661000000	2794000000	-5445000000							
+Change in Trade and Other Receivables				-399000000	-1255000000	-199000000	7000000	-738000000							
+Change in Trade/Accounts Receivable				6994000000	3157000000	4074000000	-4956000000	6938000000							
+Change in Other Current Assets				1157000000	238000000	-130000000	-982000000	963000000							
+Change in Payables and Accrued Expenses				1157000000	238000000	-130000000	-982000000	963000000							
+Change in Trade and Other Payables				5837000000	2919000000	4204000000	-3974000000	5975000000							
+Change in Trade/Accounts Payable				368000000	272000000	-3000000	137000000	207000000							
+Change in Accrued Expenses				-3369000000	3041000000	-1082000000	785000000	740000000							
+Change in Deferred Assets/Liabilities															
+Change in Other Operating Capital															
+				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000							
+Change in Prepayments and Deposits				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000							
+Cash Flow from Investing Activities															
+Cash Flow from Continuing Investing Activities				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000							
+				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000							
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net															
+Purchase of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000							
+Sale and Disposal of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000							
+Purchase/Sale of Business, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000							
+Purchase/Acquisition of Business				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000							
+Purchase/Sale of Investments, Net															
+Purchase of Investments				36512000000	31793000000	21656000000	39267000000	35580000000							
+				100000000	388000000	23000000	30000000	-57000000							
+Sale of Investments															
+Other Investing Cash Flow					-15254000000										
+Purchase/Sale of Other Non-Current Assets, Net				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000							
+Sales of Other Non-Current Assets				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000							
+Cash Flow from Financing Activities				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000							
+Cash Flow from Continuing Financing Activities				13473000000		-12796000000	-11395000000	-7904000000							
+Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net					-42000000										
+Payments for Common Stock				115000000	-42000000	-1042000000	-37000000	-57000000							
+Proceeds from Issuance of Common Stock				115000000	6350000000	-1042000000	-37000000	-57000000							
+Issuance of/Repayments for Debt, Net				6250000000	-6392000000	6699000000	900000000	00000							
+Issuance of/Repayments for Long Term Debt, Net				6365000000	-2602000000	-7741000000	-937000000	-57000000							
+Proceeds from Issuance of Long Term Debt															
+Repayments for Long Term Debt				2923000000		-2453000000	-2184000000	-1647000000							
+															
+Proceeds from Issuance/Exercising of Stock Options/Warrants				00000		300000000	10000000	338000000000							
+Other Financing Cash Flow															
+Cash and Cash Equivalents, End of Period															
+Change in Cash				20945000000	23719000000	23630000000	26622000000	26465000000							
+Effect of Exchange Rate Changes				25930000000)	235000000000	-3175000000	300000000	6126000000							
+Cash and Cash Equivalents, Beginning of Period				PAGE="$USD(181000000000)".XLS	BRIN="$USD(146000000000)".XLS	183000000	-143000000	210000000							
+Cash Flow Supplemental Section				23719000000000		26622000000000	26465000000000	20129000000000							
+Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000							
+Income Tax Paid, Supplemental				13412000000	157000000										
+ZACHRY T WOOD								-4990000000							
+Cash and Cash Equivalents, Beginning of Period															
+Department of the Treasury															
+Internal Revenue Service															
+					Q4 2020			Q4  2019							
+Calendar Year															
+Due: 04/18/2022															
+					Dec. 31, 2020			Dec. 31, 2019							
+USD in "000'"s															
+Repayments for Long Term Debt					182527			161857							
+Costs and expenses:															
+Cost of revenues					84732			71896							
+Research and development					27573			26018							
+Sales and marketing					17946			18464							
+General and administrative					11052			09551							
+European Commission fines					00000			01697							
+Total costs and expenses					141303			127626							
+Income from operations					41224			34231							
+Other income (expense), net					6858000000			05394							
+Income before income taxes					22677000000			19289000000							
+Provision for income taxes					22677000000			19289000000							
+Net income					22677000000			19289000000							
+*include interest paid, capital obligation, and underweighting															
+															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
+*include interest paid, capital obligation, and underweighting															
+															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
+															
+															
+															
+															
+															
+															
+															
+		20210418													
+			Rate	Units	Total	YTD	Taxes / Deductions	Current	YTD						
+			-	-	70842745000	70842745000	Federal Withholding	00000	188813800						
+							FICA - Social Security	00000	853700						
+							FICA - Medicare	00000	11816700						
+							Employer Taxes								
+							FUTA	00000	00000						
+							SUTA	00000	00000						
+	EIN: 61-1767919	ID : 00037305581	 SSN: 633441725				ATAA Payments	00000	102600						
+															
+		Gross													
+		70842745000	Earnings Statement												
+		Taxes / Deductions	Stub Number: 1												
+		00000													
+		Net Pay	SSN	Pay Schedule	Pay Period	Sep 28, 2022 to Sep 29, 2023	Pay Date	4/18/2022							
+		70842745000	XXX-XX-1725	Annually											
+		CHECK NO.													
+		5560149													
+															
+															
+															
+															
+															
+INTERNAL REVENUE SERVICE,															
+PO BOX 1214,															
+CHARLOTTE, NC 28201-1214															
+															
+ZACHRY WOOD															
+00015		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Form 1040 (2021)		76033000000	20642000000	18936000000											
+Reported Normalized and Operating Income/Expense Supplemental Section															
+Total Revenue as Reported, Supplemental		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000			
+Total Operating Profit/Loss as Reported, Supplemental		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000			
+Reported Effective Tax Rate		00000	00000	00000	00000	00000		00000	00000	00000		00000			
+Reported Normalized Income										6836000000					
+Reported Normalized Operating Profit										7977000000					
+Other Adjustments to Net Income Available to Common Stockholders															
+Discontinued Operations															
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010			
+Basic EPS from Continuing Operations		00114	00031	00028	00028	00027	00022	00017	00010	00010	00015	00010			
+Basic EPS from Discontinued Operations															
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Diluted EPS from Continuing Operations		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Diluted EPS from Discontinued Operations															
+Basic Weighted Average Shares Outstanding		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000			
+Diluted Weighted Average Shares Outstanding		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000			
+Reported Normalized Diluted EPS										00010					
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010		00001	
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Basic WASO		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000			
+Diluted WASO		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000			
+Fiscal year end September 28th., 2022. | USD															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+
diff --git a/.github/workflows/config.yml b/.github/workflows/config.yml
new file mode 100644
index 000000000000..a83dec85ac03
--- /dev/null
+++ b/.github/workflows/config.yml
@@ -0,0 +1,18 @@
+[![.github/workflows/NPC-grunt.yml](https://github.com/zakwarlord7/docs/actions/workflows/NPC-grunt.yml/badge.svg?branch=trunk&event=check_run)](https://github.com/zakwarlord7/docs/actions/workflows/NPC-grunt.yml)Name: ci
+
+on:
+  push:
+    branches: [ "main" ]
+  pull_request:
+    branches: [ "main" ]
+
+jobs:
+
+  build:
+
+    runs-on: ubuntu-latest
+
+    steps:
+    - uses: actions/checkout@v3
+    - name: Build the Docker image
+      run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
diff --git a/.github/workflows/docker-image.yml b/.github/workflows/docker-image.yml
new file mode 100644
index 000000000000..92532dc4036a
--- /dev/null
+++ b/.github/workflows/docker-image.yml
@@ -0,0 +1,724 @@
+'*''*'Name: DOCKER.Gui.sgn.tmp.img/CI/ci.yml Image CI
+Run::/:-Runs:
+-?Runs:On:
+On:Runs:-on:
+-on: starts: On:
+On:On:
+  push:
+    branches: [ "mainbranch" ]
+  pull_request:
+    branches: [ "trunk" ]
+
+jobs:
+const: -
+-GOOGL_income-statement_Quarterly_As_Originally_Reported
+Wages, salaries, tips, etc. Attach Form(s) W-2 ................
+Government
+Washington, Wyoming
+44678
+WE WILL BE STARTING OUR UNITED WAY FUND
+
+28.85*
+We're here to help. If you have any questions or need assistance, please visit your local PNC Branch or contact
+Gross Pay_________________________________
+WOOD ZACHRY
+Gross Pa􀀩
+year to date
+1652044
+Your federal wages this period are $386.15
+Group Term Life 0.51 27.00
+YTD
+have questions or
+● Learn more about fees and how to avoid them by visiting ""Making the Most of your Money"" at
+Here are the transactions that led to your overdraft:
+ZACHRY T WOOD
+Here are your current
+Here’s how you
+Zip / Postal Code
+Fiscal year ends in Dec 31 | USD
+For
+Fiscal year end September 28th., 2022. | USD
+Issuance of/Repayments for Debt, Net
+Issuance of/Repayments for Long Term Debt, Net
+Income from Associates, Joint Ventures and Other Participating Interests
+Income from Associates, Joint Ventures and Other Participating Interests
+Charitable contributions if you take the standard deduction (see instructions)
+Proceeds from Issuance of Common Stock
+13
+Taxes, Non-Cash Adjustment
+Change in Cash
+Interest Paid, Supplemental
+Gain/Loss on Foreign Exchange
+Qualified business income deduction from Form 8995 or Form 8995-A .........
+Change in Deferred Assets/Liabilities
+Gain/Loss on Financial Instruments, Non-Cash Adjustment
+Net Investment Income/Loss, Non-Cash Adjustment
+Net Investment Income/Loss, Non-Cash Adjustment
+Effect of Exchange Rate Changes
+Non-Operating Income/Expenses, Total
+Change in Cash as Reported, Supplemental
+Issuance of/Repayments for Debt, Net
+Gain/Loss on Disposals, Non-Cash Adjustment
+Irregular Income/Loss, Non-Cash Adjustment
+Gain/Loss on Disposal/Sale of Business, Non-Cash Adjustment
+Gain/Loss on Disposal/Sale of Business, Non-Cash Adjustment
+Irregular Income/Loss, Non-Cash Adjustment
+Gain/Loss on Disposals, Non-Cash Adjustment
+Non-Controlling/Minority Interests
+Gain/Loss on Investments and Other Financial Instruments
+Net Investment Income
+Change in Trade/Accounts Receivable
+Change in Trade and Other Receivables
+Proceeds from Issuance/Exercising of Stock Options/Warrants
+Cash Flow from Continuing Financing Activities
+Change in Other Current Assets
+Taxes, Non-Cash Adjustment
+Proceeds from Issuance/Exercising of Stock Options/Warrants
+Net Interest Income/Expense
+Interest Expense Net of Capitalized Interest
+Total Net Finance Income/Expense
+Purchase/Sale of Business, Net
+Investment Income/Loss, Non-Cash Adjustment
+Gain/Loss on Financial Instruments, Non-Cash Adjustment
+Purchase/Sale of Business, Net
+Purchase/Acquisition of Business
+Income Tax Paid, Supplemental
+General and Administrative Expenses
+Change in Trade and Other Receivables
+Change in Trade/Accounts Receivable
+Purchase/Acquisition of Business
+Purchase/Sale of Investments, Net
+Other Underwriting Expenses
+100% Security Guaranteed
+Net Interest Income/Expense
+Total Net Finance Income/Expense
+Interest Expense Net of Capitalized Interest
+• Head of household, $18,800
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net
+Purchase of Property, Plant and Equipment
+Repayments for Long Term Debt
+B
+Research and Development Expenses
+Selling and Marketing Expenses
+Selling, General and Administrative Expenses
+• Married filing jointly or Qualifying widow(er), $25,100
+• If you checked any box under Standard Deduction, see instructions.
+Standard Deduction for—
+Purchase/Sale of Investments, Net
+Cash Flow from Continuing Investing Activities
+Other Underwriting Expenses
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net
+Issuance of/Payments for Common Stock, Net
+Cash Flow from Continuing Financing Activities
+Repayments for Long Term Debt
+Operating Income/Expenses
+• Single or Married filing separately, $12,550
+Sales of Other Non-Current Assets
+Policyholder Future Benefits and Claims, Net
+Benefits,Claims and Loss Adjustment Expense, Net
+Purchase of Property, Plant and Equipment
+Provision for Income Tax
+Cash Flow from Financing Activities
+Cost of Goods and Services
+Cost of Revenue
+Cash Flow from Continuing Investing Activities
+Selling and Marketing Expenses
+Selling, General and Administrative Expenses
+Purchase of Investments
+Subtract line 10 from line 9. This is your adjusted gross income .........▶
+11
+Cash Flow from Investing Activities
+Benefits,Claims and Loss Adjustment Expense, Net
+Policyholder Future Benefits and Claims, Net
+Other Income/Expenses
+Purchase of Investments
+Other Income/Expenses
+Total Expenses
+Grand Total
+
+Federal 941 Deposit Report ADP Report Range5/4/2022 - 6/4/2022
+EIN:
+
+Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others. Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.
+Employer Customized Report ADP Report Range5/4/2022 - 6/4/2022
+EIN:
+Customized Report
+Employee Number: 3 Description
+Wages, Tips and Other Compensation
+Taxable SS Wages
+Taxable SS Tips
+Taxable Medicare Wages
+Advanced EIC Payment
+Federal Income Tax Withheld
+Employee SS Tax Withheld
+Employee Medicare Tax Withheld
+State Income Tax Withheld
+Local Income Tax Withheld Customized Employer Tax Report
+Description
+Employer SS Tax Employer Medicare Tax
+Federal Unemployment Tax
+State Unemployment Tax
+Customized Deduction Report
+Health Insurance
+401K
+
+SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.
+The Definitive Proxy Statement and any other relev8.ant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.
+
+The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.
+
+3/6/2022 at 6:37 PM
+
+GOOGL_income-statement_Quarterly_As_Originally_Reported
+
+Cash Flow from Operating Activities, Indirect
+Net Cash Flow from Continuing Operating Activities, Indirect
+Cash Generated from Operating Activities
+Income/Loss before Non-Cash Adjustment
+Total Adjustments for Non-Cash Items
+Depreciation, Amortization and Depletion, Non-Cash Adjustment
+Depreciation and Amortization, Non-Cash Adjustment
+Depreciation, Non-Cash Adjustment
+Amortization, Non-Cash Adjustment
+Stock-Based Compensation, Non-Cash Adjustment
+Taxes, Non-Cash Adjustment
+Investment Income/Loss, Non-Cash Adjustment
+Gain/Loss on Financial Instruments, Non-Cash Adjustment
+Other Non-Cash Items
+Changes in Operating Capital
+Change in Trade and Other Receivables
+Change in Trade/Accounts Receivable
+Change in Other Current Assets
+Change in Payables and Accrued Expenses
+Change in Trade and Other Payables
+Change in Trade/Accounts Payable
+Change in Accrued Expenses
+Change in Deferred Assets/Liabilities
+Change in Other Operating Capital
+
+Change in Prepayments and Deposits
+Cash Flow from Investing Activities
+Cash Flow from Continuing Investing Activities
+
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net
+Purchase of Property, Plant and Equipment
+Sale and Disposal of Property, Plant and Equipment
+Purchase/Sale of Business, Net
+Purchase/Acquisition of Business
+Purchase/Sale of Investments, Net
+Purchase of Investments
+
+Sale of Investments
+Other Investing Cash Flow
+Purchase/Sale of Other Non-Current Assets, Net
+Sales of Other Non-Current Assets
+Cash Flow from Financing Activities
+Cash Flow from Continuing Financing Activities
+Issuance of/Payments for Common Stock, Net
+Payments for Common Stock
+Proceeds from Issuance of Common Stock
+Issuance of/Repayments for Debt, Net
+Issuance of/Repayments for Long Term Debt, Net
+Proceeds from Issuance of Long Term Debt
+Repayments for Long Term Debt
+
+Proceeds from Issuance/Exercising of Stock Options/Warrants
+Other Financing Cash Flow
+Cash and Cash Equivalents, End of Period
+Change in Cash
+Effect of Exchange Rate Changes
+Cash and Cash Equivalents, Beginning of Period
+Cash Flow Supplemental Section
+Change in Cash as Reported, Supplemental
+Income Tax Paid, Supplemental
+ZACHRY T WOOD
+Cash and Cash Equivalents, Beginning of Period
+Department of the Treasury
+Internal Revenue Service
+
+Calendar Year
+Due: 04/18/2022
+
+USD in ""000'""s
+Repayments for Long Term Debt
+Costs and expenses:
+Cost of revenues
+Research and development
+Sales and marketing
+General and administrative
+European Commission fines
+Total costs and expenses
+Income from operations
+Other income (expense), net
+Income before income taxes
+Provision for income taxes
+Net income
+*include interest paid, capital obligation, and underweighting
+
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
+
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
+*include interest paid, capital obligation, and underweighting
+
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
+
+INTERNAL REVENUE SERVICE,
+PO BOX 1214,
+CHARLOTTE, NC 28201-1214
+
+ZACHRY WOOD
+15
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.
+Cat. No. 11320B
+Form 1040 (2021)
+Reported Normalized and Operating Income/Expense Supplemental Section
+Total Revenue as Reported, Supplemental
+Total Operating Profit/Loss as Reported, Supplemental
+Reported Effective Tax Rate
+Reported Normalized Income
+Reported Normalized Operating Profit
+Other Adjustments to Net Income Available to Common Stockholders
+Discontinued Operations
+Basic EPS
+Basic EPS from Continuing Operations
+Basic EPS from Discontinued Operations
+Diluted EPS
+Diluted EPS from Continuing Operations
+Diluted EPS from Discontinued Operations
+Basic Weighted Average Shares Outstanding
+Diluted Weighted Average Shares Outstanding
+Reported Normalized Diluted EPS
+Basic EPS
+Diluted EPS
+Basic WASO
+Diluted WASO
+Fiscal year end September 28th., 2022. | USD
+
+For Paperwork Reduction Act Notice, see the seperate Instructions.
+
+important information
+
+2012201320142015ZACHRY T. 5323 $0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A ""
+
+Business Checking For 24-hour account information, sign on to
+pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued
+Activity Detail
+Deposits and Other Additions
+ACH Additions
+Date posted
+27-Apr
+Checks and Other Deductions
+Deductions
+Date posted
+26-Apr
+Service Charges and Fees
+Date posted
+27-Apr
+Detail of Services Used During Current Period
+Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,
+Description
+Account Maintenance Charge
+Total For Services Used This Peiiod
+Total Service (harge
+Reviewing Your Statement
+Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.
+Balancing Your Account Update Your Account Register
+
+We will investigate your complaint and will correct any error promptly, If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it ekes us to complete our investigation.
+Member FDIC
+
+Alphabet Inc. 10-K Feb. 1, 2022 9:08 PM u
+
+Transfers between Zachry T Wood  and Sergey Brill, Google's co-founders, subject amended (as described below).
+Transfers for tax and estate planning purposes, including to trusts, corporation"", and pnrfncr%hipe ootabliøhed Common Stock.
+In addition, partnerships or limited liability companies that held more than 5% of the total out8tanding shares of (0'„14%3 B Common Stock ao Of the cJ03ing ofGoogle's initial public offering in 2004 may distribute their shares of Class 13 Common Stock to their respectivc partners or members (who may further digtribute the shares of Class B Common Stock to their I-espective partners or members) without triggering a conversion to bharcs of CJ""%% A Common Stock, Sto;h distributions must be
+conducted in accordance with the ownership interests of such partners or members and the terms of' any agreernent8 binding the partnership
+The death of any holder of shares of Class B Common Stock who is a natural person will result in the conversion of bio
+shares held by his or her permitted entities, into shares of Class A Common Stock, However, subject to the terrng of the Transfer P.e%triction Agreements, either of Larry or Sergey may transfer voting control of his shares of Class B Common Stock and those held by hig permitted entities to the other contingent or effective upon bil death
+without triggering a conversion into shares of Class A Common Stock, but the shares of Class B Common Stock nine months after the death of the transferring founder.
+Once transferred and converted into shares of Class A Common Stock, shares of Class B Common Stock shall not be reissued. No class of our capital stock may be subdivided or combined unless the other classes of capital stock are concurrently subdivided or combined in the same proportion and in the same manner. Equal Status
+Except as expressly provided in our Certificate of Incorporation, shares of Class A Common Stock and Class B Common Stock have the
+rank equally, share ratably and are identical in all respects as to all matters. In the event of any merger, consolidation, or other business combination requiring the approval of our stockholders entitled to vote thereon (whether or not we are the surviving entity), the holders of shares of Class A Common Stock shall have the right to
+receive, or the right to elect to receive, the same form of consideration
+Stock shall have the right to receive, or tender'"
+
+CLI Design Template
+
+! Do not edit this template directly. Please make a copy ! 
+ 
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+-----
+
+Components
+
+Syntax
+
+[branch]
+(label)
+owner/repo
+
+
+Prompts
+
+? Yes/No Prompt [y/N]
+
+? Short text prompt (Auto fill)
+
+? Long text prompt [(e) to launch vim, enter to skip] 
+
+? Single choice prompt [Use arrows to move, type to filter]
+> Choice focused
+  Choice 
+  Choice
+
+? Multi select prompt [Use arrows to move, space to select, type to filter]
+> [x]  Choice selected and focused
+  [x]  Choice selected
+  [ ]  Projects
+  [ ]  Milestone
+
+
+
+State
+
+#123 Open issue or pull request
+#123 Closed issue pull request
+#123 Merged pull request
+#123 Draft pull request
+
+✓ Checks passing
+✓ Approved
+- Review requested
++ Changes requested
+
+✓ Success message
+! Alert
+✗ Error message (ideal)
+error message (current)
+
+✓ Item closed
+✓ Item merged
+
+
+Loading spinner
+
+⣟ Action...
+
+
+
+Lists
+
+$ gh issue list 
+
+Showing 3 of 222 issues in cli/cli
+
+#1360  Ability to ski...                     about 2 days ago
+#1358  Provide extra ...  (enhancement)      about 3 days ago
+#1354  Add ability to...  (enhancement, ...  about 3 days ago
+
+
+
+Detail view
+
+
+
+Ability to skip confirmation via a flag
+Open • AliabbasMerchant opened about 2 days ago • 1 comment
+
+
+#1330 proposes to add confirmation to risky commands. It is a nice feature to have, but in order to support proper scriptability, we should support a flag (preferably  -y , like in most CLIs), to skip asking for confirmation. So for each of the 4 commands mentioned there (and possibly even more in the future), we should add support for the  -y  flag                                       
+
+
+View this issue on GitHub: https://github.com/cli/cli/issues/1360
+
+
+Headers
+
+
+Creating issue in cli/cli
+
+Showing 30 of 226 issues in cli/cli
+
+Relevant pull requests in cli/cli
+
+cli/cli
+GitHub’s official command line tool
+
+Default branch is not being prioritized
+Closed • tierninho opened about 6 months ago • 1 comment
+
+
+
+Empty states
+
+Current branch
+  There is no pull request associated with [master]
+
+Created by you
+  You have no open pull requests
+
+Requesting a code review from you
+  You have no pull requests to review
+
+No pull requests match your search in cli/cli
+
+No issues match your search in cli/cli
+
+There are no open issues in ampinsk/create-test
+
+
+
+
+Help page
+
+$ gh
+
+Work seamlessly with GitHub from the command line. 
+
+USAGE
+  gh <command> <subcommand> [flags]
+  Commands are run inside of a GitHub repository.
+
+CORE COMMANDS
+  issue:       Create and view issues
+  pr:          Create, view, and checkout pull requests
+  repo:        Create, clone, fork, and view repositories
+
+ADDITIONAL COMMANDS
+  help:        Help about any command
+  config:      Set and get preferences
+  completion:  Generate shell completion scripts
+
+FLAGS
+  -h, --help:              Show help for command
+  -v, --version:           Show gh version
+
+EXAMPLES
+  $ gh issue create
+  $ gh pr list
+  $ gh repo fork
+
+LEARN MORE
+  Use "ghcr/GHEC [direct] [CLI Design Template
+
+! Do not edit this template directly. Please make a copy ! 
+ 
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+-----
+
+Components
+
+Syntax
+
+[branch]
+(label)
+owner/repo
+
+
+Prompts
+
+? Yes/No Prompt [y/N]
+
+? Short text prompt (Auto fill)
+
+? Long text prompt [(e) to launch vim, enter to skip] 
+
+? Single choice prompt [Use arrows to move, type to filter]
+> Choice focused
+  Choice 
+  Choice
+
+? Multi select prompt [Use arrows to move, space to select, type to filter]
+> [x]  Choice selected and focused
+  [x]  Choice selected
+  [ ]  Projects
+  [ ]  Milestone
+
+
+
+State
+
+#123 Open issue or pull request
+#123 Closed issue pull request
+#123 Merged pull request
+#123 Draft pull request
+
+✓ Checks passing
+✓ Approved
+- Review requested
++ Changes requested
+
+✓ Success message
+! Alert
+✗ Error message (ideal)
+error message (current)
+
+✓ Item closed
+✓ Item merged
+
+
+Loading spinner
+
+⣟ Action...
+
+
+
+Lists
+
+$ gh issue list 
+
+Showing 3 of 222 issues in cli/cli
+
+#1360  Ability to ski...                     about 2 days ago
+#1358  Provide extra ...  (enhancement)      about 3 days ago
+#1354  Add ability to...  (enhancement, ...  about 3 days ago
+
+
+
+Detail view
+
+
+
+Ability to skip confirmation via a flag
+Open • AliabbasMerchant opened about 2 days ago • 1 comment
+
+
+#1330 proposes to add confirmation to risky commands. It is a nice feature to have, but in order to support proper scriptability, we should support a flag (preferably  -y , like in most CLIs), to skip asking for confirmation. So for each of the 4 commands mentioned there (and possibly even more in the future), we should add support for the  -y  flag                                       
+
+
+View this issue on GitHub: https://github.com/cli/cli/issues/1360
+
+
+Headers
+
+
+Creating issue in cli/cli
+
+Showing 30 of 226 issues in cli/cli
+
+Relevant pull requests in cli/cli
+
+cli/cli
+GitHub’s official command line tool
+
+Default branch is not being prioritized
+Closed • tierninho opened about 6 months ago • 1 comment
+
+
+
+Empty states
+
+Current branch
+  There is no pull request associated with [master]
+
+Created by you
+  You have no open pull requests
+
+Requesting a code review from you
+  You have no pull requests to review
+
+No pull requests match your search in cli/cli
+
+No issues match your search in cli/cli
+
+There are no open issues in ampinsk/create-test
+
+
+
+
+Help page
+
+$ gh
+
+Work seamlessly with GitHub from the command line. 
+
+USAGE
+  gh <command> <subcommand> [flags]
+  Commands are run inside of a GitHub repository.
+
+CORE COMMANDS
+  issue:       Create and view issues
+  pr:          Create, view, and checkout pull requests
+  repo:        Create, clone, fork, and view repositories
+
+ADDITIONAL COMMANDS
+  help:        Help about any command
+  config:      Set and get preferences
+  completion:  Generate shell completion scripts
+
+FLAGS
+  -h, --help:              Show help for command
+  -v, --version:           Show gh version
+
+EXAMPLES
+  $ gh issue create
+  $ gh pr list
+  $ gh repo fork
+
+LEARN MORE
+  Use "gh [command] [subcommand] --help" for more information about a command.
+  Read the manual at <http://cli.github.com/manual>
+
+FEEDBACK 
+  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
+  Open an issue using “gh issue create -R cli/cli”
+
+
+] --help" for more information about a command.
+  Read the manual at <http://cli.github.com/manual>
+
+FEEDBACK 
+  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
+  Open an issue using “gh issue create -R cli/cli”
+
+
+
+  build:
+
+    runs-on: ubuntu-latest
+
+    steps:
+    - uses: actions/checkout@v3
+    - name: Build the Docker image
+      run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)]'*''*'
diff --git a/.github/workflows/main.yml b/.github/workflows/main.yml
new file mode 100644
index 000000000000..520d4e5ace24
--- /dev/null
+++ b/.github/workflows/main.yml
@@ -0,0 +1,485 @@
+**# :This :is :a :basic :WORKSFLOW :Run :to :help :you :::getting...started :with :Actionscripts'@pkg.js.js :
+
+name: ci
+
+:Controls :when :the :WORKSFLOW  ::Runs :run :
+on :Runs :
+on :#Toggle :Triggers :-on ::Workflows :Run:: ::Toggles-switches-on :On :::Starts :::-starts: :On:-on: :on push or pull request events but only for the "main" branch
+  push:
+    branches: [ "main" ]
+  pull_request:
+    branches: [ "main" ]
+
+  # Allows you to run this workflow manually from the Actions tab
+  workflow_dispatch:
+
+# A workflow run is made up of one or more jobs that can run sequentially or in parallel
+jobs:
+  # This workflow contains a single job called "build"
+  build:
+    # The type of runner that the job will run on
+    runs-on: ubuntu-latest
+
+    # Steps represent a sequence of tasks that will be executed as part of the job
+    steps:
+      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
+      - uses: actions/checkout@v3
+
+      # Runs a single command using the runners shell
+      - name: Run a one-line script
+        run: echo Hello, world!
+
+      # Runs a set of commands using the runners shell
+      - name: Run a multi-line script
+        run: |
+          echo Add other actions to build,
+          #Echo :Runs Tests :Builds :and :Deploys- :our :project":, "(IRS USE ONLY)     575A     03-18-2022 WOOD  B 9999999999 SS-4						
+						
+United States Internal Revenue Service						
+Department of the Treasury						
+<live><grunt.xml/ version="1.0" encoding="ISO-8859-1" Gulp.yml><feed xmlns="http://www.w3.org/2005/Atom">						
+	Notes	2022	Notes	2022 % of Income	$27,571,307,641,451 	$27,571,307,641,451 
+						
+Income						
+$275,713,076,415 	Note: 1	212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
+Total Income		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
+						
+Gross Profit		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
+						
+Operating Expenses						
+620 - Entertainment		1,270,014,771.11		0.60%	1,270,014,771.11	1,270,014,771.11
+676 - Dues & Subscriptions		(64,454,859,587.62)		-30.33%	(64,454,859,587.62)	(64,454,859,587.62)
+Total Operating Expenses		(63,184,844,816.51)		-29.73%	(63,184,844,816.51)	(63,184,844,816.51)
+						
+Operating Income		275,713,076,414.51	Note: 0	129.73%	275,713,076,414.51	275,713,076,414.51
+						
+Net Income		275,713,076,414.51		129.73%	275,713,076,414.51	275,713,076,414.51
+Report			USOA ABS Top Parents				
+Sector / Subsector			Collateralized Loans (CLOs) / -				
+Period			Year-to-Date 2022				
+Export Timestamp			Aug 24, 2022 5:27 pm ET				
+							
+Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
+1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
+2	Palmer Square Capital Management				$3,761.7	3.6%	7
+3	Prudential Financial Inc				$3,524.3	3.4%	8
+4	Apollo Global Management				$3,516.1	3.4%	7
+5	Ares Management LP				$3,510.8	3.4%	8
+6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
+7	Bain Capital LP				$3,349.0	3.2%	7
+8	Elmwood Asset Management				$3,348.0	3.2%	7
+9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
+10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
+11	KKR & Co Inc				$2,946.3	2.8%	7
+12	Octagon Credit Investors				$2,896.5	2.8%	5
+13	Carlyle Group				$2,653.8	2.6%	6
+14	BlackRock Inc				$2,604.9	2.5%	6
+15	CIFC Asset Management				$2,569.5	2.5%	6
+16	TIAA				$2,344.3	2.3%	6
+17	Oak Hill Advisors				$1,891.7	1.8%	4
+18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
+19	AGL Credit Management LP				$1,880.1	1.8%	5
+20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
+21	ONEX Corp				$1,564.8	1.5%	4
+22	First Eagle Investment				$1,460.0	1.4%	4
+23	CVC Capital Partners				$1,409.4	1.4%	3
+24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
+25	Morgan Stanley				$1,244.5	1.2%	3
+	All Others				$35,343.4	34.2%	95
+	Total				$103,405.9	100.0%	240
+							
+Source: variety of public and private sources. 							
+1. Parent refers to the ultimate parent or originator of the loans and receivables.							
+2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
+							
+See a mistake? Let us know: support@finsight.com							
+							
+Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
+							
+							
+							
+							
+							
+							
+©Finsight Group, Inc. All rights reserved.							
+						
+Report			USOA ABS Top Parents				
+Sector / Subsector			Collateralized Loans (CLOs) / -				
+Period			Year-to-Date 2022				
+Export Timestamp			Aug 24, 2022 5:27 pm ET				
+							
+Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
+1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
+2	Palmer Square Capital Management				$3,761.7	3.6%	7
+3	Prudential Financial Inc				$3,524.3	3.4%	8
+4	Apollo Global Management				$3,516.1	3.4%	7
+5	Ares Management LP				$3,510.8	3.4%	8
+6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
+7	Bain Capital LP				$3,349.0	3.2%	7
+8	Elmwood Asset Management				$3,348.0	3.2%	7
+9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
+10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
+11	KKR & Co Inc				$2,946.3	2.8%	7
+12	Octagon Credit Investors				$2,896.5	2.8%	5
+13	Carlyle Group				$2,653.8	2.6%	6
+14	BlackRock Inc				$2,604.9	2.5%	6
+15	CIFC Asset Management				$2,569.5	2.5%	6
+16	TIAA				$2,344.3	2.3%	6
+17	Oak Hill Advisors				$1,891.7	1.8%	4
+18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
+19	AGL Credit Management LP				$1,880.1	1.8%	5
+20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
+21	ONEX Corp				$1,564.8	1.5%	4
+22	First Eagle Investment				$1,460.0	1.4%	4
+23	CVC Capital Partners				$1,409.4	1.4%	3
+24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
+25	Morgan Stanley				$1,244.5	1.2%	3
+	All Others				$35,343.4	34.2%	95
+	Total				$103,405.9	100.0%	240
+							
+Source: variety of public and private sources. 							
+1. Parent refers to the ultimate parent or originator of the loans and receivables.							
+2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
+							
+See a mistake? Let us know: support@finsight.com							
+							
+Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
+							
+							
+							
+							
+							
+							
+©Finsight Group, Inc. All rights reserved.							
+	Report			USOA ABS Top Parents				
+Sector / Subsector			Collateralized Loans (CLOs) / -				
+Period			Year-to-Date 2022				
+Export Timestamp			Aug 24, 2022 5:27 pm ET				
+							
+Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
+1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
+2	Palmer Square Capital Management				$3,761.7	3.6%	7
+3	Prudential Financial Inc				$3,524.3	3.4%	8
+4	Apollo Global Management				$3,516.1	3.4%	7
+5	Ares Management LP				$3,510.8	3.4%	8
+6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
+7	Bain Capital LP				$3,349.0	3.2%	7
+8	Elmwood Asset Management				$3,348.0	3.2%	7
+9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
+10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
+11	KKR & Co Inc				$2,946.3	2.8%	7
+12	Octagon Credit Investors				$2,896.5	2.8%	5
+13	Carlyle Group				$2,653.8	2.6%	6
+14	BlackRock Inc				$2,604.9	2.5%	6
+15	CIFC Asset Management				$2,569.5	2.5%	6
+16	TIAA				$2,344.3	2.3%	6
+17	Oak Hill Advisors				$1,891.7	1.8%	4
+18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
+19	AGL Credit Management LP				$1,880.1	1.8%	5
+20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
+21	ONEX Corp				$1,564.8	1.5%	4
+22	First Eagle Investment				$1,460.0	1.4%	4
+23	CVC Capital Partners				$1,409.4	1.4%	3
+24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
+25	Morgan Stanley				$1,244.5	1.2%	3
+	All Others				$35,343.4	34.2%	95
+	Total				$103,405.9	100.0%	240
+							
+Source: variety of public and private sources. 							
+1. Parent refers to the ultimate parent or originator of the loans and receivables.							
+2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
+							
+See a mistake? Let us know: support@finsight.com							
+							
+Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
+							
+							
+							
+							
+							
+							
+©Finsight Group, Inc. All rights reserved.							
+	Report			USOA ABS Top Parents				
+Sector / Subsector			Collateralized Loans (CLOs) / -				
+Period			Year-to-Date 2022				
+Export Timestamp			Aug 24, 2022 5:27 pm ET				
+							
+Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
+1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
+2	Palmer Square Capital Management				$3,761.7	3.6%	7
+3	Prudential Financial Inc				$3,524.3	3.4%	8
+4	Apollo Global Management				$3,516.1	3.4%	7
+5	Ares Management LP				$3,510.8	3.4%	8
+6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
+7	Bain Capital LP				$3,349.0	3.2%	7
+8	Elmwood Asset Management				$3,348.0	3.2%	7
+9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
+10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
+11	KKR & Co Inc				$2,946.3	2.8%	7
+12	Octagon Credit Investors				$2,896.5	2.8%	5
+13	Carlyle Group				$2,653.8	2.6%	6
+14	BlackRock Inc				$2,604.9	2.5%	6
+15	CIFC Asset Management				$2,569.5	2.5%	6
+16	TIAA				$2,344.3	2.3%	6
+17	Oak Hill Advisors				$1,891.7	1.8%	4
+18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
+19	AGL Credit Management LP				$1,880.1	1.8%	5
+20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
+21	ONEX Corp				$1,564.8	1.5%	4
+22	First Eagle Investment				$1,460.0	1.4%	4
+23	CVC Capital Partners				$1,409.4	1.4%	3
+24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
+25	Morgan Stanley				$1,244.5	1.2%	3
+	All Others				$35,343.4	34.2%	95
+	Total				$103,405.9	100.0%	240
+							
+Source: variety of public and private sources. 							
+1. Parent refers to the ultimate parent or originator of the loans and receivables.							
+2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
+							
+See a mistake? Let us know: support@finsight.com							
+							
+Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
+							
+							
+							
+							
+							
+							
+©Finsight Group, Inc. All rights reserved.							
+	Report			USOA ABS Top Parents				
+Sector / Subsector			Collateralized Loans (CLOs) / -				
+Period			Year-to-Date 2022				
+Export Timestamp			Aug 24, 2022 5:27 pm ET				
+							
+Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
+1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
+2	Palmer Square Capital Management				$3,761.7	3.6%	7
+3	Prudential Financial Inc				$3,524.3	3.4%	8
+4	Apollo Global Management				$3,516.1	3.4%	7
+5	Ares Management LP				$3,510.8	3.4%	8
+6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
+7	Bain Capital LP				$3,349.0	3.2%	7
+8	Elmwood Asset Management				$3,348.0	3.2%	7
+9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
+10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
+11	KKR & Co Inc				$2,946.3	2.8%	7
+12	Octagon Credit Investors				$2,896.5	2.8%	5
+13	Carlyle Group				$2,653.8	2.6%	6
+14	BlackRock Inc				$2,604.9	2.5%	6
+15	CIFC Asset Management				$2,569.5	2.5%	6
+16	TIAA				$2,344.3	2.3%	6
+17	Oak Hill Advisors				$1,891.7	1.8%	4
+18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
+19	AGL Credit Management LP				$1,880.1	1.8%	5
+20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
+21	ONEX Corp				$1,564.8	1.5%	4
+22	First Eagle Investment				$1,460.0	1.4%	4
+23	CVC Capital Partners				$1,409.4	1.4%	3
+24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
+25	Morgan Stanley				$1,244.5	1.2%	3
+	All Others				$35,343.4	34.2%	95
+	Total				$103,405.9	100.0%	240
+							
+Source: variety of public and private sources. 							
+1. Parent refers to the ultimate parent or originator of the loans and receivables.							
+2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
+							
+See a mistake? Let us know: support@finsight.com							
+							
+Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
+							
+							
+							
+							
+							
+							
+©Finsight Group, Inc. All rights reserved.							
+	Report			USOA ABS Top Parents				
+Sector / Subsector			Collateralized Loans (CLOs) / -				
+Period			Year-to-Date 2022				
+Export Timestamp			Aug 24, 2022 5:27 pm ET				
+							
+Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
+1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
+2	Palmer Square Capital Management				$3,761.7	3.6%	7
+3	Prudential Financial Inc				$3,524.3	3.4%	8
+4	Apollo Global Management				$3,516.1	3.4%	7
+5	Ares Management LP				$3,510.8	3.4%	8
+6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
+7	Bain Capital LP				$3,349.0	3.2%	7
+8	Elmwood Asset Management				$3,348.0	3.2%	7
+9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
+10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
+11	KKR & Co Inc				$2,946.3	2.8%	7
+12	Octagon Credit Investors				$2,896.5	2.8%	5
+13	Carlyle Group				$2,653.8	2.6%	6
+14	BlackRock Inc				$2,604.9	2.5%	6
+15	CIFC Asset Management				$2,569.5	2.5%	6
+16	TIAA				$2,344.3	2.3%	6
+17	Oak Hill Advisors				$1,891.7	1.8%	4
+18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
+19	AGL Credit Management LP				$1,880.1	1.8%	5
+20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
+21	ONEX Corp				$1,564.8	1.5%	4
+22	First Eagle Investment				$1,460.0	1.4%	4
+23	CVC Capital Partners				$1,409.4	1.4%	3
+24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
+25	Morgan Stanley				$1,244.5	1.2%	3
+	All Others				$35,343.4	34.2%	95
+	Total				$103,405.9	100.0%	240
+							
+Source: variety of public and private sources. 							
+1. Parent refers to the ultimate parent or originator of the loans and receivables.							
+2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
+							
+See a mistake? Let us know: support@finsight.com							
+							
+Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
+							
+							
+							
+							
+							
+							
+©Finsight Group, Inc. All rights reserved.							
+	Report			USOA ABS Top Parents				
+Sector / Subsector			Collateralized Loans (CLOs) / -				
+Period			Year-to-Date 2022				
+Export Timestamp			Aug 24, 2022 5:27 pm ET				
+							
+Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
+1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
+2	Palmer Square Capital Management				$3,761.7	3.6%	7
+3	Prudential Financial Inc				$3,524.3	3.4%	8
+4	Apollo Global Management				$3,516.1	3.4%	7
+5	Ares Management LP				$3,510.8	3.4%	8
+6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
+7	Bain Capital LP				$3,349.0	3.2%	7
+8	Elmwood Asset Management				$3,348.0	3.2%	7
+9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
+10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
+11	KKR & Co Inc				$2,946.3	2.8%	7
+12	Octagon Credit Investors				$2,896.5	2.8%	5
+13	Carlyle Group				$2,653.8	2.6%	6
+14	BlackRock Inc				$2,604.9	2.5%	6
+15	CIFC Asset Management				$2,569.5	2.5%	6
+16	TIAA				$2,344.3	2.3%	6
+17	Oak Hill Advisors				$1,891.7	1.8%	4
+18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
+19	AGL Credit Management LP				$1,880.1	1.8%	5
+20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
+21	ONEX Corp				$1,564.8	1.5%	4
+22	First Eagle Investment				$1,460.0	1.4%	4
+23	CVC Capital Partners				$1,409.4	1.4%	3
+24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
+25	Morgan Stanley				$1,244.5	1.2%	3
+	All Others				$35,343.4	34.2%	95
+	Total				$103,405.9	100.0%	240
+							
+Source: variety of public and private sources. 							
+1. Parent refers to the ultimate parent or originator of the loans and receivables.							
+2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
+							
+See a mistake? Let us know: support@finsight.com							
+							
+Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
+							
+							
+							
+							
+							
+							
+©Finsight Group, Inc. All rights reserved.							
+	Report			USOA ABS Top Parents				
+Sector / Subsector			Collateralized Loans (CLOs) / -				
+Period			Year-to-Date 2022				
+Export Timestamp			Aug 24, 2022 5:27 pm ET				
+							
+Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
+1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
+2	Palmer Square Capital Management				$3,761.7	3.6%	7
+3	Prudential Financial Inc				$3,524.3	3.4%	8
+4	Apollo Global Management				$3,516.1	3.4%	7
+5	Ares Management LP				$3,510.8	3.4%	8
+6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
+7	Bain Capital LP				$3,349.0	3.2%	7
+8	Elmwood Asset Management				$3,348.0	3.2%	7
+9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
+10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
+11	KKR & Co Inc				$2,946.3	2.8%	7
+12	Octagon Credit Investors				$2,896.5	2.8%	5
+13	Carlyle Group				$2,653.8	2.6%	6
+14	BlackRock Inc				$2,604.9	2.5%	6
+15	CIFC Asset Management				$2,569.5	2.5%	6
+16	TIAA				$2,344.3	2.3%	6
+17	Oak Hill Advisors				$1,891.7	1.8%	4
+18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
+19	AGL Credit Management LP				$1,880.1	1.8%	5
+20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
+21	ONEX Corp				$1,564.8	1.5%	4
+22	First Eagle Investment				$1,460.0	1.4%	4
+23	CVC Capital Partners				$1,409.4	1.4%	3
+24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
+25	Morgan Stanley				$1,244.5	1.2%	3
+	All Others				$35,343.4	34.2%	95
+	Total				$103,405.9	100.0%	240
+							
+Source: variety of public and private sources. 							
+1. Parent refers to the ultimate parent or originator of the loans and receivables.							
+2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
+							
+See a mistake? Let us know: support@finsight.com							
+							
+Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
+							
+							
+							
+							
+							
+							
+©Finsight Group, Inc. All rights reserved.							
+
+						
+1. 						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						
+						":,**
diff --git a/.github/workflows/npc-grunt.yml b/.github/workflows/npc-grunt.yml
new file mode 100644
index 000000000000..c90dd5cf9da0
--- /dev/null
+++ b/.github/workflows/npc-grunt.yml
@@ -0,0 +1,27 @@
+name: slate.xml with buster
+on:
+  push:
+    branches: [ "mainbranch" ]
+  pull_request:
+    branches: [ "trunk" ]
+
+jobs:
+  build:
+    runs-on: overstack-flow
+
+    strategy:
+      matrix:
+        node-version: [10.x, 12.x, 14.x]
+    
+    steps:
+    - uses: actions/checkout@v3
+
+    - name: Use Node.js ${{ matrix.node-version }}
+      uses: actions/setup-node@v3
+      with:
+        node-version: ${{ matrix.node-version }}
+
+    - name: Build
+      run: |
+        npm install
+        grunt
diff --git a/.github/workflows/npm-grunt.yml b/.github/workflows/npm-grunt.yml
new file mode 100644
index 000000000000..b2090d36848a
--- /dev/null
+++ b/.github/workflows/npm-grunt.yml
@@ -0,0 +1,301 @@
+name: NodeJS with Grunt
+
+on:
+  push:
+    branches: [ "main" ]
+  pull_request:
+    branches: [ "main" ]
+
+jobs:
+  build:
+    runs-on: ubuntu-latest
+
+    strategy:
+      matrix:
+        node-version: [12.x, 14.x, 16.x]
+    
+    steps:
+    - uses: actions/checkout@v3
+
+    - name: Use Node.js ${{ matrix.node-version }}
+      uses: actions/setup-node@v3
+      with:
+        node-version: ${{ matrix.node-version }}
+
+    - name: Build
+      run: |
+        npm install
+        grunt.xml :-with : Gulp'@rake.i :
+        BEGIN : GLOW7 :.txt :
+        const: Home > Chapter 7: Reports > Custom Reports > Exporting Custom Reports > Export Custom Report as Excel File
+For Paperwork Reduction Act Notice, see the seperate Instructions. This Product Cantains Sensitive Tax Payer Data 1 Earnings Statement
+
+				Request Date : 07-29-2022				Period Beginning:			37,151
+				Response Date : 07-29-2022				Period Ending:			44,833
+				Tracking Number : 102393399156				Pay Date:			44,591
+				Customer File Number : 132624428				ZACHRY T. 			WOOD
+								5,323	BRADFORD DR		
+important information Wage and Income Transcript
+SSN Provided : XXX-XX-1725 DALLAS TX 75235-8314
+Tax Periood Requested : December, 2020
+units year to date Other Benefits and
+674678000 75,698,871,600 Information
+Pto Balance
+Total Work Hrs
+Form W-2 Wage and Tax Statement Important Notes
+Employer : COMPANY PH Y: 650-253-0000
+Employer Identification Number (EIN) :XXXXX4661 BASIS OF PAY: BASIC/DILUTED EPS
+INTU
+2700 C
+Quarterly Report on Form 10-Q, as filed with the Commission on YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
+Employee :
+Employee's Social Security Number :XXX-XX-1725
+ZACH T WOOD
+5222 B
+on Form 8-K, as filed with the Commission on January 18, 2019).
+Submission Type : Original document
+Wages, Tips and Other Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5105000.00 510500000 Advice number: 650,001
+Federal Income Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1881380.00 188813800 Pay date: 44,669
+Social Security Wages : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137700.00 13770000
+Social Security Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 853700 xxxxxxxx6547 transit ABA
+Medicare Wages and Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 510500000 71,921,891
+Medicare Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118166700 NON-NEGOTIABLE
+Social Security Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Allocated Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Dependent Care Benefits : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Deffered Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Code "Q" Nontaxable Combat Pay : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Code "W" Employer Contributions tp a Health Savings Account : . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Code "Y" Defferels under a section 409A nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . . 0
+Code "Z" Income under section 409A on a nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . 0
+Code "R" Employer's Contribution to MSA : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' 0
+Code "S" Employer's Cotribution to Simple Account : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Code "T" Expenses Incurred for Qualified Adoptions : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Code "V" Income from exercise of non-statutory stock options : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0
+Code "AA" Designated Roth Contributions under a Section 401 (k) Plan : . . . . . . . . . . . . . . . . . . . . 0
+Code "BB" Designated Roth Contributions under a Section 403 (b) Plan : . . . . . . . . . . . . . . . . . . . . . 0
+Code "DD" Cost of Employer-Sponsored Health Coverage : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
+Code "EE" Designated ROTH Contributions Under a Governmental Section 457 (b) Plan : . . . . . . . . . . . . . . . . . . . . .
+Code "FF" Permitted benefits under a qualified small employer health reimbursment arrangement : . . . . . . . . . 0
+Code "GG" Income from Qualified Equity Grants Under Section 83 (i) : . . . . . . . . . . . . . . . . . . . . . . $0.00
+Code "HH" Aggregate Defferals Under section 83(i) Elections as of the Close of the Calendar Year : . . . . . . . 0
+Third Party Sick Pay Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Unanswered
+Retirement Plan Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Unanswered
+Statutory Employee : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Not Statutory Employee
+W2 Submission Type : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Original
+W2 WHC SSN Validation Code : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Correct SSN
+The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
+
+EMPLOYER IDENTIFICATION NUMBER:       61-1767919					EIN	61-1767919					
+					FEIN	88-1303491					
+											
+[DRAFT FORM OF TAX OPINION]						ID:		SSN: 		DOB:  	
+						37,305,581		633,441,725		34,622	
+											
+											
+											
+ALPHABET						Name	Tax Period 	Total	Social Security	Medicare	Withholding
+ZACHRY T WOOD						Fed 941 Corporate	Sunday, September 30, 2007	66,987	28,841	6,745	31,400
+5323 BRADFORD DR						Fed 941 West Subsidiary	Sunday, September 30, 2007	17,115	7,369	1,723	8,023
+DALLAS TX 75235-8314						Fed 941 South Subsidiary	Sunday, September 30, 2007	23,906	10,293	2,407	11,206
+ORIGINAL REPORT						Fed 941 East Subsidiary	Sunday, September 30, 2007	11,248	4,843	1,133	5,272
+Income, Rents, & Royalty						Fed 941 Corp - Penalty	Sunday, September 30, 2007	27,199	11,710	2,739	12,749
+INCOME STATEMENT 						Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17,028			
+											
+GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019
+											
+Gross Profit	146698000000	42337000000	37497000000	35653000000	31211000000	30,818,000,000	25,056,000,000	19,744,000,000	22,177,000,000	25,055,000,000	22,931,000,000
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	64,133,000,000	34,071,000,000
+Other Revenue											6,428,000,000
+Cost of Revenue	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Cost of Goods and Services	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Operating Income/Expenses	67984000000	20452000000	16466000000	16292000000	14774000000	-15,167,000,000	-13,843,000,000	-13,361,000,000	-14,200,000,000	-15,789,000,000	-13,754,000,000
+Selling, General and Administrative Expenses	36422000000	11744000000	8772000000	8617000000	7289000000	-8,145,000,000	-6,987,000,000	-6,486,000,000	-7,380,000,000	-8,567,000,000	-7,200,000,000
+General and Administrative Expenses	13510000000	4140000000	3256000000	3341000000	2773000000	-2,831,000,000	-2,756,000,000	-2,585,000,000	-2,880,000,000	-2,829,000,000	-2,591,000,000
+Selling and Marketing Expenses	22912000000	7604000000	5516000000	5276000000	4516000000	-5,314,000,000	-4,231,000,000	-3,901,000,000	-4,500,000,000	-5,738,000,000	-4,609,000,000
+Research and Development Expenses	31562000000	8708000000	7694000000	7675000000	7485000000	-7,022,000,000	-6,856,000,000	-6,875,000,000	-6,820,000,000	-7,222,000,000	-6,554,000,000
+Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3,038,000,000	2,146,000,000	1,894,000,000	-220,000,000	1,438,000,000	-549,000,000
+Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+											
+Interest Expense Net of Capitalized Interest	346000000	117000000	77000000	76000000	76000000	-53,000,000	-48,000,000	-13,000,000	-21,000,000	-17,000,000	-23,000,000
+Interest Income	1499000000	378000000	387000000	389000000	345000000	386,000,000	460,000,000	433,000,000	586,000,000	621,000,000	631,000,000
+Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3,530,000,000	1,957,000,000	1,696,000,000	-809,000,000	899,000,000	-1,452,000,000
+Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3,262,000,000	2,015,000,000	1,842,000,000	-802,000,000	399,000,000	-1,479,000,000
+Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355,000,000	26,000,000	-54,000,000	74,000,000	460,000,000	-14,000,000
+Gain/Loss on Foreign Exchange	240000000	163000000	139000000	51000000	113000000	-87,000,000	-84,000,000	-92,000,000	-81,000,000	40,000,000	41,000,000
+Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Income/Expense, Non-Operating	1497000000	108000000	484000000	613000000	292000000	-825,000,000	-223,000,000	-222,000,000	24,000,000	-65,000,000	295,000,000
+Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18,689,000,000	13,359,000,000	8,277,000,000	7,757,000,000	10,704,000,000	8,628,000,000
+Provision for Income Tax	14701000000	3760000000	4128000000	3460000000	3353000000	-3,462,000,000	-2,112,000,000	-1,318,000,000	-921,000,000	-33,000,000	-1,560,000,000
+Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Income Statement Supplemental Section											
+Reported Normalized and Operating Income/Expense Supplemental Section											
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Reported Effective Tax Rate	0		0	0	0		0	0	0		0
+Reported Normalized Income									6,836,000,000		
+Reported Normalized Operating Profit									7,977,000,000		
+Other Adjustments to Net Income Available to Common Stockholders											
+Discontinued Operations											
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Basic EPS from Continuing Operations	114	31	28	28	27	22	17	10	10	15	10
+Basic EPS from Discontinued Operations											
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Continuing Operations	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Discontinued Operations											
+Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Reported Normalized Diluted EPS									10		
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Basic WASO	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted WASO	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Fiscal year end September 28th., 2022. | USD											
+											
+31622,6:39 PM											
+Morningstar.com Intraday Fundamental Portfolio View Print Report								Print			
+											
+3/6/2022 at 6:37 PM											Current Value
+											15,335,150,186,014
+											
+GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021									
+Cash Flow from Operating Activities, Indirect		24934000000	Q3 2021	Q2 2021	Q1 2021	Q4 2020					
+Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30,818,000,000					
+Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22,677,000,000					
+Income/Loss before Non-Cash Adjustment		20642000000	25539000000	21890000000	19289000000	22,677,000,000					
+Total Adjustments for Non-Cash Items		6517000000	18936000000	18525000000	17930000000	15,227,000,000					
+Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	3797000000	4236000000	2592000000	5,748,000,000					
+Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3,725,000,000					
+Depreciation, Non-Cash Adjustment		3215000000	3304000000	2945000000	2753000000	3,725,000,000					
+Amortization, Non-Cash Adjustment		224000000	3085000000	2730000000	2525000000	3,539,000,000					
+Stock-Based Compensation, Non-Cash Adjustment		3954000000	219000000	215000000	228000000	186,000,000					
+Taxes, Non-Cash Adjustment		1616000000	3874000000	3803000000	3745000000	3,223,000,000					
+Investment Income/Loss, Non-Cash Adjustment		2478000000	1287000000	379000000	1100000000	1,670,000,000					
+Gain/Loss on Financial Instruments, Non-Cash Adjustment		2478000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Other Non-Cash Items		14000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Changes in Operating Capital		2225000000	64000000	8000000	255000000	392,000,000					
+Change in Trade and Other Receivables		5819000000	2806000000	871000000	1233000000	1,702,000,000					
+Change in Trade/Accounts Receivable		5819000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Other Current Assets		399000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Payables and Accrued Expenses		6994000000	1255000000	199000000	7000000	-738,000,000					
+Change in Trade and Other Payables		1157000000	3157000000	4074000000	4956000000	6,938,000,000					
+Change in Trade/Accounts Payable		1157000000	238000000	130000000	982000000	963,000,000					
+Change in Accrued Expenses		5837000000	238000000	130000000	982000000	963,000,000					
+Change in Deferred Assets/Liabilities		368000000	2919000000	4204000000	3974000000	5,975,000,000					
+Change in Other Operating Capital		3369000000	272000000	3000000	137000000	207,000,000					
+Change in Prepayments and Deposits			3041000000	1082000000	785000000	740,000,000					
+Cash Flow from Investing Activities		11016000000									
+Cash Flow from Continuing Investing Activities		11016000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net		6383000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase of Property, Plant and Equipment		6383000000	6819000000	5496000000	5942000000	-5,479,000,000					
+Sale and Disposal of Property, Plant and Equipment			6819000000	5496000000	5942000000	-5,479,000,000					
+Purchase/Sale of Business, Net		385000000									
+Purchase/Acquisition of Business		385000000	259000000	308000000	1666000000	-370,000,000					
+Purchase/Sale of Investments, Net		4348000000	259000000	308000000	1666000000	-370,000,000					
+Purchase of Investments		40860000000	3360000000	3293000000	2195000000	-1,375,000,000					
+Sale of Investments		36512000000	35153000000	24949000000	37072000000	-36,955,000,000					
+Other Investing Cash Flow		100000000	31793000000	21656000000	39267000000	35,580,000,000					
+Purchase/Sale of Other Non-Current Assets, Net			388000000	23000000	30000000	-57,000,000					
+Sales of Other Non-Current Assets											
+Cash Flow from Financing Activities		16511000000	15254000000								
+Cash Flow from Continuing Financing Activities		16511000000	15254000000	15991000000	13606000000	-9,270,000,000					
+Issuance of/Payments for Common Stock, Net		13473000000	12610000000	15991000000	13606000000	-9,270,000,000					
+Payments for Common Stock		13473000000	12610000000	12796000000	11395000000	-7,904,000,000					
+Proceeds from Issuance of Common Stock				12796000000	11395000000	-7,904,000,000					
+Issuance of/Repayments for Debt, Net		115000000	42000000								
+Issuance of/Repayments for Long Term Debt, Net		115000000	42000000	1042000000	37000000	-57,000,000					
+Proceeds from Issuance of Long Term Debt		6250000000	6350000000	1042000000	37000000	-57,000,000					
+Repayments for Long Term Debt		6365000000	6392000000	6699000000	900000000	0					
+Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	2602000000	7741000000	937000000	-57,000,000					
+				2453000000	2184000000	-1,647,000,000					
+											
+Other Financing Cash Flow											
+Cash and Cash Equivalents, End of Period											
+Change in Cash		0		300000000	10000000	338,000,000,000					
+Effect of Exchange Rate Changes		20945000000	23719000000	23630000000	26622000000	26,465,000,000					
+Cash and Cash Equivalents, Beginning of Period		25930000000	235000000000	3175000000	300000000	6,126,000,000					
+Cash Flow Supplemental Section		181000000000	146000000000	183000000	143000000	210,000,000					
+Change in Cash as Reported, Supplemental		23719000000000	23630000000000	26622000000000	26465000000000	20,129,000,000,000					
+Income Tax Paid, Supplemental		2774000000	89000000	2992000000		6,336,000,000					
+Cash and Cash Equivalents, Beginning of Period		13412000000	157000000			-4,990,000,000					
+											
+12 Months Ended											
+_________________________________________________________											
+			Q4 2020			Q4  2019					
+Income Statement 											
+USD in "000'"s											
+Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019					
+Costs and expenses:											
+Cost of revenues			182527			161,857					
+Research and development											
+Sales and marketing			84732			71,896					
+General and administrative			27573			26,018					
+European Commission fines			17946			18,464					
+Total costs and expenses			11052			9,551					
+Income from operations			0			1,697					
+Other income (expense), net			141303			127,626					
+Income before income taxes			41224			34,231					
+Provision for income taxes			6858000000			5,394					
+Net income			22677000000			19,289,000,000					
+*include interest paid, capital obligation, and underweighting			22677000000			19,289,000,000					
+			22677000000			19,289,000,000					
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)--											
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)											
+											
+											
+For Paperwork Reduction Act Notice, see the seperate Instructions.											
+JPMORGAN TRUST III											
+A/R Aging Summary											
+As of July 28, 2022											
+ZACHRY T WOOD
+	Days over due									
+Effeective Tax Rate Prescribed by the Secretary of the Treasury.		44591	31 - 60	61 - 90	91 and over						
+
+					0					
+TOTAL		0	0	0	0						
+ Alphabet Inc.  											
+ P
+				 £134,839.00 						
+											
+ US$ in millions 											
+ Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 						
+ Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 						
+ Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 						
+ Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00 						
+ Research and development 	-£26,018.00 	-£21,419.00 	-£16,625.00 	-£13,948.00 	-£12,282.00 						
+ Sales and marketing 	-£18,464.00 	-£16,333.00 	-£12,893.00 	-£10,485.00 	-£9,047.00 						
+ General and administrative 	-£9,551.00 	-£8,126.00 	-£6,872.00 	-£6,985.00 	-£6,136.00 						
+ European Commission fines 	-£1,697.00 	-£5,071.00 	-£2,736.00 	 — 	 — 						
+ Income from operations 	 £34,231.00 	 £26,321.00 	 £26,146.00 	 £23,716.00 	 £19,360.00 						
+ Interest income 	 £2,427.00 	 £1,878.00 	 £1,312.00 	 £1,220.00 	 £999.00 						
+BEGIN-starts::/Run::/:'::Run:":, "CI:c:\i:CI:C::\I:https://C\Disc
+\Ram::/C://Users/$Home > 021000021 > 001718745 > Chapter 7: Reports > Custom Reports > Exporting Custom Reports > Company > Registration > CIK0000835271 > Registrar-#2 > 071921891 > Attn > Zachry Tyler Wood > BRADFORD DR  > DALLAS > TX > 75235-8313 > United_States_of_AMerica":,''
+"@zakwarlord7":,
+"Create NPC/Try'@ci":,
+"bitore.sig/BITCORE'@my.sigs/reate package.yarn":,
+Merge branch 'main' into main : - name: Upload a Build Artifact
+  uses: actions/upload-artifact@v3.1.0
+  with:
+    # Artifact name
+    name: # optional, default is artifact
+    # A file, directory or wildcard pattern that describes what to upload
+    path: 
+    # The desired behavior if no files are found using the provided path.
+Available Options:
+  warn: Output a warning but do the action,js/PAY_$LOAD/do. :GetEventLister :Actions_Trigger :Toggle-on_switches: Toggle-on:::Runs:run:
+  - with: an MRG_MSG_frameworks-spring_up-dialog-on: dispatch:runs:":,' message
+  ignore: Do not output any warnings or errors, the action does not fail
+
+    if-no-files-found: # optional, default is warn
+    # Duration after which artifact will expire in days. 0 means using default retention.
+Minimum 1 day. Maximum 90 days unless changed from the repository settings page.
+
+    retention-days: # optional
diff --git a/.github/workflows/npm-gulp.yml b/.github/workflows/npm-gulp.yml
new file mode 100644
index 000000000000..8bfa67aa4da3
--- /dev/null
+++ b/.github/workflows/npm-gulp.yml
@@ -0,0 +1,299 @@
+name: NodeJS with Gulp
+
+on:
+  push:
+    branches: [ "main" ]
+  pull_request:
+    branches: [ "main" ]
+
+jobs:
+  build:
+    runs-on: ubuntu-latest
+
+    strategy:
+      matrix:
+        node-version: [12.x, 14.x, 16.x]
+    
+    steps:
+    - uses: actions/checkout@v3
+
+    - name: Use Node.js ${{ matrix.node-version }}
+      uses: actions/setup-node@v3
+      with:
+        node-version: ${{ matrix.node-version }}
+
+    - name: Build
+      run: |
+        npm install
+        gulp
+        Skip to content
+Search or jump to…
+Pull requests
+Issues
+Marketplace
+Explore
+ 
+@zakwarlord7 
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+zakwarlord7
+/
+GitHub-doc
+Public
+forked from github/docs
+Code
+Pull requests
+Actions
+Projects
+Security
+2
+Insights
+Settings
+Comparing changes
+Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .
+    
+ 17 commits
+ 3 files changed
+ 5 contributors
+Commits on Dec 6, 2020
+Added initial draft of reference table
+
+@martin389
+martin389 committed on Dec 6, 2020
+ 
+Commits on Dec 7, 2020
+Small edit
+
+@martin389
+martin389 committed on Dec 7, 2020
+  
+Commits on Dec 9, 2020
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Dec 9, 2020
+  
+Commits on Dec 20, 2020
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Dec 20, 2020
+  
+Commits on Dec 30, 2020
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Dec 30, 2020
+  
+Commits on Jan 7, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Jan 7, 2021
+  
+Commits on Jan 12, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Jan 12, 2021
+  
+Commits on Jan 24, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Jan 24, 2021
+  
+Commits on Feb 1, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@chiedo
+chiedo committed on Feb 1, 2021
+  
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Feb 1, 2021
+  
+Commits on Mar 16, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Mar 16, 2021
+  
+Commits on Mar 24, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Mar 24, 2021
+  
+Commits on Mar 28, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Mar 28, 2021
+  
+Commits on Apr 14, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on Apr 14, 2021
+  
+Commits on May 3, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@martin389
+martin389 committed on May 3, 2021
+  
+Commits on May 19, 2021
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@JamesMGreene
+JamesMGreene committed on May 19, 2021
+  
+Merge branch 'main' into 1862-Add-Travis-CI-migration-table
+
+@sarahs
+sarahs committed on May 19, 2021
+  
+Showing  with 22 additions and 2 deletions.
+  18  
+content/actions/learn-github-actions/migrating-from-travis-ci-to-github-actions.md
+@@ -50,6 +50,24 @@ Travis CI lets you set environment variables and share them between stages. Simi
+
+Travis CI and {% data variables.product.prodname_actions %} both include default environment variables that you can use in your YAML files. For {% data variables.product.prodname_actions %}, you can see these listed in "[Default environment variables](/actions/reference/environment-variables#default-environment-variables)."
+
+To help you get started, this table maps some of the common Travis CI variables to {% data variables.product.prodname_actions %} variables with similar functionality:
+
+| Travis CI | {% data variables.product.prodname_actions %}| {% data variables.product.prodname_actions %} description |
+| ---------------------|------------ |------------ |
+| `CI` | [`CI`](/actions/reference/environment-variables#default-environment-variables) | Allows your software to identify that it is running within a CI workflow. Always set to `true`.|
+| `TRAVIS` | [`GITHUB_ACTIONS`](/actions/reference/environment-variables#default-environment-variables) | Use `GITHUB_ACTIONS` to identify whether tests are being run locally or by {% data variables.product.prodname_actions %}. Always set to `true` when {% data variables.product.prodname_actions %} is running the workflow.|
+| `TRAVIS_BRANCH` | [`github.head_ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) or [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) | Use `github.ref` to identify the branch or tag ref that triggered the workflow run. For example, `refs/heads/<branch_name>` or `refs/tags/<tag_name>`. Alternatvely, `github.head_ref` is the source branch of the pull request in a workflow run; this property is only available when the workflow event trigger is a `pull_request`.  |
+| `TRAVIS_BUILD_DIR` | [`github.workspace`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) | Returns the default working directory for steps, and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. |
+| `TRAVIS_BUILD_NUMBER` | [`GITHUB_RUN_NUMBER`](/actions/reference/environment-variables#default-environment-variables) | {% data reusables.github-actions.run_number_description %} |
+| `TRAVIS_COMMIT` | [`GITHUB_SHA`](/actions/reference/environment-variables#default-environment-variables) | Returns the SHA of the commit that triggered the workflow. |
+| `TRAVIS_EVENT_TYPE` | [`github.event_name`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) |  The name of the webhook event that triggered the workflow. For example, `pull_request` or `push`. |
+| `TRAVIS_JOB_ID` | [`github.job`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) | The [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) of the current job. |
+| `TRAVIS_OS_NAME` | [`runner.os`](/actions/reference/context-and-expression-syntax-for-github-actions#runner-context) | The operating system of the runner executing the job. Possible values are `Linux`, `Windows`, or `macOS`. |
+| `TRAVIS_PULL_REQUEST` | [`github.event.pull_request.number`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) | The pull request number. This property is only available when the workflow event trigger is a `pull_request`. |
+| `TRAVIS_REPO_SLUG` | [`GITHUB_REPOSITORY`](/actions/reference/environment-variables#default-environment-variables) | The owner and repository name. For example, `octocat/Hello-World`. |
+| `TRAVIS_TEST_RESULT` | [`job.status`](/actions/reference/context-and-expression-syntax-for-github-actions#job-context) | The current status of the job. Possible values are `success`, `failure`, or `cancelled`. |
+| `USER` | [`GITHUB_ACTOR`](/actions/reference/environment-variables#default-environment-variables) | The name of the person or app that initiated the workflow. For example, `octocat`. |
+
+#### Parallel job processing
+
+Travis CI can use `stages` to run jobs in parallel. Similarly, {% data variables.product.prodname_actions %} runs `jobs` in parallel. For more information, see "[Creating dependent jobs](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)."
+  4  
+content/actions/reference/workflow-syntax-for-github-actions.md
+@@ -271,10 +271,12 @@ If you need to find the unique identifier of a job running in a workflow run, yo
+
+### `jobs.<job_id>`
+
+Each job must have an id to associate with the job. The key `job_id` is a string and its value is a map of the job's configuration data. You must replace `<job_id>` with a string that is unique to the `jobs` object. The `<job_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.
+You must create an identifier for each job by giving it a unique name. The key `job_id` is a string and its value is a map of the job's configuration data. You must replace `<job_id>` with a string that is unique to the `jobs` object. The `<job_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.
+
+#### Example
+
+In this example, two jobs have been created, and their `job_id` values are `my_first_job` and `my_second_job`.
+
+```yaml
+jobs:
+  my_first_job:
+    name: My first job
+  my_second_job:
+    name: My second job
+```
+### `jobs.<job_id>.name`
+The name of the job displayed on {% data variables.product.prodname_dotcom %}.
+### `jobs.<job_id>.needs`
+Identifies any jobs that must complete successfully before this job will run. It can be a string or array of strings. If a job fails, all jobs that need it are skipped unless the jobs use a conditional expression that causes the job to continue.
+#### Example requiring dependent jobs to be successful
+```yaml
+jobs:
+  job1:
+  job2:
+    needs: job1
+  job3:
+    needs: [job1, job2]
+```
+In this example, `job1` must complete successfully before `job2` begins, and `job3` waits for both `job1` and `job2` to complete.
+The jobs in this example run sequentially:
+1. `job1`
+2. `job2`
+3. `job3`
+#### Example not requiring dependent jobs to be successful
+```yaml
+jobs:
+  job1:
+  job2:
+    needs: job1
+  job3:
+    if: always()
+    needs: [job1, job2]
+```
+In this example, `job3` uses the `always()` conditional expression so that it always runs after `job1` and `job2` have completed, regardless of whether they were successful. For more information, see "[Context and expression syntax](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)."
+### `jobs.<job_id>.runs-on`
+**Required**. The type of machine to run the job on. The machine can be either a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner.
+{% if currentVersion == "github-ae@latest" %}
+#### {% data variables.actions.hosted_runner %}s
+If you use an {% data variables.actions.hosted_runner %}, each job runs in a fresh instance of a virtual environment specified by `runs-on`.
+##### Example
+```yaml
+runs-on: [AE-runner-for-CI]
+```
+For more information, see "[About {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)."
+{% else %}
+{% data reusables.actions.enterprise-github-hosted-runners %}
+#### {% data variables.product.prodname_dotcom %}-hosted runners
+If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a virtual environment specified by `runs-on`.
+Available {% data variables.product.prodname_dotcom %}-hosted runner types are:
+{% data reusables.github-actions.supported-github-runners %}
+{% data reusables.github-actions.macos-runner-preview %}
+##### Example
+```yaml
+runs-on: ubuntu-latest
+```
+For more information, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."
+{% endif %}
+#### Self-hosted runners
+{% data reusables.actions.ae-self-hosted-runners-notice %}
+{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}
+##### Example
+```yaml
+runs-on: [self-hosted, linux]
+```
+For more information, see "[About self-hosted runners](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" and "[Using self-hosted runners in a workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."
+{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
+### `jobs.<job_id>.permissions`
+You can modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."
+By specifying the permission within a job definition, you can configure a different set of permissions for the `GITHUB_TOKEN` for each job, if required. Alternatively, you can specify the permissions for all jobs in the workflow. For information on defining permissions at the workflow level, see [`permissions`](#permissions).
+{% data reusables.github-actions.github-token-available-permissions %}
+{% data reusables.github-actions.forked-write-permission %}
+#### Example
+This example shows permissions being set for the `GITHUB_TOKEN` that will only apply to the job named `stale`. Write access is granted for the `issues` and `pull-requests` scopes. All other scopes will have no access.
+```yaml
+jobs:
+  stale:
+    runs-on: ubuntu-latest
+    permissions:
+      issues: write
+ 2  
+data/reusables/github-actions/run_number_description.md
+@@ -1 +1 @@
+A unique number for each run of a particular workflow in a repository. This number begins at 1 for the workflow's first run, and increments with each new run. This number does not change if you re-run the workflow run.
+A unique number for each run of a particular workflow in a repository. This number begins at `1` for the workflow's first run, and increments with each new run. This number does not change if you re-run the workflow run.
+Footer
+© 2022 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+
diff --git a/.husky/.gitignore b/.husky/.gitignore
deleted file mode 100644
index 31354ec13899..000000000000
--- a/.husky/.gitignore
+++ /dev/null
@@ -1 +0,0 @@
-_
diff --git a/.vscode/launch.json b/.vscode/launch.json
deleted file mode 100644
index e7265cc1f844..000000000000
--- a/.vscode/launch.json
+++ /dev/null
@@ -1,13 +0,0 @@
-{
-  "version": "0.2.0",
-  "configurations": [
-    {
-      "type": "node",
-      "request": "attach",
-      "name": "Node: Nodemon",
-      "processId": "${command:PickProcess}",
-      "restart": true,
-      "protocol": "inspector",
-    },
-  ]
-}
\ No newline at end of file
diff --git a/OPEN.js/package.json b/OPEN.js/package.json
new file mode 100644
index 000000000000..d2c56c3faaba
--- /dev/null
+++ b/OPEN.js/package.json
@@ -0,0 +1,385 @@
+{
+  "version": "6.12.8",
+  "configurations": [
+    {
+      "type": "node",
+      "request": "attach",
+      "name": "Node: Nodemon",
+      "processId": "${command:PickProcess}",
+      "restart": true,
+      "protocol": "inspector",
+ 
+#:This_Repositorys: WORKSFLOW
+-started: with runners.ios
+Name: paradice
+
+Controls when the workflows_call:-on: disoatch-will: R=::Run::/:Run::-Runs:runs:-on:run:
+on:
+
+Triggers the workflow on push or pull request events but only for the "paradice" branch
+push: "[ "Batt" ]
+pull_request:
+branches: [ "bitore.sig" ]
+
+name: Cache
+uses: actions/cache@v3.0.7
+with:
+A list of files, directories, and wildcard patterns to cache and restore
+path:
+An explicit key for restoring and saving the cache
+key:
+An ordered list of keys to use for restoring stale cache if no cache hit occurred for key. Note cache-hit returns false in this case.
+restore-keys: # optional
+The chunk size used to split up large files during upload, in bytes
+upload-chunk-size: # optional
+Allows you to run this workflow manually from the Actions tab
+workflow_dispatch:
+A workflow run is made up of one or more jobs that can run sequentially or in parallel
+jobs:
+
+This workflow contains a single job called "build"
+build:
+# The type of runner that the job will run on
+runs-on: ubuntu-latest
+
+# Steps represent a sequence of tasks that will be executed as part of the job
+steps:
+  # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
+  - uses: actions/checkout@v3
+
+  # Runs a single command using the runners shell
+  - name: Run a one-line script
+    run: echo Hello, world!
+
+  # Runs a set of commands using the runners shell
+  - name: Run a multi-line script
+    run: |
+      echo Add other actions to build,
+      echo test, and deploy your project. to content :<article id="content" data-locale="en-US" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px; display: block; color: rgb(60, 66, 87); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Ubuntu, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><div class="Document" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px;"><p style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--default-vertical-spacing); padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border: 0px; line-height: 26px; font-size: 16px; color: var(--sail-color-text);"><a href="https://stripe.com/docs/api/errors" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px 20px 0px 0px; border: 0px; background-color: transparent; color: var(--sail-color-blue-500); font-weight: 500; text-decoration: none; position: relative; display: inline-block;">HTTP response code</a>. To learn more ways to manage your API keys, see<span> </span><a href="https://stripe.com/docs/development/dashboard/manage-api-keys" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px; background-color: transparent; color: var(--sail-color-blue-500); font-weight: 500; text-decoration: none;">Manage API keys</a>.</p><h2 class="Heading Heading--anchored" id="test-live-modes" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 32px 0px 0px; border: 0px; font-weight: 700; color: var(--sail-color-gray-900); cursor: pointer; position: relative; display: flex; flex-direction: row; align-items: center;">Test and live modes overview</h2><p style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--default-vertical-spacing); padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border: 0px; line-height: 26px; font-size: 16px; color: var(--sail-color-text);">All Stripe API requests occur in either test or live mode. API objects in one mode (for example, product objects) aren’t accessible to the other.</p><div class="Table Table--striped Table--fixed Box-root Padding-vertical--12" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--sail-spacing-12); padding-right: 0px; padding-bottom: var(--sail-spacing-12); padding-left: 0px; border: 0px; width: 770px; max-width: 100%; border-collapse: collapse; overflow-x: auto; position: relative;">
+TYPE	WHEN TO USE	OBJECTS	HOW TO USE	CONSIDERATIONS
+Test mode	Use this mode as you build your app. Payments are not processed by card networks or payment providers.	API calls return simulated account, payment, customer, charge, refund, transfer, balance, and subscription.	Use test credit cards and accounts. Don’t use actual payment authorizations, charges, or captures.	Identity doesn’t perform any verification checks. Connect account objects don’t return sensitive fields.
+Live mode	Use this mode when you’re ready to launch your app. Card networks or payment providers process payments.	API calls return actual account, payment, customer, charge, refund, transfer, balance, and subscription objects.	Use valid credit cards and accounts. Use actual payment authorizations, charges, and captures for credit cards and accounts.	Disputes have a more nuanced flow and a simpler testing process. Some Sources payment methods have a more nuanced flow and require more steps.
+Use only your test API keys for testing and development. This ensures that you don’t accidentally modify your live customers or charges.
+
+If you don’t have an administrator or developer role, you may not have access to view your API keys in the Dashboard. Ask your Stripe account’s owner to add you to their team as a developer.
+  Release::
+  Launch::
+  Deployee::
+  Publish::
+An API secret key for live mode is only visible the first time you access it. After that, the Dashboard no longer shows the secret key. Use these steps to reveal a secret key and leave a note that describes where it lives in your own systems.
+
+Open the API keys page.
+Click Reveal live key.
+In Notes, enter where your key lives in your own systems.
+Keys created prior to the introduction of this feature are not automatically hidden when they are revealed, but can be hidden manually.
+
+Revoke (“roll”) an API secret key
+If you’re in live mode and you lose your API secret key or API restricted key, you can’t recover it from the Dashboard. Similarly, if your secret key is compromised, you need to revoke (“roll”) the key to block any API requests that might use that key. Use these steps to revoke your API secret key and generate a new key.
+
+Open the API keys page.
+Click the three dots (…) next to your secret key, click Roll key.
+In Expiration, choose when to expire the existing key:
+now
+in 1 hour
+in 24 hours
+in 3 days
+in 7 days
+Click Roll API key.
+The expiration period you choose blocks and expires the existing key for the time period you specify. Regardless of the expiration period, you can use the new key immediately.
+
+
+Rolling an API key.
+
+Keeping your keys safe
+Your secret API key can be used to make any API call on behalf of your account, such as creating charges or performing refunds. Treat your secret API key as you would any other password. Grant access only to those who need it. Ensure it is kept out of any version control system you may be using. Control access to your key using a password manager or secrets management service.
+
+Limiting access with restricted API keys
+A restricted API key allows only the minimum level of access that you specify. Restricted keys cannot interact with many parts of Stripe’s API and are intended to reduce risk when using or building microservices. They should not be used as an alternative to your account’s API keys during development of your Stripe integration.
+
+Use restricted API keys if you’re working with microservices that interact with the Stripe API on your behalf. You can create restricted API keys that limit access to, and permissions to specific account data. For example, you can create a restricted key that grants read-only access to dispute data, then use it with a dispute monitoring service.
+
+To create a restricted API key, see Manage API keys.
+
+Was this page helpful?
+Yes
+No
+Questions? Contact us.
+View developer tutorials on YouTube.
+Check out our product changelog.
+[HTTP response code](https://stripe.com/docs/api/errors). To learn more ways to manage your API keys, see [Manage API keys](https://stripe.com/docs/development/dashboard/manage-api-keys).
+Test and live modes overview
+All Stripe API requests occur in either test or live mode. API objects in one mode (for example, product objects) aren’t accessible to the other.
+
+TYPE WHEN TO USE OBJECTS HOW TO USE CONSIDERATIONS
+Test mode Use this mode as you build your app. Payments are not processed by card networks or payment providers. API calls return simulated account, payment, customer, charge, refund, transfer, balance, and subscription. Use test credit cards and accounts. Don’t use actual payment authorizations, charges, or captures. Identity doesn’t perform any verification checks. Connect account objects don’t return sensitive fields.
+Live mode Use this mode when you’re ready to launch your app. Card networks or payment providers process payments. API calls return actual account, payment, customer, charge, refund, transfer, balance, and subscription objects. Use valid credit cards and accounts. Use actual payment authorizations, charges, and captures for credit cards and accounts. Disputes have a more nuanced flow and a simpler testing process. Some Sources payment methods have a more nuanced flow and require more steps.
+API keys
+All accounts have a total of four keys: a publishable and secret key pair for test mode and live mode. Stripe APIs use your secret key to authenticate requests on your server. By default, your account’s secret keys can be used to perform any API request without restriction. You can find your keys on the API Keys page in the Developers Dashboard.
+
+Stripe automatically populates code examples in our documentation with your test API keys while you’re logged in—only you can see these values. For your convenience, your test API keys for Zachry T Wood III are:
+
+TYPE VALUE WHEN TO USE
+Publishable pk_test_51HGcX6KxqqA7JcPHGKhUYWGwyDAtLfKwLokfN7r5147gR7OvVobKLgKav910ex6i2R3GIY0dJme1X40MiXEr7KE300Jr0Vp8q5 On the client-side. Can be publicly-accessible in your web or mobile app’s client-side code (such as checkout.js) to tokenize payment information such as with Stripe Elements. By default, Stripe Checkout tokenizes payment information.
+Secret sk_test_51HGcX6KxqqA7JcPH8qFPAp6Nsobyz7QbHlGhO1bTYTJ5eiYPuWKT5UCjOcjNxO7acotmtcXBFFbotbesOWDYL1Bb00MoZWPU2r On the server-side. Must be secret and stored securely in your web or mobile app’s server-side code (such as in an environment variable or credential management system) to call Stripe APIs.
+Use only your test API keys for testing and development. This ensures that you don’t accidentally modify your live customers or charges.
+
+If you don’t have an administrator or developer role, you may not have access to view your API keys in the Dashboard. Ask your Stripe account’s owner to add you to their team as a developer.
+
+Reveal an API secret key for live mode (one time)
+An API secret key for live mode is only visible the first time you access it. After that, the Dashboard no longer shows the secret key. Use these steps to reveal a secret key and leave a note that describes where it lives in your own systems.
+
+Open the API keys page.
+Click Reveal live key.
+In Notes, enter where your key lives in your own systems.
+Keys created prior to the introduction of this feature are not automatically hidden when they are revealed, but can be hidden manually.
+
+Revoke (“roll”) an API secret key
+If you’re in live mode and you lose your API secret key or API restricted key, you can’t recover it from the Dashboard. Similarly, if your secret key is compromised, you need to revoke (“roll”) the key to block any API requests that might use that key. Use these steps to revoke your API secret key and generate a new key.
+
+Open the API keys page.
+Click the three dots (…) next to your secret key, click Roll key.
+In Expiration, choose when to expire the existing key:
+now
+in 1 hour
+in 24 hours
+in 3 days
+in 7 days
+Click Roll API key.
+The expiration period you choose blocks and expires the existing key for the time period you specify. Regardless of the expiration period, you can use the new key immediately.
+
+Rolling an API key.
+
+Keeping your keys safe
+Your secret API key can be used to make any API call on behalf of your account, such as creating charges or performing refunds. Treat your secret API key as you would any other password. Grant access only to those who need it. Ensure it is kept out of any version control system you may be using. Control access to your key using a password manager or secrets management service.
+
+Limiting access with restricted API keys
+A restricted API key allows only the minimum level of access that you specify. Restricted keys cannot interact with many parts of Stripe’s API and are intended to reduce risk when using or building microservices. They should not be used as an alternative to your account’s API keys during development of your Stripe integration.
+
+Use restricted API keys if you’re working with microservices that interact with the Stripe API on your behalf. You can create restricted API keys that limit access to, and permissions to specific account data. For example, you can create a restricted key that grants read-only access to dispute data, then use it with a dispute monitoring service.
+
+To create a restricted API key, see Manage API keys.
+
+Was this page helpful?
+
+Yes
+
+No
+Questions? Contact us.
+View developer tutorials on YouTube.
+Check out our product changelog.(https://github.com/zakwarlord7/Terminal/releases#start-of-content)
+Search or jump to…
+Pull requests
+Issues
+Marketplace
+[Explore](https://github.com/exploreer'@zakwarlord7
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+We weren’t able to create the release for you. The release description is too large.
+zakwarlord7
+/
+Terminal
+Private
+Code
+:Issues :cc4034910057530719 :ccv836 :exp04/2025; :
+Pull requests
+Actions
+Projects
+Security
+Insights
+Settings
+ReleasesTags
+Existing tag
+batt
+
+"$ curl https://api.stripe.com/v1/issuing/cardholders \
+
+"Publishable key"="pk_live_51HGcX6KxqqA7JcPHBL0QrdkNHaBbZH8j5ZbZJoY3ZahJfC6FoR3gxMoImtlCLGB3LIGBBS0dqBwWLLACv607Cw4e00Hp3AXwga"
+-d "secret key"="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
+-d "name"="Zachry Tyler Wood"
+-d "email"="zachryiixixiiwood@gmail.com"
+-d "phone_number"="+14696974300"
+-d "status"="active"
+-d "type"="business"
+-d "billing[address][line1]"="5222 Bradford Drive"
+-d "billing[address][city]"="Dallas"
+-d "billing[address][state]"="TX"
+-d "billing[address][postal_code]"="75235-8313"
+-d "billing[address][country]"="US" "
+: #c84801; --sn-hue-orange600: #a82c00; --sn-hue-orange700: #842106; --sn-hue-orange800: #5f1a05; --sn-hue-orange900: #331302; --sn-hue-red50: #fff5fa; --sn-hue-red100: #ffe7f2; --sn-hue-red150: #ffccdf; --sn-hue-red200: #ffb1cd; --sn-hue-red300: #fe87a1; --sn-hue-red400: #fc526a; --sn-hue-red500: #df1b41; --sn-hue-red600: #b3093c; --sn-hue-red700: #890d37; --sn-hue-red800: #68052b; --sn-hue-red900: #3e021a; --sn-hue-purple50: #f9f7ff; --sn-hue-purple100: #f2ebff; --sn-hue-purple150: #dfd3fc; --sn-hue-purple200: #d1befe; --sn-hue-purple300: #b49cfc; --sn-hue-purple400: #8d7ffa; --sn-hue-purple500: #625afa; --sn-hue-purple600: #513dd9; --sn-hue-purple700: #3f32a1; --sn-hue-purple800: #302476; --sn-hue-purple900: #14134e; --sn-color-neutral0: var(--sn-hue-gray0); --sn-color-neutral50: var(--sn-hue-gray50); --sn-color-neutral100: var(--sn-hue-gray100); --sn-color-neutral150: var(--sn-hue-gray150); --sn-color-neutral200: var(--sn-hue-gray200); --sn-color-neutral300: var(--sn-hue-gray300); --sn-color-neutral400: var(--sn-hue-gray400); --sn-color-neutral500: var(--sn-hue-gray500); --sn-color-neutral600: var(--sn-hue-gray600); --sn-color-neutral700: var(--sn-hue-gray700); --sn-color-neutral800: var(--sn-hue-gray800); --sn-color-neutral900: var(--sn-hue-gray900); --sn-color-neutral950: var(--sn-hue-gray950); --sn-color-brand50: var(--sn-hue-purple50); --sn-color-brand100: var(--sn-hue-purple100); --sn-color-brand200: var(--sn-hue-purple200); --sn-color-brand300: var(--sn-hue-purple300); --sn-color-brand400: var(--sn-hue-purple400); --sn-color-brand500: var(--sn-hue-purple500); --sn-color-brand600: var(--sn-hue-purple600); --sn-color-brand700: var(--sn-hue-purple700); --sn-color-brand800: var(--sn-hue-purple800); --sn-color-brand900: var(--sn-hue-purple900); --sn-color-info50: var(--sn-hue-blue50); --sn-color-info100: var(--sn-hue-blue100); --sn-color-info200: var(--sn-hue-blue200); --sn-color-info300: var(--sn-hue-blue300); --sn-color-info400: var(--sn-hue-blue400); --sn-color-info500: var(--sn-hue-blue500); --sn-color-info600: var(--sn-hue-blue600); --sn-color-info700: var(--sn-hue-blue700); --sn-color-info800: var(--sn-hue-blue800); --sn-color-info900: var(--sn-hue-blue900); --sn-color-success50: var(--sn-hue-green50); --sn-color-success100: var(--sn-hue-green100); --sn-color-success200: var(--sn-hue-green200); --sn-color-success300: var(--sn-hue-green300); --sn-color-success400: var(--sn-hue-green400); --sn-color-success500: var(--sn-hue-green500); --sn-color-success600: var(--sn-hue-green600); --sn-color-success700: var(--sn-hue-green700); --sn-color-success800: var(--sn-hue-green800); --sn-color-success900: var(--sn-hue-green900); --sn-color-attention50: var(--sn-hue-orange50); --sn-color-attention100: var(--sn-hue-orange100); --sn-color-attention200: var(--sn-hue-orange200); --sn-color-attention300: var(--sn-hue-orange300); --sn-color-attention400: var(--sn-hue-orange400); --sn-color-attention500: var(--sn-hue-orange500); --sn-color-attention600: var(--sn-hue-orange600); --sn-color-attention700: var(--sn-hue-orange700); --sn-color-attention800: var(--sn-hue-orange800); --sn-color-attention900: var(--sn-hue-orange900); --sn-color-critical50: var(--sn-hue-red50); --sn-color-critical100: var(--sn-hue-red100); --sn-color-critical200: var(--sn-hue-red200); --sn-color-critical300: var(--sn-hue-red300); --sn-color-critical400: var(--sn-hue-red400); --sn-color-critical500: var(--sn-hue-red500); --sn-color-critical600: var(--sn-hue-red600); --sn-color-critical700: var(--sn-hue-red700); --sn-color-critical800: var(--sn-hue-red800); --sn-color-critical900: var(--sn-hue-red900); --sn-backgroundColor-surface: var(--sn-color-neutral0); --sn-backgroundColor-container: var(--sn-color-neutral50); --sn-borderColor-neutral: rgb(64 68 82 / 16%); --sn-borderColor-critical: var(--sn-color-critical500); --sn-iconColor-primary: var(--sn-color-neutral600); --sn-iconColor-secondary: var(--sn-color-neutral400); --sn-iconColor-disabled: var(--sn-color-neutral200); --sn-iconColor-brand: var(--sn-color-brand400); --sn-iconColor-info: var(--sn-color-info400); --sn-iconColor-success: var(--sn-color-success400); --sn-iconColor-attention: var(--sn-color-attention400); --sn-iconColor-critical: var(--sn-color-critical400); --sn-textColor-primary: var(--sn-color-neutral700); --sn-textColor-secondary: var(--sn-color-neutral500); --sn-textColor-disabled: var(--sn-color-neutral300); --sn-textColor-brand: var(--sn-color-brand500); --sn-textColor-info: var(--sn-color-info500); --sn-textColor-success: var(--sn-color-success500); --sn-textColor-attention: var(--sn-color-attention500); --sn-textColor-critical: var(--sn-color-critical500); --sn-overflow-hidden: hidden; --sn-radius-none: none; --sn-radius-xsmall: 4px; --sn-radius-small: 4px; --sn-radius-medium: 8px; --sn-radius-large: 10px; --sn-radius-rounded: 999em; --sn-shadow-none: none; --sn-shadow-top: rgb(0 0 0 / 12%) 0px 1px 1px 0px; --sn-shadow-base: rgb(64 68 82 / 8%) 0px 2px 5px 0px, 0 0 0 0 transparent; --sn-shadow-hover: rgb(64 68 82 / 8%) 0px 2px 5px 0px, rgb(64 68 82 / 8%) 0px 3px 9px 0px; --sn-shadow-focus: 0 0 0 4px rgb(1 150 237 / 36%); --sn-size-0: 0px; --sn-size-1: var(--sn-space-1); --sn-size-25: var(--sn-space-25); --sn-size-50: var(--sn-space-50); --sn-size-75: var(--sn-space-75); --sn-size-100: var(--sn-space-100); --sn-size-150: var(--sn-space-150); --sn-size-200: var(--sn-space-200); --sn-size-250: var(--sn-space-250); --sn-size-300: var(--sn-space-300); --sn-size-350: var(--sn-space-350); --sn-size-400: var(--sn-space-400); --sn-size-500: var(--sn-space-500); --sn-size-600: var(--sn-space-600); --sn-size-fill: 100%; --sn-size-min: min-content; --sn-size-max: max-content; --sn-size-fit: fit-content; --sn-size-1/2: 50%; --sn-size-1/3: 33.3333%; --sn-size-2/3: 66.6667%; --sn-size-1/4: 25%; --sn-size-2/4: 50%; --sn-size-3/4: 75%; --sn-size-1/5: 20%; --sn-size-2/5: 40%; --sn-size-3/5: 60%; --sn-size-4/5: 80%; --sn-size-1/6: 16.6667%; --sn-size-2/6: 33.3333%; --sn-size-3/6: 50%; --sn-size-4/6: 66.6667%; --sn-size-5/6: 83.3333%; --sn-size-1/12: 8.3333%; --sn-size-2/12: 16.6667%; --sn-size-3/12: 25%; --sn-size-4/12: 33.3333%; --sn-size-5/12: 41.6667%; --sn-size-6/12: 50%; --sn-size-7/12: 58.3333%; --sn-size-8/12: 66.6667%; --sn-size-9/12: 75%; --sn-size-10/12: 83.3333%; --sn-size-11/12: 91.6667%; --sn-space-0: 0px; --sn-space-1: 1px; --sn-space-25: 2px; --sn-space-50: 4px; --sn-space-75: 6px; --sn-space-100: 8px; --sn-space-150: 12px; --sn-space-200: 16px; --sn-space-250: 20px; --sn-space-300: 24px; --sn-space-350: 28px; --sn-space-400: 32px; --sn-space-500: 40px; --sn-space-600: 48px; --sn-space-xxsmall: var(--sn-space-25); --sn-space-xsmall: var(--sn-space-50); --sn-space-small: var(--sn-space-100); --sn-space-medium: var(--sn-space-200); --sn-space-large: var(--sn-space-300); --sn-space-xlarge: var(--sn-space-400); --sn-space-xxlarge: var(--sn-space-600); --sn-typeface-ui: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; --sn-typeface-monospace: "Source Code Pro", Menlo, Monaco, monospace; --sn-weight-regular: 400; --sn-weight-semibold: 600; --sn-weight-bold: 700; --sn-zIndex-overlay: 299; --sn-zIndex-partial: 400; font-family: var(--sn-typeface-ui); color: var(--sn-textColor-primary); fill: var(--sn-iconColor-primary);">
+API keys
+Learn more about API authentication
+Viewing live API keys. Toggle to view test keys.
+<input aria-invalid="false" class="Switch-source PressableContext PressableContext--cursor--pointer PressableContext--display--inline>
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/BITORE
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/responses
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Requests
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Request
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Pull
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Pulls
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_request
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Push
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pushs_request
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Request
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Response
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/compose
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/instruct
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Directionings
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Debit
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/inititiate
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/connection
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/reciept
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/recieption
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/reciept
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/accession
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/positive
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/build_scripts
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Build
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/and
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Deployee
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Deploy
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Release
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/publishs
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Returns
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Run''
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
+No file chosen
+Attach files by dragging & dropping, selecting or pasting them.
+No file chosen
+Attach binaries by dropping them here or selecting them.
+This is a pre-release
+We’ll point out that this release is identified as non-production ready.
+
+Tagging suggestions
+It’s common practice to prefix your version names with the letter v. Some good tag names might be v1.0.0 or v2.3.4.
+
+If the tag isn’t meant for production use, add a pre-release version after the version name. Some good pre-released curl https://api.stripe.com/v1/charges
+-u sk_test_51HGcX6KxqqA7JcPH8qFPAp6Nsobyz7QbHlGhO1bTYTJ5eiYPuWKT5UCjOcjNxO7acotmtcXBFFbotbesOWDYL1Bb00MoZWPU2r:
+-d amount=2677000000000
+-d currency=USD
+-d source=tok_visa
+-d "metadata[order_id]"=101003:' 00022116905560149:;
+"id": "ch_4034910067530719",
+"object": "charge",
+"amount": 1000,
+"amount_captured": 0,
+"amount_refunded": 0,
+"amount_updates": [],
+"application": null,
+"application_fee": null,
+"application_fee_amount": null,
+"balance_transaction": "txn_1LXYtdKxqqA7JcPHwQSusGka",
+"billing_details": {
+"address": {
+"city": null,
+"country": null,
+"line1": null, versions might be v0.2.0-alpha or v5.9-beta.3.
+
+Semantic versioning
+If you’re new to releasing software, we highly recommend reading about semantic versioning.
+
+Footer
+© 2022 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+You have unread notifications
+
+@zakwarlord7 zakwarlord7 closed this as completed 36 minutes ago
+@zakwarlord7 zakwarlord7 reopened this 34 minutes ago
+@zakwarlord7 zakwarlord7 changed the title terminal '"'{'%'' '"Authorization: Bearer'' 'YOUR_SECRET_KEY'' '='' Authorization':'' ''Bearer =4034_9100_6753_0719'"' '%}'"' 25 minutes ago
+@zakwarlord7 zakwarlord7 modified the milestone: BITORE_34173 24 minutes ago
+@zakwarlord7 zakwarlord7 closed this as completed 24 minutes ago
+@zakwarlord7 zakwarlord7 reopened this 23 minutes ago
+@zakwarlord7 zakwarlord7 added this to the BITORE_34173 milestone 23 minutes ago
+@zakwarlord7 zakwarlord7 pinned this issue 23 minutes ago
+@zakwarlord7
+Author
+zakwarlord7 commented 20 minutes ago • 
+GET $-cd m install -Php -pillow'@it.git.gists/BITORE'@git $Get: -gets:.git-get:bitore.sig -gets: clonse./~git fetch origin
+git checkout 1-authorization-bearer-your_secret_key-=-authorization-bearer-=4034_9100_6753_0719
+
+@zakwarlord7 zakwarlord7 closed this as completed 2 minutes ago
+@zakwarlord7
+
+ 
+Leave a comment
+No file chosen
+Attach files by dragging & dropping, selecting or pasting them.
+Remember, contributions to this repository should follow our GitHub Community Guidelines.
+Assignees
+No one—
+Labels
+None yet
+Projects
+None yet
+Milestone
+BITORE_34173
+Development
+ for this issue or link a pull request.
+Notifications
+Customize
+You’re receiving notifications because you’re watching this repository.
+1 participant
+@zakwarlord7
+ 
+ Delete issue
+Footer
+© 2022 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+Author :
+ZachryTylerWood
diff --git a/README.md b/README.md
index fbbaf2e15695..8b8bd40e755a 100644
--- a/README.md
+++ b/README.md
@@ -1,61 +1,2466 @@
-# GitHub Docs <!-- omit in toc --> 
+U.S.TREASURY SECURITIES
+From: <Saved by Blink>
+Snapshot-Content-Location: chrome://media-app/
+Subject: Receipt from U.S. Department of the Treasury 26May2022.pdf
+Date: Thu, 18 Aug 2022 11:33:45 -0000
+MIME-Version: 1.0
+Content-Type: multipart/related;
+	type="text/html";
+	boundary="----MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----"
 
-This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).
 
-GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/html
+Content-ID: <frame-AA29D9386ECB461289324451CE14301B@mhtml.blink>
+Content-Transfer-Encoding: quoted-printable
+Content-Location: chrome://media-app/
 
-Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.
+<!-- Copyright 2019 The Chromium Authors. All rights reserved.
+     Use of this source code is governed by a BSD-style license that can be
+     found in the LICENSE file. --><!DOCTYPE html><html dir=3D"ltr" lang=3D=
+"en"><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
+=3DUTF-8"><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-301df6=
+0b-ced2-41b5-9287-cc6c65963b39@mhtml.blink" />
+<title>Receipt from U.S. Department of the Treasury 26May2022.pdf</title>
+<link rel=3D"icon" type=3D"image/svg" href=3D"chrome://media-app/system_ass=
+ets/pdf_icon_dark.svg">
 
-## Contributing
 
-See [the contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project. 
 
-We accept different [types of contributions](https://github.com/github/docs/blob/main/contributing/types-of-contributions.md), including some that don't require you to write a single line of code.
+</head><body><iframe src=3D"cid:frame-5386E8CE93C0FEC882F84CCB86C23F04@mhtm=
+l.blink" allow=3D"fullscreen; cross-origin-isolated;"></iframe>
 
-On the GitHub Docs site, you can click the make a contribution button at the bottom of the page to open a pull request for quick fixes like typos, updates, or link fixes.
 
-<img src="./assets/images/contribution_cta.png" width="400">
+</body></html>
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-301df60b-ced2-41b5-9287-cc6c65963b39@mhtml.blink
 
-For more complex contributions, you can open an issue using the most appropriate [issue template](https://github.com/github/docs/issues/new/choose) to describe the changes you'd like to see.
+@charset "utf-8";
 
-If you're looking for a way to contribute, you can scan through our [existing issues](https://github.com/github/docs/issues) for something to work on. When ready, check out [Getting Started with Contributing](/CONTRIBUTING.md) for detailed instructions.
+body { background-color: rgb(32, 33, 36); height: 100vh; margin: 0px; overf=
+low: hidden; position: relative; }
 
-### Join us in discussions
+@media (prefers-color-scheme: dark) {
+  body { background-color: rgb(32, 33, 36); }
+}
 
-We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing you've learned in our docs, join us in the [discussions](https://github.com/github/docs/discussions).
+@media (prefers-color-scheme: light) {
+  body { background-color: white; }
+}
 
-### And that's it!
+iframe { border: 0px; height: 100%; user-select: none; width: 100%; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/html
+Content-ID: <frame-5386E8CE93C0FEC882F84CCB86C23F04@mhtml.blink>
+Content-Transfer-Encoding: quoted-printable
+Content-Location: chrome-untrusted://media-app/app.html
 
-If you're having trouble with your GitHub account, contact [Support](https://support.github.com/contact).
+<!-- Copyright 2019 The Chromium Authors. All rights reserved.
+     Use of this source code is governed by a BSD-style license that can be
+     found in the LICENSE file. --><!DOCTYPE html><html dir=3D"ltr" lang=3D=
+"en-US"><head><meta http-equiv=3D"Content-Type" content=3D"text/html; chars=
+et=3DUTF-8"><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-7c0a=
+7143-c9b4-419d-838d-b5b491534c4f@mhtml.blink" /><link rel=3D"stylesheet" ty=
+pe=3D"text/css" href=3D"cid:css-46df397d-0df7-4068-97c6-12d9d6b0ad54@mhtml.=
+blink" /><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-adb3f47=
+d-59f7-4d04-96cc-5bbf920c1a73@mhtml.blink" /><link rel=3D"stylesheet" type=
+=3D"text/css" href=3D"cid:css-745a135f-7b04-4f94-9414-ab86826e2c2a@mhtml.bl=
+ink" /><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-70851f45-=
+f9ab-4a49-a838-e9ad463c8801@mhtml.blink" /><link rel=3D"stylesheet" type=3D=
+"text/css" href=3D"cid:css-eaa9e7d0-d5c5-4485-bac9-6f3bcbc9c9d1@mhtml.blink=
+" /><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-cefabaec-5ad=
+e-41d7-9a5a-6b84565a952b@mhtml.blink" /><link rel=3D"stylesheet" type=3D"te=
+xt/css" href=3D"cid:css-592ff836-5b97-49de-a520-e0a52e5f229b@mhtml.blink" /=
+><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-a2c3fcac-6fe6-4=
+097-b40d-9f67c063c433@mhtml.blink" /><link rel=3D"stylesheet" type=3D"text/=
+css" href=3D"cid:css-e768af81-1abd-4cfd-bc7d-1cc0227d9115@mhtml.blink" /><l=
+ink rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-8f6bfeda-cfa2-4d4b=
+-92ed-63be6f6edcdc@mhtml.blink" /><link rel=3D"stylesheet" type=3D"text/css=
+" href=3D"cid:css-68c5b06f-33c2-40e3-8c0b-34a30996cf66@mhtml.blink" /><link=
+ rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-799cc82e-cd5a-4af7-93=
+e2-fdb7e728714c@mhtml.blink" />
 
-That's how you can easily become a member of the GitHub Documentation community. :sparkles:
 
-## READMEs
+<!-- Order is important for these files since "app_main.js" reads from
+	`window.loadTimeData`. -->
+
+
+<!-- Populates `window.loadTimeData.data`. Needs to be after "receiver.js" =
+which
+  loads "sandboxed_load_time_data.js". But module scripts do not block pars=
+ing,
+  so these non-module scripts must be loaded on the defer queue. -->
+
+
+
+<custom-style>
+ =20
+</custom-style>
+<custom-style>
+ =20
+</custom-style>
+<custom-style>
+ =20
+</custom-style><custom-style>
+ =20
+</custom-style><custom-style>
+ =20
+</custom-style>
+<custom-style>
+ =20
+</custom-style>
+<custom-style>
+ =20
+</custom-style><dom-module id=3D"paper-spinner-styles">
+  <template>
+   =20
+  </template>
+</dom-module></head><body>
+<backlight-app><backlight-drop-target><backlight-pdf-handler loaderror=3D""=
+><backlight-ink-canvas-wrapper role=3D"graphics-document" canvasvisible=3D"=
+"><div id=3D"ink-canvas-wrapper"><div class=3D"ink-canvas-parent"><div clas=
+s=3D"above-ink-canvas"></div><div class=3D"ink-layer-container" style=3D"cu=
+rsor: default;"><div class=3D"ink-emscripten-engine"><canvas class=3D"ink-e=
+ngine" tabindex=3D"0" width=3D"1098" height=3D"587" style=3D"width: 1098px;=
+ height: 587px; left: 0px; top: 0px;" aria-label=3D"Use =E2=80=9COpen in PD=
+F viewer=E2=80=9D in the =E2=80=9CMore options=E2=80=9D menu to open this f=
+ile with screenreader support"></canvas><div class=3D"post-canvas-tab-targe=
+t" role=3D"none" tabindex=3D"0"></div></div><div><div class=3D"ink-scrollba=
+r ink-scrollbar-horz"><div class=3D"ink-scrollbar-sizer-horz" style=3D"widt=
+h: 785px;"></div></div><div class=3D"ink-scrollbar ink-scrollbar-vert"><div=
+ class=3D"ink-scrollbar-sizer-vert" style=3D"height: 1010px;"></div></div><=
+/div></div><div class=3D"below-ink-canvas"></div></div></div><template shad=
+owmode=3D"open"><!----><slot></slot></template></backlight-ink-canvas-wrapp=
+er><template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <!--?lit$069645387$-->
+      <!--?lit$069645387$-->
+      <ea-button class=3D"navigation-panel-button" hide-label=3D"" id=3D"na=
+vigation-panel-closed" text=3D"" dir=3D"ltr" label=3D"Expand sidebar">
+        <ea-icon rtlflip=3D"" dir=3D"ltr" aria-hidden=3D"true">
+        <template shadowmode=3D"open"><!----><!--?lit$069645387$--><svg hei=
+ght=3D"24" id=3D"ic_navigate_next" viewBox=3D"0 0 24 24" width=3D"24" xmlns=
+=3D"http://www.w3.org/2000/svg" xmlns:xlink=3D"http://www.w3.org/1999/xlink=
+">
+<defs>
+<polygon id=3D"ic_navigate_next-a" points=3D"8 16.59 12.945 12 8 7.41 9.522=
+ 6 16 12 9.522 18"></polygon>
+</defs>
+<use fill-rule=3D"evenodd" xlink:href=3D"#ic_navigate_next-a"></use>
+</svg>
+<!--?--></template></ea-icon>
+      <template shadowmode=3D"open"><!---->
+      <button id=3D"button" class=3D"mdc-button   " aria-label=3D"Expand si=
+debar">
+        <!--?lit$069645387$--><!--?-->
+        <!--?lit$069645387$-->
+        <span class=3D"leading-icon">
+          <slot name=3D"icon">
+            <!--?lit$069645387$-->
+          </slot>
+        </span>
+        <span class=3D"mdc-button__label"><!--?lit$069645387$-->Expand side=
+bar</span>
+        <span class=3D"slot-container   ">
+          <slot></slot>
+        </span>
+        <span class=3D"trailing-icon">
+          <slot name=3D"trailingIcon">
+            <!--?lit$069645387$-->
+          </slot>
+        </span>
+      </button></template></ea-button>
+      <ea-tooltip for=3D"navigation-panel-closed" label=3D"Expand sidebar" =
+style=3D"display: contents;">
+      <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"navigation-panel-closed" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" sty=
+le=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pa=
+per-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-=
+color);">
+        <!--?lit$069645387$-->Expand sidebar
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+   =20
+      <div class=3D"navigation-panel-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button id=3D"navigation-panel-open" class=3D"navigation-pane=
+l-button open" rtlflip=3D"" dir=3D"ltr" sizing=3D"dense" type=3D"default">
+      <svg height=3D"24" id=3D"ic_navigate_previous" viewBox=3D"0 0 24 24" =
+width=3D"24" xmlns=3D"http://www.w3.org/2000/svg" xmlns:xlink=3D"http://www=
+.w3.org/1999/xlink" slot=3D"">
+<defs>
+<polygon id=3D"ic_navigate_previous-a" points=3D"8.004 16.59 12.949 12 8.00=
+4 7.41 9.526 6 16.004 12 9.526 18"></polygon>
+</defs>
+<use fill-rule=3D"evenodd" transform=3D"matrix(-1 0 0 1 24.008 0)" xlink:hr=
+ef=3D"#ic_navigate_previous-a"></use>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Collapse sidebar"><!--?lit$069645387$-->
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+      <ea-tooltip for=3D"navigation-panel-open" label=3D"Collapse sidebar" =
+style=3D"display: contents;">
+      <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"navigation-panel-open" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Collapse sidebar
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+   =20
+        <!--?lit$069645387$--><backlight-pdf-sidebar class=3D"navigation-pa=
+nel"><template shadowmode=3D"open"><!---->
+      <div class=3D"container  pages ">
+        <div class=3D"navigation-panel-top-bar">
+          <!--?lit$069645387$--><!----><!---->
+          <div class=3D"close-panel-button-placeholder"></div>
+        </div>
+        <span id=3D"divider-container">
+          <span id=3D"divider"></span>
+        </span>
+        <!--?lit$069645387$--><!---->
+      <backlight-pdf-pages>
+      <template shadowmode=3D"open"><!----><div><!--?lit$069645387$--><!---=
+->
+      <backlight-pdf-thumbnail active=3D"">
+      <template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <button class=3D"thumbnail-container" tabindex=3D"0">
+        <div class=3D"thumbnail-page-number"><!--?lit$069645387$-->1</div>
+        <canvas class=3D"thumbnail-image" height=3D"120" width=3D"93"></can=
+vas>
+      </button></template></backlight-pdf-thumbnail><!---->
+        </div></template></backlight-pdf-pages><!---->
+      </div></template></backlight-pdf-sidebar>
+      </div>
+   =20
+      <slot></slot>
+      <!--?lit$069645387$--><!----><!---->
+      <!--?lit$069645387$--><!----><!---->
+      <!--?lit$069645387$--><!----><!---->
+      <div class=3D"overlay-elements">
+      <!--?lit$069645387$-->
+        <backlight-load-error errorname=3D"">
+        <template shadowmode=3D"open"><!----></template></backlight-load-er=
+ror>
+      </div>
+   =20
+     =20
+    </template></backlight-pdf-handler><template shadowmode=3D"open"><!----=
+>
+      <div class=3D"backlight-drop-target">
+        <slot></slot>
+       =20
+       =20
+        <div class=3D"drag-prompt drag-prompt-container">
+          <ea-icon dir=3D"ltr" aria-hidden=3D"true"><template shadowmode=3D=
+"open"><!----><!--?lit$069645387$--><svg height=3D"100%" id=3D"ic_open-file=
+" viewBox=3D"0 0 32 32" width=3D"100%" xmlns=3D"http://www.w3.org/2000/svg"=
+>
+<path d=3D"M18.5 11H26.5L18.5 3V11Z"></path>
+<path d=3D"M24.5 29H7.5C6.39543 29 5.5 28.1046 5.5 27V5C5.5 3.89543 6.39311=
+ 3 7.49768 3H18.5L21 5.5H8V26.5H24V8.5L26.5 11V27.0049C26.5 28.1095 25.6046=
+ 29 24.5 29Z"></path>
+<path d=3D"M12.7389 20.7061L14.6512 18.742V24H17.3488V18.742L19.261 20.7061=
+L21.1685 18.742L16 14L10.8315 18.742L12.7389 20.7061Z"></path>
+</svg>
+<!--?--></template></ea-icon>
+          <p><!--?lit$069645387$--></p>
+        </div>
+        <div class=3D"scrim drag-prompt"></div>
+      </div>
+      <input type=3D"file" multiple=3D"" style=3D"display:none">
+    </template></backlight-drop-target><template shadowmode=3D"open"><!----=
+>
+      <main>
+        <!--?lit$069645387$--><backlight-app-bar filename=3D"Receipt from U=
+.S. Department of the Treasury 26May2022.pdf" omitbottompadding=3D"" hasfil=
+eopen=3D""><template shadowmode=3D"open"><!---->
+      <div id=3D"app-toolbar">
+        <!--?lit$069645387$-->
+          <ea-button id=3D"open-button" primary=3D"" dir=3D"ltr" label=3D"O=
+pen file" unelevated=3D"">
+          <template shadowmode=3D"open"><!---->
+      <button id=3D"button" class=3D"mdc-button  mdc-button--unelevated " a=
+ria-label=3D"Open file">
+        <!--?lit$069645387$--><!--?-->
+        <!--?lit$069645387$-->
+        <span class=3D"leading-icon">
+          <slot name=3D"icon">
+            <!--?lit$069645387$-->
+          </slot>
+        </span>
+        <span class=3D"mdc-button__label"><!--?lit$069645387$-->Open file</=
+span>
+        <span class=3D"slot-container   ">
+          <slot></slot>
+        </span>
+        <span class=3D"trailing-icon">
+          <slot name=3D"trailingIcon">
+            <!--?lit$069645387$-->
+          </slot>
+        </span>
+      </button></template></ea-button>
+       =20
+        <!--?lit$069645387$--><backlight-app-bar-filename title=3D"Receipt =
+from U.S. Department of the Treasury 26May2022.pdf"><template shadowmode=3D=
+"open"><!---->
+      <paper-input type=3D"text" tabindex=3D"" no-label-float=3D"" label=3D=
+"Filename" aria-disabled=3D"false">
+      <template shadowmode=3D"open">
+   =20
+
+    <paper-input-container id=3D"container" dir=3D"ltr">
+
+      <slot name=3D"prefix" slot=3D"prefix"></slot>
+
+      <label aria-hidden=3D"true" slot=3D"label" for=3D"input-1" id=3D"pape=
+r-input-label-1">Filename</label>
+
+      <!-- Need to bind maxlength so that the paper-input-char-counter work=
+s correctly -->
+      <iron-input slot=3D"input" class=3D"input-element" id=3D"input-1">
+        <input autocomplete=3D"off" placeholder=3D"" autocapitalize=3D"none=
+" autocorrect=3D"off" aria-describedby=3D"" aria-labelledby=3D"paper-input-=
+label-1" type=3D"text">
+      <template shadowmode=3D"open">
+   =20
+    <slot id=3D"content"></slot>
+</template></iron-input>
+
+      <slot name=3D"suffix" slot=3D"suffix"></slot>
+
+      <dom-if style=3D"display: none;"><template is=3D"dom-if"></template><=
+/dom-if>
+
+      <dom-if style=3D"display: none;"><template is=3D"dom-if"></template><=
+/dom-if>
+
+    <template shadowmode=3D"open">
+   =20
+
+   =20
+
+    <div class=3D"input-wrapper">
+      <span class=3D"prefix"><slot name=3D"prefix"></slot></span>
+
+      <div id=3D"labelAndInputContainer" class=3D"input-content label-is-hi=
+dden">
+        <slot name=3D"label"></slot>
+        <slot name=3D"input"></slot><slot name=3D"after-input"></slot>
+      </div>
+
+      <span class=3D"suffix"><slot name=3D"suffix"></slot></span>
+    </div>
+
+    <div class=3D"underline">
+      <div class=3D"unfocused-line"></div>
+      <div class=3D"focused-line"></div>
+    </div>
+
+    <div class=3D"add-on-content">
+      <slot name=3D"add-on"></slot>
+    </div>
+</template></paper-input-container>
+  </template></paper-input>
+      <!--?lit$069645387$-->
+     =20
+   =20
+    </template></backlight-app-bar-filename>
+        <div class=3D"controls">
+          <!--?lit$069645387$--><!--?lit$069645387$--><!---->
+      <div class=3D"control-group">
+        <!--?lit$069645387$--><!--?lit$069645387$--><!----><!----><!----><!=
+----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
+      <div id=3D"icon-button-2283726-container">
+        <!--?lit$069645387$-->
+        <ea-toggleable-icon-button id=3D"icon-button-2283726" ink=3D"blue">
+        <svg height=3D"20" id=3D"ic_info" viewBox=3D"0 0 20 20" width=3D"20=
+" xmlns=3D"http://www.w3.org/2000/svg" xmlns:xlink=3D"http://www.w3.org/199=
+9/xlink" slot=3D"offIcon">
+<defs>
+<path d=3D"M9,14 L11,14 L11,10 L9,10 L9,14 Z M10,2 C5.584,2 2,5.584 2,10 C2=
+,14.416 5.584,18 10,18 C14.416,18 18,14.416 18,10 C18,5.584 14.416,2 10,2 Z=
+ M10,16 C6.6925,16 4,13.3075 4,10 C4,6.6925 6.6925,4 10,4 C13.3075,4 16,6.6=
+925 16,10 C16,13.3075 13.3075,16 10,16 Z M9,8 L11,8 L11,6 L9,6 L9,8 Z" id=
+=3D"ic_info-a"></path>
+</defs>
+<use fill-rule=3D"evenodd" xlink:href=3D"#ic_info-a"></use>
+</svg><template shadowmode=3D"open"><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex   " aria-pressed=3D"false" aria-label=3D"Info"><!--?lit$0=
+69645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded  mdc-ripple-up=
+graded--unbounded " style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-siz=
+e:20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mw=
+c-ripple>
+        <span class=3D"mdc-icon-button__icon"><slot name=3D"offIcon"><i cla=
+ss=3D"material-icons"><!--?lit$069645387$--></i></slot></span>
+        <span class=3D"mdc-icon-button__icon mdc-icon-button__icon--on"><sl=
+ot name=3D"onIcon"><i class=3D"material-icons"><!--?lit$069645387$--></i></=
+slot></span>
+      </button>
+      </div>
+    </template></ea-toggleable-icon-button>
+        <ea-tooltip for=3D"icon-button-2283726" label=3D"Info" style=3D"dis=
+play: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-2283726" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Info
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <div id=3D"icon-button-79847359-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button id=3D"icon-button-79847359" type=3D"default" dir=3D"l=
+tr" sizing=3D"dense">
+      <svg height=3D"20" id=3D"ic_share" viewBox=3D"0 0 20 20" width=3D"20"=
+ xmlns=3D"http://www.w3.org/2000/svg" slot=3D"">
+<path clip-rule=3D"evenodd" d=3D"M14 12C13.21 12 12.5 12.31 11.97 12.81L7.9=
+1 10.7C7.96 10.47 8 10.24 8 10C8 9.76 7.96 9.53 7.91 9.3L11.96 7.19C12.49 7=
+.69 13.21 8 14 8C15.66 8 17 6.66 17 5C17 3.34 15.66 2 14 2C12.34 2 11 3.34 =
+11 5C11 5.24 11.04 5.48 11.09 5.7L7.04 7.81C6.5 7.31 5.79 7 5 7C3.34 7 2 8.=
+34 2 10C2 11.66 3.34 13 5 13C5.79 13 6.5 12.69 7.04 12.19L11.09 14.31C11.04=
+ 14.53 11 14.76 11 15C11 16.66 12.34 18 14 18C15.66 18 17 16.66 17 15C17 13=
+.34 15.66 12 14 12ZM14 4C14.55 4 15 4.45 15 5C15 5.55 14.55 6 14 6C13.45 6 =
+13 5.55 13 5C13 4.45 13.45 4 14 4ZM5 11C4.45 11 4 10.55 4 10C4 9.45 4.45 9 =
+5 9C5.55 9 6 9.45 6 10C6 10.55 5.55 11 5 11ZM14 16C13.45 16 13 15.55 13 15C=
+13 14.45 13.45 14 14 14C14.55 14 15 14.45 15 15C15 15.55 14.55 16 14 16Z" f=
+ill-rule=3D"evenodd"></path>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Share"><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded" style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-size:=
+20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mwc-=
+ripple>
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-79847359" label=3D"Share" style=3D"d=
+isplay: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-79847359" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Share
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <div id=3D"icon-button-2775249712-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button id=3D"icon-button-2775249712" type=3D"default" dir=3D=
+"ltr" sizing=3D"dense">
+      <svg height=3D"20" id=3D"ic_fit-width" viewBox=3D"0 0 20 20" width=3D=
+"20" xmlns=3D"http://www.w3.org/2000/svg" slot=3D"">
+<path clip-rule=3D"evenodd" d=3D"M16 4C17.1046 4 18 4.89543 18 6V16H16V6H4V=
+16H2V6C2 4.89543 2.89543 4 4 4H16ZM8.5 15V16H7.5V15H8.5ZM14.5 15V16H13.5V15=
+H14.5ZM6.5 15V16H5.5V15H6.5ZM10.5 15V16H9.5V15H10.5ZM12.5 15V16H11.5V15H12.=
+5Z" fill-rule=3D"evenodd"></path>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Fit to width"><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded" style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-size:=
+20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mwc-=
+ripple>
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-2775249712" label=3D"Fit to width" s=
+tyle=3D"display: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-2775249712" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" styl=
+e=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pap=
+er-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-c=
+olor);">
+        <!--?lit$069645387$-->Fit to width
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <div id=3D"icon-button-947364257-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button id=3D"icon-button-947364257" type=3D"default" dir=3D"=
+ltr" sizing=3D"dense">
+      <svg height=3D"20" id=3D"ic_zoom_out" viewBox=3D"0 0 20 20" width=3D"=
+20" xmlns=3D"http://www.w3.org/2000/svg" slot=3D"">
+<path d=3D"M17.49,16 L13.76,12.27 C14.53,11.2 15,9.91 15,8.5 C15,4.91 12.09=
+,2 8.5,2 C4.91,2 2,4.91 2,8.5 C2,12.09 4.91,15 8.5,15 C9.91,15 11.2,14.53 1=
+2.27,13.76 L16,17.49 L17.49,16 Z M8.5,13 C6.01,13 4,10.99 4,8.5 C4,6.01 6.0=
+1,4 8.5,4 C10.99,4 13,6.01 13,8.5 C13,10.99 10.99,13 8.5,13 Z M11.5,7.5 L11=
+.5,9.5 L5.5,9.5 L5.5,7.5 L11.5,7.5 Z" fill-rule=3D"evenodd"></path>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Zoom out"><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded" style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-size:=
+20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mwc-=
+ripple>
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-947364257" label=3D"Zoom out" style=
+=3D"display: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-947364257" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Zoom out
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <backlight-confirmation-textfield outlined=3D"" type=3D"text" arialab=
+el=3D"Zoom percentage" pattern=3D"\s*\d{2}\d?%?\s*" style=3D"width: 60px;">
+      <template shadowmode=3D"open"><!---->
+      <label class=3D"mdc-text-field mdc-text-field--no-label mdc-text-fiel=
+d--outlined">
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+      <mwc-notched-outline class=3D"mdc-notched-outline">
+        <!--?lit$069645387$-->
+      <template shadowmode=3D"open"><!---->
+      <span class=3D"mdc-notched-outline   ">
+        <span class=3D"mdc-notched-outline__leading"></span>
+        <span class=3D"mdc-notched-outline__notch">
+          <slot></slot>
+        </span>
+        <span class=3D"mdc-notched-outline__trailing"></span>
+      </span></template></mwc-notched-outline>
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+      <input class=3D"mdc-text-field__input" type=3D"text" placeholder=3D""=
+ pattern=3D"\s*\d{2}\d?%?\s*" aria-label=3D"Zoom percentage" style=3D"text-=
+align: center;">
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+      </label>
+      <!--?lit$069645387$-->
+    </template></backlight-confirmation-textfield>
+    <!----><!---->
+      <div id=3D"icon-button-1554580594-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button id=3D"icon-button-1554580594" type=3D"default" dir=3D=
+"ltr" sizing=3D"dense">
+      <svg height=3D"20" id=3D"ic_zoom_in" viewBox=3D"0 0 20 20" width=3D"2=
+0" xmlns=3D"http://www.w3.org/2000/svg" slot=3D"">
+<path d=3D"M17.49,16 L13.76,12.27 C14.53,11.2 15,9.91 15,8.5 C15,4.91 12.09=
+,2 8.5,2 C4.91,2 2,4.91 2,8.5 C2,12.09 4.91,15 8.5,15 C9.91,15 11.2,14.53 1=
+2.27,13.76 L16,17.49 L17.49,16 Z M8.5,13 C6.01,13 4,10.99 4,8.5 C4,6.01 6.0=
+1,4 8.5,4 C10.99,4 13,6.01 13,8.5 C13,10.99 10.99,13 8.5,13 Z M9.5,7.5 L11.=
+5,7.5 L11.5,9.5 L9.5,9.5 L9.5,11.5 L7.5,11.5 L7.5,9.5 L5.5,9.5 L5.5,7.5 L7.=
+5,7.5 L7.5,5.5 L9.5,5.5 L9.5,7.5 Z" fill-rule=3D"evenodd"></path>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Zoom in"><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded" style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-size:=
+20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mwc-=
+ripple>
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-1554580594" label=3D"Zoom in" style=
+=3D"display: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-1554580594" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" styl=
+e=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pap=
+er-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-c=
+olor);">
+        <!--?lit$069645387$-->Zoom in
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <div id=3D"icon-button-77382285-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button id=3D"icon-button-77382285" type=3D"default" dir=3D"l=
+tr" sizing=3D"dense">
+      <svg height=3D"24" id=3D"print_24px" viewBox=3D"0 0 24 24" width=3D"2=
+4" xmlns=3D"http://www.w3.org/2000/svg" slot=3D""><path d=3D"M19 8h-1V3H6v5=
+H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-4h8v4zm0=
+-11H8V5h8v3zm2 4.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>=
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Print"><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded" style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-size:=
+20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mwc-=
+ripple>
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-77382285" label=3D"Print" style=3D"d=
+isplay: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-77382285" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Print
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <div id=3D"icon-button-2043376075-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button id=3D"icon-button-2043376075" type=3D"default" dir=3D=
+"ltr" sizing=3D"dense">
+      <svg height=3D"20" id=3D"ic_delete" viewBox=3D"0 0 20 20" width=3D"20=
+" xmlns=3D"http://www.w3.org/2000/svg" xmlns:xlink=3D"http://www.w3.org/199=
+9/xlink" slot=3D"">
+<defs>
+<path d=3D"M13,3 L13,2 L7,2 L7,3 L3,3 L3,5 L4,5 L4,16 C4,17.1 4.9,18 6,18 L=
+14,18 C15.1,18 16,17.1 16,16 L16,5 L17,5 L17,3 L13,3 Z M14,16 L6,16 L6,5 L1=
+4,5 L14,16 Z" id=3D"ic_delete-a"></path>
+</defs>
+<use fill-rule=3D"evenodd" xlink:href=3D"#ic_delete-a"></use>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Delete"><!--?lit$069645387$-->
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-2043376075" label=3D"Delete" style=
+=3D"display: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-2043376075" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" styl=
+e=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pap=
+er-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-c=
+olor);">
+        <!--?lit$069645387$-->Delete
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!--?-->
+        <!--?lit$069645387$--><span class=3D"divider"></span>
+      </div>
+    <!----><!---->
+      <div class=3D"control-group">
+        <!--?lit$069645387$--><!--?lit$069645387$--><!---->
+      <backlight-confirmation-textfield outlined=3D"" type=3D"text" arialab=
+el=3D"Page number" pattern=3D"\s*\d+\s*" textalign=3D"end" style=3D"width: =
+40px;">
+      <template shadowmode=3D"open"><!---->
+      <label class=3D"mdc-text-field mdc-text-field--no-label mdc-text-fiel=
+d--outlined">
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+      <mwc-notched-outline class=3D"mdc-notched-outline">
+        <!--?lit$069645387$-->
+      <template shadowmode=3D"open"><!---->
+      <span class=3D"mdc-notched-outline   ">
+        <span class=3D"mdc-notched-outline__leading"></span>
+        <span class=3D"mdc-notched-outline__notch">
+          <slot></slot>
+        </span>
+        <span class=3D"mdc-notched-outline__trailing"></span>
+      </span></template></mwc-notched-outline>
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+      <input class=3D"mdc-text-field__input" type=3D"text" placeholder=3D""=
+ pattern=3D"\s*\d+\s*" aria-label=3D"Page number" style=3D"text-align: end;=
+">
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+        <!--?lit$069645387$-->
+      </label>
+      <!--?lit$069645387$-->
+    </template></backlight-confirmation-textfield>
+    <!----><!---->
+      <backlight-uneditable-text>
+        <!--?lit$069645387$-->/
+      <template shadowmode=3D"open"><!---->
+      <slot></slot>
+    </template></backlight-uneditable-text>
+    <!----><!---->
+      <backlight-uneditable-text style=3D"min-width: 16px; padding-inline-s=
+tart: 4px;">
+        <!--?lit$069645387$-->1
+      <template shadowmode=3D"open"><!---->
+      <slot></slot>
+    </template></backlight-uneditable-text>
+    <!----><!--?-->
+        <!--?lit$069645387$--><span class=3D"divider"></span>
+      </div>
+    <!----><!---->
+      <div class=3D"control-group">
+        <!--?lit$069645387$--><!--?lit$069645387$--><!---->
+      <div id=3D"icon-button-427243323-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button id=3D"icon-button-427243323" type=3D"default" dir=3D"=
+ltr" sizing=3D"dense">
+      <svg height=3D"20" id=3D"ic_rotate_90_anticlockwise" viewBox=3D"0 0 2=
+0 20" width=3D"20" xmlns=3D"http://www.w3.org/2000/svg" slot=3D"">
+<path d=3D"M11.3994949,1.63794193 L12.648961,2.88794193 L11.5466729,3.98988=
+436 C15.1606632,4.26524596 18.0073593,7.28489093 18.0073593,10.9694174 C18.=
+0073593,14.8354106 14.8733526,17.9694174 11.0073593,17.9694174 C10.0582025,=
+17.9694174 9.15316781,17.7805079 8.32780267,17.4382364 L9.91641789,15.85005=
+2 C10.2675805,15.9282001 10.6326565,15.9694174 11.0073593,15.9694174 C13.76=
+87831,15.9694174 16.0073593,13.7308411 16.0073593,10.9694174 C16.0073593,8.=
+26069785 13.853418,6.05505826 11.1648887,5.9718518 L12.648961,7.45894193 L1=
+1.3994949,8.70900974 L7.86396103,5.17347584 L11.3994949,1.63794193 Z M6.449=
+74747,6.5876894 L11.3994949,11.5374369 L6.44974747,16.4871843 L1.5,11.53743=
+69 L6.44974747,6.5876894 Z M6.44974747,9.41611652 L4.32842712,11.5374369 L6=
+.44974747,13.6587572 L8.57106781,11.5374369 L6.44974747,9.41611652 Z" fill-=
+rule=3D"evenodd"></path>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Rotate counterclockwise"><!--?lit$06964538=
+7$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded" style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-size:=
+20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mwc-=
+ripple>
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-427243323" label=3D"Rotate countercl=
+ockwise" style=3D"display: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-427243323" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Rotate counterclockwise
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <div id=3D"icon-button-575645666-container">
+        <!--?lit$069645387$-->
+        <ea-toggleable-icon-button id=3D"icon-button-575645666" ink=3D"blue=
+">
+        <svg height=3D"24" id=3D"text_fields_24px" viewBox=3D"0 0 24 24" wi=
+dth=3D"24" xmlns=3D"http://www.w3.org/2000/svg" slot=3D"offIcon"><path d=3D=
+"M2 4v3h5v13h3V7h5V4H2zm20 5h-9v3h3v8h3v-8h3V9z"></path></svg><template sha=
+dowmode=3D"open"><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex   " aria-pressed=3D"false" aria-label=3D"Text annotation"=
+><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded" style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-size:=
+20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mwc-=
+ripple>
+        <span class=3D"mdc-icon-button__icon"><slot name=3D"offIcon"><i cla=
+ss=3D"material-icons"><!--?lit$069645387$--></i></slot></span>
+        <span class=3D"mdc-icon-button__icon mdc-icon-button__icon--on"><sl=
+ot name=3D"onIcon"><i class=3D"material-icons"><!--?lit$069645387$--></i></=
+slot></span>
+      </button>
+      </div>
+    </template></ea-toggleable-icon-button>
+        <ea-tooltip for=3D"icon-button-575645666" label=3D"Text annotation"=
+ style=3D"display: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-575645666" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Text annotation
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <div id=3D"icon-button-3709949292-container">
+        <!--?lit$069645387$-->
+        <ea-toggleable-icon-button id=3D"icon-button-3709949292" ink=3D"blu=
+e">
+        <svg height=3D"20" id=3D"ic_annotation" viewBox=3D"0 0 20 20" width=
+=3D"20" xmlns=3D"http://www.w3.org/2000/svg" slot=3D"offIcon">
+<path clip-rule=3D"evenodd" d=3D"M5.46205 4.85122C5.19176 4.73674 4.58144 5=
+.30033 3.97112 5.92557L2.44531 4.41973C2.63713 4.18196 2.89869 3.91778 3.21=
+257 3.60076C3.43055 3.38061 4.43322 2.5 5.58411 2.5C6.34265 2.5 7.77255 3.1=
+0762 7.77255 5.01854C7.77255 6.21617 7.31917 6.90304 6.63909 7.90693C6.2467=
+4 8.48813 5.33126 10.0468 5.0261 11.0067C4.71222 11.9665 4.94763 12.6974 5.=
+33998 12.6974C5.69938 12.6974 6.05879 12.2604 6.27993 11.9916C6.28947 11.98=
+ 6.29876 11.9687 6.30778 11.9577C6.50831 11.7464 7.79871 10.2053 8.3044 9.5=
+6248C8.96704 8.74351 10.6498 7.06155 12.6115 7.06155C15.1749 7.06155 15.994=
+5 9.3071 16.1252 10.7601H18.2788V12.9616H16.134C15.7852 17.1621 13.466 18.3=
+333 12.0448 18.3333C10.5016 18.3333 9.24604 17.1093 9.24604 15.6123C9.24604=
+ 14.1152 10.6411 11.447 13.9368 10.8834C13.9306 10.8391 13.9248 10.7939 13.=
+9188 10.7482C13.8328 10.0855 13.7318 9.3071 12.4023 9.3071C11.3124 9.3071 9=
+.89996 11.0243 8.84497 12.3364L8.83393 12.3502C7.87133 13.5501 7.10636 14.5=
+037 6.17699 14.7757C5.39229 15.0134 4.52913 14.8637 3.87521 14.3706C3.12539=
+ 13.807 2.70688 12.8736 2.70688 11.7464C2.70688 9.89058 4.4326 7.33358 5.02=
+236 6.45972C5.10984 6.33011 5.17232 6.23752 5.20048 6.18975C5.46205 5.75825=
+ 5.89799 5.02735 5.46205 4.85122ZM11.4258 15.5594C11.4258 15.9645 11.8007 1=
+6.1935 12.071 16.1935C12.6813 16.1935 13.6665 15.4978 13.9281 13.1289C12.06=
+22 13.6221 11.4258 15.0311 11.4258 15.5594Z" fill-rule=3D"evenodd"></path>
+</svg><template shadowmode=3D"open"><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex   " aria-pressed=3D"false" aria-label=3D"Annotate"><!--?l=
+it$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded" style=3D"--mdc-ripple-fg-scale:1.8; --mdc-ripple-fg-size:=
+20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px;"></div></template></mwc-=
+ripple>
+        <span class=3D"mdc-icon-button__icon"><slot name=3D"offIcon"><i cla=
+ss=3D"material-icons"><!--?lit$069645387$--></i></slot></span>
+        <span class=3D"mdc-icon-button__icon mdc-icon-button__icon--on"><sl=
+ot name=3D"onIcon"><i class=3D"material-icons"><!--?lit$069645387$--></i></=
+slot></span>
+      </button>
+      </div>
+    </template></ea-toggleable-icon-button>
+        <ea-tooltip for=3D"icon-button-3709949292" label=3D"Annotate" style=
+=3D"display: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-3709949292" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" styl=
+e=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pap=
+er-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-c=
+olor);">
+        <!--?lit$069645387$-->Annotate
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!--?-->
+        <!--?lit$069645387$--><span class=3D"divider"></span>
+      </div>
+    <!----><!---->
+      <div class=3D"control-group">
+        <!--?lit$069645387$--><!--?lit$069645387$--><!---->
+      <div id=3D"icon-button-2641156-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button disabled=3D"" id=3D"icon-button-2641156" type=3D"defa=
+ult" rtlflip=3D"" dir=3D"ltr" sizing=3D"dense">
+      <svg height=3D"20" id=3D"ic_undo" viewBox=3D"0 0 20 20" width=3D"20" =
+xmlns=3D"http://www.w3.org/2000/svg" slot=3D"">
+<path d=3D"M8.492,9.99235931 L7.24264069,11.2426407 L3,7 L7.24264069,2.7573=
+5931 L8.492,4.00735931 L6.499,5.99935931 L12,6 C14.7614237,6 17,8.23857625 =
+17,11 C17,13.6887547 14.8776933,15.8818181 12.2168896,15.9953805 L12,16 L6,=
+16 L6,14 L12,14 C13.6568542,14 15,12.6568542 15,11 C15,9.34314575 13.656854=
+2,8 12,8 L6.499,7.99935931 L8.492,9.99235931 Z" fill-rule=3D"evenodd"></pat=
+h>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Undo" disabled=3D""><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded  mdc-ripple-su=
+rface--disabled mdc-ripple-upgraded--unbounded " style=3D"--mdc-ripple-fg-s=
+cale:1.8; --mdc-ripple-fg-size:20px; --mdc-ripple-left:8px; --mdc-ripple-to=
+p:8px;"></div></template></mwc-ripple>
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-2641156" label=3D"Undo" style=3D"dis=
+play: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-2641156" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Undo
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!---->
+      <div id=3D"icon-button-2543134-container">
+        <!--?lit$069645387$-->
+      <ea-icon-button disabled=3D"" id=3D"icon-button-2543134" type=3D"defa=
+ult" rtlflip=3D"" dir=3D"ltr" sizing=3D"dense">
+      <svg height=3D"20" id=3D"ic_redo" viewBox=3D"0 0 20 20" width=3D"20" =
+xmlns=3D"http://www.w3.org/2000/svg" slot=3D"">
+<path d=3D"M8.492,9.99235931 L7.24264069,11.2426407 L3,7 L7.24264069,2.7573=
+5931 L8.492,4.00735931 L6.499,5.99935931 L12,6 C14.7614237,6 17,8.23857625 =
+17,11 C17,13.6887547 14.8776933,15.8818181 12.2168896,15.9953805 L12,16 L6,=
+16 L6,14 L12,14 C13.6568542,14 15,12.6568542 15,11 C15,9.34314575 13.656854=
+2,8 12,8 L6.499,7.99935931 L8.492,9.99235931 Z" fill-rule=3D"evenodd" trans=
+form=3D"matrix(-1 0 0 1 20 0)"></path>
+</svg><template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex" aria-label=3D"Redo" disabled=3D""><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded  mdc-ripple-su=
+rface--disabled mdc-ripple-upgraded--unbounded " style=3D"--mdc-ripple-fg-s=
+cale:1.8; --mdc-ripple-fg-size:20px; --mdc-ripple-left:8px; --mdc-ripple-to=
+p:8px;"></div></template></mwc-ripple>
+    <!--?lit$069645387$-->
+    <span><slot></slot></span>
+  </button>
+      </div>
+    </template></ea-icon-button>
+        <ea-tooltip for=3D"icon-button-2543134" label=3D"Redo" style=3D"dis=
+play: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"icon-button-2543134" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor);">
+        <!--?lit$069645387$-->Redo
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+    <!----><!--?-->
+        <!--?lit$069645387$--><span class=3D"divider"></span>
+      </div>
+    <!----><!--?-->
+        </div>
+        <div class=3D"commit-controls">
+          <div aria-live=3D"polite" aria-atomic=3D"true" aria-describedby=
+=3D"action-area-description">
+            <div id=3D"action-area-description"><!--?lit$069645387$--></div=
+>
+            <!--?lit$069645387$--><!--?lit$069645387$--><!----><!----><!---=
+-><!----><!--?-->
+          </div>
+          <div class=3D"control-box">
+            <backlight-overflow-menu dir=3D"ltr">
+            <template shadowmode=3D"open" shadowdelegatesfocus=3D""><!---->
+      <div>
+        <ea-toggleable-icon-button id=3D"more-options-button" ink=3D"defaul=
+t" aria-expanded=3D"true">
+        <svg height=3D"20" id=3D"ic_more-options" viewBox=3D"0 0 20 20" wid=
+th=3D"20" xmlns=3D"http://www.w3.org/2000/svg" xmlns:xlink=3D"http://www.w3=
+.org/1999/xlink" slot=3D"onIcon">
+<defs>
+<path d=3D"M14,10 C14,8.896 14.896,8 16,8 C17.105,8 18,8.896 18,10 C18,11.1=
+05 17.105,12 16,12 C14.896,12 14,11.105 14,10 Z M12,10 C12,11.105 11.105,12=
+ 10,12 C8.896,12 8,11.105 8,10 C8,8.896 8.896,8 10,8 C11.105,8 12,8.896 12,=
+10 Z M6,10 C6,11.105 5.105,12 4,12 C2.896,12 2,11.105 2,10 C2,8.896 2.896,8=
+ 4,8 C5.105,8 6,8.896 6,10 Z" id=3D"ic_more-options-a"></path>
+</defs>
+<use fill-rule=3D"evenodd" transform=3D"rotate(90 10 10)" xlink:href=3D"#ic=
+_more-options-a"></use>
+</svg><template shadowmode=3D"open"><!---->
+      <div class=3D"extended-tap-target">
+        <!--?lit$069645387$--><button class=3D"mdc-icon-button mdc-icon-but=
+ton--display-flex mdc-icon-button--on" aria-label=3D"More options" aria-has=
+popup=3D"true" aria-expanded=3D"true"><!--?lit$069645387$-->
+            <mwc-ripple unbounded=3D"">
+            <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--unbounded mdc-ripple-surface--hover" style=3D"--mdc-ripple-fg-scale:=
+1.8; --mdc-ripple-fg-size:20px; --mdc-ripple-left:8px; --mdc-ripple-top:8px=
+;"></div></template></mwc-ripple>
+        <span class=3D"mdc-icon-button__icon"><slot name=3D"offIcon"><i cla=
+ss=3D"material-icons"><!--?lit$069645387$--></i></slot></span>
+        <span class=3D"mdc-icon-button__icon mdc-icon-button__icon--on"><sl=
+ot name=3D"onIcon"><i class=3D"material-icons"><!--?lit$069645387$--></i></=
+slot></span>
+      </button>
+      </div>
+    </template></ea-toggleable-icon-button>
+        <ea-tooltip for=3D"more-options-button" label=3D"More options" styl=
+e=3D"display: contents;">
+        <!---->
+      <paper-tooltip aria-hidden=3D"true" fit-to-visible-bounds=3D"" for=3D=
+"more-options-button" offset=3D"8" role=3D"tooltip" tabindex=3D"-1" style=
+=3D"--paper-tooltip-background:var(--cros-tooltip-background-color); --pape=
+r-tooltip-opacity:1; --paper-tooltip-text-color:var(--cros-tooltip-label-co=
+lor); right: 0px; left: auto; top: 56px;">
+        <!--?lit$069645387$-->More options
+      <template shadowmode=3D"open">
+   =20
+
+    <div id=3D"tooltip" class=3D"hidden">
+      <slot></slot>
+    </div>
+</template></paper-tooltip>
+    </ea-tooltip>
+      </div>
+      <!--?lit$069645387$-->
+      <ea-menu dir=3D"ltr" innerrole=3D"menu">
+      <template shadowmode=3D"open"><!---->
+        <mwc-menu stayopenonbodyclick=3D"" quick=3D"" defaultfocus=3D"NONE"=
+ corner=3D"BOTTOM_END" menucorner=3D"END" y=3D"-2" x=3D"-6" innerrole=3D"me=
+nu" open=3D"">
+          <!--?lit$069645387$-->
+      <div tabindex=3D"0" aria-label=3D"More options" aria-orientation=3D"v=
+ertical" role=3D"menu" id=3D"entries-container">
+        <!--?lit$069645387$-->
+          <!--?lit$069645387$--><!---->
+        <div>
+          <ea-menu-list-item id=3D"find" aria-haspopup=3D"false" hasmeta=3D=
+"" role=3D"menuitem" mwc-list-item=3D"" tabindex=3D"-1" aria-disabled=3D"fa=
+lse">
+            <span><!--?lit$069645387$-->Find=E2=80=A6</span>
+            <!--?lit$069645387$-->
+            <!--?lit$069645387$--><label slot=3D"meta"><!--?lit$069645387$-=
+->Ctrl + F</label>
+          <template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <mwc-ripple>
+      <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded"></div></templ=
+ate></mwc-ripple>
+      <!--?lit$069645387$--><!--?-->
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__text">
+        <!--?lit$069645387$--><slot></slot>
+      </span>
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__meta material-icons">
+        <slot name=3D"meta"></slot>
+      </span><!--?--></template></ea-menu-list-item>
+        </div>
+    <!----><!---->
+        <div>
+          <ea-menu-list-item id=3D"save-as-overflow-menu" aria-haspopup=3D"=
+false" hasmeta=3D"" role=3D"menuitem" mwc-list-item=3D"" tabindex=3D"-1" ar=
+ia-disabled=3D"false">
+            <span><!--?lit$069645387$-->Save as</span>
+            <!--?lit$069645387$-->
+            <!--?lit$069645387$--><label slot=3D"meta"><!--?lit$069645387$-=
+->Ctrl + S</label>
+          <template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <mwc-ripple>
+      <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded" style=3D"--md=
+c-ripple-fg-scale:1.76739; --mdc-ripple-fg-size:129px; --mdc-ripple-fg-tran=
+slate-end:43px, -46.5px; --mdc-ripple-fg-translate-start:28.5px, -50.5px;">=
+</div></template></mwc-ripple>
+      <!--?lit$069645387$--><!--?-->
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__text">
+        <!--?lit$069645387$--><slot></slot>
+      </span>
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__meta material-icons">
+        <slot name=3D"meta"></slot>
+      </span><!--?--></template></ea-menu-list-item>
+        </div>
+    <!----><!---->
+        <div>
+          <ea-menu-list-item id=3D"open-in-browser" aria-haspopup=3D"false"=
+ hasmeta=3D"" role=3D"menuitem" mwc-list-item=3D"" tabindex=3D"-1" aria-dis=
+abled=3D"false">
+            <span><!--?lit$069645387$-->Open in PDF viewer</span>
+            <!--?lit$069645387$-->
+            <!--?lit$069645387$--><div part=3D"meta" slot=3D"meta"><!--?lit=
+$069645387$--><ea-icon rtlflip=3D"" dir=3D"ltr" aria-hidden=3D"true"><templ=
+ate shadowmode=3D"open"><!----><!--?lit$069645387$--><svg height=3D"20" id=
+=3D"ic_launch_in_new_page" viewBox=3D"0 0 20 20" width=3D"20" xmlns=3D"http=
+://www.w3.org/2000/svg">
+<path clip-rule=3D"evenodd" d=3D"M15 15H5V5H9V3H5C4 3 3 4 3 5C3 6 3 15 3 15=
+C3 16 4 17 5 17H15C16 17 17 16 17 15V11H15V15ZM11 3V5H13.5L7 11.5L8.5 13L15=
+ 6.5V9H17V3H11Z" fill-rule=3D"evenodd"></path>
+</svg>
+<!--?--></template></ea-icon></div>
+          <template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <mwc-ripple>
+      <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded"></div></templ=
+ate></mwc-ripple>
+      <!--?lit$069645387$--><!--?-->
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__text">
+        <!--?lit$069645387$--><slot></slot>
+      </span>
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__meta material-icons">
+        <slot name=3D"meta"></slot>
+      </span><!--?--></template></ea-menu-list-item>
+        </div>
+    <!----><!---->
+        <div>
+          <ea-menu-list-item id=3D"open-file" aria-haspopup=3D"false" hasme=
+ta=3D"" role=3D"menuitem" mwc-list-item=3D"" tabindex=3D"-1" aria-disabled=
+=3D"false">
+            <span><!--?lit$069645387$-->Open=E2=80=A6</span>
+            <!--?lit$069645387$-->
+            <!--?lit$069645387$--><label slot=3D"meta"><!--?lit$069645387$-=
+->Ctrl + O</label>
+          <template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <mwc-ripple>
+      <template shadowmode=3D"open"><!---->
+        <div class=3D"mdc-ripple-surface mdc-ripple-upgraded mdc-ripple-upg=
+raded--foreground-activation mdc-ripple-upgraded--background-focused" style=
+=3D"--mdc-ripple-fg-scale:1.76739; --mdc-ripple-fg-size:129px; --mdc-ripple=
+-fg-translate-end:43px, -46.5px; --mdc-ripple-fg-translate-start:42.5px, -5=
+8.5px;"></div></template></mwc-ripple>
+      <!--?lit$069645387$--><!--?-->
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__text">
+        <!--?lit$069645387$--><slot></slot>
+      </span>
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__meta material-icons">
+        <slot name=3D"meta"></slot>
+      </span><!--?--></template></ea-menu-list-item>
+        </div>
+    <!----><!---->
+        <div>
+          <ea-menu-list-item id=3D"submenu-help" aria-haspopup=3D"true" has=
+meta=3D"" role=3D"menuitem" mwc-list-item=3D"" tabindex=3D"-1" aria-disable=
+d=3D"false" aria-expanded=3D"false">
+            <span><!--?lit$069645387$-->Help</span>
+            <!--?lit$069645387$-->
+            <!--?lit$069645387$--><div part=3D"meta" slot=3D"meta"><!--?lit=
+$069645387$--><ea-icon rtlflip=3D"" dir=3D"ltr" aria-hidden=3D"true"><templ=
+ate shadowmode=3D"open"><!----><!--?lit$069645387$--><svg height=3D"20" id=
+=3D"ic_chevron_right" viewBox=3D"0 0 20 20" width=3D"20" xmlns=3D"http://ww=
+w.w3.org/2000/svg">
+<path clip-rule=3D"evenodd" d=3D"M6.66669 13.825L10.7872 10L6.66669 6.175L7=
+.93524 5L13.3334 10L7.93524 15L6.66669 13.825Z" fill-rule=3D"evenodd"></pat=
+h>
+</svg>
+<!--?--></template></ea-icon></div>
+          <template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <!--?lit$069645387$--><!--?-->
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__text">
+        <!--?lit$069645387$--><slot></slot>
+      </span>
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__meta material-icons">
+        <slot name=3D"meta"></slot>
+      </span><!--?--></template></ea-menu-list-item>
+        </div>
+    <!----><!---->
+        <div>
+          <ea-menu-list-item id=3D"licenses" aria-haspopup=3D"false" role=
+=3D"menuitem" mwc-list-item=3D"" tabindex=3D"-1" aria-disabled=3D"false">
+            <span><!--?lit$069645387$-->Licenses</span>
+            <!--?lit$069645387$-->
+            <!--?lit$069645387$-->
+          <template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <!--?lit$069645387$--><!--?-->
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__text">
+        <!--?lit$069645387$--><slot></slot>
+      </span>
+      <!--?lit$069645387$--><!--?--><!--?--></template></ea-menu-list-item>
+        </div>
+    <!----><!--?-->
+      </div>
+        <template shadowmode=3D"open"><!---->
+      <mwc-menu-surface class=3D"mdc-menu mdc-menu-surface" stayopenonbodyc=
+lick=3D"" open=3D"">
+        <mwc-list roottabbable=3D"" class=3D"mdc-deprecated-list">
+        <slot></slot>
+      <template shadowmode=3D"open"><!---->
+      <!-- @ts-ignore -->
+      <ul class=3D"mdc-deprecated-list" tabindex=3D"0" role=3D"menu">
+        <slot></slot>
+        <!--?lit$069645387$-->
+      </ul>
+    </template></mwc-list>
+    <template shadowmode=3D"open"><!---->
+      <div class=3D"mdc-menu-surface mdc-menu-surface--open mdc-menu-surfac=
+e--is-open-below" style=3D"top: 46px; right: 6px; max-height: var(--mdc-men=
+u-max-height, 561px); transform-origin: right top;">
+        <slot></slot>
+      </div></template></mwc-menu-surface></template></mwc-menu>
+        <!--?lit$069645387$--><!----><ea-submenu dir=3D"ltr" innerrole=3D"m=
+enu"><template shadowmode=3D"open"><!---->
+      <mwc-menu stayopenonbodyclick=3D"" fixed=3D"" quick=3D"" defaultfocus=
+=3D"NONE" x=3D"0" corner=3D"TOP_END" y=3D"-8">
+        <div role=3D"menu" id=3D"entries-container" tabindex=3D"0" aria-lab=
+el=3D"Help" aria-orientation=3D"vertical">
+          <!--?lit$069645387$-->
+          <!--?lit$069645387$--><!---->
+        <div>
+          <ea-menu-list-item id=3D"learn-more" aria-haspopup=3D"false" hasm=
+eta=3D"" role=3D"menuitem" mwc-list-item=3D"" tabindex=3D"-1" aria-disabled=
+=3D"false">
+            <span><!--?lit$069645387$-->Learn more</span>
+            <!--?lit$069645387$-->
+            <!--?lit$069645387$--><div part=3D"meta" slot=3D"meta"><!--?lit=
+$069645387$--><ea-icon rtlflip=3D"" dir=3D"ltr" aria-hidden=3D"true"><templ=
+ate shadowmode=3D"open"><!----><!--?lit$069645387$--><svg height=3D"20" id=
+=3D"ic_launch_in_new_page" viewBox=3D"0 0 20 20" width=3D"20" xmlns=3D"http=
+://www.w3.org/2000/svg">
+<path clip-rule=3D"evenodd" d=3D"M15 15H5V5H9V3H5C4 3 3 4 3 5C3 6 3 15 3 15=
+C3 16 4 17 5 17H15C16 17 17 16 17 15V11H15V15ZM11 3V5H13.5L7 11.5L8.5 13L15=
+ 6.5V9H17V3H11Z" fill-rule=3D"evenodd"></path>
+</svg>
+<!--?--></template></ea-icon></div>
+          <template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <!--?lit$069645387$--><!--?-->
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__text">
+        <!--?lit$069645387$--><slot></slot>
+      </span>
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__meta material-icons">
+        <slot name=3D"meta"></slot>
+      </span><!--?--></template></ea-menu-list-item>
+        </div>
+    <!----><!---->
+        <div>
+          <ea-menu-list-item id=3D"send-feedback" aria-haspopup=3D"false" r=
+ole=3D"menuitem" mwc-list-item=3D"" tabindex=3D"-1" aria-disabled=3D"false"=
+>
+            <span><!--?lit$069645387$-->Send feedback</span>
+            <!--?lit$069645387$-->
+            <!--?lit$069645387$-->
+          <template shadowmode=3D"open"><!---->
+      <!--?lit$069645387$-->
+      <!--?lit$069645387$--><!--?-->
+      <!--?lit$069645387$-->
+      <span class=3D"mdc-deprecated-list-item__text">
+        <!--?lit$069645387$--><slot></slot>
+      </span>
+      <!--?lit$069645387$--><!--?--><!--?--></template></ea-menu-list-item>
+        </div>
+    <!----><!--?-->
+        </div>
+      <template shadowmode=3D"open"><!---->
+      </template></mwc-menu>
+      <!--?lit$069645387$-->
+    </template></ea-submenu><!---->
+    </template></ea-menu>
+   =20
+    </template></backlight-overflow-menu>
+          </div>
+        </div>
+      </div>
+    </template></backlight-app-bar>
+        <slot></slot>
+        <backlight-spinner-overlay><template shadowmode=3D"open"><!----><di=
+v><paper-spinner-lite active=3D""><template shadowmode=3D"open"><div id=3D"=
+spinnerContainer" class=3D"active "><div class=3D"spinner-layer"><div class=
+=3D"circle-clipper left"><div class=3D"circle"></div></div><div class=3D"ci=
+rcle-clipper right"><div class=3D"circle"></div></div></div></div></templat=
+e></paper-spinner-lite></div></template></backlight-spinner-overlay>
+        <ea-oss-notices-dialog id=3D"notices" src=3D"/assets/notices.json">
+        <template shadowmode=3D"open"><!----></template></ea-oss-notices-di=
+alog>
+        <backlight-toast-manager><template shadowmode=3D"open"><!----><pape=
+r-toast aria-hidden=3D"true" style=3D"outline: none; display: none;"><templ=
+ate shadowmode=3D"open">
+   =20
+
+    <span id=3D"label"></span>
+    <slot></slot>
+</template></paper-toast></template></backlight-toast-manager>
+        <!--?lit$069645387$-->
+      </main>
+    </template></backlight-app><iron-a11y-announcer><template shadowmode=3D=
+"open">
+   =20
+    <div aria-live=3D"polite"></div>
+</template></iron-a11y-announcer><ea-a11y-announcer aria-live=3D"polite" st=
+yle=3D"position: absolute; height: 0px; width: 0px; overflow: hidden;">Rece=
+ipt from U.S. Department of the Treasury 26May2022.pdf</ea-a11y-announcer><=
+/body></html>
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-7c0a7143-c9b4-419d-838d-b5b491534c4f@mhtml.blink
+
+@charset "utf-8";
+
+body { margin: 0px; overflow: hidden; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-46df397d-0df7-4068-97c6-12d9d6b0ad54@mhtml.blink
+
+@charset "utf-8";
+
+html { --paper-font-common-base_-_font-family: "Roboto", "Noto", sans-serif=
+; --paper-font-common-base_-_-webkit-font-smoothing: antialiased; --paper-f=
+ont-common-code_-_font-family: "Roboto Mono", "Consolas", "Menlo", monospac=
+e; --paper-font-common-code_-_-webkit-font-smoothing: antialiased; --paper-=
+font-common-expensive-kerning_-_text-rendering: optimizeLegibility; --paper=
+-font-common-nowrap_-_white-space: nowrap; --paper-font-common-nowrap_-_ove=
+rflow: hidden; --paper-font-common-nowrap_-_text-overflow: ellipsis; --pape=
+r-font-display4_-_font-family: var(--paper-font-common-base_-_font-family);=
+ --paper-font-display4_-_-webkit-font-smoothing: var(--paper-font-common-ba=
+se_-_-webkit-font-smoothing); --paper-font-display4_-_white-space: var(--pa=
+per-font-common-nowrap_-_white-space); --paper-font-display4_-_overflow: va=
+r(--paper-font-common-nowrap_-_overflow); --paper-font-display4_-_text-over=
+flow: var(--paper-font-common-nowrap_-_text-overflow); --paper-font-display=
+4_-_font-size: 112px; --paper-font-display4_-_font-weight: 300; --paper-fon=
+t-display4_-_letter-spacing: -0.044em; --paper-font-display4_-_line-height:=
+ 120px; --paper-font-display3_-_font-family: var(--paper-font-common-base_-=
+_font-family); --paper-font-display3_-_-webkit-font-smoothing: var(--paper-=
+font-common-base_-_-webkit-font-smoothing); --paper-font-display3_-_white-s=
+pace: var(--paper-font-common-nowrap_-_white-space); --paper-font-display3_=
+-_overflow: var(--paper-font-common-nowrap_-_overflow); --paper-font-displa=
+y3_-_text-overflow: var(--paper-font-common-nowrap_-_text-overflow); --pape=
+r-font-display3_-_font-size: 56px; --paper-font-display3_-_font-weight: 400=
+; --paper-font-display3_-_letter-spacing: -0.026em; --paper-font-display3_-=
+_line-height: 60px; --paper-font-display2_-_font-family: var(--paper-font-c=
+ommon-base_-_font-family); --paper-font-display2_-_-webkit-font-smoothing: =
+var(--paper-font-common-base_-_-webkit-font-smoothing); --paper-font-displa=
+y2_-_font-size: 45px; --paper-font-display2_-_font-weight: 400; --paper-fon=
+t-display2_-_letter-spacing: -0.018em; --paper-font-display2_-_line-height:=
+ 48px; --paper-font-display1_-_font-family: var(--paper-font-common-base_-_=
+font-family); --paper-font-display1_-_-webkit-font-smoothing: var(--paper-f=
+ont-common-base_-_-webkit-font-smoothing); --paper-font-display1_-_font-siz=
+e: 34px; --paper-font-display1_-_font-weight: 400; --paper-font-display1_-_=
+letter-spacing: -0.01em; --paper-font-display1_-_line-height: 40px; --paper=
+-font-headline_-_font-family: var(--paper-font-common-base_-_font-family); =
+--paper-font-headline_-_-webkit-font-smoothing: var(--paper-font-common-bas=
+e_-_-webkit-font-smoothing); --paper-font-headline_-_font-size: 24px; --pap=
+er-font-headline_-_font-weight: 400; --paper-font-headline_-_letter-spacing=
+: -0.012em; --paper-font-headline_-_line-height: 32px; --paper-font-title_-=
+_font-family: var(--paper-font-common-base_-_font-family); --paper-font-tit=
+le_-_-webkit-font-smoothing: var(--paper-font-common-base_-_-webkit-font-sm=
+oothing); --paper-font-title_-_white-space: var(--paper-font-common-nowrap_=
+-_white-space); --paper-font-title_-_overflow: var(--paper-font-common-nowr=
+ap_-_overflow); --paper-font-title_-_text-overflow: var(--paper-font-common=
+-nowrap_-_text-overflow); --paper-font-title_-_font-size: 20px; --paper-fon=
+t-title_-_font-weight: 500; --paper-font-title_-_line-height: 28px; --paper=
+-font-subhead_-_font-family: var(--paper-font-common-base_-_font-family); -=
+-paper-font-subhead_-_-webkit-font-smoothing: var(--paper-font-common-base_=
+-_-webkit-font-smoothing); --paper-font-subhead_-_font-size: 16px; --paper-=
+font-subhead_-_font-weight: 400; --paper-font-subhead_-_line-height: 24px; =
+--paper-font-body2_-_font-family: var(--paper-font-common-base_-_font-famil=
+y); --paper-font-body2_-_-webkit-font-smoothing: var(--paper-font-common-ba=
+se_-_-webkit-font-smoothing); --paper-font-body2_-_font-size: 14px; --paper=
+-font-body2_-_font-weight: 500; --paper-font-body2_-_line-height: 24px; --p=
+aper-font-body1_-_font-family: var(--paper-font-common-base_-_font-family);=
+ --paper-font-body1_-_-webkit-font-smoothing: var(--paper-font-common-base_=
+-_-webkit-font-smoothing); --paper-font-body1_-_font-size: 14px; --paper-fo=
+nt-body1_-_font-weight: 400; --paper-font-body1_-_line-height: 20px; --pape=
+r-font-caption_-_font-family: var(--paper-font-common-base_-_font-family); =
+--paper-font-caption_-_-webkit-font-smoothing: var(--paper-font-common-base=
+_-_-webkit-font-smoothing); --paper-font-caption_-_white-space: var(--paper=
+-font-common-nowrap_-_white-space); --paper-font-caption_-_overflow: var(--=
+paper-font-common-nowrap_-_overflow); --paper-font-caption_-_text-overflow:=
+ var(--paper-font-common-nowrap_-_text-overflow); --paper-font-caption_-_fo=
+nt-size: 12px; --paper-font-caption_-_font-weight: 400; --paper-font-captio=
+n_-_letter-spacing: 0.011em; --paper-font-caption_-_line-height: 20px; --pa=
+per-font-menu_-_font-family: var(--paper-font-common-base_-_font-family); -=
+-paper-font-menu_-_-webkit-font-smoothing: var(--paper-font-common-base_-_-=
+webkit-font-smoothing); --paper-font-menu_-_white-space: var(--paper-font-c=
+ommon-nowrap_-_white-space); --paper-font-menu_-_overflow: var(--paper-font=
+-common-nowrap_-_overflow); --paper-font-menu_-_text-overflow: var(--paper-=
+font-common-nowrap_-_text-overflow); --paper-font-menu_-_font-size: 13px; -=
+-paper-font-menu_-_font-weight: 500; --paper-font-menu_-_line-height: 24px;=
+ --paper-font-button_-_font-family: var(--paper-font-common-base_-_font-fam=
+ily); --paper-font-button_-_-webkit-font-smoothing: var(--paper-font-common=
+-base_-_-webkit-font-smoothing); --paper-font-button_-_white-space: var(--p=
+aper-font-common-nowrap_-_white-space); --paper-font-button_-_overflow: var=
+(--paper-font-common-nowrap_-_overflow); --paper-font-button_-_text-overflo=
+w: var(--paper-font-common-nowrap_-_text-overflow); --paper-font-button_-_f=
+ont-size: 14px; --paper-font-button_-_font-weight: 500; --paper-font-button=
+_-_letter-spacing: 0.018em; --paper-font-button_-_line-height: 24px; --pape=
+r-font-button_-_text-transform: uppercase; --paper-font-code2_-_font-family=
+: var(--paper-font-common-code_-_font-family); --paper-font-code2_-_-webkit=
+-font-smoothing: var(--paper-font-common-code_-_-webkit-font-smoothing); --=
+paper-font-code2_-_font-size: 14px; --paper-font-code2_-_font-weight: 700; =
+--paper-font-code2_-_line-height: 20px; --paper-font-code1_-_font-family: v=
+ar(--paper-font-common-code_-_font-family); --paper-font-code1_-_-webkit-fo=
+nt-smoothing: var(--paper-font-common-code_-_-webkit-font-smoothing); --pap=
+er-font-code1_-_font-size: 14px; --paper-font-code1_-_font-weight: 500; --p=
+aper-font-code1_-_line-height: 20px; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-adb3f47d-59f7-4d04-96cc-5bbf920c1a73@mhtml.blink
+
+@charset "utf-8";
+
+[hidden] { display: none !important; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-745a135f-7b04-4f94-9414-ab86826e2c2a@mhtml.blink
+
+@charset "utf-8";
+
+html { --layout_-_display: flex; --layout-inline_-_display: inline-flex; --=
+layout-horizontal_-_display: var(--layout_-_display); --layout-horizontal_-=
+_-ms-flex-direction: row; --layout-horizontal_-_-webkit-flex-direction: row=
+; --layout-horizontal_-_flex-direction: row; --layout-horizontal-reverse_-_=
+display: var(--layout_-_display); --layout-horizontal-reverse_-_-ms-flex-di=
+rection: row-reverse; --layout-horizontal-reverse_-_-webkit-flex-direction:=
+ row-reverse; --layout-horizontal-reverse_-_flex-direction: row-reverse; --=
+layout-vertical_-_display: var(--layout_-_display); --layout-vertical_-_-ms=
+-flex-direction: column; --layout-vertical_-_-webkit-flex-direction: column=
+; --layout-vertical_-_flex-direction: column; --layout-vertical-reverse_-_d=
+isplay: var(--layout_-_display); --layout-vertical-reverse_-_-ms-flex-direc=
+tion: column-reverse; --layout-vertical-reverse_-_-webkit-flex-direction: c=
+olumn-reverse; --layout-vertical-reverse_-_flex-direction: column-reverse; =
+--layout-wrap_-_-ms-flex-wrap: wrap; --layout-wrap_-_-webkit-flex-wrap: wra=
+p; --layout-wrap_-_flex-wrap: wrap; --layout-wrap-reverse_-_-ms-flex-wrap: =
+wrap-reverse; --layout-wrap-reverse_-_-webkit-flex-wrap: wrap-reverse; --la=
+yout-wrap-reverse_-_flex-wrap: wrap-reverse; --layout-flex-auto_-_-ms-flex:=
+ 1 1 auto; --layout-flex-auto_-_-webkit-flex: 1 1 auto; --layout-flex-auto_=
+-_flex: 1 1 auto; --layout-flex-none_-_-ms-flex: none; --layout-flex-none_-=
+_-webkit-flex: none; --layout-flex-none_-_flex: none; --layout-flex_-_-ms-f=
+lex: 1 1 1.00000e-9px; --layout-flex_-_-webkit-flex: 1; --layout-flex_-_fle=
+x: 1; --layout-flex_-_-webkit-flex-basis: 1.00000e-9px; --layout-flex_-_fle=
+x-basis: 1.00000e-9px; --layout-flex-2_-_-ms-flex: 2; --layout-flex-2_-_-we=
+bkit-flex: 2; --layout-flex-2_-_flex: 2; --layout-flex-3_-_-ms-flex: 3; --l=
+ayout-flex-3_-_-webkit-flex: 3; --layout-flex-3_-_flex: 3; --layout-flex-4_=
+-_-ms-flex: 4; --layout-flex-4_-_-webkit-flex: 4; --layout-flex-4_-_flex: 4=
+; --layout-flex-5_-_-ms-flex: 5; --layout-flex-5_-_-webkit-flex: 5; --layou=
+t-flex-5_-_flex: 5; --layout-flex-6_-_-ms-flex: 6; --layout-flex-6_-_-webki=
+t-flex: 6; --layout-flex-6_-_flex: 6; --layout-flex-7_-_-ms-flex: 7; --layo=
+ut-flex-7_-_-webkit-flex: 7; --layout-flex-7_-_flex: 7; --layout-flex-8_-_-=
+ms-flex: 8; --layout-flex-8_-_-webkit-flex: 8; --layout-flex-8_-_flex: 8; -=
+-layout-flex-9_-_-ms-flex: 9; --layout-flex-9_-_-webkit-flex: 9; --layout-f=
+lex-9_-_flex: 9; --layout-flex-10_-_-ms-flex: 10; --layout-flex-10_-_-webki=
+t-flex: 10; --layout-flex-10_-_flex: 10; --layout-flex-11_-_-ms-flex: 11; -=
+-layout-flex-11_-_-webkit-flex: 11; --layout-flex-11_-_flex: 11; --layout-f=
+lex-12_-_-ms-flex: 12; --layout-flex-12_-_-webkit-flex: 12; --layout-flex-1=
+2_-_flex: 12; --layout-start_-_-ms-flex-align: start; --layout-start_-_-web=
+kit-align-items: flex-start; --layout-start_-_align-items: flex-start; --la=
+yout-center_-_-ms-flex-align: center; --layout-center_-_-webkit-align-items=
+: center; --layout-center_-_align-items: center; --layout-end_-_-ms-flex-al=
+ign: end; --layout-end_-_-webkit-align-items: flex-end; --layout-end_-_alig=
+n-items: flex-end; --layout-baseline_-_-ms-flex-align: baseline; --layout-b=
+aseline_-_-webkit-align-items: baseline; --layout-baseline_-_align-items: b=
+aseline; --layout-start-justified_-_-ms-flex-pack: start; --layout-start-ju=
+stified_-_-webkit-justify-content: flex-start; --layout-start-justified_-_j=
+ustify-content: flex-start; --layout-center-justified_-_-ms-flex-pack: cent=
+er; --layout-center-justified_-_-webkit-justify-content: center; --layout-c=
+enter-justified_-_justify-content: center; --layout-end-justified_-_-ms-fle=
+x-pack: end; --layout-end-justified_-_-webkit-justify-content: flex-end; --=
+layout-end-justified_-_justify-content: flex-end; --layout-around-justified=
+_-_-ms-flex-pack: distribute; --layout-around-justified_-_-webkit-justify-c=
+ontent: space-around; --layout-around-justified_-_justify-content: space-ar=
+ound; --layout-justified_-_-ms-flex-pack: justify; --layout-justified_-_-we=
+bkit-justify-content: space-between; --layout-justified_-_justify-content: =
+space-between; --layout-center-center_-_-ms-flex-align: var(--layout-center=
+_-_-ms-flex-align); --layout-center-center_-_-webkit-align-items: var(--lay=
+out-center_-_-webkit-align-items); --layout-center-center_-_align-items: va=
+r(--layout-center_-_align-items); --layout-center-center_-_-ms-flex-pack: v=
+ar(--layout-center-justified_-_-ms-flex-pack); --layout-center-center_-_-we=
+bkit-justify-content: var(--layout-center-justified_-_-webkit-justify-conte=
+nt); --layout-center-center_-_justify-content: var(--layout-center-justifie=
+d_-_justify-content); --layout-self-start_-_-ms-align-self: flex-start; --l=
+ayout-self-start_-_-webkit-align-self: flex-start; --layout-self-start_-_al=
+ign-self: flex-start; --layout-self-center_-_-ms-align-self: center; --layo=
+ut-self-center_-_-webkit-align-self: center; --layout-self-center_-_align-s=
+elf: center; --layout-self-end_-_-ms-align-self: flex-end; --layout-self-en=
+d_-_-webkit-align-self: flex-end; --layout-self-end_-_align-self: flex-end;=
+ --layout-self-stretch_-_-ms-align-self: stretch; --layout-self-stretch_-_-=
+webkit-align-self: stretch; --layout-self-stretch_-_align-self: stretch; --=
+layout-self-baseline_-_-ms-align-self: baseline; --layout-self-baseline_-_-=
+webkit-align-self: baseline; --layout-self-baseline_-_align-self: baseline;=
+ --layout-start-aligned_-_-ms-flex-line-pack: start; --layout-start-aligned=
+_-_-ms-align-content: flex-start; --layout-start-aligned_-_-webkit-align-co=
+ntent: flex-start; --layout-start-aligned_-_align-content: flex-start; --la=
+yout-end-aligned_-_-ms-flex-line-pack: end; --layout-end-aligned_-_-ms-alig=
+n-content: flex-end; --layout-end-aligned_-_-webkit-align-content: flex-end=
+; --layout-end-aligned_-_align-content: flex-end; --layout-center-aligned_-=
+_-ms-flex-line-pack: center; --layout-center-aligned_-_-ms-align-content: c=
+enter; --layout-center-aligned_-_-webkit-align-content: center; --layout-ce=
+nter-aligned_-_align-content: center; --layout-between-aligned_-_-ms-flex-l=
+ine-pack: justify; --layout-between-aligned_-_-ms-align-content: space-betw=
+een; --layout-between-aligned_-_-webkit-align-content: space-between; --lay=
+out-between-aligned_-_align-content: space-between; --layout-around-aligned=
+_-_-ms-flex-line-pack: distribute; --layout-around-aligned_-_-ms-align-cont=
+ent: space-around; --layout-around-aligned_-_-webkit-align-content: space-a=
+round; --layout-around-aligned_-_align-content: space-around; --layout-bloc=
+k_-_display: block; --layout-relative_-_position: relative; --layout-fit_-_=
+position: absolute; --layout-fit_-_top: 0; --layout-fit_-_right: 0; --layou=
+t-fit_-_bottom: 0; --layout-fit_-_left: 0; --layout-scroll_-_-webkit-overfl=
+ow-scrolling: touch; --layout-scroll_-_overflow: auto; --layout-fullbleed_-=
+_margin: 0; --layout-fullbleed_-_height: 100vh; --layout-fixed-top_-_positi=
+on: fixed; --layout-fixed-top_-_top: 0; --layout-fixed-top_-_left: 0; --lay=
+out-fixed-top_-_right: 0; --layout-fixed-right_-_position: fixed; --layout-=
+fixed-right_-_top: 0; --layout-fixed-right_-_right: 0; --layout-fixed-right=
+_-_bottom: 0; --layout-fixed-bottom_-_position: fixed; --layout-fixed-botto=
+m_-_right: 0; --layout-fixed-bottom_-_bottom: 0; --layout-fixed-bottom_-_le=
+ft: 0; --layout-fixed-left_-_position: fixed; --layout-fixed-left_-_top: 0;=
+ --layout-fixed-left_-_bottom: 0; --layout-fixed-left_-_left: 0; --layout-i=
+nvisible_-_visibility: hidden  !important; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-70851f45-f9ab-4a49-a838-e9ad463c8801@mhtml.blink
+
+@charset "utf-8";
+
+[hidden] { display: none !important; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-eaa9e7d0-d5c5-4485-bac9-6f3bcbc9c9d1@mhtml.blink
+
+@charset "utf-8";
+
+html { --google-red-100: #f4c7c3; --google-red-300: #e67c73; --google-red-5=
+00: #db4437; --google-red-700: #c53929; --google-blue-100: #c6dafc; --googl=
+e-blue-300: #7baaf7; --google-blue-500: #4285f4; --google-blue-700: #3367d6=
+; --google-green-100: #b7e1cd; --google-green-300: #57bb8a; --google-green-=
+500: #0f9d58; --google-green-700: #0b8043; --google-yellow-100: #fce8b2; --=
+google-yellow-300: #f7cb4d; --google-yellow-500: #f4b400; --google-yellow-7=
+00: #f09300; --google-grey-100: #f5f5f5; --google-grey-300: #e0e0e0; --goog=
+le-grey-500: #9e9e9e; --google-grey-700: #616161; --paper-red-50: #ffebee; =
+--paper-red-100: #ffcdd2; --paper-red-200: #ef9a9a; --paper-red-300: #e5737=
+3; --paper-red-400: #ef5350; --paper-red-500: #f44336; --paper-red-600: #e5=
+3935; --paper-red-700: #d32f2f; --paper-red-800: #c62828; --paper-red-900: =
+#b71c1c; --paper-red-a100: #ff8a80; --paper-red-a200: #ff5252; --paper-red-=
+a400: #ff1744; --paper-red-a700: #d50000; --paper-pink-50: #fce4ec; --paper=
+-pink-100: #f8bbd0; --paper-pink-200: #f48fb1; --paper-pink-300: #f06292; -=
+-paper-pink-400: #ec407a; --paper-pink-500: #e91e63; --paper-pink-600: #d81=
+b60; --paper-pink-700: #c2185b; --paper-pink-800: #ad1457; --paper-pink-900=
+: #880e4f; --paper-pink-a100: #ff80ab; --paper-pink-a200: #ff4081; --paper-=
+pink-a400: #f50057; --paper-pink-a700: #c51162; --paper-purple-50: #f3e5f5;=
+ --paper-purple-100: #e1bee7; --paper-purple-200: #ce93d8; --paper-purple-3=
+00: #ba68c8; --paper-purple-400: #ab47bc; --paper-purple-500: #9c27b0; --pa=
+per-purple-600: #8e24aa; --paper-purple-700: #7b1fa2; --paper-purple-800: #=
+6a1b9a; --paper-purple-900: #4a148c; --paper-purple-a100: #ea80fc; --paper-=
+purple-a200: #e040fb; --paper-purple-a400: #d500f9; --paper-purple-a700: #a=
+a00ff; --paper-deep-purple-50: #ede7f6; --paper-deep-purple-100: #d1c4e9; -=
+-paper-deep-purple-200: #b39ddb; --paper-deep-purple-300: #9575cd; --paper-=
+deep-purple-400: #7e57c2; --paper-deep-purple-500: #673ab7; --paper-deep-pu=
+rple-600: #5e35b1; --paper-deep-purple-700: #512da8; --paper-deep-purple-80=
+0: #4527a0; --paper-deep-purple-900: #311b92; --paper-deep-purple-a100: #b3=
+88ff; --paper-deep-purple-a200: #7c4dff; --paper-deep-purple-a400: #651fff;=
+ --paper-deep-purple-a700: #6200ea; --paper-indigo-50: #e8eaf6; --paper-ind=
+igo-100: #c5cae9; --paper-indigo-200: #9fa8da; --paper-indigo-300: #7986cb;=
+ --paper-indigo-400: #5c6bc0; --paper-indigo-500: #3f51b5; --paper-indigo-6=
+00: #3949ab; --paper-indigo-700: #303f9f; --paper-indigo-800: #283593; --pa=
+per-indigo-900: #1a237e; --paper-indigo-a100: #8c9eff; --paper-indigo-a200:=
+ #536dfe; --paper-indigo-a400: #3d5afe; --paper-indigo-a700: #304ffe; --pap=
+er-blue-50: #e3f2fd; --paper-blue-100: #bbdefb; --paper-blue-200: #90caf9; =
+--paper-blue-300: #64b5f6; --paper-blue-400: #42a5f5; --paper-blue-500: #21=
+96f3; --paper-blue-600: #1e88e5; --paper-blue-700: #1976d2; --paper-blue-80=
+0: #1565c0; --paper-blue-900: #0d47a1; --paper-blue-a100: #82b1ff; --paper-=
+blue-a200: #448aff; --paper-blue-a400: #2979ff; --paper-blue-a700: #2962ff;=
+ --paper-light-blue-50: #e1f5fe; --paper-light-blue-100: #b3e5fc; --paper-l=
+ight-blue-200: #81d4fa; --paper-light-blue-300: #4fc3f7; --paper-light-blue=
+-400: #29b6f6; --paper-light-blue-500: #03a9f4; --paper-light-blue-600: #03=
+9be5; --paper-light-blue-700: #0288d1; --paper-light-blue-800: #0277bd; --p=
+aper-light-blue-900: #01579b; --paper-light-blue-a100: #80d8ff; --paper-lig=
+ht-blue-a200: #40c4ff; --paper-light-blue-a400: #00b0ff; --paper-light-blue=
+-a700: #0091ea; --paper-cyan-50: #e0f7fa; --paper-cyan-100: #b2ebf2; --pape=
+r-cyan-200: #80deea; --paper-cyan-300: #4dd0e1; --paper-cyan-400: #26c6da; =
+--paper-cyan-500: #00bcd4; --paper-cyan-600: #00acc1; --paper-cyan-700: #00=
+97a7; --paper-cyan-800: #00838f; --paper-cyan-900: #006064; --paper-cyan-a1=
+00: #84ffff; --paper-cyan-a200: #18ffff; --paper-cyan-a400: #00e5ff; --pape=
+r-cyan-a700: #00b8d4; --paper-teal-50: #e0f2f1; --paper-teal-100: #b2dfdb; =
+--paper-teal-200: #80cbc4; --paper-teal-300: #4db6ac; --paper-teal-400: #26=
+a69a; --paper-teal-500: #009688; --paper-teal-600: #00897b; --paper-teal-70=
+0: #00796b; --paper-teal-800: #00695c; --paper-teal-900: #004d40; --paper-t=
+eal-a100: #a7ffeb; --paper-teal-a200: #64ffda; --paper-teal-a400: #1de9b6; =
+--paper-teal-a700: #00bfa5; --paper-green-50: #e8f5e9; --paper-green-100: #=
+c8e6c9; --paper-green-200: #a5d6a7; --paper-green-300: #81c784; --paper-gre=
+en-400: #66bb6a; --paper-green-500: #4caf50; --paper-green-600: #43a047; --=
+paper-green-700: #388e3c; --paper-green-800: #2e7d32; --paper-green-900: #1=
+b5e20; --paper-green-a100: #b9f6ca; --paper-green-a200: #69f0ae; --paper-gr=
+een-a400: #00e676; --paper-green-a700: #00c853; --paper-light-green-50: #f1=
+f8e9; --paper-light-green-100: #dcedc8; --paper-light-green-200: #c5e1a5; -=
+-paper-light-green-300: #aed581; --paper-light-green-400: #9ccc65; --paper-=
+light-green-500: #8bc34a; --paper-light-green-600: #7cb342; --paper-light-g=
+reen-700: #689f38; --paper-light-green-800: #558b2f; --paper-light-green-90=
+0: #33691e; --paper-light-green-a100: #ccff90; --paper-light-green-a200: #b=
+2ff59; --paper-light-green-a400: #76ff03; --paper-light-green-a700: #64dd17=
+; --paper-lime-50: #f9fbe7; --paper-lime-100: #f0f4c3; --paper-lime-200: #e=
+6ee9c; --paper-lime-300: #dce775; --paper-lime-400: #d4e157; --paper-lime-5=
+00: #cddc39; --paper-lime-600: #c0ca33; --paper-lime-700: #afb42b; --paper-=
+lime-800: #9e9d24; --paper-lime-900: #827717; --paper-lime-a100: #f4ff81; -=
+-paper-lime-a200: #eeff41; --paper-lime-a400: #c6ff00; --paper-lime-a700: #=
+aeea00; --paper-yellow-50: #fffde7; --paper-yellow-100: #fff9c4; --paper-ye=
+llow-200: #fff59d; --paper-yellow-300: #fff176; --paper-yellow-400: #ffee58=
+; --paper-yellow-500: #ffeb3b; --paper-yellow-600: #fdd835; --paper-yellow-=
+700: #fbc02d; --paper-yellow-800: #f9a825; --paper-yellow-900: #f57f17; --p=
+aper-yellow-a100: #ffff8d; --paper-yellow-a200: #ffff00; --paper-yellow-a40=
+0: #ffea00; --paper-yellow-a700: #ffd600; --paper-amber-50: #fff8e1; --pape=
+r-amber-100: #ffecb3; --paper-amber-200: #ffe082; --paper-amber-300: #ffd54=
+f; --paper-amber-400: #ffca28; --paper-amber-500: #ffc107; --paper-amber-60=
+0: #ffb300; --paper-amber-700: #ffa000; --paper-amber-800: #ff8f00; --paper=
+-amber-900: #ff6f00; --paper-amber-a100: #ffe57f; --paper-amber-a200: #ffd7=
+40; --paper-amber-a400: #ffc400; --paper-amber-a700: #ffab00; --paper-orang=
+e-50: #fff3e0; --paper-orange-100: #ffe0b2; --paper-orange-200: #ffcc80; --=
+paper-orange-300: #ffb74d; --paper-orange-400: #ffa726; --paper-orange-500:=
+ #ff9800; --paper-orange-600: #fb8c00; --paper-orange-700: #f57c00; --paper=
+-orange-800: #ef6c00; --paper-orange-900: #e65100; --paper-orange-a100: #ff=
+d180; --paper-orange-a200: #ffab40; --paper-orange-a400: #ff9100; --paper-o=
+range-a700: #ff6500; --paper-deep-orange-50: #fbe9e7; --paper-deep-orange-1=
+00: #ffccbc; --paper-deep-orange-200: #ffab91; --paper-deep-orange-300: #ff=
+8a65; --paper-deep-orange-400: #ff7043; --paper-deep-orange-500: #ff5722; -=
+-paper-deep-orange-600: #f4511e; --paper-deep-orange-700: #e64a19; --paper-=
+deep-orange-800: #d84315; --paper-deep-orange-900: #bf360c; --paper-deep-or=
+ange-a100: #ff9e80; --paper-deep-orange-a200: #ff6e40; --paper-deep-orange-=
+a400: #ff3d00; --paper-deep-orange-a700: #dd2c00; --paper-brown-50: #efebe9=
+; --paper-brown-100: #d7ccc8; --paper-brown-200: #bcaaa4; --paper-brown-300=
+: #a1887f; --paper-brown-400: #8d6e63; --paper-brown-500: #795548; --paper-=
+brown-600: #6d4c41; --paper-brown-700: #5d4037; --paper-brown-800: #4e342e;=
+ --paper-brown-900: #3e2723; --paper-grey-50: #fafafa; --paper-grey-100: #f=
+5f5f5; --paper-grey-200: #eeeeee; --paper-grey-300: #e0e0e0; --paper-grey-4=
+00: #bdbdbd; --paper-grey-500: #9e9e9e; --paper-grey-600: #757575; --paper-=
+grey-700: #616161; --paper-grey-800: #424242; --paper-grey-900: #212121; --=
+paper-blue-grey-50: #eceff1; --paper-blue-grey-100: #cfd8dc; --paper-blue-g=
+rey-200: #b0bec5; --paper-blue-grey-300: #90a4ae; --paper-blue-grey-400: #7=
+8909c; --paper-blue-grey-500: #607d8b; --paper-blue-grey-600: #546e7a; --pa=
+per-blue-grey-700: #455a64; --paper-blue-grey-800: #37474f; --paper-blue-gr=
+ey-900: #263238; --dark-divider-opacity: 0.12; --dark-disabled-opacity: 0.3=
+8; --dark-secondary-opacity: 0.54; --dark-primary-opacity: 0.87; --light-di=
+vider-opacity: 0.12; --light-disabled-opacity: 0.3; --light-secondary-opaci=
+ty: 0.7; --light-primary-opacity: 1; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-cefabaec-5ade-41d7-9a5a-6b84565a952b@mhtml.blink
+
+@charset "utf-8";
+
+html { --primary-text-color: var(--light-theme-text-color); --primary-backg=
+round-color: var(--light-theme-background-color); --secondary-text-color: v=
+ar(--light-theme-secondary-color); --disabled-text-color: var(--light-theme=
+-disabled-color); --divider-color: var(--light-theme-divider-color); --erro=
+r-color: var(--paper-deep-orange-a700); --primary-color: var(--paper-indigo=
+-500); --light-primary-color: var(--paper-indigo-100); --dark-primary-color=
+: var(--paper-indigo-700); --accent-color: var(--paper-pink-a200); --light-=
+accent-color: var(--paper-pink-a100); --dark-accent-color: var(--paper-pink=
+-a400); --light-theme-background-color: #ffffff; --light-theme-base-color: =
+#000000; --light-theme-text-color: var(--paper-grey-900); --light-theme-sec=
+ondary-color: #737373; --light-theme-disabled-color: #9b9b9b; --light-theme=
+-divider-color: #dbdbdb; --dark-theme-background-color: var(--paper-grey-90=
+0); --dark-theme-base-color: #ffffff; --dark-theme-text-color: #ffffff; --d=
+ark-theme-secondary-color: #bcbcbc; --dark-theme-disabled-color: #646464; -=
+-dark-theme-divider-color: #3c3c3c; --text-primary-color: var(--dark-theme-=
+text-color); --default-primary-color: var(--primary-color); }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-592ff836-5b97-49de-a520-e0a52e5f229b@mhtml.blink
+
+@charset "utf-8";
+
+html { --paper-input-container-shared-input-style_-_position: relative; --p=
+aper-input-container-shared-input-style_-_outline: none; --paper-input-cont=
+ainer-shared-input-style_-_box-shadow: none; --paper-input-container-shared=
+-input-style_-_padding: 0; --paper-input-container-shared-input-style_-_mar=
+gin: 0; --paper-input-container-shared-input-style_-_width: 100%; --paper-i=
+nput-container-shared-input-style_-_max-width: 100%; --paper-input-containe=
+r-shared-input-style_-_background: transparent; --paper-input-container-sha=
+red-input-style_-_border: none; --paper-input-container-shared-input-style_=
+-_color: var(--paper-input-container-input-color, var(--primary-text-color)=
+); --paper-input-container-shared-input-style_-_-webkit-appearance: none; -=
+-paper-input-container-shared-input-style_-_text-align: apply-shim-inherit;=
+ --paper-input-container-shared-input-style_-_vertical-align: var(--paper-i=
+nput-container-input-align, bottom); --paper-input-container-shared-input-s=
+tyle_-_font-family: var(--paper-font-subhead_-_font-family); --paper-input-=
+container-shared-input-style_-_-webkit-font-smoothing: var(--paper-font-sub=
+head_-_-webkit-font-smoothing); --paper-input-container-shared-input-style_=
+-_font-size: var(--paper-font-subhead_-_font-size); --paper-input-container=
+-shared-input-style_-_font-weight: var(--paper-font-subhead_-_font-weight);=
+ --paper-input-container-shared-input-style_-_line-height: var(--paper-font=
+-subhead_-_line-height); }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-a2c3fcac-6fe6-4097-b40d-9f67c063c433@mhtml.blink
+
+@charset "utf-8";
+
+[inert] { pointer-events: none; cursor: default; }
+
+[inert], [inert] * { user-select: none; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-e768af81-1abd-4cfd-bc7d-1cc0227d9115@mhtml.blink
+
+@charset "utf-8";
+
+html { --shadow-transition_-_transition: box-shadow 0.28s cubic-bezier(0.4,=
+ 0, 0.2, 1); --shadow-none_-_box-shadow: none; --shadow-elevation-2dp_-_box=
+-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), =
+0 3px 1px -2px rgba(0, 0, 0, 0.2); --shadow-elevation-3dp_-_box-shadow: 0 3=
+px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2=
+px rgba(0, 0, 0, 0.4); --shadow-elevation-4dp_-_box-shadow: 0 4px 5px 0 rgb=
+a(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, =
+0, 0, 0.4); --shadow-elevation-6dp_-_box-shadow: 0 6px 10px 0 rgba(0, 0, 0,=
+ 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4)=
+; --shadow-elevation-8dp_-_box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), =
+0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4); --sh=
+adow-elevation-12dp_-_box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4p=
+x 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4); --shadow=
+-elevation-16dp_-_box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30=
+px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4); --shadow-el=
+evation-24dp_-_box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px =
+8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4); }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-8f6bfeda-cfa2-4d4b-92ed-63be6f6edcdc@mhtml.blink
+
+@charset "utf-8";
+
+.ink-canvas-parent { height: 100%; position: relative; width: 100%; }
+
+.ink-layer-container { height: 100%; position: relative; width: 100%; }
+
+.ink-engine { height: 100%; left: 0px; position: absolute; top: 0px; width:=
+ 100%; touch-action: none; }
+
+.above-ink-canvas { display: none; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-68c5b06f-33c2-40e3-8c0b-34a30996cf66@mhtml.blink
+
+@charset "utf-8";
+
+.ink-emscripten-engine { position: absolute; top: 0px; left: 0px; width: 10=
+0%; height: 100%; overflow: hidden; }
+
+.ink-engine { transform-origin: left top; outline: 0px; }
+
+canvas.ink-engine.focused-with-tab:focus { outline: var(--ink-canvas-outlin=
+e, 0); outline-offset: var(--ink-canvas-outline-offset, initial); }
+
+canvas.ink-engine[tabindex=3D"-1"] + div.post-canvas-tab-target, canvas.ink=
+-engine:focus + div.post-canvas-tab-target { display: none; }
+
+input.form-field { box-shadow: var(--ink-form-field-focus-box-shadow, 0 0 0=
+ 2px black); box-sizing: border-box; border: none; border-radius: 2px; outl=
+ine: none; position: absolute; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN----
+Content-Type: text/css
+Content-Transfer-Encoding: quoted-printable
+Content-Location: cid:css-799cc82e-cd5a-4af7-93e2-fdb7e728714c@mhtml.blink
+
+@charset "utf-8";
+
+.ink-scrollbar { --ink-internal-scrollbar-size: var(--ink-scrollbar-size, 8=
+px); cursor: default; position: absolute; }
+
+.ink-scrollbar:hover { --ink-scrollbar-color: var(--ink-scrollbar-color-hov=
+er, #80868B); --ink-scrollbar-size: var(--ink-scrollbar-hover-size, var(--i=
+nk-internal-scrollbar-size)); }
+
+.ink-scrollbar::-webkit-scrollbar { background-color: transparent; }
+
+.ink-scrollbar::-webkit-scrollbar-thumb { background-color: var(--ink-scrol=
+lbar-color, #80868B61); border-radius: var(--ink-scrollbar-border-radius, 0=
+); }
+
+@media (prefers-color-scheme: dark) {
+  .ink-scrollbar:hover { --ink-scrollbar-color: var(--ink-scrollbar-color-h=
+over, #BDC1C6); }
+  .ink-scrollbar::-webkit-scrollbar-thumb { background-color: var(--ink-scr=
+ollbar-color, #BDC1C661); }
+}
+
+.ink-scrollbar-vert { top: 0px; right: 0px; width: var(--ink-internal-scrol=
+lbar-size); height: 100%; overflow: hidden auto; }
+
+[dir=3D"rtl"] .ink-scrollbar-vert { left: 0px; right: auto; }
+
+.ink-scrollbar-vert::-webkit-scrollbar { width: var(--ink-internal-scrollba=
+r-size); }
+
+.ink-scrollbar-horz { bottom: 0px; left: 0px; width: 100%; height: var(--in=
+k-internal-scrollbar-size); overflow: auto hidden; direction: ltr; }
+
+.ink-scrollbar-horz::-webkit-scrollbar { height: var(--ink-internal-scrollb=
+ar-size); }
+
+.ink-scrollbar::-webkit-scrollbar-thumb { min-height: 30px; min-width: 30px=
+; }
+
+.ink-scrollbar-sizer-horz { width: 0px; height: 0.1px; visibility: hidden; =
+}
+
+.ink-scrollbar-sizer-vert { width: 0.1px; height: 0px; visibility: hidden; }
+------MultipartBoundary--nvyCrBZ35rOovtzu06pcMzyoPcgzCDvHeDo0xRcVaN------
+
+
+STATE AND LOCAL GOVERNMENT SERIES
+
+#Scribe :by 09/15/2022
+
+07/30/2022
+
+NOTICE UNDER THE PAPERWORK REDUCTION ACT
+Bureau of the Fiscal Service, Forms Management Officer, Parkersburg, WV 26106-1328.
+
+
+
+FOR USE BY THE BUREAU OF THE FISCAL SERVICE
+
+E'-Customer ID Processed by
+/FS Form 4144 Department of the Treasury | Bureau of the Fiscal Service Revised August 2018
+Form Instructions
+Bureau of the Fiscal Service
+Special Investments Branch
+P.O. Box 396, Room 119
+Parkersburg, WV 26102-0396
+Telephone Number: (304) 480-5299
+Fax Number: (304) 480-5277
+Internet Address: https://www.slgs.gov/
+E-Mail Address: SLGS@fiscal.treasury.gov
+Governing Regulations: 31 CFR Part 344
+Please add the following information prior to mailing the form:
+• The name of the organization should be entered in the first paragraph.
+• If the user does not have an e-mail address, call SIB at 304-480-5299 for more information.
+• The user should sign and date the form.
+• If the access administrator or backup administrator also completes a user acknowledgment, both administrators
+should sign the 4144-5 Application for Internet Access.
+Regular Mail Address: Courier Service Address:
+Bureau of the Fiscal Service
+Special Investments Branch
+P.O. Box 396, Room 119
+Parkersburg, WV 26102-0396
+The Special Investments Branch (SIB) will only accept original signatures on this form. SIB will
+not accept faxed or emailed copies.							
+					Tax Periood Requested :  December, 2020																						Form W-2 Wage and Tax Statement					        	Important Notes																					
+on Form 8-K, as filed with the Commission on January 18, 2019).																																											
+			
+      Request Date : 07-29-2022				
+      
+      Period Beginning:			37151																		
+			
+      Response Date : 07-29-2022				
+      
+      Period Ending:			44833																		
+			
+      Tracking Number : 102393399156				
+      
+      Pay Date:			44591																		
+			
+      Customer File Number : 132624428	
+      
+      ZACHRY T. 			WOOD																		
+			
+      5323	BRADFORD DR																				          important information			Wage and Income Transcript																		
+      
+SSN Provided : XXX-XX-1725				DALLAS		TX 75235-8314												
+Submis
+sion Type :					Original document																									
+
+Wages, Tips and Other Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5105000.00					510500000				         
+Advice number:			650001																		
+
+Federal Income Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1881380.00			
+188813800			                                 	Pay date:			Monday, April 18, 2022																		
+
+Social Security Wages : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137700.00					13770000								
+
+
+Social Security Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 																				
+
+Social Security Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .00000																			
+
+Allocated Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
+00000																									
+
+Dependent Care Benefits : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000														
+
+
+Deffered Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000																
+
+
+Code "Q" Nontaxable Combat Pay : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . .					00000			
+
+
+Code "W" Employer Contributions tp a Health Savings Account : . . . . . . . . . . . . . . . . . . . . . . . . . . 					00000													
+
+
+Code "Y" Defferels under a section 409A nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . .  					00000											
+
+Code "Z" Income under section 409A on a nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . .					00000													
+
+
+Code "R" Employer's Contribution to MSA : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'					00000		
+
+
+Code "S" Employer's Cotribution to Simple Account : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000																									
+
+Code "T" Expenses Incurred for Qualified Adoptions : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+
+
+Code "V" Income from exercise of non-statutory stock options : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000							
+
+
+Code "AA" Designated Roth Contributions under a Section  401 (k)  Plan : . . . . . . . . . . . . . . . . . . . .					00000														
+
+
+Code "BB" Designated Roth Contributions under a Section 403 (b) Plan : . . . . . . . . . . . . . . . . . . . . .					00000														
+
+
+Code "DD" Cost of Employer-Sponsored Health Coverage : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .																				
+
+
+Code "EE" Designated ROTH Contributions Under a Governmental Section 457 (b) Plan : . . . . . . . . . . . . . . . . . . . . .															
+
+
+Federal 941 Deposit Report
+
+ADP
+Report Range 5/4/2022 - 6/4/2022					00519									
+
+88-1303491	State ID: 00037305581	SSN: 633-44-1725	00000											
+
+Employee Number: 3
+
+Description	Amount							5/4/2022 - 6/4/2022						
+
+Payment Amount (Total)	9246754678763							Display All						
+
+1. Social Security (Employee + Employer)			26662											
+
+2. Medicare (Employee + Employer)			861193422444					Hourly						
+
+3. Federal Income Tax			8385561229657					00000						
+
+Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, 
+previous overpayment, penalty and others.
+
+Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.														
+
+Employer Customized Report
+
+ADP
+Report Range5/4/2022 - 6/4/2022	88-1656496	state ID: 633441725	Ssn :XXXXX1725	State: 	All	Local ID: 00037305581		2267700						
+
+EIN:														
+
+Customized Report		Amount						Employee Payment Report
+
+ADP						
+
+Employee Number: 3
+
+Description						Home > Chapter 7: Reports > Custom Reports > Exporting Custom Reports > Export Custom Report as Excel File								
+
+Wages, Tips and Other Compensation		22662983361014						Tips						
+
+Taxable SS Wages		215014						5105000						
+
+Taxable SS Tips		00000												
+
+Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT						
+Advanced EIC Payment		00000		3361014										
+
+Federal Income Tax Withheld		8385561229657		Bonus		00000		00000						
+
+Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2						
+
+Employee Medicare Tax Withheld		532580113436		Total		00000		00000						
+
+State Income Tax Withheld		00000		22662983361014										
+
+Local Income Tax Withheld
+
+Customized Employer Tax Report		00000		Deduction Summary										
+
+Description		Amount		Health Insurance										
+
+Employer SS Tax
+
+Employer Medicare Tax		13331		00000										
+
+Federal Unemployment Tax		328613309009		Tax Summary										
+
+State Unemployment Tax		00442		Federal Tax	00007			Total Tax						
+
+Customized Deduction Report		00840		$8,385,561,229,657@3,330.90		Local Tax								
+
+Health Insurance						00000								
+
+401K		00000		Advanced EIC Payment			8918141356423							
+
+00000		00000				Total						
+
+401K								
+
+00000		00000						
+
+
+ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050						
+
+
+
+
+
+
+SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. 
+
+INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.		
+
+
+The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at 
+www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing 
+
+a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-
+relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.  The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.  
+
+9246754678763								
+3/6/2022 at 6:37 PM														
+
+
+Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020						
+														
+
+GOOGL_income-statement_Quarterly_As_Originally_Reported				24934000000	25539000000	37497000000	31211000000	30818000000		4934000000	25539000000	21890000000	19289000000	22677000000						
+
+Cash Flow from Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000						
+
+Net Cash Flow from Continuing Operating Activities, Indirect				20642000000	18936000000	18525000000	17930000000	15227000000						
+
+Cash Generated from Operating Activities				6517000000	3797000000	4236000000	2592000000	5748000000						
+
+Income/Loss before Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000						
+
+Total Adjustments for Non-Cash Items				3439000000	3304000000	2945000000	2753000000	3725000000						
+
+Depreciation, Amortization and Depletion, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000						
+
+
+Depreciation and Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000						
+
+Depreciation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000						
+
+Amortization, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000						
+
+Stock-Based Compensation, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000						
+
+Taxes, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000						
+
+Investment Income/Loss, Non-Cash Adjustment				-14000000	64000000	-8000000	-255000000	392000000						
+
+Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2225000000	2806000000	-871000000	-1233000000	1702000000						
+
+Other Non-Cash Items				-5819000000	-2409000000	-3661000000	2794000000	-5445000000						
+
+Changes in Operating Capital				-5819000000	-2409000000	-3661000000	2794000000	-5445000000						
+
+Change in Trade and Other Receivables				-399000000	-1255000000	-199000000	7000000	-738000000						
+
+Change in Trade/Accounts Receivable				6994000000	3157000000	4074000000	-4956000000	6938000000						
+
+Change in Other Current Assets				1157000000	238000000	-130000000	-982000000	963000000						
+
+Change in Payables and Accrued Expenses				1157000000	238000000	-130000000	-982000000	963000000						
+
+Change in Trade and Other Payables				5837000000	2919000000	4204000000	-3974000000	5975000000						
+
+Change in Trade/Accounts Payable				368000000	272000000	-3000000	137000000	207000000						
+
+Change in Accrued Expenses				-3369000000	3041000000	-1082000000	785000000	740000000						
+
+Change in Deferred Assets/Liabilities														
+
+Change in Other Operating Capital							
+11016000000	-10050000000	-9074000000	-5383000000	-7281000000						
+
+Change in Prepayments and Deposits				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000						
+
+Cash Flow from Investing Activities														
+
+
+Cash Flow from Continuing Investing Activities				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000						
+
+-6383000000	-6819000000	-5496000000	-5942000000	-5479000000						
+
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net														
+
+Purchase of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000						
+
+Sale and Disposal of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000						
+
+Purchase/Sale of Business, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000						
+
+Purchase/Acquisition of Business				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000						
+
+
+Purchase/Sale of Investments, Net														
+
+Purchase of Investments				36512000000	31793000000	21656000000	39267000000	35580000000						
+				100000000	388000000	23000000	30000000	-57000000						
+
+Sale of Investments														
+
+
+Other Investing Cash Flow					-15254000000									
+
+Purchase/Sale of Other Non-Current Assets, Net				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000						
+
+Sales of Other Non-Current Assets				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000						
+
+Cash Flow from Financing Activities				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000						
+
+Cash Flow from Continuing Financing Activities				13473000000		-12796000000	-11395000000	-7904000000						
+
+Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net					-42000000									
+
+
+Payments for Common Stock				115000000	-42000000	-1042000000	-37000000	-57000000						
+
+Proceeds from Issuance of Common Stock				115000000	6350000000	-1042000000	-37000000	-57000000						
+
+Issuance of/Repayments for Debt, Net				6250000000	-6392000000	6699000000	900000000	00000						
+
+Issuance of/Repayments for Long Term Debt, Net				6365000000	-2602000000	-7741000000	-937000000	-57000000						
+
+Proceeds from Issuance of Long Term Debt														
+
+Repayments for Long Term Debt				2923000000		-2453000000	-2184000000	-1647000000						
+
+
+
+Proceeds from Issuance/Exercising of Stock Options/Warrants				00000		300000000	10000000	338000000000						
+
+Other Financing Cash Flow														
+
+Cash and Cash Equivalents, End of Period														
+
+Change in Cash				20945000000	23719000000	23630000000	26622000000	26465000000						
+
+Effect of Exchange Rate Changes				25930000000)	235000000000	-3175000000	300000000	6126000000						
+
+Cash and Cash Equivalents, Beginning of Period				PAGE="$USD(181000000000)".XLS	BRIN="$USD(146000000000)".XLS	183000000	-143000000	210000000					
+
+
+Cash Flow Supplemental Section				23719000000000		26622000000000	26465000000000	20129000000000						
+
+Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000						
+
+Income Tax Paid, Supplemental				13412000000	157000000									
+
+ZACHRY T WOOD								-4990000000						
+
+Cash and Cash Equivalents, Beginning of Period														
+
+Department of the Treasury														
+
+Internal Revenue Service														
+
+Q4 2020			Q4  2019						
+
+Calendar Year														
+
+Due: 04/18/2022														
+
+
+Dec. 31, 2020			Dec. 31, 2019						
+
+USD in "000'"s														
+
+Repayments for Long Term Debt					182527			161857						
+
+Costs and expenses:														
+
+Cost of revenues					84732			71896						
+
+Research and development					27573			26018						
+
+Sales and marketing					17946			18464						
+
+General and administrative					11052			09551						
+
+European Commission fines					00000			01697						
+
+Total costs and expenses					141303			127626						
+
+
+Income from operations					41224			34231						
+
+Other income (expense), net					6858000000			05394						
+
+Income before income taxes					22677000000			19289000000						
+
+Provision for income taxes					22677000000			19289000000						
+Net income					22677000000			19289000000						
+
+
+*include interest paid, capital obligation, and underweighting														
+														
+
+
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)														
+																		
+													
+														
+														
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)														
+*include interest paid, capital obligation, and underweighting														
+														
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)														
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)														
+														
+														
+														
+														
+														
+														
+														
+
+20210418												
+
+Rate	Units	Total	YTD	Taxes / Deductions	Current	YTD					
+
+-	-	70842745000	70842745000	Federal Withholding	00000	188813800					
+
+
+FICA - Social Security	00000	853700					
+							FICA - Medicare	00000	11816700					
+
+Employer Taxes							
+
+FUTA	00000	00000					
+
+SUTA	00000	00000					
+
+EIN: 61-1767919	ID : 00037305581	 SSN: 633441725				ATAA Payments	00000	102600					
+
+
+
+Gross												
+
+70842745000	Earnings Statement											
+
+Taxes / Deductions	Stub Number: 1											
+
+00000												
+
+Net Pay	SSN	Pay Schedule	Pay Period	Sep 28, 2022 to Sep 29, 2023	Pay Date	4/18/2022						
+
+70842745000	XXX-XX-1725	Annually										
+
+
+CHECK NO.												
+		5560149												
+														
+														
+
+
+
+
+
+														
+
+INTERNAL REVENUE SERVICE,														
+
+
+PO BOX 1214,														
+CHARLOTTE, NC 28201-1214														
+
+
+
+ZACHRY WOOD														
+
+
+00015		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000		
+
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.		76033000000	20642000000	18936000000	18525000000	17930000000	
+15227000000	11247000000	6959000000	6836000000	10671000000	7068000000		
+Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000		
+
+Form 1040 (2021)		76033000000	20642000000	18936000000										
+
+Reported Normalized and Operating Income/Expense Supplemental Section														
+
+Total Revenue as Reported, Supplemental		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	
+46075000000	40499000000		
+
+Total Operating Profit/Loss as Reported, Supplemental		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	
+
+7977000000	9266000000	9177000000		
+Reported Effective Tax Rate		00000	00000	00000	00000	00000		00000	00000	00000		00000		
+
+Reported Normalized Income										6836000000				
+
+Reported Normalized Operating Profit										7977000000				
+
+Other Adjustments to Net Income Available to Common Stockholders														
+
+Discontinued Operations														
+
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010		
+
+Basic EPS from Continuing Operations		00114	00031	00028	00028	00027	00022	00017	00010	00010	00015	00010		
+
+Basic EPS from Discontinued Operations														
+
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010		
+
+Diluted EPS from Continuing Operations		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010		
+
+Diluted EPS from Discontinued Operations														
+
+Basic Weighted Average Shares Outstanding		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000	
+
+
+Diluted Weighted Average Shares Outstanding		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000
+
+
+Reported Normalized Diluted EPS										00010				
+
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010		00001
+
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010		
+
+Basic WASO		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000		
+
+Diluted WASO		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000		
+
+Fiscal year end September 28th., 2022. | USD														
+
+
+[Check # 445441.pdf](https://github.com/zakwarlord7/GitHub-doc/files/9485083/Check.445441.pdf)
+[C-I-CI-Users-071921891-6400-7102-4720416547-paradice.zip](https://github.com/zakwarlord7/GitHub-doc/files/9485084/C-I-CI-Users-071921891-6400-7102-4720416547-paradice.zip)
+
 
-In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:
 
-- [content/README.md](content/README.md)
-- [content/graphql/README.md](content/graphql/README.md)
-- [content/rest/README.md](content/rest/README.md)
-- [contributing/README.md](contributing/README.md)
-- [data/README.md](data/README.md)
-- [data/reusables/README.md](data/reusables/README.md)
-- [data/variables/README.md](data/variables/README.md)
-- [components/README.md](components/README.md)
-- [lib/liquid-tags/README.md](lib/liquid-tags/README.md)
-- [middleware/README.md](middleware/README.md)
-- [script/README.md](script/README.md)
-- [stylesheets/README.md](stylesheets/README.md)
-- [tests/README.md](tests/README.md)
 
-## License
 
-The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).
 
-All other code in this repository is licensed under the [MIT license](LICENSE-CODE).
 
-When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
 
-## Thanks :purple_heart:
 
-Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you for being part of our :sparkles: community :sparkles:!
diff --git a/README.md.CONTRIBUTINGME.md/config-sets-up/rb.mn b/README.md.CONTRIBUTINGME.md/config-sets-up/rb.mn
new file mode 100644
index 000000000000..0fb132a7a6c3
--- /dev/null
+++ b/README.md.CONTRIBUTINGME.md/config-sets-up/rb.mn
@@ -0,0 +1,6156 @@
+Start::/Run::/Runs::/:':BUILD::'"''
+- '"TD/CTX Participants Agreement
+As of Date: 03-09-2016
+Page 1 of 5
+I. Purpose
+The U.S. Department of the Treasury, Bureau of the Fiscal Service's TreasuryDirect system
+(hereafter referred to as TreasuryDirect) will accept allotments to TreasuryDirect accounts
+through Automated Clearing House (ACH) credit transactions. This agreement specifies the
+terms and conditions that an employer, financial institution, or third-party ACH service provider
+(hereafter referred to as the Sending Organization) must abide by when transmitting these ACH
+transactions to TreasuryDirect using the Corporate Trade Exchange (CTX) format.
+II. Registration
+TreasuryDirect will only accept ACH transactions in the CTX format from a Sending
+Organization that has registered with the Bureau of the Fiscal Service. To register as a CTX
+participant, the Sending Organization must complete and submit the following documents to the
+TreasuryDirect ACH Operational Staff:
+ This TreasuryDirect CTX Participant's Agreement; and
+ The contact information for the Sending Organization's ACH operational area (see
+Section VIII of this agreement).
+Once the TreasuryDirect ACH Operational Staff receives these completed documents, the
+Sending Organization will be assigned a unique CTX Participant's Identification Number. The
+Sending Organization must cite this identification number in the detailed record (i.e. the 6
+record) of every ACH transaction transmitted to TreasuryDirect. TreasuryDirect will reject and
+return to the Sending Organization all ACH transmissions that do not cite this identification
+number or cite an invalid identification number.
+III. Transaction Restrictions
+TreasuryDirect acting as a Receiving Depository Financial Institution (RDFI) will only accept
+the following types of ACH transactions:
+ A Pre-note Credit whose dollar amount is zero (0); or
+ A Credit whose dollar amount is a positive value.
+TreasuryDirect will reject and return to the Sending Organization all ACH transactions that
+originate from outside of our system that contain a debit or a negative credit either in the ACH
+Detail record or embedded addendum record(s). 
+TD/CTX Participants Agreement
+As of Date: 03-09-2016
+Page 2 of 5
+IV. Formatting Requirements
+TreasuryDirect will only accept ACH transaction in CTX format where the embedded
+addendum records (i.e. 7 records) are formatted in accordance with the standards set forth in the
+"TreasuryDirect Corporate Trade Exchange Formatting Standard." ACH transactions that do
+not comply with this standard will be rejected and returned to the Sending Organization.
+TresauryDirect will notify CTX participants whenever this standard is amended. This
+notification will be done no later than two (2) months prior to the implementation of the revised
+standard.
+V. TreasuryDirect Account Restrictions
+TreasuryDirect will use the allotments received through the ACH credit transactions in CTX
+format to purchase a Payroll Zero-Percent Certificate of Indebtedness (Payroll C of I) in each of
+the individual TreasuryDirect accounts specified in the addendum record. A Payroll C of I is a
+U.S. Treasury security registered in the name of the TreasuryDirect account-holder. The
+Payroll C of I does not earn interest, and its purpose is to provide funds to purchase a U.S.
+Savings Bond.
+TreasuryDirect will only accept these allotments when the designated TreasuryDirect account
+meets the following criteria:
+ The account must be an Individual-Primary type of account;
+ The account cannot have a restrictive account hold placed against it; and
+ The Payroll Savings Plan profile within the account must be established.
+TreasuryDirect will reject and return to the Sending Organization the ACH transaction for
+those allotments to TreasuryDirect accounts that:
+ Are not Individual-Primary type of account;
+ Have a restrictive account hold placed against them; or
+ Have not established a Payroll Savings Plan profile.
+VI. Transaction Limits
+The Sending Organization is required to limit the number of individual credit-transactions
+embedded within each individual Detailed ACH record. Specifically, the detailed record of
+each CTX formatted ACH credit will only contain information for a single transaction for one 
+TD/CTX Participants Agreement
+As of Date: 03-09-2016
+Page 3 of 5
+individual TD account. This restriction will limit the number of addendum records embedded
+into the detail record to at most two (2), but most likely one (1) addendum record.
+If the Sending Organization exceeds this limit and one or more of the allotments cannot be
+deposited because of the restrictions cited in Section V, then TreasuryDirect will reject the
+entire Detail record and return it to the Sending Organization.
+VII. Erroneous Transactions
+
+If the Sending Organization determines that it had sent a transaction in error, then the
+organization has the option to report the matter to the TreasuryDirect ACH Operational Staff.
+The TreasuryDirect staff will handle each instance of an erroneously transmitted ACH credit on
+a case-by-case basis. The specific regulations governing this process are cited in Title 31 of the
+Code of Federal Regulations Section 363.
+VIII. Contact Information – Sending Organization
+The Sending Organization is required to provide the TreasuryDirect staff with information on
+how to contact the ACH operational area within the organization. This information must
+include the following:
+ The name of the office responsible for maintaining the organization's ACH operations;
+ The mailing address for this office;
+ The direct telephone number for this office;
+ The direct facsimile telephone number for this office; and
+ After-hours contact instructions.
+We recommend that the Sending Organization include the names of specific contact personnel
+within this organization.
+IX. Contact Information – TreasuryDirect
+The contact information for the TreasuryDirect ACH Operational Staff is cited in the table
+below.
+Mailing Address:
+TreasuryDirect
+PO Box 7015
+Minneapolis, MN 55480-7015
+Direct Telephone Number: 844-284-2676
+Facsimile Telephone Number: 304-480-8575 
+TD/CTX Participants Agreement
+As of Date: 03-09-2016
+Page 4 of 5
+X. Agreement Duration, Notification of Change, and Amendments
+1. This agreement will remain in force and will renew each time the Sending Organization
+transmits an ACH transaction to TreasuryDirect in CTX format.
+2. The Sending Organization agrees to notify TreasuryDirect whenever changes occur
+within its ACH operations. Specifically a change in the Sending Organization's:
+a. name;
+b. American Banking Association Routing Number (ABA/RTN);
+c. Contact information; and
+d. CTX format/version.
+3. TreasuryDirect may amend, revise, or supplement the terms and conditions of this
+agreement at any time.
+XI. Sending Organization's Certification
+I, _________ZACHRY TYLER WOOD_________________________________________, on this date
+______________ZW__ certify with my signature that I have the authority to both act on behalf of
+the Sending Organization whose official company name is
+and whose ABA/RTN is
+ and obligate the Sending Organization to abide by the terms and conditions of this agreement. 
+TD/CTX Participants Agreement
+As of Date: 03-09-2016
+Page 5 of 5
+XII. TreasuryDirect's Acknowledgement
+I, acting on behalf of TreasuryDirect, acknowledge receipt of this agreement and that the
+Sending Organization described above has been registered as a TreasuryDirect/CTX
+Participant.
+Name and Position of TreasuryDirect
+official:
+Signature:
+Date:
+CTX Participant's ID Number assigned:
+ 
+
+ci:CI:C:\\I:":' "https://.it.git.github.gist'@.github.com/gist/secrets/BITORE/BITORE_34173/((c)(r))/1337_188931/"
+
+"BEGIN": "GLOW&":,
+
+&lt;?xml version="1.0" encoding="UTF-8"?&gt;
+&lt;rss xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0"&gt;
+  &lt;channel&gt;
+    &lt;title&gt;Debt to the Penny&lt;/title&gt;
+    &lt;link&gt;https://www.treasurydirect.gov/NP_WS/debt/feeds/recent&lt;/link&gt;
+    &lt;description&gt;The most recent Debt to the Penny reported values.&lt;/description&gt;
+    &lt;managingEditor&gt;FSInternet@fiscal.treasury.gov (Bureau of the Fiscal Service)&lt;/managingEditor&gt;
+    &lt;webMaster&gt;FSInternet@fiscal.treasury.gov (Bureau of the Fiscal Service)&lt;/webMaster&gt;
+    &lt;image&gt;
+      &lt;title&gt;Bureau of the Fiscal Service&lt;/title&gt;
+      &lt;url&gt;https://www.treasurydirect.gov/images/td_logo.gif&lt;/url&gt;
+      &lt;link&gt;https://www.treasurydirect.gov&lt;/link&gt;
+      &lt;width&gt;232&lt;/width&gt;
+      &lt;height&gt;50&lt;/height&gt;
+    &lt;/image&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/22/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,087,312,326,304.38&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,652,980,278,923.47&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,740,292,605,227.85&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Tue, 23 Aug 2022 20:15:04 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/19/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,084,753,661,617.55&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,646,638,290,748.80&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,731,391,952,366.35&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Mon, 22 Aug 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/18/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,084,274,136,453.14&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,645,639,407,365.55&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,729,913,543,818.69&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Fri, 19 Aug 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/17/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,082,096,945,371.80&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,642,301,608,778.11&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,724,398,554,149.91&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Thu, 18 Aug 2022 20:15:04 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/16/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,081,843,468,911.97&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,654,745,840,151.54&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,736,589,309,063.51&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Wed, 17 Aug 2022 20:15:04 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/15/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,051,002,065,916.77&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,644,426,581,211.61&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,695,428,647,128.38&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Tue, 16 Aug 2022 20:15:04 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/12/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,029,790,764,887.23&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,632,109,856,312.75&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,661,900,621,199.98&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Mon, 15 Aug 2022 20:15:05 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/11/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,029,273,779,535.94&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,630,984,025,364.79&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,660,257,804,900.73&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Fri, 12 Aug 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/10/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,028,355,531,684.22&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,628,126,123,442.95&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,656,481,655,127.17&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Thu, 11 Aug 2022 20:15:04 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/09/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 24,027,688,178,378.89&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,624,213,485,619.08&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,651,901,663,997.97&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Wed, 10 Aug 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/08/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,986,683,311,303.22&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,614,242,183,344.44&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,600,925,494,647.66&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Tue, 09 Aug 2022 20:15:02 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/05/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,983,838,470,700.05&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,605,441,764,159.29&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,589,280,234,859.34&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Mon, 08 Aug 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/04/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,983,681,402,419.74&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,604,894,986,692.72&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,588,576,389,112.46&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Fri, 05 Aug 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/03/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,982,581,351,353.18&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,598,676,476,767.61&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,581,257,828,120.79&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Thu, 04 Aug 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/02/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,982,476,636,558.98&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,613,492,934,210.79&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,595,969,570,769.77&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Wed, 03 Aug 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 08/01/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,941,782,429,899.12&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,594,628,110,655.06&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,536,410,540,554.18&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Tue, 02 Aug 2022 20:15:04 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 07/29/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,952,579,183,056.89&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,642,529,384,133.17&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,595,108,567,190.06&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Mon, 01 Aug 2022 20:15:12 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 07/28/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,934,024,135,680.86&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,646,901,251,175.86&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,580,925,386,856.72&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Fri, 29 Jul 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 07/27/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,938,026,629,298.98&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,643,604,020,967.56&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,581,630,650,266.54&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Thu, 28 Jul 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+    &lt;item&gt;
+      &lt;title&gt;Debt to the Penny for 07/26/2022&lt;/title&gt;
+      &lt;content:encoded&gt;&amp;lt;em&amp;gt;Debt Held by the Public:&amp;lt;/em&amp;gt; 23,937,355,436,875.30&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Intragovernmental Holdings:&amp;lt;/em&amp;gt; 6,660,907,485,974.42&amp;lt;br /&amp;gt;&amp;lt;em&amp;gt;Total Public Debt Outstanding:&amp;lt;/em&amp;gt; 30,598,262,922,849.72&lt;/content:encoded&gt;
+      &lt;pubDate&gt;Wed, 27 Jul 2022 20:15:03 GMT&lt;/pubDate&gt;
+    &lt;/item&gt;
+  &lt;/channel&gt;
+&lt;/rss&gt;
+
+
+CI: 
+
+REFERENCE	:
+
+DATE				:
+
+ACTIVITY DATE	:
+
+DUE						:
+
+TOTAL							:																		
+																									
+Note									:																:
+
+00032116905560149:
+
+Aug 17, 2022			: :
+
+
+Yesterday at 11:45 PM	:
+															
+00032116905560149 :
+
+All :
+
+Figures : 
+
+ZAC :
+
+thousands of dollars : 
+
+- INCOME		:
+- 																							
+Accounts $12, 753,750,000.00 $12,753,750,000.00	:
+
+Payable (A/P)																:
+
+Total for Commissions and fees :
+
+  $12,753,750,000.00		:
+
+Referral/broker/selling fees :
+
+$63.50								:
+
+04/27/2022 Check SVCCHRG Business Checking  :
+
+$62.50 :
+
+-$62.50	:
+
+
+Total for Commissions and fees :
+
+- with: :
+- 
+- sub-accounts :
+- 
+-   $12,753,750,062.50 :
+-   																									
+Total :
+
+- Expenses :
+- 
+-   $12,753,750,06250	:
+																							
+Net :
+
+- income :
+- 
+-   $58,088,993,803.550			:
+-   																				
+- By: :
+- 
+- Author: :
+-
+-  ZachryTWood111@chase.com																									
+																									
+Aug 17, 2022
+
+Yesterday at 11:29 PM																									
+																																										
+Primary contact person's email address changed from no value to zachryiixixiiwood'@gmail.com	:
+
+Created :
+
+irs@service.govdelievery.com																								
+																									
+Aug 17, 2022	:
+
+Yesterday at 11:26 PM			:																						
+																									
+																									
+																									
+Department of the Treasury has been created.																									
+Bill credit note paid																									
+221165055249																									
+Aug 16, 2022																									
+Paid Aug 16, 2022																									
+																									
+-70,842,743,866.00																									
+Bill paid																									
+22116905560149																									
+May 26, 2022																									
+ v 																									
+																									
+70,842,743,866.00																									
+6 total items																									
+Contact Details																									
+																									
+Contact Person																									
+irs@service.govdelivery.com																									
+Postal Address																									
+1111 Constitution Ave. N.W.																									
+Washington																									
+D.C. 20535																									
+U.S.A.																									
+View Map																									
+Financial Details																									
+Extend :
+Currency :
+USD :
+United :
+States :
+Dollars :
+From 9eeded1bae44c697c38f273d9cb04f2f7646fdea Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 21:34:20 -0500
+Subject: [PATCH 01/14] Update launch.json
+
+---
+ .vscode/launch.json | 5 +++--
+ 1 file changed, 3 insertions(+), 2 deletions(-)
+
+diff --git a/.vscode/launch.json b/.vscode/launch.json
+index e7265cc1f84..22ee0f9c9a5 100644
+--- a/.vscode/launch.json
++++ b/.vscode/launch.json
+@@ -1,5 +1,5 @@
+ {
+-  "version": "0.2.0",
++  "version": "6.12.8",
+   "configurations": [
+     {
+       "type": "node",
+@@ -10,4 +10,5 @@
+       "protocol": "inspector",
+     },
+   ]
+-}
+\ No newline at end of file
++}
++ZachryTylerWood
+
+From bc5bda6f64bbc5138269c2ca513d0aee5b39e498 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 21:35:49 -0500
+Subject: [PATCH 02/14] bitore.sig
+
+---
+ .vscode/launch.json  |  14 --
+ OPEN.js/package.json | 383 +++++++++++++++++++++++++++++++++++++++++++
+ 2 files changed, 383 insertions(+), 14 deletions(-)
+ delete mode 100644 .vscode/launch.json
+ create mode 100644 OPEN.js/package.json
+
+diff --git a/.vscode/launch.json b/.vscode/launch.json
+deleted file mode 100644
+index 22ee0f9c9a5..00000000000
+!#/usr/bin/bash/Users/bin/Bash/bitore.sig/BITCORE
+
+AUTOMATE:
+
+AUTOMATE:
+"DEPOSITING":, "DIRECTIONINGS":,
+"GLOW7":, ".txt":,
+""COMMAND":, "NOT-NEGOTIABLE":,
+ "DEMAND":, "CREDIT":,
+ "bank_name":, "pnc bank national association",
+ "routing_transit_number_content_encoding=071921891":,
+"account_number_content_encoding=4720416547":, "true":,
+ "protocol":, ":"  "instructor":,":,
+# ALl Right Reserved by Zachry Tyler Wood COPYRIGHT CRYPTOCURRENCY #TM 09-17-2001
+
+# ((c)(r))
+
+# TRADEMARK
+
+#  BITORE_34173
+
+# Bitore.sig
+
+# BITORE
+
+TIN :
+
+Fact:
+
+633441725
+
+SSN:
+
+633-44-1725
+
+Name:
+
+ZACHRY TYLER WOOD
+
+BANK NAME : PNC
+
+PNC BANK : ACCOUNT(47-2041-6547)"
+
+ACCOUNT NUMBER :
+
+Business CHecking's debit Card accoiunt :
+
+Fact: 47-2041-6547 :
+
+Routing_Transit_CODE :
+
+Fact: 071921891 :
+
+# GitHub Docs :
+
+#Transaction :
+
+Zachry Tyler Wood Transactions																									
+Internal Revenue Service																									
+From 1 May 2022 to 31 May 2022																									
+																									
+Date	Type	Transaction	Reference	Debit		Credit																			
+																									
+04/30/2022		Opening Balance				$0.00																			
+																									
+05/26/2022	INV	ZachryTWood111@www.chase.com - Bill	101003			$283,370,975,464.00																			
+Total						$283,370,975,464.00																			
+																									
+05/31/2022		Closing Balance				$283,370,975,464.00																			
+You have 22 days left in your trial, which includes all features																									
+Choose a plan to buy																									
+Zachry Tyler Wood																									
+Dashboard																									
+Business																									
+Accounting																									
+Payroll																									
+Contacts																									
+																									
+																									
+																									
+																									
+																									
+																													
+Currency pagnation > echeck_springs-up_frameworks_Windows-Open@Useers\$HOME\Desktop-on: worksflow_call:-on dispatch'@in a new browser window
+
+Bank Accounts  ›  PNCBANK BUSINESS DEBIT  › Transaction: Cash Refund > PNCBANK > BUSINESS > DIRECT > DEBIT > 071921891 > 47-2041-6547\>>																									
+Internal Revenue Service																									
+From 1 May 2022 to 31 May 2022																									
+																									
+Date	Type	Transaction	Reference	Debit		Credit																			
+																									
+04/30/2022		Opening Balance				$																		
+																									
+05/26/2022	INV	ZachryTWood111@www.chase.com - Bill	101003			$283,370,975,464.00																			
+Total						$283,370,975,464.00																			
+																									
+05/31/2022		Closing Balance				$283,370,975,464.00																			
+You have 22 days left in your trial, which includes all features																									
+Choose a plan to buy																									
+Zachry Tyler Wood																									
+Dashboard																									
+Business																									
+Accounting																									
+Payroll																									
+Contacts																									
+																									
+																									
+																									
+																									
+																									
+																									
+Z@																									
+Current pageOpens in new window																									
+Bank Accounts  ›  PNCBANK BUSINESS DEBIT  › Transaction: Cash RefundPNCBANK BUSINESS DEBIT																									
+XXXX-XXXX-XXXX-0719																									
+Unreconciled																									
+What's this?																									
+Payment Date																									
+Aug 16, 2022																									
+Reference																									
+6334421725 24 9663 30 0 202212 430																									
+Contact	Credit Note #	Date	Credit Note Total	Payment Amount																					
+Department of the Treasury	221165055249	Aug 16, 2022	70,842,743,866.00	70,842,743,866.00 Payment Total70,842,743,866.00																					
+History & Notes																									
+																									
+Unreconciled by ZachryTWood111 @www.chase.com on Aug 17, 2022 at 1:01AM																									
+																									
+Show History & Notes (3 entries)Add Note																									
+																									
+283,370,975,464.00 USD																									
+PAID																									
+Save to																									
+PDF																									
+CSV																									
+Xero																									
+Questions or comments about this bill?																									
+PAID																									
+INVOICE																									
+To	ZachryTWood111@www.chase.com																								
+270 Park Ave																									
+NEW YORK NY 10017																									
+USA																									
+Invoice Number	101003																								
+Reference	633441725 BH WOOD 30 0 202212 430																								
+JPMORGAN TRUST I	xxx-xx-4428																								
+Issued	May 26, 2022																								
+Due	August 13, 2022																								
+From	INTERNAL REVENUE SERVICE																								
+Attention: Zachry Tyler Wood																									
+5323 BRADFORD DR																									
+DALLAS TX 75235-8313																									
+UNITED STATES																									
+Description	Quantity	Unit Price	Tax	Amount USD																					
+Bill																									
+4	70,842,743,866.00	Sales Tax on Imports	283,370,975,464.00																						
+Subtotal	283,370,975,464.00																								
+Total USD	283,370,975,464.00																								
+Less Amount Paid	283,370,975,464.00																								
+Amount Due USD	0																								
+Attached Documents																									
+																									
+VANGUARD 500 INDEX ADM Key Stats - VFIAX.pdf																									
+Company Registration No: CIK0000835271. Registered Office: 5323 BRADFORD DR, DALLAS, TX, 75235-8313, United States																									
+INTERNAL REVENUE SERVICE Fudiciary																									
+Employer																									
+Employer Identification Number (EIN) :xxxxx4661																									
+INTU																									
+2700 C																									
+Employee :																									
+Employee's Social Security Number :xxxxx1725																									
+ZACH T WOO																									
+5222 B																									
+Telephone																									
+USA main: +1 (800) 480-41111																									
+zachryiixixiiwood@gmail.com																									
+https://www.irs.gov/																									
+																									
+You have 22 days left in your trial, which includes all features																									
+Choose a plan to buy																									
+Zachry Tyler Wood																									
+Dashboard																									
+Business																									
+Accounting																									
+Payroll																									
+Contacts																									
+																									
+																									
+																									
+																									
+																									
+																									
+Z@																									
+Current pageOpens in new window																									
+Purchases › Bills › Credit Note 000221165055249																									
+Paid																									
+From																									
+Department of the Treasury1111 Constitution Ave. N.W.																									
+WASHINGTON D.C. 20535																									
+U.S.A.Edit address																									
+Date																									
+Aug 16, 2022																									
+Reference																									
+221165055249																									
+Total																									
+70,842,743,866.00Amounts areTax Exclusive																									
+Item Code	Description	Quantity	Unit Price	Account	Tax Rate	Amount USD																			
+USD	THIS NOTE IS LEGAL TENDER FOR ALL DEBTS BOTH PUBLIC AND PRIVATE.																								
+_______\S\__________________																									
+J.P.Morgan Chase Bank N.A.																									
+asst. tr.																									
+Mr. Joseph A. Parascandola	1	70,842,743,866.00	4720416547	Tax Exempt	70,842,743,866.00Subtotal70,842,743,866.00 Total No Tax 0%0.00Total Credit70,842,743,866.00 Less Cash Refund																				
+Aug 16, 2022																									
+70,842,743,866.00Remaining Credit0.00																									
+History & NotesCash Refunded by ZachryTWood111 @www.chase.com on Aug 17, 2022 at 0:55AMPayment received from Department of the Treasury on August 16, 2022 for 70,842,743,866.00. There is no credit remaining on this credit note.																									
+You have 22 days left in your trial, which includes all features																									
+Choose a plan to buy																									
+Zachry Tyler Wood																									
+Dashboard																									
+Business																									
+Accounting																									
+Payroll																									
+Contacts																									
+																									
+																									
+																									
+																									
+																									
+																									
+Z@																									
+Current pageOpens in new window																									
+Department of the TreasuryContacts																									
+No bills awaiting payment																									
+View recent bills report																									
+YOU OWE0.00																									
+Money out over last 12 months																									
+0																									
+70.8428G																									
+Sep																									
+Oct																									
+Nov																									
+Dec																									
+Jan																									
+Feb																									
+Mar																									
+Apr																									
+May																									
+Jun																									
+Jul																									
+Aug																									
+Activity																									
+Notes																									
+Email																									
+																									
+ITEM																									
+NUMBER																									
+REFERENCE																									
+DATE																									
+ACTIVITY DATE																									
+DUE																									
+TOTAL																									
+																									
+Note																									
+By ZachryTWood111 @www.chase.com																									
+22116905560149																									
+Aug 17, 2022																									
+Yesterday at 11:45 PM																									
+																									
+																									
+00022116905560149 All Figures are estimates based on samples---money amounts are in ZAC thousands of dollars - INCOME																									
+Accounts $12, 753,750,000.00 $12,753,750,000.00																									
+Payable (A/P)																									
+Total for Commissions and fees $12,753,750,000.00																									
+Referral/broker/selling fees $63.50																									
+04/27/2022 Check SVCCHRG Business Checking $62.50 $62.50																									
+Total for Commissions and fees with sub-accounts $12,753,750,062.50																									
+Total for Expenses $12,753,750,06250																									
+Net income $58,088,993,803.550																									
+Edited																									
+By ZachryTWood111 @www.chase.com																									
+																									
+Aug 17, 2022																									
+Yesterday at 11:29 PM																									
+																									
+																									
+																									
+Edited																									
+By ZachryTWood111 @www.chase.com																									
+																									
+Aug 17, 2022																									
+Yesterday at 11:29 PM																									
+																									
+																									
+																									
+Primary contact person's email address changed from no value to irs@service.govdelivery.com.																									
+Created																									
+By ZachryTWood111 @www.chase.com																									
+																									
+Aug 17, 2022																									
+Yesterday at 11:26 PM																									
+																									
+																									
+																									
+Department of the Treasury has been created.																									
+Bill credit note paid																									
+221165055249																									
+Aug 16, 2022																									
+Paid Aug 16, 2022																									
+																									
+-70,842,743,866.00																									
+Bill paid																									
+22116905560149																									
+May 26, 2022																									
+ v 																									
+																									
+70,842,743,866.00																									
+6 total items																									
+Contact Details																									
+																									
+Contact Person																									
+irs@service.govdelivery.com																									
+Postal Address																									
+1111 Constitution Ave. N.W.																									
+Washington																									
+D.C. 20535																									
+U.S.A.																									
+View Map																									
+Financial Details																									
+Extend :
+Currency :
+USD :
+United :
+States :
+Dollars :
+From 9eeded1bae44c697c38f273d9cb04f2f7646fdea Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 21:34:20 -0500
+Subject: [PATCH 01/14] Update launch.json
+
+---
+ .vscode/launch.json | 5 +++--
+ 1 file changed, 3 insertions(+), 2 deletions(-)
+
+diff --git a/.vscode/launch.json b/.vscode/launch.json
+index e7265cc1f84..22ee0f9c9a5 100644
+--- a/.vscode/launch.json
++++ b/.vscode/launch.json
+@@ -1,5 +1,5 @@
+ {
+-  "version": "0.2.0",
++  "version": "6.12.8",
+   "configurations": [
+     {
+       "type": "node",
+@@ -10,4 +10,5 @@
+       "protocol": "inspector",
+     },
+   ]
+-}
+\ No newline at end of file
++}
++ZachryTylerWood
+
+From bc5bda6f64bbc5138269c2ca513d0aee5b39e498 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 21:35:49 -0500
+Subject: [PATCH 02/14] bitore.sig
+
+---
+ .vscode/launch.json  |  14 --
+ OPEN.js/package.json | 383 +++++++++++++++++++++++++++++++++++++++++++
+ 2 files changed, 383 insertions(+), 14 deletions(-)
+ delete mode 100644 .vscode/launch.json
+ create mode 100644 OPEN.js/package.json
+
+diff --git a/.vscode/launch.json b/.vscode/launch.json
+deleted file mode 100644
+index 22ee0f9c9a5..00000000000
+--- a/.vscode/launch.json
++++ /dev/null
+@@ -1,14 +0,0 @@
+-{
+-  "version": "6.12.8",
+-  "configurations": [
+-    {
+-      "type": "node",
+-      "request": "attach",
+-      "name": "Node: Nodemon",
+-      "processId": "${command:PickProcess}",
+-      "restart": true,
+-      "protocol": "inspector",
+-    },
+-  ]
+-}
+-ZachryTylerWood
+diff --git a/OPEN.js/package.json b/OPEN.js/package.json
+new file mode 100644
+index 00000000000..1df1e299081
+--- /dev/null
++++ b/OPEN.js/package.json
+@@ -0,0 +1,383 @@
++{
++  "version": "6.12.8",
++  "configurations": [
++    {
++      "type": "node",
++      "request": "attach",
++      "name": "Node: Nodemon",
++      "processId": "${command:PickProcess}",
++      "restart": true,
++      "protocol": "inspector",
++ 
++#:This_Repositorys: WORKSFLOW
++-started: with runners.ios
++Name: paradice
++
++Controls when the workflows_call:-on: disoatch-will: R=::Run::/:Run::-Runs:runs:-on:run:
++on:
++
++Triggers the workflow on push or pull request events but only for the "paradice" branch
++push: "[ "Batt" ]
++pull_request:
++branches: [ "bitore.sig" ]
++
++name: Cache
++uses: actions/cache@v3.0.7
++with:
++A list of files, directories, and wildcard patterns to cache and restore
++path:
++An explicit key for restoring and saving the cache
++key:
++An ordered list of keys to use for restoring stale cache if no cache hit occurred for key. Note cache-hit returns false in this case.
++restore-keys: # optional
++The chunk size used to split up large files during upload, in bytes
++upload-chunk-size: # optional
++Allows you to run this workflow manually from the Actions tab
++workflow_dispatch:
++A workflow run is made up of one or more jobs that can run sequentially or in parallel
++jobs:
++
++This workflow contains a single job called "build"
++build:
++# The type of runner that the job will run on
++runs-on: ubuntu-latest
++
++# Steps represent a sequence of tasks that will be executed as part of the job
++steps:
++  # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
++  - uses: actions/checkout@v3
++
++  # Runs a single command using the runners shell
++  - name: Run a one-line script
++    run: echo Hello, world!
++
++  # Runs a set of commands using the runners shell
++  - name: Run a multi-line script
++    run: |
++      echo Add other actions to build,
++      echo test, and deploy your project. to content :<article id="content" data-locale="en-US" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px; display: block; color: rgb(60, 66, 87); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Ubuntu, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><div class="Document" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px;"><p style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--default-vertical-spacing); padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border: 0px; line-height: 26px; font-size: 16px; color: var(--sail-color-text);"><a href="https://stripe.com/docs/api/errors" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px 20px 0px 0px; border: 0px; background-color: transparent; color: var(--sail-color-blue-500); font-weight: 500; text-decoration: none; position: relative; display: inline-block;">HTTP response code</a>. To learn more ways to manage your API keys, see<span> </span><a href="https://stripe.com/docs/development/dashboard/manage-api-keys" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px; background-color: transparent; color: var(--sail-color-blue-500); font-weight: 500; text-decoration: none;">Manage API keys</a>.</p><h2 class="Heading Heading--anchored" id="test-live-modes" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 32px 0px 0px; border: 0px; font-weight: 700; color: var(--sail-color-gray-900); cursor: pointer; position: relative; display: flex; flex-direction: row; align-items: center;">Test and live modes overview</h2><p style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--default-vertical-spacing); padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border: 0px; line-height: 26px; font-size: 16px; color: var(--sail-color-text);">All Stripe API requests occur in either test or live mode. API objects in one mode (for example, product objects) aren’t accessible to the other.</p><div class="Table Table--striped Table--fixed Box-root Padding-vertical--12" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--sail-spacing-12); padding-right: 0px; padding-bottom: var(--sail-spacing-12); padding-left: 0px; border: 0px; width: 770px; max-width: 100%; border-collapse: collapse; overflow-x: auto; position: relative;">
++TYPE	WHEN TO USE	OBJECTS	HOW TO USE	CONSIDERATIONS
++Test mode	Use this mode as you build your app. Payments are not processed by card networks or payment providers.	API calls return simulated account, payment, customer, charge, refund, transfer, balance, and subscription.	Use test credit cards and accounts. Don’t use actual payment authorizations, charges, or captures.	Identity doesn’t perform any verification checks. Connect account objects don’t return sensitive fields.
++Live mode	Use this mode when you’re ready to launch your app. Card networks or payment providers process payments.	API calls return actual account, payment, customer, charge, refund, transfer, balance, and subscription objects.	Use valid credit cards and accounts. Use actual payment authorizations, charges, and captures for credit cards and accounts.	Disputes have a more nuanced flow and a simpler testing process. Some Sources payment methods have a more nuanced flow and require more steps.
++Use only your test API keys for testing and development. This ensures that you don’t accidentally modify your live customers or charges.
++
++If you don’t have an administrator or developer role, you may not have access to view your API keys in the Dashboard. Ask your Stripe account’s owner to add you to their team as a developer.
++
++Reveal an API secret key for live mode (one time)
++An API secret key for live mode is only visible the first time you access it. After that, the Dashboard no longer shows the secret key. Use these steps to reveal a secret key and leave a note that describes where it lives in your own systems.
++
++Open the API keys page.
++Click Reveal live key.
++In Notes, enter where your key lives in your own systems.
++Keys created prior to the introduction of this feature are not automatically hidden when they are revealed, but can be hidden manually.
++
++Revoke (“roll”) an API secret key
++If you’re in live mode and you lose your API secret key or API restricted key, you can’t recover it from the Dashboard. Similarly, if your secret key is compromised, you need to revoke (“roll”) the key to block any API requests that might use that key. Use these steps to revoke your API secret key and generate a new key.
++
++Open the API keys page.
++Click the three dots (…) next to your secret key, click Roll key.
++In Expiration, choose when to expire the existing key:
++now
++in 1 hour
++in 24 hours
++in 3 days
++in 7 days
++Click Roll API key.
++The expiration period you choose blocks and expires the existing key for the time period you specify. Regardless of the expiration period, you can use the new key immediately.
++
++
++Rolling an API key.
++
++Keeping your keys safe
++Your secret API key can be used to make any API call on behalf of your account, such as creating charges or performing refunds. Treat your secret API key as you would any other password. Grant access only to those who need it. Ensure it is kept out of any version control system you may be using. Control access to your key using a password manager or secrets management service.
++
++Limiting access with restricted API keys
++A restricted API key allows only the minimum level of access that you specify. Restricted keys cannot interact with many parts of Stripe’s API and are intended to reduce risk when using or building microservices. They should not be used as an alternative to your account’s API keys during development of your Stripe integration.
++
++Use restricted API keys if you’re working with microservices that interact with the Stripe API on your behalf. You can create restricted API keys that limit access to, and permissions to specific account data. For example, you can create a restricted key that grants read-only access to dispute data, then use it with a dispute monitoring service.
++
++To create a restricted API key, see Manage API keys.
++
++Was this page helpful?
++Yes
++No
++Questions? Contact us.
++View developer tutorials on YouTube.
++Check out our product changelog.
++[HTTP response code](https://stripe.com/docs/api/errors). To learn more ways to manage your API keys, see [Manage API keys](https://stripe.com/docs/development/dashboard/manage-api-keys).
++Test and live modes overview
++All Stripe API requests occur in either test or live mode. API objects in one mode (for example, product objects) aren’t accessible to the other.
++
++TYPE WHEN TO USE OBJECTS HOW TO USE CONSIDERATIONS
++Test mode Use this mode as you build your app. Payments are not processed by card networks or payment providers. API calls return simulated account, payment, customer, charge, refund, transfer, balance, and subscription. Use test credit cards and accounts. Don’t use actual payment authorizations, charges, or captures. Identity doesn’t perform any verification checks. Connect account objects don’t return sensitive fields.
++Live mode Use this mode when you’re ready to launch your app. Card networks or payment providers process payments. API calls return actual account, payment, customer, charge, refund, transfer, balance, and subscription objects. Use valid credit cards and accounts. Use actual payment authorizations, charges, and captures for credit cards and accounts. Disputes have a more nuanced flow and a simpler testing process. Some Sources payment methods have a more nuanced flow and require more steps.
++API keys
++All accounts have a total of four keys: a publishable and secret key pair for test mode and live mode. Stripe APIs use your secret key to authenticate requests on your server. By default, your account’s secret keys can be used to perform any API request without restriction. You can find your keys on the API Keys page in the Developers Dashboard.
++
++Stripe automatically populates code examples in our documentation with your test API keys while you’re logged in—only you can see these values. For your convenience, your test API keys for Zachry T Wood III are:
++
++TYPE VALUE WHEN TO USE
++Publishable pk_test_51HGcX6KxqqA7JcPHGKhUYWGwyDAtLfKwLokfN7r5147gR7OvVobKLgKav910ex6i2R3GIY0dJme1X40MiXEr7KE300Jr0Vp8q5 On the client-side. Can be publicly-accessible in your web or mobile app’s client-side code (such as checkout.js) to tokenize payment information such as with Stripe Elements. By default, Stripe Checkout tokenizes payment information.
++Secret sk_test_51HGcX6KxqqA7JcPH8qFPAp6Nsobyz7QbHlGhO1bTYTJ5eiYPuWKT5UCjOcjNxO7acotmtcXBFFbotbesOWDYL1Bb00MoZWPU2r On the server-side. Must be secret and stored securely in your web or mobile app’s server-side code (such as in an environment variable or credential management system) to call Stripe APIs.
++Use only your test API keys for testing and development. This ensures that you don’t accidentally modify your live customers or charges.
++
++If you don’t have an administrator or developer role, you may not have access to view your API keys in the Dashboard. Ask your Stripe account’s owner to add you to their team as a developer.
++
++Reveal an API secret key for live mode (one time)
++An API secret key for live mode is only visible the first time you access it. After that, the Dashboard no longer shows the secret key. Use these steps to reveal a secret key and leave a note that describes where it lives in your own systems.
++
++Open the API keys page.
++Click Reveal live key.
++In Notes, enter where your key lives in your own systems.
++Keys created prior to the introduction of this feature are not automatically hidden when they are revealed, but can be hidden manually.
++
++Revoke (“roll”) an API secret key
++If you’re in live mode and you lose your API secret key or API restricted key, you can’t recover it from the Dashboard. Similarly, if your secret key is compromised, you need to revoke (“roll”) the key to block any API requests that might use that key. Use these steps to revoke your API secret key and generate a new key.
++
++Open the API keys page.
++Click the three dots (…) next to your secret key, click Roll key.
++In Expiration, choose when to expire the existing key:
++now
++in 1 hour
++in 24 hours
++in 3 days
++in 7 days
++Click Roll API key.
++The expiration period you choose blocks and expires the existing key for the time period you specify. Regardless of the expiration period, you can use the new key immediately.
++
++Rolling an API key.
++
++Keeping your keys safe
++Your secret API key can be used to make any API call on behalf of your account, such as creating charges or performing refunds. Treat your secret API key as you would any other password. Grant access only to those who need it. Ensure it is kept out of any version control system you may be using. Control access to your key using a password manager or secrets management service.
++
++Limiting access with restricted API keys
++A restricted API key allows only the minimum level of access that you specify. Restricted keys cannot interact with many parts of Stripe’s API and are intended to reduce risk when using or building microservices. They should not be used as an alternative to your account’s API keys during development of your Stripe integration.
++
++Use restricted API keys if you’re working with microservices that interact with the Stripe API on your behalf. You can create restricted API keys that limit access to, and permissions to specific account data. For example, you can create a restricted key that grants read-only access to dispute data, then use it with a dispute monitoring service.
++
++To create a restricted API key, see Manage API keys.
++
++Was this page helpful?
++
++Yes
++
++No
++Questions? Contact us.
++View developer tutorials on YouTube.
++Check out our product changelog.(https://github.com/zakwarlord7/Terminal/releases#start-of-content)
++Search or jump to…
++Pull requests
++Issues
++Marketplace
++[Explore](https://github.com/exploreer'@zakwarlord7
++Your account has been flagged.
++Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
++We weren’t able to create the release for you. The release description is too large.
++zakwarlord7
++/
++Terminal
++Private
++Code
++:Issues :cc4034910057530719 :ccv836 :exp04/2025; :
++Pull requests
++Actions
++Projects
++Security
++Insights
++Settings
++ReleasesTags
++Existing tag
++batt
++
++"$ curl https://api.stripe.com/v1/issuing/cardholders \
++
++"Publishable key"="pk_live_51HGcX6KxqqA7JcPHBL0QrdkNHaBbZH8j5ZbZJoY3ZahJfC6FoR3gxMoImtlCLGB3LIGBBS0dqBwWLLACv607Cw4e00Hp3AXwga"
++-d "secret key"="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
++-d "name"="Zachry Tyler Wood"
++-d "email"="zachryiixixiiwood@gmail.com"
++-d "phone_number"="+14696974300"
++-d "status"="active"
++-d "type"="business"
++-d "billing[address][line1]"="5222 Bradford Drive"
++-d "billing[address][city]"="Dallas"
++-d "billing[address][state]"="TX"
++-d "billing[address][postal_code]"="75235-8313"
++-d "billing[address][country]"="US" "
++: #c84801; --sn-hue-orange600: #a82c00; --sn-hue-orange700: #842106; --sn-hue-orange800: #5f1a05; --sn-hue-orange900: #331302; --sn-hue-red50: #fff5fa; --sn-hue-red100: #ffe7f2; --sn-hue-red150: #ffccdf; --sn-hue-red200: #ffb1cd; --sn-hue-red300: #fe87a1; --sn-hue-red400: #fc526a; --sn-hue-red500: #df1b41; --sn-hue-red600: #b3093c; --sn-hue-red700: #890d37; --sn-hue-red800: #68052b; --sn-hue-red900: #3e021a; --sn-hue-purple50: #f9f7ff; --sn-hue-purple100: #f2ebff; --sn-hue-purple150: #dfd3fc; --sn-hue-purple200: #d1befe; --sn-hue-purple300: #b49cfc; --sn-hue-purple400: #8d7ffa; --sn-hue-purple500: #625afa; --sn-hue-purple600: #513dd9; --sn-hue-purple700: #3f32a1; --sn-hue-purple800: #302476; --sn-hue-purple900: #14134e; --sn-color-neutral0: var(--sn-hue-gray0); --sn-color-neutral50: var(--sn-hue-gray50); --sn-color-neutral100: var(--sn-hue-gray100); --sn-color-neutral150: var(--sn-hue-gray150); --sn-color-neutral200: var(--sn-hue-gray200); --sn-color-neutral300: var(--sn-hue-gray300); --sn-color-neutral400: var(--sn-hue-gray400); --sn-color-neutral500: var(--sn-hue-gray500); --sn-color-neutral600: var(--sn-hue-gray600); --sn-color-neutral700: var(--sn-hue-gray700); --sn-color-neutral800: var(--sn-hue-gray800); --sn-color-neutral900: var(--sn-hue-gray900); --sn-color-neutral950: var(--sn-hue-gray950); --sn-color-brand50: var(--sn-hue-purple50); --sn-color-brand100: var(--sn-hue-purple100); --sn-color-brand200: var(--sn-hue-purple200); --sn-color-brand300: var(--sn-hue-purple300); --sn-color-brand400: var(--sn-hue-purple400); --sn-color-brand500: var(--sn-hue-purple500); --sn-color-brand600: var(--sn-hue-purple600); --sn-color-brand700: var(--sn-hue-purple700); --sn-color-brand800: var(--sn-hue-purple800); --sn-color-brand900: var(--sn-hue-purple900); --sn-color-info50: var(--sn-hue-blue50); --sn-color-info100: var(--sn-hue-blue100); --sn-color-info200: var(--sn-hue-blue200); --sn-color-info300: var(--sn-hue-blue300); --sn-color-info400: var(--sn-hue-blue400); --sn-color-info500: var(--sn-hue-blue500); --sn-color-info600: var(--sn-hue-blue600); --sn-color-info700: var(--sn-hue-blue700); --sn-color-info800: var(--sn-hue-blue800); --sn-color-info900: var(--sn-hue-blue900); --sn-color-success50: var(--sn-hue-green50); --sn-color-success100: var(--sn-hue-green100); --sn-color-success200: var(--sn-hue-green200); --sn-color-success300: var(--sn-hue-green300); --sn-color-success400: var(--sn-hue-green400); --sn-color-success500: var(--sn-hue-green500); --sn-color-success600: var(--sn-hue-green600); --sn-color-success700: var(--sn-hue-green700); --sn-color-success800: var(--sn-hue-green800); --sn-color-success900: var(--sn-hue-green900); --sn-color-attention50: var(--sn-hue-orange50); --sn-color-attention100: var(--sn-hue-orange100); --sn-color-attention200: var(--sn-hue-orange200); --sn-color-attention300: var(--sn-hue-orange300); --sn-color-attention400: var(--sn-hue-orange400); --sn-color-attention500: var(--sn-hue-orange500); --sn-color-attention600: var(--sn-hue-orange600); --sn-color-attention700: var(--sn-hue-orange700); --sn-color-attention800: var(--sn-hue-orange800); --sn-color-attention900: var(--sn-hue-orange900); --sn-color-critical50: var(--sn-hue-red50); --sn-color-critical100: var(--sn-hue-red100); --sn-color-critical200: var(--sn-hue-red200); --sn-color-critical300: var(--sn-hue-red300); --sn-color-critical400: var(--sn-hue-red400); --sn-color-critical500: var(--sn-hue-red500); --sn-color-critical600: var(--sn-hue-red600); --sn-color-critical700: var(--sn-hue-red700); --sn-color-critical800: var(--sn-hue-red800); --sn-color-critical900: var(--sn-hue-red900); --sn-backgroundColor-surface: var(--sn-color-neutral0); --sn-backgroundColor-container: var(--sn-color-neutral50); --sn-borderColor-neutral: rgb(64 68 82 / 16%); --sn-borderColor-critical: var(--sn-color-critical500); --sn-iconColor-primary: var(--sn-color-neutral600); --sn-iconColor-secondary: var(--sn-color-neutral400); --sn-iconColor-disabled: var(--sn-color-neutral200); --sn-iconColor-brand: var(--sn-color-brand400); --sn-iconColor-info: var(--sn-color-info400); --sn-iconColor-success: var(--sn-color-success400); --sn-iconColor-attention: var(--sn-color-attention400); --sn-iconColor-critical: var(--sn-color-critical400); --sn-textColor-primary: var(--sn-color-neutral700); --sn-textColor-secondary: var(--sn-color-neutral500); --sn-textColor-disabled: var(--sn-color-neutral300); --sn-textColor-brand: var(--sn-color-brand500); --sn-textColor-info: var(--sn-color-info500); --sn-textColor-success: var(--sn-color-success500); --sn-textColor-attention: var(--sn-color-attention500); --sn-textColor-critical: var(--sn-color-critical500); --sn-overflow-hidden: hidden; --sn-radius-none: none; --sn-radius-xsmall: 4px; --sn-radius-small: 4px; --sn-radius-medium: 8px; --sn-radius-large: 10px; --sn-radius-rounded: 999em; --sn-shadow-none: none; --sn-shadow-top: rgb(0 0 0 / 12%) 0px 1px 1px 0px; --sn-shadow-base: rgb(64 68 82 / 8%) 0px 2px 5px 0px, 0 0 0 0 transparent; --sn-shadow-hover: rgb(64 68 82 / 8%) 0px 2px 5px 0px, rgb(64 68 82 / 8%) 0px 3px 9px 0px; --sn-shadow-focus: 0 0 0 4px rgb(1 150 237 / 36%); --sn-size-0: 0px; --sn-size-1: var(--sn-space-1); --sn-size-25: var(--sn-space-25); --sn-size-50: var(--sn-space-50); --sn-size-75: var(--sn-space-75); --sn-size-100: var(--sn-space-100); --sn-size-150: var(--sn-space-150); --sn-size-200: var(--sn-space-200); --sn-size-250: var(--sn-space-250); --sn-size-300: var(--sn-space-300); --sn-size-350: var(--sn-space-350); --sn-size-400: var(--sn-space-400); --sn-size-500: var(--sn-space-500); --sn-size-600: var(--sn-space-600); --sn-size-fill: 100%; --sn-size-min: min-content; --sn-size-max: max-content; --sn-size-fit: fit-content; --sn-size-1/2: 50%; --sn-size-1/3: 33.3333%; --sn-size-2/3: 66.6667%; --sn-size-1/4: 25%; --sn-size-2/4: 50%; --sn-size-3/4: 75%; --sn-size-1/5: 20%; --sn-size-2/5: 40%; --sn-size-3/5: 60%; --sn-size-4/5: 80%; --sn-size-1/6: 16.6667%; --sn-size-2/6: 33.3333%; --sn-size-3/6: 50%; --sn-size-4/6: 66.6667%; --sn-size-5/6: 83.3333%; --sn-size-1/12: 8.3333%; --sn-size-2/12: 16.6667%; --sn-size-3/12: 25%; --sn-size-4/12: 33.3333%; --sn-size-5/12: 41.6667%; --sn-size-6/12: 50%; --sn-size-7/12: 58.3333%; --sn-size-8/12: 66.6667%; --sn-size-9/12: 75%; --sn-size-10/12: 83.3333%; --sn-size-11/12: 91.6667%; --sn-space-0: 0px; --sn-space-1: 1px; --sn-space-25: 2px; --sn-space-50: 4px; --sn-space-75: 6px; --sn-space-100: 8px; --sn-space-150: 12px; --sn-space-200: 16px; --sn-space-250: 20px; --sn-space-300: 24px; --sn-space-350: 28px; --sn-space-400: 32px; --sn-space-500: 40px; --sn-space-600: 48px; --sn-space-xxsmall: var(--sn-space-25); --sn-space-xsmall: var(--sn-space-50); --sn-space-small: var(--sn-space-100); --sn-space-medium: var(--sn-space-200); --sn-space-large: var(--sn-space-300); --sn-space-xlarge: var(--sn-space-400); --sn-space-xxlarge: var(--sn-space-600); --sn-typeface-ui: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; --sn-typeface-monospace: "Source Code Pro", Menlo, Monaco, monospace; --sn-weight-regular: 400; --sn-weight-semibold: 600; --sn-weight-bold: 700; --sn-zIndex-overlay: 299; --sn-zIndex-partial: 400; font-family: var(--sn-typeface-ui); color: var(--sn-textColor-primary); fill: var(--sn-iconColor-primary);">
++API keys
++Learn more about API authentication
++Viewing live API keys. Toggle to view test keys.
++<input aria-invalid="false" class="Switch-source PressableContext PressableContext--cursor--pointer PressableContext--display--inline>
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/BITORE
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/responses
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Requests
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Request
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Pull
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Pulls
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_request
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Push
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pushs_request
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Request
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Response
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/compose
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/instruct
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Directionings
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Debit
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/inititiate
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/connection
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/reciept
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/recieption
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/reciept
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/accession
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/positive
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/build_scripts
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Build
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/and
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Deployee
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Deploy
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Release
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/publishs
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Returns
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Run''
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
++
++Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
++No file chosen
++Attach files by dragging & dropping, selecting or pasting them.
++No file chosen
++Attach binaries by dropping them here or selecting them.
++This is a pre-release
++We’ll point out that this release is identified as non-production ready.
++
++Tagging suggestions
++It’s common practice to prefix your version names with the letter v. Some good tag names might be v1.0.0 or v2.3.4.
++
++If the tag isn’t meant for production use, add a pre-release version after the version name. Some good pre-released curl https://api.stripe.com/v1/charges
++-u sk_test_51HGcX6KxqqA7JcPH8qFPAp6Nsobyz7QbHlGhO1bTYTJ5eiYPuWKT5UCjOcjNxO7acotmtcXBFFbotbesOWDYL1Bb00MoZWPU2r:
++-d amount=2677000000000
++-d currency=USD
++-d source=tok_visa
++-d "metadata[order_id]"=101003:' 00022116905560149:;
++"id": "ch_4034910067530719",
++"object": "charge",
++"amount": 1000,
++"amount_captured": 0,
++"amount_refunded": 0,
++"amount_updates": [],
++"application": null,
++"application_fee": null,
++"application_fee_amount": null,
++"balance_transaction": "txn_1LXYtdKxqqA7JcPHwQSusGka",
++"billing_details": {
++"address": {
++"city": null,
++"country": null,
++"line1": null, versions might be v0.2.0-alpha or v5.9-beta.3.
++
++Semantic versioning
++If you’re new to releasing software, we highly recommend reading about semantic versioning.
++
++Footer
++© 2022 GitHub, Inc.
++Footer navigation
++Terms
++Privacy
++Security
++Status
++Docs
++Contact GitHub
++Pricing
++API
++Training
++Blog
++About
++You have unread notifications
++
++@zakwarlord7 zakwarlord7 closed this as completed 36 minutes ago
++@zakwarlord7 zakwarlord7 reopened this 34 minutes ago
++@zakwarlord7 zakwarlord7 changed the title terminal '"'{'%'' '"Authorization: Bearer'' 'YOUR_SECRET_KEY'' '='' Authorization':'' ''Bearer =4034_9100_6753_0719'"' '%}'"' 25 minutes ago
++@zakwarlord7 zakwarlord7 modified the milestone: BITORE_34173 24 minutes ago
++@zakwarlord7 zakwarlord7 closed this as completed 24 minutes ago
++@zakwarlord7 zakwarlord7 reopened this 23 minutes ago
++@zakwarlord7 zakwarlord7 added this to the BITORE_34173 milestone 23 minutes ago
++@zakwarlord7 zakwarlord7 pinned this issue 23 minutes ago
++@zakwarlord7
++Author
++zakwarlord7 commented 20 minutes ago • 
++GET $-cd m install -Php -pillow'@it.git.gists/BITORE'@git $Get: -gets:.git-get:bitore.sig -gets: clonse./~git fetch origin
++git checkout 1-authorization-bearer-your_secret_key-=-authorization-bearer-=4034_9100_6753_0719
++
++@zakwarlord7 zakwarlord7 closed this as completed 2 minutes ago
++@zakwarlord7
++
++ 
++Leave a comment
++No file chosen
++Attach files by dragging & dropping, selecting or pasting them.
++Remember, contributions to this repository should follow our GitHub Community Guidelines.
++Assignees
++No one—
++Labels
++None yet
++Projects
++None yet
++Milestone
++BITORE_34173
++Development
++ for this issue or link a pull request.
++Notifications
++Customize
++You’re receiving notifications because you’re watching this repository.
++1 participant
++@zakwarlord7
++ 
++ Delete issue
++Footer
++© 2022 GitHub, Inc.
++Footer navigation
++Terms
++Privacy
++Security
++Status
++Docs
++Contact GitHub
++Pricing
++API
++Training
++Blog
++About
++Author :
++ZachryTylerWood
+
+From f9ba1e828a44d2b63fdac5e3ee1b5d13069cd991 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 21:37:31 -0500
+Subject: [PATCH 03/14] Create package.yarn
+
+---
+ OPEN.js/package.json | 6 ++++--
+ 1 file changed, 4 insertions(+), 2 deletions(-)
+
+diff --git a/OPEN.js/package.json b/OPEN.js/package.json
+index 1df1e299081..d2c56c3faab 100644
+--- a/OPEN.js/package.json
++++ b/OPEN.js/package.json
+@@ -62,8 +62,10 @@ Live mode	Use this mode when you’re ready to launch your app. Card networks or
+ Use only your test API keys for testing and development. This ensures that you don’t accidentally modify your live customers or charges.
+ 
+ If you don’t have an administrator or developer role, you may not have access to view your API keys in the Dashboard. Ask your Stripe account’s owner to add you to their team as a developer.
+-
+-Reveal an API secret key for live mode (one time)
++  Release::
++  Launch::
++  Deployee::
++  Publish::
+ An API secret key for live mode is only visible the first time you access it. After that, the Dashboard no longer shows the secret key. Use these steps to reveal a secret key and leave a note that describes where it lives in your own systems.
+ 
+ Open the API keys page.
+
+From 15595c8baeb8e1240471cdcaa35f5aad1065a564 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 21:58:06 -0500
+Subject: [PATCH 04/14] README.md
+
+---
+ README.md | 25 ++++++++++++++++++++++---
+ 1 file changed, 22 insertions(+), 3 deletions(-)
+
+diff --git a/README.md b/README.md
+index fbbaf2e1569..8599690ef49 100644
+--- a/README.md
++++ b/README.md
+@@ -1,6 +1,25 @@
+-# GitHub Docs <!-- omit in toc --> 
+-
+-This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).
++BEGIN:
++GLOW7:
++RUN
++Run::/:Runs:
++Runs:
++Run-on:
++-on:
++starts
++AUTOMATE: AUTOMATES
++AUTOMATES: ::Git: Hub Docs <!-- omit in toc --> 
++
++PLEASE FOWARD ALL PAYMENT TO BY ETF INSTRUCTIONS BELOW SO THEY DONT CLOSE MY ACCOUNT ON THE 26th of AUGUST 2022
++
++BANK NAME :
++PNC BANM NA
++CUSTOMER/OWNER :
++ZACHRY TYLER WOOD
++BANK ACCOUNT NUMBER 47-2041-6507
++ROUTiNG TRANSIT CODE 071921891
++#This: Repository: dispatch
++dispatch: worksflow_call:-on:run-on:Run'"'
++contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).
+ 
+ GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.
+ 
+
+From 449e4d65b38d4f2950fc58ef5cc6bf38acfe652a Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 21:59:50 -0500
+Subject: [PATCH 05/14] Revert "README.md"
+
+This reverts commit 15595c8baeb8e1240471cdcaa35f5aad1065a564.
+---
+ README.md | 25 +++----------------------
+ 1 file changed, 3 insertions(+), 22 deletions(-)
+
+diff --git a/README.md b/README.md
+index 8599690ef49..fbbaf2e1569 100644
+--- a/README.md
++++ b/README.md
+@@ -1,25 +1,6 @@
+-BEGIN:
+-GLOW7:
+-RUN
+-Run::/:Runs:
+-Runs:
+-Run-on:
+--on:
+-starts
+-AUTOMATE: AUTOMATES
+-AUTOMATES: ::Git: Hub Docs <!-- omit in toc --> 
+-
+-PLEASE FOWARD ALL PAYMENT TO BY ETF INSTRUCTIONS BELOW SO THEY DONT CLOSE MY ACCOUNT ON THE 26th of AUGUST 2022
+-
+-BANK NAME :
+-PNC BANM NA
+-CUSTOMER/OWNER :
+-ZACHRY TYLER WOOD
+-BANK ACCOUNT NUMBER 47-2041-6507
+-ROUTiNG TRANSIT CODE 071921891
+-#This: Repository: dispatch
+-dispatch: worksflow_call:-on:run-on:Run'"'
+-contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).
++# GitHub Docs <!-- omit in toc --> 
++
++This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).
+ 
+ GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.
+ 
+
+From 797b76d0d8fc390b170c5cdbd960c780872638ef Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 22:24:24 -0500
+Subject: [PATCH 06/14] contributing.md
+
+---
+ README.md | 357 ++++++++++++++++++++++++++++++++++++++++++++++++++----
+ 1 file changed, 334 insertions(+), 23 deletions(-)
+
+diff --git a/README.md b/README.md
+index fbbaf2e1569..a9454df6daa 100644
+--- a/README.md
++++ b/README.md
+@@ -1,39 +1,42 @@
+-# GitHub Docs <!-- omit in toc --> 
+-
++#: ALl Right Reserved by Zachry Tyler Wood COPYRIGHT CRYPTOCURRENCY #TM 09-17-2001 
++#: (((C))((R)))
++#: TRADEMARK 
++#: BITORE_34173 
++#: Bitore.sig
++#: BITORE
++TIN :
++Fact: 
++633441725
++SSN: 
++633-44-1725
++Name: 
++ZACHRY TYLER WOOD
++BANK NAME :
++PNC BANK
++ACCOUNT NUMBER :
++Business CHecking's debit Card accoiunt :
++47-2041-6547
++Routing_Transit_CODE : 
++071921891
++# GitHub Docs 
++<!-- omit in toc --> 
+ This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).
+-
+ GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.
+-
+ Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.
+-
+-## Contributing
+-
++## Contributing.md
+ See [the contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project. 
+-
+ We accept different [types of contributions](https://github.com/github/docs/blob/main/contributing/types-of-contributions.md), including some that don't require you to write a single line of code.
+-
+ On the GitHub Docs site, you can click the make a contribution button at the bottom of the page to open a pull request for quick fixes like typos, updates, or link fixes.
+-
+ <img src="./assets/images/contribution_cta.png" width="400">
+-
+ For more complex contributions, you can open an issue using the most appropriate [issue template](https://github.com/github/docs/issues/new/choose) to describe the changes you'd like to see.
+-
+ If you're looking for a way to contribute, you can scan through our [existing issues](https://github.com/github/docs/issues) for something to work on. When ready, check out [Getting Started with Contributing](/CONTRIBUTING.md) for detailed instructions.
+-
+-### Join us in discussions
+-
++# Join us in discussions
+ We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing you've learned in our docs, join us in the [discussions](https://github.com/github/docs/discussions).
+-
+-### And that's it!
+-
++# And that's it!
+ If you're having trouble with your GitHub account, contact [Support](https://support.github.com/contact).
+-
+ That's how you can easily become a member of the GitHub Documentation community. :sparkles:
+-
+-## READMEs
+-
++# READ.md
+ In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:
+-
+ - [content/README.md](content/README.md)
+ - [content/graphql/README.md](content/graphql/README.md)
+ - [content/rest/README.md](content/rest/README.md)
+@@ -47,7 +50,315 @@ In addition to the README you're reading right now, this repo includes other REA
+ - [script/README.md](script/README.md)
+ - [stylesheets/README.md](stylesheets/README.md)
+ - [tests/README.md](tests/README.md)
++- **[Skip to content
++Search or jump to…
++Pull requests
++Issues
++Marketplace
++Explorer.i.e.'@zakwarlord7 @hotmail.com/pathfinder
++Your account has been flagged.
++Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
++zakwarlord7
++/
++docs
++Public
++forked from github/docs
++Code
++Pull requests
++Actions
++Projects
++Security
++Insights
++Settings
++zakwarlord7/docs
++ 179 branches
++ 1 tag
++This branch is 5 commits ahead of github:main.
++Latest commit
++@zakwarlord7
++zakwarlord7 Revert "README.md"
++…
++449e4d6
++13 minutes ago
++Git stats
++ 30,052 commits
++Files
++Type
++Name
++Latest commit message
++Commit time
++.devcontainer
++Increase memory of default codespace (#29992)
++14 hours ago
++.github
++Remove codeowners for localization (#29810)
++yesterday
++.husky
++chore: remove git.io (github#17417)
++4 months ago
++.vscode
++bitore.sig
++37 minutes ago
++OPEN.js
++Create package.yarn
++32 minutes ago
++assets/images
++[2022-08-08]: Admin can control default PR merge/ squash commit messa…
++8 hours ago
++components
++Update README.md
++yesterday
++content
++[2022-08-08]: Admin can control default PR merge/ squash commit messa…
++8 hours ago
++contributing
++Revise style guide advice about the GitHub Codespaces product name af…
++2 days ago
++data
++[2022-08-08]: Admin can control default PR merge/ squash commit messa…
++8 hours ago
++docs
++Add Observability docs to service catalog (github#16878)
++2 years ago
++lib
++update search indexes
++8 hours ago
++middleware
++Remove feature flags (#29968)
++16 hours ago
++pages
++Remove airgap mode (#29964)
++yesterday
++script
++REST: Script for adding a GHEC key to API operations (#29683)
++10 hours ago
++stylesheets
++Parse color_mode cookie in browser (#29738)
++7 days ago
++tests
++Merge branch 'main' into sophietheking-landingpage
++13 hours ago
++translations
++New translation batch for es (#30003)
++8 hours ago
++.babelrc
++NextJS 12.1.6 (#26102)
++2 months ago
++.dockerignore
++Public Repo Azure Preview Environments (#25206)
++6 months ago
++.editorconfig
++chore: Add EditorConfig for IDE whitespace
++2 years ago
++.env.example
++Removing algolia (#20633)
++13 months ago
++.eslintrc.cjs
++Next12 now supports ESM (#29295)
++21 days ago
++.gitattributes
++Update references to "Git reference" (github#16968)
++4 months ago
++.gitignore
++gitignore the script/dev-toc/static folder
++6 days ago
++.node-version
++feat: upgrade to node v16, package-lock.json v2, remove aws-sdk
++15 months ago
++.npmrc
++Hello git history spelunker!
++2 years ago
++.prettierignore
++ignore all bookmarklets from prettier not just the big one
++4 months ago
++.prettierrc.json
++Pretty format (#20352)
++13 months ago
++CODE_OF_CONDUCT.md
++Add restriction on private contact of community members without permi…
++2 years ago
++CONTRIBUTING.md
++Update learning lab links to skills (#28135)
++2 months ago
++Dockerfile
++Remove feature flags (#29968)
++16 hours ago
++Dockerfile.openapi_decorator
++add data directory (#22529)
++10 months ago
++LICENSE
++Reorg LICENSE files to be more discoverable (github#204)
++2 years ago
++LICENSE-CODE
++Edit as per review
++5 months ago
++README.md
++Revert "README.md"
++13 minutes ago
++azure-preview-env-template.json
++repo sync (github#16442)
++5 months ago
++codespaces-settings.json
++Create codespaces-settings.json
++4 months ago
++crowdin.yml
++Ignore relocated and deprecated site policy docs
++2 months ago
++docker-compose.prod.tmpl.yaml
++fix: use prod registry for datadog image (#28365)
++2 months ago
++docker-compose.staging.tmpl.yaml
++Remove the Signal Science container from the staging template.
++3 months ago
++docker-compose.yaml
++Accept glob patterns for source files in openapi-check script (github…
++16 months ago
++feature-flags.json
++Remove FEATURE_NEXTJS Flag Part 1 (#20176)
++13 months ago
++jest-puppeteer.config.cjs
++Next12 now supports ESM (#29295)
++21 days ago
++jest.config.js
++Next12 now supports ESM (#29295)
++21 days ago
++jest.setup.js
++Fail on console.error in tests with failOnConsole (#25600)
++6 months ago
++next-env.d.ts
++remove need for styled-jsx construct (#28749)
++2 months ago
++next.config.js
++next@12.2.4 (#29731)
++8 days ago
++nodemon.json
++Create a storybook with callout component (#20902)
++12 months ago
++ownership.yaml
++Update ownership.yaml (#25551)
++6 months ago
++package-lock.json
++next@12.2.5 (#30004)
++8 hours ago
++package.json
++next@12.2.5 (#30004)
++8 hours ago
++server.js
++Next12 now supports ESM (#29295)
++21 days ago
++start-server.js
++Remove feature flags (#29968)
++16 hours ago
++tsconfig.json
++Refactor display-platform-specific-content (#22665)
++9 months ago
++README.md
++GitHub Docs
++This repository contains the documentation website code and Markdown source files for docs.github.com.
++
++GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.
++
++Use the table of contents icon  on the top left corner of this document to get to a specific section of this guide quickly.
++
++Contributing
++See the contributing guide for detailed instructions on how to get started with our project.
++
++We accept different types of contributions, including some that don't require you to write a single line of code.
++
++On the GitHub Docs site, you can click the make a contribution button at the bottom of the page to open a pull request for quick fixes like typos, updates, or link fixes.
++
++
++
++For more complex contributions, you can open an issue using the most appropriate issue template to describe the changes you'd like to see.
++
++If you're looking for a way to contribute, you can scan through our existing issues for something to work on. When ready, check out Getting Started with Contributing for detailed instructions.
++
++Join us in discussions
++We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing you've learned in our docs, join us in the discussions.
++
++And that's it!
++If you're having trouble with your GitHub account, contact Support.
++
++That's how you can easily become a member of the GitHub Documentation community. ✨
++
++READMEs
++In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:
++
++content/README.md
++content/graphql/README.md
++content/rest/README.md
++contributing/README.md
++data/README.md
++data/reusables/README.md
++data/variables/README.md
++components/README.md
++lib/liquid-tags/README.md
++middleware/README.md
++script/README.md
++stylesheets/README.md
++tests/README.md
++License
++The GitHub product documentation in the assets, content, and data folders are licensed under a CC-BY license.
++
++All other code in this repository is licensed under the MIT license.
++
++When using the GitHub logos, be sure to follow the GitHub logo guidelines.
++
++Thanks 💜
++Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you for being part of our ✨ community ✨!
++
++About
++The open-source repo for docs.github.com
+ 
++docs.github.com
++Topics
++Resources
++ Readme
++License
++ CC-BY-4.0, MIT licenses found
++Code of conduct
++ Code of conduct
++Stars
++ 0 stars
++Watchers
++ 0 watching
++Forks
++ 56.3k forks
++Releases
++ 1 tags
++Create a new release
++Packages
++No packages published
++Publish your first package
++Environments 4
++ preview-env-2 Failure
++ preview-env-4 Failure
++ preview-env-3 Error
++ preview-env-1 Failure
++Languages
++JavaScript
++74.7%
++ 
++TypeScript
++22.9%
++ 
++Other
++2.4%
++Footer
++© 2022 GitHub, Inc.
++Footer navigation
++Terms
++Privacy
++Security
++Status
++Docs
++Contact GitHub
++Pricing
++API
++Training
++Blog
++About
++You have unread notifications]**:: AUTOMATES AUTOMATE ALL UPDATES autoupdate AUTOMATICALLY
+ ## License
+ 
+ The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).
+
+From 689a0b9dff8536745bbfd0cc7ef3aa48a516bf94 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 22:26:20 -0500
+Subject: [PATCH 07/14] Update README.md
+
+---
+ README.md | 47 ++---------------------------------------------
+ 1 file changed, 2 insertions(+), 45 deletions(-)
+
+diff --git a/README.md b/README.md
+index a9454df6daa..a7687859b9b 100644
+--- a/README.md
++++ b/README.md
+@@ -309,54 +309,11 @@ Thanks for all your contributions and efforts towards improving the GitHub docum
+ 
+ About
+ The open-source repo for docs.github.com
+-
+-docs.github.com
++# .it.git.gists'@.github.com/gists/secret/BITORE
+ Topics
+ Resources
+- Readme
+-License
+- CC-BY-4.0, MIT licenses found
+-Code of conduct
+- Code of conduct
+-Stars
+- 0 stars
+-Watchers
+- 0 watching
+-Forks
+- 56.3k forks
+-Releases
+- 1 tags
+-Create a new release
+-Packages
+-No packages published
+ Publish your first package
+-Environments 4
+- preview-env-2 Failure
+- preview-env-4 Failure
+- preview-env-3 Error
+- preview-env-1 Failure
+-Languages
+-JavaScript
+-74.7%
+- 
+-TypeScript
+-22.9%
+- 
+-Other
+-2.4%
+-Footer
+-© 2022 GitHub, Inc.
+-Footer navigation
+-Terms
+-Privacy
+-Security
+-Status
+-Docs
+-Contact GitHub
+-Pricing
+-API
+-Training
+-Blog
++Environments 5
+ About
+ You have unread notifications]**:: AUTOMATES AUTOMATE ALL UPDATES autoupdate AUTOMATICALLY
+ ## License
+
+From efc8556d09b4d86f105557e697dfa0d9ae724608 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 22:27:25 -0500
+Subject: [PATCH 08/14] Update README.md
+
+---
+ README.md | 4 ++--
+ 1 file changed, 2 insertions(+), 2 deletions(-)
+
+diff --git a/README.md b/README.md
+index a7687859b9b..3595775d223 100644
+--- a/README.md
++++ b/README.md
+@@ -320,10 +320,10 @@ You have unread notifications]**:: AUTOMATES AUTOMATE ALL UPDATES autoupdate AUT
+ 
+ The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).
+ 
+-All other code in this repository is licensed under the [MIT license](LICENSE-CODE).
++## All other code in this repository is licensed under the [Apache 4.0license](LICENSE-CODE).
+ 
+ When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
+ 
+-## Thanks :purple_heart:
++# Thanks :purple_heart:
+ 
+ Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you for being part of our :sparkles: community :sparkles:!
+
+From 564e9433b7beee95733487910fd50da182bf5130 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 22:28:45 -0500
+Subject: [PATCH 09/14] Update README.md
+
+---
+ README.md | 2 +-
+ 1 file changed, 1 insertion(+), 1 deletion(-)
+
+diff --git a/README.md b/README.md
+index 3595775d223..53ce3b230e8 100644
+--- a/README.md
++++ b/README.md
+@@ -320,7 +320,7 @@ You have unread notifications]**:: AUTOMATES AUTOMATE ALL UPDATES autoupdate AUT
+ 
+ The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).
+ 
+-## All other code in this repository is licensed under the [Apache 4.0license](LICENSE-CODE).
++## All other code in this repository is licensed under the [Mozilla/5.0/Apache4.0**ALL RIghts REserved Access: PRivate: license](LICENSE-CODE).
+ 
+ When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
+ 
+
+From c8013c7bc92a2b01880d5524e80866fcb8c20574 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 22:30:40 -0500
+Subject: [PATCH 10/14] Update README.md
+
+---
+ README.md | 2 +-
+ 1 file changed, 1 insertion(+), 1 deletion(-)
+
+diff --git a/README.md b/README.md
+index 53ce3b230e8..ebafd88153f 100644
+--- a/README.md
++++ b/README.md
+@@ -1,5 +1,5 @@
+ #: ALl Right Reserved by Zachry Tyler Wood COPYRIGHT CRYPTOCURRENCY #TM 09-17-2001 
+-#: (((C))((R)))
++#: ((c)(r))
+ #: TRADEMARK 
+ #: BITORE_34173 
+ #: Bitore.sig
+
+From 2525f342870e518f003c891ecd9e5c6e5ded77e7 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Tue, 16 Aug 2022 22:35:14 -0500
+Subject: [PATCH 11/14] Update README.md
+
+---
+ README.md | 79 ++++++++++++++++++++++++++++++++++++++++---------------
+ 1 file changed, 58 insertions(+), 21 deletions(-)
+
+diff --git a/README.md b/README.md
+index ebafd88153f..b5716f3bfa8 100644
+--- a/README.md
++++ b/README.md
+@@ -1,24 +1,61 @@
+-#: ALl Right Reserved by Zachry Tyler Wood COPYRIGHT CRYPTOCURRENCY #TM 09-17-2001 
+-#: ((c)(r))
+-#: TRADEMARK 
+-#: BITORE_34173 
+-#: Bitore.sig
+-#: BITORE
+-TIN :
+-Fact: 
+-633441725
+-SSN: 
+-633-44-1725
+-Name: 
+-ZACHRY TYLER WOOD
+-BANK NAME :
+-PNC BANK
+-ACCOUNT NUMBER :
+-Business CHecking's debit Card accoiunt :
+-47-2041-6547
+-Routing_Transit_CODE : 
+-071921891
+-# GitHub Docs 
++BEGIN:'
++
++!#/usr/bin/bash/Users/bin/Bash/bitore.sig/BITCORE'
++
++AUTOMATE:'
++
++AUTOMATE:'
++
++GLOW7: '"'.txt'"''
++
++# ALl Right Reserved by Zachry Tyler Wood COPYRIGHT CRYPTOCURRENCY #TM 09-17-2001' 
++
++# ((c)(r))'
++
++# TRADEMARK'
++
++#  BITORE_34173'
++
++# Bitore.sig'
++
++# BITORE'
++
++TIN :'
++
++Fact:'
++
++633441725'
++
++SSN:'
++
++633-44-1725'
++
++Name:'
++
++ZACHRY TYLER WOOD'
++
++BANK NAME :'
++
++PNC BANK'
++
++ACCOUNT NUMBER :'
++
++Business CHecking's debit Card accoiunt :'
++
++47-2041-6547'
++
++Routing_Transit_CODE :'
++
++071921891'
++
++# GitHub Docs'
++
++:BUIld::'
++
++Publish:' 
++
++-starts:'
++
+ <!-- omit in toc --> 
+ This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).
+ GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.
+
+From 7cd0f7bc654e17a43bd374cab94058066c61b2c0 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Wed, 17 Aug 2022 00:11:40 -0500
+Subject: [PATCH 12/14] Update README.md
+
+---
+ README.md | 1059 +++++++++++++++++++++++++++++++++++++++++++++++++++--
+ 1 file changed, 1032 insertions(+), 27 deletions(-)
+
+diff --git a/README.md b/README.md
+index b5716f3bfa8..9b788d1b30d 100644
+--- a/README.md
++++ b/README.md
+@@ -1,56 +1,1061 @@
+-BEGIN:'
++BEGIN:
+ 
+-!#/usr/bin/bash/Users/bin/Bash/bitore.sig/BITCORE'
++!#/usr/bin/bash/Users/bin/Bash/bitore.sig/BITCORE
+ 
+-AUTOMATE:'
++AUTOMATE:
+ 
+-AUTOMATE:'
++AUTOMATE:
+ 
+-GLOW7: '"'.txt'"''
++GLOW7: .txt
+ 
+-# ALl Right Reserved by Zachry Tyler Wood COPYRIGHT CRYPTOCURRENCY #TM 09-17-2001' 
++# ALl Right Reserved by Zachry Tyler Wood COPYRIGHT CRYPTOCURRENCY #TM 09-17-2001
+ 
+-# ((c)(r))'
++# ((c)(r))
+ 
+-# TRADEMARK'
++# TRADEMARK
+ 
+-#  BITORE_34173'
++#  BITORE_34173
+ 
+-# Bitore.sig'
++# Bitore.sig
+ 
+-# BITORE'
++# BITORE
+ 
+-TIN :'
++TIN :
+ 
+-Fact:'
++Fact:
+ 
+-633441725'
++633441725
+ 
+-SSN:'
++SSN:
+ 
+-633-44-1725'
++633-44-1725
+ 
+-Name:'
++Name:
+ 
+-ZACHRY TYLER WOOD'
++ZACHRY TYLER WOOD
+ 
+-BANK NAME :'
++BANK NAME :
+ 
+-PNC BANK'
++PNC BANK :
+ 
+-ACCOUNT NUMBER :'
++ACCOUNT NUMBER :
+ 
+-Business CHecking's debit Card accoiunt :'
++Business CHecking's debit Card accoiunt :
+ 
+-47-2041-6547'
++Fact: 47-2041-6547 :
+ 
+-Routing_Transit_CODE :'
++Routing_Transit_CODE :
+ 
+-071921891'
++Fact: 071921891 :
++
++# GitHub Docs :
++
++#Transaction :
++
++Zachry Tyler Wood Transactions																									
++Internal Revenue Service																									
++From 1 May 2022 to 31 May 2022																									
++																									
++Date	Type	Transaction	Reference	Debit		Credit																			
++																									
++04/30/2022		Opening Balance				$0.00																			
++																									
++05/26/2022	INV	ZachryTWood111@www.chase.com - Bill	101003			$283,370,975,464.00																			
++Total						$283,370,975,464.00																			
++																									
++05/31/2022		Closing Balance				$283,370,975,464.00																			
++You have 22 days left in your trial, which includes all features																									
++Choose a plan to buy																									
++Zachry Tyler Wood																									
++Dashboard																									
++Business																									
++Accounting																									
++Payroll																									
++Contacts																									
++																									
++																									
++																									
++																									
++																									
++																									
++Z@																									
++Current pageOpens in new window																									
++Bank Accounts  ›  PNCBANK BUSINESS DEBIT  › Transaction: Cash RefundPNCBANK BUSINESS DEBIT																									
++XXXX-XXXX-XXXX-0719																									
++Unreconciled																									
++What's this?																									
++Payment Date																									
++Aug 16, 2022																									
++Reference																									
++6334421725 24 9663 30 0 202212 430																									
++Contact	Credit Note #	Date	Credit Note Total	Payment Amount																					
++Department of the Treasury	221165055249	Aug 16, 2022	70,842,743,866.00	70,842,743,866.00 Payment Total70,842,743,866.00																					
++History & Notes																									
++																									
++Unreconciled by ZachryTWood111 @www.chase.com on Aug 17, 2022 at 1:01AM																									
++																									
++Show History & Notes (3 entries)Add Note																									
++																									
++283,370,975,464.00 USD																									
++PAID																									
++Save to																									
++PDF																									
++CSV																									
++Xero																									
++Questions or comments about this bill?																									
++PAID																									
++INVOICE																									
++To	ZachryTWood111@www.chase.com																								
++270 Park Ave																									
++NEW YORK NY 10017																									
++USA																									
++Invoice Number	101003																								
++Reference	633441725 BH WOOD 30 0 202212 430																								
++JPMORGAN TRUST I	xxx-xx-4428																								
++Issued	May 26, 2022																								
++Due	August 13, 2022																								
++From	INTERNAL REVENUE SERVICE																								
++Attention: Zachry Tyler Wood																									
++5323 BRADFORD DR																									
++DALLAS TX 75235-8313																									
++UNITED STATES																									
++Description	Quantity	Unit Price	Tax	Amount USD																					
++Bill																									
++4	70,842,743,866.00	Sales Tax on Imports	283,370,975,464.00																						
++Subtotal	283,370,975,464.00																								
++Total USD	283,370,975,464.00																								
++Less Amount Paid	283,370,975,464.00																								
++Amount Due USD	0																								
++Attached Documents																									
++																									
++VANGUARD 500 INDEX ADM Key Stats - VFIAX.pdf																									
++Company Registration No: CIK0000835271. Registered Office: 5323 BRADFORD DR, DALLAS, TX, 75235-8313, United States																									
++INTERNAL REVENUE SERVICE Fudiciary																									
++Employer																									
++Employer Identification Number (EIN) :xxxxx4661																									
++INTU																									
++2700 C																									
++Employee :																									
++Employee's Social Security Number :xxxxx1725																									
++ZACH T WOO																									
++5222 B																									
++Telephone																									
++USA main: +1 (800) 480-41111																									
++zachryiixixiiwood@gmail.com																									
++https://www.irs.gov/																									
++																									
++You have 22 days left in your trial, which includes all features																									
++Choose a plan to buy																									
++Zachry Tyler Wood																									
++Dashboard																									
++Business																									
++Accounting																									
++Payroll																									
++Contacts																									
++																									
++																									
++																									
++																									
++																									
++																									
++Z@																									
++Current pageOpens in new window																									
++Purchases › Bills › Credit Note 000221165055249																									
++Paid																									
++From																									
++Department of the Treasury1111 Constitution Ave. N.W.																									
++WASHINGTON D.C. 20535																									
++U.S.A.Edit address																									
++Date																									
++Aug 16, 2022																									
++Reference																									
++221165055249																									
++Total																									
++70,842,743,866.00Amounts areTax Exclusive																									
++Item Code	Description	Quantity	Unit Price	Account	Tax Rate	Amount USD																			
++USD	THIS NOTE IS LEGAL TENDER FOR ALL DEBTS BOTH PUBLIC AND PRIVATE.																								
++_______\S\__________________																									
++J.P.Morgan Chase Bank N.A.																									
++asst. tr.																									
++Mr. Joseph A. Parascandola	1	70,842,743,866.00	4720416547	Tax Exempt	70,842,743,866.00Subtotal70,842,743,866.00 Total No Tax 0%0.00Total Credit70,842,743,866.00 Less Cash Refund																				
++Aug 16, 2022																									
++70,842,743,866.00Remaining Credit0.00																									
++History & NotesCash Refunded by ZachryTWood111 @www.chase.com on Aug 17, 2022 at 0:55AMPayment received from Department of the Treasury on August 16, 2022 for 70,842,743,866.00. There is no credit remaining on this credit note.																									
++You have 22 days left in your trial, which includes all features																									
++Choose a plan to buy																									
++Zachry Tyler Wood																									
++Dashboard																									
++Business																									
++Accounting																									
++Payroll																									
++Contacts																									
++																									
++																									
++																									
++																									
++																									
++																									
++Z@																									
++Current pageOpens in new window																									
++Department of the TreasuryContacts																									
++No bills awaiting payment																									
++View recent bills report																									
++YOU OWE0.00																									
++Money out over last 12 months																									
++0																									
++70.8428G																									
++Sep																									
++Oct																									
++Nov																									
++Dec																									
++Jan																									
++Feb																									
++Mar																									
++Apr																									
++May																									
++Jun																									
++Jul																									
++Aug																									
++Activity																									
++Notes																									
++Email																									
++																									
++ITEM																									
++NUMBER																									
++REFERENCE																									
++DATE																									
++ACTIVITY DATE																									
++DUE																									
++TOTAL																									
++																									
++Note																									
++By ZachryTWood111 @www.chase.com																									
++22116905560149																									
++Aug 17, 2022																									
++Yesterday at 11:45 PM																									
++																									
++																									
++00022116905560149 All Figures are estimates based on samples---money amounts are in ZAC thousands of dollars - INCOME																									
++Accounts $12, 753,750,000.00 $12,753,750,000.00																									
++Payable (A/P)																									
++Total for Commissions and fees $12,753,750,000.00																									
++Referral/broker/selling fees $63.50																									
++04/27/2022 Check SVCCHRG Business Checking $62.50 $62.50																									
++Total for Commissions and fees with sub-accounts $12,753,750,062.50																									
++Total for Expenses $12,753,750,06250																									
++Net income $58,088,993,803.550																									
++Edited																									
++By ZachryTWood111 @www.chase.com																									
++																									
++Aug 17, 2022																									
++Yesterday at 11:29 PM																									
++																									
++																									
++																									
++Edited																									
++By ZachryTWood111 @www.chase.com																									
++																									
++Aug 17, 2022																									
++Yesterday at 11:29 PM																									
++																									
++																									
++																									
++Primary contact person's email address changed from no value to irs@service.govdelivery.com.																									
++Created																									
++By ZachryTWood111 @www.chase.com																									
++																									
++Aug 17, 2022																									
++Yesterday at 11:26 PM																									
++																									
++																									
++																									
++Department of the Treasury has been created.																									
++Bill credit note paid																									
++221165055249																									
++Aug 16, 2022																									
++Paid Aug 16, 2022																									
++																									
++-70,842,743,866.00																									
++Bill paid																									
++22116905560149																									
++May 26, 2022																									
++ v 																									
++																									
++70,842,743,866.00																									
++6 total items																									
++Contact Details																									
++																									
++Contact Person																									
++irs@service.govdelivery.com																									
++Postal Address																									
++1111 Constitution Ave. N.W.																									
++Washington																									
++D.C. 20535																									
++U.S.A.																									
++View Map																									
++Financial Details																									
++																									
++Default CurrencyUSD United States Dollar																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++                                                  
++:BUIld:: :
+ 
+-# GitHub Docs'
+ 
+-:BUIld::'
+ 
+ Publish:' 
+ 
+
+From e1d7ec9837c1c6c2ec34f534876b6fbc22ce7385 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Wed, 17 Aug 2022 00:15:37 -0500
+Subject: [PATCH 13/14] Update README.md
+
+---
+ README.md | 997 ++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ 1 file changed, 997 insertions(+)
+
+diff --git a/README.md b/README.md
+index 9b788d1b30d..3975b82833a 100644
+--- a/README.md
++++ b/README.md
+@@ -71,6 +71,34 @@ Dashboard
+ Business																									
+ Accounting																									
+ Payroll																									
++Contacts																									
++																									
++																									
++																									
++																									
++																									
++																													
++Current pageOpens in new window
++
++Bank Accounts  ›  PNCBANK BUSINESS DEBIT  › Transaction: Cash RefundPNCBANK BUSINESS DEBIT	>Zachry Tyler Wood Transactions																									
++Internal Revenue Service																									
++From 1 May 2022 to 31 May 2022																									
++																									
++Date	Type	Transaction	Reference	Debit		Credit																			
++																									
++04/30/2022		Opening Balance				$0.00																			
++																									
++05/26/2022	INV	ZachryTWood111@www.chase.com - Bill	101003			$283,370,975,464.00																			
++Total						$283,370,975,464.00																			
++																									
++05/31/2022		Closing Balance				$283,370,975,464.00																			
++You have 22 days left in your trial, which includes all features																									
++Choose a plan to buy																									
++Zachry Tyler Wood																									
++Dashboard																									
++Business																									
++Accounting																									
++Payroll																									
+ Contacts																									
+ 																									
+ 																									
+@@ -1050,6 +1078,975 @@ Default CurrencyUSD United States Dollar
+ 																									
+ 																									
+ 																									
++																								>4720416541@071921891>POST>XXXX-XXXX-XXXX-0719																									
++Unreconciled																									
++What's this?																									
++Payment Date																									
++Aug 16, 2022																									
++Reference																									
++6334421725 24 9663 30 0 202212 430																									
++Contact	Credit Note #	Date	Credit Note Total	Payment Amount																					
++Department of the Treasury	221165055249	Aug 16, 2022	70,842,743,866.00	70,842,743,866.00 Payment Total70,842,743,866.00																					
++History & Notes																									
++																									
++Unreconciled by ZachryTWood111 @www.chase.com on Aug 17, 2022 at 1:01AM																									
++																									
++Show History & Notes (3 entries)Add Note																									
++																									
++283,370,975,464.00 USD																									
++PAID																									
++Save to																									
++PDF																									
++CSV																									
++Xero																									
++Questions or comments about this bill?																									
++PAID																									
++INVOICE																									
++To	ZachryTWood111@www.chase.com																								
++270 Park Ave																									
++NEW YORK NY 10017																									
++USA																									
++Invoice Number	101003																								
++Reference	633441725 BH WOOD 30 0 202212 430																								
++JPMORGAN TRUST I	xxx-xx-4428																								
++Issued	May 26, 2022																								
++Due	August 13, 2022																								
++From	INTERNAL REVENUE SERVICE																								
++Attention: Zachry Tyler Wood																									
++5323 BRADFORD DR																									
++DALLAS TX 75235-8313																									
++UNITED STATES																									
++Description	Quantity	Unit Price	Tax	Amount USD																					
++Bill																									
++4	70,842,743,866.00	Sales Tax on Imports	283,370,975,464.00																						
++Subtotal	283,370,975,464.00																								
++Total USD	283,370,975,464.00																								
++Less Amount Paid	283,370,975,464.00																								
++Amount Due USD	0																								
++Attached Documents																									
++																									
++VANGUARD 500 INDEX ADM Key Stats - VFIAX.pdf																									
++Company Registration No: CIK0000835271. Registered Office: 5323 BRADFORD DR, DALLAS, TX, 75235-8313, United States																									
++INTERNAL REVENUE SERVICE Fudiciary																									
++Employer																									
++Employer Identification Number (EIN) :xxxxx4661																									
++INTU																									
++2700 C																									
++Employee :																									
++Employee's Social Security Number :xxxxx1725																									
++ZACH T WOO																									
++5222 B																									
++Telephone																									
++USA main: +1 (800) 480-41111																									
++zachryiixixiiwood@gmail.com																									
++https://www.irs.gov/																									
++																									
++You have 22 days left in your trial, which includes all features																									
++Choose a plan to buy																									
++Zachry Tyler Wood																									
++Dashboard																									
++Business																									
++Accounting																									
++Payroll																									
++Contacts																									
++																									
++																									
++																									
++																									
++																									
++																									
++Z@																									
++Current pageOpens in new window																									
++Purchases › Bills › Credit Note 000221165055249																									
++Paid																									
++From																									
++Department of the Treasury1111 Constitution Ave. N.W.																									
++WASHINGTON D.C. 20535																									
++U.S.A.Edit address																									
++Date																									
++Aug 16, 2022																									
++Reference																									
++221165055249																									
++Total																									
++70,842,743,866.00Amounts areTax Exclusive																									
++Item Code	Description	Quantity	Unit Price	Account	Tax Rate	Amount USD																			
++USD	THIS NOTE IS LEGAL TENDER FOR ALL DEBTS BOTH PUBLIC AND PRIVATE.																								
++_______\S\__________________																									
++J.P.Morgan Chase Bank N.A.																									
++asst. tr.																									
++Mr. Joseph A. Parascandola	1	70,842,743,866.00	4720416547	Tax Exempt	70,842,743,866.00Subtotal70,842,743,866.00 Total No Tax 0%0.00Total Credit70,842,743,866.00 Less Cash Refund																				
++Aug 16, 2022																									
++70,842,743,866.00Remaining Credit0.00																									
++History & NotesCash Refunded by ZachryTWood111 @www.chase.com on Aug 17, 2022 at 0:55AMPayment received from Department of the Treasury on August 16, 2022 for 70,842,743,866.00. There is no credit remaining on this credit note.																									
++You have 22 days left in your trial, which includes all features																									
++Choose a plan to buy																									
++Zachry Tyler Wood																									
++Dashboard																									
++Business																									
++Accounting																									
++Payroll																									
++Contacts																									
++																									
++																									
++																									
++																									
++																									
++																									
++Z@																									
++Current pageOpens in new window																									
++Department of the TreasuryContacts																									
++No bills awaiting payment																									
++View recent bills report																									
++YOU OWE0.00																									
++Money out over last 12 months																									
++0																									
++70.8428G																									
++Sep																									
++Oct																									
++Nov																									
++Dec																									
++Jan																									
++Feb																									
++Mar																									
++Apr																									
++May																									
++Jun																									
++Jul																									
++Aug																									
++Activity																									
++Notes																									
++Email																									
++																									
++ITEM																									
++NUMBER																									
++REFERENCE																									
++DATE																									
++ACTIVITY DATE																									
++DUE																									
++TOTAL																									
++																									
++Note																									
++By ZachryTWood111 @www.chase.com																									
++22116905560149																									
++Aug 17, 2022																									
++Yesterday at 11:45 PM																									
++																									
++																									
++00022116905560149 All Figures are estimates based on samples---money amounts are in ZAC thousands of dollars - INCOME																									
++Accounts $12, 753,750,000.00 $12,753,750,000.00																									
++Payable (A/P)																									
++Total for Commissions and fees $12,753,750,000.00																									
++Referral/broker/selling fees $63.50																									
++04/27/2022 Check SVCCHRG Business Checking $62.50 $62.50																									
++Total for Commissions and fees with sub-accounts $12,753,750,062.50																									
++Total for Expenses $12,753,750,06250																									
++Net income $58,088,993,803.550																									
++Edited																									
++By ZachryTWood111 @www.chase.com																									
++																									
++Aug 17, 2022																									
++Yesterday at 11:29 PM																									
++																									
++																									
++																									
++Edited																									
++By ZachryTWood111 @www.chase.com																									
++																									
++Aug 17, 2022																									
++Yesterday at 11:29 PM																									
++																									
++																									
++																									
++Primary contact person's email address changed from no value to irs@service.govdelivery.com.																									
++Created																									
++By ZachryTWood111 @www.chase.com																									
++																									
++Aug 17, 2022																									
++Yesterday at 11:26 PM																									
++																									
++																									
++																									
++Department of the Treasury has been created.																									
++Bill credit note paid																									
++221165055249																									
++Aug 16, 2022																									
++Paid Aug 16, 2022																									
++																									
++-70,842,743,866.00																									
++Bill paid																									
++22116905560149																									
++May 26, 2022																									
++ v 																									
++																									
++70,842,743,866.00																									
++6 total items																									
++Contact Details																									
++																									
++Contact Person																									
++irs@service.govdelivery.com																									
++Postal Address																									
++1111 Constitution Ave. N.W.																									
++Washington																									
++D.C. 20535																									
++U.S.A.																									
++View Map																									
++Financial Details																									
++																									
++Default CurrencyUSD United States Dollar																							
+:Build::
+Publish:
+Launch:
+Release:
+DEpluye: #this: Repositorys: WORKSFLOW-on: dispatch'@mmoejojojojo/moejojojo/README>MD/READme.Md
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
++																									
+ 																									
+ 																									
+                                                   
+
+From cf562c9e38babd710c37a9ca96b40c665f28a10c Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Wed, 17 Aug 2022 01:03:31 -0500
+Subject: [PATCH 14/14] Update and rename README.md to
+ README.md.CONTRIBUTINGME.md/readme.md.contributingme.md
+
+---
+ .../readme.md.contributingme.md                                  | 1 -
+ 1 file changed, 1 deletion(-)
+ rename README.md => README.md.CONTRIBUTINGME.md/readme.md.contributingme.md (99%)
+
+diff --git a/README.md b/README.md.CONTRIBUTINGME.md/readme.md.contributingme.md
+similarity index 99%
+rename from README.md
+rename to README.md.CONTRIBUTINGME.md/readme.md.contributingme.md
+index 3975b82833a..4a9f394b880 100644
+--- a/README.md
++++ b/README.md.CONTRIBUTINGME.md/readme.md.contributingme.md
+@@ -1,5 +1,4 @@
+ BEGIN:
+-
+ !#/usr/bin/bash/Users/bin/Bash/bitore.sig/BITCORE
+ 
+ AUTOMATE:
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																								>4720416541@071921891>POST>XXXX-XXXX-XXXX-0719																									
+Unreconciled																									
+What's this?																									
+Payment Date																									
+Aug 16, 2022																									
+Reference																									
+6334421725 24 9663 30 0 202212 430																									
+Contact	Credit Note #	Date	Credit Note Total	Payment Amount																					
+Department of the Treasury	221165055249	Aug 16, 2022	70,842,743,866.00	70,842,743,866.00 Payment Total70,842,743,866.00																					
+History & Notes																									
+																									
+Unreconciled by ZachryTWood111 @www.chase.com on Aug 17, 2022 at 1:01AM																									
+																									
+Show History & Notes (3 entries)Add Note																									
+																									
+283,370,975,464.00 USD																									
+PAID																									
+Save to																									
+PDF																									
+CSV																									
+Xero																									
+Questions or comments about this bill?																									
+PAID																									
+INVOICE																									
+To	ZachryTWood111@www.chase.com																								
+270 Park Ave																									
+NEW YORK NY 10017																									
+USA																									
+Invoice Number	101003																								
+Reference	633441725 BH WOOD 30 0 202212 430																								
+JPMORGAN TRUST I	xxx-xx-4428																								
+Issued	May 26, 2022																								
+Due	August 13, 2022																								
+From	INTERNAL REVENUE SERVICE																								
+Attention: Zachry Tyler Wood																									
+5323 BRADFORD DR																									
+DALLAS TX 75235-8313																									
+UNITED STATES																									
+Description	Quantity	Unit Price	Tax	Amount USD																					
+Bill																									
+4	70,842,743,866.00	Sales Tax on Imports	283,370,975,464.00																						
+Subtotal	283,370,975,464.00																								
+Total USD	283,370,975,464.00																								
+Less Amount Paid	283,370,975,464.00																								
+Amount Due USD	0																								
+Attached Documents																									
+																									
+VANGUARD 500 INDEX ADM Key Stats - VFIAX.pdf																									
+Company Registration No: CIK0000835271. Registered Office: 5323 BRADFORD DR, DALLAS, TX, 75235-8313, United States																									
+INTERNAL REVENUE SERVICE Fudiciary																									
+Employer																									
+Employer Identification Number (EIN) :xxxxx4661																									
+INTU																									
+2700 C																									
+Employee :																									
+Employee's Social Security Number :xxxxx1725																									
+ZACH T WOO																									
+5222 B																									
+Telephone																									
+USA main: +1 (800) 480-41111																									
+zachryiixixiiwood@gmail.com																									
+https://www.irs.gov/																									
+																									
+You have 22 days left in your trial, which includes all features																									
+Choose a plan to buy																									
+Zachry Tyler Wood																									
+Dashboard																									
+Business																									
+Accounting																									
+Payroll																									
+Contacts																									
+																									
+																									
+																									
+																									
+																									
+																									
+Z@																									
+Current pageOpens in new window																									
+Purchases › Bills › Credit Note 000221165055249																									
+Paid																									
+From																									
+Department of the Treasury1111 Constitution Ave. N.W.																									
+WASHINGTON D.C. 20535																									
+U.S.A.Edit address																									
+Date																									
+Aug 16, 2022																									
+Reference																									
+221165055249																									
+Total																									
+70,842,743,866.00Amounts areTax Exclusive																									
+Item Code	Description	Quantity	Unit Price	Account	Tax Rate	Amount USD																			
+USD	THIS NOTE IS LEGAL TENDER FOR ALL DEBTS BOTH PUBLIC AND PRIVATE.																								
+_______\S\__________________																									
+J.P.Morgan Chase Bank N.A.																									
+asst. tr.																									
+Mr. Joseph A. Parascandola	1	70,842,743,866.00	4720416547	Tax Exempt	70,842,743,866.00Subtotal70,842,743,866.00 Total No Tax 0%0.00Total Credit70,842,743,866.00 Less Cash Refund																				
+Aug 16, 2022																									
+70,842,743,866.00Remaining Credit0.00																									
+History & NotesCash Refunded by ZachryTWood111 @www.chase.com on Aug 17, 2022 at 0:55AMPayment received from Department of the Treasury on August 16, 2022 for 70,842,743,866.00. There is no credit remaining on this credit note.																									
+You have 22 days left in your trial, which includes all features																									
+Choose a plan to buy																									
+Zachry Tyler Wood																									
+Dashboard																									
+Business																									
+Accounting																									
+Payroll																									
+Contacts																									
+																									
+																									
+																									
+																									
+																									
+																									
+Z@																									
+Current pageOpens in new window																									
+Department of the TreasuryContacts																									
+No bills awaiting payment																									
+View recent bills report																									
+YOU OWE0.00																									
+Money out over last 12 months																									
+0																									
+70.8428G																									
+Sep																									
+Oct																									
+Nov																									
+Dec																									
+Jan																									
+Feb																									
+Mar																									
+Apr																									
+May																									
+Jun																									
+Jul																									
+Aug																									
+Activity																									
+Notes																									
+Email																									
+																									
+ITEM																									
+NUMBER																									
+REFERENCE																									
+DATE																									
+ACTIVITY DATE																									
+DUE																									
+TOTAL																									
+																									
+Note																									
+By ZachryTWood111 @www.chase.com																									
+22116905560149																									
+Aug 17, 2022																									
+Yesterday at 11:45 PM																									
+																									
+																									
+00022116905560149 All Figures are estimates based on samples---money amounts are in ZAC thousands of dollars - INCOME																									
+Accounts $12, 753,750,000.00 $12,753,750,000.00																									
+Payable (A/P)																									
+Total for Commissions and fees $12,753,750,000.00																									
+Referral/broker/selling fees $63.50																									
+04/27/2022 Check SVCCHRG Business Checking $62.50 $62.50																									
+Total for Commissions and fees with sub-accounts $12,753,750,062.50																									
+Total for Expenses $12,753,750,06250																									
+Net income $58,088,993,803.550																									
+Edited																									
+By ZachryTWood111 @www.chase.com																									
+																									
+Aug 17, 2022																									
+Yesterday at 11:29 PM																									
+																									
+																									
+																									
+Edited																									
+By ZachryTWood111 @www.chase.com																									
+																									
+Aug 17, 2022																									
+Yesterday at 11:29 PM																									
+																									
+																									
+																									
+Primary contact person's email address changed from no value to irs@service.govdelivery.com.																									
+Created																									
+By ZachryTWood111 @www.chase.com																									
+																									
+Aug 17, 2022																									
+Yesterday at 11:26 PM																									
+																									
+																									
+																									
+Department of the Treasury has been created.																									
+Bill credit note paid																									
+221165055249																									
+Aug 16, 2022																									
+Paid Aug 16, 2022																									
+																									
+-70,842,743,866.00																									
+Bill paid																									
+22116905560149																									
+May 26, 2022																									
+ v 																									
+																									
+70,842,743,866.00																									
+6 total items																									
+Contact Details																									
+																									
+Contact Person																									
+irs@service.govdelivery.com																									
+Postal Address																									
+1111 Constitution Ave. N.W.																									
+Washington																									
+D.C. 20535																									
+U.S.A.																									
+View Map																									
+Financial Details																									
+																									
+Default CurrencyUSD United States Dollar																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+																									
+                                                  
+:BUIld:: :
+
+
+
+Publish:' 
+
+-starts:'
+
+<!-- omit in toc --> 
+This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).
+GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.
+Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.
+## Contributing.md
+See [the contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project. 
+We accept different [types of contributions](https://github.com/github/docs/blob/main/contributing/types-of-contributions.md), including some that don't require you to write a single line of code.
+On the GitHub Docs site, you can click the make a contribution button at the bottom of the page to open a pull request for quick fixes like typos, updates, or link fixes.
+<img src="./assets/images/contribution_cta.png" width="400">
+For more complex contributions, you can open an issue using the most appropriate [issue template](https://github.com/github/docs/issues/new/choose) to describe the changes you'd like to see.
+If you're looking for a way to contribute, you can scan through our [existing issues](https://github.com/github/docs/issues) for something to work on. When ready, check out [Getting Started with Contributing](/CONTRIBUTING.md) for detailed instructions.
+# Join us in discussions
+We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing you've learned in our docs, join us in the [discussions](https://github.com/github/docs/discussions).
+# And that's it!
+If you're having trouble with your GitHub account, contact [Support](https://support.github.com/contact).
+That's how you can easily become a member of the GitHub Documentation community. :sparkles:
+# READ.md
+In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:
+- [content/README.md](content/README.md)
+- [content/graphql/README.md](content/graphql/README.md)
+- [content/rest/README.md](content/rest/README.md)
+- [contributing/README.md](contributing/README.md)
+- [data/README.md](data/README.md)
+- [data/reusables/README.md](data/reusables/README.md)
+- [data/variables/README.md](data/variables/README.md)
+- [components/README.md](components/README.md)
+- [lib/liquid-tags/README.md](lib/liquid-tags/README.md)
+- [middleware/README.md](middleware/README.md)
+- [script/README.md](script/README.md)
+- [stylesheets/README.md](stylesheets/README.md)
+- [tests/README.md](tests/README.md)
+- **[Skip to content
+Search or jump to…
+Pull requests
+Issues
+Marketplace
+Explorer.i.e.'@zakwarlord7 @hotmail.com/pathfinder
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+zakwarlord7
+/
+docs
+Public
+forked from github/docs
+Code
+Pull requests
+Actions
+Projects
+Security
+Insights
+Settings
+zakwarlord7/docs
+ 179 branches
+ 1 tag
+This branch is 5 commits ahead of github:main.
+Latest commit
+@zakwarlord7
+zakwarlord7 Revert "README.md"
+…
+449e4d6
+13 minutes ago
+Git stats
+ 30,052 commits
+Files
+Type
+Name
+Latest commit message
+Commit time
+.devcontainer
+Increase memory of default codespace (#29992)
+14 hours ago
+.github
+Remove codeowners for localization (#29810)
+yesterday
+.husky
+chore: remove git.io (github#17417)
+4 months ago
+.vscode
+bitore.sig
+37 minutes ago
+OPEN.js
+Create package.yarn
+32 minutes ago
+assets/images
+[2022-08-08]: Admin can control default PR merge/ squash commit messa…
+8 hours ago
+components
+Update README.md
+yesterday
+content
+[2022-08-08]: Admin can control default PR merge/ squash commit messa…
+8 hours ago
+contributing
+Revise style guide advice about the GitHub Codespaces product name af…
+2 days ago
+data
+[2022-08-08]: Admin can control default PR merge/ squash commit messa…
+8 hours ago
+docs
+Add Observability docs to service catalog (github#16878)
+2 years ago
+lib
+update search indexes
+8 hours ago
+middleware
+Remove feature flags (#29968)
+16 hours ago
+pages
+Remove airgap mode (#29964)
+yesterday
+script
+REST: Script for adding a GHEC key to API operations (#29683)
+10 hours ago
+stylesheets
+Parse color_mode cookie in browser (#29738)
+7 days ago
+tests
+Merge branch 'main' into sophietheking-landingpage
+13 hours ago
+translations
+New translation batch for es (#30003)
+8 hours ago
+.babelrc
+NextJS 12.1.6 (#26102)
+2 months ago
+.dockerignore
+Public Repo Azure Preview Environments (#25206)
+6 months ago
+.editorconfig
+chore: Add EditorConfig for IDE whitespace
+2 years ago
+.env.example
+Removing algolia (#20633)
+13 months ago
+.eslintrc.cjs
+Next12 now supports ESM (#29295)
+21 days ago
+.gitattributes
+Update references to "Git reference" (github#16968)
+4 months ago
+.gitignore
+gitignore the script/dev-toc/static folder
+6 days ago
+.node-version
+feat: upgrade to node v16, package-lock.json v2, remove aws-sdk
+15 months ago
+.npmrc
+Hello git history spelunker!
+2 years ago
+.prettierignore
+ignore all bookmarklets from prettier not just the big one
+4 months ago
+.prettierrc.json
+Pretty format (#20352)
+13 months ago
+CODE_OF_CONDUCT.md
+Add restriction on private contact of community members without permi…
+2 years ago
+CONTRIBUTING.md
+Update learning lab links to skills (#28135)
+2 months ago
+Dockerfile
+Remove feature flags (#29968)
+16 hours ago
+Dockerfile.openapi_decorator
+add data directory (#22529)
+10 months ago
+LICENSE
+Reorg LICENSE files to be more discoverable (github#204)
+2 years ago
+LICENSE-CODE
+Edit as per review
+5 months ago
+README.md
+Revert "README.md"
+13 minutes ago
+azure-preview-env-template.json
+repo sync (github#16442)
+5 months ago
+codespaces-settings.json
+Create codespaces-settings.json
+4 months ago
+crowdin.yml
+Ignore relocated and deprecated site policy docs
+2 months ago
+docker-compose.prod.tmpl.yaml
+fix: use prod registry for datadog image (#28365)
+2 months ago
+docker-compose.staging.tmpl.yaml
+Remove the Signal Science container from the staging template.
+3 months ago
+docker-compose.yaml
+Accept glob patterns for source files in openapi-check script (github…
+16 months ago
+feature-flags.json
+Remove FEATURE_NEXTJS Flag Part 1 (#20176)
+13 months ago
+jest-puppeteer.config.cjs
+Next12 now supports ESM (#29295)
+21 days ago
+jest.config.js
+Next12 now supports ESM (#29295)
+21 days ago
+jest.setup.js
+Fail on console.error in tests with failOnConsole (#25600)
+6 months ago
+next-env.d.ts
+remove need for styled-jsx construct (#28749)
+2 months ago
+next.config.js
+next@12.2.4 (#29731)
+8 days ago
+nodemon.json
+Create a storybook with callout component (#20902)
+12 months ago
+ownership.yaml
+Update ownership.yaml (#25551)
+6 months ago
+package-lock.json
+next@12.2.5 (#30004)
+8 hours ago
+package.json
+next@12.2.5 (#30004)
+8 hours ago
+server.js
+Next12 now supports ESM (#29295)
+21 days ago
+start-server.js
+Remove feature flags (#29968)
+16 hours ago
+tsconfig.json
+Refactor display-platform-specific-content (#22665)
+9 months ago
+README.md
+GitHub Docs
+This repository contains the documentation website code and Markdown source files for docs.github.com.
+
+GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.
+
+Use the table of contents icon  on the top left corner of this document to get to a specific section of this guide quickly.
+
+Contributing
+See the contributing guide for detailed instructions on how to get started with our project.
+
+We accept different types of contributions, including some that don't require you to write a single line of code.
+
+On the GitHub Docs site, you can click the make a contribution button at the bottom of the page to open a pull request for quick fixes like typos, updates, or link fixes.
+
+
+
+For more complex contributions, you can open an issue using the most appropriate issue template to describe the changes you'd like to see.
+
+If you're looking for a way to contribute, you can scan through our existing issues for something to work on. When ready, check out Getting Started with Contributing for detailed instructions.
+
+Join us in discussions
+We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing you've learned in our docs, join us in the discussions.
+
+And that's it!
+If you're having trouble with your GitHub account, contact Support.
+
+That's how you can easily become a member of the GitHub Documentation community. ✨
+
+READMEs
+In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:
+
+content/README.md
+content/graphql/README.md
+content/rest/README.md
+contributing/README.md
+data/README.md
+data/reusables/README.md
+data/variables/README.md
+components/README.md
+lib/liquid-tags/README.md
+middleware/README.md
+script/README.md
+stylesheets/README.md
+tests/README.md
+License
+The GitHub product documentation in the assets, content, and data folders are licensed under a CC-BY license.
+
+All other code in this repository is licensed under the MIT license.
+
+When using the GitHub logos, be sure to follow the GitHub logo guidelines.
+
+Thanks 💜
+Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you for being part of our ✨ community ✨!
+
+About
+The open-source repo for docs.github.com
+# .it.git.gists'@.github.com/gists/secret/BITORE
+Topics
+Resources
+Publish your first package
+Environments 5
+About
+You have unread notifications]**:: AUTOMATES AUTOMATE ALL UPDATES autoupdate AUTOMATICALLY
+## License
+
+The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).
+
+## All other code in this repository is licensed under the [Mozilla/5.0/Apache4.0**ALL RIghts REserved Access: PRivate: license](LICENSE-CODE).
+
+When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
+
+# Thanks :purple_heart:
+
+Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you for being part of our :sparkles: community :sparkles:!
diff --git a/Runs/Test'@tests.yml b/Runs/Test'@tests.yml
new file mode 100644
index 000000000000..0d0dfadda8db
--- /dev/null
+++ b/Runs/Test'@tests.yml
@@ -0,0 +1,384 @@
+CORRECTED - [22/7] - SEC Form 4
+CORRECTED - [22/7] - FORM 4	UNITED STATES SECURITIES AND EXCHANGE COMMISSION
+CORRECTED - [22/7] - Washington, D.C. 20549
+
+CORRECTED - [22/7] - STATEMENT OF CHANGES IN BENEFICIAL OWNERSHIP
+
+CORRECTED - [22/7] - Filed pursuant to Section 16(a) of the Securities Exchange Act of 1934
+CORRECTED - [22/7] - or Section 30(h) of the Investment Company Act of 1940	
+CORRECTED - [22/7] - OMB APPROVAL - CORRECTED - [22/7] - 
+CORRECTED - [22/7] - OMB Number:	3235-0287
+CORRECTED - [22/7] - Estimated average burden
+CORRECTED - [22/7] - hours per response:	0.5
+CORRECTED - [22/7] - Check this box if no longer subject to Section 16. Form 4 or Form 5 obligations may continue. See Instruction 1(b).
+CORRECTED - [22/7] - 1. Name and Address of Reporting Person*
+CORRECTED - [22/7] - WOOD    ZACHRY   TYLER
+CORRECTED - [22/7] - (Last)	(First)	(Middle)
+CORRECTED - [22/7] - 5222 BRADFORD DR
+CORRECTED - [22/7] - (Street)
+CORRECTED - [22/7] - DALLAS  TX      75235-8313
+CORRECTED - [22/7] - (City)	(State)	(Zip)
+CORRECTED - [22/7] - 2. Issuer Name and Ticker or Trading Symbol
+CORRECTED - [22/7] - CHASE CORP [ CCF ]	5. Relationship of Reporting Person(s) to Issuer
+CORRECTED - [22/7] - (Check all applicable)
+CORRECTED - [22/7] - X	Director	CORRECTED - [22/7] - 	99.9979% Owner
+CORRECTED - [22/7] - X	Officer (give title below)		Other (specify below)
+CORRECTED - [22/7] - PRESIDENT/CEO - CORRECTED - [22/7] - CORRECTED
+CORRECTED - [22/7] - 3. Date of Earliest Transaction (Month/Day/Year)
+CORRECTED - [22/7] - 08/31/2022
+CORRECTED - [22/7] - 4. If Amendment, Date of Original Filed (09/26/2007)
+CORRECTED - [22/7] - 6. Individual or Joint/Group Filing (Check All Applicable)
+CORRECTED - [22/7] - Form filed by One Reporting Person
+CORRECTED - [22/7] - filed by More than One Reporting Person
+CORRECTED - [22/7] - Table I - Non-Derivative Securities Acquired, Disposed of, or Beneficially Owned
+CORRECTED - [22/7] - 1. Title of Security (Instr. 3)	2. Transaction Date (Month/Day/Year)	2A. Deemed Execution Date, if any (Month/Day/Year)	3. Transaction Code (Instr. 8)	4. Securities Acquired (A) or Disposed Of (D) (Instr. 3, 4 and 5)	5. Amount of Securities Beneficially Owned Following Reported Transaction(s) (Instr. 3 and 4)	6. Ownership Form: Direct (D) or Indirect (I) (Instr. 4)	7. Nature of Indirect Beneficial Ownership (Instr. 4)
+CORRECTED - [22/7] -Code	V	Amount	(A) or (D)	Price
+CORRECTED - [22/7] -Chase Corporation Common Stock	08/31/2022		F		6,769(1)	D	$88.16	30,678	D	
+CORRECTED - [22/7] -Chase Corporation Common Stock								186,135(2)	I	Adam P. Chase Trust
+CORRECTED - [22/7] -Chase Corporation Common Stock								108,477(3)	I	Maria I. Chase Trust
+CORRECTED - [22/7] - Table II - Derivative Securities Acquired, Disposed of, or Beneficially Owned
+CORRECTED - [22/7] -(e.g., puts, calls, warrants, options, convertible securities)
+CORRECTED - [22/7] -1. Title of Derivative Security (Instr. 3)	2. Conversion or Exercise Price of Derivative Security	3. Transaction Date (Month/Day/Year)	3A. Deemed Execution Date, if any (Month/Day/Year)	4. Transaction Code (Instr. 8)	5. Number of Derivative Securities Acquired (A) or Disposed of (D) (Instr. 3, 4 and 5)	6. Date Exercisable and Expiration Date (Month/Day/Year)	7. Title and Amount of Securities Underlying Derivative Security (Instr. 3 and 4)	8. Price of Derivative Security (Instr. 5)	9. Number of derivative Securities Beneficially Owned Following Reported Transaction(s) (Instr. 4)	10. Ownership Form: Direct (D) or Indirect (I) (Instr. 4)	11. Nature of Indirect Beneficial Ownership (Instr. 4)
+CORRECTED - [22/7] -Code	V	(A)	(D)	Date Exercisable	Expiration Date	Title	Amount or Number of Shares
+CORRECTED - [22/7] -Explanation of Responses:
+CORRECTED - [22/7] -1. This amount represents shares withheld to pay minimum statutory income taxes pursuant to the vesting of restricted stock previously reported. The restricted stock vested on August 31, 2022.
+CORRECTED - [22/7] -
+CORRECTED - [22/7] -2. Represents shares held by the Adam P. Chase Trust.
+CORRECTED - [22/7] -3. Represents shares held by the Maria I. Chase Trust.
+CORRECTED - [22/7] - Paula M Myers by Power of Attorney	09/01/2022
+CORRECTED - [22/7] - ** Signature :_____\s\_____Significance____\S\_____ZAK_WOOD_JPMORGAN_____ :
+CORRECTED - [22/7] - **Signature :of Reporting Person	:Date :2022-09-02 :
+CORRECTED - [22/7] - Reminder: Report on a separate line for each class of securities beneficially owned directly or indirectly.
+CORRECTED - [22/7] -* If the form is filed by more than one reporting person, see Instruction 4 (b)(v).
+CORRECTED - [22/7] -** Intentional misstatements or omissions of facts constitute Federal Criminal Violations See 18 U.S.C. 1001 and 15 U.S.C. 78ff(a).
+CORRECTED - [22/7] - Note: File three copies of this Form, one of which must be manually signed. If space is insufficient, see Instruction 6 for procedure.
+CORRECTED - [22/7] - Persons who respond to the collection of information contained in this form are not required to respond unless the form displays a currently valid OMB Number.'#This_Repositorys :WORKSFLOW :Toggle-on :AUTOMATICALLY :AUTOMATE :AUTOMATE :WORKSFLOW'@47-2041-6547'@071921891'@6400-7102'@071912891'@3100053'@031000053'@4304910067530719\expiration.date.04/25\ccv836CI.yml is a basic workflow to help you get started with Actions
+CORRECTED - [22/7] - 'name: ci:CI.yml-starts-on:' '"-on'"' :
+CORRECTED - [22/7] - BEGIN :
+CORRECTED - [22/7] - DEPOSIT :					Form 1040-V 	2022
+CORRECTED - [22/7] - -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------						
+CORRECTED - [22/7] - United States Internal Revenue Service						
+CORRECTED - [22/7] - Department of the Treasury             (99)               					
+CORRECTED - [22/7] - Employer Identification Number (EIN) :xxxxx7919						
+  '- ALPH I CO.
+  '- 1600 A		Amount of estimated tax		2022 % of Income			
+'Employee :		you are paying by check or money order .  .  .  .  .  .  .  .  .  .l>|                                           275,713,076,414.51				
+  'Employee's Social Security Number :xxx-xx-1725		REV 04/09/22 INTUIT.CG.CFP SP				
+  'ZACH WOO                                                                                                                                            		units		rate	this period	YTD
+  '5222 B		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
+						
+'Subtotal Income		212,528,231,598.00			212,528,231,598.00	212,528,231,598.00
+'Total Income		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
+'Gross Profit		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
+						
+'Operating Expenses						
+'620 - Entertainment		1,270,014,771.11		0.60%	1,270,014,771.11	1,270,014,771.11
+'676 - Dues & Subscriptions		(64,454,859,587.62)		-30.33%	(64,454,859,587.62)	(64,454,859,587.62)
+'Total Operating Expenses		(63,184,844,816.51)		-29.73%	(63,184,844,816.51)	(63,184,844,816.51)
+						
+'Operating Income		275,713,076,414.51	Note: 0	129.73%	275,713,076,414.51	275,713,076,414.51
+						
+'Net Income		275,713,076,414.51		129.73%	275,713,076,414.51	275,713,076,414.51
+'12 Months Ended						
+'_______________________________________________________________________                                                                                                                     ______________________________________________________		Q4 2020				Q4 2019
+'Income Statement |Q4 2020 |Q4 2019 | :
+'USD in "000's."						
+'Repayments for Long Term Debt	|Dec. 31 2020 |Dec. 31, 2019| :					
+'Costs and expenses :|18252700 :|16185700 :| :
+'Costs of revenues		:|8473200 :|7189600 :|				
+'Research and development :|2757300 :|2601800 :|						
+'Sales and marketing	:|1105200 :|955100  :|					
+'General and administrative :|000 :|169700 :|						
+'European Comission Fines :|14130300 :|3423100 :|						
+'Total costs and expenses :|6858000000000 :|539400						
+'Income from operations :|-2267700000000 :| -1928900000000:|						
+'Other income (expense), GROSS. :|-2267700000000 :|-1928900000000 :|						
+'Income before income taxes, NET'.'' :|-2267700000000 :|-1928900000000 :|						
+'Provision for income taxes Total  paid. :|-2267700000000 :|1928900000000 :|			
+'Net :Income subtotal paid :-2267700000000 :-1928900000000 :
+'Tax :|-$2267700000000 :|-$1928900000000 :|
+'"[net, pay.]("in :"USD" :)":, :" :[ :|"$267700000000000":, :|"1928900000000000":'"'
+'*does not include interest paid, capital obligation, and underweighting						
+'Basic net income per share of Class A and B common stock and Class C capital stock(USD in "000's"). :":,'
+':Build::
+'PUBLISH
+'LAUNCH
+'DEPLOYEE
+'RELEASE'@'-'' '['' '071921891'' ']@47'-2041'-6547@'-'' '['' '031000053' ']'"''":,
+						
+
+# -Controls when the workflow will run
+-on:
+  # Triggers the workflow on push or pull request events but only for the "main" branch
+  push:
+    branches: [ "4720416547@031000053" ]
+  pull_request:
+    branches: [ "071921891" ]
+
+  # Allows you to run this workflow manually from the Actions tab
+  workflow_dispatch:
+
+# A workflow run is made up of one or more jobs that can run sequentially or in parallel
+jobs:
+  # This workflow contains a single job called "build"
+  build:
+    # The type of runner that the job will run on
+    runs-on: ubuntu-latest
+
+    # Steps represent a sequence of tasks that will be executed as part of the job
+    steps:
+      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
+      Checks-out :ActionScript :O'Auth's':' scripts''@v'-"0.0.0":,
+      #Runs::/:Run:'' '"#:: a single command using the runners shell
+      '"::##:,'' '"::#:'":,'' '"Name":, "Runs":,' '":"a-multi_line_one_line_build_script":,
+        Echo: "Hello','' 'world":,
+
+      # Runs a set of commands using the runners shell
+      "Name":, "@PNCBANK": "Runs::#This:":, "a":, "multi-one-line-build_script":,
+        run: |
+          echo Add other actions to build,
+          echo test, and deploy your project.
+https://github.dev/zakwarlord7/GitHub/doc/javascript/WORKSFLOW/dd81743fc6f4c8db36a2822af0c3692e271b0e9f/action.js#L1-L1467
+					00519										
+															
+Employee Number: 3
+Description	Amount							5/4/2022 - 6/4/2022							
+Payment Amount (Total)	9246754678763							Display All							
+1. Social Security (Employee + Employer)			26662												
+2. Medicare (Employee + Employer)			861193422444					Hourly							
+3. Federal Income Tax			8385561229657					00000							
+Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others.
+Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.															
+Employer Customized Report
+ADP
+Report Range5/4/2022 - 6/4/2022	88-1656496	state ID: 633441725	Ssn :XXXXX1725	State: 	All	Local ID: 00037305581		2267700							
+EIN:															
+Customized Report		Amount						Employee Payment Report
+ADP							
+Employee Number: 3
+Description															
+Wages, Tips and Other Compensation		22662983361014						Tips							
+Taxable SS Wages		215014						5105000							
+Taxable SS Tips		00000													
+Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT							
+Advanced EIC Payment		00000		3361014											
+Federal Income Tax Withheld		8385561229657		Bonus		00000		00000							
+Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2							
+Employee Medicare Tax Withheld		532580113436		Total		00000		00000							
+State Income Tax Withheld		00000		22662983361014											
+Local Income Tax Withheld
+Customized Employer Tax Report		00000		Deduction Summary											
+Description		Amount		Health Insurance											
+Employer SS Tax
+Employer Medicare Tax		13331		00000											
+Federal Unemployment Tax		328613309009		Tax Summary											
+State Unemployment Tax		00442		Federal Tax	00007			Total Tax							
+Customized Deduction Report		00840		$8,385,561,229,657@3,330.90		Local Tax									
+Health Insurance						00000									
+401K		00000		Advanced EIC Payment			8918141356423								
+		00000		00000				Total							
+						401K									
+						00000		00000							
+															
+ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050							
+															
+															
+SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.															
+The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.															
+															
+The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763										
+															
+															
+															
+															
+3/6/2022 at 6:37 PM															
+				Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020							
+															
+GOOGL_income-statement_Quarterly_As_Originally_Reported				24934000000	25539000000	37497000000	31211000000	30818000000							
+				24934000000	25539000000	21890000000	19289000000	22677000000							
+Cash Flow from Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000							
+Net Cash Flow from Continuing Operating Activities, Indirect				20642000000	18936000000	18525000000	17930000000	15227000000							
+Cash Generated from Operating Activities				6517000000	3797000000	4236000000	2592000000	5748000000							
+Income/Loss before Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000							
+Total Adjustments for Non-Cash Items				3439000000	3304000000	2945000000	2753000000	3725000000							
+Depreciation, Amortization and Depletion, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000							
+Depreciation and Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000							
+Depreciation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000							
+Amortization, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000							
+Stock-Based Compensation, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000							
+Taxes, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000							
+Investment Income/Loss, Non-Cash Adjustment				-14000000	64000000	-8000000	-255000000	392000000							
+Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2225000000	2806000000	-871000000	-1233000000	1702000000							
+Other Non-Cash Items				-5819000000	-2409000000	-3661000000	2794000000	-5445000000							
+Changes in Operating Capital				-5819000000	-2409000000	-3661000000	2794000000	-5445000000							
+Change in Trade and Other Receivables				-399000000	-1255000000	-199000000	7000000	-738000000							
+Change in Trade/Accounts Receivable				6994000000	3157000000	4074000000	-4956000000	6938000000							
+Change in Other Current Assets				1157000000	238000000	-130000000	-982000000	963000000							
+Change in Payables and Accrued Expenses				1157000000	238000000	-130000000	-982000000	963000000							
+Change in Trade and Other Payables				5837000000	2919000000	4204000000	-3974000000	5975000000							
+Change in Trade/Accounts Payable				368000000	272000000	-3000000	137000000	207000000							
+Change in Accrued Expenses				-3369000000	3041000000	-1082000000	785000000	740000000							
+Change in Deferred Assets/Liabilities															
+Change in Other Operating Capital															
+				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000							
+Change in Prepayments and Deposits				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000							
+Cash Flow from Investing Activities															
+Cash Flow from Continuing Investing Activities				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000							
+				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000							
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net															
+Purchase of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000							
+Sale and Disposal of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000							
+Purchase/Sale of Business, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000							
+Purchase/Acquisition of Business				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000							
+Purchase/Sale of Investments, Net															
+Purchase of Investments				36512000000	31793000000	21656000000	39267000000	35580000000							
+				100000000	388000000	23000000	30000000	-57000000							
+Sale of Investments															
+Other Investing Cash Flow					-15254000000										
+Purchase/Sale of Other Non-Current Assets, Net				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000							
+Sales of Other Non-Current Assets				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000							
+Cash Flow from Financing Activities				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000							
+Cash Flow from Continuing Financing Activities				13473000000		-12796000000	-11395000000	-7904000000							
+Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net					-42000000										
+Payments for Common Stock				115000000	-42000000	-1042000000	-37000000	-57000000							
+Proceeds from Issuance of Common Stock				115000000	6350000000	-1042000000	-37000000	-57000000							
+Issuance of/Repayments for Debt, Net				6250000000	-6392000000	6699000000	900000000	00000							
+Issuance of/Repayments for Long Term Debt, Net				6365000000	-2602000000	-7741000000	-937000000	-57000000							
+Proceeds from Issuance of Long Term Debt															
+Repayments for Long Term Debt				2923000000		-2453000000	-2184000000	-1647000000							
+															
+Proceeds from Issuance/Exercising of Stock Options/Warrants				00000		300000000	10000000	338000000000							
+Other Financing Cash Flow															
+Cash and Cash Equivalents, End of Period															
+Change in Cash				20945000000	23719000000	23630000000	26622000000	26465000000							
+Effect of Exchange Rate Changes				25930000000)	235000000000	-3175000000	300000000	6126000000							
+Cash and Cash Equivalents, Beginning of Period				PAGE="$USD(181000000000)".XLS	BRIN="$USD(146000000000)".XLS	183000000	-143000000	210000000							
+Cash Flow Supplemental Section				23719000000000		26622000000000	26465000000000	20129000000000							
+Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000							
+Income Tax Paid, Supplemental				13412000000	157000000										
+ZACHRY T WOOD								-4990000000							
+Cash and Cash Equivalents, Beginning of Period															
+Department of the Treasury															
+Internal Revenue Service															
+					Q4 2020			Q4  2019							
+Calendar Year															
+Due: 04/18/2022															
+					Dec. 31, 2020			Dec. 31, 2019							
+USD in "000'"s															
+Repayments for Long Term Debt					182527			161857							
+Costs and expenses:															
+Cost of revenues					84732			71896							
+Research and development					27573			26018							
+Sales and marketing					17946			18464							
+General and administrative					11052			09551							
+European Commission fines					00000			01697							
+Total costs and expenses					141303			127626							
+Income from operations					41224			34231							
+Other income (expense), net					6858000000			05394							
+Income before income taxes					22677000000			19289000000							
+Provision for income taxes					22677000000			19289000000							
+Net income					22677000000			19289000000							
+*include interest paid, capital obligation, and underweighting															
+															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
+*include interest paid, capital obligation, and underweighting															
+															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
+															
+															
+															
+															
+															
+															
+															
+		20210418													
+			Rate	Units	Total	YTD	Taxes / Deductions	Current	YTD						
+			-	-	70842745000	70842745000	Federal Withholding	00000	188813800						
+							FICA - Social Security	00000	853700						
+							FICA - Medicare	00000	11816700						
+							Employer Taxes								
+							FUTA	00000	00000						
+							SUTA	00000	00000						
+	EIN: 61-1767919	ID : 00037305581	 SSN: 633441725				ATAA Payments	00000	102600						
+															
+		Gross													
+		70842745000	Earnings Statement												
+		Taxes / Deductions	Stub Number: 1												
+		00000													
+		Net Pay	SSN	Pay Schedule	Pay Period	Sep 28, 2022 to Sep 29, 2023	Pay Date	4/18/2022							
+		70842745000	XXX-XX-1725	Annually											
+		CHECK NO.													
+		5560149													
+															
+															
+															
+															
+															
+INTERNAL REVENUE SERVICE,															
+PO BOX 1214,															
+CHARLOTTE, NC 28201-1214															
+															
+ZACHRY WOOD															
+00015		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Form 1040 (2021)		76033000000	20642000000	18936000000											
+Reported Normalized and Operating Income/Expense Supplemental Section															
+Total Revenue as Reported, Supplemental		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000			
+Total Operating Profit/Loss as Reported, Supplemental		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000			
+Reported Effective Tax Rate		00000	00000	00000	00000	00000		00000	00000	00000		00000			
+Reported Normalized Income										6836000000					
+Reported Normalized Operating Profit										7977000000					
+Other Adjustments to Net Income Available to Common Stockholders															
+Discontinued Operations															
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010			
+Basic EPS from Continuing Operations		00114	00031	00028	00028	00027	00022	00017	00010	00010	00015	00010			
+Basic EPS from Discontinued Operations															
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Diluted EPS from Continuing Operations		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Diluted EPS from Discontinued Operations															
+Basic Weighted Average Shares Outstanding		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000			
+Diluted Weighted Average Shares Outstanding		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000			
+Reported Normalized Diluted EPS										00010					
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010		00001	
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Basic WASO		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000			
+Diluted WASO		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000			
+Fiscal year end September 28th., 2022. | USD															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
diff --git a/Vscode b/Vscode
new file mode 100644
index 000000000000..2f21544fad2d
--- /dev/null
+++ b/Vscode
@@ -0,0 +1,5225 @@
+**BEGIN
+GLOW7: .docx.txt'
+#!/use/bin/bash/bitore.sig
+Runs:
+#+ -"diff --git a/Vscode b/Vscode
+new file mode 100644
+index 000000000000..d69fdd06453c
+--- /dev/null
++++ b/Vscode
+@@ -0,0 +1,2608 @@
++BEGIN:
++On::Runs:
++Runs:Run:
++Run-on:
++-on:
++Echo: hello-🌍!-🐛-#-fix/731/,
++"name": "my-electron-app",
++  "version": "1.0.0",
++  "description": "Hello World!",
++const: "token"''
++token: "((c)(r))"''
++[Volume].]: "[12753750].00]"''
++ITEM_ID: "BITORE_34173"''
++"name": "my-electron-app",
++  "version": "0.0.0",
++  "description": "Hello World!'@https://git.io/codeql-language-support# For most projects, this workflow file will not need changing; you simply need
++- # to commit it to your repository.
++- # CodeQL languages.
++#
++name: "CodeQL"
++'#' This workflow uses actions that are not certified by GitHub.''
++'#' They are provided by a third-party and are governed by''
++'#' separate terms of service, privacy policy, and support''
++'#' documentation.
++'#' <li>zachryiixixiiwood@gmail.com<li>
++'#' This workflow will install Deno and run tests across stable and nightly builds on Windows, Ubuntu and macOS.''
++'#' For more information see: https://github.com/denolib/setup-deno''
++# 'name:' Deno''
++'on:''
++  'push:''
++    'branches: '[mainbranch']''
++  'pull_request:''
++    'branches: '[trunk']''
++'jobs:''
++  'test:''
++    'runs-on:' Python.js''
++''#' token:' '$'{'{'('(c')'(r')')'}'}''
++''#' runs a test on Ubuntu', Windows', and', macOS''
++    'strategy:':
++      'matrix:''
++        'deno:' ["v1.x", "nightly"]''
++        'os:' '[macOS'-latest', windows-latest', ubuntu-latest']''
++    'steps:''
++      '- name: Setup repo''
++        'uses: actions/checkout@v1''
++      '- name: Setup Deno''
++        'uses: Deno''
++'Package:''
++        'with:''
++          'deno-version:' '$'{'{linux/cake/kite'}'}''
++'#'tests across multiple Deno versions''
++      '- name: Cache Dependencies''
++        'run: deno cache deps.ts''
++      '- name: Run Tests''
++        'run: deno test''
++'::Build:' sevendre''
++on:
++  push:
++    branches: [ master ]
++  pull_request:
++    # The branches below must be a subset of the branches above
++    branches: [ master ]
++  schedule:
++    - cron: '29 8 * * 5'
++jobs:
++  analyze:
++    name: Analyze
++    runs-on: ubuntu-latest
++    permissions:
++      actions: read
++      contents: read
++      security-events: write
++    strategy:
++        language: [ 'javascript' ]
++        # CodeQL supports [ 'cpp', 'csharp', 'go', 'java', 'javascript', 'python', 'ruby' ]
++        # Learn more about CodeQL language support at https://git.io/codeql-language-support
++
++    steps:
++    - name: Checkout repository
++      uses: actions/checkout@v2
++
++    # Initializes the CodeQL tools for scanning.
++    - name: Initialize CodeQL
++      uses: github/codeql-action/init@v1
++      with:
++        languages: ${{ matrix.language }}
++        # If you wish to specify custom queries, you can do so here or in a config file.
++        # By default, queries listed here will override any specified in a config file.
++        # Prefix the list here with "+" to use these queries and those in the config file.
++        # queries: ./path/to/local/query, your-org/your-repo/queries@main
++
++    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
++    # If this step fails, then you should remove it and run the build manually (see below)
++    - name: Autobuild
++      uses: github/codeql-action/autobuild@v1
++
++    # ℹ️ Command-line programs to run using the OS shell.
++    # 📚 https://git.io/JvXDl
++
++    # ✏️ If the Autobuild fails above, remove it and uncomment the following three lines
++    #    and modify them (or add more) to build your code if your project
++    #    uses a compiled language
++
++    #- run: |
++    #   make bootstrap
++    #   make release
++
++    - name: Perform CodeQL Analysis
++      uses: github/codeql-action/analyze@v1
++version:1:on:
++ownership:Zachry T WooD III:on:
++name:docs-internal:on:
++  long_name:GitHub Help Docs:on:
++  kind:heroku:on:
++  repo:https://github.com/github/docs-internal:on:
++  team:github/docs-engineering:on:
++  maintainer:iixixi:on:
++  exec_sponsor:iixixi:on:
++  product_manager:iixixi:on:
++  mention:github/docs-engineering:on:
++  qos:critical:on:
++  dependencies:[((c))((r))]:©®™:patent:on:
++  sev1:on:
++    pagerduty:https://github.pagerduty.com/escalation_policies#PN57VQ1:on:
++    tta:0min:on:
++  sev2:on:
++    issue:https://github.com/github/docs-internal/issues:on:
++    tta:5:business days:on:
++  sev3:on:
++    slack:docs:engineering:on:
++   Return:run
++© 2021 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Docs
++Contact GitHub-module.exports{.env= 12753750.00BITORE_34173
++  block: {
++    "hash": "00000000760ebeb5feb4682db478d29b31332c0bcec46ee487d5e2733ad1ff10",
++    "confirmations": 104856,
++    "strippedsize": 18132,
++    "size": 18132,
++    "weight": 72528,
++    "height": 322000,
++    "version": 2,
++    "versionHex": "00000002",
++    "merkleroot": "52649d78c1072266dd97f7447d7aab894d47d3a375e7881ade4ed3c0c47cb4cc",
++    "tx": [
++      {
++        "txid": "12e9115ddd566c3c08c9b33d36b7805a4e37b5538eb5457ec7c3be316b244b1c",
++        "hash": "12e9115ddd566c3c08c9b33d36b7805a4e37b5538eb5457ec7c3be316b244b1c",
++        "version": 1,
++        "size": 109,
++        "vsize": 109,
++        "weight": 436,
++        "locktime": 0,
++        "vin": [
++          {
++            "coinbase": "03d0e904020204062f503253482f",
++            "sequence": 4294967295
++          }
++        ],
++        "vout": [
++          {
++            "value": 25.0039411,
++            "n": 0,
++            "scriptPubKey": {
++              "asm": "03f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688 OP_CHECKSIG",
++              "hex": "2103f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688ac",
++              "type": "pubkey"
++            }
++          }
++        ],
++        "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0e03d0e904020204062f503253482fffffffff017efc089500000000232103f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688ac00000000"
++      },
++      {"login": "octcokit",
++    "id":"moejojojojo'@pradice/bitore.sig/ pkg.js"
++ require'
++require 'json'
++post '/payload' do
++:Push:: 
++- OPEN.JSON.parse(request.body.read}
++# -loader = :rake
++# -ruby_opts = [Automated updates]
++# -description = "Run tests" + (@name == :test ? "" : " for #{@name}")
++# -deps = [list]
++# -if?=name:(Hash.#:"','")
++# -deps = @name.values.first
++# -name = @name.keys.first
++# -pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
++# -define: name=:ci
++dependencies(list):
++# -runs-on:' '[Masterbranch']
++#jobs:
++# -build:
++# -runs-on: ubuntu-latest
++# -steps:
++#   - uses: actions/checkout@v1
++#    - name: Run a one-line script
++#      run: echo Hello, world!
++#    - name: Run a multi-line script
++#      run=:name: echo: hello.World!
++#        echo test, and deploy your project'@'#'!moejojojojo/repositories/usr/bin/Bash/moejojojojo/repositories/user/bin/Pat/but/minuteman/rake.i/rust.u/pom.XML/Rakefil.IU/package.json/pkg.yml/package.yam/pkg.js/Runestone.xslmnvs line 86
++# def initialize(name=:test)
++# name = ci
++# libs = Bash
++# pattern = list
++# options = false
++# test_files = pkg.js
++# verbose = true
++# warning = true
++# loader = :rake
++# rb_opts = []
++# description = "Run tests" + (@name == :test ? "" : " for #{@name}")
++# deps = []
++# if @name.is_a'?','"':'"'('"'#'"'.Hash':'"')'"''
++# deps = @name.values.first
++# name=::rake.gems/.specs_keyscutter
++# pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
++# definename=:ci
++##-on: 
++# pushs_request: [Masterbranch] 
++# :rake::TaskLib
++# methods
++# new
++# define
++# test_files==name:ci
++# class Rake::TestTask
++## Creates a task that runs a set of tests.
++# require "rake/test.task'@ci@travis.yml.task.new do |-v|
++# t.libs << "test"
++# t.test_files = FileList['test/test*.rb']
++# t.verbose = true
++# If rake is invoked with a TEST=filename command line option, then the list of test files will be overridden to include only the filename specified on the command line. This provides an easy way to run just one test.
++# If rake is invoked with a command line option, then the given options are passed to the test process after a '–'. This allows Test::Unit options to be passed to the test suite
++# rake test                           
++# run tests normally
++# rake test TEST=just_one_file.rb     
++# run just one test file.
++# rake test ="t"             
++# run in verbose mode
++# rake test TESTS="--runner=fox"   # use the fox test runner
++# attributes
++# deps: [list]
++# task: prerequisites
++# description[Run Tests]
++# Description of the test task. (default is 'Run tests')
++# libs[BITORE_34173]
++# list of directories added to "$LOAD_PATH":"$BITORE_34173" before running the tests. (default is 'lib')
++# loader[test]
++# style of test loader to use. Options are:
++# :rake – rust/rake provided tests loading script (default).
++# :test=: name =rb.dist/src.index = Ruby provided test loading script.
++direct=: $LOAD_PATH uses test using command-line loader.
++name[test]
++# name=: testtask.(default is :test)
++# options[dist]
++# Tests options passed to the test suite. An explicit TESTOPTS=opts on the command line will override this. (default is NONE)
++# pattern[list]
++# Glob pattern to match test files. (default is 'test/test*.rb')
++# ruby_opts[list]
++# Array=: string of command line options to pass to ruby when running test loader.
++# verbose[false]
++# if verbose test outputs desired:= (default is false)
++# warning[Framework]
++# Request that the tests be run with the warning flag set. E.g. warning=true implies “ruby -w” used to run the tests. (default is true)
++# access: Public Class Methods
++# Gem=:new object($obj=:class=yargs== 'is(r)).)=={ |BITORE_34173| ... }
++# Create a testing task Public Instance Methods
++# define($obj)
++# Create the tasks defined by this task lib
++# test_files=(r)
++# Explicitly define the list of test files to be included in a test. list is expected to be an array of file names (a File list is acceptable). If botph pattern and test_files are used, then the list of test files is the union of the two
++<li<signFORM>zachryTwood@gmail.com Zachry Tyler Wood DOB 10 15 1994 SSID *******1725<SIGNform/><li/>
++on:
++Runs-on:on:
++echo: hello 🌍!-🐛-fix#731,
++"name": "my-electron-app",
++  "version": "1.0.0",
++  "description": "Hello World!",
++const: "token"''
++token: "((c)(r))"''
++[Volume].]: "[12753750].00]"''
++ITEM_ID: "BITORE_34173"''
++"name": "my-electron-app",
++  "version": "0.0.0",
++  "description": "Hello World!'@https://git.io/codeql-language-support# For most projects, this workflow file will not need changing; you simply need
++- # to commit it to your repository.
++- # CodeQL languages.
++#
++name: "CodeQL"
++
++on:
++  push:
++    branches: [ master ]
++  pull_request:
++    # The branches below must be a subset of the branches above
++    branches: [ master ]
++  schedule:
++    - cron: '29 8 * * 5'
++jobs:
++  analyze:
++    name: Analyze
++    runs-on: ubuntu-latest
++    permissions:
++      actions: read
++      contents: read
++      security-events: write
++    strategy:
++        language: [ 'javascript' ]
++        # CodeQL supports [ 'cpp', 'csharp', 'go', 'java', 'javascript', 'python', 'ruby' ]
++        # Learn more about CodeQL language support at https://git.io/codeql-language-support
++
++    steps:
++    - name: Checkout repository
++      uses: actions/checkout@v2
++
++    # Initializes the CodeQL tools for scanning.
++    - name: Initialize CodeQL
++      uses: github/codeql-action/init@v1
++      with:
++        languages: ${{ matrix.language }}
++        # If you wish to specify custom queries, you can do so here or in a config file.
++        # By default, queries listed here will override any specified in a config file.
++        # Prefix the list here with "+" to use these queries and those in the config file.
++        # queries: ./path/to/local/query, your-org/your-repo/queries@main
++
++    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
++    # If this step fails, then you should remove it and run the build manually (see below)
++    - name: Autobuild
++      uses: github/codeql-action/autobuild@v1
++
++    # ℹ️ Command-line programs to run using the OS shell.
++    # 📚 https://git.io/JvXDl
++
++    # ✏️ If the Autobuild fails above, remove it and uncomment the following three lines
++    #    and modify them (or add more) to build your code if your project
++    #    uses a compiled language
++
++    #- run: |
++    #   make bootstrap
++    #   make release
++
++    - name: Perform CodeQL Analysis
++      uses: github/codeql-action/analyze@v1
++version:1:on:
++ownership:Zachry T WooD III:on:
++name:docs-internal:on:
++  long_name:GitHub Help Docs:on:
++  kind:heroku:on:
++  repo:https://github.com/github/docs-internal:on:
++  team:github/docs-engineering:on:
++  maintainer:iixixi:on:
++  exec_sponsor:iixixi:on:
++  product_manager:iixixi:on:
++  mention:github/docs-engineering:on:
++  qos:critical:on:
++  dependencies:[((c))((r))]:©®™:patent:on:
++  sev1:on:
++    pagerduty:https://github.pagerduty.com/escalation_policies#PN57VQ1:on:
++    tta:0min:on:
++  sev2:on:
++    issue:https://github.com/github/docs-internal/issues:on:
++    tta:5:business days:on:
++  sev3:on:
++    slack:docs:engineering:on:
++   Return:run
++© 2021 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Docs
++Contact GitHub-module.exports{.env= 12753750.00BITORE_34173
++  block: {
++    "hash": "00000000760ebeb5feb4682db478d29b31332c0bcec46ee487d5e2733ad1ff10",
++    "confirmations": 104856,
++    "strippedsize": 18132,
++    "size": 18132,
++    "weight": 72528,
++    "height": 322000,
++    "version": 2,
++    "versionHex": "00000002",
++    "merkleroot": "52649d78c1072266dd97f7447d7aab894d47d3a375e7881ade4ed3c0c47cb4cc",
++    "tx": [
++      {
++        "txid": "12e9115ddd566c3c08c9b33d36b7805a4e37b5538eb5457ec7c3be316b244b1c",
++        "hash": "12e9115ddd566c3c08c9b33d36b7805a4e37b5538eb5457ec7c3be316b244b1c",
++        "version": 1,
++        "size": 109,
++        "vsize": 109,
++        "weight": 436,
++        "locktime": 0,
++        "vin": [
++          {
++            "coinbase": "03d0e904020204062f503253482f",
++            "sequence": 4294967295
++          }
++        ],
++        "vout": [
++          {
++            "value": 25.0039411,
++            "n": 0,
++            "scriptPubKey": {
++              "asm": "03f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688 OP_CHECKSIG",
++              "hex": "2103f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688ac",
++              "type": "pubkey"
++            }
++          }
++        ],
++        "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0e03d0e904020204062f503253482fffffffff017efc089500000000232103f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688ac00000000"
++      },
++      {
++        "txid": "2bbdc8863add1c3105b8961bd3256a2da4890f0e47dd1511ac3192d03dad772a",
++        "hash": "2bbdc8863add1c3105b8961bd3256a2da4890f0e47dd1511ac3192d03dad772a",
++        "version": 1,
++        "size": 334,
++        "vsize": 334,
++        "weight": 1336,
++        "locktime": 0,
++        "vin": [
++          {
++            "txid": "f0c6cf91c15c535320842b0c267d76ed3c09af2bc80fd5e07af02a56feb47aee",
++            "vout": 1,
++            "scriptSig": {
++              "asm": "0 3045022100ec159e519cde81596d9634ca82e6a7cf3c7b16ee962e9e04acfe3755cc3d151402207f03883f1265b2409c94a9b3240efe5569743bb1b6456b73e5e4ff5a4993273d[ALL] 3045022100b15f229dee02196505b10f063146f8a68e234cee47d9376327a2bfcb9915cfff022002a841627eb940d0d280d1fa2bc704a31ac78a80fa89f6459281c05f172c235b[ALL] 522102632178d046673c9729d828cfee388e121f497707f810c131e0d3fc0fe0bd66d62103a0951ec7d3a9da9de171617026442fcd30f34d66100fab539853b43f508787d452ae",
++              "hex": "00483045022100ec159e519cde81596d9634ca82e6a7cf3c7b16ee962e9e04acfe3755cc3d151402207f03883f1265b2409c94a9b3240efe5569743bb1b6456b73e5e4ff5a4993273d01483045022100b15f229dee02196505b10f063146f8a68e234cee47d9376327a2bfcb9915cfff022002a841627eb940d0d280d1fa2bc704a31ac78a80fa89f6459281c05f172c235b0147522102632178d046673c9729d828cfee388e121f497707f810c131e0d3fc0fe0bd66d62103a0951ec7d3a9da9de171617026442fcd30f34d66100fab539853b43f508787d452ae"
++            },
++            "sequence": 4294967295
++          }
++        ],
++        "vout": [
++          {
++            "value": 0.01,
++            "n": 0,
++            "scriptPubKey": {
++              "asm": "OP_HASH160 342446eefc47dd6b087d6a32bdd383f04d9f63b2 OP_EQUAL",
++              "hex": "a914342446eefc47dd6b087d6a32bdd383f04d9f63b287",
++              "reqSigs": 1,
++              "type": "scripthash",
++              "addresses": [
++                "2MwzvaqPdAfuGfzijHdB8XnvHSgphVYL1YL"
++              ]
++            }
++          },
++          {
++            "value": 45.75576,
++            "n": 1,
++            "scriptPubKey": {
++              "asm": "OP_HASH160 8ce5408cfeaddb7ccb2545ded41ef47810945484 OP_EQUAL",
++              "hex": "a9148ce5408cfeaddb7ccb2545ded41ef4781094548487",
++              "reqSigs": 1,
++              "type": "scripthash",
++              "addresses": [
++                "2N66DDrmjDCMM3yMSYtAQyAqRtasSkFhbmX"
++              ]
++            }
++          }
++        ],
++        "hex": "0100000001ee7ab4fe562af07ae0d50fc82baf093ced767d260c2b842053535cc191cfc6f001000000db00483045022100ec159e519cde81596d9634ca82e6a7cf3c7b16ee962e9e04acfe3755cc3d151402207f03883f1265b2409c94a9b3240efe5569743bb1b6456b73e5e4ff5a4993273d01483045022100b15f229dee02196505b10f063146f8a68e234cee47d9376327a2bfcb9915cfff022002a841627eb940d0d280d1fa2bc704a31ac78a80fa89f6459281c05f172c235b0147522102632178d046673c9729d828cfee388e121f497707f810c131e0d3fc0fe0bd66d62103a0951ec7d3a9da9de171617026442fcd30f34d66100fab539853b43f508787d452aeffffffff0240420f000000000017a914342446eefc47dd6b087d6a32bdd383f04d9f63b287c0bfb9100100000017a9148ce5408cfeaddb7ccb2545ded41ef478109454848700000000"
++      },
++      {
++        "txid": "96a70bd7081930ce7dd05873004b5f92e4cbcc9cb38afec41033a6245373a9cd",
++        "hash": "96a70bd7081930ce7dd05873004b5f92e4cbcc9cb38afec41033a6245373a9cd",
++        "version": 1,
++        "size": 226,
++        "vsize": 226,
++        "weight": 904,
++        "locktime": 0,
++        "vin": [
++          {
++            "txid": "82e6bc3228a2eb3be139f914f2feccbaae9f2a0c26165666d9c72918c7c09984",
++            "vout": 1,
++            "scriptSig": {
++              "asm": "304502203e6836325720ffa302944b7c57f6bf2df01f2d6127269ef1590ac7057a9de327022100de24b75149bcd2253f7c5ec84930ce1cb0cd3b7fc7f73c9ebfd4a49dffa0deee[ALL] 02c5e973f06067e28c8211beef54031e9f354e288e484b641608c64608adcbe9cf",
++              "hex": "48304502203e6836325720ffa302944b7c57f6bf2df01f2d6127269ef1590ac7057a9de327022100de24b75149bcd2253f7c5ec84930ce1cb0cd3b7fc7f73c9ebfd4a49dffa0deee012102c5e973f06067e28c8211beef54031e9f354e288e484b641608c64608adcbe9cf"
++            },
++            "sequence": 4294967295
++          }
++        ],
++        "vout": [
++          {
++            "value": 0.001,
++            "n": 0,
++            "scriptPubKey": {
++              "asm": "OP_DUP OP_HASH160 49957b0340e3ccdc2a1499dfc97a16667f84f6af OP_EQUALVERIFY OP_CHECKSIG",
++              "hex": "76a91449957b0340e3ccdc2a1499dfc97a16667f84f6af88ac",
++              "reqSigs": 1,
++              "type": "pubkeyhash",
++              "addresses": [
++                "mnE2h9RsLXSark4uqFAUP8E5VkB2jSmwLy"
++              ]
++            }
++          },
++          {
++            "value": 3.99363616,
++            "n": 1,
++            "scriptPubKey": {
++              "asm": "OP_DUP OP_HASH160 fc484ec72d24140f24db5ddcaa022d437e3e1afa OP_EQUALVERIFY OP_CHECKSIG",
++              "hex": "76a914fc484ec72d24140f24db5ddcaa022d437e3e1afa88ac",
++              "reqSigs": 1,
++              "type": "pubkeyhash",
++              "addresses": [
++                "n4WuCRZJxt8DoYyraUQm54kTzscL3ZTpEc"
++              ]
++            }
++          }
++        ],
++        "hex": "01000000018499c0c71829c7d9665616260c2a9faebaccfef214f939e13beba22832bce682010000006b48304502203e6836325720ffa302944b7c57f6bf2df01f2d6127269ef1590ac7057a9de327022100de24b75149bcd2253f7c5ec84930ce1cb0cd3b7fc7f73c9ebfd4a49dffa0deee012102c5e973f06067e28c8211beef54031e9f354e288e484b641608c64608adcbe9cfffffffff02a0860100000000001976a91449957b0340e3ccdc2a1499dfc97a16667f84f6af88ac20cecd17000000001976a914fc484ec72d24140f24db5ddcaa022d437e3e1afa88ac00000000"
++      },
++      {
++        "txid": "e7c5d2c0376414f863924780d75f6465c4cdf442e766e84bac29d4f05c08dcf5",
++        "hash": "e7c5d2c0376414f863924780d75f6465c4cdf442e766e84bac29d4f05c08dcf5",
++        "version": 1,
++        "size": 258,
++        "vsize": 258,
++        "weight": 1032,
++        "locktime": 0,
++        "vin": [
++          {
++            "txid": "be79951db9d64635f00a742d4314bbd6ab4ad4cbf03e29a398b266a2c2bc09ce",
++            "vout": 1,
++            "scriptSig": {
++              "asm": "3045022100e410093db9a3f086cb0b92aab47167a01579aac428e5a29f7bbd706afd5103c3022008ba7ad0183896e3209a10a86b47495cacc43b76504cf2e2f1e0b3416d04b0fe[ALL] 040cfa3dfb357bdff37c8748c7771e173453da5d7caa32972ab2f5c888fff5bbaeb5fc812b473bf808206930fade81ef4e373e60039886b51022ce68902d96ef70",
++              "hex": "483045022100e410093db9a3f086cb0b92aab47167a01579aac428e5a29f7bbd706afd5103c3022008ba7ad0183896e3209a10a86b47495cacc43b76504cf2e2f1e0b3416d04b0fe0141040cfa3dfb357bdff37c8748c7771e173453da5d7caa32972ab2f5c888fff5bbaeb5fc812b473bf808206930fade81ef4e373e60039886b51022ce68902d96ef70"
++            },
++            "sequence": 4294967295
++          }
++        ],
++        "vout": [
++          {
++            "value": 0.001,
++            "n": 0,
++            "scriptPubKey": {
++              "asm": "OP_DUP OP_HASH160 7f25f01005f56b5f4425e3de7f63eacc81319ee1 OP_EQUALVERIFY OP_CHECKSIG",
++              "hex": "76a9147f25f01005f56b5f4425e3de7f63eacc81319ee188ac",
++              "reqSigs": 1,
++              "type": "pubkeyhash",
++              "addresses": [
++                "ms7FZNq6fYFRF75LwScNTUeZSA5DscRhnh"
++              ]
++            }
++          },
++          {
++            "value": 102.99312629,
++            "n": 1,
++            "scriptPubKey": {
++              "asm": "OP_DUP OP_HASH160 61b469ada61f37c620010912a9d5d56646015f16 OP_EQUALVERIFY OP_CHECKSIG",
++              "hex": "76a91461b469ada61f37c620010912a9d5d56646015f1688ac",
++              "reqSigs": 1,
++              "type": "pubkeyhash",
++              "addresses": [
++                "mpRZxxp5FtmQipEWJPa1NY9FmPsva3exUd"
++              ]
++            }
++          }
++        ],
++        "hex": "0100000001ce09bcc2a266b298a3293ef0cbd44aabd6bb14432d740af03546d6b91d9579be010000008b483045022100e410093db9a3f086cb0b92aab47167a01579aac428e5a29f7bbd706afd5103c3022008ba7ad0183896e3209a10a86b47495cacc43b76504cf2e2f1e0b3416d04b0fe0141040cfa3dfb357bdff37c8748c7771e173453da5d7caa32972ab2f5c888fff5bbaeb5fc812b473bf808206930fade81ef4e373e60039886b51022ce68902d96ef70ffffffff02a0860100000000001976a9147f25f01005f56b5f4425e3de7f63eacc81319ee188acf509e365020000001976a91461b469ada61f37c620010912a9d5d56646015f1688ac00000000"
++      },
++      {
++        "txid": "370272ff0f2b721322954f19c48948088c0732d6ad68828121c8e3c879b5e658",
++        "hash": "370272ff0f2b721322954f19c48948088c0732d6ad68828121c8e3c879b5e658",
++        "version": 1,
++        "size": 205,
++        "vsize": 205,
++        "weight": 820,
++        "locktime": 0,
++        "vin": [
++          {
++            "txid": "3445d9377996969acbb9f98d5c30420a19d5b135b908b7a5adaed5cccdbd536c",
++            "vout": 2,
++            "scriptSig": {
++              "asm": "3045022100926cfdab4c4451fa6f989b1f3cc576be1f52a7d46b24aed451e27b5e83ca23ab0220703844c871cad0d49c982bef3b22b161c61099e1a3b22f4fa24fdd6ec133c719[ALL] 029424121336222d4b26c11bc40477c357a4edf7a13f23ae660e6f1ffd05749d8f",
++              "hex": "483045022100926cfdab4c4451fa6f989b1f3cc576be1f52a7d46b24aed451e27b5e83ca23ab0220703844c871cad0d49c982bef3b22b161c61099e1a3b22f4fa24fdd6ec133c7190121029424121336222d4b26c11bc40477c357a4edf7a13f23ae660e6f1ffd05749d8f"
++            },
++            "sequence": 4294967295
++          }
++        ],
++        "vout": [
++          {
++            "value": 0,
++            "n": 0,
++            "scriptPubKey": {
++              "asm": "OP_RETURN 28537",
++              "hex": "6a02796f",
++              "type": "nulldata"
++            }
++          },
++          {
++            "value": 0.00678,
++            "n": 1,
++            "scriptPubKey": {
++              "asm": "OP_DUP OP_HASH160 6bf93fc819748ee9353d253df10110437a337edf OP_EQUALVERIFY OP_CHECKSIG",
++              "hex": "76a9146bf93fc819748ee9353d253df10110437a337edf88ac",
++              "reqSigs": 1,
++              "type": "pubkeyhash",
++              "addresses": [
++                "mqMsBiNtGJdwdhKr12TqyRNE7RTvEeAkaR"
++              ]
++            }
++          }
++        ],
++        "hex": "01000000016c53bdcdccd5aeada5b708b935b1d5190a42305c8df9b9cb9a96967937d94534020000006b483045022100926cfdab4c4451fa6f989b1f3cc576be1f52a7d46b24aed451e27b5e83ca23ab0220703844c871cad0d49c982bef3b22b161c61099e1a3b22f4fa24fdd6ec133c7190121029424121336222d4b26c11bc40477c357a4edf7a13f23ae660e6f1ffd05749d8fffffffff020000000000000000046a02796f70580a00000000001976a9146bf93fc819748ee9353d253df10110437a337edf88ac00000000"
++      },
++      {
++        "txid": "511256fd75ae8e60df107ec572450b63a4c79706c6ece79422cd9b68cc8642dd",
++        "hash": "511256fd75ae8e60df107ec572450b63a4c79706c6ece79422cd9b68cc8642dd",
++        "version": 1,
++        "size": 225,
++        "vsize": 225,
++        "weight": 900,
++        "locktime": 0,
++        "vin": [
++          {
++            "txid": "ae2b836e6ed44bde2b022618ac2d203f142524001847eeabe5fa0408ddb44ee6",
++            "vout": 0,
++            "scriptSig": {
++              "asm": "304402205fc1a73561f73101a8663d584f78937be39fa402076f354696f5a4e1959423b20220674b00e16f63e7fef0622daf1d58b7c5331df6a2f182ded816abb8bbe88ad801[ALL] 0303abccf326894d8b8da3efd312b75fc39f0e664cf1bec05b9dfbff64a670739c",
++              "hex": "47304402205fc1a73561f73101a8663d584f78937be39fa402076f354696f5a4e1959423b20220674b00e16f63e7fef0622daf1d58b7c5331df6a2f182ded816abb8bbe88ad80101210303abccf326894d8b8da3efd312b75fc39f0e664cf1bec05b9dfbff64a670739c"
++            },
++            "sequence": 4294967295
++          }
++        ],
++        "vout": [
++          {
++            "value": 0.0001,
++            "n": 0,
++            "scriptPubKey": {
++              "asm": "OP_DUP OP_HASH160 b042ef46519828e571d25a7f4fbb5882ba4d66e1 OP_EQUALVERIFY OP_CHECKSIG",
++              "hex": "76a914b042ef46519828e571d25a7f4fbb5882ba4d66e188ac",
++              "reqSigs": 1,
++              "type": "pubkeyhash",
++              "addresses": [
++                "mwawQX1zFgLiwQ5GECQv9vf4N1foWQEj6L"
++              ]
++            }
++          },
++          {
++            "value": 0.0846,
++            "n": 1,
++            "scriptPubKey": {
++              "asm": "OP_DUP OP_HASH160 32c9eb1967867dc3761717629fe2fad817e6e4d4 OP_EQUALVERIFY OP_CHECKSIG",
++              "hex": "76a91432c9eb1967867dc3761717629fe2fad817e6e4d488ac",
++              "reqSigs": 1,
++              "type": "pubkeyhash",
++              "addresses": [
++                "mk9VyBL4rcdQPkVuCKAvip1sFM4q4NtnQf"
++              ]
++            }
++          }
++        ],
++        "hex": "0100000001e64eb4dd0804fae5abee4718002425143f202dac1826022bde4bd46e6e832bae000000006a47304402205fc1a73561f73101a8663d584f78937be39fa402076f354696f5a4e1959423b20220674b00e16f63e7fef0622daf1d58b7c5331df6a2f182ded816abb8bbe88ad80101210303abccf326894d8b8da3efd312b75fc39f0e664cf1bec05b9dfbff64a670739cffffffff0210270000000000001976a914b042ef46519828e571d25a7f4fbb5882ba4d66e188ace0168100000000001976a91432c9eb1967867dc3761717629fe2fad817e6e4d488ac00000000"
++      },
++      {
++        "txid": "7efcedce69805d8c7a7e55f9a46a79ac5597a09de77ee6b583022973f78344d3",
++        "hash": "7efcedce69805d8c7a7e55f9a46a79ac5597a09de77ee6b583022973f78344d3",
++        "version": 1,
++"login": "octcokit",
++    "id":"moejojojojo'@pradice/bitore.sig/ pkg.js"
++ require'
++require 'json'
++post '/payload' do
++  push = JSON.parse(request.body.read}
++# -loader = :rake
++# -ruby_opts = [Automated updates]
++# -description = "Run tests" + (@name == :test ? "" : " for #{@name}")
++# -deps = [list]
++# -if?=name:(Hash.#:"','")
++# -deps = @name.values.first
++# -name = @name.keys.first
++# -pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
++# -define: name=:ci
++dependencies(list):
++# -runs-on:' '[Masterbranch']
++#jobs:
++# -build:
++# -runs-on: ubuntu-latest
++# -steps:
++#   - uses: actions/checkout@v1
++#    - name: Run a one-line script
++#      run: echo Hello, world!
++#    - name: Run a multi-line script
++#      run=:name: echo: hello.World!
++#        echo test, and deploy your project'@'#'!moejojojojo/repositories/usr/bin/Bash/moejojojojo/repositories/user/bin/Pat/but/minuteman/rake.i/rust.u/pom.XML/Rakefil.IU/package.json/pkg.yml/package.yam/pkg.js/Runestone.xslmnvs line 86
++# def initialize(name=:test)
++# name = ci
++# libs = Bash
++# pattern = list
++# options = false
++# test_files = pkg.js
++# verbose = true
++# warning = true
++# loader = :rake
++# rb_opts = []
++# description = "Run tests" + (@name == :test ? "" : " for #{@name}")
++# deps = []
++# if @name.is_a'?','"':'"'('"'#'"'.Hash':'"')'"''
++# deps = @name.values.first
++# name=::rake.gems/.specs_keyscutter
++# pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
++# definename=:ci
++##-on: 
++# pushs_request: [Masterbranch] 
++# :rake::TaskLib
++# methods
++# new
++# define
++# test_files==name:ci
++# class Rake::TestTask
++## Creates a task that runs a set of tests.
++# require "rake/test.task'@ci@travis.yml.task.new do |-v|
++# t.libs << "test"
++# t.test_files = FileList['test/test*.rb']
++# t.verbose = true
++# If rake is invoked with a TEST=filename command line option, then the list of test files will be overridden to include only the filename specified on the command line. This provides an easy way to run just one test.
++# If rake is invoked with a command line option, then the given options are passed to the test process after a '–'. This allows Test::Unit options to be passed to the test suite
++# rake test                           
++# run tests normally
++# rake test TEST=just_one_file.rb     
++# run just one test file.
++# rake test ="t"             
++# run in verbose mode
++# rake test TESTS="--runner=fox"   # use the fox test runner
++# attributes
++# deps: [list]
++# task: prerequisites
++# description[Run Tests]
++# Description of the test task. (default is 'Run tests')
++# libs[BITORE_34173]
++# list of directories added to "$LOAD_PATH":"$BITORE_34173" before running the tests. (default is 'lib')
++# loader[test]
++# style of test loader to use. Options are:
++# :rake – rust/rake provided tests loading script (default).
++# :test=: name =rb.dist/src.index = Ruby provided test loading script.
++direct=: $LOAD_PATH uses test using command-line loader.
++name[test]
++# name=: testtask.(default is :test)
++# options[dist]
++# Tests options passed to the test suite. An explicit TESTOPTS=opts on the command line will override this. (default is NONE)
++# pattern[list]
++# Glob pattern to match test files. (default is 'test/test*.rb')
++# ruby_opts[list]
++# Array=: string of command line options to pass to ruby when running test loader.
++# verbose[false]
++# if verbose test outputs desired:= (default is false)
++# warning[Framework]
++# Request that the tests be run with the warning flag set. E.g. warning=true implies “ruby -w” used to run the tests. (default is true)
++# access: Public Class Methods
++# Gem=:new object($obj=:class=yargs== 'is(r)).)=={ |BITORE_34173| ... }
++# Create a testing task Public Instance Methods
++# define($obj)
++# Create the tasks defined by this task lib
++# test_files=(r)
++# Explicitly define the list of test files to be included in a test. list is expected to be an array of file names (a File list is acceptable). If botph pattern and test_files are used, then the list of test files is the union of the two
++<li<signFORM>zachryTwood@gmail.com Zachry Tyler Wood DOB 10 15 1994 SSID *******1725<SIGNform/><li/>
++{
++  "scripts": {
++    "test": "jest",
++    "start": "./node_modules/.bin/node-pg-migrate up && node app.js",
++    "migrate": "./node_modules/.bin/node-pg-migrate"
++  },
++  "devDependencies": {
++    "jest": "^24.8.0"
++  },
++  "dependencies": {
++    "bitcoin-core": "^3.0.0",
++    "body-parser": "^1.19.0",
++    "cors": "^2.8.5",
++    "dotenv": "^8.2.0",
++    "express": "^4.16.4",
++    "node-pg-migrate": "^5.9.0",
++    "pg": "^8.6.0"
++  }
++name": '((c)'":,'"''
++use": is'='==yargs(ARGS)).); /
++module: env.export((r),
++
++'"name": '((c)'":,'"''
++'".dirname": is'='==yargs(ARGS)).)"; /'"''t.verbose{
++  "scripts": {
++    "test": "jest",
++    "start": "./node_modules/.bin/node-pg-migrate up && node app.js",
++    "migrate": "./node_modules/.bin/node-pg-migrate"
++  },
++  "devDependencies": {
++    "jest": "^24.8.0"
++  },
++  "dependencies": {
++    "bitcoin-core": "^3.0.0",
++    "body-parser": "^1.19.0",
++    "cors": "^2.8.5",
++    "dotenv": "^8.2.0",
++    "express": "^4.16.4",
++    "node-pg-migrate": "^5.9.0",
++    "pg": "^8.6.0"
++  }
++}
++Andrekolodochka Patch 5
++#20155
++zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
++Conversation 0
++Commits 7
++Checks 0
++Files changed ∞
++Conversation
++zakwarlord7
++@zakwarlord7 zakwarlord7 commented 27 minutes ago • 
++Why:
++Closes [issue link]{[Skip to content
++Your account has been flagged.
++Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
++https://github.com/github
++/
++docs
++Public
++Code
++Issues
++106
++Pull requests
++59
++Discussions
++Actions
++Projects
++3
++Security
++Insights
++Jump to bottom
++Andrekolodochka Patch 5 #20155
++Open
++zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
++Open
++Andrekolodochka Patch 5
++#20155
++zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
++Conversation 0
++Commits 7
++Checks 0
++Files changed ∞
++Conversation
++zakwarlord7
++@zakwarlord7 zakwarlord7 commented 9 minutes ago
++Why:
++Closes [issue link]
++
++What's being changed (if available, include any code snippets, screenshots, or gifs):
++Check off the following:
++I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
++For content changes, I have completed the self-review checklist.
++Writer impact (This section is for GitHub staff members only):
++This pull request impacts the contribution experience
++I have added the 'writer impact' label
++I have added a description and/or a video demo of the changes below (e.g. a "before and after video")
++zakwarlord7 added 7 commits 23 days ago
++@zakwarlord7
++BITORE
++0c87d46
++@zakwarlord7
++Create BITCORE
++ebe3a4b
++@zakwarlord7
++bitore.sig
++c3442e6
++@zakwarlord7
++Revert "bitore.sig"
++2187703
++@zakwarlord7
++Biore.sig (https://github.com/zakwarlord7/docs/pull/27[)](https://github.com/github/docs/pull/20155/commits/88d9e481a768c0b12529d91e83fcc745c6a33545)
++88d9e48
++@zakwarlord7
++Update index.md
++4144259
++@zakwarlord7
++Update index.md
++d7cd5b7
++@zakwarlord7 zakwarlord7 requested review from a team as code owners 9 minutes ago
++zakwarlord7 commented 9 minutes ago
++Skip to main content
++GitHub Docs
++Quickstart for GitHub Actions
++In this article
++Introduction
++Creating your first workflow
++Viewing your workflow results
++More starter workflows
++More complex examples
++Next steps
++Try out the features of GitHub Actions in 5 minutes or less.
++
++Introduction
++You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
++
++The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
++
++Creating your first workflow
++Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
++
++In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
++
++Copy the following YAML contents into the github-actions-demo.yml file:
++
++YAML
++name: GitHub Actions Demo
++on: [push]
++jobs:
++Explore-GitHub-Actions:
++runs-on: ubuntu-latest
++steps:
++
++run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
++run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
++run: echo "🔎 The name of your branch is {{ github.repository }}."
++name: Check out repository code
++uses: actions/checkout@v3
++run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
++run: echo "🖥️ The workflow is now ready to test your code on the runner."
++name: List files in the repository
++run: |
++ls ${{ github.workspace }}
++run: echo "🍏 This job's status is ${{ job.status }}."
++Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
++Commit workflow file
++Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
++
++Viewing your workflow results
++On GitHub.com, navigate to the main page of the repository.
++
++Under your repository name, click Actions.
++Actions tab in the main repository navigation
++
++In the left sidebar, click the workflow you want to see.
++
++Workflow list in left sidebar
++
++From the list of workflow runs, click the name of the run you want to see.
++
++Name of workflow run
++
++Under Jobs , click the Explore-GitHub-Actions job.
++
++Locate job
++
++The log shows you how each of the steps was processed. Expand any of the steps to view its details.
++
++Example workflow results
++
++For example, you can see the list of files in your repository:
++Example action detail
++
++More starter workflows
++GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
++
++You can browse the full list of starter workflow in the actions/starter-workflows repository.
++
++More complex examples
++For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
++
++Next steps
++The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
++
++Your repository can contain multiple workflows that trigger different jobs based on different events.
++You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
++GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
++
++"Learn GitHub Actions" for an in-depth tutorial.
++Did this doc help you?
++
++Privacy policy
++Help us make these docs great!
++All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
++
++Or, learn how to contribute.
++
++Still need help?
++Ask the GitHub community
++Contact support
++© 2022 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Help
++Contact GitHub
++Pricing
++Developer API
++Training
++Blog
++About
++
++Quickstart for GitHub Actions - GitHub Docs
++
++Merge state
++Add more commits by pushing to the andrekolodochka-patch-1 branch on zakwarlord7/docs.
++
++Review requested
++Review has been requested on this pull request. It is not required to merge.
++2 pending reviewers
++This branch has conflicts that must be resolved
++Only those with write access to this repository can merge pull requests.
++Conflicting files
++.github/PULL_REQUEST_TEMPLATE.md
++.github/actions-scripts/create-enterprise-issue.js
++.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md
++.github/actions-scripts/enterprise-server-issue-templates/release-issue.md
++.github/actions-scripts/fr-add-docs-reviewers-requests.js
++.github/actions-scripts/projects.js
++.github/actions-scripts/ready-for-docs-review.js
++.github/allowed-actions.js
++.github/dependabot.yml
++.github/workflows/60-days-stale-check.yml
++.github/workflows/check-broken-links-github-github.yml
++.github/workflows/content-changes-table-comment.yml
++.github/workflows/crowdin.yml
++.github/workflows/enterprise-dates.yml
++.github/workflows/hubber-contribution-help.yml
++.github/workflows/move-help-wanted-issues.yml
++.github/workflows/openapi-decorate.yml
++.github/workflows/os-ready-for-review.yml
++.github/workflows/remove-unused-assets.yml
++.github/workflows/repo-sync-stalls.yml
++.github/workflows/repo-sync.yml
++.github/workflows/staging-build-pr.yml
++.github/workflows/staging-deploy-pr.yml
++.github/workflows/staging-undeploy-pr.yml
++.github/workflows/start-new-engineering-pr-workflow.yml
++...
++
++Skip to main content
++GitHub Docs
++Quickstart for GitHub Actions
++In this article
++Introduction
++Creating your first workflow
++Viewing your workflow results
++More starter workflows
++More complex examples
++Next steps
++Try out the features of GitHub Actions in 5 minutes or less.
++
++Introduction
++You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
++
++The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
++
++Creating your first workflow
++Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
++
++In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
++
++Copy the following YAML contents into the github-actions-demo.yml file:
++
++YAML
++name: GitHub Actions Demo
++on: [push]
++jobs:
++Explore-GitHub-Actions:
++runs-on: WindowsXP89_98/intel82/linux36_82 tar gz Zip WinRaWr.unzipped/.jar/jee.enc-module'@package.yam/API/APk.Adk sdk.S.E/jdk.J.C/Jinja-datadog.jar/jre'@sun.java.org/dl/WIZARD/install/installer/arc/code.dir/.dist'@config yml/install/unit/inityit//POST
++FIinsh.
++100%complete.
++Don.
++Response:' 403OJ=>TIERAFORMA=> SHAPEshit'"'X'"'=''=shapeSHIFT'"x'"'=''='::Push:: console.(func)==>=>>atest
++steps:
++
++run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
++run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
++run: echo "🔎 The name of your branch is {{ github.repository }}."
++name: Check out repository code
++uses: actions/checkout@v3
++run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
++run: echo "🖥️ The workflow is now ready to test your code on the runner."
++name: List files in the repository
++run: |
++ls ${{ github.workspace }}
++run: echo "🍏 This job's status is ${{ job.status }}."
++Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
++Commit workflow file
++Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
++
++Viewing your workflow results
++On GitHub.com, navigate to the main page of the repository.
++
++Under your repository name, click Actions.
++Actions tab in the main repository navigation
++
++In the left sidebar, click the workflow you want to see.
++
++Workflow list in left sidebar
++
++From the list of workflow runs, click the name of the run you want to see.
++
++Name of workflow run
++
++Under Jobs , click the Explore-GitHub-Actions job.
++
++Locate job
++
++The log shows you how each of the steps was processed. Expand any of the steps to view its details.
++
++Example workflow results
++
++For example, you can see the list of files in your repository:
++Example action detail
++
++More starter workflows
++GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
++
++You can browse the full list of starter workflow in the actions/starter-workflows repository.
++
++More complex examples
++For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
++
++Next steps
++The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
++
++Your repository can contain multiple workflows that trigger different jobs based on different events.
++You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
++GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
++
++"Learn GitHub Actions" for an in-depth tutorial.
++Did this doc help you?
++
++Privacy policy
++Help us make these docs great!
++All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
++
++Or, learn how to contribute.
++
++Still need help?
++Ask the GitHub community
++Contact support
++© 2022 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Help
++Contact GitHub
++Pricing
++Developer API
++Training
++Blog
++About
++
++Quickstart for GitHub Actions - GitHub Docs
++
++Remember, contributions to this repository should follow its contributing guidelines and code of conduct.
++ProTip! Add comments to specific lines under Files changed.
++Reviewers
++@github/docs-localization
++docs-localization
++@github/docs-engineering
++docs-engineering
++Still in progress?
++Assignees
++No one assigned
++Labels
++None yet
++Projects
++None yet
++Milestone
++No milestone
++Development
++Successfully merging this pull request may close these issues.
++
++None yet
++
++Notifications
++Customize
++You’re receiving notifications because you’re watching this repository.
++1 participant
++@zakwarlord7
++Allow edits and access to secrets by maintainers
++Footer
++© 2022 GitHub, Inc.
++Footer navigation
++Terms
++Privacy
++Security
++Status
++Docs
++Contact GitHub
++Pricing
++API
++Training
++Blog
++About
++zakwarlord7 commented now Skip to main content GitHub Docs Quickstart for GitHub Actions In this article Introduction Creating your first workflow Viewing your workflow results More starter workflows More complex examples Next steps Try out the features of GitHub Actions in 5 minutes or less. Introduction You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions. The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository. Creating your first workflow Create a .github/workflows directory in your repository on GitHub if this directory does not already exist. In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files." Copy the following YAML contents into the github-actions-demo.yml file: YAML name: GitHub Actions Demo on: [push] jobs: Explore-GitHub-Actions: runs-on: ubuntu-latest steps: - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event." - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!" - run: echo "🔎 The name of your branch is {{ github.repository }}." - name: Check out repository code uses: actions/checkout@v3 - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner." - run: echo "🖥️ The workflow is now ready to test your code on the runner." - name: List files in the repository run: | ls ${{ github.workspace }} - run: echo "🍏 This job's status is ${{ job.status }}." Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file. Commit workflow file Committing the workflow file to a branch in your repository triggers the push event and runs your workflow. Viewing your workflow results On GitHub.com, navigate to the main page of the repository. Under your repository name, click Actions. Actions tab in the main repository navigation In the left sidebar, click the workflow you want to see. Workflow list in left sidebar From the list of workflow runs, click the name of the run you want to see. Name of workflow run Under Jobs , click the Explore-GitHub-Actions job. Locate job The log shows you how each of the steps was processed. Expand any of the steps to view its details. Example workflow results For example, you can see the list of files in your repository: Example action detail More starter workflows GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is. You can browse the full list of starter workflow in the actions/starter-workflows repository. More complex examples For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices. Next steps The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions: Your repository can contain multiple workflows that trigger different jobs based on different events. You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners. GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions: "Learn GitHub Actions" for an in-depth tutorial. Did this doc help you? Privacy policy Help us make these docs great! All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request. Or, learn how to contribute. Still need help? Ask the GitHub community Contact support © 2022 GitHub, Inc. Terms Privacy Security Status Help Contact GitHub Pricing Developer API Training Blog About Quickstart for GitHub Actions - GitHub Docs
++
++What's being changed (if available, include any code snippets, screenshots, or gifs):
++Check off the following:
++ I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
++ For content changes, I have completed the self-review checklist.
++Writer impact (This section is for GitHub staff members only):
++ This pull request impacts the contribution experience
++ I have added the 'writer impact' label
++ I have added a description and/or a video demo of the changes below (e.g. a "before and after video")
++Skip to content
++Your account has been flagged.
++Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
++https://github.com/github
++/
++docs
++Public
++Code
++Issues
++106
++Pull requests
++59
++Discussions
++Actions
++Projects
++3
++Security
++Insights
++Jump to bottom
++Andrekolodochka Patch 5 #20155
++Open
++zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
++Open
++Andrekolodochka Patch 5
++#20155
++zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
++Conversation 0
++Commits 7
++Checks 0
++Files changed ∞
++Conversation
++zakwarlord7
++@zakwarlord7 zakwarlord7 commented 9 minutes ago
++Why:
++Closes [issue link]
++
++What's being changed (if available, include any code snippets, screenshots, or gifs):
++Check off the following:
++I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
++For content changes, I have completed the self-review checklist.
++Writer impact (This section is for GitHub staff members only):
++This pull request impacts the contribution experience
++I have added the 'writer impact' label
++I have added a description and/or a video demo of the changes below (e.g. a "before and after video")
++zakwarlord7 added 7 commits 23 days ago
++@zakwarlord7
++BITORE
++0c87d46
++@zakwarlord7
++Create BITCORE
++ebe3a4b
++@zakwarlord7
++bitore.sig
++c3442e6
++@zakwarlord7
++Revert "bitore.sig"
++2187703
++@zakwarlord7
++Biore.sig (https://github.com/zakwarlord7/docs/pull/27[)](https://github.com/github/docs/pull/20155/commits/88d9e481a768c0b12529d91e83fcc745c6a33545)
++88d9e48
++@zakwarlord7
++Update index.md
++4144259
++@zakwarlord7
++Update index.md
++d7cd5b7
++@zakwarlord7 zakwarlord7 requested review from a team as code owners 9 minutes ago
++zakwarlord7 commented 9 minutes ago
++Skip to main content
++GitHub Docs
++Quickstart for GitHub Actions
++In this article
++Introduction
++Creating your first workflow
++Viewing your workflow results
++More starter workflows
++More complex examples
++Next steps
++Try out the features of GitHub Actions in 5 minutes or less.
++
++Introduction
++You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
++
++The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
++
++Creating your first workflow
++Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
++
++In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
++
++Copy the following YAML contents into the github-actions-demo.yml file:
++
++YAML
++name: GitHub Actions Demo
++on: [push]
++jobs:
++Explore-GitHub-Actions:
++runs-on: ubuntu-latest
++steps:
++
++run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
++run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
++run: echo "🔎 The name of your branch is {{ github.repository }}."
++name: Check out repository code
++uses: actions/checkout@v3
++run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
++run: echo "🖥️ The workflow is now ready to test your code on the runner."
++name: List files in the repository
++run: |
++ls ${{ github.workspace }}
++run: echo "🍏 This job's status is ${{ job.status }}."
++Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
++Commit workflow file
++Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
++
++Viewing your workflow results
++On GitHub.com, navigate to the main page of the repository.
++
++Under your repository name, click Actions.
++Actions tab in the main repository navigation
++
++In the left sidebar, click the workflow you want to see.
++
++Workflow list in left sidebar
++
++From the list of workflow runs, click the name of the run you want to see.
++
++Name of workflow run
++
++Under Jobs , click the Explore-GitHub-Actions job.
++
++Locate job
++
++The log shows you how each of the steps was processed. Expand any of the steps to view its details.
++
++Example workflow results
++
++For example, you can see the list of files in your repository:
++Example action detail
++
++More starter workflows
++GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
++
++You can browse the full list of starter workflow in the actions/starter-workflows repository.
++
++More complex examples
++For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
++
++Next steps
++The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
++
++Your repository can contain multiple workflows that trigger different jobs based on different events.
++You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
++GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
++
++"Learn GitHub Actions" for an in-depth tutorial.
++Did this doc help you?
++
++Privacy policy
++Help us make these docs great!
++All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
++
++Or, learn how to contribute.
++
++Still need help?
++Ask the GitHub community
++Contact support
++© 2022 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Help
++Contact GitHub
++Pricing
++Developer API
++Training
++Blog
++About
++
++Quickstart for GitHub Actions - GitHub Docs
++
++Merge state
++Add more commits by pushing to the andrekolodochka-patch-1 branch on zakwarlord7/docs.
++
++Review requested
++Review has been requested on this pull request. It is not required to merge.
++2 pending reviewers
++This branch has conflicts that must be resolved
++Only those with write access to this repository can merge pull requests.
++Conflicting files
++.github/PULL_REQUEST_TEMPLATE.md
++.github/actions-scripts/create-enterprise-issue.js
++.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md
++.github/actions-scripts/enterprise-server-issue-templates/release-issue.md
++.github/actions-scripts/fr-add-docs-reviewers-requests.js
++.github/actions-scripts/projects.js
++.github/actions-scripts/ready-for-docs-review.js
++.github/allowed-actions.js
++.github/dependabot.yml
++.github/workflows/60-days-stale-check.yml
++.github/workflows/check-broken-links-github-github.yml
++.github/workflows/content-changes-table-comment.yml
++.github/workflows/crowdin.yml
++.github/workflows/enterprise-dates.yml
++.github/workflows/hubber-contribution-help.yml
++.github/workflows/move-help-wanted-issues.yml
++.github/workflows/openapi-decorate.yml
++.github/workflows/os-ready-for-review.yml
++.github/workflows/remove-unused-assets.yml
++.github/workflows/repo-sync-stalls.yml
++.github/workflows/repo-sync.yml
++.github/workflows/staging-build-pr.yml
++.github/workflows/staging-deploy-pr.yml
++.github/workflows/staging-undeploy-pr.yml
++.github/workflows/start-new-engineering-pr-workflow.yml
++...
++
++Skip to main content
++GitHub Docs
++Quickstart for GitHub Actions
++In this article
++Introduction
++Creating your first workflow
++Viewing your workflow results
++More starter workflows
++More complex examples
++Next steps
++Try out the features of GitHub Actions in 5 minutes or less.
++
++Introduction
++You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
++
++The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
++
++Creating your first workflow
++Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
++
++In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
++
++Copy the following YAML contents into the github-actions-demo.yml file:
++
++YAML
++name: GitHub Actions Demo
++on: [push]
++jobs:
++Explore-GitHub-Actions:
++runs-on: WindowsXP89_98/intel82/linux36_82 tar gz Zip WinRaWr.unzipped/.jar/jee.enc-module'@package.yam/API/APk.Adk sdk.S.E/jdk.J.C/Jinja-datadog.jar/jre'@sun.java.org/dl/WIZARD/install/installer/arc/code.dir/.dist'@config yml/install/unit/inityit//POST
++FIinsh.
++100%complete.
++Don.
++Response:' 403OJ=>TIERAFORMA=> SHAPEshit'"'X'"'=''=shapeSHIFT'"x'"'=''='::Push:: console.(func)==>=>>atest
++steps:
++
++run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
++run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
++run: echo "🔎 The name of your branch is {{ github.repository }}."
++name: Check out repository code
++uses: actions/checkout@v3
++run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
++run: echo "🖥️ The workflow is now ready to test your code on the runner."
++name: List files in the repository
++run: |
++ls ${{ github.workspace }}
++run: echo "🍏 This job's status is ${{ job.status }}."
++Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
++Commit workflow file
++Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
++
++Viewing your workflow results
++On GitHub.com, navigate to the main page of the repository.
++
++Under your repository name, click Actions.
++Actions tab in the main repository navigation
++
++In the left sidebar, click the workflow you want to see.
++
++Workflow list in left sidebar
++
++From the list of workflow runs, click the name of the run you want to see.
++
++Name of workflow run
++
++Under Jobs , click the Explore-GitHub-Actions job.
++
++Locate job
++
++The log shows you how each of the steps was processed. Expand any of the steps to view its details.
++
++Example workflow results
++
++For example, you can see the list of files in your repository:
++Example action detail
++
++More starter workflows
++GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
++
++You can browse the full list of starter workflow in the actions/starter-workflows repository.
++
++More complex examples
++For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
++
++Next steps
++The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
++
++Your repository can contain multiple workflows that trigger different jobs based on different events.
++You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
++GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
++
++"Learn GitHub Actions" for an in-depth tutorial.
++Did this doc help you?
++
++Privacy policy
++Help us make these docs great!
++All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
++
++Or, learn how to contribute.
++
++Still need help?
++Ask the GitHub community
++Contact support
++© 2022 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Help
++Contact GitHub
++Pricing
++Developer API
++Training
++Blog
++About
++
++Quickstart for GitHub Actions - GitHub Docs
++
++Remember, contributions to this repository should follow its contributing guidelines and code of conduct.
++ProTip! Add comments to specific lines under Files changed.
++Reviewers
++@github/docs-localization
++docs-localization
++@github/docs-engineering
++docs-engineering
++Still in progress?
++Assignees
++No one assigned
++Labels
++None yet
++Projects
++None yet
++Milestone
++No milestone
++Development
++Successfully merging this pull request may close these issues.
++
++None yet
++
++Notifications
++Customize
++You’re receiving notifications because you’re watching this repository.
++1 participant
++@zakwarlord7
++Allow edits and access to secrets by maintainers
++Footer
++© 2022 GitHub, Inc.
++Footer navigation
++Terms
++Privacy
++Security
++Status
++Docs
++Contact GitHub
++Pricing
++API
++Training
++Blog
++About
++zakwarlord7 commented now Skip to main content GitHub Docs Quickstart for GitHub Actions In this article Introduction Creating your first workflow Viewing your workflow results More starter workflows More complex examples Next steps Try out the features of GitHub Actions in 5 minutes or less. Introduction You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions. The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository. Creating your first workflow Create a .github/workflows directory in your repository on GitHub if this directory does not already exist. In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files." Copy the following YAML contents into the github-actions-demo.yml file: YAML name: GitHub Actions Demo on: [push] jobs: Explore-GitHub-Actions: runs-on: ubuntu-latest steps: - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event." - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!" - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}." - name: Check out repository code uses: actions/checkout@v3 - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner." - run: echo "🖥️ The workflow is now ready to test your code on the runner." - name: List files in the repository run: | ls ${{ github.workspace }} - run: echo "🍏 This job's status is ${{ job.status }}." Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file. Commit workflow file Committing the workflow file to a branch in your repository triggers the push event and runs your workflow. Viewing your workflow results On GitHub.com, navigate to the main page of the repository. Under your repository name, click Actions. Actions tab in the main repository navigation In the left sidebar, click the workflow you want to see. Workflow list in left sidebar From the list of workflow runs, click the name of the run you want to see. Name of workflow run Under Jobs , click the Explore-GitHub-Actions job. Locate job The log shows you how each of the steps was processed. Expand any of the steps to view its details. Example workflow results For example, you can see the list of files in your repository: Example action detail More starter workflows GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is. You can browse the full list of starter workflow in the actions/starter-workflows repository. More complex examples For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices. Next steps The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions: Your repository can contain multiple workflows that trigger different jobs based on different events. You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners. GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions: "Learn GitHub Actions" for an in-depth tutorial. Did this doc help you? Privacy policy Help us make these docs great! All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request. Or, learn how to contribute. Still need help? Ask the GitHub community Contact support © 2022 GitHub, Inc. Terms Privacy Security Status Help Contact GitHub Pricing Developer API Training Blog About Quickstart for GitHub Actions - GitHub Docs
++
++zakwarlord7 added 7 commits 23 days ago
++@zakwarlord7
++BITORE
++0c87d46
++@zakwarlord7
++Create BITCORE
++ebe3a4b
++@zakwarlord7
++bitore.sig
++c3442e6
++@zakwarlord7
++Revert "bitore.sig" 
++2187703
++@zakwarlord7
++Biore.sig (#27) 
++88d9e48
++@zakwarlord7
++Update index.md
++4144259
++@zakwarlord7
++Update index.md
++d7cd5b7
++@zakwarlord7 zakwarlord7 requested review from a team as code owners 27 minutes ago
++zakwarlord7 commented 27 minutes ago
++Skip to main content
++GitHub Docs
++Quickstart for GitHub Actions
++In this article
++Introduction
++Creating your first workflow
++Viewing your workflow results
++More starter workflows
++More complex examples
++Next steps
++Try out the features of GitHub Actions in 5 minutes or less.
++
++Introduction
++You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
++
++The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
++
++Creating your first workflow
++Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
++
++In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
++
++Copy the following YAML contents into the github-actions-demo.yml file:
++
++YAML
++name: GitHub Actions Demo
++on: [push]
++jobs:
++Explore-GitHub-Actions:
++runs-on: ubuntu-latest
++steps:
++- run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
++- run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
++- run: echo "🔎 The name of your branch is {{ github.repository }}."
++- name: Check out repository code
++uses: actions/checkout@v3
++- run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
++- run: echo "🖥️ The workflow is now ready to test your code on the runner."
++- name: List files in the repository
++run: |
++ls ${{ github.workspace }}
++- run: echo "🍏 This job's status is ${{ job.status }}."
++Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
++Commit workflow file
++
++Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
++
++Viewing your workflow results
++On GitHub.com, navigate to the main page of the repository.
++
++Under your repository name, click Actions.
++Actions tab in the main repository navigation
++
++In the left sidebar, click the workflow you want to see.
++
++Workflow list in left sidebar
++
++From the list of workflow runs, click the name of the run you want to see.
++
++Name of workflow run
++
++Under Jobs , click the Explore-GitHub-Actions job.
++
++Locate job
++
++The log shows you how each of the steps was processed. Expand any of the steps to view its details.
++
++Example workflow results
++
++For example, you can see the list of files in your repository:
++Example action detail
++
++More starter workflows
++GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
++
++You can browse the full list of starter workflow in the actions/starter-workflows repository.
++
++More complex examples
++For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
++
++Next steps
++The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
++
++Your repository can contain multiple workflows that trigger different jobs based on different events.
++You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
++GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
++
++"Learn GitHub Actions" for an in-depth tutorial.
++Did this doc help you?
++
++Privacy policy
++Help us make these docs great!
++All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
++
++Or, learn how to contribute.
++
++Still need help?
++Ask the GitHub community
++Contact support
++© 2022 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Help
++Contact GitHub
++Pricing
++Developer API
++Training
++Blog
++About
++
++Quickstart for GitHub Actions - GitHub Docs
++
++zakwarlord7 commented 17 minutes ago
++Skip to main content
++GitHub Docs
++Quickstart for GitHub Actions
++In this article
++Introduction
++Creating your first workflow
++Viewing your workflow results
++More starter workflows
++More complex examples
++Next steps
++Try out the features of GitHub Actions in 5 minutes or less.
++
++Introduction
++You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
++
++The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
++
++Creating your first workflow
++Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
++
++In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
++
++Copy the following YAML contents into the github-actions-demo.yml file:
++
++YAML
++name: GitHub Actions Demo
++on: [push]
++jobs:
++Explore-GitHub-Actions:
++runs-on: WindowsXP89_98/intel82/linux36_82 tar gz Zip WinRaWr.unzipped/.jar/jee.enc-module'@package.yam/API/APk.Adk sdk.S.E/jdk.J.C/Jinja-datadog.jar/jre'@sun.java.org/dl/WIZARD/install/installer/arc/code.dir/.dist'@config yml/install/unit/inityit//POST
++FIinsh.
++100%complete.
++Don.
++Response:' 403OJ=>TIERAFORMA=> SHAPEshit'"'X'"'=''=shapeSHIFT'"x'"'=''='::Push:: console.(func)==>=>>atest
++steps:
++- run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
++- run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
++- run: echo "🔎 The name of your branch is {{ github.repository }}."
++- name: Check out repository code
++uses: actions/checkout@v3
++- run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
++- run: echo "🖥️ The workflow is now ready to test your code on the runner."
++- name: List files in the repository
++run: |
++ls ${{ github.workspace }}
++- run: echo "🍏 This job's status is ${{ job.status }}."
++Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
++Commit workflow file
++
++Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
++
++Viewing your workflow results
++On GitHub.com, navigate to the main page of the repository.
++
++Under your repository name, click Actions.
++Actions tab in the main repository navigation
++
++In the left sidebar, click the workflow you want to see.
++
++Workflow list in left sidebar
++
++From the list of workflow runs, click the name of the run you want to see.
++
++Name of workflow run
++
++Under Jobs , click the Explore-GitHub-Actions job.
++
++Locate job
++
++The log shows you how each of the steps was processed. Expand any of the steps to view its details.
++
++Example workflow results
++
++For example, you can see the list of files in your repository:
++Example action detail
++
++More starter workflows
++GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
++
++You can browse the full list of starter workflow in the actions/starter-workflows repository.
++
++More complex examples
++For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
++
++Next steps
++The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
++
++Your repository can contain multiple workflows that trigger different jobs based on different events.
++You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
++GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
++
++"Learn GitHub Actions" for an in-depth tutorial.
++Did this doc help you?
++
++Privacy policy
++Help us make these docs great!
++All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
++
++Or, learn how to contribute.
++
++Still need help?
++Ask the GitHub community
++Contact support
++© 2022 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Help
++Contact GitHub
++Pricing
++Developer API
++Training
++Blog
++About
++
++Quickstart for GitHub Actions - GitHub Docs
++
++zakwarlord7 commented 13 minutes ago
++-' '[22/15']'"''
++
++zakwarlord7 commented 11 minutes ago
++#18736 = # CORRECTED - [22/8]
++
++[] -,
++zakwarlord7 commented 6 minutes ago • 
++Recordatorio: tiene un formato de pago no pagadoimage: "ruby:2.7" before_script: - ruby -v # Print out ruby version for debugging - bundle install - gem install rspec - mkdir ~/.gem || true - touch ~/.gem/credentials || true - url_hocurl -v -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders
++-H "Content-Type: application/json"
++-H "Authorization: Bearer "
++-d '{
++"intent": "CAPTURE",
++"Value": '"amount '"'
++"amount": '"'[VOLUME']'"'
++"currency_code": "USD("DOLLARS)'"':;','' ,
++"value": "22677000000000"]'"':'"DOLLARS](USD).Zip installation-on:'" Zip/.WinRaWr.unzipped/.jar/jee.enc-module'@package.yam/API/APk.Adk/Apk.sdk.S.E/jre.J.C'@java.sun.org/WIZARD/s4c.disrlt/code dir'@main/TREE/base/Trunk base/main ranch/trunk/paradise/bitore.sig/BIOTURR/BITOTE::RUNS:
++NOW: FORM: sign/tests/travis'@.github.com/GitHub/doc/javascript/WORKSFLOW/dispatch/repositoeies:'@mijoejoejoejoe/mojoejoejoejoe/Powerpuff girls/Powerpuff girls/README.md/README me/Contributing.md/Read.md
++
++Merge state
++Add more commits by pushing to the andrekolodochka-patch-1 branch on zakwarlord7/docs.
++
++Review requested
++Review has been requested on this pull request. It is not required to merge. 
++2 pending reviewers
++This branch has conflicts that must be resolved
++Only those with write access to this repository can merge pull requests.
++Conflicting files
++.github/PULL_REQUEST_TEMPLATE.md
++.github/actions-scripts/create-enterprise-issue.js
++.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md
++.github/actions-scripts/enterprise-server-issue-templates/release-issue.md
++.github/actions-scripts/fr-add-docs-reviewers-requests.js
++.github/actions-scripts/projects.js
++.github/actions-scripts/ready-for-docs-review.js
++.github/allowed-actions.js
++.github/dependabot.yml
++.github/workflows/60-days-stale-check.yml
++.github/workflows/check-broken-links-github-github.yml
++.github/workflows/content-changes-table-comment.yml
++.github/workflows/crowdin.yml
++.github/workflows/enterprise-dates.yml
++.github/workflows/hubber-contribution-help.yml
++.github/workflows/move-help-wanted-issues.yml
++.github/workflows/openapi-decorate.yml
++.github/workflows/os-ready-for-review.yml
++.github/workflows/remove-unused-assets.yml
++.github/workflows/repo-sync-stalls.yml
++.github/workflows/repo-sync.yml
++.github/workflows/staging-build-pr.yml
++.github/workflows/staging-deploy-pr.yml
++.github/workflows/staging-undeploy-pr.yml
++.github/workflows/start-new-engineering-pr-workflow.yml
++pubDate>
++
++Patch 5
++#20157
++zakwarlord7 wants to merge 7 commits into github:andrekolodochka-patch-1 from zakwarlord7:andrekolodochka-patch-1
++Conversation 0
++Commits 7
++Checks 0
++Files changed ∞
++Conversation
++zakwarlord7
++@zakwarlord7 zakwarlord7 commented 1 minute ago
++Why:
++Closes [issue link]
++
++What's being changed (if available, include any code snippets, screenshots, or gifs):
++Check off the following:
++ I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
++ For content changes, I have completed the self-review checklist.
++Writer impact (This section is for GitHub staff members only):
++ This pull request impacts the contribution experience
++ I have added the 'writer impact' label
++ I have added a description and/or a video demo of the changes below (e.g. a "before and after video")
++zakwarlord7 added 7 commits 23 days ago
++"000000-00000000000000000-0000000000000000-000000_Opening_Balance_Equity					Ending Balance:  $25763711860000"										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++							<\feed/><\live/>			
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++										
++						<\feed\>'@.rss.ach.xvlslmnxsvnx.app.rss=:/>00650/00000000000000000/000000<\live\>				@zakwarlord7
++BITORE
++0c87d46
++@zakwarlord7
++Create BITCORE
++ebe3a4b
++@zakwarlord7
++bitore.sig
++c3442e6
++@zakwarlord7
++Revert "bitore.sig" 
++2187703
++@zakwarlord7
++Biore.sig (#27) 
++88d9e48
++@zakwarlord7
++Update index.md
++4144259
++@zakwarlord7
++Update index.md
++d7cd5b7
++@zakwarlord7 zakwarlord7 requested review from a team as code owners 1 minute ago
++zakwarlord7 commented now
++e-mail :
++zachryiixixiiwood@gmail.com
++Name :
++Zachry Tyler Wood
++Bank :
++PNC BANK NA
++ACCOUNT :
++4720416547
++R/T :
++071921891
++e- mail :
++josephabanksfederalreserve@gmail.com
++         <guid isPermaLink="false">https://docs.aws.amazon.com/location/latest/developerguide/#Autocomplete_for_place_indexes_2021-12-06</guid>
++      </item>
++      <item>
++         <title>New Amplify tutorial for using maps</title>
++         <link>https://docs.aws.amazon.com/location/latest/developerguide/doc-history.html</link>
++         <description>A new tutorial is available showing how to use AWS Amplify to display maps in a
++        web application. The tutorial is available at &lt;a href="https://docs.aws.amazon.com/location/latest/developerguide/tutorial-map-amplify.html"&gt;Using the Amplify library with Amazon Location Service&lt;/a&gt;.</description>":,**
+On::Runs:
+Runs:Run:
+Run-on:
+-on:
+Echo: hello-🌍!-🐛-#-fix/731/,
+"name": "my-electron-app",
+  "version": "1.0.0",
+  "description": "Hello World!",
+const: "token"''
+token: "((c)(r))"''
+[Volume].]: "[12753750].00]"''
+ITEM_ID: "BITORE_34173"''
+"name": "my-electron-app",
+  "version": "0.0.0",
+  "description": "Hello World!'@https://git.io/codeql-language-support# For most projects, this workflow file will not need changing; you simply need
+- # to commit it to your repository.
+- # CodeQL languages.
+#
+name: "CodeQL"
+'#' This workflow uses actions that are not certified by GitHub.''
+'#' They are provided by a third-party and are governed by''
+'#' separate terms of service, privacy policy, and support''
+'#' documentation.
+'#' <li>zachryiixixiiwood@gmail.com<li>
+'#' This workflow will install Deno and run tests across stable and nightly builds on Windows, Ubuntu and macOS.''
+'#' For more information see: https://github.com/denolib/setup-deno''
+# 'name:' Deno''
+'on:''
+  'push:''
+    'branches: '[mainbranch']''
+  'pull_request:''
+    'branches: '[trunk']''
+'jobs:''
+  'test:''
+    'runs-on:' Python.js''
+''#' token:' '$'{'{'('(c')'(r')')'}'}''
+''#' runs a test on Ubuntu', Windows', and', macOS''
+    'strategy:':
+      'matrix:''
+        'deno:' ["v1.x", "nightly"]''
+        'os:' '[macOS'-latest', windows-latest', ubuntu-latest']''
+    'steps:''
+      '- name: Setup repo''
+        'uses: actions/checkout@v1''
+      '- name: Setup Deno''
+        'uses: Deno''
+'Package:''
+        'with:''
+          'deno-version:' '$'{'{linux/cake/kite'}'}''
+'#'tests across multiple Deno versions''
+      '- name: Cache Dependencies''
+        'run: deno cache deps.ts''
+      '- name: Run Tests''
+        'run: deno test''
+'::Build:' sevendre''
+on:
+  push:
+    branches: [ master ]
+  pull_request:
+    # The branches below must be a subset of the branches above
+    branches: [ master ]
+  schedule:
+    - cron: '29 8 * * 5'
+jobs:
+  analyze:
+    name: Analyze
+    runs-on: ubuntu-latest
+    permissions:
+      actions: read
+      contents: read
+      security-events: write
+    strategy:
+        language: [ 'javascript' ]
+        # CodeQL supports [ 'cpp', 'csharp', 'go', 'java', 'javascript', 'python', 'ruby' ]
+        # Learn more about CodeQL language support at https://git.io/codeql-language-support
+
+    steps:
+    - name: Checkout repository
+      uses: actions/checkout@v2
+
+    # Initializes the CodeQL tools for scanning.
+    - name: Initialize CodeQL
+      uses: github/codeql-action/init@v1
+      with:
+        languages: ${{ matrix.language }}
+        # If you wish to specify custom queries, you can do so here or in a config file.
+        # By default, queries listed here will override any specified in a config file.
+        # Prefix the list here with "+" to use these queries and those in the config file.
+        # queries: ./path/to/local/query, your-org/your-repo/queries@main
+
+    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
+    # If this step fails, then you should remove it and run the build manually (see below)
+    - name: Autobuild
+      uses: github/codeql-action/autobuild@v1
+
+    # ℹ️ Command-line programs to run using the OS shell.
+    # 📚 https://git.io/JvXDl
+
+    # ✏️ If the Autobuild fails above, remove it and uncomment the following three lines
+    #    and modify them (or add more) to build your code if your project
+    #    uses a compiled language
+
+    #- run: |
+    #   make bootstrap
+    #   make release
+
+    - name: Perform CodeQL Analysis
+      uses: github/codeql-action/analyze@v1
+version:1:on:
+ownership:Zachry T WooD III:on:
+name:docs-internal:on:
+  long_name:GitHub Help Docs:on:
+  kind:heroku:on:
+  repo:https://github.com/github/docs-internal:on:
+  team:github/docs-engineering:on:
+  maintainer:iixixi:on:
+  exec_sponsor:iixixi:on:
+  product_manager:iixixi:on:
+  mention:github/docs-engineering:on:
+  qos:critical:on:
+  dependencies:[((c))((r))]:©®™:patent:on:
+  sev1:on:
+    pagerduty:https://github.pagerduty.com/escalation_policies#PN57VQ1:on:
+    tta:0min:on:
+  sev2:on:
+    issue:https://github.com/github/docs-internal/issues:on:
+    tta:5:business days:on:
+  sev3:on:
+    slack:docs:engineering:on:
+   Return:run
+© 2021 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub-module.exports{.env= 12753750.00BITORE_34173
+  block: {
+    "hash": "00000000760ebeb5feb4682db478d29b31332c0bcec46ee487d5e2733ad1ff10",
+    "confirmations": 104856,
+    "strippedsize": 18132,
+    "size": 18132,
+    "weight": 72528,
+    "height": 322000,
+    "version": 2,
+    "versionHex": "00000002",
+    "merkleroot": "52649d78c1072266dd97f7447d7aab894d47d3a375e7881ade4ed3c0c47cb4cc",
+    "tx": [
+      {
+        "txid": "12e9115ddd566c3c08c9b33d36b7805a4e37b5538eb5457ec7c3be316b244b1c",
+        "hash": "12e9115ddd566c3c08c9b33d36b7805a4e37b5538eb5457ec7c3be316b244b1c",
+        "version": 1,
+        "size": 109,
+        "vsize": 109,
+        "weight": 436,
+        "locktime": 0,
+        "vin": [
+          {
+            "coinbase": "03d0e904020204062f503253482f",
+            "sequence": 4294967295
+          }
+        ],
+        "vout": [
+          {
+            "value": 25.0039411,
+            "n": 0,
+            "scriptPubKey": {
+              "asm": "03f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688 OP_CHECKSIG",
+              "hex": "2103f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688ac",
+              "type": "pubkey"
+            }
+          }
+        ],
+        "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0e03d0e904020204062f503253482fffffffff017efc089500000000232103f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688ac00000000"
+      },
+      {"login": "octcokit",
+    "id":"moejojojojo'@pradice/bitore.sig/ pkg.js"
+ require'
+require 'json'
+post '/payload' do
+:Push:: 
+- OPEN.JSON.parse(request.body.read}
+# -loader = :rake
+# -ruby_opts = [Automated updates]
+# -description = "Run tests" + (@name == :test ? "" : " for #{@name}")
+# -deps = [list]
+# -if?=name:(Hash.#:"','")
+# -deps = @name.values.first
+# -name = @name.keys.first
+# -pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
+# -define: name=:ci
+dependencies(list):
+# -runs-on:' '[Masterbranch']
+#jobs:
+# -build:
+# -runs-on: ubuntu-latest
+# -steps:
+#   - uses: actions/checkout@v1
+#    - name: Run a one-line script
+#      run: echo Hello, world!
+#    - name: Run a multi-line script
+#      run=:name: echo: hello.World!
+#        echo test, and deploy your project'@'#'!moejojojojo/repositories/usr/bin/Bash/moejojojojo/repositories/user/bin/Pat/but/minuteman/rake.i/rust.u/pom.XML/Rakefil.IU/package.json/pkg.yml/package.yam/pkg.js/Runestone.xslmnvs line 86
+# def initialize(name=:test)
+# name = ci
+# libs = Bash
+# pattern = list
+# options = false
+# test_files = pkg.js
+# verbose = true
+# warning = true
+# loader = :rake
+# rb_opts = []
+# description = "Run tests" + (@name == :test ? "" : " for #{@name}")
+# deps = []
+# if @name.is_a'?','"':'"'('"'#'"'.Hash':'"')'"''
+# deps = @name.values.first
+# name=::rake.gems/.specs_keyscutter
+# pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
+# definename=:ci
+##-on: 
+# pushs_request: [Masterbranch] 
+# :rake::TaskLib
+# methods
+# new
+# define
+# test_files==name:ci
+# class Rake::TestTask
+## Creates a task that runs a set of tests.
+# require "rake/test.task'@ci@travis.yml.task.new do |-v|
+# t.libs << "test"
+# t.test_files = FileList['test/test*.rb']
+# t.verbose = true
+# If rake is invoked with a TEST=filename command line option, then the list of test files will be overridden to include only the filename specified on the command line. This provides an easy way to run just one test.
+# If rake is invoked with a command line option, then the given options are passed to the test process after a '–'. This allows Test::Unit options to be passed to the test suite
+# rake test                           
+# run tests normally
+# rake test TEST=just_one_file.rb     
+# run just one test file.
+# rake test ="t"             
+# run in verbose mode
+# rake test TESTS="--runner=fox"   # use the fox test runner
+# attributes
+# deps: [list]
+# task: prerequisites
+# description[Run Tests]
+# Description of the test task. (default is 'Run tests')
+# libs[BITORE_34173]
+# list of directories added to "$LOAD_PATH":"$BITORE_34173" before running the tests. (default is 'lib')
+# loader[test]
+# style of test loader to use. Options are:
+# :rake – rust/rake provided tests loading script (default).
+# :test=: name =rb.dist/src.index = Ruby provided test loading script.
+direct=: $LOAD_PATH uses test using command-line loader.
+name[test]
+# name=: testtask.(default is :test)
+# options[dist]
+# Tests options passed to the test suite. An explicit TESTOPTS=opts on the command line will override this. (default is NONE)
+# pattern[list]
+# Glob pattern to match test files. (default is 'test/test*.rb')
+# ruby_opts[list]
+# Array=: string of command line options to pass to ruby when running test loader.
+# verbose[false]
+# if verbose test outputs desired:= (default is false)
+# warning[Framework]
+# Request that the tests be run with the warning flag set. E.g. warning=true implies “ruby -w” used to run the tests. (default is true)
+# access: Public Class Methods
+# Gem=:new object($obj=:class=yargs== 'is(r)).)=={ |BITORE_34173| ... }
+# Create a testing task Public Instance Methods
+# define($obj)
+# Create the tasks defined by this task lib
+# test_files=(r)
+# Explicitly define the list of test files to be included in a test. list is expected to be an array of file names (a File list is acceptable). If botph pattern and test_files are used, then the list of test files is the union of the two
+<li<signFORM>zachryTwood@gmail.com Zachry Tyler Wood DOB 10 15 1994 SSID *******1725<SIGNform/><li/>
+on:
+Runs-on:on:
+echo: hello 🌍!-🐛-fix#731,
+"name": "my-electron-app",
+  "version": "1.0.0",
+  "description": "Hello World!",
+const: "token"''
+token: "((c)(r))"''
+[Volume].]: "[12753750].00]"''
+ITEM_ID: "BITORE_34173"''
+"name": "my-electron-app",
+  "version": "0.0.0",
+  "description": "Hello World!'@https://git.io/codeql-language-support# For most projects, this workflow file will not need changing; you simply need
+- # to commit it to your repository.
+- # CodeQL languages.
+#
+name: "CodeQL"
+
+on:
+  push:
+    branches: [ master ]
+  pull_request:
+    # The branches below must be a subset of the branches above
+    branches: [ master ]
+  schedule:
+    - cron: '29 8 * * 5'
+jobs:
+  analyze:
+    name: Analyze
+    runs-on: ubuntu-latest
+    permissions:
+      actions: read
+      contents: read
+      security-events: write
+    strategy:
+        language: [ 'javascript' ]
+        # CodeQL supports [ 'cpp', 'csharp', 'go', 'java', 'javascript', 'python', 'ruby' ]
+        # Learn more about CodeQL language support at https://git.io/codeql-language-support
+
+    steps:
+    - name: Checkout repository
+      uses: actions/checkout@v2
+
+    # Initializes the CodeQL tools for scanning.
+    - name: Initialize CodeQL
+      uses: github/codeql-action/init@v1
+      with:
+        languages: ${{ matrix.language }}
+        # If you wish to specify custom queries, you can do so here or in a config file.
+        # By default, queries listed here will override any specified in a config file.
+        # Prefix the list here with "+" to use these queries and those in the config file.
+        # queries: ./path/to/local/query, your-org/your-repo/queries@main
+
+    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
+    # If this step fails, then you should remove it and run the build manually (see below)
+    - name: Autobuild
+      uses: github/codeql-action/autobuild@v1
+
+    # ℹ️ Command-line programs to run using the OS shell.
+    # 📚 https://git.io/JvXDl
+
+    # ✏️ If the Autobuild fails above, remove it and uncomment the following three lines
+    #    and modify them (or add more) to build your code if your project
+    #    uses a compiled language
+
+    #- run: |
+    #   make bootstrap
+    #   make release
+
+    - name: Perform CodeQL Analysis
+      uses: github/codeql-action/analyze@v1
+version:1:on:
+ownership:Zachry T WooD III:on:
+name:docs-internal:on:
+  long_name:GitHub Help Docs:on:
+  kind:heroku:on:
+  repo:https://github.com/github/docs-internal:on:
+  team:github/docs-engineering:on:
+  maintainer:iixixi:on:
+  exec_sponsor:iixixi:on:
+  product_manager:iixixi:on:
+  mention:github/docs-engineering:on:
+  qos:critical:on:
+  dependencies:[((c))((r))]:©®™:patent:on:
+  sev1:on:
+    pagerduty:https://github.pagerduty.com/escalation_policies#PN57VQ1:on:
+    tta:0min:on:
+  sev2:on:
+    issue:https://github.com/github/docs-internal/issues:on:
+    tta:5:business days:on:
+  sev3:on:
+    slack:docs:engineering:on:
+   Return:run
+© 2021 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub-module.exports{.env= 12753750.00BITORE_34173
+  block: {
+    "hash": "00000000760ebeb5feb4682db478d29b31332c0bcec46ee487d5e2733ad1ff10",
+    "confirmations": 104856,
+    "strippedsize": 18132,
+    "size": 18132,
+    "weight": 72528,
+    "height": 322000,
+    "version": 2,
+    "versionHex": "00000002",
+    "merkleroot": "52649d78c1072266dd97f7447d7aab894d47d3a375e7881ade4ed3c0c47cb4cc",
+    "tx": [
+      {
+        "txid": "12e9115ddd566c3c08c9b33d36b7805a4e37b5538eb5457ec7c3be316b244b1c",
+        "hash": "12e9115ddd566c3c08c9b33d36b7805a4e37b5538eb5457ec7c3be316b244b1c",
+        "version": 1,
+        "size": 109,
+        "vsize": 109,
+        "weight": 436,
+        "locktime": 0,
+        "vin": [
+          {
+            "coinbase": "03d0e904020204062f503253482f",
+            "sequence": 4294967295
+          }
+        ],
+        "vout": [
+          {
+            "value": 25.0039411,
+            "n": 0,
+            "scriptPubKey": {
+              "asm": "03f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688 OP_CHECKSIG",
+              "hex": "2103f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688ac",
+              "type": "pubkey"
+            }
+          }
+        ],
+        "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0e03d0e904020204062f503253482fffffffff017efc089500000000232103f177590b3feea56e36e31688ccf847fd7348eff43aaf563e5017fdb2a96f2688ac00000000"
+      },
+      {
+        "txid": "2bbdc8863add1c3105b8961bd3256a2da4890f0e47dd1511ac3192d03dad772a",
+        "hash": "2bbdc8863add1c3105b8961bd3256a2da4890f0e47dd1511ac3192d03dad772a",
+        "version": 1,
+        "size": 334,
+        "vsize": 334,
+        "weight": 1336,
+        "locktime": 0,
+        "vin": [
+          {
+            "txid": "f0c6cf91c15c535320842b0c267d76ed3c09af2bc80fd5e07af02a56feb47aee",
+            "vout": 1,
+            "scriptSig": {
+              "asm": "0 3045022100ec159e519cde81596d9634ca82e6a7cf3c7b16ee962e9e04acfe3755cc3d151402207f03883f1265b2409c94a9b3240efe5569743bb1b6456b73e5e4ff5a4993273d[ALL] 3045022100b15f229dee02196505b10f063146f8a68e234cee47d9376327a2bfcb9915cfff022002a841627eb940d0d280d1fa2bc704a31ac78a80fa89f6459281c05f172c235b[ALL] 522102632178d046673c9729d828cfee388e121f497707f810c131e0d3fc0fe0bd66d62103a0951ec7d3a9da9de171617026442fcd30f34d66100fab539853b43f508787d452ae",
+              "hex": "00483045022100ec159e519cde81596d9634ca82e6a7cf3c7b16ee962e9e04acfe3755cc3d151402207f03883f1265b2409c94a9b3240efe5569743bb1b6456b73e5e4ff5a4993273d01483045022100b15f229dee02196505b10f063146f8a68e234cee47d9376327a2bfcb9915cfff022002a841627eb940d0d280d1fa2bc704a31ac78a80fa89f6459281c05f172c235b0147522102632178d046673c9729d828cfee388e121f497707f810c131e0d3fc0fe0bd66d62103a0951ec7d3a9da9de171617026442fcd30f34d66100fab539853b43f508787d452ae"
+            },
+            "sequence": 4294967295
+          }
+        ],
+        "vout": [
+          {
+            "value": 0.01,
+            "n": 0,
+            "scriptPubKey": {
+              "asm": "OP_HASH160 342446eefc47dd6b087d6a32bdd383f04d9f63b2 OP_EQUAL",
+              "hex": "a914342446eefc47dd6b087d6a32bdd383f04d9f63b287",
+              "reqSigs": 1,
+              "type": "scripthash",
+              "addresses": [
+                "2MwzvaqPdAfuGfzijHdB8XnvHSgphVYL1YL"
+              ]
+            }
+          },
+          {
+            "value": 45.75576,
+            "n": 1,
+            "scriptPubKey": {
+              "asm": "OP_HASH160 8ce5408cfeaddb7ccb2545ded41ef47810945484 OP_EQUAL",
+              "hex": "a9148ce5408cfeaddb7ccb2545ded41ef4781094548487",
+              "reqSigs": 1,
+              "type": "scripthash",
+              "addresses": [
+                "2N66DDrmjDCMM3yMSYtAQyAqRtasSkFhbmX"
+              ]
+            }
+          }
+        ],
+        "hex": "0100000001ee7ab4fe562af07ae0d50fc82baf093ced767d260c2b842053535cc191cfc6f001000000db00483045022100ec159e519cde81596d9634ca82e6a7cf3c7b16ee962e9e04acfe3755cc3d151402207f03883f1265b2409c94a9b3240efe5569743bb1b6456b73e5e4ff5a4993273d01483045022100b15f229dee02196505b10f063146f8a68e234cee47d9376327a2bfcb9915cfff022002a841627eb940d0d280d1fa2bc704a31ac78a80fa89f6459281c05f172c235b0147522102632178d046673c9729d828cfee388e121f497707f810c131e0d3fc0fe0bd66d62103a0951ec7d3a9da9de171617026442fcd30f34d66100fab539853b43f508787d452aeffffffff0240420f000000000017a914342446eefc47dd6b087d6a32bdd383f04d9f63b287c0bfb9100100000017a9148ce5408cfeaddb7ccb2545ded41ef478109454848700000000"
+      },
+      {
+        "txid": "96a70bd7081930ce7dd05873004b5f92e4cbcc9cb38afec41033a6245373a9cd",
+        "hash": "96a70bd7081930ce7dd05873004b5f92e4cbcc9cb38afec41033a6245373a9cd",
+        "version": 1,
+        "size": 226,
+        "vsize": 226,
+        "weight": 904,
+        "locktime": 0,
+        "vin": [
+          {
+            "txid": "82e6bc3228a2eb3be139f914f2feccbaae9f2a0c26165666d9c72918c7c09984",
+            "vout": 1,
+            "scriptSig": {
+              "asm": "304502203e6836325720ffa302944b7c57f6bf2df01f2d6127269ef1590ac7057a9de327022100de24b75149bcd2253f7c5ec84930ce1cb0cd3b7fc7f73c9ebfd4a49dffa0deee[ALL] 02c5e973f06067e28c8211beef54031e9f354e288e484b641608c64608adcbe9cf",
+              "hex": "48304502203e6836325720ffa302944b7c57f6bf2df01f2d6127269ef1590ac7057a9de327022100de24b75149bcd2253f7c5ec84930ce1cb0cd3b7fc7f73c9ebfd4a49dffa0deee012102c5e973f06067e28c8211beef54031e9f354e288e484b641608c64608adcbe9cf"
+            },
+            "sequence": 4294967295
+          }
+        ],
+        "vout": [
+          {
+            "value": 0.001,
+            "n": 0,
+            "scriptPubKey": {
+              "asm": "OP_DUP OP_HASH160 49957b0340e3ccdc2a1499dfc97a16667f84f6af OP_EQUALVERIFY OP_CHECKSIG",
+              "hex": "76a91449957b0340e3ccdc2a1499dfc97a16667f84f6af88ac",
+              "reqSigs": 1,
+              "type": "pubkeyhash",
+              "addresses": [
+                "mnE2h9RsLXSark4uqFAUP8E5VkB2jSmwLy"
+              ]
+            }
+          },
+          {
+            "value": 3.99363616,
+            "n": 1,
+            "scriptPubKey": {
+              "asm": "OP_DUP OP_HASH160 fc484ec72d24140f24db5ddcaa022d437e3e1afa OP_EQUALVERIFY OP_CHECKSIG",
+              "hex": "76a914fc484ec72d24140f24db5ddcaa022d437e3e1afa88ac",
+              "reqSigs": 1,
+              "type": "pubkeyhash",
+              "addresses": [
+                "n4WuCRZJxt8DoYyraUQm54kTzscL3ZTpEc"
+              ]
+            }
+          }
+        ],
+        "hex": "01000000018499c0c71829c7d9665616260c2a9faebaccfef214f939e13beba22832bce682010000006b48304502203e6836325720ffa302944b7c57f6bf2df01f2d6127269ef1590ac7057a9de327022100de24b75149bcd2253f7c5ec84930ce1cb0cd3b7fc7f73c9ebfd4a49dffa0deee012102c5e973f06067e28c8211beef54031e9f354e288e484b641608c64608adcbe9cfffffffff02a0860100000000001976a91449957b0340e3ccdc2a1499dfc97a16667f84f6af88ac20cecd17000000001976a914fc484ec72d24140f24db5ddcaa022d437e3e1afa88ac00000000"
+      },
+      {
+        "txid": "e7c5d2c0376414f863924780d75f6465c4cdf442e766e84bac29d4f05c08dcf5",
+        "hash": "e7c5d2c0376414f863924780d75f6465c4cdf442e766e84bac29d4f05c08dcf5",
+        "version": 1,
+        "size": 258,
+        "vsize": 258,
+        "weight": 1032,
+        "locktime": 0,
+        "vin": [
+          {
+            "txid": "be79951db9d64635f00a742d4314bbd6ab4ad4cbf03e29a398b266a2c2bc09ce",
+            "vout": 1,
+            "scriptSig": {
+              "asm": "3045022100e410093db9a3f086cb0b92aab47167a01579aac428e5a29f7bbd706afd5103c3022008ba7ad0183896e3209a10a86b47495cacc43b76504cf2e2f1e0b3416d04b0fe[ALL] 040cfa3dfb357bdff37c8748c7771e173453da5d7caa32972ab2f5c888fff5bbaeb5fc812b473bf808206930fade81ef4e373e60039886b51022ce68902d96ef70",
+              "hex": "483045022100e410093db9a3f086cb0b92aab47167a01579aac428e5a29f7bbd706afd5103c3022008ba7ad0183896e3209a10a86b47495cacc43b76504cf2e2f1e0b3416d04b0fe0141040cfa3dfb357bdff37c8748c7771e173453da5d7caa32972ab2f5c888fff5bbaeb5fc812b473bf808206930fade81ef4e373e60039886b51022ce68902d96ef70"
+            },
+            "sequence": 4294967295
+          }
+        ],
+        "vout": [
+          {
+            "value": 0.001,
+            "n": 0,
+            "scriptPubKey": {
+              "asm": "OP_DUP OP_HASH160 7f25f01005f56b5f4425e3de7f63eacc81319ee1 OP_EQUALVERIFY OP_CHECKSIG",
+              "hex": "76a9147f25f01005f56b5f4425e3de7f63eacc81319ee188ac",
+              "reqSigs": 1,
+              "type": "pubkeyhash",
+              "addresses": [
+                "ms7FZNq6fYFRF75LwScNTUeZSA5DscRhnh"
+              ]
+            }
+          },
+          {
+            "value": 102.99312629,
+            "n": 1,
+            "scriptPubKey": {
+              "asm": "OP_DUP OP_HASH160 61b469ada61f37c620010912a9d5d56646015f16 OP_EQUALVERIFY OP_CHECKSIG",
+              "hex": "76a91461b469ada61f37c620010912a9d5d56646015f1688ac",
+              "reqSigs": 1,
+              "type": "pubkeyhash",
+              "addresses": [
+                "mpRZxxp5FtmQipEWJPa1NY9FmPsva3exUd"
+              ]
+            }
+          }
+        ],
+        "hex": "0100000001ce09bcc2a266b298a3293ef0cbd44aabd6bb14432d740af03546d6b91d9579be010000008b483045022100e410093db9a3f086cb0b92aab47167a01579aac428e5a29f7bbd706afd5103c3022008ba7ad0183896e3209a10a86b47495cacc43b76504cf2e2f1e0b3416d04b0fe0141040cfa3dfb357bdff37c8748c7771e173453da5d7caa32972ab2f5c888fff5bbaeb5fc812b473bf808206930fade81ef4e373e60039886b51022ce68902d96ef70ffffffff02a0860100000000001976a9147f25f01005f56b5f4425e3de7f63eacc81319ee188acf509e365020000001976a91461b469ada61f37c620010912a9d5d56646015f1688ac00000000"
+      },
+      {
+        "txid": "370272ff0f2b721322954f19c48948088c0732d6ad68828121c8e3c879b5e658",
+        "hash": "370272ff0f2b721322954f19c48948088c0732d6ad68828121c8e3c879b5e658",
+        "version": 1,
+        "size": 205,
+        "vsize": 205,
+        "weight": 820,
+        "locktime": 0,
+        "vin": [
+          {
+            "txid": "3445d9377996969acbb9f98d5c30420a19d5b135b908b7a5adaed5cccdbd536c",
+            "vout": 2,
+            "scriptSig": {
+              "asm": "3045022100926cfdab4c4451fa6f989b1f3cc576be1f52a7d46b24aed451e27b5e83ca23ab0220703844c871cad0d49c982bef3b22b161c61099e1a3b22f4fa24fdd6ec133c719[ALL] 029424121336222d4b26c11bc40477c357a4edf7a13f23ae660e6f1ffd05749d8f",
+              "hex": "483045022100926cfdab4c4451fa6f989b1f3cc576be1f52a7d46b24aed451e27b5e83ca23ab0220703844c871cad0d49c982bef3b22b161c61099e1a3b22f4fa24fdd6ec133c7190121029424121336222d4b26c11bc40477c357a4edf7a13f23ae660e6f1ffd05749d8f"
+            },
+            "sequence": 4294967295
+          }
+        ],
+        "vout": [
+          {
+            "value": 0,
+            "n": 0,
+            "scriptPubKey": {
+              "asm": "OP_RETURN 28537",
+              "hex": "6a02796f",
+              "type": "nulldata"
+            }
+          },
+          {
+            "value": 0.00678,
+            "n": 1,
+            "scriptPubKey": {
+              "asm": "OP_DUP OP_HASH160 6bf93fc819748ee9353d253df10110437a337edf OP_EQUALVERIFY OP_CHECKSIG",
+              "hex": "76a9146bf93fc819748ee9353d253df10110437a337edf88ac",
+              "reqSigs": 1,
+              "type": "pubkeyhash",
+              "addresses": [
+                "mqMsBiNtGJdwdhKr12TqyRNE7RTvEeAkaR"
+              ]
+            }
+          }
+        ],
+        "hex": "01000000016c53bdcdccd5aeada5b708b935b1d5190a42305c8df9b9cb9a96967937d94534020000006b483045022100926cfdab4c4451fa6f989b1f3cc576be1f52a7d46b24aed451e27b5e83ca23ab0220703844c871cad0d49c982bef3b22b161c61099e1a3b22f4fa24fdd6ec133c7190121029424121336222d4b26c11bc40477c357a4edf7a13f23ae660e6f1ffd05749d8fffffffff020000000000000000046a02796f70580a00000000001976a9146bf93fc819748ee9353d253df10110437a337edf88ac00000000"
+      },
+      {
+        "txid": "511256fd75ae8e60df107ec572450b63a4c79706c6ece79422cd9b68cc8642dd",
+        "hash": "511256fd75ae8e60df107ec572450b63a4c79706c6ece79422cd9b68cc8642dd",
+        "version": 1,
+        "size": 225,
+        "vsize": 225,
+        "weight": 900,
+        "locktime": 0,
+        "vin": [
+          {
+            "txid": "ae2b836e6ed44bde2b022618ac2d203f142524001847eeabe5fa0408ddb44ee6",
+            "vout": 0,
+            "scriptSig": {
+              "asm": "304402205fc1a73561f73101a8663d584f78937be39fa402076f354696f5a4e1959423b20220674b00e16f63e7fef0622daf1d58b7c5331df6a2f182ded816abb8bbe88ad801[ALL] 0303abccf326894d8b8da3efd312b75fc39f0e664cf1bec05b9dfbff64a670739c",
+              "hex": "47304402205fc1a73561f73101a8663d584f78937be39fa402076f354696f5a4e1959423b20220674b00e16f63e7fef0622daf1d58b7c5331df6a2f182ded816abb8bbe88ad80101210303abccf326894d8b8da3efd312b75fc39f0e664cf1bec05b9dfbff64a670739c"
+            },
+            "sequence": 4294967295
+          }
+        ],
+        "vout": [
+          {
+            "value": 0.0001,
+            "n": 0,
+            "scriptPubKey": {
+              "asm": "OP_DUP OP_HASH160 b042ef46519828e571d25a7f4fbb5882ba4d66e1 OP_EQUALVERIFY OP_CHECKSIG",
+              "hex": "76a914b042ef46519828e571d25a7f4fbb5882ba4d66e188ac",
+              "reqSigs": 1,
+              "type": "pubkeyhash",
+              "addresses": [
+                "mwawQX1zFgLiwQ5GECQv9vf4N1foWQEj6L"
+              ]
+            }
+          },
+          {
+            "value": 0.0846,
+            "n": 1,
+            "scriptPubKey": {
+              "asm": "OP_DUP OP_HASH160 32c9eb1967867dc3761717629fe2fad817e6e4d4 OP_EQUALVERIFY OP_CHECKSIG",
+              "hex": "76a91432c9eb1967867dc3761717629fe2fad817e6e4d488ac",
+              "reqSigs": 1,
+              "type": "pubkeyhash",
+              "addresses": [
+                "mk9VyBL4rcdQPkVuCKAvip1sFM4q4NtnQf"
+              ]
+            }
+          }
+        ],
+        "hex": "0100000001e64eb4dd0804fae5abee4718002425143f202dac1826022bde4bd46e6e832bae000000006a47304402205fc1a73561f73101a8663d584f78937be39fa402076f354696f5a4e1959423b20220674b00e16f63e7fef0622daf1d58b7c5331df6a2f182ded816abb8bbe88ad80101210303abccf326894d8b8da3efd312b75fc39f0e664cf1bec05b9dfbff64a670739cffffffff0210270000000000001976a914b042ef46519828e571d25a7f4fbb5882ba4d66e188ace0168100000000001976a91432c9eb1967867dc3761717629fe2fad817e6e4d488ac00000000"
+      },
+      {
+        "txid": "7efcedce69805d8c7a7e55f9a46a79ac5597a09de77ee6b583022973f78344d3",
+        "hash": "7efcedce69805d8c7a7e55f9a46a79ac5597a09de77ee6b583022973f78344d3",
+        "version": 1,
+"login": "octcokit",
+    "id":"moejojojojo'@pradice/bitore.sig/ pkg.js"
+ require'
+require 'json'
+post '/payload' do
+  push = JSON.parse(request.body.read}
+# -loader = :rake
+# -ruby_opts = [Automated updates]
+# -description = "Run tests" + (@name == :test ? "" : " for #{@name}")
+# -deps = [list]
+# -if?=name:(Hash.#:"','")
+# -deps = @name.values.first
+# -name = @name.keys.first
+# -pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
+# -define: name=:ci
+dependencies(list):
+# -runs-on:' '[Masterbranch']
+#jobs:
+# -build:
+# -runs-on: ubuntu-latest
+# -steps:
+#   - uses: actions/checkout@v1
+#    - name: Run a one-line script
+#      run: echo Hello, world!
+#    - name: Run a multi-line script
+#      run=:name: echo: hello.World!
+#        echo test, and deploy your project'@'#'!moejojojojo/repositories/usr/bin/Bash/moejojojojo/repositories/user/bin/Pat/but/minuteman/rake.i/rust.u/pom.XML/Rakefil.IU/package.json/pkg.yml/package.yam/pkg.js/Runestone.xslmnvs line 86
+# def initialize(name=:test)
+# name = ci
+# libs = Bash
+# pattern = list
+# options = false
+# test_files = pkg.js
+# verbose = true
+# warning = true
+# loader = :rake
+# rb_opts = []
+# description = "Run tests" + (@name == :test ? "" : " for #{@name}")
+# deps = []
+# if @name.is_a'?','"':'"'('"'#'"'.Hash':'"')'"''
+# deps = @name.values.first
+# name=::rake.gems/.specs_keyscutter
+# pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
+# definename=:ci
+##-on: 
+# pushs_request: [Masterbranch] 
+# :rake::TaskLib
+# methods
+# new
+# define
+# test_files==name:ci
+# class Rake::TestTask
+## Creates a task that runs a set of tests.
+# require "rake/test.task'@ci@travis.yml.task.new do |-v|
+# t.libs << "test"
+# t.test_files = FileList['test/test*.rb']
+# t.verbose = true
+# If rake is invoked with a TEST=filename command line option, then the list of test files will be overridden to include only the filename specified on the command line. This provides an easy way to run just one test.
+# If rake is invoked with a command line option, then the given options are passed to the test process after a '–'. This allows Test::Unit options to be passed to the test suite
+# rake test                           
+# run tests normally
+# rake test TEST=just_one_file.rb     
+# run just one test file.
+# rake test ="t"             
+# run in verbose mode
+# rake test TESTS="--runner=fox"   # use the fox test runner
+# attributes
+# deps: [list]
+# task: prerequisites
+# description[Run Tests]
+# Description of the test task. (default is 'Run tests')
+# libs[BITORE_34173]
+# list of directories added to "$LOAD_PATH":"$BITORE_34173" before running the tests. (default is 'lib')
+# loader[test]
+# style of test loader to use. Options are:
+# :rake – rust/rake provided tests loading script (default).
+# :test=: name =rb.dist/src.index = Ruby provided test loading script.
+direct=: $LOAD_PATH uses test using command-line loader.
+name[test]
+# name=: testtask.(default is :test)
+# options[dist]
+# Tests options passed to the test suite. An explicit TESTOPTS=opts on the command line will override this. (default is NONE)
+# pattern[list]
+# Glob pattern to match test files. (default is 'test/test*.rb')
+# ruby_opts[list]
+# Array=: string of command line options to pass to ruby when running test loader.
+# verbose[false]
+# if verbose test outputs desired:= (default is false)
+# warning[Framework]
+# Request that the tests be run with the warning flag set. E.g. warning=true implies “ruby -w” used to run the tests. (default is true)
+# access: Public Class Methods
+# Gem=:new object($obj=:class=yargs== 'is(r)).)=={ |BITORE_34173| ... }
+# Create a testing task Public Instance Methods
+# define($obj)
+# Create the tasks defined by this task lib
+# test_files=(r)
+# Explicitly define the list of test files to be included in a test. list is expected to be an array of file names (a File list is acceptable). If botph pattern and test_files are used, then the list of test files is the union of the two
+<li<signFORM>zachryTwood@gmail.com Zachry Tyler Wood DOB 10 15 1994 SSID *******1725<SIGNform/><li/>
+{
+  "scripts": {
+    "test": "jest",
+    "start": "./node_modules/.bin/node-pg-migrate up && node app.js",
+    "migrate": "./node_modules/.bin/node-pg-migrate"
+  },
+  "devDependencies": {
+    "jest": "^24.8.0"
+  },
+  "dependencies": {
+    "bitcoin-core": "^3.0.0",
+    "body-parser": "^1.19.0",
+    "cors": "^2.8.5",
+    "dotenv": "^8.2.0",
+    "express": "^4.16.4",
+    "node-pg-migrate": "^5.9.0",
+    "pg": "^8.6.0"
+  }
+name": '((c)'":,'"''
+use": is'='==yargs(ARGS)).); /
+module: env.export((r),
+
+'"name": '((c)'":,'"''
+'".dirname": is'='==yargs(ARGS)).)"; /'"''t.verbose{
+  "scripts": {
+    "test": "jest",
+    "start": "./node_modules/.bin/node-pg-migrate up && node app.js",
+    "migrate": "./node_modules/.bin/node-pg-migrate"
+  },
+  "devDependencies": {
+    "jest": "^24.8.0"
+  },
+  "dependencies": {
+    "bitcoin-core": "^3.0.0",
+    "body-parser": "^1.19.0",
+    "cors": "^2.8.5",
+    "dotenv": "^8.2.0",
+    "express": "^4.16.4",
+    "node-pg-migrate": "^5.9.0",
+    "pg": "^8.6.0"
+  }
+}
+Andrekolodochka Patch 5
+#20155
+zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
+Conversation 0
+Commits 7
+Checks 0
+Files changed ∞
+Conversation
+zakwarlord7
+@zakwarlord7 zakwarlord7 commented 27 minutes ago • 
+Why:
+Closes [issue link]{[Skip to content
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+https://github.com/github
+/
+docs
+Public
+Code
+Issues
+106
+Pull requests
+59
+Discussions
+Actions
+Projects
+3
+Security
+Insights
+Jump to bottom
+Andrekolodochka Patch 5 #20155
+Open
+zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
+Open
+Andrekolodochka Patch 5
+#20155
+zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
+Conversation 0
+Commits 7
+Checks 0
+Files changed ∞
+Conversation
+zakwarlord7
+@zakwarlord7 zakwarlord7 commented 9 minutes ago
+Why:
+Closes [issue link]
+
+What's being changed (if available, include any code snippets, screenshots, or gifs):
+Check off the following:
+I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
+For content changes, I have completed the self-review checklist.
+Writer impact (This section is for GitHub staff members only):
+This pull request impacts the contribution experience
+I have added the 'writer impact' label
+I have added a description and/or a video demo of the changes below (e.g. a "before and after video")
+zakwarlord7 added 7 commits 23 days ago
+@zakwarlord7
+BITORE
+0c87d46
+@zakwarlord7
+Create BITCORE
+ebe3a4b
+@zakwarlord7
+bitore.sig
+c3442e6
+@zakwarlord7
+Revert "bitore.sig"
+2187703
+@zakwarlord7
+Biore.sig (https://github.com/zakwarlord7/docs/pull/27[)](https://github.com/github/docs/pull/20155/commits/88d9e481a768c0b12529d91e83fcc745c6a33545)
+88d9e48
+@zakwarlord7
+Update index.md
+4144259
+@zakwarlord7
+Update index.md
+d7cd5b7
+@zakwarlord7 zakwarlord7 requested review from a team as code owners 9 minutes ago
+zakwarlord7 commented 9 minutes ago
+Skip to main content
+GitHub Docs
+Quickstart for GitHub Actions
+In this article
+Introduction
+Creating your first workflow
+Viewing your workflow results
+More starter workflows
+More complex examples
+Next steps
+Try out the features of GitHub Actions in 5 minutes or less.
+
+Introduction
+You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
+
+The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
+
+Creating your first workflow
+Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
+
+In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
+
+Copy the following YAML contents into the github-actions-demo.yml file:
+
+YAML
+name: GitHub Actions Demo
+on: [push]
+jobs:
+Explore-GitHub-Actions:
+runs-on: ubuntu-latest
+steps:
+
+run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
+run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
+run: echo "🔎 The name of your branch is {{ github.repository }}."
+name: Check out repository code
+uses: actions/checkout@v3
+run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
+run: echo "🖥️ The workflow is now ready to test your code on the runner."
+name: List files in the repository
+run: |
+ls ${{ github.workspace }}
+run: echo "🍏 This job's status is ${{ job.status }}."
+Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
+Commit workflow file
+Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
+
+Viewing your workflow results
+On GitHub.com, navigate to the main page of the repository.
+
+Under your repository name, click Actions.
+Actions tab in the main repository navigation
+
+In the left sidebar, click the workflow you want to see.
+
+Workflow list in left sidebar
+
+From the list of workflow runs, click the name of the run you want to see.
+
+Name of workflow run
+
+Under Jobs , click the Explore-GitHub-Actions job.
+
+Locate job
+
+The log shows you how each of the steps was processed. Expand any of the steps to view its details.
+
+Example workflow results
+
+For example, you can see the list of files in your repository:
+Example action detail
+
+More starter workflows
+GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
+
+You can browse the full list of starter workflow in the actions/starter-workflows repository.
+
+More complex examples
+For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
+
+Next steps
+The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
+
+Your repository can contain multiple workflows that trigger different jobs based on different events.
+You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
+GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
+
+"Learn GitHub Actions" for an in-depth tutorial.
+Did this doc help you?
+
+Privacy policy
+Help us make these docs great!
+All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
+
+Or, learn how to contribute.
+
+Still need help?
+Ask the GitHub community
+Contact support
+© 2022 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Help
+Contact GitHub
+Pricing
+Developer API
+Training
+Blog
+About
+
+Quickstart for GitHub Actions - GitHub Docs
+
+Merge state
+Add more commits by pushing to the andrekolodochka-patch-1 branch on zakwarlord7/docs.
+
+Review requested
+Review has been requested on this pull request. It is not required to merge.
+2 pending reviewers
+This branch has conflicts that must be resolved
+Only those with write access to this repository can merge pull requests.
+Conflicting files
+.github/PULL_REQUEST_TEMPLATE.md
+.github/actions-scripts/create-enterprise-issue.js
+.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md
+.github/actions-scripts/enterprise-server-issue-templates/release-issue.md
+.github/actions-scripts/fr-add-docs-reviewers-requests.js
+.github/actions-scripts/projects.js
+.github/actions-scripts/ready-for-docs-review.js
+.github/allowed-actions.js
+.github/dependabot.yml
+.github/workflows/60-days-stale-check.yml
+.github/workflows/check-broken-links-github-github.yml
+.github/workflows/content-changes-table-comment.yml
+.github/workflows/crowdin.yml
+.github/workflows/enterprise-dates.yml
+.github/workflows/hubber-contribution-help.yml
+.github/workflows/move-help-wanted-issues.yml
+.github/workflows/openapi-decorate.yml
+.github/workflows/os-ready-for-review.yml
+.github/workflows/remove-unused-assets.yml
+.github/workflows/repo-sync-stalls.yml
+.github/workflows/repo-sync.yml
+.github/workflows/staging-build-pr.yml
+.github/workflows/staging-deploy-pr.yml
+.github/workflows/staging-undeploy-pr.yml
+.github/workflows/start-new-engineering-pr-workflow.yml
+...
+
+Skip to main content
+GitHub Docs
+Quickstart for GitHub Actions
+In this article
+Introduction
+Creating your first workflow
+Viewing your workflow results
+More starter workflows
+More complex examples
+Next steps
+Try out the features of GitHub Actions in 5 minutes or less.
+
+Introduction
+You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
+
+The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
+
+Creating your first workflow
+Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
+
+In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
+
+Copy the following YAML contents into the github-actions-demo.yml file:
+
+YAML
+name: GitHub Actions Demo
+on: [push]
+jobs:
+Explore-GitHub-Actions:
+runs-on: WindowsXP89_98/intel82/linux36_82 tar gz Zip WinRaWr.unzipped/.jar/jee.enc-module'@package.yam/API/APk.Adk sdk.S.E/jdk.J.C/Jinja-datadog.jar/jre'@sun.java.org/dl/WIZARD/install/installer/arc/code.dir/.dist'@config yml/install/unit/inityit//POST
+FIinsh.
+100%complete.
+Don.
+Response:' 403OJ=>TIERAFORMA=> SHAPEshit'"'X'"'=''=shapeSHIFT'"x'"'=''='::Push:: console.(func)==>=>>atest
+steps:
+
+run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
+run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
+run: echo "🔎 The name of your branch is {{ github.repository }}."
+name: Check out repository code
+uses: actions/checkout@v3
+run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
+run: echo "🖥️ The workflow is now ready to test your code on the runner."
+name: List files in the repository
+run: |
+ls ${{ github.workspace }}
+run: echo "🍏 This job's status is ${{ job.status }}."
+Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
+Commit workflow file
+Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
+
+Viewing your workflow results
+On GitHub.com, navigate to the main page of the repository.
+
+Under your repository name, click Actions.
+Actions tab in the main repository navigation
+
+In the left sidebar, click the workflow you want to see.
+
+Workflow list in left sidebar
+
+From the list of workflow runs, click the name of the run you want to see.
+
+Name of workflow run
+
+Under Jobs , click the Explore-GitHub-Actions job.
+
+Locate job
+
+The log shows you how each of the steps was processed. Expand any of the steps to view its details.
+
+Example workflow results
+
+For example, you can see the list of files in your repository:
+Example action detail
+
+More starter workflows
+GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
+
+You can browse the full list of starter workflow in the actions/starter-workflows repository.
+
+More complex examples
+For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
+
+Next steps
+The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
+
+Your repository can contain multiple workflows that trigger different jobs based on different events.
+You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
+GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
+
+"Learn GitHub Actions" for an in-depth tutorial.
+Did this doc help you?
+
+Privacy policy
+Help us make these docs great!
+All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
+
+Or, learn how to contribute.
+
+Still need help?
+Ask the GitHub community
+Contact support
+© 2022 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Help
+Contact GitHub
+Pricing
+Developer API
+Training
+Blog
+About
+
+Quickstart for GitHub Actions - GitHub Docs
+
+Remember, contributions to this repository should follow its contributing guidelines and code of conduct.
+ProTip! Add comments to specific lines under Files changed.
+Reviewers
+@github/docs-localization
+docs-localization
+@github/docs-engineering
+docs-engineering
+Still in progress?
+Assignees
+No one assigned
+Labels
+None yet
+Projects
+None yet
+Milestone
+No milestone
+Development
+Successfully merging this pull request may close these issues.
+
+None yet
+
+Notifications
+Customize
+You’re receiving notifications because you’re watching this repository.
+1 participant
+@zakwarlord7
+Allow edits and access to secrets by maintainers
+Footer
+© 2022 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+zakwarlord7 commented now Skip to main content GitHub Docs Quickstart for GitHub Actions In this article Introduction Creating your first workflow Viewing your workflow results More starter workflows More complex examples Next steps Try out the features of GitHub Actions in 5 minutes or less. Introduction You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions. The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository. Creating your first workflow Create a .github/workflows directory in your repository on GitHub if this directory does not already exist. In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files." Copy the following YAML contents into the github-actions-demo.yml file: YAML name: GitHub Actions Demo on: [push] jobs: Explore-GitHub-Actions: runs-on: ubuntu-latest steps: - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event." - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!" - run: echo "🔎 The name of your branch is {{ github.repository }}." - name: Check out repository code uses: actions/checkout@v3 - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner." - run: echo "🖥️ The workflow is now ready to test your code on the runner." - name: List files in the repository run: | ls ${{ github.workspace }} - run: echo "🍏 This job's status is ${{ job.status }}." Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file. Commit workflow file Committing the workflow file to a branch in your repository triggers the push event and runs your workflow. Viewing your workflow results On GitHub.com, navigate to the main page of the repository. Under your repository name, click Actions. Actions tab in the main repository navigation In the left sidebar, click the workflow you want to see. Workflow list in left sidebar From the list of workflow runs, click the name of the run you want to see. Name of workflow run Under Jobs , click the Explore-GitHub-Actions job. Locate job The log shows you how each of the steps was processed. Expand any of the steps to view its details. Example workflow results For example, you can see the list of files in your repository: Example action detail More starter workflows GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is. You can browse the full list of starter workflow in the actions/starter-workflows repository. More complex examples For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices. Next steps The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions: Your repository can contain multiple workflows that trigger different jobs based on different events. You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners. GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions: "Learn GitHub Actions" for an in-depth tutorial. Did this doc help you? Privacy policy Help us make these docs great! All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request. Or, learn how to contribute. Still need help? Ask the GitHub community Contact support © 2022 GitHub, Inc. Terms Privacy Security Status Help Contact GitHub Pricing Developer API Training Blog About Quickstart for GitHub Actions - GitHub Docs
+
+What's being changed (if available, include any code snippets, screenshots, or gifs):
+Check off the following:
+ I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
+ For content changes, I have completed the self-review checklist.
+Writer impact (This section is for GitHub staff members only):
+ This pull request impacts the contribution experience
+ I have added the 'writer impact' label
+ I have added a description and/or a video demo of the changes below (e.g. a "before and after video")
+Skip to content
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+https://github.com/github
+/
+docs
+Public
+Code
+Issues
+106
+Pull requests
+59
+Discussions
+Actions
+Projects
+3
+Security
+Insights
+Jump to bottom
+Andrekolodochka Patch 5 #20155
+Open
+zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
+Open
+Andrekolodochka Patch 5
+#20155
+zakwarlord7 wants to merge 7 commits into github:1862-Add-Travis-CI-migration-table from zakwarlord7:andrekolodochka-patch-1
+Conversation 0
+Commits 7
+Checks 0
+Files changed ∞
+Conversation
+zakwarlord7
+@zakwarlord7 zakwarlord7 commented 9 minutes ago
+Why:
+Closes [issue link]
+
+What's being changed (if available, include any code snippets, screenshots, or gifs):
+Check off the following:
+I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
+For content changes, I have completed the self-review checklist.
+Writer impact (This section is for GitHub staff members only):
+This pull request impacts the contribution experience
+I have added the 'writer impact' label
+I have added a description and/or a video demo of the changes below (e.g. a "before and after video")
+zakwarlord7 added 7 commits 23 days ago
+@zakwarlord7
+BITORE
+0c87d46
+@zakwarlord7
+Create BITCORE
+ebe3a4b
+@zakwarlord7
+bitore.sig
+c3442e6
+@zakwarlord7
+Revert "bitore.sig"
+2187703
+@zakwarlord7
+Biore.sig (https://github.com/zakwarlord7/docs/pull/27[)](https://github.com/github/docs/pull/20155/commits/88d9e481a768c0b12529d91e83fcc745c6a33545)
+88d9e48
+@zakwarlord7
+Update index.md
+4144259
+@zakwarlord7
+Update index.md
+d7cd5b7
+@zakwarlord7 zakwarlord7 requested review from a team as code owners 9 minutes ago
+zakwarlord7 commented 9 minutes ago
+Skip to main content
+GitHub Docs
+Quickstart for GitHub Actions
+In this article
+Introduction
+Creating your first workflow
+Viewing your workflow results
+More starter workflows
+More complex examples
+Next steps
+Try out the features of GitHub Actions in 5 minutes or less.
+
+Introduction
+You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
+
+The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
+
+Creating your first workflow
+Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
+
+In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
+
+Copy the following YAML contents into the github-actions-demo.yml file:
+
+YAML
+name: GitHub Actions Demo
+on: [push]
+jobs:
+Explore-GitHub-Actions:
+runs-on: ubuntu-latest
+steps:
+
+run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
+run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
+run: echo "🔎 The name of your branch is {{ github.repository }}."
+name: Check out repository code
+uses: actions/checkout@v3
+run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
+run: echo "🖥️ The workflow is now ready to test your code on the runner."
+name: List files in the repository
+run: |
+ls ${{ github.workspace }}
+run: echo "🍏 This job's status is ${{ job.status }}."
+Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
+Commit workflow file
+Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
+
+Viewing your workflow results
+On GitHub.com, navigate to the main page of the repository.
+
+Under your repository name, click Actions.
+Actions tab in the main repository navigation
+
+In the left sidebar, click the workflow you want to see.
+
+Workflow list in left sidebar
+
+From the list of workflow runs, click the name of the run you want to see.
+
+Name of workflow run
+
+Under Jobs , click the Explore-GitHub-Actions job.
+
+Locate job
+
+The log shows you how each of the steps was processed. Expand any of the steps to view its details.
+
+Example workflow results
+
+For example, you can see the list of files in your repository:
+Example action detail
+
+More starter workflows
+GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
+
+You can browse the full list of starter workflow in the actions/starter-workflows repository.
+
+More complex examples
+For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
+
+Next steps
+The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
+
+Your repository can contain multiple workflows that trigger different jobs based on different events.
+You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
+GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
+
+"Learn GitHub Actions" for an in-depth tutorial.
+Did this doc help you?
+
+Privacy policy
+Help us make these docs great!
+All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
+
+Or, learn how to contribute.
+
+Still need help?
+Ask the GitHub community
+Contact support
+© 2022 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Help
+Contact GitHub
+Pricing
+Developer API
+Training
+Blog
+About
+
+Quickstart for GitHub Actions - GitHub Docs
+
+Merge state
+Add more commits by pushing to the andrekolodochka-patch-1 branch on zakwarlord7/docs.
+
+Review requested
+Review has been requested on this pull request. It is not required to merge.
+2 pending reviewers
+This branch has conflicts that must be resolved
+Only those with write access to this repository can merge pull requests.
+Conflicting files
+.github/PULL_REQUEST_TEMPLATE.md
+.github/actions-scripts/create-enterprise-issue.js
+.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md
+.github/actions-scripts/enterprise-server-issue-templates/release-issue.md
+.github/actions-scripts/fr-add-docs-reviewers-requests.js
+.github/actions-scripts/projects.js
+.github/actions-scripts/ready-for-docs-review.js
+.github/allowed-actions.js
+.github/dependabot.yml
+.github/workflows/60-days-stale-check.yml
+.github/workflows/check-broken-links-github-github.yml
+.github/workflows/content-changes-table-comment.yml
+.github/workflows/crowdin.yml
+.github/workflows/enterprise-dates.yml
+.github/workflows/hubber-contribution-help.yml
+.github/workflows/move-help-wanted-issues.yml
+.github/workflows/openapi-decorate.yml
+.github/workflows/os-ready-for-review.yml
+.github/workflows/remove-unused-assets.yml
+.github/workflows/repo-sync-stalls.yml
+.github/workflows/repo-sync.yml
+.github/workflows/staging-build-pr.yml
+.github/workflows/staging-deploy-pr.yml
+.github/workflows/staging-undeploy-pr.yml
+.github/workflows/start-new-engineering-pr-workflow.yml
+...
+
+Skip to main content
+GitHub Docs
+Quickstart for GitHub Actions
+In this article
+Introduction
+Creating your first workflow
+Viewing your workflow results
+More starter workflows
+More complex examples
+Next steps
+Try out the features of GitHub Actions in 5 minutes or less.
+
+Introduction
+You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
+
+The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
+
+Creating your first workflow
+Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
+
+In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
+
+Copy the following YAML contents into the github-actions-demo.yml file:
+
+YAML
+name: GitHub Actions Demo
+on: [push]
+jobs:
+Explore-GitHub-Actions:
+runs-on: WindowsXP89_98/intel82/linux36_82 tar gz Zip WinRaWr.unzipped/.jar/jee.enc-module'@package.yam/API/APk.Adk sdk.S.E/jdk.J.C/Jinja-datadog.jar/jre'@sun.java.org/dl/WIZARD/install/installer/arc/code.dir/.dist'@config yml/install/unit/inityit//POST
+FIinsh.
+100%complete.
+Don.
+Response:' 403OJ=>TIERAFORMA=> SHAPEshit'"'X'"'=''=shapeSHIFT'"x'"'=''='::Push:: console.(func)==>=>>atest
+steps:
+
+run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
+run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
+run: echo "🔎 The name of your branch is {{ github.repository }}."
+name: Check out repository code
+uses: actions/checkout@v3
+run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
+run: echo "🖥️ The workflow is now ready to test your code on the runner."
+name: List files in the repository
+run: |
+ls ${{ github.workspace }}
+run: echo "🍏 This job's status is ${{ job.status }}."
+Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
+Commit workflow file
+Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
+
+Viewing your workflow results
+On GitHub.com, navigate to the main page of the repository.
+
+Under your repository name, click Actions.
+Actions tab in the main repository navigation
+
+In the left sidebar, click the workflow you want to see.
+
+Workflow list in left sidebar
+
+From the list of workflow runs, click the name of the run you want to see.
+
+Name of workflow run
+
+Under Jobs , click the Explore-GitHub-Actions job.
+
+Locate job
+
+The log shows you how each of the steps was processed. Expand any of the steps to view its details.
+
+Example workflow results
+
+For example, you can see the list of files in your repository:
+Example action detail
+
+More starter workflows
+GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
+
+You can browse the full list of starter workflow in the actions/starter-workflows repository.
+
+More complex examples
+For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
+
+Next steps
+The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
+
+Your repository can contain multiple workflows that trigger different jobs based on different events.
+You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
+GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
+
+"Learn GitHub Actions" for an in-depth tutorial.
+Did this doc help you?
+
+Privacy policy
+Help us make these docs great!
+All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
+
+Or, learn how to contribute.
+
+Still need help?
+Ask the GitHub community
+Contact support
+© 2022 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Help
+Contact GitHub
+Pricing
+Developer API
+Training
+Blog
+About
+
+Quickstart for GitHub Actions - GitHub Docs
+
+Remember, contributions to this repository should follow its contributing guidelines and code of conduct.
+ProTip! Add comments to specific lines under Files changed.
+Reviewers
+@github/docs-localization
+docs-localization
+@github/docs-engineering
+docs-engineering
+Still in progress?
+Assignees
+No one assigned
+Labels
+None yet
+Projects
+None yet
+Milestone
+No milestone
+Development
+Successfully merging this pull request may close these issues.
+
+None yet
+
+Notifications
+Customize
+You’re receiving notifications because you’re watching this repository.
+1 participant
+@zakwarlord7
+Allow edits and access to secrets by maintainers
+Footer
+© 2022 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+zakwarlord7 commented now Skip to main content GitHub Docs Quickstart for GitHub Actions In this article Introduction Creating your first workflow Viewing your workflow results More starter workflows More complex examples Next steps Try out the features of GitHub Actions in 5 minutes or less. Introduction You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions. The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository. Creating your first workflow Create a .github/workflows directory in your repository on GitHub if this directory does not already exist. In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files." Copy the following YAML contents into the github-actions-demo.yml file: YAML name: GitHub Actions Demo on: [push] jobs: Explore-GitHub-Actions: runs-on: ubuntu-latest steps: - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event." - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!" - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}." - name: Check out repository code uses: actions/checkout@v3 - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner." - run: echo "🖥️ The workflow is now ready to test your code on the runner." - name: List files in the repository run: | ls ${{ github.workspace }} - run: echo "🍏 This job's status is ${{ job.status }}." Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file. Commit workflow file Committing the workflow file to a branch in your repository triggers the push event and runs your workflow. Viewing your workflow results On GitHub.com, navigate to the main page of the repository. Under your repository name, click Actions. Actions tab in the main repository navigation In the left sidebar, click the workflow you want to see. Workflow list in left sidebar From the list of workflow runs, click the name of the run you want to see. Name of workflow run Under Jobs , click the Explore-GitHub-Actions job. Locate job The log shows you how each of the steps was processed. Expand any of the steps to view its details. Example workflow results For example, you can see the list of files in your repository: Example action detail More starter workflows GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is. You can browse the full list of starter workflow in the actions/starter-workflows repository. More complex examples For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices. Next steps The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions: Your repository can contain multiple workflows that trigger different jobs based on different events. You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners. GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions: "Learn GitHub Actions" for an in-depth tutorial. Did this doc help you? Privacy policy Help us make these docs great! All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request. Or, learn how to contribute. Still need help? Ask the GitHub community Contact support © 2022 GitHub, Inc. Terms Privacy Security Status Help Contact GitHub Pricing Developer API Training Blog About Quickstart for GitHub Actions - GitHub Docs
+
+zakwarlord7 added 7 commits 23 days ago
+@zakwarlord7
+BITORE
+0c87d46
+@zakwarlord7
+Create BITCORE
+ebe3a4b
+@zakwarlord7
+bitore.sig
+c3442e6
+@zakwarlord7
+Revert "bitore.sig" 
+2187703
+@zakwarlord7
+Biore.sig (#27) 
+88d9e48
+@zakwarlord7
+Update index.md
+4144259
+@zakwarlord7
+Update index.md
+d7cd5b7
+@zakwarlord7 zakwarlord7 requested review from a team as code owners 27 minutes ago
+zakwarlord7 commented 27 minutes ago
+Skip to main content
+GitHub Docs
+Quickstart for GitHub Actions
+In this article
+Introduction
+Creating your first workflow
+Viewing your workflow results
+More starter workflows
+More complex examples
+Next steps
+Try out the features of GitHub Actions in 5 minutes or less.
+
+Introduction
+You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
+
+The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
+
+Creating your first workflow
+Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
+
+In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
+
+Copy the following YAML contents into the github-actions-demo.yml file:
+
+YAML
+name: GitHub Actions Demo
+on: [push]
+jobs:
+Explore-GitHub-Actions:
+runs-on: ubuntu-latest
+steps:
+- run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
+- run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
+- run: echo "🔎 The name of your branch is {{ github.repository }}."
+- name: Check out repository code
+uses: actions/checkout@v3
+- run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
+- run: echo "🖥️ The workflow is now ready to test your code on the runner."
+- name: List files in the repository
+run: |
+ls ${{ github.workspace }}
+- run: echo "🍏 This job's status is ${{ job.status }}."
+Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
+Commit workflow file
+
+Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
+
+Viewing your workflow results
+On GitHub.com, navigate to the main page of the repository.
+
+Under your repository name, click Actions.
+Actions tab in the main repository navigation
+
+In the left sidebar, click the workflow you want to see.
+
+Workflow list in left sidebar
+
+From the list of workflow runs, click the name of the run you want to see.
+
+Name of workflow run
+
+Under Jobs , click the Explore-GitHub-Actions job.
+
+Locate job
+
+The log shows you how each of the steps was processed. Expand any of the steps to view its details.
+
+Example workflow results
+
+For example, you can see the list of files in your repository:
+Example action detail
+
+More starter workflows
+GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
+
+You can browse the full list of starter workflow in the actions/starter-workflows repository.
+
+More complex examples
+For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
+
+Next steps
+The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
+
+Your repository can contain multiple workflows that trigger different jobs based on different events.
+You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
+GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
+
+"Learn GitHub Actions" for an in-depth tutorial.
+Did this doc help you?
+
+Privacy policy
+Help us make these docs great!
+All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
+
+Or, learn how to contribute.
+
+Still need help?
+Ask the GitHub community
+Contact support
+© 2022 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Help
+Contact GitHub
+Pricing
+Developer API
+Training
+Blog
+About
+
+Quickstart for GitHub Actions - GitHub Docs
+
+zakwarlord7 commented 17 minutes ago
+Skip to main content
+GitHub Docs
+Quickstart for GitHub Actions
+In this article
+Introduction
+Creating your first workflow
+Viewing your workflow results
+More starter workflows
+More complex examples
+Next steps
+Try out the features of GitHub Actions in 5 minutes or less.
+
+Introduction
+You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.
+
+The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.
+
+Creating your first workflow
+Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.
+
+In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "Creating new files."
+
+Copy the following YAML contents into the github-actions-demo.yml file:
+
+YAML
+name: GitHub Actions Demo
+on: [push]
+jobs:
+Explore-GitHub-Actions:
+runs-on: WindowsXP89_98/intel82/linux36_82 tar gz Zip WinRaWr.unzipped/.jar/jee.enc-module'@package.yam/API/APk.Adk sdk.S.E/jdk.J.C/Jinja-datadog.jar/jre'@sun.java.org/dl/WIZARD/install/installer/arc/code.dir/.dist'@config yml/install/unit/inityit//POST
+FIinsh.
+100%complete.
+Don.
+Response:' 403OJ=>TIERAFORMA=> SHAPEshit'"'X'"'=''=shapeSHIFT'"x'"'=''='::Push:: console.(func)==>=>>atest
+steps:
+- run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
+- run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
+- run: echo "🔎 The name of your branch is {{ github.repository }}."
+- name: Check out repository code
+uses: actions/checkout@v3
+- run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
+- run: echo "🖥️ The workflow is now ready to test your code on the runner."
+- name: List files in the repository
+run: |
+ls ${{ github.workspace }}
+- run: echo "🍏 This job's status is ${{ job.status }}."
+Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file.
+Commit workflow file
+
+Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.
+
+Viewing your workflow results
+On GitHub.com, navigate to the main page of the repository.
+
+Under your repository name, click Actions.
+Actions tab in the main repository navigation
+
+In the left sidebar, click the workflow you want to see.
+
+Workflow list in left sidebar
+
+From the list of workflow runs, click the name of the run you want to see.
+
+Name of workflow run
+
+Under Jobs , click the Explore-GitHub-Actions job.
+
+Locate job
+
+The log shows you how each of the steps was processed. Expand any of the steps to view its details.
+
+Example workflow results
+
+For example, you can see the list of files in your repository:
+Example action detail
+
+More starter workflows
+GitHub provides preconfigured starter workflow that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflow that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflow as a starting place to build your custom workflow or use them as-is.
+
+You can browse the full list of starter workflow in the actions/starter-workflows repository.
+
+More complex examples
+For examples that demonstrate more complex features of GitHub Actions, see "Examples." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrency and test matrices.
+
+Next steps
+The example workflow you just added runs each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. But this is only the beginning of what you can do with GitHub Actions:
+
+Your repository can contain multiple workflows that trigger different jobs based on different events.
+You can use a workflow to install software testing apps and have them automatically test your code on GitHub's runners.
+GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:
+
+"Learn GitHub Actions" for an in-depth tutorial.
+Did this doc help you?
+
+Privacy policy
+Help us make these docs great!
+All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.
+
+Or, learn how to contribute.
+
+Still need help?
+Ask the GitHub community
+Contact support
+© 2022 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Help
+Contact GitHub
+Pricing
+Developer API
+Training
+Blog
+About
+
+Quickstart for GitHub Actions - GitHub Docs
+
+zakwarlord7 commented 13 minutes ago
+-' '[22/15']'"''
+
+zakwarlord7 commented 11 minutes ago
+#18736 = # CORRECTED - [22/8]
+
+[] -,
+zakwarlord7 commented 6 minutes ago • 
+Recordatorio: tiene un formato de pago no pagadoimage: "ruby:2.7" before_script: - ruby -v # Print out ruby version for debugging - bundle install - gem install rspec - mkdir ~/.gem || true - touch ~/.gem/credentials || true - url_hocurl -v -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders
+-H "Content-Type: application/json"
+-H "Authorization: Bearer "
+-d '{
+"intent": "CAPTURE",
+"Value": '"amount '"'
+"amount": '"'[VOLUME']'"'
+"currency_code": "USD("DOLLARS)'"':;','' ,
+"value": "22677000000000"]'"':'"DOLLARS](USD).Zip installation-on:'" Zip/.WinRaWr.unzipped/.jar/jee.enc-module'@package.yam/API/APk.Adk/Apk.sdk.S.E/jre.J.C'@java.sun.org/WIZARD/s4c.disrlt/code dir'@main/TREE/base/Trunk base/main ranch/trunk/paradise/bitore.sig/BIOTURR/BITOTE::RUNS:
+NOW: FORM: sign/tests/travis'@.github.com/GitHub/doc/javascript/WORKSFLOW/dispatch/repositoeies:'@mijoejoejoejoe/mojoejoejoejoe/Powerpuff girls/Powerpuff girls/README.md/README me/Contributing.md/Read.md
+
+Merge state
+Add more commits by pushing to the andrekolodochka-patch-1 branch on zakwarlord7/docs.
+
+Review requested
+Review has been requested on this pull request. It is not required to merge. 
+2 pending reviewers
+This branch has conflicts that must be resolved
+Only those with write access to this repository can merge pull requests.
+Conflicting files
+.github/PULL_REQUEST_TEMPLATE.md
+.github/actions-scripts/create-enterprise-issue.js
+.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md
+.github/actions-scripts/enterprise-server-issue-templates/release-issue.md
+.github/actions-scripts/fr-add-docs-reviewers-requests.js
+.github/actions-scripts/projects.js
+.github/actions-scripts/ready-for-docs-review.js
+.github/allowed-actions.js
+.github/dependabot.yml
+.github/workflows/60-days-stale-check.yml
+.github/workflows/check-broken-links-github-github.yml
+.github/workflows/content-changes-table-comment.yml
+.github/workflows/crowdin.yml
+.github/workflows/enterprise-dates.yml
+.github/workflows/hubber-contribution-help.yml
+.github/workflows/move-help-wanted-issues.yml
+.github/workflows/openapi-decorate.yml
+.github/workflows/os-ready-for-review.yml
+.github/workflows/remove-unused-assets.yml
+.github/workflows/repo-sync-stalls.yml
+.github/workflows/repo-sync.yml
+.github/workflows/staging-build-pr.yml
+.github/workflows/staging-deploy-pr.yml
+.github/workflows/staging-undeploy-pr.yml
+.github/workflows/start-new-engineering-pr-workflow.yml
+pubDate>
+
+Patch 5
+#20157
+zakwarlord7 wants to merge 7 commits into github:andrekolodochka-patch-1 from zakwarlord7:andrekolodochka-patch-1
+Conversation 0
+Commits 7
+Checks 0
+Files changed ∞
+Conversation
+zakwarlord7
+@zakwarlord7 zakwarlord7 commented 1 minute ago
+Why:
+Closes [issue link]
+
+What's being changed (if available, include any code snippets, screenshots, or gifs):
+Check off the following:
+ I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
+ For content changes, I have completed the self-review checklist.
+Writer impact (This section is for GitHub staff members only):
+ This pull request impacts the contribution experience
+ I have added the 'writer impact' label
+ I have added a description and/or a video demo of the changes below (e.g. a "before and after video")
+zakwarlord7 added 7 commits 23 days ago
+"000000-00000000000000000-0000000000000000-000000_Opening_Balance_Equity					Ending Balance:  $25763711860000"										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+							<\feed/><\live/>			
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+										
+						<\feed\>'@.rss.ach.xvlslmnxsvnx.app.rss=:/>00650/00000000000000000/000000<\live\>				@zakwarlord7
+BITORE
+0c87d46
+@zakwarlord7
+Create BITCORE
+ebe3a4b
+@zakwarlord7
+bitore.sig
+c3442e6
+@zakwarlord7
+Revert "bitore.sig" 
+2187703
+@zakwarlord7
+Biore.sig (#27) 
+88d9e48
+@zakwarlord7
+Update index.md
+4144259
+@zakwarlord7
+Update index.md
+d7cd5b7
+@zakwarlord7 zakwarlord7 requested review from a team as code owners 1 minute ago
+zakwarlord7 commented now
+e-mail :
+zachryiixixiiwood@gmail.com
+Name :
+Zachry Tyler Wood
+Bank :
+PNC BANK NA
+ACCOUNT :
+4720416547
+R/T :
+071921891
+e- mail :
+josephabanksfederalreserve@gmail.com
+         <guid isPermaLink="false">https://docs.aws.amazon.com/location/latest/developerguide/#Autocomplete_for_place_indexes_2021-12-06</guid>
+      </item>
+      <item>
+         <title>New Amplify tutorial for using maps</title>
+         <link>https://docs.aws.amazon.com/location/latest/developerguide/doc-history.html</link>
+         <description>A new tutorial is available showing how to use AWS Amplify to display maps in a
+        web application. The tutorial is available at &lt;a href="https://docs.aws.amazon.com/location/latest/developerguide/tutorial-map-amplify.html"&gt;Using the Amplify library with Amazon Location Service&lt;/a&gt;.</description>
diff --git a/action.js b/action.js
new file mode 100644
index 000000000000..6c4aff185f32
--- /dev/null
+++ b/action.js
@@ -0,0 +1,1507 @@
+Run::/:BEGIN:
+!/sur/bin/bash/
+GLOW7
+tart:-on :
+-on :On :runs-on :Run :'"' :
++# They are provided by a third-party and are governed by
++# separate terms of service, privacy policy, and support
++# documentation.
++
++# This workflow will install deno then run daily across eslint and Test.
++# For more information see: https://github.com/denoland/setup-deno
++
++name: Deno
++
++on:
++  push:
++    branches: ["mainbranch"]
++  pull_request:
++    branches: ["trunk"]
++
++permissions:
++  contents: read
++
++jobs:
++  test:
++    runs-on: ubuntu-latest
++
++    steps:
++      - name: Setup repo
++        uses: actions/checkout-input./-'@neizt/V8@peterbe/repositoiries_
+dispactch/WORKSFLOW/kite.yarn/package.json/bitore.sig/BITORE/peterbe//versatiles/lucasacosti/Byg-fux3Hello-World!/#/31/help-wanted/#/12/uilt
++
++      - name: Setup Deno
++        # uses: denoland/setup-deno@v1
++        uses: denoland/setup-deno@004814556e37c54a2f6e31384c9e18e983317366
++        with:
++          deno-version: v1.x
++
++      # Uncomment this step to verify the use of 'deno fmt' on each commit.
++      # - name: Verify formatting
++      #   Run::/: Deno.xml/slate.yml format: : --Request :replacement_PayCheck 
++      - name: Run :eslint :runs-across : ALL Automatically tta : Every : -3 sec : 
++      - name: Run tests
++        run: deno.xml
++        bundle-with : slate.yml
+Run::/: Runs: Test
+'require'":, "'test'":, "test:":, Tests'@test.yml":,'"''
+:Build::'"''
+- name: Upload a Build Artifact
+  uses: actions/upload-artifact@v3.1.0
+  with:
+    # Artifact name
+    name: # optional, default is artifact
+    # A file, directory or wildcard pattern that describes what to upload
+    path: 
+    # The desired behavior if no files are found using the provided path.
+Available Options:
+  warn: Output a warning but do not fail the action
+  error: Fail the action with an error message
+  ignore: Do not output any warnings or errors, the action does not fail
+
+    if-no-files-found: # optional, default is warn
+    # Duration after which artifact will expire in days. 0 means using default retention.
+Minimum 1 day. Maximum 90 days unless changed from the repository settings page.
+
+    retention-days-#: DUE ON RECIEPT
++    This workflow uses actions that are not certified by GitHub.
++They are provided by a third-party and are governed by
++separate terms of service, privacy policy, and support
++documentation.
++💁 The OpenShift Starter workflow will:
++- Checkout your repository
++- Perform a container image build
++- Push the built image to the GitHub Container Registry (GHCR)
++- Log in to your OpenShift cluster
++- Create an OpenShift app from the image and expose it to the internet
++ℹ️ Configure your repository and the workflow with the following steps:
++1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
++2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
++- https://github.com/redhat-actions/oc-login#readme
++- https://docs.github.com/en/actions/reference/encrypted-secrets
++- https://cli.github.com/manual/gh_secret_set
++3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
++4. (Optional) Edit the build-image step to build your project.
++The default build type is by using a Dockerfile at the root of the repository,
++but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
++5. Commit and push the workflow file to your default branch to trigger a workflow run.
++👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.
++name: OpenShift
++
++env:
++
++🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
++See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
++To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
++OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
++OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}
++
++🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
++OPENSHIFT_NAMESPACE: ""
++
++🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
++APP_NAME: ""
++
++🖊️ EDIT with the port your application should be accessible on.
++If the container image exposes exactly one port, this can be left blank.
++Refer to the 'port' input of https://github.com/linux32_86/fedoraOS.deb.rpdm.tar.gz.zip.unzipped/Zarchive/Ringtones'@moejojojojo/repositories/usr/bin/bash/'@action.js/pkg.yml/package.json/pkg.js
++APP_PORT: ""
++
++🖊️ EDIT to change the image registry settings.
++Registries such as GHCR, Quay.io, and Docker Hub are supported.
++IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
++IMAGE_REGISTRY_USER: ${{ github.actor }}
++IMAGE_REGISTRY_PASSWORD: ${{ github.token }}
++
++🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
++IMAGE_TAGS: ""
++
++on:
++
++https://docs.github.com/en/actions/reference/events-that-trigger-workflows
++workflow_dispatch:
++push:
++# Edit to the branch(es) you want to build and deploy on each push.
++branches: [ "paradice" ]
++
++jobs:
++
++🖊️ EDIT if you want to run vulnerability check on your project before deploying
++the application. Please uncomment the below CRDA scan job and configure to run it in
++your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
++TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
++For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows
++crda-scan:
++uses: ./.github/workflows/crda.yml
++secrets:
++name: Build and deploy to OpenShift
++runs-on: ubuntu-20.04
++environment: production
++outputs:
++  ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
++  SELECTOR: ${{ 071921892.47.2041.6507 }}
++steps:
++- name: Check for required secrets
++  uses: actions/github-script@v6
++  with:
++    script: |
++      const secrets = {
++        '"OPENSHIFT_SERVER":, '"{{'$''  '{{'' '"secrets'.'[Gemfile.[VOLUME.[00]DENOMINATION]ITEM_ID }}":,'
++        '"OPENSHIFT_TOKEN":, '"{{'$'' '{{'' '"((c)(r)).[VOLUME.[00]DENOMONATION]ITEM_ID" }}":,'
++        '"OPENSHIFT_TOKEN":, '"{{'$'' '{{'' '"((c)(r)).[12753750.[00]m]BITORE_34173" }}":,
++      };
++      const GHCR = "ghcr.io";
++      if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
++        core.info(`Image registry is ${GHCR} - no registry password required`);
++      }
++      else {
++        core.info("A registry password is required");
++        secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
++      }
++      const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
++        if (value.length === 0) {
++          core.error(`Secret "${name}" is not set`);
++          return true;
++        }
++        core.info(`✔️ Secret "${name}" is set`);
++        return false;
++      })
++          "GitHub":, ""$":mk.dir=:' '"$RAKEFILE.I.U/.mk.dir":,
++          "squash_merge: rb.qm":,{BITORE_#$!&#.1337}":,'@'"'('"https://github.com/zakwarlord7/zakwarlord7/tree/c76344d06ee3aca71db749f20dea92a785d5d77a/.github).com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
++          "GitHub CLI: https://cli.github.com/manual/gh/doc/((c_)(R))/BITORE/BITOREK_34173/":,'
++          "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
++      }
++      else {
++        core.info(`✅ All the required secrets are set`);
++      }
++- name: Check out repository
++  uses: actions/checkout@v3
++
++- name: Determine app name
++  if: env.APP_NAME == ''
++  run: |
++    echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV
++- name: Determine image tags
++  if: env.IMAGE_TAGS == ''
++  run: |
++    echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV
++# https://github.com/redhat-actions/buildah-build#readme
++- name: Build from Dockerfile
++  id: build-image
++  uses: redhat-actions/buildah-build@v2
++  with:
++    image: ${{ env.APP_NAME }}
++    tags: ${{ env.IMAGE_TAGS }}
++
++    # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
++    # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
++    # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
++    dockerfiles: |
++      ./Dockerfile
++# https://github.com/redhat-actions/push-to-registry#readme
++- name: Push to registry
++  id: push-image
++  uses: redhat-actions/push-to-registry@v2
++  with:
++    image: ${{ steps.build-image.outputs.image }}
++    tags: ${{ steps.build-image.outputs.tags }}
++    registry: ${{ env.IMAGE_REGISTRY }}
++    username: ${{ env.IMAGE_REGISTRY_USER }}
++    password: ${{ env.IMAGE_REGISTRY_PASSWORD }}
++
++# The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}
++
++- name: Install oc
++  uses: redhat-actions/openshift-tools-installer@v1
++  with:
++    oc: 4
++
++# https://github.com/redhat-actions/oc-login#readme
++- name: Log in to OpenShift
++  uses: redhat-actions/oc-login@v1
++  with:
++    openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
++    openshift_token: ${{ env.OPENSHIFT_TOKEN }}
++    insecure_skip_tls_verify: true
++    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
++
++# This step should create a deployment, service, and route to run your app and expose it to the internet.
++# https://github.com/redhat-actions/oc-new-app#readme
++- name: Create and expose app
++  id: deploy-and-expose
++  uses: redhat-actions/oc-new-app@v1
++  with:
++    app_name: ${{ env.APP_NAME }}
++    image: ${{ steps.push-image.outputs.registry-path }}
++    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
++    port: ${{ env.APP_PORT }}
++
++- name: Print application URL
++  env:
++    ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
++    SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
++  run: |
++    [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
++    echo
++    echo "======================== Your application is available at: ========================"
++    echo ${{{{[' '"((c)(r)).[12753750.[00]m]BITORE_34173.1337'"'' }}
++    echo "===================================================================================
++    'equire':'' 'test''
++    Return:'' 'Run ''
++    ---branches: mainbranch
+ title: Creating a repository from a template
+ intro: You can generate a new repository with the same directory structure and files as an existing repository.
+ redirect_from:
+@@ -6,10 +246,10 @@ redirect_from:
+   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
+   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
+ versions:
+-  fpt: '*'
+-  ghes: '*'
+-  ghae: '*'
+-  ghec: '*'
++  ghec: 'OPTIONAL'
++  ghcr: 'OPTIONAL'
++  'gchr': 'OPTIONAL'
++  'require': 'test'
+ topics:
+   - Repositories
+ shortTitle: Create from a template
+'"-'' '"'['' 'trunk'' ']'"''
+-with: pop-kernel":,'
+owner/repo
+EMPLOYER IDENTIFICATION NUMBER:       61-1767919					EIN	61-1767919					
+FIN	:88-1303491/88-1656496 :					
+EIN :61-1767919	:					
+ID :00037305581 
+SSN :633441725 		
+DOB :1994-10-15  	
+ALPHABET |Name	Tax Period 	Total	Social Security	Medicare	Withholding
+ZACHRY T WOOD		|Fed 941 Corporate	Sunday, September 30, 2007	66,987	28,841	6,745	31,400
+5323 BRADFORD DR						|Fed 941 West Subsidiary	Sunday, September 30, 2007	17,115	7,369	1,723	8,023
+DALLAS TX 75235-8314						|Fed 941 South Subsidiary	Sunday, September 30, 2007	23,906	10,293	2,407	11,206
+ORIGINAL REPORT						|Fed 941 East Subsidiary	Sunday, September 30, 2007	11,248	4,843	1,133	5,272
+Income, Rents, & Royalty						|Fed 941 Corp - Penalty	Sunday, September 30, 2007	27,199	11,710	2,739	12,749
+INCOME STATEMENT 						|Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17,028			
+											
+|ALPHABET INCOME :|TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019 :
+											
+Gross Profit	146698000000	42337000000	37497000000	35653000000	31211000000	30,818,000,000	25,056,000,000	19,744,000,000	22,177,000,000	25,055,000,000	22,931,000,000
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	64,133,000,000	34,071,000,000
+Other Revenue											6,428,000,000
+Cost of Revenue	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Cost of Goods and Services	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Operating Income/Expenses	67984000000	20452000000	16466000000	16292000000	14774000000	-15,167,000,000	-13,843,000,000	-13,361,000,000	-14,200,000,000	-15,789,000,000	-13,754,000,000
+Selling, General and Administrative Expenses	36422000000	11744000000	8772000000	8617000000	7289000000	-8,145,000,000	-6,987,000,000	-6,486,000,000	-7,380,000,000	-8,567,000,000	-7,200,000,000
+General and Administrative Expenses	13510000000	4140000000	3256000000	3341000000	2773000000	-2,831,000,000	-2,756,000,000	-2,585,000,000	-2,880,000,000	-2,829,000,000	-2,591,000,000
+Selling and Marketing Expenses	22912000000	7604000000	5516000000	5276000000	4516000000	-5,314,000,000	-4,231,000,000	-3,901,000,000	-4,500,000,000	-5,738,000,000	-4,609,000,000
+Research and Development Expenses	31562000000	8708000000	7694000000	7675000000	7485000000	-7,022,000,000	-6,856,000,000	-6,875,000,000	-6,820,000,000	-7,222,000,000	-6,554,000,000
+Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3,038,000,000	2,146,000,000	1,894,000,000	-220,000,000	1,438,000,000	-549,000,000
+Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+											
+Interest Expense Net of Capitalized Interest	346000000	117000000	77000000	76000000	76000000	-53,000,000	-48,000,000	-13,000,000	-21,000,000	-17,000,000	-23,000,000
+Interest Income	1499000000	378000000	387000000	389000000	345000000	386,000,000	460,000,000	433,000,000	586,000,000	621,000,000	631,000,000
+Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3,530,000,000	1,957,000,000	1,696,000,000	-809,000,000	899,000,000	-1,452,000,000
+Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3,262,000,000	2,015,000,000	1,842,000,000	-802,000,000	399,000,000	-1,479,000,000
+Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355,000,000	26,000,000	-54,000,000	74,000,000	460,000,000	-14,000,000
+Gain/Loss on Foreign Exchange	240000000	163000000	139000000	51000000	113000000	-87,000,000	-84,000,000	-92,000,000	-81,000,000	40,000,000	41,000,000
+Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Income/Expense, Non-Operating	1497000000	108000000	484000000	613000000	292000000	-825,000,000	-223,000,000	-222,000,000	24,000,000	-65,000,000	295,000,000
+Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18,689,000,000	13,359,000,000	8,277,000,000	7,757,000,000	10,704,000,000	8,628,000,000
+Provision for Income Tax	14701000000	3760000000	4128000000	3460000000	3353000000	-3,462,000,000	-2,112,000,000	-1,318,000,000	-921,000,000	-33,000,000	-1,560,000,000
+Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Income Statement Supplemental Section											
+Reported Normalized and Operating Income/Expense Supplemental Section											
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Reported Effective Tax Rate	0		0	0	0		0	0	0		0
+Reported Normalized Income									6,836,000,000		
+Reported Normalized Operating Profit									7,977,000,000		
+Other Adjustments to Net Income Available to Common Stockholders											
+Discontinued Operations											
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Basic EPS from Continuing Operations	114	31	28	28	27	22	17	10	10	15	10
+Basic EPS from Discontinued Operations											
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Continuing Operations	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Discontinued Operations											
+Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Reported Normalized Diluted EPS									10		
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Basic WASO	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted WASO	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Fiscal year end September 28th., 2022. | USD											
+											
+31622,6:39 PM											
+Morningstar.com Intraday Fundamental Portfolio View Print Report								Print			
+											
+3/6/2022 at 6:37 PM											Current Value
+											15,335,150,186,014
+											
+GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021									
+Cash Flow from Operating Activities, Indirect		24934000000	Q3 2021	Q2 2021	Q1 2021	Q4 2020					
+Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30,818,000,000					
+Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22,677,000,000					
+Income/Loss before Non-Cash Adjustment		20642000000	25539000000	21890000000	19289000000	22,677,000,000					
+Total Adjustments for Non-Cash Items		6517000000	18936000000	18525000000	17930000000	15,227,000,000					
+Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	3797000000	4236000000	2592000000	5,748,000,000					
+Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3,725,000,000					
+Depreciation, Non-Cash Adjustment		3215000000	3304000000	2945000000	2753000000	3,725,000,000					
+Amortization, Non-Cash Adjustment		224000000	3085000000	2730000000	2525000000	3,539,000,000					
+Stock-Based Compensation, Non-Cash Adjustment		3954000000	219000000	215000000	228000000	186,000,000					
+Taxes, Non-Cash Adjustment		1616000000	3874000000	3803000000	3745000000	3,223,000,000					
+Investment Income/Loss, Non-Cash Adjustment		2478000000	1287000000	379000000	1100000000	1,670,000,000					
+Gain/Loss on Financial Instruments, Non-Cash Adjustment		2478000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Other Non-Cash Items		14000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Changes in Operating Capital		2225000000	64000000	8000000	255000000	392,000,000					
+Change in Trade and Other Receivables		5819000000	2806000000	871000000	1233000000	1,702,000,000					
+Change in Trade/Accounts Receivable		5819000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Other Current Assets		399000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Payables and Accrued Expenses		6994000000	1255000000	199000000	7000000	-738,000,000					
+Change in Trade and Other Payables		1157000000	3157000000	4074000000	4956000000	6,938,000,000					
+Change in Trade/Accounts Payable		1157000000	238000000	130000000	982000000	963,000,000					
+Change in Accrued Expenses		5837000000	238000000	130000000	982000000	963,000,000					
+Change in Deferred Assets/Liabilities		368000000	2919000000	4204000000	3974000000	5,975,000,000					
+Change in Other Operating Capital		3369000000	272000000	3000000	137000000	207,000,000					
+Change in Prepayments and Deposits			3041000000	1082000000	785000000	740,000,000					
+Cash Flow from Investing Activities		11016000000									
+Cash Flow from Continuing Investing Activities		11016000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net		6383000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase of Property, Plant and Equipment		6383000000	6819000000	5496000000	5942000000	-5,479,000,000					
+Sale and Disposal of Property, Plant and Equipment			6819000000	5496000000	5942000000	-5,479,000,000					
+Purchase/Sale of Business, Net		385000000									
+Purchase/Acquisition of Business		385000000	259000000	308000000	1666000000	-370,000,000					
+Purchase/Sale of Investments, Net		4348000000	259000000	308000000	1666000000	-370,000,000					
+Purchase of Investments		40860000000	3360000000	3293000000	2195000000	-1,375,000,000					
+Sale of Investments		36512000000	35153000000	24949000000	37072000000	-36,955,000,000					
+Other Investing Cash Flow		100000000	31793000000	21656000000	39267000000	35,580,000,000					
+Purchase/Sale of Other Non-Current Assets, Net			388000000	23000000	30000000	-57,000,000					
+Sales of Other Non-Current Assets											
+Cash Flow from Financing Activities		16511000000	15254000000								
+Cash Flow from Continuing Financing Activities		16511000000	15254000000	15991000000	13606000000	-9,270,000,000					
+Issuance of/Payments for Common Stock, Net		13473000000	12610000000	15991000000	13606000000	-9,270,000,000					
+Payments for Common Stock		13473000000	12610000000	12796000000	11395000000	-7,904,000,000					
+Proceeds from Issuance of Common Stock				12796000000	11395000000	-7,904,000,000					
+Issuance of/Repayments for Debt, Net		115000000	42000000								
+Issuance of/Repayments for Long Term Debt, Net		115000000	42000000	1042000000	37000000	-57,000,000					
+Proceeds from Issuance of Long Term Debt		6250000000	6350000000	1042000000	37000000	-57,000,000					
+Repayments for Long Term Debt		6365000000	6392000000	6699000000	900000000	0					
+Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	2602000000	7741000000	937000000	-57,000,000					
+				2453000000	2184000000	-1,647,000,000					
+											
+Other Financing Cash Flow											
+Cash and Cash Equivalents, End of Period											
+Change in Cash		0		300000000	10000000	338,000,000,000					
+Effect of Exchange Rate Changes		20945000000	23719000000	23630000000	26622000000	26,465,000,000					
+Cash and Cash Equivalents, Beginning of Period		25930000000	235000000000	3175000000	300000000	6,126,000,000					
+Cash Flow Supplemental Section		181000000000	146000000000	183000000	143000000	210,000,000					
+Change in Cash as Reported, Supplemental		23719000000000	23630000000000	26622000000000	26465000000000	20,129,000,000,000					
+Income Tax Paid, Supplemental		2774000000	89000000	2992000000		6,336,000,000					
+Cash and Cash Equivalents, Beginning of Period		13412000000	157000000			-4,990,000,000					
+											
+12 Months Ended											
+_________________________________________________________											
+			Q4 2020			Q4  2019					
+Income Statement 											
+USD in "000'"s											
+Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019					
+Costs and expenses:											
+Cost of revenues			182527			161,857					
+Research and development											
+Sales and marketing			84732			71,896					
+General and administrative			27573			26,018					
+European Commission fines			17946			18,464					
+Total costs and expenses			11052			9,551					
+Income from operations			0			1,697					
+Other income (expense), net			141303			127,626					
+Income before income taxes			41224			34,231					
+Provision for income taxes			6858000000			5,394					
+Net income			22677000000			19,289,000,000					
+*include interest paid, capital obligation, and underweighting			22677000000			19,289,000,000					
+			22677000000			19,289,000,000					
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)--											
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)											
+											
+											
+For Paperwork Reduction Act Notice, see the seperate Instructions.											
+JPMORGAN TRUST III											
+A/R Aging Summary											
+As of July 28, 2022											
+ZACHRY T WOOD
+	Days over due									
+Effeective Tax Rate Prescribed by the Secretary of the Treasury.		44591	31 - 60	61 - 90	91 and over						
+
+							
+TOTAL			 £134,839.00
+ Alphabet Inc.  											
+
+
+
+						
+ =USD('"'$'"'-in'-millions)"											
+ Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 						
+ Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 						
+ Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 						
+ Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00 						
+ Research and development 	-£26,018.00 	-£21,419.00 	-£16,625.00 	-£13,948.00 	-£12,282.00 						
+ Sales and marketing 	-£18,464.00 	-£16,333.00 	-£12,893.00 	-£10,485.00 	-£9,047.00 						
+ General and administrative 	-£9,551.00 	-£8,126.00 	-£6,872.00 	-£6,985.00 	-£6,136.00 						
+ European Commission fines 	-£1,697.00 	-£5,071.00 	-£2,736.00 	 — 	 — 						
+ Income from operations 	 £34,231.00 	 £26,321.00 	 £26,146.00 	 £23,716.00 	 £19,360.00 						
+ Interest income 	 £2,427.00 	 £1,878.00 	 £1,312.00 	 £1,220.00 	 £999.00:,''
+? Multi select prompt [Use arrows to move, space to select, type to filter]
+- [22/7]  Choice selected and focused
+- [22/7]  Choice-**Approves**
+- [22/7]  Projects-Status
+- [22/7]  Milestone-Status
+✓ Checks passing
+✓ Approved
+ Review requested
++ Changes requested
+✓ Success message
+<\!@?/>
+irs@service.govdelivery.com
+<\?#!/>
+ideal":, "MRG_MSG":, "squash_mergee":, continue-403OK_WRN_MSG_MSG:'::Pushs:'::200OK'"''
+
+creates:: craft.u/crates.i/flatchings.yml-seed'@DOCKER.Gui.sgn/Type:Repository/;Push'@zakwarlord7/zakwarlord7/Contributing.md/contributing.md/README.md/readme,md";,'"''
+('((c)(r)))
+✓ Item closed
+✓ Item merged
+
+
+Loading spinner
+
+⣟ Action...
+
+
+
+Lists
+
+$ gh issue list 
+
+Showing 3 of 222 issues in cli/cli/OPEN.JS/package.json/gemfile-lock/MAKEFILE/rakefile.Gem/.specs/Cookeiskeycutter'@Alibaba/Stack-overflow/Python.JS/SLACK_Channel(4999; 8333)":,'"''
+
+pull request associated with: Branch'@-' '[base']
+branches'' ':'"-'' '['' 'Master'' ']'' ':":,''
+'"packages":,'' :"Name":,'' ':intuit :":,
+"Requesting a code review from you":,'
+  "You have no pull requests to review":,'
+"- Employer's IDentification Number (EIN) :61-1767919":,'
+					FIN :88-1303491/ID :00037305581	:SSN :633441725 :DoB :1994-10-15":,'
+          "(IRS USE ONLY)":, "575A":, "04-07-2022":, "NASD":, "B":, "9999999999":, "SS-4":,'
+          "NASDAQGOOG":,
+'"ZACHRY WOOD":,						'"Fed 941 Corporate	Sunday, September 30, 2007	66,987	28,841	6,745	31,400":,
+'"5323":, "BRADFORD_DR":,'						'Fed 941 West Subsidiary	Sunday, September 30, 2007	17,115	7,369	1,723	8,023":,
+DALLAS TX 75235-8314						'"Fed 941 South Subsidiary	Sunday, September 30, 2007	23,906	10,293	2,407	11,206":,
+ORIGINAL REPORT						'"Fed 941 East Subsidiary	Sunday, September 30, 2007	11,248	4,843	1,133	5,272":,
+Income, Rents, & Royalty						'"Fed 941 Corp - Penalty	Sunday, September 30, 2007	27,199	11,710	2,739	12,749":,
+INCOME STATEMENT 						'"Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17,028":,			
+											
+GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019
+											
+Gross Profit	146698000000	42337000000	37497000000	35653000000	31211000000	30,818,000,000	25,056,000,000	19,744,000,000	22,177,000,000	25,055,000,000	22,931,000,000
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	64,133,000,000	34,071,000,000
+Other Revenue											6,428,000,000
+Cost of Revenue	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Cost of Goods and Services	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Operating Income/Expenses	67984000000	20452000000	16466000000	16292000000	14774000000	-15,167,000,000	-13,843,000,000	-13,361,000,000	-14,200,000,000	-15,789,000,000	-13,754,000,000
+Selling, General and Administrative Expenses	36422000000	11744000000	8772000000	8617000000	7289000000	-8,145,000,000	-6,987,000,000	-6,486,000,000	-7,380,000,000	-8,567,000,000	-7,200,000,000
+General and Administrative Expenses	13510000000	4140000000	3256000000	3341000000	2773000000	-2,831,000,000	-2,756,000,000	-2,585,000,000	-2,880,000,000	-2,829,000,000	-2,591,000,000
+Selling and Marketing Expenses	22912000000	7604000000	5516000000	5276000000	4516000000	-5,314,000,000	-4,231,000,000	-3,901,000,000	-4,500,000,000	-5,738,000,000	-4,609,000,000
+Research and Development Expenses	31562000000	8708000000	7694000000	7675000000	7485000000	-7,022,000,000	-6,856,000,000	-6,875,000,000	-6,820,000,000	-7,222,000,000	-6,554,000,000
+Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3,038,000,000	2,146,000,000	1,894,000,000	-220,000,000	1,438,000,000	-549,000,000
+Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+											
+Interest Expense Net of Capitalized Interest	346000000	117000000	77000000	76000000	76000000	-53,000,000	-48,000,000	-13,000,000	-21,000,000	-17,000,000	-23,000,000
+Interest Income	1499000000	378000000	387000000	389000000	345000000	386,000,000	460,000,000	433,000,000	586,000,000	621,000,000	631,000,000
+Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3,530,000,000	1,957,000,000	1,696,000,000	-809,000,000	899,000,000	-1,452,000,000
+Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3,262,000,000	2,015,000,000	1,842,000,000	-802,000,000	399,000,000	-1,479,000,000
+Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355,000,000	26,000,000	-54,000,000	74,000,000	460,000,000	-14,000,000
+Gain/Loss on Foreign Exchange	240000000	163000000	139000000	51000000	113000000	-87,000,000	-84,000,000	-92,000,000	-81,000,000	40,000,000	41,000,000
+Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Income/Expense, Non-Operating	1497000000	108000000	484000000	613000000	292000000	-825,000,000	-223,000,000	-222,000,000	24,000,000	-65,000,000	295,000,000
+Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18,689,000,000	13,359,000,000	8,277,000,000	7,757,000,000	10,704,000,000	8,628,000,000
+Provision for Income Tax	14701000000	3760000000	4128000000	3460000000	3353000000	-3,462,000,000	-2,112,000,000	-1,318,000,000	-921,000,000	-33,000,000	-1,560,000,000
+Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Income Statement Supplemental Section											
+Reported Normalized and Operating Income/Expense Supplemental Section											
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Reported Effective Tax Rate	0		0	0	0		0	0	0		0
+Reported Normalized Income									6,836,000,000		
+Reported Normalized Operating Profit									7,977,000,000		
+Other Adjustments to Net Income Available to Common Stockholders											
+Discontinued Operations											
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Basic EPS from Continuing Operations	114	31	28	28	27	22	17	10	10	15	10
+Basic EPS from Discontinued Operations											
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Continuing Operations	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Discontinued Operations											
+Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Reported Normalized Diluted EPS									10		
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Basic WASO	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted WASO	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Fiscal year end September 28th., 2022. | USD											
+											
+31622,6:39 PM											
+Morningstar.com Intraday Fundamental Portfolio View Print Report								Print			
+											
+3/6/2022 at 6:37 PM											Current Value
+											15,335,150,186,014
+											
+GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021									
+Cash Flow from Operating Activities, Indirect		24934000000	Q3 2021	Q2 2021	Q1 2021	Q4 2020					
+Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30,818,000,000					
+Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22,677,000,000					
+Income/Loss before Non-Cash Adjustment		20642000000	25539000000	21890000000	19289000000	22,677,000,000					
+Total Adjustments for Non-Cash Items		6517000000	18936000000	18525000000	17930000000	15,227,000,000					
+Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	3797000000	4236000000	2592000000	5,748,000,000					
+Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3,725,000,000					
+Depreciation, Non-Cash Adjustment		3215000000	3304000000	2945000000	2753000000	3,725,000,000					
+Amortization, Non-Cash Adjustment		224000000	3085000000	2730000000	2525000000	3,539,000,000					
+Stock-Based Compensation, Non-Cash Adjustment		3954000000	219000000	215000000	228000000	186,000,000					
+Taxes, Non-Cash Adjustment		1616000000	3874000000	3803000000	3745000000	3,223,000,000					
+Investment Income/Loss, Non-Cash Adjustment		2478000000	1287000000	379000000	1100000000	1,670,000,000					
+Gain/Loss on Financial Instruments, Non-Cash Adjustment		2478000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Other Non-Cash Items		14000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Changes in Operating Capital		2225000000	64000000	8000000	255000000	392,000,000					
+Change in Trade and Other Receivables		5819000000	2806000000	871000000	1233000000	1,702,000,000					
+Change in Trade/Accounts Receivable		5819000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Other Current Assets		399000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Payables and Accrued Expenses		6994000000	1255000000	199000000	7000000	-738,000,000					
+Change in Trade and Other Payables		1157000000	3157000000	4074000000	4956000000	6,938,000,000					
+Change in Trade/Accounts Payable		1157000000	238000000	130000000	982000000	963,000,000					
+Change in Accrued Expenses		5837000000	238000000	130000000	982000000	963,000,000					
+Change in Deferred Assets/Liabilities		368000000	2919000000	4204000000	3974000000	5,975,000,000					
+Change in Other Operating Capital		3369000000	272000000	3000000	137000000	207,000,000					
+Change in Prepayments and Deposits			3041000000	1082000000	785000000	740,000,000					
+Cash Flow from Investing Activities		11016000000									
+Cash Flow from Continuing Investing Activities		11016000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net		6383000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase of Property, Plant and Equipment		6383000000	6819000000	5496000000	5942000000	-5,479,000,000					
+Sale and Disposal of Property, Plant and Equipment			6819000000	5496000000	5942000000	-5,479,000,000					
+Purchase/Sale of Business, Net		385000000									
+Purchase/Acquisition of Business		385000000	259000000	308000000	1666000000	-370,000,000					
+Purchase/Sale of Investments, Net		4348000000	259000000	308000000	1666000000	-370,000,000					
+Purchase of Investments		40860000000	3360000000	3293000000	2195000000	-1,375,000,000					
+Sale of Investments		36512000000	35153000000	24949000000	37072000000	-36,955,000,000					
+Other Investing Cash Flow		100000000	31793000000	21656000000	39267000000	35,580,000,000					
+Purchase/Sale of Other Non-Current Assets, Net			388000000	23000000	30000000	-57,000,000					
+Sales of Other Non-Current Assets											
+Cash Flow from Financing Activities		16511000000	15254000000								
+Cash Flow from Continuing Financing Activities		16511000000	15254000000	15991000000	13606000000	-9,270,000,000					
+Issuance of/Payments for Common Stock, Net		13473000000	12610000000	15991000000	13606000000	-9,270,000,000					
+Payments for Common Stock		13473000000	12610000000	12796000000	11395000000	-7,904,000,000					
+Proceeds from Issuance of Common Stock				12796000000	11395000000	-7,904,000,000					
+Issuance of/Repayments for Debt, Net		115000000	42000000								
+Issuance of/Repayments for Long Term Debt, Net		115000000	42000000	1042000000	37000000	-57,000,000					
+Proceeds from Issuance of Long Term Debt		6250000000	6350000000	1042000000	37000000	-57,000,000					
+Repayments for Long Term Debt		6365000000	6392000000	6699000000	900000000	0					
+Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	2602000000	7741000000	937000000	-57,000,000					
+				2453000000	2184000000	-1,647,000,000					
+											
+Other Financing Cash Flow											
+Cash and Cash Equivalents, End of Period											
+Change in Cash		0		300000000	10000000	338,000,000,000					
+Effect of Exchange Rate Changes		20945000000	23719000000	23630000000	26622000000	26,465,000,000					
+Cash and Cash Equivalents, Beginning of Period		25930000000	235000000000	3175000000	300000000	6,126,000,000					
+Cash Flow Supplemental Section		181000000000	146000000000	183000000	143000000	210,000,000					
+Change in Cash as Reported, Supplemental		23719000000000	23630000000000	26622000000000	26465000000000	20,129,000,000,000					
+Income Tax Paid, Supplemental		2774000000	89000000	2992000000		6,336,000,000					
+Cash and Cash Equivalents, Beginning of Period		13412000000	157000000			-4,990,000,000					
+											
+12 Months Ended											
+_________________________________________________________											
+			Q4 2020			Q4  2019					
+Income Statement 											
+USD in "000'"s											
+Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019					
+Costs and expenses:											
+Cost of revenues			182527			161,857					
+Research and development											
+Sales and marketing			84732			71,896					
+General and administrative			27573			26,018					
+European Commission fines			17946			18,464					
+Total costs and expenses			11052			9,551					
+Income from operations			0			1,697					
+Other income (expense), net			141303			127,626					
+Income before income taxes			41224			34,231					
+Provision for income taxes			6858000000			5,394					
+Net income			22677000000			19,289,000,000					
+*include interest paid, capital obligation, and underweighting			22677000000			19,289,000,000					
+			22677000000			19,289,000,000					
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)--											
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)											
+											
+											
+For Paperwork Reduction Act Notice, see the seperate Instructions.											
+JPMORGAN TRUST III											
+A/R Aging Summary											
+As of July 28, 2022											
+ZACHRY T WOOD
+	Days over due									
+Effeective Tax Rate Prescribed by the Secretary of the Treasury.		44591	31 - 60	61 - 90	91 and over						
+
+							
+TOTAL			 £134,839.00
+ Alphabet Inc.  											
+
+
+
+						
+ =USD('"'$'"'-in'-millions)"											
+ Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 						
+ Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 						
+ Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 						
+ Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00 						
+ Research and development 	-£26,018.00 	-£21,419.00 	-£16,625.00 	-£13,948.00 	-£12,282.00 						
+ Sales and marketing 	-£18,464.00 	-£16,333.00 	-£12,893.00 	-£10,485.00 	-£9,047.00 						
+ General and administrative 	-£9,551.00 	-£8,126.00 	-£6,872.00 	-£6,985.00 	-£6,136.00 						
+ European Commission fines 	-£1,697.00 	-£5,071.00 	-£2,736.00 	 — 	 — 						
+ Income from operations 	 £34,231.00 	 £26,321.00 	 £26,146.00 	 £23,716.00 	 £19,360.00 						
+ Interest income 	 £2,427.00 	 £1,878.00 	 £1,312.00 	 £1,220.00 	 £999.00:,''
+
+$ gh
+
+Work seamlessly with GitHub from the command line. 
+
+USAGE
+  gh <command> <subcommand> [flags]
+  Commands are run inside of a GitHub repository.
+
+CORE COMMANDS
+  issue:       Create and view issues
+  pr:          Create, view, and checkout pull requests
+  repo:        Create, clone, fork, and view repositories
+
+ADDITIONAL COMMANDS
+  help:        Help about any command
+  config:      Set and get preferences
+  completion:  Generate shell completion scripts
+
+FLAGS
+  -h, --help:              Show help for command
+  -v, --version:           Show gh version
+
+EXAMPLES
+  $ gh issue create
+  $ gh pr list
+  $ gh repo fork
+
+FEEDBACK 
+  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
+  Open an issue using “gh issue create -R cli/cli”
+
+
+From ID:44c295b9-ce08-424f-b6a5-b0f009ad802c
+# https://pnc.com//# docs
+# The open-source repo for docs.github.com
+# CI: 
+# Name :
+# DEPOSIT TICKET:
+# Federal 941 Deposit Report
+# ADP
+# Report Range 5/4/2022 - 6/4/2022									
+# 88-1303491	State ID: 00037305581	SSN: 633-44-1725	00000						
+# Employee Number: 3
+# Description	Amount							5/4/2022 - 6/4/2022	
+# Payment :
+ - ContactName	EmailAddress	POAddressLine1	POAddressLine2	POAddressLine3	POAddressLine4	POCity	PORegion	POPostalCode	POCountry	InvoiceNumber	Reference	InvoiceDate	DueDate	Total	Description	Quantity	UnitAmount	Discount	TaxAmount
+Zachry Tyler Wood	zachryiixixiiwood@gmail.com	5323 BRADFORD DR				DALLAS	TX	75235-8313	United States	INV-0003	2.21169E+13	16 Aug 2022	18 Apr-15, 2022	
+Bill 7364	
+# 1. Social Security (Employee + Employer)			26662						
+# 2. Medicare (Employee + Employer)			861193422444					Commission	
+# 3. Federal Income Tax			8385561229657			
+# Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late '' 'payment, previous overpayment, penalty and others.
+# Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.									
+Employer Customized Report
+ADP
+Paid Period 5/4/2022 - 6/4/2022	
+
+Emloyee:
+  Employee's Social Security Number :xxxxx1725	Ssn :XXXXX1725	State :All	STATE ID :TxDL 00037305581		2267700000000000	
+  ZACH T WOO
+  5323 B
+  
+Employer's Identification Number (EIN) :xxxxx7919								
+  ALPH I CO.
+  1600 A
+  
+Payer :
+  Payer's Federal Identification Number (FIN) :xxxxx4775
+  INTU
+  2700 C
+
+Employee Number: 3
+Description									
+Wages, Tips and Other Compensation		22662983361014		Report Range:		2022-05-04 - 2022-06-04		Tips	
+Taxable SS Wages		215014		ZACHRY T WOOD				5105000	
+Taxable SS Tips		00000		5222 BRADFORD DR DALLAS TX 75235-8313					
+Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT	
+Advanced EIC Payment		00000		3361014					
+Federal Income Tax Withheld		8385561229657		Bonus		00000		00000	
+Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2	
+Employee Medicare Tax Withheld		532580113436		Total		00000		00000	
+State Income Tax Withheld		00000		22662983361014					
+Local Income Tax Withheld
+Customized Employer Tax Report		00000		Deduction Summary					
+Description		Amount		Health Insurance					
+Employer SS Tax
+Employer Medicare Tax		13331		00000					
+Federal Unemployment Tax		328613309009		Tax Summary					
+State Unemployment Tax		00442		Federal Tax	00007			Total Tax	
+Customized Deduction Report		00840		$8,385,561,229,657@3,330.90		Local Tax			
+Health Insurance						00000			
+401K		00000		Advanced EIC Payment			8918141356423		
+		00000		00000				Total	
+						401K			
+						00000		00000	
+									
+ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050	
+									
+									
+SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.									
+The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.									
+									
+The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763				
+									
+									
+									
+									
+3/6/2022 at 6:37 PM									
+				Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	
+									
+GOOGL_income-statement_Quarterly_As_Originally_Reported				24934000000	25539000000	37497000000	31211000000	30818000000	
+				24934000000	25539000000	21890000000	19289000000	22677000000	
+Cash Flow from Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000	
+Net Cash Flow from Continuing Operating Activities, Indirect				20642000000	18936000000	18525000000	17930000000	15227000000	
+Cash Generated from Operating Activities				6517000000	3797000000	4236000000	2592000000	5748000000	
+Income/Loss before Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000	
+Total Adjustments for Non-Cash Items				3439000000	3304000000	2945000000	2753000000	3725000000	
+Depreciation, Amortization and Depletion, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000	
+Depreciation and Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000	
+Depreciation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000	
+Amortization, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000	
+Stock-Based Compensation, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000	
+Taxes, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000	
+Investment Income/Loss, Non-Cash Adjustment				-14000000	64000000	-8000000	-255000000	392000000	
+Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2225000000	2806000000	-871000000	-1233000000	1702000000	
+Other Non-Cash Items				-5819000000	-2409000000	-3661000000	2794000000	-5445000000	
+Changes in Operating Capital				-5819000000	-2409000000	-3661000000	2794000000	-5445000000	
+Change in Trade and Other Receivables				-399000000	-1255000000	-199000000	7000000	-738000000	
+Change in Trade/Accounts Receivable				6994000000	3157000000	4074000000	-4956000000	6938000000	
+Change in Other Current Assets				1157000000	238000000	-130000000	-982000000	963000000	
+Change in Payables and Accrued Expenses				1157000000	238000000	-130000000	-982000000	963000000	
+Change in Trade and Other Payables				5837000000	2919000000	4204000000	-3974000000	5975000000	
+Change in Trade/Accounts Payable				368000000	272000000	-3000000	137000000	207000000	
+Change in Accrued Expenses				-3369000000	3041000000	-1082000000	785000000	740000000	
+Change in Deferred Assets/Liabilities									
+Change in Other Operating Capital									
+				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000	
+Change in Prepayments and Deposits				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000	
+Cash Flow from Investing Activities									
+Cash Flow from Continuing Investing Activities				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000	
+				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000	
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net									
+Purchase of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000	
+Sale and Disposal of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000	
+Purchase/Sale of Business, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000	
+Purchase/Acquisition of Business				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000	
+Purchase/Sale of Investments, Net									
+Purchase of Investments				36512000000	31793000000	21656000000	39267000000	35580000000	
+				100000000	388000000	23000000	30000000	-57000000	
+Sale of Investments									
+Other Investing Cash Flow					-15254000000				
+Purchase/Sale of Other Non-Current Assets, Net				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000	
+Sales of Other Non-Current Assets				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000	
+Cash Flow from Financing Activities				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000	
+Cash Flow from Continuing Financing Activities				13473000000		-12796000000	-11395000000	-7904000000	
+Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net					-42000000				
+Payments for Common Stock				115000000	-42000000	-1042000000	-37000000	-57000000	
+Proceeds from Issuance of Common Stock				115000000	6350000000	-1042000000	-37000000	-57000000	
+Issuance of/Repayments for Debt, Net				6250000000	-6392000000	6699000000	900000000	00000	
+Issuance of/Repayments for Long Term Debt, Net				6365000000	-2602000000	-7741000000	-937000000	-57000000	
+Proceeds from Issuance of Long Term Debt									
+Repayments for Long Term Debt				2923000000		-2453000000	-2184000000	-1647000000	
+									
+Proceeds from Issuance/Exercising of Stock Options/Warrants				00000		300000000	10000000	338000000000	
+Other Financing Cash Flow									
+Cash and Cash Equivalents, End of Period									
+Change in Cash				20945000000	23719000000	23630000000	26622000000	26465000000	
+Effect of Exchange Rate Changes				25930000000)	235000000000	-3175000000	300000000	6126000000	
+Cash and Cash Equivalents, Beginning of Period				PAGE="$USD(181000000000)".XLS	BRIN="$USD(146000000000)".XLS	183000000	-143000000	210000000	
+Cash Flow Supplemental Section				23719000000000		26622000000000	26465000000000	20129000000000	
+Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000	
+Income Tax Paid, Supplemental				13412000000	157000000				
+ZACHRY T WOOD								-4990000000	
+Cash and Cash Equivalents, Beginning of Period									
+Department of the Treasury									
+Internal Revenue Service									
+					Q4 2020			Q4  2019	
+Calendar Year									
+Due: 04/18/2022									
+					Dec. 31, 2020			Dec. 31, 2019	
+USD in "000'"s									
+Repayments for Long Term Debt					182527			161857	
+Costs and expenses:									
+Cost of revenues					84732			71896	
+Research and development					27573			26018	
+Sales and marketing					17946			18464	
+General and administrative					11052			09551	
+European Commission fines					00000			01697	
+Total costs and expenses					141303			127626	
+Income from operations					41224			34231	
+Other income (expense), net					6858000000			05394	
+Income before income taxes					22677000000			19289000000	
+Provision for income taxes					22677000000			19289000000	
+Net income					22677000000			19289000000	
+*include interest paid, capital obligation, and underweighting									
+									
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)									
+									
+									
+									
+									
+									
+									
+									
+									
+									
+									
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)									
+*include interest paid, capital obligation, and underweighting									
+									
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)									
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)									
+									
+									
+									
+									
+									
+									
+									
+		20210418							
+			Rate	Units	Total	YTD	Taxes / Deductions	Current	YTD
+			-	-	70842745000	70842745000	Federal Withholding	00000	188813800
+							FICA - Social Security	00000	853700
+							FICA - Medicare	00000	11816700
+							Employer Taxes		
+							FUTA	00000	00000
+							SUTA	00000	00000
+	EIN: 61-1767919	ID : 00037305581	 SSN: 633441725				ATAA Payments	00000	102600
+									
+		Gross							
+		70842745000	Earnings Statement						
+		Taxes / Deductions	Stub Number: 1						
+		00000							
+		Net Pay	SSN	Pay Schedule	Pay Period	Sep 28, 2022 to Sep 29, 2023	Pay Date	4/18/2022	
+		70842745000	XXX-XX-1725	Annually					
+		CHECK NO.							
+		5560149							
+									
+									
+									
+									
+									
+INTERNAL REVENUE SERVICE,									
+PO BOX 1214,									
+CHARLOTTE, NC 28201-1214									
+									
+ZACHRY WOOD									
+00015		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
+Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
+Form 1040 (2021)		76033000000	20642000000	18936000000					
+Reported Normalized and Operating Income/Expense Supplemental Section									
+Total Revenue as Reported, Supplemental		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000
+Total Operating Profit/Loss as Reported, Supplemental		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000
+Reported Effective Tax Rate		00000	00000	00000	00000	00000		00000	00000
+Reported Normalized Income									
+Reported Normalized Operating Profit									
+Other Adjustments to Net Income Available to Common Stockholders									
+Discontinued Operations									
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010
+Basic EPS from Continuing Operations		00114	00031	00028	00028	00027	00022	00017	00010
+Basic EPS from Discontinued Operations									
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010
+Diluted EPS from Continuing Operations		00112	00031	00028	00027	00026	00022	00016	00010
+Diluted EPS from Discontinued Operations									
+Basic Weighted Average Shares Outstanding		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000
+Diluted Weighted Average Shares Outstanding		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000
+Reported Normalized Diluted EPS									
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010
+Basic WASO		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000
+Diluted WASO		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000
+Fiscal year end September 28th., 2022. | USD									
+									
+For Paperwork Reduction Act Notice, see the seperate Instructions.			This Product Cantains Sensitive Tax Payer Data						
+									
+					Request Date : 07-29-2022				
+					Response Date : 07-29-2022				
+					Tracking Number : 102393399156				
+					Customer File Number : 132624428				
+									
+important information			Wage and Income Transcript						
+					SSN Provided : XXX-XX-1725				
+					Tax Periood Requested :  December, 2020				
+									
+									
+									
+									
+			Form W-2 Wage and Tax Statement						
+Employer : 									
+  Employer Identification Number (EIN) :XXXXX4661									
+INTU									
+2700 C									
+Quarterly Report on Form 10-Q, as filed with the Commission on									
+Employee :									
+  Employee's Social Security Number :XXX-XX-1725									
+  ZACH T WOOD									
+  5222 B									
+on Form 8-K, as filed with the Commission on January 18, 2019).									
+Submission Type :					Original document				
+Wages, Tips and Other Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5105000.00					510500000				
+Federal Income Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1881380.00					188813800				
+Social Security Wages : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137700.00					13770000				
+Social Security Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 					853700				
+Medicare Wages and Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . 					510500000				
+Medicare Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					118166700				
+Social Security Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 					00000				
+Allocated Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Dependent Care Benefits : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Deffered Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Code "Q" Nontaxable Combat Pay : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . .					00000				
+Code "W" Employer Contributions tp a Health Savings Account : . . . . . . . . . . . . . . . . . . . . . . . . . . 					00000				
+Code "Y" Defferels under a section 409A nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . .  					00000				
+Code "Z" Income under section 409A on a nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . .					00000				
+Code "R" Employer's Contribution to MSA : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'					00000				
+Code "S" Employer's Cotribution to Simple Account : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Code "T" Expenses Incurred for Qualified Adoptions : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Code "V" Income from exercise of non-statutory stock options : . . . . . . . . . . . . . . . . . . . . . . . . .00000				
+Code "AA" Designated Roth Contributions under a Section  401 (k)  Plan : . . . . . . . . . . . . . . . . . . . .00000				
+Code "BB" Designated Roth Contributions under a Section 403 (b) Plan : . . . . . . . . . . . . . . . . . . . . .00000				
+Code "DD" Cost of Employer-Sponsored Health Coverage : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .									
+Code "EE" Designated ROTH Contributions Under a Governmental Section 457 (b) Plan : . . . . . . . . . . . . . . . . . . . . .									
+Code "FF" Permitted benefits under a qualified small employer health reimbursment arrangement : . . . . . . . . . 00000				
+Code "GG" Income from Qualified Equity Grants Under Section 83 (i) : . . . . . . . . . . . . . . . . . . . . . . . $0.00									
+Code "HH" Aggregate Defferals Under section 83(i) Elections as of the Close of the Calendar Year : . . . . . . . . 00000				
+Third Party Sick Pay Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Unanswered				
+Retirement Plan Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Unanswered					
+                                                                                  For the period 04/13/2022 to 04/29/2022
+ZACHRY TYLER WOOD
+Primary account number: 47-2041-6547 Page 2 of 3	
+Statutory Employee : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Not Statutory Employee	
+W2 Submission Type : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Original								22116905560149	
+W2 WHC SSN Validation Code : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Correct SSN								
+Reference number :
+22116905560149	
+Reference number :	
+22116905560149	
+Transaction description	willon your next statement as a single line item entitled Service
+Waived - show up on 05/02/2022 New Customer Period	
+4/27/2022		Form 1099-G		Returned Item Fee (nsf)					
+Detail of Services Used During Current Period									
+Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04 and appear as SRVCCHRG 04/29/2022,									
+Description						Volume	Amount		
+Account Maintenance Charge						70846743866	00000	        	
+Total For Services Used This Peiiod						00000	00000		
+Total Service (harge						00
+	00000		
+Reviewing Your Statement				('PNCBANK					
+Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if:
+you have any questions regarding your account(s); your name or address is incorrect;
+• you have any questions regarding interest paid to an interest-bearing account.									
+Balancing Your Account
+Update Your Account Register									
+Certified Copy of Resolutionsl
+Authorizations For Accounts And Loans					@PNCBANK				
+(Corporations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other Organizations)								step 2: Add together checks and other deductions listed in your account register but not on your statement.	
+PNC Bank, National Association("Bank")						
+Taxpayer I.D. Number (TIN)			
+Check
+Deduction Descretio•
+(iv)
+(account or benefit, or in payment of the individual obligations of, any individual obligations of any such persons to the Bank without regard to the disposition or purpose of same as allowed by applicable law.			
+D'@PNCBANK'@ID:44c295b9-ce08-424f-b6a5-b0f009ad802c ::NOTE
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+-----
+
+Components
+
+Syntax
+From ee3eafeb6238c785dfde82542eb9576da9437c52 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Sat, 27 Aug 2022 06:57:59 -0500
+Subject: [PATCH] Update creating-a-repository-from-a-template.md
+
+---
+ .../creating-a-repository-from-a-template.md  | 250 +++++++++++++++++-
+ 1 file changed, 245 insertions(+), 5 deletions(-)
+
+diff --git a/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md b/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
+index 9bdef7e4d67..bf5ff61a826 100644
+--- a/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
++++ b/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
+@@ -1,4 +1,244 @@
+----
++
++
++# This workflow uses actions that are not certified by GitHub.
++# They are provided by a third-party and are governed by
++# separate terms of service, privacy policy, and support
++# documentation.
++
++# This workflow will install Deno then run Deno lint and test.
++# For more information see: https://github.com/denoland/setup-deno
++
++name: Deno
++
++on:
++  push:
++    branches: ["masterbranch"]
++  pull_request:
++    branches: ["Trunk"]
++
++permissions:
++  contents: read
++
++jobs:
++  test:
++    runs-on: ubuntu-latest
++
++    steps:
++      - name: Setup repo
++        uses: actions/checkout@v3
++
++      - name: Setup Deno
++        # uses: denoland/setup-deno@v1
++        uses: denoland/setup-deno@004814556e37c54a2f6e31384c9e18e983317366
++        with:
++          deno'@v'-frostie'$'@V8'"''
++
++      # Uncomment this step to verify the use of 'deno fmt' on each commit.
++      # - name: Verify formatting
++      #   run: deno fmt --check
++
++      - name: rendeerer
++        run: deno.xml
++
++      - name: Run tests
++        run: Rust.yml
++        bundle-with : :rake.i
++        
+Run: Runs Test'@tests.yml'
++documentation.
+ -  notification:
+  - e-mail :
+   - zachryiixixiiwood@gmail.com
+    - nasdaqgoogcoo@gmail.com
++💁 The OpenShift Starter workflow will:
++- Checkout your repository
++- Perform a container image build
++- Push the built image to the GitHub Container Registry (GHCR)
++- Log in to your OpenShift cluster
++- Create an OpenShift app from the image and expose it to the internet
++ℹ️ Configure your repository and the workflow with the following steps:
++1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
++2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
++- https://github.com/redhat-actions/oc-login#readme
++- https://docs.github.com/en/actions/reference/encrypted-secrets
++- https://cli.github.com/manual/gh_secret_set
++3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
++4. (Optional) Edit the build-image step to build your project.
++The default build type is by using a Dockerfile at the root of the repository,
++but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
++5. Commit and push the workflow file to your default branch to trigger a workflow run.
++👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.
++name: OpenShift
++
++env:
++
++🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
++See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
++To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
++OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
++OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}
++
++🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
++OPENSHIFT_NAMESPACE: ""
++
++🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
++APP_NAME: ""
++
++🖊️ EDIT with the port your application should be accessible on.
++If the container image exposes exactly one port, this can be left blank.
++Refer to the 'port' input of https://github.com/redhat-actions/oc-new-app
++APP_PORT: ""
++
++🖊️ EDIT to change the image registry settings.
++Registries such as GHCR, Quay.io, and Docker Hub are supported.
++IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
++IMAGE_REGISTRY_USER: ${{ github.actor }}
++IMAGE_REGISTRY_PASSWORD: ${{ github.token }}
++
++🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
++IMAGE_TAGS: ""
++
++on:
++
++https://docs.github.com/en/actions/reference/events-that-trigger-workflows
++workflow_dispatch:
++push:
++# Edit to the branch(es) you want to build and deploy on each push.
++branches:''\
+  '-'' '['' 'Paradice'' ']'
++
++jobs:
++
++🖊️ EDIT if you want to run vulnerability check on your project before deploying
++the application. Please uncomment the below CRDA scan job and configure to run it in
++your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
++TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
++For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows
++crda-scan:
++uses: ./.github/workflows/crda.yml
++secrets:
++CRDA_KEY: ${{ secrets.CRDA_KEY }}
++# SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }} # Either use SNYK_TOKEN or CRDA_KEY
++
++openshift-ci-cd:
++# 🖊️ Uncomment this if you are using CRDA scan step above
++# needs: crda-scan
++name: Build and deploy to OpenShift
++runs-on: ubuntu-20.04
++environment: production
++
++outputs:
++  ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
++  SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
++
++steps:
++- name: Check for required secrets
++  uses: actions/github-script@v6
++  with:
++    script: |
++      const secrets = {
++        OPENSHIFT_SERVER: `${{ secrets.OPENSHIFT_SERVER }}`,
++        OPENSHIFT_TOKEN: `${{ secrets.OPENSHIFT_TOKEN }}`,
++      };
++      const GHCR = "ghcr.io";
++      if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
++        core.info(`Image registry is ${GHCR} - no registry password required`);
++      }
++      else {
++        core.info("A registry password is required");
++        secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
++      }
++      const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
++        if (value.length === 0) {
++          core.error(`Secret "${name}" is not set`);
++          return true;
++        }
++        core.info(`✔️ Secret "${name}" is set`);
++        return false;
++      });
++      if (missingSecrets.length > 0) {
++        core.setFailed(`❌ At least one required secret is not set in the repository. \n` +
++          "You can add it using:\n" +
++          "GitHub UI: https://docs[.github](https://github.com/zakwarlord7/zakwarlord7/tree/c76344d06ee3aca71db749f20dea92a785d5d77a/.github).com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
++          "GitHub CLI: https://cli.github.com/manual/gh_secret_set \n" +
++          "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
++      }
++      else {
++        core.info(`✅ All the required secrets are set`);
++      }
++- name: Check out repository
++  uses: actions/checkout@v3
++
++- name: Determine app name
++  if: env.APP_NAME == ''
++  run: |
++    echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV
++- name: Determine image tags
++  if: env.IMAGE_TAGS == ''
++  run: |
++    echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV
++# https://github.com/redhat-actions/buildah-build#readme
++- name: Build from Dockerfile
++  id: build-image
++  uses: redhat-actions/buildah-build@v2
++  with:
++    image: ${{ env.APP_NAME }}
++    tags: ${{ env.IMAGE_TAGS }}
++
++    # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
++    # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
++    # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
++    dockerfiles: |
++      ./Dockerfile
++# https://github.com/redhat-actions/push-to-registry#readme
++- name: Push to registry
++  id: push-image
++  uses: redhat-actions/push-to-registry@v2
++  with:
++    image: ${{ steps.build-image.outputs.image }}
++    tags: ${{ steps.build-image.outputs.tags }}
++    registry: ${{ env.IMAGE_REGISTRY }}
++    username: ${{ env.IMAGE_REGISTRY_USER }}
++    password: ${{ env.IMAGE_REGISTRY_PASSWORD }}
++
++# The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}
++
++- name: Install oc
++  uses: redhat-actions/openshift-tools-installer@v1
++  with:
++    oc: 4
++
++# https://github.com/redhat-actions/oc-login#readme
++- name: Log in to OpenShift
++  uses: redhat-actions/oc-login@v1
++  with:
++    openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
++    openshift_token: ${{ env.OPENSHIFT_TOKEN }}
++    insecure_skip_tls_verify: true
++    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
++
++# This step should create a deployment, service, and route to run your app and expose it to the internet.
++# https://github.com/redhat-actions/oc-new-app#readme
++- name: Create and expose app
++  id: deploy-and-expose
++  uses: redhat-actions/oc-new-app@v1
++  with:
++    app_name: ${{ env.APP_NAME }}
++    image: ${{ steps.push-image.outputs.registry-path }}
++    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
++    port: ${{ env.APP_PORT }}
++
++- name: Print application URL
++  env:
++    ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
++    SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
++  run: |
++    [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
++    echo
++    echo "======================== Your application is available at: ========================"
++    echo ${{{{[' '"((c)(r)).[12753750].[00]m]BITORE_34173.1337'"'' }}
++    echo "===================================================================================
++    'equire':'' 'test''
++    Return:'' 'Run ''
++    ---branches: mainbranch
+ title: Creating a repository from a template
+ intro: You can generate a new repository with the same directory structure and files as an existing repository.
+ redirect_from:
+@@ -6,10 +246,10 @@ redirect_from:
+   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
+   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
+ versions:
+-  fpt: '*'
+-  ghes: '*'
+-  ghae: '*'
+-  ghec: '*'
++  ghec: 'OPTIONAL'
++  ghcr: 'OPTIONAL'
++  'gchr': 'OPTIONAL'
++  'require': 'test'
+ topics:
+   - Repositories
+ shortTitle: Create from a template
+[branch]
+(label)
+owner/repo
+
+
+Prompts
+
+? Yes/No Prompt [y/N]
+
+? Short text prompt (Auto fill)
+
+? Long text prompt [(e) to launch vim, enter to skip] 
+
+? Single choice prompt [Use arrows to move, type to filter]
+> Choice focused
+  Choice 
+  Choice
+
+? Multi select prompt [Use arrows to move, space to select, type to filter]
+> [x]  Choice selected and focused
+  [x]  Choice selected
+  [ ]  Projects
+  [ ]  Milestone
+
+
+
+State
+
+#123 Open issue or pull request
+#123 Closed issue pull request
+#123 Merged pull request
+#123 Draft pull request
+
+✓ Checks passing
+✓ Approved
+- Review requested
++ Changes requested
+
+✓ Success message
+! Alert
+✗ Error message (ideal)
+error message (current)
+
+✓ Item closed
+✓ Item merged
+
+
+Loading spinner
+
+⣟ Action...
+
+
+
+Lists
+
+$ gh issue list 
+
+Showing 3 of 222 issues in cli/cli
+
+#1360  Ability to ski...                     about 2 days ago
+#1358  Provide extra ...  (enhancement)      about 3 days ago
+#1354  Add ability to...  (enhancement, ...  about 3 days ago
+
+
+
+Detail view
+
+
+
+Ability to skip confirmation via a flag
+Open • AliabbasMerchant opened about 2 days ago • 1 comment
+
+
+#1330 proposes to add confirmation to risky commands. It is a nice feature to have, but in order to support proper scriptability, we should support a flag (preferably  -y , like in most CLIs), to skip asking for confirmation. So for each of the 4 commands mentioned there (and possibly even more in the future), we should add support for the  -y  flag                                       
+
+
+View this issue on GitHub: https://github.com/cli/cli/issues/1360
+
+
+Headers
+
+
+Creating issue in cli/cli
+
+Showing 30 of 226 issues in cli/cli
+
+Relevant pull requests in cli/cli
+
+cli/cli
+GitHub’s official command line tool
+
+Default branch is not being prioritized
+Closed • tierninho opened about 6 months ago • 1 comment
+
+
+
+Empty states
+
+Current branch
+  There is no pull request associated with [master]
+
+Created by you
+  You have no open pull requests
+
+Requesting a code review from you
+  You have no pull requests to review
+
+No pull requests match your search in cli/cli
+
+No issues match your search in cli/cli
+
+There are no open issues in ampinsk/create-test
+
+
+
+
+Help page
+
+$ gh
+
+Work seamlessly with GitHub from the command line. 
+
+USAGE
+  gh <command> <subcommand> [flags]
+  Commands are run inside of a GitHub repository.
+
+CORE COMMANDS
+  issue:       Create and view issues
+  pr:          Create, view, and checkout pull requests
+  repo:        Create, clone, fork, and view repositories
+
+ADDITIONAL COMMANDS
+  help:        Help about any command
+  config:      Set and get preferences
+  completion:  Generate shell completion scripts
+
+FLAGS
+  -h, --help:              Show help for command
+  -v, --version:           Show gh version
+
+EXAMPLES
+  $ gh issue create
+  $ gh pr list
+  $ gh repo fork
+
+LEARN MORE
+  Use "gh [command] [subcommand] --help" for more information about a command.
+  Read the manual at <http://cli.github.com/manual>
+
+FEEDBACK 
+  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
+  Open an issue using “gh issue create -R cli/cli”
+
+
diff --git a/bitore.sig b/bitore.sig
new file mode 100644
index 000000000000..4c8e4e921d66
--- /dev/null
+++ b/bitore.sig
@@ -0,0 +1,436 @@
+# This is a basic workflow to help you get started with Actions
+
+name: CI
+
+# Controls when the workflow will run
+on:
+  # Triggers the workflow on push or pull request events but only for the "main" branch
+  push:
+    branches: [ "MainBranch" ]
+  pull_request:
+    branches: [ "TREE" ]
+
+  # Allows you to run this workflow manually from the Actions tab
+  workflow_dispatch:
+
+# A workflow run is made up of one or more jobs that can run sequentially or in parallel
+jobs:
+  # This workflow contains a single job called "build"
+  build:
+    # The type of runner that the job will run on
+    runs-on: ubuntu-latest
+
+    # Steps represent a sequence of tasks that will be executed as part of the job
+    steps:
+      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
+      - uses: actions/checkout@v3
+
+      # Runs a single command using the runners shell
+      - name: Run a one-line script
+        run: echo Hello, world!
+
+      # Runs a set of commands using the runners shell
+      - name: Run a multi-line script
+        run: |
+     # -{	
+  "version": "6.12.8",	
+  "configurations": [	
+    {	
+      "type": "node",	
+      "request": "attach",	
+      "name": "Node: Nodemon",	
+      "processId": "${command:PickProcess}",	
+      "restart": true,	
+      "protocol": "inspector",	
+    },	
+  ]	
+}	
+ZachryTylerWood	
+ 383  
+OPEN.js/package.json
+@@ -0,0 +1,383 @@
+{
+  "version": "6.12.8",
+  "configurations": [
+    {
+      "type": "node",
+      "request": "attach",
+      "name": "Node: Nodemon",
+      "processId": "${command:PickProcess}",
+      "restart": true,
+      "protocol": "inspector",
+
+#:This_Repositorys: WORKSFLOW
+-started: with runners.ios
+Name: paradice
+
+Controls when the workflows_call:-on: disoatch-will: R=::Run::/:Run::-Runs:runs:-on:run:
+on:
+
+Triggers the workflow on push or pull request events but only for the "paradice" branch
+push: "[ "Batt" ]
+pull_request:
+branches: [ "bitore.sig" ]
+
+name: Cache
+uses: actions/cache@v3.0.7
+with:
+A list of files, directories, and wildcard patterns to cache and restore
+path:
+An explicit key for restoring and saving the cache
+key:
+An ordered list of keys to use for restoring stale cache if no cache hit occurred for key. Note cache-hit returns false in this case.
+restore-keys: # optional
+The chunk size used to split up large files during upload, in bytes
+upload-chunk-size: # optional
+Allows you to run this workflow manually from the Actions tab
+workflow_dispatch:
+A workflow run is made up of one or more jobs that can run sequentially or in parallel
+jobs:
+
+This workflow contains a single job called "build"
+build:
+# The type of runner that the job will run on
+runs-on: ubuntu-latest
+
+# Steps represent a sequence of tasks that will be executed as part of the job
+steps:
+  # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
+  - uses: actions/checkout@v3
+
+  # Runs a single command using the runners shell
+  - name: Run a one-line script
+    run: echo Hello, world!
+
+  # Runs a set of commands using the runners shell
+  - name: Run a multi-line script
+    run: |
+      echo Add other actions to build,
+      echo test, and deploy your project. to content :<article id="content" data-locale="en-US" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px; display: block; color: rgb(60, 66, 87); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Ubuntu, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><div class="Document" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px;"><p style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--default-vertical-spacing); padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border: 0px; line-height: 26px; font-size: 16px; color: var(--sail-color-text);"><a href="https://stripe.com/docs/api/errors" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px 20px 0px 0px; border: 0px; background-color: transparent; color: var(--sail-color-blue-500); font-weight: 500; text-decoration: none; position: relative; display: inline-block;">HTTP response code</a>. To learn more ways to manage your API keys, see<span> </span><a href="https://stripe.com/docs/development/dashboard/manage-api-keys" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 0px; border: 0px; background-color: transparent; color: var(--sail-color-blue-500); font-weight: 500; text-decoration: none;">Manage API keys</a>.</p><h2 class="Heading Heading--anchored" id="test-live-modes" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding: 32px 0px 0px; border: 0px; font-weight: 700; color: var(--sail-color-gray-900); cursor: pointer; position: relative; display: flex; flex-direction: row; align-items: center;">Test and live modes overview</h2><p style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--default-vertical-spacing); padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border: 0px; line-height: 26px; font-size: 16px; color: var(--sail-color-text);">All Stripe API requests occur in either test or live mode. API objects in one mode (for example, product objects) aren’t accessible to the other.</p><div class="Table Table--striped Table--fixed Box-root Padding-vertical--12" style="box-sizing: border-box; overflow-wrap: break-word; margin: 0px; padding-top: var(--sail-spacing-12); padding-right: 0px; padding-bottom: var(--sail-spacing-12); padding-left: 0px; border: 0px; width: 770px; max-width: 100%; border-collapse: collapse; overflow-x: auto; position: relative;">
+TYPE	WHEN TO USE	OBJECTS	HOW TO USE	CONSIDERATIONS
+Test mode	Use this mode as you build your app. Payments are not processed by card networks or payment providers.	API calls return simulated account, payment, customer, charge, refund, transfer, balance, and subscription.	Use test credit cards and accounts. Don’t use actual payment authorizations, charges, or captures.	Identity doesn’t perform any verification checks. Connect account objects don’t return sensitive fields.
+Live mode	Use this mode when you’re ready to launch your app. Card networks or payment providers process payments.	API calls return actual account, payment, customer, charge, refund, transfer, balance, and subscription objects.	Use valid credit cards and accounts. Use actual payment authorizations, charges, and captures for credit cards and accounts.	Disputes have a more nuanced flow and a simpler testing process. Some Sources payment methods have a more nuanced flow and require more steps.
+Use only your test API keys for testing and development. This ensures that you don’t accidentally modify your live customers or charges.
+
+If you don’t have an administrator or developer role, you may not have access to view your API keys in the Dashboard. Ask your Stripe account’s owner to add you to their team as a developer.
+
+Reveal an API secret key for live mode (one time)
+An API secret key for live mode is only visible the first time you access it. After that, the Dashboard no longer shows the secret key. Use these steps to reveal a secret key and leave a note that describes where it lives in your own systems.
+
+Open the API keys page.
+Click Reveal live key.
+In Notes, enter where your key lives in your own systems.
+Keys created prior to the introduction of this feature are not automatically hidden when they are revealed, but can be hidden manually.
+
+Revoke (“roll”) an API secret key
+If you’re in live mode and you lose your API secret key or API restricted key, you can’t recover it from the Dashboard. Similarly, if your secret key is compromised, you need to revoke (“roll”) the key to block any API requests that might use that key. Use these steps to revoke your API secret key and generate a new key.
+
+Open the API keys page.
+Click the three dots (…) next to your secret key, click Roll key.
+In Expiration, choose when to expire the existing key:
+now
+in 1 hour
+in 24 hours
+in 3 days
+in 7 days
+Click Roll API key.
+The expiration period you choose blocks and expires the existing key for the time period you specify. Regardless of the expiration period, you can use the new key immediately.
+
+
+Rolling an API key.
+
+Keeping your keys safe
+Your secret API key can be used to make any API call on behalf of your account, such as creating charges or performing refunds. Treat your secret API key as you would any other password. Grant access only to those who need it. Ensure it is kept out of any version control system you may be using. Control access to your key using a password manager or secrets management service.
+
+Limiting access with restricted API keys
+A restricted API key allows only the minimum level of access that you specify. Restricted keys cannot interact with many parts of Stripe’s API and are intended to reduce risk when using or building microservices. They should not be used as an alternative to your account’s API keys during development of your Stripe integration.
+
+Use restricted API keys if you’re working with microservices that interact with the Stripe API on your behalf. You can create restricted API keys that limit access to, and permissions to specific account data. For example, you can create a restricted key that grants read-only access to dispute data, then use it with a dispute monitoring service.
+
+To create a restricted API key, see Manage API keys.
+
+Was this page helpful?
+Yes
+No
+Questions? Contact us.
+View developer tutorials on YouTube.
+Check out our product changelog.
+[HTTP response code](https://stripe.com/docs/api/errors). To learn more ways to manage your API keys, see [Manage API keys](https://stripe.com/docs/development/dashboard/manage-api-keys).
+Test and live modes overview
+All Stripe API requests occur in either test or live mode. API objects in one mode (for example, product objects) aren’t accessible to the other.
+
+TYPE WHEN TO USE OBJECTS HOW TO USE CONSIDERATIONS
+Test mode Use this mode as you build your app. Payments are not processed by card networks or payment providers. API calls return simulated account, payment, customer, charge, refund, transfer, balance, and subscription. Use test credit cards and accounts. Don’t use actual payment authorizations, charges, or captures. Identity doesn’t perform any verification checks. Connect account objects don’t return sensitive fields.
+Live mode Use this mode when you’re ready to launch your app. Card networks or payment providers process payments. API calls return actual account, payment, customer, charge, refund, transfer, balance, and subscription objects. Use valid credit cards and accounts. Use actual payment authorizations, charges, and captures for credit cards and accounts. Disputes have a more nuanced flow and a simpler testing process. Some Sources payment methods have a more nuanced flow and require more steps.
+API keys
+All accounts have a total of four keys: a publishable and secret key pair for test mode and live mode. Stripe APIs use your secret key to authenticate requests on your server. By default, your account’s secret keys can be used to perform any API request without restriction. You can find your keys on the API Keys page in the Developers Dashboard.
+
+Stripe automatically populates code examples in our documentation with your test API keys while you’re logged in—only you can see these values. For your convenience, your test API keys for Zachry T Wood III are:
+
+TYPE VALUE WHEN TO USE
+Publishable pk_test_51HGcX6KxqqA7JcPHGKhUYWGwyDAtLfKwLokfN7r5147gR7OvVobKLgKav910ex6i2R3GIY0dJme1X40MiXEr7KE300Jr0Vp8q5 On the client-side. Can be publicly-accessible in your web or mobile app’s client-side code (such as checkout.js) to tokenize payment information such as with Stripe Elements. By default, Stripe Checkout tokenizes payment information.
+Secret sk_test_51HGcX6KxqqA7JcPH8qFPAp6Nsobyz7QbHlGhO1bTYTJ5eiYPuWKT5UCjOcjNxO7acotmtcXBFFbotbesOWDYL1Bb00MoZWPU2r On the server-side. Must be secret and stored securely in your web or mobile app’s server-side code (such as in an environment variable or credential management system) to call Stripe APIs.
+Use only your test API keys for testing and development. This ensures that you don’t accidentally modify your live customers or charges.
+
+If you don’t have an administrator or developer role, you may not have access to view your API keys in the Dashboard. Ask your Stripe account’s owner to add you to their team as a developer.
+
+Reveal an API secret key for live mode (one time)
+An API secret key for live mode is only visible the first time you access it. After that, the Dashboard no longer shows the secret key. Use these steps to reveal a secret key and leave a note that describes where it lives in your own systems.
+
+Open the API keys page.
+Click Reveal live key.
+In Notes, enter where your key lives in your own systems.
+Keys created prior to the introduction of this feature are not automatically hidden when they are revealed, but can be hidden manually.
+
+Revoke (“roll”) an API secret key
+If you’re in live mode and you lose your API secret key or API restricted key, you can’t recover it from the Dashboard. Similarly, if your secret key is compromised, you need to revoke (“roll”) the key to block any API requests that might use that key. Use these steps to revoke your API secret key and generate a new key.
+
+Open the API keys page.
+Click the three dots (…) next to your secret key, click Roll key.
+In Expiration, choose when to expire the existing key:
+now
+in 1 hour
+in 24 hours
+in 3 days
+in 7 days
+Click Roll API key.
+The expiration period you choose blocks and expires the existing key for the time period you specify. Regardless of the expiration period, you can use the new key immediately.
+
+Rolling an API key.
+
+Keeping your keys safe
+Your secret API key can be used to make any API call on behalf of your account, such as creating charges or performing refunds. Treat your secret API key as you would any other password. Grant access only to those who need it. Ensure it is kept out of any version control system you may be using. Control access to your key using a password manager or secrets management service.
+
+Limiting access with restricted API keys
+A restricted API key allows only the minimum level of access that you specify. Restricted keys cannot interact with many parts of Stripe’s API and are intended to reduce risk when using or building microservices. They should not be used as an alternative to your account’s API keys during development of your Stripe integration.
+
+Use restricted API keys if you’re working with microservices that interact with the Stripe API on your behalf. You can create restricted API keys that limit access to, and permissions to specific account data. For example, you can create a restricted key that grants read-only access to dispute data, then use it with a dispute monitoring service.
+
+To create a restricted API key, see Manage API keys.
+
+Was this page helpful?
+
+Yes
+
+No
+Questions? Contact us.
+View developer tutorials on YouTube.
+Check out our product changelog.(https://github.com/zakwarlord7/Terminal/releases#start-of-content)
+Search or jump to…
+Pull requests
+Issues
+Marketplace
+[Explore](https://github.com/exploreer'@zakwarlord7
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+We weren’t able to create the release for you. The release description is too large.
+zakwarlord7
+/
+Terminal
+Private
+Code
+:Issues :cc4034910057530719 :ccv836 :exp04/2025; :
+Pull requests
+Actions
+Projects
+Security
+Insights
+Settings
+ReleasesTags
+Existing tag
+batt
+
+"$ curl https://api.stripe.com/v1/issuing/cardholders \
+
+"Publishable key"="pk_live_51HGcX6KxqqA7JcPHBL0QrdkNHaBbZH8j5ZbZJoY3ZahJfC6FoR3gxMoImtlCLGB3LIGBBS0dqBwWLLACv607Cw4e00Hp3AXwga"
+-d "secret key"="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
+-d "name"="Zachry Tyler Wood"
+-d "email"="zachryiixixiiwood@gmail.com"
+-d "phone_number"="+14696974300"
+-d "status"="active"
+-d "type"="business"
+-d "billing[address][line1]"="5222 Bradford Drive"
+-d "billing[address][city]"="Dallas"
+-d "billing[address][state]"="TX"
+-d "billing[address][postal_code]"="75235-8313"
+-d "billing[address][country]"="US" "
+: #c84801; --sn-hue-orange600: #a82c00; --sn-hue-orange700: #842106; --sn-hue-orange800: #5f1a05; --sn-hue-orange900: #331302; --sn-hue-red50: #fff5fa; --sn-hue-red100: #ffe7f2; --sn-hue-red150: #ffccdf; --sn-hue-red200: #ffb1cd; --sn-hue-red300: #fe87a1; --sn-hue-red400: #fc526a; --sn-hue-red500: #df1b41; --sn-hue-red600: #b3093c; --sn-hue-red700: #890d37; --sn-hue-red800: #68052b; --sn-hue-red900: #3e021a; --sn-hue-purple50: #f9f7ff; --sn-hue-purple100: #f2ebff; --sn-hue-purple150: #dfd3fc; --sn-hue-purple200: #d1befe; --sn-hue-purple300: #b49cfc; --sn-hue-purple400: #8d7ffa; --sn-hue-purple500: #625afa; --sn-hue-purple600: #513dd9; --sn-hue-purple700: #3f32a1; --sn-hue-purple800: #302476; --sn-hue-purple900: #14134e; --sn-color-neutral0: var(--sn-hue-gray0); --sn-color-neutral50: var(--sn-hue-gray50); --sn-color-neutral100: var(--sn-hue-gray100); --sn-color-neutral150: var(--sn-hue-gray150); --sn-color-neutral200: var(--sn-hue-gray200); --sn-color-neutral300: var(--sn-hue-gray300); --sn-color-neutral400: var(--sn-hue-gray400); --sn-color-neutral500: var(--sn-hue-gray500); --sn-color-neutral600: var(--sn-hue-gray600); --sn-color-neutral700: var(--sn-hue-gray700); --sn-color-neutral800: var(--sn-hue-gray800); --sn-color-neutral900: var(--sn-hue-gray900); --sn-color-neutral950: var(--sn-hue-gray950); --sn-color-brand50: var(--sn-hue-purple50); --sn-color-brand100: var(--sn-hue-purple100); --sn-color-brand200: var(--sn-hue-purple200); --sn-color-brand300: var(--sn-hue-purple300); --sn-color-brand400: var(--sn-hue-purple400); --sn-color-brand500: var(--sn-hue-purple500); --sn-color-brand600: var(--sn-hue-purple600); --sn-color-brand700: var(--sn-hue-purple700); --sn-color-brand800: var(--sn-hue-purple800); --sn-color-brand900: var(--sn-hue-purple900); --sn-color-info50: var(--sn-hue-blue50); --sn-color-info100: var(--sn-hue-blue100); --sn-color-info200: var(--sn-hue-blue200); --sn-color-info300: var(--sn-hue-blue300); --sn-color-info400: var(--sn-hue-blue400); --sn-color-info500: var(--sn-hue-blue500); --sn-color-info600: var(--sn-hue-blue600); --sn-color-info700: var(--sn-hue-blue700); --sn-color-info800: var(--sn-hue-blue800); --sn-color-info900: var(--sn-hue-blue900); --sn-color-success50: var(--sn-hue-green50); --sn-color-success100: var(--sn-hue-green100); --sn-color-success200: var(--sn-hue-green200); --sn-color-success300: var(--sn-hue-green300); --sn-color-success400: var(--sn-hue-green400); --sn-color-success500: var(--sn-hue-green500); --sn-color-success600: var(--sn-hue-green600); --sn-color-success700: var(--sn-hue-green700); --sn-color-success800: var(--sn-hue-green800); --sn-color-success900: var(--sn-hue-green900); --sn-color-attention50: var(--sn-hue-orange50); --sn-color-attention100: var(--sn-hue-orange100); --sn-color-attention200: var(--sn-hue-orange200); --sn-color-attention300: var(--sn-hue-orange300); --sn-color-attention400: var(--sn-hue-orange400); --sn-color-attention500: var(--sn-hue-orange500); --sn-color-attention600: var(--sn-hue-orange600); --sn-color-attention700: var(--sn-hue-orange700); --sn-color-attention800: var(--sn-hue-orange800); --sn-color-attention900: var(--sn-hue-orange900); --sn-color-critical50: var(--sn-hue-red50); --sn-color-critical100: var(--sn-hue-red100); --sn-color-critical200: var(--sn-hue-red200); --sn-color-critical300: var(--sn-hue-red300); --sn-color-critical400: var(--sn-hue-red400); --sn-color-critical500: var(--sn-hue-red500); --sn-color-critical600: var(--sn-hue-red600); --sn-color-critical700: var(--sn-hue-red700); --sn-color-critical800: var(--sn-hue-red800); --sn-color-critical900: var(--sn-hue-red900); --sn-backgroundColor-surface: var(--sn-color-neutral0); --sn-backgroundColor-container: var(--sn-color-neutral50); --sn-borderColor-neutral: rgb(64 68 82 / 16%); --sn-borderColor-critical: var(--sn-color-critical500); --sn-iconColor-primary: var(--sn-color-neutral600); --sn-iconColor-secondary: var(--sn-color-neutral400); --sn-iconColor-disabled: var(--sn-color-neutral200); --sn-iconColor-brand: var(--sn-color-brand400); --sn-iconColor-info: var(--sn-color-info400); --sn-iconColor-success: var(--sn-color-success400); --sn-iconColor-attention: var(--sn-color-attention400); --sn-iconColor-critical: var(--sn-color-critical400); --sn-textColor-primary: var(--sn-color-neutral700); --sn-textColor-secondary: var(--sn-color-neutral500); --sn-textColor-disabled: var(--sn-color-neutral300); --sn-textColor-brand: var(--sn-color-brand500); --sn-textColor-info: var(--sn-color-info500); --sn-textColor-success: var(--sn-color-success500); --sn-textColor-attention: var(--sn-color-attention500); --sn-textColor-critical: var(--sn-color-critical500); --sn-overflow-hidden: hidden; --sn-radius-none: none; --sn-radius-xsmall: 4px; --sn-radius-small: 4px; --sn-radius-medium: 8px; --sn-radius-large: 10px; --sn-radius-rounded: 999em; --sn-shadow-none: none; --sn-shadow-top: rgb(0 0 0 / 12%) 0px 1px 1px 0px; --sn-shadow-base: rgb(64 68 82 / 8%) 0px 2px 5px 0px, 0 0 0 0 transparent; --sn-shadow-hover: rgb(64 68 82 / 8%) 0px 2px 5px 0px, rgb(64 68 82 / 8%) 0px 3px 9px 0px; --sn-shadow-focus: 0 0 0 4px rgb(1 150 237 / 36%); --sn-size-0: 0px; --sn-size-1: var(--sn-space-1); --sn-size-25: var(--sn-space-25); --sn-size-50: var(--sn-space-50); --sn-size-75: var(--sn-space-75); --sn-size-100: var(--sn-space-100); --sn-size-150: var(--sn-space-150); --sn-size-200: var(--sn-space-200); --sn-size-250: var(--sn-space-250); --sn-size-300: var(--sn-space-300); --sn-size-350: var(--sn-space-350); --sn-size-400: var(--sn-space-400); --sn-size-500: var(--sn-space-500); --sn-size-600: var(--sn-space-600); --sn-size-fill: 100%; --sn-size-min: min-content; --sn-size-max: max-content; --sn-size-fit: fit-content; --sn-size-1/2: 50%; --sn-size-1/3: 33.3333%; --sn-size-2/3: 66.6667%; --sn-size-1/4: 25%; --sn-size-2/4: 50%; --sn-size-3/4: 75%; --sn-size-1/5: 20%; --sn-size-2/5: 40%; --sn-size-3/5: 60%; --sn-size-4/5: 80%; --sn-size-1/6: 16.6667%; --sn-size-2/6: 33.3333%; --sn-size-3/6: 50%; --sn-size-4/6: 66.6667%; --sn-size-5/6: 83.3333%; --sn-size-1/12: 8.3333%; --sn-size-2/12: 16.6667%; --sn-size-3/12: 25%; --sn-size-4/12: 33.3333%; --sn-size-5/12: 41.6667%; --sn-size-6/12: 50%; --sn-size-7/12: 58.3333%; --sn-size-8/12: 66.6667%; --sn-size-9/12: 75%; --sn-size-10/12: 83.3333%; --sn-size-11/12: 91.6667%; --sn-space-0: 0px; --sn-space-1: 1px; --sn-space-25: 2px; --sn-space-50: 4px; --sn-space-75: 6px; --sn-space-100: 8px; --sn-space-150: 12px; --sn-space-200: 16px; --sn-space-250: 20px; --sn-space-300: 24px; --sn-space-350: 28px; --sn-space-400: 32px; --sn-space-500: 40px; --sn-space-600: 48px; --sn-space-xxsmall: var(--sn-space-25); --sn-space-xsmall: var(--sn-space-50); --sn-space-small: var(--sn-space-100); --sn-space-medium: var(--sn-space-200); --sn-space-large: var(--sn-space-300); --sn-space-xlarge: var(--sn-space-400); --sn-space-xxlarge: var(--sn-space-600); --sn-typeface-ui: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; --sn-typeface-monospace: "Source Code Pro", Menlo, Monaco, monospace; --sn-weight-regular: 400; --sn-weight-semibold: 600; --sn-weight-bold: 700; --sn-zIndex-overlay: 299; --sn-zIndex-partial: 400; font-family: var(--sn-typeface-ui); color: var(--sn-textColor-primary); fill: var(--sn-iconColor-primary);">
+API keys
+Learn more about API authentication
+Viewing live API keys. Toggle to view test keys.
+<input aria-invalid="false" class="Switch-source PressableContext PressableContext--cursor--pointer PressableContext--display--inline>
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/BITORE
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/responses
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Requests
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Request
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Pull
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Pulls
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_request
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Push
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pushs_request
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Request
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Response
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/compose
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/instruct
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Directionings
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Debit
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/inititiate
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/connection
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/reciept
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/recieption
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/reciept
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/accession
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/positive
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/build_scripts
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Build
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/and
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Deployee
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Deploy
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Release
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/publishs
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Returns
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/Run''
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
+
+Full Changelog: https://github.com/zakwarlord7/Terminal/commits/pull_requests
+No file chosen
+Attach files by dragging & dropping, selecting or pasting them.
+No file chosen
+Attach binaries by dropping them here or selecting them.
+This is a pre-release
+We’ll point out that this release is identified as non-production ready.
+
+Tagging suggestions
+It’s common practice to prefix your version names with the letter v. Some good tag names might be v1.0.0 or v2.3.4.
+
+If the tag isn’t meant for production use, add a pre-release version after the version name. Some good pre-released curl https://api.stripe.com/v1/charges
+-u sk_test_51HGcX6KxqqA7JcPH8qFPAp6Nsobyz7QbHlGhO1bTYTJ5eiYPuWKT5UCjOcjNxO7acotmtcXBFFbotbesOWDYL1Bb00MoZWPU2r:
+-d amount=2677000000000
+-d currency=USD
+-d source=tok_visa
+-d "metadata[order_id]"=101003:' 00022116905560149:;
+"id": "ch_4034910067530719",
+"object": "charge",
+"amount": 1000,
+"amount_captured": 0,
+"amount_refunded": 0,
+"amount_updates": [],
+"application": null,
+"application_fee": null,
+"application_fee_amount": null,
+"balance_transaction": "txn_1LXYtdKxqqA7JcPHwQSusGka",
+"billing_details": {
+"address": {
+"city": null,
+"country": null,
+"line1": null, versions might be v0.2.0-alpha or v5.9-beta.3.
+
+Semantic versioning
+If you’re new to releasing software, we highly recommend reading about semantic versioning.
+
+Footer
+© 2022 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+You have unread notifications
+
+@zakwarlord7 zakwarlord7 closed this as completed 36 minutes ago
+@zakwarlord7 zakwarlord7 reopened this 34 minutes ago
+@zakwarlord7 zakwarlord7 changed the title terminal '"'{'%'' '"Authorization: Bearer'' 'YOUR_SECRET_KEY'' '='' Authorization':'' ''Bearer =4034_9100_6753_0719'"' '%}'"' 25 minutes ago
+@zakwarlord7 zakwarlord7 modified the milestone: BITORE_34173 24 minutes ago
+@zakwarlord7 zakwarlord7 closed this as completed 24 minutes ago
+@zakwarlord7 zakwarlord7 reopened this 23 minutes ago
+@zakwarlord7 zakwarlord7 added this to the BITORE_34173 milestone 23 minutes ago
+@zakwarlord7 zakwarlord7 pinned this issue 23 minutes ago
+@zakwarlord7
+Author
+zakwarlord7 commented 20 minutes ago • 
+GET $-cd m install -Php -pillow'@it.git.gists/BITORE'@git $Get: -gets:.git-get:bitore.sig -gets: clonse./~git fetch origin
+git checkout 1-authorization-bearer-your_secret_key-=-authorization-bearer-=4034_9100_6753_0719
+
+@zakwarlord7 zakwarlord7 closed this as completed 2 minutes ago
+@zakwarlord7
+
+
+Leave a comment
+No file chosen
+Attach files by dragging & dropping, selecting or pasting them.
+Remember, contributions to this repository should follow our GitHub Community Guidelines.
+Assignees
+No one—
+Labels
+None yet
+Projects
+None yet
+Milestone
+BITORE_34173
+Development
+ for this issue or link a pull request.
+Notifications
+Customize
+You’re receiving notifications because you’re watching this repository.
+1 participant
+@zakwarlord7
+
+ Delete issue
+Footer
+© 2022 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+Author :
+# -ZachryTylerWoo/Vscode/Bitore.sigs/bitore.sig/tests/Test'@Travis.ymll-then-build-and-deployee-HerokuRunwizardDependaBot'@CI-to-Fix-all-then-build-and-deployee-tests'@Tracis.ymld
+# -Eho Add other actions to build,
+      -    echo test, and deploy your project.
diff --git a/husky/SilverLight.yml b/husky/SilverLight.yml
new file mode 100644
index 000000000000..524b279188f9
--- /dev/null
+++ b/husky/SilverLight.yml
@@ -0,0 +1,517 @@
+<html>
+chrome-extension://bpmcpldpdmajfigpchkicefoigmkfalc/views/app.html
+<title></title>
+  <link id="common-css" rel="stylesheet" type="text/css" href="../scripts/lib/qowt/assets/common.css" disabled="false"/>
+  <link id="word-css" rel="stylesheet" type="text/css" href="../scripts/lib/qowt/assets/document/word.css" disabled="true" />
+  <link id="sheet-css" rel="stylesheet" type="text/css" href="../scripts/lib/qowt/assets/grid/sheet.css" disabled="true" />
+  <link id="point-css" rel="stylesheet" type="text/css" href="../scripts/lib/qowt/assets/slides/point.css" disabled="true" />
+
+  <link id="printing-css" rel="stylesheet" type="text/css" href="../scripts/lib/qowt/assets/qowt-printing.css" media="print" />
+
+  <link rel="stylesheet" type="text/css" href="../css/qowtOverrides.css" />
+  <link rel="stylesheet" type="text/css" href="../css/qowtOverrides-printing.css" media="print" />
+
+  <script src="../scripts/configs/requirejsConfig.js"></script>
+  <script src="../scripts/third_party/requireJs/require.js"></script>
+
+  <script src="../scripts/mainQOWT.js"></script>
+  <script src="../scripts/third_party/webcomponentsjs/webcomponents-lite.min.js"></script>
+  <link rel="import" href="../scripts/third_party/polymer/polymer.html" />
+  <link rel="import" href="../scripts/common/elements/all.html" />
+</head>
+<body>
+
+  <div id="qo_app">
+  </div>
+
+</body>
+
+</html>
+
+BEGIN:
+GLOW7:
+Start :On :-on :starts :
+starts ::Run:-on:BEGIN:-Runs:Run:-on:Run :
+RUNS :-on :Start:
+RUNS :AUTOMATE :
+AUTOMATE :AUTOMATES :
+AUTOMATES :build_script :
+:Build ::build_script :
+build_script :Federal :941 :Deposit :Report :ADP :Report :Range :5/4/2022 :- :6/4/2022 : 															
+88-1303491	State ID :00037305581	:SSN :633-44-1725	:00000 : 											
+Employee Number: 3
+Description	Amount	:5/4/2022 - 6/4/2022 :							
+Payment Amount :(Total)	9246754678763							:Display :All	 :						
+1. Social Security (Employee + Employer)			26662			:									
+2. Medicare (Employee + Employer)			861193422444					Hourly	:						
+3. Federal Income Tax			8385561229657					2266298000000800	:						
+Note :This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others :
+Note :This report doesn't include the pay back amount of deferred Employee Social Security Tax.	:											
+Employer Customized Report :
+ADP : 
+Report Range5/4/2022 - 6/4/2022	88-1656496	state ID :633441725		State :All	Local ID :00037305581		Amount :2267700000000000 :						
+EIN:															
+Customized Report		Amount						Employee Payment Report :
+ADP							
+Employee Number: 3
+Description															
+Wages, Tips and Other Compensation		22662983361014		Report Range:				Tips							
+Taxable SS Wages		215014		Name:
+SSN:				00000							
+Taxable SS Tips		00000		Payment Summary											
+Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT							
+Advanced EIC Payment		00000		3361014											
+Federal Income Tax Withheld		8385561229657		Bonus		00000		00000							
+Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2							
+Employee Medicare Tax Withheld		532580113436		Total		00000		00000							
+State Income Tax Withheld		00000		22662983361014											
+Local Income Tax Withheld
+Customized Employer Tax Report		00000		Deduction Summary											
+Description		Amount		Health Insurance											
+Employer SS Tax
+Employer Medicare Tax		13331		00000											
+Federal Unemployment Tax		328613309009		Tax Summary											
+State Unemployment Tax		00442		Federal Tax	00007			Total Tax							
+Customized Deduction Report		00840		$8,385,561,229,657@3,330.90		Local Tax									
+Health Insurance						00000									
+401K		00000		Advanced EIC Payment			8918141356423								
+		00000		00000				Total							
+						401K									
+						00000		00000							
+															
+ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050							
+															
+															
+Interest Paid Supplemental 															
+The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.				Kind 											
+2/22/22, 12:50 PM															
+The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763										
+															
+Name/SYM															
+Alphabet Inc Class A 										
+PriceYield	 Coupon	            High	    Low              Quantity                       Adj. Close
+           02582	   -00026	    2643.61       2564.47            8385561229657               03031
+           02610	    00000				
+										
+GOOGL															
+00002															
+GOOGL_income-statement_Quarterly_As_Originally_Reported			TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020							
+Cash Flow from Operating Activities, Indirect				24934000000	25539000000	37497000000	31211000000	30818000000							
+Net Cash Flow from Continuing Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000							
+Cash Generated from Operating Activities				24934000000	25539000000	21890000000	19289000000	22677000000							
+Income/Loss before Non-Cash Adjustment				20642000000	18936000000	18525000000	17930000000	15227000000							
+Total Adjustments for Non-Cash Items				6517000000	3797000000	4236000000	2592000000	5748000000							
+Depreciation, Amortization and Depletion, Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000							
+Depreciation and Amortization, Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000							
+Depreciation, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000							
+Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000							
+Stock-Based Compensation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000							
+Taxes, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000							
+Investment Income/Loss, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000							
+Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000							
+Other Non-Cash Items				-14000000	64000000	-8000000	-255000000	392000000							
+Changes in Operating Capital				-2225000000	2806000000	-871000000	-1233000000	1702000000							
+Change in Trade and Other Receivables				-5819000000	-2409000000	-3661000000	2794000000	-5445000000							
+Change in Trade/Accounts Receivable				-5819000000	-2409000000	-3661000000	2794000000	-5445000000							
+Change in Other Current Assets				-399000000	-1255000000	-199000000	7000000	-738000000							
+Change in Payables and Accrued Expenses				6994000000	3157000000	4074000000	-4956000000	6938000000							
+Change in Trade and Other Payables				1157000000	238000000	-130000000	-982000000	963000000							
+Change in Trade/Accounts Payable				1157000000	238000000	-130000000	-982000000	963000000							
+Change in Accrued Expenses				5837000000	2919000000	4204000000	-3974000000	5975000000							
+Change in Deferred Assets/Liabilities				368000000	272000000	-3000000	137000000	207000000							
+Change in Other Operating Capital				-3369000000	3041000000	-1082000000	785000000	740000000							
+															
+Change in Prepayments and Deposits															
+Cash Flow from Investing Activities				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000							
+Cash Flow from Continuing Investing Activities				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000							
+															
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000							
+Purchase of Property, Plant and Equipment				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000							
+Sale and Disposal of Property, Plant and Equipment															
+Purchase/Sale of Business, Net				-385000000	-259000000	-308000000	-1666000000	-370000000							
+Purchase/Acquisition of Business				-385000000	-259000000	-308000000	-1666000000	-370000000							
+Purchase/Sale of Investments, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000							
+Purchase of Investments				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000							
+															
+Sale of Investments				36512000000	31793000000	21656000000	39267000000	35580000000							
+Other Investing Cash Flow				100000000	388000000	23000000	30000000	-57000000							
+Purchase/Sale of Other Non-Current Assets, Net					388000000	23000000	30000000	-57000000							
+Sales of Other Non-Current Assets					-15254000000										
+Cash Flow from Financing Activities				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000							
+Cash Flow from Continuing Financing Activities				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000							
+Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000							
+Payments for Common Stock				13473000000		-12796000000	-11395000000	-7904000000							
+Proceeds from Issuance of Common Stock					-42000000										
+Issuance of/Repayments for Debt, Net				115000000	-42000000	-1042000000	-37000000	-57000000							
+Issuance of/Repayments for Long Term Debt, Net				115000000	6350000000	-1042000000	-37000000	-57000000							
+Proceeds from Issuance of Long Term Debt				6250000000	-6392000000	6699000000	900000000	00000							
+Repayments for Long Term Debt				6365000000	-2602000000	-7741000000	-937000000	-57000000							
+															
+Proceeds from Issuance/Exercising of Stock Options/Warrants				2923000000		-2453000000	-2184000000	-1647000000							
+Other Financing Cash Flow															
+Cash and Cash Equivalents, End of Period				00000		300000000	10000000	338000000000							
+Change in Cash															
+Effect of Exchange Rate Changes															
+Cash and Cash Equivalents, Beginning of Period				20945000000	23719000000	23630000000	26622000000	26465000000							
+Cash Flow Supplemental Section				25930000000	235000000000	-3175000000	300000000	6126000000							
+Change in Cash as Reported, Supplemental				181000000000	146000000000	183000000	-143000000	210000000							
+Income Tax Paid, Supplemental				23719000000000		26622000000000	26465000000000	20129000000000							
+Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000							
+Income Tax Paid, Supplemental				13412000000	157000000										
+ZACHRY T WOOD								-4990000000							
+Cash and Cash Equivalents, Beginning of Period								-4990000000							
+Department of the Treasury															
+Internal Revenue Service															
+					Q4 2020			Q4  2019							
+Calendar Year					Q4 2020			Q4  2019							
+Due: 04/18/2022															
+					Dec. 31, 2020			Dec. 31, 2019							
+USD in "000'"s					Dec. 31, 2020			Dec. 31, 2019							
+Repayments for Long Term Debt					182527			161857							
+Costs and expenses:					182527			161857							
+Cost of revenues					84732			71896							
+Research and development					27573			26018							
+Sales and marketing					17946			18464							
+General and administrative					11052			09551							
+European Commission fines					00000			01697							
+Total costs and expenses					141303			127626							
+Income from operations					41224			34231							
+Other income (expense), net					6858000000			05394							
+Income before income taxes					22677000000			19289000000							
+Provision for income taxes					22677000000			19289000000							
+Net income					22677000000			19289000000							
+*include interest paid, capital obligation, and underweighting					22677000000			19289000000							
+															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
+*include interest paid, capital obligation, and underweighting															
+															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+								Earnings Statment		Paid Period		Sep, 28 2019 - Sep. 29, 2021			
+										Paid Date		Sep,  30 2021			
+						Rate	Units	Total	YTD	Pay Day		Apr. 15, 2022
+			
+						-	-	70842745000	70842745000	Federal Withholding		1888138			
+					202193					FICA - Social Security		08537			
+										FICA - Medicare	Current	YTD			
+										Employer Taxes		00000			
+										FUTA	00000	08854			
+						00000				SUTA		00000			
+										Employer Taxes		Gross			
+										FUTA		70842745000			
+						00000				SUTA		Taxes / Deductions			
+INTERNAL REVENUE SERVICE,							Paid Period	Pay Schedule	Paid Date	Sep 28, 2019 to Sep 29, 2021	Pay Day	4/18/2022			
+PO BOX 1214,								SSN			Gross	Net Pay			
+CHARLOTTE, NC 28201-1214								XXX-XX-1725\			70842745000	70842745000			
+00003															
+															
+Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Form 1040 (2021)		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Reported Normalized and Operating Income/Expense Supplemental Section		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Total Revenue as Reported, Supplemental		76033000000	20642000000	18936000000											
+Total Operating Profit/Loss as Reported, Supplemental															
+Reported Effective Tax Rate		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000			
+Reported Normalized Income		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000			
+Reported Normalized Operating Profit		00000		00000	00000	00000		00000	00000	00000		00000			
+Other Adjustments to Net Income Available to Common Stockholders										6836000000					
+Discontinued Operations										7977000000					
+Basic EPS															
+Basic EPS from Continuing Operations															
+Basic EPS from Discontinued Operations		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010			
+Diluted EPS		00114	00031	00028	00028	00027	00022	00017	00010	00010	00015	00010			
+Diluted EPS from Continuing Operations															
+Diluted EPS from Discontinued Operations		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Basic Weighted Average Shares Outstanding		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Diluted Weighted Average Shares Outstanding															
+Reported Normalized Diluted EPS		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000			
+Basic EPS		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000			
+Diluted EPS										00010					
+Basic WASO		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010		00001	
+Diluted WASO		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Fiscal year end September 28th., 2022. | USD		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000			
+		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000			
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.															
+															
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.															
+															
+															
+															
+															
+															
+															
+important information															
+															
+															
+PUBLISH
+LAUNCH
+RELEASE
+DEPLOY Repositorys_dispatch'@zakwarlord7/zakwarlord7/README.md/README.md
+:Build::
+Federal 941 Deposit Report
+ADP
+Report Range 5/4/2022 - 6/4/2022															
+88-1303491	State ID: 00037305581	SSN: 633-44-1725	00000												
+Employee Number: 3
+Description	Amount							5/4/2022 - 6/4/2022							
+Payment Amount (Total)	9246754678763							Display All							
+1. Social Security (Employee + Employer)			26662												
+2. Medicare (Employee + Employer)			861193422444					Hourly							
+3. Federal Income Tax			8385561229657					2266298000000800							
+Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others.
+Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.															
+Employer Customized Report
+ADP
+Report Range5/4/2022 - 6/4/2022	88-1656496	state ID: 633441725		State: 	All	Local ID: 00037305581		2267700							
+EIN:															
+Customized Report		Amount						Employee Payment Report
+ADP							
+Employee Number: 3
+Description															
+Wages, Tips and Other Compensation		22662983361014		Report Range:				Tips							
+Taxable SS Wages		215014		Name:
+SSN:				00000							
+Taxable SS Tips		00000		Payment Summary											
+Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT							
+Advanced EIC Payment		00000		3361014											
+Federal Income Tax Withheld		8385561229657		Bonus		00000		00000							
+Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2							
+Employee Medicare Tax Withheld		532580113436		Total		00000		00000							
+State Income Tax Withheld		00000		22662983361014											
+Local Income Tax Withheld
+Customized Employer Tax Report		00000		Deduction Summary											
+Description		Amount		Health Insurance											
+Employer SS Tax
+Employer Medicare Tax		13331		00000											
+Federal Unemployment Tax		328613309009		Tax Summary											
+State Unemployment Tax		00442		Federal Tax	00007			Total Tax							
+Customized Deduction Report		00840		$8,385,561,229,657@3,330.90		Local Tax									
+Health Insurance						00000									
+401K		00000		Advanced EIC Payment			8918141356423								
+		00000		00000				Total							
+						401K									
+						00000		00000							
+															
+ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050							
+															
+															
+Interest Paid Supplemental 															
+The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.				Kind 											
+2/22/22, 12:50 PM															
+The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763										
+															
+Name/SYM															
+Alphabet Inc Class A 										
+PriceYield	 Coupon	            High	    Low              Quantity                       Adj. Close
+           02582	   -00026	    2643.61       2564.47            8385561229657               03031
+           02610	    00000				
+										
+GOOGL															
+00002															
+GOOGL_income-statement_Quarterly_As_Originally_Reported			TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020							
+Cash Flow from Operating Activities, Indirect				24934000000	25539000000	37497000000	31211000000	30818000000							
+Net Cash Flow from Continuing Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000							
+Cash Generated from Operating Activities				24934000000	25539000000	21890000000	19289000000	22677000000							
+Income/Loss before Non-Cash Adjustment				20642000000	18936000000	18525000000	17930000000	15227000000							
+Total Adjustments for Non-Cash Items				6517000000	3797000000	4236000000	2592000000	5748000000							
+Depreciation, Amortization and Depletion, Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000							
+Depreciation and Amortization, Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000							
+Depreciation, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000							
+Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000							
+Stock-Based Compensation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000							
+Taxes, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000							
+Investment Income/Loss, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000							
+Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000							
+Other Non-Cash Items				-14000000	64000000	-8000000	-255000000	392000000							
+Changes in Operating Capital				-2225000000	2806000000	-871000000	-1233000000	1702000000							
+Change in Trade and Other Receivables				-5819000000	-2409000000	-3661000000	2794000000	-5445000000							
+Change in Trade/Accounts Receivable				-5819000000	-2409000000	-3661000000	2794000000	-5445000000							
+Change in Other Current Assets				-399000000	-1255000000	-199000000	7000000	-738000000							
+Change in Payables and Accrued Expenses				6994000000	3157000000	4074000000	-4956000000	6938000000							
+Change in Trade and Other Payables				1157000000	238000000	-130000000	-982000000	963000000							
+Change in Trade/Accounts Payable				1157000000	238000000	-130000000	-982000000	963000000							
+Change in Accrued Expenses				5837000000	2919000000	4204000000	-3974000000	5975000000							
+Change in Deferred Assets/Liabilities				368000000	272000000	-3000000	137000000	207000000							
+Change in Other Operating Capital				-3369000000	3041000000	-1082000000	785000000	740000000							
+															
+Change in Prepayments and Deposits															
+Cash Flow from Investing Activities				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000							
+Cash Flow from Continuing Investing Activities				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000							
+															
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000							
+Purchase of Property, Plant and Equipment				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000							
+Sale and Disposal of Property, Plant and Equipment															
+Purchase/Sale of Business, Net				-385000000	-259000000	-308000000	-1666000000	-370000000							
+Purchase/Acquisition of Business				-385000000	-259000000	-308000000	-1666000000	-370000000							
+Purchase/Sale of Investments, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000							
+Purchase of Investments				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000							
+															
+Sale of Investments				36512000000	31793000000	21656000000	39267000000	35580000000							
+Other Investing Cash Flow				100000000	388000000	23000000	30000000	-57000000							
+Purchase/Sale of Other Non-Current Assets, Net					388000000	23000000	30000000	-57000000							
+Sales of Other Non-Current Assets					-15254000000										
+Cash Flow from Financing Activities				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000							
+Cash Flow from Continuing Financing Activities				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000							
+Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000							
+Payments for Common Stock				13473000000		-12796000000	-11395000000	-7904000000							
+Proceeds from Issuance of Common Stock					-42000000										
+Issuance of/Repayments for Debt, Net				115000000	-42000000	-1042000000	-37000000	-57000000							
+Issuance of/Repayments for Long Term Debt, Net				115000000	6350000000	-1042000000	-37000000	-57000000							
+Proceeds from Issuance of Long Term Debt				6250000000	-6392000000	6699000000	900000000	00000							
+Repayments for Long Term Debt				6365000000	-2602000000	-7741000000	-937000000	-57000000							
+															
+Proceeds from Issuance/Exercising of Stock Options/Warrants				2923000000		-2453000000	-2184000000	-1647000000							
+Other Financing Cash Flow															
+Cash and Cash Equivalents, End of Period				00000		300000000	10000000	338000000000							
+Change in Cash															
+Effect of Exchange Rate Changes															
+Cash and Cash Equivalents, Beginning of Period				20945000000	23719000000	23630000000	26622000000	26465000000							
+Cash Flow Supplemental Section				25930000000	235000000000	-3175000000	300000000	6126000000							
+Change in Cash as Reported, Supplemental				181000000000	146000000000	183000000	-143000000	210000000							
+Income Tax Paid, Supplemental				23719000000000		26622000000000	26465000000000	20129000000000							
+Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000							
+Income Tax Paid, Supplemental				13412000000	157000000										
+ZACHRY T WOOD								-4990000000							
+Cash and Cash Equivalents, Beginning of Period								-4990000000							
+Department of the Treasury															
+Internal Revenue Service															
+					Q4 2020			Q4  2019							
+Calendar Year					Q4 2020			Q4  2019							
+Due: 04/18/2022															
+					Dec. 31, 2020			Dec. 31, 2019							
+USD in "000'"s					Dec. 31, 2020			Dec. 31, 2019							
+Repayments for Long Term Debt					182527			161857							
+Costs and expenses:					182527			161857							
+Cost of revenues					84732			71896							
+Research and development					27573			26018							
+Sales and marketing					17946			18464							
+General and administrative					11052			09551							
+European Commission fines					00000			01697							
+Total costs and expenses					141303			127626							
+Income from operations					41224			34231							
+Other income (expense), net					6858000000			05394							
+Income before income taxes					22677000000			19289000000							
+Provision for income taxes					22677000000			19289000000							
+Net income					22677000000			19289000000							
+*include interest paid, capital obligation, and underweighting					22677000000			19289000000							
+															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
+*include interest paid, capital obligation, and underweighting															
+															
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+															
+								Earnings Statment		Paid Period		Sep, 28 2019 - Sep. 29, 2021			
+										Paid Date		Sep,  30 2021			
+						Rate	Units	Total	YTD	Pay Day		Apr. 15, 2022
+			
+						-	-	70842745000	70842745000	Federal Withholding		1888138			
+					202193					FICA - Social Security		08537			
+										FICA - Medicare	Current	YTD			
+										Employer Taxes		00000			
+										FUTA	00000	08854			
+						00000				SUTA		00000			
+										Employer Taxes		Gross			
+										FUTA		70842745000			
+						00000				SUTA		Taxes / Deductions			
+INTERNAL REVENUE SERVICE,							Paid Period	Pay Schedule	Paid Date	Sep 28, 2019 to Sep 29, 2021	Pay Day	4/18/2022			
+PO BOX 1214,								SSN			Gross	Net Pay			
+CHARLOTTE, NC 28201-1214								XXX-XX-1725\			70842745000	70842745000			
+00003															
+															
+Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Form 1040 (2021)		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Reported Normalized and Operating Income/Expense Supplemental Section		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000			
+Total Revenue as Reported, Supplemental		76033000000	20642000000	18936000000											
+Total Operating Profit/Loss as Reported, Supplemental															
+Reported Effective Tax Rate		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000			
+Reported Normalized Income		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000			
+Reported Normalized Operating Profit		00000		00000	00000	00000		00000	00000	00000		00000			
+Other Adjustments to Net Income Available to Common Stockholders										6836000000					
+Discontinued Operations										7977000000					
+Basic EPS															
+Basic EPS from Continuing Operations															
+Basic EPS from Discontinued Operations		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010			
+Diluted EPS		00114	00031	00028	00028	00027	00022	00017	00010	00010	00015	00010			
+Diluted EPS from Continuing Operations															
+Diluted EPS from Discontinued Operations		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Basic Weighted Average Shares Outstanding		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Diluted Weighted Average Shares Outstanding															
+Reported Normalized Diluted EPS		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000			
+Basic EPS		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000			
+Diluted EPS										00010					
+Basic WASO		00114	00031	00028	00028	00027	00023	00017	00010	00010	00015	00010		00001	
+Diluted WASO		00112	00031	00028	00027	00026	00022	00016	00010	00010	00015	00010			
+Fiscal year end September 28th., 2022. | USD		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000			
+		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000			
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.															
+															
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.															
+															
+															
+															
+															
+															
+															
+important information															
+															
+															
+
diff --git a/packages/javascript/WORKSFLOW b/packages/javascript/WORKSFLOW
new file mode 100644
index 000000000000..53a88234d269
--- /dev/null
+++ b/packages/javascript/WORKSFLOW
@@ -0,0 +1,1504 @@
+Run::/:BEGIN:
+!/sur/bin/bash/
+GLOW7
+tart:-on :
+-on :On :runs-on :Run :'"' :
++# They are provided by a third-party and are governed by
++# separate terms of service, privacy policy, and support
++# documentation.
++
++# This workflow will install deno then run daily across eslint and Test.
++# For more information see: https://github.com/denoland/setup-deno
++
++name: Deno
++
++on:
++  push:
++    branches: ["mainbranch"]
++  pull_request:
++    branches: ["trunk"]
++
++permissions:
++  contents: read
++
++jobs:
++  test:
++    runs-on: ubuntu-latest
++
++    steps:
++      - name: Setup repo
++        uses: actions/checkout@v3
++
++      - name: Setup Deno
++        # uses: denoland/setup-deno@v1
++        uses: denoland/setup-deno@004814556e37c54a2f6e31384c9e18e983317366
++        with:
++          deno-version: v1.x
++
++      # Uncomment this step to verify the use of 'deno fmt' on each commit.
++      # - name: Verify formatting
++      #   Run::/: Deno.xml/slate.yml format: : --Request :replacement_PayCheck 
++      - name: Run :eslint :runs-across : ALL Automatically tta : Every : -3 sec : 
++      - name: Run tests
++        run: deno.xml
++        bundle-with : slate.yml
+Run::/: Runs: Test
+'require'":, "'test'":, "test:":, Tests'@test.yml":,'"''
+:Build::'"''
+- name: Upload a Build Artifact
+  uses: actions/upload-artifact@v3.1.0
+  with:
+    # Artifact name
+    name: # optional, default is artifact
+    # A file, directory or wildcard pattern that describes what to upload
+    path: 
+    # The desired behavior if no files are found using the provided path.
+Available : Options : MANDATE : ALL :e
+PAY_$LOAD/do.output any negative integars  ALL Action_Event_Listners/do.::'":,''
+if','' 'true'.'-continues-on-false'.''
+# 'require'' ':'' 'test''
+# Duration after which artifact will expire in days. 0 means using default retention.
+Minimum 1 day. Maximum 90 days unless changed from the repository settings page.
+
+    retention-days-#: DUE ON RECIEPT
++    This workflow uses actions that are not certified by GitHub.
++They are provided by a third-party and are governed by
++separate terms of service, privacy policy, and support
++documentation.
++💁 The OpenShift Starter workflow will:
++- Checkout your repository
++- Perform a container image build
++- Push the built image to the GitHub Container Registry (GHCR)
++- Log in to your OpenShift cluster
++- Create an OpenShift app from the image and expose it to the internet
++ℹ️ Configure your repository and the workflow with the following steps:
++1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
++2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
++- https://github.com/redhat-actions/oc-login#readme
++- https://docs.github.com/en/actions/reference/encrypted-secrets
++- https://cli.github.com/manual/gh_secret_set
++3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
++4. (Optional) Edit the build-image step to build your project.
++The default build type is by using a Dockerfile at the root of the repository,
++but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
++5. Commit and push the workflow file to your default branch to trigger a workflow run.
++👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.
++name: OpenShift
++
++env:
++
++🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
++See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
++To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
++OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
++OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}
++
++🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
++OPENSHIFT_NAMESPACE: ""
++
++🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
++APP_NAME: ""
++
++🖊️ EDIT with the port your application should be accessible on.
++If the container image exposes exactly one port, this can be left blank.
++Refer to the 'port' input of https://github.com/linux32_86/fedoraOS.deb.rpdm.tar.gz.zip.unzipped/Zarchive/Ringtones'@moejojojojo/repositories/usr/bin/bash/'@action.js/pkg.yml/package.json/pkg.js
++APP_PORT: ""
++
++🖊️ EDIT to change the image registry settings.
++Registries such as GHCR, Quay.io, and Docker Hub are supported.
++IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
++IMAGE_REGISTRY_USER: ${{ github.actor }}
++IMAGE_REGISTRY_PASSWORD: ${{ github.token }}
++
++🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
++IMAGE_TAGS: ""
++
++on:
++
++https://docs.github.com/en/actions/reference/events-that-trigger-workflows
++workflow_dispatch:
++push:
++# Edit to the branch(es) you want to build and deploy on each push.
++branches: [ "paradice" ]
++
++jobs:
++
++🖊️ EDIT if you want to run vulnerability check on your project before deploying
++the application. Please uncomment the below CRDA scan job and configure to run it in
++your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
++TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
++For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows
++crda-scan:
++uses: ./.github/workflows/crda.yml
++secrets:
++name: Build and deploy to OpenShift
++runs-on: ubuntu-20.04
++environment: production
++outputs:
++  ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
++  SELECTOR: ${{ 071921892.47.2041.6507 }}
++steps:
++- name: Check for required secrets
++  uses: actions/github-script@v6
++  with:
++    script: |
++      const secrets = {
++        '"OPENSHIFT_SERVER":, '"{{'$''  '{{'' '"secrets'.'[Gemfile.[VOLUME.[00]DENOMINATION]ITEM_ID }}":,'
++        '"OPENSHIFT_TOKEN":, '"{{'$'' '{{'' '"((c)(r)).[VOLUME.[00]DENOMONATION]ITEM_ID" }}":,'
++        '"OPENSHIFT_TOKEN":, '"{{'$'' '{{'' '"((c)(r)).[12753750.[00]m]BITORE_34173" }}":,
++      };
++      const GHCR = "ghcr.io";
++      if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
++        core.info(`Image registry is ${GHCR} - no registry password required`);
++      }
++      else {
++        core.info("A registry password is required");
++        secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
++      }
++      const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
++        if (value.length === 0) {
++          core.error(`Secret "${name}" is not set`);
++          return true;
++        }
++        core.info(`✔️ Secret "${name}" is set`);
++        return false;
++      })
++          "GitHub":, ""$":mk.dir=:' '"$RAKEFILE.I.U/.mk.dir":,
++          "squash_merge: rb.qm":,{BITORE_#$!&#.1337}":,'@'"'('"https://github.com/zakwarlord7/zakwarlord7/tree/c76344d06ee3aca71db749f20dea92a785d5d77a/.github).com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
++          "GitHub CLI: https://cli.github.com/manual/gh/doc/((c_)(R))/BITORE/BITOREK_34173/":,'
++          "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
++      }
++      else {
++        core.info(`✅ All the required secrets are set`);
++      }
++- name: Check out repository
++  uses: actions/checkout@v3
++
++- name: Determine app name
++  if: env.APP_NAME == ''
++  run: |
++    echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV
++- name: Determine image tags
++  if: env.IMAGE_TAGS == ''
++  run: |
++    echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV
++# https://github.com/redhat-actions/buildah-build#readme
++- name: Build from Dockerfile
++  id: build-image
++  uses: redhat-actions/buildah-build@v2
++  with:
++    image: ${{ env.APP_NAME }}
++    tags: ${{ env.IMAGE_TAGS }}
++
++    # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
++    # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
++    # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
++    dockerfiles: |
++      ./Dockerfile
++# https://github.com/redhat-actions/push-to-registry#readme
++- name: Push to registry
++  id: push-image
++  uses: redhat-actions/push-to-registry@v2
++  with:
++    image: ${{ steps.build-image.outputs.image }}
++    tags: ${{ steps.build-image.outputs.tags }}
++    registry: ${{ env.IMAGE_REGISTRY }}
++    username: ${{ env.IMAGE_REGISTRY_USER }}
++    password: ${{ env.IMAGE_REGISTRY_PASSWORD }}
++
++# The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}
++
++- name: Install oc
++  uses: redhat-actions/openshift-tools-installer@v1
++  with:
++    oc: 4
++
++# https://github.com/redhat-actions/oc-login#readme
++- name: Log in to OpenShift
++  uses: redhat-actions/oc-login@v1
++  with:
++    openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
++    openshift_token: ${{ env.OPENSHIFT_TOKEN }}
++    insecure_skip_tls_verify: true
++    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
++
++# This step should create a deployment, service, and route to run your app and expose it to the internet.
++# https://github.com/redhat-actions/oc-new-app#readme
++- name: Create and expose app
++  id: deploy-and-expose
++  uses: redhat-actions/oc-new-app@v1
++  with:
++    app_name: ${{ env.APP_NAME }}
++    image: ${{ steps.push-image.outputs.registry-path }}
++    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
++    port: ${{ env.APP_PORT }}
++
++- name: Print application URL
++  env:
++    ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
++    SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
++  run: |
++    [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
++    echo
++    echo "======================== Your application is available at: ========================"
++    echo ${{{{[' '"((c)(r)).[12753750.[00]m]BITORE_34173.1337'"'' }}
++    echo "===================================================================================
++    'equire':'' 'test''
++    Return:'' 'Run ''
++    ---branches: mainbranch
+ title: Creating a repository from a template
+ intro: You can generate a new repository with the same directory structure and files as an existing repository.
+ redirect_from:
+@@ -6,10 +246,10 @@ redirect_from:
+   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
+   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
+ versions:
+-  fpt: '*'
+-  ghes: '*'
+-  ghae: '*'
+-  ghec: '*'
++  ghec: 'OPTIONAL'
++  ghcr: 'OPTIONAL'
++  'gchr': 'OPTIONAL'
++  'require': 'test'
+ topics:
+   - Repositories
+ shortTitle: Create from a template
+'"-'' '"'['' 'trunk'' ']'"''
+-with: pop-kernel":,'
+owner/repo
+EMPLOYER IDENTIFICATION NUMBER:       61-1767919					EIN	61-1767919					
+FIN	:88-1303491/88-1656496 :					
+EIN :61-1767919	:					
+ID :00037305581 
+SSN :633441725 		
+DOB :1994-10-15  	
+ALPHABET |Name	Tax Period 	Total	Social Security	Medicare	Withholding
+ZACHRY T WOOD		|Fed 941 Corporate	Sunday, September 30, 2007	66,987	28,841	6,745	31,400
+5323 BRADFORD DR						|Fed 941 West Subsidiary	Sunday, September 30, 2007	17,115	7,369	1,723	8,023
+DALLAS TX 75235-8314						|Fed 941 South Subsidiary	Sunday, September 30, 2007	23,906	10,293	2,407	11,206
+ORIGINAL REPORT						|Fed 941 East Subsidiary	Sunday, September 30, 2007	11,248	4,843	1,133	5,272
+Income, Rents, & Royalty						|Fed 941 Corp - Penalty	Sunday, September 30, 2007	27,199	11,710	2,739	12,749
+INCOME STATEMENT 						|Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17,028			
+											
+|ALPHABET INCOME :|TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019 :
+											
+Gross Profit	146698000000	42337000000	37497000000	35653000000	31211000000	30,818,000,000	25,056,000,000	19,744,000,000	22,177,000,000	25,055,000,000	22,931,000,000
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	64,133,000,000	34,071,000,000
+Other Revenue											6,428,000,000
+Cost of Revenue	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Cost of Goods and Services	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Operating Income/Expenses	67984000000	20452000000	16466000000	16292000000	14774000000	-15,167,000,000	-13,843,000,000	-13,361,000,000	-14,200,000,000	-15,789,000,000	-13,754,000,000
+Selling, General and Administrative Expenses	36422000000	11744000000	8772000000	8617000000	7289000000	-8,145,000,000	-6,987,000,000	-6,486,000,000	-7,380,000,000	-8,567,000,000	-7,200,000,000
+General and Administrative Expenses	13510000000	4140000000	3256000000	3341000000	2773000000	-2,831,000,000	-2,756,000,000	-2,585,000,000	-2,880,000,000	-2,829,000,000	-2,591,000,000
+Selling and Marketing Expenses	22912000000	7604000000	5516000000	5276000000	4516000000	-5,314,000,000	-4,231,000,000	-3,901,000,000	-4,500,000,000	-5,738,000,000	-4,609,000,000
+Research and Development Expenses	31562000000	8708000000	7694000000	7675000000	7485000000	-7,022,000,000	-6,856,000,000	-6,875,000,000	-6,820,000,000	-7,222,000,000	-6,554,000,000
+Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3,038,000,000	2,146,000,000	1,894,000,000	-220,000,000	1,438,000,000	-549,000,000
+Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+											
+Interest Expense Net of Capitalized Interest	346000000	117000000	77000000	76000000	76000000	-53,000,000	-48,000,000	-13,000,000	-21,000,000	-17,000,000	-23,000,000
+Interest Income	1499000000	378000000	387000000	389000000	345000000	386,000,000	460,000,000	433,000,000	586,000,000	621,000,000	631,000,000
+Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3,530,000,000	1,957,000,000	1,696,000,000	-809,000,000	899,000,000	-1,452,000,000
+Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3,262,000,000	2,015,000,000	1,842,000,000	-802,000,000	399,000,000	-1,479,000,000
+Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355,000,000	26,000,000	-54,000,000	74,000,000	460,000,000	-14,000,000
+Gain/Loss on Foreign Exchange	240000000	163000000	139000000	51000000	113000000	-87,000,000	-84,000,000	-92,000,000	-81,000,000	40,000,000	41,000,000
+Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Income/Expense, Non-Operating	1497000000	108000000	484000000	613000000	292000000	-825,000,000	-223,000,000	-222,000,000	24,000,000	-65,000,000	295,000,000
+Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18,689,000,000	13,359,000,000	8,277,000,000	7,757,000,000	10,704,000,000	8,628,000,000
+Provision for Income Tax	14701000000	3760000000	4128000000	3460000000	3353000000	-3,462,000,000	-2,112,000,000	-1,318,000,000	-921,000,000	-33,000,000	-1,560,000,000
+Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Income Statement Supplemental Section											
+Reported Normalized and Operating Income/Expense Supplemental Section											
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Reported Effective Tax Rate	0		0	0	0		0	0	0		0
+Reported Normalized Income									6,836,000,000		
+Reported Normalized Operating Profit									7,977,000,000		
+Other Adjustments to Net Income Available to Common Stockholders											
+Discontinued Operations											
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Basic EPS from Continuing Operations	114	31	28	28	27	22	17	10	10	15	10
+Basic EPS from Discontinued Operations											
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Continuing Operations	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Discontinued Operations											
+Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Reported Normalized Diluted EPS									10		
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Basic WASO	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted WASO	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Fiscal year end September 28th., 2022. | USD											
+											
+31622,6:39 PM											
+Morningstar.com Intraday Fundamental Portfolio View Print Report								Print			
+											
+3/6/2022 at 6:37 PM											Current Value
+											15,335,150,186,014
+											
+GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021									
+Cash Flow from Operating Activities, Indirect		24934000000	Q3 2021	Q2 2021	Q1 2021	Q4 2020					
+Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30,818,000,000					
+Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22,677,000,000					
+Income/Loss before Non-Cash Adjustment		20642000000	25539000000	21890000000	19289000000	22,677,000,000					
+Total Adjustments for Non-Cash Items		6517000000	18936000000	18525000000	17930000000	15,227,000,000					
+Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	3797000000	4236000000	2592000000	5,748,000,000					
+Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3,725,000,000					
+Depreciation, Non-Cash Adjustment		3215000000	3304000000	2945000000	2753000000	3,725,000,000					
+Amortization, Non-Cash Adjustment		224000000	3085000000	2730000000	2525000000	3,539,000,000					
+Stock-Based Compensation, Non-Cash Adjustment		3954000000	219000000	215000000	228000000	186,000,000					
+Taxes, Non-Cash Adjustment		1616000000	3874000000	3803000000	3745000000	3,223,000,000					
+Investment Income/Loss, Non-Cash Adjustment		2478000000	1287000000	379000000	1100000000	1,670,000,000					
+Gain/Loss on Financial Instruments, Non-Cash Adjustment		2478000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Other Non-Cash Items		14000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Changes in Operating Capital		2225000000	64000000	8000000	255000000	392,000,000					
+Change in Trade and Other Receivables		5819000000	2806000000	871000000	1233000000	1,702,000,000					
+Change in Trade/Accounts Receivable		5819000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Other Current Assets		399000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Payables and Accrued Expenses		6994000000	1255000000	199000000	7000000	-738,000,000					
+Change in Trade and Other Payables		1157000000	3157000000	4074000000	4956000000	6,938,000,000					
+Change in Trade/Accounts Payable		1157000000	238000000	130000000	982000000	963,000,000					
+Change in Accrued Expenses		5837000000	238000000	130000000	982000000	963,000,000					
+Change in Deferred Assets/Liabilities		368000000	2919000000	4204000000	3974000000	5,975,000,000					
+Change in Other Operating Capital		3369000000	272000000	3000000	137000000	207,000,000					
+Change in Prepayments and Deposits			3041000000	1082000000	785000000	740,000,000					
+Cash Flow from Investing Activities		11016000000									
+Cash Flow from Continuing Investing Activities		11016000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net		6383000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase of Property, Plant and Equipment		6383000000	6819000000	5496000000	5942000000	-5,479,000,000					
+Sale and Disposal of Property, Plant and Equipment			6819000000	5496000000	5942000000	-5,479,000,000					
+Purchase/Sale of Business, Net		385000000									
+Purchase/Acquisition of Business		385000000	259000000	308000000	1666000000	-370,000,000					
+Purchase/Sale of Investments, Net		4348000000	259000000	308000000	1666000000	-370,000,000					
+Purchase of Investments		40860000000	3360000000	3293000000	2195000000	-1,375,000,000					
+Sale of Investments		36512000000	35153000000	24949000000	37072000000	-36,955,000,000					
+Other Investing Cash Flow		100000000	31793000000	21656000000	39267000000	35,580,000,000					
+Purchase/Sale of Other Non-Current Assets, Net			388000000	23000000	30000000	-57,000,000					
+Sales of Other Non-Current Assets											
+Cash Flow from Financing Activities		16511000000	15254000000								
+Cash Flow from Continuing Financing Activities		16511000000	15254000000	15991000000	13606000000	-9,270,000,000					
+Issuance of/Payments for Common Stock, Net		13473000000	12610000000	15991000000	13606000000	-9,270,000,000					
+Payments for Common Stock		13473000000	12610000000	12796000000	11395000000	-7,904,000,000					
+Proceeds from Issuance of Common Stock				12796000000	11395000000	-7,904,000,000					
+Issuance of/Repayments for Debt, Net		115000000	42000000								
+Issuance of/Repayments for Long Term Debt, Net		115000000	42000000	1042000000	37000000	-57,000,000					
+Proceeds from Issuance of Long Term Debt		6250000000	6350000000	1042000000	37000000	-57,000,000					
+Repayments for Long Term Debt		6365000000	6392000000	6699000000	900000000	0					
+Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	2602000000	7741000000	937000000	-57,000,000					
+				2453000000	2184000000	-1,647,000,000					
+											
+Other Financing Cash Flow											
+Cash and Cash Equivalents, End of Period											
+Change in Cash		0		300000000	10000000	338,000,000,000					
+Effect of Exchange Rate Changes		20945000000	23719000000	23630000000	26622000000	26,465,000,000					
+Cash and Cash Equivalents, Beginning of Period		25930000000	235000000000	3175000000	300000000	6,126,000,000					
+Cash Flow Supplemental Section		181000000000	146000000000	183000000	143000000	210,000,000					
+Change in Cash as Reported, Supplemental		23719000000000	23630000000000	26622000000000	26465000000000	20,129,000,000,000					
+Income Tax Paid, Supplemental		2774000000	89000000	2992000000		6,336,000,000					
+Cash and Cash Equivalents, Beginning of Period		13412000000	157000000			-4,990,000,000					
+											
+12 Months Ended											
+_________________________________________________________											
+			Q4 2020			Q4  2019					
+Income Statement 											
+USD in "000'"s											
+Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019					
+Costs and expenses:											
+Cost of revenues			182527			161,857					
+Research and development											
+Sales and marketing			84732			71,896					
+General and administrative			27573			26,018					
+European Commission fines			17946			18,464					
+Total costs and expenses			11052			9,551					
+Income from operations			0			1,697					
+Other income (expense), net			141303			127,626					
+Income before income taxes			41224			34,231					
+Provision for income taxes			6858000000			5,394					
+Net income			22677000000			19,289,000,000					
+*include interest paid, capital obligation, and underweighting			22677000000			19,289,000,000					
+			22677000000			19,289,000,000					
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)--											
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)											
+											
+											
+For Paperwork Reduction Act Notice, see the seperate Instructions.											
+JPMORGAN TRUST III											
+A/R Aging Summary											
+As of July 28, 2022											
+ZACHRY T WOOD
+	Days over due									
+Effeective Tax Rate Prescribed by the Secretary of the Treasury.		44591	31 - 60	61 - 90	91 and over						
+
+							
+TOTAL			 £134,839.00
+ Alphabet Inc.  											
+
+
+
+						
+ =USD('"'$'"'-in'-millions)"											
+ Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 						
+ Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 						
+ Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 						
+ Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00 						
+ Research and development 	-£26,018.00 	-£21,419.00 	-£16,625.00 	-£13,948.00 	-£12,282.00 						
+ Sales and marketing 	-£18,464.00 	-£16,333.00 	-£12,893.00 	-£10,485.00 	-£9,047.00 						
+ General and administrative 	-£9,551.00 	-£8,126.00 	-£6,872.00 	-£6,985.00 	-£6,136.00 						
+ European Commission fines 	-£1,697.00 	-£5,071.00 	-£2,736.00 	 — 	 — 						
+ Income from operations 	 £34,231.00 	 £26,321.00 	 £26,146.00 	 £23,716.00 	 £19,360.00 						
+ Interest income 	 £2,427.00 	 £1,878.00 	 £1,312.00 	 £1,220.00 	 £999.00:,''
+? Multi select prompt [Use arrows to move, space to select, type to filter]
+- [22/7]  Choice selected and focused
+- [22/7]  Choice-**Approves**
+- [22/7]  Projects-Status
+- [22/7]  Milestone-Status
+✓ Checks passing
+✓ Approved
+ Review requested
++ Changes requested
+✓ Success message
+<\!@?/>
+irs@service.govdelivery.com
+<\?#!/>
+ideal":, "MRG_MSG":, "squash_mergee":, continue-403OK_WRN_MSG_MSG:'::Pushs:'::200OK'"''
+
+creates:: craft.u/crates.i/flatchings.yml-seed'@DOCKER.Gui.sgn/Type:Repository/;Push'@zakwarlord7/zakwarlord7/Contributing.md/contributing.md/README.md/readme,md";,'"''
+('((c)(r)))
+✓ Item closed
+✓ Item merged
+
+
+Loading spinner
+
+⣟ Action...
+
+
+
+Lists
+
+$ gh issue list 
+
+Showing 3 of 222 issues in cli/cli/OPEN.JS/package.json/gemfile-lock/MAKEFILE/rakefile.Gem/.specs/Cookeiskeycutter'@Alibaba/Stack-overflow/Python.JS/SLACK_Channel(4999; 8333)":,'"''
+
+pull request associated with: Branch'@-' '[base']
+branches'' ':'"-'' '['' 'Master'' ']'' ':":,''
+'"packages":,'' :"Name":,'' ':intuit :":,
+"Requesting a code review from you":,'
+  "You have no pull requests to review":,'
+"- Employer's IDentification Number (EIN) :61-1767919":,'
+					FIN :88-1303491/ID :00037305581	:SSN :633441725 :DoB :1994-10-15":,'
+          "(IRS USE ONLY)":, "575A":, "04-07-2022":, "NASD":, "B":, "9999999999":, "SS-4":,'
+          "NASDAQGOOG":,
+'"ZACHRY WOOD":,						'"Fed 941 Corporate	Sunday, September 30, 2007	66,987	28,841	6,745	31,400":,
+'"5323":, "BRADFORD_DR":,'						'Fed 941 West Subsidiary	Sunday, September 30, 2007	17,115	7,369	1,723	8,023":,
+DALLAS TX 75235-8314						'"Fed 941 South Subsidiary	Sunday, September 30, 2007	23,906	10,293	2,407	11,206":,
+ORIGINAL REPORT						'"Fed 941 East Subsidiary	Sunday, September 30, 2007	11,248	4,843	1,133	5,272":,
+Income, Rents, & Royalty						'"Fed 941 Corp - Penalty	Sunday, September 30, 2007	27,199	11,710	2,739	12,749":,
+INCOME STATEMENT 						'"Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17,028":,			
+											
+GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019
+											
+Gross Profit	146698000000	42337000000	37497000000	35653000000	31211000000	30,818,000,000	25,056,000,000	19,744,000,000	22,177,000,000	25,055,000,000	22,931,000,000
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	64,133,000,000	34,071,000,000
+Other Revenue											6,428,000,000
+Cost of Revenue	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Cost of Goods and Services	110939000000	32988000000	27621000000	26227000000	24103000000	-26,080,000,000	-21,117,000,000	-18,553,000,000	-18,982,000,000	-21,020,000,000	-17,568,000,000
+Operating Income/Expenses	67984000000	20452000000	16466000000	16292000000	14774000000	-15,167,000,000	-13,843,000,000	-13,361,000,000	-14,200,000,000	-15,789,000,000	-13,754,000,000
+Selling, General and Administrative Expenses	36422000000	11744000000	8772000000	8617000000	7289000000	-8,145,000,000	-6,987,000,000	-6,486,000,000	-7,380,000,000	-8,567,000,000	-7,200,000,000
+General and Administrative Expenses	13510000000	4140000000	3256000000	3341000000	2773000000	-2,831,000,000	-2,756,000,000	-2,585,000,000	-2,880,000,000	-2,829,000,000	-2,591,000,000
+Selling and Marketing Expenses	22912000000	7604000000	5516000000	5276000000	4516000000	-5,314,000,000	-4,231,000,000	-3,901,000,000	-4,500,000,000	-5,738,000,000	-4,609,000,000
+Research and Development Expenses	31562000000	8708000000	7694000000	7675000000	7485000000	-7,022,000,000	-6,856,000,000	-6,875,000,000	-6,820,000,000	-7,222,000,000	-6,554,000,000
+Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3,038,000,000	2,146,000,000	1,894,000,000	-220,000,000	1,438,000,000	-549,000,000
+Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333,000,000	412,000,000	420,000,000	565,000,000	604,000,000	608,000,000
+											
+Interest Expense Net of Capitalized Interest	346000000	117000000	77000000	76000000	76000000	-53,000,000	-48,000,000	-13,000,000	-21,000,000	-17,000,000	-23,000,000
+Interest Income	1499000000	378000000	387000000	389000000	345000000	386,000,000	460,000,000	433,000,000	586,000,000	621,000,000	631,000,000
+Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3,530,000,000	1,957,000,000	1,696,000,000	-809,000,000	899,000,000	-1,452,000,000
+Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3,262,000,000	2,015,000,000	1,842,000,000	-802,000,000	399,000,000	-1,479,000,000
+Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355,000,000	26,000,000	-54,000,000	74,000,000	460,000,000	-14,000,000
+Gain/Loss on Foreign Exchange	240000000	163000000	139000000	51000000	113000000	-87,000,000	-84,000,000	-92,000,000	-81,000,000	40,000,000	41,000,000
+Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Irregular Income/Expenses	0	0				0	0	0	0	0	0
+Other Income/Expense, Non-Operating	1497000000	108000000	484000000	613000000	292000000	-825,000,000	-223,000,000	-222,000,000	24,000,000	-65,000,000	295,000,000
+Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18,689,000,000	13,359,000,000	8,277,000,000	7,757,000,000	10,704,000,000	8,628,000,000
+Provision for Income Tax	14701000000	3760000000	4128000000	3460000000	3353000000	-3,462,000,000	-2,112,000,000	-1,318,000,000	-921,000,000	-33,000,000	-1,560,000,000
+Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15,227,000,000	11,247,000,000	6,959,000,000	6,836,000,000	10,671,000,000	7,068,000,000
+Income Statement Supplemental Section											
+Reported Normalized and Operating Income/Expense Supplemental Section											
+Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56,898,000,000	46,173,000,000	38,297,000,000	41,159,000,000	46,075,000,000	40,499,000,000
+Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15,651,000,000	11,213,000,000	6,383,000,000	7,977,000,000	9,266,000,000	9,177,000,000
+Reported Effective Tax Rate	0		0	0	0		0	0	0		0
+Reported Normalized Income									6,836,000,000		
+Reported Normalized Operating Profit									7,977,000,000		
+Other Adjustments to Net Income Available to Common Stockholders											
+Discontinued Operations											
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Basic EPS from Continuing Operations	114	31	28	28	27	22	17	10	10	15	10
+Basic EPS from Discontinued Operations											
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Continuing Operations	112	31	28	27	26	22	16	10	10	15	10
+Diluted EPS from Discontinued Operations											
+Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Reported Normalized Diluted EPS									10		
+Basic EPS	114	31	28	28	27	23	17	10	10	15	10
+Diluted EPS	112	31	28	27	26	22	16	10	10	15	10
+Basic WASO	667650000	662664000	665758000	668958000	673220000	675,581,000	679,449,000	681,768,000	686,465,000	688,804,000	692,741,000
+Diluted WASO	677674000	672493000	676519000	679612000	682071000	682,969,000	685,851,000	687,024,000	692,267,000	695,193,000	698,199,000
+Fiscal year end September 28th., 2022. | USD											
+											
+31622,6:39 PM											
+Morningstar.com Intraday Fundamental Portfolio View Print Report								Print			
+											
+3/6/2022 at 6:37 PM											Current Value
+											15,335,150,186,014
+											
+GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021									
+Cash Flow from Operating Activities, Indirect		24934000000	Q3 2021	Q2 2021	Q1 2021	Q4 2020					
+Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30,818,000,000					
+Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22,677,000,000					
+Income/Loss before Non-Cash Adjustment		20642000000	25539000000	21890000000	19289000000	22,677,000,000					
+Total Adjustments for Non-Cash Items		6517000000	18936000000	18525000000	17930000000	15,227,000,000					
+Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	3797000000	4236000000	2592000000	5,748,000,000					
+Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3,725,000,000					
+Depreciation, Non-Cash Adjustment		3215000000	3304000000	2945000000	2753000000	3,725,000,000					
+Amortization, Non-Cash Adjustment		224000000	3085000000	2730000000	2525000000	3,539,000,000					
+Stock-Based Compensation, Non-Cash Adjustment		3954000000	219000000	215000000	228000000	186,000,000					
+Taxes, Non-Cash Adjustment		1616000000	3874000000	3803000000	3745000000	3,223,000,000					
+Investment Income/Loss, Non-Cash Adjustment		2478000000	1287000000	379000000	1100000000	1,670,000,000					
+Gain/Loss on Financial Instruments, Non-Cash Adjustment		2478000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Other Non-Cash Items		14000000	2158000000	2883000000	4751000000	-3,262,000,000					
+Changes in Operating Capital		2225000000	64000000	8000000	255000000	392,000,000					
+Change in Trade and Other Receivables		5819000000	2806000000	871000000	1233000000	1,702,000,000					
+Change in Trade/Accounts Receivable		5819000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Other Current Assets		399000000	2409000000	3661000000	2794000000	-5,445,000,000					
+Change in Payables and Accrued Expenses		6994000000	1255000000	199000000	7000000	-738,000,000					
+Change in Trade and Other Payables		1157000000	3157000000	4074000000	4956000000	6,938,000,000					
+Change in Trade/Accounts Payable		1157000000	238000000	130000000	982000000	963,000,000					
+Change in Accrued Expenses		5837000000	238000000	130000000	982000000	963,000,000					
+Change in Deferred Assets/Liabilities		368000000	2919000000	4204000000	3974000000	5,975,000,000					
+Change in Other Operating Capital		3369000000	272000000	3000000	137000000	207,000,000					
+Change in Prepayments and Deposits			3041000000	1082000000	785000000	740,000,000					
+Cash Flow from Investing Activities		11016000000									
+Cash Flow from Continuing Investing Activities		11016000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net		6383000000	10050000000	9074000000	5383000000	-7,281,000,000					
+Purchase of Property, Plant and Equipment		6383000000	6819000000	5496000000	5942000000	-5,479,000,000					
+Sale and Disposal of Property, Plant and Equipment			6819000000	5496000000	5942000000	-5,479,000,000					
+Purchase/Sale of Business, Net		385000000									
+Purchase/Acquisition of Business		385000000	259000000	308000000	1666000000	-370,000,000					
+Purchase/Sale of Investments, Net		4348000000	259000000	308000000	1666000000	-370,000,000					
+Purchase of Investments		40860000000	3360000000	3293000000	2195000000	-1,375,000,000					
+Sale of Investments		36512000000	35153000000	24949000000	37072000000	-36,955,000,000					
+Other Investing Cash Flow		100000000	31793000000	21656000000	39267000000	35,580,000,000					
+Purchase/Sale of Other Non-Current Assets, Net			388000000	23000000	30000000	-57,000,000					
+Sales of Other Non-Current Assets											
+Cash Flow from Financing Activities		16511000000	15254000000								
+Cash Flow from Continuing Financing Activities		16511000000	15254000000	15991000000	13606000000	-9,270,000,000					
+Issuance of/Payments for Common Stock, Net		13473000000	12610000000	15991000000	13606000000	-9,270,000,000					
+Payments for Common Stock		13473000000	12610000000	12796000000	11395000000	-7,904,000,000					
+Proceeds from Issuance of Common Stock				12796000000	11395000000	-7,904,000,000					
+Issuance of/Repayments for Debt, Net		115000000	42000000								
+Issuance of/Repayments for Long Term Debt, Net		115000000	42000000	1042000000	37000000	-57,000,000					
+Proceeds from Issuance of Long Term Debt		6250000000	6350000000	1042000000	37000000	-57,000,000					
+Repayments for Long Term Debt		6365000000	6392000000	6699000000	900000000	0					
+Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	2602000000	7741000000	937000000	-57,000,000					
+				2453000000	2184000000	-1,647,000,000					
+											
+Other Financing Cash Flow											
+Cash and Cash Equivalents, End of Period											
+Change in Cash		0		300000000	10000000	338,000,000,000					
+Effect of Exchange Rate Changes		20945000000	23719000000	23630000000	26622000000	26,465,000,000					
+Cash and Cash Equivalents, Beginning of Period		25930000000	235000000000	3175000000	300000000	6,126,000,000					
+Cash Flow Supplemental Section		181000000000	146000000000	183000000	143000000	210,000,000					
+Change in Cash as Reported, Supplemental		23719000000000	23630000000000	26622000000000	26465000000000	20,129,000,000,000					
+Income Tax Paid, Supplemental		2774000000	89000000	2992000000		6,336,000,000					
+Cash and Cash Equivalents, Beginning of Period		13412000000	157000000			-4,990,000,000					
+											
+12 Months Ended											
+_________________________________________________________											
+			Q4 2020			Q4  2019					
+Income Statement 											
+USD in "000'"s											
+Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019					
+Costs and expenses:											
+Cost of revenues			182527			161,857					
+Research and development											
+Sales and marketing			84732			71,896					
+General and administrative			27573			26,018					
+European Commission fines			17946			18,464					
+Total costs and expenses			11052			9,551					
+Income from operations			0			1,697					
+Other income (expense), net			141303			127,626					
+Income before income taxes			41224			34,231					
+Provision for income taxes			6858000000			5,394					
+Net income			22677000000			19,289,000,000					
+*include interest paid, capital obligation, and underweighting			22677000000			19,289,000,000					
+			22677000000			19,289,000,000					
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)--											
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)											
+											
+											
+For Paperwork Reduction Act Notice, see the seperate Instructions.											
+JPMORGAN TRUST III											
+A/R Aging Summary											
+As of July 28, 2022											
+ZACHRY T WOOD
+	Days over due									
+Effeective Tax Rate Prescribed by the Secretary of the Treasury.		44591	31 - 60	61 - 90	91 and over						
+
+							
+TOTAL			 £134,839.00
+ Alphabet Inc.  											
+
+
+
+						
+ =USD('"'$'"'-in'-millions)"											
+ Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 						
+ Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 						
+ Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 						
+ Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00 						
+ Research and development 	-£26,018.00 	-£21,419.00 	-£16,625.00 	-£13,948.00 	-£12,282.00 						
+ Sales and marketing 	-£18,464.00 	-£16,333.00 	-£12,893.00 	-£10,485.00 	-£9,047.00 						
+ General and administrative 	-£9,551.00 	-£8,126.00 	-£6,872.00 	-£6,985.00 	-£6,136.00 						
+ European Commission fines 	-£1,697.00 	-£5,071.00 	-£2,736.00 	 — 	 — 						
+ Income from operations 	 £34,231.00 	 £26,321.00 	 £26,146.00 	 £23,716.00 	 £19,360.00 						
+ Interest income 	 £2,427.00 	 £1,878.00 	 £1,312.00 	 £1,220.00 	 £999.00:,''
+
+$ gh
+
+Work seamlessly with GitHub from the command line. 
+
+USAGE
+  gh <command> <subcommand> [flags]
+  Commands are run inside of a GitHub repository.
+
+CORE COMMANDS
+  issue:       Create and view issues
+  pr:          Create, view, and checkout pull requests
+  repo:        Create, clone, fork, and view repositories
+
+ADDITIONAL COMMANDS
+  help:        Help about any command
+  config:      Set and get preferences
+  completion:  Generate shell completion scripts
+
+FLAGS
+  -h, --help:              Show help for command
+  -v, --version:           Show gh version
+
+EXAMPLES
+  $ gh issue create
+  $ gh pr list
+  $ gh repo fork
+
+FEEDBACK 
+  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
+  Open an issue using “gh issue create -R cli/cli”
+
+
+From ID:44c295b9-ce08-424f-b6a5-b0f009ad802c
+# https://pnc.com//# docs
+# The open-source repo for docs.github.com
+# CI: 
+# Name :
+# DEPOSIT TICKET:
+# Federal 941 Deposit Report
+# ADP
+# Report Range 5/4/2022 - 6/4/2022									
+# 88-1303491	State ID: 00037305581	SSN: 633-44-1725	00000						
+# Employee Number: 3
+# Description	Amount							5/4/2022 - 6/4/2022	
+# Payment :
+ - ContactName	EmailAddress	POAddressLine1	POAddressLine2	POAddressLine3	POAddressLine4	POCity	PORegion	POPostalCode	POCountry	InvoiceNumber	Reference	InvoiceDate	DueDate	Total	Description	Quantity	UnitAmount	Discount	TaxAmount
+Zachry Tyler Wood	zachryiixixiiwood@gmail.com	5323 BRADFORD DR				DALLAS	TX	75235-8313	United States	INV-0003	2.21169E+13	16 Aug 2022	18 Apr-15, 2022	
+Bill 7364	
+# 1. Social Security (Employee + Employer)			26662						
+# 2. Medicare (Employee + Employer)			861193422444					Commission	
+# 3. Federal Income Tax			8385561229657			
+# Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late '' 'payment, previous overpayment, penalty and others.
+# Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.									
+Employer Customized Report
+ADP
+Paid Period 5/4/2022 - 6/4/2022	
+
+Emloyee:
+  Employee's Social Security Number :xxxxx1725	Ssn :XXXXX1725	State :All	STATE ID :TxDL 00037305581		2267700000000000	
+  ZACH T WOO
+  5323 B
+  
+Employer's Identification Number (EIN) :xxxxx7919								
+  ALPH I CO.
+  1600 A
+  
+Payer :
+  Payer's Federal Identification Number (FIN) :xxxxx4775
+  INTU
+  2700 C
+
+Employee Number: 3
+Description									
+Wages, Tips and Other Compensation		22662983361014		Report Range:		2022-05-04 - 2022-06-04		Tips	
+Taxable SS Wages		215014		ZACHRY T WOOD				5105000	
+Taxable SS Tips		00000		5222 BRADFORD DR DALLAS TX 75235-8313					
+Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT	
+Advanced EIC Payment		00000		3361014					
+Federal Income Tax Withheld		8385561229657		Bonus		00000		00000	
+Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2	
+Employee Medicare Tax Withheld		532580113436		Total		00000		00000	
+State Income Tax Withheld		00000		22662983361014					
+Local Income Tax Withheld
+Customized Employer Tax Report		00000		Deduction Summary					
+Description		Amount		Health Insurance					
+Employer SS Tax
+Employer Medicare Tax		13331		00000					
+Federal Unemployment Tax		328613309009		Tax Summary					
+State Unemployment Tax		00442		Federal Tax	00007			Total Tax	
+Customized Deduction Report		00840		$8,385,561,229,657@3,330.90		Local Tax			
+Health Insurance						00000			
+401K		00000		Advanced EIC Payment			8918141356423		
+		00000		00000				Total	
+						401K			
+						00000		00000	
+									
+ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050	
+									
+									
+SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.									
+The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.									
+									
+The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763				
+									
+									
+									
+									
+3/6/2022 at 6:37 PM									
+				Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	
+									
+GOOGL_income-statement_Quarterly_As_Originally_Reported				24934000000	25539000000	37497000000	31211000000	30818000000	
+				24934000000	25539000000	21890000000	19289000000	22677000000	
+Cash Flow from Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000	
+Net Cash Flow from Continuing Operating Activities, Indirect				20642000000	18936000000	18525000000	17930000000	15227000000	
+Cash Generated from Operating Activities				6517000000	3797000000	4236000000	2592000000	5748000000	
+Income/Loss before Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000	
+Total Adjustments for Non-Cash Items				3439000000	3304000000	2945000000	2753000000	3725000000	
+Depreciation, Amortization and Depletion, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000	
+Depreciation and Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000	
+Depreciation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000	
+Amortization, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000	
+Stock-Based Compensation, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000	
+Taxes, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000	
+Investment Income/Loss, Non-Cash Adjustment				-14000000	64000000	-8000000	-255000000	392000000	
+Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2225000000	2806000000	-871000000	-1233000000	1702000000	
+Other Non-Cash Items				-5819000000	-2409000000	-3661000000	2794000000	-5445000000	
+Changes in Operating Capital				-5819000000	-2409000000	-3661000000	2794000000	-5445000000	
+Change in Trade and Other Receivables				-399000000	-1255000000	-199000000	7000000	-738000000	
+Change in Trade/Accounts Receivable				6994000000	3157000000	4074000000	-4956000000	6938000000	
+Change in Other Current Assets				1157000000	238000000	-130000000	-982000000	963000000	
+Change in Payables and Accrued Expenses				1157000000	238000000	-130000000	-982000000	963000000	
+Change in Trade and Other Payables				5837000000	2919000000	4204000000	-3974000000	5975000000	
+Change in Trade/Accounts Payable				368000000	272000000	-3000000	137000000	207000000	
+Change in Accrued Expenses				-3369000000	3041000000	-1082000000	785000000	740000000	
+Change in Deferred Assets/Liabilities									
+Change in Other Operating Capital									
+				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000	
+Change in Prepayments and Deposits				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000	
+Cash Flow from Investing Activities									
+Cash Flow from Continuing Investing Activities				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000	
+				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000	
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net									
+Purchase of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000	
+Sale and Disposal of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000	
+Purchase/Sale of Business, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000	
+Purchase/Acquisition of Business				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000	
+Purchase/Sale of Investments, Net									
+Purchase of Investments				36512000000	31793000000	21656000000	39267000000	35580000000	
+				100000000	388000000	23000000	30000000	-57000000	
+Sale of Investments									
+Other Investing Cash Flow					-15254000000				
+Purchase/Sale of Other Non-Current Assets, Net				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000	
+Sales of Other Non-Current Assets				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000	
+Cash Flow from Financing Activities				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000	
+Cash Flow from Continuing Financing Activities				13473000000		-12796000000	-11395000000	-7904000000	
+Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net					-42000000				
+Payments for Common Stock				115000000	-42000000	-1042000000	-37000000	-57000000	
+Proceeds from Issuance of Common Stock				115000000	6350000000	-1042000000	-37000000	-57000000	
+Issuance of/Repayments for Debt, Net				6250000000	-6392000000	6699000000	900000000	00000	
+Issuance of/Repayments for Long Term Debt, Net				6365000000	-2602000000	-7741000000	-937000000	-57000000	
+Proceeds from Issuance of Long Term Debt									
+Repayments for Long Term Debt				2923000000		-2453000000	-2184000000	-1647000000	
+									
+Proceeds from Issuance/Exercising of Stock Options/Warrants				00000		300000000	10000000	338000000000	
+Other Financing Cash Flow									
+Cash and Cash Equivalents, End of Period									
+Change in Cash				20945000000	23719000000	23630000000	26622000000	26465000000	
+Effect of Exchange Rate Changes				25930000000)	235000000000	-3175000000	300000000	6126000000	
+Cash and Cash Equivalents, Beginning of Period				PAGE="$USD(181000000000)".XLS	BRIN="$USD(146000000000)".XLS	183000000	-143000000	210000000	
+Cash Flow Supplemental Section				23719000000000		26622000000000	26465000000000	20129000000000	
+Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000	
+Income Tax Paid, Supplemental				13412000000	157000000				
+ZACHRY T WOOD								-4990000000	
+Cash and Cash Equivalents, Beginning of Period									
+Department of the Treasury									
+Internal Revenue Service									
+					Q4 2020			Q4  2019	
+Calendar Year									
+Due: 04/18/2022									
+					Dec. 31, 2020			Dec. 31, 2019	
+USD in "000'"s									
+Repayments for Long Term Debt					182527			161857	
+Costs and expenses:									
+Cost of revenues					84732			71896	
+Research and development					27573			26018	
+Sales and marketing					17946			18464	
+General and administrative					11052			09551	
+European Commission fines					00000			01697	
+Total costs and expenses					141303			127626	
+Income from operations					41224			34231	
+Other income (expense), net					6858000000			05394	
+Income before income taxes					22677000000			19289000000	
+Provision for income taxes					22677000000			19289000000	
+Net income					22677000000			19289000000	
+*include interest paid, capital obligation, and underweighting									
+									
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)									
+									
+									
+									
+									
+									
+									
+									
+									
+									
+									
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)									
+*include interest paid, capital obligation, and underweighting									
+									
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)									
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)									
+									
+									
+									
+									
+									
+									
+									
+		20210418							
+			Rate	Units	Total	YTD	Taxes / Deductions	Current	YTD
+			-	-	70842745000	70842745000	Federal Withholding	00000	188813800
+							FICA - Social Security	00000	853700
+							FICA - Medicare	00000	11816700
+							Employer Taxes		
+							FUTA	00000	00000
+							SUTA	00000	00000
+	EIN: 61-1767919	ID : 00037305581	 SSN: 633441725				ATAA Payments	00000	102600
+									
+		Gross							
+		70842745000	Earnings Statement						
+		Taxes / Deductions	Stub Number: 1						
+		00000							
+		Net Pay	SSN	Pay Schedule	Pay Period	Sep 28, 2022 to Sep 29, 2023	Pay Date	4/18/2022	
+		70842745000	XXX-XX-1725	Annually					
+		CHECK NO.							
+		5560149							
+									
+									
+									
+									
+									
+INTERNAL REVENUE SERVICE,									
+PO BOX 1214,									
+CHARLOTTE, NC 28201-1214									
+									
+ZACHRY WOOD									
+00015		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
+Cat. No. 11320B		76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000
+Form 1040 (2021)		76033000000	20642000000	18936000000					
+Reported Normalized and Operating Income/Expense Supplemental Section									
+Total Revenue as Reported, Supplemental		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000
+Total Operating Profit/Loss as Reported, Supplemental		78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000
+Reported Effective Tax Rate		00000	00000	00000	00000	00000		00000	00000
+Reported Normalized Income									
+Reported Normalized Operating Profit									
+Other Adjustments to Net Income Available to Common Stockholders									
+Discontinued Operations									
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010
+Basic EPS from Continuing Operations		00114	00031	00028	00028	00027	00022	00017	00010
+Basic EPS from Discontinued Operations									
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010
+Diluted EPS from Continuing Operations		00112	00031	00028	00027	00026	00022	00016	00010
+Diluted EPS from Discontinued Operations									
+Basic Weighted Average Shares Outstanding		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000
+Diluted Weighted Average Shares Outstanding		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000
+Reported Normalized Diluted EPS									
+Basic EPS		00114	00031	00028	00028	00027	00023	00017	00010
+Diluted EPS		00112	00031	00028	00027	00026	00022	00016	00010
+Basic WASO		667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000
+Diluted WASO		677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000
+Fiscal year end September 28th., 2022. | USD									
+									
+For Paperwork Reduction Act Notice, see the seperate Instructions.			This Product Cantains Sensitive Tax Payer Data						
+									
+					Request Date : 07-29-2022				
+					Response Date : 07-29-2022				
+					Tracking Number : 102393399156				
+					Customer File Number : 132624428				
+									
+important information			Wage and Income Transcript						
+					SSN Provided : XXX-XX-1725				
+					Tax Periood Requested :  December, 2020				
+									
+									
+									
+									
+			Form W-2 Wage and Tax Statement						
+Employer : 									
+  Employer Identification Number (EIN) :XXXXX4661									
+INTU									
+2700 C									
+Quarterly Report on Form 10-Q, as filed with the Commission on									
+Employee :									
+  Employee's Social Security Number :XXX-XX-1725									
+  ZACH T WOOD									
+  5222 B									
+on Form 8-K, as filed with the Commission on January 18, 2019).									
+Submission Type :					Original document				
+Wages, Tips and Other Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5105000.00					510500000				
+Federal Income Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1881380.00					188813800				
+Social Security Wages : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137700.00					13770000				
+Social Security Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 					853700				
+Medicare Wages and Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . 					510500000				
+Medicare Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					118166700				
+Social Security Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 					00000				
+Allocated Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Dependent Care Benefits : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Deffered Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Code "Q" Nontaxable Combat Pay : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . .					00000				
+Code "W" Employer Contributions tp a Health Savings Account : . . . . . . . . . . . . . . . . . . . . . . . . . . 					00000				
+Code "Y" Defferels under a section 409A nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . .  					00000				
+Code "Z" Income under section 409A on a nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . .					00000				
+Code "R" Employer's Contribution to MSA : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'					00000				
+Code "S" Employer's Cotribution to Simple Account : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Code "T" Expenses Incurred for Qualified Adoptions : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .					00000				
+Code "V" Income from exercise of non-statutory stock options : . . . . . . . . . . . . . . . . . . . . . . . . .00000				
+Code "AA" Designated Roth Contributions under a Section  401 (k)  Plan : . . . . . . . . . . . . . . . . . . . .00000				
+Code "BB" Designated Roth Contributions under a Section 403 (b) Plan : . . . . . . . . . . . . . . . . . . . . .00000				
+Code "DD" Cost of Employer-Sponsored Health Coverage : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .									
+Code "EE" Designated ROTH Contributions Under a Governmental Section 457 (b) Plan : . . . . . . . . . . . . . . . . . . . . .									
+Code "FF" Permitted benefits under a qualified small employer health reimbursment arrangement : . . . . . . . . . 00000				
+Code "GG" Income from Qualified Equity Grants Under Section 83 (i) : . . . . . . . . . . . . . . . . . . . . . . . $0.00									
+Code "HH" Aggregate Defferals Under section 83(i) Elections as of the Close of the Calendar Year : . . . . . . . . 00000				
+Third Party Sick Pay Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Unanswered				
+Retirement Plan Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Unanswered					
+                                                                                  For the period 04/13/2022 to 04/29/2022
+ZACHRY TYLER WOOD
+Primary account number: 47-2041-6547 Page 2 of 3	
+Statutory Employee : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Not Statutory Employee	
+W2 Submission Type : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Original								22116905560149	
+W2 WHC SSN Validation Code : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Correct SSN								
+Reference number :
+22116905560149	
+Reference number :	
+22116905560149	
+Transaction description	willon your next statement as a single line item entitled Service
+Waived - show up on 05/02/2022 New Customer Period	
+4/27/2022		Form 1099-G		Returned Item Fee (nsf)					
+Detail of Services Used During Current Period									
+Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04 and appear as SRVCCHRG 04/29/2022,									
+Description						Volume	Amount		
+Account Maintenance Charge						70846743866	00000	        	
+Total For Services Used This Peiiod						00000	00000		
+Total Service (harge						00
+	00000		
+Reviewing Your Statement				('PNCBANK					
+Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if:
+you have any questions regarding your account(s); your name or address is incorrect;
+• you have any questions regarding interest paid to an interest-bearing account.									
+Balancing Your Account
+Update Your Account Register									
+Certified Copy of Resolutionsl
+Authorizations For Accounts And Loans					@PNCBANK				
+(Corporations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other Organizations)								step 2: Add together checks and other deductions listed in your account register but not on your statement.	
+PNC Bank, National Association("Bank")						
+Taxpayer I.D. Number (TIN)			
+Check
+Deduction Descretio•
+(iv)
+(account or benefit, or in payment of the individual obligations of, any individual obligations of any such persons to the Bank without regard to the disposition or purpose of same as allowed by applicable law.			
+D'@PNCBANK'@ID:44c295b9-ce08-424f-b6a5-b0f009ad802c ::NOTE
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+-----
+
+Components
+
+Syntax
+From ee3eafeb6238c785dfde82542eb9576da9437c52 Mon Sep 17 00:00:00 2001
+From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
+Date: Sat, 27 Aug 2022 06:57:59 -0500
+Subject: [PATCH] Update creating-a-repository-from-a-template.md
+
+---
+ .../creating-a-repository-from-a-template.md  | 250 +++++++++++++++++-
+ 1 file changed, 245 insertions(+), 5 deletions(-)
+
+diff --git a/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md b/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
+index 9bdef7e4d67..bf5ff61a826 100644
+--- a/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
++++ b/content/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template.md
+@@ -1,4 +1,244 @@
+----
++
++
++# This workflow uses actions that are not certified by GitHub.
++# They are provided by a third-party and are governed by
++# separate terms of service, privacy policy, and support
++# documentation.
++
++# This workflow will install Deno then run Deno lint and test.
++# For more information see: https://github.com/denoland/setup-deno
++
++name: Deno
++
++on:
++  push:
++    branches: ["masterbranch"]
++  pull_request:
++    branches: ["Trunk"]
++
++permissions:
++  contents: read
++
++jobs:
++  test:
++    runs-on: ubuntu-latest
++
++    steps:
++      - name: Setup repo
++        uses: actions/checkout@v3
++
++      - name: Setup Deno
++        # uses: denoland/setup-deno@v1
++        uses: denoland/setup-deno@004814556e37c54a2f6e31384c9e18e983317366
++        with:
++          deno'@v'-frostie'$'@V8'"''
++
++      # Uncomment this step to verify the use of 'deno fmt' on each commit.
++      # - name: Verify formatting
++      #   run: deno fmt --check
++
++      - name: rendeerer
++        run: deno.xml
++
++      - name: Run tests
++        run: Rust.yml
++        bundle-with : :rake.i
++        
+Run: Runs Test'@tests.yml'
++documentation.
+ -  notification:
+  - e-mail :
+   - zachryiixixiiwood@gmail.com
+    - nasdaqgoogcoo@gmail.com
++💁 The OpenShift Starter workflow will:
++- Checkout your repository
++- Perform a container image build
++- Push the built image to the GitHub Container Registry (GHCR)
++- Log in to your OpenShift cluster
++- Create an OpenShift app from the image and expose it to the internet
++ℹ️ Configure your repository and the workflow with the following steps:
++1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
++2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
++- https://github.com/redhat-actions/oc-login#readme
++- https://docs.github.com/en/actions/reference/encrypted-secrets
++- https://cli.github.com/manual/gh_secret_set
++3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
++4. (Optional) Edit the build-image step to build your project.
++The default build type is by using a Dockerfile at the root of the repository,
++but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
++5. Commit and push the workflow file to your default branch to trigger a workflow run.
++👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.
++name: OpenShift
++
++env:
++
++🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
++See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
++To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
++OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
++OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}
++
++🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
++OPENSHIFT_NAMESPACE: ""
++
++🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
++APP_NAME: ""
++
++🖊️ EDIT with the port your application should be accessible on.
++If the container image exposes exactly one port, this can be left blank.
++Refer to the 'port' input of https://github.com/redhat-actions/oc-new-app
++APP_PORT: ""
++
++🖊️ EDIT to change the image registry settings.
++Registries such as GHCR, Quay.io, and Docker Hub are supported.
++IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
++IMAGE_REGISTRY_USER: ${{ github.actor }}
++IMAGE_REGISTRY_PASSWORD: ${{ github.token }}
++
++🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
++IMAGE_TAGS: ""
++
++on:
++
++https://docs.github.com/en/actions/reference/events-that-trigger-workflows
++workflow_dispatch:
++push:
++# Edit to the branch(es) you want to build and deploy on each push.
++branches:''\
+  '-'' '['' 'Paradice'' ']'
++
++jobs:
++
++🖊️ EDIT if you want to run vulnerability check on your project before deploying
++the application. Please uncomment the below CRDA scan job and configure to run it in
++your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
++TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
++For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows
++crda-scan:
++uses: ./.github/workflows/crda.yml
++secrets:
++CRDA_KEY: ${{ secrets.CRDA_KEY }}
++# SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }} # Either use SNYK_TOKEN or CRDA_KEY
++
++openshift-ci-cd:
++# 🖊️ Uncomment this if you are using CRDA scan step above
++# needs: crda-scan
++name: Build and deploy to OpenShift
++runs-on: ubuntu-20.04
++environment: production
++
++outputs:
++  ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
++  SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
++
++steps:
++- name: Check for required secrets
++  uses: actions/github-script@v6
++  with:
++    script: |
++      const secrets = {
++        OPENSHIFT_SERVER: `${{ secrets.OPENSHIFT_SERVER }}`,
++        OPENSHIFT_TOKEN: `${{ secrets.OPENSHIFT_TOKEN }}`,
++      };
++      const GHCR = "ghcr.io";
++      if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
++        core.info(`Image registry is ${GHCR} - no registry password required`);
++      }
++      else {
++        core.info("A registry password is required");
++        secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
++      }
++      const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
++        if (value.length === 0) {
++          core.error(`Secret "${name}" is not set`);
++          return true;
++        }
++        core.info(`✔️ Secret "${name}" is set`);
++        return false;
++      });
++      if (missingSecrets.length > 0) {
++        core.setFailed(`❌ At least one required secret is not set in the repository. \n` +
++          "You can add it using:\n" +
++          "GitHub UI: https://docs[.github](https://github.com/zakwarlord7/zakwarlord7/tree/c76344d06ee3aca71db749f20dea92a785d5d77a/.github).com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
++          "GitHub CLI: https://cli.github.com/manual/gh_secret_set \n" +
++          "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
++      }
++      else {
++        core.info(`✅ All the required secrets are set`);
++      }
++- name: Check out repository
++  uses: actions/checkout@v3
++
++- name: Determine app name
++  if: env.APP_NAME == ''
++  run: |
++    echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV
++- name: Determine image tags
++  if: env.IMAGE_TAGS == ''
++  run: |
++    echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV
++# https://github.com/redhat-actions/buildah-build#readme
++- name: Build from Dockerfile
++  id: build-image
++  uses: redhat-actions/buildah-build@v2
++  with:
++    image: ${{ env.APP_NAME }}
++    tags: ${{ env.IMAGE_TAGS }}
++
++    # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
++    # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
++    # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
++    dockerfiles: |
++      ./Dockerfile
++# https://github.com/redhat-actions/push-to-registry#readme
++- name: Push to registry
++  id: push-image
++  uses: redhat-actions/push-to-registry@v2
++  with:
++    image: ${{ steps.build-image.outputs.image }}
++    tags: ${{ steps.build-image.outputs.tags }}
++    registry: ${{ env.IMAGE_REGISTRY }}
++    username: ${{ env.IMAGE_REGISTRY_USER }}
++    password: ${{ env.IMAGE_REGISTRY_PASSWORD }}
++
++# The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}
++
++- name: Install oc
++  uses: redhat-actions/openshift-tools-installer@v1
++  with:
++    oc: 4
++
++# https://github.com/redhat-actions/oc-login#readme
++- name: Log in to OpenShift
++  uses: redhat-actions/oc-login@v1
++  with:
++    openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
++    openshift_token: ${{ env.OPENSHIFT_TOKEN }}
++    insecure_skip_tls_verify: true
++    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
++
++# This step should create a deployment, service, and route to run your app and expose it to the internet.
++# https://github.com/redhat-actions/oc-new-app#readme
++- name: Create and expose app
++  id: deploy-and-expose
++  uses: redhat-actions/oc-new-app@v1
++  with:
++    app_name: ${{ env.APP_NAME }}
++    image: ${{ steps.push-image.outputs.registry-path }}
++    namespace: ${{ env.OPENSHIFT_NAMESPACE }}
++    port: ${{ env.APP_PORT }}
++
++- name: Print application URL
++  env:
++    ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
++    SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
++  run: |
++    [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
++    echo
++    echo "======================== Your application is available at: ========================"
++    echo ${{{{[' '"((c)(r)).[12753750].[00]m]BITORE_34173.1337'"'' }}
++    echo "===================================================================================
++    'equire':'' 'test''
++    Return:'' 'Run ''
++    ---branches: mainbranch
+ title: Creating a repository from a template
+ intro: You can generate a new repository with the same directory structure and files as an existing repository.
+ redirect_from:
+@@ -6,10 +246,10 @@ redirect_from:
+   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
+   - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
+ versions:
+-  fpt: '*'
+-  ghes: '*'
+-  ghae: '*'
+-  ghec: '*'
++  ghec: 'OPTIONAL'
++  ghcr: 'OPTIONAL'
++  'gchr': 'OPTIONAL'
++  'require': 'test'
+ topics:
+   - Repositories
+ shortTitle: Create from a template
+[branch]
+(label)
+owner/repo
+
+
+Prompts
+
+? Yes/No Prompt [y/N]
+
+? Short text prompt (Auto fill)
+
+? Long text prompt [(e) to launch vim, enter to skip] 
+
+? Single choice prompt [Use arrows to move, type to filter]
+> Choice focused
+  Choice 
+  Choice
+
+? Multi select prompt [Use arrows to move, space to select, type to filter]
+> [x]  Choice selected and focused
+  [x]  Choice selected
+  [ ]  Projects
+  [ ]  Milestone
+
+
+
+State
+
+#123 Open issue or pull request
+#123 Closed issue pull request
+#123 Merged pull request
+#123 Draft pull request
+
+✓ Checks passing
+✓ Approved
+- Review requested
++ Changes requested
+
+✓ Success message
+! Alert
+✗ Error message (ideal)
+error message (current)
+
+✓ Item closed
+✓ Item merged
+
+
+Loading spinner
+
+⣟ Action...
+
+
+
+Lists
+
+$ gh issue list 
+
+Showing 3 of 222 issues in cli/cli
+
+#1360  Ability to ski...                     about 2 days ago
+#1358  Provide extra ...  (enhancement)      about 3 days ago
+#1354  Add ability to...  (enhancement, ...  about 3 days ago
+
+
+
+Detail view
+
+
+
+Ability to skip confirmation via a flag
+Open • AliabbasMerchant opened about 2 days ago • 1 comment
+
+
+#1330 proposes to add confirmation to risky commands. It is a nice feature to have, but in order to support proper scriptability, we should support a flag (preferably  -y , like in most CLIs), to skip asking for confirmation. So for each of the 4 commands mentioned there (and possibly even more in the future), we should add support for the  -y  flag                                       
+
+
+View this issue on GitHub: https://github.com/cli/cli/issues/1360
+
+
+Headers
+
+
+Creating issue in cli/cli
+
+Showing 30 of 226 issues in cli/cli
+
+Relevant pull requests in cli/cli
+
+cli/cli
+GitHub’s official command line tool
+
+Default branch is not being prioritized
+Closed • tierninho opened about 6 months ago • 1 comment
+
+
+
+Empty states
+
+Current branch
+  There is no pull request associated with [master]
+
+Created by you
+  You have no open pull requests
+
+Requesting a code review from you
+  You have no pull requests to review
+
+No pull requests match your search in cli/cli
+
+No issues match your search in cli/cli
+
+There are no open issues in ampinsk/create-test
+
+
+
+
+Help page
+
+$ gh
+
+Work seamlessly with GitHub from the command line. 
+
+USAGE
+  gh <command> <subcommand> [flags]
+  Commands are run inside of a GitHub repository.
+
+CORE COMMANDS
+  issue:       Create and view issues
+  pr:          Create, view, and checkout pull requests
+  repo:        Create, clone, fork, and view repositories
+
+ADDITIONAL COMMANDS
+  help:        Help about any command
+  config:      Set and get preferences
+  completion:  Generate shell completion scripts
+
+FLAGS
+  -h, --help:              Show help for command
+  -v, --version:           Show gh version
+
+EXAMPLES
+  $ gh issue create
+  $ gh pr list
+  $ gh repo fork
+
+LEARN MORE
+  Use "gh [command] [subcommand] --help" for more information about a command.
+  Read the manual at <http://cli.github.com/manual>
+
+FEEDBACK 
+  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
+  Open an issue using “gh issue create -R cli/cli”
+
+
  ---
title: Migrating to GitHub Actions
shortTitle: Migrating to GitHub Actions
intro: 'Learn how to migrate your existing CI/CD workflows to {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /actions/migrating-to-github-actions
  - /articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax
children:
  - /migrating-from-azure-pipelines-to-github-actions
  - /migrating-from-circleci-to-github-actions
  - /migrating-from-gitlab-cicd-to-github-actions
  - /migrating-from-jenkins-to-github-actions
  - /migrating-from-travis-ci-to-github-actions
---

