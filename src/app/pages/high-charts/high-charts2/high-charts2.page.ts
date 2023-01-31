import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import * as HighCharts from 'highcharts';


More(Highcharts);
@Component({
  selector: 'app-high-charts2',
  templateUrl: './high-charts2.page.html',
  styleUrls: ['./high-charts2.page.scss'],
})
export class HighCharts2Page {

  desibel: any = 0;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.desibel = 50;
    this.pieChartBrowser();
  }


  ionViewDidLoad() {
  }



  pieChartBrowser() {
    HighCharts.chart('gauge', {
      credits: {
        enabled: false
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'gauge'
      },
      title: {
        text: 'Anlık Desibel Değeri'
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#333']
            ]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#333'],
              [1, '#FFF']
            ]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {
          // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 80,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: 'Desibel'
        },
        plotBands: [{
          from: 0,
          to: 30,
          color: '#55BF3B' // green
        }, {
          from: 30,
          to: 50,
          color: '#DDDF0D' // yellow
        }, {
          from: 50,
          to: 60,
          color: '#df5e0d' // red
        }, {
          from: 60,
          to: 70,
          color: '#DF5353' // red
        }, {
          from: 70,
          to: 80,
          color: '#ff0000' // red
        }]
      },

      series: [{
        name: 'Speed',
        data: [this.desibel],
        tooltip: {
          valueSuffix: ' km/h'
        }
      }]
    },
      // Add some life
      function (chart) {
        if (!chart.renderer.forExport) {
          setInterval(function () {
            var point = chart.series[0].points[0],
              newVal,
              inc = Math.round((Math.random() - 0.5) * 20);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 80) {
              newVal = point.y - inc;
            }

            point.update(newVal);

          }, 3000);
        }
      })

  }


}
