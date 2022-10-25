<template>
	<div>
		<h1 class="title">Hello Vue 3!!!!</h1>
		<form @submit.prevent="submit" class="form">
			<input name="name" v-model="name" />
			<button>Submit</button>
		</form>
		<div>name: {{ displayName }}</div>
		<hr />

		<button @click="ganhTeam">Gánh Team</button>
	</div>
</template>

<script>
	import { ref } from "vue";
	import { useSocketIo, useSocketName } from "./utils/SocketService";
	export default {
		setup() {
			const socket = useSocketIo(8000);
			const [displayName, setDisplayName, registerChannel, ganhTeamLaDe] =
				useSocketName(socket);

			const name = ref("");

			const submit = () => {
				setDisplayName(name.value);

				registerChannel({ userId: 10, channelName: "Test_Room" });

				name.value = "";
			};

			const ganhTeam = () => {
				ganhTeamLaDe();
			};
			return {
				name,
				displayName,
				submit,
				ganhTeam,
			};
		},
	};
</script>

<style module>
	.form {
		display: flex;
		flex-direction: column;
	}

	.logo {
		width: 200px;
	}
	.title {
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
