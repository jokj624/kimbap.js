import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

import ModuleCompiler from './parser/index.js';

class KimbapBundler {
  constructor({ entry, output, ast }) {
    this.entry = entry;
    this.output = output;
  }

  // FIXME : 모듈이 정상적으로 컴파일 되는지 테스트 하기 위한 용도
  build() {
    const moduleCompiler = new ModuleCompiler(this.entry);
    const compiledModule = moduleCompiler.run(ast);
    console.log(compiledModule);
  }
}

// entry 를 밖에서 해줘야함
// fileReader 가 여기 있는 Options
const bundlerOptions = {
    entry: resolve(__dirname, "./origin/index.js"),
    output: {
        path: join(__dirname, "./dist"),
        fileName: "main.js",
    },
}

const bundler = new KimbapBundler(bundlerOptions);
bundler.build();