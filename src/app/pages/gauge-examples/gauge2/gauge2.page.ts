import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge2',
  templateUrl: './gauge2.page.html',
  styleUrls: ['./gauge2.page.scss'],
})
export class Gauge2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  test() {
    
  // Make sure the gauges have correct height on initial load

  // And make sure the height is re-calculated on window resize


  var settings = {
    gaugeMinValue: 0,
    gaugeMaxValue: 8000,
    gaugeStartValue: 3000,
    gaugeStartAngle: -160,
    gaugeEndAngle: 160,
    gaugeUpdateInterval: 500 // ms
  };

  var options = {
    tooltip: {
      enabled: false
    },
    chart: {
      type: 'gauge',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      spacing: [5, 30, 5, 30],
      style: {
        fontSize: '1em'
      }
    },

    title: false,

    pane: {
      startAngle: settings.gaugeStartAngle,
      endAngle: settings.gaugeEndAngle
    },

    plotOptions: {
      gauge: {
        dial: {
          radius: 0
        },
        pivot: {
          radius: 0
        },
        dataLabels: {
          borderWidth: 0,
          padding: 0,
          verticalAlign: 'middle',
          style: false,
          formatter: function() {
            var output = '<div class="gauge-data">';
            output += '<span class="gauge-value">' + this.y + '</span>';
            output += '<span class="gauge-text">Engine LOAD</span>';
            output += '<span class="gauge-unit">KW</span>';
            output += '</div>';

            return output;
          },
          useHTML: true
        }
      },
      pie: {
        dataLabels: {
          enabled: true,
          distance: -10,
          style: false
        },
        startAngle: settings.gaugeStartAngle,
        endAngle: settings.gaugeEndAngle,
        center: ['50%', '50%'],
        states: {
          hover: {
            enabled: false
          }
        }
      }
    },

    // the value axis
    yAxis: {
      offset: 0,
      min: settings.gaugeMinValue,
      max: settings.gaugeMaxValue,

      title: false,

      minorTickWidth: 0,

      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'outside',
      tickLength: 14,
      tickColor: '#ccc',
      lineColor: '#ccc',
      labels: {
        distance: 28,
        rotation: "0",
        step: 2,
      },

      plotBands: [{
        thickness: 10,
        outerRadius: "112%",
        from: 0,
        to: 2500,
        color: '#FB8585' // red
      }, {
        thickness: 10,
        outerRadius: "112%",
        from: 2500,
        to: 5500,
        color: '#F9E7AE' // yellow,
      }, {
        thickness: 10,
        outerRadius: "112%",
        from: 5500,
        to: 8000,
        color: '#83DAD9' // green
      }]
    },

    series: [{
      type: 'gauge',
      data: [settings.gaugeStartValue],
    }, {
      type: 'pie',
      innerSize: '87%',
      data: [{
        y: settings.gaugeStartValue,
        name: "",
        color: "#0bbeba"
      }, {
        y: settings.gaugeMaxValue - settings.gaugeStartValue,
        name: '',
        color: "#666666"
      }]
    }],

    navigation: {
      buttonOptions: {
        enabled: false
      }
    },

    credits: false
  };


  function buildGraph(chart) {
    if (!chart.renderer.forExport) {
      setInterval(function() {
        var gaugePoint = chart.series[0].points[0],
          piePoint = chart.series[1],
          newVal,
          inc = Math.round((Math.random() - 0.5) * 1500);

        newVal = gaugePoint.y + inc;
        if (newVal < settings.gaugeMinValue || newVal > settings.gaugeMaxValue) {
          newVal = gaugePoint.y - inc;
        }

        // Update number gauge value
        gaugePoint.update(newVal);

        // Update pie with current value
        piePoint.points[0].update(newVal);
        piePoint.points[1].update(settings.gaugeMaxValue - newVal);

      }, settings.gaugeUpdateInterval);
    }
  }
  }
}
