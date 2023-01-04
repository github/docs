Receipt Upon Tax Return Purchase From Turbo Tax Inc. :IntuitInc. :www.intuit.com :Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
dhhyi
/
devcontainer-creator
Public
Code
Issues
Pull requests
Actions
Security
Insights
Comparing changes
Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .
  
There isn’t anything to compare.
devcontainers and main are entirely different commit histories.

Showing  with 54 additions and 36 deletions.
  25  
src/tasks/build-devcontainer.ts
@@ -1,4 +1,6 @@
import { once } from 'lodash-es';
import { execSync } from 'child_process';

import { memoize, once } from 'lodash-es';

import { execute } from '../exec';
import { logPersist } from '../logging';
import {
  appendMetaToImage,
  ConstructedDCCMeta,
  ConstructedDevcontainerMeta,
} from './devcontainer-meta';
import { PulledImage } from './docker-pull';
import { DevcontainerCLIBin } from './install-tools';
import { ResolvedYaml } from './language-spec';
import { ParsedArgs } from './parse-args';

export const PulledImage: (image: string, fail?: boolean) => string = memoize(
  (image: string, expectSuccess = false) => {
    if (!image.includes(':')) {
      return PulledImage(`${image}:latest`, expectSuccess);
    } else {
      if (
        !execSync(`docker image ls -q ${image}`, { encoding: 'utf-8' }).trim()
      ) {
        try {
          execute('pulling ' + image, 'docker', ['pull', image]);
        } catch (error) {
          // do nothing
        }
      }
      return image;
    }
  },
  (image, fail) => `${image}:${fail}`
);

function buildWithDevcontainerCli(): string {
  const { tag, cacheFrom, targetDir } = ParsedArgs();

  const devcontainerArgs = ['build', '--workspace-folder', targetDir];
  if (tag) {
    devcontainerArgs.push('--image-name', tag);
  }
  if (cacheFrom) {
    devcontainerArgs.push('--cache-from', PulledImage(cacheFrom));
  }
  const result = execute(
    'building devcontainer',
    DevcontainerCLIBin,
    devcontainerArgs,
    { response: 'stdout' }
  );
  const devcontainerOutput = JSON.parse(result);
  const image = devcontainerOutput.imageName[0];
  return image;
}
async function buildWithDocker() {
  const resolvedYaml = await ResolvedYaml();
  const { tag, cacheFrom, targetDir } = ParsedArgs();
  const languageBuildArgs = Object.entries(
    resolvedYaml?.devcontainer?.build?.args || []
  ).reduce<string[]>(
    (acc, [key, value]) => [...acc, '--build-arg', `${key}=${value}`],
    []
  );
  const image = tag || `dcc-${Date.now()}`;
  const dockerBuildArgs: string[] = [
    'build',
    ...languageBuildArgs,
    '--build-arg',
    'BUILDKIT_INLINE_CACHE=1',
    '-t',
    image,
  ];
  if (cacheFrom) {
    dockerBuildArgs.push('--cache-from', PulledImage(cacheFrom));
  }
  dockerBuildArgs.push(`${targetDir}/.devcontainer`);
  execute('building devcontainer', 'docker', dockerBuildArgs);
  appendMetaToImage(image, await ConstructedDevcontainerMeta());
  return image;
}
export const BuildDevcontainer = once(async () => {
  let image: string;
  if ((await ResolvedYaml()).devcontainer?.build) {
    image = await buildWithDocker();
  } else {
    image = buildWithDevcontainerCli();
  }
  const dccMeta = await ConstructedDCCMeta();
  if (dccMeta) {
    appendMetaToImage(image, dccMeta);
  }
  logPersist('built image', image);
  return image;
});
  38  
src/tasks/devcontainer-meta.ts
@@ -7,7 +7,6 @@ import { once } from 'lodash-es';
import { execute } from '../exec';

import { BuildDevcontainer } from './build-devcontainer';
import { PulledImage } from './docker-pull';
import { DevcontainerCLIBin } from './install-tools';
import { ResolvedYaml } from './language-spec';
import { ParsedArgs } from './parse-args';
@@ -44,18 +43,41 @@ interface MergedDevcontainerMetaType {
  containerEnv?: Record<string, string>;
}

export function getDevcontainerMeta(image: string): DevcontainerMetaType[] {
function getRemoteDevcontainerMeta(image: string): DevcontainerMetaType[] {
  return JSON.parse(
    execute(
      `fetching metadata for ${image}`,
      'docker',
      [
        'run',
        '--rm',
        'quay.io/skopeo/stable',
        'inspect',
        `docker://${image}`,
        '--format={{index .Labels "devcontainer.metadata"}}',
      ],
      { response: 'stdout' }
    )
  );
}

function getLocalDevcontainerMeta(image: string): DevcontainerMetaType[] {
  return JSON.parse(
    execSync(
      `docker inspect ${PulledImage(
        image,
        true
      )} --format='{{index .Config.Labels "devcontainer.metadata"}}'`,
      `docker inspect ${image} --format='{{index .Config.Labels "devcontainer.metadata"}}'`,
      { encoding: 'utf8' }
    )
  );
}

export function getDevcontainerMeta(image: string): DevcontainerMetaType[] {
  if (execSync(`docker image ls -q ${image}`, { encoding: 'utf-8' }).trim()) {
    return getLocalDevcontainerMeta(image);
  } else {
    return getRemoteDevcontainerMeta(image);
  }
}

export const MergedDevcontainerMeta = once(
  async (): Promise<MergedDevcontainerMetaType> => {
    const targetDir = ParsedArgs().targetDir;
@@ -134,7 +156,7 @@ export const ConstructedDCCMeta: () => Promise<
});

export function appendMetaToImage(image: string, meta: DevcontainerMetaType) {
  const oldMeta = getDevcontainerMeta(image);
  const oldMeta = getLocalDevcontainerMeta(image);
  const newMeta = JSON.stringify([...oldMeta, meta]);

  const append = spawnSync(
@@ -153,7 +175,7 @@ export function appendMetaToImage(image: string, meta: DevcontainerMetaType) {
export const DumpDevcontainerMeta = once(async () => {
  const { targetDir } = ParsedArgs();
  const image = await BuildDevcontainer();
  const meta = getDevcontainerMeta(image);
  const meta = getLocalDevcontainerMeta(image);

  const metaFile = join(targetDir, '.devcontainer_meta.json');
  writeFileSync(metaFile, JSON.stringify(meta, null, 2));
 25  
src/tasks/docker-pull.ts
@@ -1,25 +0,0 @@
import { execSync } from 'child_process';

import { memoize } from 'lodash-es';

import { execute } from '../exec';

export const PulledImage: (image: string, fail?: boolean) => string = memoize(
  (image: string, expectSuccess = false) => {
    if (!image.includes(':')) {
      return PulledImage(`${image}:latest`, expectSuccess);
    } else {
      if (
        !execSync(`docker image ls -q ${image}`, { encoding: 'utf-8' }).trim()
      ) {
        try {
          execute('pulling ' + image, 'docker', ['pull', image]);
        } catch (error) {
          // do nothing
        }
      }
      return image;
    }
  },
  (image, fail) => `${image}:${fail}`
);
  2  
src/tasks/parse-args.ts
import { basename } from 'path';
import getopts from 'getopts';
import { once } from 'lodash-es';
import { DCC_PROTOCOL } from '../constants';
import { TmpOutputDir } from './create-tmp-dir';
function printUsageAndExit() {
  console.log(
    `Create a devcontainer.
Usage: node ${basename(process.argv[1])} language-spec [target-folder] [options]
language-spec: Path to a language specification YAML file, or a URL to a language specification YAML file. If the argument starts with "${DCC_PROTOCOL}", the language specification will be downloaded from the repositories example folder (i.e ${DCC_PROTOCOL}lua).
target-folder: Path to the target folder. If not specified, a temporary folder will be used.
Options:
  --name\tName of the devcontainer.
  --build\tBuild the devcontainer after creation.
  --tag\t\tTag of the devcontainer image.
  --cache-from\tImage to use as cache for the devcontainer image.
  --test\tTest the devcontainer after creation.
  --dump-meta\tDump the metadata of the devcontainer.
  --no-vscode\tDo not create a .vscode folder.
  -v, --verbose\tVerbose output.
  -vv, --debug\tDebug output.
  -h, --help\tPrint this help message.
Examples:
  node ${basename(process.argv[1])} ${DCC_PROTOCOL}lua .
    Create a devcontainer for Lua in the current folder.
  node ${basename(process.argv[1])} language.yaml --test
    Create and test a temporary devcontainer for the
    language specified in language.yaml.
`
  );
  process.exit(1);
}
export const VERY_VERBOSE =
  process.argv.includes('--debug') || process.argv.includes('-vv');
export const VERBOSE =
  VERY_VERBOSE ||
  process.argv.includes('--verbose') ||
  process.argv.includes('-v');
interface CmdlArguments {
  languageYaml: string;
  targetDir: string;
  devcontainerName?: string;
  build?: boolean;
  tag?: string;
  cacheFrom?: string;
  test?: boolean;
  vscode?: boolean;
  dumpMeta?: boolean;
}
export const ParsedArgs: () => CmdlArguments = once(() => {
  const options = getopts(process.argv.slice(2), {
    string: ['name', 'cache-from', 'tag'],
    boolean: ['full', 'test', 'dump-meta', 'vscode', 'v', 'verbose', 'debug'],
    boolean: ['build', 'test', 'dump-meta', 'vscode', 'v', 'verbose', 'debug'],
    default: {
      vscode: true,
    },
    unknown: (AGS) => {
      if (arg !== 'help' && arg !== '-h') {
        console.log(`Unknown option: ${arg}`);
      }
      printUsageAndExit();
      return false;
    },
  });
  const defaultArgs = options._;
  if (defaultArgs.length === 0) {
    printUsageAndExit();
  }
  const languageYaml = defaultArgs[0];
  const targetDir = defaultArgs[1] || TmpOutputDir();
  return {
    languageYaml,
    targetDir,
    devcontainerName: options.name,
    build: !!options.build,
    tag: options.tag,
    cacheFrom: options['cache-from'],
    test: !!options.test,
    dumpMeta: !!options['dump-meta'],
    vscode: !!options.vscode,
  };
});
Footer
© 2022 GitHub, Inc.
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
Comparing devcontainers...main · dhhyi/devcontainer-creator
Wage and Income Transcript
This Product Contains Sensitive Taxpayer Data
Request Date: 07-29-2022
Response Date: 07-29-2022
Tracking Number: 102393392560
Customer File Number: 8813034910
Wage and Income Transcript
SSN Provided: XXX-XX-1725
Tax Period Requested: December, 2020
Form W-2 Wage and Tax Statement
Employer:
Employer Identification Number (EIN):XXXXX4661
INTU
2700 C
Employee:
Employee's Social Security Number:XXX-XX-1725
ZACH T WOO
5222 B
Submission Type:.............................................Original document
Wages, Tips and Other Compensation:..............................$5,105,000.00
Federal Income Tax Withheld:.....................................$1,888,138.00
Social Security Wages:.............................................$137,700.00
Social Security Tax Withheld:........................................$8,537.00
Medicare Wages and Tips:.........................................$5,105,000.00
Medicare Tax Withheld:.............................................$118,167.00
Social Security Tips:....................................................$0.00
Allocated Tips:..........................................................$0.00
Dependent Care Benefits:.................................................$0.00
Deferred Compensation:...................................................$0.00
Code "Q" Nontaxable Combat Pay:..........................................$0.00
Code "W" Employer Contributions to a Health Savings Account:.............$0.00
Code "Y" Deferrals under a section 409A nonqualified Deferred Compensation
plan:....................................................................$0.00
Code "Z" Income under section 409A on a nonqualified Deferred Compensation
plan:....................................................................$0.00
Code "R" Employer's Contribution to MSA:.................................$0.00
Code "S" Employer's Contribution to Simple Account:......................$0.00
Code "T" Expenses Incurred for Qualified Adoptions:......................$0.00
Code "V" Income from exercise of non-statutory stock options:............$0.00
Code "AA" Designated Roth Contributions under a Section 401(k) Plan:.....$0.00
Code "BB" Designated Roth Contributions under a Section 403(b) Plan:.....$0.00
Code "DD" Cost of Employer-Sponsored Health Coverage:....................$0.00
Code "EE" Designated ROTH Contributions Under a Governmental Section 457(b)
Plan:....................................................................$0.00
Code "FF" Permitted benefits under a qualified small employer health
reimbursement arrangement:...............................................$0.00
Code "GG" Income from Qualified Equity Grants Under Section 83(i):.......$0.00
Code "HH" Aggregate Deferrals Under Section 83(i) Elections as of the Close
of the Calendar Year:....................................................$0.00
Third Party Sick Pay Indicator:.....................................Unanswered
Retirement Plan Indicator:..........................................Unanswered
Statutory Employee:.....................................Not Statutory Employee
W2 Submission Type:...................................................Original
W2 WHC SSN Validation Code:........................................Correct SSN
Form 1099-G
Payer:
Payer's Federal Identification Number (FIN):XXXXX4775
THE
101 EA
Recipient:
Recipient's Identification Number:XXX-XX-1725
WOO ZACH T
5222 B
Submission Type:.............................................Original document
Account Number (Optional):....................................................
ATAA Payments:...........................................................$0.00
Tax Withheld:........................................................$1,026.00
Taxable Grants:..........................................................$0.00
Unemployment Compensation:..........................................$10,182.00
Agricultural Subsidies:..................................................$0.00
Prior Year Refund:.......................................................$0.00
Market gain on Commodity Credit Corporation loans repaid:................$0.00
Year of Refund:........................................................Not Set
1099G Offset:..............Not Refund, Credit, or Offset for Trade or Business
Second TIN Notice:............................................................
                
                This Product Contains Sensitive Taxpayer Data
Filing Detaile
Form 10-Q - Quarterly report [Sections 13 or 15(d)]:SEC Accession No. 0000019617-18-000151
Filing Date
2018-08-01
Accepted
2018-08-01 16:49:36
Documents
164
Period of Report
2018-06-30
 Interactive Data
Document Format Files

Seq        Description        Document        Type        Size
1        10-Q        corpq22018.htm        10-Q        12766988
2        EXHIBIT 15        corpq22018exhibit15.htm        EX-15        7864
3        EXHIBIT 31.1        corpq22018exhibit311.htm        EX-31.1        11727
4        EXHIBIT 31.2        corpq22018exhibit312.htm        EX-31.2        11744
5        EXHIBIT 32        corpq22018exhibit32.htm        EX-32        17924
12                chart-c589b14b729f5aaea49.jpg        GRAPHIC        55416
13                pwclogobwa12.jpg        GRAPHIC        23603
14                pwcsig1q2016a08.jpg        GRAPHIC        24398
         Complete submission text file        0000019617-18-000151.txt                 62451590
Data Files

Seq        Description        Document        Type        Size
6        XBRL INSTANCE DOCUMENT        jpm-20180630.xml        EX-101.INS        21532407
7        XBRL TAXONOMY EXTENSION SCHEMA DOCUMENT        jpm-20180630.xsd        EX-101.SCH        209668
8        XBRL TAXONOMY EXTENSION CALCULATION LINKBASE DOCUMENT        jpm-20180630_cal.xml        EX-101.CAL        281270
9        XBRL TAXONOMY EXTENSION DEFINITION LINKBASE DOCUMENT        jpm-20180630_def.xml        EX-101.DEF        1299449
10        XBRL TAXONOMY EXTENSION LABEL LINKBASE DOCUMENT        jpm-20180630_lab.xml        EX-101.LAB        2349227
11        XBRL TAXONOMY EXTENSION PRESENTATION LINKBASE DOCUMENT        jpm-20180630_pre.xml        EX-101.PRE        1557070
Mailing Address
270 PARK AVENUE
NEW YORK NY 10017
Business Address
270 PARK AVE
38TH FL
NEW YORK NY 10017
2122706000
JPMORGAN CHASE & CO (Filer) CIK: 0000019617 (see all company filings)
IRS No.: 132624428 | State of Incorp.: DE | Fiscal Year End: 1231
Type: 10-Q | Act: 34 | File No.: 001-05805 | Film No.: 18985424
SIC: 6021 National Commercial Banks
Office of Finance
 
Purchaser :13-2624428'@qbo.intuit.com :
Turbotax
Here are the Details of your transaction
Order # TTWCC239986937
Order date: April 14, 2022
Expiration: 1/2027
Order Status: Payment Completed
Cardholder Details:
ZACHRY WOOD
5222 Bradford Dr
Dallas, Tx 75235
Federal Tax Return Purchase Charge : $199
Prepared Using TurboTax Live Self-Employeed
Electronic Filing :
=T.DIST("=BASIC.EPS).(Basic-Weighted_Average_Shares_Outstanding) :
Reported Normalized and Operating Income/Expense Supplemental Section :
Total Revenue as Reported, Supplemental                     $25763700000000 7532500000000 6511800000000 6188000000000 5531400000000 5689800000000 4617300000000 3829700000000 4115900000000 4607500000000 4049900000000
Total Operating Profit/Loss as Reported, Supplemental $787140000000000 2188500000000 2103100000000 1936100000000 1643700000000 1565100000000 1121300000000 638300000000 797700000000 926600000000 917700000000
Reported Effective Tax Rate $0.162 0.179 0.157 0.158 0.158 0.159 0.119 0.181
Reported Normalized Income Section
Reported Normalized Operating Profit and Other Adjustments to Net Income Available to Common Stockholders 
Discontinued Operations Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2
Basic EPS from Continuing Operations $113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
Basic EPS from Discontinued Operations 
Diluted EPS $112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35  10.12
Diluted EPS from Continuing Operations $112.20 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding   66765000000 66266400000 66575800000 66895800000 67322000000 67558100000 67944900000 68176800000 68646500000 68880400000 69274100000
Diluted Weighted Average Shares Outstanding 67767400000 67249300000 67651900000 67961200000 68207100000 68296900000 68585100000 68702400000 69226700000 69519300000 69819900000 
Reported Normalized Diluted EPS $2583.87
Basic EPS   $11388 31150 28440 27690 26630 22540 16550 10210 00996 15490 10210
Diluted EPS $11220 30690 27990 27260 26290 22300 16400 10130 00987 15350 10190 
Basic WASO   66765000000 66266400000 66575800000 66895800000 67322000000 67558100000 67944900000 68176800000 68465000000 688804000000 692741000000
Diluted WASO 67767400000 67249300000 67651900000 67961200000 68207100000 68296900000 68585100000 68702400000 69226700000 695193000000 6981990000000
Basic EP                             $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2
Basic EPS from Continuing Operations $113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
Basic EPS from Discontinued Operations
Diluted EPS $$00112/20000 $$00030.69000000 $$00027.99000000 $$00027.26000000 $$00026.29000000 $$00022.30000000 $$00016.40000000 $$00010.13000000 $$00009.870000000 $$00015.35000000 $$00010.12000000
Diluted EPS from Continuing Operations $$112.20 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
Diluted EPS from Discontinued Operatons
Basic Weighted Average Shares Outstanding 667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
Diluted Weighted Average Shares Outstaning 677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
Reported Normalized Diluted EPS 9.87
Basic EPS $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2 1
Diluted EPS $112.20 30.69 27.99 27.26 2.29 22.3 16.4 10.13 9.87 15.35 10.12
Basic WASO $667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
Diluted WASO $677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
+Change in Cash 20,945,000,000 23,719,000,000 23,630,000,000 26,622,000,000 26,465,000,000
Effect of Exchange Rate Changes 25930000000) 235000000000) -3,175,000,000 300,000,000 6,126,000,000
Cash and Cash Equivalents, Beginning of Period PAGE="$USD(181000000000)".XLS BRIN="$USD(146000000000)".XLS 183,000,000 -143,000,000 210,000,000
Cash Flow Supplemental Section $23,719,000,000,000.00 $26,622,000,000,000.00 $26,465,000,000,000.00 $20,129,000,000,000.00
Change in Cash as Reported, Supplemental 2,774,000,000 89,000,000 -2,992,000,000 6,336,000,000
Income Tax Paid, Supplemental 13,412,000,000 157,000,000
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
Income before income taxes 22,677,000,000 19,289,000,000
Provision for income taxes 22,677,000,000 19,289,000,000
Net income 22,677,000,000 19,289,000,000
$18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 
$18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 
$18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 
$18,936,000,000.00 
3/6/2022 at 5:47 PM
Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
GOOGL_income-statement_Quarterly_As_Originally_Reported 24,934,000,000 25,539,000,000 37,497,000,000 31,211,000,000 30,818,000,000
24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
Cash Flow from Operating Activities, Indirect 24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
Net Cash Flow from Continuing Operating Activities, Indirect 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000
Cash Generated from Operating Activities 6,517,000,000 3,797,000,000 4,236,000,000 2,592,000,000 5,748,000,000
Income/Loss before Non-Cash Adjustment 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
Total Adjustments for Non-Cash Items 3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
Depreciation, Amortization and Depletion, Non-Cash
Adjustment 3,215,000,000 3,085,000,000 2,730,000,000 2,525,000,000 3,539,000,000
Depreciation and Amortization, Non-Cash Adjustment 224,000,000 219,000,000 215,000,000 228,000,000 186,000,000
Depreciation, Non-Cash Adjustment 3,954,000,000 3,874,000,000 3,803,000,000 3,745,000,000 3,223,000,000
Amortization, Non-Cash Adjustment 1,616,000,000 -1,287,000,000 379,000,000 1,100,000,000 1,670,000,000
Stock-Based Compensation, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
Taxes, Non-Cash Adjustment -2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000
Investment Income/Loss, Non-Cash Adjustment -14,000,000 64,000,000 -8,000,000 -255,000,000 392,000,000
Gain/Loss on Financial Instruments, Non-Cash Adjustment -2,225,000,000 2,806,000,000 -871,000,000 -1,233,000,000 1,702,000,000
Other Non-Cash Items -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
Changes in Operating Capital -5,819,000,000 -2,409,000,000 -3,661,000,000 2,794,000,000 -5,445,000,000
Change in Trade and Other Receivables -399,000,000 -1,255,000,000 -199,000,000 7,000,000 -738,000,000
Change in Trade/Accounts Receivable 6,994,000,000 3,157,000,000 4,074,000,000 -4,956,000,000 6,938,000,000
Change in Other Current Assets 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
Change in Payables and Accrued Expenses 1,157,000,000 238,000,000 -130,000,000 -982,000,000 963,000,000
Change in Trade and Other Payables 5,837,000,000 2,919,000,000 4,204,000,000 -3,974,000,000 5,975,000,000
Change in Trade/Accounts Payable 368,000,000 272,000,000 -3,000,000 137,000,000 207,000,000
Change in Accrued Expenses -3,369,000,000 3,041,000,000 -1,082,000,000 785,000,000 740,000,000
Change in Deferred Assets/Liabilities
Change in Other Operating Capital -11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
Change in Prepayments and Deposits -11,016,000,000 -10,050,000,000 -9,074,000,000 -5,383,000,000 -7,281,000,000
Cash Flow from Investing Activities
Cash Flow from Continuing Investing Activities -6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000 -6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
Purchase/Sale and Disposal of Property, Plant and Equipment,Net
Purchase of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
Sale and Disposal of Property, Plant and Equipment -385,000,000 -259,000,000 -308,000,000 -1,666,000,000 -370,000,000
Purchase/Sale of Business, Net -4,348,000,000 -3,360,000,000 -3,293,000,000 2,195,000,000 -1,375,000,000
Purchase/Acquisition of Business -40,860,000,000 -35,153,000,000 -24,949,000,000 -37,072,000,000 -36,955,000,000
Purchase/Sale of Investments, Net
Purchase of Investments 36,512,000,000 31,793,000,000 21,656,000,000 39,267,000,000 35,580,000,000 100,000,000 388,000,000 23,000,000 30,000,000 -57,000,000
Sale of Investments
Other Investing Cash Flow -15,254,000,000
Purchase/Sale of Other Non-Current Assets, Net -16,511,000,000 -15,254,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
Sales of Other Non-Current Assets -16,511,000,000 -12,610,000,000 -15,991,000,000 -13,606,000,000 -9,270,000,000
Cash Flow from Financing Activities -13,473,000,000 -12,610,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
Cash Flow from Continuing Financing Activities 13,473,000,000 -12,796,000,000 -11,395,000,000 -7,904,000,000
Issuance of/Payments for Common Stock, Net -42,000,000
Payments for Common Stock 115,000,000 -42,000,000 -1,042,000,000 -37,000,000 -57,000,000
Proceeds from Issuance of Common Stock 115,000,000 6,350,000,000 -1,042,000,000 -37,000,000 -57,000,000
Issuance of/Repayments for Debt, Net 6,250,000,000 -6,392,000,000 6,699,000,000 900,000,000 0
Issuance of/Repayments for Long Term Debt, Net 6,365,000,000 -2,602,000,000 -7,741,000,000 -937,000,000 -57,000,000
Proceeds from Issuance of Long Term Debt
Repayments for Long Term Debt 2,923,000,000 -2,453,000,000 -2,184,000,000 -1,647,000,000
Proceeds from Issuance/Exercising of Stock Options/Warrants 0 300,000,000 10,000,000 3.38E+11
Other Financing Cash Flow
Cash and Cash Equivalents, End of Period
Basic net income per share of Class A and B common stock
and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common
stock and Class C capital stock (in dollars par share)Fiscal year end September 28th., 2022. | USD
For Paperwork Reduction Act Notice, see the seperate Instructions.
ALINE Pay, FSDD, ADPCheck, WGPS, Garnishment Services, EBTS, Benefit Services, Other 
Bank        Bank Address        Account Name        ABA        DDA        Collection Method 
JPMorgan Chase        One Chase Manhattan Plaza New York, NY 10005        ADP Tax Services        021000021        323269036        Reverse Wire Impound 
Deutsche Bank        60 Wall Street New York, NY 10005-2858        ADP Tax Services        021001033        00416217        Reverse Wire Impound Tax & 401(k) 
Bank        Bank Address        Account Name        ABA        DDA        Collection Method 
JPMorgan Chase        One Chase Manhattan Plaza New York, NY 10005        ADP Tax Services        021000021        9102628675        Reverse Wire Impound 
Deutsche Bank        60 Wall Street New York, NY 10005-2858        ADP Tax Services        021001033        00153170        Reverse Wire Impound Workers Compensation 
Bank        Bank Address        Account Name        ABA        DDA        Collection Method 
JPMorgan Chase        One Chase Manhattan Plaza New York, NY 10005        ADP Tax Services        021000021        304939315        Reverse Wire Impound 
NOTICE CLIENT acknowledges that if sufficient funds are not available by the date required pursuant to the foregoing provisions of this Agreement, 
(1) CLIENT will immediately become solely responsible for all tax deposits and filings, all employee wages, all wage garnishments, all CLIENT third- party payments (e.g., vendor payments) and all related penalties and interest due then and thereafter, 
(2) any and all ADP Services may, at ADP’s option, be immediately terminated, 
(3) neither BANK nor ADP will have any further obligation to CLIENT or any third party with respect to any such Services and 
(4) ADP may take such action as it deems appropriate to collect ADP’s Fees for Services. Client shall not initiate any ACH transactions utilizing ADP’s services that constitute International ACH transactions without first
(i) notifying ADP of such IAT transactions in writing utilizing ADP’s Declaration of International ACH Transaction form (or such other form as directed by ADP) and 
(ii) complying with the requirements applicable to IAT transactions. ADP shall not be liable for any delay or failure in processing any ACH transaction due to Client’s failure to so notify ADP of Client’s IAT transactions or Client’s failure to comply with applicable IAT requirements. 
For Disclosure, Privacy Act, and Paperwork Reduction ActNotice, see separate instructions. Cat. No. 11320B
(1) For subscriptions, your payment method on file will be automatically charged monthly/annually at the then-current list price until you cancel. 
If you have a discount it will apply to thethen-current list price until it expires. 
To cancel your subscription at any time, go to Account & Settings and cancel the subscription. 
(2) For one-time services, your payment method on file will reflect the charge in the amount referenced in this invoice. 
Terms, conditions, pricing, features, service, and support options are subject to change without notice. 
All dates and times are Pacific Standard Time (PST).
Office of the 46th President Of The United tates. 117th US Congress Seal Of The US Treasury Department, 1769 W.H.W. DC, US 2022.  
Reported Normalized Income                                                                                                                                        
Reported Normalized Operating Profit                                                                                                                                        
Other Adjustments to Net Income Availabl to Common Stockholders                                                                                                                                       
Discontinued Operations                                                                                                                                       
Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21                                                                        
Basic EPS from Continuing Operations        113.88        31.12        28.44        27.69        26.63        22.46        16.55        10.21                                                                        
Basic EPS from Discontinued Operations                                                                                                     Diluted EPS      112.2          30.69        27.99        27.26        26.29        22.3          16.4          10.13                                  Diluted EPS from Continuing Operations      112.2          30.67        27.99        27.26        26.29        22.23        16.4          10.13                                                                        
Diluted EPS from Discontinued Operations                                                                                                  
Basic Weighted Averagetitle: Using Git rebase on the command line
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: Here's a short tutorial on using `git rebase` on the command line.
versions 
shortTile: Git rebase
## Using Git rebase
In this example, we will cover all of the `git rebase` commands available, except for `exec`
e'll start our rebase by entering `git rebase --interactive HEAD~7` on the terminal. Our favorite text editor will display the following lnes:
pick 1fc6c95 PatchA
pick 6b2481b Patch 
pick dd1475d something I want to splitpick c619268 A fix for Patch B
ick fa39187 something to add to patch A
pck 4ca2acc i cant' typ goods
pik 7b36971 something to move before patch B
In this example, we're going to
* Squash the fifth commit (`fa39187`) into the `"Patch A"` commit (`1fc6c95`), using `squash`.
* Move the last commit (`7b36971`) up before the `"Patch B"` commit (`6b2481b`), and keep it as `pick`.
* Merge the `"A fix for Patch B"` commit (`c619268`) into the `"Patch B"` commit (`6b2481b`), and disregard the commit message using `fixup`.
* Split the third commit (`dd1475d`) into two smaller commits, using `edit`.
* Fix the commit message of the misspelled commit (`4ca2acc`), using `reword`.
Phew! This sounds like a lot of work, but by taking it one step at a time, we can easily make those changes.
To start, we'll need to modify the commands in the file to look like this
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want t split
reword 4ca2acc i cant' typ goods
We've changed each line's command from `pick` to the command we're interested in.
Now, save and close the editor; this will start the interactive rebase.
Git skips the first rebase command, `pick 1fc6c95`, since it doesn't need to do anything. It goes to the next command, `squash fa39187`. Since this operation requires your input, Git opens your text editor once again. The file it opens up looks something like this:
# This is a combination of two commits.
# The first commit's message is:
Patch 2
# This is the 2nd commit message:
something to add to patch A
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, ad an empty message aborts the commit.
# Not currently on any branch.# Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)
## modified:   
This file is Git's way of saying, "Hey, here's what I'm about to do with this `squash`." It lists the first commit'smessage (`"Patch A"`), and the second commit's message (`"something to add to patch A"`). If you're happy with these commit messages, ou can save the file, and close the editor. Otherwise, you have the option of changing the commit message by simply changing the text.
When the editor is closed, the rebase continues:
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
rword 4ca2acc i cant' typ goods
Git processes the two `pick` commands (for `pick 7b36971` and `pick 6b2481b`). It *also* processes the `fixup` command (`fixup c619268`), since it doesn't require any interaction. `fixp` merges the changes from `c619268` into the commit before it, `6b2481b`. Both changes will have the same commit message: `"Patch B"`.
Git gets to the `edit dd1475d` operation, stops, and prints the following message to the terminal:
```shell
You can amend the commit now, with
        git commit --amend
Once you are satisfied with your changes, run
        git rebase --continue
At this point, you can edit any of the files in your project to make any additional changes. For each change you make, you'll need to perform a new commit, and you can do that by entering the `git commit --amend` command. When you're finished making all your changes, you can run `git rebase --continue`.
Git then gets to the `reword 4ca2acc` command.  It opens up your text editor one more time, and presents the following information:
i cant' typ goods
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
# modified:   a
As before, Git is showing the commit message for you to edit. You canchange the text (`"i cant' typ goods"`), save the file, and close the editor. Git will finish the rebase and return you to the terminal.
## Pushing rebased code to GitHub
Since you've altered Git history, the usual `git push origin` **will not** work. You'll need to modify the command by "force-pushing" your latest changes:
# Don't override changes
$ git push origin main --force-with-lease
# Override changes
$ git push origin main --force
{% warning %}
Force pushing has serious implications because it changes the historical sequence of commits for the branch. Use it with caution, especially if your repository is being accessed by multiple people.
{% endwarning %}
## Further reading
* "[Resolving merge conflicts after a Git rebase](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)"
