<script>
import Fa from 'svelte-fa/src/fa.svelte';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
</script>

<div>
	<span class="badge bg-primary-500">💀</span>
	<span class="flex-auto">
		<dt>Correct - BC</dt>
		<dd>Description</dd>
	</span>

	<button type="submit" class="btn"><Fa icon={faEdit} class="pr-2" />Edit</button>
	<button type="submit" class="btn variant-soft-error"
		><Fa icon={faTrashCan} class="pr-2" />Delete</button>
</div>
