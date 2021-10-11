<template>
  <div>
    <Breadcrumbs title="Devices" />
    <div class="card">
      <div class="card-body">
            <b-table class="mt-4" striped :fields="fields" :items="items">
                <template v-slot:cell(creation)="row">
              {{row.value.toLocaleString('en-US')}}
          </template>
          <!-- <template v-slot:cell(organization)='row'>
              {{row.item.organization.name}}
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
          {
            'uuid': '1902108070121',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T16:55:32.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T16:55:32.000Z'
          },
          {
            'uuid': '1902108070126',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T16:57:09.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T16:57:09.000Z'
          },
          {
            'uuid': '1902108070121',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T16:59:35.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T16:59:35.000Z'
          },
          {
            'uuid': '1902105270062',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T16:59:48.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T16:59:48.000Z'
          },
          {
            'uuid': '1902105270062',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:13:54.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:13:54.000Z'
          },
          {
            'uuid': '1902108070140',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:14:36.000Z',
            'warnStatus': 1,
            'batterytxLevel': 93,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:14:36.000Z'
          },
          {
            'uuid': '1902108070126',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:16:27.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:16:27.000Z'
          },
          {
            'uuid': '1902108070121',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:18:50.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:18:50.000Z'
          },
          {
            'uuid': '1902105270062',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:19:03.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:19:03.000Z'
          },
          {
            'uuid': '1902108070140',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:19:50.000Z',
            'warnStatus': 1,
            'batterytxLevel': 93,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:19:50.000Z'
          },
          {
            'uuid': '1902108070126',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:30:41.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:30:41.000Z'
          },
          {
            'uuid': '1902105270062',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:33:11.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:33:11.000Z'
          },
          {
            'uuid': '1902108070140',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:33:51.000Z',
            'warnStatus': 1,
            'batterytxLevel': 93,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:33:51.000Z'
          },
          {
            'uuid': '1902108070126',
            'recType': 1,
            'in': 0,
            'out': 11,
            'time': '2021-10-10T17:34:45.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:34:45.000Z'
          },
          {
            'uuid': '1902108070129',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:36:31.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:36:31.000Z'
          },
          {
            'uuid': '1902105270062',
            'recType': 1,
            'in': 2,
            'out': 0,
            'time': '2021-10-10T17:37:14.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:37:14.000Z'
          },
          {
            'uuid': '1902108070140',
            'recType': 1,
            'in': 3,
            'out': 14,
            'time': '2021-10-10T17:37:56.000Z',
            'warnStatus': 1,
            'batterytxLevel': 93,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:37:56.000Z'
          },
          {
            'uuid': '1902108070121',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:38:07.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:38:07.000Z'
          },
          {
            'uuid': '1902108070126',
            'recType': 1,
            'in': 1,
            'out': 1,
            'time': '2021-10-10T17:39:50.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:39:50.000Z'
          },
          {
            'uuid': '1902108070121',
            'recType': 1,
            'in': 0,
            'out': 2,
            'time': '2021-10-10T17:42:09.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:42:09.000Z'
          },
          {
            'uuid': '1902105270062',
            'recType': 1,
            'in': 0,
            'out': 1,
            'time': '2021-10-10T17:42:18.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:42:18.000Z'
          },
          {
            'uuid': '1902108070140',
            'recType': 1,
            'in': 0,
            'out': 2,
            'time': '2021-10-10T17:43:00.000Z',
            'warnStatus': 1,
            'batterytxLevel': 93,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:43:00.000Z'
          },
          {
            'uuid': '1902108070126',
            'recType': 1,
            'in': 0,
            'out': 1,
            'time': '2021-10-10T17:44:55.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:44:55.000Z'
          },
          {
            'uuid': '1902108070121',
            'recType': 1,
            'in': 2,
            'out': 22,
            'time': '2021-10-10T17:47:14.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:47:14.000Z'
          },
          {
            'uuid': '1902105270062',
            'recType': 1,
            'in': 0,
            'out': 2,
            'time': '2021-10-10T17:47:24.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:47:24.000Z'
          },
          {
            'uuid': '1902108070140',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:48:05.000Z',
            'warnStatus': 1,
            'batterytxLevel': 93,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:48:05.000Z'
          },
          {
            'uuid': '1902108070121',
            'recType': 1,
            'in': 6,
            'out': 15,
            'time': '2021-10-10T17:52:18.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:52:18.000Z'
          },
          {
            'uuid': '1902105270062',
            'recType': 1,
            'in': 5,
            'out': 2,
            'time': '2021-10-10T17:52:28.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:52:28.000Z'
          },
          {
            'uuid': '1902108070140',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:53:09.000Z',
            'warnStatus': 1,
            'batterytxLevel': 93,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:53:09.000Z'
          },
          {
            'uuid': '1902108070126',
            'recType': 1,
            'in': 0,
            'out': 0,
            'time': '2021-10-10T17:55:06.000Z',
            'warnStatus': 1,
            'batterytxLevel': 78,
            'signalStatus': 1,
            'createdAt': '2021-10-10T17:55:06.000Z'
          },
        ],
        fields: [
          { key: 'uuid', label:'Device Number' },
          { key: 'in', label:'Entry Number' },
          { key: 'out', label:'Exit Number' },
          { key: 'time', label:'Date Time' },
          { key: 'createdAt', label:'Upload Time'},
        ]
      }
    }
  };
</script>

<style></style>
