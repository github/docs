---
title: Setting Up SSH Authentication for GitHub
intro: 'Learn how to securely connect to GitHub using SSH keys for seamless repository access and code pushing'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  enterprise-cloud: '*'
type: tutorial
topics:
  - SSH
  - Authentication
  - GitHub
  - Security
---

# Step-by-Step: Setting Up SSH Authentication for GitHub

This guide explains how to set up SSH and push code to GitHub step by step.

## 1. Generate SSH Key

Create a new SSH key for authentication.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Press Enter to save the key in the default location (~/.ssh/id_ed25519).

Add a passphrase for extra security (optional).

## 2. Add SSH Key to SSH Agent

Start the SSH agent and add your private key for automatic authentication.

```bash
eval "$(ssh-agent -s)"      # Start the SSH agent
ssh-add ~/.ssh/id_ed25519   # Add the private key
```

## 3. Copy Public Key

Copy your public key to add it to GitHub.

```bash
cat ~/.ssh/id_ed25519.pub   # Show the public key
```

## 4. Add SSH Key to GitHub

Go to GitHub: Settings > SSH and GPG Keys > New SSH Key.

Paste your public key into the provided box and give it a title.

## 5. Test SSH Connection

Verify the connection to GitHub.

```bash
ssh -T git@github.com
```

You should see a message like: Hi username! You've successfully authenticated, but GitHub does not provide shell access.

## 6. Set SSH URL for Existing Repository

If the repository already exists and uses HTTPS, change it to SSH.

```bash
git remote set-url origin git@github.com:username/repository.git
```

## 7. Clone Repository (Optional)

To download a repository using SSH:

```bash
git clone git@github.com:username/repository.git
```

## 8. Make Changes and Push

Stage your changes:

```bash
git add .
```

Commit your changes with a message:

```bash
git commit -m "Your commit message"
```

Push the changes to GitHub:

```bash
git push origin main
```