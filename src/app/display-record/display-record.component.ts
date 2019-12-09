import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import * as socketIo from 'socket.io-client';
import { DataCollectorService } from '../services/data-collector.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.scss']
})
export class RecordComponent implements OnInit {

  object; controls: FormArray;
  serverURL = environment.serverURL;
  constructor(private appService: DataCollectorService) { }
  ngOnInit() {
    socketIo(this.serverURL).on('dataRefresh', (dt) => {
      this.appService.getData().subscribe(data => { this.object = data });
    });
    this.appService.getData().subscribe(data => { this.object = data });
  }
  deleteRecord(id) {
    this.appService._deleteRecord(id).subscribe(data => {
      alert("Record Deleted !!");
    });
  }
  editRecord(id, rec) {
    this.appService._editRecord(id, rec).subscribe(data => {
    });
  }
  addGST(id, rec) {
    this.appService.recordGST(id, rec).subscribe(data => {
    });
  }

}
