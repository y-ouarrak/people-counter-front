<template>
  <div>
    <Breadcrumbs title="Areas" />
      <b-toast id="error-toast" title="Error" variant="danger">
     {{msg}}
    </b-toast>
    <div class="card" style="min-height: 700px;">
      <div class="card-body">
            <h5 class="card-title">Passenger Flow Data</h5>
        <div class="row">
          <div class="col-12 col-lg-3 mb-2">
            <b-form-select
              v-model="area"
              :options="areaOptions"
            ></b-form-select>
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <b-form-select
              v-model="store"
              :options="storeOptions"
            ></b-form-select>
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <div>
              <b-form-datepicker
                id="start-date"
                placeholder="Start Date"
                v-model="start"
                class="mb-2"
              ></b-form-datepicker>
            </div>
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <div>
              <b-form-datepicker
                id="end-date"
                placeholder="End Date"
                v-model="end"
                class="mb-2"
              ></b-form-datepicker>
            </div>
          </div>
          <div class="col-12 mb-2"><b-button variant="primary" @click="showChart"><i class="fa fa-search"></i> Inquire</b-button></div>
        </div>
        <div id="chart">
        <apexchart v-if="show" type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
      </div>
      <div v-if="show" class="row border-top m-0 p-2 text-center">
                  <div class="col-xl-4 pl-0 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-body">
                        <h6><i class="fa fa-refresh"></i> &nbsp;Total Traffic</h6>
                        <p>11</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-body">
                        <h6><i class="fa fa-sign-in"></i> &nbsp;Total Entry</h6>
                        <p>11</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 pl-0 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-body">
                        <h6><i class="fa fa-sign-out"></i> &nbsp;Total Exit</h6>
                        <p>11</p>
                      </div>
                    </div>
                  </div>
                  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        area: null,
        store: null,
        start: null,
        end: null,
        show: false,
        msg: "",
        areaOptions: [
          { value: null, text: "Please select an Area" },
          { value: 1, text: "Area 1" },
          { value: 2, text: "Area 2" },
          { value: 3, text: "Area 3" },
        ],
        storeOptions: [
          { value: null, text: "Please select a Store" },
          { value: 1, text: "Store 1" },
          { value: 2, text: "Store 2" },
          { value: 3, text: "Store 3" },
        ],
        series: [{
          name: "People",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
        chartOptions: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Chart',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      };
    },
    methods: {
      showChart()
      {
        if(!this.area)
          this.msg = "Area field is Empty!";
        else if(!this.store)
          this.msg = "Store field is Empty!";
        else if(!this.start)
          this.msg = "Start Date field is Empty!";
        else if(!this.end)
          this.msg = "End Date field is Empty!";
        else {
          this.$bvToast.hide('error-toast');
          this.msg = "";

        }
        if(this.msg)
          this.$bvToast.show('error-toast')
        else
          this.show = true;
      }
    }
  };
</script>

<style></style>
