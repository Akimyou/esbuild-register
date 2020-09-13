const fs = require('fs');
const { buildSync } = require('esbuild')
const testTsxContent = fs.readFileSync('./test-tsx.tsx').toString()

const { warnings, outputFiles } = buildSync({
  tsconfig: './tsconfig.json',
  entryPoints: ['./test-tsx.tsx'],
//   stdin: {
//       contents: testTsxContent,
//       loader: 'tsx',
//   },
  write: false,
})

const js = new TextDecoder('utf-8').decode(
  (_b =
    outputFiles === null || outputFiles === void 0
      ? void 0
      : outputFiles.find((_) => _)) === null || _b === void 0
    ? void 0
    : _b.contents,
)
console.log(js)
