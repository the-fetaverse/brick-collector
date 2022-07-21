import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LegoSet } from 'src/app/model/legoSet';
import { LegoSetService } from 'src/app/service/lego-set.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { AjaxService } from 'src/app/service/ajax.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  setDetail!: FormGroup;
  setObj: LegoSet = new LegoSet();
  legoSetList: LegoSet[] = [];
  iconEdit = faEdit;
  iconDelete = faTrash;
  isAlert: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private legoService: LegoSetService,
    private ajaxService: AjaxService
  ) {}

  ngOnInit(): void {
    this.getAllSets();

    this.setDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      year: [''],
      theme: [''],
    });
  }

  addSet() {
    this.setObj.name = this.setDetail.value.name;
    this.setObj.year = this.setDetail.value.year;
    this.setObj.theme = this.setDetail.value.theme;

    this.legoService.addSet(this.setObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllSets();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllSets() {
    this.legoService.getAllSets().subscribe(
      (res) => {
        this.legoSetList = res;
      },
      (err) => {
        console.log('error while fetching data.');
      }
    );
  }

  editSet(set: LegoSet) {
    this.setDetail.controls['id'].setValue(set.id);
    this.setDetail.controls['name'].setValue(set.name);
    this.setDetail.controls['year'].setValue(set.year);
    this.setDetail.controls['theme'].setValue(set.theme);
  }

  updateSet() {
    this.setObj.id = this.setDetail.value.id;
    this.setObj.name = this.setDetail.value.name;
    this.setObj.year = this.setDetail.value.year;
    this.setObj.theme = this.setDetail.value.theme;

    this.legoService.updateSet(this.setObj).subscribe(
      (res) => {
        console.log(res);
        this.isAlert = true;
        this.getAllSets();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteSet(set: LegoSet) {
    this.legoService.deleteSet(set).subscribe(
      (res) => {
        console.log(res);
        this.isAlert = true;
        this.getAllSets();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchSet() {
    this.setObj.name = this.setDetail.value.name;
    this.ajaxService
      .searchAPI(this.setObj)
      .subscribe((res) => console.log(res));
  }
}
