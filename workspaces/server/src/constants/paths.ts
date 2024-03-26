import path from 'path';

import { pnpmWorkspaceRootSync as findWorkspaceDirSync } from '@node-kit/pnpm-workspace-root';

const WORKSPACE_DIR = findWorkspaceDirSync(process.cwd());

export const CLIENT_STATIC_PATH = path.resolve(WORKSPACE_DIR, './workspaces/client/dist');
