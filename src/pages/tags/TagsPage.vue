<template>
	<ModalWindow title="Добавление тегов" v-model="isModal">
		<template #description>
			<p>
				Вы можете добавить ещё
				<span class="available-amount">20</span>
			</p>
		</template>
		<AddTags></AddTags>
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
	import AddTags from "features/add-tags";
	import { ref } from "vue";
	import { useStore } from "vuex";
	const store = useStore();
	const isModal = ref(false);
	const showModal = () => {
		isModal.value = true;
	};

	const saveTags = (closeModal: Function) => {
		closeModal();
	};
</script>

<style lang="scss">
	.available-amount {
		color: var(--color-text-gray, #404144);
		font-size: 14px;
		font-weight: 600;
		line-height: 20px;
	}
</style>
