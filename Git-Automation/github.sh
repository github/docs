#! /bin/bash

### Git automation script for automating git clone, push and pull ###
### Created by PIYUSH-MISHRA-00 ###

while :
do
echo
echo "Which Git operation you want to perform ?"
echo
echo "GitHub username: $username"
echo "Local repository name: $local_repo"
echo "Remote repository name: $remote"
echo "The default branch you want to work with: $branch"
echo "GPG key value: $GPG"
echo
echo -e "\t(0) Configure (configures the script for continuous uses)"
echo -e "\t(1) Clone"
echo -e "\t(2) Pull"
echo -e "\t(3) Push"
echo -e "\t(4) Exit"
echo -n "Enter your choice [0-4]: "

read choice

case $choice in

 0) echo "Enter the values for future use of the script..."
    echo
    echo "Enter GitHub username: "
    read username
    export username
    echo "Your username is: $username"
    echo
    echo "Local repository name: "
    read local_repo
    export local_repo
    echo "Your local repository name is: $local_repo"
    echo 
    echo "Remote repository name: "
    read remote
    export remote
    echo "Remote repository name is: $remote"
    echo
    echo "The default branch you want to work with: "
    read branch
    export branch
    echo "The default branch you want to work with: $branch"
    echo
    echo "GPG key value is: $GPG"
    echo
    echo "GPG key id for signed commits(leave blank if you don't want signed commits)"
    read GPG
    export GPG
    echo "GPG key value is: $GPG"
    echo
   ;;

 1) echo "Cloning from GitHub"
    echo
    echo "Enter the repository https url: "
    read clone_url
    git clone $echo $clone_url;;

 2) echo "Pulling from GitHub"
    echo
    echo "Enter the repository https url: "
    read pull_url
    echo
    echo $pull_url
    echo
    while :
    do
    echo "Which type of Git Pull you want ?"
    echo -e "\t(1) Merge (the default strategy)"
    echo -e "\t(2) Rebase"
    echo -e "\t(3) Fast-forward only"
    echo -e "\t(4) Return to main menu"
    echo -n "Enter your choice [1-4]: "
    read pull_choice
    case $pull_choice in
     1) 
     git config pull.rebase false 
     git pull $echo "$pull_url";;
     2) 
     git config pull.rebase true 
     git pull $echo "$pull_url";;
     3) 
     git config pull.ff only 
     git pull $echo "$pull_url";;
     4)
     break
     ;;
        *) 
        echo "Invalid operation"
        ;;
    esac
    done
    ;;

 3) echo "Pushing to GitHub" 
    declare -A map

    map[$echo"$local_repo"] = $echo"$remote"

    git config --global user.name $echo"$username" 
    git config --global user.signingkey $echo$GPG 
    git init
    git add .
    echo "Enter Commit message: "
    read message

    git commit -m $echo "$message" 

    for i in "${!map[@]}"
      do
      git remote add $i https://github.com/$echo$username/${map[$i]}.git 
      git push -u $i $echo$branch 
      done

      git push;;

 4) echo "Quitting..."
    exit
    ;;

 *) echo "Invalid operation"
    ;;

 esac
 done   