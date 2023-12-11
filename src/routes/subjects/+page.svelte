<script lang="ts">
  import {
    createTable,
    Subscribe,
    Render,
    createRender,
  } from "svelte-headless-table";
  import {
    addSortBy,
    addPagination,
    addTableFilter,
    addSelectedRows,
    addHiddenColumns,
  } from "svelte-headless-table/plugins";
  import { readable } from "svelte/store";
  import * as Table from "$lib/components/ui/table";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Input } from "$lib/components/ui/input";
  import * as Dialog from "$lib/components/ui/dialog";
  import { ChevronDown } from "lucide-svelte";
  import { cn } from "$lib/utils";
  import * as Select from "$lib/components/ui/select";
  import { createDir, BaseDirectory, Dir } from '@tauri-apps/api/fs';
  type Subject = {
    id: string;
    basic_science_subjects: string;
    applied_science_subjects: string;
    social_science_subjects: string;
  };



  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
    
  }




//  const build_dir = async (filename: string) => {

//   await createDir(filename,{ dir: BaseDirectory.AppData, recursive: true })

//   console.log("Directory created Successfuly !")
  
//  }
  
 async function build_dir(filename: string) {

  await createDir(filename, { dir: BaseDirectory.Home, recursive: true })
  
 }

  const data: Subject[] = [
    {
      id: "1",
      basic_science_subjects: "Math",
      applied_science_subjects: "Computer Science",
      social_science_subjects: "Finance",
    },
    {
      id: "2",
      basic_science_subjects: "Physics",
      applied_science_subjects: "EEE",
      social_science_subjects: "Econ",
    },
    {
      id: "3",
      basic_science_subjects: "Chemistry",
      applied_science_subjects: "FDH",
      social_science_subjects: "Economics",
    },
  ];

  const table = createTable(readable(data), {
    sort: addSortBy({ disableMultiSort: true }),
    page: addPagination(),
    filter: addTableFilter({
      fn: ({ filterValue, value }: { filterValue: string; value: string }) =>
        value.toLowerCase().includes(filterValue.toLowerCase()),
    }),
    select: addSelectedRows(),
    hide: addHiddenColumns(),
  });


  const columns = table.createColumns([
    table.column({
      header: "Basic Science",
      accessor: "basic_science_subjects",
      cell: ({ value }: { value: string }) => value.toLowerCase(),
      plugins: {
        filter: {
          getFilterValue(value: string) {
            return value.toLowerCase();
          },
        },
      },
    }),

    table.column({
      header: "Applied Science",
      accessor: "applied_science_subjects",
      cell: ({ value }: { value: string }) => value.toLowerCase(),
      plugins: {
        filter: {
          getFilterValue(value: string) {
            return value.toLowerCase();
          },
        },
      },
    }),
    table.column({
      header: "Social Science",
      accessor: "social_science_subjects",
      cell: ({ value }: { value: string }) => value.toLowerCase(),
      plugins: {
        filter: {
          getFilterValue(value: string) {
            return value.toLowerCase();
          },
        },
      },
    }),
  ]);

  const {
    headerRows,
    pageRows,
    tableAttrs,
    tableBodyAttrs,
    flatColumns,
    pluginStates,
    rows,
  } = table.createViewModel(columns);

  const { hiddenColumnIds } = pluginStates.hide;
  const ids = flatColumns.map((c: { id: any }) => c.id);
  let hideForId = Object.fromEntries(ids.map((id: any) => [id, true]));

  $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => !hide)
    .map(([id]) => id);

  const { hasNextPage, pageIndex } = pluginStates.page;
  const { filterValue } = pluginStates.filter;

  const { selectedDataIds } = pluginStates.select;

  const hideableCols = [
    "basic_science_subjects",
    "applied_science_subjects",
    "social_science_subjects",
  ];

  
  
</script>

<main class="font-[Rubik]">
  <div class="flex w-auto justify-center items-center min-h-[100vh]">
    <div class="min-w-[220px] w-[580px] md:w-[70%] mx-3 sm:mx-8">
      <div class="flex gap-2 items-center justify-center">
        <div class="text-xs sm:text-sm text-neutral-400">
          Choose your major subject <span class="hidden sm:inline">from the list</span> or
        </div>

        <!-- Dialog for creating custom knowledge base -->
        <div>
          <Dialog.Root>
            <Dialog.Trigger class={buttonVariants({ variant: "outline" })}>
              <div class="sm:text-sm text-indigo-500 text-xs">
                Organize <span class="hidden sm:inline">your</span> custom Knowledge base
              </div>
            </Dialog.Trigger>
            <Dialog.Content class="sm:max-w-[425px]">
              <Dialog.Header>
                <Dialog.Title>Build your own</Dialog.Title>
                <Dialog.Description>Give it a name of your choice</Dialog.Description>
              </Dialog.Header>
              <div class="flex flex-col gap-10">
                <div>
                  <Input id="name" value="Custom Knowledge Base" class="dark:focus:ring-emerald-500 focus:ring-emerald-500 focus:border-emerald-500 py-6" />
                </div>
              </div>
              <Dialog.Footer>
                <Button variant='outline' type="submit">Next</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Root>
        </div>

        <!-- Search box -->
      </div>
      <hr class="my-5 border-[1.05px]" />

      <div class="flex items-center justify-center py-4">
        <Input
          class="sm:max-w-sm mr-3 text-[10px] xs:text-[12px] sm:text-sm md:text-[15px]"
          placeholder="Search your subject here"
          type="text"
          bind:value={$filterValue}
        />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button
              variant="outline"
              class="ml-auto w-min text-[10px] xs:text-[12px] sm:text-sm md:text-[15px]"
              builders={[builder]}
            >
              Category <ChevronDown class="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {#each flatColumns as col}
              {#if hideableCols.includes(col.id)}
                <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
                  {col.header}
                </DropdownMenu.CheckboxItem>
              {/if}
            {/each}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div class="rounded-md border">
        <Table.Root
          {...$tableAttrs}
          class="text-center text-[10px] xs:text-[12px] sm:text-sm md:text-[15px]"
        >
          <Table.Header>
            {#each $headerRows as headerRow}
              <Subscribe rowAttrs={headerRow.attrs()}>
                <Table.Row>
                  {#each headerRow.cells as cell (cell.id)}
                    <Subscribe
                      attrs={cell.attrs()}
                      let:attrs
                      props={cell.props()}
                      let:props
                    >
                      <Table.Head
                        {...attrs}
                        class={cn("[&:has([role=checkbox])]:pl-3")}
                      >
                        {#if cell.id === "basic_science_subjects"}
                          <div class="text-center font-medium text-emerald-500">
                            <Render of={cell.render()} />
                          </div>
                        {:else}
                          <div class="text-center font-medium text-emerald-500">
                            <Render of={cell.render()} />
                          </div>
                        {/if}
                      </Table.Head>
                    </Subscribe>
                  {/each}
                </Table.Row>
              </Subscribe>
            {/each}
          </Table.Header>
          <Table.Body {...$tableBodyAttrs}>
            {#each $pageRows as row (row.id)}
              <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
                <Table.Row
                  {...rowAttrs}
                  data-state={$selectedDataIds[row.id] && "selected"}
                >
                  {#each row.cells as cell (cell.id)}
                    <Subscribe attrs={cell.attrs()} let:attrs>
                      <Table.Cell
                      
                      
                      
                      {...attrs}
                      
                    >
                      <div class={ $filterValue && cell.value.toLowerCase().includes($filterValue.toLowerCase()) ? 'text-yellow-500 py-1 text-center capitalize' : 'text-center capitalize'}>
                         
                        <Dialog.Root>
                          <Dialog.Trigger class={buttonVariants({ variant: "outline" })}>
                            <div class="sm:text-sm capitalize text-xs">
                              <Render of={cell.render()} />
                            </div>
                          </Dialog.Trigger>
                          <Dialog.Content class="sm:max-w-[425px]">
                            <Dialog.Header class='flex flex-col-gap-5'>
                              <Dialog.Title>Your choice</Dialog.Title>
                              <Dialog.Description>Receive tailored book and source recommendations for your subject ✨.</Dialog.Description>
                            </Dialog.Header>
                            <div class="flex flex-col gap-10">
                              <div>
                                <Input id="file" value="{capitalize(cell.render())}" class="dark:focus:ring-emerald-500 focus:ring-emerald-500 focus:border-emerald-500 py-6" />
                              </div>
                            </div>
                            <Dialog.Footer>

                              <!-- <Button on:click={()=> build_dir("tyintbtf7")} variant='outline' type="submit">Next</Button> -->
                              <Button on:click={()=> build_dir(capitalize(cell.render()))} variant='outline' type="submit">Next</Button>
                            </Dialog.Footer>
                          </Dialog.Content>
                        </Dialog.Root>
                      </div>
                    </Table.Cell>
                    </Subscribe>
                  {/each}
                </Table.Row>
              </Subscribe>
            {/each}
          </Table.Body>
        </Table.Root>
      </div>

      <div class="flex items-center justify-end space-x-2 py-4">

        
        <a href="/">
          <Button
            variant='secondary'
            size="sm"
            on:click={() => ($pageIndex = $pageIndex - 1)}
          >Previous</Button>
        </a>

        
      </div>
    </div>
  </div>
</main>
