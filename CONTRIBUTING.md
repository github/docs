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
    - Business Checking 
1040	Department of the Treasury---Internal Revenue Service       (99)																																					
																																						
	U.S. Individual Income Tax Return																																					
	For the period April 13, 2022 to October 31, 2022																																					
	
				
																																	
																																						
	Routing Number	Bank Account Number	Account Name	Account Type	Address *	Address Line 2	City *	State *	Zip *	Phone	Email	Bank Name	Bank Street Address	Bank City	Bank State	Bank Zip	Nick name	
121000358	12312354544544|	Demo Bank 1	SAVINGS	Test Address1	Address 2	Downey	CA		(415) 555-2671	test@email.com	 Bank of America Corp.	8001 VILLA PARK DRIVE	HENRICO	VA	23228	company1	
231311211	54651231123164|	Demo Bank 2	CHECKING	Test Address1	Address 2	Downey	CA	90242	(415) 555-2672	test@email.com	JPMorgan Chase & Co.	8002 VILLA PARK DRIVE	HENRICO	VA	23228	company2	
121000358	31231231231231|	Demo Bank 3	CHECKING	Test Address1	Address 2	Downey	CA	90242	(415) 555-2673	test@email.com	JPMorgan Chase & Co.	8003 VILLA PARK DRIVE	HENRICO	VA	23228	company3	
121000358	23123123123123|	Demo Bank 4	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2674	test@email.com	JPMorgan Chase & Co.	8004 VILLA PARK DRIVE	HENRICO	VA	23228	company4	
121000358	54667753333212|	Demo Bank 5	SAVINGS		Address 2	Downey	CA	90242	(415) 555-2675	test@email.com	U.S. Bancorp	8005 VILLA PARK DRIVE	HENRICO	VA	23228	company5	
121000358	35678905534555|		SAVINGS	Test Address1	Address 2	Downey	CA		(415) 555-2676	test@email.com	U.S. Bancorp	8006 VILLA PARK DRIVE	HENRICO	VA	23228	company6	
1210200358	24242342342342|	Demo Bank 7	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2677	test@email.com	U.S. Bancorp	8007 VILLA PARK DRIVE	HENRICO	VA	23228	company7	
121000358	42342342342342|	Demo Bank 8	CHECKING	Test Address1	Address 2	Downey	CA	4454544	(415) 555-2678	test@email.com	 TD Group US Holdings LLC	8008 VILLA PARK DRIVE	HENRICO	VA	23228	company8	
121000358	42342423423423|	Demo Bank 9		Test Address1	Address 2	Downey	CA	90242	(415) 555-2679	test@email.com	 TD Group US Holdings LLC	8009 VILLA PARK DRIVE	HENRICO	VA	23228	company9	
121000358	31235689545533|	Demo Bank 10	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2680	test@email.com	 State Street Corp.	8010 VILLA PARK DRIVE	HENRICO	VA	23228	company10	
121000358	42634535345353|	Demo Bank 11	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2681	test@email.com		8011 VILLA PARK DRIVE	HENRICO	VA	23228	company11	
311112311	53534534534533|	Demo Bank 12	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2682	test@email.com	 Bank of America Corp.	8012 VILLA PARK DRIVE	HENRICO	VA	23228	company12	
121143345	3.42342E+13	Demo Bank 13	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2683	test@email.com	 Bank of America Corp.	8013 VILLA PARK DRIVE	HENRICO	VA	23228	company13	
# This is a basic workflow to help you get started with Actions

'title ':Build ':: '::and ':Deploy ':: ':''

'Name ':ci ':'

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "paradice" branch
  push:
    branches: [ "paradice" ]
  pull_request:
    branches: [ "paradice" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
RUNS::\:#:##:###BEGIN :	
:Build::
PULBLISH
LAUNCH
RELEASE
DEPLOY :repo-sync'@moejojojojo//Read.md/main/TREE/Master/Trunk :			# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "paradice" branch
  push:
    branches: [ "paradice" ]
  pull_request:
    branches: [ "paradice" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
RUNS::\:#:##:###BEGIN :	
:Build::
PULBLISH
LAUNCH
RELEASE
DEPLOY :repo-sync'@moejojojojo//Read.md/main/TREE/Master/Trunk :														
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
                                                                                                                                                                                                                   +-                                                                                                                                                                                                                       * Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                                                                                        -       

 INTERNAL REVENUE SERVICE,        

* *include interest paid, capital obligation, and underweighting                6858000000                                                                                                                                                                                        

       

 PO BOX 1214,       

 Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                22677000000                                                                                                                                                                                        

       
 CHARLOTTE, NC 28201-1214        

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                22677000000                                                                                                                                                                                        
           
                         +-               

 Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                22677000000                                                                                                                                                                                        

+-                Taxes / Deductions        Current        YTD                                                                                                                                                                                        

+-        Fiscal year ends in Dec 31 | USD                                                                                                                                                                                                                

+-        Rate                                                                                                                                                                                                                 

+-        Total                                                                                                                                                                                                                 


+-        7567263607                                                                                        DoB: 1994-10-15                                                                                                                        

+-        YTD                                                                                                                                                                                                                 

+-        April 18, 2022.                                                                                                                                                                                                                

+-        7567263607                                                                                                                                                                                                                


+-        WOOD  ZACHRY                Tax Period         Total        Social Security        Medicare        Withholding                                                                                                                                                                

+-        Fed 941 Corporate                39355        66986.66        28841.48        6745.18        31400                                                                                                                                                                

+-        Fed 941 West Subsidiary                39355        17115.41        7369.14        1723.42        8022.85                                                                                                                                                                

+-        Fed 941 South Subsidiary                39355        23906.09        10292.9        2407.21        11205.98                                                                                                                                                                


+-        Fed 941 East Subsidiary                39355        11247.64        4842.74        1132.57        5272.33                                                                                                                                                                

+-        Fed 941 Corp - Penalty                39355        27198.5        11710.47        2738.73        12749.3                                                                                                                                                                

+-        Fed 940 Annual Unemp - Corp                39355        17028.05                                                                                                                                                                                        

+-        44669                                                                                                                                                                                                                

+-        6b                 Name                   Tax Period         Total        Social Security        Medicare        Withholding                                                                                                                                                        

                             Fed 941 Corporate             39355        66986.66        28841.48        6745.18        31400                                                                                                                                                        

+-        7                  Fed 941 West Subsidiary       39355        17115.41        7369.14        1723.42        8022.85                                                                                                                                                        

+-        8                 Fed 941 South Subsidiary       39355        23906.09        10292.9        2407.21        11205.98                                                                                                                                                        


+-        8                 Fed 941 Corp - Penalty        39355        27198.5        11710.47        2738.73        12749.3                                                                                                                                                        

+-        9                  Fed 940 Annual Unemp - Corp        39355        17028.05                                                                                                                                                                                

+-        10                1.46698E+11        42337000000        37497000000        35653000000        31211000000        30818000000        25056000000        19744000000        22177000000        25055000000                                                                                                                        
+-        Adjustments to income from Schedule 1, line 26 ...............                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                                                                                                                        


+-        10                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        64133000000                                                                                                                        

+-        11                                                                                                                                                                                                                


+-        11                -1.10939E+11        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -21020000000                                                                                                                        

+-        Standard Deduction for—                -1.10939E+11                        -16292000000        -14774000000        -15167000000        -13843000000        -13361000000        -14200000000        -15789000000                                                                                                                        

+-        • Single or Married filing separately, $12,550                -67984000000        -20452000000        -16466000000        -8617000000        -7289000000        -8145000000        -6987000000        -6486000000        -7380000000        -8567000000                                                                                                                        


+-        • Married filing jointly or Qualifying widow(er), $25,100                -36422000000        -11744000000        -8772000000        -3341000000        -2773000000        -2831000000        -2756000000        -2585000000        -2880000000        -2829000000                                                                                                                        

+-        • Head of household, $18,800                -13510000000        -4140000000        -3256000000        -5276000000        -4516000000        -5314000000        -4231000000        -3901000000        -4500000000        -5738000000                                                                                                                        

+-        • If you checked any box under Standard Deduction, see instructions.                -22912000000        -7604000000        -5516000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000        -6820000000        -7222000000                                                                                                                        

+-        12                -31562000000        -8708000000        -7694000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000                                                                                                                        

+-        a                78714000000        21885000000        21031000000        2624000000        4846000000        3038000000        2146000000        1894000000        -220000000        1438000000                                                                                                                        

+-        Standard deduction or itemized deductions (from Schedule A) ..                12020000000        2517000000        2033000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000                                                                                                                        

+-        12a                1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000                                                                                                                        

+-        b                1153000000        261000000        310000000                                                                                                                                                                                

+-        Charitable contributions if you take the standard deduction (see instructions)                                        -76000000        -76000000        -53000000        -48000000        -13000000        -21000000        -17000000                                                                                                                        

+-        12b                -346000000        -117000000        -77000000        389000000        345000000        386000000        460000000        433000000        586000000        621000000                                                                                                                        

+-        c                1499000000        378000000        387000000        2924000000        4869000000        3530000000        1957000000        1696000000        -809000000        899000000                                                                                                                        

+-        Add lines 12a and 12b .......................                12364000000        2364000000        2207000000        2883000000        4751000000        3262000000        2015000000        1842000000        -802000000        399000000                                                                                                                        

+-        12c                12270000000        2478000000        2158000000        92000000        5000000        355000000        26000000        -54000000        74000000        460000000                                                                                                                        

+-        13                334000000        49000000        188000000        -51000000        113000000        -87000000        -84000000        -92000000        -81000000        40000000                                                                                                                        

+-        Qualified business income deduction from Form 8995 or Form 8995-A .........                -240000000        -163000000        -139000000                        0        0        0        0        0                                                                                                                        

+-        13                0        0                                0        0        0        0        0                                                                                                                        

+-        14                0        0                -613000000        -292000000        -825000000        -223000000        -222000000        24000000        -65000000                                                                                                                        

+-        Add lines 12c and 13 .......................                -1497000000        -108000000        -484000000        21985000000        21283000000        18689000000        13359000000        8277000000        7757000000        10704000000                                                                                                                        

+-        14                90734000000        24402000000        23064000000        -3460000000        -3353000000        -3462000000        -2112000000        -1318000000        -921000000        -33000000                                                                                                                        

+-        15                -14701000000        -3760000000        -4128000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        Taxable income. Subtract line 14 from line 11. If zero or less, enter -0- .........                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        15                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        Cat. No. 11320B                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        Form 1040 (2021)                76033000000        20642000000        18936000000                                                                                                                                                                                

+-        Reported Normalized and Operating Income/Expense Supplemental Section                                                                                                                                                                                                                

+-        Total Revenue as Reported, Supplemental                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                                                                                                                        

+-        Total Operating Profit/Loss as Reported, Supplemental                78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000                                                                                                                        

+-        Reported Effective Tax Rate                0.16                0.179        0.157        0.158                0.158        0.159        0                                                                                                                                

+-        Reported Normalized Income                                                                                6836000000                                                                                                                                

+-        Reported Normalized Operating Profit                                                                                7977000000                                                                                                                                

+-        Other Adjustments to Net Income Available to Common Stockholders                                                                                                                                                                                                                

+-        Discontinued Operations                                                                                                                                                                                                                

+-        Basic EPS                113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96        15.49                                                                                                                        

+-        Basic EPS from Continuing Operations                113.88        31.12        28.44        27.69        26.63        22.46        16.55        10.21        9.96        15.47                                                                                                                        

+-        Basic EPS from Discontinued Operations                                                                                                                                                                                                                

+-        Diluted EPS                112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13        9.87        15.35                                                                                                                        

+-        Diluted EPS from Continuing Operations                112.2        30.67        27.99        27.26        26.29        22.23        16.4        10.13        9.87        15.33                                                                                                                        

+-        Diluted EPS from Discontinued Operations                                                                                                                                                                                                                

+-        Basic Weighted Average Shares Outstanding                667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000        686465000        688804000                                                                                                                        

+-        Diluted Weighted Average Shares Outstanding                677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000        692267000        695193000                                                                                                                        

+-        Reported Normalized Diluted EPS                                                                                9.87                                                                                                                                

+-        Basic EPS          																																					
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
							1040	Department of the Treasury---Internal Revenue Service       (99)																																					
																																						
	U.S. Individual Income Tax Return																																					
	For the period April 13, 2022 to October 31, 2022																																					
	
				
																																	
																																						
	Routing Number	Bank Account Number	Account Name	Account Type	Address *	Address Line 2	City *	State *	Zip *	Phone	Email	Bank Name	Bank Street Address	Bank City	Bank State	Bank Zip	Nick name	
121000358	12312354544544|	Demo Bank 1	SAVINGS	Test Address1	Address 2	Downey	CA		(415) 555-2671	test@email.com	 Bank of America Corp.	8001 VILLA PARK DRIVE	HENRICO	VA	23228	company1	
231311211	54651231123164|	Demo Bank 2	CHECKING	Test Address1	Address 2	Downey	CA	90242	(415) 555-2672	test@email.com	JPMorgan Chase & Co.	8002 VILLA PARK DRIVE	HENRICO	VA	23228	company2	
121000358	31231231231231|	Demo Bank 3	CHECKING	Test Address1	Address 2	Downey	CA	90242	(415) 555-2673	test@email.com	JPMorgan Chase & Co.	8003 VILLA PARK DRIVE	HENRICO	VA	23228	company3	
121000358	23123123123123|	Demo Bank 4	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2674	test@email.com	JPMorgan Chase & Co.	8004 VILLA PARK DRIVE	HENRICO	VA	23228	company4	
121000358	54667753333212|	Demo Bank 5	SAVINGS		Address 2	Downey	CA	90242	(415) 555-2675	test@email.com	U.S. Bancorp	8005 VILLA PARK DRIVE	HENRICO	VA	23228	company5	
121000358	35678905534555|		SAVINGS	Test Address1	Address 2	Downey	CA		(415) 555-2676	test@email.com	U.S. Bancorp	8006 VILLA PARK DRIVE	HENRICO	VA	23228	company6	
1210200358	24242342342342|	Demo Bank 7	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2677	test@email.com	U.S. Bancorp	8007 VILLA PARK DRIVE	HENRICO	VA	23228	company7	
121000358	42342342342342|	Demo Bank 8	CHECKING	Test Address1	Address 2	Downey	CA	4454544	(415) 555-2678	test@email.com	 TD Group US Holdings LLC	8008 VILLA PARK DRIVE	HENRICO	VA	23228	company8	
121000358	42342423423423|	Demo Bank 9		Test Address1	Address 2	Downey	CA	90242	(415) 555-2679	test@email.com	 TD Group US Holdings LLC	8009 VILLA PARK DRIVE	HENRICO	VA	23228	company9	
121000358	31235689545533|	Demo Bank 10	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2680	test@email.com	 State Street Corp.	8010 VILLA PARK DRIVE	HENRICO	VA	23228	company10	
121000358	42634535345353|	Demo Bank 11	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2681	test@email.com		8011 VILLA PARK DRIVE	HENRICO	VA	23228	company11	
311112311	53534534534533|	Demo Bank 12	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2682	test@email.com	 Bank of America Corp.	8012 VILLA PARK DRIVE	HENRICO	VA	23228	company12	
121143345	3.42342E+13	Demo Bank 13	SAVINGS	Test Address1	Address 2	Downey	CA	90242	(415) 555-2683	test@email.com	 Bank of America Corp.	8013 VILLA PARK DRIVE	HENRICO	VA	23228	company13	
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "paradice" branch
  push:
    branches: [ "paradice" ]
  pull_request:
    branches: [ "paradice" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
RUNS::\:#:##:###BEGIN :	
:Build::
PULBLISH
LAUNCH
RELEASE
DEPLOY :repo-sync'@moejojojojo//Read.md/main/TREE/Master/Trunk :			# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "paradice" branch
  push:
    branches: [ "paradice" ]
  pull_request:
    branches: [ "paradice" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
RUNS::\:#:##:###BEGIN :	
:Build::
PULBLISH
LAUNCH
RELEASE
DEPLOY :repo-sync'@moejojojojo//Read.md/main/TREE/Master/Trunk :														
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
                                                                                                                                                                                                                   +-                                                                                                                                                                                                                       * Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                                                                                        -       

 INTERNAL REVENUE SERVICE,        

* *include interest paid, capital obligation, and underweighting                6858000000                                                                                                                                                                                        

       

 PO BOX 1214,       

 Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                22677000000                                                                                                                                                                                        

       
 CHARLOTTE, NC 28201-1214        

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                22677000000                                                                                                                                                                                        
           
                         +-               

 Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                22677000000                                                                                                                                                                                        

+-                Taxes / Deductions        Current        YTD                                                                                                                                                                                        

+-        Fiscal year ends in Dec 31 | USD                                                                                                                                                                                                                

+-        Rate                                                                                                                                                                                                                 

+-        Total                                                                                                                                                                                                                 


+-        7567263607                                                                                        DoB: 1994-10-15                                                                                                                        

+-        YTD                                                                                                                                                                                                                 

+-        April 18, 2022.                                                                                                                                                                                                                

+-        7567263607                                                                                                                                                                                                                


+-        WOOD  ZACHRY                Tax Period         Total        Social Security        Medicare        Withholding                                                                                                                                                                

+-        Fed 941 Corporate                39355        66986.66        28841.48        6745.18        31400                                                                                                                                                                

+-        Fed 941 West Subsidiary                39355        17115.41        7369.14        1723.42        8022.85                                                                                                                                                                

+-        Fed 941 South Subsidiary                39355        23906.09        10292.9        2407.21        11205.98                                                                                                                                                                


+-        Fed 941 East Subsidiary                39355        11247.64        4842.74        1132.57        5272.33                                                                                                                                                                

+-        Fed 941 Corp - Penalty                39355        27198.5        11710.47        2738.73        12749.3                                                                                                                                                                

+-        Fed 940 Annual Unemp - Corp                39355        17028.05                                                                                                                                                                                        

+-        44669                                                                                                                                                                                                                

+-        6b                 Name                   Tax Period         Total        Social Security        Medicare        Withholding                                                                                                                                                        

                             Fed 941 Corporate             39355        66986.66        28841.48        6745.18        31400                                                                                                                                                        

+-        7                  Fed 941 West Subsidiary       39355        17115.41        7369.14        1723.42        8022.85                                                                                                                                                        

+-        8                 Fed 941 South Subsidiary       39355        23906.09        10292.9        2407.21        11205.98                                                                                                                                                        


+-        8                 Fed 941 Corp - Penalty        39355        27198.5        11710.47        2738.73        12749.3                                                                                                                                                        

+-        9                  Fed 940 Annual Unemp - Corp        39355        17028.05                                                                                                                                                                                

+-        10                1.46698E+11        42337000000        37497000000        35653000000        31211000000        30818000000        25056000000        19744000000        22177000000        25055000000                                                                                                                        
+-        Adjustments to income from Schedule 1, line 26 ...............                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                                                                                                                        


+-        10                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        64133000000                                                                                                                        

+-        11                                                                                                                                                                                                                


+-        11                -1.10939E+11        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -21020000000                                                                                                                        

+-        Standard Deduction for—                -1.10939E+11                        -16292000000        -14774000000        -15167000000        -13843000000        -13361000000        -14200000000        -15789000000                                                                                                                        

+-        • Single or Married filing separately, $12,550                -67984000000        -20452000000        -16466000000        -8617000000        -7289000000        -8145000000        -6987000000        -6486000000        -7380000000        -8567000000                                                                                                                        


+-        • Married filing jointly or Qualifying widow(er), $25,100                -36422000000        -11744000000        -8772000000        -3341000000        -2773000000        -2831000000        -2756000000        -2585000000        -2880000000        -2829000000                                                                                                                        

+-        • Head of household, $18,800                -13510000000        -4140000000        -3256000000        -5276000000        -4516000000        -5314000000        -4231000000        -3901000000        -4500000000        -5738000000                                                                                                                        

+-        • If you checked any box under Standard Deduction, see instructions.                -22912000000        -7604000000        -5516000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000        -6820000000        -7222000000                                                                                                                        

+-        12                -31562000000        -8708000000        -7694000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000                                                                                                                        

+-        a                78714000000        21885000000        21031000000        2624000000        4846000000        3038000000        2146000000        1894000000        -220000000        1438000000                                                                                                                        

+-        Standard deduction or itemized deductions (from Schedule A) ..                12020000000        2517000000        2033000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000                                                                                                                        

+-        12a                1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000                                                                                                                        

+-        b                1153000000        261000000        310000000                                                                                                                                                                                

+-        Charitable contributions if you take the standard deduction (see instructions)                                        -76000000        -76000000        -53000000        -48000000        -13000000        -21000000        -17000000                                                                                                                        

+-        12b                -346000000        -117000000        -77000000        389000000        345000000        386000000        460000000        433000000        586000000        621000000                                                                                                                        

+-        c                1499000000        378000000        387000000        2924000000        4869000000        3530000000        1957000000        1696000000        -809000000        899000000                                                                                                                        

+-        Add lines 12a and 12b .......................                12364000000        2364000000        2207000000        2883000000        4751000000        3262000000        2015000000        1842000000        -802000000        399000000                                                                                                                        

+-        12c                12270000000        2478000000        2158000000        92000000        5000000        355000000        26000000        -54000000        74000000        460000000                                                                                                                        

+-        13                334000000        49000000        188000000        -51000000        113000000        -87000000        -84000000        -92000000        -81000000        40000000                                                                                                                        

+-        Qualified business income deduction from Form 8995 or Form 8995-A .........                -240000000        -163000000        -139000000                        0        0        0        0        0                                                                                                                        

+-        13                0        0                                0        0        0        0        0                                                                                                                        

+-        14                0        0                -613000000        -292000000        -825000000        -223000000        -222000000        24000000        -65000000                                                                                                                        

+-        Add lines 12c and 13 .......................                -1497000000        -108000000        -484000000        21985000000        21283000000        18689000000        13359000000        8277000000        7757000000        10704000000                                                                                                                        

+-        14                90734000000        24402000000        23064000000        -3460000000        -3353000000        -3462000000        -2112000000        -1318000000        -921000000        -33000000                                                                                                                        

+-        15                -14701000000        -3760000000        -4128000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        Taxable income. Subtract line 14 from line 11. If zero or less, enter -0- .........                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        15                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        Cat. No. 11320B                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        

+-        Form 1040 (2021)                76033000000        20642000000        18936000000                                                                                                                                                                                

+-        Reported Normalized and Operating Income/Expense Supplemental Section                                                                                                                                                                                                                

+-        Total Revenue as Reported, Supplemental                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                                                                                                                        

+-        Total Operating Profit/Loss as Reported, Supplemental                78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000                                                                                                                        

+-        Reported Effective Tax Rate                0.16                0.179        0.157        0.158                0.158        0.159        0                                                                                                                                

+-        Reported Normalized Income                                                                                6836000000                                                                                                                                

+-        Reported Normalized Operating Profit                                                                                7977000000                                                                                                                                

+-        Other Adjustments to Net Income Available to Common Stockholders                                                                                                                                                                                                                

+-        Discontinued Operations                                                                                                                                                                                                                

+-        Basic EPS                113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96        15.49                                                                                                                        

+-        Basic EPS from Continuing Operations                113.88        31.12        28.44        27.69        26.63        22.46        16.55        10.21        9.96        15.47                                                                                                                        

+-        Basic EPS from Discontinued Operations                                                                                                                                                                                                                

+-        Diluted EPS                112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13        9.87        15.35                                                                                                                        

+-        Diluted EPS from Continuing Operations                112.2        30.67        27.99        27.26        26.29        22.23        16.4        10.13        9.87        15.33                                                                                                                        

+-        Diluted EPS from Discontinued Operations                                                                                                                                                                                                                

+-        Basic Weighted Average Shares Outstanding                667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000        686465000        688804000                                                                                                                        

+-        Diluted Weighted Average Shares Outstanding                677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000        692267000        695193000                                                                                                                        

+-        Reported Normalized Diluted EPS                                                                                9.87                                                                                                                                

+-        Basic EPS          																																					
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																															
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						
																																						

Get answers to your investing questions from the SEC's website dedicated to retail investors															Get answers to your investing questions from the SEC's website dedicated to retail investors																											
					1		Earnings Statement					A									2			Earnings Statement																		
																																										
ALPHABET		        					Period Beginning:			37151					ALPHABET		        							Period Beginning:																		
1600 AMPITHEATRE PARKWAY 							Period Ending:			44833					1601 AMPITHEATRE PARKWAY			DR						Period Ending:	DR																	
MOUNTAIN VIEW, C.A., 94043							Pay Date:			44591					MOUNTAIN VIEW, C.A., 94044									Pay Date:																		
Taxable Marital Status: 
Exemptions/Allowances							ZACHRY T. 			WOOD					Taxable Marital Status: 
Exemptions/Allowances			Married						ZACHRY T. 	Married																	
							5323	BRADFORD DR																5324																		
Federal:															Federal:																											
							DALLAS		TX 75235-8314															DALLAS																		
TX:		NO State Incorne Tax													TX:		NO State Incorne Tax																									
	rate	units				year to date	Other Benefits and							Earnings		rate	units					year to date	Earnings	Other Benefits and																		
	112.2	674678000				75698871600	Information				this period	total to date		Regular		1349355887.8	2024033775.6					75698871601	Regular	Information																		
						        	Pto Balance				        			Overtime								        	Overtime	Pto Balance																		
						        	Total Work Hrs				0	75698871600		Bonus
Training								        	Bonus
Training	Total Work Hrs																		
Gross Pay	75698871600					        	Important Notes								Gross Pay	75698871601						        		Important Notes																		
							COMPANY PH Y: 650-253-0000																	COMPANY PH Y: 650-253-0001																		
Statutory							BASIS OF PAY: BASIC/DILUTED EPS							Deductions	Statutory								Deductions	BASIS OF PAY: BASIC/DILUTED EPS																		
Federal Income Tax			        			        									Federal Income Tax				        			        																				
Social Security Tax			        			        									Social Security Tax				        			        																				
							YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE																	YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE																		
Medicare Tax			        			        									Medicare Tax				        			        																				
							        																	        																		
Net Pay		70842743866	70842743866												Net Pay		70842743867		70842743867																							
CHECKING			        												CHECKING				        																							
Net Check		70842743866	        												Net Check		70842743867		        																							
Your federal taxable wages this period are $															Your federal taxable wages this period are $																											
ALPHABET INCOME							Advice number:			650001					ALPHABET INCOME									Advice number:																		
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043							Pay date:_			44669					1601 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043									Pay date:_																		
																																										
Deposited to the account Of							xxxxxxxx6547			transit ABA			amount		Deposited to the account Of									xxxxxxxx6548																		
PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																	
																																	
FEDERAL RESERVE MASTER SUPPLIER ACCOUNT					31000053-052101023																								COD				
					633-44-1725																				Zachryiixixiiiwood@gmail.com				47-2041-6547		111000614		31000053
PNC Bank																													PNC Bank Business Tax I.D. Number: 633441725				
CIF Department (Online Banking)																													Checking Account: 47-2041-6547				
P7-PFSC-04-F																													Business Type: Sole Proprietorship/Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																													5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 75235 8313				
																													ZACHRY, TYLER, WOOD				
																										4/18/2022			650-2530-000 469-697-4300				
														SIGNATURE															Time Zone: Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value										5264-5331			70842743866		PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																	
																																	
FEDERAL RESERVE MASTER SUPPLIER ACCOUNT					31000053-052101023																								COD				
					633-44-1725																				Zachryiixixiiiwood@gmail.com				47-2041-6547		111000614		31000053
PNC Bank																													PNC Bank Business Tax I.D. Number: 633441725				
CIF Department (Online Banking)																													Checking Account: 47-2041-6547				
P7-PFSC-04-F																													Business Type: Sole Proprietorship/Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																													5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 75235 8313				
																													ZACHRY, TYLER, WOOD				
																										4/18/2022			650-2530-000 469-697-4300				
														SIGNATURE															Time Zone: Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value																											
							NON-NEGOTIABLE																	NON-NEGOTIABLE																		
PLEASE READ THE IMPORTANT DISCLOSURES BELOW															PLEASE READ THE IMPORTANT DISCLOSURES BELOW																											
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
Based on facts as set forth in.															Based on facts as set forth in.			6551							6550																	
The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.															The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.																											
																																										
EMPLOYER IDENTIFICATION NUMBER:       61-1767919															EMPLOYER IDENTIFICATION NUMBER:       61-1767920																											
																																										
																																										
[DRAFT FORM OF TAX OPINION]															[DRAFT FORM OF TAX OPINION]																											
																																										
																																										
											1																															
																																										
ALPHABET															ALPHABET																											
ZACHRY T WOOD															ZACHRY T WOOD																											
5323 BRADFORD DR															5324 BRADFORD DR																											
DALLAS TX 75235-8314															DALLAS TX 75235-8315																											
ORIGINAL REPORT															ORIGINAL REPORT																											
Income, Rents, & Royalty															Income, Rents, & Royalty																											
INCOME STATEMENT 	61-1767919														INCOME STATEMENT 	61-1767920																										
	88-1303491															88-1303492																										
GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019					GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2022	Q3 2022	Q2 2022	Q1 2022	Q4 2021	Q3 2021		Q2 2021	Q3 2021																	
																																										
Gross Profit	1.46698E+11	42337000000	35653000000	31211000000	30818000000	25056000000	19744000000	22177000000	25055000000	22931000000					Gross Profit	-2178236363.6	-9195472727.3	-16212709090.9	-23229945454.5	-30247181818.2	-37264418181.8	-44281654545.5		-51298890909.1	37497000000																	
Total Revenue as Reported, Supplemental	2.57637E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000					Total Revenue as Reported, Supplemental	-1286309090.9	-13385163636.4	-25484018181.8	-37582872727.3	-49681727272.7	-61780581818.2	-73879436363.6		-85978290909.1	65118000000																	
	2.57637E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	64133000000	34071000000						1957800000	-9776581818.2	-21510963636.4	-33245345454.5	-44979727272.7	-56714109090.9	-68448490909.1		-80182872727.3	65118000000																	
Other Revenue										6428000000					Other Revenue																											
Cost of Revenue	-1.10939E+11	-32988000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000					Cost of Revenue	-891927272.7	4189690909.1	9271309090.9	14352927272.7	19434545454.5	24516163636.4	29597781818.2		34679400000	-27621000000																	
Cost of Goods and Services	-1.10939E+11	-32988000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000					Cost of Goods and Services	-891927272.7	4189690909.1	9271309090.9	14352927272.7	19434545454.5	24516163636.4	29597781818.2		34679400000	-27621000000																	
Operating Income/Expenses	-67984000000	-20452000000	-16292000000	-14774000000	-15167000000	-13843000000	-13361000000	-14200000000	-15789000000	-13754000000					Operating Income/Expenses	-3640563636.4	-882445454.5	1875672727.3	4633790909.1	7391909090.9	10150027272.7	12908145454.5		15666263636.4	-16466000000																	
Selling, General and Administrative Expenses	-36422000000	-11744000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000	-7380000000	-8567000000	-7200000000					Selling, General and Administrative Expenses	-1552200000	-28945454.55	1494309090.9	3017563636.4	4540818181.8	6064072727.3	7587327272.7		9110581818.2	-8772000000																	
General and Administrative Expenses	-13510000000	-4140000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000	-2880000000	-2829000000	-2591000000					General and Administrative Expenses	-544945454.5	23200000	591345454.5	1159490909.1	1727636363.6	2295781818.2	2863927272.7		3432072727.3	-3256000000																	
Selling and Marketing Expenses	-22912000000	-7604000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000	-4500000000	-5738000000	-4609000000					Selling and Marketing Expenses	-1007254545.5	-52145454.55	902963636.4	1858072727.3	2813181818.2	3768290909.1	4723400000		5678509090.9	-5516000000																	
Research and Development Expenses	-31562000000	-8708000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000	-6820000000	-7222000000	-6554000000					Research and Development Expenses	-2088363636.4	-853500000	381363636.4	1616227272.7	2851090909.1	4085954545.5	5320818181.8		6555681818.2	-7694000000																	
Total Operating Profit/Loss	78714000000	21885000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000					Total Operating Profit/Loss	-5818800000	-10077918181.8	-14337036363.6	-18596154545.5	-22855272727.3	-27114390909.1	-31373509090.9		-35632627272.7	21031000000																	
Non-Operating Income/Expenses, Total	12020000000	2517000000	2624000000	4846000000	3038000000	2146000000	1894000000	-220000000	1438000000	-549000000					Non-Operating Income/Expenses, Total	-1369181818.2	-2079000000	-2788818181.8	-3498636363.6	-4208454545.5	-4918272727.3	-5628090909.1		-6337909090.9	2033000000																	
Total Net Finance Income/Expense	1153000000	261000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000					Total Net Finance Income/Expense	464490909.1	462390909.1	460290909.1	458190909.1	456090909.1	453990909.1	451890909.1		449790909.1	310000000																	
Net Interest Income/Expense	1153000000	261000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000					Net Interest Income/Expense	464490909.1	462390909.1	460290909.1	458190909.1	456090909.1	453990909.1	451890909.1		449790909.1	310000000																	
																																										
Interest Expense Net of Capitalized Interest	-346000000	-117000000	-76000000	-76000000	-53000000	-48000000	-13000000	-21000000	-17000000	-23000000					Interest Expense Net of Capitalized Interest	48654545.45	69900000	91145454.55	112390909.1	133636363.6	154881818.2	176127272.7		197372727.3	-77000000																	
Interest Income	1499000000	378000000	389000000	345000000	386000000	460000000	433000000	586000000	621000000	631000000					Interest Income	415836363.6	392490909.1	369145454.5	345800000	322454545.5	299109090.9	275763636.4		252418181.8	387000000																	
Net Investment Income	12364000000	2364000000	2924000000	4869000000	3530000000	1957000000	1696000000	-809000000	899000000	-1452000000					Net Investment Income	-2096781818.2	-2909109090.9	-3721436363.6	-4533763636.4	-5346090909.1	-6158418181.8	-6970745454.5		-7783072727.3	2207000000																	
Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2883000000	4751000000	3262000000	2015000000	1842000000	-802000000	399000000	-1479000000					Gain/Loss on Investments and Other Financial Instruments	-2243490909.1	-3068572727.3	-3893654545.5	-4718736363.6	-5543818181.8	-6368900000	-7193981818.2		-8019063636.4	2158000000																	
Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	92000000	5000000	355000000	26000000	-54000000	74000000	460000000	-14000000					Income from Associates, Joint Ventures and Other Participating Interests	99054545.45	92609090.91	86163636.36	79718181.82	73272727.27	66827272.73	60381818.18		53936363.64	188000000																	
Gain/Loss on Foreign Exchange	-240000000	-163000000	-51000000	113000000	-87000000	-84000000	-92000000	-81000000	40000000	41000000					Gain/Loss on Foreign Exchange	47654545.45	66854545.45	86054545.45	105254545.5	124454545.5	143654545.5	162854545.5		182054545.5	-139000000																	
Irregular Income/Expenses	0	0			0	0	0	0	0	0					Irregular Income/Expenses	0	0				0	0		0																		
Other Irregular Income/Expenses	0	0			0	0	0	0	0	0					Other Irregular Income/Expenses	0	0				0	0		0																		
Other Income/Expense, Non-Operating	-1497000000	-108000000	-613000000	-292000000	-825000000	-223000000	-222000000	24000000	-65000000	295000000					Other Income/Expense, Non-Operating	263109090.9	367718181.8	472327272.7	576936363.6	681545454.5	786154545.5	890763636.4		995372727.3	-484000000																	
Pretax Income	90734000000	24402000000	21985000000	21283000000	18689000000	13359000000	8277000000	7757000000	10704000000	8628000000					Pretax Income	-7187981818.2	-12156918181.8	-17125854545.5	-22094790909.1	-27063727272.7	-32032663636.4	-37001600000		-41970536363.6	23064000000																	
Provision for Income Tax	-14701000000	-3760000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000	-921000000	-33000000	-1560000000					Provision for Income Tax	1695218181.8	2565754545.5	3436290909.1	4306827272.7	5177363636.4	6047900000	6918436363.6		7788972727.3	-4128000000																	
Net Income from Continuing Operations	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Net Income from Continuing Operations	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000																	
Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Net Income after Extraordinary Items and Discontinued Operations	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000																	
Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Net Income after Non-Controlling/Minority Interests	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000																	
Net Income Available to Common Stockholders	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Net Income Available to Common Stockholders	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000																	
Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Diluted Net Income Available to Common Stockholders	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000																	
Income Statement Supplemental Section															Income Statement Supplemental Section																											
Reported Normalized and Operating Income/Expense Supplemental Section															Reported Normalized and Operating Income/Expense Supplemental Section																											
Total Revenue as Reported, Supplemental	2.57637E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000					Total Revenue as Reported, Supplemental	-1286309090.9	-13385163636.4	-25484018181.8	-37582872727.3	-49681727272.7	-61780581818.2	-73879436363.6		-85978290909.1	65118000000																	
Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000					Total Operating Profit/Loss as Reported, Supplemental	-5818800000	-10077918181.8	-14337036363.6	-18596154545.5	-22855272727.3	-27114390909.1	-31373509090.9		-35632627272.7	21031000000																	
Reported Effective Tax Rate	0.162		0.157	0.158		0.158	0.159	0.119		0.181					Reported Effective Tax Rate	1.162		1.43667E-01	1.33167E-01	1.22667E-01		1.06333E-01		8.68333E-02	0.179																	
Reported Normalized Income								6836000000							Reported Normalized Income																											
Reported Normalized Operating Profit								7977000000							Reported Normalized Operating Profit																											
Other Adjustments to Net Income Available to Common Stockholders															Other Adjustments to Net Income Available to Common Stockholders																											
Discontinued Operations															Discontinued Operations																											
Basic EPS	113.88	31.15	27.69	26.63	22.54	16.55	10.21	9.96	15.49	10.2					Basic EPS	-8.742909091	-14.93854545	-21.13418182	-27.32981818	-33.52545455	-39.72109091	-45.91672727		-52.11236364	28.44																	
Basic EPS from Continuing Operations	113.88	31.12	27.69	26.63	22.46	16.55	10.21	9.96	15.47	10.2					Basic EPS from Continuing Operations	-8.752545455	-14.94781818	-21.14309091	-27.33836364	-33.53363636	-39.72890909	-45.92418182		-52.11945455	28.44																	
Basic EPS from Discontinued Operations															Basic EPS from Discontinued Operations																											
Diluted EPS	112.2	30.69	27.26	26.29	22.3	16.4	10.13	9.87	15.35	10.12					Diluted EPS	-8.505636364	-14.599	-20.69236364	-26.78572727	-32.87909091	-38.97245455	-45.06581818		-51.15918182	27.99																	
Diluted EPS from Continuing Operations	112.2	30.67	27.26	26.29	22.23	16.4	10.13	9.87	15.33	10.12					Diluted EPS from Continuing Operations	-8.515636364	-14.609	-20.70236364	-26.79572727	-32.88909091	-38.98245455	-45.07581818		-51.16918182	27.99																	
Diluted EPS from Discontinued Operations															Diluted EPS from Discontinued Operations																											
Basic Weighted Average Shares Outstanding	667650000	662664000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000					Basic Weighted Average Shares Outstanding	694313545.5	697258863.6	700204181.8	703149500	706094818.2	709040136.4	711985454.5		714930772.7	665758000																	
Diluted Weighted Average Shares Outstanding	677674000	672493000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000					Diluted Weighted Average Shares Outstanding	698675981.8	701033009.1	703390036.4	705747063.6	708104090.9	710461118.2	712818145.5		715175172.7	676519000																	
Reported Normalized Diluted EPS								9.87							Reported Normalized Diluted EPS																											
Basic EPS	113.88	31.15	27.69	26.63	22.54	16.55	10.21	9.96	15.49	10.2					Basic EPS	-8.742909091	-14.93854545	-21.13418182	-27.32981818	-33.52545455	-39.72109091	-45.91672727		-52.11236364	28.44																	
Diluted EPS	112.2	30.69	27.26	26.29	22.3	16.4	10.13	9.87	15.35	10.12					Diluted EPS	-8.505636364	-14.599	-20.69236364	-26.78572727	-32.87909091	-38.97245455	-45.06581818		-51.15918182	27.99																	
Basic WASO	667650000	662664000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000					Basic WASO	694313545.5	697258863.6	700204181.8	703149500	706094818.2	709040136.4	711985454.5		714930772.7	665758000																	
Diluted WASO	677674000	672493000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000					Diluted WASO	698675981.8	701033009.1	703390036.4	705747063.6	708104090.9	710461118.2	712818145.5		715175172.7	676519000																	
Fiscal year end September 28th., 2022. | USD															Fiscal year end September 28th., 2022. | USD																											
																																										
31622,6:39 PM															31622,6:39 PM																											
Morningstar.com Intraday Fundamental Portfolio View Print Report							Print								Morningstar.com Intraday Fundamental Portfolio View Print Report									Print																		
																																										
3/6/2022 at 6:37 PM										Current Value					3/6/2022 at 6:37 PM																											
										1.53352E+13																																
																																										
GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021													GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2022																									
Cash Flow from Operating Activities, Indirect		24934000000	Q2 2021	Q1 2021	Q4 2020										Cash Flow from Operating Activities, Indirect		24934000001	Q3 2022	Q2 2022	Q1 2022	Q4 2021				Q3 2021																	
Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	37497000000	31211000000	30818000000										Net Cash Flow from Continuing Operating Activities, Indirect		35231800000	36975800000	38719800000	40463800000	42207800000				25539000000																	
Cash Generated from Operating Activities		24934000000	21890000000	19289000000	22677000000										Cash Generated from Operating Activities		19636600000	18560200000	17483800000	16407400000	15331000000				25539000000																	
Income/Loss before Non-Cash Adjustment		20642000000	21890000000	19289000000	22677000000										Income/Loss before Non-Cash Adjustment		21353400000	21135400000	20917400000	20699400000	20481400000				25539000000																	
Total Adjustments for Non-Cash Items		6517000000	18525000000	17930000000	15227000000										Total Adjustments for Non-Cash Items		20351200000	21992600000	23634000000	25275400000	26916800000				18936000000																	
Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	4236000000	2592000000	5748000000										Depreciation, Amortization and Depletion, Non-Cash Adjustment		4986300000	5327600000	5668900000	6010200000	6351500000				3797000000																	
Depreciation and Amortization, Non-Cash Adjustment		3439000000	2945000000	2753000000	3725000000										Depreciation and Amortization, Non-Cash Adjustment		3239500000	3241600000	3243700000	3245800000	3247900000				3304000000																	
Depreciation, Non-Cash Adjustment		3215000000	2945000000	2753000000	3725000000										Depreciation, Non-Cash Adjustment		3329100000	3376000000	3422900000	3469800000	3516700000				3304000000																	
Amortization, Non-Cash Adjustment		224000000	2730000000	2525000000	3539000000										Amortization, Non-Cash Adjustment		4241600000	4848600000	5455600000	6062600000	6669600000				3085000000																	
Stock-Based Compensation, Non-Cash Adjustment		3954000000	215000000	228000000	186000000										Stock-Based Compensation, Non-Cash Adjustment		-1297700000	-2050400000	-2803100000	-3555800000	-4308500000				219000000																	
Taxes, Non-Cash Adjustment		1616000000	3803000000	3745000000	3223000000										Taxes, Non-Cash Adjustment		4177700000	4486200000	4794700000	5103200000	5411700000				3874000000																	
Investment Income/Loss, Non-Cash Adjustment		-2478000000	379000000	1100000000	1670000000										Investment Income/Loss, Non-Cash Adjustment		3081700000	4150000000	5218300000	6286600000	7354900000				-1287000000																	
Gain/Loss on Financial Instruments, Non-Cash Adjustment		-2478000000	-2883000000	-4751000000	-3262000000										Gain/Loss on Financial Instruments, Non-Cash Adjustment		-4354700000	-4770800000	-5186900000	-5603000000	-6019100000				-2158000000																	
Other Non-Cash Items		-14000000	-2883000000	-4751000000	-3262000000										Other Non-Cash Items		-5340300000	-6249200000	-7158100000	-8067000000	-8975900000				-2158000000																	
Changes in Operating Capital		-2225000000	-8000000	-255000000	392000000										Changes in Operating Capital		1068100000	1559600000	2051100000	2542600000	3034100000				64000000																	
Change in Trade and Other Receivables		-5819000000	-871000000	-1233000000	1702000000										Change in Trade and Other Receivables		2617900000	3718200000	4818500000	5918800000	7019100000				2806000000																	
Change in Trade/Accounts Receivable		-5819000000	-3661000000	2794000000	-5445000000										Change in Trade/Accounts Receivable		-1122700000	-527600000	67500000	662600000	1257700000				-2409000000																	
Change in Other Current Assets		-399000000	-3661000000	2794000000	-5445000000										Change in Other Current Assets		-3290700000	-3779600000	-4268500000	-4757400000	-5246300000				-2409000000																	
Change in Payables and Accrued Expenses		6994000000	-199000000	7000000	-738000000										Change in Payables and Accrued Expenses		-3298800000	-4719000000	-6139200000	-7559400000	-8979600000				-1255000000																	
Change in Trade and Other Payables		1157000000	4074000000	-4956000000	6938000000										Change in Trade and Other Payables		3108700000	3453600000	3798500000	4143400000	4488300000				3157000000																	
Change in Trade/Accounts Payable		1157000000	-130000000	-982000000	963000000										Change in Trade/Accounts Payable		-233200000	-394000000	-554800000	-715600000	-876400000				238000000																	
Change in Accrued Expenses		5837000000	-130000000	-982000000	963000000										Change in Accrued Expenses		-2105200000	-3202000000	-4298800000	-5395600000	-6492400000				238000000																	
Change in Deferred Assets/Liabilities		368000000	4204000000	-3974000000	5975000000										Change in Deferred Assets/Liabilities		3194700000	3626800000	4058900000	4491000000	4923100000				2919000000																	
Change in Other Operating Capital		-3369000000	-3000000	137000000	207000000										Change in Other Operating Capital		1553900000	2255600000	2957300000	3659000000	4360700000				272000000																	
Change in Prepayments and Deposits			-1082000000	785000000	740000000										Change in Prepayments and Deposits			-388000000	-891600000	-1395200000	-1898800000				3041000000																	
Cash Flow from Investing Activities		-11016000000													Cash Flow from Investing Activities		-11015999999																									
Cash Flow from Continuing Investing Activities		-11016000000	-9074000000	-5383000000	-7281000000										Cash Flow from Continuing Investing Activities		-4919700000	-3706000000	-2492300000	-1278600000	-64900000				-10050000000																	
Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-6383000000	-9074000000	-5383000000	-7281000000										Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-6772900000	-6485800000	-6198700000	-5911600000	-5624500000				-10050000000																	
Purchase of Property, Plant and Equipment		-6383000000	-5496000000	-5942000000	-5479000000										Purchase of Property, Plant and Equipment		-5218300000	-4949800000	-4681300000	-4412800000	-4144300000				-6819000000																	
Sale and Disposal of Property, Plant and Equipment			-5496000000	-5942000000	-5479000000										Sale and Disposal of Property, Plant and Equipment			-5040500000	-4683100000	-4325700000	-3968300000				-6819000000																	
Purchase/Sale of Business, Net		-385000000													Purchase/Sale of Business, Net		-384999999																									
Purchase/Acquisition of Business		-385000000	-308000000	-1666000000	-370000000										Purchase/Acquisition of Business		-1010700000	-1148400000	-1286100000	-1423800000	-1561500000				-259000000																	
Purchase/Sale of Investments, Net		-4348000000	-308000000	-1666000000	-370000000										Purchase/Sale of Investments, Net		574500000	1229400000	1884300000	2539200000	3194100000				-259000000																	
Purchase of Investments		-40860000000	-3293000000	2195000000	-1375000000										Purchase of Investments		16018900000	24471400000	32923900000	41376400000	49828900000				-3360000000																	
Sale of Investments		36512000000	-24949000000	-37072000000	-36955000000										Sale of Investments		-64179300000	-79064600000	-93949900000	-1.08835E+11	-1.23721E+11				-35153000000																	
Other Investing Cash Flow		100000000	21656000000	39267000000	35580000000										Other Investing Cash Flow		49209400000	57052800000	64896200000	72739600000	80583000000				31793000000																	
Purchase/Sale of Other Non-Current Assets, Net			23000000	30000000	-57000000										Purchase/Sale of Other Non-Current Assets, Net			-236000000	-368800000	-501600000	-634400000				388000000																	
Sales of Other Non-Current Assets															Sales of Other Non-Current Assets																											
Cash Flow from Financing Activities		-16511000000													Cash Flow from Financing Activities		-13997000000	-12740000000							-15254000000																	
Cash Flow from Continuing Financing Activities		-16511000000	-15991000000	-13606000000	-9270000000										Cash Flow from Continuing Financing Activities		-9287400000	-7674400000	-6061400000	-4448400000	-2835400000				-15254000000																	
Issuance of/Payments for Common Stock, Net		-13473000000	-15991000000	-13606000000	-9270000000										Issuance of/Payments for Common Stock, Net		-10767000000	-10026000000	-9285000000	-8544000000	-7803000000				-12610000000																	
Payments for Common Stock		13473000000	-12796000000	-11395000000	-7904000000										Payments for Common Stock		-18708100000	-22862000000	-27015900000	-31169800000	-35323700000				-12610000000																	
Proceeds from Issuance of Common Stock			-12796000000	-11395000000	-7904000000										Proceeds from Issuance of Common Stock				-5806333333.3	-3360333333.3	-914333333.3																					
Issuance of/Repayments for Debt, Net		115000000													Issuance of/Repayments for Debt, Net		-199000000	-356000000							-42000000																	
Issuance of/Repayments for Long Term Debt, Net		115000000	-1042000000	-37000000	-57000000										Issuance of/Repayments for Long Term Debt, Net		-314300000	-348200000	-382100000	-416000000	-449900000				-42000000																	
Proceeds from Issuance of Long Term Debt		6250000000	-1042000000	-37000000	-57000000										Proceeds from Issuance of Long Term Debt		-3407500000	-5307600000	-7207700000	-9107800000	-11007900000				6350000000																	
Repayments for Long Term Debt		6365000000	6699000000	900000000	0										Repayments for Long Term Debt		-117000000	-660800000	-1204600000	-1748400000	-2292200000				-6392000000																	
Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	-7741000000	-937000000	-57000000										Proceeds from Issuance/Exercising of Stock Options/Warrants		-2971300000	-3400800000	-3830300000	-4259800000	-4689300000				-2602000000																	
			-2453000000	-2184000000	-1647000000														-1288666666.7	-885666666.7	-482666666.7																					
																																										
Other Financing Cash Flow															Other Financing Cash Flow																											
Cash and Cash Equivalents, End of Period															Cash and Cash Equivalents, End of Period																											
Change in Cash		0	300000000	10000000	338000000000)										Change in Cash		1		-280000000	-570000000	338000000000)																					
Effect of Exchange Rate Changes		20945000000	23630000000	26622000000	26465000000										Effect of Exchange Rate Changes		28459100000	29853400000	31247700000	32642000000	34036300000				23719000000																	
Cash and Cash Equivalents, Beginning of Period		25930000000	-3175000000	300000000	6126000000										Cash and Cash Equivalents, Beginning of Period		25930000001	235000000000)	10384666666.7	15035166666.7	19685666666.7				235000000000)																	
Cash Flow Supplemental Section		181000000000)	183000000	-143000000	210000000										Cash Flow Supplemental Section		181000000000)	-146000000000)	110333333.3	123833333.3	137333333.3				-146000000000)																	
Change in Cash as Reported, Supplemental		2.3719E+13	2.6622E+13	2.6465E+13	2.0129E+13										Change in Cash as Reported, Supplemental		2.28095E+13	2.2375E+13	2.19405E+13	2.1506E+13	2.10715E+13				2.363E+13																	
Income Tax Paid, Supplemental		2774000000	-2992000000		6336000000										Income Tax Paid, Supplemental		-5809000000	-8692000000	-11575000000		6336000001				89000000																	
Cash and Cash Equivalents, Beginning of Period		13412000000			-4990000000										Cash and Cash Equivalents, Beginning of Period		-13098000000	-26353000000			-4989999999				157000000																	
																																										
12 Months Ended															13 Months Ended																											
_________________________________________________________															_________________________________________________________																											
					Q4  2019													Q4 2021			Q4  2020				Q4 2020																	
Income Statement 															Income Statement 																											
USD in "000'"s															USD in "000'"s																											
Repayments for Long Term Debt					Dec. 31, 2019										Repayments for Long Term Debt			Dec. 31, 2021			Dec. 31, 2020				Dec. 31, 2020																	
Costs and expenses:															Costs and expenses:																											
Cost of revenues					161857										Cost of revenues			182528			161858				182527																	
Research and development															Research and development																											
Sales and marketing					71896										Sales and marketing			84733			71897				84732																	
General and administrative					26018										General and administrative			27574			26019				27573																	
European Commission fines					18464										European Commission fines			17947			18465				17946																	
Total costs and expenses					9551										Total costs and expenses			11053			9552				11052																	
Income from operations					1697										Income from operations			1			1698				0																	
Other income (expense), net					127626										Other income (expense), net			141304			127627				141303																	
Income before income taxes					34231										Income before income taxes			41225			34232				41224																	
Provision for income taxes					5394										Provision for income taxes			6858000001			5395				6858000000																	
Net income					19289000000										Net income			22677000001			19289000001				22677000000																	
*include interest paid, capital obligation, and underweighting					19289000000										*include interest paid, capital obligation, and underweighting			22677000001			19289000001				22677000000																	
					19289000000													22677000001			19289000001				22677000000																	
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)																											
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)																											
																																										
																																										
For Paperwork Reduction Act Notice, see the seperate Instructions.															For Paperwork Reduction Act Notice, see the seperate Instructions.																											
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										
																																										

<!--td {border: 1px solid #cccccc;}br {mso-data-><!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}-->
Conversation opened. 1 unread message.

Skip to content
Using Gmail with screen readers
11 of many
Your account was overdrawn.
Inbox
PNC Alert <pncalert@pnc.com>

Thu, Aug 4, 4:28 PM (2 days ago)

to me

On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.

Account ending in 6547

The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.

Item


Amount


Action

240261564036618 USATAXPYMTIRS


$2,267,700.00


ITEM RETURNED - ACCOUNT CHARGE


Net fee(s) totaling $36.00 will be charged on August 4, 2022.


Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.


To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.


Thank you for choosing PNC Bank.

Contact Us


Privacy Policy


Security Policy

About This Email

This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.

(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC

RDTROD02



Meet
New meeting
Join a meeting
Hangouts
Page 1 of 8 




2021/09/292880Paid Period09-28-2019 - 09 28-2021Pay Date01-29-2022896551Amount$70,432,743,866totalAlphabet Inc.$134,839Income StatementZachry Tyler WoodUS$ in millionsDec 31, 2019Dec 31, 2018Dec 31, 2017Dec 31, 2016Dec 31, 2015Ann. Rev. Date161,857136,819110,85590,27274,989Revenues-71,896-59,549-45,583-35,138-28,164Cost of revenues89,96177,27065,27255,13446,825Gross profit-26,018-21,419-16,625-13,948-12,282Research and development-18,464-16,333-12,893-10,485-9,047Sales and marketing-9,551-8,126-6,872-6,985-6,136General and administrative-1,697-5,071-2,736â€”â€”European Commission fines34,23126,32126,14623,71619,360Income from operations2,4271,8781,3121,220999Interest income-100-114-109-124-104Interest expense103-80-121-475-422Foreign currency exchange gain1491,190-110-53â€”Gain (loss) on debt securities2,6495,46073-20â€”Gain (loss) on equity securities,-326â€”â€”â€”â€”Performance fees390-120-156-202â€”Gain(loss)10237815888-182Other5,3948,5921,047434291Other income (expense), net39,62534,91327,19324,15019,651Income before income taxes-3,269-2,880-2,302-1,922-1,621Provision for income taxes36,355-32,66925,61122,19818,030Net incomeAdjustment Payment to Class C36,35532,66925,61122,19818,030Net. Ann. Rev.Based on: 10-K (filing date: 2020-02-04), 10-K (filing date: 2019-02-05), 10-K (filing date: 2018-02-06), 10-K (filing date: 2017-02-03), 10-K (filing date: 2016-02-11).1

Earnings Statement

ALPHABET

Period Beginning:

1600 AMPITHEATRE PARKWAYDR

Period Ending:

MOUNTAIN VIEW, C.A., 94043Pay Date:Taxable Marital Status: 
Exemptions/AllowancesMarried

ZACHRY T.

5323Federal:DALLASTX:

NO State Income Tax

rateunitsyear to date

Other Benefits and

EPS112674,678,00075698871600Information

Pto Balance

Total Work Hrs

Gross Pay75698871600

Important Notes

COMPANY PH Y: 650-253-0000

Statutory

BASIS OF PAY: BASIC/DILUTED EPS

Federal Income TaxSocial Security Tax

YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE

Medicare TaxNet Pay70,842,743,86670,842,743,866CHECKINGNet Check70842743866Your federal taxable wages this period are $ALPHABET INCOME

Advice number:

1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043Pay date:_Deposited to the account Of

xxxxxxxx6547

PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																	
																																	
FEDERAL RESERVE MASTER SUPPLIER ACCOUNT					31000053-052101023																								COD				
					633-44-1725																				Zachryiixixiiiwood@gmail.com				47-2041-6547		111000614		31000053
PNC Bank																													PNC Bank Business Tax I.D. Number: 633441725				
CIF Department (Online Banking)																													Checking Account: 47-2041-6547				
P7-PFSC-04-F																													Business Type: Sole Proprietorship/Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																													5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 75235 8313				
																													ZACHRY, TYLER, WOOD				
																										4/18/2022			650-2530-000 469-697-4300				
														SIGNATURE															Time Zone: Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value

NON-NEGOTIABLE

Based on facts as set forth in.6550The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.EMPLOYER IDENTIFICATION NUMBER: 61-17679196551ALPHABETZACHRY T WOOD5323 BRADFORD DRDALLAS TX 75235-8314ORIGINAL REPORTIncome, Rents, & RoyaltyINCOME STATEMENT61-176791988-1303491GOOGL_income-statement_Quarterly_As_Originally_ReportedTTMQ4 2021Q3 2021Q2 2021Q1 2021Q4 2020Q3 2020Q2 2020Gross Profit14669800000042337000000374970000003565300000031211000000308180000002505600000019744000000Total Revenue as Reported, Supplemental2576370000007532500000065118000000618800000005531400000056898000000461730000003829700000025763700000075325000000651180000006188000000055314000000568980000004617300000038297000000Other RevenueCost of Revenue-110939000000-32988000000-27621000000-26227000000-24103000000-26080000000-21117000000-18553000000Cost of Goods and Services-110939000000-32988000000-27621000000-26227000000-24103000000-26080000000-21117000000-18553000000Operating Income/Expenses-67984000000-20452000000-16466000000-16292000000-14774000000-15167000000-13843000000-13361000000Selling, General and Administrative Expenses-36422000000-11744000000-8772000000-8617000000-7289000000-8145000000-6987000000-6486000000General and Administrative Expenses-13510000000-4140000000-3256000000-3341000000-2773000000-2831000000-2756000000-2585000000Selling and Marketing Expenses-22912000000-7604000000-5516000000-5276000000-4516000000-5314000000-4231000000-3901000000Research and Development Expenses-31562000000-8708000000-7694000000-7675000000-7485000000-7022000000-6856000000-6875000000Total Operating Profit/Loss787140000002188500000021031000000193610000001643700000015651000000112130000006383000000Non-Operating Income/Expenses, Total120200000002517000000203300000026240000004846000000303800000021460000001894000000Total Net Finance Income/Expense1153000000261000000310000000313000000269000000333000000412000000420000000Net Interest Income/Expense1153000000261000000310000000313000000269000000333000000412000000420000000Interest Expense Net of Capitalized Interest-346000000-117000000-77000000-76000000-76000000-53000000-48000000-13000000Interest Income1499000000378000000387000000389000000345000000386000000460000000433000000Net Investment Income123640000002364000000220700000029240000004869000000353000000019570000001696000000Gain/Loss on Investments and Other Financial Instruments122700000002478000000215800000028830000004751000000326200000020150000001842000000Income from Associates, Joint Ventures and Other Participating Interests3340000004900000018800000092000000500000035500000026000000-54000000Gain/Loss on Foreign Exchange-240000000-163000000-139000000-51000000113000000-87000000-84000000-92000000Irregular Income/Expenses00000Other Irregular Income/Expenses00000Other Income/Expense, Non-Operating-1497000000-108000000-484000000-613000000-292000000-825000000-223000000-222000000Pretax Income907340000002440200000023064000000219850000002128300000018689000000133590000008277000000Provision for Income Tax-14701000000-3760000000-4128000000-3460000000-3353000000-3462000000-2112000000-1318000000Net Income from Continuing Operations760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Net Income after Extraordinary Items and Discontinued Operations760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Net Income after Non-Controlling/Minority Interests760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Net Income Available to Common Stockholders760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Diluted Net Income Available to Common Stockholders760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Income Statement Supplemental Section

Reported Normalized and Operating Income/Expense Supplemental Section

Total Revenue as Reported, Supplemental25763700000075325000000651180000006188000000055314000000568980000004617300000038297000000Total Operating Profit/Loss as Reported, Supplemental787140000002188500000021031000000193610000001643700000015651000000112130000006383000000Reported Effective Tax Rate0.1620.1790.1570.1580.1580.159Reported Normalized IncomeReported Normalized Operating ProfitOther Adjustments to Net Income Available to Common StockholdersDiscontinued OperationsBasic EPS113.8831.1528.4427.6926.6322.5416.5510.21Basic EPS from Continuing Operations113.8831.1228.4427.6926.6322.4616.5510.21Basic EPS from Discontinued OperationsDiluted EPS112.230.6927.9927.2626.2922.316.410.13Diluted EPS from Continuing Operations112.230.6727.9927.2626.2922.2316.410.13Diluted EPS from Discontinued OperationsBasic Weighted Average Shares Outstanding667650000662664000665758000668958000673220000675581000679449000681768000Diluted Weighted Average Shares Outstanding677674000672493000676519000679612000682071000682969000685851000687024000Reported Normalized Diluted EPSBasic EPS113.8831.1528.4427.6926.6322.5416.5510.21Diluted EPS112.230.6927.9927.2626.2922.316.410.13Basic WASO667650000662664000665758000668958000673220000675581000679449000681768000Diluted WASO677674000672493000676519000679612000682071000682969000685851000687024000Fiscal year end September 28th., 2022. | USDPrintCash Flow from Operating Activities, IndirectNet Cash Flow from Continuing Operating Activities, Indirect2493400000025539000000374970000003121100000030818000000Cash Generated from Operating Activities2493400000025539000000218900000001928900000022677000000Income/Loss before Non-Cash Adjustment2493400000025539000000218900000001928900000022677000000Total Adjustments for Non-Cash Items2064200000018936000000185250000001793000000015227000000Depreciation, Amortization and Depletion, Non-Cash Adjustment65170000003797000000423600000025920000005748000000Depreciation and Amortization, Non-Cash Adjustment34390000003304000000294500000027530000003725000000Depreciation, Non-Cash Adjustment34390000003304000000294500000027530000003725000000Amortization, Non-Cash Adjustment32150000003085000000273000000025250000003539000000Stock-Based Compensation, Non-Cash Adjustment224000000219000000215000000228000000186000000Taxes, Non-Cash Adjustment39540000003874000000380300000037450000003223000000Investment Income/Loss, Non-Cash Adjustment1616000000-128700000037900000011000000001670000000Gain/Loss on Financial Instruments, Non-Cash Adjustment-2478000000-2158000000-2883000000-4751000000-3262000000Other Non-Cash Items-2478000000-2158000000-2883000000-4751000000-3262000000Changes in Operating Capital-1400000064000000-8000000-255000000392000000Change in Trade and Other Receivables-22250000002806000000-871000000-12330000001702000000Change in Trade/Accounts Receivable-5819000000-2409000000-36610000002794000000-5445000000Change in Other Current Assets-5819000000-2409000000-36610000002794000000-5445000000Change in Payables and Accrued Expenses-399000000-1255000000-1990000007000000-738000000Change in Trade and Other Payables699400000031570000004074000000-49560000006938000000Change in Trade/Accounts Payable1157000000238000000-130000000-982000000963000000Change in Accrued Expenses1157000000238000000-130000000-982000000963000000Change in Deferred Assets/Liabilities583700000029190000004204000000-39740000005975000000Change in Other Operating Capital368000000272000000-3000000137000000207000000Change in Prepayments and Deposits-33690000003041000000-1082000000785000000740000000Cash Flow from Investing ActivitiesCash Flow from Continuing Investing Activities-11016000000-9074000000-5383000000-7281000000Purchase/Sale and Disposal of Property, Plant and Equipment, Net-11016000000-10050000000-9074000000-5383000000-7281000000Purchase of Property, Plant and Equipment-6383000000-10050000000-5496000000-5942000000-5479000000Sale and Disposal of Property, Plant and Equipment-6383000000-6819000000-5496000000-5942000000-5479000000Purchase/Sale of Business, Net-6819000000Purchase/Acquisition of Business-385000000-308000000-1666000000-370000000Purchase/Sale of Investments, Net-385000000-259000000-308000000-1666000000-370000000Purchase of Investments-4348000000-259000000-32930000002195000000-1375000000Sale of Investments-40860000000-3360000000-24949000000-37072000000-36955000000Other Investing Cash Flow36512000000-35153000000216560000003926700000035580000000Purchase/Sale of Other Non-Current Assets, Net100000000317930000002300000030000000-57000000Sales of Other Non-Current Assets388000000Cash Flow from Financing ActivitiesCash Flow from Continuing Financing Activities-16511000000-15254000000-15991000000-13606000000-9270000000Issuance of/Payments for Common Stock, Net-16511000000-15254000000-15991000000-13606000000-9270000000Payments for Common Stock-13473000000-12610000000-12796000000-11395000000-7904000000Proceeds from Issuance of Common Stock13473000000-12610000000-12796000000-11395000000-7904000000Issuance of/Repayments for Debt, NetIssuance of/Repayments for Long Term Debt, Net115000000-42000000-1042000000-37000000-57000000Proceeds from Issuance of Long Term Debt115000000-42000000-1042000000-37000000-57000000Repayments for Long Term Debt6250000000635000000066990000009000000000Proceeds from Issuance/Exercising of Stock Options/Warrants6365000000-6392000000-7741000000-937000000-570000002923000000-2602000000-2453000000-2184000000-1647000000Other Financing Cash FlowCash and Cash Equivalents, End of PeriodChange in Cash030000000010000000338000000000)Effect of Exchange Rate Changes2094500000023719000000236300000002662200000026465000000Cash and Cash Equivalents, Beginning of Period25930000000235000000000)-31750000003000000006126000000Cash Flow Supplemental Section181000000000)-146000000000)183000000-143000000210000000Change in Cash as Reported, Supplemental2371900000000023630000000000266220000000002646500000000020129000000000Income Tax Paid, Supplemental277400000089000000-29920000006336000000Cash and Cash Equivalents, Beginning of Period13412000000157000000-499000000012 Months Ended_________________________________________________________Q4 2020Q4 2019Income StatementUSD in "000'"sRepayments for Long Term DebtDec. 31, 2020Dec. 31, 2019Costs and expenses:Cost of revenues182527161857Research and developmentSales and marketing8473271896General and administrative2757326018European Commission fines1794618464Total costs and expenses110529551Income from operations01697Other income (expense), net141303127626Income before income taxes4122434231Provision for income taxes68580000005394Net income2267700000019289000000*include interest paid, capital obligation, and underweighting22677000000192890000002267700000019289000000

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

For Paperwork Reduction Act Notice, see the seperate Instructions.NameTax PeriodTotalFed 941 Corporate3935566986.66Fed 941 West Subsidiary3935517115.41Fed 941 South Subsidiary3935523906.09Fed 941 East Subsidiary3935511247.64Fed 941 Corp - Penalty3935527198.5Fed 940 Annual Unemp - Corp3935517028.05ID:TxDL: 00037305581Ssn:

633-44-1725


    - Consider using a different Git client on Windows
