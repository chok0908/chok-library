<template>
	<div>
		<!--		<button class="w-80 h-9 bg-sky-500 hover:bg-sky-700 rounded-full text-white">-->
		<button class="common_button">
			<span class="common_button_text"> {{ msg }}</span>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Button',
	props: {
		msg: String,
	},
})
</script>

<style scoped lang="scss">
.common_button {
	width: auto;
	height: 30px;
	color: #333;
	background: skyblue;
	border-radius: 1rem;
	&_text {
		width: 100%;
		padding: 1.5rem;
	}
	&:hover {
		background: darkblue;
		.common_button_text {
			color: white;
		}
	}
}
</style>
