<template>
	<div
		class="place-content-center place-items-center flex flex-wrap flex-col w-full h-screen">
		<div
			class="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
			<div class="mb-8 text-center">
				<h1 class="my-3 text-4xl font-bold">Sign in</h1>
				<p class="text-sm text-gray-400">
					Sign in to access your account
				</p>
			</div>
			<form
				novalidate=""
				action=""
				class="space-y-12 ng-untouched ng-pristine ng-valid">
				<div class="space-y-4">
					<div>
						<label
							for="email"
							class="block mb-2 text-sm"
							>Email address</label
						>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="leroy@jenkins.com"
							class="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
					</div>
					<div>
						<div class="flex justify-between mb-2">
							<label
								for="password"
								class="text-sm"
								>Password</label
							>
							<a
								rel="noopener noreferrer"
								href="#"
								class="text-xs hover:underline text-gray-400"
								>Forgot password?</a
							>
						</div>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="*****"
							class="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
					</div>
				</div>
				<div class="space-y-2">
					<div>
						<button
							type="button"
							class="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">
							Sign in
						</button>
					</div>
					<p class="px-6 text-sm text-center text-gray-400">
						Don't have an account yet?
						<a
							rel="noopener noreferrer"
							href="#"
							class="hover:underline text-violet-400"
							>Sign up</a
						>.
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LoginView',
};
</script>
