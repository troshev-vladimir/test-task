<template>
	<ModalWindow title="Добавление тегов" v-model="isModal">
		<template #description>
			<p>
				Вы можете добавить ещё
				<span class="available-amount">20</span>
			</p>
		</template>

		<UiInput label="Название тега" v-model="tagName"></UiInput>

		<div class="available-tags">
			<UiChips v-for="(i, index) in 20" :key="index">Asdasd {{ i }}</UiChips>
		</div>

		<div class="selected-tags">
			<UiChips
				clearable
				:selectable="false"
				v-for="(i, index) in 20"
				:key="index"
			>
				Asdasd {{ i }}
			</UiChips>
		</div>

		<template #actions="scoped">
			<UIButton @click="saveTags(scoped.close)">Сохранить</UIButton>
			<UIButton @click="scoped.close()" type="secondary">Отмена</UIButton>
		</template>
	</ModalWindow>
	<UIButton @click="showModal()">Выбрать теги</UIButton>
</template>

<script setup lang="ts">
	import ModalWindow from "widgets/modal-window";
	import UIButton from "shared/ui/ui-button";
	import { ref } from "vue";
	import UiInput from "shared/ui/ui-input";
	import UiChips from "shared/ui/ui-chips";

	const isModal = ref(false);
	const showModal = () => {
		isModal.value = true;
	};

	const saveTags = (closeModal: Function) => {
		closeModal();
	};

	const tagName = ref("");
</script>

<style lang="scss">
	.available-amount {
		color: var(--color-text-gray, #404144);
		font-size: 14px;
		font-weight: 600;
		line-height: 20px;
	}

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
