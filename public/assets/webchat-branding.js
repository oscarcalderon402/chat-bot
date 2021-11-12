var brandColor1 = "#1976d2";
var brandColor2 = "#ECEDF1";
var brandTextColor = "black";

var personalizedColors = {
  darkBlueBackground: "#0000FF",
  whiteText: "#FFFFFF",
  entryPointBackground: "#0000FF",
  lighterBackground: "#ecedf1",
  primaryButtonBackground: "#1976d2",
  primaryButtonColor: "#FFFFFF",
  secondaryButtonBackground: "#6e7180",
  secondaryButtonColor: "#FFFFFF",
};

var brandMessageBubbleColors = function(bgColor) {
  return {
    Bubble: {
      background: bgColor,
      color: brandTextColor,
    },
    Avatar: {
      background: bgColor,
      color: brandTextColor,
    },
    Header: {
      color: brandTextColor,
    },
  };
};

var brandedColors = {
  Chat: {
    MessageListItem: {
      FromOthers: brandMessageBubbleColors(brandColor2),
      FromMe: brandMessageBubbleColors(brandColor1),
    },
    MessageInput: {
      Button: {
        background: brandColor1,
        color: brandTextColor,
      },
    },
    MessageCanvasTray: {
      Container: {
        background: personalizedColors.darkBlueBackground,
        color: personalizedColors.whiteText,
      },
    },
  },

  MainHeader: {
    Container: {
      background: personalizedColors.darkBlueBackground,
      color: personalizedColors.whiteText,
    },
    Logo: {
      fill: brandTextColor,
    },
  },

  EntryPoint: {
    Container: {
      background: personalizedColors.entryPointBackground,
      color: personalizedColors.whiteText,
      height: "65px",
      width: "65px",
      marginTop: "40px",
      borderRadius: "50%",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
      transform: "scale(1)",
      animation: "pulse 2s infinite",
      "@keyframes pulse": {
        "0%": {
          transform: "scale(0.95)",
          boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.7)",
        },

        "70%": {
          transform: "scale(1)",
          boxShadow: " 0 0 0 10px rgba(0, 0, 0, 0)",
        },

        "100%": {
          transform: "scale(0.95)",
          boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
        },
      },
    },
  },

  PreEngagementCanvas: {
    Container: {
      background: personalizedColors.lighterBackground,
    },

    Form: {
      SubmitButton: {
        background: personalizedColors.primaryButtonBackground,
        color: personalizedColors.whiteText,
      },
    },
  },
};
