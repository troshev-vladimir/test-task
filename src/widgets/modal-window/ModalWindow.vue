<template>
	<teleport to="#modal-window">
		<div class="overlay" @click="closeModal" v-if="isVisible"></div>
		<div class="modal-window" v-if="isVisible">
			<div class="header">
				<h1 class="title">{{ title }}</h1>
				<p class="description">
					<slot name="description">{{ description }}</slot>
				</p>
			</div>
			<div class="content">
				<slot />
			</div>
			<div class="actions">
				<slot name="actions" :close="closeModal"></slot>
			</div>
		</div>
	</teleport>
</template>

<script setup lang="ts">
	import { computed } from "vue";

	export interface IProps {
		modelValue: boolean;
		title?: string;
		description?: string;
	}
	const props = withDefaults(defineProps<IProps>(), {
		modelValue: false,
	});

	const emit = defineEmits({});

	const isVisible = computed<boolean>({
		get() {
			return props.modelValue;
		},
		set(value: boolean) {
			emit("update:modelValue", value);
		},
	});

	function closeModal() {
		isVisible.value = false;
	}
</script>

<style lang="scss" scoped>
	.modal-window {
		root: &;
		min-width: 540px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10px;
		background-color: var(--color-white, #fff);
		padding: 40px;

		.header {
			padding-bottom: 20px;
			border-bottom: 1px solid #ecedf2;

			.title {
				color: var(--color-text-dark, #16171b);
				font-size: 16px;
				font-weight: 600;
				line-height: 20px;
				margin-bottom: 12px;
			}
			.description {
				color: var(--color-text-gray, #8c8f97);
				font-size: 14px;
				font-weight: 500;
				line-height: 142%;
			}
		}

		.content {
			padding-top: 40px;
		}

		.actions {
			padding-top: 40px;
			border-top: 1px solid #ecedf2;

			:slotted(*):not(:last-child) {
				margin-right: 20px;
			}
		}
	}
	.overlay {
		display: block;
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		opacity: 0.4;
		background-color: var(--color-dark);
	}
</style>
