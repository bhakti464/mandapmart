# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## GitHub

1. Verify You Are on the Correct Branch
    git checkout update-Frontend
    git status
If changes exist in update-Frontend, push that branch instead:
    git push origin update-Frontend

2. Merge update-Frontend into master
    git checkout master
    git merge update-Frontend
    git push origin master

3. Force Git to Detect Changes
If you know there are changes but Git isn't detecting them, try:
    git touch temp.txt
    git add -A
    git commit -m "Trigger update"
    git push origin master
Then delete temp.txt and commit again.

4. Check If Your Local Code Matches GitHub
    git log --oneline --graph --decorate --all
This shows your commit history. If you don't see recent commits, they might be in another branch.
