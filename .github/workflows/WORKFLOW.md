name: NodeJS with Gulp
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    - name: Build
      run: |
        npm install
        gulp
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
GitHub-doc
Public
forked from github/docs
Code
Pull requests
Actions
Projects
Security
2
Insights
Settings
Open a pull request
Create a new pull request by comparing changes across two branches. If you need to, you can also .
    Able to merge. These branches can be automatically merged.
@zakwarlord7
Update triage-unallowed-contributions.yml
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
<!--
Thank you for contributing to this project! You must fill out the information below before we can review this pull request. By explaining why you're making a change (or linking to an issue) and what changes you've made, we can triage your pull request to the best possible team for review.
-->

### Why:

Closes ISSUE

<!-- If there's an existing issue for your change, please replace ISSUE above with a link to the issue.
If there's _not_ an existing issue, please open one first to make it more likely that this update will be accepted: https://github.com/github/docs/issues/new/choose. -->

### What's being changed (if available, include any code snippets, screenshots, or gifs):

<!-- Let us know what you are changing. Share anything that could provide the most context.
If you made changes to the `content` directory, a table will populate in a comment below with links to the preview and current production articles. -->

### Check off the following:

- [ ] I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).
- [ ] For content changes, I have completed the [self-review checklist](https://github.com/github/docs/blob/main/contributing/self-review.md#self-review).

No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
Remember, contributions to this repository should follow its contributing guidelines and code of conduct.
Reviewers
No reviews
Assignees
No one—
Labels
None yet
Projects
None yet
Milestone
No milestone
Helpful resources
Contributing
Code of conduct
GitHub Community Guidelines
 1 commit
 1 file changed
 1 contributor
Commits on Jan 4, 2023
Update triage-unallowed-contributions.yml

@zakwarlord7
zakwarlord7 committed now
  
Showing  with 2,029 additions and 20 deletions.
  2,049  
.github/workflows/triage-unallowed-contributions.yml
@@ -1,9 +1,32 @@
TOKEN: '(c')'(r') /
+ITEM_ID: 'BITORE_34173 /
+VOLUME: [12753750.00] /
+BUILD:/
+PUBLISH: /
+RELEASE: /
+DEPLOY: Repo'@iixixi/bitore.sig /
+RETURN: BEGIN:'' /
+const { indexBlocks } = require("./indexblocks");
+const { getLastIndexedBlockHeight } = require("../services/opreturn");
+const { getLastBlockHeight } = require("../services/blockchain");
+let isMonitoring = false
+/**
+* Checks for new blocks added to the blockchain and indexes OP_RETURN
+*/
+const monitor = async (c) => {join
+if (AGS)).); / 
+return: console.log("checking for new block")
+const lastBlockheight = await getLastBlockHeight(c);
+const lastIndexedBlockHeight = await getLastIndexedBlockHeight(r);
+if (lastBlockheight > lastIndexedBlockHeight) {
+await indexBlocks(lastIndexedBlockHeight, lastBlockheight);
+cache: items.(AGS)
+finally {isMonitoring = module.exports.env=is==yargs(r)).); /
+monitor: zachryiixixiiwood@gmail.com
name: Check unallowed file changes	name: Check unallowed file changes

# **What it does**: If someone changes some files in the open repo, we prevent the pull request from merging.	# **What it does**: If someone changes some files in the open repo, we prevent the pull request from merging.
# **Why we have it**: Some files can only be changed in the internal repository for security and workflow reasons.	# **Why we have it**: Some files can only be changed in the internal repository for security and workflow reasons.
# **Who does it impact**: Open source contributors.	# **Who does it impact**: Open source contributors.

on:	on:
  pull_request_target:	  pull_request_target:
    paths:	    paths:
@@ -22,10 +45,8 @@ on:
      - 'script/**'	      - 'script/**'
      - 'translations/**'	      - 'translations/**'
      - 'content/actions/deployment/security-hardening-your-deployments/**'	      - 'content/actions/deployment/security-hardening-your-deployments/**'

permissions:	permissions:
  pull-requests: write	  pull-requests: write

jobs:	jobs:
  triage:	  triage:
    if: >-	    if: >-
@@ -42,11 +63,9 @@ jobs:
        with:	        with:
          # Base branch used to get changed files	          # Base branch used to get changed files
          base: 'main'	          base: 'main'

          # Enables setting an output in the format in `${FILTER_NAME}_files	          # Enables setting an output in the format in `${FILTER_NAME}_files
          # with the names of the matching files formatted as JSON array	          # with the names of the matching files formatted as JSON array
          list-files: json	          list-files: json

          # Returns list of changed files matching each filter	          # Returns list of changed files matching each filter
          filters: |	          filters: |
            translation:	            translation:
@@ -69,15 +88,14 @@ jobs:
              - 'scripts/**'	              - 'scripts/**'
              - 'translations/**'	              - 'translations/**'
              - 'content/actions/deployment/security-hardening-your-deployments/**'	              - 'content/actions/deployment/security-hardening-your-deployments/**'
      # When there are changes to files we can't accept, leave a comment	      # When there are changes to files we can't accept, leave a comment
      # explaining this to the PR author	      # explaining this to the PR author
      - name: "Comment about changes we can't accept"	      - name: "Comment about changes we can't accept"
        if: ${{ steps.filter.outputs.notAllowed }}	        if: ${{ steps.filter.outputs.notAllowed }}
        uses: actions/github-script@2b34a689ec86a68d8ab9478298f91d5401337b7d	        uses: actions/github-script@2b34a689ec86a68d8ab9478298f91d5401337b7d
        with:	        with:
          script: |	          script: bitore.sig'
            const badFilesArr = [	            const badFilesArr'
              '.devcontainer/**',	              '.devcontainer/**',
              '.github/actions-scripts/**',	              '.github/actions-scripts/**',
              '.github/workflows/**',	              '.github/workflows/**',
@@ -92,25 +110,2016 @@ jobs:
              'package*.json',	              'package*.json',
              'scripts/**',	              'scripts/**',
              'translations/**',	              'translations/**',
              'content/actions/deployment/security-hardening-your-deployments/**',	              'content/actions/deployment/security-hardening-your-deployments/**'
            ]	
            const badFiles = badFilesArr.join('\n')	            const badFiles = badFilesArr.join('\n')
            let reviewMessage = `👋 Hey there spelunker. It looks like you've modified some files that we can't accept as contributions. The complete list of files we can't accept are:\n${badFiles}\n\nYou'll need to revert all of the files you changed in that list using [GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit) or \`git checkout origin/main <file name>\`. Once you get those files reverted, we can continue with the review process. :octocat:`	            let reviewMessage = `👋 Hey there spelunker. It looks like you've modified some files that we can't accept as contributions. The complete list of files we can't accept are:\n${badFiles}\n\nYou'll need to revert all of the files you changed in that list using [GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit) or \`git checkout origin/main <file name>\`. Once you get those files reverted, we can continue with the review process. :octocat:`
            let workflowFailMessage = "It looks like you've modified some files that we can't accept as contributions."	            let workflowFailMessage = "It looks like you've modified some files that we can't accept as contributions."
            try {	            try {
               createdComment = await github.issues.createComment({	               createdComment = await github.issues.createComment({
                owner: context.repo.owner,	                owner: context.repo.owner,
                repo: context.repo.repo,	                repo: context.repo.repo,
                issue_number: context.payload.number,	                issue_number: context.payload.number,
                body: reviewMessage,	                body: reviewMessage,
              })	TOKEN: '(c')'(r') /
+ITEM_ID: 'BITORE_34173 /
+VOLUME: [12753750.00] /
+BUILD:/
+PUBLISH: /
+RELEASE: /
+DEPLOY: Repo'@iixixi/bitore.sig /
+RETURN: BEGIN:'' /
+const { indexBlocks } = require("./indexblocks");
+const { getLastIndexedBlockHeight } = require("../services/opreturn");
+const { getLastBlockHeight } = require("../services/blockchain");
+let isMonitoring = false
+/**
+* Checks for new blocks added to the blockchain and indexes OP_RETURN
+*/
+const monitor = async (c) => {join
+if (AGS)).); / 
+return: console.log("checking for new block")
+const lastBlockheight = await getLastBlockHeight(c);
+const lastIndexedBlockHeight = await getLastIndexedBlockHeight(r);
+if (lastBlockheight > lastIndexedBlockHeight) {
+await indexBlocks(lastIndexedBlockHeight, lastBlockheight);
+cache: items.(AGS)
+finally {isMonitoring = module.exports.env=is==yargs(r)).); /
+monitor: zachryiixixiiwood@gmail.com
<!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}-->rails new webappDescriptionAmountCategoryAccountNotes

🔣 🔠 ✨":"1mvn.repo{%Data'@pika/mojoejoejoe/repositories/piper/bash/user/bin/.github/workflows/test/python javascripts/Jekylls.debugg/rake.i/Makefile.gems/.specs

bundle-on: Python.js

1.74E+12100

NON-NEGOTIABLE

Alabama, Florida, Georgia, Louisiana, Mississippi, North

Notice, see the

Alaska, Arizona, California, Colorado, Hawaii, Idaho, Kansas,

NPORT-P: Filer Information

ALPHABET

NYC Income Tax

Alphabet Inc., co.

OMB No. 1545-0120

Alphabet Inc., co. 1600 Ampihtheatre pkwy bldg .#41 MOUNTAIN VIEW, C.A. 94043-1315

or foreign postal code, and telephone no.

ALPHABET 88-1303491

Other

Payments for Common Stock

Other Financing Cash Flow

Amount

Other long-term liabilities

Ampihtheatre Pkwy.B

Overdraft Coverage: Your account is currently Opted In. You or your joint owner may revoke your

and cover any declined payments as well as transactions you made that have not yet been deducted from your

Overtime

and Paperwork

P.O. Box 1303

ANY BANK NAME

PAID

ANYTOWN, USA 10101

Pay

ANYTOWN, USA 12345

Payable to:

April 18, 2022.

PAYER'S TIN

Arkansas, Connecticut, Delaware, District of Columbia, Illinois,

Payroll check number: 633-44-1725

Attach Sch. B if required.

Phone

available accounts can be found at pnc.com.

pnc.com/overdraftsolutions. To manage both your Overdraft Coverage and Overdraft Protection

b Ordinary dividends .....

-8.43

b Taxable amount ......

Purchase/Sale of Other Non-Current Assets, Net

b Taxable interest .....

RDTROD02

b. EDGAR series identifier (if any).

RECIPIENT'S name, street address, city or town, state or province. country, and ZIP or foregnpostdcode

b. Investment Company Act file number for Registrant: (e.g., 811-______)

Regular

Rent Expense

© 2022 E*TRADE from Morgan Stanley. All rights reserved. Version 1.0. 40w301m5.2

Balance

Reported Normalized Operating Profit

Balance due:

REV 04/09/22 INTUIT.CG. 1555

BANK NAME

Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2021-01-01

Banking products and services are provided by Morgan Stanley Private Bank, National Association, Member FDIC.

Revenues recognized

Other Financing Cash Flow

1000000000(3300.00)='?''

Proceeds from Issuance of Common Stock

Securities products and services offered by E*TRADE Securities LLC, Member SIPC. Investment advisory services are offered through E*TRADE Capital Management, LLC, a Registered Investment Adviser. Commodity futures and options on futures products and services offered by E*TRADE Futures LLC, Member NFA. All are separate but affiliated subsidiaries of Morgan Stanley.

Basic EPS from Discontinued Operations

SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)

Social security benefits ..

150

Social Security Tax

5State: 2

been deducted from your account, in addition to checks you wrote that haven't yet been cashed. The quickest

Stock Repurchase Agreement

Beginning balance on April 26, 2022 $0.00

Street address (including apt. no.)

Bill to

Submission Contact Information

bitoreunlimited is a catagorized Asset Ending Balance: $

taxBond

Tax-exempt interest ...

branch.

The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.

Other Irregular Income/Expenses

The total charges for 1 items paid into overdraft and/or returned unpaid due to insufficient funds is $36.00.

Other Revenue

Tips

c. CIK number of Registrant

________________________________________________________________________________________________________________________

c. LEI of Series.

Total assets

C\J

Total current assets

can reach us if you

Change in Other Current Assets

Purchase/Sale of Other Non-Current Assets, Net

Total Savings in US Dollars

Carolina, South Carolina, Tennessee, Texas

trailer

Cash and cash equivalents

United States

291.9

us at 1-877-BUS-BNKG (1-877-287-2654).

308.88

VOID VOID VOID

320

way to make a deposit is to transfer money online, by phone, by PNC ATM, or bring cash to your local PNC

341.12Wisconsin438.36

Your account was overdrawn and may require immediate attention.

cash. Enclose, but do not staple or attach, your payment with this voucher. or money order. . . . . . . . . . G

YTD Gross

452.43

● Register for PNC Alerts, and we'll send you a text or email when your account balance is low.

Cat. No. 14438M

Here’s what you can

Certain

Here’s why it happened: Even though you deposit and withdraw money throughout the day, we don't finalize these transactions until

Certain Information

Holiday780

HOURLY RATE HAS BEEN CHANGED FROM $8.00

1458.6

I I Detach Here and Mail With Your Payment

1500.2

IBAN: GB57 GMD 3214 4670 0000 00

-0.6

Impairment/Write Off/Write Down of Capital Assets

1946.8

Important Notes

2021

Other Financing Cash Flow

Rent Expense

Income Statement

Reported Effective Tax Rate

Income taxes payable, net

6

Income taxes receivable, net

2022

Indiana, Iowa, Kentucky, Maine, Maryland, Massachusetts,

CHARLOTTE NC 28201-1300

Information this period total to date

2111.2

Intangible assets, net

Charlotte, NC 28201-1303

Internal Revenue

CHECK AMOUNT

Internal Revenue Service

CHECK DATE

Internal Revenue Service Form 1040-V Payment Voucher G Use this voucher when making a payment with Form 1040.

4160

International

Check the background of E*TRADE Securities LLC on FINRA's BrokerCheck and see E*TRADE Securities LLC and E*TRADE Capital Management LLC Relationship Summary.

Invoice a

Check your balance and, if needed, make a deposit so there is enough money to bring your account above $0

Irregular Income/Expenses

Checks/Debits Presented for Posting on 04/26/22 (1)

Is this an electronic copy of an official filing submitted in paper format?

Child tax credit

Issued : Apr 14th. 2022

CIK (Filer ID Number)

It is important to make a deposit as soon as possible.

Cincinnati, OH 45280-2501

Item A.2. Information about the Series.

City

ITEM RETURNED - ACCOUNT CHARGE

City or town, state or province, country, and ZIP or foreign postal code

Last Name WOOD Street Address 1

CITY STATE ZIP

Life Insurance

Clarification of Response (if Necessary):

Loan Amt Paid 840.00

Class (Contract) ID

Long-lived assets

Class A and Class B common stock, and Class C capital stock and additional paid-in capital, $0.001 par value per share: 15,000,000 shares authorized (Class A 9,000,000, Class B 3,000,000, Class C 3,000,000); 688,335 (Class A 299,828, Class B 46,441, Class C 342,066) and 675,222 (Class A 300,730, Class B 45,843, Class C 328,649) shares issued and outstanding

Louisville, KY 40293-1000

CO. FILE DEPT. CLOCK NUMBER

Marketable securities

4735

Medicare Tax

Commitments and Contingencies (Note 10)

Minnesota, Missouri, New Hampshire, New Jersey, New York,

CONSOLIDATED BALANCE SHEETS - USD ($) $ in Millions

MOUNTAIN VIEW

Convertible preferred stock, $0.001 par value per share, 100,000 shares authorized; no shares issued and outstanding

Name

Convertible preferred stock, par value (in dollars per share)

necesita servicio en espanol, llame al 1-877-BUS-BNKG (1-877-287-2654) y oprima el 8.

Convertible preferred stock, shares authorized (in shares)

70842736146

Convertible preferred stock, shares issued (in shares)

70842743866

Convertible preferred stock, shares outstanding (in shares)

75698871600Copy A1.49E+12

Excess Tax Benefit from Stock-Based Compensation, Non-Cash Adjustment

Net Pa􀀩

Costs and expenses:

Non-marketable investments

Credit for other dependents

Note to customer

Current

NOTE: The maximum number of paid or returned items PNC will charge on a business day is 4. The remainder

Current assets:

Notification Information

current General

NOT-NEGOTIABLE

Current liabilities:

NPORT-P: Part A: General Information

d. LEI of Registrant

NY SUI/SDI Tax

Dakota, Ohio, Oregon, Pennsylvania, South Dakota, Utah,

of the items, if any, will be paid or returned with no charge.

DALLAS TX 75235

Oklahoma, Rhode Island, Vermont, Virginia, West Virginia,

DALLAS TX 75235-8313

One Trillion Four Hundred Eighty Five Billion Fiftey SixMillion One Hundred Fiftey Five Thousand Five Four Hundred

DALLAS, TX 75235

opt-in or opt-out choice at any time. To learn more about PNC Overdraft Solutions, visit us online at

DALLAS, TX 75235-8314

or FPO address, or file Form 2555 or 4563, or are a dual-status alien

Dateorder of:

DATE APR 27, 2022

Other Adjustments to Net Income Available to Common Stockholders

Date Paid : 2022-04-18

Other current assets

Date Paid : 4/11/2022

Pay Date: 04/18/2022

Deducted#barcode

Deductions

$

Deferred income taxes

$

Deferred revenue

Overdraft Protection has not been established for this account. Please contact us if you would like to set

Deferred revenue, non-current

overdrawn.

Department of the Treasury

Overtll ne

Department of the Treasury - Internal Revenue Service

P.O. Box 1214

Department of the Treasury Calendar Year ' Internal Revenue Service Due

P.O. Box 802501

8853.6

PAGE 1 of 2

16640

Paid to the order of.

23526.8

PARTICIPATION.

Description Transaction Amount Amount Added/

Pay Date:0.455555556Pay to the

Sales of Other Non-Current Assets

PAYER’S name, street address, city or town, state or province, country, ZIP

Diluted EPS from Discontinued Operations

PAYER'S name, street address, city or town, state or foreign postal code, and telephone no.

39647

payment due to insufficient funds.

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

Payments for Common Stock

39654PAYSTUB-1.74E+12

Period ending:

Direct Deposit:

Please adjust your records by the amount of this charge.

Discontinued Operations

pnc.com/bankwisely or read the fee schedule for your specific account at pnc.com. Current fee schedules for

do immediately:

%%EOF

Do Not Cut or Separate Forms on This Page — Do Not Cut or Separate Forms on This Page

PO BOX 1300,

do to avoid this in the

Price Par Share

DRIVE SOON AND LOOK FORWARD TO YOUR

(keep for

Due : Feb 13, 2022

Qualified dividends ...

e. Address and telephone number of Registrant.

rate hoursEarnings

Realized Gain Supplment Payable

Earnings Statement

RECIPIENT’S name

39814

Reduction Act

EFFECTIVE THIS PAY PERIOD YOUR REGULAR

refunds, credits, or offsets

E-Mail Address

Relationship:

Employee Id: 9999999999

Rental Income, Revenue

Employee Info

Reported Normalized and Operating Income/Expense Supplemental Section

Esta carta contiene informacion importante sobre su cuenta. Si tiene ' alguna pregunta sobre esta carta o

Reported Normalized Income

1

Research and development

Basic EPS from Discontinued Operations

Returns.

Excess Tax Benefit from Stock-Based Compensation, Non-Cash Adjustment

REV 04/09/22 INTUIT.CG.CFP.SP 1555

Excluded from federal taxable wages

Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]

excluding income under Internal Revenue Code 933), or use an APO

Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2023-01-01

Exemptions/A llowances:

Revenues from External Customers and Long-Lived Assets [Line Items]

Expected timing of revenue recognition

Routing no. 071921891

Expected timing of revenue recognition, percent

.!:F.I.C.A.SAMPLEF.I.T,

SEC Schedule, 12-09, Movement in Valuation Allowances and Reserves [Roll Forward]

-99Series IDfax.

settings, call 1-877-588-3605, visit any branch, or sign on to PNC Online Banking, and select the

2Shipping

Fees and Commission Income

Social Security 633-44-1725

Irregular Income/Expenses

Social Security No.

-40.6

Social Security Number: 999-99-9999

3-6.5613.5

State, if applicable

Federal Income Tax

Statement of Financial Condition | About Asset Protection | Account Agreements and Disclosures | Quarterly 606 Report | Business Continuity Plan | About Our Ads | Disclosure Library

Rental Income, Revenue

Stock Plan

Federal: 3, $25 Additional Tax

Stockholders’ equity:

Fees and Commission Income

Street Address 1

FICA - Social Security

Street Address 1

File only if you are making a payment of estimated tax by check or money order. Mail this Amount of estimated tax voucher with your check or money order payable to the 'United States Treasury.' Write your

STREET ADDRESS CITY STATE ZIP

File with Form 1096.

SubtotalFiler CCC

System response and account access times may vary due to a variety of factors, including trading volumes,

Filer CIK

Taxable Marital Status: Married

Filer Investment Company Type

Taxes / Deductions

-5.94

Telephone number

Zachry Tyler Wood

The Company and its directors and certain of its executive officers may be considered participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.

zachryiixixiiwood@gmail.com

the end of the day. At the end of each business day, we add the money that went into your account before

#NAME?

The Securities and Exchange Commission has not necessarily reviewed the information in this filing and has not determined if it is accurate and complete, The reader should not assume that the information is accurate and complete,

For calendar year

This amount: TWO HUNDRED NINETY-ONE AND 90/100 DOLLARS

43072this period

For Paperwork Reduction Act Notice, see the seperate Instructions.

Title Operator

For Privacy Act

TO PAY YOUR TAXES DUE BY CHECK, MAIL THIS FORM TO THE ADDRESS LISTED BELOW.

for the transaction details. Your account may be subject to a fee each time we pay a transaction or decline a

total

Foreign country, if applicable

TOTAL $44226

Total cash, cash equivalents, and marketable securities

Form 1040-ES Payment Voucher

£0.00

Form 1040-V

Total current liabilities

Form 1040-V Page 2

Total liabilities and stockholders’ equity

Form 1099-G

£􀀆,􀀆8£􀀇03

Form 1099-G (Rev. 1-2022) www.irs.gov/Form1099G

■

Form 1099-NEC

Total stockholders’ equity

future:

trade or business

G Do not staple this voucher or your payment to Form 1040.

Transaction price allocated to remaining performance obligations

G Make your check or money order payable to the 'United States Treasury.' Enter the amount G Write your social security number (SSN) on your check or money order. of your payment. . . . . . . . . G

U.S. SECURITIES AND EXCHANGE COMMISSION

44669

United States Department of The Treasury

Reported Normalized and Operating Income/Expense Supplemental Section

up this service.

Goodwill

USD in "000'"s

-30VOID

GOOGL_income-statement_Quarterly_As_Originally_Reported

Wages, salaries, tips, etc. Attach Form(s) W-2 ................

Government

Washington, Wyoming

44678

WE WILL BE STARTING OUR UNITED WAY FUND

- 28.85*

We're here to help. If you have any questions or need assistance, please visit your local PNC Branch or contact

Gross Pay_________________________________

WOOD ZACHRY

Gross Pa􀀩

year to date

1652044

Your federal wages this period are $386.15

Group Term Life 0.51 27.00

YTD

have questions or

● Learn more about fees and how to avoid them by visiting "Making the Most of your Money" at

Here are the transactions that led to your overdraft:

ZACHRY T WOOD

Here are your current

Here’s how you

Zip / Postal Code

Fiscal year ends in Dec 31 | USD

For

Fiscal year end September 28th., 2022. | USD

Issuance of/Repayments for Debt, Net

Issuance of/Repayments for Long Term Debt, Net

Income from Associates, Joint Ventures and Other Participating Interests

Income from Associates, Joint Ventures and Other Participating Interests

Charitable contributions if you take the standard deduction (see instructions)

Proceeds from Issuance of Common Stock

13

Taxes, Non-Cash Adjustment

Change in Cash

Interest Paid, Supplemental

Gain/Loss on Foreign Exchange

Qualified business income deduction from Form 8995 or Form 8995-A .........

Change in Deferred Assets/Liabilities

Gain/Loss on Financial Instruments, Non-Cash Adjustment

Net Investment Income/Loss, Non-Cash Adjustment

Net Investment Income/Loss, Non-Cash Adjustment

Effect of Exchange Rate Changes

Non-Operating Income/Expenses, Total

Change in Cash as Reported, Supplemental

Issuance of/Repayments for Debt, Net

Gain/Loss on Disposals, Non-Cash Adjustment

Irregular Income/Loss, Non-Cash Adjustment

Gain/Loss on Disposal/Sale of Business, Non-Cash Adjustment

Gain/Loss on Disposal/Sale of Business, Non-Cash Adjustment

Irregular Income/Loss, Non-Cash Adjustment

Gain/Loss on Disposals, Non-Cash Adjustment

Non-Controlling/Minority Interests

Gain/Loss on Investments and Other Financial Instruments

Net Investment Income

Change in Trade/Accounts Receivable

Change in Trade and Other Receivables

Proceeds from Issuance/Exercising of Stock Options/Warrants

Cash Flow from Continuing Financing Activities

Change in Other Current Assets

Taxes, Non-Cash Adjustment

Proceeds from Issuance/Exercising of Stock Options/Warrants

Net Interest Income/Expense

Interest Expense Net of Capitalized Interest

Total Net Finance Income/Expense

Purchase/Sale of Business, Net

Investment Income/Loss, Non-Cash Adjustment

Gain/Loss on Financial Instruments, Non-Cash Adjustment

Purchase/Sale of Business, Net

Purchase/Acquisition of Business

Income Tax Paid, Supplemental

General and Administrative Expenses

Change in Trade and Other Receivables

Change in Trade/Accounts Receivable

Purchase/Acquisition of Business

Purchase/Sale of Investments, Net

Other Underwriting Expenses

100% Security Guaranteed

Net Interest Income/Expense

Total Net Finance Income/Expense

Interest Expense Net of Capitalized Interest

• Head of household, $18,800

Purchase/Sale and Disposal of Property, Plant and Equipment, Net

Purchase of Property, Plant and Equipment

Repayments for Long Term Debt

B

Research and Development Expenses

Selling and Marketing Expenses

Selling, General and Administrative Expenses

• Married filing jointly or Qualifying widow(er), $25,100

• If you checked any box under Standard Deduction, see instructions.

Standard Deduction for—

Purchase/Sale of Investments, Net

Cash Flow from Continuing Investing Activities

Other Underwriting Expenses

Purchase/Sale and Disposal of Property, Plant and Equipment, Net

Issuance of/Payments for Common Stock, Net

Cash Flow from Continuing Financing Activities

Repayments for Long Term Debt

Operating Income/Expenses

• Single or Married filing separately, $12,550

Sales of Other Non-Current Assets

Policyholder Future Benefits and Claims, Net

Benefits,Claims and Loss Adjustment Expense, Net

Purchase of Property, Plant and Equipment

Provision for Income Tax

Cash Flow from Financing Activities

Cost of Goods and Services

Cost of Revenue

Cash Flow from Continuing Investing Activities

Selling and Marketing Expenses

Selling, General and Administrative Expenses

Purchase of Investments

Subtract line 10 from line 9. This is your adjusted gross income .........

11

Cash Flow from Investing Activities

Benefits,Claims and Loss Adjustment Expense, Net

Policyholder Future Benefits and Claims, Net

Other Income/Expenses

Purchase of Investments

Other Income/Expenses

Total Expenses

Grand Total

Federal 941 Deposit Report ADP Report Range5/4/2022 - 6/4/2022

EIN:

Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others. Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.

Employer Customized Report ADP Report Range5/4/2022 - 6/4/2022

EIN:

Customized Report

Employee Number: 3 Description

Wages, Tips and Other Compensation

Taxable SS Wages

Taxable SS Tips

Taxable Medicare Wages

Advanced EIC Payment

Federal Income Tax Withheld

Employee SS Tax Withheld

Employee Medicare Tax Withheld

State Income Tax Withheld

Local Income Tax Withheld Customized Employer Tax Report

Description

Employer SS Tax Employer Medicare Tax

Federal Unemployment Tax

State Unemployment Tax

Customized Deduction Report

Health Insurance

401K

SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.

The Definitive Proxy Statement and any other relev8.ant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.

The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.

3/6/2022 at 6:37 PM

GOOGL_income-statement_Quarterly_As_Originally_Reported

Cash Flow from Operating Activities, Indirect

Net Cash Flow from Continuing Operating Activities, Indirect

Cash Generated from Operating Activities

Income/Loss before Non-Cash Adjustment

Total Adjustments for Non-Cash Items

Depreciation, Amortization and Depletion, Non-Cash Adjustment

Depreciation and Amortization, Non-Cash Adjustment

Depreciation, Non-Cash Adjustment

Amortization, Non-Cash Adjustment

Stock-Based Compensation, Non-Cash Adjustment

Taxes, Non-Cash Adjustment

Investment Income/Loss, Non-Cash Adjustment

Gain/Loss on Financial Instruments, Non-Cash Adjustment

Other Non-Cash Items

Changes in Operating Capital

Change in Trade and Other Receivables

Change in Trade/Accounts Receivable

Change in Other Current Assets

Change in Payables and Accrued Expenses

Change in Trade and Other Payables

Change in Trade/Accounts Payable

Change in Accrued Expenses

Change in Deferred Assets/Liabilities

Change in Other Operating Capital

Change in Prepayments and Deposits

Cash Flow from Investing Activities

Cash Flow from Continuing Investing Activities

Purchase/Sale and Disposal of Property, Plant and Equipment, Net

Purchase of Property, Plant and Equipment

Sale and Disposal of Property, Plant and Equipment

Purchase/Sale of Business, Net

Purchase/Acquisition of Business

Purchase/Sale of Investments, Net

Purchase of Investments

Sale of Investments

Other Investing Cash Flow

Purchase/Sale of Other Non-Current Assets, Net

Sales of Other Non-Current Assets

Cash Flow from Financing Activities

Cash Flow from Continuing Financing Activities

Issuance of/Payments for Common Stock, Net

Payments for Common Stock

Proceeds from Issuance of Common Stock

Issuance of/Repayments for Debt, Net

Issuance of/Repayments for Long Term Debt, Net

Proceeds from Issuance of Long Term Debt

Repayments for Long Term Debt

Proceeds from Issuance/Exercising of Stock Options/Warrants

Other Financing Cash Flow

Cash and Cash Equivalents, End of Period

Change in Cash

Effect of Exchange Rate Changes

Cash and Cash Equivalents, Beginning of Period

Cash Flow Supplemental Section

Change in Cash as Reported, Supplemental

Income Tax Paid, Supplemental

ZACHRY T WOOD

Cash and Cash Equivalents, Beginning of Period

Department of the Treasury

Internal Revenue Service

Calendar Year

Due: 04/18/2022

USD in "000'"s

Repayments for Long Term Debt

Costs and expenses:

Cost of revenues

Research and development

Sales and marketing

General and administrative

European Commission fines

Total costs and expenses

Income from operations

Other income (expense), net

Income before income taxes

Provision for income taxes

Net income

*include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

*include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

INTERNAL REVENUE SERVICE,

PO BOX 1214,

CHARLOTTE, NC 28201-1214

ZACHRY WOOD

15

For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.

Cat. No. 11320B

Form 1040 (2021)

Reported Normalized and Operating Income/Expense Supplemental Section

Total Revenue as Reported, Supplemental

Total Operating Profit/Loss as Reported, Supplemental

Reported Effective Tax Rate

Reported Normalized Income

Reported Normalized Operating Profit

Other Adjustments to Net Income Available to Common Stockholders

Discontinued Operations

Basic EPS

Basic EPS from Continuing Operations

Basic EPS from Discontinued Operations

Diluted EPS

Diluted EPS from Continuing Operations

Diluted EPS from Discontinued Operations

Basic Weighted Average Shares Outstanding

Diluted Weighted Average Shares Outstanding

Reported Normalized Diluted EPS

Basic EPS

Diluted EPS

Basic WASO

Diluted WASO

Fiscal year end September 28th., 2022. | USD

For Paperwork Reduction Act Notice, see the seperate Instructions.

important information

2012201320142015ZACHRY T. 5323 $2,012$2,013$2,014$2,015DALLAS Other Benefits and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date $112$674,678,000$75,698,871,600$141,685,487,7329/29/2021 9/28/2022 Statutory 1/29/2023 Federal Income Tax$141,685,487,732 Social Security Tax$70,842,743,866$141,685,487,732 Medicare Tax WOOD Net Pay$70,842,743,866 CHECKING TX 75235-8314 Net Check$70,842,743,866 Your federal taxable wages this period are $$0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A "

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

Balancing Your Account Update Your Account Register

We will investigate your complaint and will correct any error promptly, If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it ekes us to complete our investigation.

Member FDIC

Alphabet Inc. 10-K Feb. 1, 2022 9:08 PM u

Transfers between Larry Page and Sergey Brill, Google's co-founders, subject amended (as described below).

Transfers for tax and estate planning purposes, including to trusts, corporation", and pnrfncr%hipe ootabliøhed Common Stock.

In addition, partnerships or limited liability companies that held more than 5% of the total out8tanding shares of (0'„14%3 B Common Stock ao Of the cJ03ing ofGoogle's initial public offering in 2004 may distribute their shares of Class 13 Common Stock to their respectivc partners or members (who may further digtribute the shares of Class B Common Stock to their I-espective partners or members) without triggering a conversion to bharcs of CJ"%% A Common Stock, Sto;h distributions must be

conducted in accordance with the ownership interests of such partners or members and the terms of' any agreernent8 binding the partnership

The death of any holder of shares of Class B Common Stock who is a natural person will result in the conversion of bio

shares held by his or her permitted entities, into shares of Class A Common Stock, However, subject to the terrng of the Transfer P.e%triction Agreements, either of Larry or Sergey may transfer voting control of his shares of Class B Common Stock and those held by hig permitted entities to the other contingent or effective upon bil death

without triggering a conversion into shares of Class A Common Stock, but the shares of Class B Common Stock nine months after the death of the transferring founder.

Once transferred and converted into shares of Class A Common Stock, shares of Class B Common Stock shall not be reissued. No class of our capital stock may be subdivided or combined unless the other classes of capital stock are concurrently subdivided or combined in the same proportion and in the same manner. Equal Status

Except as expressly provided in our Certificate of Incorporation, shares of Class A Common Stock and Class B Common Stock have the

rank equally, share ratably and are identical in all respects as to all matters. In the event of any merger, consolidation, or other business combination requiring the approval of our stockholders entitled to vote thereon (whether or not we are the surviving entity), the holders of shares of Class A Common Stock shall have the right to

receive, or the right to elect to receive, the same form of consideration

Stock shall have the right to receive, or the right to elect to receive, at least the same amount of consideration on a per share basis as the holders of shares of Class B Common Stock. In the event of any (1) tender or exchange offer to acquire any shares of Class A Common Stock or Class B Common Stock by any third party pursuant to an agreement to which we are a party, or (2) any tender or exchange offer by us to acquire any shares of Class A Common Stock or Class B Common Stock, the

holders of shares of Class A Common Stock shall have the right to receive,

Class B Common Stock, and the holders of shares of Class A Common Stock shall have the right to receive, or the right to elect to receive, at least the same amount of consideration on a per share basis as the holders of shares of Class B Common Stock, Except as expressly provided in our Certificate of Incorporation, shares of Class C Capital Stock have thc same rights and privileges and rank equally, share ratably and are identical in all respects to the shares of Class A Common Stock and Class B Common Stock as to all matters, In the event of any merger, cong)lidation, or other business combination requiring the approval of our stockholders entitled to vote thereon (whether or not we are the surviving entity), the holders ofshares of Class C Capital Stock shall receive the same amount and form of

3

Offsettirv of O•ri—ii The grossnno.ntg of derivative ineruments subjee (in millions):

Offset/ng of Asmt•

Derivatives $

aoss

Dai'vatN./éS $

0) The bddnces

Offseülng ofLHb"itiS

Derivatives $

Derivatives $

(2) The balances as ofDecember 31,2020 and 2021 were related to derivatve allc»eed apne

assetswhieh are to be ne seded Note 4. Leases

•te have entered into operating lease agreements primarily for data centers, land and ooces troughout the world witn Components of peating lease expense were as follows (in millions): Year Ended December 31,

OpeaUng lease coe

Variable lease cod

GOOG NASDAQ

GOOG ALPHABET INC CAP STK CL C

$2,808.301,20

Google Ads

Bandini Blvd, Bell, CA 90201-6407 *Terms and conditions for this offer.

1

2. Offer available only to advertisers which are new to Google Ads, with a billing address in the United States. One p•crcticnal code per advertiser.

3* TO activate this Offer. Enter the promotional code in your first Google Ads account. You must enter the code within 14 days of ycur first ad impression being served from your first Google Ads account. 4. To earn the Google Ads credit After entering the promotional code in your Google Ads account, your advertising campaigns must accrue costs Of at least $500, (excluding any taxes or applicable fees), Y.'ithin 60 days. Making a payment of $500 is not sufficient. The tracking of advertising costs towards $500 begins after youfve entered the promotional code.

5

The credit expires 60 days after it is applied to your account. Credit applies to future advertising costs only. Credit cannot be applied to costs ecceued before the promotional code ',vas entered in your Google Ads account.

8. You won't receive a notification once credit in ycur Google Ads account is used up end

continue advertising, you can pause or delete your campaigns

9. Your account must be successfully billed by Google Ade end

10. Full terms and conditions can be found here: google.ccrn/ads!couponsiterns

V'!e have made this mailing environmentally friend!y by using pcst-ccnsvrer recycled paper and pd.neril•y soy-certified inks, but if you would like to no longer receive direct mail ircm Google Ads, please visit: g.co/ads/ncdm-en E02548934M-US IH WK 220406

US2 0015210

6.93%@ITRADE

0( Account Transfer Confirmation: Transfer Agent, Full

590 1

E*TRADE Acco•nt Information Offe Account Type: INDIVIDUAL Offe To a Account Title: ZACHRY T WOOD SR GOO(

To e; taxe Account Number: 52645331 prom Once / Transfer Instruction and

hereby instruct the delivering institution as follows: To Delivering Firm: Please transfer assets from my account a@g@E*TRADE Securities LLC, (together with its affiliates, E*TRADE"), as indicated in the account transfer form. understand that if assets in my account are not readily rhe cr• transferable (with or without penalties), such assets may not be transferred within the time frames required by FINRA Rule hedit 11870 or comparable rule of another securities industry self-regulatory organization. authorize you to liquidate assets in :ontinl"

our at my account as necessary to satisfy outstanding fees due to you. Unless 1.111 ten

le Ad:

1521 good deliverable form, including affixing any necessary tax waivers, to enable E*TRADE to transfer them in my account in

in its name for the purpose of sale, when and as directed by me.

instruction , you will cancel all open orders for my account on your books. For Full Account Transfer: affirm that 1 have returned to you or destroyed any credit/debit cards and/or unused checks issued to me in connection with the account am transferring. understand that, except in the case of my nontransferable proprietary mutual fund shares that you may liquidate without further instruction from me, you may need to contact me with respect to the disposition of any assets in my securities account that are nontransferable.

Assets

Security Symbd

BRKBTRADE

To Delivering Firm øE*TRADE: By signing below,

bound by the terms and conditions of this Transfer Instruction and Authorization.

have provided above is true and accurate. further authorize E*TRADE to share information about me with the financial

institution from which

thereof.

Your Reference number for this transfer request is 22131261103881

Google Ads 5 590 Bandini Blvd, Bell, CA 90201-6407 Terms and conditions for this offer. 1. Offer available only while supplies fast. Google Ads account. promotional code.

1521024793 ******H*****AUTO**ALL FOR AADC 75215210 Morningstar.com Inc. 5323 Bradford Dr Dallas, TX 75235-8314 Illllllllllllllll„lllllllllll„llrllllll,llllllllllllllllllllll The credit expires 60 days after it is applied to your account. Credit applies to future advertising costs only. Credit cannot be apzlied to costs zccnued befc-e ne pronot;,onel code was entered in your Google Ads account.

8. You won't receive a notification once credit in your Google Ads

9

10. Full terms and conditions can be found here: google.corn/adsfcouponsiten-ns V'!e have made this mailing environmentally friendly by using post-consumer recycled peps and pri-nerily soy-cetif:ed inks, but if you would like to no longer receive direct mail from Google Ads, please visit: g.co/ads/ncdm-en

US20015210

tified Copy of Resolutions/ thorizations For Accounts And Loans

porations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other Organizations)

PNC Bank, National Association ("Bank')

Customer Name

Resolutions:

123OWNER

The Bank may accept, pay and/or apply any check, draft, charge, instrument or other order for the payment of money drawn on such accounts, or payable to the Customer that has been endorsed by any of the authorized signatories listed, or perform any transfer Of funds, and any or all of such actions may be done: without regard to the application of the same

(ii) (iii) RDAOBM06-0518

(IRS USE ONLY) 575Ä

Return this part with any correspondence

so we may identify your account.

correct any errors in your name or address .

Your Telephone Number

(

INTERNAL REVENUE SERVICE

CINCINNATI

1,111,111.1.1„1,1„1,1„11'i'11

(IRS USE ONLY)

We assigned you a tax classification (corporation, partnership, etc.) based on

information obtained from you or your representative.

of your tax classification, and is not binding on the IRS.

determination of your tax classification, you may request a private letter ruling from the IRS under the guidelines in Revenue Procedure 2020-1, 2020-1 1. R. B. 1 (or

superseding Revenue Procedure for the year at issue) .

elections can be requested by filing Form 8832, Entity Classification Election. See Form 8832 and its instructions for additional information. IMPORTANT INFORMATION FOR S CORPORATION ELECTION: If you intend to elect to file your return as a small business corporation, an election to file a Forrn 1120-S, U.S. Income Tax Return for an S Corporation, must be made within certain timeframes and the corporation must meet certain tests. All of this information is included in the instructions for Form 2553, Election by a Small Business Corporation. A limited liability company (LLC) may file Form 8832, Entity Classification

Election, and elect to be classified as an association taxable as a corporation.

the LLC is eligible to be treated as a corporation that meets certain tests and it will be electing S corporation status, it must timely file Form 2553, Election by

Small Business Corporation.

effective date of the S corporation election and does not need to file Form 8832. If you are required to deposit for employment taxes (Forms 941, 943, 940, 944, 945, CT-I, or 1042) , excise taxes (Form 720) , or income taxes (Form 1120) , you will receive a Welcome Package shortly, which includes instructions for making your deposits

electronically through the Electronic Federal Tax Payment System (EFTPS) .

Identification Number (PIN) for EFTPS will also be sent to you under separate cover . Please activate the PIN once you receive it, even if you have requested the services of a

tax professional or representative.

Publication 966, Electronic Choices to Pay All Your Federal Taxes.

make a deposit immediately, you will need to make arrangements with your Financial Institution to complete a wire transfer. The IRS is coonitted to helping all taxpayers comply with their tax filing

obligations .

Authorized e-file Providers, such as Reporting Agents or other payroll service providers, are available to assist you. Visit verww. irs .gov/mefbusproviders for a

(iv) (v)45678

Executed this date of April 13, 2022 RDAOBM06-0518

nt-tés•:r

WARNING; THIS DOCUMENt HAS secukftv•uvunzs

Estimate No#: 0014

Estimate Date: Jun 6, 2022 Reference: File Number. 368581-659950

BILL TO Yelen

Washington's DC, 1500 Pennsylvania Ave NW 23rd #117, NJ 20249, UNITED STATES fsinternet@fiscsl.treasury.direct.gov

#12 3456

Morningstar.com My View 2 View Print Report

Portfolio Name

Earnings Calendar

633-44-1725 Zachry Tyler Wood Mr. Joseph A. Parascandola

Direxion Dly S&P Oil&Gs Ex&P

Aphabet Inc Class A

Alphabet Inc Cass A

AVhabet inc Class A

Alphabet Inc Cass A

Alphabet Inc Class A

Alphabet inc Class A

Aphabet Inc Class A

Inc Cass A

Alphabet Inc Cass A

Inc Class A

Aphabet Inc Ciass A

Aphabet Inc Class A

Gret Brn Capital Corp

Business Revenue

Net Income

Gross Profit

Pretax Income

Total Operatong Prpfit/Loss

Net Income Available to C

Net Income From Continuing Operations

11 0 00 308 1 3011 1

OS Received 01/24/2022

Reviewing Your Statement Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right @PNCBANKside of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; you have any questions regarding interest paid to an interest-bearing account.

Balancing Your Account

Update Your Account Register Compare: The activity detail

Check Off: Add to Your Account Register Balance: Subtract From Your Account Register Balance:

Update Your Statement Information

Step 1:

Add together deposits and other additions listed in your account register but not on your statement. Step 3:

Enter the ending balance recorded on your statementTotal A + $

Add deposits and other additions not recorded

$

The result should equal your account register balance

haw ¯4VUt If

Business Checking PNC Bank the period

146967

ZACHRY TYLER WOOD ALPHABET 5323 BRADFORD DR DALLAS TX 75235-8314

111111111 1 1 1 1 1 1 11 1 1 1 11 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 111 1 1 1 1 •l 1 1 1 1 1 1 1 1 1 1 1 1

a

IMPORTANT INFORMATION FOR BUSINESS DEPOSIT CUSTOMERS

Effective February 18,2022, PNC will be temporarily waiving fees for stetement, check image, deposit ticket and deposited item copy

requests until further notice. Statement, check image, deposit ticket and ceposited item requests will continue to these be displayed fees. in the Details of Services Used section of your monthly statement. We will notify you viE statement message prior to reinstating If you have anv questions, you may reach out to your business banker, franch or call us at 1-877-BUS-BNKG (1-877-287-2654).

Business Checking Summary Account number: 47-2041-6547 Overdraft Protection has not been established for this account. Please contact us if you would like to set up this service.

Balance Summary

Beginning balance

0

Overdraft and Returned Item Fee Summary

Total Returned Item Fees (NSF)

Deposits and Other Additions

Description

ACH Additions

Total

Daily Balance

Date13-Apr

jobs: autoupdate: name: autoupdate runs-on: ubuntu-18.04 steps: - uses: docker://chinthakagodawita/autoupdate-action:vl

#ERROR!#ERROR!

.../.github/CODEOWNErs8 1 file changed, 2 insertions(+), 3 deletions(-)

diff --git

Skip to content

Search or jump to…

Pull requests

Issues

Marketplace

Explore

@zakwarlord7

Your account has been flagged.

Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.

Your review was submitted on a merged pull request.

zakwarlord7

/docsPublic

forked from github/docs

Code

Pull requests

Actions

Projects

SecurityInsightsSettings

bitore.sig #39

Merged

zakwarlord7 merged 1 commit into patch-42 from trunk-2 2 minutes ago

Merged

bitore.sig

#39

zakwarlord7 merged 1 commit into patch-42 from trunk-2 2 minutes ago

#ERROR!

Conversation 1

Commits 1Checks 0

Files changed 1

Conversation

zakwarlord7

Owner

zakwarlord7 commented 3 minutes ago •

Why:

Closes [issue link]

What's being changed (if available, include any code snippets, screenshots, or gifs):

Check off the following:I have reviewed my changes in staging (look for the "Automatically generated comment" and click the links in the "Preview" column to view your latest changes).For content changes, I have completed the self-review checklist.Writer impact (This section is for GitHub staff members only):This pull request impacts the contribution experienceI have added the 'writer impact' labelI have added a description and/or a video demo of the changes below (e.g. a "before and after video")@zakwarlord7bitore.sig9ed7664@zakwarlord7 zakwarlord7 merged commit 151fffe into patch-42 2 minutes ago@zakwarlord7 zakwarlord7 deleted the trunk-2 branch 2 minutes ago@zakwarlord7 zakwarlord7 restored the trunk-2 branch 2 minutes ago@zakwarlord7 zakwarlord7 deleted the trunk-2 branch 2 minutes ago@zakwarlord7 zakwarlord7 restored the trunk-2 branch 2 minutes agozakwarlord7zakwarlord7 reviewed 1 minute agoSpammyOwnerAuthorzakwarlord7 left a comment-' [22/8]'"''"Approves'"''@zakwarlord7 zakwarlord7 deleted the trunk-2 branch 1 minute ago

@zakwarlord7 zakwarlord7 restored the trunk-2 branch 1 minute ago

@zakwarlord7 zakwarlord7 deleted the trunk-2 branch 1 minute ago

@zakwarlord7 zakwarlord7 restored the trunk-2 branch 1 minute ago

@zakwarlord7

OwnerAuthor

zakwarlord7 commented 1 minute ago

From 9ed7664 Mon Sep 17 00:00:00 2001

From: ZACHRY T WOOD 109656750+zakwarlord7@users.noreply.github.com

Date: Thu, 18 Aug 2022 09:58:41 -0500Subject: [PATCH] bitore.sig.husky/.gitignore | 83 ++++++++++++++++++++++++++++++++++++++++++++++-1 file changed, 82 insertions(+), 1 deletion(-)diff --git a/.husky/.gitignore b/.husky/.gitignoreindex 31354ec1389..55b2776cf6a 100644--- a/.husky/.gitignore#ERROR!@@ -1 +1,82 @@-_#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

.husky/post-checkout | 2 +-

.husky/post-commit | 2 +-

.husky/post-merge | 2 +-

.husky/pre-push | 2 +-

script/toggle-ghae-feature-flags.js | 2 +-

5 files changed, 5 insertions(+), 5 deletions(-)

#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"

fielse#ERROR!#ERROR!fi#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"

fielse#ERROR!#ERROR!fi#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"

fielse#ERROR!#ERROR!fi#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"

fielse#ERROR!#ERROR!fi

. "$(dirname "$0")/_/husky.sh"

#ERROR!#ERROR!#NAME?#NAME?#ERROR!

.description(

Toggle issue-based, feature-flagged versioning for GitHub AE content like\n' +

ghae-next or ghae-issue-1234, then commit the results.\n\n' +

#ERROR!#ERROR!

Examples:\n' +

` ${scriptName} -n\n` +

` ${scriptName} -f 'issue-1234, issue-5678'`'"''
:Build::Publish:Larelease:Launch:
Deployee: repositories'@zakwalrord7/Zakwarlord7/README.ms/README.md

@zakwarlord7 zakwarlord7

deleted the trunk-2 branch 41 seconds ago

@zakwarlord7

OwnerAuthor

zakwarlord7 commented now

From 9ed7664 Mon Sep 17 00:00:00 2001

From: ZACHRY T WOOD 109656750+zakwarlord7@users.noreply.github.com

Date: Thu, 18 Aug 2022 09:58:41 -0500

Subject: [PATCH] bitore.sig

.husky/.gitignore | 83 ++++++++++++++++++++++++++++++++++++++++++++++-

1 file changed, 82 insertions(+), 1 deletion(-)

diff --git a/.husky/.gitignore b/.husky/.gitignore

index 31354ec1389..55b2776cf6a 100644

--- a/.husky/.gitignore

#ERROR!

@@ -1 +1,82 @@

-_#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

.husky/post-checkout | 2 +-

.husky/post-commit | 2 +-

.husky/post-merge | 2 +-

.husky/pre-push | 2 +-

script/toggle-ghae-feature-flags.js | 2 +-

5 files changed, 5 insertions(+), 5 deletions(-)

#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"

fielse#ERROR!#ERROR!fi#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"

fielse#ERROR!#ERROR!fi#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"

fielse#ERROR!#ERROR!fi#ERROR!#ERROR!#ERROR!#ERROR!#ERROR!

printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n"

fielse#ERROR!#ERROR!fi

. "$(dirname "$0")/_/husky.sh"

#ERROR!#ERROR!#NAME?#NAME?#ERROR!

.description(

Toggle issue-based, feature-flagged versioning for GitHub AE content like\n' +

ghae-next or ghae-issue-1234, then commit the results.\n\n' +

#ERROR!#ERROR!

Examples:\n' +

` ${scriptName} -n\n` +

` ${scriptName} -f 'issue-1234, issue-5678'`'"''
:Build::Publish:Larelease:Launch:
Deployee: repositories'@zakwalrord7/Zakwarlord7/README.ms/README.md

@zakwarlord7

Leave a comment

No file chosen

Attach files by dragging & dropping, selecting or pasting them.

Remember, contributions to this repository should follow its contributing guidelines and code of conduct.

ProTip! Add .patch or .diff to the end of URLs for Git’s plaintext views.

Reviewers

No reviews

AssigneesNo one—LabelsNone yetProjectsNone yetMilestone

No milestone

Notifications

Customize

You’re receiving notifications because you modified the open/close state.

1 participant

@zakwarlord7

Footer

© 2022 GitHub, Inc.

Footer navigation

TermsPrivacySecurityStatusDocs

Contact GitHub

PricingAPITrainingBlogAbout


              workflowFailMessage = `${workflowFailMessage} Please see ${createdComment.data.html_url} for details.`	Owner Author zakwarlord7 commented now From 9ed7664 Mon Sep 17 00:00:00 2001 From: ZACHRY T WOOD 109656750+zakwarlord7@users.noreply.github.com Date: Thu, 18 Aug 2022 09:58:41 -0500 Subject: [PATCH] bitore.sig .husky/.gitignore | 83 ++++++++++++++++++++++++++++++++++++++++++++++- 1 file changed, 82 insertions(+), 1 deletion(-) diff --git a/.husky/.gitignore b/.husky/.gitignore index 31354ec1389..55b2776cf6a 100644 --- a/.husky/.gitignore +++ b/.husky/.gitignore @@ -1 +1,82 @@ -_ +BEGIN: +GLOW& '"'.txt'"'' +'From 3f5d33f Mon Sep 17 00:00:00 2001 +From: Baoshuo Ren i@baoshuo.ren +Date: Wed, 27 Apr 2022 17:14:15 +0800 +Subject: [PATCH] chore: remove git.io + +All links on git.io will stop redirecting after April 29, 2022. + +- https://github.blog/changelog/2022-04-25-git-io-deprecation/ +--- .husky/post-checkout | 2 +- .husky/post-commit | 2 +- .husky/post-merge | 2 +- .husky/pre-push | 2 +- script/toggle-ghae-feature-flags.js | 2 +- 5 files changed, 5 insertions(+), 5 deletions(-) +diff --git a/.husky/post-checkout b/.husky/post-checkout +index 280d12de2a7..4f4027d51e0 100755 +--- a/.husky/post-checkout ++++ b/.husky/post-checkout +@@ -7,5 +7,5 @@ then printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n" fi else +- printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at https://git.io/JBCId.\n" ++ printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage.\n" fi +diff --git a/.husky/post-commit b/.husky/post-commit +index 8951e3706c3..2c14a1c26d6 100755 +--- a/.husky/post-commit ++++ b/.husky/post-commit +@@ -7,5 +7,5 @@ then printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n" fi else +- printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at https://git.io/JBCId.\n" ++ printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage.\n" fi +diff --git a/.husky/post-merge b/.husky/post-merge +index e6f13fe2443..55cb7759836 100755 +--- a/.husky/post-merge ++++ b/.husky/post-merge +@@ -7,5 +7,5 @@ then printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n" fi else +- printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at https://git.io/JBCId.\n" ++ printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage.\n" fi +diff --git a/.husky/pre-push b/.husky/pre-push +index fa5490bfd8f..6210117e712 100755 +--- a/.husky/pre-push ++++ b/.husky/pre-push +@@ -7,7 +7,7 @@ then printf >&2 "\nGitHub Docs requires Git LFS but using the 'git-lfs' on your path failed.\n" fi else +- printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at https://git.io/JBCId.\n" ++ printf >&2 "\nGitHub Docs requires Git LFS but 'git-lfs' was not found on your path.\nLearn how to install Git LFS at https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage.\n" fi . "$(dirname "$0")/_/husky.sh" +diff --git a/script/toggle-ghae-feature-flags.js b/script/toggle-ghae-feature-flags.js +index b7606c87cb7..e2318b079c0 100755 +--- a/script/toggle-ghae-feature-flags.js ++++ b/script/toggle-ghae-feature-flags.js +@@ -27,7 +27,7 @@ program .description( 'Toggle issue-based, feature-flagged versioning for GitHub AE content like\n' + 'ghae-next or ghae-issue-1234, then commit the results.\n\n' + +- 'Documentation: https://git.io/JCtUO\n\n' + ++ 'Documentation: https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/content-creation/versioning-documentation.md#internal-versioning-conventions-for-github-ae\n\n' + 'Examples:\n' + ` ${scriptName} -n\n` + ` ${scriptName} -f 'issue-1234, issue-5678'`'"'' :Build:: Publish: Larelease: Launch: Deployee: repositories'@zakwalrord7/Zakwarlord7/README.ms/README.md
            } catch(err) {	
              console.log("Error creating comment.", err)	
            }	


            core.setFailed(workflowFailMessage)	
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

:Build::
Publish :
