<template>
	<input class="peer sr-only hidden" type="radio" name="proxy-config" v-model="checked" :checked="checked"
		:id="`proxy-config-${proxy.id}`" />
	<div @click="check_radio" :class="`w-full h-16 cursor-pointer flex flex-row justify-between px-5 py-2 shadow-md rounded-xl select-none ${is_checked ? 'bg-green-400' : 'bg-blue-100'
		}`">
		<div class="w-2/12 inline-flex flex-col justify-center">
			{{ proxy.protocol }}
		</div>
		<div class="w-8/12 inline-flex flex-row justify-start items-center truncate">
			{{ proxy.location.country }} - {{ proxy.location.city }}
		</div>
		<div class="w-2/12 inline-flex items-center justify-end text-green-700">
			{{ 100 }} ms
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProxyItem',
	props: ['proxy'],
	data() {
		return {
			is_checked: false,
		};
	},
	methods: {
		check_radio() {
			this.is_checked = this.checked;
		},
	},
};
</script>
