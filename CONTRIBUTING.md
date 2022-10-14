# Welcome to GitHub docs contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)


## Getting started

To navigate our codebase with confidence, see [the introduction to working in the docs repository](/contributing/working-in-docs-repository.md) :confetti_ball:. For more information on how we write our markdown files, see [the GitHub Markdown reference](contributing/content-markup-reference.md).

Check to see what [types of contributions](/contributing/types-of-contributions.md) we accept before making changes. Some of them don't even require writing a single line of code :sparkles:.

### Issues

#### Create a new issue

If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/github/docs/issues/new/choose). 

#### Solve an issue

Scan through our [existing issues](https://github.com/github/docs/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](/contributing/how-to-use-labels.md) for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes in the UI

Click **Make a contribution** at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review. 

 <img src="./assets/images/contribution_cta.png" width="300" height="150" /> 

#### Make changes in a codespace

For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

#### Make changes locally

1. [Install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).

2. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

3. Install or update to **Node.js v16**. For more information, see [the development guide](contributing/development.md).

4. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. See [Atom's contributing guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages) to know how to use emoji for commit messages.

Once your changes are ready, don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request. 
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 

Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en). 

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix based systems use `\n`. Therefore when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could possibly cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows

::# :## ::-starts :'::ON:'::Runs :::
Customer File Number : 132624428 ZACHRY T. WOOD 5,323 BRADFORD DR

important information Wage and Income Transcript

SSN Provided : XXX-XX-1725 DALLAS TX 75235-8314

Tax Periood Requested : December, 2020

units year to date Other Benefits and

674678000 75,698,871,600

Regular Information

Pto Balance

Total Work Hrs

Form W-2 Wage and Tax Statement Important Notes

Employer : COMPANY PH Y: 650-253-0000

Employer Identification Number (EIN) :XXXXX4661 BASIS OF PAY: BASIC/DILUTED EPS

INTU

2700 C

Quarterly Report on Form 10-Q, as filed with the Commission on YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE

Employee :

Employee's Social Security Number :XXX-XX-1725

ZACH T WOOD

5222 B on Form 8-K, as filed with the Commission on January 18, 2019).

Wages, Tips, and Other Ty

The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.

EMPLOYER IDENTIFICATION NUMBER: 61-1767919 EIN 61-1767919

FEIN 88-1303491

[DRAFT FORM OF TAX OPINION] ID :00037305581 :SSN :633441725 :DOB :1994-10-15 :#:## ::BEGINS::'::Run::/Build_script'@mowjoejoejoeojoe :: :

37,305,581 633,441,725 34,622

ALPHABET Name Tax Period Total Social Security Medicare Withholding

ZACHRY T WOOD Fed 941 Corporate Sunday, September 30, 2007 66,987 28,841 6,745 31,400

5323 BRADFORD DR Fed 941 West Subsidiary Sunday, September 30, 2007 17,115 7,369 1,723 8,023

DALLAS TX 75235-8314 Fed 941 South Subsidiary Sunday, September 30, 2007 23,906 10,293 2,407 11,206

ORIGINAL REPORT Fed 941 East Subsidiary Sunday, September 30, 2007 11,248 4,843 1,133 5,272

Income, Rents, & Royalty Fed 941 Corp - Penalty Sunday, September 30, 2007 27,199 11,710 2,739 12,749

INCOME STATEMENT Fed 940 Annual Unemp - Corp Sunday, September 30, 2007 17,028

						CHECK NUMBER

						221116905560149
GOOGL_income-statement_Quarterly_As_Originally_Reported TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020 Q1 2020 Q4 2019 Q3 2019

Gross Profit 146698000000 42337000000 37497000000 35653000000 31211000000 30,818,000,000 25,056,000,000 19,744,000,000 22,177,000,000 25,055,000,000 22,931,000,000

Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56,898,000,000 46,173,000,000 38,297,000,000 41,159,000,000 46,075,000,000 40,499,000,000

257637000000 75325000000 65118000000 61880000000 55314000000 56,898,000,000 46,173,000,000 38,297,000,000 41,159,000,000 64,133,000,000 34,071,000,000

Other Revenue 6,428,000,000

Cost of Revenue 110939000000 32988000000 27621000000 26227000000 24103000000 -26,080,000,000 -21,117,000,000 -18,553,000,000 -18,982,000,000 -21,020,000,000 -17,568,000,000

Cost of Goods and Services 110939000000 32988000000 27621000000 26227000000 24103000000 -26,080,000,000 -21,117,000,000 -18,553,000,000 -18,982,000,000 -21,020,000,000 -17,568,000,000

Operating Income/Expenses 67984000000 20452000000 16466000000 16292000000 14774000000 -15,167,000,000 -13,843,000,000 -13,361,000,000 -14,200,000,000 -15,789,000,000 -13,754,000,000

Selling, General and Administrative Expenses 36422000000 11744000000 8772000000 8617000000 7289000000 -8,145,000,000 -6,987,000,000 -6,486,000,000 -7,380,000,000 -8,567,000,000 -7,200,000,000

General and Administrative Expenses 13510000000 4140000000 3256000000 3341000000 2773000000 -2,831,000,000 -2,756,000,000 -2,585,000,000 -2,880,000,000 -2,829,000,000 -2,591,000,000

Selling and Marketing Expenses 22912000000 7604000000 5516000000 5276000000 4516000000 -5,314,000,000 -4,231,000,000 -3,901,000,000 -4,500,000,000 -5,738,000,000 -4,609,000,000Research and Development Expenses 31562000000 8708000000 7694000000 7675000000 7485000000 -7,022,000,000 -6,856,000,000 -6,875,000,000 -6,820,000,000 -7,222,000,000 -6,554,000,000

Total Operating Profit/Loss 78714000000 21885000000 21031000000 19361000000 16437000000 15,651,000,000 11,213,000,000 6,383,000,000 7,977,000,000 9,266,000,000 9,177,000,000

Non-Operating Income/Expenses, Total 12020000000 2517000000 2033000000 2624000000 4846000000 3,038,000,000 2,146,000,000 1,894,000,000 -220,000,000 1,438,000,000 -549,000,000

Total Net Finance Income/Expense 1153000000 261000000 310000000 313000000 269000000 333,000,000 412,000,000 420,000,000 565,000,000 604,000,000 608,000,000

Net Interest Income/Expense 1153000000 261000000 310000000 313000000 269000000 333,000,000 412,000,000 420,000,000 565,000,000 604,000,000 608,000,000

Interest Expense Net of Capitalized Interest 346000000 117000000 77000000 76000000 76000000 -53,000,000 -48,000,000 -13,000,000 -21,000,000 -17,000,000 -23,000,000

Interest Income 1499000000 378000000 387000000 389000000 345000000 386,000,000 460,000,000 433,000,000 586,000,000 621,000,000 631,000,000

Net Investment Income 12364000000 2364000000 2207000000 2924000000 4869000000 3,530,000,000 1,957,000,000 1,696,000,000 -809,000,000 899,000,000 -1,452,000,000

Gain/Loss on Investments and Other Financial Instruments 12270000000 2478000000 2158000000 2883000000 4751000000 3,262,000,000 2,015,000,000 1,842,000,000 -802,000,000 399,000,000 -1,479,000,000

Income from Associates, Joint Ventures and Other Participating Interests 334000000 49000000 188000000 92000000 5000000 355,000,000 26,000,000 -54,000,000 74,000,000 460,000,000 -14,000,000

Gain/Loss on Foreign Exchange 240000000 163000000 139000000 51000000 113000000 -87,000,000 -84,000,000 -92,000,000 -81,000,000 40,000,000 41,000,000

Irregular Income/Expenses 0 0 0 0 0 0 0 0

Other Irregular Income/Expenses 0 0 0 0 0 0 0 0

Other Income/Expense, Non-Operating 1497000000 108000000 484000000 613000000 292000000 -825,000,000 -223,000,000 -222,000,000 24,000,000 -65,000,000 295,000,000

Pretax Income 90734000000 24402000000 23064000000 21985000000 21283000000 18,689,000,000 13,359,000,000 8,277,000,000 7,757,000,000 10,704,000,000 8,628,000,000

Provision for Income Tax 14701000000 3760000000 4128000000 3460000000 3353000000 -3,462,000,000 -2,112,000,000 -1,318,000,000 -921,000,000 -33,000,000 -1,560,000,000

Net Income from Continuing Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000

Net Income after Extraordinary Items and Discontinued Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000

Net Income after Non-Controlling/Minority Interests 76033000000 20642000000 18936000000 18525000000 17930000000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000

Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000

Diluted Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000

Income Statement Supplemental Section

Reported Normalized and Operating Income/Expense Supplemental Section

Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56,898,000,000 46,173,000,000 38,297,000,000 41,159,000,000 46,075,000,000 40,499,000,000

Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15,651,000,000 11,213,000,000 6,383,000,000 7,977,000,000 9,266,000,000 9,177,000,000

Reported Effective Tax Rate 0 0 0 0 0 0 0 0

Reported Normalized Income 6,836,000,000

Reported Normalized Operating Profit 7,977,000,000

Other Adjustments to Net Income Available to Common Stockholders

Discontinued Operations

Basic EPS 114 31 28 28 27 23 17 10 10 15 10

Basic EPS from Continuing Operations 114 31 28 28 27 22 17 10 10 15 10

Basic EPS from Discontinued Operations

Diluted EPS 112 31 28 27 26 22 16 10 10 15 10

Diluted EPS from Continuing Operations 112 31 28 27 26 22 16 10 10 15 10

Diluted EPS from Discontinued Operations

Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000

Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000

Reported Normalized Diluted EPS 10

Basic EPS 114 31 28 28 27 23 17 10 10 15 10

Diluted EPS 112 31 28 27 26 22 16 10 10 15 10

Basic WASO 667650000 662664000 665758000 668958000 673220000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000

Diluted WASO 677674000 672493000 676519000 679612000 682071000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000 Fiscal year end September 28th., 2022. | USD

31622,6:39 PM

Morningstar.com Intraday Fundamental Portfolio View Print Report Print

3/6/2022 at 6:37 PM Current Value

15,335,150,186,014

GOOGL_income-statement_Quarterly_As_Originally_Reported Q4 2021

Cash Flow from Operating Activities, Indirect 24934000000 Q3 2021 Q2 2021 Q1 2021 Q4 2020

Net Cash Flow from Continuing Operating Activities, Indirect 24934000000 25539000000 37497000000 31211000000 30,818,000,000

Cash Generated from Operating Activities 24934000000 25539000000 21890000000 19289000000 22,677,000,000

Income/Loss before Non-Cash Adjustment 20642000000 25539000000 21890000000 19289000000 22,677,000,000

Total Adjustments for Non-Cash Items 6517000000 18936000000 18525000000 17930000000 15,227,000,000

Depreciation, Amortization and Depletion, Non-Cash Adjustment 3439000000 3797000000 4236000000 2592000000 5,748,000,000

Depreciation and Amortization, Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3,725,000,000

Depreciation, Non-Cash Adjustment 3215000000 3304000000 2945000000 2753000000 3,725,000,000

Amortization, Non-Cash Adjustment 224000000 3085000000 2730000000 2525000000 3,539,000,000

Stock-Based Compensation, Non-Cash Adjustment 3954000000 219000000 215000000 228000000 186,000,000

Taxes, Non-Cash Adjustment 1616000000 3874000000 3803000000 3745000000 3,223,000,000

Investment Income/Loss, Non-Cash Adjustment 2478000000 1287000000 379000000 1100000000 1,670,000,000

Gain/Loss on Financial Instruments, Non-Cash Adjustment 2478000000 2158000000 2883000000 4751000000 -3,262,000,000

Other Non-Cash Items 14000000 2158000000 2883000000 4751000000 -3,262,000,000

Changes in Operating Capital 2225000000 64000000 8000000 255000000 392,000,000

Change in Trade and Other Receivables 5819000000 2806000000 871000000 1233000000 1,702,000,000

Change in Trade/Accounts Receivable 5819000000 2409000000 3661000000 2794000000 -5,445,000,000

Change in Other Current Assets 399000000 2409000000 3661000000 2794000000 -5,445,000,000

Change in Payables and Accrued Expenses 6994000000 1255000000 199000000 7000000 -738,000,000

Change in Trade and Other Payables 1157000000 3157000000 4074000000 4956000000 6,938,000,000

Change in Trade/Accounts Payable 1157000000 238000000 130000000 982000000 963,000,000

Change in Accrued Expenses 5837000000 238000000 130000000 982000000 963,000,000

Change in Deferred Assets/Liabilities 368000000 2919000000 4204000000 3974000000 5,975,000,000

Change in Other Operating Capital 3369000000 272000000 3000000 137000000 207,000,000

Change in Prepayments and Deposits 3041000000 1082000000 785000000 740,000,000

Cash Flow from Investing Activities 11016000000

Cash Flow from Continuing Investing Activities 11016000000 10050000000 9074000000 5383000000 -7,281,000,000

Purchase/Sale and Disposal of Property, Plant and Equipment, Net 6383000000 10050000000 9074000000 5383000000 -7,281,000,000

Purchase of Property, Plant and Equipment 6383000000 6819000000 5496000000 5942000000 -5,479,000,000

Sale and Disposal of Property, Plant and Equipment 6819000000 5496000000 5942000000 -5,479,000,000

Purchase/Sale of Business, Net 385000000

Purchase/Acquisition of Business 385000000 259000000 308000000 1666000000 -370,000,000

Purchase/Sale of Investments, Net 4348000000 259000000 308000000 1666000000 -370,000,000

Purchase of Investments 40860000000 3360000000 3293000000 2195000000 -1,375,000,000

Sale of Investments 36512000000 35153000000 24949000000 37072000000 -36,955,000,000

Other Investing Cash Flow 100000000 31793000000 21656000000 39267000000 35,580,000,000

Purchase/Sale of Other Non-Current Assets, Net 388000000 23000000 30000000 -57,000,000

Sales of Other Non-Current Assets

Cash Flow from Financing Activities 16511000000 15254000000

Cash Flow from Continuing Financing Activities 16511000000 15254000000 15991000000 13606000000 -9,270,000,000

Issuance of/Payments for Common Stock, Net 13473000000 12610000000 15991000000 13606000000 -9,270,000,000

Payments for Common Stock 13473000000 12610000000 12796000000 11395000000 -7,904,000,000

Proceeds from Issuance of Common Stock 12796000000 11395000000 -7,904,000,000

Issuance of/Repayments for Debt, Net 115000000 42000000

Issuance of/Repayments for Long Term Debt, Net 115000000 42000000 1042000000 37000000 -57,000,000

Proceeds from Issuance of Long Term Debt 6250000000 6350000000 1042000000 37000000 -57,000,000

Repayments for Long Term Debt 6365000000 6392000000 6699000000 900000000 0

Proceeds from Issuance/Exercising of Stock Options/Warrants 2923000000 2602000000 7741000000 937000000 -57,000,000

2453000000 2184000000 -1,647,000,000

Other Financing Cash Flow

Cash and Cash Equivalents, End of Period

Change in Cash 0 300000000 10000000 338,000,000,000

Effect of Exchange Rate Changes 20945000000 23719000000 23630000000 26622000000 26,465,000,000

Cash and Cash Equivalents, Beginning of Period 25930000000 235000000000 3175000000 300000000 6,126,000,000

Cash Flow Supplemental Section 181000000000 146000000000 183000000 143000000 210,000,000

Change in Cash as Reported, Supplemental 23719000000000 23630000000000 26622000000000 26465000000000 20,129,000,000,000

Income Tax Paid, Supplemental 2774000000 89000000 2992000000 6,336,000,000 Cash and Cash Equivalents, Beginning of Period 13412000000 157000000 -4,990,000,000

12 Months Ended

_________________________________________________________ Q4 2020 Q4 2019 I ncome Statement

USD in "000'"s

Repayments for Long Term Debt Dec. 31, 2020 Dec. 31, 2019

Costs and expenses:

Cost of revenues 182527 161,857

Research and development

Sales and marketing 84732 71,896

General and administrative 27573 26,018

European Commission fines 17946 18,464

Total costs and expenses 11052 9,551

Income from operations 0 1,697

Other income (expense), net 141303 127,626

Income before income taxes 41224 34,231

Provision for income taxes 6858000000 5,394

Net income 22677000000 19,289,000,000

*include interest paid, capital obligation, and underweighting 22677000000 19,289,000,000

22677000000 19,289,000,000

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)--

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

For Paperwork Reduction Act Notice, see the seperate Instructions.

JPMORGAN TRUST III

A/R Aging Summary As of July 28, 2022

ZACHRY T WOOD

Days over due

Effeective Tax Rate Prescribed by the Secretary of the Treasury. 44591 31 - 60 61 - 90 91 and over

0

TOTAL 0 0 0 0

Alphabet Inc.

P

£134,839.00

US$ in millions

Ann. Rev. Date £43,830.00 £43,465.00 £43,100.00 £42,735.00 £42,369.00

Revenues £161,857.00 £136,819.00 £110,855.00 £90,272.00 £74,989.00

Cost of revenues -£71,896.00 -£59,549.00 -£45,583.00 -£35,138.00 -£28,164.00

Gross profit £89,961.00 £77,270.00 £65,272.00 £55,134.00 £46,825.00

Research and development -£26,018.00 -£21,419.00 -£16,625.00 -£13,948.00 -£12,282.00

Sales and marketing -£18,464.00 -£16,333.00 -£12,893.00 -£10,485.00 -£9,047.00

General and administrative -£9,551.00 -£8,126.00 -£6,872.00 -£6,985.00 -£6,136.00

European Commission fines -£1,697.00 -£5,071.00 -£2,736.00 — —

Income from operations £34,231.00 £26,321.00 £26,146.00 £23,716.00 £19,360.00

Interest income £2,427.00 £1,878.00 £1,312.00 £1,220.00 £999.00

BEGIN-starts::/Run::/:'::Run:":, "CI:c:\i:CI:C::\I:https://C\Disc

\Ram::/C://Users/$Home > 021000021 > 001718745 > Chapter 7: Reports > Custom Reports > Exporting Custom Reports > ''"'':''"''' '''"'''

Company Registration No CIK0000835271. Registered Office: Attention: Zachry Tyler Wood, 5323 BRADFORD DR, DALLAS, TX, 75235-8313, United States

Member FDIC

1 Earnings Statement

ALPHABET Period Beginning:

1600 AMPITHEATRE PARKWAY DR Period Ending:

MOUNTAIN VIEW, C.A., 94043 Pay Date:

Taxable Marital Status:

Exemptions/Allowances Married ZACHRY T.

5323

Federal:

DALLAS

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

Employer

Employer Identification Number :xxxxx7919

ALPH INC

Employee

Employee Identification Number :xxxxx1725

ZACH T WOO

TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020

Gross Profit 1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000

Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000

2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000

Other Revenue

Cost of Revenue -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000

Cost of Goods and Services -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000

Operating Income/Expenses -67984000000 -20452000000 -16466000000 -16292000000 -14774000000 -15167000000 -13843000000 -13361000000

Selling, General and Administrative Expenses -36422000000 -11744000000 -8772000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000

General and Administrative Expenses -13510000000 -4140000000 -3256000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000

Selling and Marketing Expenses -22912000000 -7604000000 -5516000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000 Research and Development Expenses -31562000000 -8708000000 -7694000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000

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

Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000

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

Reported Normalized Diluted EPS Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21

Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13

Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000

Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000

Fiscal year end September 28th., 2022. | USD

31622,6:39 PM

Morningstar.com Intraday Fundamental Portfolio View Print Report Print

3/6/2022 at 6:37 PM

Get answers to your investing questions from the SEC's website dedicated to retail investors

2

ALPHABET

1601 AMPITHEATRE PARKWAY DR

MOUNTAIN VIEW, C.A., 94044

Taxable Marital Status:

Exemptions/Allowances Married

Federal:

TX: NO State Incorne Tax

rate units year to date Earnings

1349355887.8 2024033775.6 75698871601 Regular

Overtime

Bonus

Training

Gross Pay 75698871601

Statutory Deductions

Federal Income Tax Social Security Tax

Medicare Tax

Net Pay 70842743867 70842743867

CHECKING

Net Check 70842743867

Your federal taxable wages this period are $

ALPHABET INCOME

1601 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043

Deposited to the account Of

PLEASE READ THE IMPORTANT DISCLOSURES BELOW

FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD

633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053

PNC Bank PNC Bank Business Tax I.D. Number: 633441725

CIF Department (Online Banking) Checking Account: 47-2041-6547

P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation

500 First Avenue ALPHABET

Pittsburgh, PA 15219-3128 5323 BRADFORD DR NON-NEGOTIABLE DALLAS TX 75235 8313

ZACHRY, TYLER, WOOD

4/18/2022 650-2530-000 469-697-4300

SIGNATURE Time Zone: Eastern Central Mountain Pacific

Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value

PLEASE READ THE IMPORTANT DISCLOSURES BELOW

Based on facts as set forth in. 6551

The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.

EMPLOYER IDENTIFICATION NUMBER: 61-1767920

[DRAFT FORM OF TAX OPINION]

ALPHABET

ZACHRY T WOOD

5324 BRADFORD DR

DALLAS TX 75235-8315

ORIGINAL REPORT

Income, Rents, & Royalty

INCOME STATEMENT 61-1767920

88-1303492

GOOGL_income-statement_Quarterly_As_Originally_Reported TTM Q4 2022 Q3 2022 Q2 2022 Q1 2022 Q4 2021 Q3 2021

Gross Profit -2178236363.6 -9195472727.3 -16212709090.9 -23229945454.5 -30247181818.2 -37264418181.8 -44281654545.5

Total Revenue as Reported, Supplemental -1286309090.9 -13385163636.4 -25484018181.8 -37582872727.3 -49681727272.7 -61780581818.2 -73879436363.6

1957800000 -9776581818.2 -21510963636.4 -33245345454.5 -44979727272.7 -56714109090.9 -68448490909.1 Other Revenue

Cost of Revenue -891927272.7 4189690909.1 9271309090.9 14352927272.7 19434545454.5 24516163636.4 29597781818.2

Cost of Goods and Services -891927272.7 4189690909.1 9271309090.9 14352927272.7 19434545454.5 24516163636.4 29597781818.2

Operating Income/Expenses -3640563636.4 -882445454.5 1875672727.3 4633790909.1 7391909090.9 10150027272.7 12908145454.5

Selling, General and Administrative Expenses -1552200000 -28945454.55 1494309090.9 3017563636.4 4540818181.8 6064072727.3 7587327272.7

General and Administrative Expenses -544945454.5 23200000 591345454.5 1159490909.1 1727636363.6 2295781818.2 2863927272.7

Selling and Marketing Expenses -1007254545.5 -52145454.55 902963636.4 1858072727.3 2813181818.2 3768290909.1 4723400000

Research and Development Expenses -2088363636.4 -853500000 381363636.4 1616227272.7 2851090909.1 4085954545.5 5320818181.8

Total Operating Profit/Loss -5818800000 -10077918181.8 -14337036363.6 -18596154545.5 -22855272727.3 -27114390909.1 -31373509090.9

Non-Operating Income/Expenses, Total -1369181818.2 -2079000000 -2788818181.8 -3498636363.6 -4208454545.5 -4918272727.3 -5628090909.1

Total Net Finance Income/Expense 464490909.1 462390909.1 460290909.1 458190909.1 456090909.1 453990909.1 451890909.1

Net Interest Income/Expense 464490909.1 462390909.1 460290909.1 458190909.1 456090909.1 453990909.1 451890909.1

Interest Expense Net of Capitalized Interest 48654545.45 69900000 91145454.55 112390909.1 133636363.6 154881818.2 176127272.7

Interest Income 415836363.6 392490909.1 369145454.5 345800000 322454545.5 299109090.9 275763636.4

Net Investment Income -2096781818.2 -2909109090.9 -3721436363.6 -4533763636.4 -5346090909.1 -6158418181.8 -6970745454.5

Gain/Loss on Investments and Other Financial Instruments -2243490909.1 -3068572727.3 -3893654545.5 -4718736363.6 -5543818181.8 -6368900000 -7193981818.2

Income from Associates, Joint Ventures and Other Participating Interests 99054545.45 92609090.91 86163636.36 79718181.82 73272727.27 66827272.73 60381818.18

Gain/Loss on Foreign Exchange 47654545.45 66854545.45 86054545.45 105254545.5 124454545.5 143654545.5 162854545.5

Irregular Income/Expenses 0 0 0 0

Other Irregular Income/Expenses 0 0 0 0

Other Income/Expense, Non-Operating 263109090.9 367718181.8 472327272.7 576936363.6 681545454.5 786154545.5 890763636.4

Pretax Income -7187981818.2 -12156918181.8 -17125854545.5 -22094790909.1 -27063727272.7 -32032663636.4 -37001600000

Provision for Income Tax 1695218181.8 2565754545.5 3436290909.1 4306827272.7 5177363636.4 6047900000 6918436363.6

Net Income from Continuing Operations -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Net Income after Extraordinary Items and Discontinued Operations -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Net Income after Non-Controlling/Minority Interests -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Net Income Available to Common Stockholders -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Diluted Net Income Available to Common Stockholders -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Income Statement Supplemental Section

Reported Normalized and Operating Income/Expense Supplemental Section

Total Revenue as Reported, Supplemental -1286309090.9 -13385163636.4 -25484018181.8 -37582872727.3 -49681727272.7 -61780581818.2 -73879436363.6

Total Operating Profit/Loss as Reported, Supplemental -5818800000 -10077918181.8 -14337036363.6 -18596154545.5 -22855272727.3 -27114390909.1 -31373509090.9

Reported Effective Tax Rate 1.162 1.43667E-01 1.33167E-01 1.22667E-01 1.06333E-01

Reported Normalized Income

Reported Normalized Operating Profit

Other Adjustments to Net Income Available to Common Stockholders

Discontinued Operations Basic EPS -8.742909091 -14.93854545 -21.13418182 -27.32981818 -33.52545455 -39.72109091 -45.91672727

Basic EPS from Continuing Operations -8.752545455 -14.94781818 -21.14309091 -27.33836364 -33.53363636 -39.72890909 -45.92418182

Basic EPS from Discontinued Operations

Diluted EPS -8.505636364 -14.599 -20.69236364 -26.78572727 -32.87909091 -38.97245455 -45.06581818

Diluted EPS from Continuing Operations -8.515636364 -14.609 -20.70236364 -26.79572727 -32.88909091 -38.98245455 -45.07581818

Diluted EPS from Discontinued Operations

Basic Weighted Average Shares Outstanding 694313545.5 697258863.6 700204181.8 703149500 706094818.2 709040136.4 711985454.5

Diluted Weighted Average Shares Outstanding 698675981.8 701033009.1 703390036.4 705747063.6 708104090.9 710461118.2 712818145.5

Reported Normalized Diluted EPS

Basic EPS -8.742909091 -14.93854545 -21.13418182 -27.32981818 -33.52545455 -39.72109091 -45.91672727

Diluted EPS -8.505636364 -14.599 -20.69236364 -26.78572727 -32.87909091 -38.97245455 -45.06581818

Basic WASO 694313545.5 697258863.6 700204181.8 703149500 706094818.2 709040136.4 711985454.5

Diluted WASO 698675981.8 701033009.1 703390036.4 705747063.6 708104090.9 710461118.2 712818145.5

Fiscal year end September 28th., 2022. | USD

Member FDIC

1 Earnings Statement

ALPHABET Period Beginning:

1600 AMPITHEATRE PARKWAY DR Period Ending:

MOUNTAIN VIEW, C.A., 94043 Pay Date:

Taxable Marital Status:

Exemptions/Allowances Married ZACHRY T.

5323 Federal:

DALLAS

TX: NO State Incorne Tax

rate units year to date Other Benefits and

112.2 674678000 75698871600 Information

Pto Balance

Total Work Hrs

Gross Pay 75698871600 Important Notes

COMPANY PH Y: 650-253-0000

Statutory BASIS OF PAY: BASIC/DILUTED EPS Federal Income Tax

Social Security Tax

YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE

Medicare Tax

Net Pay 70842743866 70842743866

CHECKING

Net Check 70842743866

Your federal taxable wages this period are $

ALPHABET INCOME Advice number:

1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043

Deposited to the account Of xxxxxxxx6547 :xxxxx1725

Based on facts as set forth in.

650

The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.

Employer

Employer Identification Number :xxxxx7919

ALPH INC

Employee

Employee Identification Number :xxxxx1725

ZACH T WOO

31622,6:39 PM

Morningstar.com Intraday Fundamental Portfolio View Print Report Print

3/6/2022 at 6:37 PM

Get answers to your investing questions from the SEC's website dedicated to retail investors

2

ALPHABET

1601 AMPITHEATRE PARKWAY DR

MOUNTAIN VIEW, C.A., 94044

Taxable Marital Status:

Exemptions/Allowances Married

Federal:

TX: NO State Incorne Tax

Statutory Deductions

Federal Income Tax

Social Security Tax

Medicare Tax

Deposited to the account Of

PLEASE READ THE IMPORTANT DISCLOSURES BELOW

FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD

633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053

PNC Bank PNC Bank Business Tax I.D. Number: 633441725

CIF Department (Online Banking) Checking Account: 47-2041-6547

P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation

EMPLOYER IDENTIFICATION NUMBER: 61-1767920

[DRAFT FORM OF TAX OPINION]

ALPHABET

ZACHRY T WOOD

5324 BRADFORD DR

DALLAS TX 75235-8315

ORIGINAL REPORT

Income, Rents, & Royalty

INCOME STATEMENT 61-1767920

88-1303492

GOOGL_income-statement_Quarterly_As_Originally_Reported TTM Q4 2022 Q3 2022 Q2 2022 Q1 2022 Q4 2021 Q3 2021

Gross Profit -2178236363.6 -9195472727.3 -16212709090.9 -23229945454.5 -30247181818.2 -37264418181.8 -44281654545.5

Total Revenue as Reported, Supplemental -1286309090.9 -13385163636.4 -25484018181.8 -37582872727.3 -49681727272.7 -61780581818.2 -73879436363.6

1957800000 -9776581818.2 -21510963636.4 -33245345454.5 -44979727272.7 -56714109090.9 -68448490909.1

Other Revenue

Cost of Revenue -891927272.7 4189690909.1 9271309090.9 14352927272.7 19434545454.5 24516163636.4 29597781818.2

Cost of Goods and Services -891927272.7 4189690909.1 9271309090.9 14352927272.7 19434545454.5 24516163636.4 29597781818.2

Operating Income/Expenses -3640563636.4 -882445454.5 1875672727.3 4633790909.1 7391909090.9 10150027272.7 12908145454.5

Selling, General and Administrative Expenses -1552200000 -28945454.55 1494309090.9 3017563636.4 4540818181.8 6064072727.3 7587327272.7

General and Administrative Expenses -544945454.5 23200000 591345454.5 1159490909.1 1727636363.6 2295781818.2 2863927272.7

Selling and Marketing Expenses -1007254545.5 -52145454.55 902963636.4 1858072727.3 2813181818.2 3768290909.1 4723400000

Research and Development Expenses -2088363636.4 -853500000 381363636.4 1616227272.7 2851090909.1 4085954545.5 5320818181.8

Total Operating Profit/Loss -5818800000 -10077918181.8 -14337036363.6 -18596154545.5 -22855272727.3 -27114390909.1 -31373509090.9

Non-Operating Income/Expenses, Total -1369181818.2 -2079000000 -2788818181.8 -3498636363.6 -4208454545.5 -4918272727.3 -5628090909.1

Total Net Finance Income/Expense 464490909.1 462390909.1 460290909.1 458190909.1 456090909.1 453990909.1 451890909.1

Net Interest Income/Expense 464490909.1 462390909.1 460290909.1 458190909.1 456090909.1 453990909.1 451890909.1 Interest Expense Net of Capitalized Interest 48654545.45 69900000 91145454.55 112390909.1 133636363.6 154881818.2 176127272.7

Interest Income 415836363.6 392490909.1 369145454.5 345800000 322454545.5 299109090.9 275763636.4

Net Investment Income -2096781818.2 -2909109090.9 -3721436363.6 -4533763636.4 -5346090909.1 -6158418181.8 -6970745454.5

Gain/Loss on Investments and Other Financial Instruments -2243490909.1 -3068572727.3 -3893654545.5 -4718736363.6 -5543818181.8 -6368900000 -7193981818.2

Income from Associates, Joint Ventures and Other Participating Interests 99054545.45 92609090.91 86163636.36 79718181.82 73272727.27 66827272.73 60381818.18

Gain/Loss on Foreign Exchange 47654545.45 66854545.45 86054545.45 105254545.5 124454545.5 143654545.5 162854545.5

Irregular Income/Expenses 0 0 0 0

Other Irregular Income/Expenses 0 0 0 0

Other Income/Expense, Non-Operating 263109090.9 367718181.8 472327272.7 576936363.6 681545454.5 786154545.5 890763636.4

Pretax Income -7187981818.2 -12156918181.8 -17125854545.5 -22094790909.1 -27063727272.7 -32032663636.4 -37001600000

Provision for Income Tax 1695218181.8 2565754545.5 3436290909.1 4306827272.7 5177363636.4 6047900000 6918436363.6

Net Income from Continuing Operations -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Net Income after Extraordinary Items and Discontinued Operations -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Net Income after Non-Controlling/Minority Interests -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Net Income Available to Common Stockholders -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Diluted Net Income Available to Common Stockholders -5492763636.4 -9591163636.4 -13689563636.4 -17787963636.4 -21886363636.4 -25984763636.4 -30083163636.4

Income Statement Supplemental Section

Reported Normalized and Operating Income/Expense Supplemental Section

Total Revenue as Reported, Supplemental -1286309090.9 -13385163636.4 -25484018181.8 -37582872727.3 -49681727272.7 -61780581818.2 -73879436363.6

Total Operating Profit/Loss as Reported, Supplemental -5818800000 -10077918181.8 -14337036363.6 -18596154545.5 -22855272727.3 -27114390909.1 -31373509090.9

Reported Effective Tax Rate 1.162 1.43667E-01 1.33167E-01 1.22667E-01 1.06333E-01

Reported Normalized Income

Reported Normalized Operating Profit

Other Adjustments to Net Income Available to Common Stockholders

Discontinued Operations

Basic EPS -8.742909091 -14.93854545 -21.13418182 -27.32981818 -33.52545455 -39.72109091 -45.91672727

Basic EPS from Continuing Operations -8.752545455 -14.94781818 -21.14309091 -27.33836364 -33.53363636 -39.72890909 -45.92418182

Basic EPS from Discontinued Operations Diluted EPS -8.505636364 -14.599 -20.69236364 -26.78572727 -32.87909091 -38.97245455 -45.06581818

Diluted EPS from Continuing Operations -8.515636364 -14.609 -20.70236364 -26.79572727 -32.88909091 -38.98245455 -45.07581818

Diluted EPS from Discontinued Operations

Basic Weighted Average Shares Outstanding 694313545.5 697258863.6 700204181.8 703149500 706094818.2 709040136.4 711985454.5

Diluted Weighted Average Shares Outstanding 698675981.8 701033009.1 703390036.4 705747063.6 708104090.9 710461118.2 712818145.5

Reported Normalized Diluted EPS

Basic EPS -8.742909091 -14.93854545 -21.13418182 -27.32981818 -33.52545455 -39.72109091 -45.91672727

Diluted EPS -8.505636364 -14.599 -20.69236364 -26.78572727 -32.87909091 -38.97245455 -45.06581818

Basic WASO 694313545.5 697258863.6 700204181.8 703149500 706094818.2 709040136.4 711985454.5

Diluted WASO 698675981.8 701033009.1 703390036.4 705747063.6 708104090.9 710461118.2 712818145.5

Fiscal year end September 28th., 2022. | USD**":,

7084274386":, ::

500 First Avenue ALPHABET

Pittsburgh, PA 15219-3128 5323 BRADFORD DR

NON-NEGOTIABLE DALLAS TX 75235 8313

ZACHRY, TYLER, WOOD

4/18/2022 650-2530-000 469-697-4300

SIGNATURE Time Zone: Eastern Central Mountain Pacific

Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value

PLEASE READ THE IMPORTANT DISCLOSURES BELOW

Based on facts as set forth in. 6551

The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.

name: Run linter
run: deno lint

name: Run tests
running'.'.'.','' ':'' '"rust.u'@:rake.i'.yml':''

'"'#'Runs':':'' '":'' '"'#'Across'-ALL'-'#'Versionings'@https://'.github'com/packages/javascript/WORKSFLOW/'@USERNAME=:'' '"mowjoejoeojoejoe/mowjoejoejoejoe/README.MD/README.MD ::

<\title/>

'' :ALL' "\

<\RSS.FEED/> :''"''

-- title: Working with the RubyGems registry intro: 'You can configure RubyGems to publish a package to {% data variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in a Ruby project with Bundler.' product: '{% data reusables.gated-features.packages %}' redirect_from:

/articles/configuring-rubygems-for-use-with-github-package-registry
/github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
/github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
/packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
/packages/guides/configuring-rubygems-for-use-with-github-packages versions: fpt: '' ghes: '' ghae: '' ghec: '' shortTitle: RubyGems registry
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

Prerequisites
You must have RubyGems 2.4.1 or higher. To find your RubyGems version:

$ gem --version
You must have bundler 1.6.4 or higher. To find your Bundler version:

$ bundle --version
Bundler version 1.13.7
Install keycutter to manage multiple credentials. To install keycutter:

$ gem install keycutter
Authenticating to {% data variables.product.prodname_registry %}
{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

Authenticating with a personal access token
{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with RubyGems by editing the ~/.gem/credentials file for publishing gems, editing the ~/.gemrc file for installing a single gem, or using Bundler for tracking and installing one or more gems.

To publish new gems, you need to authenticate to {% data variables.product.prodname_registry %} with RubyGems by editing your ~/.gem/credentials file to include your personal access token. Create a new ~/.gem/credentials file if this file doesn't exist.

For example, you would create or edit a ~/.gem/credentials to include the following, replacing TOKEN with your personal access token.

---
:github: Bearer TOKEN
To install gems, you need to authenticate to {% data variables.product.prodname_registry %} by editing the ~/.gemrc file for your project to include https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/. You must replace:

USERNAME with your {% data variables.product.prodname_dotcom %} username.
TOKEN with your personal access token.
OWNER with the name of the user or organization account that owns the repository containing your project.{% ifversion ghes %}
REGISTRY-URL with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use rubygems.HOSTNAME. If your instance has subdomain isolation disabled, use HOSTNAME/_registry/rubygems. In either case, replace HOSTNAME with the hostname of your {% data variables.product.prodname_ghe_server %} instance. {% elsif ghae %}
REGISTRY-URL with the URL for your instance's Rubygems registry, rubygems.HOSTNAME. Replace HOSTNAME with the hostname of {% data variables.product.product_location %}. {% endif %}
If you don't have a ~/.gemrc file, create a new ~/.gemrc file using this example.

---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  
To authenticate with Bundler, configure Bundler to use your personal access token, replacing USERNAME with your {% data variables.product.prodname_dotcom %} username, TOKEN with your personal access token, and OWNER with the name of the user or organization account that owns the repository containing your project.{% ifversion ghes %} Replace REGISTRY-URL with the URL for your instance's RubyGems registry. If your instance has subdomain isolation enabled, use rubygems.HOSTNAME. If your instance has subdomain isolation disabled, use HOSTNAME/_registry/rubygems. In either case, replace HOSTNAME with the hostname of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %}Replace REGISTRY-URL with the URL for your instance's Rubygems registry, rubygems.HOSTNAME. Replace HOSTNAME with the hostname of {% data variables.product.product_location %}.{% endif %}

$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
Publishing a package
{% data reusables.package_registry.default-name %} For example, when you publish octo-gem to the octo-org organization, {% data variables.product.prodname_registry %} publishes the gem to the octo-org/octo-gem repository. For more information on creating your gem, see "Make your own gem" in the RubyGems documentation.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %} 2. Build the package from the gemspec to create the .gem package.

gem build OCTO-GEM.gemspec
Publish a package to {% data variables.product.prodname_registry %}, replacing OWNER with the name of the user or organization account that owns the repository containing your project and OCTO-GEM with the name of your gem package.{% ifversion ghes %} Replace REGISTRY-URL with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use rubygems.HOSTNAME. If your instance has subdomain isolation disabled, use HOSTNAME/_registry/rubygems. In either case, replace HOSTNAME with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %} Replace REGISTRY-URL with the URL for your instance's Rubygems registry, rubygems.HOSTNAME. Replace HOSTNAME with the hostname of {% data variables.product.product_location %}.{% endif %}
$ gem push --key github \
--host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
OCTO-GEM-0.0.1.gem
Publishing multiple packages to the same repository
To publish multiple gems to the same repository, you can include the URL to the {% data variables.product.prodname_dotcom %} repository in the github_repo field in gem.metadata. If you include this field, {% data variables.product.prodname_dotcom %} matches the repository based on this value, instead of using the gem name.{% ifversion ghes or ghae %} Replace HOSTNAME with the host name of {% data variables.product.product_location %}.{% endif %}

gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
Installing a package
You can use gems from {% data variables.product.prodname_registry %} much like you use gems from rubygems.org. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the ~/.gemrc file or by using Bundler and editing your Gemfile.

{% data reusables.package_registry.authenticate-step %}

For Bundler, add your {% data variables.product.prodname_dotcom %} user or organization as a source in your Gemfile to fetch gems from this new source. For example, you can add a new source block to your Gemfile that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing GEM NAME with the package you want to install from {% data variables.product.prodname_registry %} and OWNER with the user or organization that owns the repository containing the gem you want to install.{% ifversion ghes %} Replace REGISTRY-URL with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use rubygems.HOSTNAME. If your instance has subdomain isolation disabled, use HOSTNAME/_registry/rubygems. In either case, replace HOSTNAME with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %} Replace REGISTRY-URL with the URL for your instance's Rubygems registry, rubygems.HOSTNAME. Replace HOSTNAME with the hostname of {% data variables.product.product_location %}.{% endif %}
source "https://rubygems.org"

gem "rails"

source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
  gem "GEM NAME"
end
For Bundler versions earlier than 1.7.0, you need to add a new global source. For more information on using Bundler, see the bundler.io documentation.
source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
source "https://rubygems.org"

gem "rails"
gem "GEM NAME"
Install the package:
$ gem install octo-gem --version "0.1.1"
Further reading
"Deleting and restoring a package"
Footer
:Build ::
