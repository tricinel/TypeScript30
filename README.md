# TypeScript30

This is an exercise of transforming Wes Bos's the absolutely amazing JavaScript 30 Day Challenge coded solutions from JavaScript to [TypeScript][typescriptlang].

You can view the original JavaScript solutions [here][javascript30-github] and grab the course for **free** from [here][javascript30-course].

## Installing this thing

Because it's in TypeScript, we need to compile to JavaScript before running it in the browser. The instructions below will help you get started with compiling TS to JS, watching the files for changes and spinning up a local web server as well.

1. Clone the repo `git clone` and `cd` into it.
2. Install dependencies `yarn` or `npm install`.
3. In one terminal window, run `yarn server`. This will spin up the local server using [serve][serve]. The URL is automatically copied to your clipboard, so just open your browser and paste it in the address bar. Go to the `dist` folder.
4. In another terminal window, run `yarn watch`. This will compile the TS from `src` into `dist` and watch the files for changes.

Happy coding!

[typescriptlang]: https://www.typescriptlang.org/
[javascript30-github]: https://github.com/wesbos/JavaScript30
[javascript30-course]: https://javascript30.com/
[serve]: https://npm.im/serve
