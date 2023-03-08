<template>
	<div
		class="flex flex-row flex-wrap overflow-hidden overflow-y-auto w-full h-full gap-y-8">
		<ProxyItem
			v-for="proxy in proxies"
			:proxy="proxy" />
	</div>
</template>
<script>
import ProxyItem from './ProxyItem.vue';

export default {
	name: 'ProxyList',
	props: ['proxies'],
	components: { ProxyItem },
};
</script>
