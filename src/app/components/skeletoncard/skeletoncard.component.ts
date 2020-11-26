import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeletoncard',
  templateUrl: './skeletoncard.component.html',
  styleUrls: ['./skeletoncard.component.css']
})
export class SkeletoncardComponent implements OnInit {

  @Input('source') source: string;
  @Input('tipo') tipo: string;
  @Input('urlimg') urlimg: string;
  @Input('titulo') titulo: string;
  @Input('descripcion') descripcion: string;
  @Input('loading') loading: boolean;
  constructor() { }

  ngOnInit() {
  }

}
