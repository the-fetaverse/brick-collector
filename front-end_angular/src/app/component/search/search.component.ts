import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LegoSet } from 'src/app/model/legoSet';
import { AjaxService } from 'src/app/service/ajax.service';
import { LegoSetService } from 'src/app/service/lego-set.service';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchDetail!: FormGroup;
  setObj: LegoSet = new LegoSet();
  codeList: string[] = [];
  imgList: string = '';
  iconSave = faSave;
  isAlert: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private ajaxService: AjaxService,
    private legoService: LegoSetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      year: [''],
      num_parts: [''],
      code: [''],
    });
  }

  searchSet() {
    this.setObj.name = this.searchDetail.value.name;
    if (this.setObj.name.length === 0) {
      this.setObj.name = '';
      this.isAlert = true;
    }
    this.ajaxService.searchAPI(this.setObj).subscribe((res) => {
      if (res.length === 0) {
        this.setObj.name = '';
        this.isAlert = true;
      }
      res.map((item) => {
        this.codeList.push(item.code);
        this.setObj.name = item.name;
        this.setObj.year = item.year;
        this.setObj.num_parts = item.num_parts;
        this.getImages();
        console.log(this.setObj);
      });
    });
  }

  getImages() {
    this.ajaxService.getImg(this.codeList[0]).subscribe((res) => {
      this.setObj.img = res.set_img_url;
    });
  }

  addSet() {
    this.legoService.addSet(this.setObj).subscribe(
      (res) => {
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
