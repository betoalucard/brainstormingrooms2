import { Component, OnInit } from '@angular/core';
function remove(item: string, list: string[]) {
  if (list.indexOf(item) !== -1) {
    list.splice(list.indexOf(item), 1);
  }
}

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  availableBoxes = [
    'Box 1',
    'Box 2',
    'Box 3',
    'Box 4',
    'Box 5',
    'Box 6',
    'Box 7',
    'Box 8',
    'Box 9',
    'Box 10',
    'diuashdiasdbnklasbndklhiausdhliasuhdauishdailusdhasuihxiaushxpiasbuxilausxoaibuxliausbxlaisbuxiaslbu'
  ];

  dropzone1 = [
    'Box 6'
  ];

  dropzone2 = [
    'Box 7'
  ];

  currentBox?: string;

  move(box: string, toList: string[]): void {
    remove(box, this.availableBoxes);
    remove(box, this.dropzone1);
    remove(box, this.dropzone2);

    toList.push(box);
  }

  Add(name: string): void{
    this.availableBoxes.push(name);
  }

}
