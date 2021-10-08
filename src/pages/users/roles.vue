<template>
  <div>
    <Breadcrumbs title="Roles" />
    <div class="card">
        <div class="card-body">
<b-table class="mt-4" striped :fields="fields" :items="items">
                <!-- <template v-slot:cell(creation)="row">
              {{row.value.toLocaleString('en-US')}}
          </template>
          <template v-slot:cell(organization)='row'>
              {{row.item.organization.name}}
          </template>
          <template v-slot:cell(action)='data'>
              <span class='text-info act' @click="edit(data)"><u>Edit</u></span>&nbsp;
              <span class='text-info act' @click="del(data)"><u>Delete</u></span>
          </template> -->
            </b-table>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        items: [
          { name: 'Test', remarks: '' }
        ],
        fields: [
          { key: 'name', label: 'Role Name' },
          { key: 'remarks', label: 'Remarks' },
          { key: 'creator', label: 'Creator' },
          { key: 'creation', label: 'Creation Time' },
          { key: 'action', label:'Action' }
        ]
      };
    },

  };
</script>

<style>

</style>