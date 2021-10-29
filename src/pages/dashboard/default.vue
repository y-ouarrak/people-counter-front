<template>
  <div>
    <Breadcrumbs title="Dashboard" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row second-chart-list third-news-update">
        <div class="col-sm-6 col-xl-3">
          <px-card class="static-top-widget-card">
            <div slot="with-padding">
              <div class="media static-top-widget">
                <div class="media-body">
                  <h6 class="font-roboto">All Time</h6>
                  <div class="row">
                    <div class="col-12">
                      <h6><i class="fa fa-sign-in in"></i>&nbsp; Entry</h6>
                      <h5 class="mb-0 counter">{{all.in}}</h5>
                    </div>
                    <div class="col-12 text-right">
                      <h6><i class="fa fa-sign-out out"></i>&nbsp; Exit </h6>
                  <h5 class="mb-0 counter">{{all.out}}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="progress-widget">
                <div class="progress sm-progress-bar progress-animate">
                  <div
                    class="progress-gradient-secondary"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="animate-circle"></span>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-sm-6 col-xl-3">
          <px-card class="static-top-widget-card">
            <div slot="with-padding">
              <div class="media static-top-widget">
                <div class="media-body">
                  <h6 class="font-roboto">Last Hour</h6>
                  <div class="row">
                    <div class="col-12">
                      <h6><i class="fa fa-sign-in in"></i>&nbsp; Entry</h6>
                      <h5 class="mb-0 counter " v-if="hour.in">{{hour.in}}</h5>
                      <h5 class="mb-0 counter " v-else>0</h5>

                    </div>
                    <div class="col-12 text-right">
                      <h6><i class="fa fa-sign-out out"></i>&nbsp; Exit </h6>
                  <h5 class="mb-0 counter" v-if="hour.out">{{hour.out}}</h5>
                  <h5 class="mb-0 counter" v-else>0</h5>

                    </div>
                  </div>
                </div>
              </div>
              <div class="progress-widget">
                <div class="progress sm-progress-bar progress-animate">
                  <div
                    class="progress-gradient-danger"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="animate-circle"></span>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-sm-6 col-xl-3">
          <px-card class="static-top-widget-card">
            <div slot="with-padding">
              <div class="media static-top-widget">
                <div class="media-body">
                  <h6 class="font-roboto">Last Day</h6>
                  <div class="row">
                    <div class="col-12">
                      <h6><i class="fa fa-sign-in in"></i>&nbsp; Entry</h6>
                      <h5 class="mb-0 counter">{{day.in}}</h5>
                    </div>
                    <div class="col-12 text-right">
                      <h6><i class="fa fa-sign-out out"></i>&nbsp; Exit </h6>
                  <h5 class="mb-0 counter">{{day.out}}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="progress-widget">
                <div class="progress sm-progress-bar progress-animate">
                  <div
                    class="progress-gradient-success"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="animate-circle"></span>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-sm-6 col-xl-3">
          <px-card class="static-top-widget-card">
            <div slot="with-padding">
              <div class="media static-top-widget">
                <div class="media-body">
                  <h6 class="font-roboto">Last week</h6>
                  <div class="row">
                    <div class="col-12">
                      <h6><i class="fa fa-sign-in in"></i>&nbsp; Entry</h6>
                      <h5 class="mb-0 counter">{{week.in}}</h5>
                    </div>
                    <div class="col-12 text-right">
                      <h6><i class="fa fa-sign-out out"></i>&nbsp; Exit </h6>
                  <h5 class="mb-0 counter">{{week.out}}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="progress-widget">
                <div class="progress sm-progress-bar progress-animate">
                  <div
                    class="progress-gradient-primary"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="animate-circle"></span>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-12 xl-100 dashboard-sec box-col-12">
          <px-card class="earning-card">
            <div class="row m-0">
              
              <div class="col-xl-12 p-0">
                <div class="chart-right">
                  <div class="row m-0 p-tb">
                    <div class="col-xl-8 col-md-8 col-sm-8 col-12 p-0">
                      <div class="inner-top-left">
                        <ul class="d-flex list-unstyled">
                          <li class="switch" :class="period=='daily'?'active':''" @click="period = 'daily'">Day</li>
                          <li class="switch" :class="period=='weekly'?'active':''" @click="period = 'weekly'">Week</li>
                          <li class="switch" :class="period=='monthly'?'active':''" @click="period = 'monthly'">Month</li>
                          <!-- <li class="switch" :class="period=='yearly'?'active':''" @click="period = 'yearly'">Yearly</li> -->
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-xl-4 col-md-4 col-sm-4 col-12 p-0 justify-content-end"
                    >
                      <div class="inner-top-right">
                        <ul class="d-flex list-unstyled justify-content-end">
                          <li>Entry</li>
                          <li>Exit</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="card-body p-0">
                        <div class="current-sale-container">
                          <div id="chart-currently" style="min-height: 320px;">
                            <apexchart
                              v-if="show"
                              height="290"
                              type="area"
                              :options="apexDashboard.options"
                              :series="apexDashboard.series"
                            ></apexchart>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row border-top m-0">
                  <div class="col-xl-4 pl-0 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-body">
                        <h6><i class="fa fa-refresh"></i> &nbsp;Total Traffic</h6>
                        <p>{{totalIn + totalOut}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-body">
                        <h6><i class="fa fa-sign-in"></i> &nbsp;Total Entry</h6>
                        <p>{{totalIn}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 pl-0 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-body">
                        <h6><i class="fa fa-sign-out"></i> &nbsp;Total Exit</h6>
                        <p>{{totalOut}}</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
  var primary = localStorage.getItem('primary_color') || '#7366ff';
  var secondary = localStorage.getItem('secondary_color') || '#f73164';

  // var Knob = require('knob');
  // var ordervalue = Knob({
  //   value: 35,
  //   angleOffset: 90,
  //   className: 'review',
  //   thickness: 0.2,
  //   width: 65,
  //   height: 65,
  //   fgColor: primary,
  // });
  // var productvalue = Knob({
  //   value: 60,
  //   angleOffset: 90,
  //   className: 'review',
  //   thickness: 0.2,
  //   width: 65,
  //   height: 65,
  //   fgColor: primary,
  // });

  import { API } from '@/axios';
  // console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));
  export default {
    data() {
      return {
        totalOut: null,
        totalIn: null,
        show: true,
        all: {
          in: null,
          out: null,
        },
        day: {
          in: null,
          out: null,
        },
        week: {
          in: null,
          out: null,
        },
        hour: {
          in: null,
          out: null,
        },

        series: [
          {
            name: 'Entry',
            data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0],
            // data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: 'Exit',
            data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0],
            // data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],

        chartOptions: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          colors: ['#7366ff', '#dd3545'],
          xaxis: {
            type: 'datetime',
            categories: []
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },

        apexDashboard: {
          options: {
            chart: {
              width: 685,
              height: 240,
              type: 'area',
              toolbar: {
                show: false,
              },
            },
            colors: [primary, secondary],
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
            },
            xaxis: {
              type: 'category',
              low: 0,
              offsetX: 0,
              offsetY: 0,
              show: false,
              categories: [],
              labels: {
                low: 0,
                offsetX: 0,
                show: false,
              },
              axisBorder: {
                low: 0,
                offsetX: 0,
                show: false,
              },
            },
            yaxis: {
              low: 0,
              offsetX: 0,
              offsetY: 0,
              show: false,
              labels: {
                low: 0,
                offsetX: 0,
                show: false,
              },
              axisBorder: {
                low: 0,
                offsetX: 0,
                show: false,
              },
            },
            markers: {
              strokeWidth: 3,
              colors: '#ffffff',
              strokeColors: [primary, secondary],
              hover: {
                size: 6,
              },
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 80, 100],
              },
            },
            legend: {
              show: false,
            },
            tooltip: {
              x: {
                format: 'MM',
              },
            },
            grid: {
              show: false,
              padding: {
                left: 0,
                right: 0,
                bottom: -15,
                top: -40,
              },
            },
          },
          series: [
            {
              name: 'Entry',
              data: [],
            },
            {
              name: 'Exit',
              data: [],
            },
          ],
        },
        period: 'daily',
      };
    },
    watch: {
      period: function(val){
        switch(val){
        case 'weekly':
          this.fetchChart(new Date(new Date() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' '));
          break;
        case 'monthly':
          this.fetchChart(new Date(new Date() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' '));
          break;
        // case 'yearly':
        //   console.log(val);
        //   break;
        default:
          this.fetchChart();
        }
      }
    },
    mounted() {
      // var d = new Date();
    // var curHr = this.addZero(d.getHours());
    // var curMi = this.addZero(d.getMinutes());
    // var meridiem = curHr >= 12 ? 'PM' : 'AM';
    // this.time = curHr + ':' + curMi + ' ' + meridiem;
    // if (curHr < 12) {
      //   this.greeting = 'Good morning!';
    // }else if (curHr < 18) {
      //   this.greeting = 'Good afternoon!';
    // }else {
      //   this.greeting = 'Good evening!';
    // }
    // document.getElementById('ordervalue').append(ordervalue);
    // document.getElementById('productvalue').append(productvalue);
    },
    async created(){
      this.fetchChart();
      this.fetchData();
      const that = this;
      setInterval(function(){
        that.fetchData();
      }, 5000);
    },
    methods: {
      async fetchChart(start = new Date(new Date() - 1 * 24 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ')){
        const nowTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        this.show = false;
        try{
          const { data } = await API.get('/events', { params: { startDate: start, endDate: nowTime , perPage: 10000000 } });
          let inArray = [];
          let outArray = [];
          inArray = data.docs.map((elm) => elm.in);
          outArray = data.docs.map((elm) => elm.out);
          const timeArray = data.docs.map((elm) => `${new Date(elm.time).toLocaleString()}`);

          this.apexDashboard.series[0] = { name: 'In', data: inArray };
          this.apexDashboard.series[1] = { name: 'Out', data: outArray };
          this.apexDashboard.options.xaxis.categories = timeArray;
          const red = (val1, val2) => parseInt(val1) + parseInt(val2);
          this.totalIn = inArray.reduce(red);
          this.totalOut = outArray.reduce(red);
          this.show = true;
        }catch(e){
          // eslint-disable-next-line no-console
          console.log(e);
        }

      },
      async fetchData(){
        const nowTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const hourTime = new Date(new Date() -    1 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ');
        const dayTime = new Date(new Date() - 1 * 24 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ');
        const weekTime = new Date(new Date() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ');
        try{
          const { data:all } = await API.get('/events/quick');
          const { data:hour } = await API.get('/events/quick', { params: { endDate: nowTime, startDate: hourTime } });
          const { data:day } = await API.get('/events/quick', { params: { endDate: nowTime, startDate: dayTime } });
          const { data:week } = await API.get('/events/quick', { params: { endDate: nowTime, startDate: weekTime } });
          this.all = all;
          this.day = day;
          this.week = week;
          this.hour = hour;
        }catch(e){
          // eslint-disable-next-line no-console
          console.log(e);
        }
      },
      addZero(i) {
        if (i < 10) {
          i = '0' + i;
        }
        return i;
      },
    },
  };
</script>
<style scoped>
.in {
  color: #7366ff;
}
.out {
  color: #f73164;
}
.switch:hover{
  cursor: pointer;
}
</style>
