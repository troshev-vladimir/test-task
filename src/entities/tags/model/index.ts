import getAll from "../api/tags";
import { Tag } from "./types";

export const module = {
	namespaced: true,
	state: {
		tags: null as Tag[] | null,
		selectedTags: null as Tag[] | null,
	},
	getters: {},
	mutations: {
		setTags(state: any, tags: Tag[]) {
			state.tags = tags;
		},
		setSelectedTags(state: any, selectedTags: Tag[] | null) {
			state.selectedTags = selectedTags;
		},
	},
	actions: {
		async fetchAllTags({ commit }: any) {
			try {
				const tags = await getAll();
				commit("setTags", tags);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
