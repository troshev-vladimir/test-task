<template>
	<div class="chips" :class="{ 'chips--selectable': selectable }">
		<span class="text"> <slot /></span>
		<div class="delete" v-if="clearable" @click="clear">
			<svg width="20px" height="20px">
				<use href="#close"></use>
			</svg>
		</div>
	</div>
</template>

<script setup lang="ts">
	export interface Props {
		clearable: boolean;
		selectable: boolean;
	}
	const props = withDefaults(defineProps<Props>(), {
		selectable: true,
		clearable: false,
	});

	const emit = defineEmits(["clear"]);

	const clear = () => {
		emit("clear");
	};
</script>

<style lang="scss">
	.chips {
		border-radius: 4px;
		background-color: var(--color-text-gray-2);
		display: flex;
		align-items: center;
		column-gap: 8px;
		padding: 7px 12px; // Тут косяк в фигме
		display: inline-flex;
		align-items: center;

		.text {
			color: var(--gray-5404144, #404144);
			font-size: 14px;
			font-weight: 400;
			line-height: 16px;
			pointer-events: none;
		}

		&--selectable {
			cursor: pointer;
			&:hover {
				background-color: var(--color-text-gray-4);
				transition: all ease 0.2s;
			}
		}

		.delete {
			cursor: pointer;
			height: 20px;
		}
	}
</style>
