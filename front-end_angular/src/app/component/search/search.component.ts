import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LegoSet } from 'src/app/model/legoSet';
import { LegoSetService } from 'src/app/service/lego-set.service';
import { AjaxService } from 'src/app/service/ajax.service';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchDetail!: FormGroup;
  setObj: LegoSet = new LegoSet();
  setList: LegoSet[] = [];
  iconSave = faSave;

  constructor(
    private formBuilder: FormBuilder,
    private legoService: LegoSetService,
    private ajaxService: AjaxService
  ) {}

  ngOnInit(): void {
    this.searchDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      year: [''],
      theme: [''],
    });
  }

  searchSet() {
    const string = (this.setObj.name = this.searchDetail.value.name);
    console.log(string);
    // this.ajaxService.searchAPI(string).subscribe((res) => console.log(res));
  }

  // saveSet(set: LegoSet) {
  //   console.log(set);
  //   return set;
  // }
}
