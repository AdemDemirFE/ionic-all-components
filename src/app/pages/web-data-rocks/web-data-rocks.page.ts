import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { WebdatarocksComponent } from 'ng-webdatarocks';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-web-data-rocks',
  templateUrl: './web-data-rocks.page.html',
  styleUrls: ['./web-data-rocks.page.scss'],
})
export class WebDataRocksPage implements OnInit {

  dataList: any[] = [];
  baslangicZamani: any = moment(new Date(), 'MM/YYYY').format();
  @ViewChild('pivot1') child: WebdatarocksComponent;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public translate: TranslateService,
    public http: HttpClient,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  onPivotReady(pivot: WebDataRocks.Pivot): void {
    console.log('[ready] WebdatarocksPivotModule', this.child);
  }
  changeDate(event) {
    if (event != undefined && event != null) {
      let secDate = event?.detail?.value
      this.veriListele(secDate);
    }
  }
  veriListele(secDate) {
  }

  onCustomizeCell(
    cell: WebDataRocks.CellBuilder,
    data: WebDataRocks.CellData
  ): void {
    try {


      if (data.isClassicTotalRow) {
        cell.style["color"] = "white";
        cell.style["background-color"] = "gray";
      }
      if (data.isGrandTotalRow) { cell.style["background-color"] = "gray"; cell.style["color"] = "white"; }
      if (data.isGrandTotalColumn) { cell.style["color"] = "green"; }
      if (data.type == "value" && !data.isTotal) {
        if (data.measure != null)
          if (data.measure["uniqueName"] === "durum") {
            if (parseInt(cell.text) < 1) {
              cell.style["font-weight"] = "bold";
              cell.style["color"] = "red";
            }

          }
      }

      if (data?.hierarchy?.uniqueName == "merkez") {
        cell.style["background-color"] = "gray";
        cell.style["color"] = "white";
      }


    } catch {

    }
  }
  tamEkranGoster() {
    try {
      let tet: any = document.getElementById("wdr-tab-fullscreen").lastElementChild;
      tet.click();
    } catch (error) {

    }


  }

  visibleToolbar() {
    if (document.getElementById("wdr-tab-format") != null) {
      document.getElementById("wdr-tab-format").remove();
      document.getElementById("wdr-tab-save").remove();
      document.getElementById("wdr-tab-options").remove();
      document.getElementById("wdr-tab-connect").remove();
      document.getElementById("wdr-tab-open").remove();
      document.getElementById("wdr-tab-fields").remove();
      document.getElementById("wdr-tab-save").remove();

      document.getElementById("wdr-tab-fullscreen").style.visibility = "visible";
    } else {
      document.getElementById("wdr-tab-connect-remote-csv").remove();
      document.getElementById("wdr-tab-connect-remote-json").remove();
      document.getElementById("wdr-tab-open-remote-report").remove();
      document.getElementById("wdr-tab-options").remove();
      document.getElementById("wdr-tab-fields").remove();
      document.getElementById("wdr-toolbar-group-right").remove();
      document.getElementById("wdr-tab-format-conditional").remove();

    }


  }
  onReportComplete(): void {
    this.child.toolbar = false;
    this.child.webDataRocks.off('reportcomplete');
    this.child.webDataRocks.setReport({
      localization: "./assets/i18n/tr.json",

      dataSource: {
        data: this.dataList
      },
      slice: {
        "rows": [
          {
            "caption": "AY",
            "uniqueName": "ay",
            "filter": {
              "negation": true
            }
          },
          {
            "caption": "MERKEZ",
            "uniqueName": "merkez",
            "filter": {
              "negation": true
            }
          },
          {
            "caption": "HASTA",
            "uniqueName": "hasta",
            "filter": {
              "negation": true
            }
          },
          {
            "caption": "Başlama Tarihi",
            "uniqueName": "tedaviBaslangicTarihi",
            "filter": {
              "negation": true
            }
          },
          {
            "caption": "Sosya Yardım Alıyor",
            "uniqueName": "sosyalYardimAliyor",
            "filter": {
              "negation": true
            }
          }
        ],
        "columns": [
          {
            "caption": "GUN",
            "uniqueName": "gun",
            "filter": {
              "negation": true
            }
          }

        ],
        "measures": [
          {
            "uniqueName": "durum",
            "aggregation": "durum",
            "caption": "Durum"
          }
        ],
        "expands": {
          "expandAll": true
        }
      },
      tableSizes: {
        columns: [
          {
            idx: 0,
            width: 90
          },
          {
            idx: 1,
            width: 100
          },
          {
            idx: 2,
            width: 170
          },
          {
            idx: 3,
            width: 100
          },
          {
            idx: 4,
            width: 70
          },
          {
            tuple: [
              "gun.31"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.30"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.29"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.28"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.27"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.26"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.25"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.24"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.23"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.22"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.21"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.20"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.19"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.18"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.17"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.16"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.15"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.14"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.13"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.12"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.11"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.10"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.9"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.8"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.7"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.6"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.5"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.4"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.3"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.2"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [
              "gun.1"
            ],
            measure: "durum",
            width: 20
          },
          {
            tuple: [],
            measure: "durum",
            width: 20
          }

        ]
      },
      options: {

        defaultHierarchySortName: "asc",
        grid: {
          type: "classic",
          showTotals: "off"
        },
        showAggregations: false,
        drillThrough: false,
        showAggregationLabels: false
      },

      formats: [
        {

          nullValue: "-",
          textAlign: "center",

        }
      ]
    }
    );
    setTimeout(() => {
      this.visibleToolbar()
    }, 100);
  }

}
