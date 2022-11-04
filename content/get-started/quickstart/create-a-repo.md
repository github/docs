---
title: Create a repo
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'To put your project up on {% data variables.product.prodname_dotcom %}, you will need to create a repository for it to live in.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---
## Create a repository

{% ifversion fpt or ghec %}

You can store a variety of projects in {% data variables.product.prodname_dotcom %} repositories, including open source projects. With open source projects, you can share code to make better, more reliable software. You can use repositories to collaborate with others and track your work. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)." To learn more about open source projects, visit [OpenSource.org](https://opensource.org/about).

{% elsif ghes or ghae %}

You can store a variety of projects in {% data variables.product.product_name %} repositories, including innersource projects. With innersource, you can share code to make better, more reliable software. For more information on innersource, see {% data variables.product.company_short %}'s white paper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Notes:** 
- You can create public repositories for an open source project. When creating your public repository, make sure to include a [license file](https://choosealicense.com/) that determines how you want your project to be shared with others. {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- You can also add community health files to your repositories, to set guidelines on how to contribute, keep your repositories safe, and much more. For more information, see "[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)." 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Type a short, memorable name for your repository. For example, "hello-world".
  ![Field for entering a repository name](/assets/images/help/repository/create-repository-name.png)
3. Optionally, add a description of your repository. For example, "My first repository on {% data variables.product.product_name %}."
  ![Field for entering a repository description](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Congratulations! You've successfully created your first repository, and initialized it with a *README* file.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
2. To create a repository for your project, use the `gh repo create` subcommand. When prompted, select **Create a new repository on GitHub from scratch** and enter the name of your new project. If you want your project to belong to an organization instead of to your personal account, specify the organization name and project name with `organization-name/project-name`. 
3. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory.  
4. Alternatively, to skip the prompts supply the repository name and a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create project-name --public`. To clone the repository locally, pass the `--clone` flag.  For more information about possible arguments, see the [GitHub CLI manual](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Commit your first change

{% webui %}

A *[commit](/articles/github-glossary#commit)* is like a snapshot of all the files in your project at a particular point in time.

When you created your new repository, you initialized it with a *README* file. *README* files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your *README* file are automatically shown on the front page of your repository.

Let's commit a change to the *README* file.

1. In your repository's list of files, click ***README.md***.
  ![README file in file list](/assets/images/help/repository/create-commit-open-readme.png)
2. Above the file's content, click {% octicon "pencil" aria-label="The edit icon" %}.
3. On the **Edit file** tab, type some information about yourself.
  ![New content in file](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. Review the changes you made to the file. You will see the new content in green.
  ![File preview view](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

*README* files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your *README* file are automatically shown on the front page of your repository. Follow these steps to add a *README* file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a *README* file with some information about the project.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Enter `git status`. You will see that you have an untracked `README.md` file.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage and commit the file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push the changes to your branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Next steps

You have now created a repository, including a *README* file, and created your first commit on {% data variables.location.product_location %}.

{% webui %}

* You can now clone a {% data variables.product.prodname_dotcom %} repository to create a local copy on your computer. From your local repository you can commit, and create a pull request to update the changes in the upstream repository. For more information, see "[Cloning a repository](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" and "[Set up Git](/articles/set-up-git)."

{% endwebui %}

* You can find interesting projects and repositories on {% data variables.product.prodname_dotcom %} and make changes to them by creating a fork of the repository. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
{% "**Your federal taxable wages this period are $
+Purchase/Acquisition of Business -1010700000 -1148400000 -1286100000 -1423800000 -1561500000
+TX: NO State Incorne Tax
+Gain/Loss on Investments and Other Financial Instruments -2243490909 -3068572727 -3893654545 -4718736364 -5543818182 -6368900000 -7193981818 -8019063636
+Income from Associates, Joint Ventures and Other Participating Interests 99054545 92609091 86163636 79718182 73272727 66827273 60381818 53936364
+INCOME STATEMENT 61-1767920
+GOOGL_income-statement_Quarterly_As_Originally_Reported TTM Q4 2022 Q3 2022 Q2 2022 Q1 2022 Q4 2021 Q3 2021 Q2 2021
+Cash Flow from Continuing Financing Activities -9287400000 -7674400000 -6061400000 -4448400000 -2835400000
+Diluted EPS from Discontinued Operations
+The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
+Basic WASO 694313546 697258864 700204182 703149500 706094818 709040136 711985455 714930773
+Taxable Marital Status:
+Exemptions/Allowances Single ZACHRY T.
+Diluted EPS -00009 -00015 -00021 -00027 -00033 -00039 -00045 -00051
+Total Work Hrs
+COMPANY PH Y: 650-253-0001
+5324 BRADFORD DR
+ORIGINAL REPORT
+Change in Trade/Accounts Receivable -1122700000 -527600000 67500000 662600000 1257700000
+Purchase/Sale of Other Non-Current Assets, Net -236000000 -368800000 -501600000 -634400000
+Other Non-Cash Items -5340300000 -6249200000 -7158100000 -8067000000 -8975900000
+Amortization, Non-Cash Adjustment 4241600000 4848600000 5455600000 6062600000 6669600000
+Income, Rents, & Royalty
+Other Investing Cash Flow 49209400000 57052800000 64896200000 72739600000 80583000000
+Other Irregular Income/Expenses 00000 00000 00000 00000 00000
+Irregular Income/Expenses 00000 00000 00000 00000 00000
+Total Revenue as Reported, Supplemental -1286309091 -13385163636 -25484018182 -37582872727 -49681727273 -61780581818 -73879436364 -85978290909
+Net Investment Income -2096781818 -2909109091 -3721436364 -4533763636 -5346090909 -6158418182 -6970745455 -7783072727
+Gain/Loss on Foreign Exchange 47654545 66854545 86054545 105254546 124454546 143654546 162854546 182054546
+Cash Flow from Investing Activities -11015999999
+Purchase/Sale of Investments, Net 574500000 1229400000 1884300000 2539200000 3194100000
+Purchase/Sale of Business, Net -384999999
+Basic EPS from Continuing Operations -00009 -00015 -00021 -00027 -00034 -00040 -00046 -00052
+Change in Trade and Other Receivables 2617900000 3718200000 4818500000 5918800000 7019100000
+Investment Income/Loss, Non-Cash Adjustment 3081700000 4150000000 5218300000 6286600000 7354900000
+Stock-Based Compensation, Non-Cash Adjustment -1297700000 -2050400000 -2803100000 -3555800000 -4308500000
+Depreciation and Amortization, Non-Cash Adjustment 3239500000 3241600000 3243700000 3245800000 3247900000
+Taxes, Non-Cash Adjustment 4177700000 4486200000 4794700000 5103200000 5411700000
+Depreciation, Non-Cash Adjustment 3329100000 3376000000 3422900000 3469800000 3516700000
+Gain/Loss on Financial Instruments, Non-Cash Adjustment -4354700000 -4770800000 -5186900000 -5603000000 -6019100000
+[DRAFT FORM OF TAX OPINION]
+Issuance of/Repayments for Debt, Net -199000000 -356000000
+Total Operating Profit/Loss -5818800000 -10077918182 -14337036364 -18596154545 -22855272727 -27114390909 -31373509091 -35632627273
+Cash Flow from Continuing Investing Activities -4919700000 -3706000000 -2492300000 -1278600000 -64900000
+Change in Prepayments and Deposits -388000000 -891600000 -1395200000 -1898800000
+Change in Accrued Expenses -2105200000 -3202000000 -4298800000 -5395600000 -6492400000
+Research and Development Expenses -2088363636 -853500000 381363636 1616227273 2851090909 4085954545 5320818182 6555681818
+PLEASE READ THE IMPORTANT DISCLOSURES BELOW
+FEDERAL RESERVE MASTER SUPPLIER ACCOUNT31000053-052101023COD
+633-44-1725Zachryiixixiiiwood@gmail.com47-2041-654711100061431000053
+PNC BankPNC Bank Business Tax I.D. Number: 633441725
+CIF Department (Online Banking)Checking Account: 47-2041-6547
+P7-PFSC-04-FBusiness Type: Sole Proprietorship/Partnership Corporation
+500 First AvenueALPHABET
+Pittsburgh, PA 15219-31285323 BRADFORD DR
+NON-NEGOTIABLEDALLAS TX 75235 8313
+ZACHRY, TYLER, WOOD
+4/18/2022650-2530-000 469-697-4300
+SIGNATURETime Zone: Eastern Central Mountain Pacific
+Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value
+PLEASE READ THE IMPORTANT DISCLOSURES BELOW
+Change in Trade/Accounts Payable -233200000 -394000000 -554800000 -715600000 -876400000
+General and Administrative Expenses -544945455 23200000 591345455 1159490909 1727636364 2295781818 2863927273 3432072727
+Changes in Operating Capital 1068100000 1559600000 2051100000 2542600000 3034100000
+Selling and Marketing Expenses -1007254545 -52145455 902963636 1858072727 2813181818 3768290909 4723400000 5678509091
+Payments for Common Stock -18708100000 -22862000000 -27015900000 -31169800000 -35323700000
+Proceeds from Issuance of Long Term Debt -3407500000 -5307600000 -7207700000 -9107800000 -11007900000
+Other Income/Expense, Non-Operating 263109091 367718182 472327273 576936364 681545455 786154546 890763636 995372727
+ZACHRY T WOOD
+88-1303492
+Statutory BASIS OF PAY: BASIC/DILUTED EPS
+Net Pay 70842743867 70842743867
+Other Revenue
+Non-Operating Income/Expenses, Total -1369181818 -2079000000 -2788818182 -3498636364 -4208454545 -4918272727 -5628090909 -6337909091
+Net Interest Income/Expense 464490909 462390909 460290909 458190909 456090909 453990909 451890909 449790909
+Total Net Finance Income/Expense 464490909 462390909 460290909 458190909 456090909 453990909 451890909 449790909
+Issuance of/Repayments for Long Term Debt, Net -314300000 -348200000 -382100000 -416000000 -449900000
+Net Check 70842743867
+Basic EPS from Discontinued Operations
+MOUNTAIN VIEW, C.A., 94044 Pay Date:
+Medicare Tax
+Change in Other Operating Capital 1553900000 2255600000 2957300000 3659000000 4360700000
+Change in Deferred Assets/Liabilities 3194700000 3626800000 4058900000 4491000000 4923100000
+Change in Trade and Other Payables 3108700000 3453600000 3798500000 4143400000 4488300000
+Selling, General and Administrative Expenses -1552200000 -28945455 1494309091 3017563636 4540818182 6064072727 7587327273 9110581818
+Diluted WASO 698675982 701033009 703390036 705747064 708104091 710461118 712818146 715175173
+1957800000 -9776581818 -21510963636 -33245345455 -44979727273 -56714109091 -68448490909 -80182872727
+Total Revenue as Reported, Supplemental -1286309091 -13385163636 -25484018182 -37582872727 -49681727273 -61780581818 -73879436364 -85978290909
+Diluted EPS from Continuing Operations -00009 -00015 -00021 -00027 -00033 -00039 -00045 -00051
+Change in Cash 00001 -280000000 -570000000 338000000000)
+Sale and Disposal of Property, Plant and Equipment -5040500000 -4683100000 -4325700000 -3968300000
+Interest Income 415836364 392490909 369145455 345800000 322454546 299109091 275763636 252418182
+Issuance of/Payments for Common Stock, Net -10767000000 -10026000000 -9285000000 -8544000000 -7803000000
+Cost of Goods and Services -891927273 4189690909 9271309091 14352927273 19434545455 24516163636 29597781818 34679400000
+Proceeds from Issuance of Common Stock -5806333333 -3360333333 -914333333
+1349355888 2024033776 75698871601 Information
+DALLAS TX 75235-8315
+Sales of Other Non-Current Assets
+Cost of Revenue -891927273 4189690909 9271309091 14352927273 19434545455 24516163636 29597781818 34679400000
+Operating Income/Expenses -3640563636 -882445455 1875672727 4633790909 7391909091 10150027273 12908145455 15666263636
+Fiscal year end September 28th., 2022. | USD
+Cash and Cash Equivalents, Beginning of Period -13098000000 -26353000000 -4989999999
+Other Adjustments to Net Income Available to Common Stockholders
+Federal:
+Gross Pay 75698871601 Important Notes
+Cash Flow from Financing Activities -13997000000 -12740000000
+EMPLOYER IDENTIFICATION NUMBER: 61-1767920
+-1288666667 -885666667 -482666667
+Pretax Income -7187981818 -12156918182 -17125854545 -22094790909 -27063727273 -32032663636 -37001600000 -41970536364
+Reported Normalized and Operating Income/Expense Supplemental Section
+Reported Normalized Operating Profit
+Cash Flow Supplemental Section 181000000000) -146000000000) 110333333 123833333 137333333
+Interest Expense Net of Capitalized Interest 48654545 69900000 91145455 112390909 133636364 154881818 176127273 197372727
+Diluted Net Income Available to Common Stockholders -5492763636 -9591163636 -13689563636 -17787963636 -21886363636 -25984763636 -30083163636 -34181563636
+Net Income Available to Common Stockholders -5492763636 -9591163636 -13689563636 -17787963636 -21886363636 -25984763636 -30083163636 -34181563636
+Net Income after Non-Controlling/Minority Interests -5492763636 -9591163636 -13689563636 -17787963636 -21886363636 -25984763636 -30083163636 -34181563636
+Reported Effective Tax Rate 00001 00000 00000 00000 00000 00000
+Reported Normalized Diluted EPS
+Basic Weighted Average Shares Outstanding 694313546 697258864 700204182 703149500 706094818 709040136 711985455 714930773
+Diluted Weighted Average Shares Outstanding 698675982 701033009 703390036 705747064 708104091 710461118 712818146 715175173
+Deposited to the account Of xxxxxxxx6548
+Purchase of Investments 16018900000 24471400000 32923900000 41376400000 49828900000
+Sale of Investments -64179300000 -79064600000 -93949900000 -108835200000 -123720500000
+ALPHABET
+CHECKING
+31622,6:39 PM
+GOOGL_income-statement_Quarterly_As_Originally_Reported Q4 2022
+Morningstar.com Intraday Fundamental Portfolio View Print Report Print
+Income/Loss before Non-Cash Adjustment 21353400000 21135400000 20917400000 20699400000 20481400000
+Cash Generated from Operating Activities 19636600000 18560200000 17483800000 16407400000 15331000000
+3/6/2022 at 6:37 PM
+Net Cash Flow from Continuing Operating Activities, Indirect 35231800000 36975800000 38719800000 40463800000 42207800000
+Cash and Cash Equivalents, End of Period
+Proceeds from Issuance/Exercising of Stock Options/Warrants -2971300000 -3400800000 -3830300000 -4259800000 -4689300000
+Cash Flow from Operating Activities, Indirect 24934000001 Q3 2022 Q2 2022 Q1 2022 Q4 2021
+Diluted EPS -00009 -00015 -00021 -00027 -00033 -00039 -00045 -00051
+Other Financing Cash Flow
+Total Adjustments for Non-Cash Items 20351200000 21992600000 23634000000 25275400000 26916800000
+Change in Other Current Assets -3290700000 -3779600000 -4268500000 -4757400000 -5246300000
+Depreciation, Amortization and Depletion, Non-Cash Adjustment 4986300000 5327600000 5668900000 6010200000 6351500000
+Change in Payables and Accrued Expenses -3298800000 -4719000000 -6139200000 -7559400000 -8979600000
+Repayments for Long Term Debt -117000000 -660800000 -1204600000 -1748400000 -2292200000
+Income Statement Supplemental Section
+Reported Normalized Income
+Cash and Cash Equivalents, Beginning of Period 25930000001 235000000000) 10384666667 15035166667 19685666667
+Net Income after Extraordinary Items and Discontinued Operations -5492763636 -9591163636 -13689563636 -17787963636 -21886363636 -25984763636 -30083163636 -34181563636
+Net Income from Continuing Operations -5492763636 -9591163636 -13689563636 -17787963636 -21886363636 -25984763636 -30083163636 -34181563636
+Provision for Income Tax 1695218182 2565754545 3436290909 4306827273 5177363636 6047900000 6918436364 7788972727
+Total Operating Profit/Loss as Reported, Supplemental -5818800000 -10077918182 -14337036364 -18596154545 -22855272727 -27114390909 -31373509091 -35632627273
+Based on facts as set forth in. 06551
+Basic EPS -00009 -00015 -00021 -00027 -00034 -00040 -00046 -00052
+ALPHABET INCOME Advice number: 000101
+ALPHABET
+Basic EPS -00009 -00015 -00021 -00027 -00034 -00040 -00046 -00052
+1601 AMPITHEATRE PARKWAY DR Period Ending:
+1601 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Calendar Year---
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net -6772900000 -6485800000 -6198700000 -5911600000 -5624500000
+Purchase of Property, Plant and Equipment -5218300000 -4949800000 -4681300000 -4412800000 -4144300000
+Effect of Exchange Rate Changes 28459100000 29853400000 31247700000 32642000000 34036300000
+00000 -15109109116 111165509049 50433933761 50951012042 45733930204 40516848368 -84621400136 -96206781973
+00002 Earnings Statement
+05324
+DALLAS
+rate units year to date Other Benefits and
+Pto Balance
+Federal Income Tax
+Social Security Tax
+YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
+Due 09/15/2022
+Discontinued Operations -51298890909
+Change in Cash as Reported, Supplemental
+Income Tax Paid, Supplemental -5809000000 -8692000000 -11575000000 -44281654545 -2178236364
+13 Months Ended 6336000001
+Gross Profit -9195472727 -16212709091 -23229945455 -30247181818 -37264418182
+USD in "000'"s 22809500000000 22375000000000 21940500000000 21506000000000 21071500000000
+Repayments for Long Term Debt Dec. 31, 2021 Dec. 31, 2020
+Costs and expenses: 22809500000000 22375000000000 21940500000000 21506000000000 21071500000000
+Cost of revenues 182528 161858
+Research and development 22809500000000 22375000000000 21940500000000 21506000000000 21071500000000
+Sales and marketing 84733 71897
+General and administrative 27574 26019
+European Commission fines 17947 18465
+Total costs and expenses 11053 09552
+Income from operations 00001 01698
+Other income (expense), net 141304 127627
+Income before income taxes 00000 22375000000000 21940500000000 21506000000000 21071500000000 00000 00000
+Provision for income taxes 257637118600 257637118600
+Net income 22677000001 19289000001
+*include interest paid, capital obligation, and underweighting 22677000001 19289000001
+22677000001 19289000001
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
+For Paperwork Reduction Act Notice, see the seperate InstructionsStreet NE Washington, D.C. 20549-1090 RE: Release Nos. 34-92766; IA-5833; File No. S7-10-21, RIN 3235-AN00 Request for Information and Comments on Broker-Dealer and Investment Adviser Digital Engagement Practices, Related Tools and Methods, and Regulatory Considerations and Potential Approaches; Information and Comments on Investment Adviser Use of Technology to Develop and Provide Investment Advice Ladies and Gentlemen: Morningstar welcomes the opportunity to comment on the Securities and Exchange Commission’s (Commission or SEC) Request for Information and Comments on Broker-Dealer and Investment Adviser Digital Engagement Practices, Related Tools and Methods, and Regulatory Considerations and Potential Approaches; Information and Comments on Investment Adviser Use of Technology to Develop and Provide Investment Advice (RFI). 1 Morningstar’s mission is to empower investor success. Morningstar’s Behavioral Insights Team researches savings and investing behavior to help individual investors and their ecosystem avoid common behavioral biases, and has published books and articles on the topic of applying behavioral science to digital platforms. Because we offer an extensive line of products for individual investors, professional financial advisors, and institutional clients, we have a broad view on the RFI and the assessment of market practices associated with the use of digital engagement practices (DEPs). This letter contains: 1) a summary of our views; 2) a description of a Morningstar survey on a nationally representative sample of Americans about their use of trading apps and exposure to DEPs; and 3) detailed answers to selected questions posed in the RFI. We utilize our survey responses to address some of these questions and present specific findings in our answers. The survey consists of two parts: a screener for demographic information, attached as Appendix B, and the complete set of questions about individual experiences and views of DEPs, attached as Appendix C. 1 SEC. 2021. Request for Information and Comments on Broker-Dealer and Investment Adviser Digital Engagement Practices, Related Tools and Methods, and Regulatory Considerations and Potential Approaches; Information and Comments on Investment Adviser Use of Technology to Develop and Provide Investment Advice. https://www.federalregister.gov/documents/2021/09/01/2021-18901/requestfor-information-and-comments-on-broker-dealer-and-investment-adviser-digital-engagement (RFI).
+3/6/2022 at 6:37 PM
+GOOGL_income-statement_Quarterly_As_Originally_Reported
+Cash Flow from Operating Activities, IndirectNet Cash Flow from Continuing Operating Activities, IndirectCash Generated from Operating ActivitiesIncome/Loss before Non-Cash AdjustmentTotal Adjustments for Non-Cash ItemsDepreciation, Amortization and Depletion, Non-Cash AdjustmentDepreciation and Amortization, Non-Cash AdjustmentDepreciation, Non-Cash AdjustmentAmortization, Non-Cash AdjustmentStock-Based Compensation, Non-Cash AdjustmentTaxes, Non-Cash AdjustmentInvestment Income/Loss, Non-Cash AdjustmentGain/Loss on Financial Instruments, Non-Cash AdjustmentOther Non-Cash ItemsChanges in Operating CapitalChange in Trade and Other ReceivablesChange in Trade/Accounts ReceivableChange in Other Current AssetsChange in Payables and Accrued ExpensesChange in Trade and Other PayablesChange in Trade/Accounts PayableChange in Accrued ExpensesChange in Deferred Assets/LiabilitiesChange in Other Operating Capital
+Change in Prepayments and DepositsCash Flow from Investing ActivitiesCash Flow from Continuing Investing Activities
+Purchase/Sale and Disposal of Property, Plant and Equipment, NetPurchase of Property, Plant and EquipmentSale and Disposal of Property, Plant and EquipmentPurchase/Sale of Business, NetPurchase/Acquisition of BusinessPurchase/Sale of Investments, NetPurchase of Investments
+Sale of InvestmentsOther Investing Cash FlowPurchase/Sale of Other Non-Current Assets, NetSales of Other Non-Current AssetsCash Flow from Financing ActivitiesCash Flow from Continuing Financing ActivitiesIssuance of/Payments for Common Stock, NetPayments for Common StockProceeds from Issuance of Common StockIssuance of/Repayments for Debt, NetIssuance of/Repayments for Long Term Debt, NetProceeds from Issuance of Long Term DebtRepayments for Long Term Debt
+Proceeds from Issuance/Exercising of Stock Options/WarrantsOther Financing Cash FlowCash and Cash Equivalents, End of PeriodChange in CashEffect of Exchange Rate ChangesCash and Cash Equivalents, Beginning of PeriodCash Flow Supplemental SectionChange in Cash as Reported, SupplementalIncome Tax Paid, SupplementalZACHRY T WOODCash and Cash Equivalents, Beginning of PeriodDepartment of the TreasuryInternal Revenue Service
+Calendar YearDue: 04/18/2022
+USD in ""000'""sRepayments for Long Term DebtCosts and expenses:Cost of revenuesResearch and developmentSales and marketingGeneral and administrativeEuropean Commission finesTotal costs and expensesIncome from operationsOther income (expense), netIncome before income taxesProvision for income taxesNet income*include interest paid, capital obligation, and underweighting
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
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)*include interest paid, capital obligation, and underweighting
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
+
+ReplyForward
+


-7711	Department of the Treasury	Calendar Year							Period Ending	9/29/2021																	
-	Internal Revenue Service	Due 04/18/2022		2022 Form 1040-ES Payment Voucher 1					Pay Day	1/30/2022																	
-	MOUNTAIN VIEW, C.A., 94043																										
-	Taxable Marital Status  :																										
-	Exemptions/Allowances :																										
-	Federal :																										
-	TX :  28	rate	70842743866																																
-	Convertible preferred stock, $0.001 par value per share, 100,000 shares authorized; no shares issued and outstanding	0	0		0																						
-	Class A and Class B common stock, and Class C capital stock and additional paid-in capital, $0.001 par value per share: 15,000,000 shares authorized (Class A 9,000,000, Class B 3,000,000, Class C 3,000,000); 688,335 (Class A 299,828, Class B 46,441, Class C 342,066) and 675,222 (Class A 300,730, Class B 45,843, Class C 328,649) shares issued and outstanding	58510	50552		0																						
-	Accumulated other comprehensive income (loss)	633	-1232		0																						
-	Retained earnings	163401	152122		0																						
-	Total stockholders’ equity	222544	201442		0																						
-	Total liabilities and stockholders’ equity	319616	275909		0																						
-	Convertible preferred stock, par value (in dollars per share)	0.001	0.001		0																						
-	Convertible preferred stock, shares authorized (in shares)	100000000	100000000		0																						
-	Convertible preferred stock, shares issued (in shares)	0	0		0																						
-	Convertible preferred stock, shares outstanding (in shares)	0	0		0																						
-	Schedule II: Valuation and Qualifying Accounts (Details) - Allowance for doubtful accounts and sales credits - USD ($) $ in Millions	12 Months Ended			0																						
-		Dec. 31, 2020	Dec. 31, 2019	Dec. 31, 2018	0																						
-	SEC Schedule, 12-09, Movement in Valuation Allowances and Reserves [Roll Forward]				0																						
-	Revenues (Narrative) (Details) - USD ($) $ in Billions	12 Months Ended			0																						
-		Dec. 31, 2020	Dec. 31, 2019		0																						
-	Revenue from Contract with Customer [Abstract]				0																						
-	Deferred revenue		2.3		0																						
-	Revenues recognized	1.8			0																						
-	Transaction price allocated to remaining performance obligations	29.8			0																						
-	Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2021-01-01				0																						
-	Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]				0																						
-	Expected timing of revenue recognition	24 months			0																						
-	Expected timing of revenue recognition, percent	0.5			0																						
-	Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2023-01-01				0																						
-	Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]				0																						
-	Expected timing of revenue recognition	 			0																						
-	Expected timing of revenue recognition, percent	0.5			0																						
-	Information about Segments and Geographic Areas (Long-Lived Assets by Geographic Area) (Details) - USD ($) $ in Millions	Dec. 31, 2020	Dec. 31, 2019		0																						
-	Revenues from External Customers and Long-Lived Assets [Line Items]				0																						
-	Long-lived assets	96960	84587		0																						
-	United States				0																						
-	Revenues from External Customers and Long-Lived Assets [Line Items]				0																						
-	Long-lived assets	69315	63102		0																						
-	International				0																						
-	Revenues from External Customers and Long-Lived Assets [Line Items]				0																						
-	Long-lived assets	27645	21485		0																						
-		2016	2017	2018	2019	2020	2021	TTM																			
-		2.23418E+11	2.42061E+11	2.25382E+11	3.27223E+11	2.86256E+11	3.54636E+11	3.54636E+11																			
-		45881000000	60597000000	57418000000	61078000000	63401000000	69478000000	69478000000																			
-		3143000000	3770000000	4415000000	4743000000	5474000000	6052000000	6052000000																			
-	    Net Investment Income, Revenue	9531000000	13081000000	10565000000	17214000000	14484000000	8664000000	-14777000000	81847000000	48838000000	86007000000	86007000000															
-	        Realized Gain/Loss on Investments, Revenue	472000000	184000000	72000000	10000000	7553000000	1410000000	-22155000000	71123000000	40905000000	77576000000	77576000000															
-	        Gains/Loss on Derivatives, Revenue	1963000000	2608000000	506000000	974000000	751000000	718000000	-300000000	1484000000	-159000000	966000000	966000000															
-	        Interest Income, Revenue	6106000000	6408000000	6484000000	6867000000	6180000000	6536000000	7678000000	9240000000	8092000000	7465000000	7465000000															
-	        Other Investment Income, Revenue	990000000	3881000000	3503000000	9363000000																						
-	    Rental Income, Revenue					2553000000	2452000000	5732000000	5856000000	5209000000	5988000000	5988000000															
-	    Other Revenue	1.18387E+11	1.32385E+11	1.42881E+11	1.52435E+11	1.57357E+11	1.66578E+11	1.72594E+11	1.73699E+11	1.63334E+11	1.87111E+11	1.87111E+11															
-	Total Expenses	-1.40227E+11	-1.53354E+11	-1.66594E+11	-1.75997E+11	-1.89751E+11	-2.18223E+11	-2.21381E+11	-2.24527E+11	-2.30563E+11	-2.4295E+11	-2.4295E+11																												
-	    Reported Normalized and Operating Income/Expense Supplemental Section																										
-	        Total Revenue as Reported, Supplemental	1.62463E+11	1.8215E+11	1.94699E+11	2.10943E+11	2.15114E+11	2.39933E+11	2.47837E+11	2.54616E+11	2.4551E+11	2.76094E+11	2.76094E+11															
-	        Reported Effective Tax Rate				0.16	0.14	0.07	-0.08	0.2	0.22	0.19	0.19															
-	Basic EPS	8977	11850	12092	14656	14645	27326	2446	49828	26668	59460	59460															
-	    Basic EPS from Continuing Operations	8977	11850	12092	14656	14645	27326	2446	49828	26668	59460	59460															
-	Diluted EPS	8975.82	11849.51	12086.01	14656	14645	27325.54	2444.36	49649.93	26200.81	58563.84	58563.84															
-	    Diluted EPS from Continuing Operations	8975.82	11849.51	12086.01	14656	14645	27325.54	2444.36	49649.93	26200.81	58563.84	58563.84															
-	Basic Weighted Average Shares Outstanding	1651294	1643613	1643456	1643183	1643826	1644615	1643795	1633946	1594469	1510180	1510180															
-	Diluted Weighted Average Shares Outstanding	1651549	1643613	1644215	1643183	1643826	1644615	1645008	1639821	1622889	1533284	1533284															
-	Basic EPS	5.98	7.9	8.06	9.77	9.76	18.22	1.63	33.22	17.78	39.64	39.64															
-	Diluted EPS	5.98	7.9	8.06	9.77	9.76	18.22	1.63	33.22	17.78	39.64	39.64															
-	Basic WASO	2476939762	2465418267	2465182767	2464773268	2465737767	2466921267	2465691267	2450917775	2391702304	2265268867	2265268867															
-	Diluted WASO	2476939762	2465418267	2465182767	2464773268	2465737767	2466921267	2465691267	2450917775	2391702304	2265268867	2265268867															
-	Fiscal year ends in Dec 31 | USD 																										
-											total																
-	GOOGL_income-statement_Quarterly_As_Originally_Reported	Q3 2019	Q4 2019	Q1 2020	Q2 2020	Q3 2020	Q4 2020	Q1 2021	Q2 2021	Q3 2021	Q4 2021	TTM															
-	Gross Profit	22931000000	25055000000	22177000000	19744000000	25056000000	30818000000	31211000000	35653000000	37497000000	42337000000	1.46698E+11															
-	    Total Revenue	40499000000	46075000000	41159000000	38297000000	46173000000	56898000000	55314000000	61880000000	65118000000	75325000000	2.57637E+11															
-	        Business Revenue	34071000000	64133000000	41159000000	38297000000	46173000000	56898000000	55314000000	61880000000	65118000000	75325000000	2.57637E+11															
-	        Other Revenue	6428000000																									
-	    Cost of Revenue	-17568000000	-21020000000	-18982000000	-18553000000	-21117000000	-26080000000	-24103000000	-26227000000	-27621000000	-32988000000	-1.10939E+11															
-	        Cost of Goods and Services			-18982000000								-1.10939E+11															
-	Operating Income/Expenses	-13754000000	-15789000000	-14200000000	-13361000000	-13843000000	-15167000000	-14774000000	-16292000000	-16466000000	-20452000000	-67984000000															
-	    Selling, General and Administrative Expenses	-7200000000	-8567000000	-7380000000	-6486000000	-6987000000	-8145000000	-7289000000	-8617000000	-8772000000	-11744000000	-36422000000															
-	        General and Administrative Expenses	-2591000000	-2829000000	-2880000000	-2585000000	-2756000000	-2831000000	-2773000000	-3341000000	-3256000000	-4140000000	-13510000000															
-	        Selling and Marketing Expenses	-4609000000	-5738000000	-4500000000	-3901000000	-4231000000	-5314000000	-4516000000	-5276000000	-5516000000	-7604000000	-22912000000															
-	    Research and Development Expenses	-6554000000	-7222000000	-6820000000	-6875000000	-6856000000	-7022000000	-7485000000	-7675000000	-7694000000	-8708000000	-31562000000															
-	Total Operating Profit/Loss	9177000000	9266000000	7977000000	6383000000	11213000000	15651000000	16437000000	19361000000	21031000000	21885000000	78714000000															
-	Non-Operating Income/Expenses, Total	-549000000	1438000000	-220000000	1894000000	2146000000	3038000000	4846000000	2624000000	2033000000	2517000000	12020000000															
-	    Total Net Finance Income/Expense	608000000	604000000	565000000	420000000	412000000	333000000	269000000	313000000	310000000	261000000	1153000000															
-	        Net Interest Income/Expense	608000000	604000000	565000000	420000000	412000000	333000000	269000000	313000000	310000000	261000000	1153000000															
-	            Interest Expense Net of Capitalized Interest	-23000000	-17000000	-21000000	-13000000	-48000000	-53000000	-76000000	-76000000	-77000000	-117000000	-346000000															
-	            Interest Income	631000000	621000000	586000000	433000000	460000000	386000000	345000000	389000000	387000000	378000000	1499000000															
-	    Net Investment Income	-1452000000	899000000	-809000000	1696000000	1957000000	3530000000	4869000000	2924000000	2207000000	2364000000	12364000000															
-	        Gain/Loss on Investments and Other Financial Instruments	-1479000000	399000000	-802000000	1842000000	2015000000	3262000000	4751000000	2883000000	2158000000	2478000000	12270000000															
-	        Income from Associates, Joint Ventures and Other Participating Interests	-14000000	460000000	74000000	-54000000	26000000	355000000	5000000	92000000	188000000	49000000	334000000															
-	        Gain/Loss on Foreign Exchange	41000000	40000000	-81000000	-92000000	-84000000	-87000000	113000000	-51000000	-139000000	-163000000	-240000000															
-	    Irregular Income/Expenses	0	0	0	0	0	0				0	0															
-	        Other Irregular Income/Expenses	0	0	0	0	0	0				0	0															
-	    Other Income/Expense, Non-Operating	295000000	-65000000	24000000	-222000000	-223000000	-825000000	-292000000	-613000000	-484000000	-108000000	-1497000000															
-	Pretax Income	8628000000	10704000000	7757000000	8277000000	13359000000	18689000000	21283000000	21985000000	23064000000	24402000000	90734000000															
-	Provision for Income Tax	-1560000000	-33000000	-921000000	-1318000000	-2112000000	-3462000000	-3353000000	-3460000000	-4128000000	-3760000000	-14701000000															
-	Net Income from Continuing Operations	7068000000	10671000000	6836000000	6959000000	11247000000	15227000000	17930000000	18525000000	18936000000	20642000000	76033000000															
-	Net Income after Extraordinary Items and Discontinued Operations	7068000000	10671000000	6836000000	6959000000	11247000000	15227000000	17930000000	18525000000	18936000000	20642000000	76033000000															
-	Net Income after Non-Controlling/Minority Interests	7068000000	10671000000	6836000000	6959000000	11247000000	15227000000	17930000000	18525000000	18936000000	20642000000	76033000000															
-	Net Income Available to Common Stockholders	7068000000	10671000000	6836000000	6959000000	11247000000	15227000000	17930000000	18525000000	18936000000	20642000000	76033000000															
-	Diluted Net Income Available to Common Stockholders	7068000000	10671000000	6836000000	6959000000	11247000000	15227000000	17930000000	18525000000	18936000000	20642000000	76033000000															
-	Income Statement Supplemental Section																										
-	    Reported Normalized and Operating Income/Expense Supplemental Section																										
-	        Total Revenue as Reported, Supplemental	40499000000	46075000000	41159000000	38297000000	46173000000	56898000000	55314000000	61880000000	65118000000	75325000000	2.57637E+11															
-	        Total Operating Profit/Loss as Reported, Supplemental	9177000000	9266000000	7977000000	6383000000	11213000000	15651000000	16437000000	19361000000	21031000000	21885000000	78714000000															
-	        Reported Effective Tax Rate	0.181		0	0.159	0.158		0.158	0.157	0.179		0.162															
-	        Reported Normalized Income			6836000000																							
-	        Reported Normalized Operating Profit			7977000000																							
-	Other Adjustments to Net Income Available to Common Stockholders																										
-	Discontinued Operations																										
-	Basic EPS	10.2	15.49	9.96	10.21	16.55	22.54	26.63	27.69	28.44	31.15	113.88															
-	    Basic EPS from Continuing Operations	10.2	15.47	9.96	10.21	16.55	22.46	26.63	27.69	28.44	31.12	113.88															
-	    Basic EPS from Discontinued Operations																										
-	Diluted EPS	10.12	15.35	9.87	10.13	16.4	22.3	26.29	27.26	27.99	30.69	112.2															
-	    Diluted EPS from Continuing Operations	10	15	10	10	16	22	26	27	28	31	112															
-	    Diluted EPS from Discontinued Operations																										
-	Basic Weighted Average Shares Outstanding	692741000	688804000	686465000	681768000	679449000	675581000	673220000	668958000	665758000	662664000	667650000															
-	Diluted Weighted Average Shares Outstanding	698199000	695193000	692267000	687024000	685851000	682969000	682071000	679612000	676519000	672493000	677674000															
-	Reported Normalized Diluted EPS			9.87																							
-	Basic EPS	10	15	10	10	17	23	27	28	28	31	114															
-	Diluted EPS	10	15	10	10	16	22	26	27	28	31	112															
-	Basic WASO	692741000	688804000	686465000	681768000	679449000	675581000	673220000	668958000	665758000	662664000	667650000**" %}
