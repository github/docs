---
title: '{% data variables.product.product_name %}{% ifversion fpt or ghec%}.com{% endif %} Help Documentation'
featuredLinks:
  gettingStarted:
    - /get-started/quickstart/set-up-git
    - /authentication/connecting-to-github-with-ssh
    - /repositories/creating-and-managing-repositories
    - /get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  popular:
    - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
    - /authentication
    - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github
    - /get-started/getting-started-with-git/managing-remote-repositories
    - /pages
redirect_from:
  - /github
  - /articles
  - /common-issues-and-questions
  - /troubleshooting-common-issues
  - /early-access/github/enforcing-best-practices-with-github-policies
  - /github/enforcing-best-practices-with-github-policies/index
  - /early-access/github/enforcing-best-practices-with-github-policies/about-github-policies
  - /github/enforcing-best-practices-with-github-policies/about-github-policies
  - /early-access/github/enforcing-best-practices-with-github-policies/constraints
  - /github/enforcing-best-practices-with-github-policies/constraints
  - /early-access/github/enforcing-best-practices-with-github-policies/contexts
  - /github/enforcing-best-practices-with-github-policies/contexts
  - /early-access/github/enforcing-best-practices-with-github-policies/expressions
  - /github/enforcing-best-practices-with-github-policies/expressions
  - /early-access/github/enforcing-best-practices-with-github-policies/getting-started
  - /early-access/github/enforcing-best-practices-with-github-policies/github-policies-vision
  - /github/enforcing-best-practices-with-github-policies/github-policies-vision
  - /early-access/github/enforcing-best-practices-with-github-policies/onboarding
  - /github/enforcing-best-practices-with-github-policies/onboarding
  - /early-access/github/enforcing-best-practices-with-github-policies/overview
  - /github/enforcing-best-practices-with-github-policies/overview
  - /early-access/github/enforcing-best-practices-with-github-policies/release-notes
  - /github/enforcing-best-practices-with-github-policies/release-notes
  - /early-access/github/enforcing-best-practices-with-github-policies/resources
  - /github/enforcing-best-practices-with-github-policies/resources
  - /early-access/github/enforcing-best-practices-with-github-policies/sharing
  - /github/enforcing-best-practices-with-github-policies/sharing
  - /early-access/github/enforcing-best-practices-with-github-policies/syntax
  - /github/enforcing-best-practices-with-github-policies/syntax
versions: '*'
children:
  - search
  - get-started
  - account-and-profile
  - authentication
  - repositories
  - admin
  - billing
  - site-policy
  - organizations
  - code-security
  - pull-requests
  - issues
  - actions
  - copilot
  - codespaces
  - packages
  - search-github
  - developers
  - rest
  - graphql
  - github-cli
  - discussions
  - sponsors
  - communities
  - pages
  - education
  - desktop
  - early-access
  - support
childGroups:
  - name: Get started
    octicon: RocketIcon
    children:
      - get-started
      - account-and-profile
      - authentication
      - billing
      - site-policy
  - name: Collaborative coding
    octicon: CommentDiscussionIcon
    children:
      - codespaces
      - repositories
      - pull-requests
      - discussions
      - copilot
  - name: CI/CD and DevOps
    octicon: GearIcon
    children:
      - actions
      - packages
      - pages
  - name: Security
    octicon: ShieldLockIcon
    children:
      - code-security
      - code-security/supply-chain-security
      - code-security/security-advisories
      - code-security/dependabot
      - code-security/code-scanning
      - code-security/secret-scanning
  - name: Client apps
    octicon: DeviceMobileIcon
    children:
      - github-cli
      - desktop
  - name: Project management
    octicon: ProjectIcon
    children:
      - issues
      - search-github
  - name: Developers
    octicon: CodeSquareIcon
    children:
      - developers
      - rest
      - graphql
  - name: Enterprise and Teams
    octicon: OrganizationIcon
    children:
      - organizations
      - admin
  - name: Community
    octicon: GlobeIcon
    children:
      - communities
      - sponsors
      - education
      - support
externalProducts:
  electron:
    id: electron
    name: Electron
    href: 'https://electronjs.org/docs/latest'
    external: true
  codeql:
    id: codeql
    name: CodeQL
    href: 'https://codeql.github.com/docs'
    external: true
  npm:
    id: npm
    name: npm
    href: 'https://docs.npmjs.com/'
    external: true
---on:
  push:
    branches: master
  pull_request: 
    run-on: ubuntu-latest
    steps:
    - name: Set up Git repository
      uses: actions/checkout@v3
    - name: Set up Ruby
      uses: ruby/setup-ruby@v1
      with:
        bundler-cache: true
    - name: Set up Node
      uses: actions/setup-node@v3
    - name: Bootstrap
      run: script/bootstrap
    - name: Tests
      run: script/test 
<?xml version="1.0" encoding="utf-8"?>
charmap keyset =  new
{ "new keymap Charset = Pro" }
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
https://nuget.pkg.github.com/OWNER/index.json 
on:
Runs-on:on:
echo: hello 🌍!-🐛-fix#731,
"name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
const: "token"''
token: "((c)(r))"''
'Value": "[VOLUME]'"''
 '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
on:
  push:
    branches: master
  pull_request: 
    run-on: ubuntu-latest
    steps:
    - name: Set up Git repository
      uses: actions/checkout@v3
    - name: Set up Ruby
      uses: ruby/setup-ruby@v1
      with:
        bundler-cache: true
    - name: Set up Node
      uses: actions/setup-node@v3
    - name: Bootstrap
      run: script/bootstrap
    - name: Tests
      run: script/test 
<?xml version="1.0" encoding="utf-8"?>
charmap keyset =  new
{ "new keymap Charset = Pro" }
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration> 
on:
Runs-on:on:"
const: "token"''
token: "((c)(r))"''
'Value": "[VOLUME]'"''
 '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
on:
  push:
    branches: master
  pull_request: '-'[' branch' ']'
'job:' '"'use:' '-'"'

    run-on: ubuntu-latest
    steps:
    - name: Set up Git repository
      uses: actions/checkout@v3

    - name: Set up Ruby
      uses: ruby/setup-ruby@v1
      with:
        bundler-cache: true

    - name: Set up Node
      uses: actions/setup-node@v3

    - name: Bootstrap
      run: script/bootstrap

    - name: Tests
      run: script/test 
<?xml version="1.0" encoding="utf-8"?>
charmap keyset =  new
{ "new keymap Charset = Pro" }
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
https://nuget.pkg.github.com/OWNER/index.json
name: Python Package using Conda

on: [push]

jobs:
  build-linux:
    runs-on: ubuntu-latest
    strategy:
      max-parallel: 5

    steps:
    - uses: actions/checkout@v3
    - name: Set up Python 3.10
      uses: actions/setup-python@v3
      with:
        python-version: 3.10
    - name: Add conda to system path
      run: |
        # $CONDA is an environment variable pointing to the root of the miniconda directory
        echo $CONDA/bin >> $GITHUB_PATH
    - name: Install dependencies
      run: |
        conda env update --file environment.yml --name base
    - name: Lint with flake8
      run: |
        conda install flake8
        # stop the build if there are Python syntax errors or undefined names
Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
zakwarlord7
Public template
Cannot fork because you own this repository and are not a member of any organizations.
Code
Pull requests
13
Discussions
Actions
Projects
Security
Insights
Settings
From ACH Web Usataxpymt IRS 240261564036618effective date 08/04 recie…
…ved 2022-08-03 Reverse ACH Web Single 08/04 Amount 2267700.00 reference number :00022214903782823 service charge period 07/29/2022 reference number 000222140903782823 primary account holder ZACHRY TYLER WOOD BANK NAME : PNC BANK(071921891) Primary account number: :47-2041-6547 master account number o31000053-52101023 Conversation opened. 1 read message. total amount cdue to be paid to zachry Tyler Wood only reference number 0002221490378283 Amount 22662983361013.70
 paradice
@zakwarlord7
zakwarlord7 committed on Sep 13, 2022 
1 parent 68c471c commit 657f172621e9dd403740afc78ade93d77f3743c0
Showing 1 changed file with 1 addition and 0 deletions.
 1  
conan/cannon/ball
@@ -0,0 +1 @@

1 comment on commit 657f172
@zakwarlord7
Owner
Author
zakwarlord7 commented on 657f172 last week • 
PNC Alert pncalert@pnc.com
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn.
Below is some information about your overdraft.
To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC
RDTROD02
-BEGINS :
-RUN :
+::Run :BEGIN ::
+GLOW7 ::':Run ::
::RUNS :
::ON :
':-on ::
:-on ::
GLOW7 :
#!GitHub/doc/WORKSFLOW/Spackages/javascripts/bin/man/ant bash @Automate : GLOW4 :
Script :;'Build ::
-:Build ::builds_scripts :
+:Build ::builds_script :
scripts :Name :
Name :Automates :
Automate :Build and Deploy: title :
title : bitore.sig :
AUTOMATES AUTOMATE
AUTOMATE Run::/:'::Runs:'"''
'"'!''#':'' ''#'#'' '#'':'' BEGIN GLOW4'@mowjoujojojo/ZW/Usr/ebin/Bash/'"''
On :-starts:'"''
'-starts :On :-on :On
On -starts: Starts ::
Starts :Request :
Requests :Pull ::
Pull :pulls_request
pulls_request :':Push::
-Push :pushs_request
-'push_request' :-' '['' 'branches'' ']''
+Push :pushs_request :
+'push_request' :-''['' 'branches'' ']''
+
'branches' ':' '-' '[' 'mainbranch' ']''

''pull_request:'' 'banches':' '-' '["trunk" ]
@@ -88,11 +63,11 @@ $ 1 1 . 7 5

2 8 2 0 1 R 2 3 0 5 H 1 3 0 9 4 4 - 5

-Alphabe
+ALPHABET

ALPHABT(GOOG, GOOGL). on The

-Nasda
+NASDAQGOOG :

5323BRADFORD DR

@@ -206,9 +181,7 @@ This Product Contains Sensitive Taxpayer Data

For the period 04/13/2022 to 04/29/2022

-Business Checking Summary
-Account number :47-2041-6547 :
+Business Checking Summary Account number :47-2041-6547 :

Overdraft Protection has not beeen established for this account. :

@@ -262,7 +235,22 @@ Wage Income Transcript :
SSN Provided :XXX-XX-1725 :

Tax Period Requested :Deceber, 2020 :
-
+persons, tested in accordance with such testing : Tr R •d Ming or serVlCö n lent services, (ii) purchases or sales of foreig xlll) computerfinternet-based products and services, (iv)
+wir he Customer at the Bank, and (v) ACH transactions, and the Ba the Bank for such products or services. It. Resolved that any one of the following: procedures as may be established
+between the Customer and the Bank from time to time. General. Resolved that a certified copy of these resoluti
+Employer Taxes 70842745000 XXX-XX-1725
+0 Rate
+This period YTD Taxes / Deductions Current YTD
+Pay Schedulec 70842745000 70842745000 Federal Withholding 0 0
+Annually 70842745000 70842745000 Federal Withholding 0 0
+Units Q1 TTM Taxes / Deductions Current YTD
+Q3 70842745000 70842745000 Federal Withholding 0 0
+Q4 70842745000 70842745000 Federal Withholding 0 0
+Net Pay RUTA 0 0 70842745000 SUTA 0 0

             20210418                                          FICA - Medicare        0        0                                                                                                                                                                                                                                                                                                        
                                          FICA - Social Security       0        8854  Earnings Statement                                                                                                                                                                                                                                                                                                                               
+Taxes / Deductions Stub Number: 1 -
+Taxable Maritial Status: Single -
Form W-2 Wage and TAx Statement :

Employer
LTE
BEGIN
#!/usr/bin/bash imp.yml :
GLOW7 :
[CHECK.MARK] - CORRECTED :
[] - VOID :
Deposited to the account Of xxxxxxxx6547
:xxxxx1725
Based on facts as set forth in. 6550

The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
"Employer
Employer Identification Number :xxxxx7919"
"ALPH INC
"
"Employee
Employee Identification Number :xxxxx1725"
ZACH T WOO

Transaction.description Amount Amount Amount Amount Amount Amount Amount Amount
Non-Operating Income/Expenses, Total 12020000000 2517000000 2033000000 2624000000 4846000000 3038000000 2146000000 1894000000
Total Net Finance Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000
Net Interest Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000
Interest Expense Net of Capitalized Interest -346000000 -117000000 -77000000 -76000000 -76000000 -53000000 -48000000 -13000000
Interest Income 1499000000 378000000 387000000 389000000 345000000 386000000 460000000 433000000
Net Investment Income 12364000000 2364000000 2207000000 2924000000 4869000000 3530000000 1957000000 1696000000
Gain/Loss on Investments and Other Financial Instruments 12270000000 2478000000 2158000000 2883000000 4751000000 3262000000 2015000000 1842000000
Income from Associates, Joint Ventures and Other Participating Interests 334000000 49000000 188000000 92000000 5000000 355000000 26000000 -54000000
Gain/Loss on Foreign Exchange -240000000 -163000000 -139000000 -51000000 113000000 -87000000 -84000000 -92000000
Irregular Income/Expenses 0 0 0 0 0
Other Irregular Income/Expenses 0 0 0 0 0
Other Income/Expense, Non-Operating -1497000000 -108000000 -484000000 -613000000 -292000000 -825000000 -223000000 -222000000
Pretax Income 90734000000 24402000000 23064000000 21985000000 21283000000 18689000000 13359000000 8277000000
Provision for Income Tax -14701000000 -3760000000 -4128000000 -3460000000 -3353000000 -3462000000 -2112000000 -1318000000
Net Income from Continuing Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Extraordinary Items and Discontinued Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Non-Controlling/Minority Interests 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Diluted Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Income Statement Supplemental Section
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Reported Effective Tax Rate 0.162 0.179 0.157 0.158 0.158 0.159
Reported Normalized Income
Reported Normalized Operating Profit
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Basic EPS from Continuing Operations 113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21
Basic EPS from Discontinued Operations
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Diluted EPS from Continuing Operations 112.2 30.67 27.99 27.26 26.29 22.23 16.4 10.13
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Reported Normalized Diluted EPS
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Fiscal year end September 28th., 2022. | USD

31622,6:39 PM
Morningstar.com Intraday Fundamental Portfolio View Print Report Print

3/6/2022 at 6:37 PM
April 18, 2022.
2017 2018 2019 2020 2021
Best Time to 911
INTERNAL REVENUE SERVICE
PO BOX 1214
CHARLOTTE NC 28201-1214 EMPLOYEE

ROUTING NUMBER :071921891
PNCBANK'S :Business Checking's Business VISA Debit Card CHECKING ACCOUNT NUMBER :47-2041-6547 :

DEPOSIT TICKET NON-NEGOTIABLE
Merge state
Add more commits by pushing to the patch-445 branch on zakwarlord7/GitHub-doc.

Request Require : true.
Member FDIC
1 Earnings Statement

ALPHABET Period Beginning:
1600 AMPITHEATRE PARKWAY DR Period Ending:
MOUNTAIN VIEW, C.A., 94043 Pay Date:
"Taxable Marital Status:
Exemptions/Allowances" Married ZACHRY T.
WOOD
5323 BRADFORD DRIVE
Federal:
DALLAS, TX 75235
TX: NO State Incorne Tax
rate units year to date Other Benefits and
112.2 674678000 75698871600 Information
Pto Balance
Total Work Hrs
Gross Pay 75698871600 Important Notes
COMPANY PH Y: 650-253-0000
Statutory BASIS OF PAY: BASIC/DILUTED EPS
Federal Income Tax
Social Security Tax
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Medicare Tax

Net Pay 70842743866 70842743866
CHECKING
Net Check 70842743866
Your federal taxable wages this period are $
ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Pay date:_

Deposited to the account Of xxxxxxxx6547
:xxxxx1725

Based on facts as set forth in. 6550

The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
"Employer
Employer Identification Number :xxxxx7919"
"ALPH INC
"
"Employee
Employee Identification Number :xxxxx1725"
ZACH T WOO

    TTM        Q4 2021        Q3 2021        Q2 2021        Q1 2021        Q4 2020        Q3 2020        Q2 2020                                                                                                                                        
Gross Profit 146698000000 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Other Revenue
Cost of Revenue -110939000000 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
Cost of Goods and Services -110939000000 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
Operating Income/Expenses -67984000000 -20452000000 -16466000000 -16292000000 -14774000000 -15167000000 -13843000000 -13361000000
Selling, General and Administrative Expenses -36422000000 -11744000000 -8772000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000
General and Administrative Expenses -13510000000 -4140000000 -3256000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000
Selling and Marketing Expenses -22912000000 -7604000000 -5516000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000
Research and Development Expenses -31562000000 -8708000000 -7694000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000
Total Operating Profit/Loss 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Non-Operating Income/Expenses, Total 12020000000 2517000000 2033000000 2624000000 4846000000 3038000000 2146000000 1894000000
Total Net Finance Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000
Net Interest Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000

Interest Expense Net of Capitalized Interest -346000000 -117000000 -77000000 -76000000 -76000000 -53000000 -48000000 -13000000
Interest Income 1499000000 378000000 387000000 389000000 345000000 386000000 460000000 433000000
Net Investment Income 12364000000 2364000000 2207000000 2924000000 4869000000 3530000000 1957000000 1696000000
Gain/Loss on Investments and Other Financial Instruments 12270000000 2478000000 2158000000 2883000000 4751000000 3262000000 2015000000 1842000000
Income from Associates, Joint Ventures and Other Participating Interests 334000000 49000000 188000000 92000000 5000000 355000000 26000000 -54000000
Gain/Loss on Foreign Exchange -240000000 -163000000 -139000000 -51000000 113000000 -87000000 -84000000 -92000000
Irregular Income/Expenses 0 0 0 0 0
Other Irregular Income/Expenses 0 0 0 0 0
Other Income/Expense, Non-Operating -1497000000 -108000000 -484000000 -613000000 -292000000 -825000000 -223000000 -222000000
Pretax Income 90734000000 24402000000 23064000000 21985000000 21283000000 18689000000 13359000000 8277000000
Provision for Income Tax -14701000000 -3760000000 -4128000000 -3460000000 -3353000000 -3462000000 -2112000000 -1318000000
Net Income from Continuing Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Extraordinary Items and Discontinued Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Non-Controlling/Minority Interests 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Diluted Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Income Statement Supplemental Section
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Reported Effective Tax Rate 0.162 0.179 0.157 0.158 0.158 0.159
Reported Normalized Income
Reported Normalized Operating Profit
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Basic EPS from Continuing Operations 113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21
Basic EPS from Discontinued Operations
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Diluted EPS from Continuing Operations 112.2 30.67 27.99 27.26 26.29 22.23 16.4 10.13
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Reported Normalized Diluted EPS
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Fiscal year end September 28th., 2022. | USD

31622,6:39 PM
Morningstar.com Intraday Fundamental Portfolio View Print Report Print

3/6/2022 at 6:37 PM

At least 1 approving review is required by reviewers with write access.
Some checks haven’t completed yet
8 expected checks
Build and deploy Azure preview environment Expected — Waiting for status to be reported
Required
Prevent merging during deployment freezes Expected — Waiting for status to be reported
Required
test (content) Expected — Waiting for status to be reported
Required
test (graphql) Expected — Waiting for status to be reported
Required
test (meta) Expected — Waiting for status to be reported
Required
test (rendering) Expected — Waiting for status to be reported
Required
test (routing) Expected — Waiting for status to be reported
Required
test (unit) Expected — Waiting for status to be reported
Required
Merging is blocked
Merging..., :automatically :autoupdates :Update :Automate'@instructions.yml'@WORKFLOWS/dispatch'@repositories'@zakwarlord7 :
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
Remember, contributions to this repository should follow its contributing guidelines, security policy, and code of conduc

Contributor Covenant Code of Conduct
Our Pledge
We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

Our Standards
Examples of behavior that contributes to a positive environment for our community include:

Demonstrating empathy and kindness toward other people
Being respectful of differing opinions, viewpoints, and experiences
Giving and gracefully accepting constructive feedback
Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
Focusing on what is best not just for us as individuals, but for the overall community
Examples of unacceptable behavior include:

The use of sexualized language or imagery, and sexual attention or advances of any kind
Trolling, insulting or derogatory comments, and personal or political attacks
Public or private harassment
Publishing others' private information, such as a physical or email address, without their explicit permission
Contacting individual members, contributors, or leaders privately, outside designated community mechanisms, without their explicit permission
Other conduct which could reasonably be considered inappropriate in a professional setting
Enforcement Responsibilities
Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

Scope
This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.

Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at opensource@github.com. All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

Enforcement Guidelines
Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:

1. Correction
Community Impact: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.

Consequence: A permanent ban from any sort of public interaction within the community.

Attribution
This Code of Conduct is adapted from the Contributor Covenant, version 2.0, available at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Community Impact Guidelines were inspired by Mozilla's code of conduct enforcement ladder.

For answers to common questions about this code of conduct, see the FAQ at https://www.contributor-covenant.org/faq. Translations are available at https://www.contributor-covenant.org/translations.
:Build ::AUTOMATES ALL AUTOMATE AUTOMATES :
::Publish :
::Launch :
::Deployee :
::Release :
const :constructs :PARADICE CONSTRUCTION'@StarGazers/Daylillies.yml :

Balancing..., :Account ::'::Updateing..., :autoupdate ::'::AUTOMATE:
AUTOMATING..,
::ALL:'::AUTOMATE:'' :
'::AUTOMATES:''AUTOMATE :,"Account.Activity.
'#'Detaile'(":Builds::{' "build'script ':'' '#'Liist'"'' '}':'' :
Register Compare: Check Off: Add to Your Account Register Balance: Subtract From Your Account Register Balance:
Update Your Statement Information
Step 1:
Add together deposits and other additions listed in your account register but not on your statemen t. Step 3:
Enter the ending balance recorded on your statement
Add deposits and other additions not recorded
Subtract checks and other deductions not recorded Total B - $
The result should equal your account register balance
Business Checking For 24-hour account information, sign pnc.com/mybusin@ss/ Business Checking Account number: 47-2041-6547 - continuod
Activity Dotail
Deposits and Other Additions
ACH Additions
Date posted
00/27
Checks and Other Deductions
ACH Deductions
Date posted
26-Apr
Servicø Charges and Fees
Date posted
27-Apr
Detail of Services Used During Current Period
Vote: The total charge for the following services Will be posted to your account on 05/02/1022 and w (harge Period Ending 04/29/2022,
•discription Amount Maintenance Charge tal For Se•vices Used This Period bal Service (barge
Verification of Direct Deposit
To verify whether 8 AM - a 5 direct PM ET deposit at the or customer other transfer service to number your account listed on has the occurred, upper right call us side Monday of the first - Friday: page of 7 AM this - statement.10 PM ET and Saturday & Sunday:
In Case of Errors or Questions About Your Electronic Transfers Telephone us at the customer service number listed on the upper right side of the first page of this statement or write us at PNC Bank Debit Card Services, 500 First Avenue, 4th Floor, Mailstop P7-PFSC-04-M' Pittsburgh, PA 15219
as soon as you can, if you think your statement 60 or receipt is wrong or if you need more information about a transfer on the statement or receipt. We must hear from you no later than 60 days after we sent you the FIRST statement on which the error or problem appeared.
Tell us your name and account number (if any). Describe the error or the transfer you are unsure about, and explain as clearly as you can why you believe it is an error or why you need more information.
Tell us the dollar amount of the suspected error.
We will investigate your complaint and will correct any error promptly.
If we take longer than 10 business days,
we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it takes us to complete our investigation.
Member FDIC 7364 Features
1 Earnings Statement A
ALPHABET
Period Beginning: 37151
1600 AMPITHEATRE PARKWAY DR Period Ending: 44833
MOUNTAIN VIEW, C.A., 94043 Pay Date: 44591
"Taxable Marital Status: Net Pay 70842743866 70842743866
CHECKING
Net Check 70842743866
Your federal taxable wages this period are $
ALPHABET INCOME Advice number: 650001
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Pay date: 44669
Deposited to the account Of xxxxxxxx6547 transit ABA
"PLEASE READ THE IMPORTANT DISCLOSURES BELOW
20210418
EIN: 61-1767919 ID : 00037305581 SSN: 633441725
Gross
70842745000 Earnings Statement
Taxes / Deductions Stub Number: 1
0
Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 4/18/2022
Rate Units Total YTD Taxes / Deductions Current YTD
- - 70842745000 70842745000 Federal Withholding 0 0
FICA - Social Security 0 8853.6
FICA - Medicare 0 0
Employer Taxes
FUTA 0 0
SUTA 0 0 70842745000 XXX-XX-1725 Annually
Detaile on

                                                             Back.                                                                            MP } EXECUTOR/
                                           {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO 
                                                                                                                                              MP }PERSONAL
                                           {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO
                                                                                                                                              MP } TRUSTEE
                                           {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO
                                                                                                                                              MP }PERSONAL
                                           {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTH
                                                                                                                                              MP } TRUSTEE
                                           {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO
Security enhanced document. See back for details NO. 000101 This report doesn't include the pay back amount of deferred Employee Social Security Tax." Commission Employer Customized Repor Internal Revenue Service Submission Procceing Center
United States Department of the Treasury INTERNAL REVENUE SERVICE, Business Checking For 24-hour account information, sign on to DOLLARS PO BOX 1214, pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued
$ CHARLOTTE, NC 28201-1214 Activity Detail
5/4/2022 - 6/4/2022. Deposits and Other Additions
"PLEASE READ THE IMPORTANT DISCLOSURES BELOW ZACHRY WOOD ACH Additions
PNC Bank 15 Date posted
PNC Bank For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. 27-Apr
Business Tax I.D. Number: 633441725 Cat. No. 11320B Checks and Other Deductions
CIF Department (Online Banking) Form 1040 (2021) Deductions
Checking Account: 47-2041-6547P7-PFSC-04-F Reported Normalized and Operating Income/Expense Supplemental Section Date posted
Business Type: Sole ProprietorshipPartnership Corporation Total Revenue as Reported, Supplemental 26-Apr
500 First Avenue ALPHABET Pittsburgh, PA 15219-3128 Total Operating Profit/Loss as Reported, Supplemental Service Charges and Fees
5323 BRADFORD DR NON-NEGOTIABLE INTERNAL REVENUE SERVICE, Date posted
DALLAS TX 75235 8313 ZACHRY, TYLER, WOOD PO BOX 1214, 27-Apr
4/18/2022 650-2530-000469-697-4300 CHARLOTTE, NC 28201-1214 Detail of Services Used During Current Period
Time Zone: Eastern Central Mountain Pacific Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,
Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value" ZACHRY WOOD Description
This Product Contains Sensitive Taxpayer Data 15 Account Maintenance Charge
Request Date: 08-02-2022 For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. Total For Services Used This Peiiod
Response Date: 08-02-2022 Cat. No. 11320B Total Service (harge
Tracking Number: 102398244811 Form 1040 (2021) Reviewing Your Statement
Account Transcript Reported Normalized and Operating Income/Expense Supplemental Section Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.
FORM NUMBER: 1040 Total Revenue as Reported, Supplemental Income Statement
TAX PERIOD: Dec. 31, 2020 Total Operating Profit/Loss as Reported, Supplemental USD in "000'"s
TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725 Reported Effective Tax Rate Repayments for Long Term Debt
ZACH T WOO Reported Normalized Income Dec. 31, 2020 Dec. 31, 2019
3050 R Reported Normalized Operating Profit Costs and expenses:
--- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT --- Other Adjustments to Net Income Available to Common Stockholders Cost of revenues
ACCOUNT BALANCE: 0.00 Discontinued Operations 182527 161857
ACCRUED INTEREST: 0.00 AS OF: Mar. 28, 2022 Basic EPS Research and development
ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022 Basic EPS from Continuing Operations Sales and marketing
ACCOUNT BALANCE Basic EPS from Discontinued Operations 84732 71896
PLUS ACCRUALS Diluted EPS General and administrative
(this is not Diluted EPS from Continuing Operations 27573 26018
a payoff amount): 0.00 Diluted EPS from Discontinued Operations European Commission fines
** INFORMATION FROM THE RETURN OR AS ADJUSTED ** Basic Weighted Average Shares Outstanding 17946 18464
EXEMPTIONS: 00 Diluted Weighted Average Shares Outstanding Total costs and expenses
FILING STATUS: Single Reported Normalized Diluted EPS 11052 9551
ADJUSTED GROSS INCOME: Basic EPS Income from operations
TAXABLE INCOME: Diluted EPS 0 1697
TAX PER RETURN: Basic WASO Other income (expense), net
SE TAXABLE INCOME TAXPAYER: Diluted WASO 141303 127626
SE TAXABLE INCOME SPOUSE: Fiscal year end September 28th., 2022. | USD Income before income taxes
TOTAL SELF EMPLOYMENT TAX: 41224 34231
RETURN NOT PRESENT FOR THIS ACCOUNT For Paperwork Reduction Act Notice, see the seperate Instructions. Provision for income taxes
6858000000 5394
Net income
22677000000 19289000000
*include interest paid, capital obligation, and underweighting
22677000000 19289000000
22677000000 19289000000
important information Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

2012201320142015ZACHRY.T.5323.DALLAS.Other.Benefits.and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date 
$0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A "
For Paperwork Reduction Act Notice, see the seperate Instructions.

2012201320142015ZACHRY.T.5323.DALLAS.Other.Benefits.and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date 
$0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A " Internal Revenue Service

2012201320142015ZACHRY.T.5323.DALLAS.Other.Benefits.and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date 
$0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A "

important information

2012201320142015ZACHRY.T.5323.DALLAS.Other.Benefits.and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date 
$0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A "

                                                                      We will investigate your complaint and will correct any error promptly, If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it ekes us to complete our investigation.                                                                                                    
                                                                      Member FDIC             ** INFORMATION FROM THE RETURN OR AS ADJUSTED **                                          
Business Checking For 24-hour account information, sign on to
pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued
Activity Detail
Deposits and Other Additions
ACH Additions
Date posted
27-Apr
Checks and Other Deductions
Deductions
Date posted
26-Apr
Service Charges and Fees
Date posted
27-Apr
Detail of Services Used During Current Period
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,
Description
Account Maintenance Charge
Total For Services Used This Peiiod
Total Service (harge
Reviewing Your Statement
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.
Income Statement
USD in "000'"s
Repayments for Long Term Debt P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation General and Administrative Expenses -13510000000 -4140000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000 #NAME? -36422000000 -11744000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000
Dec. 31, 2020 Dec. 31, 2019 500 First Avenue ALPHABET Selling and Marketing Expenses -22912000000 -7604000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000 -13510000000 -4140000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000
Costs and expenses: Pittsburgh, PA 15219-3128 5323 BRADFORD DR Research and Development Expenses -31562000000 -8708000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000 -22912000000 -7604000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000 Security enhanced document. See back for details NO. 000101 This report doesn't include the pay back amount of deferred Employee Social Security Tax." Commission Employer Customized Report Internal Revenue Service Submission Procceing Center "Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others.
Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax." Commission
"Employer Customized Report
ADP
Report Range5/4/2022 - 6/4/2022" 88-1656496 state ID: 633441725 State: All Local ID: 00037305581 2267700
Customized Report Amount "Employee Payment Report
ADP"
"Employee Number: 3
Description"
Wages, Tips and Other Compensation 22662983361014 Report Range: Tips
Taxable SS Wages 215014.49 "Name:
SSN:" 0
Taxable SS Tips 0 Payment Summary
Taxable Medicare Wages 22662983361014 Salary Vacation hourly OT
Advanced EIC Payment 0 3361013.7
Federal Income Tax Withheld 8385561229657 Bonus 0 0
Employee SS Tax Withheld 13330.9 0 Other Wages 1 Other Wages 2
Employee Medicare Tax Withheld 532580113436 Total 0 0
State Income Tax Withheld 0 22662983361014
"Local Income Tax Withheld
Customized Employer Tax Report" 0 Deduction Summary
Description Amount Health Insurance
"Employer SS Tax
Employer Medicare Tax" 13330.9 0
Federal Unemployment Tax 328613309009 Tax Summary
State Unemployment Tax 441.7 Federal Tax 7 Total Tax
Customized Deduction Report 840 $8,385,561,229,657@3,330.90 Local Tax
Health Insurance 0
401K 0 Advanced EIC Payment 8918141356423
0 0 Total
401K
0 0

                                                    Social Security Tax Medicare TaxState Tax                                                                                        
                                                            $532,580,113,050)                                                                                
SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.
The Definitive Proxy Statement and any other relev8.ant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.

The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available. 9246754678763

3/6/2022 at 6:37 PM
Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020

GOOGL_income-statement_Quarterly_As_Originally_Reported 24934000000 25539000000 37497000000 31211000000 30818000000
24934000000 25539000000 21890000000 19289000000 22677000000
Cash Flow from Operating Activities, Indirect 24934000000 25539000000 21890000000 19289000000 22677000000
Net Cash Flow from Continuing Operating Activities, Indirect 20642000000 18936000000 18525000000 17930000000 15227000000
Cash Generated from Operating Activities 6517000000 3797000000 4236000000 2592000000 5748000000
Income/Loss before Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000
Total Adjustments for Non-Cash Items 3439000000 3304000000 2945000000 2753000000 3725000000
Depreciation, Amortization and Depletion, Non-Cash Adjustment 3215000000 3085000000 2730000000 2525000000 3539000000
Depreciation and Amortization, Non-Cash Adjustment 224000000 219000000 215000000 228000000 186000000
Depreciation, Non-Cash Adjustment 3954000000 3874000000 3803000000 3745000000 3223000000
Amortization, Non-Cash Adjustment 1616000000 -1287000000 379000000 1100000000 1670000000
Stock-Based Compensation, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Taxes, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Investment Income/Loss, Non-Cash Adjustment -14000000 64000000 -8000000 -255000000 392000000
Gain/Loss on Financial Instruments, Non-Cash Adjustment -2225000000 2806000000 -871000000 -1233000000 1702000000
Other Non-Cash Items -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Changes in Operating Capital -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Change in Trade and Other Receivables -399000000 -1255000000 -199000000 7000000 -738000000
Change in Trade/Accounts Receivable 6994000000 3157000000 4074000000 -4956000000 6938000000
Change in Other Current Assets 1157000000 238000000 -130000000 -982000000 963000000
Change in Payables and Accrued Expenses 1157000000 238000000 -130000000 -982000000 963000000
Change in Trade and Other Payables 5837000000 2919000000 4204000000 -3974000000 5975000000
Change in Trade/Accounts Payable 368000000 272000000 -3000000 137000000 207000000
Change in Accrued Expenses -3369000000 3041000000 -1082000000 785000000 740000000
Change in Deferred Assets/Liabilities
Change in Other Operating Capital
-11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Change in Prepayments and Deposits -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Cash Flow from Investing Activities
Cash Flow from Continuing Investing Activities -6383000000 -6819000000 -5496000000 -5942000000 -5479000000
-6383000000 -6819000000 -5496000000 -5942000000 -5479000000
Purchase/Sale and Disposal of Property, Plant and Equipment, Net
Purchase of Property, Plant and Equipment -385000000 -259000000 -308000000 -1666000000 -370000000
Sale and Disposal of Property, Plant and Equipment -385000000 -259000000 -308000000 -1666000000 -370000000
Purchase/Sale of Business, Net -4348000000 -3360000000 -3293000000 2195000000 -1375000000
Purchase/Acquisition of Business -40860000000 -35153000000 -24949000000 -37072000000 -36955000000
Purchase/Sale of Investments, Net
Purchase of Investments 36512000000 31793000000 21656000000 39267000000 35580000000
100000000 388000000 23000000 30000000 -57000000
Sale of Investments
Other Investing Cash Flow -15254000000
Purchase/Sale of Other Non-Current Assets, Net -16511000000 -15254000000 -15991000000 -13606000000 -9270000000
Sales of Other Non-Current Assets -16511000000 -12610000000 -15991000000 -13606000000 -9270000000
Cash Flow from Financing Activities -13473000000 -12610000000 -12796000000 -11395000000 -7904000000
Cash Flow from Continuing Financing Activities 13473000000 -12796000000 -11395000000 -7904000000
Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net -42000000
Payments for Common Stock 115000000 -42000000 -1042000000 -37000000 -57000000
Proceeds from Issuance of Common Stock 115000000 6350000000 -1042000000 -37000000 -57000000
Issuance of/Repayments for Debt, Net 6250000000 -6392000000 6699000000 900000000 0
Issuance of/Repayments for Long Term Debt, Net 6365000000 -2602000000 -7741000000 -937000000 -57000000
Proceeds from Issuance of Long Term Debt
Repayments for Long Term Debt 2923000000 -2453000000 -2184000000 -1647000000

Proceeds from Issuance/Exercising of Stock Options/Warrants 0 300000000 10000000 338000000000
Other Financing Cash Flow
Cash and Cash Equivalents, End of Period
Change in Cash 20945000000 23719000000 23630000000 26622000000 26465000000
Effect of Exchange Rate Changes 25930000000) 235000000000) -3175000000 300000000 6126000000
Cash and Cash Equivalents, Beginning of Period "PAGE=""$USD(181000000000)"".XLS" "BRIN=""$USD(146000000000)"".XLS" 183000000 -143000000 210000000
Cash Flow Supplemental Section 23719000000000 26622000000000 26465000000000 20129000000000
Change in Cash as Reported, Supplemental 2774000000 89000000 -2992000000 6336000000
Income Tax Paid, Supplemental 13412000000 157000000
ZACHRY T WOOD -4990000000
Cash and Cash Equivalents, Beginning of Period
Department of the Treasury
Internal Revenue Service
Q4 2020 Q4 2019
Calendar Year
Due: 04/18/2022
Dec. 31, 2020 Dec. 31, 2019
"USD in ""000'""s"
Repayments for Long Term Debt 182527 161857
Costs and expenses:
Cost of revenues 84732 71896
Research and development 27573 26018
Sales and marketing 17946 18464
General and administrative 11052 9551
European Commission fines 0 1697
Total costs and expenses 141303 127626
Income from operations 41224 34231
Other income (expense), net 6858000000 5394
Income before income taxes 22677000000 19289000000
Provision for income taxes 22677000000 19289000000
Net income 22677000000 19289000000
*include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
*include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

            20210418                                                                                                                                
                    Rate        Units        Total        YTD        Taxes / Deductions        Current        YTD                                                                        
                    -        -        70842745000        70842745000        Federal Withholding        0        0                                                                        
                                                    FICA - Social Security        0        8853.6                                                                        
                                                    FICA - Medicare        0        0                                                                        
                                                    Employer Taxes                                                                                        
                                                    FUTA        0        0                                                                        
                                                    SUTA        0        0                                                                        
    EIN: 61-1767919        ID : 00037305581         SSN: 633441725                                                                                                                        
                                                                                                                                            
            Gross                                                                                                                                
            70842745000        Earnings Statement                                                                                                                        
            Taxes / Deductions        Stub Number: 1                                                                                                                        
            0                                                                                                                                
            Net Pay        SSN        Pay Schedule        Pay Period        Sep 28, 2022 to Sep 29, 2023        Pay Date        4/18/2022                                                                                
            70842745000        XXX-XX-1725        Annually                                                                                                                
INTERNAL REVENUE SERVICE,
PO BOX 1214,
CHARLOTTE, NC 28201-1214

ZACHRY WOOD
15 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
Cat. No. 11320B 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
Form 1040 (2021) 76033000000 20642000000 18936000000
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 41159000000 46075000000 40499000000
Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000 7977000000 9266000000 9177000000
Reported Effective Tax Rate 0.16 0.179 0.157 0.158 0.158 0.159 0.119 0.181
Reported Normalized Income 6836000000
Reported Normalized Operating Profit 7977000000
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2
Basic EPS from Continuing Operations 113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
Basic EPS from Discontinued Operations
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
Diluted EPS from Continuing Operations 112.2 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000
Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000
Reported Normalized Diluted EPS 9.87
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2 1
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000
Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000
Fiscal year end September 28th., 2022. | USD

For Paperwork Reduction Act Notice, see the seperate Instructions.

important information

Description

Restated Certificate of Incorporation of PayPal Holdings, Inc.
(incorporated by reference to Exhibit 3.01 to PayPal Holdings, Inc.'s
Quarterly Report on Form 10-Q, as filed with the Commission on
July 27, 2017).

Amended and Restated Bylaws of PayPal Holdings, Inc. (incorporated
by reference to Exhibit 3.1 to PayPal Holdings, Inc.'s Current Report
on Form 8-K, as filed with the Commission on January 18, 2019).

Opinion of Faegre Drinker Biddle & Reath LLP.

Consent of PricewaterhouseCoopers LLP, Independent Registered Public
Accounting Firm.

Consent of Faegre Drinker Biddle & Reath LLP (included in
Exhibit 5.1 to this Registration Statement).

Power of Attorney (included on the signature page of this
Registration Statement).

All of Us Financial Inc. 2021 Equity Incentive Plan.

Filing Fee Table.

"Business Checking
For 24-hour account information, sign on to"
"pnc.com/mybusiness/
Business Checking Account number: 47-2041-6547 - continued"
Activity Detail
Deposits and Other Additions
ACH Additions
Date posted Amount Transaction description "For the period 04/13/2022 to 04/29/2022
ZACHRY TYLER WOOD
Primary account number: 47-2041-6547 Page 2 of 3"
44678 62.5 "Reverse Corporate ACH Debit
Effective 04-26-22" Reference number
Checks and Other Deductions 22116905560149
Deductions Reference number
Date posted Amount Transaction description 22116905560149
44677 62.5 Corporate ACH Quickbooks 180041ntuit 1940868 Reference number
Service Charges and Fees 22116905560149
Date posted Amount Transaction description "on your next statement as a single line item entitled Service
Waived - New Customer Period"
44678 36 Returned Item Fee (nsf)
Detail of Services Used During Current Period
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,
Description Volume Amount
Account Maintenance Charge 70846743866 0
Total For Services Used This Peiiod 0 0
Total Service (harge "00
" 0
Reviewing Your Statement ('PNCBANK
"Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if:
you have any questions regarding your account(s); your name or address is incorrect;
• you have any questions regarding interest paid to an interest-bearing account." É "— )
d" "l
I"
"Balancing Your Account
Update Your Account Register"
"Certified Copy of Resolutionsl
Authorizations For Accounts And Loans" @PNCbank
(Corporations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other Organizations) step 2: Add together checks and other deductions listed in your account register but not on your statement.
"PNC Bank, National Association (""Bank"")" Taxpayer I.D. Number (TIN) "C'eck
Deduction Descretio•" Anount
"(iv)
(v)" account or benefit, or in payment of the individual obligations of, any individual obligations of any such persons to the Bank without regard to the disposition or purpose of same as allowed by applicable law. D pNCBANK
"In addition but not by way of limitation, the Bank may take checks, drafts or other items payable to ""cash"", the Bank or the Customer, and pay the sums represented by such Items in cash to any person presenting such items or credit such Items to the account or obligations of any person presenting such items or any other person or entity as directed by any such person."
4 Products and Services. Resolved that any of the persons listed in Section 3 above are authorized to enter into contracts and agreements, written or verbal, for any products or services now or in the future offered by the Bank, including but not limited to (i) cash management services, (ii) purchases or sales of foreign exchange, securities or other financial products, (iii) computer/internet-based products and services, (iv) wire transfer of funds from or to the accounts of the Customer at the Bank, and (v) ACH transactions, and the Bank may charge any accounts of the Customer at the Bank for such products or services.
5 Loans and Extensions of Credit. Resolved that any one of the following: Taxpayer I.D. Number (TIN)
OWNER "(""Customer"")" 633-44-1725
are hereby authorized (i) to effect loans, advances and renewals at any time for the Customer from the Bank; (ii) to sign and deliver any notes (with or without warrant of attorney to confess judgment) and evidences of indebtedness of the Customer; (iii) to request the Bank to issue letters of credit and to sign and deliver to the bank any agreements on behalf of the Customer to reimburse the Bank for all payments made and expenses incurred by it under such letters of credit and drafts drawn pursuant thereto; (iv) to sign and deliver any instruments or documents on behalf of the Customer guaranteeing, endorsing or securing the payment of any debts or obligations of any person, form or corporation to the Bank; (v) to pledge, assign, transfer, mortgage, grant a security interest in or otherwise hypothecate to the Bank any stock, securities, commercial paper, warehouse receipts and other documents of title, bills, accounts receivable, contract rights, inventory, equipment, real property, and any other investments or property of the Customer, real or personal, tangible or intangible as security for the payment of any and all loans, advances, indebtedness and other liabilities of the Customer to the Bank of every kind and description, direct or indirect, absolute and contingent, joint or several, whether as drawer, maker, endorsee, guarantor, surety or otherwise, and to execute on behalf of the Customer mortgages, pledges, security agreements, financing statements and other instruments or documents in connection therewith; and (vi) to sell or discount with the Bank any commercial paper, bills and other instruments and evidence of indebtedness, warehouse receipts and other documents of title, accounts, accounts receivable, contract rights, and other assets, tangible and intangible, at any time held by the Customer and for such purpose to endorse, assign, transfer and deliver the same to the Bank. 5 c
6 Revolving Credits. Resolved that in connection with any extension of credit obtained by any of the persons authorized in Section 5 above, that permit the Customer to effect multiple advances or draws under such credit, any of the persons listed in Sections 5 (Loans and Extensions of Credit) and 3 (Withdrawals and Endorsements) Resolution for ALPHABET
7 Telephonic and Facsimile Requests. Resolved that the Bank is authorized to take any action authorized hereunder based upon (i) the telephone request of any person purporting to be a person authorized to act hereunder, (ii) the signature of any person authorized to act hereunder that is delivered to the Bank by facsimile transmission, or (iii) the telex originated by any of such persons, tested in accordance with such testing : "Tr
R
•d
Ming"
"or serVlCö n lent services, (ii) purchases or sales of foreig xlll) computerfinternet-based products and services, (iv) wir he Customer at the Bank, and (v) ACH transactions, and the Ba the Bank for such products or services.
It. Resolved that any one of the following:" "procedures as may be established between the Customer and the Bank from time to time.
General. Resolved that a certified copy of these resolutions be delivered to the Bank; that the persons specified herein are vested with authority to act and may designate successor persons to act on behalf of Customer"
8 without further authority from the Customer or governing body; and that Bank may rely on the authority given by this resolution until actual receipt by the Bank of a certified copy of a new resolution modifying or revoking the
/ Customer Copy, page 2 of 4
90 7.9>•» Withdrawals and Transfers. Resolved that the Bank is authorized to make payments from the account(s) of
15235 Customer according to any check, draft, bill of exchange, acceptance or other written instrument or direction signed by any one of the following individuals, officers or designated agents, and that such designated individuals may also otherwise transfer, or enter into agreements with Bank concerning the transfer, of funds from Customer's account(s), whether by telephone, telegraph, computer or any other manner:
0
DALLAS

IRS Column1
CINCINNATI OH 45999-0023
Date of this notice: 44658 i
Employer Identification Number: 88-1656496
Form: SS-4
Number of this notice: CP 575 A
For assistance you may call us at:
1-800-829-4933
75235
"IF YOU WRITE, ATTACH THE
STUB AT THE BD OF THIS NOTICE."
We assigned you
This EIN will identify you, your business accounts, tax returns, and
"WE ASSIGNED YOU AN EMPLOYER IDENTIFICATION NUMBER
Thank you for applying for an Employer Identification Number (EIN) . "
EIN 88-1656496. If the information is
"documents, even if you have no employees. Please keep this notice in your permanent records .
Taxpayers request an EIN for their business. Some taxpayers receive CP575 notices when another person has stolen their identity and are opening a business using their information. If you did not apply for this EIN, please contact us at the phone number or address listed on the top of this notice.
When filing tax documents, making payments, or replying to any related correspondence, it is very important that you use your EIN and complete name and address exactly as shown above. Any variation may cause a delay in processing, result in incorrect information in"
your account, or even cause you to be assigned more than one EIN. 44658
"not correct as shown above, please make the correction using the attached tear-off stub and return it to us .
Based on the information received from you or your representative, you must file the following forms by the dates shown." 44658
Form 941 44658
Form 940 44658
Form 943 44658
Form 1065
Form 720 Please b
"Your Form 2290 becomes due the month after your vehicle is put into use.
Your Fom 1 IC and/or 730 becomes due the month after your wagering starts.
After our review of your information, we have determined that you have not filed" If there is a balance due on the return (s)
tax returns for the above-mentioned tax period (s) dating as far back as 2007.
file your return(s) by 04/22/2022. If you were not in business or did not hire any employees
penalties and interest will continue to accumulate from the due date of the return (s)
until it is filed and paid. 6.35- 6.35-
"for the tax period(s) in question, please file the return (s) showing you have no liabilities .
If you have questions about at the the forms address or the shown due at dates the top shown, of you this can notice. call us If atyou the phone number or write to us Publication 538,
need help in determining your annual accounting period (tax year) , see Accounting Periods and Methods." 8
Total Year to Date 3,
Total for this Period
Overdraft and Returned Item Fee Summary 36 36
18
Total Returned Item Fees (NSF) t ly of
Items Amount "Checks and Other Deductions
Description" Items Amount
1 62.5 ACH Deductions 1 62.5 he
"Deposits and Other Additions
Description" Service Charges and Fees 1 36
ACH Additions 1 62.5 Total 2 98.5
Date Ledger balance Date Ledger balance
Total
Daily Balance (279 62.50- 44678 36
Date Ledger balance * You'
202
Alphabet Inc Class C GOOG otm corr
esti
2814 TM 27.8414.76% 63500 53.:
202
Fair Value Estimate 2160 gro
550 ovr
Consider Buying Price "Ri: ou
co m or f!
V n
c Ir c re bl cc
Al
e"
Consider Selling Price
"Fair Value Uncertainty
Economic Moat
Stewardship Grade"
02-01-2022 1 by Ali Mogharabi
Business Strategy & Outlook 02-01-2022

Analyst Digest 1 633-44-1725 10-15-94 Portfolio April 04,2022 - April 03,2022
Berkshire Hathaway Inc Class A BRK.A

            525000                                                                                                                                
527760 $0.001 0.00% 367500
Fair Value Estimate
Consider Buying Price "$708,750.00
Medium
Wide" 20
Standard "R
s"
"Consider Selling Price
Fair Value Uncertainty
Economic Moat"
Stewardship Grade
03-11-2022 1 by Greggory Warren
Business Strategy & Outlook 03-11-2022
While 2020 was an extremely difficult year for Berkshire Hathaway, with a nearly 10% decline in operating earnings and a more than 40% decline in reported net earnings, the firm's overall positioning improved as the back half of the year progressed. The firm saw an even more marked improvement in its insurance investment portfolio, as well as the operating results of its various subsidiaries, last year. As such, we expect 2022 and 2023 to be a return to more normalized levels of revenue growth and profitability (albeit with inflation impacting results in the first half of this year).We continue to view Berkshire's decentralized business model, broad business diversification, high cash-generation capabilities, and unmatched balance sheet strength as true differentiators. While these advantages have been overshadowed by an ever-expanding cash balance-ANhich is earning next to nothing in a near-zero interest-rate environment--we believe the company has finally hit a nexus where it is far more focused on reducing its cash hoard through stock and bond investments and share repurchases. During the past eight calendar quarters, the
When filing tax documents, ING payments, or replying to any related correspondence,
it is very important that you use your EIN and complete name and address exactly as shown above. Any variation may cause a delay in processing, result in incorrect information in
your account, or even cause you to be assigned more than one EIN. If the information is
"not correct as shown above, please make the correction using the attached tear-off stub and return it to us .
Based on the information received from you or your representative, you must file the following forms by the dates shown." We assigned you
44658
Form 940 44658
Form 943 44658 If the information is
Form 1065 44658
Form 720 44658
"Your Form 2290 becomes due the month after your vehicle is put into use .
Your Form 1 IC and/or 730 becomes due the month after your wagering starts .
After our review of your information, we have determined that you have not filed"
tax returns for the above-mentioned tax period (s) dating as far back as 2007. Plea S
file your return(s) by 04/22/2022. If there is a balance due on the return (s)
penalties and interest will continue to accumulate from the due date of the return (s)
until it is filed and paid. If you were not in business or did not hire any employees
"for the tax period(s) in question, please file the return (s) showing you have no liabilities .
If you have questions about the forms or the due dates shown, you can call us at" PI
the phone number or write to us at the address shown at the top of this notice. If you
need help in determining your annual accounting period (tax year) , see Publication 538, Accounting Periods and Methods.

"Business Checking
PNCBANK" @PNCbank
For the period 04/13/2022 Primary account number: 47-2041-6547 Page 1 of 3
5/19/2302 1022462 Q 304 Number of enclosures: 0
"ZACHRY TYLER WOOD ALPHABET
5323 BRADFORD DR
DALLAS TX 75235-8314" "For 24-hour banking sign on to
PNC Bank Online Banking on pnc.com
FREE Online Bill Pay
For customer service call 1-877-BUS-BNKG
PNC accepts Telecommunications Relay Service (TRS) calls." 9
11111111101111100000000000000000000000000000000000000000000000000.00% "Para servicio en espalol, 1877.BUS-BNKC,
Moving? Please contact your local branch.
@ Write to: Customer Service PO Box 609
Pittsburgh , PA 15230-9738
Visit us at PNC.com/smaIIbusiness"
IMPORTANT INFORMATION FOR BUSINESS DEPOSIT CUSTOMERS Date of this notice:
"Effective February 18,2022, PNC will be temporarily waiving fees for statement, check image, deposit ticket and deposited item copy requests until further notice. Statement, check image, deposit ticket and deposited Item requests will continue to be displayed in the Details of Services Used section of your monthly statement. We will notify you via statement message prior to reinstating these fees.
If vou have any questions, you may reach out to your business banker branch or call us at 1-877-BUS-BNKG (1-877-287-2654)." 44658
"Business Checking Summary
Account number; 47-2041-6547
Overdraft Protection has not been established for this account. Please contact us if you would like to set up this service." zachlY Tyler Wood Alphabet Employer Identification Number: 88-1656496
Balance Summary Checks and other deductions Ending balance Form: SS-4
Beginning balance Deposits and other additions Number of this notice: CP 575 A
0 62.5 98.50 Average ledger balance "36.00-
Average collected balance" For assistance you may call ug at:
6.35- 6.35- 1-800-829-4933
Overdraft and Returned Item Fee Summary Total Year to Date
Total for this Period
Total Returned Item Fees (NSF) 36 36 "IF YOU WRITE, ATI'AcH TYE
STUB AT OYE END OF THIS NOTICE."
"Deposits and Other Additions
Description" Items Amount "Checks and Other Deductions
Description" Items Amount
ACH Additions 1 62.5 ACH Deductions 1 62.5 We assigned you
Service Charges and Fees 1 36
Total 1 62.5 Total 2 98.5
Daily Balance Date Date Ledger balance If the information is
Date Ledger balance Ledger balance
44664 0 44677 62.50- 44678 36
Form 940 44658
Berkshire Hatha,a,n..
Business Checking For O. period 04/13/2022 44680
For 24-hour account information, sign on to pnc.com/mybusiness/ ZACHRY TYLER WOOD
Primary account number: 47-2041-6547 Page 2 of 3 Please
Business Checking Account number: 47-2041-6547 - continued
Acüvity Detail
Deposits and Other Additions did not hire any employee
ACH Additions Referenc numb
Date posted 04/27 "Transaction
Amount description
62.50 Reverse Corporate ACH Debit
Effective 04-26-22" the due dates shown, you can call us at
22116905560149 If you
Checks and Other Deductions
ACH Deductions Referenc
Date posted "Transaction
Amount description"
numbe
44677 70842743866 Corporate ACH Quickbooks 180041ntuit 1940868
22116905560149
ervice Charges and Fees Referenc
ate sted "Transaction
Amount descripton"
/27 70842743866 numb
tail of Services Used During Current Period 22116905560149
services will be posted to your account on 05/02/2022 and will appear on your next statement as a single line item entitled Service
e: The total charge for the following Penod Ending 04/29/2022.
"rge
cription"
ount Maintenance Charge Volume Amount
l For Services Used This Period $0)
Service Charge $0.00) Waived - Customer Period
$0.00)
"Reviewing Your Statement
of this statement if:
you have any questions regarding your account(s); your name or address is incorrect; you have any questions regarding interest paid to an interest-bearing account." PNCBANK
"Balancing Your Account
Update Your Account Register"
Compare: The activity detail section of your statement to your account register.
"Check Off: - [22/15] 00022116905560149
Add to Your Account Register Balance: $+22677000000000.00"":257637118600.00
Subtract From Your Account Register Balance:" "All items in your account register that also appear on your statement. Remember to begin with the ending date of your last statement. (An asterisk { * } will appear in the Checks section if there is a gap in the listing of consecutive check numbers.)
Any deposits or additions including interest payments and ATM or electronic deposits listed on the statement that are not already entered in your register.
Any account deductions including fees and ATM or electronic deductions listed on the statement that are not already entered in your register."
Your Statement Information : step 2: Add together checks and other deductions listed in your account register but not on your statement. i
Amount "Cieck
Deduction Descrption" Amount

Additions listed in your account register but not on your statement. on Deposit

    Total A                                                                                                                                        
Step 3: $ 8

Enter the ending balance recorded on your statement
Add deposits and other additions not recorded Total A + $

                                    Subtotal= $                                                                                                        
Subtract checks and other deductions not recorded Total B $

The result should equal your account register balance $
Total B
Verification of Direct Deposits 5

To verify whether a direct deposit or other transfer to your account has occurred, call us Monday - Friday: 7 AM - 10 PM ET and Saturday & Sunday: 8 AM - 5 PM ET at the customer service number listed on the upper right side of the first page of this statement.
"In Case of Errors or Questions About Your Electronic Transfers
Telephone us at the customer service number listed on the upper right side of the first page of this statement or write us at PNC Bank Debit Card Services, 500 First Avenue, 4th Floor, Mailstop P7-PFSC-04-M, Pittsburgh, PA 15219 as soon as you can, if you think your statement or receipt is wrong or if you need more information about a transfer on the statement or receipt. We must hear from you no later than 60 days after we sent you the FIRST statement on which the error or problem appeared.
Tell us your name and account number (if any).
Describe the error or the transfer you are unsure about, and explain as clearly as you can why you believe it is an error or why you need more information.
Tell us the dollar amount of the suspected error.
We will investigate your complaint and will correct any error promptly. If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it Cakes us to complete our investigation.
EquaLHousing Lender"
Member FDIC

                            0                                                                                                                
@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
 You’re receiving notifications because you’re watching this repository.
Footer
© 2023 GitHub, Inc.
Footer navigation
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
       flake8 
