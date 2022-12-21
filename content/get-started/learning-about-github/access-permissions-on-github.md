#-'' 'BEGIN 
GLOW4
#!/Users/bin/Bash ENV::Run''
'Runs'-on :'Run'@ci :'"''
'"'::package' ':).[yam/API/Apk.Adk.Sdk.S.E.jdk/jre.J.C.jar/Ninja.jar]'.(#).[Skip to content Visual Studio Code
Docs
Updates
Blog
API
Extensions
FAQ
Learn
Search Docs
Download VS CodeDownload
Version 1.74 is now available! Read about the new features and fixes from November.

Dismiss this update
Overview
SETUP
Overview
Linux
macOS
Windows
Raspberry Pi
Network
Additional Components
Enterprise
Uninstall
GET STARTED
USER GUIDE
SOURCE CONTROL
TERMINAL
LANGUAGES
NODE.JS / JAVASCRIPT
TYPESCRIPT
PYTHON
JAVA
C++
DOCKER
DATA SCIENCE
AZURE
REMOTE
DEV CONTAINERS
Visual Studio Code on Linux
Installation
See the Download Visual Studio Code page for a complete list of available installation options.

By downloading and using Visual Studio Code, you agree to the license terms and privacy statement.

Debian and Ubuntu based distributions
The easiest way to install Visual Studio Code for Debian/Ubuntu based distributions is to download and install the .deb package (64-bit), either through the graphical software center if it's available, or through the command line with:

sudo apt install ./<file>.deb

# If you're on an older Linux distribution, you will need to run this instead:
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies
Note that other binaries are also available on the VS Code download page.

Installing the .deb package will automatically install the apt repository and signing key to enable auto-updating using the system's package manager. Alternatively, the repository and key can also be installed manually with the following script:

sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg
Then update the package cache and install the package using:

sudo apt install apt-transport-https
sudo apt update
sudo apt install code # or code-insiders
RHEL, Fedora, and CentOS based distributions
We currently ship the stable 64-bit VS Code in a yum repository, the following script will install the key and repository:

sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
Then update the package cache and install the package using dnf (Fedora 22 and above):

dnf check-update
sudo dnf install code
Or on older versions using yum:

yum check-update
sudo yum install code
Due to the manual signing process and the system we use to publish, the yum repo may lag behind and not get the latest version of VS Code immediately.

Snap
Visual Studio Code is officially distributed as a Snap package in the Snap Store:

Get it from the Snap Store

You can install it by running:

sudo snap install --classic code # or code-insiders
Once installed, the Snap daemon will take care of automatically updating VS Code in the background. You will get an in-product update notification whenever a new update is available.

Note: If snap isn't available in your Linux distribution, please check the following Installing snapd guide, which can help you get that set up.

Learn more about snaps from the official Snap Documentation.

openSUSE and SLE-based distributions
The yum repository above also works for openSUSE and SLE-based systems, the following script will install the key and repository:

sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/zypp/repos.d/vscode.repo'
Then update the package cache and install the package using:

sudo zypper refresh
sudo zypper install code
AUR package for Arch Linux
There is a community-maintained Arch User Repository package for VS Code.

To get more information about the installation from the AUR, please consult the following wiki entry: Install AUR Packages.

Nix package for NixOS (or any Linux distribution using Nix package manager)
There is a community maintained VS Code Nix package in the nixpkgs repository. In order to install it using Nix, set allowUnfree option to true in your config.nix and execute:

nix-env -i vscode
Installing .rpm package manually
The VS Code .rpm package (64-bit) can also be manually downloaded and installed, however, auto-updating won't work unless the repository above is installed. Once downloaded it can be installed using your package manager, for example with dnf:

sudo dnf install <file>.rpm
Note that other binaries are also available on the VS Code download page.

Updates
VS Code ships monthly and you can see when a new release is available by checking the release notes. If the VS Code repository was installed correctly, then your system package manager should handle auto-updating in the same way as other packages on the system.

Note: Updates are automatic and run in the background for the Snap package.

Node.js
Node.js is a popular platform and runtime for easily building and running JavaScript applications. It also includes npm, a Package Manager for Node.js modules. You'll see Node.js and npm mentioned frequently in our documentation and some optional VS Code tooling requires Node.js (for example, the VS Code extension generator).

If you'd like to install Node.js on Linux, see Installing Node.js via package manager to find the Node.js package and installation instructions tailored to your Linux distribution. You can also install and support multiple versions of Node.js by using the Node Version Manager.

To learn more about JavaScript and Node.js, see our Node.js tutorial, where you'll learn about running and debugging Node.js applications with VS Code.

Setting VS Code as the default text editor
xdg-open
You can set the default text editor for text files (text/plain) that is used by xdg-open with the following command:

xdg-mime default code.desktop text/plain
Debian alternatives system
Debian-based distributions allow setting a default editor using the Debian alternatives system, without concern for the MIME type. You can set this by running the following and selecting code:

sudo update-alternatives --set editor /usr/bin/code
If Visual Studio Code doesn't show up as an alternative to editor, you need to register it:

sudo update-alternatives --install /usr/bin/editor editor $(which code) 10
Windows as a Linux developer machine
Another option for Linux development with VS Code is to use a Windows machine with the Windows Subsystem for Linux (WSL).

Windows Subsystem for Linux
With WSL, you can install and run Linux distributions on Windows. This enables you to develop and test your source code on Linux while still working locally on a Windows machine. WSL supports Linux distributions such as Ubuntu, Debian, SUSE, and Alpine available from the Microsoft Store.

When coupled with the WSL extension, you get full VS Code editing and debugging support while running in the context of a Linux distro on WSL.

See the Developing in WSL documentation to learn more or try the Working in WSL introductory tutorial.

Next steps
Once you have installed VS Code, these topics will help you learn more about it:

Additional Components - Learn how to install Git, Node.js, TypeScript, and tools like Yeoman.
User Interface - A quick orientation to VS Code.
User/Workspace Settings - Learn how to configure VS Code to your preferences through settings.
Common questions
Azure VM Issues
I'm getting a "Running without the SUID sandbox" error?

You can safely ignore this error.

Debian and moving files to trash
If you see an error when deleting files from the VS Code Explorer on the Debian operating system, it might be because the trash implementation that VS Code is using is not there.

Run these commands to solve this issue:

sudo apt-get install gvfs-bin
Conflicts with VS Code packages from other repositories
Some distributions, for example Pop!_OS provide their own code package. To ensure the official VS Code repository is used, create a file named /etc/apt/preferences.d/code with the following content:

Package: code
Pin: origin "packages.microsoft.com"
Pin-Priority: 9999
"Visual Studio Code is unable to watch for file changes in this large workspace" (error ENOSPC)
When you see this notification, it indicates that the VS Code file watcher is running out of handles because the workspace is large and contains many files. Before adjusting platform limits, make sure that potentially large folders, such as Python .venv, are added to the files.watcherExclude setting (more details below). The current limit can be viewed by running:

cat /proc/sys/fs/inotify/max_user_watches
The limit can be increased to its maximum by editing /etc/sysctl.conf (except on Arch Linux, read below) and adding this line to the end of the file:

fs.inotify.max_user_watches=524288
The new value can then be loaded in by running sudo sysctl -p.

While 524,288 is the maximum number of files that can be watched, if you're in an environment that is particularly memory constrained, you may want to lower the number. Each file watch takes up 1080 bytes, so assuming that all 524,288 watches are consumed, that results in an upper bound of around 540 MiB.

Arch-based distros (including Manjaro) require you to change a different file; follow these steps instead.

Another option is to exclude specific workspace directories from the VS Code file watcher with the files.watcherExclude setting. The default for files.watcherExclude excludes node_modules and some folders under .git, but you can add other directories that you don't want VS Code to track.

"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
I can't see Chinese characters in Ubuntu
We're working on a fix. In the meantime, open the application menu, then choose File > Preferences > Settings. In the Text Editor > Font section, set "Font Family" to Droid Sans Mono, Droid Sans Fallback. If you'd rather edit the settings.json file directly, set editor.fontFamily as shown:

    "editor.fontFamily": "Droid Sans Mono, Droid Sans Fallback"
Package git is not installed
This error can appear during installation and is typically caused by the package manager's lists being out of date. Try updating them and installing again:

# For .deb
sudo apt-get update

# For .rpm (Fedora 21 and below)
sudo yum check-update

# For .rpm (Fedora 22 and above)
sudo dnf check-update
The code bin command does not bring the window to the foreground on Ubuntu
Running code . on Ubuntu when VS Code is already open in the current directory will not bring VS Code into the foreground. This is a feature of the OS which can be disabled using ccsm.

# Install
sudo apt-get update
sudo apt-get install compizconfig-settings-manager

# Run
ccsm
Under General > General Options > Focus & Raise Behaviour, set "Focus Prevention Level" to "Off". Remember this is an OS-level setting that will apply to all applications, not just VS Code.

Cannot install .deb package due to "/etc/apt/sources.list.d/vscode.list: No such file or directory"
This can happen when sources.list.d doesn't exist or you don't have access to create the file. To fix this, try manually creating the folder and an empty vscode.list file:

sudo mkdir /etc/apt/sources.list.d
sudo touch /etc/apt/sources.list.d/vscode.list
Cannot move or resize the window while X forwarding a remote window
If you are using X forwarding to use VS Code remotely, you will need to use the native title bar to ensure you can properly manipulate the window. You can switch to using it by setting window.titleBarStyle to native.

Using the custom title bar
The custom title bar and menus were enabled by default on Linux for several months. The custom title bar has been a success on Windows, but the customer response on Linux suggests otherwise. Based on feedback, we have decided to make this setting opt-in on Linux and leave the native title bar as the default.

The custom title bar provides many benefits including great theming support and better accessibility through keyboard navigation and screen readers. Unfortunately, these benefits do not translate as well to the Linux platform. Linux has a variety of desktop environments and window managers that can make the VS Code theming look foreign to users. For users needing the accessibility improvements, we recommend enabling the custom title bar when running in accessibility mode using a screen reader. You can still manually set the title bar with the Window: Title Bar Style (window.titleBarStyle) setting.

Broken cursor in editor with display scaling enabled
Due to an upstream issue #14787 with Electron, the mouse cursor may render incorrectly with scaling enabled. If you notice that the usual text cursor is not being rendered inside the editor as you would expect, try falling back to the native menu bar by configuring the setting window.titleBarStyle to native.

Repository changed its origin value
If you receive an error similar to the following:

E: Repository '...' changed its 'Origin' value from '...' to '...'
N: This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.
Use apt instead of apt-get and you will be prompted to accept the origin change:

sudo apt update
Was this documentation helpful?
Yes, this page was helpfulNo, this page was not helpful
12/7/2022
IN THIS ARTICLE THERE ARE 7 SECTIONSIN THIS ARTICLE
Installation
Updates
Node.js
Setting VS Code as the default text editor
Windows as a Linux developer machine
Next steps
Common questions
TwitterTweet this link
RSSSubscribe
StackoverflowAsk questions
TwitterFollow @code
GitHubRequest features
IssuesReport issues
YouTubeWatch videos
Hello from Seattle. Follow @code Support Privacy Terms of Use License 
Microsoft homepage© 2022 Microsoft]
>0.2%
not dead
not op_mini all

[development]
last 1 chrome version
last 1 firefox version
last 1 safari version
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
0-vortex
/
open-sauced-vite-ts-template-test
Public
Code
Issues
Pull requests
2
Actions
Projects
Security
Insights
Update and rename .github/workflows/triage.yml to bitore.sig #2
 Open
zakwarlord7 wants to merge 1 commit into 0-vortex:main from zakwarlord7:patch-2
+577 −11 
 Conversation 0
 Commits 1
 Checks 0
 Files changed 2
Show file tree Hide file tree
File filter 
 
Update and rename .github/workflows/triage.yml to bitore.sig
@zakwarlord7zakwarlord7 committed 15 minutes ago 
commit 9dc4c3642ed1d09feb6ad58bc8f119680f6885d9
 11  
.github/workflows/triage.yml
@@ -1,11 +0,0 @@
name: "Assign issues with .take"	

on:	
  issue_comment:	
    types:	
      - created	
      - edited	

jobs:	
  assign:	
    uses: open-sauced/open-sauced/.github/workflows/triage.yml@main	
 577  
bitore.sig
Viewed
@@ -0,0 +1,577 @@
name: "Assign issues with .take"
on:
  issue_comment:
    types:
      - created
      - edited
This Product Contains Sensitive Taxpayer Data  
 Request Date: 08-02-2022  Response Date: 08-02-2022  Tracking Number: 102398244811
 Account Transcript  
 FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020
 TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725
 ZACH T WOO
 3050 R
 --- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---  

 ACCOUNT BALANCE: 0.00
 ACCRUED INTEREST: 0.00 AS OF: Mar. 28, 2022  ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022
 ACCOUNT BALANCE
 PLUS ACCRUALS
 (this is not a
 payoff amount): 0.00
 ** INFORMATION FROM THE RETURN OR AS ADJUSTED **  
 EXEMPTIONS: 00
 FILING STATUS: Single
 ADJUSTED GROSS
 INCOME:  
 TAXABLE INCOME:  
 TAX PER RETURN:  
 SE TAXABLE INCOME
 TAXPAYER:  
 SE TAXABLE INCOME
 SPOUSE:  
 TOTAL SELF
 EMPLOYMENT TAX:  
 RETURN NOT PRESENT FOR THIS ACCOUNT
 TRANSACTIONS  
 CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT  No tax return filed  
 766 Tax relief credit 06-15-2020 -$1,200.00  846 Refund issued 06-05-2020 $1,200.00
 290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0
 971 Notice issued 06-15-2020 $0.00  766 Tax relief credit 01-18-2021 -$600.00  846 Refund issued 01-06-2021 $600.00
 290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0
 663 Estimated tax payment 01-05-2021 -$9,000,000.00  662 Removed estimated tax payment 01-05-2021 $9,000,000.00  740 Undelivered refund returned to IRS 01-18-2021 -$600.00
 767 Reduced or removed tax relief 01-18-2021 $600.00  credit
 971 Notice issued 03-28-2022 $0.00
 This Product Contains Sensitive Taxpayer Data
Department of the Treasury --- Internal Revenue Service (99) OMB No.  1545-0074 IRS Use Only --- Do not write or staple in this space
U.S. Individual Income Tax Return 1 Earnings Statement
        Period Beginning:2019-09-28
DR Period Ending: 2021-09-29
Pay Day: 2022-01-31
Married ZACHRY T.
5323
DALLAS
TX :NO State Income Tax :
 8/4 42.08 8/10 2150.19- SEC-commissions. fee's 2,267,700.00 































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
+Total Service Charge
+                                                                                                                                 
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                      Q4 2020                              Q4  2019                                                                                
+Cat. No. 11320B                                                                                                                                        Income Statement                                                                                                                                 
+Form 1040 (2021)                                                                                                                                        USD in "000'"s                                                                                                                                
+Reported Normalized and Operating Income/Expense Supplemental Section Repayments for Long Term Debt                        Dec. 31, 2020                        Dec. 31, 2019                                                                                
+Total Revenue as Reported, Supplemental                                                                                                                     Costs and expenses:                                                                                                                                
+Total Operating Profit/Loss as Reported, Supplemental                                                                                                    182527                        161857                                                                                
+Reported Effective Tax Rate                                                                                                                                        Research and development                                                                                                                                
+Reported Normalized Income                                                                                                                                        84732                         71896                                                                                
+Reported Normalized Operating Profit                                                                                                                             27573                         26018                                                                                
+Other Adjustments to Net Income Available to Common Stockholders                                                                                17946                         18464                                                                                
+Discontinued Operations                                                                                                                                               11052                         9551                                                                                
+Basic EPS                                                                                                                                                                   0                               1697                                                                                
+Basic EPS from Continuing Operations                                                                                                                            141303                       127626                                                                                
+Basic EPS from Discontinued Operations                                                                                                                         41224                        34231                                                                                
+Diluted EPS                                                                                                                                                                 6858000000                        5394                                                                                
+Diluted EPS from Continuing Operations                                              total                                                                    Net income                        22677000000                        19289000000                                                                                
+*include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                                                                                
+Basic Weighted Average Shares Outstanding                                                                                                                                                         22677000000                        19289000000                                                                                
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                
+Returned for Signature                                                                                                                                                                                                
+Date.______________09/01/2022                                                                                        
+For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                                                                                        
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                


important information                                                                                                                                                                                                                                                                               
Reviewing Your Statement                                                                        
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
Balancing Your Account Update Your Account Register                                                                        



$112.20         $30.67         $27.99         $10.13         $9.87         $15.33         $10.12
 $113.88         $31.15         $28.44         $10.21         $9.96         $15.49         $10.20                                                         
 $112.20         $30.69         $27.99         $10.13         $9.87         $15.35         $10.12                                                         
 667650000        662664000        665758000        681768000        686465000        688804000        692741000                                                        
677674000        672493000        676519000        687024000        692267000        695193000        698199000                                                        
                                                                                                        -                                                                                                         

677674000        672493000        676519000        687024000        692267000        695193000        698199000





























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
Total Service Charge

                   From 224ff063ce5e6846e9784daec8ba1fd5ad1bbf17 Mon Sep 17 00:00:00 2001
From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
 <109656750+zakwarlord7@users.noreply.github.com>
Date: Fri, 9 Dec 2022 22:54:41 -0600
Subject: [PATCH] Update openshift.yml

Signed-off-by: ZACHRY T WOODzachryiixixiiwood@gmail.com <109656750+zakwarlord7@users.noreply.github.com>
---
 .github/workflows/openshift.yml | 206 ++++++++++++++++++++++++++++++--
 1 file changed, 197 insertions(+), 9 deletions(-)

diff --git a/.github/workflows/openshift.yml b/.github/workflows/openshift.yml
index 43d0466..14998bc 100644
--- a/.github/workflows/openshift.yml
+++ b/.github/workflows/openshift.yml
@@ -1,7 +1,104 @@
-BEGIN :
+# ## :### ::BEGIN :Run::starts-on :-on :
+-on :
+#!/usr/bin/bash  env :
+GLOW7 :','' '"'.'Docx"'

-GLOW7 
-: 
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
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
+Total Service Charge
+                                                                                                                                 
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                      Q4 2020                              Q4  2019                                                                                
+Cat. No. 11320B                                                                                                                                        Income Statement                                                                                                                                 
+Form 1040 (2021)                                                                                                                                        USD in "000'"s                                                                                                                                
+Reported Normalized and Operating Income/Expense Supplemental Section Repayments for Long Term Debt                        Dec. 31, 2020                        Dec. 31, 2019                                                                                
+Total Revenue as Reported, Supplemental                                                                                                                     Costs and expenses:                                                                                                                                
+Total Operating Profit/Loss as Reported, Supplemental                                                                                                    182527                        161857                                                                                
+Reported Effective Tax Rate                                                                                                                                        Research and development                                                                                                                                
+Reported Normalized Income                                                                                                                                        84732                         71896                                                                                
+Reported Normalized Operating Profit                                                                                                                             27573                         26018                                                                                
+Other Adjustments to Net Income Available to Common Stockholders                                                                                17946                         18464                                                                                
+Discontinued Operations                                                                                                                                               11052                         9551                                                                                
+Basic EPS                                                                                                                                                                   0                               1697                                                                                
+Basic EPS from Continuing Operations                                                                                                                            141303                       127626                                                                                
+Basic EPS from Discontinued Operations                                                                                                                         41224                        34231                                                                                
+Diluted EPS                                                                                                                                                                 6858000000                        5394                                                                                
+Diluted EPS from Continuing Operations                                              total                                                                    Net income                        22677000000                        19289000000                                                                                
+*include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                                                                                
+Basic Weighted Average Shares Outstanding                                                                                                                                                         22677000000                        19289000000                                                                                
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                
+Returned for Signature                                                                                                                                                                                                
+Date.______________09/01/2022                                                                                        
+For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                                                                                        
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+important information                                                                                                                                                                                                                                                                               
+Reviewing Your Statement                                                                        
+Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
+Balancing Your Account Update Your Account Register                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        '
 #This_Repository :WORKSFLOW :'@"worksflow_call-on: dispatch" :-on :On :''
 'use action.js/runners.ios'@crates.u-with :rake.io'"'' that are not certified by GitHub.
 # They are provided by a third-party and are governed by
@@ -507,12 +604,103 @@ $112.20 	$30.67 	$27.99 	$10.13 	$9.87 	$15.33 	$10.12
 $113.88 	$31.15 	$28.44 	$10.21 	$9.96 	$15.49 	$10.20 							
 $112.20 	$30.69 	$27.99 	$10.13 	$9.87 	$15.35 	$10.12 							
 667650000	662664000	665758000	681768000	686465000	688804000	692741000							
-677674000	672493000	676519000	687024000	692267000	695193000	698199000							
-CLI Design Template													
-													
-! Do not edit this template directly. Please make a copy ! 													
- 													
-													
+677674000	672493000	676519000	687024000	692267000	695193000	698199000
+     Business Checking For 24-hour account information, sign on to                                                                        
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
+Total Service Charge
+                                                                                                                                 
+                                                                                                                                
+                                                                                                                                                                                                                                                                
+                                                                                                                                
+                                                                                                                                
++                                                                                                                                      Q4 2020                              Q4  2019                                                                                Cat. No. 11320B                                                                                                                                        Income Statement                                                                                                                                 
+Form 1040 (2021)                                                                                                                                        USD in "000'"s                                                                                                                                
+Reported Normalized and Operating Income/Expense Supplemental Section Repayments for Long Term Debt                        Dec. 31, 2020                        Dec. 31, 2019                                                                                
+Total Revenue as Reported, Supplemental                                                                                                                     Costs and expenses:                                                                                                                                Total Operating Profit/Loss as Reported, Supplemental                                                                                                    182527                        161857                                                                                
+Reported Effective Tax Rate                                                                                                                                        Research and development                                                                                                                                
+Reported Normalized Income                                                                                                                                        84732                         71896                                                                                
+Reported Normalized Operating Profit                                                                                                                             27573                         26018                                                                                
+Other Adjustments to Net Income Available to Common Stockholders                                                                                17946                         18464                                                                                
+Discontinued Operations                                                                                                                                               11052                         9551                                                                                
+Basic EPS                                                                                                                                                                   0                               1697                                                                                
+Basic EPS from Continuing Operations                                                                                                                            141303                       127626                                                                                
+Basic EPS from Discontinued Operations                                                                                                                         41224                        34231                                                                                
+Diluted EPS                                                                                                                                                                 6858000000                        5394                                                                                
+Diluted EPS from Continuing Operations                                              total                                                                    Net income                        22677000000                        19289000000                                                                                *include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                                                                                
+Basic Weighted Average Shares Outstanding                                                                                                                                                         22677000000                        19289000000                                                                                
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                
+Returned for Signature                                                                                                                                                                                                
+Date.______________09/01/2022                                                                                        
+For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                                                                                        
+                                                                                                                                                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+important information                                                                                                                                                                                                                                                                               
+Reviewing Your Statement                                                                        
+Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
+Balancing Your Account Update Your Account Register                                                                        
+                                                                                                                                                
+                                                                        
+                                                                        
+                                                                       
+                                                                                                        
+                                                                                                       
+                                                                                                        
+ACH Web Usataxpymt IRS  240461564036618 00022214903782823 
+Corporate ACH Acctverify Roll By ADP 00022217906234115
+ ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355 
+Corporate Ach Veryifyqbw Intuit  00022222909296656 
+Corporate Ach Veryifyqbw Intuit  00022223912710109 10 Service Charge Period Ending 07/29.2022 36 Returned Item  (nsf) 00022214903782823 36 Returned Item Fee (nsf) 00022222905832355  
+
+GROSS :1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
+ NET 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 
+YTD 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 
+Fed 941 West Subsidiary 2021-09-29  24934000000 25539000000 37497000000 31211000000 30818000000 24934000000 25539000000 21890000000 19289000000 22677000000 24934000000 25539000000 21890000000 19289000000 22677000000 Q4 2020 Q4  2019 Dec. 31, 2020 Dec. 31, 2019 182527 161857 84732 71896 27573 26018 17946 18464  11052 9551 0 1697 141303 127626 41224 34231 6858000000 5394 22677000000 19289000000 22677000000 19289000000 22677000000 19289000000 IRS RECIEVED 37 26-Apr LB Charlotte, NC
+                                                                   
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
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
+Total Service Charge
+                                                                                                                                 
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                      Q4 2020                              Q4  2019                                                                                
+Cat. No. 11320B                                                                                                                                        Income Statement                                                                                                                                 
+Form 1040 (2021)                                                                                                                                        USD in "000'"s                                                                                                                                
+Reported Normalized and Operating Income/Expense Supplemental Section Repayments for Long Term Debt                        Dec. 31, 2020                        Dec. 31, 2019                                                                                
+Total Revenue as Reported, Supplemental                                                                                                                     Costs and expenses:                                                                                                                                
+Total Operating Profit/Loss as Reported, Supplemental                                                                                                    182527                        161857                                                                                
+Reported Effective Tax Rate                                                                                                                                        Research and development                                                                                                                                
+Reported Normalized Income                                                                                                                                        84732                         71896                                                                                
+Reported Normalized Operating Profit                                                                                                                             27573                         26018                                                                                
+Other Adjustments to Net Income Available to Common Stockholders                                                                                17946                         18464                                                                                
+Discontinued Operations                                                                                                                                               11052                         9551                                                                                
+Basic EPS                                                                                                                                                                   0                               1697                                                                                
+Basic EPS from Continuing Operations                                                                                                                            141303                       127626                                                                                
+Basic EPS from Discontinued Operations                                                                                                                         41224                        34231                                                                                
+Diluted EPS                                                                                                                                                                 6858000000                        5394                                                                                
+Diluted EPS from Continuing Operations                                              total                                                                    Net income                        22677000000                        19289000000                                                                                
+*include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                                                                                
+Basic Weighted Average Shares Outstanding                                                                                                                                                         22677000000                        19289000000                                                                                
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                
+Returned for Signature                                                                                                                                                                                                
+Date.______________09/01/2022                                                                                        
+For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                                                                                        
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+                                                                                                                                
+important information                                                                                                                                                                                                                                                                               
+Reviewing Your Statement                                                                        
+Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
+Balancing Your Account Update Your Account Register                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
 													
 													
 													                                                                                                             
                                                                                                                                                                                                                                                                
                                                                                                                                
                                                                                                                                
+                                                                                                                                      Q4 2020                              Q4  2019                                                                                Cat. No. 11320B                                                                                                                                        Income Statement                                                                                                                                 
Form 1040 (2021)                                                                                                                                        USD in "000'"s                                                                                                                                
Reported Normalized and Operating Income/Expense Supplemental Section Repayments for Long Term Debt                        Dec. 31, 2020                        Dec. 31, 2019                                                                                
Total Revenue as Reported, Supplemental                                                                                                                     Costs and expenses:                                                                                                                                Total Operating Profit/Loss as Reported, Supplemental                                                                                                    182527                        161857                                                                                
Reported Effective Tax Rate                                                                                                                                        Research and development                                                                                                                                
Reported Normalized Income                                                                                                                                        84732                         71896                                                                                
Reported Normalized Operating Profit                                                                                                                             27573                         26018                                                                                
Other Adjustments to Net Income Available to Common Stockholders                                                                                17946                         18464                                                                                
Discontinued Operations                                                                                                                                               11052                         9551                                                                                
Basic EPS                                                                                                                                                                   0                               1697                                                                                
Basic EPS from Continuing Operations                                                                                                                            141303                       127626                                                                                
Basic EPS from Discontinued Operations                                                                                                                         41224                        34231                                                                                
Diluted EPS                                                                                                                                                                 6858000000                        5394                                                                                
Diluted EPS from Continuing Operations                                              total                                                                    Net income                        22677000000                        19289000000                                                                                *include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                                                                                
Basic Weighted Average Shares Outstanding                                                                                                                                                         22677000000                        19289000000                                                                                
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                
Returned for Signature                                                                                                                                                                                                
Date.______________09/01/2022                                                                                        
For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                
                                                                                                                                
                                                                                                                                
                                                                                                                                
                                                                                                                                
important information                                                                                                                                                                                                                                                                               
Reviewing Your Statement                                                                        
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
Balancing Your Account Update Your Account Register                                                                        
                                                                                                                                                
                                                                        
                                                                        
                                                                       
                                                                                                        
                                                                                                       
                                                                                                        
ACH Web Usataxpymt IRS  240461564036618 00022214903782823 
Corporate ACH Acctverify Roll By ADP 00022217906234115
 ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355 
Corporate Ach Veryifyqbw Intuit  00022222909296656 
Corporate Ach Veryifyqbw Intuit  00022223912710109 10 Service Charge Period Ending 07/29.2022 36 Returned Item  (nsf) 00022214903782823 36 Returned Item Fee (nsf) 00022222905832355  
GROSS :1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
 NET 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 
YTD 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 
Fed 941 West Subsidiary 2021-09-29  24934000000 25539000000 37497000000 31211000000 30818000000 24934000000 25539000000 21890000000 19289000000 22677000000 24934000000 25539000000 21890000000 19289000000 22677000000 Q4 2020 Q4  2019 Dec. 31, 2020 Dec. 31, 2019 182527 161857 84732 71896 27573 26018 17946 18464  11052 9551 0 1697 141303 127626 41224 34231 6858000000 5394 22677000000 19289000000 22677000000 19289000000 22677000000 19289000000 IRS RECIEVED 37 26-Apr LB Charlotte, NC
jobs:
  assign:
    uses: open-sauced/open-sauced/.github/workflows/triage.yml@main
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

---
title: Access permissions on GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'With roles, you can control who has access to your accounts and resources on {% data variables.product.product_name %} and the level of access each person has.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
---

## About access permissions on {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %} 

Roles work differently for different types of accounts. For more information about accounts, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

## Personal accounts

A repository owned by a personal account has two permission levels: the *repository owner* and *collaborators*. For more information, see "[Permission levels for a personal account repository](/articles/permission-levels-for-a-user-account-repository)."

## Organization accounts

Organization members can have *owner*{% ifversion fpt or ghec %}, *billing manager*,{% endif %} or *member* roles. Owners have complete administrative access to your organization{% ifversion fpt or ghec %}, while billing managers can manage billing settings{% endif %}. Member is the default role for everyone else. You can manage access permissions for multiple members at a time with teams. For more information, see:
- "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[About teams](/articles/about-teams)"

## Enterprise accounts

{% ifversion fpt %}
{% data reusables.gated-features.enterprise-accounts %} 

For more information about permissions for enterprise accounts, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %}
*Enterprise owners* have ultimate power over the enterprise account and can take every action in the enterprise account.{% ifversion ghec or ghes %} *Billing managers* can manage your enterprise account's billing settings.{% endif %} Members and outside collaborators of organizations owned by your enterprise account are automatically members of the enterprise account, although they have no access to the enterprise account itself or its settings. For more information, see "[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghec %}
If an enterprise uses {% data variables.product.prodname_emus %}, members are provisioned as new personal accounts on {% data variables.product.prodname_dotcom %} and are fully managed by the identity provider. The {% data variables.enterprise.prodname_managed_users %} have read-only access to repositories that are not a part of their enterprise and cannot interact with users that are not also members of the enterprise. Within the organizations owned by the enterprise, the {% data variables.enterprise.prodname_managed_users %} can be granted the same granular access levels available for regular organizations. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% endif %}
{% endif %}

## Further reading

- "[Types of {% data variables.product.prodname_dotcom %} accounts](/articles/types-of-github-accounts)"
