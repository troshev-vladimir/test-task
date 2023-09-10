<template>
	<div class="ui-input">
		<input
			v-model="localValue"
			type="text"
			:disabled="disabled"
			class="native-input"
			:class="{ active: isFilled }"
		/>
		<div class="label">{{ label }}</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from "vue";

	export interface Props {
		label: string;
		modelValue: string | number;
		disabled: boolean;
	}
	const props = withDefaults(defineProps<Props>(), { disabled: false });
	const emit = defineEmits(["update:modelValue"]);

	const localValue = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		},
	});
	const isFilled = computed(() =>
		typeof localValue.value === "number" ? true : localValue.value.length
	);
</script>

<style lang="scss">
	.ui-input {
		position: relative;

		.native-input {
			border-radius: 8px;
			border: 2px solid;
			border-color: var(--color-text-gray);
			background: var(--color-white, #fff);
			padding: 14px 56px 14px 16px;

			&:focus,
			&.active {
				outline: none;

				& + .label {
					font-size: 12px;
					top: 0;
					left: 16px;
					transform: translateY(-50%);
				}
			}

			&:focus {
				border-color: var(--color-primary);

				& + .label {
					color: var(--color-primary, #862fde);
				}
			}
		}

		.label {
			position: absolute;
			top: 50%;
			left: 16px;
			transform: translateY(-50%);
			background-color: #fff;
			padding: 0 4px;
			color: var(--color-text-gray);
			font-size: 16px;
			font-weight: 500;
			line-height: 16px;
			transition: all ease 0.2s;
			pointer-events: none;
		}
	}
</style>
