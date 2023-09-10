import UiInput from "shared/ui/ui-input";
import UiButton from "shared/ui/ui-button";
import UiChips from "shared/ui/ui-chips";

export default function getGlobalComponents(app: any) {
	app.component("UiButton", UiButton);
	app.component("UiInput", UiInput);
	app.component("UiChips", UiChips);
}
