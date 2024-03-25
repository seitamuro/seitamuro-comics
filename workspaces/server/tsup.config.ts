import * as path from 'path';

import { packageDirectory } from 'pkg-dir';

import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

export default defineConfig(async (): Promise<Options[]> => {
  const PACKAGE_DIR = await packageDirectory();
  const OUTPUT_DIR = path.resolve(PACKAGE_DIR, 'dist');

  return [
    {
      clean: true,
      entry: {
        server: path.resolve(PACKAGE_DIR, 'src/index.ts'),
      },
      format: 'cjs',
      metafile: true,
      minify: false,
      noExternal: [/@comic\/.*/],
      outDir: OUTPUT_DIR,
      shims: true,
      sourcemap: true,
      splitting: false,
      target: 'node18',
      treeshake: false,
    },
  ];
});
