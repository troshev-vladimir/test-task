import { reactive, ref, watch } from "vue";
import { Tag, Category, Subcategory, Good } from "entities/tags/model/types";
import { useStore } from "vuex";

export default function useTags() {
	const selectedTags = ref<Set<string>>(new Set());
	const tagName = ref("");
	const store = useStore();
	let appropriateTags = ref<string[]>([]);

	function fetchAllTags() {
		store.dispatch("tags/fetchAllTags");
	}

	function selectTag(tag: string) {
		selectedTags.value.add(tag);
	}
	function removeTag(tag: string) {
		selectedTags.value.delete(tag);
	}

	function filterCategory(categories: Category[]) {
		categories.forEach((category) => {
			if (isNameAppropriate(category.name, tagName.value)) {
				appropriateTags.value.push(category.name);
				return;
			}
			filterSubcategory(category.subcategories);
		});
	}

	function filterSubcategory(subcategories: Subcategory[]) {
		subcategories.forEach((subcategory) => {
			if (isNameAppropriate(subcategory.name, tagName.value)) {
				appropriateTags.value.push(subcategory.name);
				return;
			}
			filterTag(subcategory.tags);
		});
	}

	function filterTag(tags: Tag[]) {
		tags.forEach((tag) => {
			if (isNameAppropriate(tag.name, tagName.value)) {
				appropriateTags.value.push(tag.name);
				return;
			}

			tag.aliases.forEach((alias) => {
				if (isNameAppropriate(alias, tagName.value)) {
					appropriateTags.value.push(tag.name);
					return;
				}
			});
		});
	}

	function isNameAppropriate(name: string, string: string): boolean {
		return name.toLowerCase().includes(string.toLowerCase());
	}

	watch(tagName, (value) => {
		appropriateTags.value = [];
		if (!value.length) return;

		// TODO: Добавить дебаунс
		store.state.tags.tags.forEach((good: Good) => {
			filterCategory(good.categories);
		});

		store.commit("tags/setSelectedTags", selectedTags.value);
	});

	return {
		fetchAllTags,
		selectedTags,
		selectTag,
		removeTag,
		tagName,
		appropriateTags,
	};
}
