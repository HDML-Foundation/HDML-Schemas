#!/bin/bash

# Repository MUST be added to the trusted repos by clicking on "Manage
# unsafe repositories" button and picking it up from the dropdown (for
# VSCode).

git config core.sshCommand "$(which ssh) -i ~/.ssh/hdml.github"