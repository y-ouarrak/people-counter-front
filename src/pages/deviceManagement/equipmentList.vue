<template>
  <div>
    <Breadcrumbs title="Devices" />
    <div class="card">
      <div class="card-body">
         <b-button variant="primary" @click="$bvModal.show('add-user')">Add Device</b-button>
            <b-table class="mt-4" striped :fields="fields" :items="items">
                <template v-slot:cell(creation)="row">
              {{row.value.toLocaleString('en-US')}}
          </template>
          <!-- <template v-slot:cell(organization)='row'>
              {{row.item.organization.name}}
          </template> -->

          <template v-slot:cell(action)='data'>
              <span class='text-info act' @click="edit(data)"><u>Edit</u></span>&nbsp;
              <span class='text-info act' @click="del(data)"><u>Delete</u></span>
          </template>
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
          { id: 1, device_number: '12298465498', device_name: 'Device00', store: { id: 1, name: 'Nextronic' }, 
            passage_way: 'thechnopark',

          },
        ],
        fields: [
          { key: 'device_number' },
          { key: 'device_name' },
          { key:'store.name', label:'Store' },
          { key: 'passage_way' },
          { key: 'action' },
        ]
      }
    }
  };
</script>

<style></style>
