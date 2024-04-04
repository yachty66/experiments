import { register } from '@tauri-apps/plugin-global-shortcut';

async function setupGlobalShortcut() {
  await register('CommandOrControl+Shift+C', () => {
    console.log('Shortcut triggered');
  });
}

setupGlobalShortcut();