export class Theme {
  constructor(name, colorBackground, colorBackgroundTaskbar,
              colorTags, colorInput, colorFont, colorConsoleFont, colorButton, colorButtonActive) {
    this.name = name;
    this.colorBackground = colorBackground;
    this.colorBackgroundTaskbar = colorBackgroundTaskbar;
    this.colorTags = colorTags;
    this.colorInput = colorInput;
    this.colorFont = colorFont;
    this.colorConsoleFont = colorConsoleFont;
    this.colorButton = colorButton;
    this.colorButtonActive = colorButtonActive;
  }

  name: string;

  colorBackground: string;
  colorConsoleFont: string;
  colorBackgroundTaskbar: string;
  colorTags: string;
  colorInput: string;
  colorFont: string;
  colorButton: string;
  colorButtonActive: string;
}
