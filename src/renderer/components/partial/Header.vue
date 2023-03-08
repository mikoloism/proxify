<template>
	<header style="height: 15vh" class="w-full flex flex-wrap flex-row justify-start items-center px-6 gap-x-6">
		<button class="w-32 h-16 text-2xl text-bold bg-blue-600 rounded-2xl text-blue-200">
			NEW
		</button>
		<div
			class="w-32 h-16 relative text-2xl text-bold bg-blue-200 rounded-2xl text-blue-700 border-1 border-blue-700 border uppercase">
			<button class="h-full w-full inline-flex flex-row place-content-center place-items-center"
				@click="toggleProtocol">
				{{ selected_protocol }} &blacktriangledown;
			</button>
			<div v-if="is_protocols_visible"
				class="flex flex-col flex-wrap w-full gap-4 p-1 absolute bg-blue-200 rounded-xl shadow-sm top-20 border border-1 border-blue-700">
				<button class="bg-blue-400 p-3 rounded-xl capitalize" v-for="protocol in protocols" @click="selectProtocol">
					{{ protocol }}
				</button>
			</div>
		</div>
	</header>
</template>
<script>
export default {
	name: 'ProxyItem',
	data() {
		return {
			selected_protocol: 'SOCKS',
			is_protocols_visible: false,
			protocols: ['socks', 'socks5', 'socks4', 'http', 'https', 'ftp'],
		};
	},
	methods: {
		toggleProtocol() {
			this.is_protocols_visible = !this.is_protocols_visible;
		},

		selectProtocol(event) {
			this.selected_protocol = event.target.innerText;
			this.toggleProtocol();
		},
	},
};
</script>
