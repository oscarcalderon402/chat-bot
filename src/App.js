import React from "react";
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import customState from "./store/state";
import customReducer from "./store/reducers/customReducer";

import ClickableMessages from "./components/clickableMessages";

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    const { configuration } = props;

    // Alter the predefined Message
    FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage.authorName =
      "Ualett bot";
    FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage.body =
      "What's your language";

    // // Alter the Welcome Message
    // FlexWebChat.MessageList.WelcomeMessage =
    //   "Welcome to Awesome Co, I hope you are having a wonderful day!, ";

    // Chat Header Customizations
    FlexWebChat.MainHeader.defaultProps.imageUrl =
      "https://ualett.com/ualett-logo.svg";
    // FlexWebChat.MainHeader.defaultProps.titleText = "Awesome Co";
    FlexWebChat.MainHeader.defaultProps.showTitle = true;

    FlexWebChat.Manager.create(configuration)
      .then((manager) => {
        // set some variables on the global window object
        // these help us determine if flex has loaded or not
        window.Twilio = window.Twilio || {};
        FlexWebChat.manager = manager;
        window.Twilio.FlexWebChat = FlexWebChat;

        setTimeout(() => {
          return (manager.store.getState().flex.session.isEntryPointExpanded = true);
        }, [2000]);
        //manager.store.getState().flex.session.isEntryPointExpanded = false;
        manager.store.getState().flex.session.ignorePersisted = false;

        // Register the custom redux/reducer
        customState.addReducer("custom", customReducer);
        manager.store.replaceReducer(customState.combinedReducers());

        this.setState({
          manager,
        });

        // Add the clickable messages
        FlexWebChat.MessageInput.Content.add(
          <ClickableMessages key="ClickableMessages" />,
          { sortOrder: -1 }
        );
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { manager, error } = this.state;

    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

export default App;
