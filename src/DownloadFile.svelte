<script>
	export let props
	
	let {
		icon = false,
		type = 'INPUT',
		files = []
	} = props
	
	function getHrefFile(file) {
		if (file.type === 'BASE64') {
			return `data:${file.content_type};base64,${file.body}`
		}
		return file.file_url
	}
</script>

{#if type === 'INPUT'}
<div class="_input-downloadfile">
	<div class="_input-content-files">
		{#each files as file, i}
		<a href={getHrefFile(file)} download={file.file_name}>{file.file_name}</a>
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
<a href={getHrefFile(files[0])} download={files[0].file_name} class="_btn-downloadfile" title={`Baixar ${files[0].file_name}`}>
	<svg class="_icon-downloadfile">
		<use xlink:href="#{icon}" />
	</svg>
</a>
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
		cursor: pointer;
		fill: var(--magrini-downloadfile-icon-color);
		color: var(--magrini-downloadfile-icon-color);
	}
	._btn-downloadfile:hover {
		fill: var(--magrini-downloadfile-hover);
		color: var(--magrini-downloadfile-hover);
	}
	
	._input-content-files {
		display: block;
		width: 100%;
	}
	
	._input-content-files a {
		display: inline-block;
		cursor: pointer;
		margin-right: var(--magrini-downloadfile-item-margin-right)
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
