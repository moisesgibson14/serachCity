import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  public cities : any 
  ngOnInit(){
      this.getData()
  }
  getData(){
    let temCities = []
    fetch('https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json')
    .then(data => data.json())
    .then(cities => { 
      cities.forEach(cities => {
        temCities.push(cities.name)
      });
      this.cities = temCities
     }).catch(error =>{
      console.log(error);
     })
  }
}
