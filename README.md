# VirgoCX Submission

## Setup Scaffolding

### Summary

1. Engine Locking: The project is set to be using 'npm' only as package manager, and have some version requirement for node and npm, this is for the consistency reason.
2. Consistent VSCode Settings: .vscode would overwrite your vscode settings in order for developers have consistent coding environment.
3. Prettier & ESlint: style consistency.
4. Commitlint & Husky Hooks: commit message consistency

### Node version

The project is using Node `20.9.0` and controlling the node version using `nvm`.
Please refer to the following to make sure the correct Node version is in use.

1. Run `nvm install 20.9.0` to install the correct `node` version.
2. Run `nvm use` to switch to the correct version

### Dependency installation

Run `npm i`

### Commit

For activity manage and tracking purpose, we use commit-lint to built the commit rules for the commit message.

Pay attention:

- `Must have a space between colon and commit message!`
- `Must add subject/scope!`

Subject/Scope will be:
| Subject/Scope | Description |
|-----------------|:---------------------|
| build | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) |
| ci | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  
 | feat | A new feature, new functionality |  
 | fix | A bug fix |  
 | perf | A code change that improves performance |  
 | refactor | A code change that neither fixes a bug nor adds a feature |  
 | style | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |  
 | test | Adding missing tests or correcting existing tests |  
 | to be deleted | Test for commit lint |

Commit example:

```
git commit -m "feat: added a new feature"
```
