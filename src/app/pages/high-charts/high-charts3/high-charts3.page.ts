import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import * as HighCharts from 'highcharts';


@Component({
  selector: 'app-high-charts3',
  templateUrl: './high-charts3.page.html',
  styleUrls: ['./high-charts3.page.scss'],
})
export class HighCharts3Page {
  desibel: any = 0;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.desibel = 50;
    this.gaugeChartBrowser();
  }

  ionViewDidLoad() {
    this.gaugeChartBrowser();

  }

  gaugeChartBrowser() {
    HighCharts.chart('container', {
      credits: {
        enabled: false
      },
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '80%'
      },
    
      title: {
        text: 'Anlık Desibel Değeri'
      },
    
      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '110%'
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
          valueSuffix: ' dB'
        },
        dataLabels: {
          format: '{y} dB',
          borderWidth: 0,
          color: (
            Highcharts.defaultOptions.title &&
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || '#333333',
          style: {
            fontSize: '16px'
          }
        },
        dial: {
          radius: '80%',
          backgroundColor: 'gray',
          baseWidth: 12,
          baseLength: '0%',
          rearLength: '0%'
        },
        pivot: {
          backgroundColor: 'gray',
          radius: 6
        }
    
      }]
    
    });
    
    // Add some life
    setInterval(() => {
      const chart = Highcharts.charts[0];
      if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0],
          inc = Math.round((Math.random() - 0.5) * 20);
    
        let newVal = point.y + inc;
        if (newVal < 0 || newVal > 200) {
          newVal = point.y - inc;
        }
    
        point.update(newVal);
      }
    
    }, 3000);
  }

}
