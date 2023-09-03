import { createStore } from "vuex";
import { tagsModel } from "entities/tags";
import { isDevEnv } from "shared/config";

export const store = createStore({
	strict: !!isDevEnv,
	modules: {
		tagsModel: tagsModel.module,
	},
});
