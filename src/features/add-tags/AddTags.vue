<template>
	<UiInput
		:disabled="loadding"
		label="Название тега"
		v-model="tagName"
	></UiInput>

	<div class="available-tags" v-if="appropriateTags.length">
		<UiChips
			v-for="(tag, index) in appropriateTags"
			:key="index"
			@click="selectTag(tag)"
			>{{ tag }}</UiChips
		>
		<!-- <div class="not-found">По запросу ничего не найдено</div> -->
	</div>

	<div class="selected-tags" v-if="selectedTags.size">
		<UiChips
			clearable
			:selectable="false"
			v-for="(tag, index) in selectedTags"
			:key="index"
			@clear="removeTag(tag)"
		>
			{{ tag }}
		</UiChips>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import UiInput from "shared/ui/ui-input";
	import UiChips from "shared/ui/ui-chips";
	import useTags from "./composables/useTags.ts";

	const {
		tagName,
		fetchAllTags,
		appropriateTags,
		selectTag,
		selectedTags,
		removeTag,
	} = useTags();

	const loadding = ref(false);

	onMounted(async () => {
		loadding.value = true;
		await fetchAllTags();
		loadding.value = false;
	});
</script>
<style lang="scss">
	.ui-input {
		margin-bottom: 20px;
	}

	.available-tags {
		display: flex;
		flex-wrap: wrap;
		column-gap: 8px;
		row-gap: 9px;
		padding-bottom: 24px;
	}

	.selected-tags {
		display: flex;
		flex-wrap: wrap;
		column-gap: 8px;
		row-gap: 9px;

		padding-top: 24px;
		padding-bottom: 24px;
		border-top: 1px solid #ecedf2;
	}
</style>
