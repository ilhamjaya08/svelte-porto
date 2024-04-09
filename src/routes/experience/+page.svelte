<script>
import techstack from '$lib/data/Techstack'
import Icon from '@iconify/svelte'
</script>

<svelte:head>
    <title>ilhamjaya08 | Experience</title>
</svelte:head>

<div class="text-large font-mono text-black">
   <h1>My Experience</h1>
</div>
<div class="font-mono text-gray-800 text-center">
    <h3>This page contains: My skillset, experience, certifications, awards, etc. about myself</h3>
</div>

<div class="pt-7">
    <h1 class="font-mono text-black text-xl  text-center">
        Skill Set
    </h1>
</div>

{#each techstack as stack}
    <div class="grid pb-3 pt-4">
        <h3 class="font-mono font-semibold text-xl text-black">
        {stack.typestack}
        </h3>
        <p class="text-small font-mono text-gray-700 ">{stack.desc}</p>
    </div>
    <div class="grid grid-cols-4 gap-4">
        {#each stack.array as child}
            <div class="bg-white rounded shadow border p-3">
                <h5 class="text-large font-bold font-mono mb-4 mt-0">
                    <Icon class="inline" icon={child.icon} />
                    {child.name}
                </h5>
                <p class="text-gray-700 text-sm">{child.desc}</p>
            </div>
        {/each}
    </div>
{/each}
