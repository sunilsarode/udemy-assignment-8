import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year;
  month;
  constructor(private route: ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
       this.year=params.get('year')
       this.month=params.get('month');
       //console.log(params.get('year'))
    })
  }

  getArchives(){
    this.router.navigate(['/'])
  }

}
