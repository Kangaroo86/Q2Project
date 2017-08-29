import { configure } from '@storybook/react';

function loadStories() {
  require('../src/index.css');
  require('../src/component/MessageComponent.story.js');
  require('../src/component/MessagesComponent.story.js');
  require('../src/component/ToolbarComponent.story.js');
  require('../src/component/ComposeFormComponent.story.js');
  require('../src/component/InboxPageLayout.story.js');
}
configure(loadStories, module);
