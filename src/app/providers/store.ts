import { createStore } from "vuex";
import { tagsModel } from "entities/tags";
import { isDevEnv } from "shared/config";

export const store = createStore({
	strict: !!isDevEnv,
	modules: {
		tags: tagsModel.module,
	},
});
