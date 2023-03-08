<template>
	<div class="place-content-center place-items-center flex flex-wrap flex-col w-full h-screen">
		<Header />
		<div style="height: 85%" class="rounded-t-3xl rounded-b-none bg-blue-900 px-4 pt-7 w-full overflow-hidden">
			<ProxyList v-if="view == 'proxy-list'" :proxies="proxies" />
		</div>
	</div>
</template>

<script>
import Header from './components/partial/Header.vue';
import ProxyList from './components/proxy/ProxyList.vue';

export default {
	name: 'App',
	components: { ProxyList, Header },
	data() {
		return {
			view: 'proxy-list',
			proxies: [
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.16.107.132',
					source: 'https://www.freeproxy.world',
					id: 0,
					uri: '104.16.107.132:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'Austin',
					},
					protocol: 'http',
					port: '80',
					address: '63.141.128.232',
					source: 'https://www.freeproxy.world',
					id: 1,
					uri: '63.141.128.232:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'Kansas City',
					},
					protocol: 'http',
					port: '80',
					address: '198.41.206.215',
					source: 'https://www.freeproxy.world',
					id: 2,
					uri: '198.41.206.215:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.17.178.167',
					source: 'https://www.freeproxy.world',
					id: 3,
					uri: '104.17.178.167:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.21.68.246',
					source: 'https://www.freeproxy.world',
					id: 4,
					uri: '104.21.68.246:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '162.159.200.150',
					source: 'https://www.freeproxy.world',
					id: 5,
					uri: '162.159.200.150:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'Los Angeles',
					},
					protocol: 'http',
					port: '80',
					address: '190.93.247.180',
					source: 'https://www.freeproxy.world',
					id: 6,
					uri: '190.93.247.180:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.18.241.216',
					source: 'https://www.freeproxy.world',
					id: 7,
					uri: '104.18.241.216:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'Dallas',
					},
					protocol: 'http',
					port: '80',
					address: '104.18.47.215',
					source: 'https://www.freeproxy.world',
					id: 8,
					uri: '104.18.47.215:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.27.107.8',
					source: 'https://www.freeproxy.world',
					id: 9,
					uri: '104.27.107.8:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.20.159.231',
					source: 'https://www.freeproxy.world',
					id: 10,
					uri: '104.20.159.231:80',
				},
				{
					location: { country: 'Qatar', city: 'Ar Rayyan' },
					protocol: 'http',
					port: '80',
					address: '45.131.7.8',
					source: 'https://www.freeproxy.world',
					id: 11,
					uri: '45.131.7.8:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'Austin',
					},
					protocol: 'http',
					port: '80',
					address: '63.141.128.216',
					source: 'https://www.freeproxy.world',
					id: 12,
					uri: '63.141.128.216:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '172.67.116.128',
					source: 'https://www.freeproxy.world',
					id: 13,
					uri: '172.67.116.128:80',
				},
				{
					location: { country: '', city: '' },
					protocol: '',
					port: '',
					address:
						'(adsbygoogle = window.adsbygoogle || []).push({});',
					source: 'https://www.freeproxy.world',
					id: 14,
					uri: '(adsbygoogle = window.adsbygoogle || []).push({});:',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.16.104.237',
					source: 'https://www.freeproxy.world',
					id: 15,
					uri: '104.16.104.237:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'Charlotte',
					},
					protocol: 'http',
					port: '49920',
					address: '24.172.34.114',
					source: 'https://www.freeproxy.world',
					id: 16,
					uri: '24.172.34.114:49920',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.19.185.214',
					source: 'https://www.freeproxy.world',
					id: 17,
					uri: '104.19.185.214:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'San Francisco',
					},
					protocol: 'http',
					port: '80',
					address: '104.20.228.96',
					source: 'https://www.freeproxy.world',
					id: 18,
					uri: '104.20.228.96:80',
				},
				{
					location: {
						country: 'United States of America',
						city: 'Dallas',
					},
					protocol: 'http',
					port: '80',
					address: '104.18.35.72',
					source: 'https://www.freeproxy.world',
					id: 19,
					uri: '104.18.35.72:80',
				},
				{
					location: { country: 'Netherlands', city: 'Rotterdam' },
					protocol: 'http',
					port: '80',
					address: '191.101.251.82',
					source: 'https://www.freeproxy.world',
					id: 20,
					uri: '191.101.251.82:80',
				},
			],
		};
	},
};
</script>
