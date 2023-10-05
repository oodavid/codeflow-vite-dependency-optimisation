<script lang="ts">
    import { doc } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    const ref = doc(db, `/collection/doc`);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
