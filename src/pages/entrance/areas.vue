<template>
  <div>
    <Breadcrumbs title="Areas" />
    <div class="card">
      <div class="card-body">
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
          {
            'areaId': 1,
            'name': 'Expo 22',
            'places':7,
            'user':'Digieye',
            'createdAt': '2021-10-10T16:53:30.000Z',
            'updatedAt': '2021-10-10T16:53:30.000Z',
          }
        ],
        fields: [
          { key: 'areaId', label:'#' },
          { key: 'name', label:'Area Name' },
          { key: 'places', label:'Places' },
          { key: 'user', label:'Creator' },
          { key: 'createdAt', label:'Create Time'},
          { key: 'Operation' },
        ]
      }
    }
  };
</script>

<style></style>
