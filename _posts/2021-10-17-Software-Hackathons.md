---
layout: post
title: Software Installation for Hackathons
subtitle: An elevator pitch is a brief summary of an idea or application that explains its concepts in a short amount of time. 
cover-img: /assets/img/elevator_pitch.png
thumbnail-img: /assets/img/chocolatey.svg
share-img:
tags: [tech, c4ac]
---

To get some logistics out of the way, here are some common tools that you should install on your computer, which we will be using soon. We will be going over how to do this in the meeting live, but it would be good practice to attempt this yourself first.

### Windows Users:

[Chocolatey](https://chocolatey.org/install). Install instructions using the command prompt in the link, this is a software management solution that allows you to install software with command lines. google “choco install xxx” to find installation commands. For example, googling “choco install git” gets me the expected “choco install git”, which I can run to install git.

### Mac Users:

[Homebrew](https://brew.sh/). Similar concept but for MacOS. Search the command here, for example searching “vs code” would return “brew install –cask visual-studio-code”

### Everyone:

[Git](https://community.chocolatey.org/packages/git) : a free and open source distributed version control system. Lets us manage code written and contributed by multiple team members.

VS Code: Fast IDE (integrated development environment) with thousands of free plug-ins. Developers’ version of Notepad/TextEdit.

Node.js : Backend/Server-side JS platform with hundreds of thousands of open source packages on npm. Intro to web people know what’s up.

[Miniconda](https://community.chocolatey.org/packages/miniconda3) : Installs the python programming language and conda. Simply run 

choco install miniconda3 –params=”‘/AddToPath:1′” 

Or 

brew install –cask  miniconda 

(if this doesn’t work, miniconda and most of these tools also have a graphical installer you can use)