<script>
	import {download} from '@tadashi/fd@1.0.1'
	export let props
	
	let {
		icon = false,
		type = 'INPUT',
		files = []
	} = props
	
	async function getFile(url, filename) {
    const response = await globalThis.fetch(url)
    await download(response, filename)
  }
	
	function getDownloadFile(file) {
		return async () => {
			await getFile(file.file_url, file.file_name)
		}
	}
</script>

{#if type === 'INPUT'}
<div class="_input-downloadfile">
	<div class="_input-content-files">
		{#each files as file, i}
		<button type="button" on:click={getDownloadFile(file)}>{file.file_name}</button>
		{/each}
	</div>	
	{#if icon}
	<div class="_box-icon-downloadfile _icon-nocursor">
		<svg class="_icon-downloadfile">
			<use xlink:href="#{icon}" />
		</svg>
	</div>
	{/if}
</div>
{:else}
<button type="button" on:click={getDownloadFile(files[0])} class="_btn-downloadfile" title={`Baixar ${files[0].file_name}`}>
	<svg class="_icon-downloadfile">
		<use xlink:href="#{icon}" />
	</svg>
</button>	
{/if}

<style>
	:root {
		--magrini-downloadfile-background-color: hsl(240deg 18% 94% / 50%);
		--magrini-downloadfile-color: hsla(0, 0%, 0%, 0.7);
		--magrini-downloadfile-border: 1px solid;
		--magrini-downloadfile-border-color: hsl(240deg 8% 44% / 50%);
		--magrini-downloadfile-hover: hsl(210deg 50% 50%);
		--magrini-downloadfile-border-radius: 3px;
		--magrini-downloadfile-padding: 0.3em 1em 0.3em;
		--magrini-downloadfile-icon-size: 1.4em;
		--magrini-downloadfile-icon-color: hsl(240deg 8% 44%);
		--magrini-downloadfile-item-margin-right: 0.75em;
		--magrini-downloadfile-border-color-focus: hsl(240deg 8% 44%);
	}
	
	._input-downloadfile {
		background-color: var(--magrini-downloadfile-background-color);
		border: var(--magrini-downloadfile-border);
		border-color: var(--magrini-downloadfile-border-color);
		border-radius: var(--magrini-downloadfile-border-radius);
		padding: var(--magrini-downloadfile-padding);
		display: flex;
		align-items: center;
	}
	
	._btn-downloadfile {
		fill: var(--magrini-downloadfile-icon-color);
		color: var(--magrini-downloadfile-icon-color);
		display: inline-block;
		cursor: pointer;
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0 var(--magrini-downloadfile-item-margin-right) 0 0;
	}
	._btn-downloadfile:hover {
		fill: var(--magrini-downloadfile-hover);
		color: var(--magrini-downloadfile-hover);
	}
	._btn-downloadfile:active {
		border-color: var(--magrini-downloadfile-border-color-focus);
	}
	
	._input-content-files {
		display: block;
		width: 100%;
	}
	
	._input-content-files button {
		display: inline-block;
		cursor: pointer;
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0 var(--magrini-downloadfile-item-margin-right) 0 0;
	}
	
	._input-content-files button:hover{
		color: var(--magrini-downloadfile-hover);
	}
	
	._icon-nocursor {
		cursor: default;
	}
	
	._icon-downloadfile {
		width: var(--magrini-downloadfile-icon-size);
		height: var(--magrini-downloadfile-icon-size);
	}
	
	._box-icon-downloadfile ._icon-downloadfile {
		fill: var(--magrini-downloadfile-icon-color);
		color: var(--magrini-downloadfile-icon-color);
	}
	
</style>
