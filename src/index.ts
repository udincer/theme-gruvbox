import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for the Rahlir Gruvbox
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@rahlir/theme-gruvboc:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    manager.register({
      name: 'Rahlir Gruvbox',
      isLight: false,
      load: function() {
        return manager.loadCSS('@rahlir/theme-gruvbox/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
