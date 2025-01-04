<script lang="ts">
	let {
		label,
		name,
		items,
		debug = false,
		hClasses = '',
		cClasses = '',
		iClasses = '',
		aClasses = '',
		rClasses = '',
	}: {
		label: string;
		name: string;
		items: Record<string, string>;
		debug?: boolean;
		hClasses?: string;
		cClasses?: string;
		iClasses?: string;
		aClasses?: string;
		rClasses?: string;
	} = $props();

	let newKey = $state('');
	let localItems = $state(items);
	let stringifiedData = $derived(JSON.stringify(localItems));

	function addItem() {
		if (!newKey.trim()) return;

		if (!(newKey in localItems)) {
			localItems[newKey] = '';
		}

		newKey = '';
	}

	function removeItem(key: string) {
		// might be a better way to do this
		const { [key]: _, ...rest } = localItems;
		localItems = rest;
	}

	function updateValue(key: string, value: string) {
		localItems[key] = value;
	}

	// For the sake of reusability, the styling is set here for the main elements of this component
	const headerClass =
		`flex items-center justify-start bg-gray-800 p-1 pb-2 text-gray-50 dark:bg-gray-900 dark:text-gray-200 ${hClasses}`;
	const containerClass = `w-full flex flex-col bg-gray-200 p-2 gap-2 dark:bg-gray-600 dark:text-gray-50 ${cClasses}`;
	const inputClass = `flex-1 p-2 rounded border-solid border-[#ccc] border-[1px] text-[#2a2a2a] dark:bg-gray-800 dark:text-gray-200 ${iClasses}`;
	const addButtonClass =
		`px-4 py-2 w-[60px] bg-[#4a4a4a] hover:bg-[#2a2a2a] text-white cursor-pointer border-none rounded-[4px] ${aClasses}`;
	const removeButtonClass =
		`px-4 py-2 w-[60px] bg-[#ff4444] hover:bg-[#cc0000] text-white cursor-pointer border-none rounded-[4px] ${rClasses}`;
</script>

<!-- Input forms are off so they are not sent to backend -->
<div class="flex w-full flex-col justify-start">
	<!-- Header -->
	<h3 class={headerClass}>
		{label}
	</h3>
	<!-- Object Container -->
	<div class={containerClass}>
		<!-- Add Key -->
		<div class="flex gap-2">
			<input
				class={inputClass}
				type="text"
				bind:value={newKey}
				placeholder="Enter new key"
				form="off"
			/>
			<button class={addButtonClass} type="submit" onclick={addItem}>Add</button>
		</div>
		<!-- List of key-value pairs -->
		<div class="flex flex-col gap-2">
			{#each Object.entries(localItems) as [key, value]}
				<div class="flex items-center gap-2">
					<div class="min-w-[100px] max-w-[200px] p-1 font-semibold">{key}</div>
					<input
						class={inputClass}
						type="text"
						{value}
						oninput={(e) => updateValue(key, e.currentTarget.value)}
						placeholder="Enter value"
						form="off"
					/>
					<button onclick={() => removeItem(key)} class={removeButtonClass} type="button">
						Del
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>
<!-- This input is the only thing sent -->
<input {name} type="hidden" value={stringifiedData} />
{#if debug}
	<pre>{JSON.stringify(localItems, null, 2)}</pre>
{/if}
