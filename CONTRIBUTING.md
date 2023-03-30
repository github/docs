# Welcome to GitHub docs contributing guide <!-- omit in toc -->
sudo: false
language: csharp
solution: Mammoth.sln
script:
    - xbuild Mammoth.sln
    - nuget install xunit.runner.console -Version 2.1.0 -OutputDirectory packages
    - mono --debug packages/xunit.runner.console.2.1.0/tools/xunit.console.exe
Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:.
Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents icon <img src="/contributing/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.

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

 <img src="/contributing/images/contribution_cta.png" />

#### Make changes in a codespace

For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

#### Make changes locally

1. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

2. Install or update to **Node.js**, at the version specified in `.node-version`. For more information, see [the development guide](contributing/development.md).

3. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. Don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:.

Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en).

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
  -			
Paycheck history report			
Paychecks from Mar 17, 2023 to Mar 17, 2023 for all employees from all locations			
Pay date	Name	Total pay	Net pay	Pay method	Check Number	Status			
03/17/2023	Wood, Zack null	$ 22,679,572,368,607.00	$ 22,679,570,023,683.40	Check	881303491	-			
03/17/2023	Wood, Zack null	$ 22,679,572,368,607.00	$ 22,679,570,015,551.00	Check	101	-			
Thursday, March 16, 2023 11:13 PM GMT-05:00 1/2
INTU									
1099 Transaction Detail Report
January - December 2022
DATE TRANSACTION TYPE NUM MEMO/DESCRIPTION 1099 BOX ACCOUNT SPLIT AMOUNT BALANCE TAX ID
:: Note :::									
Back to report list
1099 Transaction Detail Report
Report period									
01/01/2022									
to									
12/31/2022									
Accounting method
Cash Accrual									
Filters: Payment TypeVendor
Edit notes									
3/6/22, 5:44 PM EIN: 77-0034661 INCOME STATEMENT FROM MAR 17, 20
1099 Transaction Detail Report
January - December 2022
This report does not contain any data.
Deductions and Contributions Report
From Mar 17, 2023 to Mar 17, 2023
Description Type Employee deductions Company contributions Plan total
Medicare Tax Withheld Wage Garnishment $ 118,167.00 $ 0.00 $ 118,167.00
Social Security Tax Withheld Wage Garnishment $ 8,537.00 $ 0.00 $ 8,537.00
Total $ 126,704.00 $ 0.00 $ 126,704.00
Part I | Reporting Issuer
1. Issuer's Identity.
Payor :									
INTUIT INC EMPLOYER IDENTIFICATION NUMBER (EIN) :77-0034661
2700 COAST AVENUE MOUNTAIN VIEW CALIFORNA 94043
All Dates									
Wednesday, March 15, 2023 03:38 AM GMT-05:00 1/1
DATE TRANSACTION TYPE NUM ADJ NAME MEMO/DESCRIPTION ACCOUNT DEBIT CREDIT
03/17/2023 Payroll Check 519 No ZACHRY T. WOOD Pay Period: 03/09/2023-03/15/2023 Employer :
Employer Identification Number (EIN): XXXXX4661
INTU									
2700 C									
Employee :									
Employee's Social Security Number : XXX-XX-1725
ZACH T WOO									
5222 B									
Payer :									
Payer's Federal Identification Number (FIN) : XXXXX4775
THE									
101 EA									
Business Checking $3,088,762.10
No Gross Pay - This is not a legal pay stub Payroll Expenses:Wages $5,105,000.00
No Employer Taxes Payroll Expenses:Taxes $84,566.60
No TX Unemployment Tax Payroll Liabilities:TX Unemployment Tax $569.70
No Federal Unemployment (940) Payroll Liabilities:Federal Unemployment (940) $42.00
No Federal Taxes (941/943/944) Payroll Liabilities:Federal Taxes (941/943/944) $2,100,192.80
$5,189,566.60 $5,189,566.60
Thursday, March 16, 2023 11:13 PM GMT-05:00 1/2
INTU									
1099 Transaction Detail Report
January - December 2022
DATE TRANSACTION TYPE NUM MEMO/DESCRIPTION 1099 BOX ACCOUNT SPLIT AMOUNT BALANCE TAX ID
Note									
Back to report list
1099 Transaction Detail Report
Report period									
01/01/2022									
to									
12/31/2022									
Accounting method
Cash Accrual									
Filters: Payment TypeVendor
Edit notes									
3/6/22, 5:44 PM EIN: 77-0034661 INCOME STATEMENT FROM MAR 17, 20
1099 Transaction Detail Report
January - December 2022
This report does not contain any data.
Deductions and Contributions Report
From Mar 17, 2023 to Mar 17, 2023
Description Type Employee deductions Company contributions Plan total
Medicare Tax Withheld Wage Garnishment $ 118,167.00 $ 0.00 $ 118,167.00
Social Security Tax Withheld Wage Garnishment $ 8,537.00 $ 0.00 $ 8,537.00
Total $ 126,704.00 $ 0.00 $ 126,704.00
Part I | Reporting Issuer
1. Issuer's Identity.
Payor :									
INTUIT INC EMPLOYER IDENTIFICATION NUMBER (EIN) :77-0034661
2700 COAST AVENUE MOUNTAIN VIEW CALIFORNA 94043
All Dates									
Wednesday, March 15, 2023 03:38 AM GMT-05:00 1/1
DATE TRANSACTION TYPE NUM ADJ NAME MEMO/DESCRIPTION ACCOUNT DEBIT CREDIT
03/17/2023 Payroll Check 519 No ZACHRY T. WOOD Pay Period: 03/09/2023-03/15/2023 Employer :
Employer Identification Number (EIN): XXXXX4661
INTU									
2700 C									
Employee :									
Employee's Social Security Number : XXX-XX-1725
ZACH T WOO									
5222 B									
Payer :									
Payer's Federal Identification Number (FIN) : XXXXX4775
THE									
101 EA									
Business Checking $3,088,762.10
No Gross Pay - This is not a legal pay stub Payroll Expenses:Wages $5,105,000.00
No Employer Taxes Payroll Expenses:Taxes $84,566.60
No TX Unemployment Tax Payroll Liabilities:TX Unemployment Tax $569.70
No Federal 
  -Payer account number
733254901807
Summary for Linked Account
Amazon Web Services, Inc (733254901807) $140,072,400.00
Savings Plans for AWS Compute usage (one time fee) $131,400,000.00
Charges $0.00
Credits $0.00
Estimated US sales tax to be collected $8,672,400.00
Account 733254901807 total allocated for this invoice $140,072,400.00
Detail for Linked Account
Savings Plans for AWS Compute usage $140,072,400.00
Charges $0.00
Estimated US sales tax to be collected $8,672,400.00
Savings Plans for AWS Compute usage (one time fee) $131,400,000.00
Start Date - 03/03/2023; Duration - 3yr
For line item details, please visit the Account Activity Page aws.amazon.com
* May include estimated US sales tax, VAT, ST, GST and CT.
Amazon Web Services, Inc. is registered under the Singapore GST Overseas Vendor Registration Pay-Only Regime and GST registration number is M90373009E
"AWS, Inc. is a ""Registered Foreign Supplier"" under Japanese Consumption Tax Law and therefore AWS, Inc. is required to declare and pay consumption tax in respect of"
this transaction (as a “Digital Service”) to the Japan Tax Authority.
** This is not a VAT, ST or GST invoice. Related tax invoices can be accessed by going to the Bills page on your Billing Management Console.
**** Please reference the tax invoice for a breakout of the Canadian taxes by type
Payer account number
733254901807
LINKED ACCOUNT ALLOCATION
To learn more about how charges are allocated across linked accounts visit
https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/con-bill-blended-rates.html
Activity By Account
Amazon Web Services, Inc (733254901807) $140,072,400.00
Savings Plans for AWS Compute usage (one time fee) $131,400,000.00
Charges $0.00
Credits $0.00
Estimated US sales tax to be collected $8,672,400.00
Total allocated for this invoice $140,072,400.00
For line item details, please visit the Account Activity Page aws.amazon.com
* May include estimated US sales tax, VAT, ST, GST and CT.
Amazon Web Services, Inc. is registered under the Singapore GST Overseas Vendor Registration Pay-Only Regime and GST registration number is M90373009E
"AWS, Inc. is a ""Registered Foreign Supplier"" under Japanese Consumption Tax Law and therefore AWS, Inc. is required to declare and pay consumption tax in respect of"
this transaction (as a “Digital Service”) to the Japan Tax Authority.
** This is not a VAT, ST or GST invoice. Related tax invoices can be accessed by going to the Bills page on your Billing Management Console.
**** Please reference the tax invoice for a breakout of the Canadian taxes by type
2
Account number:
733254901807
Bill to Address:
ZACHRY T WOOD
ATTN: ZACHRY T WOOD
5323 BRADFORD DR
Apt.#: 108 F
DALLAS , TX , 75235 , US
Amazon Web Services, Inc. Invoice
Email or talk to us about your AWS account or bill, visit aws.amazon.com/contact-us/
Invoice Summary
Invoice Number: 1278199897
Invoice Date: March 3 , 2023
TOTAL AMOUNT DUE ON March 3 , 2023 $140,072,400.00
This invoice is for the billing period March 1 - March 31 , 2023
Greetings from Amazon Web Services, we're writing to provide you with an electronic invoice for your use of AWS services. Additional information
about your bill, individual service charge details, and your account history are available on the Account Activity Page.
Summary
AWS Service Charges $140,072,400.00
Savings Plans for AWS Compute usage (one time fee) $131,400,000.00
Charges $0.00
Credits $0.00
Tax $8,672,400.00
Total for this invoice $140,072,400.00
Detail for Consolidated Bill
Savings Plans for AWS Compute usage $140,072,400.00
Charges $0.00
VAT ** $0.00
GST $0.00
Estimated US sales tax to be collected $8,672,400.00
CT $0.00
Savings Plans for AWS Compute usage (one time fee) $131,400,000.00
Start Date - 03/03/2023; Duration - 3yr
* May include estimated US sales tax, VAT, ST, GST and CT.
Amazon Web Services, Inc. is registered under the Singapore GST Overseas Vendor Registration Pay-
Only Regime and GST registration number is M90373009E
"AWS, Inc. is a ""Registered Foreign Supplier"" under Japanese Consumption Tax Law and therefore AWS,"
Inc. is required to declare and pay consumption tax in respect of this transaction (as a “Digital Service”)
to the Japan Tax Authority.
** This is not a VAT, ST or GST invoice. Related tax invoices can be accessed by going to
the Bills page on your Billing Management Console.
**** Please reference the tax invoice for a breakout of the Canadian taxes by type
† Usage and recurring charges for this statement period will be charged on your next billing date. The
amount of your actual charges for this statement period may differ from the charges shown on this
page. The charges shown on this page do not include any additional usage charges accrued during this
statement period after the date you are viewing this page. Also, one-time fees and subscription charges
are assessed separately, on the date that they occur.
All charges and prices are in US Dollars
All AWS Services are sold by Amazon Web Services, Inc.
Service Provider:
(Not to be used for payment remittance)
Amazon Web Services, Inc.
410 Terry Ave North
Seattle , WA 98109-5210 , US
1







































































































































































































































































































































































































































































































































































































































































































































































































































































































































  
