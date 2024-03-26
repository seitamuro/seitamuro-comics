import * as path from 'path';

import { packageDirectory } from 'pkg-dir';

import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

export default defineConfig(async (): Promise<Options[]> => {
  const PACKAGE_DIR = await packageDirectory();
  const OUTPUT_DIR = path.resolve(PACKAGE_DIR, 'dist');

  return [
    {
      bundle: true,
      clean: true,
      entry: {
        client: path.resolve(PACKAGE_DIR, 'src/index.tsx'),
      },
      format: 'esm',
      metafile: true,
      minify: false,
      noExternal: [/.*/],
      outDir: OUTPUT_DIR,
      shims: true,
      sourcemap: true,
      splitting: true,
      platform: 'browser',
      target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
      treeshake: true,
    },
  ];
});
