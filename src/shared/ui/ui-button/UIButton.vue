<template>
	<button
		class="ui-button"
		@click="emit('click')"
		:class="[`ui-button--${props.type}`]"
	>
		<slot>{{ props.text }}</slot>
	</button>
</template>

<script setup lang="ts">
	export interface IProps {
		type?: "primary" | "secondary";
		disable?: boolean;
		text?: string;
	}

	const props = withDefaults(defineProps<IProps>(), {
		disable: false,
		type: "primary",
		text: "i button",
	});

	const emit = defineEmits<{
		(e: "click"): void;
	}>();
</script>

<style lang="scss" scoped>
	.ui-button {
		padding: 12px 16px;
		border-radius: 8px;

		font-size: 14px;
		font-weight: 400;
		line-height: 114%;

		border: none;
		outline: none;

		cursor: pointer;
		transition: all ease 0.2s;

		&--primary {
			background: var(--color-primary, #862fde);
			color: var(--color-text-white, #fff);
			&:hover {
				background: rgb(102, 35, 168);
			}
		}
		&--secondary {
			background: var(--color-text-gray-2);
			color: var(--color-text-dark);
			&:hover {
				background: #c1c1c4;
			}
		}
	}
</style>
